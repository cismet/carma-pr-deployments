import{g as $u,c as Yn}from"./index-f9CH5uyH.js";import{V as No,Q as Jp,M as ai}from"./three.module-DONvljao.js";import{b as Xu}from"./geodetic-BSEHKtgU.js";import{n as e_}from"./negative-pi-to-pi-B-FiLZ9M.js";import{P as Zu,b as t_,T as Do}from"./pi-Z4p6FqIV.js";import{c as Vi}from"./clamp-co6UzHBn.js";function l(e){return e!=null}function w(e){this.name="DeveloperError",this.message=e;let t;try{throw new Error}catch(n){t=n.stack}this.stack=t}l(Object.create)&&(w.prototype=Object.create(Error.prototype),w.prototype.constructor=w);w.prototype.toString=function(){let e=`${this.name}: ${this.message}`;return l(this.stack)&&(e+=`
${this.stack.toString()}`),e};w.throwInstantiationError=function(){throw new w("This function defines an interface and should not be called directly.")};const p={};p.typeOf={};function n_(e){return`${e} is required, actual value was undefined`}function Hi(e,t,n){return`Expected ${n} to be typeof ${t}, actual typeof was ${e}`}p.defined=function(e,t){if(!l(t))throw new w(n_(e))};p.typeOf.func=function(e,t){if(typeof t!="function")throw new w(Hi(typeof t,"function",e))};p.typeOf.string=function(e,t){if(typeof t!="string")throw new w(Hi(typeof t,"string",e))};p.typeOf.number=function(e,t){if(typeof t!="number")throw new w(Hi(typeof t,"number",e))};p.typeOf.number.lessThan=function(e,t,n){if(p.typeOf.number(e,t),t>=n)throw new w(`Expected ${e} to be less than ${n}, actual value was ${t}`)};p.typeOf.number.lessThanOrEquals=function(e,t,n){if(p.typeOf.number(e,t),t>n)throw new w(`Expected ${e} to be less than or equal to ${n}, actual value was ${t}`)};p.typeOf.number.greaterThan=function(e,t,n){if(p.typeOf.number(e,t),t<=n)throw new w(`Expected ${e} to be greater than ${n}, actual value was ${t}`)};p.typeOf.number.greaterThanOrEquals=function(e,t,n){if(p.typeOf.number(e,t),t<n)throw new w(`Expected ${e} to be greater than or equal to ${n}, actual value was ${t}`)};p.typeOf.object=function(e,t){if(typeof t!="object")throw new w(Hi(typeof t,"object",e))};p.typeOf.bool=function(e,t){if(typeof t!="boolean")throw new w(Hi(typeof t,"boolean",e))};p.typeOf.bigint=function(e,t){if(typeof t!="bigint")throw new w(Hi(typeof t,"bigint",e))};p.typeOf.number.equals=function(e,t,n,o){if(p.typeOf.number(e,n),p.typeOf.number(t,o),n!==o)throw new w(`${e} must be equal to ${t}, the actual values are ${n} and ${o}`)};var yo=function(e){e==null&&(e=new Date().getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,e.constructor==Array?this.init_by_array(e,e.length):this.init_seed(e)};yo.prototype.init_seed=function(e){for(this.mt[0]=e>>>0,this.mti=1;this.mti<this.N;this.mti++){var e=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(((e&4294901760)>>>16)*1812433253<<16)+(e&65535)*1812433253+this.mti,this.mt[this.mti]>>>=0}};yo.prototype.init_by_array=function(e,t){var n,o,i;for(this.init_seed(19650218),n=1,o=0,i=this.N>t?this.N:t;i;i--){var r=this.mt[n-1]^this.mt[n-1]>>>30;this.mt[n]=(this.mt[n]^(((r&4294901760)>>>16)*1664525<<16)+(r&65535)*1664525)+e[o]+o,this.mt[n]>>>=0,n++,o++,n>=this.N&&(this.mt[0]=this.mt[this.N-1],n=1),o>=t&&(o=0)}for(i=this.N-1;i;i--){var r=this.mt[n-1]^this.mt[n-1]>>>30;this.mt[n]=(this.mt[n]^(((r&4294901760)>>>16)*1566083941<<16)+(r&65535)*1566083941)-n,this.mt[n]>>>=0,n++,n>=this.N&&(this.mt[0]=this.mt[this.N-1],n=1)}this.mt[0]=2147483648};yo.prototype.random_int=function(){var e,t=new Array(0,this.MATRIX_A);if(this.mti>=this.N){var n;for(this.mti==this.N+1&&this.init_seed(5489),n=0;n<this.N-this.M;n++)e=this.mt[n]&this.UPPER_MASK|this.mt[n+1]&this.LOWER_MASK,this.mt[n]=this.mt[n+this.M]^e>>>1^t[e&1];for(;n<this.N-1;n++)e=this.mt[n]&this.UPPER_MASK|this.mt[n+1]&this.LOWER_MASK,this.mt[n]=this.mt[n+(this.M-this.N)]^e>>>1^t[e&1];e=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^e>>>1^t[e&1],this.mti=0}return e=this.mt[this.mti++],e^=e>>>11,e^=e<<7&2636928640,e^=e<<15&4022730752,e^=e>>>18,e>>>0};yo.prototype.random_int31=function(){return this.random_int()>>>1};yo.prototype.random_incl=function(){return this.random_int()*(1/4294967295)};yo.prototype.random=function(){return this.random_int()*(1/4294967296)};yo.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)};yo.prototype.random_long=function(){var e=this.random_int()>>>5,t=this.random_int()>>>6;return(e*67108864+t)*(1/9007199254740992)};var o_=yo;const Ku=$u(o_),T={};T.EPSILON1=.1;T.EPSILON2=.01;T.EPSILON3=.001;T.EPSILON4=1e-4;T.EPSILON5=1e-5;T.EPSILON6=1e-6;T.EPSILON7=1e-7;T.EPSILON8=1e-8;T.EPSILON9=1e-9;T.EPSILON10=1e-10;T.EPSILON11=1e-11;T.EPSILON12=1e-12;T.EPSILON13=1e-13;T.EPSILON14=1e-14;T.EPSILON15=1e-15;T.EPSILON16=1e-16;T.EPSILON17=1e-17;T.EPSILON18=1e-18;T.EPSILON19=1e-19;T.EPSILON20=1e-20;T.EPSILON21=1e-21;T.GRAVITATIONALPARAMETER=3986004418e5;T.SOLAR_RADIUS=6955e5;T.LUNAR_RADIUS=1737400;T.SIXTY_FOUR_KILOBYTES=64*1024;T.FOUR_GIGABYTES=4*1024*1024*1024;T.sign=Math.sign??function(t){return t=+t,t===0||t!==t?t:t>0?1:-1};T.signNotZero=function(e){return e<0?-1:1};T.toSNorm=function(e,t){return t=t??255,Math.round((T.clamp(e,-1,1)*.5+.5)*t)};T.fromSNorm=function(e,t){return t=t??255,T.clamp(e,0,t)/t*2-1};T.normalize=function(e,t,n){return n=Math.max(n-t,0),n===0?0:T.clamp((e-t)/n,0,1)};T.sinh=Math.sinh??function(t){return(Math.exp(t)-Math.exp(-t))/2};T.cosh=Math.cosh??function(t){return(Math.exp(t)+Math.exp(-t))/2};T.lerp=function(e,t,n){return(1-n)*e+n*t};T.PI=Math.PI;T.ONE_OVER_PI=1/Math.PI;T.PI_OVER_TWO=Math.PI/2;T.PI_OVER_THREE=Math.PI/3;T.PI_OVER_FOUR=Math.PI/4;T.PI_OVER_SIX=Math.PI/6;T.THREE_PI_OVER_TWO=3*Math.PI/2;T.TWO_PI=2*Math.PI;T.ONE_OVER_TWO_PI=1/(2*Math.PI);T.RADIANS_PER_DEGREE=Math.PI/180;T.DEGREES_PER_RADIAN=180/Math.PI;T.RADIANS_PER_ARCSECOND=T.RADIANS_PER_DEGREE/3600;T.toRadians=function(e){if(!l(e))throw new w("degrees is required.");return e*T.RADIANS_PER_DEGREE};T.toDegrees=function(e){if(!l(e))throw new w("radians is required.");return e*T.DEGREES_PER_RADIAN};T.convertLongitudeRange=function(e){if(!l(e))throw new w("angle is required.");const t=T.TWO_PI,n=e-Math.floor(e/t)*t;return n<-Math.PI?n+t:n>=Math.PI?n-t:n};T.clampToLatitudeRange=function(e){if(!l(e))throw new w("angle is required.");return T.clamp(e,-1*T.PI_OVER_TWO,T.PI_OVER_TWO)};T.negativePiToPi=function(e){if(!l(e))throw new w("angle is required.");return e>=-T.PI&&e<=T.PI?e:T.zeroToTwoPi(e+T.PI)-T.PI};T.zeroToTwoPi=function(e){if(!l(e))throw new w("angle is required.");if(e>=0&&e<=T.TWO_PI)return e;const t=T.mod(e,T.TWO_PI);return Math.abs(t)<T.EPSILON14&&Math.abs(e)>T.EPSILON14?T.TWO_PI:t};T.mod=function(e,t){if(!l(e))throw new w("m is required.");if(!l(t))throw new w("n is required.");if(t===0)throw new w("divisor cannot be 0.");return T.sign(e)===T.sign(t)&&Math.abs(e)<Math.abs(t)?e:(e%t+t)%t};T.equalsEpsilon=function(e,t,n,o){if(!l(e))throw new w("left is required.");if(!l(t))throw new w("right is required.");n=n??0,o=o??n;const i=Math.abs(e-t);return i<=o||i<=n*Math.max(Math.abs(e),Math.abs(t))};T.lessThan=function(e,t,n){if(!l(e))throw new w("first is required.");if(!l(t))throw new w("second is required.");if(!l(n))throw new w("absoluteEpsilon is required.");return e-t<-n};T.lessThanOrEquals=function(e,t,n){if(!l(e))throw new w("first is required.");if(!l(t))throw new w("second is required.");if(!l(n))throw new w("absoluteEpsilon is required.");return e-t<n};T.greaterThan=function(e,t,n){if(!l(e))throw new w("first is required.");if(!l(t))throw new w("second is required.");if(!l(n))throw new w("absoluteEpsilon is required.");return e-t>n};T.greaterThanOrEquals=function(e,t,n){if(!l(e))throw new w("first is required.");if(!l(t))throw new w("second is required.");if(!l(n))throw new w("absoluteEpsilon is required.");return e-t>-n};const na=[1];T.factorial=function(e){if(typeof e!="number"||e<0)throw new w("A number greater than or equal to 0 is required.");const t=na.length;if(e>=t){let n=na[t-1];for(let o=t;o<=e;o++){const i=n*o;na.push(i),n=i}}return na[e]};T.incrementWrap=function(e,t,n){if(n=n??0,!l(e))throw new w("n is required.");if(t<=n)throw new w("maximumValue must be greater than minimumValue.");return++e,e>t&&(e=n),e};T.isPowerOfTwo=function(e){if(typeof e!="number"||e<0||e>4294967295)throw new w("A number between 0 and (2^32)-1 is required.");return e!==0&&(e&e-1)===0};T.nextPowerOfTwo=function(e){if(typeof e!="number"||e<0||e>2147483648)throw new w("A number between 0 and 2^31 is required.");return--e,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,++e,e};T.previousPowerOfTwo=function(e){if(typeof e!="number"||e<0||e>4294967295)throw new w("A number between 0 and (2^32)-1 is required.");return e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e|=e>>32,e=(e>>>0)-(e>>>1),e};T.clamp=function(e,t,n){return p.typeOf.number("value",e),p.typeOf.number("min",t),p.typeOf.number("max",n),e<t?t:e>n?n:e};let Qu=new Ku;T.setRandomNumberSeed=function(e){if(!l(e))throw new w("seed is required.");Qu=new Ku(e)};T.nextRandomNumber=function(){return Qu.random()};T.randomBetween=function(e,t){return T.nextRandomNumber()*(t-e)+e};T.acosClamped=function(e){if(!l(e))throw new w("value is required.");return Math.acos(T.clamp(e,-1,1))};T.asinClamped=function(e){if(!l(e))throw new w("value is required.");return Math.asin(T.clamp(e,-1,1))};T.chordLength=function(e,t){if(!l(e))throw new w("angle is required.");if(!l(t))throw new w("radius is required.");return 2*t*Math.sin(e*.5)};T.logBase=function(e,t){if(!l(e))throw new w("number is required.");if(!l(t))throw new w("base is required.");return Math.log(e)/Math.log(t)};T.cbrt=Math.cbrt??function(t){const n=Math.pow(Math.abs(t),.3333333333333333);return t<0?-n:n};T.log2=Math.log2??function(t){return Math.log(t)*Math.LOG2E};T.fog=function(e,t){const n=e*t;return 1-Math.exp(-(n*n))};T.fastApproximateAtan=function(e){return p.typeOf.number("x",e),e*(-.1784*Math.abs(e)-.0663*e*e+1.0301)};T.fastApproximateAtan2=function(e,t){p.typeOf.number("x",e),p.typeOf.number("y",t);let n,o=Math.abs(e);n=Math.abs(t);const i=Math.max(o,n);n=Math.min(o,n);const r=n/i;if(isNaN(r))throw new w("either x or y must be nonzero");return o=T.fastApproximateAtan(r),o=Math.abs(t)>Math.abs(e)?T.PI_OVER_TWO-o:o,o=e<0?T.PI-o:o,o=t<0?-o:o,o};function h(e,t,n){this.x=e??0,this.y=t??0,this.z=n??0}h.fromSpherical=function(e,t){p.typeOf.object("spherical",e),l(t)||(t=new h);const n=e.clock,o=e.cone,i=e.magnitude??1,r=i*Math.sin(o);return t.x=r*Math.cos(n),t.y=r*Math.sin(n),t.z=i*Math.cos(o),t};h.fromElements=function(e,t,n,o){return l(o)?(o.x=e,o.y=t,o.z=n,o):new h(e,t,n)};h.clone=function(e,t){if(l(e))return l(t)?(t.x=e.x,t.y=e.y,t.z=e.z,t):new h(e.x,e.y,e.z)};h.fromCartesian4=h.clone;h.packedLength=3;h.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,t[n++]=e.x,t[n++]=e.y,t[n]=e.z,t};h.unpack=function(e,t,n){return p.defined("array",e),t=t??0,l(n)||(n=new h),n.x=e[t++],n.y=e[t++],n.z=e[t],n};h.packArray=function(e,t){p.defined("array",e);const n=e.length,o=n*3;if(!l(t))t=new Array(o);else{if(!Array.isArray(t)&&t.length!==o)throw new w("If result is a typed array, it must have exactly array.length * 3 elements");t.length!==o&&(t.length=o)}for(let i=0;i<n;++i)h.pack(e[i],t,i*3);return t};h.unpackArray=function(e,t){if(p.defined("array",e),p.typeOf.number.greaterThanOrEquals("array.length",e.length,3),e.length%3!==0)throw new w("array length must be a multiple of 3.");const n=e.length;l(t)?t.length=n/3:t=new Array(n/3);for(let o=0;o<n;o+=3){const i=o/3;t[i]=h.unpack(e,o,t[i])}return t};h.fromArray=h.unpack;h.maximumComponent=function(e){return p.typeOf.object("cartesian",e),Math.max(e.x,e.y,e.z)};h.minimumComponent=function(e){return p.typeOf.object("cartesian",e),Math.min(e.x,e.y,e.z)};h.minimumByComponent=function(e,t,n){return p.typeOf.object("first",e),p.typeOf.object("second",t),p.typeOf.object("result",n),n.x=Math.min(e.x,t.x),n.y=Math.min(e.y,t.y),n.z=Math.min(e.z,t.z),n};h.maximumByComponent=function(e,t,n){return p.typeOf.object("first",e),p.typeOf.object("second",t),p.typeOf.object("result",n),n.x=Math.max(e.x,t.x),n.y=Math.max(e.y,t.y),n.z=Math.max(e.z,t.z),n};h.clamp=function(e,t,n,o){p.typeOf.object("value",e),p.typeOf.object("min",t),p.typeOf.object("max",n),p.typeOf.object("result",o);const i=T.clamp(e.x,t.x,n.x),r=T.clamp(e.y,t.y,n.y),a=T.clamp(e.z,t.z,n.z);return o.x=i,o.y=r,o.z=a,o};h.magnitudeSquared=function(e){return p.typeOf.object("cartesian",e),e.x*e.x+e.y*e.y+e.z*e.z};h.magnitude=function(e){return Math.sqrt(h.magnitudeSquared(e))};const Ja=new h;h.distance=function(e,t){return p.typeOf.object("left",e),p.typeOf.object("right",t),h.subtract(e,t,Ja),h.magnitude(Ja)};h.distanceSquared=function(e,t){return p.typeOf.object("left",e),p.typeOf.object("right",t),h.subtract(e,t,Ja),h.magnitudeSquared(Ja)};h.normalize=function(e,t){p.typeOf.object("cartesian",e),p.typeOf.object("result",t);const n=h.magnitude(e);if(t.x=e.x/n,t.y=e.y/n,t.z=e.z/n,isNaN(t.x)||isNaN(t.y)||isNaN(t.z))throw new w("normalized result is not a number");return t};h.dot=function(e,t){return p.typeOf.object("left",e),p.typeOf.object("right",t),e.x*t.x+e.y*t.y+e.z*t.z};h.multiplyComponents=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x*t.x,n.y=e.y*t.y,n.z=e.z*t.z,n};h.divideComponents=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x/t.x,n.y=e.y/t.y,n.z=e.z/t.z,n};h.add=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x+t.x,n.y=e.y+t.y,n.z=e.z+t.z,n};h.subtract=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x-t.x,n.y=e.y-t.y,n.z=e.z-t.z,n};h.multiplyByScalar=function(e,t,n){return p.typeOf.object("cartesian",e),p.typeOf.number("scalar",t),p.typeOf.object("result",n),n.x=e.x*t,n.y=e.y*t,n.z=e.z*t,n};h.divideByScalar=function(e,t,n){return p.typeOf.object("cartesian",e),p.typeOf.number("scalar",t),p.typeOf.object("result",n),n.x=e.x/t,n.y=e.y/t,n.z=e.z/t,n};h.negate=function(e,t){return p.typeOf.object("cartesian",e),p.typeOf.object("result",t),t.x=-e.x,t.y=-e.y,t.z=-e.z,t};h.abs=function(e,t){return p.typeOf.object("cartesian",e),p.typeOf.object("result",t),t.x=Math.abs(e.x),t.y=Math.abs(e.y),t.z=Math.abs(e.z),t};const zh=new h;h.lerp=function(e,t,n,o){return p.typeOf.object("start",e),p.typeOf.object("end",t),p.typeOf.number("t",n),p.typeOf.object("result",o),h.multiplyByScalar(t,n,zh),o=h.multiplyByScalar(e,1-n,o),h.add(zh,o,o)};const oa=new h,Bs=new h;h.angleBetween=function(e,t){p.typeOf.object("left",e),p.typeOf.object("right",t),h.normalize(e,oa),h.normalize(t,Bs);const n=h.dot(oa,Bs),o=h.magnitude(h.cross(oa,Bs,oa));return Math.atan2(o,n)};const i_=new h;h.mostOrthogonalAxis=function(e,t){p.typeOf.object("cartesian",e),p.typeOf.object("result",t);const n=h.normalize(e,i_);return h.abs(n,n),n.x<=n.y?n.x<=n.z?t=h.clone(h.UNIT_X,t):t=h.clone(h.UNIT_Z,t):n.y<=n.z?t=h.clone(h.UNIT_Y,t):t=h.clone(h.UNIT_Z,t),t};h.projectVector=function(e,t,n){p.defined("a",e),p.defined("b",t),p.defined("result",n);const o=h.dot(e,t)/h.dot(t,t);return h.multiplyByScalar(t,o,n)};h.equals=function(e,t){return e===t||l(e)&&l(t)&&e.x===t.x&&e.y===t.y&&e.z===t.z};h.equalsArray=function(e,t,n){return e.x===t[n]&&e.y===t[n+1]&&e.z===t[n+2]};h.equalsEpsilon=function(e,t,n,o){return e===t||l(e)&&l(t)&&T.equalsEpsilon(e.x,t.x,n,o)&&T.equalsEpsilon(e.y,t.y,n,o)&&T.equalsEpsilon(e.z,t.z,n,o)};h.cross=function(e,t,n){p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n);const o=e.x,i=e.y,r=e.z,a=t.x,s=t.y,c=t.z,f=i*c-r*s,d=r*a-o*c,u=o*s-i*a;return n.x=f,n.y=d,n.z=u,n};h.midpoint=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=(e.x+t.x)*.5,n.y=(e.y+t.y)*.5,n.z=(e.z+t.z)*.5,n};h.fromDegrees=function(e,t,n,o,i){return p.typeOf.number("longitude",e),p.typeOf.number("latitude",t),e=T.toRadians(e),t=T.toRadians(t),h.fromRadians(e,t,n,o,i)};let yn=new h,hi=new h;h._ellipsoidRadiiSquared=new h(6378137*6378137,6378137*6378137,6356752314245179e-9*6356752314245179e-9);h.fromRadians=function(e,t,n,o,i){p.typeOf.number("longitude",e),p.typeOf.number("latitude",t),n=n??0;const r=l(o)?o.radiiSquared:h._ellipsoidRadiiSquared,a=Math.cos(t);yn.x=a*Math.cos(e),yn.y=a*Math.sin(e),yn.z=Math.sin(t),yn=h.normalize(yn,yn),h.multiplyComponents(r,yn,hi);const s=Math.sqrt(h.dot(yn,hi));return hi=h.divideByScalar(hi,s,hi),yn=h.multiplyByScalar(yn,n,yn),l(i)||(i=new h),h.add(hi,yn,i)};h.fromDegreesArray=function(e,t,n){if(p.defined("coordinates",e),e.length<2||e.length%2!==0)throw new w("the number of coordinates must be a multiple of 2 and at least 2");const o=e.length;l(n)?n.length=o/2:n=new Array(o/2);for(let i=0;i<o;i+=2){const r=e[i],a=e[i+1],s=i/2;n[s]=h.fromDegrees(r,a,0,t,n[s])}return n};h.fromRadiansArray=function(e,t,n){if(p.defined("coordinates",e),e.length<2||e.length%2!==0)throw new w("the number of coordinates must be a multiple of 2 and at least 2");const o=e.length;l(n)?n.length=o/2:n=new Array(o/2);for(let i=0;i<o;i+=2){const r=e[i],a=e[i+1],s=i/2;n[s]=h.fromRadians(r,a,0,t,n[s])}return n};h.fromDegreesArrayHeights=function(e,t,n){if(p.defined("coordinates",e),e.length<3||e.length%3!==0)throw new w("the number of coordinates must be a multiple of 3 and at least 3");const o=e.length;l(n)?n.length=o/3:n=new Array(o/3);for(let i=0;i<o;i+=3){const r=e[i],a=e[i+1],s=e[i+2],c=i/3;n[c]=h.fromDegrees(r,a,s,t,n[c])}return n};h.fromRadiansArrayHeights=function(e,t,n){if(p.defined("coordinates",e),e.length<3||e.length%3!==0)throw new w("the number of coordinates must be a multiple of 3 and at least 3");const o=e.length;l(n)?n.length=o/3:n=new Array(o/3);for(let i=0;i<o;i+=3){const r=e[i],a=e[i+1],s=e[i+2],c=i/3;n[c]=h.fromRadians(r,a,s,t,n[c])}return n};h.ZERO=Object.freeze(new h(0,0,0));h.ONE=Object.freeze(new h(1,1,1));h.UNIT_X=Object.freeze(new h(1,0,0));h.UNIT_Y=Object.freeze(new h(0,1,0));h.UNIT_Z=Object.freeze(new h(0,0,1));h.prototype.clone=function(e){return h.clone(this,e)};h.prototype.equals=function(e){return h.equals(this,e)};h.prototype.equalsEpsilon=function(e,t,n){return h.equalsEpsilon(this,e,t,n)};h.prototype.toString=function(){return`(${this.x}, ${this.y}, ${this.z})`};const r_=new h,a_=new h;function Ju(e,t,n,o,i){if(!l(e))throw new w("cartesian is required.");if(!l(t))throw new w("oneOverRadii is required.");if(!l(n))throw new w("oneOverRadiiSquared is required.");if(!l(o))throw new w("centerToleranceSquared is required.");const r=e.x,a=e.y,s=e.z,c=t.x,f=t.y,d=t.z,u=r*r*c*c,m=a*a*f*f,_=s*s*d*d,g=u+m+_,y=Math.sqrt(1/g),E=h.multiplyByScalar(e,y,r_);if(g<o)return isFinite(y)?h.clone(E,i):void 0;const A=n.x,S=n.y,O=n.z,M=a_;M.x=E.x*A*2,M.y=E.y*S*2,M.z=E.z*O*2;let R=(1-y)*h.magnitude(e)/(.5*h.magnitude(M)),N=0,F,z,G,q,k,X,b,v,C,D,H;do{R-=N,G=1/(1+R*A),q=1/(1+R*S),k=1/(1+R*O),X=G*G,b=q*q,v=k*k,C=X*G,D=b*q,H=v*k,F=u*X+m*b+_*v-1,z=u*C*A+m*D*S+_*H*O;const Z=-2*z;N=F/Z}while(Math.abs(F)>T.EPSILON12);return l(i)?(i.x=r*G,i.y=a*q,i.z=s*k,i):new h(r*G,a*q,s*k)}function le(e,t,n){this.longitude=e??0,this.latitude=t??0,this.height=n??0}le.fromRadians=function(e,t,n,o){return p.typeOf.number("longitude",e),p.typeOf.number("latitude",t),n=n??0,l(o)?(o.longitude=e,o.latitude=t,o.height=n,o):new le(e,t,n)};le.fromDegrees=function(e,t,n,o){return p.typeOf.number("longitude",e),p.typeOf.number("latitude",t),e=T.toRadians(e),t=T.toRadians(t),le.fromRadians(e,t,n,o)};const s_=new h,c_=new h,f_=new h;le._ellipsoidOneOverRadii=new h(1/6378137,1/6378137,1/6356752314245179e-9);le._ellipsoidOneOverRadiiSquared=new h(1/(6378137*6378137),1/(6378137*6378137),1/(6356752314245179e-9*6356752314245179e-9));le._ellipsoidCenterToleranceSquared=T.EPSILON1;le.fromCartesian=function(e,t,n){const o=l(t)?t.oneOverRadii:le._ellipsoidOneOverRadii,i=l(t)?t.oneOverRadiiSquared:le._ellipsoidOneOverRadiiSquared,r=l(t)?t._centerToleranceSquared:le._ellipsoidCenterToleranceSquared,a=Ju(e,o,i,r,c_);if(!l(a))return;let s=h.multiplyComponents(a,i,s_);s=h.normalize(s,s);const c=h.subtract(e,a,f_),f=Math.atan2(s.y,s.x),d=Math.asin(s.z),u=T.sign(h.dot(c,e))*h.magnitude(c);return l(n)?(n.longitude=f,n.latitude=d,n.height=u,n):new le(f,d,u)};le.toCartesian=function(e,t,n){return p.defined("cartographic",e),h.fromRadians(e.longitude,e.latitude,e.height,t,n)};le.clone=function(e,t){if(l(e))return l(t)?(t.longitude=e.longitude,t.latitude=e.latitude,t.height=e.height,t):new le(e.longitude,e.latitude,e.height)};le.equals=function(e,t){return e===t||l(e)&&l(t)&&e.longitude===t.longitude&&e.latitude===t.latitude&&e.height===t.height};le.equalsEpsilon=function(e,t,n){return n=n??0,e===t||l(e)&&l(t)&&Math.abs(e.longitude-t.longitude)<=n&&Math.abs(e.latitude-t.latitude)<=n&&Math.abs(e.height-t.height)<=n};le.ZERO=Object.freeze(new le(0,0,0));le.prototype.clone=function(e){return le.clone(this,e)};le.prototype.equals=function(e){return le.equals(this,e)};le.prototype.equalsEpsilon=function(e,t){return le.equalsEpsilon(this,e,t)};le.prototype.toString=function(){return`(${this.longitude}, ${this.latitude}, ${this.height})`};function V(e,t){this.x=e??0,this.y=t??0}V.fromElements=function(e,t,n){return l(n)?(n.x=e,n.y=t,n):new V(e,t)};V.clone=function(e,t){if(l(e))return l(t)?(t.x=e.x,t.y=e.y,t):new V(e.x,e.y)};V.fromCartesian3=V.clone;V.fromCartesian4=V.clone;V.packedLength=2;V.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,t[n++]=e.x,t[n]=e.y,t};V.unpack=function(e,t,n){return p.defined("array",e),t=t??0,l(n)||(n=new V),n.x=e[t++],n.y=e[t],n};V.packArray=function(e,t){p.defined("array",e);const n=e.length,o=n*2;if(!l(t))t=new Array(o);else{if(!Array.isArray(t)&&t.length!==o)throw new w("If result is a typed array, it must have exactly array.length * 2 elements");t.length!==o&&(t.length=o)}for(let i=0;i<n;++i)V.pack(e[i],t,i*2);return t};V.unpackArray=function(e,t){if(p.defined("array",e),p.typeOf.number.greaterThanOrEquals("array.length",e.length,2),e.length%2!==0)throw new w("array length must be a multiple of 2.");const n=e.length;l(t)?t.length=n/2:t=new Array(n/2);for(let o=0;o<n;o+=2){const i=o/2;t[i]=V.unpack(e,o,t[i])}return t};V.fromArray=V.unpack;V.maximumComponent=function(e){return p.typeOf.object("cartesian",e),Math.max(e.x,e.y)};V.minimumComponent=function(e){return p.typeOf.object("cartesian",e),Math.min(e.x,e.y)};V.minimumByComponent=function(e,t,n){return p.typeOf.object("first",e),p.typeOf.object("second",t),p.typeOf.object("result",n),n.x=Math.min(e.x,t.x),n.y=Math.min(e.y,t.y),n};V.maximumByComponent=function(e,t,n){return p.typeOf.object("first",e),p.typeOf.object("second",t),p.typeOf.object("result",n),n.x=Math.max(e.x,t.x),n.y=Math.max(e.y,t.y),n};V.clamp=function(e,t,n,o){p.typeOf.object("value",e),p.typeOf.object("min",t),p.typeOf.object("max",n),p.typeOf.object("result",o);const i=T.clamp(e.x,t.x,n.x),r=T.clamp(e.y,t.y,n.y);return o.x=i,o.y=r,o};V.magnitudeSquared=function(e){return p.typeOf.object("cartesian",e),e.x*e.x+e.y*e.y};V.magnitude=function(e){return Math.sqrt(V.magnitudeSquared(e))};const es=new V;V.distance=function(e,t){return p.typeOf.object("left",e),p.typeOf.object("right",t),V.subtract(e,t,es),V.magnitude(es)};V.distanceSquared=function(e,t){return p.typeOf.object("left",e),p.typeOf.object("right",t),V.subtract(e,t,es),V.magnitudeSquared(es)};V.normalize=function(e,t){p.typeOf.object("cartesian",e),p.typeOf.object("result",t);const n=V.magnitude(e);if(t.x=e.x/n,t.y=e.y/n,isNaN(t.x)||isNaN(t.y))throw new w("normalized result is not a number");return t};V.dot=function(e,t){return p.typeOf.object("left",e),p.typeOf.object("right",t),e.x*t.x+e.y*t.y};V.cross=function(e,t){return p.typeOf.object("left",e),p.typeOf.object("right",t),e.x*t.y-e.y*t.x};V.multiplyComponents=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x*t.x,n.y=e.y*t.y,n};V.divideComponents=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x/t.x,n.y=e.y/t.y,n};V.add=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x+t.x,n.y=e.y+t.y,n};V.subtract=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x-t.x,n.y=e.y-t.y,n};V.multiplyByScalar=function(e,t,n){return p.typeOf.object("cartesian",e),p.typeOf.number("scalar",t),p.typeOf.object("result",n),n.x=e.x*t,n.y=e.y*t,n};V.divideByScalar=function(e,t,n){return p.typeOf.object("cartesian",e),p.typeOf.number("scalar",t),p.typeOf.object("result",n),n.x=e.x/t,n.y=e.y/t,n};V.negate=function(e,t){return p.typeOf.object("cartesian",e),p.typeOf.object("result",t),t.x=-e.x,t.y=-e.y,t};V.abs=function(e,t){return p.typeOf.object("cartesian",e),p.typeOf.object("result",t),t.x=Math.abs(e.x),t.y=Math.abs(e.y),t};const Nh=new V;V.lerp=function(e,t,n,o){return p.typeOf.object("start",e),p.typeOf.object("end",t),p.typeOf.number("t",n),p.typeOf.object("result",o),V.multiplyByScalar(t,n,Nh),o=V.multiplyByScalar(e,1-n,o),V.add(Nh,o,o)};const Dh=new V,Lh=new V;V.angleBetween=function(e,t){return p.typeOf.object("left",e),p.typeOf.object("right",t),V.normalize(e,Dh),V.normalize(t,Lh),T.acosClamped(V.dot(Dh,Lh))};const h_=new V;V.mostOrthogonalAxis=function(e,t){p.typeOf.object("cartesian",e),p.typeOf.object("result",t);const n=V.normalize(e,h_);return V.abs(n,n),n.x<=n.y?t=V.clone(V.UNIT_X,t):t=V.clone(V.UNIT_Y,t),t};V.equals=function(e,t){return e===t||l(e)&&l(t)&&e.x===t.x&&e.y===t.y};V.equalsArray=function(e,t,n){return e.x===t[n]&&e.y===t[n+1]};V.equalsEpsilon=function(e,t,n,o){return e===t||l(e)&&l(t)&&T.equalsEpsilon(e.x,t.x,n,o)&&T.equalsEpsilon(e.y,t.y,n,o)};V.ZERO=Object.freeze(new V(0,0));V.ONE=Object.freeze(new V(1,1));V.UNIT_X=Object.freeze(new V(1,0));V.UNIT_Y=Object.freeze(new V(0,1));V.prototype.clone=function(e){return V.clone(this,e)};V.prototype.equals=function(e){return V.equals(this,e)};V.prototype.equalsEpsilon=function(e,t,n){return V.equalsEpsilon(this,e,t,n)};V.prototype.toString=function(){return`(${this.x}, ${this.y})`};function e0(e,t,n,o){t=t??0,n=n??0,o=o??0,p.typeOf.number.greaterThanOrEquals("x",t,0),p.typeOf.number.greaterThanOrEquals("y",n,0),p.typeOf.number.greaterThanOrEquals("z",o,0),e._radii=new h(t,n,o),e._radiiSquared=new h(t*t,n*n,o*o),e._radiiToTheFourth=new h(t*t*t*t,n*n*n*n,o*o*o*o),e._oneOverRadii=new h(t===0?0:1/t,n===0?0:1/n,o===0?0:1/o),e._oneOverRadiiSquared=new h(t===0?0:1/(t*t),n===0?0:1/(n*n),o===0?0:1/(o*o)),e._minimumRadius=Math.min(t,n,o),e._maximumRadius=Math.max(t,n,o),e._centerToleranceSquared=T.EPSILON1,e._radiiSquared.z!==0&&(e._squaredXOverSquaredZ=e._radiiSquared.x/e._radiiSquared.z)}function be(e,t,n){this._radii=void 0,this._radiiSquared=void 0,this._radiiToTheFourth=void 0,this._oneOverRadii=void 0,this._oneOverRadiiSquared=void 0,this._minimumRadius=void 0,this._maximumRadius=void 0,this._centerToleranceSquared=void 0,this._squaredXOverSquaredZ=void 0,e0(this,e,t,n)}Object.defineProperties(be.prototype,{radii:{get:function(){return this._radii}},radiiSquared:{get:function(){return this._radiiSquared}},radiiToTheFourth:{get:function(){return this._radiiToTheFourth}},oneOverRadii:{get:function(){return this._oneOverRadii}},oneOverRadiiSquared:{get:function(){return this._oneOverRadiiSquared}},minimumRadius:{get:function(){return this._minimumRadius}},maximumRadius:{get:function(){return this._maximumRadius}}});be.clone=function(e,t){if(!l(e))return;const n=e._radii;return l(t)?(h.clone(n,t._radii),h.clone(e._radiiSquared,t._radiiSquared),h.clone(e._radiiToTheFourth,t._radiiToTheFourth),h.clone(e._oneOverRadii,t._oneOverRadii),h.clone(e._oneOverRadiiSquared,t._oneOverRadiiSquared),t._minimumRadius=e._minimumRadius,t._maximumRadius=e._maximumRadius,t._centerToleranceSquared=e._centerToleranceSquared,t):new be(n.x,n.y,n.z)};be.fromCartesian3=function(e,t){return l(t)||(t=new be),l(e)&&e0(t,e.x,e.y,e.z),t};be.WGS84=Object.freeze(new be(6378137,6378137,6356752314245179e-9));be.UNIT_SPHERE=Object.freeze(new be(1,1,1));be.MOON=Object.freeze(new be(T.LUNAR_RADIUS,T.LUNAR_RADIUS,T.LUNAR_RADIUS));be.MARS=Object.freeze(new be(3396190,3396190,3376200));be._default=be.WGS84;Object.defineProperties(be,{default:{get:function(){return be._default},set:function(e){p.typeOf.object("value",e),be._default=e,h._ellipsoidRadiiSquared=e.radiiSquared,le._ellipsoidOneOverRadii=e.oneOverRadii,le._ellipsoidOneOverRadiiSquared=e.oneOverRadiiSquared,le._ellipsoidCenterToleranceSquared=e._centerToleranceSquared}}});be.prototype.clone=function(e){return be.clone(this,e)};be.packedLength=h.packedLength;be.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,h.pack(e._radii,t,n),t};be.unpack=function(e,t,n){p.defined("array",e),t=t??0;const o=h.unpack(e,t);return be.fromCartesian3(o,n)};be.prototype.geocentricSurfaceNormal=h.normalize;be.prototype.geodeticSurfaceNormalCartographic=function(e,t){p.typeOf.object("cartographic",e);const n=e.longitude,o=e.latitude,i=Math.cos(o),r=i*Math.cos(n),a=i*Math.sin(n),s=Math.sin(o);return l(t)||(t=new h),t.x=r,t.y=a,t.z=s,h.normalize(t,t)};be.prototype.geodeticSurfaceNormal=function(e,t){if(p.typeOf.object("cartesian",e),isNaN(e.x)||isNaN(e.y)||isNaN(e.z))throw new w("cartesian has a NaN component");if(!h.equalsEpsilon(e,h.ZERO,T.EPSILON14))return l(t)||(t=new h),t=h.multiplyComponents(e,this._oneOverRadiiSquared,t),h.normalize(t,t)};const l_=new h,u_=new h;be.prototype.cartographicToCartesian=function(e,t){const n=l_,o=u_;this.geodeticSurfaceNormalCartographic(e,n),h.multiplyComponents(this._radiiSquared,n,o);const i=Math.sqrt(h.dot(n,o));return h.divideByScalar(o,i,o),h.multiplyByScalar(n,e.height,n),l(t)||(t=new h),h.add(o,n,t)};be.prototype.cartographicArrayToCartesianArray=function(e,t){p.defined("cartographics",e);const n=e.length;l(t)?t.length=n:t=new Array(n);for(let o=0;o<n;o++)t[o]=this.cartographicToCartesian(e[o],t[o]);return t};const d_=new h,m_=new h,p_=new h;be.prototype.cartesianToCartographic=function(e,t){const n=this.scaleToGeodeticSurface(e,m_);if(!l(n))return;const o=this.geodeticSurfaceNormal(n,d_),i=h.subtract(e,n,p_),r=Math.atan2(o.y,o.x),a=Math.asin(o.z),s=T.sign(h.dot(i,e))*h.magnitude(i);return l(t)?(t.longitude=r,t.latitude=a,t.height=s,t):new le(r,a,s)};be.prototype.cartesianArrayToCartographicArray=function(e,t){p.defined("cartesians",e);const n=e.length;l(t)?t.length=n:t=new Array(n);for(let o=0;o<n;++o)t[o]=this.cartesianToCartographic(e[o],t[o]);return t};be.prototype.scaleToGeodeticSurface=function(e,t){return Ju(e,this._oneOverRadii,this._oneOverRadiiSquared,this._centerToleranceSquared,t)};be.prototype.scaleToGeocentricSurface=function(e,t){p.typeOf.object("cartesian",e),l(t)||(t=new h);const n=e.x,o=e.y,i=e.z,r=this._oneOverRadiiSquared,a=1/Math.sqrt(n*n*r.x+o*o*r.y+i*i*r.z);return h.multiplyByScalar(e,a,t)};be.prototype.transformPositionToScaledSpace=function(e,t){return l(t)||(t=new h),h.multiplyComponents(e,this._oneOverRadii,t)};be.prototype.transformPositionFromScaledSpace=function(e,t){return l(t)||(t=new h),h.multiplyComponents(e,this._radii,t)};be.prototype.equals=function(e){return this===e||l(e)&&h.equals(this._radii,e._radii)};be.prototype.toString=function(){return this._radii.toString()};be.prototype.getSurfaceNormalIntersectionWithZAxis=function(e,t,n){if(p.typeOf.object("position",e),!T.equalsEpsilon(this._radii.x,this._radii.y,T.EPSILON15))throw new w("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");p.typeOf.number.greaterThan("Ellipsoid.radii.z",this._radii.z,0),t=t??0;const o=this._squaredXOverSquaredZ;if(l(n)||(n=new h),n.x=0,n.y=0,n.z=e.z*(1-o),!(Math.abs(n.z)>=this._radii.z-t))return n};const __=new h;be.prototype.getLocalCurvature=function(e,t){p.typeOf.object("surfacePosition",e),l(t)||(t=new V);const n=this.getSurfaceNormalIntersectionWithZAxis(e,0,__),o=h.distance(e,n),i=this.minimumRadius*o/this.maximumRadius**2,r=o*i**2;return V.fromElements(1/o,1/r,t)};const g_=[.14887433898163,.43339539412925,.67940956829902,.86506336668898,.97390652851717,0],y_=[.29552422471475,.26926671930999,.21908636251598,.14945134915058,.066671344308684,0];function Fh(e,t,n){p.typeOf.number("a",e),p.typeOf.number("b",t),p.typeOf.func("func",n);const o=.5*(t+e),i=.5*(t-e);let r=0;for(let a=0;a<5;a++){const s=i*g_[a];r+=y_[a]*(n(o+s)+n(o-s))}return r*=i,r}be.prototype.surfaceArea=function(e){p.typeOf.object("rectangle",e);const t=e.west;let n=e.east;const o=e.south,i=e.north;for(;n<t;)n+=T.TWO_PI;const r=this._radiiSquared,a=r.x,s=r.y,c=r.z,f=a*s;return Fh(o,i,function(d){const u=Math.cos(d),m=Math.sin(d);return Math.cos(d)*Fh(t,n,function(_){const g=Math.cos(_),y=Math.sin(_);return Math.sqrt(f*m*m+c*(s*g*g+a*y*y)*u*u)})})};function bo(e){this._ellipsoid=e??be.default,this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(bo.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}});bo.prototype.project=function(e,t){const n=this._semimajorAxis,o=e.longitude*n,i=e.latitude*n,r=e.height;return l(t)?(t.x=o,t.y=i,t.z=r,t):new h(o,i,r)};bo.prototype.unproject=function(e,t){if(!l(e))throw new w("cartesian is required");const n=this._oneOverSemimajorAxis,o=e.x*n,i=e.y*n,r=e.z;return l(t)?(t.longitude=o,t.latitude=i,t.height=r,t):new le(o,i,r)};const b_={OUTSIDE:-1,INTERSECTING:0,INSIDE:1},bt=Object.freeze(b_);function Zo(e,t){this.start=e??0,this.stop=t??0}function B(e,t,n,o,i,r,a,s,c){this[0]=e??0,this[1]=o??0,this[2]=a??0,this[3]=t??0,this[4]=i??0,this[5]=s??0,this[6]=n??0,this[7]=r??0,this[8]=c??0}B.packedLength=9;B.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,t[n++]=e[0],t[n++]=e[1],t[n++]=e[2],t[n++]=e[3],t[n++]=e[4],t[n++]=e[5],t[n++]=e[6],t[n++]=e[7],t[n++]=e[8],t};B.unpack=function(e,t,n){return p.defined("array",e),t=t??0,l(n)||(n=new B),n[0]=e[t++],n[1]=e[t++],n[2]=e[t++],n[3]=e[t++],n[4]=e[t++],n[5]=e[t++],n[6]=e[t++],n[7]=e[t++],n[8]=e[t++],n};B.packArray=function(e,t){p.defined("array",e);const n=e.length,o=n*9;if(!l(t))t=new Array(o);else{if(!Array.isArray(t)&&t.length!==o)throw new w("If result is a typed array, it must have exactly array.length * 9 elements");t.length!==o&&(t.length=o)}for(let i=0;i<n;++i)B.pack(e[i],t,i*9);return t};B.unpackArray=function(e,t){if(p.defined("array",e),p.typeOf.number.greaterThanOrEquals("array.length",e.length,9),e.length%9!==0)throw new w("array length must be a multiple of 9.");const n=e.length;l(t)?t.length=n/9:t=new Array(n/9);for(let o=0;o<n;o+=9){const i=o/9;t[i]=B.unpack(e,o,t[i])}return t};B.clone=function(e,t){if(l(e))return l(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t):new B(e[0],e[3],e[6],e[1],e[4],e[7],e[2],e[5],e[8])};B.fromArray=B.unpack;B.fromColumnMajorArray=function(e,t){return p.defined("values",e),B.clone(e,t)};B.fromRowMajorArray=function(e,t){return p.defined("values",e),l(t)?(t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],t):new B(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8])};B.fromQuaternion=function(e,t){p.typeOf.object("quaternion",e);const n=e.x*e.x,o=e.x*e.y,i=e.x*e.z,r=e.x*e.w,a=e.y*e.y,s=e.y*e.z,c=e.y*e.w,f=e.z*e.z,d=e.z*e.w,u=e.w*e.w,m=n-a-f+u,_=2*(o-d),g=2*(i+c),y=2*(o+d),E=-n+a-f+u,A=2*(s-r),S=2*(i-c),O=2*(s+r),M=-n-a+f+u;return l(t)?(t[0]=m,t[1]=y,t[2]=S,t[3]=_,t[4]=E,t[5]=O,t[6]=g,t[7]=A,t[8]=M,t):new B(m,_,g,y,E,A,S,O,M)};B.fromHeadingPitchRoll=function(e,t){p.typeOf.object("headingPitchRoll",e);const n=Math.cos(-e.pitch),o=Math.cos(-e.heading),i=Math.cos(e.roll),r=Math.sin(-e.pitch),a=Math.sin(-e.heading),s=Math.sin(e.roll),c=n*o,f=-i*a+s*r*o,d=s*a+i*r*o,u=n*a,m=i*o+s*r*a,_=-s*o+i*r*a,g=-r,y=s*n,E=i*n;return l(t)?(t[0]=c,t[1]=u,t[2]=g,t[3]=f,t[4]=m,t[5]=y,t[6]=d,t[7]=_,t[8]=E,t):new B(c,f,d,u,m,_,g,y,E)};B.fromScale=function(e,t){return p.typeOf.object("scale",e),l(t)?(t[0]=e.x,t[1]=0,t[2]=0,t[3]=0,t[4]=e.y,t[5]=0,t[6]=0,t[7]=0,t[8]=e.z,t):new B(e.x,0,0,0,e.y,0,0,0,e.z)};B.fromUniformScale=function(e,t){return p.typeOf.number("scale",e),l(t)?(t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=e,t[5]=0,t[6]=0,t[7]=0,t[8]=e,t):new B(e,0,0,0,e,0,0,0,e)};B.fromCrossProduct=function(e,t){return p.typeOf.object("vector",e),l(t)?(t[0]=0,t[1]=e.z,t[2]=-e.y,t[3]=-e.z,t[4]=0,t[5]=e.x,t[6]=e.y,t[7]=-e.x,t[8]=0,t):new B(0,-e.z,e.y,e.z,0,-e.x,-e.y,e.x,0)};B.fromRotationX=function(e,t){p.typeOf.number("angle",e);const n=Math.cos(e),o=Math.sin(e);return l(t)?(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=n,t[5]=o,t[6]=0,t[7]=-o,t[8]=n,t):new B(1,0,0,0,n,-o,0,o,n)};B.fromRotationY=function(e,t){p.typeOf.number("angle",e);const n=Math.cos(e),o=Math.sin(e);return l(t)?(t[0]=n,t[1]=0,t[2]=-o,t[3]=0,t[4]=1,t[5]=0,t[6]=o,t[7]=0,t[8]=n,t):new B(n,0,o,0,1,0,-o,0,n)};B.fromRotationZ=function(e,t){p.typeOf.number("angle",e);const n=Math.cos(e),o=Math.sin(e);return l(t)?(t[0]=n,t[1]=o,t[2]=0,t[3]=-o,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t):new B(n,-o,0,o,n,0,0,0,1)};B.toArray=function(e,t){return p.typeOf.object("matrix",e),l(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t):[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]};B.getElementIndex=function(e,t){return p.typeOf.number.greaterThanOrEquals("row",t,0),p.typeOf.number.lessThanOrEquals("row",t,2),p.typeOf.number.greaterThanOrEquals("column",e,0),p.typeOf.number.lessThanOrEquals("column",e,2),e*3+t};B.getColumn=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.number.greaterThanOrEquals("index",t,0),p.typeOf.number.lessThanOrEquals("index",t,2),p.typeOf.object("result",n);const o=t*3,i=e[o],r=e[o+1],a=e[o+2];return n.x=i,n.y=r,n.z=a,n};B.setColumn=function(e,t,n,o){p.typeOf.object("matrix",e),p.typeOf.number.greaterThanOrEquals("index",t,0),p.typeOf.number.lessThanOrEquals("index",t,2),p.typeOf.object("cartesian",n),p.typeOf.object("result",o),o=B.clone(e,o);const i=t*3;return o[i]=n.x,o[i+1]=n.y,o[i+2]=n.z,o};B.getRow=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.number.greaterThanOrEquals("index",t,0),p.typeOf.number.lessThanOrEquals("index",t,2),p.typeOf.object("result",n);const o=e[t],i=e[t+3],r=e[t+6];return n.x=o,n.y=i,n.z=r,n};B.setRow=function(e,t,n,o){return p.typeOf.object("matrix",e),p.typeOf.number.greaterThanOrEquals("index",t,0),p.typeOf.number.lessThanOrEquals("index",t,2),p.typeOf.object("cartesian",n),p.typeOf.object("result",o),o=B.clone(e,o),o[t]=n.x,o[t+3]=n.y,o[t+6]=n.z,o};const E_=new h;B.setScale=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("scale",t),p.typeOf.object("result",n);const o=B.getScale(e,E_),i=t.x/o.x,r=t.y/o.y,a=t.z/o.z;return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*r,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*a,n[7]=e[7]*a,n[8]=e[8]*a,n};const w_=new h;B.setUniformScale=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.number("scale",t),p.typeOf.object("result",n);const o=B.getScale(e,w_),i=t/o.x,r=t/o.y,a=t/o.z;return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*r,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*a,n[7]=e[7]*a,n[8]=e[8]*a,n};const Us=new h;B.getScale=function(e,t){return p.typeOf.object("matrix",e),p.typeOf.object("result",t),t.x=h.magnitude(h.fromElements(e[0],e[1],e[2],Us)),t.y=h.magnitude(h.fromElements(e[3],e[4],e[5],Us)),t.z=h.magnitude(h.fromElements(e[6],e[7],e[8],Us)),t};const Bh=new h;B.getMaximumScale=function(e){return B.getScale(e,Bh),h.maximumComponent(Bh)};const v_=new h;B.setRotation=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("result",n);const o=B.getScale(e,v_);return n[0]=t[0]*o.x,n[1]=t[1]*o.x,n[2]=t[2]*o.x,n[3]=t[3]*o.y,n[4]=t[4]*o.y,n[5]=t[5]*o.y,n[6]=t[6]*o.z,n[7]=t[7]*o.z,n[8]=t[8]*o.z,n};const T_=new h;B.getRotation=function(e,t){p.typeOf.object("matrix",e),p.typeOf.object("result",t);const n=B.getScale(e,T_);return t[0]=e[0]/n.x,t[1]=e[1]/n.x,t[2]=e[2]/n.x,t[3]=e[3]/n.y,t[4]=e[4]/n.y,t[5]=e[5]/n.y,t[6]=e[6]/n.z,t[7]=e[7]/n.z,t[8]=e[8]/n.z,t};B.multiply=function(e,t,n){p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n);const o=e[0]*t[0]+e[3]*t[1]+e[6]*t[2],i=e[1]*t[0]+e[4]*t[1]+e[7]*t[2],r=e[2]*t[0]+e[5]*t[1]+e[8]*t[2],a=e[0]*t[3]+e[3]*t[4]+e[6]*t[5],s=e[1]*t[3]+e[4]*t[4]+e[7]*t[5],c=e[2]*t[3]+e[5]*t[4]+e[8]*t[5],f=e[0]*t[6]+e[3]*t[7]+e[6]*t[8],d=e[1]*t[6]+e[4]*t[7]+e[7]*t[8],u=e[2]*t[6]+e[5]*t[7]+e[8]*t[8];return n[0]=o,n[1]=i,n[2]=r,n[3]=a,n[4]=s,n[5]=c,n[6]=f,n[7]=d,n[8]=u,n};B.add=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n[3]=e[3]+t[3],n[4]=e[4]+t[4],n[5]=e[5]+t[5],n[6]=e[6]+t[6],n[7]=e[7]+t[7],n[8]=e[8]+t[8],n};B.subtract=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n[3]=e[3]-t[3],n[4]=e[4]-t[4],n[5]=e[5]-t[5],n[6]=e[6]-t[6],n[7]=e[7]-t[7],n[8]=e[8]-t[8],n};B.multiplyByVector=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("cartesian",t),p.typeOf.object("result",n);const o=t.x,i=t.y,r=t.z,a=e[0]*o+e[3]*i+e[6]*r,s=e[1]*o+e[4]*i+e[7]*r,c=e[2]*o+e[5]*i+e[8]*r;return n.x=a,n.y=s,n.z=c,n};B.multiplyByScalar=function(e,t,n){return p.typeOf.object("matrix",e),p.typeOf.number("scalar",t),p.typeOf.object("result",n),n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n[4]=e[4]*t,n[5]=e[5]*t,n[6]=e[6]*t,n[7]=e[7]*t,n[8]=e[8]*t,n};B.multiplyByScale=function(e,t,n){return p.typeOf.object("matrix",e),p.typeOf.object("scale",t),p.typeOf.object("result",n),n[0]=e[0]*t.x,n[1]=e[1]*t.x,n[2]=e[2]*t.x,n[3]=e[3]*t.y,n[4]=e[4]*t.y,n[5]=e[5]*t.y,n[6]=e[6]*t.z,n[7]=e[7]*t.z,n[8]=e[8]*t.z,n};B.multiplyByUniformScale=function(e,t,n){return p.typeOf.object("matrix",e),p.typeOf.number("scale",t),p.typeOf.object("result",n),n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n[4]=e[4]*t,n[5]=e[5]*t,n[6]=e[6]*t,n[7]=e[7]*t,n[8]=e[8]*t,n};B.negate=function(e,t){return p.typeOf.object("matrix",e),p.typeOf.object("result",t),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t};B.transpose=function(e,t){p.typeOf.object("matrix",e),p.typeOf.object("result",t);const n=e[0],o=e[3],i=e[6],r=e[1],a=e[4],s=e[7],c=e[2],f=e[5],d=e[8];return t[0]=n,t[1]=o,t[2]=i,t[3]=r,t[4]=a,t[5]=s,t[6]=c,t[7]=f,t[8]=d,t};function S_(e){let t=0;for(let n=0;n<9;++n){const o=e[n];t+=o*o}return Math.sqrt(t)}const Dc=[1,0,0],Lc=[2,2,1];function A_(e){let t=0;for(let n=0;n<3;++n){const o=e[B.getElementIndex(Lc[n],Dc[n])];t+=2*o*o}return Math.sqrt(t)}function x_(e,t){const n=T.EPSILON15;let o=0,i=1;for(let f=0;f<3;++f){const d=Math.abs(e[B.getElementIndex(Lc[f],Dc[f])]);d>o&&(i=f,o=d)}let r=1,a=0;const s=Dc[i],c=Lc[i];if(Math.abs(e[B.getElementIndex(c,s)])>n){const f=e[B.getElementIndex(c,c)],d=e[B.getElementIndex(s,s)],u=e[B.getElementIndex(c,s)],m=(f-d)/2/u;let _;m<0?_=-1/(-m+Math.sqrt(1+m*m)):_=1/(m+Math.sqrt(1+m*m)),r=1/Math.sqrt(1+_*_),a=_*r}return t=B.clone(B.IDENTITY,t),t[B.getElementIndex(s,s)]=t[B.getElementIndex(c,c)]=r,t[B.getElementIndex(c,s)]=a,t[B.getElementIndex(s,c)]=-a,t}const ia=new B,Uh=new B;B.computeEigenDecomposition=function(e,t){p.typeOf.object("matrix",e);const n=T.EPSILON20,o=10;let i=0,r=0;l(t)||(t={});const a=t.unitary=B.clone(B.IDENTITY,t.unitary),s=t.diagonal=B.clone(e,t.diagonal),c=n*S_(s);for(;r<o&&A_(s)>c;)x_(s,ia),B.transpose(ia,Uh),B.multiply(s,ia,s),B.multiply(Uh,s,s),B.multiply(a,ia,a),++i>2&&(++r,i=0);return t};B.abs=function(e,t){return p.typeOf.object("matrix",e),p.typeOf.object("result",t),t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t[3]=Math.abs(e[3]),t[4]=Math.abs(e[4]),t[5]=Math.abs(e[5]),t[6]=Math.abs(e[6]),t[7]=Math.abs(e[7]),t[8]=Math.abs(e[8]),t};B.determinant=function(e){p.typeOf.object("matrix",e);const t=e[0],n=e[3],o=e[6],i=e[1],r=e[4],a=e[7],s=e[2],c=e[5],f=e[8];return t*(r*f-c*a)+i*(c*o-n*f)+s*(n*a-r*o)};B.inverse=function(e,t){p.typeOf.object("matrix",e),p.typeOf.object("result",t);const n=e[0],o=e[1],i=e[2],r=e[3],a=e[4],s=e[5],c=e[6],f=e[7],d=e[8],u=B.determinant(e);if(Math.abs(u)<=T.EPSILON15)throw new w("matrix is not invertible");t[0]=a*d-f*s,t[1]=f*i-o*d,t[2]=o*s-a*i,t[3]=c*s-r*d,t[4]=n*d-c*i,t[5]=r*i-n*s,t[6]=r*f-c*a,t[7]=c*o-n*f,t[8]=n*a-r*o;const m=1/u;return B.multiplyByScalar(t,m,t)};const O_=new B;B.inverseTranspose=function(e,t){return p.typeOf.object("matrix",e),p.typeOf.object("result",t),B.inverse(B.transpose(e,O_),t)};B.equals=function(e,t){return e===t||l(e)&&l(t)&&e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]};B.equalsEpsilon=function(e,t,n){return n=n??0,e===t||l(e)&&l(t)&&Math.abs(e[0]-t[0])<=n&&Math.abs(e[1]-t[1])<=n&&Math.abs(e[2]-t[2])<=n&&Math.abs(e[3]-t[3])<=n&&Math.abs(e[4]-t[4])<=n&&Math.abs(e[5]-t[5])<=n&&Math.abs(e[6]-t[6])<=n&&Math.abs(e[7]-t[7])<=n&&Math.abs(e[8]-t[8])<=n};B.IDENTITY=Object.freeze(new B(1,0,0,0,1,0,0,0,1));B.ZERO=Object.freeze(new B(0,0,0,0,0,0,0,0,0));B.COLUMN0ROW0=0;B.COLUMN0ROW1=1;B.COLUMN0ROW2=2;B.COLUMN1ROW0=3;B.COLUMN1ROW1=4;B.COLUMN1ROW2=5;B.COLUMN2ROW0=6;B.COLUMN2ROW1=7;B.COLUMN2ROW2=8;Object.defineProperties(B.prototype,{length:{get:function(){return B.packedLength}}});B.prototype.clone=function(e){return B.clone(this,e)};B.prototype.equals=function(e){return B.equals(this,e)};B.equalsArray=function(e,t,n){return e[0]===t[n]&&e[1]===t[n+1]&&e[2]===t[n+2]&&e[3]===t[n+3]&&e[4]===t[n+4]&&e[5]===t[n+5]&&e[6]===t[n+6]&&e[7]===t[n+7]&&e[8]===t[n+8]};B.prototype.equalsEpsilon=function(e,t){return B.equalsEpsilon(this,e,t)};B.prototype.toString=function(){return`(${this[0]}, ${this[3]}, ${this[6]})
(${this[1]}, ${this[4]}, ${this[7]})
(${this[2]}, ${this[5]}, ${this[8]})`};function Q(e,t,n,o){this.x=e??0,this.y=t??0,this.z=n??0,this.w=o??0}Q.fromElements=function(e,t,n,o,i){return l(i)?(i.x=e,i.y=t,i.z=n,i.w=o,i):new Q(e,t,n,o)};Q.fromColor=function(e,t){return p.typeOf.object("color",e),l(t)?(t.x=e.red,t.y=e.green,t.z=e.blue,t.w=e.alpha,t):new Q(e.red,e.green,e.blue,e.alpha)};Q.clone=function(e,t){if(l(e))return l(t)?(t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t):new Q(e.x,e.y,e.z,e.w)};Q.packedLength=4;Q.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,t[n++]=e.x,t[n++]=e.y,t[n++]=e.z,t[n]=e.w,t};Q.unpack=function(e,t,n){return p.defined("array",e),t=t??0,l(n)||(n=new Q),n.x=e[t++],n.y=e[t++],n.z=e[t++],n.w=e[t],n};Q.packArray=function(e,t){p.defined("array",e);const n=e.length,o=n*4;if(!l(t))t=new Array(o);else{if(!Array.isArray(t)&&t.length!==o)throw new w("If result is a typed array, it must have exactly array.length * 4 elements");t.length!==o&&(t.length=o)}for(let i=0;i<n;++i)Q.pack(e[i],t,i*4);return t};Q.unpackArray=function(e,t){if(p.defined("array",e),p.typeOf.number.greaterThanOrEquals("array.length",e.length,4),e.length%4!==0)throw new w("array length must be a multiple of 4.");const n=e.length;l(t)?t.length=n/4:t=new Array(n/4);for(let o=0;o<n;o+=4){const i=o/4;t[i]=Q.unpack(e,o,t[i])}return t};Q.fromArray=Q.unpack;Q.maximumComponent=function(e){return p.typeOf.object("cartesian",e),Math.max(e.x,e.y,e.z,e.w)};Q.minimumComponent=function(e){return p.typeOf.object("cartesian",e),Math.min(e.x,e.y,e.z,e.w)};Q.minimumByComponent=function(e,t,n){return p.typeOf.object("first",e),p.typeOf.object("second",t),p.typeOf.object("result",n),n.x=Math.min(e.x,t.x),n.y=Math.min(e.y,t.y),n.z=Math.min(e.z,t.z),n.w=Math.min(e.w,t.w),n};Q.maximumByComponent=function(e,t,n){return p.typeOf.object("first",e),p.typeOf.object("second",t),p.typeOf.object("result",n),n.x=Math.max(e.x,t.x),n.y=Math.max(e.y,t.y),n.z=Math.max(e.z,t.z),n.w=Math.max(e.w,t.w),n};Q.clamp=function(e,t,n,o){p.typeOf.object("value",e),p.typeOf.object("min",t),p.typeOf.object("max",n),p.typeOf.object("result",o);const i=T.clamp(e.x,t.x,n.x),r=T.clamp(e.y,t.y,n.y),a=T.clamp(e.z,t.z,n.z),s=T.clamp(e.w,t.w,n.w);return o.x=i,o.y=r,o.z=a,o.w=s,o};Q.magnitudeSquared=function(e){return p.typeOf.object("cartesian",e),e.x*e.x+e.y*e.y+e.z*e.z+e.w*e.w};Q.magnitude=function(e){return Math.sqrt(Q.magnitudeSquared(e))};const ts=new Q;Q.distance=function(e,t){return p.typeOf.object("left",e),p.typeOf.object("right",t),Q.subtract(e,t,ts),Q.magnitude(ts)};Q.distanceSquared=function(e,t){return p.typeOf.object("left",e),p.typeOf.object("right",t),Q.subtract(e,t,ts),Q.magnitudeSquared(ts)};Q.normalize=function(e,t){p.typeOf.object("cartesian",e),p.typeOf.object("result",t);const n=Q.magnitude(e);if(t.x=e.x/n,t.y=e.y/n,t.z=e.z/n,t.w=e.w/n,isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||isNaN(t.w))throw new w("normalized result is not a number");return t};Q.dot=function(e,t){return p.typeOf.object("left",e),p.typeOf.object("right",t),e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w};Q.multiplyComponents=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x*t.x,n.y=e.y*t.y,n.z=e.z*t.z,n.w=e.w*t.w,n};Q.divideComponents=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x/t.x,n.y=e.y/t.y,n.z=e.z/t.z,n.w=e.w/t.w,n};Q.add=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x+t.x,n.y=e.y+t.y,n.z=e.z+t.z,n.w=e.w+t.w,n};Q.subtract=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x-t.x,n.y=e.y-t.y,n.z=e.z-t.z,n.w=e.w-t.w,n};Q.multiplyByScalar=function(e,t,n){return p.typeOf.object("cartesian",e),p.typeOf.number("scalar",t),p.typeOf.object("result",n),n.x=e.x*t,n.y=e.y*t,n.z=e.z*t,n.w=e.w*t,n};Q.divideByScalar=function(e,t,n){return p.typeOf.object("cartesian",e),p.typeOf.number("scalar",t),p.typeOf.object("result",n),n.x=e.x/t,n.y=e.y/t,n.z=e.z/t,n.w=e.w/t,n};Q.negate=function(e,t){return p.typeOf.object("cartesian",e),p.typeOf.object("result",t),t.x=-e.x,t.y=-e.y,t.z=-e.z,t.w=-e.w,t};Q.abs=function(e,t){return p.typeOf.object("cartesian",e),p.typeOf.object("result",t),t.x=Math.abs(e.x),t.y=Math.abs(e.y),t.z=Math.abs(e.z),t.w=Math.abs(e.w),t};const Gh=new Q;Q.lerp=function(e,t,n,o){return p.typeOf.object("start",e),p.typeOf.object("end",t),p.typeOf.number("t",n),p.typeOf.object("result",o),Q.multiplyByScalar(t,n,Gh),o=Q.multiplyByScalar(e,1-n,o),Q.add(Gh,o,o)};const C_=new Q;Q.mostOrthogonalAxis=function(e,t){p.typeOf.object("cartesian",e),p.typeOf.object("result",t);const n=Q.normalize(e,C_);return Q.abs(n,n),n.x<=n.y?n.x<=n.z?n.x<=n.w?t=Q.clone(Q.UNIT_X,t):t=Q.clone(Q.UNIT_W,t):n.z<=n.w?t=Q.clone(Q.UNIT_Z,t):t=Q.clone(Q.UNIT_W,t):n.y<=n.z?n.y<=n.w?t=Q.clone(Q.UNIT_Y,t):t=Q.clone(Q.UNIT_W,t):n.z<=n.w?t=Q.clone(Q.UNIT_Z,t):t=Q.clone(Q.UNIT_W,t),t};Q.equals=function(e,t){return e===t||l(e)&&l(t)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w};Q.equalsArray=function(e,t,n){return e.x===t[n]&&e.y===t[n+1]&&e.z===t[n+2]&&e.w===t[n+3]};Q.equalsEpsilon=function(e,t,n,o){return e===t||l(e)&&l(t)&&T.equalsEpsilon(e.x,t.x,n,o)&&T.equalsEpsilon(e.y,t.y,n,o)&&T.equalsEpsilon(e.z,t.z,n,o)&&T.equalsEpsilon(e.w,t.w,n,o)};Q.ZERO=Object.freeze(new Q(0,0,0,0));Q.ONE=Object.freeze(new Q(1,1,1,1));Q.UNIT_X=Object.freeze(new Q(1,0,0,0));Q.UNIT_Y=Object.freeze(new Q(0,1,0,0));Q.UNIT_Z=Object.freeze(new Q(0,0,1,0));Q.UNIT_W=Object.freeze(new Q(0,0,0,1));Q.prototype.clone=function(e){return Q.clone(this,e)};Q.prototype.equals=function(e){return Q.equals(this,e)};Q.prototype.equalsEpsilon=function(e,t,n){return Q.equalsEpsilon(this,e,t,n)};Q.prototype.toString=function(){return`(${this.x}, ${this.y}, ${this.z}, ${this.w})`};const yf=new Float32Array(1),Vt=new Uint8Array(yf.buffer),M_=new Uint32Array([287454020]),R_=new Uint8Array(M_.buffer),t0=R_[0]===68;Q.packFloat=function(e,t){return p.typeOf.number("value",e),l(t)||(t=new Q),yf[0]=e,t0?(t.x=Vt[0],t.y=Vt[1],t.z=Vt[2],t.w=Vt[3]):(t.x=Vt[3],t.y=Vt[2],t.z=Vt[1],t.w=Vt[0]),t};Q.unpackFloat=function(e){return p.typeOf.object("packedFloat",e),t0?(Vt[0]=e.x,Vt[1]=e.y,Vt[2]=e.z,Vt[3]=e.w):(Vt[0]=e.w,Vt[1]=e.z,Vt[2]=e.y,Vt[3]=e.x),yf[0]};const xe={};xe.EMPTY_OBJECT=Object.freeze({});xe.EMPTY_ARRAY=Object.freeze([]);function mt(e){this.name="RuntimeError",this.message=e;let t;try{throw new Error}catch(n){t=n.stack}this.stack=t}l(Object.create)&&(mt.prototype=Object.create(Error.prototype),mt.prototype.constructor=mt);mt.prototype.toString=function(){let e=`${this.name}: ${this.message}`;return l(this.stack)&&(e+=`
${this.stack.toString()}`),e};function U(e,t,n,o,i,r,a,s,c,f,d,u,m,_,g,y){this[0]=e??0,this[1]=i??0,this[2]=c??0,this[3]=m??0,this[4]=t??0,this[5]=r??0,this[6]=f??0,this[7]=_??0,this[8]=n??0,this[9]=a??0,this[10]=d??0,this[11]=g??0,this[12]=o??0,this[13]=s??0,this[14]=u??0,this[15]=y??0}U.packedLength=16;U.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,t[n++]=e[0],t[n++]=e[1],t[n++]=e[2],t[n++]=e[3],t[n++]=e[4],t[n++]=e[5],t[n++]=e[6],t[n++]=e[7],t[n++]=e[8],t[n++]=e[9],t[n++]=e[10],t[n++]=e[11],t[n++]=e[12],t[n++]=e[13],t[n++]=e[14],t[n]=e[15],t};U.unpack=function(e,t,n){return p.defined("array",e),t=t??0,l(n)||(n=new U),n[0]=e[t++],n[1]=e[t++],n[2]=e[t++],n[3]=e[t++],n[4]=e[t++],n[5]=e[t++],n[6]=e[t++],n[7]=e[t++],n[8]=e[t++],n[9]=e[t++],n[10]=e[t++],n[11]=e[t++],n[12]=e[t++],n[13]=e[t++],n[14]=e[t++],n[15]=e[t],n};U.packArray=function(e,t){p.defined("array",e);const n=e.length,o=n*16;if(!l(t))t=new Array(o);else{if(!Array.isArray(t)&&t.length!==o)throw new w("If result is a typed array, it must have exactly array.length * 16 elements");t.length!==o&&(t.length=o)}for(let i=0;i<n;++i)U.pack(e[i],t,i*16);return t};U.unpackArray=function(e,t){if(p.defined("array",e),p.typeOf.number.greaterThanOrEquals("array.length",e.length,16),e.length%16!==0)throw new w("array length must be a multiple of 16.");const n=e.length;l(t)?t.length=n/16:t=new Array(n/16);for(let o=0;o<n;o+=16){const i=o/16;t[i]=U.unpack(e,o,t[i])}return t};U.clone=function(e,t){if(l(e))return l(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t):new U(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15])};U.fromArray=U.unpack;U.fromColumnMajorArray=function(e,t){return p.defined("values",e),U.clone(e,t)};U.fromRowMajorArray=function(e,t){return p.defined("values",e),l(t)?(t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15],t):new U(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])};U.fromRotationTranslation=function(e,t,n){return p.typeOf.object("rotation",e),t=t??h.ZERO,l(n)?(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=0,n[4]=e[3],n[5]=e[4],n[6]=e[5],n[7]=0,n[8]=e[6],n[9]=e[7],n[10]=e[8],n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,n):new U(e[0],e[3],e[6],t.x,e[1],e[4],e[7],t.y,e[2],e[5],e[8],t.z,0,0,0,1)};U.fromTranslationQuaternionRotationScale=function(e,t,n,o){p.typeOf.object("translation",e),p.typeOf.object("rotation",t),p.typeOf.object("scale",n),l(o)||(o=new U);const i=n.x,r=n.y,a=n.z,s=t.x*t.x,c=t.x*t.y,f=t.x*t.z,d=t.x*t.w,u=t.y*t.y,m=t.y*t.z,_=t.y*t.w,g=t.z*t.z,y=t.z*t.w,E=t.w*t.w,A=s-u-g+E,S=2*(c-y),O=2*(f+_),M=2*(c+y),R=-s+u-g+E,N=2*(m-d),F=2*(f-_),z=2*(m+d),G=-s-u+g+E;return o[0]=A*i,o[1]=M*i,o[2]=F*i,o[3]=0,o[4]=S*r,o[5]=R*r,o[6]=z*r,o[7]=0,o[8]=O*a,o[9]=N*a,o[10]=G*a,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,o};U.fromTranslationRotationScale=function(e,t){return p.typeOf.object("translationRotationScale",e),U.fromTranslationQuaternionRotationScale(e.translation,e.rotation,e.scale,t)};U.fromTranslation=function(e,t){return p.typeOf.object("translation",e),U.fromRotationTranslation(B.IDENTITY,e,t)};U.fromScale=function(e,t){return p.typeOf.object("scale",e),l(t)?(t[0]=e.x,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e.y,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e.z,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t):new U(e.x,0,0,0,0,e.y,0,0,0,0,e.z,0,0,0,0,1)};U.fromUniformScale=function(e,t){return p.typeOf.number("scale",e),l(t)?(t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t):new U(e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1)};U.fromRotation=function(e,t){return p.typeOf.object("rotation",e),l(t)||(t=new U),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=e[3],t[5]=e[4],t[6]=e[5],t[7]=0,t[8]=e[6],t[9]=e[7],t[10]=e[8],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};const li=new h,ui=new h,Qi=new h;U.fromCamera=function(e,t){p.typeOf.object("camera",e);const n=e.position,o=e.direction,i=e.up;p.typeOf.object("camera.position",n),p.typeOf.object("camera.direction",o),p.typeOf.object("camera.up",i),h.normalize(o,li),h.normalize(h.cross(li,i,ui),ui),h.normalize(h.cross(ui,li,Qi),Qi);const r=ui.x,a=ui.y,s=ui.z,c=li.x,f=li.y,d=li.z,u=Qi.x,m=Qi.y,_=Qi.z,g=n.x,y=n.y,E=n.z,A=r*-g+a*-y+s*-E,S=u*-g+m*-y+_*-E,O=c*g+f*y+d*E;return l(t)?(t[0]=r,t[1]=u,t[2]=-c,t[3]=0,t[4]=a,t[5]=m,t[6]=-f,t[7]=0,t[8]=s,t[9]=_,t[10]=-d,t[11]=0,t[12]=A,t[13]=S,t[14]=O,t[15]=1,t):new U(r,a,s,A,u,m,_,S,-c,-f,-d,O,0,0,0,1)};U.computePerspectiveFieldOfView=function(e,t,n,o,i){p.typeOf.number.greaterThan("fovY",e,0),p.typeOf.number.lessThan("fovY",e,Math.PI),p.typeOf.number.greaterThan("near",n,0),p.typeOf.number.greaterThan("far",o,0),p.typeOf.object("result",i);const a=1/Math.tan(e*.5),s=a/t,c=(o+n)/(n-o),f=2*o*n/(n-o);return i[0]=s,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=a,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=c,i[11]=-1,i[12]=0,i[13]=0,i[14]=f,i[15]=0,i};U.computeOrthographicOffCenter=function(e,t,n,o,i,r,a){p.typeOf.number("left",e),p.typeOf.number("right",t),p.typeOf.number("bottom",n),p.typeOf.number("top",o),p.typeOf.number("near",i),p.typeOf.number("far",r),p.typeOf.object("result",a);let s=1/(t-e),c=1/(o-n),f=1/(r-i);const d=-(t+e)*s,u=-(o+n)*c,m=-(r+i)*f;return s*=2,c*=2,f*=-2,a[0]=s,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=c,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=f,a[11]=0,a[12]=d,a[13]=u,a[14]=m,a[15]=1,a};U.computePerspectiveOffCenter=function(e,t,n,o,i,r,a){p.typeOf.number("left",e),p.typeOf.number("right",t),p.typeOf.number("bottom",n),p.typeOf.number("top",o),p.typeOf.number("near",i),p.typeOf.number("far",r),p.typeOf.object("result",a);const s=2*i/(t-e),c=2*i/(o-n),f=(t+e)/(t-e),d=(o+n)/(o-n),u=-(r+i)/(r-i),m=-1,_=-2*r*i/(r-i);return a[0]=s,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=c,a[6]=0,a[7]=0,a[8]=f,a[9]=d,a[10]=u,a[11]=m,a[12]=0,a[13]=0,a[14]=_,a[15]=0,a};U.computeInfinitePerspectiveOffCenter=function(e,t,n,o,i,r){p.typeOf.number("left",e),p.typeOf.number("right",t),p.typeOf.number("bottom",n),p.typeOf.number("top",o),p.typeOf.number("near",i),p.typeOf.object("result",r);const a=2*i/(t-e),s=2*i/(o-n),c=(t+e)/(t-e),f=(o+n)/(o-n),d=-1,u=-1,m=-2*i;return r[0]=a,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=s,r[6]=0,r[7]=0,r[8]=c,r[9]=f,r[10]=d,r[11]=u,r[12]=0,r[13]=0,r[14]=m,r[15]=0,r};U.computeViewportTransformation=function(e,t,n,o){l(o)||(o=new U),e=e??xe.EMPTY_OBJECT;const i=e.x??0,r=e.y??0,a=e.width??0,s=e.height??0;t=t??0,n=n??1;const c=a*.5,f=s*.5,d=(n-t)*.5,u=c,m=f,_=d,g=i+c,y=r+f,E=t+d,A=1;return o[0]=u,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=m,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=_,o[11]=0,o[12]=g,o[13]=y,o[14]=E,o[15]=A,o};U.computeView=function(e,t,n,o,i){return p.typeOf.object("position",e),p.typeOf.object("direction",t),p.typeOf.object("up",n),p.typeOf.object("right",o),p.typeOf.object("result",i),i[0]=o.x,i[1]=n.x,i[2]=-t.x,i[3]=0,i[4]=o.y,i[5]=n.y,i[6]=-t.y,i[7]=0,i[8]=o.z,i[9]=n.z,i[10]=-t.z,i[11]=0,i[12]=-h.dot(o,e),i[13]=-h.dot(n,e),i[14]=h.dot(t,e),i[15]=1,i};U.toArray=function(e,t){return p.typeOf.object("matrix",e),l(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t):[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]};U.getElementIndex=function(e,t){return p.typeOf.number.greaterThanOrEquals("row",t,0),p.typeOf.number.lessThanOrEquals("row",t,3),p.typeOf.number.greaterThanOrEquals("column",e,0),p.typeOf.number.lessThanOrEquals("column",e,3),e*4+t};U.getColumn=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.number.greaterThanOrEquals("index",t,0),p.typeOf.number.lessThanOrEquals("index",t,3),p.typeOf.object("result",n);const o=t*4,i=e[o],r=e[o+1],a=e[o+2],s=e[o+3];return n.x=i,n.y=r,n.z=a,n.w=s,n};U.setColumn=function(e,t,n,o){p.typeOf.object("matrix",e),p.typeOf.number.greaterThanOrEquals("index",t,0),p.typeOf.number.lessThanOrEquals("index",t,3),p.typeOf.object("cartesian",n),p.typeOf.object("result",o),o=U.clone(e,o);const i=t*4;return o[i]=n.x,o[i+1]=n.y,o[i+2]=n.z,o[i+3]=n.w,o};U.getRow=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.number.greaterThanOrEquals("index",t,0),p.typeOf.number.lessThanOrEquals("index",t,3),p.typeOf.object("result",n);const o=e[t],i=e[t+4],r=e[t+8],a=e[t+12];return n.x=o,n.y=i,n.z=r,n.w=a,n};U.setRow=function(e,t,n,o){return p.typeOf.object("matrix",e),p.typeOf.number.greaterThanOrEquals("index",t,0),p.typeOf.number.lessThanOrEquals("index",t,3),p.typeOf.object("cartesian",n),p.typeOf.object("result",o),o=U.clone(e,o),o[t]=n.x,o[t+4]=n.y,o[t+8]=n.z,o[t+12]=n.w,o};U.setTranslation=function(e,t,n){return p.typeOf.object("matrix",e),p.typeOf.object("translation",t),p.typeOf.object("result",n),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=e[15],n};const P_=new h;U.setScale=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("scale",t),p.typeOf.object("result",n);const o=U.getScale(e,P_),i=t.x/o.x,r=t.y/o.y,a=t.z/o.z;return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3],n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7],n[8]=e[8]*a,n[9]=e[9]*a,n[10]=e[10]*a,n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n};const I_=new h;U.setUniformScale=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.number("scale",t),p.typeOf.object("result",n);const o=U.getScale(e,I_),i=t/o.x,r=t/o.y,a=t/o.z;return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3],n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7],n[8]=e[8]*a,n[9]=e[9]*a,n[10]=e[10]*a,n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n};const Gs=new h;U.getScale=function(e,t){return p.typeOf.object("matrix",e),p.typeOf.object("result",t),t.x=h.magnitude(h.fromElements(e[0],e[1],e[2],Gs)),t.y=h.magnitude(h.fromElements(e[4],e[5],e[6],Gs)),t.z=h.magnitude(h.fromElements(e[8],e[9],e[10],Gs)),t};const qh=new h;U.getMaximumScale=function(e){return U.getScale(e,qh),h.maximumComponent(qh)};const z_=new h;U.setRotation=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("result",n);const o=U.getScale(e,z_);return n[0]=t[0]*o.x,n[1]=t[1]*o.x,n[2]=t[2]*o.x,n[3]=e[3],n[4]=t[3]*o.y,n[5]=t[4]*o.y,n[6]=t[5]*o.y,n[7]=e[7],n[8]=t[6]*o.z,n[9]=t[7]*o.z,n[10]=t[8]*o.z,n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n};const N_=new h;U.getRotation=function(e,t){p.typeOf.object("matrix",e),p.typeOf.object("result",t);const n=U.getScale(e,N_);return t[0]=e[0]/n.x,t[1]=e[1]/n.x,t[2]=e[2]/n.x,t[3]=e[4]/n.y,t[4]=e[5]/n.y,t[5]=e[6]/n.y,t[6]=e[8]/n.z,t[7]=e[9]/n.z,t[8]=e[10]/n.z,t};U.multiply=function(e,t,n){p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n);const o=e[0],i=e[1],r=e[2],a=e[3],s=e[4],c=e[5],f=e[6],d=e[7],u=e[8],m=e[9],_=e[10],g=e[11],y=e[12],E=e[13],A=e[14],S=e[15],O=t[0],M=t[1],R=t[2],N=t[3],F=t[4],z=t[5],G=t[6],q=t[7],k=t[8],X=t[9],b=t[10],v=t[11],C=t[12],D=t[13],H=t[14],Z=t[15],J=o*O+s*M+u*R+y*N,K=i*O+c*M+m*R+E*N,te=r*O+f*M+_*R+A*N,he=a*O+d*M+g*R+S*N,we=o*F+s*z+u*G+y*q,Te=i*F+c*z+m*G+E*q,ve=r*F+f*z+_*G+A*q,Re=a*F+d*z+g*G+S*q,$e=o*k+s*X+u*b+y*v,ht=i*k+c*X+m*b+E*v,pt=r*k+f*X+_*b+A*v,Ve=a*k+d*X+g*b+S*v,Et=o*C+s*D+u*H+y*Z,Gt=i*C+c*D+m*H+E*Z,Qt=r*C+f*D+_*H+A*Z,_n=a*C+d*D+g*H+S*Z;return n[0]=J,n[1]=K,n[2]=te,n[3]=he,n[4]=we,n[5]=Te,n[6]=ve,n[7]=Re,n[8]=$e,n[9]=ht,n[10]=pt,n[11]=Ve,n[12]=Et,n[13]=Gt,n[14]=Qt,n[15]=_n,n};U.add=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n[3]=e[3]+t[3],n[4]=e[4]+t[4],n[5]=e[5]+t[5],n[6]=e[6]+t[6],n[7]=e[7]+t[7],n[8]=e[8]+t[8],n[9]=e[9]+t[9],n[10]=e[10]+t[10],n[11]=e[11]+t[11],n[12]=e[12]+t[12],n[13]=e[13]+t[13],n[14]=e[14]+t[14],n[15]=e[15]+t[15],n};U.subtract=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n[3]=e[3]-t[3],n[4]=e[4]-t[4],n[5]=e[5]-t[5],n[6]=e[6]-t[6],n[7]=e[7]-t[7],n[8]=e[8]-t[8],n[9]=e[9]-t[9],n[10]=e[10]-t[10],n[11]=e[11]-t[11],n[12]=e[12]-t[12],n[13]=e[13]-t[13],n[14]=e[14]-t[14],n[15]=e[15]-t[15],n};U.multiplyTransformation=function(e,t,n){p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n);const o=e[0],i=e[1],r=e[2],a=e[4],s=e[5],c=e[6],f=e[8],d=e[9],u=e[10],m=e[12],_=e[13],g=e[14],y=t[0],E=t[1],A=t[2],S=t[4],O=t[5],M=t[6],R=t[8],N=t[9],F=t[10],z=t[12],G=t[13],q=t[14],k=o*y+a*E+f*A,X=i*y+s*E+d*A,b=r*y+c*E+u*A,v=o*S+a*O+f*M,C=i*S+s*O+d*M,D=r*S+c*O+u*M,H=o*R+a*N+f*F,Z=i*R+s*N+d*F,J=r*R+c*N+u*F,K=o*z+a*G+f*q+m,te=i*z+s*G+d*q+_,he=r*z+c*G+u*q+g;return n[0]=k,n[1]=X,n[2]=b,n[3]=0,n[4]=v,n[5]=C,n[6]=D,n[7]=0,n[8]=H,n[9]=Z,n[10]=J,n[11]=0,n[12]=K,n[13]=te,n[14]=he,n[15]=1,n};U.multiplyByMatrix3=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("rotation",t),p.typeOf.object("result",n);const o=e[0],i=e[1],r=e[2],a=e[4],s=e[5],c=e[6],f=e[8],d=e[9],u=e[10],m=t[0],_=t[1],g=t[2],y=t[3],E=t[4],A=t[5],S=t[6],O=t[7],M=t[8],R=o*m+a*_+f*g,N=i*m+s*_+d*g,F=r*m+c*_+u*g,z=o*y+a*E+f*A,G=i*y+s*E+d*A,q=r*y+c*E+u*A,k=o*S+a*O+f*M,X=i*S+s*O+d*M,b=r*S+c*O+u*M;return n[0]=R,n[1]=N,n[2]=F,n[3]=0,n[4]=z,n[5]=G,n[6]=q,n[7]=0,n[8]=k,n[9]=X,n[10]=b,n[11]=0,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n};U.multiplyByTranslation=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("translation",t),p.typeOf.object("result",n);const o=t.x,i=t.y,r=t.z,a=o*e[0]+i*e[4]+r*e[8]+e[12],s=o*e[1]+i*e[5]+r*e[9]+e[13],c=o*e[2]+i*e[6]+r*e[10]+e[14];return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=a,n[13]=s,n[14]=c,n[15]=e[15],n};U.multiplyByScale=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("scale",t),p.typeOf.object("result",n);const o=t.x,i=t.y,r=t.z;return o===1&&i===1&&r===1?U.clone(e,n):(n[0]=o*e[0],n[1]=o*e[1],n[2]=o*e[2],n[3]=e[3],n[4]=i*e[4],n[5]=i*e[5],n[6]=i*e[6],n[7]=e[7],n[8]=r*e[8],n[9]=r*e[9],n[10]=r*e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n)};U.multiplyByUniformScale=function(e,t,n){return p.typeOf.object("matrix",e),p.typeOf.number("scale",t),p.typeOf.object("result",n),n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3],n[4]=e[4]*t,n[5]=e[5]*t,n[6]=e[6]*t,n[7]=e[7],n[8]=e[8]*t,n[9]=e[9]*t,n[10]=e[10]*t,n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n};U.multiplyByVector=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("cartesian",t),p.typeOf.object("result",n);const o=t.x,i=t.y,r=t.z,a=t.w,s=e[0]*o+e[4]*i+e[8]*r+e[12]*a,c=e[1]*o+e[5]*i+e[9]*r+e[13]*a,f=e[2]*o+e[6]*i+e[10]*r+e[14]*a,d=e[3]*o+e[7]*i+e[11]*r+e[15]*a;return n.x=s,n.y=c,n.z=f,n.w=d,n};U.multiplyByPointAsVector=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("cartesian",t),p.typeOf.object("result",n);const o=t.x,i=t.y,r=t.z,a=e[0]*o+e[4]*i+e[8]*r,s=e[1]*o+e[5]*i+e[9]*r,c=e[2]*o+e[6]*i+e[10]*r;return n.x=a,n.y=s,n.z=c,n};U.multiplyByPoint=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("cartesian",t),p.typeOf.object("result",n);const o=t.x,i=t.y,r=t.z,a=e[0]*o+e[4]*i+e[8]*r+e[12],s=e[1]*o+e[5]*i+e[9]*r+e[13],c=e[2]*o+e[6]*i+e[10]*r+e[14];return n.x=a,n.y=s,n.z=c,n};U.multiplyByScalar=function(e,t,n){return p.typeOf.object("matrix",e),p.typeOf.number("scalar",t),p.typeOf.object("result",n),n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n[4]=e[4]*t,n[5]=e[5]*t,n[6]=e[6]*t,n[7]=e[7]*t,n[8]=e[8]*t,n[9]=e[9]*t,n[10]=e[10]*t,n[11]=e[11]*t,n[12]=e[12]*t,n[13]=e[13]*t,n[14]=e[14]*t,n[15]=e[15]*t,n};U.negate=function(e,t){return p.typeOf.object("matrix",e),p.typeOf.object("result",t),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t[9]=-e[9],t[10]=-e[10],t[11]=-e[11],t[12]=-e[12],t[13]=-e[13],t[14]=-e[14],t[15]=-e[15],t};U.transpose=function(e,t){p.typeOf.object("matrix",e),p.typeOf.object("result",t);const n=e[1],o=e[2],i=e[3],r=e[6],a=e[7],s=e[11];return t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=n,t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=o,t[9]=r,t[10]=e[10],t[11]=e[14],t[12]=i,t[13]=a,t[14]=s,t[15]=e[15],t};U.abs=function(e,t){return p.typeOf.object("matrix",e),p.typeOf.object("result",t),t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t[3]=Math.abs(e[3]),t[4]=Math.abs(e[4]),t[5]=Math.abs(e[5]),t[6]=Math.abs(e[6]),t[7]=Math.abs(e[7]),t[8]=Math.abs(e[8]),t[9]=Math.abs(e[9]),t[10]=Math.abs(e[10]),t[11]=Math.abs(e[11]),t[12]=Math.abs(e[12]),t[13]=Math.abs(e[13]),t[14]=Math.abs(e[14]),t[15]=Math.abs(e[15]),t};U.equals=function(e,t){return e===t||l(e)&&l(t)&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[3]===t[3]&&e[7]===t[7]&&e[11]===t[11]&&e[15]===t[15]};U.equalsEpsilon=function(e,t,n){return n=n??0,e===t||l(e)&&l(t)&&Math.abs(e[0]-t[0])<=n&&Math.abs(e[1]-t[1])<=n&&Math.abs(e[2]-t[2])<=n&&Math.abs(e[3]-t[3])<=n&&Math.abs(e[4]-t[4])<=n&&Math.abs(e[5]-t[5])<=n&&Math.abs(e[6]-t[6])<=n&&Math.abs(e[7]-t[7])<=n&&Math.abs(e[8]-t[8])<=n&&Math.abs(e[9]-t[9])<=n&&Math.abs(e[10]-t[10])<=n&&Math.abs(e[11]-t[11])<=n&&Math.abs(e[12]-t[12])<=n&&Math.abs(e[13]-t[13])<=n&&Math.abs(e[14]-t[14])<=n&&Math.abs(e[15]-t[15])<=n};U.getTranslation=function(e,t){return p.typeOf.object("matrix",e),p.typeOf.object("result",t),t.x=e[12],t.y=e[13],t.z=e[14],t};U.getMatrix3=function(e,t){return p.typeOf.object("matrix",e),p.typeOf.object("result",t),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t};const D_=new B,L_=new B,F_=new Q,B_=new Q(0,0,0,1);U.inverse=function(e,t){p.typeOf.object("matrix",e),p.typeOf.object("result",t);const n=e[0],o=e[4],i=e[8],r=e[12],a=e[1],s=e[5],c=e[9],f=e[13],d=e[2],u=e[6],m=e[10],_=e[14],g=e[3],y=e[7],E=e[11],A=e[15];let S=m*A,O=_*E,M=u*A,R=_*y,N=u*E,F=m*y,z=d*A,G=_*g,q=d*E,k=m*g,X=d*y,b=u*g;const v=S*s+R*c+N*f-(O*s+M*c+F*f),C=O*a+z*c+k*f-(S*a+G*c+q*f),D=M*a+G*s+X*f-(R*a+z*s+b*f),H=F*a+q*s+b*c-(N*a+k*s+X*c),Z=O*o+M*i+F*r-(S*o+R*i+N*r),J=S*n+G*i+q*r-(O*n+z*i+k*r),K=R*n+z*o+b*r-(M*n+G*o+X*r),te=N*n+k*o+X*i-(F*n+q*o+b*i);S=i*f,O=r*c,M=o*f,R=r*s,N=o*c,F=i*s,z=n*f,G=r*a,q=n*c,k=i*a,X=n*s,b=o*a;const he=S*y+R*E+N*A-(O*y+M*E+F*A),we=O*g+z*E+k*A-(S*g+G*E+q*A),Te=M*g+G*y+X*A-(R*g+z*y+b*A),ve=F*g+q*y+b*E-(N*g+k*y+X*E),Re=M*m+F*_+O*u-(N*_+S*u+R*m),$e=q*_+S*d+G*m-(z*m+k*_+O*d),ht=z*u+b*_+R*d-(X*_+M*d+G*u),pt=X*m+N*d+k*u-(q*u+b*m+F*d);let Ve=n*v+o*C+i*D+r*H;if(Math.abs(Ve)<T.EPSILON21){if(B.equalsEpsilon(U.getMatrix3(e,D_),L_,T.EPSILON7)&&Q.equals(U.getRow(e,3,F_),B_))return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=0,t[11]=0,t[12]=-e[12],t[13]=-e[13],t[14]=-e[14],t[15]=1,t;throw new mt("matrix is not invertible because its determinate is zero.")}return Ve=1/Ve,t[0]=v*Ve,t[1]=C*Ve,t[2]=D*Ve,t[3]=H*Ve,t[4]=Z*Ve,t[5]=J*Ve,t[6]=K*Ve,t[7]=te*Ve,t[8]=he*Ve,t[9]=we*Ve,t[10]=Te*Ve,t[11]=ve*Ve,t[12]=Re*Ve,t[13]=$e*Ve,t[14]=ht*Ve,t[15]=pt*Ve,t};U.inverseTransformation=function(e,t){p.typeOf.object("matrix",e),p.typeOf.object("result",t);const n=e[0],o=e[1],i=e[2],r=e[4],a=e[5],s=e[6],c=e[8],f=e[9],d=e[10],u=e[12],m=e[13],_=e[14],g=-n*u-o*m-i*_,y=-r*u-a*m-s*_,E=-c*u-f*m-d*_;return t[0]=n,t[1]=r,t[2]=c,t[3]=0,t[4]=o,t[5]=a,t[6]=f,t[7]=0,t[8]=i,t[9]=s,t[10]=d,t[11]=0,t[12]=g,t[13]=y,t[14]=E,t[15]=1,t};const U_=new U;U.inverseTranspose=function(e,t){return p.typeOf.object("matrix",e),p.typeOf.object("result",t),U.inverse(U.transpose(e,U_),t)};U.IDENTITY=Object.freeze(new U(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1));U.ZERO=Object.freeze(new U(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0));U.COLUMN0ROW0=0;U.COLUMN0ROW1=1;U.COLUMN0ROW2=2;U.COLUMN0ROW3=3;U.COLUMN1ROW0=4;U.COLUMN1ROW1=5;U.COLUMN1ROW2=6;U.COLUMN1ROW3=7;U.COLUMN2ROW0=8;U.COLUMN2ROW1=9;U.COLUMN2ROW2=10;U.COLUMN2ROW3=11;U.COLUMN3ROW0=12;U.COLUMN3ROW1=13;U.COLUMN3ROW2=14;U.COLUMN3ROW3=15;Object.defineProperties(U.prototype,{length:{get:function(){return U.packedLength}}});U.prototype.clone=function(e){return U.clone(this,e)};U.prototype.equals=function(e){return U.equals(this,e)};U.equalsArray=function(e,t,n){return e[0]===t[n]&&e[1]===t[n+1]&&e[2]===t[n+2]&&e[3]===t[n+3]&&e[4]===t[n+4]&&e[5]===t[n+5]&&e[6]===t[n+6]&&e[7]===t[n+7]&&e[8]===t[n+8]&&e[9]===t[n+9]&&e[10]===t[n+10]&&e[11]===t[n+11]&&e[12]===t[n+12]&&e[13]===t[n+13]&&e[14]===t[n+14]&&e[15]===t[n+15]};U.prototype.equalsEpsilon=function(e,t){return U.equalsEpsilon(this,e,t)};U.prototype.toString=function(){return`(${this[0]}, ${this[4]}, ${this[8]}, ${this[12]})
(${this[1]}, ${this[5]}, ${this[9]}, ${this[13]})
(${this[2]}, ${this[6]}, ${this[10]}, ${this[14]})
(${this[3]}, ${this[7]}, ${this[11]}, ${this[15]})`};function jr(e,t,n){p.defined("array",e),p.defined("itemToFind",t),p.defined("comparator",n);let o=0,i=e.length-1,r,a;for(;o<=i;){if(r=~~((o+i)/2),a=n(e[r],t),a<0){o=r+1;continue}if(a>0){i=r-1;continue}return r}return~(i+1)}function bf(e,t,n,o,i){this.xPoleWander=e,this.yPoleWander=t,this.xPoleOffset=n,this.yPoleOffset=o,this.ut1MinusUtc=i}function Fc(e){if(e===null||isNaN(e))throw new w("year is required and must be a number.");return e%4===0&&e%100!==0||e%400===0}const kh=[31,28,31,30,31,30,31,31,30,31,30,31];function Ef(e,t,n,o,i,r,a,s){e=e??1,t=t??1,n=n??1,o=o??0,i=i??0,r=r??0,a=a??0,s=s??!1,y(),E(),this.year=e,this.month=t,this.day=n,this.hour=o,this.minute=i,this.second=r,this.millisecond=a,this.isLeapSecond=s;function y(){p.typeOf.number.greaterThanOrEquals("Year",e,1),p.typeOf.number.lessThanOrEquals("Year",e,9999),p.typeOf.number.greaterThanOrEquals("Month",t,1),p.typeOf.number.lessThanOrEquals("Month",t,12),p.typeOf.number.greaterThanOrEquals("Day",n,1),p.typeOf.number.lessThanOrEquals("Day",n,31),p.typeOf.number.greaterThanOrEquals("Hour",o,0),p.typeOf.number.lessThanOrEquals("Hour",o,23),p.typeOf.number.greaterThanOrEquals("Minute",i,0),p.typeOf.number.lessThanOrEquals("Minute",i,59),p.typeOf.bool("IsLeapSecond",s),p.typeOf.number.greaterThanOrEquals("Second",r,0),p.typeOf.number.lessThanOrEquals("Second",r,s?60:59),p.typeOf.number.greaterThanOrEquals("Millisecond",a,0),p.typeOf.number.lessThan("Millisecond",a,1e3)}function E(){const A=t===2&&Fc(e)?kh[t-1]+1:kh[t-1];if(n>A)throw new w("Month and Day represents invalid date")}}function Ze(e,t){this.julianDate=e,this.offset=t}const G_={SECONDS_PER_MILLISECOND:.001,SECONDS_PER_MINUTE:60,MINUTES_PER_HOUR:60,HOURS_PER_DAY:24,SECONDS_PER_HOUR:3600,MINUTES_PER_DAY:1440,SECONDS_PER_DAY:86400,DAYS_PER_JULIAN_CENTURY:36525,PICOSECOND:1e-9,MODIFIED_JULIAN_DATE_DIFFERENCE:24000005e-1},ft=Object.freeze(G_),q_={UTC:0,TAI:1},Fe=Object.freeze(q_),n0=new Ef,ra=[31,28,31,30,31,30,31,31,30,31,30,31],aa=29;function wf(e,t){return ae.compare(e.julianDate,t.julianDate)}const Di=new Ze;function ws(e){Di.julianDate=e;const t=ae.leapSeconds;let n=jr(t,Di,wf);n<0&&(n=~n),n>=t.length&&(n=t.length-1);let o=t[n].offset;n>0&&ae.secondsDifference(t[n].julianDate,e)>o&&(n--,o=t[n].offset),ae.addSeconds(e,o,e)}function jh(e,t){Di.julianDate=e;const n=ae.leapSeconds;let o=jr(n,Di,wf);if(o<0&&(o=~o),o===0)return ae.addSeconds(e,-n[0].offset,t);if(o>=n.length)return ae.addSeconds(e,-n[o-1].offset,t);const i=ae.secondsDifference(n[o].julianDate,e);if(i===0)return ae.addSeconds(e,-n[o].offset,t);if(!(i<=1))return ae.addSeconds(e,-n[--o].offset,t)}function Uo(e,t,n){const o=t/ft.SECONDS_PER_DAY|0;return e+=o,t-=ft.SECONDS_PER_DAY*o,t<0&&(e--,t+=ft.SECONDS_PER_DAY),n.dayNumber=e,n.secondsOfDay=t,n}function vf(e,t,n,o,i,r,a){const s=(t-14)/12|0,c=e+4800+s;let f=(1461*c/4|0)+(367*(t-2-12*s)/12|0)-(3*((c+100)/100|0)/4|0)+n-32075;o=o-12,o<0&&(o+=24);const d=r+(o*ft.SECONDS_PER_HOUR+i*ft.SECONDS_PER_MINUTE+a*ft.SECONDS_PER_MILLISECOND);return d>=43200&&(f-=1),[f,d]}const k_=/^(\d{4})$/,j_=/^(\d{4})-(\d{2})$/,V_=/^(\d{4})-?(\d{3})$/,H_=/^(\d{4})-?W(\d{2})-?(\d{1})?$/,W_=/^(\d{4})-?(\d{2})-?(\d{2})$/,Tf=/([Z+\-])?(\d{2})?:?(\d{2})?$/,Y_=/^(\d{2})(\.\d+)?/.source+Tf.source,$_=/^(\d{2}):?(\d{2})(\.\d+)?/.source+Tf.source,X_=/^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source+Tf.source,On="Invalid ISO 8601 date.";function ae(e,t,n){this.dayNumber=void 0,this.secondsOfDay=void 0,e=e??0,t=t??0,n=n??Fe.UTC;const o=e|0;t=t+(e-o)*ft.SECONDS_PER_DAY,Uo(o,t,this),n===Fe.UTC&&ws(this)}ae.fromGregorianDate=function(e,t){if(!(e instanceof Ef))throw new w("date must be a valid GregorianDate.");const n=vf(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond);return l(t)?(Uo(n[0],n[1],t),ws(t),t):new ae(n[0],n[1],Fe.UTC)};ae.fromDate=function(e,t){if(!(e instanceof Date)||isNaN(e.getTime()))throw new w("date must be a valid JavaScript Date.");const n=vf(e.getUTCFullYear(),e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds());return l(t)?(Uo(n[0],n[1],t),ws(t),t):new ae(n[0],n[1],Fe.UTC)};ae.fromIso8601=function(e,t){if(typeof e!="string")throw new w(On);e=e.replace(",",".");let n=e.split("T"),o,i=1,r=1,a=0,s=0,c=0,f=0;const d=n[0],u=n[1];let m,_;if(!l(d))throw new w(On);let g;if(n=d.match(W_),n!==null){if(g=d.split("-").length-1,g>0&&g!==2)throw new w(On);o=+n[1],i=+n[2],r=+n[3]}else if(n=d.match(j_),n!==null)o=+n[1],i=+n[2];else if(n=d.match(k_),n!==null)o=+n[1];else{let S;if(n=d.match(V_),n!==null){if(o=+n[1],S=+n[2],_=Fc(o),S<1||_&&S>366||!_&&S>365)throw new w(On)}else if(n=d.match(H_),n!==null){o=+n[1];const O=+n[2],M=+n[3]||0;if(g=d.split("-").length-1,g>0&&(!l(n[3])&&g!==1||l(n[3])&&g!==2))throw new w(On);const R=new Date(Date.UTC(o,0,4));S=O*7+M-R.getUTCDay()-3}else throw new w(On);m=new Date(Date.UTC(o,0,1)),m.setUTCDate(S),i=m.getUTCMonth()+1,r=m.getUTCDate()}if(_=Fc(o),i<1||i>12||r<1||(i!==2||!_)&&r>ra[i-1]||_&&i===2&&r>aa)throw new w(On);let y;if(l(u)){if(n=u.match(X_),n!==null){if(g=u.split(":").length-1,g>0&&g!==2&&g!==3)throw new w(On);a=+n[1],s=+n[2],c=+n[3],f=+(n[4]||0)*1e3,y=5}else if(n=u.match($_),n!==null){if(g=u.split(":").length-1,g>2)throw new w(On);a=+n[1],s=+n[2],c=+(n[3]||0)*60,y=4}else if(n=u.match(Y_),n!==null)a=+n[1],s=+(n[2]||0)*60,y=3;else throw new w(On);if(s>=60||c>=61||a>24||a===24&&(s>0||c>0||f>0))throw new w(On);const S=n[y],O=+n[y+1],M=+(n[y+2]||0);switch(S){case"+":a=a-O,s=s-M;break;case"-":a=a+O,s=s+M;break;case"Z":break;default:s=s+new Date(Date.UTC(o,i-1,r,a,s)).getTimezoneOffset();break}}const E=c===60;for(E&&c--;s>=60;)s-=60,a++;for(;a>=24;)a-=24,r++;for(m=_&&i===2?aa:ra[i-1];r>m;)r-=m,i++,i>12&&(i-=12,o++),m=_&&i===2?aa:ra[i-1];for(;s<0;)s+=60,a--;for(;a<0;)a+=24,r--;for(;r<1;)i--,i<1&&(i+=12,o--),m=_&&i===2?aa:ra[i-1],r+=m;const A=vf(o,i,r,a,s,c,f);return l(t)?(Uo(A[0],A[1],t),ws(t)):t=new ae(A[0],A[1],Fe.UTC),E&&ae.addSeconds(t,1,t),t};ae.now=function(e){return ae.fromDate(new Date,e)};const sa=new ae(0,0,Fe.TAI);ae.toGregorianDate=function(e,t){if(!l(e))throw new w("julianDate is required.");let n=!1,o=jh(e,sa);l(o)||(ae.addSeconds(e,-1,sa),o=jh(sa,sa),n=!0);let i=o.dayNumber;const r=o.secondsOfDay;r>=43200&&(i+=1);let a=i+68569|0;const s=4*a/146097|0;a=a-((146097*s+3)/4|0)|0;const c=4e3*(a+1)/1461001|0;a=a-(1461*c/4|0)+31|0;const f=80*a/2447|0,d=a-(2447*f/80|0)|0;a=f/11|0;const u=f+2-12*a|0,m=100*(s-49)+c+a|0;let _=r/ft.SECONDS_PER_HOUR|0,g=r-_*ft.SECONDS_PER_HOUR;const y=g/ft.SECONDS_PER_MINUTE|0;g=g-y*ft.SECONDS_PER_MINUTE;let E=g|0;const A=(g-E)/ft.SECONDS_PER_MILLISECOND;return _+=12,_>23&&(_-=24),n&&(E+=1),l(t)?(t.year=m,t.month=u,t.day=d,t.hour=_,t.minute=y,t.second=E,t.millisecond=A,t.isLeapSecond=n,t):new Ef(m,u,d,_,y,E,A,n)};ae.toDate=function(e){if(!l(e))throw new w("julianDate is required.");const t=ae.toGregorianDate(e,n0);let n=t.second;return t.isLeapSecond&&(n-=1),new Date(Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,n,t.millisecond))};ae.toIso8601=function(e,t){if(!l(e))throw new w("julianDate is required.");const n=ae.toGregorianDate(e,n0);let o=n.year,i=n.month,r=n.day,a=n.hour;const s=n.minute,c=n.second,f=n.millisecond;o===1e4&&i===1&&r===1&&a===0&&s===0&&c===0&&f===0&&(o=9999,i=12,r=31,a=24);let d;if(!l(t)&&f!==0){const u=f*.01;return d=u<1e-6?u.toFixed(20).replace(".","").replace(/0+$/,""):u.toString().replace(".",""),`${o.toString().padStart(4,"0")}-${i.toString().padStart(2,"0")}-${r.toString().padStart(2,"0")}T${a.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}.${d}Z`}return!l(t)||t===0?`${o.toString().padStart(4,"0")}-${i.toString().padStart(2,"0")}-${r.toString().padStart(2,"0")}T${a.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}Z`:(d=(f*.01).toFixed(t).replace(".","").slice(0,t),`${o.toString().padStart(4,"0")}-${i.toString().padStart(2,"0")}-${r.toString().padStart(2,"0")}T${a.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}.${d}Z`)};ae.clone=function(e,t){if(l(e))return l(t)?(t.dayNumber=e.dayNumber,t.secondsOfDay=e.secondsOfDay,t):new ae(e.dayNumber,e.secondsOfDay,Fe.TAI)};ae.compare=function(e,t){if(!l(e))throw new w("left is required.");if(!l(t))throw new w("right is required.");const n=e.dayNumber-t.dayNumber;return n!==0?n:e.secondsOfDay-t.secondsOfDay};ae.equals=function(e,t){return e===t||l(e)&&l(t)&&e.dayNumber===t.dayNumber&&e.secondsOfDay===t.secondsOfDay};ae.equalsEpsilon=function(e,t,n){return n=n??0,e===t||l(e)&&l(t)&&Math.abs(ae.secondsDifference(e,t))<=n};ae.totalDays=function(e){if(!l(e))throw new w("julianDate is required.");return e.dayNumber+e.secondsOfDay/ft.SECONDS_PER_DAY};ae.secondsDifference=function(e,t){if(!l(e))throw new w("left is required.");if(!l(t))throw new w("right is required.");return(e.dayNumber-t.dayNumber)*ft.SECONDS_PER_DAY+(e.secondsOfDay-t.secondsOfDay)};ae.daysDifference=function(e,t){if(!l(e))throw new w("left is required.");if(!l(t))throw new w("right is required.");const n=e.dayNumber-t.dayNumber,o=(e.secondsOfDay-t.secondsOfDay)/ft.SECONDS_PER_DAY;return n+o};ae.computeTaiMinusUtc=function(e){Di.julianDate=e;const t=ae.leapSeconds;let n=jr(t,Di,wf);return n<0&&(n=~n,--n,n<0&&(n=0)),t[n].offset};ae.addSeconds=function(e,t,n){if(!l(e))throw new w("julianDate is required.");if(!l(t))throw new w("seconds is required.");if(!l(n))throw new w("result is required.");return Uo(e.dayNumber,e.secondsOfDay+t,n)};ae.addMinutes=function(e,t,n){if(!l(e))throw new w("julianDate is required.");if(!l(t))throw new w("minutes is required.");if(!l(n))throw new w("result is required.");const o=e.secondsOfDay+t*ft.SECONDS_PER_MINUTE;return Uo(e.dayNumber,o,n)};ae.addHours=function(e,t,n){if(!l(e))throw new w("julianDate is required.");if(!l(t))throw new w("hours is required.");if(!l(n))throw new w("result is required.");const o=e.secondsOfDay+t*ft.SECONDS_PER_HOUR;return Uo(e.dayNumber,o,n)};ae.addDays=function(e,t,n){if(!l(e))throw new w("julianDate is required.");if(!l(t))throw new w("days is required.");if(!l(n))throw new w("result is required.");const o=e.dayNumber+t;return Uo(o,e.secondsOfDay,n)};ae.lessThan=function(e,t){return ae.compare(e,t)<0};ae.lessThanOrEquals=function(e,t){return ae.compare(e,t)<=0};ae.greaterThan=function(e,t){return ae.compare(e,t)>0};ae.greaterThanOrEquals=function(e,t){return ae.compare(e,t)>=0};ae.prototype.clone=function(e){return ae.clone(this,e)};ae.prototype.equals=function(e){return ae.equals(this,e)};ae.prototype.equalsEpsilon=function(e,t){return ae.equalsEpsilon(this,e,t)};ae.prototype.toString=function(){return ae.toIso8601(this)};ae.leapSeconds=[new Ze(new ae(2441317,43210,Fe.TAI),10),new Ze(new ae(2441499,43211,Fe.TAI),11),new Ze(new ae(2441683,43212,Fe.TAI),12),new Ze(new ae(2442048,43213,Fe.TAI),13),new Ze(new ae(2442413,43214,Fe.TAI),14),new Ze(new ae(2442778,43215,Fe.TAI),15),new Ze(new ae(2443144,43216,Fe.TAI),16),new Ze(new ae(2443509,43217,Fe.TAI),17),new Ze(new ae(2443874,43218,Fe.TAI),18),new Ze(new ae(2444239,43219,Fe.TAI),19),new Ze(new ae(2444786,43220,Fe.TAI),20),new Ze(new ae(2445151,43221,Fe.TAI),21),new Ze(new ae(2445516,43222,Fe.TAI),22),new Ze(new ae(2446247,43223,Fe.TAI),23),new Ze(new ae(2447161,43224,Fe.TAI),24),new Ze(new ae(2447892,43225,Fe.TAI),25),new Ze(new ae(2448257,43226,Fe.TAI),26),new Ze(new ae(2448804,43227,Fe.TAI),27),new Ze(new ae(2449169,43228,Fe.TAI),28),new Ze(new ae(2449534,43229,Fe.TAI),29),new Ze(new ae(2450083,43230,Fe.TAI),30),new Ze(new ae(2450630,43231,Fe.TAI),31),new Ze(new ae(2451179,43232,Fe.TAI),32),new Ze(new ae(2453736,43233,Fe.TAI),33),new Ze(new ae(2454832,43234,Fe.TAI),34),new Ze(new ae(2456109,43235,Fe.TAI),35),new Ze(new ae(2457204,43236,Fe.TAI),36),new Ze(new ae(2457754,43237,Fe.TAI),37)];var o0={exports:{}},lr={exports:{}};/*! https://mths.be/punycode v1.4.0 by @mathias */lr.exports;var Vh;function Z_(){return Vh||(Vh=1,function(e,t){(function(n){var o=t&&!t.nodeType&&t,i=!e.nodeType&&e,r=typeof Yn=="object"&&Yn;(r.global===r||r.window===r||r.self===r)&&(n=r);var a,s=2147483647,c=36,f=1,d=26,u=38,m=700,_=72,g=128,y="-",E=/^xn--/,A=/[^\x20-\x7E]/,S=/[\x2E\u3002\uFF0E\uFF61]/g,O={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},M=c-f,R=Math.floor,N=String.fromCharCode,F;function z(K){throw new RangeError(O[K])}function G(K,te){for(var he=K.length,we=[];he--;)we[he]=te(K[he]);return we}function q(K,te){var he=K.split("@"),we="";he.length>1&&(we=he[0]+"@",K=he[1]),K=K.replace(S,".");var Te=K.split("."),ve=G(Te,te).join(".");return we+ve}function k(K){for(var te=[],he=0,we=K.length,Te,ve;he<we;)Te=K.charCodeAt(he++),Te>=55296&&Te<=56319&&he<we?(ve=K.charCodeAt(he++),(ve&64512)==56320?te.push(((Te&1023)<<10)+(ve&1023)+65536):(te.push(Te),he--)):te.push(Te);return te}function X(K){return G(K,function(te){var he="";return te>65535&&(te-=65536,he+=N(te>>>10&1023|55296),te=56320|te&1023),he+=N(te),he}).join("")}function b(K){return K-48<10?K-22:K-65<26?K-65:K-97<26?K-97:c}function v(K,te){return K+22+75*(K<26)-((te!=0)<<5)}function C(K,te,he){var we=0;for(K=he?R(K/m):K>>1,K+=R(K/te);K>M*d>>1;we+=c)K=R(K/M);return R(we+(M+1)*K/(K+u))}function D(K){var te=[],he=K.length,we,Te=0,ve=g,Re=_,$e,ht,pt,Ve,Et,Gt,Qt,_n,qt;for($e=K.lastIndexOf(y),$e<0&&($e=0),ht=0;ht<$e;++ht)K.charCodeAt(ht)>=128&&z("not-basic"),te.push(K.charCodeAt(ht));for(pt=$e>0?$e+1:0;pt<he;){for(Ve=Te,Et=1,Gt=c;pt>=he&&z("invalid-input"),Qt=b(K.charCodeAt(pt++)),(Qt>=c||Qt>R((s-Te)/Et))&&z("overflow"),Te+=Qt*Et,_n=Gt<=Re?f:Gt>=Re+d?d:Gt-Re,!(Qt<_n);Gt+=c)qt=c-_n,Et>R(s/qt)&&z("overflow"),Et*=qt;we=te.length+1,Re=C(Te-Ve,we,Ve==0),R(Te/we)>s-ve&&z("overflow"),ve+=R(Te/we),Te%=we,te.splice(Te++,0,ve)}return X(te)}function H(K){var te,he,we,Te,ve,Re,$e,ht,pt,Ve,Et,Gt=[],Qt,_n,qt,Xi;for(K=k(K),Qt=K.length,te=g,he=0,ve=_,Re=0;Re<Qt;++Re)Et=K[Re],Et<128&&Gt.push(N(Et));for(we=Te=Gt.length,Te&&Gt.push(y);we<Qt;){for($e=s,Re=0;Re<Qt;++Re)Et=K[Re],Et>=te&&Et<$e&&($e=Et);for(_n=we+1,$e-te>R((s-he)/_n)&&z("overflow"),he+=($e-te)*_n,te=$e,Re=0;Re<Qt;++Re)if(Et=K[Re],Et<te&&++he>s&&z("overflow"),Et==te){for(ht=he,pt=c;Ve=pt<=ve?f:pt>=ve+d?d:pt-ve,!(ht<Ve);pt+=c)Xi=ht-Ve,qt=c-Ve,Gt.push(N(v(Ve+Xi%qt,0))),ht=R(Xi/qt);Gt.push(N(v(ht,0))),ve=C(he,_n,we==Te),he=0,++we}++he,++te}return Gt.join("")}function Z(K){return q(K,function(te){return E.test(te)?D(te.slice(4).toLowerCase()):te})}function J(K){return q(K,function(te){return A.test(te)?"xn--"+H(te):te})}if(a={version:"1.3.2",ucs2:{decode:k,encode:X},decode:D,encode:H,toASCII:J,toUnicode:Z},o&&i)if(e.exports==o)i.exports=a;else for(F in a)a.hasOwnProperty(F)&&(o[F]=a[F]);else n.punycode=a})(Yn)}(lr,lr.exports)),lr.exports}var qs={exports:{}};/*!
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
 */var Hh;function K_(){return Hh||(Hh=1,function(e){(function(t,n){e.exports?e.exports=n():t.IPv6=n(t)})(Yn,function(t){var n=t&&t.IPv6;function o(r){var a=r.toLowerCase(),s=a.split(":"),c=s.length,f=8;s[0]===""&&s[1]===""&&s[2]===""?(s.shift(),s.shift()):s[0]===""&&s[1]===""?s.shift():s[c-1]===""&&s[c-2]===""&&s.pop(),c=s.length,s[c-1].indexOf(".")!==-1&&(f=7);var d;for(d=0;d<c&&s[d]!=="";d++);if(d<f)for(s.splice(d,1,"0000");s.length<f;)s.splice(d,0,"0000");for(var u,m=0;m<f;m++){u=s[m].split("");for(var _=0;_<3&&(u[0]==="0"&&u.length>1);_++)u.splice(0,1);s[m]=u.join("")}var g=-1,y=0,E=0,A=-1,S=!1;for(m=0;m<f;m++)S?s[m]==="0"?E+=1:(S=!1,E>y&&(g=A,y=E)):s[m]==="0"&&(S=!0,A=m,E=1);E>y&&(g=A,y=E),y>1&&s.splice(g,y,""),c=s.length;var O="";for(s[0]===""&&(O=":"),m=0;m<c&&(O+=s[m],m!==c-1);m++)O+=":";return s[c-1]===""&&(O+=":"),O}function i(){return t.IPv6===this&&(t.IPv6=n),this}return{best:o,noConflict:i}})}(qs)),qs.exports}var ks={exports:{}};/*!
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
 */var Wh;function Q_(){return Wh||(Wh=1,function(e){(function(t,n){e.exports?e.exports=n():t.SecondLevelDomains=n(t)})(Yn,function(t){var n=t&&t.SecondLevelDomains,o={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ",do:" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ",in:" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch ",com:"ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ",net:"gb jp se uk ",org:"ae",de:"com "},has:function(i){var r=i.lastIndexOf(".");if(r<=0||r>=i.length-1)return!1;var a=i.lastIndexOf(".",r-1);if(a<=0||a>=r-1)return!1;var s=o.list[i.slice(r+1)];return s?s.indexOf(" "+i.slice(a+1,r)+" ")>=0:!1},is:function(i){var r=i.lastIndexOf(".");if(r<=0||r>=i.length-1)return!1;var a=i.lastIndexOf(".",r-1);if(a>=0)return!1;var s=o.list[i.slice(r+1)];return s?s.indexOf(" "+i.slice(0,r)+" ")>=0:!1},get:function(i){var r=i.lastIndexOf(".");if(r<=0||r>=i.length-1)return null;var a=i.lastIndexOf(".",r-1);if(a<=0||a>=r-1)return null;var s=o.list[i.slice(r+1)];return!s||s.indexOf(" "+i.slice(a+1,r)+" ")<0?null:i.slice(a+1)},noConflict:function(){return t.SecondLevelDomains===this&&(t.SecondLevelDomains=n),this}};return o})}(ks)),ks.exports}/*!
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
 */(function(e){(function(t,n){e.exports?e.exports=n(Z_(),K_(),Q_()):t.URI=n(t.punycode,t.IPv6,t.SecondLevelDomains,t)})(Yn,function(t,n,o,i){var r=i&&i.URI;function a(b,v){var C=arguments.length>=1,D=arguments.length>=2;if(!(this instanceof a))return C?D?new a(b,v):new a(b):new a;if(b===void 0){if(C)throw new TypeError("undefined is not a valid argument for URI");typeof location<"u"?b=location.href+"":b=""}if(b===null&&C)throw new TypeError("null is not a valid argument for URI");return this.href(b),v!==void 0?this.absoluteTo(v):this}function s(b){return/^[0-9]+$/.test(b)}a.version="1.19.11";var c=a.prototype,f=Object.prototype.hasOwnProperty;function d(b){return b.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function u(b){return b===void 0?"Undefined":String(Object.prototype.toString.call(b)).slice(8,-1)}function m(b){return u(b)==="Array"}function _(b,v){var C={},D,H;if(u(v)==="RegExp")C=null;else if(m(v))for(D=0,H=v.length;D<H;D++)C[v[D]]=!0;else C[v]=!0;for(D=0,H=b.length;D<H;D++){var Z=C&&C[b[D]]!==void 0||!C&&v.test(b[D]);Z&&(b.splice(D,1),H--,D--)}return b}function g(b,v){var C,D;if(m(v)){for(C=0,D=v.length;C<D;C++)if(!g(b,v[C]))return!1;return!0}var H=u(v);for(C=0,D=b.length;C<D;C++)if(H==="RegExp"){if(typeof b[C]=="string"&&b[C].match(v))return!0}else if(b[C]===v)return!0;return!1}function y(b,v){if(!m(b)||!m(v)||b.length!==v.length)return!1;b.sort(),v.sort();for(var C=0,D=b.length;C<D;C++)if(b[C]!==v[C])return!1;return!0}function E(b){var v=/^\/+|\/+$/g;return b.replace(v,"")}a._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,preventInvalidHostname:a.preventInvalidHostname,duplicateQueryParameters:a.duplicateQueryParameters,escapeQuerySpace:a.escapeQuerySpace}},a.preventInvalidHostname=!1,a.duplicateQueryParameters=!1,a.escapeQuerySpace=!0,a.protocol_expression=/^[a-z][a-z0-9.+-]*$/i,a.idn_expression=/[^a-z0-9\._-]/i,a.punycode_expression=/(xn--)/i,a.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,a.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig,a.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,parens:/(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g},a.leading_whitespace_expression=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,a.ascii_tab_whitespace=/[\u0009\u000A\u000D]+/g,a.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"},a.hostProtocols=["http","https"],a.invalid_hostname_characters=/[^a-zA-Z0-9\.\-:_]/,a.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"},a.getDomAttribute=function(b){if(!(!b||!b.nodeName)){var v=b.nodeName.toLowerCase();if(!(v==="input"&&b.type!=="image"))return a.domAttributes[v]}};function A(b){return escape(b)}function S(b){return encodeURIComponent(b).replace(/[!'()*]/g,A).replace(/\*/g,"%2A")}a.encode=S,a.decode=decodeURIComponent,a.iso8859=function(){a.encode=escape,a.decode=unescape},a.unicode=function(){a.encode=S,a.decode=decodeURIComponent},a.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}},a.encodeQuery=function(b,v){var C=a.encode(b+"");return v===void 0&&(v=a.escapeQuerySpace),v?C.replace(/%20/g,"+"):C},a.decodeQuery=function(b,v){b+="",v===void 0&&(v=a.escapeQuerySpace);try{return a.decode(v?b.replace(/\+/g,"%20"):b)}catch{return b}};var O={encode:"encode",decode:"decode"},M,R=function(b,v){return function(C){try{return a[v](C+"").replace(a.characters[b][v].expression,function(D){return a.characters[b][v].map[D]})}catch{return C}}};for(M in O)a[M+"PathSegment"]=R("pathname",O[M]),a[M+"UrnPathSegment"]=R("urnpath",O[M]);var N=function(b,v,C){return function(D){var H;C?H=function(te){return a[v](a[C](te))}:H=a[v];for(var Z=(D+"").split(b),J=0,K=Z.length;J<K;J++)Z[J]=H(Z[J]);return Z.join(b)}};a.decodePath=N("/","decodePathSegment"),a.decodeUrnPath=N(":","decodeUrnPathSegment"),a.recodePath=N("/","encodePathSegment","decode"),a.recodeUrnPath=N(":","encodeUrnPathSegment","decode"),a.encodeReserved=R("reserved","encode"),a.parse=function(b,v){var C;return v||(v={preventInvalidHostname:a.preventInvalidHostname}),b=b.replace(a.leading_whitespace_expression,""),b=b.replace(a.ascii_tab_whitespace,""),C=b.indexOf("#"),C>-1&&(v.fragment=b.substring(C+1)||null,b=b.substring(0,C)),C=b.indexOf("?"),C>-1&&(v.query=b.substring(C+1)||null,b=b.substring(0,C)),b=b.replace(/^(https?|ftp|wss?)?:+[/\\]*/i,"$1://"),b=b.replace(/^[/\\]{2,}/i,"//"),b.substring(0,2)==="//"?(v.protocol=null,b=b.substring(2),b=a.parseAuthority(b,v)):(C=b.indexOf(":"),C>-1&&(v.protocol=b.substring(0,C)||null,v.protocol&&!v.protocol.match(a.protocol_expression)?v.protocol=void 0:b.substring(C+1,C+3).replace(/\\/g,"/")==="//"?(b=b.substring(C+3),b=a.parseAuthority(b,v)):(b=b.substring(C+1),v.urn=!0))),v.path=b,v},a.parseHost=function(b,v){b||(b=""),b=b.replace(/\\/g,"/");var C=b.indexOf("/"),D,H;if(C===-1&&(C=b.length),b.charAt(0)==="[")D=b.indexOf("]"),v.hostname=b.substring(1,D)||null,v.port=b.substring(D+2,C)||null,v.port==="/"&&(v.port=null);else{var Z=b.indexOf(":"),J=b.indexOf("/"),K=b.indexOf(":",Z+1);K!==-1&&(J===-1||K<J)?(v.hostname=b.substring(0,C)||null,v.port=null):(H=b.substring(0,C).split(":"),v.hostname=H[0]||null,v.port=H[1]||null)}return v.hostname&&b.substring(C).charAt(0)!=="/"&&(C++,b="/"+b),v.preventInvalidHostname&&a.ensureValidHostname(v.hostname,v.protocol),v.port&&a.ensureValidPort(v.port),b.substring(C)||"/"},a.parseAuthority=function(b,v){return b=a.parseUserinfo(b,v),a.parseHost(b,v)},a.parseUserinfo=function(b,v){var C=b,D=b.indexOf("\\");D!==-1&&(b=b.replace(/\\/g,"/"));var H=b.indexOf("/"),Z=b.lastIndexOf("@",H>-1?H:b.length-1),J;return Z>-1&&(H===-1||Z<H)?(J=b.substring(0,Z).split(":"),v.username=J[0]?a.decode(J[0]):null,J.shift(),v.password=J[0]?a.decode(J.join(":")):null,b=C.substring(Z+1)):(v.username=null,v.password=null),b},a.parseQuery=function(b,v){if(!b)return{};if(b=b.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,""),!b)return{};for(var C={},D=b.split("&"),H=D.length,Z,J,K,te=0;te<H;te++)Z=D[te].split("="),J=a.decodeQuery(Z.shift(),v),K=Z.length?a.decodeQuery(Z.join("="),v):null,J!=="__proto__"&&(f.call(C,J)?((typeof C[J]=="string"||C[J]===null)&&(C[J]=[C[J]]),C[J].push(K)):C[J]=K);return C},a.build=function(b){var v="",C=!1;return b.protocol&&(v+=b.protocol+":"),!b.urn&&(v||b.hostname)&&(v+="//",C=!0),v+=a.buildAuthority(b)||"",typeof b.path=="string"&&(b.path.charAt(0)!=="/"&&C&&(v+="/"),v+=b.path),typeof b.query=="string"&&b.query&&(v+="?"+b.query),typeof b.fragment=="string"&&b.fragment&&(v+="#"+b.fragment),v},a.buildHost=function(b){var v="";if(b.hostname)a.ip6_expression.test(b.hostname)?v+="["+b.hostname+"]":v+=b.hostname;else return"";return b.port&&(v+=":"+b.port),v},a.buildAuthority=function(b){return a.buildUserinfo(b)+a.buildHost(b)},a.buildUserinfo=function(b){var v="";return b.username&&(v+=a.encode(b.username)),b.password&&(v+=":"+a.encode(b.password)),v&&(v+="@"),v},a.buildQuery=function(b,v,C){var D="",H,Z,J,K;for(Z in b)if(Z!=="__proto__"&&f.call(b,Z))if(m(b[Z]))for(H={},J=0,K=b[Z].length;J<K;J++)b[Z][J]!==void 0&&H[b[Z][J]+""]===void 0&&(D+="&"+a.buildQueryParameter(Z,b[Z][J],C),v!==!0&&(H[b[Z][J]+""]=!0));else b[Z]!==void 0&&(D+="&"+a.buildQueryParameter(Z,b[Z],C));return D.substring(1)},a.buildQueryParameter=function(b,v,C){return a.encodeQuery(b,C)+(v!==null?"="+a.encodeQuery(v,C):"")},a.addQuery=function(b,v,C){if(typeof v=="object")for(var D in v)f.call(v,D)&&a.addQuery(b,D,v[D]);else if(typeof v=="string"){if(b[v]===void 0){b[v]=C;return}else typeof b[v]=="string"&&(b[v]=[b[v]]);m(C)||(C=[C]),b[v]=(b[v]||[]).concat(C)}else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter")},a.setQuery=function(b,v,C){if(typeof v=="object")for(var D in v)f.call(v,D)&&a.setQuery(b,D,v[D]);else if(typeof v=="string")b[v]=C===void 0?null:C;else throw new TypeError("URI.setQuery() accepts an object, string as the name parameter")},a.removeQuery=function(b,v,C){var D,H,Z;if(m(v))for(D=0,H=v.length;D<H;D++)b[v[D]]=void 0;else if(u(v)==="RegExp")for(Z in b)v.test(Z)&&(b[Z]=void 0);else if(typeof v=="object")for(Z in v)f.call(v,Z)&&a.removeQuery(b,Z,v[Z]);else if(typeof v=="string")C!==void 0?u(C)==="RegExp"?!m(b[v])&&C.test(b[v])?b[v]=void 0:b[v]=_(b[v],C):b[v]===String(C)&&(!m(C)||C.length===1)?b[v]=void 0:m(b[v])&&(b[v]=_(b[v],C)):b[v]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter")},a.hasQuery=function(b,v,C,D){switch(u(v)){case"String":break;case"RegExp":for(var H in b)if(f.call(b,H)&&v.test(H)&&(C===void 0||a.hasQuery(b,H,C)))return!0;return!1;case"Object":for(var Z in v)if(f.call(v,Z)&&!a.hasQuery(b,Z,v[Z]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter")}switch(u(C)){case"Undefined":return v in b;case"Boolean":var J=!!(m(b[v])?b[v].length:b[v]);return C===J;case"Function":return!!C(b[v],v,b);case"Array":if(!m(b[v]))return!1;var K=D?g:y;return K(b[v],C);case"RegExp":return m(b[v])?D?g(b[v],C):!1:!!(b[v]&&b[v].match(C));case"Number":C=String(C);case"String":return m(b[v])?D?g(b[v],C):!1:b[v]===C;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")}},a.joinPaths=function(){for(var b=[],v=[],C=0,D=0;D<arguments.length;D++){var H=new a(arguments[D]);b.push(H);for(var Z=H.segment(),J=0;J<Z.length;J++)typeof Z[J]=="string"&&v.push(Z[J]),Z[J]&&C++}if(!v.length||!C)return new a("");var K=new a("").segment(v);return(b[0].path()===""||b[0].path().slice(0,1)==="/")&&K.path("/"+K.path()),K.normalize()},a.commonPath=function(b,v){var C=Math.min(b.length,v.length),D;for(D=0;D<C;D++)if(b.charAt(D)!==v.charAt(D)){D--;break}return D<1?b.charAt(0)===v.charAt(0)&&b.charAt(0)==="/"?"/":"":((b.charAt(D)!=="/"||v.charAt(D)!=="/")&&(D=b.substring(0,D).lastIndexOf("/")),b.substring(0,D+1))},a.withinString=function(b,v,C){C||(C={});var D=C.start||a.findUri.start,H=C.end||a.findUri.end,Z=C.trim||a.findUri.trim,J=C.parens||a.findUri.parens,K=/[a-z0-9-]=["']?$/i;for(D.lastIndex=0;;){var te=D.exec(b);if(!te)break;var he=te.index;if(C.ignoreHtml){var we=b.slice(Math.max(he-3,0),he);if(we&&K.test(we))continue}for(var Te=he+b.slice(he).search(H),ve=b.slice(he,Te),Re=-1;;){var $e=J.exec(ve);if(!$e)break;var ht=$e.index+$e[0].length;Re=Math.max(Re,ht)}if(Re>-1?ve=ve.slice(0,Re)+ve.slice(Re).replace(Z,""):ve=ve.replace(Z,""),!(ve.length<=te[0].length)&&!(C.ignore&&C.ignore.test(ve))){Te=he+ve.length;var pt=v(ve,he,Te,b);if(pt===void 0){D.lastIndex=Te;continue}pt=String(pt),b=b.slice(0,he)+pt+b.slice(Te),D.lastIndex=he+pt.length}}return D.lastIndex=0,b},a.ensureValidHostname=function(b,v){var C=!!b,D=!!v,H=!1;if(D&&(H=g(a.hostProtocols,v)),H&&!C)throw new TypeError("Hostname cannot be empty, if protocol is "+v);if(b&&b.match(a.invalid_hostname_characters)){if(!t)throw new TypeError('Hostname "'+b+'" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');if(t.toASCII(b).match(a.invalid_hostname_characters))throw new TypeError('Hostname "'+b+'" contains characters other than [A-Z0-9.-:_]')}},a.ensureValidPort=function(b){if(b){var v=Number(b);if(!(s(v)&&v>0&&v<65536))throw new TypeError('Port "'+b+'" is not a valid port')}},a.noConflict=function(b){if(b){var v={URI:this.noConflict()};return i.URITemplate&&typeof i.URITemplate.noConflict=="function"&&(v.URITemplate=i.URITemplate.noConflict()),i.IPv6&&typeof i.IPv6.noConflict=="function"&&(v.IPv6=i.IPv6.noConflict()),i.SecondLevelDomains&&typeof i.SecondLevelDomains.noConflict=="function"&&(v.SecondLevelDomains=i.SecondLevelDomains.noConflict()),v}else i.URI===this&&(i.URI=r);return this},c.build=function(b){return b===!0?this._deferred_build=!0:(b===void 0||this._deferred_build)&&(this._string=a.build(this._parts),this._deferred_build=!1),this},c.clone=function(){return new a(this)},c.valueOf=c.toString=function(){return this.build(!1)._string};function F(b){return function(v,C){return v===void 0?this._parts[b]||"":(this._parts[b]=v||null,this.build(!C),this)}}function z(b,v){return function(C,D){return C===void 0?this._parts[b]||"":(C!==null&&(C=C+"",C.charAt(0)===v&&(C=C.substring(1))),this._parts[b]=C,this.build(!D),this)}}c.protocol=F("protocol"),c.username=F("username"),c.password=F("password"),c.hostname=F("hostname"),c.port=F("port"),c.query=z("query","?"),c.fragment=z("fragment","#"),c.search=function(b,v){var C=this.query(b,v);return typeof C=="string"&&C.length?"?"+C:C},c.hash=function(b,v){var C=this.fragment(b,v);return typeof C=="string"&&C.length?"#"+C:C},c.pathname=function(b,v){if(b===void 0||b===!0){var C=this._parts.path||(this._parts.hostname?"/":"");return b?(this._parts.urn?a.decodeUrnPath:a.decodePath)(C):C}else return this._parts.urn?this._parts.path=b?a.recodeUrnPath(b):"":this._parts.path=b?a.recodePath(b):"/",this.build(!v),this},c.path=c.pathname,c.href=function(b,v){var C;if(b===void 0)return this.toString();this._string="",this._parts=a._parts();var D=b instanceof a,H=typeof b=="object"&&(b.hostname||b.path||b.pathname);if(b.nodeName){var Z=a.getDomAttribute(b);b=b[Z]||"",H=!1}if(!D&&H&&b.pathname!==void 0&&(b=b.toString()),typeof b=="string"||b instanceof String)this._parts=a.parse(String(b),this._parts);else if(D||H){var J=D?b._parts:b;for(C in J)C!=="query"&&f.call(this._parts,C)&&(this._parts[C]=J[C]);J.query&&this.query(J.query,!1)}else throw new TypeError("invalid input");return this.build(!v),this},c.is=function(b){var v=!1,C=!1,D=!1,H=!1,Z=!1,J=!1,K=!1,te=!this._parts.urn;switch(this._parts.hostname&&(te=!1,C=a.ip4_expression.test(this._parts.hostname),D=a.ip6_expression.test(this._parts.hostname),v=C||D,H=!v,Z=H&&o&&o.has(this._parts.hostname),J=H&&a.idn_expression.test(this._parts.hostname),K=H&&a.punycode_expression.test(this._parts.hostname)),b.toLowerCase()){case"relative":return te;case"absolute":return!te;case"domain":case"name":return H;case"sld":return Z;case"ip":return v;case"ip4":case"ipv4":case"inet4":return C;case"ip6":case"ipv6":case"inet6":return D;case"idn":return J;case"url":return!this._parts.urn;case"urn":return!!this._parts.urn;case"punycode":return K}return null};var G=c.protocol,q=c.port,k=c.hostname;c.protocol=function(b,v){if(b&&(b=b.replace(/:(\/\/)?$/,""),!b.match(a.protocol_expression)))throw new TypeError('Protocol "'+b+`" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]`);return G.call(this,b,v)},c.scheme=c.protocol,c.port=function(b,v){return this._parts.urn?b===void 0?"":this:(b!==void 0&&(b===0&&(b=null),b&&(b+="",b.charAt(0)===":"&&(b=b.substring(1)),a.ensureValidPort(b))),q.call(this,b,v))},c.hostname=function(b,v){if(this._parts.urn)return b===void 0?"":this;if(b!==void 0){var C={preventInvalidHostname:this._parts.preventInvalidHostname},D=a.parseHost(b,C);if(D!=="/")throw new TypeError('Hostname "'+b+'" contains characters other than [A-Z0-9.-]');b=C.hostname,this._parts.preventInvalidHostname&&a.ensureValidHostname(b,this._parts.protocol)}return k.call(this,b,v)},c.origin=function(b,v){if(this._parts.urn)return b===void 0?"":this;if(b===void 0){var C=this.protocol(),D=this.authority();return D?(C?C+"://":"")+this.authority():""}else{var H=a(b);return this.protocol(H.protocol()).authority(H.authority()).build(!v),this}},c.host=function(b,v){if(this._parts.urn)return b===void 0?"":this;if(b===void 0)return this._parts.hostname?a.buildHost(this._parts):"";var C=a.parseHost(b,this._parts);if(C!=="/")throw new TypeError('Hostname "'+b+'" contains characters other than [A-Z0-9.-]');return this.build(!v),this},c.authority=function(b,v){if(this._parts.urn)return b===void 0?"":this;if(b===void 0)return this._parts.hostname?a.buildAuthority(this._parts):"";var C=a.parseAuthority(b,this._parts);if(C!=="/")throw new TypeError('Hostname "'+b+'" contains characters other than [A-Z0-9.-]');return this.build(!v),this},c.userinfo=function(b,v){if(this._parts.urn)return b===void 0?"":this;if(b===void 0){var C=a.buildUserinfo(this._parts);return C&&C.substring(0,C.length-1)}else return b[b.length-1]!=="@"&&(b+="@"),a.parseUserinfo(b,this._parts),this.build(!v),this},c.resource=function(b,v){var C;return b===void 0?this.path()+this.search()+this.hash():(C=a.parse(b),this._parts.path=C.path,this._parts.query=C.query,this._parts.fragment=C.fragment,this.build(!v),this)},c.subdomain=function(b,v){if(this._parts.urn)return b===void 0?"":this;if(b===void 0){if(!this._parts.hostname||this.is("IP"))return"";var C=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,C)||""}else{var D=this._parts.hostname.length-this.domain().length,H=this._parts.hostname.substring(0,D),Z=new RegExp("^"+d(H));if(b&&b.charAt(b.length-1)!=="."&&(b+="."),b.indexOf(":")!==-1)throw new TypeError("Domains cannot contain colons");return b&&a.ensureValidHostname(b,this._parts.protocol),this._parts.hostname=this._parts.hostname.replace(Z,b),this.build(!v),this}},c.domain=function(b,v){if(this._parts.urn)return b===void 0?"":this;if(typeof b=="boolean"&&(v=b,b=void 0),b===void 0){if(!this._parts.hostname||this.is("IP"))return"";var C=this._parts.hostname.match(/\./g);if(C&&C.length<2)return this._parts.hostname;var D=this._parts.hostname.length-this.tld(v).length-1;return D=this._parts.hostname.lastIndexOf(".",D-1)+1,this._parts.hostname.substring(D)||""}else{if(!b)throw new TypeError("cannot set domain empty");if(b.indexOf(":")!==-1)throw new TypeError("Domains cannot contain colons");if(a.ensureValidHostname(b,this._parts.protocol),!this._parts.hostname||this.is("IP"))this._parts.hostname=b;else{var H=new RegExp(d(this.domain())+"$");this._parts.hostname=this._parts.hostname.replace(H,b)}return this.build(!v),this}},c.tld=function(b,v){if(this._parts.urn)return b===void 0?"":this;if(typeof b=="boolean"&&(v=b,b=void 0),b===void 0){if(!this._parts.hostname||this.is("IP"))return"";var C=this._parts.hostname.lastIndexOf("."),D=this._parts.hostname.substring(C+1);return v!==!0&&o&&o.list[D.toLowerCase()]&&o.get(this._parts.hostname)||D}else{var H;if(b)if(b.match(/[^a-zA-Z0-9-]/))if(o&&o.is(b))H=new RegExp(d(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(H,b);else throw new TypeError('TLD "'+b+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");H=new RegExp(d(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(H,b)}else throw new TypeError("cannot set TLD empty");return this.build(!v),this}},c.directory=function(b,v){if(this._parts.urn)return b===void 0?"":this;if(b===void 0||b===!0){if(!this._parts.path&&!this._parts.hostname)return"";if(this._parts.path==="/")return"/";var C=this._parts.path.length-this.filename().length-1,D=this._parts.path.substring(0,C)||(this._parts.hostname?"/":"");return b?a.decodePath(D):D}else{var H=this._parts.path.length-this.filename().length,Z=this._parts.path.substring(0,H),J=new RegExp("^"+d(Z));return this.is("relative")||(b||(b="/"),b.charAt(0)!=="/"&&(b="/"+b)),b&&b.charAt(b.length-1)!=="/"&&(b+="/"),b=a.recodePath(b),this._parts.path=this._parts.path.replace(J,b),this.build(!v),this}},c.filename=function(b,v){if(this._parts.urn)return b===void 0?"":this;if(typeof b!="string"){if(!this._parts.path||this._parts.path==="/")return"";var C=this._parts.path.lastIndexOf("/"),D=this._parts.path.substring(C+1);return b?a.decodePathSegment(D):D}else{var H=!1;b.charAt(0)==="/"&&(b=b.substring(1)),b.match(/\.?\//)&&(H=!0);var Z=new RegExp(d(this.filename())+"$");return b=a.recodePath(b),this._parts.path=this._parts.path.replace(Z,b),H?this.normalizePath(v):this.build(!v),this}},c.suffix=function(b,v){if(this._parts.urn)return b===void 0?"":this;if(b===void 0||b===!0){if(!this._parts.path||this._parts.path==="/")return"";var C=this.filename(),D=C.lastIndexOf("."),H,Z;return D===-1?"":(H=C.substring(D+1),Z=/^[a-z0-9%]+$/i.test(H)?H:"",b?a.decodePathSegment(Z):Z)}else{b.charAt(0)==="."&&(b=b.substring(1));var J=this.suffix(),K;if(J)b?K=new RegExp(d(J)+"$"):K=new RegExp(d("."+J)+"$");else{if(!b)return this;this._parts.path+="."+a.recodePath(b)}return K&&(b=a.recodePath(b),this._parts.path=this._parts.path.replace(K,b)),this.build(!v),this}},c.segment=function(b,v,C){var D=this._parts.urn?":":"/",H=this.path(),Z=H.substring(0,1)==="/",J=H.split(D);if(b!==void 0&&typeof b!="number"&&(C=v,v=b,b=void 0),b!==void 0&&typeof b!="number")throw new Error('Bad segment "'+b+'", must be 0-based integer');if(Z&&J.shift(),b<0&&(b=Math.max(J.length+b,0)),v===void 0)return b===void 0?J:J[b];if(b===null||J[b]===void 0)if(m(v)){J=[];for(var K=0,te=v.length;K<te;K++)!v[K].length&&(!J.length||!J[J.length-1].length)||(J.length&&!J[J.length-1].length&&J.pop(),J.push(E(v[K])))}else(v||typeof v=="string")&&(v=E(v),J[J.length-1]===""?J[J.length-1]=v:J.push(v));else v?J[b]=E(v):J.splice(b,1);return Z&&J.unshift(""),this.path(J.join(D),C)},c.segmentCoded=function(b,v,C){var D,H,Z;if(typeof b!="number"&&(C=v,v=b,b=void 0),v===void 0){if(D=this.segment(b,v,C),!m(D))D=D!==void 0?a.decode(D):void 0;else for(H=0,Z=D.length;H<Z;H++)D[H]=a.decode(D[H]);return D}if(!m(v))v=typeof v=="string"||v instanceof String?a.encode(v):v;else for(H=0,Z=v.length;H<Z;H++)v[H]=a.encode(v[H]);return this.segment(b,v,C)};var X=c.query;return c.query=function(b,v){if(b===!0)return a.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if(typeof b=="function"){var C=a.parseQuery(this._parts.query,this._parts.escapeQuerySpace),D=b.call(this,C);return this._parts.query=a.buildQuery(D||C,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!v),this}else return b!==void 0&&typeof b!="string"?(this._parts.query=a.buildQuery(b,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!v),this):X.call(this,b,v)},c.setQuery=function(b,v,C){var D=a.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if(typeof b=="string"||b instanceof String)D[b]=v!==void 0?v:null;else if(typeof b=="object")for(var H in b)f.call(b,H)&&(D[H]=b[H]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");return this._parts.query=a.buildQuery(D,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),typeof b!="string"&&(C=v),this.build(!C),this},c.addQuery=function(b,v,C){var D=a.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return a.addQuery(D,b,v===void 0?null:v),this._parts.query=a.buildQuery(D,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),typeof b!="string"&&(C=v),this.build(!C),this},c.removeQuery=function(b,v,C){var D=a.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return a.removeQuery(D,b,v),this._parts.query=a.buildQuery(D,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),typeof b!="string"&&(C=v),this.build(!C),this},c.hasQuery=function(b,v,C){var D=a.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return a.hasQuery(D,b,v,C)},c.setSearch=c.setQuery,c.addSearch=c.addQuery,c.removeSearch=c.removeQuery,c.hasSearch=c.hasQuery,c.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()},c.normalizeProtocol=function(b){return typeof this._parts.protocol=="string"&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!b)),this},c.normalizeHostname=function(b){return this._parts.hostname&&(this.is("IDN")&&t?this._parts.hostname=t.toASCII(this._parts.hostname):this.is("IPv6")&&n&&(this._parts.hostname=n.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!b)),this},c.normalizePort=function(b){return typeof this._parts.protocol=="string"&&this._parts.port===a.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!b)),this},c.normalizePath=function(b){var v=this._parts.path;if(!v)return this;if(this._parts.urn)return this._parts.path=a.recodeUrnPath(this._parts.path),this.build(!b),this;if(this._parts.path==="/")return this;v=a.recodePath(v);var C,D="",H,Z;for(v.charAt(0)!=="/"&&(C=!0,v="/"+v),(v.slice(-3)==="/.."||v.slice(-2)==="/.")&&(v+="/"),v=v.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/"),C&&(D=v.substring(1).match(/^(\.\.\/)+/)||"",D&&(D=D[0]));H=v.search(/\/\.\.(\/|$)/),H!==-1;){if(H===0){v=v.substring(3);continue}Z=v.substring(0,H).lastIndexOf("/"),Z===-1&&(Z=H),v=v.substring(0,Z)+v.substring(H+3)}return C&&this.is("relative")&&(v=D+v.substring(1)),this._parts.path=v,this.build(!b),this},c.normalizePathname=c.normalizePath,c.normalizeQuery=function(b){return typeof this._parts.query=="string"&&(this._parts.query.length?this.query(a.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!b)),this},c.normalizeFragment=function(b){return this._parts.fragment||(this._parts.fragment=null,this.build(!b)),this},c.normalizeSearch=c.normalizeQuery,c.normalizeHash=c.normalizeFragment,c.iso8859=function(){var b=a.encode,v=a.decode;a.encode=escape,a.decode=decodeURIComponent;try{this.normalize()}finally{a.encode=b,a.decode=v}return this},c.unicode=function(){var b=a.encode,v=a.decode;a.encode=S,a.decode=unescape;try{this.normalize()}finally{a.encode=b,a.decode=v}return this},c.readable=function(){var b=this.clone();b.username("").password("").normalize();var v="";if(b._parts.protocol&&(v+=b._parts.protocol+"://"),b._parts.hostname&&(b.is("punycode")&&t?(v+=t.toUnicode(b._parts.hostname),b._parts.port&&(v+=":"+b._parts.port)):v+=b.host()),b._parts.hostname&&b._parts.path&&b._parts.path.charAt(0)!=="/"&&(v+="/"),v+=b.path(!0),b._parts.query){for(var C="",D=0,H=b._parts.query.split("&"),Z=H.length;D<Z;D++){var J=(H[D]||"").split("=");C+="&"+a.decodeQuery(J[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"),J[1]!==void 0&&(C+="="+a.decodeQuery(J[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}v+="?"+C.substring(1)}return v+=a.decodeQuery(b.hash(),!0),v},c.absoluteTo=function(b){var v=this.clone(),C=["protocol","username","password","hostname","port"],D,H,Z;if(this._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(b instanceof a||(b=new a(b)),v._parts.protocol||(v._parts.protocol=b._parts.protocol,this._parts.hostname))return v;for(H=0;Z=C[H];H++)v._parts[Z]=b._parts[Z];return v._parts.path?(v._parts.path.substring(-2)===".."&&(v._parts.path+="/"),v.path().charAt(0)!=="/"&&(D=b.directory(),D=D||(b.path().indexOf("/")===0?"/":""),v._parts.path=(D?D+"/":"")+v._parts.path,v.normalizePath())):(v._parts.path=b._parts.path,v._parts.query||(v._parts.query=b._parts.query)),v.build(),v},c.relativeTo=function(b){var v=this.clone().normalize(),C,D,H,Z,J;if(v._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(b=new a(b).normalize(),C=v._parts,D=b._parts,Z=v.path(),J=b.path(),Z.charAt(0)!=="/")throw new Error("URI is already relative");if(J.charAt(0)!=="/")throw new Error("Cannot calculate a URI relative to another relative URI");if(C.protocol===D.protocol&&(C.protocol=null),C.username!==D.username||C.password!==D.password||C.protocol!==null||C.username!==null||C.password!==null)return v.build();if(C.hostname===D.hostname&&C.port===D.port)C.hostname=null,C.port=null;else return v.build();if(Z===J)return C.path="",v.build();if(H=a.commonPath(Z,J),!H)return v.build();var K=D.path.substring(H.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");return C.path=K+C.path.substring(H.length)||"./",v.build()},c.equals=function(b){var v=this.clone(),C=new a(b),D={},H={},Z={},J,K,te;if(v.normalize(),C.normalize(),v.toString()===C.toString())return!0;if(J=v.query(),K=C.query(),v.query(""),C.query(""),v.toString()!==C.toString()||J.length!==K.length)return!1;D=a.parseQuery(J,this._parts.escapeQuerySpace),H=a.parseQuery(K,this._parts.escapeQuerySpace);for(te in D)if(f.call(D,te)){if(m(D[te])){if(!y(D[te],H[te]))return!1}else if(D[te]!==H[te])return!1;Z[te]=!0}for(te in H)if(f.call(H,te)&&!Z[te])return!1;return!0},c.preventInvalidHostname=function(b){return this._parts.preventInvalidHostname=!!b,this},c.duplicateQueryParameters=function(b){return this._parts.duplicateQueryParameters=!!b,this},c.escapeQuerySpace=function(b){return this._parts.escapeQuerySpace=!!b,this},a})})(o0);var J_=o0.exports;const _o=$u(J_);function eg(e){return(e.length===0||e[e.length-1]!=="/")&&(e=`${e}/`),e}function en(e,t){if(e===null||typeof e!="object")return e;t=t??!1;const n=new e.constructor;for(const o in e)if(e.hasOwnProperty(o)){let i=e[o];t&&(i=en(i,t)),n[o]=i}return n}function nn(e,t,n){n=n??!1;const o={},i=l(e),r=l(t);let a,s,c;if(i)for(a in e)e.hasOwnProperty(a)&&(s=e[a],r&&n&&typeof s=="object"&&t.hasOwnProperty(a)?(c=t[a],typeof c=="object"?o[a]=nn(s,c,n):o[a]=s):o[a]=s);if(r)for(a in t)t.hasOwnProperty(a)&&!o.hasOwnProperty(a)&&(c=t[a],o[a]=c);return o}function Vr(){let e,t;const n=new Promise(function(o,i){e=o,t=i});return{resolve:e,reject:t,promise:n}}function Mr(e,t){let n;return typeof document<"u"&&(n=document),Mr._implementation(e,t,n)}Mr._implementation=function(e,t,n){if(!l(e))throw new w("relative uri is required.");if(!l(t)){if(typeof n>"u")return e;t=n.baseURI??n.location.href}const o=new _o(e);return o.scheme()!==""?o.toString():o.absoluteTo(t).toString()};function tg(e,t){if(!l(e))throw new w("uri is required.");let n="";const o=e.lastIndexOf("/");return o!==-1&&(n=e.substring(0,o+1)),t&&(e=new _o(e),e.query().length!==0&&(n+=`?${e.query()}`),e.fragment().length!==0&&(n+=`#${e.fragment()}`)),n}function ng(e){if(!l(e))throw new w("uri is required.");const t=new _o(e);t.normalize();let n=t.path(),o=n.lastIndexOf("/");return o!==-1&&(n=n.substr(o+1)),o=n.lastIndexOf("."),o===-1?n="":n=n.substr(o+1),n}const Yh={};function $h(e,t,n){l(t)||(t=e.width),l(n)||(n=e.height);let o=Yh[t];l(o)||(o={},Yh[t]=o);let i=o[n];if(!l(i)){const r=document.createElement("canvas");r.width=t,r.height=n,i=r.getContext("2d",{willReadFrequently:!0}),i.globalCompositeOperation="copy",o[n]=i}return i.drawImage(e,0,0,t,n),i.getImageData(0,0,t,n).data}const og=/^blob:/i;function i0(e){return p.typeOf.string("uri",e),og.test(e)}let jn;function Bc(e){l(jn)||(jn=document.createElement("a")),jn.href=window.location.href;const t=jn.host,n=jn.protocol;return jn.href=e,jn.href=jn.href,n!==jn.protocol||t!==jn.host}const ig=/^data:/i;function r0(e){return p.typeOf.string("uri",e),ig.test(e)}function rg(e){const t=document.createElement("script");return t.async=!0,t.src=e,new Promise((n,o)=>{window.crossOriginIsolated&&t.setAttribute("crossorigin","anonymous");const i=document.getElementsByTagName("head")[0];t.onload=function(){t.onload=void 0,i.removeChild(t),n()},t.onerror=function(r){o(r)},i.appendChild(t)})}function ag(e){if(!l(e))throw new w("obj is required.");let t="";for(const n in e)if(e.hasOwnProperty(n)){const o=e[n],i=`${encodeURIComponent(n)}=`;if(Array.isArray(o))for(let r=0,a=o.length;r<a;++r)t+=`${i+encodeURIComponent(o[r])}&`;else t+=`${i+encodeURIComponent(o)}&`}return t=t.slice(0,-1),t}function sg(e){if(!l(e))throw new w("queryString is required.");const t={};if(e==="")return t;const n=e.replace(/\+/g,"%20").split(/[&;]/);for(let o=0,i=n.length;o<i;++o){const r=n[o].split("="),a=decodeURIComponent(r[0]);let s=r[1];l(s)?s=decodeURIComponent(s):s="";const c=t[a];typeof c=="string"?t[a]=[c,s]:Array.isArray(c)?c.push(s):t[a]=s}return t}const cg={UNISSUED:0,ISSUED:1,ACTIVE:2,RECEIVED:3,CANCELLED:4,FAILED:5},_t=Object.freeze(cg),fg={TERRAIN:0,IMAGERY:1,TILES3D:2,OTHER:3},hg=Object.freeze(fg);function ns(e){e=e??xe.EMPTY_OBJECT;const t=e.throttleByServer??!1,n=e.throttle??!1;this.url=e.url,this.requestFunction=e.requestFunction,this.cancelFunction=e.cancelFunction,this.priorityFunction=e.priorityFunction,this.priority=e.priority??0,this.throttle=n,this.throttleByServer=t,this.type=e.type??hg.OTHER,this.serverKey=e.serverKey,this.state=_t.UNISSUED,this.deferred=void 0,this.cancelled=!1}ns.prototype.cancel=function(){this.cancelled=!0};ns.prototype.clone=function(e){return l(e)?(e.url=this.url,e.requestFunction=this.requestFunction,e.cancelFunction=this.cancelFunction,e.priorityFunction=this.priorityFunction,e.priority=this.priority,e.throttle=this.throttle,e.throttleByServer=this.throttleByServer,e.type=this.type,e.serverKey=this.serverKey,e.state=_t.UNISSUED,e.deferred=void 0,e.cancelled=!1,e):new ns(this)};function lg(e){const t={};if(!e)return t;const n=e.split(`\r
`);for(let o=0;o<n.length;++o){const i=n[o],r=i.indexOf(": ");if(r>0){const a=i.substring(0,r),s=i.substring(r+2);t[a]=s}}return t}function Rr(e,t,n){this.statusCode=e,this.response=t,this.responseHeaders=n,typeof this.responseHeaders=="string"&&(this.responseHeaders=lg(this.responseHeaders))}Rr.prototype.toString=function(){let e="Request has failed.";return l(this.statusCode)&&(e+=` Status Code: ${this.statusCode}`),e};function Wi(){this._listeners=new Map,this._toRemove=new Map,this._toAdd=new Map,this._invokingListeners=!1,this._listenerCount=0}Object.defineProperties(Wi.prototype,{numberOfListeners:{get:function(){return this._listenerCount}}});Wi.prototype.addEventListener=function(e,t){p.typeOf.func("listener",e);const n=this,o=n._invokingListeners?n._toAdd:n._listeners;return Sf(this,o,e,t)&&n._listenerCount++,function(){n.removeEventListener(e,t)}};function Sf(e,t,n,o){t.has(n)||t.set(n,new Set);const i=t.get(n);return i.has(o)?!1:(i.add(o),!0)}Wi.prototype.removeEventListener=function(e,t){p.typeOf.func("listener",e);const n=Uc(this,this._listeners,e,t),o=Uc(this,this._toAdd,e,t),i=n||o;return i&&this._listenerCount--,i};function Uc(e,t,n,o){const i=t.get(n);if(!i||!i.has(o))return!1;if(e._invokingListeners){if(!Sf(e,e._toRemove,n,o))return!1}else i.delete(o),i.size===0&&t.delete(n);return!0}Wi.prototype.raiseEvent=function(){this._invokingListeners=!0;for(const[e,t]of this._listeners.entries())if(l(e))for(const n of t)e.apply(n,arguments);this._invokingListeners=!1;for(const[e,t]of this._toAdd.entries())for(const n of t)Sf(this,this._listeners,e,n);this._toAdd.clear();for(const[e,t]of this._toRemove.entries())for(const n of t)Uc(this,this._listeners,e,n);this._toRemove.clear()};function si(e){p.typeOf.object("options",e),p.defined("options.comparator",e.comparator),this._comparator=e.comparator,this._array=[],this._length=0,this._maximumLength=void 0}Object.defineProperties(si.prototype,{length:{get:function(){return this._length}},internalArray:{get:function(){return this._array}},maximumLength:{get:function(){return this._maximumLength},set:function(e){p.typeOf.number.greaterThanOrEquals("maximumLength",e,0);const t=this._length;if(e<t){const n=this._array;for(let o=e;o<t;++o)n[o]=void 0;this._length=e,n.length=e}this._maximumLength=e}},comparator:{get:function(){return this._comparator}}});function Af(e,t,n){const o=e[t];e[t]=e[n],e[n]=o}si.prototype.reserve=function(e){e=e??this._length,this._array.length=e};si.prototype.heapify=function(e){e=e??0;const t=this._length,n=this._comparator,o=this._array;let i=-1,r=!0;for(;r;){const a=2*(e+1),s=a-1;s<t&&n(o[s],o[e])<0?i=s:i=e,a<t&&n(o[a],o[i])<0&&(i=a),i!==e?(Af(o,i,e),e=i):r=!1}};si.prototype.resort=function(){const e=this._length;for(let t=Math.ceil(e/2);t>=0;--t)this.heapify(t)};si.prototype.insert=function(e){p.defined("element",e);const t=this._array,n=this._comparator,o=this._maximumLength;let i=this._length++;for(i<t.length?t[i]=e:t.push(e);i!==0;){const a=Math.floor((i-1)/2);if(n(t[i],t[a])<0)Af(t,i,a),i=a;else break}let r;return l(o)&&this._length>o&&(r=t[o],this._length=o),r};si.prototype.pop=function(e){if(e=e??0,this._length===0)return;p.typeOf.number.lessThan("index",e,this._length);const t=this._array,n=t[e];return Af(t,e,--this._length),this.heapify(e),t[this._length]=void 0,n};function ug(e,t){return e.priority-t.priority}const He={numberOfAttemptedRequests:0,numberOfActiveRequests:0,numberOfCancelledRequests:0,numberOfCancelledActiveRequests:0,numberOfFailedRequests:0,numberOfActiveRequestsEver:0,lastNumberOfActiveRequests:0};let Mi=20;const Wt=new si({comparator:ug});Wt.maximumLength=Mi;Wt.reserve(Mi);const Wn=[];let go={};const dg=typeof document<"u"?new _o(document.location.href):new _o,vs=new Wi;function nt(){}nt.maximumRequests=50;nt.maximumRequestsPerServer=18;nt.requestsByServer={};nt.throttleRequests=!0;nt.debugShowStatistics=!1;nt.requestCompletedEvent=vs;Object.defineProperties(nt,{statistics:{get:function(){return He}},priorityHeapLength:{get:function(){return Mi},set:function(e){if(e<Mi)for(;Wt.length>e;){const t=Wt.pop();Qo(t)}Mi=e,Wt.maximumLength=e,Wt.reserve(e)}}});function a0(e){l(e.priorityFunction)&&(e.priority=e.priorityFunction())}nt.serverHasOpenSlots=function(e,t){t=t??1;const n=nt.requestsByServer[e]??nt.maximumRequestsPerServer;return go[e]+t<=n};nt.heapHasOpenSlots=function(e){return Wt.length+e<=Mi};function s0(e){return e.state===_t.UNISSUED&&(e.state=_t.ISSUED,e.deferred=Vr()),e.deferred.promise}function mg(e){return function(t){if(e.state===_t.CANCELLED)return;const n=e.deferred;--He.numberOfActiveRequests,--go[e.serverKey],vs.raiseEvent(),e.state=_t.RECEIVED,e.deferred=void 0,n.resolve(t)}}function pg(e){return function(t){e.state!==_t.CANCELLED&&(++He.numberOfFailedRequests,--He.numberOfActiveRequests,--go[e.serverKey],vs.raiseEvent(t),e.state=_t.FAILED,e.deferred.reject(t))}}function c0(e){const t=s0(e);return e.state=_t.ACTIVE,Wn.push(e),++He.numberOfActiveRequests,++He.numberOfActiveRequestsEver,++go[e.serverKey],e.requestFunction().then(mg(e)).catch(pg(e)),t}function Qo(e){const t=e.state===_t.ACTIVE;if(e.state=_t.CANCELLED,++He.numberOfCancelledRequests,l(e.deferred)){const n=e.deferred;e.deferred=void 0,n.reject()}t&&(--He.numberOfActiveRequests,--go[e.serverKey],++He.numberOfCancelledActiveRequests),l(e.cancelFunction)&&e.cancelFunction()}nt.update=function(){let e,t,n=0;const o=Wn.length;for(e=0;e<o;++e){if(t=Wn[e],t.cancelled&&Qo(t),t.state!==_t.ACTIVE){++n;continue}n>0&&(Wn[e-n]=t)}Wn.length-=n;const i=Wt.internalArray,r=Wt.length;for(e=0;e<r;++e)a0(i[e]);Wt.resort();const a=Math.max(nt.maximumRequests-Wn.length,0);let s=0;for(;s<a&&Wt.length>0;){if(t=Wt.pop(),t.cancelled){Qo(t);continue}if(t.throttleByServer&&!nt.serverHasOpenSlots(t.serverKey)){Qo(t);continue}c0(t),++s}_g()};nt.getServerKey=function(e){p.typeOf.string("url",e);let t=new _o(e);t.scheme()===""&&(t=t.absoluteTo(dg),t.normalize());let n=t.authority();/:/.test(n)||(n=`${n}:${t.scheme()==="https"?"443":"80"}`);const o=go[n];return l(o)||(go[n]=0),n};nt.request=function(e){if(p.typeOf.object("request",e),p.typeOf.string("request.url",e.url),p.typeOf.func("request.requestFunction",e.requestFunction),r0(e.url)||i0(e.url))return vs.raiseEvent(),e.state=_t.RECEIVED,e.requestFunction();if(++He.numberOfAttemptedRequests,l(e.serverKey)||(e.serverKey=nt.getServerKey(e.url)),nt.throttleRequests&&e.throttleByServer&&!nt.serverHasOpenSlots(e.serverKey))return;if(!nt.throttleRequests||!e.throttle)return c0(e);if(Wn.length>=nt.maximumRequests)return;a0(e);const t=Wt.insert(e);if(l(t)){if(t===e)return;Qo(t)}return s0(e)};function _g(){nt.debugShowStatistics&&(He.numberOfActiveRequests===0&&He.lastNumberOfActiveRequests>0&&(He.numberOfAttemptedRequests>0&&(console.log(`Number of attempted requests: ${He.numberOfAttemptedRequests}`),He.numberOfAttemptedRequests=0),He.numberOfCancelledRequests>0&&(console.log(`Number of cancelled requests: ${He.numberOfCancelledRequests}`),He.numberOfCancelledRequests=0),He.numberOfCancelledActiveRequests>0&&(console.log(`Number of cancelled active requests: ${He.numberOfCancelledActiveRequests}`),He.numberOfCancelledActiveRequests=0),He.numberOfFailedRequests>0&&(console.log(`Number of failed requests: ${He.numberOfFailedRequests}`),He.numberOfFailedRequests=0)),He.lastNumberOfActiveRequests=He.numberOfActiveRequests)}nt.clearForSpecs=function(){for(;Wt.length>0;){const t=Wt.pop();Qo(t)}const e=Wn.length;for(let t=0;t<e;++t)Qo(Wn[t]);Wn.length=0,go={},He.numberOfAttemptedRequests=0,He.numberOfActiveRequests=0,He.numberOfCancelledRequests=0,He.numberOfCancelledActiveRequests=0,He.numberOfFailedRequests=0,He.numberOfActiveRequestsEver=0,He.lastNumberOfActiveRequests=0};nt.numberOfActiveRequestsByServer=function(e){return go[e]};nt.requestHeap=Wt;const Yi={};let Li={};Yi.add=function(e,t){if(!l(e))throw new w("host is required.");if(!l(t)||t<=0)throw new w("port is required to be greater than 0.");const n=`${e.toLowerCase()}:${t}`;l(Li[n])||(Li[n]=!0)};Yi.remove=function(e,t){if(!l(e))throw new w("host is required.");if(!l(t)||t<=0)throw new w("port is required to be greater than 0.");const n=`${e.toLowerCase()}:${t}`;l(Li[n])&&delete Li[n]};function gg(e){const t=new _o(e);t.normalize();let n=t.authority();if(n.length!==0){if(t.authority(n),n.indexOf("@")!==-1&&(n=n.split("@")[1]),n.indexOf(":")===-1){let o=t.scheme();if(o.length===0&&(o=window.location.protocol,o=o.substring(0,o.length-1)),o==="http")n+=":80";else if(o==="https")n+=":443";else return}return n}}Yi.contains=function(e){if(!l(e))throw new w("url is required.");const t=gg(e);return!!(l(t)&&l(Li[t]))};Yi.clear=function(){Li={}};const f0=function(){try{const e=new XMLHttpRequest;return e.open("GET","#",!0),e.responseType="blob",e.responseType==="blob"}catch{return!1}}();function se(e){e=e??xe.EMPTY_OBJECT,typeof e=="string"&&(e={url:e}),p.typeOf.string("options.url",e.url),this._url=void 0,this._templateValues=Kn(e.templateValues,{}),this._queryParameters=Kn(e.queryParameters,{}),this.headers=Kn(e.headers,{}),this.request=e.request??new ns,this.proxy=e.proxy,this.retryCallback=e.retryCallback,this.retryAttempts=e.retryAttempts??0,this._retryCount=0,e.parseUrl??!0?this.parseUrl(e.url,!0,!0):this._url=e.url,this._credits=e.credits}function Kn(e,t){return l(e)?en(e):t}se.createIfNeeded=function(e){return e instanceof se?e.getDerivedResource({request:e.request}):typeof e!="string"?e:new se({url:e})};let di;se.supportsImageBitmapOptions=function(){return l(di)?di:typeof createImageBitmap!="function"?(di=Promise.resolve(!1),di):(di=se.fetchBlob({url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAABGdBTUEAAE4g3rEiDgAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAADElEQVQI12Ng6GAAAAEUAIngE3ZiAAAAAElFTkSuQmCC"}).then(function(t){const n={imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"};return Promise.all([createImageBitmap(t,n),createImageBitmap(t)])}).then(function(t){const n=$h(t[0]),o=$h(t[1]);return n[1]!==o[1]}).catch(function(){return!1}),di)};Object.defineProperties(se,{isBlobSupported:{get:function(){return f0}}});Object.defineProperties(se.prototype,{queryParameters:{get:function(){return this._queryParameters}},templateValues:{get:function(){return this._templateValues}},url:{get:function(){return this.getUrlComponent(!0,!0)},set:function(e){this.parseUrl(e,!1,!1)}},extension:{get:function(){return ng(this._url)}},isDataUri:{get:function(){return r0(this._url)}},isBlobUri:{get:function(){return i0(this._url)}},isCrossOriginUrl:{get:function(){return Bc(this._url)}},hasHeaders:{get:function(){return Object.keys(this.headers).length>0}},credits:{get:function(){return this._credits}}});se.prototype.toString=function(){return this.getUrlComponent(!0,!0)};se.prototype.parseUrl=function(e,t,n,o){let i=new _o(e);const r=yg(i.query());this._queryParameters=t?os(r,this.queryParameters,n):r,i.search(""),i.fragment(""),l(o)&&i.scheme()===""&&(i=i.absoluteTo(Mr(o))),this._url=i.toString()};function yg(e){return e.length===0?{}:e.indexOf("=")===-1?{[e]:void 0}:sg(e)}function os(e,t,n){if(!n)return nn(e,t);const o=en(e,!0);for(const i in t)if(t.hasOwnProperty(i)){let r=o[i];const a=t[i];l(r)?(Array.isArray(r)||(r=o[i]=[r]),o[i]=r.concat(a)):o[i]=Array.isArray(a)?a.slice():a}return o}se.prototype.getUrlComponent=function(e,t){if(this.isDataUri)return this._url;let n=this._url;e&&(n=`${n}${bg(this.queryParameters)}`),n=n.replace(/%7B/g,"{").replace(/%7D/g,"}");const o=this._templateValues;return Object.keys(o).length>0&&(n=n.replace(/{(.*?)}/g,function(i,r){const a=o[r];return l(a)?encodeURIComponent(a):i})),t&&l(this.proxy)&&(n=this.proxy.getURL(n)),n};function bg(e){const t=Object.keys(e);return t.length===0?"":t.length===1&&!l(e[t[0]])?`?${t[0]}`:`?${ag(e)}`}se.prototype.setQueryParameters=function(e,t){t?this._queryParameters=os(this._queryParameters,e,!1):this._queryParameters=os(e,this._queryParameters,!1)};se.prototype.appendQueryParameters=function(e){this._queryParameters=os(e,this._queryParameters,!0)};se.prototype.setTemplateValues=function(e,t){t?this._templateValues=nn(this._templateValues,e):this._templateValues=nn(e,this._templateValues)};se.prototype.getDerivedResource=function(e){const t=this.clone();if(t._retryCount=0,l(e.url)){const n=e.preserveQueryParameters??!1;t.parseUrl(e.url,!0,n,this._url)}return l(e.queryParameters)&&(t._queryParameters=nn(e.queryParameters,t.queryParameters)),l(e.templateValues)&&(t._templateValues=nn(e.templateValues,t.templateValues)),l(e.headers)&&(t.headers=nn(e.headers,t.headers)),l(e.proxy)&&(t.proxy=e.proxy),l(e.request)&&(t.request=e.request),l(e.retryCallback)&&(t.retryCallback=e.retryCallback),l(e.retryAttempts)&&(t.retryAttempts=e.retryAttempts),t};se.prototype.retryOnError=function(e){const t=this.retryCallback;if(typeof t!="function"||this._retryCount>=this.retryAttempts)return Promise.resolve(!1);const n=this;return Promise.resolve(t(this,e)).then(function(o){return++n._retryCount,o})};se.prototype.clone=function(e){return l(e)?(e._url=this._url,e._queryParameters=en(this._queryParameters),e._templateValues=en(this._templateValues),e.headers=en(this.headers),e.proxy=this.proxy,e.retryCallback=this.retryCallback,e.retryAttempts=this.retryAttempts,e._retryCount=0,e.request=this.request.clone(),e):new se({url:this._url,queryParameters:this.queryParameters,templateValues:this.templateValues,headers:this.headers,proxy:this.proxy,retryCallback:this.retryCallback,retryAttempts:this.retryAttempts,request:this.request.clone(),parseUrl:!1,credits:l(this.credits)?this.credits.slice():void 0})};se.prototype.getBaseUri=function(e){return tg(this.getUrlComponent(e),e)};se.prototype.appendForwardSlash=function(){this._url=eg(this._url)};se.prototype.fetchArrayBuffer=function(){return this.fetch({responseType:"arraybuffer"})};se.fetchArrayBuffer=function(e){return new se(e).fetchArrayBuffer()};se.prototype.fetchBlob=function(){return this.fetch({responseType:"blob"})};se.fetchBlob=function(e){return new se(e).fetchBlob()};se.prototype.fetchImage=function(e){e=e??xe.EMPTY_OBJECT;const t=e.preferImageBitmap??!1,n=e.preferBlob??!1,o=e.flipY??!1,i=e.skipColorSpaceConversion??!1;if(xf(this.request),!f0||this.isDataUri||this.isBlobUri||!this.hasHeaders&&!n)return Gc({resource:this,flipY:o,skipColorSpaceConversion:i,preferImageBitmap:t});const r=this.fetchBlob();if(!l(r))return;let a,s,c,f;return se.supportsImageBitmapOptions().then(function(d){return a=d,s=a&&t,r}).then(function(d){if(!l(d))return;if(f=d,s)return se.createImageBitmapFromBlob(d,{flipY:o,premultiplyAlpha:!1,skipColorSpaceConversion:i});const u=window.URL.createObjectURL(d);return c=new se({url:u}),Gc({resource:c,flipY:o,skipColorSpaceConversion:i,preferImageBitmap:!1})}).then(function(d){if(l(d))return d.blob=f,s||window.URL.revokeObjectURL(c.url),d}).catch(function(d){return l(c)&&window.URL.revokeObjectURL(c.url),d.blob=f,Promise.reject(d)})};function Gc(e){const t=e.resource,n=e.flipY,o=e.skipColorSpaceConversion,i=e.preferImageBitmap,r=t.request;r.url=t.url,r.requestFunction=function(){let s=!1;!t.isDataUri&&!t.isBlobUri&&(s=t.isCrossOriginUrl);const c=Vr();return se._Implementations.createImage(r,s,c,n,o,i),c.promise};const a=nt.request(r);if(l(a))return a.catch(function(s){return r.state!==_t.FAILED?Promise.reject(s):t.retryOnError(s).then(function(c){return c?(r.state=_t.UNISSUED,r.deferred=void 0,Gc({resource:t,flipY:n,skipColorSpaceConversion:o,preferImageBitmap:i})):Promise.reject(s)})})}se.fetchImage=function(e){return new se(e).fetchImage({flipY:e.flipY,skipColorSpaceConversion:e.skipColorSpaceConversion,preferBlob:e.preferBlob,preferImageBitmap:e.preferImageBitmap})};se.prototype.fetchText=function(){return this.fetch({responseType:"text"})};se.fetchText=function(e){return new se(e).fetchText()};se.prototype.fetchJson=function(){const e=this.fetch({responseType:"text",headers:{Accept:"application/json,*/*;q=0.01"}});if(l(e))return e.then(function(t){if(l(t))return JSON.parse(t)})};se.fetchJson=function(e){return new se(e).fetchJson()};se.prototype.fetchXML=function(){return this.fetch({responseType:"document",overrideMimeType:"text/xml"})};se.fetchXML=function(e){return new se(e).fetchXML()};se.prototype.fetchJsonp=function(e){e=e??"callback",xf(this.request);let t;do t=`loadJsonp${T.nextRandomNumber().toString().substring(2,8)}`;while(l(window[t]));return h0(this,e,t)};function h0(e,t,n){const o={};o[t]=n,e.setQueryParameters(o);const i=e.request,r=e.url;i.url=r,i.requestFunction=function(){const s=Vr();return window[n]=function(c){s.resolve(c);try{delete window[n]}catch{window[n]=void 0}},se._Implementations.loadAndExecuteScript(r,n,s),s.promise};const a=nt.request(i);if(l(a))return a.catch(function(s){return i.state!==_t.FAILED?Promise.reject(s):e.retryOnError(s).then(function(c){return c?(i.state=_t.UNISSUED,i.deferred=void 0,h0(e,t,n)):Promise.reject(s)})})}se.fetchJsonp=function(e){return new se(e).fetchJsonp(e.callbackParameterName)};se.prototype._makeRequest=function(e){const t=this;xf(t.request);const n=t.request,o=t.url;n.url=o,n.requestFunction=function(){const r=e.responseType,a=nn(e.headers,t.headers),s=e.overrideMimeType,c=e.method,f=e.data,d=Vr(),u=se._Implementations.loadWithXhr(o,r,c,f,a,d,s);return l(u)&&l(u.abort)&&(n.cancelFunction=function(){u.abort()}),d.promise};const i=nt.request(n);if(l(i))return i.then(function(r){return n.cancelFunction=void 0,r}).catch(function(r){return n.cancelFunction=void 0,n.state!==_t.FAILED?Promise.reject(r):t.retryOnError(r).then(function(a){return a?(n.state=_t.UNISSUED,n.deferred=void 0,t.fetch(e)):Promise.reject(r)})})};function xf(e){if(e.state===_t.ISSUED||e.state===_t.ACTIVE)throw new mt("The Resource is already being fetched.");e.state=_t.UNISSUED,e.deferred=void 0}const Eg=/^data:(.*?)(;base64)?,(.*)$/;function Ua(e,t){const n=decodeURIComponent(t);return e?atob(n):n}function Xh(e,t){const n=Ua(e,t),o=new ArrayBuffer(n.length),i=new Uint8Array(o);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return o}function wg(e,t){t=t??"";const n=e[1],o=!!e[2],i=e[3];let r,a;switch(t){case"":case"text":return Ua(o,i);case"arraybuffer":return Xh(o,i);case"blob":return r=Xh(o,i),new Blob([r],{type:n});case"document":return a=new DOMParser,a.parseFromString(Ua(o,i),n);case"json":return JSON.parse(Ua(o,i));default:throw new w(`Unhandled responseType: ${t}`)}}se.prototype.fetch=function(e){return e=Kn(e,{}),e.method="GET",this._makeRequest(e)};se.fetch=function(e){return new se(e).fetch({responseType:e.responseType,overrideMimeType:e.overrideMimeType})};se.prototype.delete=function(e){return e=Kn(e,{}),e.method="DELETE",this._makeRequest(e)};se.delete=function(e){return new se(e).delete({responseType:e.responseType,overrideMimeType:e.overrideMimeType,data:e.data})};se.prototype.head=function(e){return e=Kn(e,{}),e.method="HEAD",this._makeRequest(e)};se.head=function(e){return new se(e).head({responseType:e.responseType,overrideMimeType:e.overrideMimeType})};se.prototype.options=function(e){return e=Kn(e,{}),e.method="OPTIONS",this._makeRequest(e)};se.options=function(e){return new se(e).options({responseType:e.responseType,overrideMimeType:e.overrideMimeType})};se.prototype.post=function(e,t){return p.defined("data",e),t=Kn(t,{}),t.method="POST",t.data=e,this._makeRequest(t)};se.post=function(e){return new se(e).post(e.data,{responseType:e.responseType,overrideMimeType:e.overrideMimeType})};se.prototype.put=function(e,t){return p.defined("data",e),t=Kn(t,{}),t.method="PUT",t.data=e,this._makeRequest(t)};se.put=function(e){return new se(e).put(e.data,{responseType:e.responseType,overrideMimeType:e.overrideMimeType})};se.prototype.patch=function(e,t){return p.defined("data",e),t=Kn(t,{}),t.method="PATCH",t.data=e,this._makeRequest(t)};se.patch=function(e){return new se(e).patch(e.data,{responseType:e.responseType,overrideMimeType:e.overrideMimeType})};se._Implementations={};se._Implementations.loadImageElement=function(e,t,n){const o=new Image;o.onload=function(){o.naturalWidth===0&&o.naturalHeight===0&&o.width===0&&o.height===0&&(o.width=300,o.height=150),n.resolve(o)},o.onerror=function(i){n.reject(i)},t&&(Yi.contains(e)?o.crossOrigin="use-credentials":o.crossOrigin=""),o.src=e};se._Implementations.createImage=function(e,t,n,o,i,r){const a=e.url;se.supportsImageBitmapOptions().then(function(s){if(!(s&&r)){se._Implementations.loadImageElement(a,t,n);return}const c="blob",f="GET",d=Vr(),u=se._Implementations.loadWithXhr(a,c,f,void 0,void 0,d,void 0,void 0,void 0);return l(u)&&l(u.abort)&&(e.cancelFunction=function(){u.abort()}),d.promise.then(function(m){if(!l(m)){n.reject(new mt(`Successfully retrieved ${a} but it contained no content.`));return}return se.createImageBitmapFromBlob(m,{flipY:o,premultiplyAlpha:!1,skipColorSpaceConversion:i})}).then(function(m){n.resolve(m)})}).catch(function(s){n.reject(s)})};se.createImageBitmapFromBlob=function(e,t){return p.defined("options",t),p.typeOf.bool("options.flipY",t.flipY),p.typeOf.bool("options.premultiplyAlpha",t.premultiplyAlpha),p.typeOf.bool("options.skipColorSpaceConversion",t.skipColorSpaceConversion),createImageBitmap(e,{imageOrientation:t.flipY?"flipY":"none",premultiplyAlpha:t.premultiplyAlpha?"premultiply":"none",colorSpaceConversion:t.skipColorSpaceConversion?"none":"default"})};function vg(e,t,n,o,i,r,a){fetch(e,{method:n,headers:i}).then(async s=>{if(!s.ok){const c={};s.headers.forEach((f,d)=>{c[d]=f}),r.reject(new Rr(s.status,s,c));return}switch(t){case"text":r.resolve(s.text());break;case"json":r.resolve(s.json());break;default:r.resolve(new Uint8Array(await s.arrayBuffer()).buffer);break}}).catch(()=>{r.reject(new Rr)})}const Tg=typeof XMLHttpRequest>"u";se._Implementations.loadWithXhr=function(e,t,n,o,i,r,a){const s=Eg.exec(e);if(s!==null){r.resolve(wg(s,t));return}if(Tg){vg(e,t,n,o,i,r);return}const c=new XMLHttpRequest;if(Yi.contains(e)&&(c.withCredentials=!0),c.open(n,e,!0),l(a)&&l(c.overrideMimeType)&&c.overrideMimeType(a),l(i))for(const d in i)i.hasOwnProperty(d)&&c.setRequestHeader(d,i[d]);l(t)&&(c.responseType=t);let f=!1;return typeof e=="string"&&(f=e.indexOf("file://")===0||typeof window<"u"&&window.location.origin==="file://"),c.onload=function(){if((c.status<200||c.status>=300)&&!(f&&c.status===0)){r.reject(new Rr(c.status,c.response,c.getAllResponseHeaders()));return}const d=c.response,u=c.responseType;if(n==="HEAD"||n==="OPTIONS"){const _=c.getAllResponseHeaders().trim().split(/[\r\n]+/),g={};_.forEach(function(y){const E=y.split(": "),A=E.shift();g[A]=E.join(": ")}),r.resolve(g);return}if(c.status===204)r.resolve(void 0);else if(l(d)&&(!l(t)||u===t))r.resolve(d);else if(t==="json"&&typeof d=="string")try{r.resolve(JSON.parse(d))}catch(m){r.reject(m)}else(u===""||u==="document")&&l(c.responseXML)&&c.responseXML.hasChildNodes()?r.resolve(c.responseXML):(u===""||u==="text")&&l(c.responseText)?r.resolve(c.responseText):r.reject(new mt("Invalid XMLHttpRequest response type."))},c.onerror=function(d){r.reject(new Rr)},c.send(o),c};se._Implementations.loadAndExecuteScript=function(e,t,n){return rg(e).catch(function(o){n.reject(o)})};se._DefaultImplementations={};se._DefaultImplementations.createImage=se._Implementations.createImage;se._DefaultImplementations.loadWithXhr=se._Implementations.loadWithXhr;se._DefaultImplementations.loadAndExecuteScript=se._Implementations.loadAndExecuteScript;se.DEFAULT=Object.freeze(new se({url:typeof document>"u"?"":document.location.href.split("?")[0]}));function Pr(e){e=e??xe.EMPTY_OBJECT,this._dates=void 0,this._samples=void 0,this._dateColumn=-1,this._xPoleWanderRadiansColumn=-1,this._yPoleWanderRadiansColumn=-1,this._ut1MinusUtcSecondsColumn=-1,this._xCelestialPoleOffsetRadiansColumn=-1,this._yCelestialPoleOffsetRadiansColumn=-1,this._taiMinusUtcSecondsColumn=-1,this._columnCount=0,this._lastIndex=-1,this._addNewLeapSeconds=e.addNewLeapSeconds??!0,l(e.data)?Zh(this,e.data):Zh(this,{columnNames:["dateIso8601","modifiedJulianDateUtc","xPoleWanderRadians","yPoleWanderRadians","ut1MinusUtcSeconds","lengthOfDayCorrectionSeconds","xCelestialPoleOffsetRadians","yCelestialPoleOffsetRadians","taiMinusUtcSeconds"],samples:[]})}Pr.fromUrl=async function(e,t){p.defined("url",e),t=t??xe.EMPTY_OBJECT;const n=se.createIfNeeded(e);let o;try{o=await n.fetchJson()}catch{throw new mt(`An error occurred while retrieving the EOP data from the URL ${n.url}.`)}return new Pr({addNewLeapSeconds:t.addNewLeapSeconds,data:o})};Pr.NONE=Object.freeze({compute:function(e,t){return l(t)?(t.xPoleWander=0,t.yPoleWander=0,t.xPoleOffset=0,t.yPoleOffset=0,t.ut1MinusUtc=0):t=new bf(0,0,0,0,0),t}});Pr.prototype.compute=function(e,t){if(!l(this._samples))return;if(l(t)||(t=new bf(0,0,0,0,0)),this._samples.length===0)return t.xPoleWander=0,t.yPoleWander=0,t.xPoleOffset=0,t.yPoleOffset=0,t.ut1MinusUtc=0,t;const n=this._dates,o=this._lastIndex;let i=0,r=0;if(l(o)){const s=n[o],c=n[o+1],f=ae.lessThanOrEquals(s,e),d=!l(c),u=d||ae.greaterThanOrEquals(c,e);if(f&&u)return i=o,!d&&c.equals(e)&&++i,r=i+1,Qh(this,n,this._samples,e,i,r,t),t}let a=jr(n,e,ae.compare,this._dateColumn);return a>=0?(a<n.length-1&&n[a+1].equals(e)&&++a,i=a,r=a):(r=~a,i=r-1,i<0&&(i=0)),this._lastIndex=i,Qh(this,n,this._samples,e,i,r,t),t};function Sg(e,t){return ae.compare(e.julianDate,t)}function Zh(e,t){if(!l(t.columnNames))throw new mt("Error in loaded EOP data: The columnNames property is required.");if(!l(t.samples))throw new mt("Error in loaded EOP data: The samples property is required.");const n=t.columnNames.indexOf("modifiedJulianDateUtc"),o=t.columnNames.indexOf("xPoleWanderRadians"),i=t.columnNames.indexOf("yPoleWanderRadians"),r=t.columnNames.indexOf("ut1MinusUtcSeconds"),a=t.columnNames.indexOf("xCelestialPoleOffsetRadians"),s=t.columnNames.indexOf("yCelestialPoleOffsetRadians"),c=t.columnNames.indexOf("taiMinusUtcSeconds");if(n<0||o<0||i<0||r<0||a<0||s<0||c<0)throw new mt("Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns");const f=e._samples=t.samples,d=e._dates=[];e._dateColumn=n,e._xPoleWanderRadiansColumn=o,e._yPoleWanderRadiansColumn=i,e._ut1MinusUtcSecondsColumn=r,e._xCelestialPoleOffsetRadiansColumn=a,e._yCelestialPoleOffsetRadiansColumn=s,e._taiMinusUtcSecondsColumn=c,e._columnCount=t.columnNames.length,e._lastIndex=void 0;let u;const m=e._addNewLeapSeconds;for(let _=0,g=f.length;_<g;_+=e._columnCount){const y=f[_+n],E=f[_+c],A=y+ft.MODIFIED_JULIAN_DATE_DIFFERENCE,S=new ae(A,E,Fe.TAI);if(d.push(S),m){if(E!==u&&l(u)){const O=ae.leapSeconds,M=jr(O,S,Sg);if(M<0){const R=new Ze(S,E);O.splice(~M,0,R)}}u=E}}}function Kh(e,t,n,o,i){const r=n*o;i.xPoleWander=t[r+e._xPoleWanderRadiansColumn],i.yPoleWander=t[r+e._yPoleWanderRadiansColumn],i.xPoleOffset=t[r+e._xCelestialPoleOffsetRadiansColumn],i.yPoleOffset=t[r+e._yCelestialPoleOffsetRadiansColumn],i.ut1MinusUtc=t[r+e._ut1MinusUtcSecondsColumn]}function Ji(e,t,n){return t+e*(n-t)}function Qh(e,t,n,o,i,r,a){const s=e._columnCount;if(r>t.length-1)return a.xPoleWander=0,a.yPoleWander=0,a.xPoleOffset=0,a.yPoleOffset=0,a.ut1MinusUtc=0,a;const c=t[i],f=t[r];if(c.equals(f)||o.equals(c))return Kh(e,n,i,s,a),a;if(o.equals(f))return Kh(e,n,r,s,a),a;const d=ae.secondsDifference(o,c)/ae.secondsDifference(f,c),u=i*s,m=r*s;let _=n[u+e._ut1MinusUtcSecondsColumn],g=n[m+e._ut1MinusUtcSecondsColumn];const y=g-_;if(y>.5||y<-.5){const E=n[u+e._taiMinusUtcSecondsColumn],A=n[m+e._taiMinusUtcSecondsColumn];E!==A&&(f.equals(o)?_=g:g-=A-E)}return a.xPoleWander=Ji(d,n[u+e._xPoleWanderRadiansColumn],n[m+e._xPoleWanderRadiansColumn]),a.yPoleWander=Ji(d,n[u+e._yPoleWanderRadiansColumn],n[m+e._yPoleWanderRadiansColumn]),a.xPoleOffset=Ji(d,n[u+e._xCelestialPoleOffsetRadiansColumn],n[m+e._xCelestialPoleOffsetRadiansColumn]),a.yPoleOffset=Ji(d,n[u+e._yCelestialPoleOffsetRadiansColumn],n[m+e._yCelestialPoleOffsetRadiansColumn]),a.ut1MinusUtc=Ji(d,_,g),a}function Rt(e,t,n){this.heading=e??0,this.pitch=t??0,this.roll=n??0}Rt.fromQuaternion=function(e,t){if(!l(e))throw new w("quaternion is required");l(t)||(t=new Rt);const n=2*(e.w*e.y-e.z*e.x),o=1-2*(e.x*e.x+e.y*e.y),i=2*(e.w*e.x+e.y*e.z),r=1-2*(e.y*e.y+e.z*e.z),a=2*(e.w*e.z+e.x*e.y);return t.heading=-Math.atan2(a,r),t.roll=Math.atan2(i,o),t.pitch=-T.asinClamped(n),t};Rt.fromDegrees=function(e,t,n,o){if(!l(e))throw new w("heading is required");if(!l(t))throw new w("pitch is required");if(!l(n))throw new w("roll is required");return l(o)||(o=new Rt),o.heading=e*T.RADIANS_PER_DEGREE,o.pitch=t*T.RADIANS_PER_DEGREE,o.roll=n*T.RADIANS_PER_DEGREE,o};Rt.clone=function(e,t){if(l(e))return l(t)?(t.heading=e.heading,t.pitch=e.pitch,t.roll=e.roll,t):new Rt(e.heading,e.pitch,e.roll)};Rt.equals=function(e,t){return e===t||l(e)&&l(t)&&e.heading===t.heading&&e.pitch===t.pitch&&e.roll===t.roll};Rt.equalsEpsilon=function(e,t,n,o){return e===t||l(e)&&l(t)&&T.equalsEpsilon(e.heading,t.heading,n,o)&&T.equalsEpsilon(e.pitch,t.pitch,n,o)&&T.equalsEpsilon(e.roll,t.roll,n,o)};Rt.prototype.clone=function(e){return Rt.clone(this,e)};Rt.prototype.equals=function(e){return Rt.equals(this,e)};Rt.prototype.equalsEpsilon=function(e,t,n){return Rt.equalsEpsilon(this,e,t,n)};Rt.prototype.toString=function(){return`(${this.heading}, ${this.pitch}, ${this.roll})`};const l0=/((?:.*\/)|^)Cesium\.js(?:\?|\#|$)/;function Ag(){const e=document.getElementsByTagName("script");for(let t=0,n=e.length;t<n;++t){const o=e[t].getAttribute("src"),i=l0.exec(o);if(i!==null)return i[1]}}let ca;function u0(e){return typeof document>"u"?e:(l(ca)||(ca=document.createElement("a")),ca.href=e,ca.href)}let Xo;function d0(){var t;if(l(Xo))return Xo;let e;if(typeof CESIUM_BASE_URL<"u"?e=CESIUM_BASE_URL:l((t=import.meta)==null?void 0:t.url)?e=Mr(".",import.meta.url):typeof define=="object"&&l(define.amd)&&!define.amd.toUrlUndefined&&l(require.toUrl)?e=Mr("..",xn("Core/buildModuleUrl.js")):e=Ag(),!l(e))throw new w("Unable to determine Cesium base URL automatically, try defining a global variable called CESIUM_BASE_URL.");return Xo=new se({url:u0(e)}),Xo.appendForwardSlash(),Xo}function xg(e){return u0(require.toUrl(`../${e}`))}function m0(e){return d0().getDerivedResource({url:e}).url}let fa;function xn(e){return l(fa)||(typeof define=="object"&&l(define.amd)&&!define.amd.toUrlUndefined&&l(require.toUrl)?fa=xg:fa=m0),fa(e)}xn._cesiumScriptRegex=l0;xn._buildModuleUrlFromBaseUrl=m0;xn._clearBaseResource=function(){Xo=void 0};xn.setBaseUrl=function(e){Xo=se.DEFAULT.getDerivedResource({url:e})};xn.getCesiumBaseUrl=d0;function p0(e,t,n){this.x=e,this.y=t,this.s=n}function Of(e){e=e??xe.EMPTY_OBJECT,this._xysFileUrlTemplate=se.createIfNeeded(e.xysFileUrlTemplate),this._interpolationOrder=e.interpolationOrder??9,this._sampleZeroJulianEphemerisDate=e.sampleZeroJulianEphemerisDate??24423965e-1,this._sampleZeroDateTT=new ae(this._sampleZeroJulianEphemerisDate,0,Fe.TAI),this._stepSizeDays=e.stepSizeDays??1,this._samplesPerXysFile=e.samplesPerXysFile??1e3,this._totalSamples=e.totalSamples??27426,this._samples=new Array(this._totalSamples*3),this._chunkDownloadsInProgress=[];const t=this._interpolationOrder,n=this._denominators=new Array(t+1),o=this._xTable=new Array(t+1),i=Math.pow(this._stepSizeDays,t);for(let r=0;r<=t;++r){n[r]=i,o[r]=r*this._stepSizeDays;for(let a=0;a<=t;++a)a!==r&&(n[r]*=r-a);n[r]=1/n[r]}this._work=new Array(t+1),this._coef=new Array(t+1)}const Og=new ae(0,0,Fe.TAI);function qc(e,t,n){const o=Og;return o.dayNumber=t,o.secondsOfDay=n,ae.daysDifference(o,e._sampleZeroDateTT)}Of.prototype.preload=function(e,t,n,o){const i=qc(this,e,t),r=qc(this,n,o);let a=i/this._stepSizeDays-this._interpolationOrder/2|0;a<0&&(a=0);let s=r/this._stepSizeDays-this._interpolationOrder/2|0+this._interpolationOrder;s>=this._totalSamples&&(s=this._totalSamples-1);const c=a/this._samplesPerXysFile|0,f=s/this._samplesPerXysFile|0,d=[];for(let u=c;u<=f;++u)d.push(kc(this,u));return Promise.all(d)};Of.prototype.computeXysRadians=function(e,t,n){const o=qc(this,e,t);if(o<0)return;const i=o/this._stepSizeDays|0;if(i>=this._totalSamples)return;const r=this._interpolationOrder;let a=i-(r/2|0);a<0&&(a=0);let s=a+r;s>=this._totalSamples&&(s=this._totalSamples-1,a=s-r,a<0&&(a=0));let c=!1;const f=this._samples;if(l(f[a*3])||(kc(this,a/this._samplesPerXysFile|0),c=!0),l(f[s*3])||(kc(this,s/this._samplesPerXysFile|0),c=!0),c)return;l(n)?(n.x=0,n.y=0,n.s=0):n=new p0(0,0,0);const d=o-a*this._stepSizeDays,u=this._work,m=this._denominators,_=this._coef,g=this._xTable;let y,E;for(y=0;y<=r;++y)u[y]=d-g[y];for(y=0;y<=r;++y){for(_[y]=1,E=0;E<=r;++E)E!==y&&(_[y]*=u[E]);_[y]*=m[y];let A=(a+y)*3;n.x+=_[y]*f[A++],n.y+=_[y]*f[A++],n.s+=_[y]*f[A]}return n};function kc(e,t){if(e._chunkDownloadsInProgress[t])return e._chunkDownloadsInProgress[t];let n;const o=e._xysFileUrlTemplate;l(o)?n=o.getDerivedResource({templateValues:{0:t}}):n=new se({url:xn(`Assets/IAU2006_XYS/IAU2006_XYS_${t}.json`)});const i=n.fetchJson().then(function(r){e._chunkDownloadsInProgress[t]=!1;const a=e._samples,s=r.samples,c=t*e._samplesPerXysFile*3;for(let f=0,d=s.length;f<d;++f)a[c+f]=s[f]});return e._chunkDownloadsInProgress[t]=i,i}let To;const lt={requestFullscreen:void 0,exitFullscreen:void 0,fullscreenEnabled:void 0,fullscreenElement:void 0,fullscreenchange:void 0,fullscreenerror:void 0},sn={};Object.defineProperties(sn,{element:{get:function(){if(sn.supportsFullscreen())return document[lt.fullscreenElement]}},changeEventName:{get:function(){if(sn.supportsFullscreen())return lt.fullscreenchange}},errorEventName:{get:function(){if(sn.supportsFullscreen())return lt.fullscreenerror}},enabled:{get:function(){if(sn.supportsFullscreen())return document[lt.fullscreenEnabled]}},fullscreen:{get:function(){if(sn.supportsFullscreen())return sn.element!==null}}});sn.supportsFullscreen=function(){if(l(To))return To;To=!1;const e=document.body;if(typeof e.requestFullscreen=="function")return lt.requestFullscreen="requestFullscreen",lt.exitFullscreen="exitFullscreen",lt.fullscreenEnabled="fullscreenEnabled",lt.fullscreenElement="fullscreenElement",lt.fullscreenchange="fullscreenchange",lt.fullscreenerror="fullscreenerror",To=!0,To;const t=["webkit","moz","o","ms","khtml"];let n;for(let o=0,i=t.length;o<i;++o){const r=t[o];n=`${r}RequestFullscreen`,typeof e[n]=="function"?(lt.requestFullscreen=n,To=!0):(n=`${r}RequestFullScreen`,typeof e[n]=="function"&&(lt.requestFullscreen=n,To=!0)),n=`${r}ExitFullscreen`,typeof document[n]=="function"?lt.exitFullscreen=n:(n=`${r}CancelFullScreen`,typeof document[n]=="function"&&(lt.exitFullscreen=n)),n=`${r}FullscreenEnabled`,document[n]!==void 0?lt.fullscreenEnabled=n:(n=`${r}FullScreenEnabled`,document[n]!==void 0&&(lt.fullscreenEnabled=n)),n=`${r}FullscreenElement`,document[n]!==void 0?lt.fullscreenElement=n:(n=`${r}FullScreenElement`,document[n]!==void 0&&(lt.fullscreenElement=n)),n=`${r}fullscreenchange`,document[`on${n}`]!==void 0&&(r==="ms"&&(n="MSFullscreenChange"),lt.fullscreenchange=n),n=`${r}fullscreenerror`,document[`on${n}`]!==void 0&&(r==="ms"&&(n="MSFullscreenError"),lt.fullscreenerror=n)}return To};sn.requestFullscreen=function(e,t){sn.supportsFullscreen()&&e[lt.requestFullscreen]({vrDisplay:t})};sn.exitFullscreen=function(){sn.supportsFullscreen()&&document[lt.exitFullscreen]()};sn._names=lt;let Yt;typeof navigator<"u"?Yt=navigator:Yt={};function ei(e){const t=e.split(".");for(let n=0,o=t.length;n<o;++n)t[n]=parseInt(t[n],10);return t}let ha,_0;function Cf(){if(!l(ha)&&(ha=!1,!Ts())){const e=/ Chrome\/([\.0-9]+)/.exec(Yt.userAgent);e!==null&&(ha=!0,_0=ei(e[1]))}return ha}function Cg(){return Cf()&&_0}let la,g0;function y0(){if(!l(la)&&(la=!1,!Cf()&&!Ts()&&/ Safari\/[\.0-9]+/.test(Yt.userAgent))){const e=/ Version\/([\.0-9]+)/.exec(Yt.userAgent);e!==null&&(la=!0,g0=ei(e[1]))}return la}function Mg(){return y0()&&g0}let ua,jc;function b0(){if(!l(ua)){ua=!1;const e=/ AppleWebKit\/([\.0-9]+)(\+?)/.exec(Yt.userAgent);e!==null&&(ua=!0,jc=ei(e[1]),jc.isNightly=!!e[2])}return ua}function Rg(){return b0()&&jc}let er,Vc;function E0(){if(!l(er)){er=!1;let e;Yt.appName==="Microsoft Internet Explorer"?(e=/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Yt.userAgent),e!==null&&(er=!0,Vc=ei(e[1]))):Yt.appName==="Netscape"&&(e=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Yt.userAgent),e!==null&&(er=!0,Vc=ei(e[1])))}return er}function Pg(){return E0()&&Vc}let da,w0;function Ts(){if(!l(da)){da=!1;const e=/ Edg\/([\.0-9]+)/.exec(Yt.userAgent);e!==null&&(da=!0,w0=ei(e[1]))}return da}function Ig(){return Ts()&&w0}let ma,Mf;function Ss(){if(!l(ma)){ma=!1;const e=/Firefox\/([\.0-9]+)/.exec(Yt.userAgent);e!==null&&(ma=!0,Mf=ei(e[1]))}return ma}let js;function zg(){return l(js)||(js=/Windows/i.test(Yt.appVersion)),js}let Vs;function Ng(){return l(Vs)||(Vs=navigator.platform==="iPhone"||navigator.platform==="iPod"||navigator.platform==="iPad"),Vs}function Dg(){return Ss()&&Mf}let Hs;function Lg(){return l(Hs)||(Hs=!Ss()&&typeof PointerEvent<"u"&&(!l(Yt.pointerEnabled)||Yt.pointerEnabled)),Hs}let v0,pa;function T0(){if(!l(pa)){const e=document.createElement("canvas");e.setAttribute("style","image-rendering: -moz-crisp-edges;image-rendering: pixelated;");const t=e.style.imageRendering;pa=l(t)&&t!=="",pa&&(v0=t)}return pa}function Fg(){return T0()?v0:void 0}function jt(){if(!jt.initialized)throw new w("You must call FeatureDetection.supportsWebP.initialize and wait for the promise to resolve before calling FeatureDetection.supportsWebP");return jt._result}jt._promise=void 0;jt._result=void 0;jt.initialize=function(){return l(jt._promise)||(jt._promise=new Promise(e=>{const t=new Image;t.onload=function(){jt._result=t.width>0&&t.height>0,e(jt._result)},t.onerror=function(){jt._result=!1,e(jt._result)},t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"})),jt._promise};Object.defineProperties(jt,{initialized:{get:function(){return l(jt._result)}}});const wi=[];typeof ArrayBuffer<"u"&&(wi.push(Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array),typeof Uint8ClampedArray<"u"&&wi.push(Uint8ClampedArray),typeof Uint8ClampedArray<"u"&&wi.push(Uint8ClampedArray),typeof BigInt64Array<"u"&&wi.push(BigInt64Array),typeof BigUint64Array<"u"&&wi.push(BigUint64Array));const xt={isChrome:Cf,chromeVersion:Cg,isSafari:y0,safariVersion:Mg,isWebkit:b0,webkitVersion:Rg,isInternetExplorer:E0,internetExplorerVersion:Pg,isEdge:Ts,edgeVersion:Ig,isFirefox:Ss,firefoxVersion:Dg,isWindows:zg,isIPadOrIOS:Ng,hardwareConcurrency:Yt.hardwareConcurrency??3,supportsPointerEvents:Lg,supportsImageRenderingPixelated:T0,supportsWebP:jt,imageRenderingValue:Fg,typedArrayTypes:wi};xt.supportsBasis=function(e){return xt.supportsWebAssembly()&&e.context.supportsBasis};xt.supportsFullscreen=function(){return sn.supportsFullscreen()};xt.supportsTypedArrays=function(){return typeof ArrayBuffer<"u"};xt.supportsBigInt64Array=function(){return typeof BigInt64Array<"u"};xt.supportsBigUint64Array=function(){return typeof BigUint64Array<"u"};xt.supportsBigInt=function(){return typeof BigInt<"u"};xt.supportsWebWorkers=function(){return typeof Worker<"u"};xt.supportsWebAssembly=function(){return typeof WebAssembly<"u"};xt.supportsWebgl2=function(e){return p.defined("scene",e),e.context.webgl2};xt.supportsEsmWebWorkers=function(){return!Ss()||parseInt(Mf)>=114};function oe(e,t,n,o){this.x=e??0,this.y=t??0,this.z=n??0,this.w=o??0}let tr=new h;oe.fromAxisAngle=function(e,t,n){p.typeOf.object("axis",e),p.typeOf.number("angle",t);const o=t/2,i=Math.sin(o);tr=h.normalize(e,tr);const r=tr.x*i,a=tr.y*i,s=tr.z*i,c=Math.cos(o);return l(n)?(n.x=r,n.y=a,n.z=s,n.w=c,n):new oe(r,a,s,c)};const Bg=[1,2,0],Ug=new Array(3);oe.fromRotationMatrix=function(e,t){p.typeOf.object("matrix",e);let n,o,i,r,a;const s=e[B.COLUMN0ROW0],c=e[B.COLUMN1ROW1],f=e[B.COLUMN2ROW2],d=s+c+f;if(d>0)n=Math.sqrt(d+1),a=.5*n,n=.5/n,o=(e[B.COLUMN1ROW2]-e[B.COLUMN2ROW1])*n,i=(e[B.COLUMN2ROW0]-e[B.COLUMN0ROW2])*n,r=(e[B.COLUMN0ROW1]-e[B.COLUMN1ROW0])*n;else{const u=Bg;let m=0;c>s&&(m=1),f>s&&f>c&&(m=2);const _=u[m],g=u[_];n=Math.sqrt(e[B.getElementIndex(m,m)]-e[B.getElementIndex(_,_)]-e[B.getElementIndex(g,g)]+1);const y=Ug;y[m]=.5*n,n=.5/n,a=(e[B.getElementIndex(g,_)]-e[B.getElementIndex(_,g)])*n,y[_]=(e[B.getElementIndex(_,m)]+e[B.getElementIndex(m,_)])*n,y[g]=(e[B.getElementIndex(g,m)]+e[B.getElementIndex(m,g)])*n,o=-y[0],i=-y[1],r=-y[2]}return l(t)?(t.x=o,t.y=i,t.z=r,t.w=a,t):new oe(o,i,r,a)};const Jh=new oe;let el=new oe,Ws=new oe,tl=new oe;oe.fromHeadingPitchRoll=function(e,t){return p.typeOf.object("headingPitchRoll",e),tl=oe.fromAxisAngle(h.UNIT_X,e.roll,Jh),Ws=oe.fromAxisAngle(h.UNIT_Y,-e.pitch,t),t=oe.multiply(Ws,tl,Ws),el=oe.fromAxisAngle(h.UNIT_Z,-e.heading,Jh),oe.multiply(el,t,t)};const _a=new h,Ys=new h,Pn=new oe,nl=new oe,ga=new oe;oe.packedLength=4;oe.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,t[n++]=e.x,t[n++]=e.y,t[n++]=e.z,t[n]=e.w,t};oe.unpack=function(e,t,n){return p.defined("array",e),t=t??0,l(n)||(n=new oe),n.x=e[t],n.y=e[t+1],n.z=e[t+2],n.w=e[t+3],n};oe.packedInterpolationLength=3;oe.convertPackedArrayForInterpolation=function(e,t,n,o){oe.unpack(e,n*4,ga),oe.conjugate(ga,ga);for(let i=0,r=n-t+1;i<r;i++){const a=i*3;oe.unpack(e,(t+i)*4,Pn),oe.multiply(Pn,ga,Pn),Pn.w<0&&oe.negate(Pn,Pn),oe.computeAxis(Pn,_a);const s=oe.computeAngle(Pn);l(o)||(o=[]),o[a]=_a.x*s,o[a+1]=_a.y*s,o[a+2]=_a.z*s}};oe.unpackInterpolationResult=function(e,t,n,o,i){l(i)||(i=new oe),h.fromArray(e,0,Ys);const r=h.magnitude(Ys);return oe.unpack(t,o*4,nl),r===0?oe.clone(oe.IDENTITY,Pn):oe.fromAxisAngle(Ys,r,Pn),oe.multiply(Pn,nl,i)};oe.clone=function(e,t){if(l(e))return l(t)?(t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t):new oe(e.x,e.y,e.z,e.w)};oe.conjugate=function(e,t){return p.typeOf.object("quaternion",e),p.typeOf.object("result",t),t.x=-e.x,t.y=-e.y,t.z=-e.z,t.w=e.w,t};oe.magnitudeSquared=function(e){return p.typeOf.object("quaternion",e),e.x*e.x+e.y*e.y+e.z*e.z+e.w*e.w};oe.magnitude=function(e){return Math.sqrt(oe.magnitudeSquared(e))};oe.normalize=function(e,t){p.typeOf.object("result",t);const n=1/oe.magnitude(e),o=e.x*n,i=e.y*n,r=e.z*n,a=e.w*n;return t.x=o,t.y=i,t.z=r,t.w=a,t};oe.inverse=function(e,t){p.typeOf.object("result",t);const n=oe.magnitudeSquared(e);return t=oe.conjugate(e,t),oe.multiplyByScalar(t,1/n,t)};oe.add=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x+t.x,n.y=e.y+t.y,n.z=e.z+t.z,n.w=e.w+t.w,n};oe.subtract=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.x=e.x-t.x,n.y=e.y-t.y,n.z=e.z-t.z,n.w=e.w-t.w,n};oe.negate=function(e,t){return p.typeOf.object("quaternion",e),p.typeOf.object("result",t),t.x=-e.x,t.y=-e.y,t.z=-e.z,t.w=-e.w,t};oe.dot=function(e,t){return p.typeOf.object("left",e),p.typeOf.object("right",t),e.x*t.x+e.y*t.y+e.z*t.z+e.w*t.w};oe.multiply=function(e,t,n){p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n);const o=e.x,i=e.y,r=e.z,a=e.w,s=t.x,c=t.y,f=t.z,d=t.w,u=a*s+o*d+i*f-r*c,m=a*c-o*f+i*d+r*s,_=a*f+o*c-i*s+r*d,g=a*d-o*s-i*c-r*f;return n.x=u,n.y=m,n.z=_,n.w=g,n};oe.multiplyByScalar=function(e,t,n){return p.typeOf.object("quaternion",e),p.typeOf.number("scalar",t),p.typeOf.object("result",n),n.x=e.x*t,n.y=e.y*t,n.z=e.z*t,n.w=e.w*t,n};oe.divideByScalar=function(e,t,n){return p.typeOf.object("quaternion",e),p.typeOf.number("scalar",t),p.typeOf.object("result",n),n.x=e.x/t,n.y=e.y/t,n.z=e.z/t,n.w=e.w/t,n};oe.computeAxis=function(e,t){p.typeOf.object("quaternion",e),p.typeOf.object("result",t);const n=e.w;if(Math.abs(n-1)<T.EPSILON6||Math.abs(n+1)<T.EPSILON6)return t.x=1,t.y=t.z=0,t;const o=1/Math.sqrt(1-n*n);return t.x=e.x*o,t.y=e.y*o,t.z=e.z*o,t};oe.computeAngle=function(e){return p.typeOf.object("quaternion",e),Math.abs(e.w-1)<T.EPSILON6?0:2*Math.acos(e.w)};let $s=new oe;oe.lerp=function(e,t,n,o){return p.typeOf.object("start",e),p.typeOf.object("end",t),p.typeOf.number("t",n),p.typeOf.object("result",o),$s=oe.multiplyByScalar(t,n,$s),o=oe.multiplyByScalar(e,1-n,o),oe.add($s,o,o)};let ol=new oe,Xs=new oe,Zs=new oe;oe.slerp=function(e,t,n,o){p.typeOf.object("start",e),p.typeOf.object("end",t),p.typeOf.number("t",n),p.typeOf.object("result",o);let i=oe.dot(e,t),r=t;if(i<0&&(i=-i,r=ol=oe.negate(t,ol)),1-i<T.EPSILON6)return oe.lerp(e,r,n,o);const a=Math.acos(i);return Xs=oe.multiplyByScalar(e,Math.sin((1-n)*a),Xs),Zs=oe.multiplyByScalar(r,Math.sin(n*a),Zs),o=oe.add(Xs,Zs,o),oe.multiplyByScalar(o,1/Math.sin(a),o)};oe.log=function(e,t){p.typeOf.object("quaternion",e),p.typeOf.object("result",t);const n=T.acosClamped(e.w);let o=0;return n!==0&&(o=n/Math.sin(n)),h.multiplyByScalar(e,o,t)};oe.exp=function(e,t){p.typeOf.object("cartesian",e),p.typeOf.object("result",t);const n=h.magnitude(e);let o=0;return n!==0&&(o=Math.sin(n)/n),t.x=e.x*o,t.y=e.y*o,t.z=e.z*o,t.w=Math.cos(n),t};const Gg=new h,qg=new h,br=new oe,Ti=new oe;oe.computeInnerQuadrangle=function(e,t,n,o){p.typeOf.object("q0",e),p.typeOf.object("q1",t),p.typeOf.object("q2",n),p.typeOf.object("result",o);const i=oe.conjugate(t,br);oe.multiply(i,n,Ti);const r=oe.log(Ti,Gg);oe.multiply(i,e,Ti);const a=oe.log(Ti,qg);return h.add(r,a,r),h.multiplyByScalar(r,.25,r),h.negate(r,r),oe.exp(r,br),oe.multiply(t,br,o)};oe.squad=function(e,t,n,o,i,r){p.typeOf.object("q0",e),p.typeOf.object("q1",t),p.typeOf.object("s0",n),p.typeOf.object("s1",o),p.typeOf.number("t",i),p.typeOf.object("result",r);const a=oe.slerp(e,t,i,br),s=oe.slerp(n,o,i,Ti);return oe.slerp(a,s,2*i*(1-i),r)};const kg=new oe,S0=1.9011074535173003,is=xt.supportsTypedArrays()?new Float32Array(8):[],rs=xt.supportsTypedArrays()?new Float32Array(8):[],io=xt.supportsTypedArrays()?new Float32Array(8):[],ro=xt.supportsTypedArrays()?new Float32Array(8):[];for(let e=0;e<7;++e){const t=e+1,n=2*t+1;is[e]=1/(t*n),rs[e]=t/n}is[7]=S0/(8*17);rs[7]=S0*8/17;oe.fastSlerp=function(e,t,n,o){p.typeOf.object("start",e),p.typeOf.object("end",t),p.typeOf.number("t",n),p.typeOf.object("result",o);let i=oe.dot(e,t),r;i>=0?r=1:(r=-1,i=-i);const a=i-1,s=1-n,c=n*n,f=s*s;for(let _=7;_>=0;--_)io[_]=(is[_]*c-rs[_])*a,ro[_]=(is[_]*f-rs[_])*a;const d=r*n*(1+io[0]*(1+io[1]*(1+io[2]*(1+io[3]*(1+io[4]*(1+io[5]*(1+io[6]*(1+io[7])))))))),u=s*(1+ro[0]*(1+ro[1]*(1+ro[2]*(1+ro[3]*(1+ro[4]*(1+ro[5]*(1+ro[6]*(1+ro[7])))))))),m=oe.multiplyByScalar(e,u,kg);return oe.multiplyByScalar(t,d,o),oe.add(m,o,o)};oe.fastSquad=function(e,t,n,o,i,r){p.typeOf.object("q0",e),p.typeOf.object("q1",t),p.typeOf.object("s0",n),p.typeOf.object("s1",o),p.typeOf.number("t",i),p.typeOf.object("result",r);const a=oe.fastSlerp(e,t,i,br),s=oe.fastSlerp(n,o,i,Ti);return oe.fastSlerp(a,s,2*i*(1-i),r)};oe.equals=function(e,t){return e===t||l(e)&&l(t)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w};oe.equalsEpsilon=function(e,t,n){return n=n??0,e===t||l(e)&&l(t)&&Math.abs(e.x-t.x)<=n&&Math.abs(e.y-t.y)<=n&&Math.abs(e.z-t.z)<=n&&Math.abs(e.w-t.w)<=n};oe.ZERO=Object.freeze(new oe(0,0,0,0));oe.IDENTITY=Object.freeze(new oe(0,0,0,1));oe.prototype.clone=function(e){return oe.clone(this,e)};oe.prototype.equals=function(e){return oe.equals(this,e)};oe.prototype.equalsEpsilon=function(e,t){return oe.equalsEpsilon(this,e,t)};oe.prototype.toString=function(){return`(${this.x}, ${this.y}, ${this.z}, ${this.w})`};const Pe={},Ks={up:{south:"east",north:"west",west:"south",east:"north"},down:{south:"west",north:"east",west:"north",east:"south"},south:{up:"west",down:"east",west:"down",east:"up"},north:{up:"east",down:"west",west:"up",east:"down"},west:{up:"north",down:"south",north:"down",south:"up"},east:{up:"south",down:"north",north:"up",south:"down"}},mi={north:[-1,0,0],east:[0,1,0],up:[0,0,1],south:[1,0,0],west:[0,-1,0],down:[0,0,-1]},Qs={},on={east:new h,north:new h,up:new h,west:new h,south:new h,down:new h};let So=new h,Ao=new h,xo=new h;Pe.localFrameToFixedFrameGenerator=function(e,t){if(!Ks.hasOwnProperty(e)||!Ks[e].hasOwnProperty(t))throw new w("firstAxis and secondAxis must be east, north, up, west, south or down.");const n=Ks[e][t];let o;const i=e+t;return l(Qs[i])?o=Qs[i]:(o=function(r,a,s){if(!l(r))throw new w("origin is required.");if(isNaN(r.x)||isNaN(r.y)||isNaN(r.z))throw new w("origin has a NaN component");if(l(s)||(s=new U),h.equalsEpsilon(r,h.ZERO,T.EPSILON14))h.unpack(mi[e],0,So),h.unpack(mi[t],0,Ao),h.unpack(mi[n],0,xo);else if(T.equalsEpsilon(r.x,0,T.EPSILON14)&&T.equalsEpsilon(r.y,0,T.EPSILON14)){const c=T.sign(r.z);h.unpack(mi[e],0,So),e!=="east"&&e!=="west"&&h.multiplyByScalar(So,c,So),h.unpack(mi[t],0,Ao),t!=="east"&&t!=="west"&&h.multiplyByScalar(Ao,c,Ao),h.unpack(mi[n],0,xo),n!=="east"&&n!=="west"&&h.multiplyByScalar(xo,c,xo)}else{a=a??be.default,a.geodeticSurfaceNormal(r,on.up);const c=on.up,f=on.east;f.x=-r.y,f.y=r.x,f.z=0,h.normalize(f,on.east),h.cross(c,f,on.north),h.multiplyByScalar(on.up,-1,on.down),h.multiplyByScalar(on.east,-1,on.west),h.multiplyByScalar(on.north,-1,on.south),So=on[e],Ao=on[t],xo=on[n]}return s[0]=So.x,s[1]=So.y,s[2]=So.z,s[3]=0,s[4]=Ao.x,s[5]=Ao.y,s[6]=Ao.z,s[7]=0,s[8]=xo.x,s[9]=xo.y,s[10]=xo.z,s[11]=0,s[12]=r.x,s[13]=r.y,s[14]=r.z,s[15]=1,s},Qs[i]=o),o};Pe.eastNorthUpToFixedFrame=Pe.localFrameToFixedFrameGenerator("east","north");Pe.northEastDownToFixedFrame=Pe.localFrameToFixedFrameGenerator("north","east");Pe.northUpEastToFixedFrame=Pe.localFrameToFixedFrameGenerator("north","up");Pe.northWestUpToFixedFrame=Pe.localFrameToFixedFrameGenerator("north","west");const jg=new oe,Vg=new h(1,1,1),Hg=new U;Pe.headingPitchRollToFixedFrame=function(e,t,n,o,i){p.typeOf.object("HeadingPitchRoll",t),o=o??Pe.eastNorthUpToFixedFrame;const r=oe.fromHeadingPitchRoll(t,jg),a=U.fromTranslationQuaternionRotationScale(h.ZERO,r,Vg,Hg);return i=o(e,n,i),U.multiply(i,a,i)};const Wg=new U,Yg=new B;Pe.headingPitchRollQuaternion=function(e,t,n,o,i){p.typeOf.object("HeadingPitchRoll",t);const r=Pe.headingPitchRollToFixedFrame(e,t,n,o,Wg),a=U.getMatrix3(r,Yg);return oe.fromRotationMatrix(a,i)};const $g=new h(1,1,1),Xg=new h,il=new U,Zg=new U,Kg=new B,Qg=new oe;Pe.fixedFrameToHeadingPitchRoll=function(e,t,n,o){p.defined("transform",e),t=t??be.default,n=n??Pe.eastNorthUpToFixedFrame,l(o)||(o=new Rt);const i=U.getTranslation(e,Xg);if(h.equals(i,h.ZERO))return o.heading=0,o.pitch=0,o.roll=0,o;let r=U.inverseTransformation(n(i,t,il),il),a=U.setScale(e,$g,Zg);a=U.setTranslation(a,h.ZERO,a),r=U.multiply(r,a,r);let s=oe.fromRotationMatrix(U.getMatrix3(r,Kg),Qg);return s=oe.normalize(s,s),Rt.fromQuaternion(s,o)};const Jg=6*3600+41*60+50.54841,ey=8640184812866e-6,ty=.093104,ny=-62e-7,oy=11772758384668e-32,iy=72921158553e-15,ry=T.TWO_PI/86400;let ya=new ae;Pe.computeIcrfToCentralBodyFixedMatrix=function(e,t){let n=Pe.computeIcrfToFixedMatrix(e,t);return l(n)||(n=Pe.computeTemeToPseudoFixedMatrix(e,t)),n};Pe.computeTemeToPseudoFixedMatrix=function(e,t){if(!l(e))throw new w("date is required.");ya=ae.addSeconds(e,-ae.computeTaiMinusUtc(e),ya);const n=ya.dayNumber,o=ya.secondsOfDay;let i;const r=n-2451545;o>=43200?i=(r+.5)/ft.DAYS_PER_JULIAN_CENTURY:i=(r-.5)/ft.DAYS_PER_JULIAN_CENTURY;const s=(Jg+i*(ey+i*(ty+i*ny)))*ry%T.TWO_PI,c=iy+oy*(n-24515455e-1),f=(o+ft.SECONDS_PER_DAY*.5)%ft.SECONDS_PER_DAY,d=s+c*f,u=Math.cos(d),m=Math.sin(d);return l(t)?(t[0]=u,t[1]=-m,t[2]=0,t[3]=m,t[4]=u,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t):new B(u,m,0,-m,u,0,0,0,1)};Pe.iau2006XysData=new Of;Pe.earthOrientationParameters=Pr.NONE;const Hc=32.184,ay=2451545;Pe.preloadIcrfFixed=function(e){const t=e.start.dayNumber,n=e.start.secondsOfDay+Hc,o=e.stop.dayNumber,i=e.stop.secondsOfDay+Hc;return Pe.iau2006XysData.preload(t,n,o,i)};Pe.computeIcrfToFixedMatrix=function(e,t){if(!l(e))throw new w("date is required.");l(t)||(t=new B);const n=Pe.computeFixedToIcrfMatrix(e,t);if(l(n))return B.transpose(n,t)};const sy=32.184,cy=2451545,ba=new Rt,fy=new B,hy=new ae;Pe.computeMoonFixedToIcrfMatrix=function(e,t){if(!l(e))throw new w("date is required.");const n=ae.addSeconds(e,sy,hy),o=ae.totalDays(n)-cy,i=T.toRadians(12.112)-T.toRadians(.052992)*o,r=T.toRadians(24.224)-T.toRadians(.105984)*o,a=T.toRadians(227.645)+T.toRadians(13.012)*o,s=T.toRadians(261.105)+T.toRadians(13.340716)*o,c=T.toRadians(358)+T.toRadians(.9856)*o;return ba.pitch=T.toRadians(180)-T.toRadians(3.878)*Math.sin(i)-T.toRadians(.12)*Math.sin(r)+T.toRadians(.07)*Math.sin(a)-T.toRadians(.017)*Math.sin(s),ba.roll=T.toRadians(66.53-90)+T.toRadians(1.543)*Math.cos(i)+T.toRadians(.24)*Math.cos(r)-T.toRadians(.028)*Math.cos(a)+T.toRadians(.007)*Math.cos(s),ba.heading=T.toRadians(244.375-90)+T.toRadians(13.17635831)*o+T.toRadians(3.558)*Math.sin(i)+T.toRadians(.121)*Math.sin(r)-T.toRadians(.064)*Math.sin(a)+T.toRadians(.016)*Math.sin(s)+T.toRadians(.025)*Math.sin(c),B.fromHeadingPitchRoll(ba,fy)};Pe.computeIcrfToMoonFixedMatrix=function(e,t){if(!l(e))throw new w("date is required.");l(t)||(t=new B);const n=Pe.computeMoonFixedToIcrfMatrix(e,t);if(l(n))return B.transpose(n,t)};const ly=new p0(0,0,0),uy=new bf(0,0,0,0,0),Js=new B,ec=new B;Pe.computeFixedToIcrfMatrix=function(e,t){if(!l(e))throw new w("date is required.");l(t)||(t=new B);const n=Pe.earthOrientationParameters.compute(e,uy);if(!l(n))return;const o=e.dayNumber,i=e.secondsOfDay+Hc,r=Pe.iau2006XysData.computeXysRadians(o,i,ly);if(!l(r))return;const a=r.x+n.xPoleOffset,s=r.y+n.yPoleOffset,c=1/(1+Math.sqrt(1-a*a-s*s)),f=Js;f[0]=1-c*a*a,f[3]=-c*a*s,f[6]=a,f[1]=-c*a*s,f[4]=1-c*s*s,f[7]=s,f[2]=-a,f[5]=-s,f[8]=1-c*(a*a+s*s);const d=B.fromRotationZ(-r.s,ec),u=B.multiply(f,d,Js),m=e.dayNumber,_=e.secondsOfDay-ae.computeTaiMinusUtc(e)+n.ut1MinusUtc,g=m-2451545,y=_/ft.SECONDS_PER_DAY;let E=.779057273264+y+.00273781191135448*(g+y);E=E%1*T.TWO_PI;const A=B.fromRotationZ(E,ec),S=B.multiply(u,A,Js),O=Math.cos(n.xPoleWander),M=Math.cos(n.yPoleWander),R=Math.sin(n.xPoleWander),N=Math.sin(n.yPoleWander);let F=o-ay+i/ft.SECONDS_PER_DAY;F/=36525;const z=-47e-6*F*T.RADIANS_PER_DEGREE/3600,G=Math.cos(z),q=Math.sin(z),k=ec;return k[0]=O*G,k[1]=O*q,k[2]=R,k[3]=-M*q+N*R*G,k[4]=M*G+N*R*q,k[5]=-N*O,k[6]=-N*q-M*R*G,k[7]=N*G-M*R*q,k[8]=M*O,B.multiply(S,k,t)};const dy=new Q;Pe.pointToWindowCoordinates=function(e,t,n,o){return o=Pe.pointToGLWindowCoordinates(e,t,n,o),o.y=2*t[5]-o.y,o};Pe.pointToGLWindowCoordinates=function(e,t,n,o){if(!l(e))throw new w("modelViewProjectionMatrix is required.");if(!l(t))throw new w("viewportTransformation is required.");if(!l(n))throw new w("point is required.");l(o)||(o=new V);const i=dy;return U.multiplyByVector(e,Q.fromElements(n.x,n.y,n.z,1,i),i),Q.multiplyByScalar(i,1/i.w,i),U.multiplyByVector(t,i,i),V.fromCartesian4(i,o)};const my=new h,py=new h,_y=new h;Pe.rotationMatrixFromPositionVelocity=function(e,t,n,o){if(!l(e))throw new w("position is required.");if(!l(t))throw new w("velocity is required.");const i=(n??be.default).geodeticSurfaceNormal(e,my);let r=h.cross(t,i,py);h.equalsEpsilon(r,h.ZERO,T.EPSILON6)&&(r=h.clone(h.UNIT_X,r));const a=h.cross(r,t,_y);return h.normalize(a,a),h.cross(t,a,r),h.negate(r,r),h.normalize(r,r),l(o)||(o=new B),o[0]=t.x,o[1]=t.y,o[2]=t.z,o[3]=r.x,o[4]=r.y,o[5]=r.z,o[6]=a.x,o[7]=a.y,o[8]=a.z,o};const A0=new U(0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1),x0=new le,Wc=new h,gy=new h,yy=new B,Yc=new U,O0=new U;Pe.basisTo2D=function(e,t,n){if(!l(e))throw new w("projection is required.");if(!l(t))throw new w("matrix is required.");if(!l(n))throw new w("result is required.");const o=U.getTranslation(t,gy),i=e.ellipsoid;let r;if(h.equals(o,h.ZERO))r=h.clone(h.ZERO,Wc);else{const d=i.cartesianToCartographic(o,x0);r=e.project(d,Wc),h.fromElements(r.z,r.x,r.y,r)}const a=Pe.eastNorthUpToFixedFrame(o,i,Yc),s=U.inverseTransformation(a,O0),c=U.getMatrix3(t,yy),f=U.multiplyByMatrix3(s,c,n);return U.multiply(A0,f,n),U.setTranslation(n,r,n),n};Pe.ellipsoidTo2DModelMatrix=function(e,t,n){if(!l(e))throw new w("projection is required.");if(!l(t))throw new w("center is required.");if(!l(n))throw new w("result is required.");const o=e.ellipsoid,i=Pe.eastNorthUpToFixedFrame(t,o,Yc),r=U.inverseTransformation(i,O0),a=o.cartesianToCartographic(t,x0),s=e.project(a,Wc);h.fromElements(s.z,s.x,s.y,s);const c=U.fromTranslation(s,Yc);return U.multiply(A0,r,n),U.multiply(c,n,n),n};function Se(e,t,n,o){this.west=e??0,this.south=t??0,this.east=n??0,this.north=o??0}Object.defineProperties(Se.prototype,{width:{get:function(){return Se.computeWidth(this)}},height:{get:function(){return Se.computeHeight(this)}}});Se.packedLength=4;Se.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,t[n++]=e.west,t[n++]=e.south,t[n++]=e.east,t[n]=e.north,t};Se.unpack=function(e,t,n){return p.defined("array",e),t=t??0,l(n)||(n=new Se),n.west=e[t++],n.south=e[t++],n.east=e[t++],n.north=e[t],n};Se.computeWidth=function(e){p.typeOf.object("rectangle",e);let t=e.east;const n=e.west;return t<n&&(t+=T.TWO_PI),t-n};Se.computeHeight=function(e){return p.typeOf.object("rectangle",e),e.north-e.south};Se.fromDegrees=function(e,t,n,o,i){return e=T.toRadians(e??0),t=T.toRadians(t??0),n=T.toRadians(n??0),o=T.toRadians(o??0),l(i)?(i.west=e,i.south=t,i.east=n,i.north=o,i):new Se(e,t,n,o)};Se.fromRadians=function(e,t,n,o,i){return l(i)?(i.west=e??0,i.south=t??0,i.east=n??0,i.north=o??0,i):new Se(e,t,n,o)};Se.fromCartographicArray=function(e,t){p.defined("cartographics",e);let n=Number.MAX_VALUE,o=-Number.MAX_VALUE,i=Number.MAX_VALUE,r=-Number.MAX_VALUE,a=Number.MAX_VALUE,s=-Number.MAX_VALUE;for(let c=0,f=e.length;c<f;c++){const d=e[c];n=Math.min(n,d.longitude),o=Math.max(o,d.longitude),a=Math.min(a,d.latitude),s=Math.max(s,d.latitude);const u=d.longitude>=0?d.longitude:d.longitude+T.TWO_PI;i=Math.min(i,u),r=Math.max(r,u)}return o-n>r-i&&(n=i,o=r,o>T.PI&&(o=o-T.TWO_PI),n>T.PI&&(n=n-T.TWO_PI)),l(t)?(t.west=n,t.south=a,t.east=o,t.north=s,t):new Se(n,a,o,s)};Se.fromCartesianArray=function(e,t,n){p.defined("cartesians",e),t=t??be.default;let o=Number.MAX_VALUE,i=-Number.MAX_VALUE,r=Number.MAX_VALUE,a=-Number.MAX_VALUE,s=Number.MAX_VALUE,c=-Number.MAX_VALUE;for(let f=0,d=e.length;f<d;f++){const u=t.cartesianToCartographic(e[f]);o=Math.min(o,u.longitude),i=Math.max(i,u.longitude),s=Math.min(s,u.latitude),c=Math.max(c,u.latitude);const m=u.longitude>=0?u.longitude:u.longitude+T.TWO_PI;r=Math.min(r,m),a=Math.max(a,m)}return i-o>a-r&&(o=r,i=a,i>T.PI&&(i=i-T.TWO_PI),o>T.PI&&(o=o-T.TWO_PI)),l(n)?(n.west=o,n.south=s,n.east=i,n.north=c,n):new Se(o,s,i,c)};const by=new h,Ey=new h,wy=new h,vy=new h,Ty=new h,$c=new Array(5);for(let e=0;e<$c.length;++e)$c[e]=new h;Se.fromBoundingSphere=function(e,t,n){p.typeOf.object("boundingSphere",e);const o=e.center,i=e.radius;if(l(t)||(t=be.default),l(n)||(n=new Se),h.equals(o,h.ZERO))return Se.clone(Se.MAX_VALUE,n),n;const r=Pe.eastNorthUpToFixedFrame(o,t,by),a=U.multiplyByPointAsVector(r,h.UNIT_X,Ey);h.normalize(a,a);const s=U.multiplyByPointAsVector(r,h.UNIT_Y,wy);h.normalize(s,s),h.multiplyByScalar(s,i,s),h.multiplyByScalar(a,i,a);const c=h.negate(s,Ty),f=h.negate(a,vy),d=$c;let u=d[0];return h.add(o,s,u),u=d[1],h.add(o,f,u),u=d[2],h.add(o,c,u),u=d[3],h.add(o,a,u),d[4]=o,Se.fromCartesianArray(d,t,n)};Se.clone=function(e,t){if(l(e))return l(t)?(t.west=e.west,t.south=e.south,t.east=e.east,t.north=e.north,t):new Se(e.west,e.south,e.east,e.north)};Se.equalsEpsilon=function(e,t,n){return n=n??0,e===t||l(e)&&l(t)&&Math.abs(e.west-t.west)<=n&&Math.abs(e.south-t.south)<=n&&Math.abs(e.east-t.east)<=n&&Math.abs(e.north-t.north)<=n};Se.prototype.clone=function(e){return Se.clone(this,e)};Se.prototype.equals=function(e){return Se.equals(this,e)};Se.equals=function(e,t){return e===t||l(e)&&l(t)&&e.west===t.west&&e.south===t.south&&e.east===t.east&&e.north===t.north};Se.prototype.equalsEpsilon=function(e,t){return Se.equalsEpsilon(this,e,t)};Se._validate=function(e){p.typeOf.object("rectangle",e);const t=e.north;p.typeOf.number.greaterThanOrEquals("north",t,-T.PI_OVER_TWO),p.typeOf.number.lessThanOrEquals("north",t,T.PI_OVER_TWO);const n=e.south;p.typeOf.number.greaterThanOrEquals("south",n,-T.PI_OVER_TWO),p.typeOf.number.lessThanOrEquals("south",n,T.PI_OVER_TWO);const o=e.west;p.typeOf.number.greaterThanOrEquals("west",o,-Math.PI),p.typeOf.number.lessThanOrEquals("west",o,Math.PI);const i=e.east;p.typeOf.number.greaterThanOrEquals("east",i,-Math.PI),p.typeOf.number.lessThanOrEquals("east",i,Math.PI)};Se.southwest=function(e,t){return p.typeOf.object("rectangle",e),l(t)?(t.longitude=e.west,t.latitude=e.south,t.height=0,t):new le(e.west,e.south)};Se.northwest=function(e,t){return p.typeOf.object("rectangle",e),l(t)?(t.longitude=e.west,t.latitude=e.north,t.height=0,t):new le(e.west,e.north)};Se.northeast=function(e,t){return p.typeOf.object("rectangle",e),l(t)?(t.longitude=e.east,t.latitude=e.north,t.height=0,t):new le(e.east,e.north)};Se.southeast=function(e,t){return p.typeOf.object("rectangle",e),l(t)?(t.longitude=e.east,t.latitude=e.south,t.height=0,t):new le(e.east,e.south)};Se.center=function(e,t){p.typeOf.object("rectangle",e);let n=e.east;const o=e.west;n<o&&(n+=T.TWO_PI);const i=T.negativePiToPi((o+n)*.5),r=(e.south+e.north)*.5;return l(t)?(t.longitude=i,t.latitude=r,t.height=0,t):new le(i,r)};Se.intersection=function(e,t,n){p.typeOf.object("rectangle",e),p.typeOf.object("otherRectangle",t);let o=e.east,i=e.west,r=t.east,a=t.west;o<i&&r>0?o+=T.TWO_PI:r<a&&o>0&&(r+=T.TWO_PI),o<i&&a<0?a+=T.TWO_PI:r<a&&i<0&&(i+=T.TWO_PI);const s=T.negativePiToPi(Math.max(i,a)),c=T.negativePiToPi(Math.min(o,r));if((e.west<e.east||t.west<t.east)&&c<=s)return;const f=Math.max(e.south,t.south),d=Math.min(e.north,t.north);if(!(f>=d))return l(n)?(n.west=s,n.south=f,n.east=c,n.north=d,n):new Se(s,f,c,d)};Se.simpleIntersection=function(e,t,n){p.typeOf.object("rectangle",e),p.typeOf.object("otherRectangle",t);const o=Math.max(e.west,t.west),i=Math.max(e.south,t.south),r=Math.min(e.east,t.east),a=Math.min(e.north,t.north);if(!(i>=a||o>=r))return l(n)?(n.west=o,n.south=i,n.east=r,n.north=a,n):new Se(o,i,r,a)};Se.union=function(e,t,n){p.typeOf.object("rectangle",e),p.typeOf.object("otherRectangle",t),l(n)||(n=new Se);let o=e.east,i=e.west,r=t.east,a=t.west;o<i&&r>0?o+=T.TWO_PI:r<a&&o>0&&(r+=T.TWO_PI),o<i&&a<0?a+=T.TWO_PI:r<a&&i<0&&(i+=T.TWO_PI);const s=T.negativePiToPi(Math.min(i,a)),c=T.negativePiToPi(Math.max(o,r));return n.west=s,n.south=Math.min(e.south,t.south),n.east=c,n.north=Math.max(e.north,t.north),n};Se.expand=function(e,t,n){return p.typeOf.object("rectangle",e),p.typeOf.object("cartographic",t),l(n)||(n=new Se),n.west=Math.min(e.west,t.longitude),n.south=Math.min(e.south,t.latitude),n.east=Math.max(e.east,t.longitude),n.north=Math.max(e.north,t.latitude),n};Se.contains=function(e,t){p.typeOf.object("rectangle",e),p.typeOf.object("cartographic",t);let n=t.longitude;const o=t.latitude,i=e.west;let r=e.east;return r<i&&(r+=T.TWO_PI,n<0&&(n+=T.TWO_PI)),(n>i||T.equalsEpsilon(n,i,T.EPSILON14))&&(n<r||T.equalsEpsilon(n,r,T.EPSILON14))&&o>=e.south&&o<=e.north};const Sy=new le;Se.subsample=function(e,t,n,o){p.typeOf.object("rectangle",e),t=t??be.default,n=n??0,l(o)||(o=[]);let i=0;const r=e.north,a=e.south,s=e.east,c=e.west,f=Sy;f.height=n,f.longitude=c,f.latitude=r,o[i]=t.cartographicToCartesian(f,o[i]),i++,f.longitude=s,o[i]=t.cartographicToCartesian(f,o[i]),i++,f.latitude=a,o[i]=t.cartographicToCartesian(f,o[i]),i++,f.longitude=c,o[i]=t.cartographicToCartesian(f,o[i]),i++,r<0?f.latitude=r:a>0?f.latitude=a:f.latitude=0;for(let d=1;d<8;++d)f.longitude=-Math.PI+d*T.PI_OVER_TWO,Se.contains(e,f)&&(o[i]=t.cartographicToCartesian(f,o[i]),i++);return f.latitude===0&&(f.longitude=c,o[i]=t.cartographicToCartesian(f,o[i]),i++,f.longitude=s,o[i]=t.cartographicToCartesian(f,o[i]),i++),o.length=i,o};Se.subsection=function(e,t,n,o,i,r){if(p.typeOf.object("rectangle",e),p.typeOf.number.greaterThanOrEquals("westLerp",t,0),p.typeOf.number.lessThanOrEquals("westLerp",t,1),p.typeOf.number.greaterThanOrEquals("southLerp",n,0),p.typeOf.number.lessThanOrEquals("southLerp",n,1),p.typeOf.number.greaterThanOrEquals("eastLerp",o,0),p.typeOf.number.lessThanOrEquals("eastLerp",o,1),p.typeOf.number.greaterThanOrEquals("northLerp",i,0),p.typeOf.number.lessThanOrEquals("northLerp",i,1),p.typeOf.number.lessThanOrEquals("westLerp",t,o),p.typeOf.number.lessThanOrEquals("southLerp",n,i),l(r)||(r=new Se),e.west<=e.east){const s=e.east-e.west;r.west=e.west+t*s,r.east=e.west+o*s}else{const s=T.TWO_PI+e.east-e.west;r.west=T.negativePiToPi(e.west+t*s),r.east=T.negativePiToPi(e.west+o*s)}const a=e.north-e.south;return r.south=e.south+n*a,r.north=e.south+i*a,t===1&&(r.west=e.east),o===1&&(r.east=e.east),n===1&&(r.south=e.north),i===1&&(r.north=e.north),r};Se.MAX_VALUE=Object.freeze(new Se(-Math.PI,-T.PI_OVER_TWO,Math.PI,T.PI_OVER_TWO));function ie(e,t){this.center=h.clone(e??h.ZERO),this.radius=t??0}const Rf=new h,Pf=new h,If=new h,zf=new h,Nf=new h,Df=new h,Lf=new h,Mt=new h,Ff=new h,Bf=new h,Uf=new h,Gf=new h,Ay=4/3*T.PI;ie.fromPoints=function(e,t){if(l(t)||(t=new ie),!l(e)||e.length===0)return t.center=h.clone(h.ZERO,t.center),t.radius=0,t;const n=h.clone(e[0],Lf),o=h.clone(n,Rf),i=h.clone(n,Pf),r=h.clone(n,If),a=h.clone(n,zf),s=h.clone(n,Nf),c=h.clone(n,Df),f=e.length;let d;for(d=1;d<f;d++){h.clone(e[d],n);const z=n.x,G=n.y,q=n.z;z<o.x&&h.clone(n,o),z>a.x&&h.clone(n,a),G<i.y&&h.clone(n,i),G>s.y&&h.clone(n,s),q<r.z&&h.clone(n,r),q>c.z&&h.clone(n,c)}const u=h.magnitudeSquared(h.subtract(a,o,Mt)),m=h.magnitudeSquared(h.subtract(s,i,Mt)),_=h.magnitudeSquared(h.subtract(c,r,Mt));let g=o,y=a,E=u;m>E&&(E=m,g=i,y=s),_>E&&(E=_,g=r,y=c);const A=Ff;A.x=(g.x+y.x)*.5,A.y=(g.y+y.y)*.5,A.z=(g.z+y.z)*.5;let S=h.magnitudeSquared(h.subtract(y,A,Mt)),O=Math.sqrt(S);const M=Bf;M.x=o.x,M.y=i.y,M.z=r.z;const R=Uf;R.x=a.x,R.y=s.y,R.z=c.z;const N=h.midpoint(M,R,Gf);let F=0;for(d=0;d<f;d++){h.clone(e[d],n);const z=h.magnitude(h.subtract(n,N,Mt));z>F&&(F=z);const G=h.magnitudeSquared(h.subtract(n,A,Mt));if(G>S){const q=Math.sqrt(G);O=(O+q)*.5,S=O*O;const k=q-O;A.x=(O*A.x+k*n.x)/q,A.y=(O*A.y+k*n.y)/q,A.z=(O*A.z+k*n.z)/q}}return O<F?(h.clone(A,t.center),t.radius=O):(h.clone(N,t.center),t.radius=F),t};const rl=new bo,xy=new h,Oy=new h,tc=new le,nc=new le;ie.fromRectangle2D=function(e,t,n){return ie.fromRectangleWithHeights2D(e,t,0,0,n)};ie.fromRectangleWithHeights2D=function(e,t,n,o,i){if(l(i)||(i=new ie),!l(e))return i.center=h.clone(h.ZERO,i.center),i.radius=0,i;rl._ellipsoid=be.default,t=t??rl,Se.southwest(e,tc),tc.height=n,Se.northeast(e,nc),nc.height=o;const r=t.project(tc,xy),a=t.project(nc,Oy),s=a.x-r.x,c=a.y-r.y,f=a.z-r.z;i.radius=Math.sqrt(s*s+c*c+f*f)*.5;const d=i.center;return d.x=r.x+s*.5,d.y=r.y+c*.5,d.z=r.z+f*.5,i};const Cy=[];ie.fromRectangle3D=function(e,t,n,o){if(t=t??be.default,n=n??0,l(o)||(o=new ie),!l(e))return o.center=h.clone(h.ZERO,o.center),o.radius=0,o;const i=Se.subsample(e,t,n,Cy);return ie.fromPoints(i,o)};ie.fromVertices=function(e,t,n,o){if(l(o)||(o=new ie),!l(e)||e.length===0)return o.center=h.clone(h.ZERO,o.center),o.radius=0,o;t=t??h.ZERO,n=n??3,p.typeOf.number.greaterThanOrEquals("stride",n,3);const i=Lf;i.x=e[0]+t.x,i.y=e[1]+t.y,i.z=e[2]+t.z;const r=h.clone(i,Rf),a=h.clone(i,Pf),s=h.clone(i,If),c=h.clone(i,zf),f=h.clone(i,Nf),d=h.clone(i,Df),u=e.length;let m;for(m=0;m<u;m+=n){const q=e[m]+t.x,k=e[m+1]+t.y,X=e[m+2]+t.z;i.x=q,i.y=k,i.z=X,q<r.x&&h.clone(i,r),q>c.x&&h.clone(i,c),k<a.y&&h.clone(i,a),k>f.y&&h.clone(i,f),X<s.z&&h.clone(i,s),X>d.z&&h.clone(i,d)}const _=h.magnitudeSquared(h.subtract(c,r,Mt)),g=h.magnitudeSquared(h.subtract(f,a,Mt)),y=h.magnitudeSquared(h.subtract(d,s,Mt));let E=r,A=c,S=_;g>S&&(S=g,E=a,A=f),y>S&&(S=y,E=s,A=d);const O=Ff;O.x=(E.x+A.x)*.5,O.y=(E.y+A.y)*.5,O.z=(E.z+A.z)*.5;let M=h.magnitudeSquared(h.subtract(A,O,Mt)),R=Math.sqrt(M);const N=Bf;N.x=r.x,N.y=a.y,N.z=s.z;const F=Uf;F.x=c.x,F.y=f.y,F.z=d.z;const z=h.midpoint(N,F,Gf);let G=0;for(m=0;m<u;m+=n){i.x=e[m]+t.x,i.y=e[m+1]+t.y,i.z=e[m+2]+t.z;const q=h.magnitude(h.subtract(i,z,Mt));q>G&&(G=q);const k=h.magnitudeSquared(h.subtract(i,O,Mt));if(k>M){const X=Math.sqrt(k);R=(R+X)*.5,M=R*R;const b=X-R;O.x=(R*O.x+b*i.x)/X,O.y=(R*O.y+b*i.y)/X,O.z=(R*O.z+b*i.z)/X}}return R<G?(h.clone(O,o.center),o.radius=R):(h.clone(z,o.center),o.radius=G),o};ie.fromEncodedCartesianVertices=function(e,t,n){if(l(n)||(n=new ie),!l(e)||!l(t)||e.length!==t.length||e.length===0)return n.center=h.clone(h.ZERO,n.center),n.radius=0,n;const o=Lf;o.x=e[0]+t[0],o.y=e[1]+t[1],o.z=e[2]+t[2];const i=h.clone(o,Rf),r=h.clone(o,Pf),a=h.clone(o,If),s=h.clone(o,zf),c=h.clone(o,Nf),f=h.clone(o,Df),d=e.length;let u;for(u=0;u<d;u+=3){const G=e[u]+t[u],q=e[u+1]+t[u+1],k=e[u+2]+t[u+2];o.x=G,o.y=q,o.z=k,G<i.x&&h.clone(o,i),G>s.x&&h.clone(o,s),q<r.y&&h.clone(o,r),q>c.y&&h.clone(o,c),k<a.z&&h.clone(o,a),k>f.z&&h.clone(o,f)}const m=h.magnitudeSquared(h.subtract(s,i,Mt)),_=h.magnitudeSquared(h.subtract(c,r,Mt)),g=h.magnitudeSquared(h.subtract(f,a,Mt));let y=i,E=s,A=m;_>A&&(A=_,y=r,E=c),g>A&&(A=g,y=a,E=f);const S=Ff;S.x=(y.x+E.x)*.5,S.y=(y.y+E.y)*.5,S.z=(y.z+E.z)*.5;let O=h.magnitudeSquared(h.subtract(E,S,Mt)),M=Math.sqrt(O);const R=Bf;R.x=i.x,R.y=r.y,R.z=a.z;const N=Uf;N.x=s.x,N.y=c.y,N.z=f.z;const F=h.midpoint(R,N,Gf);let z=0;for(u=0;u<d;u+=3){o.x=e[u]+t[u],o.y=e[u+1]+t[u+1],o.z=e[u+2]+t[u+2];const G=h.magnitude(h.subtract(o,F,Mt));G>z&&(z=G);const q=h.magnitudeSquared(h.subtract(o,S,Mt));if(q>O){const k=Math.sqrt(q);M=(M+k)*.5,O=M*M;const X=k-M;S.x=(M*S.x+X*o.x)/k,S.y=(M*S.y+X*o.y)/k,S.z=(M*S.z+X*o.z)/k}}return M<z?(h.clone(S,n.center),n.radius=M):(h.clone(F,n.center),n.radius=z),n};ie.fromCornerPoints=function(e,t,n){p.typeOf.object("corner",e),p.typeOf.object("oppositeCorner",t),l(n)||(n=new ie);const o=h.midpoint(e,t,n.center);return n.radius=h.distance(o,t),n};ie.fromEllipsoid=function(e,t){return p.typeOf.object("ellipsoid",e),l(t)||(t=new ie),h.clone(h.ZERO,t.center),t.radius=e.maximumRadius,t};const My=new h;ie.fromBoundingSpheres=function(e,t){if(l(t)||(t=new ie),!l(e)||e.length===0)return t.center=h.clone(h.ZERO,t.center),t.radius=0,t;const n=e.length;if(n===1)return ie.clone(e[0],t);if(n===2)return ie.union(e[0],e[1],t);const o=[];let i;for(i=0;i<n;i++)o.push(e[i].center);t=ie.fromPoints(o,t);const r=t.center;let a=t.radius;for(i=0;i<n;i++){const s=e[i];a=Math.max(a,h.distance(r,s.center,My)+s.radius)}return t.radius=a,t};const Ry=new h,Py=new h,Iy=new h;ie.fromOrientedBoundingBox=function(e,t){p.defined("orientedBoundingBox",e),l(t)||(t=new ie);const n=e.halfAxes,o=B.getColumn(n,0,Ry),i=B.getColumn(n,1,Py),r=B.getColumn(n,2,Iy);return h.add(o,i,o),h.add(o,r,o),t.center=h.clone(e.center,t.center),t.radius=h.magnitude(o),t};const zy=new h,Ny=new h;ie.fromTransformation=function(e,t){p.typeOf.object("transformation",e),l(t)||(t=new ie);const n=U.getTranslation(e,zy),o=U.getScale(e,Ny),i=.5*h.magnitude(o);return t.center=h.clone(n,t.center),t.radius=i,t};ie.clone=function(e,t){if(l(e))return l(t)?(t.center=h.clone(e.center,t.center),t.radius=e.radius,t):new ie(e.center,e.radius)};ie.packedLength=4;ie.pack=function(e,t,n){p.typeOf.object("value",e),p.defined("array",t),n=n??0;const o=e.center;return t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n]=e.radius,t};ie.unpack=function(e,t,n){p.defined("array",e),t=t??0,l(n)||(n=new ie);const o=n.center;return o.x=e[t++],o.y=e[t++],o.z=e[t++],n.radius=e[t],n};const Dy=new h,Ly=new h;ie.union=function(e,t,n){p.typeOf.object("left",e),p.typeOf.object("right",t),l(n)||(n=new ie);const o=e.center,i=e.radius,r=t.center,a=t.radius,s=h.subtract(r,o,Dy),c=h.magnitude(s);if(i>=c+a)return e.clone(n),n;if(a>=c+i)return t.clone(n),n;const f=(i+c+a)*.5,d=h.multiplyByScalar(s,(-i+f)/c,Ly);return h.add(d,o,d),h.clone(d,n.center),n.radius=f,n};const Fy=new h;ie.expand=function(e,t,n){p.typeOf.object("sphere",e),p.typeOf.object("point",t),n=ie.clone(e,n);const o=h.magnitude(h.subtract(t,n.center,Fy));return o>n.radius&&(n.radius=o),n};ie.intersectPlane=function(e,t){p.typeOf.object("sphere",e),p.typeOf.object("plane",t);const n=e.center,o=e.radius,i=t.normal,r=h.dot(i,n)+t.distance;return r<-o?bt.OUTSIDE:r<o?bt.INTERSECTING:bt.INSIDE};ie.transform=function(e,t,n){return p.typeOf.object("sphere",e),p.typeOf.object("transform",t),l(n)||(n=new ie),n.center=U.multiplyByPoint(t,e.center,n.center),n.radius=U.getMaximumScale(t)*e.radius,n};const By=new h;ie.distanceSquaredTo=function(e,t){p.typeOf.object("sphere",e),p.typeOf.object("cartesian",t);const n=h.subtract(e.center,t,By),o=h.magnitude(n)-e.radius;return o<=0?0:o*o};ie.transformWithoutScale=function(e,t,n){return p.typeOf.object("sphere",e),p.typeOf.object("transform",t),l(n)||(n=new ie),n.center=U.multiplyByPoint(t,e.center,n.center),n.radius=e.radius,n};const Uy=new h;ie.computePlaneDistances=function(e,t,n,o){p.typeOf.object("sphere",e),p.typeOf.object("position",t),p.typeOf.object("direction",n),l(o)||(o=new Zo);const i=h.subtract(e.center,t,Uy),r=h.dot(n,i);return o.start=r-e.radius,o.stop=r+e.radius,o};const al=new h,Gy=new h,qy=new h,ky=new h,jy=new h,Vy=new le,C0=new Array(8);for(let e=0;e<8;++e)C0[e]=new h;const sl=new bo;ie.projectTo2D=function(e,t,n){p.typeOf.object("sphere",e),sl._ellipsoid=be.default,t=t??sl;const o=t.ellipsoid;let i=e.center;const r=e.radius;let a;h.equals(i,h.ZERO)?a=h.clone(h.UNIT_X,al):a=o.geodeticSurfaceNormal(i,al);const s=h.cross(h.UNIT_Z,a,Gy);h.normalize(s,s);const c=h.cross(a,s,qy);h.normalize(c,c),h.multiplyByScalar(a,r,a),h.multiplyByScalar(c,r,c),h.multiplyByScalar(s,r,s);const f=h.negate(c,jy),d=h.negate(s,ky),u=C0;let m=u[0];h.add(a,c,m),h.add(m,s,m),m=u[1],h.add(a,c,m),h.add(m,d,m),m=u[2],h.add(a,f,m),h.add(m,d,m),m=u[3],h.add(a,f,m),h.add(m,s,m),h.negate(a,a),m=u[4],h.add(a,c,m),h.add(m,s,m),m=u[5],h.add(a,c,m),h.add(m,d,m),m=u[6],h.add(a,f,m),h.add(m,d,m),m=u[7],h.add(a,f,m),h.add(m,s,m);const _=u.length;for(let A=0;A<_;++A){const S=u[A];h.add(i,S,S);const O=o.cartesianToCartographic(S,Vy);t.project(O,S)}n=ie.fromPoints(u,n),i=n.center;const g=i.x,y=i.y,E=i.z;return i.x=E,i.y=g,i.z=y,n};ie.isOccluded=function(e,t){return p.typeOf.object("sphere",e),p.typeOf.object("occluder",t),!t.isBoundingSphereVisible(e)};ie.equals=function(e,t){return e===t||l(e)&&l(t)&&h.equals(e.center,t.center)&&e.radius===t.radius};ie.prototype.intersectPlane=function(e){return ie.intersectPlane(this,e)};ie.prototype.distanceSquaredTo=function(e){return ie.distanceSquaredTo(this,e)};ie.prototype.computePlaneDistances=function(e,t,n){return ie.computePlaneDistances(this,e,t,n)};ie.prototype.isOccluded=function(e){return ie.isOccluded(this,e)};ie.prototype.equals=function(e){return ie.equals(this,e)};ie.prototype.clone=function(e){return ie.clone(this,e)};ie.prototype.volume=function(){const e=this.radius;return Ay*e*e*e};function Xt(e,t,n){this.minimum=h.clone(e??h.ZERO),this.maximum=h.clone(t??h.ZERO),l(n)?n=h.clone(n):n=h.midpoint(this.minimum,this.maximum,new h),this.center=n}Xt.fromCorners=function(e,t,n){return p.defined("minimum",e),p.defined("maximum",t),l(n)||(n=new Xt),n.minimum=h.clone(e,n.minimum),n.maximum=h.clone(t,n.maximum),n.center=h.midpoint(e,t,n.center),n};Xt.fromPoints=function(e,t){if(l(t)||(t=new Xt),!l(e)||e.length===0)return t.minimum=h.clone(h.ZERO,t.minimum),t.maximum=h.clone(h.ZERO,t.maximum),t.center=h.clone(h.ZERO,t.center),t;let n=e[0].x,o=e[0].y,i=e[0].z,r=e[0].x,a=e[0].y,s=e[0].z;const c=e.length;for(let u=1;u<c;u++){const m=e[u],_=m.x,g=m.y,y=m.z;n=Math.min(_,n),r=Math.max(_,r),o=Math.min(g,o),a=Math.max(g,a),i=Math.min(y,i),s=Math.max(y,s)}const f=t.minimum;f.x=n,f.y=o,f.z=i;const d=t.maximum;return d.x=r,d.y=a,d.z=s,t.center=h.midpoint(f,d,t.center),t};Xt.clone=function(e,t){if(l(e))return l(t)?(t.minimum=h.clone(e.minimum,t.minimum),t.maximum=h.clone(e.maximum,t.maximum),t.center=h.clone(e.center,t.center),t):new Xt(e.minimum,e.maximum,e.center)};Xt.equals=function(e,t){return e===t||l(e)&&l(t)&&h.equals(e.center,t.center)&&h.equals(e.minimum,t.minimum)&&h.equals(e.maximum,t.maximum)};let Ea=new h;Xt.intersectPlane=function(e,t){p.defined("box",e),p.defined("plane",t),Ea=h.subtract(e.maximum,e.minimum,Ea);const n=h.multiplyByScalar(Ea,.5,Ea),o=t.normal,i=n.x*Math.abs(o.x)+n.y*Math.abs(o.y)+n.z*Math.abs(o.z),r=h.dot(e.center,o)+t.distance;return r-i>0?bt.INSIDE:r+i<0?bt.OUTSIDE:bt.INTERSECTING};Xt.prototype.clone=function(e){return Xt.clone(this,e)};Xt.prototype.intersectPlane=function(e){return Xt.intersectPlane(this,e)};Xt.prototype.equals=function(e){return Xt.equals(this,e)};const Dn={};Dn.computeDiscriminant=function(e,t,n){if(typeof e!="number")throw new w("a is a required number.");if(typeof t!="number")throw new w("b is a required number.");if(typeof n!="number")throw new w("c is a required number.");return t*t-4*e*n};function cl(e,t,n){const o=e+t;return T.sign(e)!==T.sign(t)&&Math.abs(o/Math.max(Math.abs(e),Math.abs(t)))<n?0:o}Dn.computeRealRoots=function(e,t,n){if(typeof e!="number")throw new w("a is a required number.");if(typeof t!="number")throw new w("b is a required number.");if(typeof n!="number")throw new w("c is a required number.");let o;if(e===0)return t===0?[]:[-n/t];if(t===0){if(n===0)return[0,0];const c=Math.abs(n),f=Math.abs(e);if(c<f&&c/f<T.EPSILON14)return[0,0];if(c>f&&f/c<T.EPSILON14)return[];if(o=-n/e,o<0)return[];const d=Math.sqrt(o);return[-d,d]}else if(n===0)return o=-t/e,o<0?[o,0]:[0,o];const i=t*t,r=4*e*n,a=cl(i,-r,T.EPSILON14);if(a<0)return[];const s=-.5*cl(t,T.sign(t)*Math.sqrt(a),T.EPSILON14);return t>0?[s/e,n/s]:[n/s,s/e]};const Hr={};Hr.computeDiscriminant=function(e,t,n,o){if(typeof e!="number")throw new w("a is a required number.");if(typeof t!="number")throw new w("b is a required number.");if(typeof n!="number")throw new w("c is a required number.");if(typeof o!="number")throw new w("d is a required number.");const i=e*e,r=t*t,a=n*n,s=o*o;return 18*e*t*n*o+r*a-27*i*s-4*(e*a*n+r*t*o)};function oc(e,t,n,o){const i=e,r=t/3,a=n/3,s=o,c=i*a,f=r*s,d=r*r,u=a*a,m=i*a-d,_=i*s-r*a,g=r*s-u,y=4*m*g-_*_;let E,A;if(y<0){let te,he,we;d*f>=c*u?(te=i,he=m,we=-2*r*m+i*_):(te=s,he=g,we=-s*_+2*a*g);const ve=-(we<0?-1:1)*Math.abs(te)*Math.sqrt(-y);A=-we+ve;const Re=A/2,$e=Re<0?-Math.pow(-Re,1/3):Math.pow(Re,1/3),ht=A===ve?-$e:-he/$e;return E=he<=0?$e+ht:-we/($e*$e+ht*ht+he),d*f>=c*u?[(E-r)/i]:[-s/(E+a)]}const S=m,O=-2*r*m+i*_,M=g,R=-s*_+2*a*g,N=Math.sqrt(y),F=Math.sqrt(3)/2;let z=Math.abs(Math.atan2(i*N,-O)/3);E=2*Math.sqrt(-S);let G=Math.cos(z);A=E*G;let q=E*(-G/2-F*Math.sin(z));const k=A+q>2*r?A-r:q-r,X=i,b=k/X;z=Math.abs(Math.atan2(s*N,-R)/3),E=2*Math.sqrt(-M),G=Math.cos(z),A=E*G,q=E*(-G/2-F*Math.sin(z));const v=-s,C=A+q<2*a?A+a:q+a,D=v/C,H=X*C,Z=-k*C-X*v,J=k*v,K=(a*Z-r*J)/(-r*Z+a*H);return b<=K?b<=D?K<=D?[b,K,D]:[b,D,K]:[D,b,K]:b<=D?[K,b,D]:K<=D?[K,D,b]:[D,K,b]}Hr.computeRealRoots=function(e,t,n,o){if(typeof e!="number")throw new w("a is a required number.");if(typeof t!="number")throw new w("b is a required number.");if(typeof n!="number")throw new w("c is a required number.");if(typeof o!="number")throw new w("d is a required number.");let i,r;if(e===0)return Dn.computeRealRoots(t,n,o);if(t===0){if(n===0){if(o===0)return[0,0,0];r=-o/e;const a=r<0?-Math.pow(-r,1/3):Math.pow(r,1/3);return[a,a,a]}else if(o===0)return i=Dn.computeRealRoots(e,0,n),i.Length===0?[0]:[i[0],0,i[1]];return oc(e,0,n,o)}else{if(n===0)return o===0?(r=-t/e,r<0?[r,0,0]:[0,0,r]):oc(e,t,0,o);if(o===0)return i=Dn.computeRealRoots(e,t,n),i.length===0?[0]:i[1]<=0?[i[0],i[1],0]:i[0]>=0?[0,i[0],i[1]]:[i[0],0,i[1]]}return oc(e,t,n,o)};const qf={};qf.computeDiscriminant=function(e,t,n,o,i){if(typeof e!="number")throw new w("a is a required number.");if(typeof t!="number")throw new w("b is a required number.");if(typeof n!="number")throw new w("c is a required number.");if(typeof o!="number")throw new w("d is a required number.");if(typeof i!="number")throw new w("e is a required number.");const r=e*e,a=r*e,s=t*t,c=s*t,f=n*n,d=f*n,u=o*o,m=u*o,_=i*i,g=_*i;return s*f*u-4*c*m-4*e*d*u+18*e*t*n*m-27*r*u*u+256*a*g+i*(18*c*n*o-4*s*d+16*e*f*f-80*e*t*f*o-6*e*s*u+144*r*n*u)+_*(144*e*s*n-27*s*s-128*r*f-192*r*t*o)};function Cn(e,t,n,o){const i=e*e,r=t-3*i/8,a=n-t*e/2+i*e/8,s=o-n*e/4+t*i/16-3*i*i/256,c=Hr.computeRealRoots(1,2*r,r*r-4*s,-a*a);if(c.length>0){const f=-e/4,d=c[c.length-1];if(Math.abs(d)<T.EPSILON14){const u=Dn.computeRealRoots(1,r,s);if(u.length===2){const m=u[0],_=u[1];let g;if(m>=0&&_>=0){const y=Math.sqrt(m),E=Math.sqrt(_);return[f-E,f-y,f+y,f+E]}else{if(m>=0&&_<0)return g=Math.sqrt(m),[f-g,f+g];if(m<0&&_>=0)return g=Math.sqrt(_),[f-g,f+g]}}return[]}else if(d>0){const u=Math.sqrt(d),m=(r+d-a/u)/2,_=(r+d+a/u)/2,g=Dn.computeRealRoots(1,u,m),y=Dn.computeRealRoots(1,-u,_);return g.length!==0?(g[0]+=f,g[1]+=f,y.length!==0?(y[0]+=f,y[1]+=f,g[1]<=y[0]?[g[0],g[1],y[0],y[1]]:y[1]<=g[0]?[y[0],y[1],g[0],g[1]]:g[0]>=y[0]&&g[1]<=y[1]?[y[0],g[0],g[1],y[1]]:y[0]>=g[0]&&y[1]<=g[1]?[g[0],y[0],y[1],g[1]]:g[0]>y[0]&&g[0]<y[1]?[y[0],g[0],y[1],g[1]]:[g[0],y[0],g[1],y[1]]):g):y.length!==0?(y[0]+=f,y[1]+=f,y):[]}}return[]}function nr(e,t,n,o){const i=n*n,r=t*t,a=e*e,s=-2*t,c=n*e+r-4*o,f=a*o-n*t*e+i,d=Hr.computeRealRoots(1,s,c,f);if(d.length>0){const u=d[0],m=t-u,_=m*m,g=e/2,y=m/2,E=_-4*o,A=_+4*Math.abs(o),S=a-4*u,O=a+4*Math.abs(u);let M,R;if(u<0||E*O<S*A){const X=Math.sqrt(S);M=X/2,R=X===0?0:(e*y-n)/X}else{const X=Math.sqrt(E);M=X===0?0:(e*y-n)/X,R=X/2}let N,F;g===0&&M===0?(N=0,F=0):T.sign(g)===T.sign(M)?(N=g+M,F=u/N):(F=g-M,N=u/F);let z,G;y===0&&R===0?(z=0,G=0):T.sign(y)===T.sign(R)?(z=y+R,G=o/z):(G=y-R,z=o/G);const q=Dn.computeRealRoots(1,N,z),k=Dn.computeRealRoots(1,F,G);if(q.length!==0)return k.length!==0?q[1]<=k[0]?[q[0],q[1],k[0],k[1]]:k[1]<=q[0]?[k[0],k[1],q[0],q[1]]:q[0]>=k[0]&&q[1]<=k[1]?[k[0],q[0],q[1],k[1]]:k[0]>=q[0]&&k[1]<=q[1]?[q[0],k[0],k[1],q[1]]:q[0]>k[0]&&q[0]<k[1]?[k[0],q[0],k[1],q[1]]:[q[0],k[0],q[1],k[1]]:q;if(k.length!==0)return k}return[]}qf.computeRealRoots=function(e,t,n,o,i){if(typeof e!="number")throw new w("a is a required number.");if(typeof t!="number")throw new w("b is a required number.");if(typeof n!="number")throw new w("c is a required number.");if(typeof o!="number")throw new w("d is a required number.");if(typeof i!="number")throw new w("e is a required number.");if(Math.abs(e)<T.EPSILON15)return Hr.computeRealRoots(t,n,o,i);const r=t/e,a=n/e,s=o/e,c=i/e;let f=r<0?1:0;switch(f+=a<0?f+1:f,f+=s<0?f+1:f,f+=c<0?f+1:f,f){case 0:return Cn(r,a,s,c);case 1:return nr(r,a,s,c);case 2:return nr(r,a,s,c);case 3:return Cn(r,a,s,c);case 4:return Cn(r,a,s,c);case 5:return nr(r,a,s,c);case 6:return Cn(r,a,s,c);case 7:return Cn(r,a,s,c);case 8:return nr(r,a,s,c);case 9:return Cn(r,a,s,c);case 10:return Cn(r,a,s,c);case 11:return nr(r,a,s,c);case 12:return Cn(r,a,s,c);case 13:return Cn(r,a,s,c);case 14:return Cn(r,a,s,c);case 15:return Cn(r,a,s,c);default:return}};function Fi(e,t){t=h.clone(t??h.ZERO),h.equals(t,h.ZERO)||h.normalize(t,t),this.origin=h.clone(e??h.ZERO),this.direction=t}Fi.clone=function(e,t){if(l(e))return l(t)?(t.origin=h.clone(e.origin),t.direction=h.clone(e.direction),t):new Fi(e.origin,e.direction)};Fi.getPoint=function(e,t,n){return p.typeOf.object("ray",e),p.typeOf.number("t",t),l(n)||(n=new h),n=h.multiplyByScalar(e.direction,t,n),h.add(e.origin,n,n)};const ke={};ke.rayPlane=function(e,t,n){if(!l(e))throw new w("ray is required.");if(!l(t))throw new w("plane is required.");l(n)||(n=new h);const o=e.origin,i=e.direction,r=t.normal,a=h.dot(r,i);if(Math.abs(a)<T.EPSILON15)return;const s=(-t.distance-h.dot(r,o))/a;if(!(s<0))return n=h.multiplyByScalar(i,s,n),h.add(o,n,n)};const Hy=new h,Wy=new h,M0=new h,fl=new h,hl=new h;ke.rayTriangleParametric=function(e,t,n,o,i){if(!l(e))throw new w("ray is required.");if(!l(t))throw new w("p0 is required.");if(!l(n))throw new w("p1 is required.");if(!l(o))throw new w("p2 is required.");i=i??!1;const r=e.origin,a=e.direction,s=h.subtract(n,t,Hy),c=h.subtract(o,t,Wy),f=h.cross(a,c,M0),d=h.dot(s,f);let u,m,_,g,y;if(i){if(d<T.EPSILON6||(u=h.subtract(r,t,fl),_=h.dot(u,f),_<0||_>d)||(m=h.cross(u,s,hl),g=h.dot(a,m),g<0||_+g>d))return;y=h.dot(c,m)/d}else{if(Math.abs(d)<T.EPSILON6)return;const E=1/d;if(u=h.subtract(r,t,fl),_=h.dot(u,f)*E,_<0||_>1||(m=h.cross(u,s,hl),g=h.dot(a,m)*E,g<0||_+g>1))return;y=h.dot(c,m)*E}return y};ke.rayTriangle=function(e,t,n,o,i,r){const a=ke.rayTriangleParametric(e,t,n,o,i);if(!(!l(a)||a<0))return l(r)||(r=new h),h.multiplyByScalar(e.direction,a,r),h.add(e.origin,r,r)};const Yy=new Fi;ke.lineSegmentTriangle=function(e,t,n,o,i,r,a){if(!l(e))throw new w("v0 is required.");if(!l(t))throw new w("v1 is required.");if(!l(n))throw new w("p0 is required.");if(!l(o))throw new w("p1 is required.");if(!l(i))throw new w("p2 is required.");const s=Yy;h.clone(e,s.origin),h.subtract(t,e,s.direction),h.normalize(s.direction,s.direction);const c=ke.rayTriangleParametric(s,n,o,i,r);if(!(!l(c)||c<0||c>h.distance(e,t)))return l(a)||(a=new h),h.multiplyByScalar(s.direction,c,a),h.add(s.origin,a,a)};function $y(e,t,n,o){const i=t*t-4*e*n;if(i<0)return;if(i>0){const a=1/(2*e),s=Math.sqrt(i),c=(-t+s)*a,f=(-t-s)*a;return c<f?(o.root0=c,o.root1=f):(o.root0=f,o.root1=c),o}const r=-t/(2*e);if(r!==0)return o.root0=o.root1=r,o}const Xy={root0:0,root1:0};function R0(e,t,n){l(n)||(n=new Zo);const o=e.origin,i=e.direction,r=t.center,a=t.radius*t.radius,s=h.subtract(o,r,M0),c=h.dot(i,i),f=2*h.dot(i,s),d=h.magnitudeSquared(s)-a,u=$y(c,f,d,Xy);if(l(u))return n.start=u.root0,n.stop=u.root1,n}ke.raySphere=function(e,t,n){if(!l(e))throw new w("ray is required.");if(!l(t))throw new w("sphere is required.");if(n=R0(e,t,n),!(!l(n)||n.stop<0))return n.start=Math.max(n.start,0),n};const Zy=new Fi;ke.lineSegmentSphere=function(e,t,n,o){if(!l(e))throw new w("p0 is required.");if(!l(t))throw new w("p1 is required.");if(!l(n))throw new w("sphere is required.");const i=Zy;h.clone(e,i.origin);const r=h.subtract(t,e,i.direction),a=h.magnitude(r);if(h.normalize(r,r),o=R0(i,n,o),!(!l(o)||o.stop<0||o.start>a))return o.start=Math.max(o.start,0),o.stop=Math.min(o.stop,a),o};const Ky=new h,Qy=new h;ke.rayEllipsoid=function(e,t){if(!l(e))throw new w("ray is required.");if(!l(t))throw new w("ellipsoid is required.");const n=t.oneOverRadii,o=h.multiplyComponents(n,e.origin,Ky),i=h.multiplyComponents(n,e.direction,Qy),r=h.magnitudeSquared(o),a=h.dot(o,i);let s,c,f,d,u;if(r>1){if(a>=0)return;const m=a*a;if(s=r-1,c=h.magnitudeSquared(i),f=c*s,m<f)return;if(m>f){d=a*a-f,u=-a+Math.sqrt(d);const g=u/c,y=s/u;return g<y?new Zo(g,y):{start:y,stop:g}}const _=Math.sqrt(s/c);return new Zo(_,_)}else if(r<1)return s=r-1,c=h.magnitudeSquared(i),f=c*s,d=a*a-f,u=-a+Math.sqrt(d),new Zo(0,u/c);if(a<0)return c=h.magnitudeSquared(i),new Zo(0,-a/c)};function ko(e,t,n){const o=e+t;return T.sign(e)!==T.sign(t)&&Math.abs(o/Math.max(Math.abs(e),Math.abs(t)))<n?0:o}ke.quadraticVectorExpression=function(e,t,n,o,i){const r=o*o,a=i*i,s=(e[B.COLUMN1ROW1]-e[B.COLUMN2ROW2])*a,c=i*(o*ko(e[B.COLUMN1ROW0],e[B.COLUMN0ROW1],T.EPSILON15)+t.y),f=e[B.COLUMN0ROW0]*r+e[B.COLUMN2ROW2]*a+o*t.x+n,d=a*ko(e[B.COLUMN2ROW1],e[B.COLUMN1ROW2],T.EPSILON15),u=i*(o*ko(e[B.COLUMN2ROW0],e[B.COLUMN0ROW2])+t.z);let m;const _=[];if(u===0&&d===0){if(m=Dn.computeRealRoots(s,c,f),m.length===0)return _;const z=m[0],G=Math.sqrt(Math.max(1-z*z,0));if(_.push(new h(o,i*z,i*-G)),_.push(new h(o,i*z,i*G)),m.length===2){const q=m[1],k=Math.sqrt(Math.max(1-q*q,0));_.push(new h(o,i*q,i*-k)),_.push(new h(o,i*q,i*k))}return _}const g=u*u,y=d*d,E=s*s,A=u*d,S=E+y,O=2*(c*s+A),M=2*f*s+c*c-y+g,R=2*(f*c-A),N=f*f-g;if(S===0&&O===0&&M===0&&R===0)return _;m=qf.computeRealRoots(S,O,M,R,N);const F=m.length;if(F===0)return _;for(let z=0;z<F;++z){const G=m[z],q=G*G,k=Math.max(1-q,0),X=Math.sqrt(k);let b;T.sign(s)===T.sign(f)?b=ko(s*q+f,c*G,T.EPSILON12):T.sign(f)===T.sign(c*G)?b=ko(s*q,c*G+f,T.EPSILON12):b=ko(s*q+c*G,f,T.EPSILON12);const v=ko(d*G,u,T.EPSILON15),C=b*v;C<0?_.push(new h(o,i*G,i*X)):C>0?_.push(new h(o,i*G,i*-X)):X!==0?(_.push(new h(o,i*G,i*-X)),_.push(new h(o,i*G,i*X)),++z):_.push(new h(o,i*G,i*X))}return _};const ic=new h,ll=new h,ul=new h,wa=new h,Jy=new h,e1=new B,t1=new B,n1=new B,o1=new B,i1=new B,dl=new B,ml=new B,pl=new h,r1=new h,a1=new le;ke.grazingAltitudeLocation=function(e,t){if(!l(e))throw new w("ray is required.");if(!l(t))throw new w("ellipsoid is required.");const n=e.origin,o=e.direction;if(!h.equals(n,h.ZERO)){const N=t.geodeticSurfaceNormal(n,ic);if(h.dot(o,N)>=0)return n}const i=l(this.rayEllipsoid(e,t)),r=t.transformPositionToScaledSpace(o,ic),a=h.normalize(r,r),s=h.mostOrthogonalAxis(r,wa),c=h.normalize(h.cross(s,a,ll),ll),f=h.normalize(h.cross(a,c,ul),ul),d=e1;d[0]=a.x,d[1]=a.y,d[2]=a.z,d[3]=c.x,d[4]=c.y,d[5]=c.z,d[6]=f.x,d[7]=f.y,d[8]=f.z;const u=B.transpose(d,t1),m=B.fromScale(t.radii,n1),_=B.fromScale(t.oneOverRadii,o1),g=i1;g[0]=0,g[1]=-o.z,g[2]=o.y,g[3]=o.z,g[4]=0,g[5]=-o.x,g[6]=-o.y,g[7]=o.x,g[8]=0;const y=B.multiply(B.multiply(u,_,dl),g,dl),E=B.multiply(B.multiply(y,m,ml),d,ml),A=B.multiplyByVector(y,n,Jy),S=ke.quadraticVectorExpression(E,h.negate(A,ic),0,0,1);let O,M;const R=S.length;if(R>0){let N=h.clone(h.ZERO,r1),F=Number.NEGATIVE_INFINITY;for(let G=0;G<R;++G){O=B.multiplyByVector(m,B.multiplyByVector(d,S[G],pl),pl);const q=h.normalize(h.subtract(O,n,wa),wa),k=h.dot(q,o);k>F&&(F=k,N=h.clone(O,N))}const z=t.cartesianToCartographic(N,a1);return F=T.clamp(F,0,1),M=h.magnitude(h.subtract(N,n,wa))*Math.sqrt(1-F*F),M=i?-M:M,z.height=M,t.cartographicToCartesian(z,new h)}};const s1=new h;ke.lineSegmentPlane=function(e,t,n,o){if(!l(e))throw new w("endPoint0 is required.");if(!l(t))throw new w("endPoint1 is required.");if(!l(n))throw new w("plane is required.");l(o)||(o=new h);const i=h.subtract(t,e,s1),r=n.normal,a=h.dot(r,i);if(Math.abs(a)<T.EPSILON6)return;const s=h.dot(r,e),c=-(n.distance+s)/a;if(!(c<0||c>1))return h.multiplyByScalar(i,c,o),h.add(e,o,o),o};ke.trianglePlaneIntersection=function(e,t,n,o){if(!l(e)||!l(t)||!l(n)||!l(o))throw new w("p0, p1, p2, and plane are required.");const i=o.normal,r=o.distance,a=h.dot(i,e)+r<0,s=h.dot(i,t)+r<0,c=h.dot(i,n)+r<0;let f=0;f+=a?1:0,f+=s?1:0,f+=c?1:0;let d,u;if((f===1||f===2)&&(d=new h,u=new h),f===1){if(a)return ke.lineSegmentPlane(e,t,o,d),ke.lineSegmentPlane(e,n,o,u),{positions:[e,t,n,d,u],indices:[0,3,4,1,2,4,1,4,3]};if(s)return ke.lineSegmentPlane(t,n,o,d),ke.lineSegmentPlane(t,e,o,u),{positions:[e,t,n,d,u],indices:[1,3,4,2,0,4,2,4,3]};if(c)return ke.lineSegmentPlane(n,e,o,d),ke.lineSegmentPlane(n,t,o,u),{positions:[e,t,n,d,u],indices:[2,3,4,0,1,4,0,4,3]}}else if(f===2)if(a)if(s){if(!c)return ke.lineSegmentPlane(e,n,o,d),ke.lineSegmentPlane(t,n,o,u),{positions:[e,t,n,d,u],indices:[0,1,4,0,4,3,2,3,4]}}else return ke.lineSegmentPlane(n,t,o,d),ke.lineSegmentPlane(e,t,o,u),{positions:[e,t,n,d,u],indices:[2,0,4,2,4,3,1,3,4]};else return ke.lineSegmentPlane(t,e,o,d),ke.lineSegmentPlane(n,e,o,u),{positions:[e,t,n,d,u],indices:[1,2,4,1,4,3,0,3,4]}};function De(e,t){if(p.typeOf.object("normal",e),!T.equalsEpsilon(h.magnitude(e),1,T.EPSILON6))throw new w("normal must be normalized.");p.typeOf.number("distance",t),this.normal=h.clone(e),this.distance=t}De.fromPointNormal=function(e,t,n){if(p.typeOf.object("point",e),p.typeOf.object("normal",t),!T.equalsEpsilon(h.magnitude(t),1,T.EPSILON6))throw new w("normal must be normalized.");const o=-h.dot(t,e);return l(n)?(h.clone(t,n.normal),n.distance=o,n):new De(t,o)};const c1=new h;De.fromCartesian4=function(e,t){p.typeOf.object("coefficients",e);const n=h.fromCartesian4(e,c1),o=e.w;if(!T.equalsEpsilon(h.magnitude(n),1,T.EPSILON6))throw new w("normal must be normalized.");return l(t)?(h.clone(n,t.normal),t.distance=o,t):new De(n,o)};De.getPointDistance=function(e,t){return p.typeOf.object("plane",e),p.typeOf.object("point",t),h.dot(e.normal,t)+e.distance};const f1=new h;De.projectPointOntoPlane=function(e,t,n){p.typeOf.object("plane",e),p.typeOf.object("point",t),l(n)||(n=new h);const o=De.getPointDistance(e,t),i=h.multiplyByScalar(e.normal,o,f1);return h.subtract(t,i,n)};const h1=new U,l1=new Q,u1=new h;De.transform=function(e,t,n){p.typeOf.object("plane",e),p.typeOf.object("transform",t);const o=e.normal,i=e.distance,r=U.inverseTranspose(t,h1);let a=Q.fromElements(o.x,o.y,o.z,i,l1);a=U.multiplyByVector(r,a,a);const s=h.fromCartesian4(a,u1);return a=Q.divideByScalar(a,h.magnitude(s),a),De.fromCartesian4(a,n)};De.clone=function(e,t){return p.typeOf.object("plane",e),l(t)?(h.clone(e.normal,t.normal),t.distance=e.distance,t):new De(e.normal,e.distance)};De.equals=function(e,t){return p.typeOf.object("left",e),p.typeOf.object("right",t),e.distance===t.distance&&h.equals(e.normal,t.normal)};De.ORIGIN_XY_PLANE=Object.freeze(new De(h.UNIT_Z,0));De.ORIGIN_YZ_PLANE=Object.freeze(new De(h.UNIT_X,0));De.ORIGIN_ZX_PLANE=Object.freeze(new De(h.UNIT_Y,0));const rc=new Q;function Qn(e,t){if(p.defined("origin",e),t=t??be.default,e=t.scaleToGeodeticSurface(e),!l(e))throw new w("origin must not be at the center of the ellipsoid.");const n=Pe.eastNorthUpToFixedFrame(e,t);this._ellipsoid=t,this._origin=e,this._xAxis=h.fromCartesian4(U.getColumn(n,0,rc)),this._yAxis=h.fromCartesian4(U.getColumn(n,1,rc));const o=h.fromCartesian4(U.getColumn(n,2,rc));this._plane=De.fromPointNormal(e,o)}Object.defineProperties(Qn.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},origin:{get:function(){return this._origin}},plane:{get:function(){return this._plane}},xAxis:{get:function(){return this._xAxis}},yAxis:{get:function(){return this._yAxis}},zAxis:{get:function(){return this._plane.normal}}});const d1=new Xt;Qn.fromPoints=function(e,t){p.defined("cartesians",e);const n=Xt.fromPoints(e,d1);return new Qn(n.center,t)};const P0=new Fi,as=new h;Qn.prototype.projectPointOntoPlane=function(e,t){p.defined("cartesian",e);const n=P0;n.origin=e,h.normalize(e,n.direction);let o=ke.rayPlane(n,this._plane,as);if(l(o)||(h.negate(n.direction,n.direction),o=ke.rayPlane(n,this._plane,as)),l(o)){const i=h.subtract(o,this._origin,o),r=h.dot(this._xAxis,i),a=h.dot(this._yAxis,i);return l(t)?(t.x=r,t.y=a,t):new V(r,a)}};Qn.prototype.projectPointsOntoPlane=function(e,t){p.defined("cartesians",e),l(t)||(t=[]);let n=0;const o=e.length;for(let i=0;i<o;i++){const r=this.projectPointOntoPlane(e[i],t[n]);l(r)&&(t[n]=r,n++)}return t.length=n,t};Qn.prototype.projectPointToNearestOnPlane=function(e,t){p.defined("cartesian",e),l(t)||(t=new V);const n=P0;n.origin=e,h.clone(this._plane.normal,n.direction);let o=ke.rayPlane(n,this._plane,as);l(o)||(h.negate(n.direction,n.direction),o=ke.rayPlane(n,this._plane,as));const i=h.subtract(o,this._origin,o),r=h.dot(this._xAxis,i),a=h.dot(this._yAxis,i);return t.x=r,t.y=a,t};Qn.prototype.projectPointsToNearestOnPlane=function(e,t){p.defined("cartesians",e),l(t)||(t=[]);const n=e.length;t.length=n;for(let o=0;o<n;o++)t[o]=this.projectPointToNearestOnPlane(e[o],t[o]);return t};const m1=new h;Qn.prototype.projectPointOntoEllipsoid=function(e,t){p.defined("cartesian",e),l(t)||(t=new h);const n=this._ellipsoid,o=this._origin,i=this._xAxis,r=this._yAxis,a=m1;return h.multiplyByScalar(i,e.x,a),t=h.add(o,a,t),h.multiplyByScalar(r,e.y,a),h.add(t,a,t),n.scaleToGeocentricSurface(t,t),t};Qn.prototype.projectPointsOntoEllipsoid=function(e,t){p.defined("cartesians",e);const n=e.length;l(t)?t.length=n:t=new Array(n);for(let o=0;o<n;++o)t[o]=this.projectPointOntoEllipsoid(e[o],t[o]);return t};function Be(e,t){this.center=h.clone(e??h.ZERO),this.halfAxes=B.clone(t??B.ZERO)}Be.packedLength=h.packedLength+B.packedLength;Be.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,h.pack(e.center,t,n),B.pack(e.halfAxes,t,n+h.packedLength),t};Be.unpack=function(e,t,n){return p.defined("array",e),t=t??0,l(n)||(n=new Be),h.unpack(e,t,n.center),B.unpack(e,t+h.packedLength,n.halfAxes),n};const p1=new h,_1=new h,g1=new h,y1=new h,b1=new h,E1=new h,w1=new B,v1={unitary:new B,diagonal:new B};Be.fromPoints=function(e,t){if(l(t)||(t=new Be),!l(e)||e.length===0)return t.halfAxes=B.ZERO,t.center=h.ZERO,t;let n;const o=e.length,i=h.clone(e[0],p1);for(n=1;n<o;n++)h.add(i,e[n],i);const r=1/o;h.multiplyByScalar(i,r,i);let a=0,s=0,c=0,f=0,d=0,u=0,m;for(n=0;n<o;n++)m=h.subtract(e[n],i,_1),a+=m.x*m.x,s+=m.x*m.y,c+=m.x*m.z,f+=m.y*m.y,d+=m.y*m.z,u+=m.z*m.z;a*=r,s*=r,c*=r,f*=r,d*=r,u*=r;const _=w1;_[0]=a,_[1]=s,_[2]=c,_[3]=s,_[4]=f,_[5]=d,_[6]=c,_[7]=d,_[8]=u;const g=B.computeEigenDecomposition(_,v1),y=B.clone(g.unitary,t.halfAxes);let E=B.getColumn(y,0,y1),A=B.getColumn(y,1,b1),S=B.getColumn(y,2,E1),O=-Number.MAX_VALUE,M=-Number.MAX_VALUE,R=-Number.MAX_VALUE,N=Number.MAX_VALUE,F=Number.MAX_VALUE,z=Number.MAX_VALUE;for(n=0;n<o;n++)m=e[n],O=Math.max(h.dot(E,m),O),M=Math.max(h.dot(A,m),M),R=Math.max(h.dot(S,m),R),N=Math.min(h.dot(E,m),N),F=Math.min(h.dot(A,m),F),z=Math.min(h.dot(S,m),z);E=h.multiplyByScalar(E,.5*(N+O),E),A=h.multiplyByScalar(A,.5*(F+M),A),S=h.multiplyByScalar(S,.5*(z+R),S);const G=h.add(E,A,t.center);h.add(G,S,G);const q=g1;return q.x=O-N,q.y=M-F,q.z=R-z,h.multiplyByScalar(q,.5,q),B.multiplyByScale(t.halfAxes,q,t.halfAxes),t};const I0=new h,T1=new h;function _l(e,t,n,o,i,r,a,s,c,f,d){if(!l(i)||!l(r)||!l(a)||!l(s)||!l(c)||!l(f))throw new w("all extents (minimum/maximum X/Y/Z) are required.");l(d)||(d=new Be);const u=d.halfAxes;B.setColumn(u,0,t,u),B.setColumn(u,1,n,u),B.setColumn(u,2,o,u);let m=I0;m.x=(i+r)/2,m.y=(a+s)/2,m.z=(c+f)/2;const _=T1;_.x=(r-i)/2,_.y=(s-a)/2,_.z=(f-c)/2;const g=d.center;return m=B.multiplyByVector(u,m,m),h.add(e,m,g),B.multiplyByScale(u,_,u),d}const gl=new le,S1=new h,A1=new le,x1=new le,O1=new le,C1=new le,M1=new le,R1=new h,yl=new h,P1=new h,bl=new h,I1=new h,z1=new V,N1=new V,D1=new V,L1=new V,F1=new V,B1=new h,U1=new h,G1=new h,q1=new h,k1=new V,j1=new h,V1=new h,H1=new h,W1=new De(h.UNIT_X,0);Be.fromRectangle=function(e,t,n,o,i){if(!l(e))throw new w("rectangle is required");if(e.width<0||e.width>T.TWO_PI)throw new w("Rectangle width must be between 0 and 2 * pi");if(e.height<0||e.height>T.PI)throw new w("Rectangle height must be between 0 and pi");if(l(o)&&!T.equalsEpsilon(o.radii.x,o.radii.y,T.EPSILON15))throw new w("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");t=t??0,n=n??0,o=o??be.default;let r,a,s,c,f,d,u;if(e.width<=T.PI){const F=Se.center(e,gl),z=o.cartographicToCartesian(F,S1),G=new Qn(z,o);u=G.plane;const q=F.longitude,k=e.south<0&&e.north>0?0:F.latitude,X=le.fromRadians(q,e.north,n,A1),b=le.fromRadians(e.west,e.north,n,x1),v=le.fromRadians(e.west,k,n,O1),C=le.fromRadians(e.west,e.south,n,C1),D=le.fromRadians(q,e.south,n,M1),H=o.cartographicToCartesian(X,R1);let Z=o.cartographicToCartesian(b,yl);const J=o.cartographicToCartesian(v,P1);let K=o.cartographicToCartesian(C,bl);const te=o.cartographicToCartesian(D,I1),he=G.projectPointToNearestOnPlane(H,z1),we=G.projectPointToNearestOnPlane(Z,N1),Te=G.projectPointToNearestOnPlane(J,D1),ve=G.projectPointToNearestOnPlane(K,L1),Re=G.projectPointToNearestOnPlane(te,F1);return r=Math.min(we.x,Te.x,ve.x),a=-r,c=Math.max(we.y,he.y),s=Math.min(ve.y,Re.y),b.height=C.height=t,Z=o.cartographicToCartesian(b,yl),K=o.cartographicToCartesian(C,bl),f=Math.min(De.getPointDistance(u,Z),De.getPointDistance(u,K)),d=n,_l(G.origin,G.xAxis,G.yAxis,G.zAxis,r,a,s,c,f,d,i)}const m=e.south>0,_=e.north<0,g=m?e.south:_?e.north:0,y=Se.center(e,gl).longitude,E=h.fromRadians(y,g,n,o,B1);E.z=0;const S=Math.abs(E.x)<T.EPSILON10&&Math.abs(E.y)<T.EPSILON10?h.UNIT_X:h.normalize(E,U1),O=h.UNIT_Z,M=h.cross(S,O,G1);u=De.fromPointNormal(E,S,W1);const R=h.fromRadians(y+T.PI_OVER_TWO,g,n,o,q1);a=h.dot(De.projectPointOntoPlane(u,R,k1),M),r=-a,c=h.fromRadians(0,e.north,_?t:n,o,j1).z,s=h.fromRadians(0,e.south,m?t:n,o,V1).z;const N=h.fromRadians(e.east,g,n,o,H1);return f=De.getPointDistance(u,N),d=0,_l(E,M,O,S,r,a,s,c,f,d,i)};Be.fromTransformation=function(e,t){return p.typeOf.object("transformation",e),l(t)||(t=new Be),t.center=U.getTranslation(e,t.center),t.halfAxes=U.getMatrix3(e,t.halfAxes),t.halfAxes=B.multiplyByScalar(t.halfAxes,.5,t.halfAxes),t};Be.clone=function(e,t){if(l(e))return l(t)?(h.clone(e.center,t.center),B.clone(e.halfAxes,t.halfAxes),t):new Be(e.center,e.halfAxes)};Be.intersectPlane=function(e,t){if(!l(e))throw new w("box is required.");if(!l(t))throw new w("plane is required.");const n=e.center,o=t.normal,i=e.halfAxes,r=o.x,a=o.y,s=o.z,c=Math.abs(r*i[B.COLUMN0ROW0]+a*i[B.COLUMN0ROW1]+s*i[B.COLUMN0ROW2])+Math.abs(r*i[B.COLUMN1ROW0]+a*i[B.COLUMN1ROW1]+s*i[B.COLUMN1ROW2])+Math.abs(r*i[B.COLUMN2ROW0]+a*i[B.COLUMN2ROW1]+s*i[B.COLUMN2ROW2]),f=h.dot(o,n)+t.distance;return f<=-c?bt.OUTSIDE:f>=c?bt.INSIDE:bt.INTERSECTING};const z0=new h,N0=new h,D0=new h,Y1=new h,El=new h,$1=new h;Be.distanceSquaredTo=function(e,t){if(!l(e))throw new w("box is required.");if(!l(t))throw new w("cartesian is required.");const n=h.subtract(t,e.center,I0),o=e.halfAxes;let i=B.getColumn(o,0,z0),r=B.getColumn(o,1,N0),a=B.getColumn(o,2,D0);const s=h.magnitude(i),c=h.magnitude(r),f=h.magnitude(a);let d=!0,u=!0,m=!0;s>0?h.divideByScalar(i,s,i):d=!1,c>0?h.divideByScalar(r,c,r):u=!1,f>0?h.divideByScalar(a,f,a):m=!1;const _=!d+!u+!m;let g,y,E;if(_===1){let M=i;g=r,y=a,u?m||(M=a,y=i):(M=r,g=i),E=h.cross(g,y,El),M===i?i=E:M===r?r=E:M===a&&(a=E)}else if(_===2){g=i,u?g=r:m&&(g=a);let M=h.UNIT_Y;M.equalsEpsilon(g,T.EPSILON3)&&(M=h.UNIT_X),y=h.cross(g,M,Y1),h.normalize(y,y),E=h.cross(g,y,El),h.normalize(E,E),g===i?(r=y,a=E):g===r?(a=y,i=E):g===a&&(i=y,r=E)}else _===3&&(i=h.UNIT_X,r=h.UNIT_Y,a=h.UNIT_Z);const A=$1;A.x=h.dot(n,i),A.y=h.dot(n,r),A.z=h.dot(n,a);let S=0,O;return A.x<-s?(O=A.x+s,S+=O*O):A.x>s&&(O=A.x-s,S+=O*O),A.y<-c?(O=A.y+c,S+=O*O):A.y>c&&(O=A.y-c,S+=O*O),A.z<-f?(O=A.z+f,S+=O*O):A.z>f&&(O=A.z-f,S+=O*O),S};const X1=new h,Z1=new h;Be.computePlaneDistances=function(e,t,n,o){if(!l(e))throw new w("box is required.");if(!l(t))throw new w("position is required.");if(!l(n))throw new w("direction is required.");l(o)||(o=new Zo);let i=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;const a=e.center,s=e.halfAxes,c=B.getColumn(s,0,z0),f=B.getColumn(s,1,N0),d=B.getColumn(s,2,D0),u=h.add(c,f,X1);h.add(u,d,u),h.add(u,a,u);const m=h.subtract(u,t,Z1);let _=h.dot(n,m);return i=Math.min(_,i),r=Math.max(_,r),h.add(a,c,u),h.add(u,f,u),h.subtract(u,d,u),h.subtract(u,t,m),_=h.dot(n,m),i=Math.min(_,i),r=Math.max(_,r),h.add(a,c,u),h.subtract(u,f,u),h.add(u,d,u),h.subtract(u,t,m),_=h.dot(n,m),i=Math.min(_,i),r=Math.max(_,r),h.add(a,c,u),h.subtract(u,f,u),h.subtract(u,d,u),h.subtract(u,t,m),_=h.dot(n,m),i=Math.min(_,i),r=Math.max(_,r),h.subtract(a,c,u),h.add(u,f,u),h.add(u,d,u),h.subtract(u,t,m),_=h.dot(n,m),i=Math.min(_,i),r=Math.max(_,r),h.subtract(a,c,u),h.add(u,f,u),h.subtract(u,d,u),h.subtract(u,t,m),_=h.dot(n,m),i=Math.min(_,i),r=Math.max(_,r),h.subtract(a,c,u),h.subtract(u,f,u),h.add(u,d,u),h.subtract(u,t,m),_=h.dot(n,m),i=Math.min(_,i),r=Math.max(_,r),h.subtract(a,c,u),h.subtract(u,f,u),h.subtract(u,d,u),h.subtract(u,t,m),_=h.dot(n,m),i=Math.min(_,i),r=Math.max(_,r),o.start=i,o.stop=r,o};const K1=new h,Q1=new h,J1=new h;Be.computeCorners=function(e,t){p.typeOf.object("box",e),l(t)||(t=[new h,new h,new h,new h,new h,new h,new h,new h]);const n=e.center,o=e.halfAxes,i=B.getColumn(o,0,K1),r=B.getColumn(o,1,Q1),a=B.getColumn(o,2,J1);return h.clone(n,t[0]),h.subtract(t[0],i,t[0]),h.subtract(t[0],r,t[0]),h.subtract(t[0],a,t[0]),h.clone(n,t[1]),h.subtract(t[1],i,t[1]),h.subtract(t[1],r,t[1]),h.add(t[1],a,t[1]),h.clone(n,t[2]),h.subtract(t[2],i,t[2]),h.add(t[2],r,t[2]),h.subtract(t[2],a,t[2]),h.clone(n,t[3]),h.subtract(t[3],i,t[3]),h.add(t[3],r,t[3]),h.add(t[3],a,t[3]),h.clone(n,t[4]),h.add(t[4],i,t[4]),h.subtract(t[4],r,t[4]),h.subtract(t[4],a,t[4]),h.clone(n,t[5]),h.add(t[5],i,t[5]),h.subtract(t[5],r,t[5]),h.add(t[5],a,t[5]),h.clone(n,t[6]),h.add(t[6],i,t[6]),h.add(t[6],r,t[6]),h.subtract(t[6],a,t[6]),h.clone(n,t[7]),h.add(t[7],i,t[7]),h.add(t[7],r,t[7]),h.add(t[7],a,t[7]),t};const eb=new B;Be.computeTransformation=function(e,t){p.typeOf.object("box",e),l(t)||(t=new U);const n=e.center,o=B.multiplyByUniformScale(e.halfAxes,2,eb);return U.fromRotationTranslation(o,n,t)};const tb=new ie;Be.isOccluded=function(e,t){if(!l(e))throw new w("box is required.");if(!l(t))throw new w("occluder is required.");const n=ie.fromOrientedBoundingBox(e,tb);return!t.isBoundingSphereVisible(n)};Be.prototype.intersectPlane=function(e){return Be.intersectPlane(this,e)};Be.prototype.distanceSquaredTo=function(e){return Be.distanceSquaredTo(this,e)};Be.prototype.computePlaneDistances=function(e,t,n){return Be.computePlaneDistances(this,e,t,n)};Be.prototype.computeCorners=function(e){return Be.computeCorners(this,e)};Be.prototype.computeTransformation=function(e){return Be.computeTransformation(this,e)};Be.prototype.isOccluded=function(e){return Be.isOccluded(this,e)};Be.equals=function(e,t){return e===t||l(e)&&l(t)&&h.equals(e.center,t.center)&&B.equals(e.halfAxes,t.halfAxes)};Be.prototype.clone=function(e){return Be.clone(this,e)};Be.prototype.equals=function(e){return Be.equals(this,e)};const nb={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,IMPLEMENTATION_COLOR_READ_TYPE:35738,IMPLEMENTATION_COLOR_READ_FORMAT:35739,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444,COMPRESSED_RGB_S3TC_DXT1_EXT:33776,COMPRESSED_RGBA_S3TC_DXT1_EXT:33777,COMPRESSED_RGBA_S3TC_DXT3_EXT:33778,COMPRESSED_RGBA_S3TC_DXT5_EXT:33779,COMPRESSED_RGB_PVRTC_4BPPV1_IMG:35840,COMPRESSED_RGB_PVRTC_2BPPV1_IMG:35841,COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:35842,COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:35843,COMPRESSED_RGBA_ASTC_4x4_WEBGL:37808,COMPRESSED_RGB_ETC1_WEBGL:36196,COMPRESSED_RGBA_BPTC_UNORM:36492,HALF_FLOAT_OES:36193,DOUBLE:5130,READ_BUFFER:3074,UNPACK_ROW_LENGTH:3314,UNPACK_SKIP_ROWS:3315,UNPACK_SKIP_PIXELS:3316,PACK_ROW_LENGTH:3330,PACK_SKIP_ROWS:3331,PACK_SKIP_PIXELS:3332,COLOR:6144,DEPTH:6145,STENCIL:6146,RED:6403,RGB8:32849,RGBA8:32856,RGB10_A2:32857,TEXTURE_BINDING_3D:32874,UNPACK_SKIP_IMAGES:32877,UNPACK_IMAGE_HEIGHT:32878,TEXTURE_3D:32879,TEXTURE_WRAP_R:32882,MAX_3D_TEXTURE_SIZE:32883,UNSIGNED_INT_2_10_10_10_REV:33640,MAX_ELEMENTS_VERTICES:33e3,MAX_ELEMENTS_INDICES:33001,TEXTURE_MIN_LOD:33082,TEXTURE_MAX_LOD:33083,TEXTURE_BASE_LEVEL:33084,TEXTURE_MAX_LEVEL:33085,MIN:32775,MAX:32776,DEPTH_COMPONENT24:33190,MAX_TEXTURE_LOD_BIAS:34045,TEXTURE_COMPARE_MODE:34892,TEXTURE_COMPARE_FUNC:34893,CURRENT_QUERY:34917,QUERY_RESULT:34918,QUERY_RESULT_AVAILABLE:34919,STREAM_READ:35041,STREAM_COPY:35042,STATIC_READ:35045,STATIC_COPY:35046,DYNAMIC_READ:35049,DYNAMIC_COPY:35050,MAX_DRAW_BUFFERS:34852,DRAW_BUFFER0:34853,DRAW_BUFFER1:34854,DRAW_BUFFER2:34855,DRAW_BUFFER3:34856,DRAW_BUFFER4:34857,DRAW_BUFFER5:34858,DRAW_BUFFER6:34859,DRAW_BUFFER7:34860,DRAW_BUFFER8:34861,DRAW_BUFFER9:34862,DRAW_BUFFER10:34863,DRAW_BUFFER11:34864,DRAW_BUFFER12:34865,DRAW_BUFFER13:34866,DRAW_BUFFER14:34867,DRAW_BUFFER15:34868,MAX_FRAGMENT_UNIFORM_COMPONENTS:35657,MAX_VERTEX_UNIFORM_COMPONENTS:35658,SAMPLER_3D:35679,SAMPLER_2D_SHADOW:35682,FRAGMENT_SHADER_DERIVATIVE_HINT:35723,PIXEL_PACK_BUFFER:35051,PIXEL_UNPACK_BUFFER:35052,PIXEL_PACK_BUFFER_BINDING:35053,PIXEL_UNPACK_BUFFER_BINDING:35055,FLOAT_MAT2x3:35685,FLOAT_MAT2x4:35686,FLOAT_MAT3x2:35687,FLOAT_MAT3x4:35688,FLOAT_MAT4x2:35689,FLOAT_MAT4x3:35690,SRGB:35904,SRGB8:35905,SRGB8_ALPHA8:35907,COMPARE_REF_TO_TEXTURE:34894,RGBA32F:34836,RGB32F:34837,RGBA16F:34842,RGB16F:34843,VERTEX_ATTRIB_ARRAY_INTEGER:35069,MAX_ARRAY_TEXTURE_LAYERS:35071,MIN_PROGRAM_TEXEL_OFFSET:35076,MAX_PROGRAM_TEXEL_OFFSET:35077,MAX_VARYING_COMPONENTS:35659,TEXTURE_2D_ARRAY:35866,TEXTURE_BINDING_2D_ARRAY:35869,R11F_G11F_B10F:35898,UNSIGNED_INT_10F_11F_11F_REV:35899,RGB9_E5:35901,UNSIGNED_INT_5_9_9_9_REV:35902,TRANSFORM_FEEDBACK_BUFFER_MODE:35967,MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS:35968,TRANSFORM_FEEDBACK_VARYINGS:35971,TRANSFORM_FEEDBACK_BUFFER_START:35972,TRANSFORM_FEEDBACK_BUFFER_SIZE:35973,TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN:35976,RASTERIZER_DISCARD:35977,MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS:35978,MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS:35979,INTERLEAVED_ATTRIBS:35980,SEPARATE_ATTRIBS:35981,TRANSFORM_FEEDBACK_BUFFER:35982,TRANSFORM_FEEDBACK_BUFFER_BINDING:35983,RGBA32UI:36208,RGB32UI:36209,RGBA16UI:36214,RGB16UI:36215,RGBA8UI:36220,RGB8UI:36221,RGBA32I:36226,RGB32I:36227,RGBA16I:36232,RGB16I:36233,RGBA8I:36238,RGB8I:36239,RED_INTEGER:36244,RGB_INTEGER:36248,RGBA_INTEGER:36249,SAMPLER_2D_ARRAY:36289,SAMPLER_2D_ARRAY_SHADOW:36292,SAMPLER_CUBE_SHADOW:36293,UNSIGNED_INT_VEC2:36294,UNSIGNED_INT_VEC3:36295,UNSIGNED_INT_VEC4:36296,INT_SAMPLER_2D:36298,INT_SAMPLER_3D:36299,INT_SAMPLER_CUBE:36300,INT_SAMPLER_2D_ARRAY:36303,UNSIGNED_INT_SAMPLER_2D:36306,UNSIGNED_INT_SAMPLER_3D:36307,UNSIGNED_INT_SAMPLER_CUBE:36308,UNSIGNED_INT_SAMPLER_2D_ARRAY:36311,DEPTH_COMPONENT32F:36012,DEPTH32F_STENCIL8:36013,FLOAT_32_UNSIGNED_INT_24_8_REV:36269,FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:33296,FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE:33297,FRAMEBUFFER_ATTACHMENT_RED_SIZE:33298,FRAMEBUFFER_ATTACHMENT_GREEN_SIZE:33299,FRAMEBUFFER_ATTACHMENT_BLUE_SIZE:33300,FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE:33301,FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE:33302,FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE:33303,FRAMEBUFFER_DEFAULT:33304,UNSIGNED_INT_24_8:34042,DEPTH24_STENCIL8:35056,UNSIGNED_NORMALIZED:35863,DRAW_FRAMEBUFFER_BINDING:36006,READ_FRAMEBUFFER:36008,DRAW_FRAMEBUFFER:36009,READ_FRAMEBUFFER_BINDING:36010,RENDERBUFFER_SAMPLES:36011,FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER:36052,MAX_COLOR_ATTACHMENTS:36063,COLOR_ATTACHMENT1:36065,COLOR_ATTACHMENT2:36066,COLOR_ATTACHMENT3:36067,COLOR_ATTACHMENT4:36068,COLOR_ATTACHMENT5:36069,COLOR_ATTACHMENT6:36070,COLOR_ATTACHMENT7:36071,COLOR_ATTACHMENT8:36072,COLOR_ATTACHMENT9:36073,COLOR_ATTACHMENT10:36074,COLOR_ATTACHMENT11:36075,COLOR_ATTACHMENT12:36076,COLOR_ATTACHMENT13:36077,COLOR_ATTACHMENT14:36078,COLOR_ATTACHMENT15:36079,FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:36182,MAX_SAMPLES:36183,HALF_FLOAT:5131,RG:33319,RG_INTEGER:33320,R8:33321,RG8:33323,R16F:33325,R32F:33326,RG16F:33327,RG32F:33328,R8I:33329,R8UI:33330,R16I:33331,R16UI:33332,R32I:33333,R32UI:33334,RG8I:33335,RG8UI:33336,RG16I:33337,RG16UI:33338,RG32I:33339,RG32UI:33340,VERTEX_ARRAY_BINDING:34229,R8_SNORM:36756,RG8_SNORM:36757,RGB8_SNORM:36758,RGBA8_SNORM:36759,SIGNED_NORMALIZED:36764,COPY_READ_BUFFER:36662,COPY_WRITE_BUFFER:36663,COPY_READ_BUFFER_BINDING:36662,COPY_WRITE_BUFFER_BINDING:36663,UNIFORM_BUFFER:35345,UNIFORM_BUFFER_BINDING:35368,UNIFORM_BUFFER_START:35369,UNIFORM_BUFFER_SIZE:35370,MAX_VERTEX_UNIFORM_BLOCKS:35371,MAX_FRAGMENT_UNIFORM_BLOCKS:35373,MAX_COMBINED_UNIFORM_BLOCKS:35374,MAX_UNIFORM_BUFFER_BINDINGS:35375,MAX_UNIFORM_BLOCK_SIZE:35376,MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS:35377,MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS:35379,UNIFORM_BUFFER_OFFSET_ALIGNMENT:35380,ACTIVE_UNIFORM_BLOCKS:35382,UNIFORM_TYPE:35383,UNIFORM_SIZE:35384,UNIFORM_BLOCK_INDEX:35386,UNIFORM_OFFSET:35387,UNIFORM_ARRAY_STRIDE:35388,UNIFORM_MATRIX_STRIDE:35389,UNIFORM_IS_ROW_MAJOR:35390,UNIFORM_BLOCK_BINDING:35391,UNIFORM_BLOCK_DATA_SIZE:35392,UNIFORM_BLOCK_ACTIVE_UNIFORMS:35394,UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES:35395,UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER:35396,UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER:35398,INVALID_INDEX:4294967295,MAX_VERTEX_OUTPUT_COMPONENTS:37154,MAX_FRAGMENT_INPUT_COMPONENTS:37157,MAX_SERVER_WAIT_TIMEOUT:37137,OBJECT_TYPE:37138,SYNC_CONDITION:37139,SYNC_STATUS:37140,SYNC_FLAGS:37141,SYNC_FENCE:37142,SYNC_GPU_COMMANDS_COMPLETE:37143,UNSIGNALED:37144,SIGNALED:37145,ALREADY_SIGNALED:37146,TIMEOUT_EXPIRED:37147,CONDITION_SATISFIED:37148,WAIT_FAILED:37149,SYNC_FLUSH_COMMANDS_BIT:1,VERTEX_ATTRIB_ARRAY_DIVISOR:35070,ANY_SAMPLES_PASSED:35887,ANY_SAMPLES_PASSED_CONSERVATIVE:36202,SAMPLER_BINDING:35097,RGB10_A2UI:36975,INT_2_10_10_10_REV:36255,TRANSFORM_FEEDBACK:36386,TRANSFORM_FEEDBACK_PAUSED:36387,TRANSFORM_FEEDBACK_ACTIVE:36388,TRANSFORM_FEEDBACK_BINDING:36389,COMPRESSED_R11_EAC:37488,COMPRESSED_SIGNED_R11_EAC:37489,COMPRESSED_RG11_EAC:37490,COMPRESSED_SIGNED_RG11_EAC:37491,COMPRESSED_RGB8_ETC2:37492,COMPRESSED_SRGB8_ETC2:37493,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:37494,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:37495,COMPRESSED_RGBA8_ETC2_EAC:37496,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:37497,TEXTURE_IMMUTABLE_FORMAT:37167,MAX_ELEMENT_INDEX:36203,TEXTURE_IMMUTABLE_LEVELS:33503,MAX_TEXTURE_MAX_ANISOTROPY_EXT:34047},I=Object.freeze(nb),Ce={BYTE:I.BYTE,UNSIGNED_BYTE:I.UNSIGNED_BYTE,SHORT:I.SHORT,UNSIGNED_SHORT:I.UNSIGNED_SHORT,INT:I.INT,UNSIGNED_INT:I.UNSIGNED_INT,FLOAT:I.FLOAT,DOUBLE:I.DOUBLE};Ce.getSizeInBytes=function(e){if(!l(e))throw new w("value is required.");switch(e){case Ce.BYTE:return Int8Array.BYTES_PER_ELEMENT;case Ce.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case Ce.SHORT:return Int16Array.BYTES_PER_ELEMENT;case Ce.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case Ce.INT:return Int32Array.BYTES_PER_ELEMENT;case Ce.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case Ce.FLOAT:return Float32Array.BYTES_PER_ELEMENT;case Ce.DOUBLE:return Float64Array.BYTES_PER_ELEMENT;default:throw new w("componentDatatype is not a valid value.")}};Ce.fromTypedArray=function(e){if(e instanceof Int8Array)return Ce.BYTE;if(e instanceof Uint8Array)return Ce.UNSIGNED_BYTE;if(e instanceof Int16Array)return Ce.SHORT;if(e instanceof Uint16Array)return Ce.UNSIGNED_SHORT;if(e instanceof Int32Array)return Ce.INT;if(e instanceof Uint32Array)return Ce.UNSIGNED_INT;if(e instanceof Float32Array)return Ce.FLOAT;if(e instanceof Float64Array)return Ce.DOUBLE;throw new w("array must be an Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, or Float64Array.")};Ce.validate=function(e){return l(e)&&(e===Ce.BYTE||e===Ce.UNSIGNED_BYTE||e===Ce.SHORT||e===Ce.UNSIGNED_SHORT||e===Ce.INT||e===Ce.UNSIGNED_INT||e===Ce.FLOAT||e===Ce.DOUBLE)};Ce.createTypedArray=function(e,t){if(!l(e))throw new w("componentDatatype is required.");if(!l(t))throw new w("valuesOrLength is required.");switch(e){case Ce.BYTE:return new Int8Array(t);case Ce.UNSIGNED_BYTE:return new Uint8Array(t);case Ce.SHORT:return new Int16Array(t);case Ce.UNSIGNED_SHORT:return new Uint16Array(t);case Ce.INT:return new Int32Array(t);case Ce.UNSIGNED_INT:return new Uint32Array(t);case Ce.FLOAT:return new Float32Array(t);case Ce.DOUBLE:return new Float64Array(t);default:throw new w("componentDatatype is not a valid value.")}};Ce.createArrayBufferView=function(e,t,n,o){if(!l(e))throw new w("componentDatatype is required.");if(!l(t))throw new w("buffer is required.");switch(n=n??0,o=o??(t.byteLength-n)/Ce.getSizeInBytes(e),e){case Ce.BYTE:return new Int8Array(t,n,o);case Ce.UNSIGNED_BYTE:return new Uint8Array(t,n,o);case Ce.SHORT:return new Int16Array(t,n,o);case Ce.UNSIGNED_SHORT:return new Uint16Array(t,n,o);case Ce.INT:return new Int32Array(t,n,o);case Ce.UNSIGNED_INT:return new Uint32Array(t,n,o);case Ce.FLOAT:return new Float32Array(t,n,o);case Ce.DOUBLE:return new Float64Array(t,n,o);default:throw new w("componentDatatype is not a valid value.")}};Ce.fromName=function(e){switch(e){case"BYTE":return Ce.BYTE;case"UNSIGNED_BYTE":return Ce.UNSIGNED_BYTE;case"SHORT":return Ce.SHORT;case"UNSIGNED_SHORT":return Ce.UNSIGNED_SHORT;case"INT":return Ce.INT;case"UNSIGNED_INT":return Ce.UNSIGNED_INT;case"FLOAT":return Ce.FLOAT;case"DOUBLE":return Ce.DOUBLE;default:throw new w("name is not a valid value.")}};const ue=Object.freeze(Ce);function ge(e,t,n,o){this[0]=e??0,this[1]=n??0,this[2]=t??0,this[3]=o??0}ge.packedLength=4;ge.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,t[n++]=e[0],t[n++]=e[1],t[n++]=e[2],t[n++]=e[3],t};ge.unpack=function(e,t,n){return p.defined("array",e),t=t??0,l(n)||(n=new ge),n[0]=e[t++],n[1]=e[t++],n[2]=e[t++],n[3]=e[t++],n};ge.packArray=function(e,t){p.defined("array",e);const n=e.length,o=n*4;if(!l(t))t=new Array(o);else{if(!Array.isArray(t)&&t.length!==o)throw new w("If result is a typed array, it must have exactly array.length * 4 elements");t.length!==o&&(t.length=o)}for(let i=0;i<n;++i)ge.pack(e[i],t,i*4);return t};ge.unpackArray=function(e,t){if(p.defined("array",e),p.typeOf.number.greaterThanOrEquals("array.length",e.length,4),e.length%4!==0)throw new w("array length must be a multiple of 4.");const n=e.length;l(t)?t.length=n/4:t=new Array(n/4);for(let o=0;o<n;o+=4){const i=o/4;t[i]=ge.unpack(e,o,t[i])}return t};ge.clone=function(e,t){if(l(e))return l(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t):new ge(e[0],e[2],e[1],e[3])};ge.fromArray=ge.unpack;ge.fromColumnMajorArray=function(e,t){return p.defined("values",e),ge.clone(e,t)};ge.fromRowMajorArray=function(e,t){return p.defined("values",e),l(t)?(t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3],t):new ge(e[0],e[1],e[2],e[3])};ge.fromScale=function(e,t){return p.typeOf.object("scale",e),l(t)?(t[0]=e.x,t[1]=0,t[2]=0,t[3]=e.y,t):new ge(e.x,0,0,e.y)};ge.fromUniformScale=function(e,t){return p.typeOf.number("scale",e),l(t)?(t[0]=e,t[1]=0,t[2]=0,t[3]=e,t):new ge(e,0,0,e)};ge.fromRotation=function(e,t){p.typeOf.number("angle",e);const n=Math.cos(e),o=Math.sin(e);return l(t)?(t[0]=n,t[1]=o,t[2]=-o,t[3]=n,t):new ge(n,-o,o,n)};ge.toArray=function(e,t){return p.typeOf.object("matrix",e),l(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t):[e[0],e[1],e[2],e[3]]};ge.getElementIndex=function(e,t){return p.typeOf.number.greaterThanOrEquals("row",t,0),p.typeOf.number.lessThanOrEquals("row",t,1),p.typeOf.number.greaterThanOrEquals("column",e,0),p.typeOf.number.lessThanOrEquals("column",e,1),e*2+t};ge.getColumn=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.number.greaterThanOrEquals("index",t,0),p.typeOf.number.lessThanOrEquals("index",t,1),p.typeOf.object("result",n);const o=t*2,i=e[o],r=e[o+1];return n.x=i,n.y=r,n};ge.setColumn=function(e,t,n,o){p.typeOf.object("matrix",e),p.typeOf.number.greaterThanOrEquals("index",t,0),p.typeOf.number.lessThanOrEquals("index",t,1),p.typeOf.object("cartesian",n),p.typeOf.object("result",o),o=ge.clone(e,o);const i=t*2;return o[i]=n.x,o[i+1]=n.y,o};ge.getRow=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.number.greaterThanOrEquals("index",t,0),p.typeOf.number.lessThanOrEquals("index",t,1),p.typeOf.object("result",n);const o=e[t],i=e[t+2];return n.x=o,n.y=i,n};ge.setRow=function(e,t,n,o){return p.typeOf.object("matrix",e),p.typeOf.number.greaterThanOrEquals("index",t,0),p.typeOf.number.lessThanOrEquals("index",t,1),p.typeOf.object("cartesian",n),p.typeOf.object("result",o),o=ge.clone(e,o),o[t]=n.x,o[t+2]=n.y,o};const ob=new V;ge.setScale=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("scale",t),p.typeOf.object("result",n);const o=ge.getScale(e,ob),i=t.x/o.x,r=t.y/o.y;return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*r,n[3]=e[3]*r,n};const ib=new V;ge.setUniformScale=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.number("scale",t),p.typeOf.object("result",n);const o=ge.getScale(e,ib),i=t/o.x,r=t/o.y;return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*r,n[3]=e[3]*r,n};const wl=new V;ge.getScale=function(e,t){return p.typeOf.object("matrix",e),p.typeOf.object("result",t),t.x=V.magnitude(V.fromElements(e[0],e[1],wl)),t.y=V.magnitude(V.fromElements(e[2],e[3],wl)),t};const vl=new V;ge.getMaximumScale=function(e){return ge.getScale(e,vl),V.maximumComponent(vl)};const rb=new V;ge.setRotation=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("result",n);const o=ge.getScale(e,rb);return n[0]=t[0]*o.x,n[1]=t[1]*o.x,n[2]=t[2]*o.y,n[3]=t[3]*o.y,n};const ab=new V;ge.getRotation=function(e,t){p.typeOf.object("matrix",e),p.typeOf.object("result",t);const n=ge.getScale(e,ab);return t[0]=e[0]/n.x,t[1]=e[1]/n.x,t[2]=e[2]/n.y,t[3]=e[3]/n.y,t};ge.multiply=function(e,t,n){p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n);const o=e[0]*t[0]+e[2]*t[1],i=e[0]*t[2]+e[2]*t[3],r=e[1]*t[0]+e[3]*t[1],a=e[1]*t[2]+e[3]*t[3];return n[0]=o,n[1]=r,n[2]=i,n[3]=a,n};ge.add=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n[3]=e[3]+t[3],n};ge.subtract=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n[3]=e[3]-t[3],n};ge.multiplyByVector=function(e,t,n){p.typeOf.object("matrix",e),p.typeOf.object("cartesian",t),p.typeOf.object("result",n);const o=e[0]*t.x+e[2]*t.y,i=e[1]*t.x+e[3]*t.y;return n.x=o,n.y=i,n};ge.multiplyByScalar=function(e,t,n){return p.typeOf.object("matrix",e),p.typeOf.number("scalar",t),p.typeOf.object("result",n),n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n};ge.multiplyByScale=function(e,t,n){return p.typeOf.object("matrix",e),p.typeOf.object("scale",t),p.typeOf.object("result",n),n[0]=e[0]*t.x,n[1]=e[1]*t.x,n[2]=e[2]*t.y,n[3]=e[3]*t.y,n};ge.multiplyByUniformScale=function(e,t,n){return p.typeOf.object("matrix",e),p.typeOf.number("scale",t),p.typeOf.object("result",n),n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n};ge.negate=function(e,t){return p.typeOf.object("matrix",e),p.typeOf.object("result",t),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t};ge.transpose=function(e,t){p.typeOf.object("matrix",e),p.typeOf.object("result",t);const n=e[0],o=e[2],i=e[1],r=e[3];return t[0]=n,t[1]=o,t[2]=i,t[3]=r,t};ge.abs=function(e,t){return p.typeOf.object("matrix",e),p.typeOf.object("result",t),t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t[3]=Math.abs(e[3]),t};ge.equals=function(e,t){return e===t||l(e)&&l(t)&&e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]};ge.equalsArray=function(e,t,n){return e[0]===t[n]&&e[1]===t[n+1]&&e[2]===t[n+2]&&e[3]===t[n+3]};ge.equalsEpsilon=function(e,t,n){return n=n??0,e===t||l(e)&&l(t)&&Math.abs(e[0]-t[0])<=n&&Math.abs(e[1]-t[1])<=n&&Math.abs(e[2]-t[2])<=n&&Math.abs(e[3]-t[3])<=n};ge.IDENTITY=Object.freeze(new ge(1,0,0,1));ge.ZERO=Object.freeze(new ge(0,0,0,0));ge.COLUMN0ROW0=0;ge.COLUMN0ROW1=1;ge.COLUMN1ROW0=2;ge.COLUMN1ROW1=3;Object.defineProperties(ge.prototype,{length:{get:function(){return ge.packedLength}}});ge.prototype.clone=function(e){return ge.clone(this,e)};ge.prototype.equals=function(e){return ge.equals(this,e)};ge.prototype.equalsEpsilon=function(e,t){return ge.equalsEpsilon(this,e,t)};ge.prototype.toString=function(){return`(${this[0]}, ${this[2]})
(${this[1]}, ${this[3]})`};const Ye={SCALAR:"SCALAR",VEC2:"VEC2",VEC3:"VEC3",VEC4:"VEC4",MAT2:"MAT2",MAT3:"MAT3",MAT4:"MAT4"};Ye.getMathType=function(e){switch(e){case Ye.SCALAR:return Number;case Ye.VEC2:return V;case Ye.VEC3:return h;case Ye.VEC4:return Q;case Ye.MAT2:return ge;case Ye.MAT3:return B;case Ye.MAT4:return U;default:throw new w("attributeType is not a valid value.")}};Ye.getNumberOfComponents=function(e){switch(e){case Ye.SCALAR:return 1;case Ye.VEC2:return 2;case Ye.VEC3:return 3;case Ye.VEC4:case Ye.MAT2:return 4;case Ye.MAT3:return 9;case Ye.MAT4:return 16;default:throw new w("attributeType is not a valid value.")}};Ye.getAttributeLocationCount=function(e){switch(e){case Ye.SCALAR:case Ye.VEC2:case Ye.VEC3:case Ye.VEC4:return 1;case Ye.MAT2:return 2;case Ye.MAT3:return 3;case Ye.MAT4:return 4;default:throw new w("attributeType is not a valid value.")}};Ye.getGlslType=function(e){switch(p.typeOf.string("attributeType",e),e){case Ye.SCALAR:return"float";case Ye.VEC2:return"vec2";case Ye.VEC3:return"vec3";case Ye.VEC4:return"vec4";case Ye.MAT2:return"mat2";case Ye.MAT3:return"mat3";case Ye.MAT4:return"mat4";default:throw new w("attributeType is not a valid value.")}};const L0=Object.freeze(Ye),Tl=1/256,Sl=256,Ge={};Ge.octEncodeInRange=function(e,t,n){p.defined("vector",e),p.defined("result",n);const o=h.magnitudeSquared(e);if(Math.abs(o-1)>T.EPSILON6)throw new w("vector must be normalized.");if(n.x=e.x/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),n.y=e.y/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),e.z<0){const i=n.x,r=n.y;n.x=(1-Math.abs(r))*T.signNotZero(i),n.y=(1-Math.abs(i))*T.signNotZero(r)}return n.x=T.toSNorm(n.x,t),n.y=T.toSNorm(n.y,t),n};Ge.octEncode=function(e,t){return Ge.octEncodeInRange(e,255,t)};const or=new V,Al=new Uint8Array(1);function va(e){return Al[0]=e,Al[0]}Ge.octEncodeToCartesian4=function(e,t){return Ge.octEncodeInRange(e,65535,or),t.x=va(or.x*Tl),t.y=va(or.x),t.z=va(or.y*Tl),t.w=va(or.y),t};Ge.octDecodeInRange=function(e,t,n,o){if(p.defined("result",o),e<0||e>n||t<0||t>n)throw new w(`x and y must be unsigned normalized integers between 0 and ${n}`);if(o.x=T.fromSNorm(e,n),o.y=T.fromSNorm(t,n),o.z=1-(Math.abs(o.x)+Math.abs(o.y)),o.z<0){const i=o.x;o.x=(1-Math.abs(o.y))*T.signNotZero(i),o.y=(1-Math.abs(i))*T.signNotZero(o.y)}return h.normalize(o,o)};Ge.octDecode=function(e,t,n){return Ge.octDecodeInRange(e,t,255,n)};Ge.octDecodeFromCartesian4=function(e,t){p.typeOf.object("encoded",e),p.typeOf.object("result",t);const n=e.x,o=e.y,i=e.z,r=e.w;if(n<0||n>255||o<0||o>255||i<0||i>255||r<0||r>255)throw new w("x, y, z, and w must be unsigned normalized integers between 0 and 255");const a=n*Sl+o,s=i*Sl+r;return Ge.octDecodeInRange(a,s,65535,t)};Ge.octPackFloat=function(e){return p.defined("encoded",e),256*e.x+e.y};const Xc=new V;Ge.octEncodeFloat=function(e){return Ge.octEncode(e,Xc),Ge.octPackFloat(Xc)};Ge.octDecodeFloat=function(e,t){p.defined("value",e);const n=e/256,o=Math.floor(n),i=(n-o)*256;return Ge.octDecode(o,i,t)};Ge.octPack=function(e,t,n,o){p.defined("v1",e),p.defined("v2",t),p.defined("v3",n),p.defined("result",o);const i=Ge.octEncodeFloat(e),r=Ge.octEncodeFloat(t),a=Ge.octEncode(n,Xc);return o.x=65536*a.x+i,o.y=65536*a.y+r,o};Ge.octUnpack=function(e,t,n,o){p.defined("packed",e),p.defined("v1",t),p.defined("v2",n),p.defined("v3",o);let i=e.x/65536;const r=Math.floor(i),a=(i-r)*65536;i=e.y/65536;const s=Math.floor(i),c=(i-s)*65536;Ge.octDecodeFloat(a,t),Ge.octDecodeFloat(c,n),Ge.octDecode(r,s,o)};Ge.compressTextureCoordinates=function(e){p.defined("textureCoordinates",e);const t=e.x*4095|0,n=e.y*4095|0;return 4096*t+n};Ge.decompressTextureCoordinates=function(e,t){p.defined("compressed",e),p.defined("result",t);const n=e/4096,o=Math.floor(n);return t.x=o/4095,t.y=(e-o*4096)/4095,t};function ac(e){return e>>1^-(e&1)}Ge.zigZagDeltaDecode=function(e,t,n){p.defined("uBuffer",e),p.defined("vBuffer",t),p.typeOf.number.equals("uBuffer.length","vBuffer.length",e.length,t.length),l(n)&&p.typeOf.number.equals("uBuffer.length","heightBuffer.length",e.length,n.length);const o=e.length;let i=0,r=0,a=0;for(let s=0;s<o;++s)i+=ac(e[s]),r+=ac(t[s]),e[s]=i,t[s]=r,l(n)&&(a+=ac(n[s]),n[s]=a)};Ge.dequantize=function(e,t,n,o){p.defined("typedArray",e),p.defined("componentDatatype",t),p.defined("type",n),p.defined("count",o);const i=L0.getNumberOfComponents(n);let r;switch(t){case ue.BYTE:r=127;break;case ue.UNSIGNED_BYTE:r=255;break;case ue.SHORT:r=32767;break;case ue.UNSIGNED_SHORT:r=65535;break;case ue.INT:r=2147483647;break;case ue.UNSIGNED_INT:r=4294967295;break;default:throw new w(`Cannot dequantize component datatype: ${t}`)}const a=new Float32Array(o*i);for(let s=0;s<o;s++)for(let c=0;c<i;c++){const f=s*i+c;a[f]=Math.max(e[f]/r,-1)}return a};Ge.decodeRGB565=function(e,t){p.defined("typedArray",e);const n=e.length*3;l(t)&&p.typeOf.number.equals("result.length","typedArray.length * 3",t.length,n);const o=e.length;l(t)||(t=new Float32Array(o*3));const i=31,r=63,a=1/31,s=1/63;for(let c=0;c<o;c++){const f=e[c],d=f>>11,u=f>>5&r,m=f&i,_=3*c;t[_]=d*a,t[_+1]=u*s,t[_+2]=m*a}return t};function cn(e){this._ellipsoid=e??be.WGS84,this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(cn.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}});cn.mercatorAngleToGeodeticLatitude=function(e){return T.PI_OVER_TWO-2*Math.atan(Math.exp(-e))};cn.geodeticLatitudeToMercatorAngle=function(e){e>cn.MaximumLatitude?e=cn.MaximumLatitude:e<-cn.MaximumLatitude&&(e=-cn.MaximumLatitude);const t=Math.sin(e);return .5*Math.log((1+t)/(1-t))};cn.MaximumLatitude=cn.mercatorAngleToGeodeticLatitude(Math.PI);cn.prototype.project=function(e,t){const n=this._semimajorAxis,o=e.longitude*n,i=cn.geodeticLatitudeToMercatorAngle(e.latitude)*n,r=e.height;return l(t)?(t.x=o,t.y=i,t.z=r,t):new h(o,i,r)};cn.prototype.unproject=function(e,t){if(!l(e))throw new w("cartesian is required");const n=this._oneOverSemimajorAxis,o=e.x*n,i=cn.mercatorAngleToGeodeticLatitude(e.y*n),r=e.z;return l(t)?(t.longitude=o,t.latitude=i,t.height=r,t):new le(o,i,r)};function sb(){return!0}function Lt(e,t){t=t??"This object was destroyed, i.e., destroy() was called.";function n(){throw new w(t)}for(const o in e)typeof e[o]=="function"&&(e[o]=n);e.isDestroyed=sb}function F0(){if(!l(St._canTransferArrayBuffer)){const e=kf("transferTypedArrayTest");e.postMessage=e.webkitPostMessage??e.postMessage;const t=99,n=new Int8Array([t]);try{e.postMessage({array:n},[n.buffer])}catch{return St._canTransferArrayBuffer=!1,St._canTransferArrayBuffer}St._canTransferArrayBuffer=new Promise(o=>{e.onmessage=function(i){const r=i.data.array,a=l(r)&&r[0]===t;o(a),e.terminate(),St._canTransferArrayBuffer=a}})}return St._canTransferArrayBuffer}const Zc=new Wi;function sc(e){let t;try{t=new Blob([e],{type:"application/javascript"})}catch{const i=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,r=new i;r.append(e),t=r.getBlob("application/javascript")}return(window.URL||window.webkitURL).createObjectURL(t)}function kf(e){const t=new _o(e),n=t.scheme().length!==0&&t.fragment().length===0,o=e.replace(/\.js$/,""),i={};let r,a;if(Bc(e))a=e;else if(!n){const s=xn(`${St._workerModulePrefix}/${o}.js`);Bc(s)&&(a=s)}if(a){const s=`import "${a}";`;return r=sc(s),i.type="module",new Worker(r,i)}if(!n&&typeof CESIUM_WORKERS<"u"){const s=`
      importScripts("${sc(CESIUM_WORKERS)}");
      CesiumWorkers["${o}"]();
    `;return r=sc(s),new Worker(r,i)}if(r=e,n||(r=xn(`${St._workerModulePrefix+o}.js`)),!xt.supportsEsmWebWorkers())throw new mt("This browser is not supported. Please update your browser to continue.");return i.type="module",new Worker(r,i)}async function cb(e,t){const n={modulePath:void 0,wasmBinaryFile:void 0,wasmBinary:void 0};if(!xt.supportsWebAssembly()){if(!l(t.fallbackModulePath))throw new mt(`This browser does not support Web Assembly, and no backup module was provided for ${e._workerPath}`);return n.modulePath=xn(t.fallbackModulePath),n}n.wasmBinaryFile=xn(t.wasmBinaryFile);const o=await se.fetchArrayBuffer({url:n.wasmBinaryFile});return n.wasmBinary=o,n}function St(e,t){this._workerPath=e,this._maximumActiveTasks=t??Number.POSITIVE_INFINITY,this._activeTasks=0,this._nextID=0,this._webAssemblyPromise=void 0}const fb=(e,t,n,o)=>{const i=({data:r})=>{if(r.id===t){if(l(r.error)){let a=r.error;a.name==="RuntimeError"?(a=new mt(r.error.message),a.stack=r.error.stack):a.name==="DeveloperError"?(a=new w(r.error.message),a.stack=r.error.stack):a.name==="Error"&&(a=new Error(r.error.message),a.stack=r.error.stack),Zc.raiseEvent(a),o(a)}else Zc.raiseEvent(),n(r.result);e.removeEventListener("message",i)}};return i},hb=[];async function lb(e,t,n){const o=await Promise.resolve(F0());l(n)?o||(n.length=0):n=hb;const i=e._nextID++,r=new Promise((a,s)=>{e._worker.addEventListener("message",fb(e._worker,i,a,s))});return e._worker.postMessage({id:i,baseUrl:xn.getCesiumBaseUrl().url,parameters:t,canTransferArrayBuffer:o},n),r}async function ub(e,t,n){++e._activeTasks;try{const o=await lb(e,t,n);return--e._activeTasks,o}catch(o){throw--e._activeTasks,o}}St.prototype.scheduleTask=function(e,t){if(l(this._worker)||(this._worker=kf(this._workerPath)),!(this._activeTasks>=this._maximumActiveTasks))return ub(this,e,t)};St.prototype.initWebAssemblyModule=async function(e){if(l(this._webAssemblyPromise))return this._webAssemblyPromise;const t=async()=>{const n=this._worker=kf(this._workerPath),o=await cb(this,e),i=await Promise.resolve(F0());let r;const a=o.wasmBinary;l(a)&&i&&(r=[a]);const s=new Promise((c,f)=>{n.onmessage=function({data:d}){l(d)?c(d.result):f(new mt("Could not configure wasm module"))}});return n.postMessage({canTransferArrayBuffer:i,parameters:{webAssemblyConfig:o}},r),s};return this._webAssemblyPromise=t(),this._webAssemblyPromise};St.prototype.isDestroyed=function(){return!1};St.prototype.destroy=function(){return l(this._worker)&&this._worker.terminate(),Lt(this)};St.taskCompletedEvent=Zc;St._defaultWorkerModulePrefix="Workers/";St._workerModulePrefix=St._defaultWorkerModulePrefix;St._canTransferArrayBuffer=void 0;const Ct={UNSIGNED_BYTE:I.UNSIGNED_BYTE,UNSIGNED_SHORT:I.UNSIGNED_SHORT,UNSIGNED_INT:I.UNSIGNED_INT};Ct.getSizeInBytes=function(e){switch(e){case Ct.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case Ct.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case Ct.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT}throw new w("indexDatatype is required and must be a valid IndexDatatype constant.")};Ct.fromSizeInBytes=function(e){switch(e){case 2:return Ct.UNSIGNED_SHORT;case 4:return Ct.UNSIGNED_INT;case 1:return Ct.UNSIGNED_BYTE;default:throw new w("Size in bytes cannot be mapped to an IndexDatatype")}};Ct.validate=function(e){return l(e)&&(e===Ct.UNSIGNED_BYTE||e===Ct.UNSIGNED_SHORT||e===Ct.UNSIGNED_INT)};Ct.createTypedArray=function(e,t){if(!l(e))throw new w("numberOfVertices is required.");return e>=T.SIXTY_FOUR_KILOBYTES?new Uint32Array(t):new Uint16Array(t)};Ct.createTypedArrayFromArrayBuffer=function(e,t,n,o){if(!l(e))throw new w("numberOfVertices is required.");if(!l(t))throw new w("sourceArray is required.");if(!l(n))throw new w("byteOffset is required.");return e>=T.SIXTY_FOUR_KILOBYTES?new Uint32Array(t,n,o):new Uint16Array(t,n,o)};Ct.fromTypedArray=function(e){if(e instanceof Uint8Array)return Ct.UNSIGNED_BYTE;if(e instanceof Uint16Array)return Ct.UNSIGNED_SHORT;if(e instanceof Uint32Array)return Ct.UNSIGNED_INT;throw new w("array must be a Uint8Array, Uint16Array, or Uint32Array.")};const gt=Object.freeze(Ct),db={NONE:0,GEODESIC:1,RHUMB:2},Ko=Object.freeze(db);function ot(e,t,n,o){this.x=e??0,this.y=t??0,this.width=n??0,this.height=o??0}ot.packedLength=4;ot.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,t[n++]=e.x,t[n++]=e.y,t[n++]=e.width,t[n]=e.height,t};ot.unpack=function(e,t,n){return p.defined("array",e),t=t??0,l(n)||(n=new ot),n.x=e[t++],n.y=e[t++],n.width=e[t++],n.height=e[t],n};ot.fromPoints=function(e,t){if(l(t)||(t=new ot),!l(e)||e.length===0)return t.x=0,t.y=0,t.width=0,t.height=0,t;const n=e.length;let o=e[0].x,i=e[0].y,r=e[0].x,a=e[0].y;for(let s=1;s<n;s++){const c=e[s],f=c.x,d=c.y;o=Math.min(f,o),r=Math.max(f,r),i=Math.min(d,i),a=Math.max(d,a)}return t.x=o,t.y=i,t.width=r-o,t.height=a-i,t};const xl=new bo,mb=new le,pb=new le;ot.fromRectangle=function(e,t,n){if(l(n)||(n=new ot),!l(e))return n.x=0,n.y=0,n.width=0,n.height=0,n;xl._ellipsoid=be.default,t=t??xl;const o=t.project(Se.southwest(e,mb)),i=t.project(Se.northeast(e,pb));return V.subtract(i,o,i),n.x=o.x,n.y=o.y,n.width=i.x,n.height=i.y,n};ot.clone=function(e,t){if(l(e))return l(t)?(t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height,t):new ot(e.x,e.y,e.width,e.height)};ot.union=function(e,t,n){p.typeOf.object("left",e),p.typeOf.object("right",t),l(n)||(n=new ot);const o=Math.min(e.x,t.x),i=Math.min(e.y,t.y),r=Math.max(e.x+e.width,t.x+t.width),a=Math.max(e.y+e.height,t.y+t.height);return n.x=o,n.y=i,n.width=r-o,n.height=a-i,n};ot.expand=function(e,t,n){p.typeOf.object("rectangle",e),p.typeOf.object("point",t),n=ot.clone(e,n);const o=t.x-n.x,i=t.y-n.y;return o>n.width?n.width=o:o<0&&(n.width-=o,n.x=t.x),i>n.height?n.height=i:i<0&&(n.height-=i,n.y=t.y),n};ot.intersect=function(e,t){p.typeOf.object("left",e),p.typeOf.object("right",t);const n=e.x,o=e.y,i=t.x,r=t.y;return n>i+t.width||n+e.width<i||o+e.height<r||o>r+t.height?bt.OUTSIDE:bt.INTERSECTING};ot.equals=function(e,t){return e===t||l(e)&&l(t)&&e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height};ot.prototype.clone=function(e){return ot.clone(this,e)};ot.prototype.intersect=function(e){return ot.intersect(this,e)};ot.prototype.equals=function(e){return ot.equals(this,e)};const _b={NONE:0,TRIANGLES:1,LINES:2,POLYLINES:3},ur=Object.freeze(_b),Dt={POINTS:I.POINTS,LINES:I.LINES,LINE_LOOP:I.LINE_LOOP,LINE_STRIP:I.LINE_STRIP,TRIANGLES:I.TRIANGLES,TRIANGLE_STRIP:I.TRIANGLE_STRIP,TRIANGLE_FAN:I.TRIANGLE_FAN};Dt.isLines=function(e){return e===Dt.LINES||e===Dt.LINE_LOOP||e===Dt.LINE_STRIP};Dt.isTriangles=function(e){return e===Dt.TRIANGLES||e===Dt.TRIANGLE_STRIP||e===Dt.TRIANGLE_FAN};Dt.validate=function(e){return e===Dt.POINTS||e===Dt.LINES||e===Dt.LINE_LOOP||e===Dt.LINE_STRIP||e===Dt.TRIANGLES||e===Dt.TRIANGLE_STRIP||e===Dt.TRIANGLE_FAN};const qe=Object.freeze(Dt);function tt(e){e=e??xe.EMPTY_OBJECT,p.typeOf.object("options.attributes",e.attributes),this.attributes=e.attributes,this.indices=e.indices,this.primitiveType=e.primitiveType??qe.TRIANGLES,this.boundingSphere=e.boundingSphere,this.geometryType=e.geometryType??ur.NONE,this.boundingSphereCV=e.boundingSphereCV,this.offsetAttribute=e.offsetAttribute}tt.computeNumberOfVertices=function(e){p.typeOf.object("geometry",e);let t=-1;for(const n in e.attributes)if(e.attributes.hasOwnProperty(n)&&l(e.attributes[n])&&l(e.attributes[n].values)){const o=e.attributes[n],i=o.values.length/o.componentsPerAttribute;if(t!==i&&t!==-1)throw new w("All attribute lists must have the same number of attributes.");t=i}return t};const gb=new le,yb=new h,Ol=new U,bb=[new le,new le,new le],Eb=[new V,new V,new V],wb=[new V,new V,new V],vb=new h,Tb=new oe,Sb=new U,Ab=new ge;tt._textureCoordinateRotationPoints=function(e,t,n,o){let i;const r=Se.center(o,gb),a=le.toCartesian(r,n,yb),s=Pe.eastNorthUpToFixedFrame(a,n,Ol),c=U.inverse(s,Ol),f=Eb,d=bb;d[0].longitude=o.west,d[0].latitude=o.south,d[1].longitude=o.west,d[1].latitude=o.north,d[2].longitude=o.east,d[2].latitude=o.south;let u=vb;for(i=0;i<3;i++)le.toCartesian(d[i],n,u),u=U.multiplyByPointAsVector(c,u,u),f[i].x=u.x,f[i].y=u.y;const m=oe.fromAxisAngle(h.UNIT_Z,-t,Tb),_=B.fromQuaternion(m,Sb),g=e.length;let y=Number.POSITIVE_INFINITY,E=Number.POSITIVE_INFINITY,A=Number.NEGATIVE_INFINITY,S=Number.NEGATIVE_INFINITY;for(i=0;i<g;i++)u=U.multiplyByPointAsVector(c,e[i],u),u=B.multiplyByVector(_,u,u),y=Math.min(y,u.x),E=Math.min(E,u.y),A=Math.max(A,u.x),S=Math.max(S,u.y);const O=ge.fromRotation(t,Ab),M=wb;M[0].x=y,M[0].y=E,M[1].x=y,M[1].y=S,M[2].x=A,M[2].y=E;const R=f[0],N=f[2].x-R.x,F=f[1].y-R.y;for(i=0;i<3;i++){const X=M[i];ge.multiplyByVector(O,X,X),X.x=(X.x-R.x)/N,X.y=(X.y-R.y)/F}const z=M[0],G=M[1],q=M[2],k=new Array(6);return V.pack(z,k),V.pack(G,k,2),V.pack(q,k,4),k};function Ue(e){if(e=e??xe.EMPTY_OBJECT,!l(e.componentDatatype))throw new w("options.componentDatatype is required.");if(!l(e.componentsPerAttribute))throw new w("options.componentsPerAttribute is required.");if(e.componentsPerAttribute<1||e.componentsPerAttribute>4)throw new w("options.componentsPerAttribute must be between 1 and 4.");if(!l(e.values))throw new w("options.values is required.");this.componentDatatype=e.componentDatatype,this.componentsPerAttribute=e.componentsPerAttribute,this.normalize=e.normalize??!1,this.values=e.values}function Wr(e){e=e??xe.EMPTY_OBJECT,this.position=e.position,this.normal=e.normal,this.st=e.st,this.bitangent=e.bitangent,this.tangent=e.tangent,this.color=e.color}const xb={NONE:0,TOP:1,ALL:2},ss=Object.freeze(xb);function ze(e){e=e??xe.EMPTY_OBJECT,this.position=e.position??!1,this.normal=e.normal??!1,this.st=e.st??!1,this.bitangent=e.bitangent??!1,this.tangent=e.tangent??!1,this.color=e.color??!1}ze.POSITION_ONLY=Object.freeze(new ze({position:!0}));ze.POSITION_AND_NORMAL=Object.freeze(new ze({position:!0,normal:!0}));ze.POSITION_NORMAL_AND_ST=Object.freeze(new ze({position:!0,normal:!0,st:!0}));ze.POSITION_AND_ST=Object.freeze(new ze({position:!0,st:!0}));ze.POSITION_AND_COLOR=Object.freeze(new ze({position:!0,color:!0}));ze.ALL=Object.freeze(new ze({position:!0,normal:!0,st:!0,tangent:!0,bitangent:!0}));ze.DEFAULT=ze.POSITION_NORMAL_AND_ST;ze.packedLength=6;ze.pack=function(e,t,n){if(!l(e))throw new w("value is required");if(!l(t))throw new w("array is required");return n=n??0,t[n++]=e.position?1:0,t[n++]=e.normal?1:0,t[n++]=e.st?1:0,t[n++]=e.tangent?1:0,t[n++]=e.bitangent?1:0,t[n]=e.color?1:0,t};ze.unpack=function(e,t,n){if(!l(e))throw new w("array is required");return t=t??0,l(n)||(n=new ze),n.position=e[t++]===1,n.normal=e[t++]===1,n.st=e[t++]===1,n.tangent=e[t++]===1,n.bitangent=e[t++]===1,n.color=e[t]===1,n};ze.clone=function(e,t){if(l(e))return l(t)||(t=new ze),t.position=e.position,t.normal=e.normal,t.st=e.st,t.tangent=e.tangent,t.bitangent=e.bitangent,t.color=e.color,t};const Ob=new h;function hn(e){e=e??xe.EMPTY_OBJECT;const t=e.minimum,n=e.maximum;if(p.typeOf.object("min",t),p.typeOf.object("max",n),l(e.offsetAttribute)&&e.offsetAttribute===ss.TOP)throw new w("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");const o=e.vertexFormat??ze.DEFAULT;this._minimum=h.clone(t),this._maximum=h.clone(n),this._vertexFormat=o,this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxGeometry"}hn.fromDimensions=function(e){e=e??xe.EMPTY_OBJECT;const t=e.dimensions;p.typeOf.object("dimensions",t),p.typeOf.number.greaterThanOrEquals("dimensions.x",t.x,0),p.typeOf.number.greaterThanOrEquals("dimensions.y",t.y,0),p.typeOf.number.greaterThanOrEquals("dimensions.z",t.z,0);const n=h.multiplyByScalar(t,.5,new h);return new hn({minimum:h.negate(n,new h),maximum:n,vertexFormat:e.vertexFormat,offsetAttribute:e.offsetAttribute})};hn.fromAxisAlignedBoundingBox=function(e){return p.typeOf.object("boundingBox",e),new hn({minimum:e.minimum,maximum:e.maximum})};hn.packedLength=2*h.packedLength+ze.packedLength+1;hn.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,h.pack(e._minimum,t,n),h.pack(e._maximum,t,n+h.packedLength),ze.pack(e._vertexFormat,t,n+2*h.packedLength),t[n+2*h.packedLength+ze.packedLength]=e._offsetAttribute??-1,t};const B0=new h,U0=new h,G0=new ze,Cl={minimum:B0,maximum:U0,vertexFormat:G0,offsetAttribute:void 0};hn.unpack=function(e,t,n){p.defined("array",e),t=t??0;const o=h.unpack(e,t,B0),i=h.unpack(e,t+h.packedLength,U0),r=ze.unpack(e,t+2*h.packedLength,G0),a=e[t+2*h.packedLength+ze.packedLength];return l(n)?(n._minimum=h.clone(o,n._minimum),n._maximum=h.clone(i,n._maximum),n._vertexFormat=ze.clone(r,n._vertexFormat),n._offsetAttribute=a===-1?void 0:a,n):(Cl.offsetAttribute=a===-1?void 0:a,new hn(Cl))};hn.createGeometry=function(e){const t=e._minimum,n=e._maximum,o=e._vertexFormat;if(h.equals(t,n))return;const i=new Wr;let r,a;if(o.position&&(o.st||o.normal||o.tangent||o.bitangent)){if(o.position&&(a=new Float64Array(6*4*3),a[0]=t.x,a[1]=t.y,a[2]=n.z,a[3]=n.x,a[4]=t.y,a[5]=n.z,a[6]=n.x,a[7]=n.y,a[8]=n.z,a[9]=t.x,a[10]=n.y,a[11]=n.z,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=n.x,a[16]=t.y,a[17]=t.z,a[18]=n.x,a[19]=n.y,a[20]=t.z,a[21]=t.x,a[22]=n.y,a[23]=t.z,a[24]=n.x,a[25]=t.y,a[26]=t.z,a[27]=n.x,a[28]=n.y,a[29]=t.z,a[30]=n.x,a[31]=n.y,a[32]=n.z,a[33]=n.x,a[34]=t.y,a[35]=n.z,a[36]=t.x,a[37]=t.y,a[38]=t.z,a[39]=t.x,a[40]=n.y,a[41]=t.z,a[42]=t.x,a[43]=n.y,a[44]=n.z,a[45]=t.x,a[46]=t.y,a[47]=n.z,a[48]=t.x,a[49]=n.y,a[50]=t.z,a[51]=n.x,a[52]=n.y,a[53]=t.z,a[54]=n.x,a[55]=n.y,a[56]=n.z,a[57]=t.x,a[58]=n.y,a[59]=n.z,a[60]=t.x,a[61]=t.y,a[62]=t.z,a[63]=n.x,a[64]=t.y,a[65]=t.z,a[66]=n.x,a[67]=t.y,a[68]=n.z,a[69]=t.x,a[70]=t.y,a[71]=n.z,i.position=new Ue({componentDatatype:ue.DOUBLE,componentsPerAttribute:3,values:a})),o.normal){const f=new Float32Array(72);f[0]=0,f[1]=0,f[2]=1,f[3]=0,f[4]=0,f[5]=1,f[6]=0,f[7]=0,f[8]=1,f[9]=0,f[10]=0,f[11]=1,f[12]=0,f[13]=0,f[14]=-1,f[15]=0,f[16]=0,f[17]=-1,f[18]=0,f[19]=0,f[20]=-1,f[21]=0,f[22]=0,f[23]=-1,f[24]=1,f[25]=0,f[26]=0,f[27]=1,f[28]=0,f[29]=0,f[30]=1,f[31]=0,f[32]=0,f[33]=1,f[34]=0,f[35]=0,f[36]=-1,f[37]=0,f[38]=0,f[39]=-1,f[40]=0,f[41]=0,f[42]=-1,f[43]=0,f[44]=0,f[45]=-1,f[46]=0,f[47]=0,f[48]=0,f[49]=1,f[50]=0,f[51]=0,f[52]=1,f[53]=0,f[54]=0,f[55]=1,f[56]=0,f[57]=0,f[58]=1,f[59]=0,f[60]=0,f[61]=-1,f[62]=0,f[63]=0,f[64]=-1,f[65]=0,f[66]=0,f[67]=-1,f[68]=0,f[69]=0,f[70]=-1,f[71]=0,i.normal=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:3,values:f})}if(o.st){const f=new Float32Array(48);f[0]=0,f[1]=0,f[2]=1,f[3]=0,f[4]=1,f[5]=1,f[6]=0,f[7]=1,f[8]=1,f[9]=0,f[10]=0,f[11]=0,f[12]=0,f[13]=1,f[14]=1,f[15]=1,f[16]=0,f[17]=0,f[18]=1,f[19]=0,f[20]=1,f[21]=1,f[22]=0,f[23]=1,f[24]=1,f[25]=0,f[26]=0,f[27]=0,f[28]=0,f[29]=1,f[30]=1,f[31]=1,f[32]=1,f[33]=0,f[34]=0,f[35]=0,f[36]=0,f[37]=1,f[38]=1,f[39]=1,f[40]=0,f[41]=0,f[42]=1,f[43]=0,f[44]=1,f[45]=1,f[46]=0,f[47]=1,i.st=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:2,values:f})}if(o.tangent){const f=new Float32Array(72);f[0]=1,f[1]=0,f[2]=0,f[3]=1,f[4]=0,f[5]=0,f[6]=1,f[7]=0,f[8]=0,f[9]=1,f[10]=0,f[11]=0,f[12]=-1,f[13]=0,f[14]=0,f[15]=-1,f[16]=0,f[17]=0,f[18]=-1,f[19]=0,f[20]=0,f[21]=-1,f[22]=0,f[23]=0,f[24]=0,f[25]=1,f[26]=0,f[27]=0,f[28]=1,f[29]=0,f[30]=0,f[31]=1,f[32]=0,f[33]=0,f[34]=1,f[35]=0,f[36]=0,f[37]=-1,f[38]=0,f[39]=0,f[40]=-1,f[41]=0,f[42]=0,f[43]=-1,f[44]=0,f[45]=0,f[46]=-1,f[47]=0,f[48]=-1,f[49]=0,f[50]=0,f[51]=-1,f[52]=0,f[53]=0,f[54]=-1,f[55]=0,f[56]=0,f[57]=-1,f[58]=0,f[59]=0,f[60]=1,f[61]=0,f[62]=0,f[63]=1,f[64]=0,f[65]=0,f[66]=1,f[67]=0,f[68]=0,f[69]=1,f[70]=0,f[71]=0,i.tangent=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:3,values:f})}if(o.bitangent){const f=new Float32Array(72);f[0]=0,f[1]=1,f[2]=0,f[3]=0,f[4]=1,f[5]=0,f[6]=0,f[7]=1,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=0,f[13]=1,f[14]=0,f[15]=0,f[16]=1,f[17]=0,f[18]=0,f[19]=1,f[20]=0,f[21]=0,f[22]=1,f[23]=0,f[24]=0,f[25]=0,f[26]=1,f[27]=0,f[28]=0,f[29]=1,f[30]=0,f[31]=0,f[32]=1,f[33]=0,f[34]=0,f[35]=1,f[36]=0,f[37]=0,f[38]=1,f[39]=0,f[40]=0,f[41]=1,f[42]=0,f[43]=0,f[44]=1,f[45]=0,f[46]=0,f[47]=1,f[48]=0,f[49]=0,f[50]=1,f[51]=0,f[52]=0,f[53]=1,f[54]=0,f[55]=0,f[56]=1,f[57]=0,f[58]=0,f[59]=1,f[60]=0,f[61]=0,f[62]=1,f[63]=0,f[64]=0,f[65]=1,f[66]=0,f[67]=0,f[68]=1,f[69]=0,f[70]=0,f[71]=1,i.bitangent=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:3,values:f})}r=new Uint16Array(6*2*3),r[0]=0,r[1]=1,r[2]=2,r[3]=0,r[4]=2,r[5]=3,r[6]=6,r[7]=5,r[8]=4,r[9]=7,r[10]=6,r[11]=4,r[12]=8,r[13]=9,r[14]=10,r[15]=8,r[16]=10,r[17]=11,r[18]=14,r[19]=13,r[20]=12,r[21]=15,r[22]=14,r[23]=12,r[24]=18,r[25]=17,r[26]=16,r[27]=19,r[28]=18,r[29]=16,r[30]=20,r[31]=21,r[32]=22,r[33]=20,r[34]=22,r[35]=23}else a=new Float64Array(8*3),a[0]=t.x,a[1]=t.y,a[2]=t.z,a[3]=n.x,a[4]=t.y,a[5]=t.z,a[6]=n.x,a[7]=n.y,a[8]=t.z,a[9]=t.x,a[10]=n.y,a[11]=t.z,a[12]=t.x,a[13]=t.y,a[14]=n.z,a[15]=n.x,a[16]=t.y,a[17]=n.z,a[18]=n.x,a[19]=n.y,a[20]=n.z,a[21]=t.x,a[22]=n.y,a[23]=n.z,i.position=new Ue({componentDatatype:ue.DOUBLE,componentsPerAttribute:3,values:a}),r=new Uint16Array(6*2*3),r[0]=4,r[1]=5,r[2]=6,r[3]=4,r[4]=6,r[5]=7,r[6]=1,r[7]=0,r[8]=3,r[9]=1,r[10]=3,r[11]=2,r[12]=1,r[13]=6,r[14]=5,r[15]=1,r[16]=2,r[17]=6,r[18]=2,r[19]=3,r[20]=7,r[21]=2,r[22]=7,r[23]=6,r[24]=3,r[25]=0,r[26]=4,r[27]=3,r[28]=4,r[29]=7,r[30]=0,r[31]=1,r[32]=5,r[33]=0,r[34]=5,r[35]=4;const s=h.subtract(n,t,Ob),c=h.magnitude(s)*.5;if(l(e._offsetAttribute)){const f=a.length,d=e._offsetAttribute===ss.NONE?0:1,u=new Uint8Array(f/3).fill(d);i.applyOffset=new Ue({componentDatatype:ue.UNSIGNED_BYTE,componentsPerAttribute:1,values:u})}return new tt({attributes:i,indices:r,primitiveType:qe.TRIANGLES,boundingSphere:new ie(h.ZERO,c),offsetAttribute:e._offsetAttribute})};let cc;hn.getUnitBox=function(){return l(cc)||(cc=hn.createGeometry(hn.fromDimensions({dimensions:new h(1,1,1),vertexFormat:ze.POSITION_ONLY}))),cc};function Kc(e){if(e=e??xe.EMPTY_OBJECT,!l(e.geometry))throw new w("options.geometry is required.");this.geometry=e.geometry,this.modelMatrix=U.clone(e.modelMatrix??U.IDENTITY),this.id=e.id,this.pickPrimitive=e.pickPrimitive,this.attributes=e.attributes??{},this.westHemisphereGeometry=void 0,this.eastHemisphereGeometry=void 0}const Ml=new h,Rl=new h,Pl=new h;function Cb(e,t,n,o,i){p.defined("point",e),p.defined("p0",t),p.defined("p1",n),p.defined("p2",o),l(i)||(i=new h);let r,a,s,c,f,d,u,m;if(l(t.z)){if(h.equalsEpsilon(e,t,T.EPSILON14))return h.clone(h.UNIT_X,i);if(h.equalsEpsilon(e,n,T.EPSILON14))return h.clone(h.UNIT_Y,i);if(h.equalsEpsilon(e,o,T.EPSILON14))return h.clone(h.UNIT_Z,i);r=h.subtract(n,t,Ml),a=h.subtract(o,t,Rl),s=h.subtract(e,t,Pl),c=h.dot(r,r),f=h.dot(r,a),d=h.dot(r,s),u=h.dot(a,a),m=h.dot(a,s)}else{if(V.equalsEpsilon(e,t,T.EPSILON14))return h.clone(h.UNIT_X,i);if(V.equalsEpsilon(e,n,T.EPSILON14))return h.clone(h.UNIT_Y,i);if(V.equalsEpsilon(e,o,T.EPSILON14))return h.clone(h.UNIT_Z,i);r=V.subtract(n,t,Ml),a=V.subtract(o,t,Rl),s=V.subtract(e,t,Pl),c=V.dot(r,r),f=V.dot(r,a),d=V.dot(r,s),u=V.dot(a,a),m=V.dot(a,s)}i.y=u*d-f*m,i.z=c*m-f*d;const _=c*u-f*f;if(_!==0)return i.y/=_,i.z/=_,i.x=1-i.y-i.z,i}function at(){this.high=h.clone(h.ZERO),this.low=h.clone(h.ZERO)}at.encode=function(e,t){p.typeOf.number("value",e),l(t)||(t={high:0,low:0});let n;return e>=0?(n=Math.floor(e/65536)*65536,t.high=n,t.low=e-n):(n=Math.floor(-e/65536)*65536,t.high=-n,t.low=e+n),t};const ao={high:0,low:0};at.fromCartesian=function(e,t){p.typeOf.object("cartesian",e),l(t)||(t=new at);const n=t.high,o=t.low;return at.encode(e.x,ao),n.x=ao.high,o.x=ao.low,at.encode(e.y,ao),n.y=ao.high,o.y=ao.low,at.encode(e.z,ao),n.z=ao.high,o.z=ao.low,t};const fc=new at;at.writeElements=function(e,t,n){p.defined("cartesianArray",t),p.typeOf.number("index",n),p.typeOf.number.greaterThanOrEquals("index",n,0),at.fromCartesian(e,fc);const o=fc.high,i=fc.low;t[n]=o.x,t[n+1]=o.y,t[n+2]=o.z,t[n+3]=i.x,t[n+4]=i.y,t[n+5]=i.z};const jf={};jf.calculateACMR=function(e){e=e??xe.EMPTY_OBJECT;const t=e.indices;let n=e.maximumIndex;const o=e.cacheSize??24;if(!l(t))throw new w("indices is required.");const i=t.length;if(i<3||i%3!==0)throw new w("indices length must be a multiple of three.");if(n<=0)throw new w("maximumIndex must be greater than zero.");if(o<3)throw new w("cacheSize must be greater than two.");if(!l(n)){n=0;let s=0,c=t[s];for(;s<i;)c>n&&(n=c),++s,c=t[s]}const r=[];for(let s=0;s<n+1;s++)r[s]=0;let a=o+1;for(let s=0;s<i;++s)a-r[t[s]]>o&&(r[t[s]]=a,++a);return(a-o+1)/(i/3)};jf.tipsify=function(e){e=e??xe.EMPTY_OBJECT;const t=e.indices,n=e.maximumIndex,o=e.cacheSize??24;let i;function r(k,X,b,v){for(;X.length>=1;){const C=X[X.length-1];if(X.splice(X.length-1,1),k[C].numLiveTriangles>0)return C}for(;i<v;){if(k[i].numLiveTriangles>0)return++i,i-1;++i}return-1}function a(k,X,b,v,C,D,H){let Z=-1,J,K=-1,te=0;for(;te<b.length;){const he=b[te];v[he].numLiveTriangles&&(J=0,C-v[he].timeStamp+2*v[he].numLiveTriangles<=X&&(J=C-v[he].timeStamp),(J>K||K===-1)&&(K=J,Z=he)),++te}return Z===-1?r(v,D,k,H):Z}if(!l(t))throw new w("indices is required.");const s=t.length;if(s<3||s%3!==0)throw new w("indices length must be a multiple of three.");if(n<=0)throw new w("maximumIndex must be greater than zero.");if(o<3)throw new w("cacheSize must be greater than two.");let c=0,f=0,d=t[f];const u=s;if(l(n))c=n+1;else{for(;f<u;)d>c&&(c=d),++f,d=t[f];if(c===-1)return 0;++c}const m=[];let _;for(_=0;_<c;_++)m[_]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};f=0;let g=0;for(;f<u;)m[t[f]].vertexTriangles.push(g),++m[t[f]].numLiveTriangles,m[t[f+1]].vertexTriangles.push(g),++m[t[f+1]].numLiveTriangles,m[t[f+2]].vertexTriangles.push(g),++m[t[f+2]].numLiveTriangles,++g,f+=3;let y=0,E=o+1;i=1;let A=[];const S=[];let O,M,R=0;const N=[],F=s/3,z=[];for(_=0;_<F;_++)z[_]=!1;let G,q;for(;y!==-1;){A=[],M=m[y],q=M.vertexTriangles.length;for(let k=0;k<q;++k)if(g=M.vertexTriangles[k],!z[g]){z[g]=!0,f=g+g+g;for(let X=0;X<3;++X)G=t[f],A.push(G),S.push(G),N[R]=G,++R,O=m[G],--O.numLiveTriangles,E-O.timeStamp>o&&(O.timeStamp=E,++E),++f}y=a(t,o,A,m,E,S,c)}return N};const We={};function cs(e,t,n,o,i){e[t++]=n,e[t++]=o,e[t++]=o,e[t++]=i,e[t++]=i,e[t]=n}function Mb(e){const t=e.length,n=t/3*6,o=gt.createTypedArray(t,n);let i=0;for(let r=0;r<t;r+=3,i+=6)cs(o,i,e[r],e[r+1],e[r+2]);return o}function Rb(e){const t=e.length;if(t>=3){const n=(t-2)*6,o=gt.createTypedArray(t,n);cs(o,0,e[0],e[1],e[2]);let i=6;for(let r=3;r<t;++r,i+=6)cs(o,i,e[r-1],e[r],e[r-2]);return o}return new Uint16Array}function Pb(e){if(e.length>0){const t=e.length-1,n=(t-1)*6,o=gt.createTypedArray(t,n),i=e[0];let r=0;for(let a=1;a<t;++a,r+=6)cs(o,r,i,e[a],e[a+1]);return o}return new Uint16Array}We.toWireframe=function(e){if(!l(e))throw new w("geometry is required.");const t=e.indices;if(l(t)){switch(e.primitiveType){case qe.TRIANGLES:e.indices=Mb(t);break;case qe.TRIANGLE_STRIP:e.indices=Rb(t);break;case qe.TRIANGLE_FAN:e.indices=Pb(t);break;default:throw new w("geometry.primitiveType must be TRIANGLES, TRIANGLE_STRIP, or TRIANGLE_FAN.")}e.primitiveType=qe.LINES}return e};We.createLineSegmentsForVectors=function(e,t,n){if(t=t??"normal",!l(e))throw new w("geometry is required.");if(!l(e.attributes.position))throw new w("geometry.attributes.position is required.");if(!l(e.attributes[t]))throw new w(`geometry.attributes must have an attribute with the same name as the attributeName parameter, ${t}.`);n=n??1e4;const o=e.attributes.position.values,i=e.attributes[t].values,r=o.length,a=new Float64Array(2*r);let s=0;for(let d=0;d<r;d+=3)a[s++]=o[d],a[s++]=o[d+1],a[s++]=o[d+2],a[s++]=o[d]+i[d]*n,a[s++]=o[d+1]+i[d+1]*n,a[s++]=o[d+2]+i[d+2]*n;let c;const f=e.boundingSphere;return l(f)&&(c=new ie(f.center,f.radius+n)),new tt({attributes:{position:new Ue({componentDatatype:ue.DOUBLE,componentsPerAttribute:3,values:a})},primitiveType:qe.LINES,boundingSphere:c})};We.createAttributeLocations=function(e){if(!l(e))throw new w("geometry is required.");const t=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],n=e.attributes,o={};let i=0,r;const a=t.length;for(r=0;r<a;++r){const s=t[r];l(n[s])&&(o[s]=i++)}for(const s in n)n.hasOwnProperty(s)&&!l(o[s])&&(o[s]=i++);return o};We.reorderForPreVertexCache=function(e){if(!l(e))throw new w("geometry is required.");const t=tt.computeNumberOfVertices(e),n=e.indices;if(l(n)){const o=new Int32Array(t);for(let m=0;m<t;m++)o[m]=-1;const i=n,r=i.length,a=gt.createTypedArray(t,r);let s=0,c=0,f=0,d;for(;s<r;)d=o[i[s]],d!==-1?a[c]=d:(d=i[s],o[d]=f,a[c]=f,++f),++s,++c;e.indices=a;const u=e.attributes;for(const m in u)if(u.hasOwnProperty(m)&&l(u[m])&&l(u[m].values)){const _=u[m],g=_.values;let y=0;const E=_.componentsPerAttribute,A=ue.createTypedArray(_.componentDatatype,f*E);for(;y<t;){const S=o[y];if(S!==-1)for(let O=0;O<E;O++)A[E*S+O]=g[E*y+O];++y}_.values=A}}return e};We.reorderForPostVertexCache=function(e,t){if(!l(e))throw new w("geometry is required.");const n=e.indices;if(e.primitiveType===qe.TRIANGLES&&l(n)){const o=n.length;let i=0;for(let r=0;r<o;r++)n[r]>i&&(i=n[r]);e.indices=jf.tipsify({indices:n,maximumIndex:i,cacheSize:t})}return e};function Il(e){const t={};for(const n in e)if(e.hasOwnProperty(n)&&l(e[n])&&l(e[n].values)){const o=e[n];t[n]=new Ue({componentDatatype:o.componentDatatype,componentsPerAttribute:o.componentsPerAttribute,normalize:o.normalize,values:[]})}return t}function Ib(e,t,n){for(const o in t)if(t.hasOwnProperty(o)&&l(t[o])&&l(t[o].values)){const i=t[o];for(let r=0;r<i.componentsPerAttribute;++r)e[o].values.push(i.values[n*i.componentsPerAttribute+r])}}We.fitToUnsignedShortIndices=function(e){if(!l(e))throw new w("geometry is required.");if(l(e.indices)&&e.primitiveType!==qe.TRIANGLES&&e.primitiveType!==qe.LINES&&e.primitiveType!==qe.POINTS)throw new w("geometry.primitiveType must equal to PrimitiveType.TRIANGLES, PrimitiveType.LINES, or PrimitiveType.POINTS.");const t=[],n=tt.computeNumberOfVertices(e);if(l(e.indices)&&n>=T.SIXTY_FOUR_KILOBYTES){let o=[],i=[],r=0,a=Il(e.attributes);const s=e.indices,c=s.length;let f;e.primitiveType===qe.TRIANGLES?f=3:e.primitiveType===qe.LINES?f=2:e.primitiveType===qe.POINTS&&(f=1);for(let d=0;d<c;d+=f){for(let u=0;u<f;++u){const m=s[d+u];let _=o[m];l(_)||(_=r++,o[m]=_,Ib(a,e.attributes,m)),i.push(_)}r+f>=T.SIXTY_FOUR_KILOBYTES&&(t.push(new tt({attributes:a,indices:i,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV})),o=[],i=[],r=0,a=Il(e.attributes))}i.length!==0&&t.push(new tt({attributes:a,indices:i,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV}))}else t.push(e);return t};const zl=new h,zb=new le;We.projectTo2D=function(e,t,n,o,i){if(!l(e))throw new w("geometry is required.");if(!l(t))throw new w("attributeName is required.");if(!l(n))throw new w("attributeName3D is required.");if(!l(o))throw new w("attributeName2D is required.");if(!l(e.attributes[t]))throw new w(`geometry must have attribute matching the attributeName argument: ${t}.`);if(e.attributes[t].componentDatatype!==ue.DOUBLE)throw new w("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");const r=e.attributes[t];i=l(i)?i:new bo;const a=i.ellipsoid,s=r.values,c=new Float64Array(s.length);let f=0;for(let d=0;d<s.length;d+=3){const u=h.fromArray(s,d,zl),m=a.cartesianToCartographic(u,zb);if(!l(m))throw new w(`Could not project point (${u.x}, ${u.y}, ${u.z}) to 2D.`);const _=i.project(m,zl);c[f++]=_.x,c[f++]=_.y,c[f++]=_.z}return e.attributes[n]=r,e.attributes[o]=new Ue({componentDatatype:ue.DOUBLE,componentsPerAttribute:3,values:c}),delete e.attributes[t],e};const hc={high:0,low:0};We.encodeAttribute=function(e,t,n,o){if(!l(e))throw new w("geometry is required.");if(!l(t))throw new w("attributeName is required.");if(!l(n))throw new w("attributeHighName is required.");if(!l(o))throw new w("attributeLowName is required.");if(!l(e.attributes[t]))throw new w(`geometry must have attribute matching the attributeName argument: ${t}.`);if(e.attributes[t].componentDatatype!==ue.DOUBLE)throw new w("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");const i=e.attributes[t],r=i.values,a=r.length,s=new Float32Array(a),c=new Float32Array(a);for(let d=0;d<a;++d)at.encode(r[d],hc),s[d]=hc.high,c[d]=hc.low;const f=i.componentsPerAttribute;return e.attributes[n]=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:f,values:s}),e.attributes[o]=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:f,values:c}),delete e.attributes[t],e};let In=new h;function lc(e,t){if(l(t)){const n=t.values,o=n.length;for(let i=0;i<o;i+=3)h.unpack(n,i,In),U.multiplyByPoint(e,In,In),h.pack(In,n,i)}}function uc(e,t){if(l(t)){const n=t.values,o=n.length;for(let i=0;i<o;i+=3)h.unpack(n,i,In),B.multiplyByVector(e,In,In),In=h.normalize(In,In),h.pack(In,n,i)}}const Ta=new U,Sa=new B;We.transformToWorldCoordinates=function(e){if(!l(e))throw new w("instance is required.");const t=e.modelMatrix;if(U.equals(t,U.IDENTITY))return e;const n=e.geometry.attributes;lc(t,n.position),lc(t,n.prevPosition),lc(t,n.nextPosition),(l(n.normal)||l(n.tangent)||l(n.bitangent))&&(U.inverse(t,Ta),U.transpose(Ta,Ta),U.getMatrix3(Ta,Sa),uc(Sa,n.normal),uc(Sa,n.tangent),uc(Sa,n.bitangent));const o=e.geometry.boundingSphere;return l(o)&&(e.geometry.boundingSphere=ie.transform(o,t,o)),e.modelMatrix=U.clone(U.IDENTITY),e};function Nb(e,t){const n=e.length,o={},i=e[0][t].attributes;let r;for(r in i)if(i.hasOwnProperty(r)&&l(i[r])&&l(i[r].values)){const a=i[r];let s=a.values.length,c=!0;for(let f=1;f<n;++f){const d=e[f][t].attributes[r];if(!l(d)||a.componentDatatype!==d.componentDatatype||a.componentsPerAttribute!==d.componentsPerAttribute||a.normalize!==d.normalize){c=!1;break}s+=d.values.length}c&&(o[r]=new Ue({componentDatatype:a.componentDatatype,componentsPerAttribute:a.componentsPerAttribute,normalize:a.normalize,values:ue.createTypedArray(a.componentDatatype,s)}))}return o}const Db=new h;function dc(e,t){const n=e.length;let o,i,r,a;const s=e[0].modelMatrix,c=l(e[0][t].indices),f=e[0][t].primitiveType;for(i=1;i<n;++i){if(!U.equals(e[i].modelMatrix,s))throw new w("All instances must have the same modelMatrix.");if(l(e[i][t].indices)!==c)throw new w("All instance geometries must have an indices or not have one.");if(e[i][t].primitiveType!==f)throw new w("All instance geometries must have the same primitiveType.")}const d=Nb(e,t);let u,m,_;for(o in d)if(d.hasOwnProperty(o))for(u=d[o].values,a=0,i=0;i<n;++i)for(m=e[i][t].attributes[o].values,_=m.length,r=0;r<_;++r)u[a++]=m[r];let g;if(c){let S=0;for(i=0;i<n;++i)S+=e[i][t].indices.length;const O=tt.computeNumberOfVertices(new tt({attributes:d,primitiveType:qe.POINTS})),M=gt.createTypedArray(O,S);let R=0,N=0;for(i=0;i<n;++i){const F=e[i][t].indices,z=F.length;for(a=0;a<z;++a)M[R++]=N+F[a];N+=tt.computeNumberOfVertices(e[i][t])}g=M}let y=new h,E=0,A;for(i=0;i<n;++i){if(A=e[i][t].boundingSphere,!l(A)){y=void 0;break}h.add(A.center,y,y)}if(l(y))for(h.divideByScalar(y,n,y),i=0;i<n;++i){A=e[i][t].boundingSphere;const S=h.magnitude(h.subtract(A.center,y,Db))+A.radius;S>E&&(E=S)}return new tt({attributes:d,indices:g,primitiveType:f,boundingSphere:l(y)?new ie(y,E):void 0})}We.combineInstances=function(e){if(!l(e)||e.length<1)throw new w("instances is required and must have length greater than zero.");const t=[],n=[],o=e.length;for(let r=0;r<o;++r){const a=e[r];l(a.geometry)?t.push(a):l(a.westHemisphereGeometry)&&l(a.eastHemisphereGeometry)&&n.push(a)}const i=[];return t.length>0&&i.push(dc(t,"geometry")),n.length>0&&(i.push(dc(n,"westHemisphereGeometry")),i.push(dc(n,"eastHemisphereGeometry"))),i};const bn=new h,ir=new h,pi=new h,_i=new h;We.computeNormal=function(e){if(!l(e))throw new w("geometry is required.");if(!l(e.attributes.position)||!l(e.attributes.position.values))throw new w("geometry.attributes.position.values is required.");if(!l(e.indices))throw new w("geometry.indices is required.");if(e.indices.length<2||e.indices.length%3!==0)throw new w("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==qe.TRIANGLES)throw new w("geometry.primitiveType must be PrimitiveType.TRIANGLES.");const t=e.indices,n=e.attributes,o=n.position.values,i=n.position.values.length/3,r=t.length,a=new Array(i),s=new Array(r/3),c=new Array(r);let f;for(f=0;f<i;f++)a[f]={indexOffset:0,count:0,currentCount:0};let d=0;for(f=0;f<r;f+=3){const g=t[f],y=t[f+1],E=t[f+2],A=g*3,S=y*3,O=E*3;ir.x=o[A],ir.y=o[A+1],ir.z=o[A+2],pi.x=o[S],pi.y=o[S+1],pi.z=o[S+2],_i.x=o[O],_i.y=o[O+1],_i.z=o[O+2],a[g].count++,a[y].count++,a[E].count++,h.subtract(pi,ir,pi),h.subtract(_i,ir,_i),s[d]=h.cross(pi,_i,new h),d++}let u=0;for(f=0;f<i;f++)a[f].indexOffset+=u,u+=a[f].count;d=0;let m;for(f=0;f<r;f+=3){m=a[t[f]];let g=m.indexOffset+m.currentCount;c[g]=d,m.currentCount++,m=a[t[f+1]],g=m.indexOffset+m.currentCount,c[g]=d,m.currentCount++,m=a[t[f+2]],g=m.indexOffset+m.currentCount,c[g]=d,m.currentCount++,d++}const _=new Float32Array(i*3);for(f=0;f<i;f++){const g=f*3;if(m=a[f],h.clone(h.ZERO,bn),m.count>0){for(d=0;d<m.count;d++)h.add(bn,s[c[m.indexOffset+d]],bn);h.equalsEpsilon(h.ZERO,bn,T.EPSILON10)&&h.clone(s[c[m.indexOffset]],bn)}h.equalsEpsilon(h.ZERO,bn,T.EPSILON10)&&(bn.z=1),h.normalize(bn,bn),_[g]=bn.x,_[g+1]=bn.y,_[g+2]=bn.z}return e.attributes.normal=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:3,values:_}),e};const Lb=new h,Nl=new h,Fb=new h;We.computeTangentAndBitangent=function(e){if(!l(e))throw new w("geometry is required.");const t=e.attributes,n=e.indices;if(!l(t.position)||!l(t.position.values))throw new w("geometry.attributes.position.values is required.");if(!l(t.normal)||!l(t.normal.values))throw new w("geometry.attributes.normal.values is required.");if(!l(t.st)||!l(t.st.values))throw new w("geometry.attributes.st.values is required.");if(!l(n))throw new w("geometry.indices is required.");if(n.length<2||n.length%3!==0)throw new w("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==qe.TRIANGLES)throw new w("geometry.primitiveType must be PrimitiveType.TRIANGLES.");const o=e.attributes.position.values,i=e.attributes.normal.values,r=e.attributes.st.values,a=e.attributes.position.values.length/3,s=n.length,c=new Array(a*3);let f;for(f=0;f<c.length;f++)c[f]=0;let d,u,m;for(f=0;f<s;f+=3){const y=n[f],E=n[f+1],A=n[f+2];d=y*3,u=E*3,m=A*3;const S=y*2,O=E*2,M=A*2,R=o[d],N=o[d+1],F=o[d+2],z=r[S],G=r[S+1],q=r[O+1]-G,k=r[M+1]-G,X=1/((r[O]-z)*k-(r[M]-z)*q),b=(k*(o[u]-R)-q*(o[m]-R))*X,v=(k*(o[u+1]-N)-q*(o[m+1]-N))*X,C=(k*(o[u+2]-F)-q*(o[m+2]-F))*X;c[d]+=b,c[d+1]+=v,c[d+2]+=C,c[u]+=b,c[u+1]+=v,c[u+2]+=C,c[m]+=b,c[m+1]+=v,c[m+2]+=C}const _=new Float32Array(a*3),g=new Float32Array(a*3);for(f=0;f<a;f++){d=f*3,u=d+1,m=d+2;const y=h.fromArray(i,d,Lb),E=h.fromArray(c,d,Fb),A=h.dot(y,E);h.multiplyByScalar(y,A,Nl),h.normalize(h.subtract(E,Nl,E),E),_[d]=E.x,_[u]=E.y,_[m]=E.z,h.normalize(h.cross(y,E,E),E),g[d]=E.x,g[u]=E.y,g[m]=E.z}return e.attributes.tangent=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:3,values:_}),e.attributes.bitangent=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:3,values:g}),e};const rr=new V,Mn=new h,Dl=new h,Ll=new h;let Aa=new V;We.compressVertices=function(e){if(!l(e))throw new w("geometry is required.");const t=e.attributes.extrudeDirection;let n,o;if(l(t)){const N=t.values;o=N.length/3;const F=new Float32Array(o*2);let z=0;for(n=0;n<o;++n){if(h.fromArray(N,n*3,Mn),h.equals(Mn,h.ZERO)){z+=2;continue}Aa=Ge.octEncodeInRange(Mn,65535,Aa),F[z++]=Aa.x,F[z++]=Aa.y}return e.attributes.compressedAttributes=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:2,values:F}),delete e.attributes.extrudeDirection,e}const i=e.attributes.normal,r=e.attributes.st,a=l(i),s=l(r);if(!a&&!s)return e;const c=e.attributes.tangent,f=e.attributes.bitangent,d=l(c),u=l(f);let m,_,g,y;a&&(m=i.values),s&&(_=r.values),d&&(g=c.values),u&&(y=f.values),o=(a?m.length:_.length)/(a?3:2);let S=o,O=s&&a?2:1;O+=d||u?1:0,S*=O;const M=new Float32Array(S);let R=0;for(n=0;n<o;++n){s&&(V.fromArray(_,n*2,rr),M[R++]=Ge.compressTextureCoordinates(rr));const N=n*3;a&&l(g)&&l(y)?(h.fromArray(m,N,Mn),h.fromArray(g,N,Dl),h.fromArray(y,N,Ll),Ge.octPack(Mn,Dl,Ll,rr),M[R++]=rr.x,M[R++]=rr.y):(a&&(h.fromArray(m,N,Mn),M[R++]=Ge.octEncodeFloat(Mn)),d&&(h.fromArray(g,N,Mn),M[R++]=Ge.octEncodeFloat(Mn)),u&&(h.fromArray(y,N,Mn),M[R++]=Ge.octEncodeFloat(Mn)))}return e.attributes.compressedAttributes=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:O,values:M}),a&&delete e.attributes.normal,s&&delete e.attributes.st,u&&delete e.attributes.bitangent,d&&delete e.attributes.tangent,e};function Bb(e){if(l(e.indices))return e;const t=tt.computeNumberOfVertices(e);if(t<3)throw new w("The number of vertices must be at least three.");if(t%3!==0)throw new w("The number of vertices must be a multiple of three.");const n=gt.createTypedArray(t,t);for(let o=0;o<t;++o)n[o]=o;return e.indices=n,e}function Ub(e){const t=tt.computeNumberOfVertices(e);if(t<3)throw new w("The number of vertices must be at least three.");const n=gt.createTypedArray(t,(t-2)*3);n[0]=1,n[1]=0,n[2]=2;let o=3;for(let i=3;i<t;++i)n[o++]=i-1,n[o++]=0,n[o++]=i;return e.indices=n,e.primitiveType=qe.TRIANGLES,e}function Gb(e){const t=tt.computeNumberOfVertices(e);if(t<3)throw new w("The number of vertices must be at least 3.");const n=gt.createTypedArray(t,(t-2)*3);n[0]=0,n[1]=1,n[2]=2,t>3&&(n[3]=0,n[4]=2,n[5]=3);let o=6;for(let i=3;i<t-1;i+=2)n[o++]=i,n[o++]=i-1,n[o++]=i+1,i+2<t&&(n[o++]=i,n[o++]=i+1,n[o++]=i+2);return e.indices=n,e.primitiveType=qe.TRIANGLES,e}function qb(e){if(l(e.indices))return e;const t=tt.computeNumberOfVertices(e);if(t<2)throw new w("The number of vertices must be at least two.");if(t%2!==0)throw new w("The number of vertices must be a multiple of 2.");const n=gt.createTypedArray(t,t);for(let o=0;o<t;++o)n[o]=o;return e.indices=n,e}function kb(e){const t=tt.computeNumberOfVertices(e);if(t<2)throw new w("The number of vertices must be at least two.");const n=gt.createTypedArray(t,(t-1)*2);n[0]=0,n[1]=1;let o=2;for(let i=2;i<t;++i)n[o++]=i-1,n[o++]=i;return e.indices=n,e.primitiveType=qe.LINES,e}function jb(e){const t=tt.computeNumberOfVertices(e);if(t<2)throw new w("The number of vertices must be at least two.");const n=gt.createTypedArray(t,t*2);n[0]=0,n[1]=1;let o=2;for(let i=2;i<t;++i)n[o++]=i-1,n[o++]=i;return n[o++]=t-1,n[o]=0,e.indices=n,e.primitiveType=qe.LINES,e}function Vb(e){switch(e.primitiveType){case qe.TRIANGLE_FAN:return Ub(e);case qe.TRIANGLE_STRIP:return Gb(e);case qe.TRIANGLES:return Bb(e);case qe.LINE_STRIP:return kb(e);case qe.LINE_LOOP:return jb(e);case qe.LINES:return qb(e)}return e}function Po(e,t){Math.abs(e.y)<T.EPSILON6&&(t?e.y=-T.EPSILON6:e.y=T.EPSILON6)}function Hb(e,t,n){if(e.y!==0&&t.y!==0&&n.y!==0){Po(e,e.y<0),Po(t,t.y<0),Po(n,n.y<0);return}const o=Math.abs(e.y),i=Math.abs(t.y),r=Math.abs(n.y);let a;o>i?o>r?a=T.sign(e.y):a=T.sign(n.y):i>r?a=T.sign(t.y):a=T.sign(n.y);const s=a<0;Po(e,s),Po(t,s),Po(n,s)}const Fl=new h;function En(e,t,n,o){h.add(e,h.multiplyByScalar(h.subtract(t,e,Fl),e.y/(e.y-t.y),Fl),n),h.clone(n,o),Po(n,!0),Po(o,!1)}const jo=new h,Vo=new h,Ho=new h,Wo=new h,mc={positions:new Array(7),indices:new Array(3*3)};function Wb(e,t,n){if(e.x>=0||t.x>=0||n.x>=0)return;Hb(e,t,n);const o=e.y<0,i=t.y<0,r=n.y<0;let a=0;a+=o?1:0,a+=i?1:0,a+=r?1:0;const s=mc.indices;a===1?(s[1]=3,s[2]=4,s[5]=6,s[7]=6,s[8]=5,o?(En(e,t,jo,Ho),En(e,n,Vo,Wo),s[0]=0,s[3]=1,s[4]=2,s[6]=1):i?(En(t,n,jo,Ho),En(t,e,Vo,Wo),s[0]=1,s[3]=2,s[4]=0,s[6]=2):r&&(En(n,e,jo,Ho),En(n,t,Vo,Wo),s[0]=2,s[3]=0,s[4]=1,s[6]=0)):a===2&&(s[2]=4,s[4]=4,s[5]=3,s[7]=5,s[8]=6,o?i?r||(En(n,e,jo,Ho),En(n,t,Vo,Wo),s[0]=0,s[1]=1,s[3]=0,s[6]=2):(En(t,n,jo,Ho),En(t,e,Vo,Wo),s[0]=2,s[1]=0,s[3]=2,s[6]=1):(En(e,t,jo,Ho),En(e,n,Vo,Wo),s[0]=1,s[1]=2,s[3]=1,s[6]=0));const c=mc.positions;return c[0]=e,c[1]=t,c[2]=n,c.length=3,(a===1||a===2)&&(c[3]=jo,c[4]=Vo,c[5]=Ho,c[6]=Wo,c.length=7),mc}function Bl(e,t){const n=e.attributes;if(n.position.values.length===0)return;for(const i in n)if(n.hasOwnProperty(i)&&l(n[i])&&l(n[i].values)){const r=n[i];r.values=ue.createTypedArray(r.componentDatatype,r.values)}const o=tt.computeNumberOfVertices(e);return e.indices=gt.createTypedArray(o,e.indices),t&&(e.boundingSphere=ie.fromVertices(n.position.values)),e}function Bi(e){const t=e.attributes,n={};for(const o in t)if(t.hasOwnProperty(o)&&l(t[o])&&l(t[o].values)){const i=t[o];n[o]=new Ue({componentDatatype:i.componentDatatype,componentsPerAttribute:i.componentsPerAttribute,normalize:i.normalize,values:[]})}return new tt({attributes:n,indices:[],primitiveType:e.primitiveType})}function Vf(e,t,n){const o=l(e.geometry.boundingSphere);t=Bl(t,o),n=Bl(n,o),l(n)&&!l(t)?e.geometry=n:!l(n)&&l(t)?e.geometry=t:(e.westHemisphereGeometry=t,e.eastHemisphereGeometry=n,e.geometry=void 0)}function Hf(e,t){const n=new e,o=new e,i=new e;return function(r,a,s,c,f,d,u,m){const _=e.fromArray(f,r*t,n),g=e.fromArray(f,a*t,o),y=e.fromArray(f,s*t,i);e.multiplyByScalar(_,c.x,_),e.multiplyByScalar(g,c.y,g),e.multiplyByScalar(y,c.z,y);const E=e.add(_,g,_);e.add(E,y,E),m&&e.normalize(E,E),e.pack(E,d,u*t)}}const Yb=Hf(Q,4),Ga=Hf(h,3),q0=Hf(V,2),$b=function(e,t,n,o,i,r,a){const s=i[e]*o.x,c=i[t]*o.y,f=i[n]*o.z;r[a]=s+c+f>T.EPSILON6?1:0},Er=new h,Qc=new h,Jc=new h,Xb=new h;function xa(e,t,n,o,i,r,a,s,c,f,d,u,m,_,g,y){if(!l(r)&&!l(a)&&!l(s)&&!l(c)&&!l(f)&&_===0)return;const E=h.fromArray(i,e*3,Er),A=h.fromArray(i,t*3,Qc),S=h.fromArray(i,n*3,Jc),O=Cb(o,E,A,S,Xb);if(l(O)){if(l(r)&&Ga(e,t,n,O,r,u.normal.values,y,!0),l(f)){const M=h.fromArray(f,e*3,Er),R=h.fromArray(f,t*3,Qc),N=h.fromArray(f,n*3,Jc);h.multiplyByScalar(M,O.x,M),h.multiplyByScalar(R,O.y,R),h.multiplyByScalar(N,O.z,N);let F;!h.equals(M,h.ZERO)||!h.equals(R,h.ZERO)||!h.equals(N,h.ZERO)?(F=h.add(M,R,M),h.add(F,N,F),h.normalize(F,F)):(F=Er,F.x=0,F.y=0,F.z=0),h.pack(F,u.extrudeDirection.values,y*3)}if(l(d)&&$b(e,t,n,O,d,u.applyOffset.values,y),l(a)&&Ga(e,t,n,O,a,u.tangent.values,y,!0),l(s)&&Ga(e,t,n,O,s,u.bitangent.values,y,!0),l(c)&&q0(e,t,n,O,c,u.st.values,y),_>0)for(let M=0;M<_;M++){const R=m[M];Zb(e,t,n,O,y,g[R],u[R])}}}function Zb(e,t,n,o,i,r,a){const s=r.componentsPerAttribute,c=r.values,f=a.values;switch(s){case 4:Yb(e,t,n,o,c,f,i,!1);break;case 3:Ga(e,t,n,o,c,f,i,!1);break;case 2:q0(e,t,n,o,c,f,i,!1);break;default:f[i]=c[e]*o.x+c[t]*o.y+c[n]*o.z}}function Hn(e,t,n,o,i,r){const a=e.position.values.length/3;if(i!==-1){const s=o[i],c=n[s];return c===-1?(n[s]=a,e.position.values.push(r.x,r.y,r.z),t.push(a),a):(t.push(c),c)}return e.position.values.push(r.x,r.y,r.z),t.push(a),a}const Kb={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function Ul(e){const t=e.geometry,n=t.attributes,o=n.position.values,i=l(n.normal)?n.normal.values:void 0,r=l(n.bitangent)?n.bitangent.values:void 0,a=l(n.tangent)?n.tangent.values:void 0,s=l(n.st)?n.st.values:void 0,c=l(n.extrudeDirection)?n.extrudeDirection.values:void 0,f=l(n.applyOffset)?n.applyOffset.values:void 0,d=t.indices,u=[];for(const F in n)n.hasOwnProperty(F)&&!Kb[F]&&l(n[F])&&u.push(F);const m=u.length,_=Bi(t),g=Bi(t);let y,E,A,S,O;const M=[];M.length=o.length/3;const R=[];for(R.length=o.length/3,O=0;O<M.length;++O)M[O]=-1,R[O]=-1;const N=d.length;for(O=0;O<N;O+=3){const F=d[O],z=d[O+1],G=d[O+2];let q=h.fromArray(o,F*3),k=h.fromArray(o,z*3),X=h.fromArray(o,G*3);const b=Wb(q,k,X);if(l(b)&&b.positions.length>3){const v=b.positions,C=b.indices,D=C.length;for(let H=0;H<D;++H){const Z=C[H],J=v[Z];J.y<0?(y=g.attributes,E=g.indices,A=M):(y=_.attributes,E=_.indices,A=R),S=Hn(y,E,A,d,Z<3?O+Z:-1,J),xa(F,z,G,J,o,i,a,r,s,c,f,y,u,m,n,S)}}else l(b)&&(q=b.positions[0],k=b.positions[1],X=b.positions[2]),q.y<0?(y=g.attributes,E=g.indices,A=M):(y=_.attributes,E=_.indices,A=R),S=Hn(y,E,A,d,O,q),xa(F,z,G,q,o,i,a,r,s,c,f,y,u,m,n,S),S=Hn(y,E,A,d,O+1,k),xa(F,z,G,k,o,i,a,r,s,c,f,y,u,m,n,S),S=Hn(y,E,A,d,O+2,X),xa(F,z,G,X,o,i,a,r,s,c,f,y,u,m,n,S)}Vf(e,g,_)}const k0=De.fromPointNormal(h.ZERO,h.UNIT_Y),Qb=new h,Jb=new h;function gi(e,t,n,o,i,r,a){if(!l(a))return;const s=h.fromArray(o,e*3,Er);h.equalsEpsilon(s,n,T.EPSILON10)?r.applyOffset.values[i]=a[e]:r.applyOffset.values[i]=a[t]}function Gl(e){const t=e.geometry,n=t.attributes,o=n.position.values,i=l(n.applyOffset)?n.applyOffset.values:void 0,r=t.indices,a=Bi(t),s=Bi(t);let c;const f=r.length,d=[];d.length=o.length/3;const u=[];for(u.length=o.length/3,c=0;c<d.length;++c)d[c]=-1,u[c]=-1;for(c=0;c<f;c+=2){const m=r[c],_=r[c+1],g=h.fromArray(o,m*3,Er),y=h.fromArray(o,_*3,Qc);let E;Math.abs(g.y)<T.EPSILON6&&(g.y<0?g.y=-T.EPSILON6:g.y=T.EPSILON6),Math.abs(y.y)<T.EPSILON6&&(y.y<0?y.y=-T.EPSILON6:y.y=T.EPSILON6);let A=a.attributes,S=a.indices,O=u,M=s.attributes,R=s.indices,N=d;const F=ke.lineSegmentPlane(g,y,k0,Jc);if(l(F)){const z=h.multiplyByScalar(h.UNIT_Y,5*T.EPSILON9,Qb);g.y<0&&(h.negate(z,z),A=s.attributes,S=s.indices,O=d,M=a.attributes,R=a.indices,N=u);const G=h.add(F,z,Jb);E=Hn(A,S,O,r,c,g),gi(m,_,g,o,E,A,i),E=Hn(A,S,O,r,-1,G),gi(m,_,G,o,E,A,i),h.negate(z,z),h.add(F,z,G),E=Hn(M,R,N,r,-1,G),gi(m,_,G,o,E,M,i),E=Hn(M,R,N,r,c+1,y),gi(m,_,y,o,E,M,i)}else{let z,G,q;g.y<0?(z=s.attributes,G=s.indices,q=d):(z=a.attributes,G=a.indices,q=u),E=Hn(z,G,q,r,c,g),gi(m,_,g,o,E,z,i),E=Hn(z,G,q,r,c+1,y),gi(m,_,y,o,E,z,i)}}Vf(e,s,a)}const ql=new V,eE=new V,j0=new h,V0=new h,ef=new h,tE=new h,nE=new h,oE=new h,kl=new Q;function jl(e){const t=e.attributes,n=t.position.values,o=t.prevPosition.values,i=t.nextPosition.values,r=n.length;for(let a=0;a<r;a+=3){const s=h.unpack(n,a,j0);if(s.x>0)continue;const c=h.unpack(o,a,V0);(s.y<0&&c.y>0||s.y>0&&c.y<0)&&(a-3>0?(o[a]=n[a-3],o[a+1]=n[a-2],o[a+2]=n[a-1]):h.pack(s,o,a));const f=h.unpack(i,a,ef);(s.y<0&&f.y>0||s.y>0&&f.y<0)&&(a+3<r?(i[a]=n[a+3],i[a+1]=n[a+4],i[a+2]=n[a+5]):h.pack(s,i,a))}}const iE=5*T.EPSILON9,Oa=T.EPSILON6;function rE(e){const t=e.geometry,n=t.attributes,o=n.position.values,i=n.prevPosition.values,r=n.nextPosition.values,a=n.expandAndWidth.values,s=l(n.st)?n.st.values:void 0,c=l(n.color)?n.color.values:void 0,f=Bi(t),d=Bi(t);let u,m,_,g=!1;const y=o.length/3;for(u=0;u<y;u+=4){const E=u,A=u+2,S=h.fromArray(o,E*3,j0),O=h.fromArray(o,A*3,V0);if(Math.abs(S.y)<Oa)for(S.y=Oa*(O.y<0?-1:1),o[u*3+1]=S.y,o[(u+1)*3+1]=S.y,m=E*3;m<E*3+4*3;m+=3)i[m]=o[u*3],i[m+1]=o[u*3+1],i[m+2]=o[u*3+2];if(Math.abs(O.y)<Oa)for(O.y=Oa*(S.y<0?-1:1),o[(u+2)*3+1]=O.y,o[(u+3)*3+1]=O.y,m=E*3;m<E*3+4*3;m+=3)r[m]=o[(u+2)*3],r[m+1]=o[(u+2)*3+1],r[m+2]=o[(u+2)*3+2];let M=f.attributes,R=f.indices,N=d.attributes,F=d.indices;const z=ke.lineSegmentPlane(S,O,k0,tE);if(l(z)){g=!0;const G=h.multiplyByScalar(h.UNIT_Y,iE,nE);S.y<0&&(h.negate(G,G),M=d.attributes,R=d.indices,N=f.attributes,F=f.indices);const q=h.add(z,G,oE);M.position.values.push(S.x,S.y,S.z,S.x,S.y,S.z),M.position.values.push(q.x,q.y,q.z),M.position.values.push(q.x,q.y,q.z),M.prevPosition.values.push(i[E*3],i[E*3+1],i[E*3+2]),M.prevPosition.values.push(i[E*3+3],i[E*3+4],i[E*3+5]),M.prevPosition.values.push(S.x,S.y,S.z,S.x,S.y,S.z),M.nextPosition.values.push(q.x,q.y,q.z),M.nextPosition.values.push(q.x,q.y,q.z),M.nextPosition.values.push(q.x,q.y,q.z),M.nextPosition.values.push(q.x,q.y,q.z),h.negate(G,G),h.add(z,G,q),N.position.values.push(q.x,q.y,q.z),N.position.values.push(q.x,q.y,q.z),N.position.values.push(O.x,O.y,O.z,O.x,O.y,O.z),N.prevPosition.values.push(q.x,q.y,q.z),N.prevPosition.values.push(q.x,q.y,q.z),N.prevPosition.values.push(q.x,q.y,q.z),N.prevPosition.values.push(q.x,q.y,q.z),N.nextPosition.values.push(O.x,O.y,O.z,O.x,O.y,O.z),N.nextPosition.values.push(r[A*3],r[A*3+1],r[A*3+2]),N.nextPosition.values.push(r[A*3+3],r[A*3+4],r[A*3+5]);const k=V.fromArray(a,E*2,ql),X=Math.abs(k.y);M.expandAndWidth.values.push(-1,X,1,X),M.expandAndWidth.values.push(-1,-X,1,-X),N.expandAndWidth.values.push(-1,X,1,X),N.expandAndWidth.values.push(-1,-X,1,-X);let b=h.magnitudeSquared(h.subtract(z,S,ef));if(b/=h.magnitudeSquared(h.subtract(O,S,ef)),l(c)){const v=Q.fromArray(c,E*4,kl),C=Q.fromArray(c,A*4,kl),D=T.lerp(v.x,C.x,b),H=T.lerp(v.y,C.y,b),Z=T.lerp(v.z,C.z,b),J=T.lerp(v.w,C.w,b);for(m=E*4;m<E*4+2*4;++m)M.color.values.push(c[m]);for(M.color.values.push(D,H,Z,J),M.color.values.push(D,H,Z,J),N.color.values.push(D,H,Z,J),N.color.values.push(D,H,Z,J),m=A*4;m<A*4+2*4;++m)N.color.values.push(c[m])}if(l(s)){const v=V.fromArray(s,E*2,ql),C=V.fromArray(s,(u+3)*2,eE),D=T.lerp(v.x,C.x,b);for(m=E*2;m<E*2+2*2;++m)M.st.values.push(s[m]);for(M.st.values.push(D,v.y),M.st.values.push(D,C.y),N.st.values.push(D,v.y),N.st.values.push(D,C.y),m=A*2;m<A*2+2*2;++m)N.st.values.push(s[m])}_=M.position.values.length/3-4,R.push(_,_+2,_+1),R.push(_+1,_+2,_+3),_=N.position.values.length/3-4,F.push(_,_+2,_+1),F.push(_+1,_+2,_+3)}else{let G,q;for(S.y<0?(G=d.attributes,q=d.indices):(G=f.attributes,q=f.indices),G.position.values.push(S.x,S.y,S.z),G.position.values.push(S.x,S.y,S.z),G.position.values.push(O.x,O.y,O.z),G.position.values.push(O.x,O.y,O.z),m=u*3;m<u*3+4*3;++m)G.prevPosition.values.push(i[m]),G.nextPosition.values.push(r[m]);for(m=u*2;m<u*2+4*2;++m)G.expandAndWidth.values.push(a[m]),l(s)&&G.st.values.push(s[m]);if(l(c))for(m=u*4;m<u*4+4*4;++m)G.color.values.push(c[m]);_=G.position.values.length/3-4,q.push(_,_+2,_+1),q.push(_+1,_+2,_+3)}}g&&(jl(d),jl(f)),Vf(e,d,f)}We.splitLongitude=function(e){if(!l(e))throw new w("instance is required.");const t=e.geometry,n=t.boundingSphere;if(l(n)&&(n.center.x-n.radius>0||ie.intersectPlane(n,De.ORIGIN_ZX_PLANE)!==bt.INTERSECTING))return e;if(t.geometryType!==ur.NONE)switch(t.geometryType){case ur.POLYLINES:rE(e);break;case ur.TRIANGLES:Ul(e);break;case ur.LINES:Gl(e);break}else Vb(t),t.primitiveType===qe.TRIANGLES?Ul(e):t.primitiveType===qe.LINES&&Gl(e);return e};function pc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n*6<1?e+(t-e)*6*n:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}function x(e,t,n,o){this.red=e??1,this.green=t??1,this.blue=n??1,this.alpha=o??1}x.fromCartesian4=function(e,t){return p.typeOf.object("cartesian",e),l(t)?(t.red=e.x,t.green=e.y,t.blue=e.z,t.alpha=e.w,t):new x(e.x,e.y,e.z,e.w)};x.fromBytes=function(e,t,n,o,i){return e=x.byteToFloat(e??255),t=x.byteToFloat(t??255),n=x.byteToFloat(n??255),o=x.byteToFloat(o??255),l(i)?(i.red=e,i.green=t,i.blue=n,i.alpha=o,i):new x(e,t,n,o)};x.fromAlpha=function(e,t,n){return p.typeOf.object("color",e),p.typeOf.number("alpha",t),l(n)?(n.red=e.red,n.green=e.green,n.blue=e.blue,n.alpha=t,n):new x(e.red,e.green,e.blue,t)};let _c,Wf,uo;xt.supportsTypedArrays()&&(_c=new ArrayBuffer(4),Wf=new Uint32Array(_c),uo=new Uint8Array(_c));x.fromRgba=function(e,t){return Wf[0]=e,x.fromBytes(uo[0],uo[1],uo[2],uo[3],t)};x.fromHsl=function(e,t,n,o,i){e=(e??0)%1,t=t??0,n=n??0,o=o??1;let r=n,a=n,s=n;if(t!==0){let c;n<.5?c=n*(1+t):c=n+t-n*t;const f=2*n-c;r=pc(f,c,e+1/3),a=pc(f,c,e),s=pc(f,c,e-1/3)}return l(i)?(i.red=r,i.green=a,i.blue=s,i.alpha=o,i):new x(r,a,s,o)};x.fromRandom=function(e,t){e=e??xe.EMPTY_OBJECT;let n=e.red;if(!l(n)){const a=e.minimumRed??0,s=e.maximumRed??1;p.typeOf.number.lessThanOrEquals("minimumRed",a,s),n=a+T.nextRandomNumber()*(s-a)}let o=e.green;if(!l(o)){const a=e.minimumGreen??0,s=e.maximumGreen??1;p.typeOf.number.lessThanOrEquals("minimumGreen",a,s),o=a+T.nextRandomNumber()*(s-a)}let i=e.blue;if(!l(i)){const a=e.minimumBlue??0,s=e.maximumBlue??1;p.typeOf.number.lessThanOrEquals("minimumBlue",a,s),i=a+T.nextRandomNumber()*(s-a)}let r=e.alpha;if(!l(r)){const a=e.minimumAlpha??0,s=e.maximumAlpha??1;p.typeOf.number.lessThanOrEquals("minimumAlpha",a,s),r=a+T.nextRandomNumber()*(s-a)}return l(t)?(t.red=n,t.green=o,t.blue=i,t.alpha=r,t):new x(n,o,i,r)};const aE=/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,sE=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,cE=/^rgba?\s*\(\s*([0-9.]+%?)\s*[,\s]+\s*([0-9.]+%?)\s*[,\s]+\s*([0-9.]+%?)(?:\s*[,\s/]+\s*([0-9.]+))?\s*\)$/i,fE=/^hsla?\s*\(\s*([0-9.]+)\s*[,\s]+\s*([0-9.]+%)\s*[,\s]+\s*([0-9.]+%)(?:\s*[,\s/]+\s*([0-9.]+))?\s*\)$/i;x.fromCssColorString=function(e,t){p.typeOf.string("color",e),l(t)||(t=new x),e=e.trim();const n=x[e.toUpperCase()];if(l(n))return x.clone(n,t),t;let o=aE.exec(e);return o!==null?(t.red=parseInt(o[1],16)/15,t.green=parseInt(o[2],16)/15,t.blue=parseInt(o[3],16)/15,t.alpha=parseInt(o[4]??"f",16)/15,t):(o=sE.exec(e),o!==null?(t.red=parseInt(o[1],16)/255,t.green=parseInt(o[2],16)/255,t.blue=parseInt(o[3],16)/255,t.alpha=parseInt(o[4]??"ff",16)/255,t):(o=cE.exec(e),o!==null?(t.red=parseFloat(o[1])/(o[1].substr(-1)==="%"?100:255),t.green=parseFloat(o[2])/(o[2].substr(-1)==="%"?100:255),t.blue=parseFloat(o[3])/(o[3].substr(-1)==="%"?100:255),t.alpha=parseFloat(o[4]??"1.0"),t):(o=fE.exec(e),o!==null?x.fromHsl(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,parseFloat(o[4]??"1.0"),t):(t=void 0,t))))};x.packedLength=4;x.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,t[n++]=e.red,t[n++]=e.green,t[n++]=e.blue,t[n]=e.alpha,t};x.unpack=function(e,t,n){return p.defined("array",e),t=t??0,l(n)||(n=new x),n.red=e[t++],n.green=e[t++],n.blue=e[t++],n.alpha=e[t],n};x.byteToFloat=function(e){return e/255};x.floatToByte=function(e){return e===1?255:e*256|0};x.clone=function(e,t){if(l(e))return l(t)?(t.red=e.red,t.green=e.green,t.blue=e.blue,t.alpha=e.alpha,t):new x(e.red,e.green,e.blue,e.alpha)};x.equals=function(e,t){return e===t||l(e)&&l(t)&&e.red===t.red&&e.green===t.green&&e.blue===t.blue&&e.alpha===t.alpha};x.equalsArray=function(e,t,n){return e.red===t[n]&&e.green===t[n+1]&&e.blue===t[n+2]&&e.alpha===t[n+3]};x.prototype.clone=function(e){return x.clone(this,e)};x.prototype.equals=function(e){return x.equals(this,e)};x.prototype.equalsEpsilon=function(e,t){return this===e||l(e)&&Math.abs(this.red-e.red)<=t&&Math.abs(this.green-e.green)<=t&&Math.abs(this.blue-e.blue)<=t&&Math.abs(this.alpha-e.alpha)<=t};x.prototype.toString=function(){return`(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`};x.prototype.toCssColorString=function(){const e=x.floatToByte(this.red),t=x.floatToByte(this.green),n=x.floatToByte(this.blue);return this.alpha===1?`rgb(${e},${t},${n})`:`rgba(${e},${t},${n},${this.alpha})`};x.prototype.toCssHexString=function(){let e=x.floatToByte(this.red).toString(16);e.length<2&&(e=`0${e}`);let t=x.floatToByte(this.green).toString(16);t.length<2&&(t=`0${t}`);let n=x.floatToByte(this.blue).toString(16);if(n.length<2&&(n=`0${n}`),this.alpha<1){let o=x.floatToByte(this.alpha).toString(16);return o.length<2&&(o=`0${o}`),`#${e}${t}${n}${o}`}return`#${e}${t}${n}`};x.prototype.toBytes=function(e){const t=x.floatToByte(this.red),n=x.floatToByte(this.green),o=x.floatToByte(this.blue),i=x.floatToByte(this.alpha);return l(e)?(e[0]=t,e[1]=n,e[2]=o,e[3]=i,e):[t,n,o,i]};x.prototype.toRgba=function(){return uo[0]=x.floatToByte(this.red),uo[1]=x.floatToByte(this.green),uo[2]=x.floatToByte(this.blue),uo[3]=x.floatToByte(this.alpha),Wf[0]};x.prototype.brighten=function(e,t){return p.typeOf.number("magnitude",e),p.typeOf.number.greaterThanOrEquals("magnitude",e,0),p.typeOf.object("result",t),e=1-e,t.red=1-(1-this.red)*e,t.green=1-(1-this.green)*e,t.blue=1-(1-this.blue)*e,t.alpha=this.alpha,t};x.prototype.darken=function(e,t){return p.typeOf.number("magnitude",e),p.typeOf.number.greaterThanOrEquals("magnitude",e,0),p.typeOf.object("result",t),e=1-e,t.red=this.red*e,t.green=this.green*e,t.blue=this.blue*e,t.alpha=this.alpha,t};x.prototype.withAlpha=function(e,t){return x.fromAlpha(this,e,t)};x.add=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.red=e.red+t.red,n.green=e.green+t.green,n.blue=e.blue+t.blue,n.alpha=e.alpha+t.alpha,n};x.subtract=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.red=e.red-t.red,n.green=e.green-t.green,n.blue=e.blue-t.blue,n.alpha=e.alpha-t.alpha,n};x.multiply=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.red=e.red*t.red,n.green=e.green*t.green,n.blue=e.blue*t.blue,n.alpha=e.alpha*t.alpha,n};x.divide=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.red=e.red/t.red,n.green=e.green/t.green,n.blue=e.blue/t.blue,n.alpha=e.alpha/t.alpha,n};x.mod=function(e,t,n){return p.typeOf.object("left",e),p.typeOf.object("right",t),p.typeOf.object("result",n),n.red=e.red%t.red,n.green=e.green%t.green,n.blue=e.blue%t.blue,n.alpha=e.alpha%t.alpha,n};x.lerp=function(e,t,n,o){return p.typeOf.object("start",e),p.typeOf.object("end",t),p.typeOf.number("t",n),p.typeOf.object("result",o),o.red=T.lerp(e.red,t.red,n),o.green=T.lerp(e.green,t.green,n),o.blue=T.lerp(e.blue,t.blue,n),o.alpha=T.lerp(e.alpha,t.alpha,n),o};x.multiplyByScalar=function(e,t,n){return p.typeOf.object("color",e),p.typeOf.number("scalar",t),p.typeOf.object("result",n),n.red=e.red*t,n.green=e.green*t,n.blue=e.blue*t,n.alpha=e.alpha*t,n};x.divideByScalar=function(e,t,n){return p.typeOf.object("color",e),p.typeOf.number("scalar",t),p.typeOf.object("result",n),n.red=e.red/t,n.green=e.green/t,n.blue=e.blue/t,n.alpha=e.alpha/t,n};x.ALICEBLUE=Object.freeze(x.fromCssColorString("#F0F8FF"));x.ANTIQUEWHITE=Object.freeze(x.fromCssColorString("#FAEBD7"));x.AQUA=Object.freeze(x.fromCssColorString("#00FFFF"));x.AQUAMARINE=Object.freeze(x.fromCssColorString("#7FFFD4"));x.AZURE=Object.freeze(x.fromCssColorString("#F0FFFF"));x.BEIGE=Object.freeze(x.fromCssColorString("#F5F5DC"));x.BISQUE=Object.freeze(x.fromCssColorString("#FFE4C4"));x.BLACK=Object.freeze(x.fromCssColorString("#000000"));x.BLANCHEDALMOND=Object.freeze(x.fromCssColorString("#FFEBCD"));x.BLUE=Object.freeze(x.fromCssColorString("#0000FF"));x.BLUEVIOLET=Object.freeze(x.fromCssColorString("#8A2BE2"));x.BROWN=Object.freeze(x.fromCssColorString("#A52A2A"));x.BURLYWOOD=Object.freeze(x.fromCssColorString("#DEB887"));x.CADETBLUE=Object.freeze(x.fromCssColorString("#5F9EA0"));x.CHARTREUSE=Object.freeze(x.fromCssColorString("#7FFF00"));x.CHOCOLATE=Object.freeze(x.fromCssColorString("#D2691E"));x.CORAL=Object.freeze(x.fromCssColorString("#FF7F50"));x.CORNFLOWERBLUE=Object.freeze(x.fromCssColorString("#6495ED"));x.CORNSILK=Object.freeze(x.fromCssColorString("#FFF8DC"));x.CRIMSON=Object.freeze(x.fromCssColorString("#DC143C"));x.CYAN=Object.freeze(x.fromCssColorString("#00FFFF"));x.DARKBLUE=Object.freeze(x.fromCssColorString("#00008B"));x.DARKCYAN=Object.freeze(x.fromCssColorString("#008B8B"));x.DARKGOLDENROD=Object.freeze(x.fromCssColorString("#B8860B"));x.DARKGRAY=Object.freeze(x.fromCssColorString("#A9A9A9"));x.DARKGREEN=Object.freeze(x.fromCssColorString("#006400"));x.DARKGREY=x.DARKGRAY;x.DARKKHAKI=Object.freeze(x.fromCssColorString("#BDB76B"));x.DARKMAGENTA=Object.freeze(x.fromCssColorString("#8B008B"));x.DARKOLIVEGREEN=Object.freeze(x.fromCssColorString("#556B2F"));x.DARKORANGE=Object.freeze(x.fromCssColorString("#FF8C00"));x.DARKORCHID=Object.freeze(x.fromCssColorString("#9932CC"));x.DARKRED=Object.freeze(x.fromCssColorString("#8B0000"));x.DARKSALMON=Object.freeze(x.fromCssColorString("#E9967A"));x.DARKSEAGREEN=Object.freeze(x.fromCssColorString("#8FBC8F"));x.DARKSLATEBLUE=Object.freeze(x.fromCssColorString("#483D8B"));x.DARKSLATEGRAY=Object.freeze(x.fromCssColorString("#2F4F4F"));x.DARKSLATEGREY=x.DARKSLATEGRAY;x.DARKTURQUOISE=Object.freeze(x.fromCssColorString("#00CED1"));x.DARKVIOLET=Object.freeze(x.fromCssColorString("#9400D3"));x.DEEPPINK=Object.freeze(x.fromCssColorString("#FF1493"));x.DEEPSKYBLUE=Object.freeze(x.fromCssColorString("#00BFFF"));x.DIMGRAY=Object.freeze(x.fromCssColorString("#696969"));x.DIMGREY=x.DIMGRAY;x.DODGERBLUE=Object.freeze(x.fromCssColorString("#1E90FF"));x.FIREBRICK=Object.freeze(x.fromCssColorString("#B22222"));x.FLORALWHITE=Object.freeze(x.fromCssColorString("#FFFAF0"));x.FORESTGREEN=Object.freeze(x.fromCssColorString("#228B22"));x.FUCHSIA=Object.freeze(x.fromCssColorString("#FF00FF"));x.GAINSBORO=Object.freeze(x.fromCssColorString("#DCDCDC"));x.GHOSTWHITE=Object.freeze(x.fromCssColorString("#F8F8FF"));x.GOLD=Object.freeze(x.fromCssColorString("#FFD700"));x.GOLDENROD=Object.freeze(x.fromCssColorString("#DAA520"));x.GRAY=Object.freeze(x.fromCssColorString("#808080"));x.GREEN=Object.freeze(x.fromCssColorString("#008000"));x.GREENYELLOW=Object.freeze(x.fromCssColorString("#ADFF2F"));x.GREY=x.GRAY;x.HONEYDEW=Object.freeze(x.fromCssColorString("#F0FFF0"));x.HOTPINK=Object.freeze(x.fromCssColorString("#FF69B4"));x.INDIANRED=Object.freeze(x.fromCssColorString("#CD5C5C"));x.INDIGO=Object.freeze(x.fromCssColorString("#4B0082"));x.IVORY=Object.freeze(x.fromCssColorString("#FFFFF0"));x.KHAKI=Object.freeze(x.fromCssColorString("#F0E68C"));x.LAVENDER=Object.freeze(x.fromCssColorString("#E6E6FA"));x.LAVENDAR_BLUSH=Object.freeze(x.fromCssColorString("#FFF0F5"));x.LAWNGREEN=Object.freeze(x.fromCssColorString("#7CFC00"));x.LEMONCHIFFON=Object.freeze(x.fromCssColorString("#FFFACD"));x.LIGHTBLUE=Object.freeze(x.fromCssColorString("#ADD8E6"));x.LIGHTCORAL=Object.freeze(x.fromCssColorString("#F08080"));x.LIGHTCYAN=Object.freeze(x.fromCssColorString("#E0FFFF"));x.LIGHTGOLDENRODYELLOW=Object.freeze(x.fromCssColorString("#FAFAD2"));x.LIGHTGRAY=Object.freeze(x.fromCssColorString("#D3D3D3"));x.LIGHTGREEN=Object.freeze(x.fromCssColorString("#90EE90"));x.LIGHTGREY=x.LIGHTGRAY;x.LIGHTPINK=Object.freeze(x.fromCssColorString("#FFB6C1"));x.LIGHTSEAGREEN=Object.freeze(x.fromCssColorString("#20B2AA"));x.LIGHTSKYBLUE=Object.freeze(x.fromCssColorString("#87CEFA"));x.LIGHTSLATEGRAY=Object.freeze(x.fromCssColorString("#778899"));x.LIGHTSLATEGREY=x.LIGHTSLATEGRAY;x.LIGHTSTEELBLUE=Object.freeze(x.fromCssColorString("#B0C4DE"));x.LIGHTYELLOW=Object.freeze(x.fromCssColorString("#FFFFE0"));x.LIME=Object.freeze(x.fromCssColorString("#00FF00"));x.LIMEGREEN=Object.freeze(x.fromCssColorString("#32CD32"));x.LINEN=Object.freeze(x.fromCssColorString("#FAF0E6"));x.MAGENTA=Object.freeze(x.fromCssColorString("#FF00FF"));x.MAROON=Object.freeze(x.fromCssColorString("#800000"));x.MEDIUMAQUAMARINE=Object.freeze(x.fromCssColorString("#66CDAA"));x.MEDIUMBLUE=Object.freeze(x.fromCssColorString("#0000CD"));x.MEDIUMORCHID=Object.freeze(x.fromCssColorString("#BA55D3"));x.MEDIUMPURPLE=Object.freeze(x.fromCssColorString("#9370DB"));x.MEDIUMSEAGREEN=Object.freeze(x.fromCssColorString("#3CB371"));x.MEDIUMSLATEBLUE=Object.freeze(x.fromCssColorString("#7B68EE"));x.MEDIUMSPRINGGREEN=Object.freeze(x.fromCssColorString("#00FA9A"));x.MEDIUMTURQUOISE=Object.freeze(x.fromCssColorString("#48D1CC"));x.MEDIUMVIOLETRED=Object.freeze(x.fromCssColorString("#C71585"));x.MIDNIGHTBLUE=Object.freeze(x.fromCssColorString("#191970"));x.MINTCREAM=Object.freeze(x.fromCssColorString("#F5FFFA"));x.MISTYROSE=Object.freeze(x.fromCssColorString("#FFE4E1"));x.MOCCASIN=Object.freeze(x.fromCssColorString("#FFE4B5"));x.NAVAJOWHITE=Object.freeze(x.fromCssColorString("#FFDEAD"));x.NAVY=Object.freeze(x.fromCssColorString("#000080"));x.OLDLACE=Object.freeze(x.fromCssColorString("#FDF5E6"));x.OLIVE=Object.freeze(x.fromCssColorString("#808000"));x.OLIVEDRAB=Object.freeze(x.fromCssColorString("#6B8E23"));x.ORANGE=Object.freeze(x.fromCssColorString("#FFA500"));x.ORANGERED=Object.freeze(x.fromCssColorString("#FF4500"));x.ORCHID=Object.freeze(x.fromCssColorString("#DA70D6"));x.PALEGOLDENROD=Object.freeze(x.fromCssColorString("#EEE8AA"));x.PALEGREEN=Object.freeze(x.fromCssColorString("#98FB98"));x.PALETURQUOISE=Object.freeze(x.fromCssColorString("#AFEEEE"));x.PALEVIOLETRED=Object.freeze(x.fromCssColorString("#DB7093"));x.PAPAYAWHIP=Object.freeze(x.fromCssColorString("#FFEFD5"));x.PEACHPUFF=Object.freeze(x.fromCssColorString("#FFDAB9"));x.PERU=Object.freeze(x.fromCssColorString("#CD853F"));x.PINK=Object.freeze(x.fromCssColorString("#FFC0CB"));x.PLUM=Object.freeze(x.fromCssColorString("#DDA0DD"));x.POWDERBLUE=Object.freeze(x.fromCssColorString("#B0E0E6"));x.PURPLE=Object.freeze(x.fromCssColorString("#800080"));x.RED=Object.freeze(x.fromCssColorString("#FF0000"));x.ROSYBROWN=Object.freeze(x.fromCssColorString("#BC8F8F"));x.ROYALBLUE=Object.freeze(x.fromCssColorString("#4169E1"));x.SADDLEBROWN=Object.freeze(x.fromCssColorString("#8B4513"));x.SALMON=Object.freeze(x.fromCssColorString("#FA8072"));x.SANDYBROWN=Object.freeze(x.fromCssColorString("#F4A460"));x.SEAGREEN=Object.freeze(x.fromCssColorString("#2E8B57"));x.SEASHELL=Object.freeze(x.fromCssColorString("#FFF5EE"));x.SIENNA=Object.freeze(x.fromCssColorString("#A0522D"));x.SILVER=Object.freeze(x.fromCssColorString("#C0C0C0"));x.SKYBLUE=Object.freeze(x.fromCssColorString("#87CEEB"));x.SLATEBLUE=Object.freeze(x.fromCssColorString("#6A5ACD"));x.SLATEGRAY=Object.freeze(x.fromCssColorString("#708090"));x.SLATEGREY=x.SLATEGRAY;x.SNOW=Object.freeze(x.fromCssColorString("#FFFAFA"));x.SPRINGGREEN=Object.freeze(x.fromCssColorString("#00FF7F"));x.STEELBLUE=Object.freeze(x.fromCssColorString("#4682B4"));x.TAN=Object.freeze(x.fromCssColorString("#D2B48C"));x.TEAL=Object.freeze(x.fromCssColorString("#008080"));x.THISTLE=Object.freeze(x.fromCssColorString("#D8BFD8"));x.TOMATO=Object.freeze(x.fromCssColorString("#FF6347"));x.TURQUOISE=Object.freeze(x.fromCssColorString("#40E0D0"));x.VIOLET=Object.freeze(x.fromCssColorString("#EE82EE"));x.WHEAT=Object.freeze(x.fromCssColorString("#F5DEB3"));x.WHITE=Object.freeze(x.fromCssColorString("#FFFFFF"));x.WHITESMOKE=Object.freeze(x.fromCssColorString("#F5F5F5"));x.YELLOW=Object.freeze(x.fromCssColorString("#FFFF00"));x.YELLOWGREEN=Object.freeze(x.fromCssColorString("#9ACD32"));x.TRANSPARENT=Object.freeze(new x(0,0,0,0));function Ui(e,t,n,o,i){this._format=e,this._datatype=t,this._width=n,this._height=o,this._buffer=i}Object.defineProperties(Ui.prototype,{internalFormat:{get:function(){return this._format}},pixelDatatype:{get:function(){return this._datatype}},width:{get:function(){return this._width}},height:{get:function(){return this._height}},bufferView:{get:function(){return this._buffer}},arrayBufferView:{get:function(){return this._buffer}}});Ui.clone=function(e){if(l(e))return new Ui(e._format,e._datatype,e._width,e._height,e._buffer)};Ui.prototype.clone=function(){return Ui.clone(this)};const Vl=T.EPSILON10;function ti(e,t,n,o){if(p.defined("equalsEpsilon",t),!l(e))return;n=n??!1;const i=l(o),r=e.length;if(r<2)return e;let a,s=e[0],c,f,d=0,u=-1;for(a=1;a<r;++a)c=e[a],t(s,c,Vl)?(l(f)||(f=e.slice(0,a),d=a-1,u=0),i&&o.push(a)):(l(f)&&(f.push(c),d=a,i&&(u=o.length)),s=c);return n&&t(e[0],e[r-1],Vl)&&(i&&(l(f)?o.splice(u,0,d):o.push(r-1)),l(f)?f.length-=1:f=e.slice(0,-1)),l(f)?f:e}const Jo={},hE=new h,H0=new h,W0=new h,Y0=new h,$0=new Be;Jo.validOutline=function(e){p.defined("positions",e);const n=Be.fromPoints(e,$0).halfAxes,o=B.getColumn(n,0,H0),i=B.getColumn(n,1,W0),r=B.getColumn(n,2,Y0),a=h.magnitude(o),s=h.magnitude(i),c=h.magnitude(r);return!(a===0&&(s===0||c===0)||s===0&&c===0)};Jo.computeProjectTo2DArguments=function(e,t,n,o){p.defined("positions",e),p.defined("centerResult",t),p.defined("planeAxis1Result",n),p.defined("planeAxis2Result",o);const i=Be.fromPoints(e,$0),r=i.halfAxes,a=B.getColumn(r,0,H0),s=B.getColumn(r,1,W0),c=B.getColumn(r,2,Y0),f=h.magnitude(a),d=h.magnitude(s),u=h.magnitude(c),m=Math.min(f,d,u);if(f===0&&(d===0||u===0)||d===0&&u===0)return!1;let _,g;return(m===d||m===u)&&(_=a),m===f?_=s:m===u&&(g=s),(m===f||m===d)&&(g=c),h.normalize(_,n),h.normalize(g,o),h.clone(i.center,t),!0};function X0(e,t,n,o,i){const r=h.subtract(e,t,hE),a=h.dot(n,r),s=h.dot(o,r);return V.fromElements(a,s,i)}Jo.createProjectPointsTo2DFunction=function(e,t,n){return function(o){const i=new Array(o.length);for(let r=0;r<o.length;r++)i[r]=X0(o[r],e,t,n);return i}};Jo.createProjectPointTo2DFunction=function(e,t,n){return function(o,i){return X0(o,e,t,n,i)}};function tf(e,t,n){if(e===0)return t*n;const o=e*e,i=o*o,r=i*o,a=r*o,s=a*o,c=s*o,f=n,d=Math.sin(2*f),u=Math.sin(4*f),m=Math.sin(6*f),_=Math.sin(8*f),g=Math.sin(10*f),y=Math.sin(12*f);return t*((1-o/4-3*i/64-5*r/256-175*a/16384-441*s/65536-4851*c/1048576)*f-(3*o/8+3*i/32+45*r/1024+105*a/4096+2205*s/131072+6237*c/524288)*d+(15*i/256+45*r/1024+525*a/16384+1575*s/65536+155925*c/8388608)*u-(35*r/3072+175*a/12288+3675*s/262144+13475*c/1048576)*m+(315*a/131072+2205*s/524288+43659*c/8388608)*_-(693*s/1310720+6237*c/5242880)*g+1001*c/8388608*y)}function lE(e,t,n){const o=e/n;if(t===0)return o;const i=o*o,r=i*o,a=r*o,s=t,c=s*s,f=c*c,d=f*c,u=d*c,m=u*c,_=m*c,g=Math.sin(2*o),y=Math.cos(2*o),E=Math.sin(4*o),A=Math.cos(4*o),S=Math.sin(6*o),O=Math.cos(6*o),M=Math.sin(8*o),R=Math.cos(8*o),N=Math.sin(10*o),F=Math.cos(10*o),z=Math.sin(12*o);return o+o*c/4+7*o*f/64+15*o*d/256+579*o*u/16384+1515*o*m/65536+16837*o*_/1048576+(3*o*f/16+45*o*d/256-o*(32*i-561)*u/4096-o*(232*i-1677)*m/16384+o*(399985-90560*i+512*a)*_/5242880)*y+(21*o*d/256+483*o*u/4096-o*(224*i-1969)*m/16384-o*(33152*i-112599)*_/1048576)*A+(151*o*u/4096+4681*o*m/65536+1479*o*_/16384-453*r*_/32768)*O+(1097*o*m/65536+42783*o*_/1048576)*R+8011*o*_/1048576*F+(3*c/8+3*f/16+213*d/2048-3*i*d/64+255*u/4096-33*i*u/512+20861*m/524288-33*i*m/512+a*m/1024+28273*_/1048576-471*i*_/8192+9*a*_/4096)*g+(21*f/256+21*d/256+533*u/8192-21*i*u/512+197*m/4096-315*i*m/4096+584039*_/16777216-12517*i*_/131072+7*a*_/2048)*E+(151*d/6144+151*u/4096+5019*m/131072-453*i*m/16384+26965*_/786432-8607*i*_/131072)*S+(1097*u/131072+1097*m/65536+225797*_/10485760-1097*i*_/65536)*M+(8011*m/2621440+8011*_/1048576)*N+293393*_/251658240*z}function Gi(e,t){if(e===0)return Math.log(Math.tan(.5*(T.PI_OVER_TWO+t)));const n=e*Math.sin(t);return Math.log(Math.tan(.5*(T.PI_OVER_TWO+t)))-e/2*Math.log((1+n)/(1-n))}function uE(e,t,n,o,i){const r=Gi(e._ellipticity,n),a=Gi(e._ellipticity,i);return Math.atan2(T.negativePiToPi(o-t),a-r)}function dE(e,t,n,o,i,r,a){const s=e._heading,c=r-o;let f=0;if(T.equalsEpsilon(Math.abs(s),T.PI_OVER_TWO,T.EPSILON8))if(t===n)f=t*Math.cos(i)*T.negativePiToPi(c);else{const d=Math.sin(i);f=t*Math.cos(i)*T.negativePiToPi(c)/Math.sqrt(1-e._ellipticitySquared*d*d)}else{const d=tf(e._ellipticity,t,i);f=(tf(e._ellipticity,t,a)-d)/Math.cos(s)}return Math.abs(f)}const mE=new h,gc=new h;function Z0(e,t,n,o){const i=h.normalize(o.cartographicToCartesian(t,gc),mE),r=h.normalize(o.cartographicToCartesian(n,gc),gc);p.typeOf.number.greaterThanOrEquals("value",Math.abs(Math.abs(h.angleBetween(i,r))-Math.PI),.0125);const a=o.maximumRadius,s=o.minimumRadius,c=a*a,f=s*s;e._ellipticitySquared=(c-f)/c,e._ellipticity=Math.sqrt(e._ellipticitySquared),e._start=le.clone(t,e._start),e._start.height=0,e._end=le.clone(n,e._end),e._end.height=0,e._heading=uE(e,t.longitude,t.latitude,n.longitude,n.latitude),e._distance=dE(e,o.maximumRadius,o.minimumRadius,t.longitude,t.latitude,n.longitude,n.latitude)}function K0(e,t,n,o,i,r){if(n===0)return le.clone(e,r);const a=i*i;let s,c,f;if(Math.abs(T.PI_OVER_TWO-Math.abs(t))>T.EPSILON8){const d=tf(i,o,e.latitude),u=n*Math.cos(t),m=d+u;if(c=lE(m,i,o),Math.abs(t)<T.EPSILON10)s=T.negativePiToPi(e.longitude);else{const _=Gi(i,e.latitude),g=Gi(i,c);f=Math.tan(t)*(g-_),s=T.negativePiToPi(e.longitude+f)}}else{c=e.latitude;let d;if(i===0)d=o*Math.cos(e.latitude);else{const u=Math.sin(e.latitude);d=o*Math.cos(e.latitude)/Math.sqrt(1-a*u*u)}f=n/d,t>0?s=T.negativePiToPi(e.longitude+f):s=T.negativePiToPi(e.longitude-f)}return l(r)?(r.longitude=s,r.latitude=c,r.height=0,r):new le(s,c,0)}function $t(e,t,n){const o=n??be.default;this._ellipsoid=o,this._start=new le,this._end=new le,this._heading=void 0,this._distance=void 0,this._ellipticity=void 0,this._ellipticitySquared=void 0,l(e)&&l(t)&&Z0(this,e,t,o)}Object.defineProperties($t.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return p.defined("distance",this._distance),this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},heading:{get:function(){return p.defined("distance",this._distance),this._heading}}});$t.fromStartHeadingDistance=function(e,t,n,o,i){p.defined("start",e),p.defined("heading",t),p.defined("distance",n),p.typeOf.number.greaterThan("distance",n,0);const r=o??be.default,a=r.maximumRadius,s=r.minimumRadius,c=a*a,f=s*s,d=Math.sqrt((c-f)/c);t=T.negativePiToPi(t);const u=K0(e,t,n,r.maximumRadius,d);return!l(i)||l(o)&&!o.equals(i.ellipsoid)?new $t(e,u,r):(i.setEndPoints(e,u),i)};$t.prototype.setEndPoints=function(e,t){p.defined("start",e),p.defined("end",t),Z0(this,e,t,this._ellipsoid)};$t.prototype.interpolateUsingFraction=function(e,t){return this.interpolateUsingSurfaceDistance(e*this._distance,t)};$t.prototype.interpolateUsingSurfaceDistance=function(e,t){if(p.typeOf.number("distance",e),!l(this._distance)||this._distance===0)throw new w("EllipsoidRhumbLine must have distinct start and end set.");return K0(this._start,this._heading,e,this._ellipsoid.maximumRadius,this._ellipticity,t)};$t.prototype.findIntersectionWithLongitude=function(e,t){if(p.typeOf.number("intersectionLongitude",e),!l(this._distance)||this._distance===0)throw new w("EllipsoidRhumbLine must have distinct start and end set.");const n=this._ellipticity,o=this._heading,i=Math.abs(o),r=this._start;if(e=T.negativePiToPi(e),T.equalsEpsilon(Math.abs(e),Math.PI,T.EPSILON14)&&(e=T.sign(r.longitude)*Math.PI),l(t)||(t=new le),Math.abs(T.PI_OVER_TWO-i)<=T.EPSILON8)return t.longitude=e,t.latitude=r.latitude,t.height=0,t;if(T.equalsEpsilon(Math.abs(T.PI_OVER_TWO-i),T.PI_OVER_TWO,T.EPSILON8))return T.equalsEpsilon(e,r.longitude,T.EPSILON12)?void 0:(t.longitude=e,t.latitude=T.PI_OVER_TWO*T.sign(T.PI_OVER_TWO-o),t.height=0,t);const a=r.latitude,s=n*Math.sin(a),c=Math.tan(.5*(T.PI_OVER_TWO+a))*Math.exp((e-r.longitude)/Math.tan(o)),f=(1+s)/(1-s);let d=r.latitude,u;do{u=d;const m=n*Math.sin(u),_=(1+m)/(1-m);d=2*Math.atan(c*Math.pow(_/f,n/2))-T.PI_OVER_TWO}while(!T.equalsEpsilon(d,u,T.EPSILON12));return t.longitude=e,t.latitude=d,t.height=0,t};$t.prototype.findIntersectionWithLatitude=function(e,t){if(p.typeOf.number("intersectionLatitude",e),!l(this._distance)||this._distance===0)throw new w("EllipsoidRhumbLine must have distinct start and end set.");const n=this._ellipticity,o=this._heading,i=this._start;if(T.equalsEpsilon(Math.abs(o),T.PI_OVER_TWO,T.EPSILON8))return;const r=Gi(n,i.latitude),a=Gi(n,e),s=Math.tan(o)*(a-r),c=T.negativePiToPi(i.longitude+s);return l(t)?(t.longitude=c,t.latitude=e,t.height=0,t):new le(c,e,0)};function nf(e,t){this.positions=l(e)?e:[],this.holes=l(t)?t:[]}function pE(e,t,n=2){const o=t&&t.length,i=o?t[0]*n:e.length;let r=Q0(e,0,i,n,!0);const a=[];if(!r||r.next===r.prev)return a;let s,c,f;if(o&&(r=EE(e,t,r,n)),e.length>80*n){s=e[0],c=e[1];let d=s,u=c;for(let m=n;m<i;m+=n){const _=e[m],g=e[m+1];_<s&&(s=_),g<c&&(c=g),_>d&&(d=_),g>u&&(u=g)}f=Math.max(d-s,u-c),f=f!==0?32767/f:0}return Ir(r,a,n,s,c,f,0),a}function Q0(e,t,n,o,i){let r;if(i===PE(e,t,n,o)>0)for(let a=t;a<n;a+=o)r=Hl(a/o|0,e[a],e[a+1],r);else for(let a=n-o;a>=t;a-=o)r=Hl(a/o|0,e[a],e[a+1],r);return r&&qi(r,r.next)&&(Nr(r),r=r.next),r}function ni(e,t){if(!e)return e;t||(t=e);let n=e,o;do if(o=!1,!n.steiner&&(qi(n,n.next)||dt(n.prev,n,n.next)===0)){if(Nr(n),n=t=n.prev,n===n.next)break;o=!0}else n=n.next;while(o||n!==t);return t}function Ir(e,t,n,o,i,r,a){if(!e)return;!a&&r&&AE(e,o,i,r);let s=e;for(;e.prev!==e.next;){const c=e.prev,f=e.next;if(r?gE(e,o,i,r):_E(e)){t.push(c.i,e.i,f.i),Nr(e),e=f.next,s=f.next;continue}if(e=f,e===s){a?a===1?(e=yE(ni(e),t),Ir(e,t,n,o,i,r,2)):a===2&&bE(e,t,n,o,i,r):Ir(ni(e),t,n,o,i,r,1);break}}}function _E(e){const t=e.prev,n=e,o=e.next;if(dt(t,n,o)>=0)return!1;const i=t.x,r=n.x,a=o.x,s=t.y,c=n.y,f=o.y,d=Math.min(i,r,a),u=Math.min(s,c,f),m=Math.max(i,r,a),_=Math.max(s,c,f);let g=o.next;for(;g!==t;){if(g.x>=d&&g.x<=m&&g.y>=u&&g.y<=_&&dr(i,s,r,c,a,f,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gE(e,t,n,o){const i=e.prev,r=e,a=e.next;if(dt(i,r,a)>=0)return!1;const s=i.x,c=r.x,f=a.x,d=i.y,u=r.y,m=a.y,_=Math.min(s,c,f),g=Math.min(d,u,m),y=Math.max(s,c,f),E=Math.max(d,u,m),A=of(_,g,t,n,o),S=of(y,E,t,n,o);let O=e.prevZ,M=e.nextZ;for(;O&&O.z>=A&&M&&M.z<=S;){if(O.x>=_&&O.x<=y&&O.y>=g&&O.y<=E&&O!==i&&O!==a&&dr(s,d,c,u,f,m,O.x,O.y)&&dt(O.prev,O,O.next)>=0||(O=O.prevZ,M.x>=_&&M.x<=y&&M.y>=g&&M.y<=E&&M!==i&&M!==a&&dr(s,d,c,u,f,m,M.x,M.y)&&dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;O&&O.z>=A;){if(O.x>=_&&O.x<=y&&O.y>=g&&O.y<=E&&O!==i&&O!==a&&dr(s,d,c,u,f,m,O.x,O.y)&&dt(O.prev,O,O.next)>=0)return!1;O=O.prevZ}for(;M&&M.z<=S;){if(M.x>=_&&M.x<=y&&M.y>=g&&M.y<=E&&M!==i&&M!==a&&dr(s,d,c,u,f,m,M.x,M.y)&&dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function yE(e,t){let n=e;do{const o=n.prev,i=n.next.next;!qi(o,i)&&ed(o,n,n.next,i)&&zr(o,i)&&zr(i,o)&&(t.push(o.i,n.i,i.i),Nr(n),Nr(n.next),n=e=i),n=n.next}while(n!==e);return ni(n)}function bE(e,t,n,o,i,r){let a=e;do{let s=a.next.next;for(;s!==a.prev;){if(a.i!==s.i&&CE(a,s)){let c=td(a,s);a=ni(a,a.next),c=ni(c,c.next),Ir(a,t,n,o,i,r,0),Ir(c,t,n,o,i,r,0);return}s=s.next}a=a.next}while(a!==e)}function EE(e,t,n,o){const i=[];for(let r=0,a=t.length;r<a;r++){const s=t[r]*o,c=r<a-1?t[r+1]*o:e.length,f=Q0(e,s,c,o,!1);f===f.next&&(f.steiner=!0),i.push(OE(f))}i.sort(wE);for(let r=0;r<i.length;r++)n=vE(i[r],n);return n}function wE(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){const o=(e.next.y-e.y)/(e.next.x-e.x),i=(t.next.y-t.y)/(t.next.x-t.x);n=o-i}return n}function vE(e,t){const n=TE(e,t);if(!n)return t;const o=td(n,e);return ni(o,o.next),ni(n,n.next)}function TE(e,t){let n=t;const o=e.x,i=e.y;let r=-1/0,a;if(qi(e,n))return n;do{if(qi(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){const u=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=o&&u>r&&(r=u,a=n.x<n.next.x?n:n.next,u===o))return a}n=n.next}while(n!==t);if(!a)return null;const s=a,c=a.x,f=a.y;let d=1/0;n=a;do{if(o>=n.x&&n.x>=c&&o!==n.x&&J0(i<f?o:r,i,c,f,i<f?r:o,i,n.x,n.y)){const u=Math.abs(i-n.y)/(o-n.x);zr(n,e)&&(u<d||u===d&&(n.x>a.x||n.x===a.x&&SE(a,n)))&&(a=n,d=u)}n=n.next}while(n!==s);return a}function SE(e,t){return dt(e.prev,e,t.prev)<0&&dt(t.next,e,e.next)<0}function AE(e,t,n,o){let i=e;do i.z===0&&(i.z=of(i.x,i.y,t,n,o)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,xE(i)}function xE(e){let t,n=1;do{let o=e,i;e=null;let r=null;for(t=0;o;){t++;let a=o,s=0;for(let f=0;f<n&&(s++,a=a.nextZ,!!a);f++);let c=n;for(;s>0||c>0&&a;)s!==0&&(c===0||!a||o.z<=a.z)?(i=o,o=o.nextZ,s--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:e=i,i.prevZ=r,r=i;o=a}r.nextZ=null,n*=2}while(t>1);return e}function of(e,t,n,o,i){return e=(e-n)*i|0,t=(t-o)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function OE(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function J0(e,t,n,o,i,r,a,s){return(i-a)*(t-s)>=(e-a)*(r-s)&&(e-a)*(o-s)>=(n-a)*(t-s)&&(n-a)*(r-s)>=(i-a)*(o-s)}function dr(e,t,n,o,i,r,a,s){return!(e===a&&t===s)&&J0(e,t,n,o,i,r,a,s)}function CE(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ME(e,t)&&(zr(e,t)&&zr(t,e)&&RE(e,t)&&(dt(e.prev,e,t.prev)||dt(e,t.prev,t))||qi(e,t)&&dt(e.prev,e,e.next)>0&&dt(t.prev,t,t.next)>0)}function dt(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function qi(e,t){return e.x===t.x&&e.y===t.y}function ed(e,t,n,o){const i=Ma(dt(e,t,n)),r=Ma(dt(e,t,o)),a=Ma(dt(n,o,e)),s=Ma(dt(n,o,t));return!!(i!==r&&a!==s||i===0&&Ca(e,n,t)||r===0&&Ca(e,o,t)||a===0&&Ca(n,e,o)||s===0&&Ca(n,t,o))}function Ca(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ma(e){return e>0?1:e<0?-1:0}function ME(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&ed(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function zr(e,t){return dt(e.prev,e,e.next)<0?dt(e,t,e.next)>=0&&dt(e,e.prev,t)>=0:dt(e,t,e.prev)<0||dt(e,e.next,t)<0}function RE(e,t){let n=e,o=!1;const i=(e.x+t.x)/2,r=(e.y+t.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&i<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(o=!o),n=n.next;while(n!==e);return o}function td(e,t){const n=rf(e.i,e.x,e.y),o=rf(t.i,t.x,t.y),i=e.next,r=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,o.next=n,n.prev=o,r.next=o,o.prev=r,o}function Hl(e,t,n,o){const i=rf(e,t,n);return o?(i.next=o.next,i.prev=o,o.next.prev=i,o.next=i):(i.prev=i,i.next=i),i}function Nr(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function rf(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function PE(e,t,n,o){let i=0;for(let r=t,a=n-o;r<n;r+=o)i+=(e[a]-e[r])*(e[r+1]+e[a+1]),a=r;return i}const qa={CLOCKWISE:I.CW,COUNTER_CLOCKWISE:I.CCW};qa.validate=function(e){return e===qa.CLOCKWISE||e===qa.COUNTER_CLOCKWISE};const ki=Object.freeze(qa),IE=new h,zE=new h,pn={};pn.computeArea2D=function(e){p.defined("positions",e),p.typeOf.number.greaterThanOrEquals("positions.length",e.length,3);const t=e.length;let n=0;for(let o=t-1,i=0;i<t;o=i++){const r=e[o],a=e[i];n+=r.x*a.y-a.x*r.y}return n*.5};pn.computeWindingOrder2D=function(e){return pn.computeArea2D(e)>0?ki.COUNTER_CLOCKWISE:ki.CLOCKWISE};pn.triangulate=function(e,t){p.defined("positions",e);const n=V.packArray(e);return pE(n,t,2)};const nd=new h,od=new h,id=new h,Wl=new h,Yl=new h,$l=new h,ho=new h,rd=new V,ad=new V,sd=new V,Ri=new V;pn.computeSubdivision=function(e,t,n,o,i){i=i??T.RADIANS_PER_DEGREE;const r=l(o);p.typeOf.object("ellipsoid",e),p.defined("positions",t),p.defined("indices",n),p.typeOf.number.greaterThanOrEquals("indices.length",n.length,3),p.typeOf.number.equals("indices.length % 3","0",n.length%3,0),p.typeOf.number.greaterThan("granularity",i,0);const a=n.slice(0);let s;const c=t.length,f=new Array(c*3),d=new Array(c*2);let u=0,m=0;for(s=0;s<c;s++){const O=t[s];if(f[u++]=O.x,f[u++]=O.y,f[u++]=O.z,r){const M=o[s];d[m++]=M.x,d[m++]=M.y}}const _=[],g={},y=e.maximumRadius,E=T.chordLength(i,y),A=E*E;for(;a.length>0;){const O=a.pop(),M=a.pop(),R=a.pop(),N=h.fromArray(f,R*3,nd),F=h.fromArray(f,M*3,od),z=h.fromArray(f,O*3,id);let G,q,k;r&&(G=V.fromArray(d,R*2,rd),q=V.fromArray(d,M*2,ad),k=V.fromArray(d,O*2,sd));const X=h.multiplyByScalar(h.normalize(N,Wl),y,Wl),b=h.multiplyByScalar(h.normalize(F,Yl),y,Yl),v=h.multiplyByScalar(h.normalize(z,$l),y,$l),C=h.magnitudeSquared(h.subtract(X,b,ho)),D=h.magnitudeSquared(h.subtract(b,v,ho)),H=h.magnitudeSquared(h.subtract(v,X,ho)),Z=Math.max(C,D,H);let J,K,te;Z>A?C===Z?(J=`${Math.min(R,M)} ${Math.max(R,M)}`,s=g[J],l(s)||(K=h.add(N,F,ho),h.multiplyByScalar(K,.5,K),f.push(K.x,K.y,K.z),s=f.length/3-1,g[J]=s,r&&(te=V.add(G,q,Ri),V.multiplyByScalar(te,.5,te),d.push(te.x,te.y))),a.push(R,s,O),a.push(s,M,O)):D===Z?(J=`${Math.min(M,O)} ${Math.max(M,O)}`,s=g[J],l(s)||(K=h.add(F,z,ho),h.multiplyByScalar(K,.5,K),f.push(K.x,K.y,K.z),s=f.length/3-1,g[J]=s,r&&(te=V.add(q,k,Ri),V.multiplyByScalar(te,.5,te),d.push(te.x,te.y))),a.push(M,s,R),a.push(s,O,R)):H===Z&&(J=`${Math.min(O,R)} ${Math.max(O,R)}`,s=g[J],l(s)||(K=h.add(z,N,ho),h.multiplyByScalar(K,.5,K),f.push(K.x,K.y,K.z),s=f.length/3-1,g[J]=s,r&&(te=V.add(k,G,Ri),V.multiplyByScalar(te,.5,te),d.push(te.x,te.y))),a.push(O,s,M),a.push(s,R,M)):(_.push(R),_.push(M),_.push(O))}const S={attributes:{position:new Ue({componentDatatype:ue.DOUBLE,componentsPerAttribute:3,values:f})},indices:_,primitiveType:qe.TRIANGLES};return r&&(S.attributes.st=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:2,values:d})),new tt(S)};const NE=new le,DE=new le,LE=new le,yc=new le;pn.computeRhumbLineSubdivision=function(e,t,n,o,i){i=i??T.RADIANS_PER_DEGREE;const r=l(o);p.typeOf.object("ellipsoid",e),p.defined("positions",t),p.defined("indices",n),p.typeOf.number.greaterThanOrEquals("indices.length",n.length,3),p.typeOf.number.equals("indices.length % 3","0",n.length%3,0),p.typeOf.number.greaterThan("granularity",i,0);const a=n.slice(0);let s;const c=t.length,f=new Array(c*3),d=new Array(c*2);let u=0,m=0;for(s=0;s<c;s++){const R=t[s];if(f[u++]=R.x,f[u++]=R.y,f[u++]=R.z,r){const N=o[s];d[m++]=N.x,d[m++]=N.y}}const _=[],g={},y=e.maximumRadius,E=T.chordLength(i,y),A=new $t(void 0,void 0,e),S=new $t(void 0,void 0,e),O=new $t(void 0,void 0,e);for(;a.length>0;){const R=a.pop(),N=a.pop(),F=a.pop(),z=h.fromArray(f,F*3,nd),G=h.fromArray(f,N*3,od),q=h.fromArray(f,R*3,id);let k,X,b;r&&(k=V.fromArray(d,F*2,rd),X=V.fromArray(d,N*2,ad),b=V.fromArray(d,R*2,sd));const v=e.cartesianToCartographic(z,NE),C=e.cartesianToCartographic(G,DE),D=e.cartesianToCartographic(q,LE);A.setEndPoints(v,C);const H=A.surfaceDistance;S.setEndPoints(C,D);const Z=S.surfaceDistance;O.setEndPoints(D,v);const J=O.surfaceDistance,K=Math.max(H,Z,J);let te,he,we,Te,ve;K>E?H===K?(te=`${Math.min(F,N)} ${Math.max(F,N)}`,s=g[te],l(s)||(he=A.interpolateUsingFraction(.5,yc),we=(v.height+C.height)*.5,Te=h.fromRadians(he.longitude,he.latitude,we,e,ho),f.push(Te.x,Te.y,Te.z),s=f.length/3-1,g[te]=s,r&&(ve=V.add(k,X,Ri),V.multiplyByScalar(ve,.5,ve),d.push(ve.x,ve.y))),a.push(F,s,R),a.push(s,N,R)):Z===K?(te=`${Math.min(N,R)} ${Math.max(N,R)}`,s=g[te],l(s)||(he=S.interpolateUsingFraction(.5,yc),we=(C.height+D.height)*.5,Te=h.fromRadians(he.longitude,he.latitude,we,e,ho),f.push(Te.x,Te.y,Te.z),s=f.length/3-1,g[te]=s,r&&(ve=V.add(X,b,Ri),V.multiplyByScalar(ve,.5,ve),d.push(ve.x,ve.y))),a.push(N,s,F),a.push(s,R,F)):J===K&&(te=`${Math.min(R,F)} ${Math.max(R,F)}`,s=g[te],l(s)||(he=O.interpolateUsingFraction(.5,yc),we=(D.height+v.height)*.5,Te=h.fromRadians(he.longitude,he.latitude,we,e,ho),f.push(Te.x,Te.y,Te.z),s=f.length/3-1,g[te]=s,r&&(ve=V.add(b,k,Ri),V.multiplyByScalar(ve,.5,ve),d.push(ve.x,ve.y))),a.push(R,s,N),a.push(s,F,N)):(_.push(F),_.push(N),_.push(R))}const M={attributes:{position:new Ue({componentDatatype:ue.DOUBLE,componentsPerAttribute:3,values:f})},indices:_,primitiveType:qe.TRIANGLES};return r&&(M.attributes.st=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:2,values:d})),new tt(M)};pn.scaleToGeodeticHeight=function(e,t,n,o){n=n??be.default;let i=IE,r=zE;if(t=t??0,o=o??!0,l(e)){const a=e.length;for(let s=0;s<a;s+=3)h.fromArray(e,s,r),o&&(r=n.scaleToGeodeticSurface(r,r)),t!==0&&(i=n.geodeticSurfaceNormal(r,i),h.multiplyByScalar(i,t,i),h.add(r,i,r)),e[s]=r.x,e[s+1]=r.y,e[s+2]=r.z}return e};function Eo(){this._array=[],this._offset=0,this._length=0}Object.defineProperties(Eo.prototype,{length:{get:function(){return this._length}}});Eo.prototype.enqueue=function(e){this._array.push(e),this._length++};Eo.prototype.dequeue=function(){if(this._length===0)return;const e=this._array;let t=this._offset;const n=e[t];return e[t]=void 0,t++,t>10&&t*2>e.length&&(this._array=e.slice(t),t=0),this._offset=t,this._length--,n};Eo.prototype.peek=function(){if(this._length!==0)return this._array[this._offset]};Eo.prototype.contains=function(e){return this._array.indexOf(e)!==-1};Eo.prototype.clear=function(){this._array.length=this._offset=this._length=0};Eo.prototype.sort=function(e){this._offset>0&&(this._array=this._array.slice(this._offset),this._offset=0),this._array.sort(e)};const je={};je.computeHierarchyPackedLength=function(e,t){let n=0;const o=[e];for(;o.length>0;){const i=o.pop();if(!l(i))continue;n+=2;const r=i.positions,a=i.holes;if(l(r)&&r.length>0&&(n+=r.length*t.packedLength),l(a)){const s=a.length;for(let c=0;c<s;++c)o.push(a[c])}}return n};je.packPolygonHierarchy=function(e,t,n,o){const i=[e];for(;i.length>0;){const r=i.pop();if(!l(r))continue;const a=r.positions,s=r.holes;if(t[n++]=l(a)?a.length:0,t[n++]=l(s)?s.length:0,l(a)){const c=a.length;for(let f=0;f<c;++f,n+=o.packedLength)o.pack(a[f],t,n)}if(l(s)){const c=s.length;for(let f=0;f<c;++f)i.push(s[f])}}return n};je.unpackPolygonHierarchy=function(e,t,n){const o=e[t++],i=e[t++],r=new Array(o),a=i>0?new Array(i):void 0;for(let s=0;s<o;++s,t+=n.packedLength)r[s]=n.unpack(e,t);for(let s=0;s<i;++s)a[s]=je.unpackPolygonHierarchy(e,t,n),t=a[s].startingIndex,delete a[s].startingIndex;return{positions:r,holes:a,startingIndex:t}};const Yo=new V;function cd(e,t,n,o){return V.subtract(t,e,Yo),V.multiplyByScalar(Yo,n/o,Yo),V.add(e,Yo,Yo),[Yo.x,Yo.y]}const Oo=new h;function FE(e,t,n,o){return h.subtract(t,e,Oo),h.multiplyByScalar(Oo,n/o,Oo),h.add(e,Oo,Oo),[Oo.x,Oo.y,Oo.z]}je.subdivideLineCount=function(e,t,n){const i=h.distance(e,t)/n,r=Math.max(0,Math.ceil(T.log2(i)));return Math.pow(2,r)};const As=new le,xs=new le,BE=new le,UE=new h,fs=new $t;je.subdivideRhumbLineCount=function(e,t,n,o){const i=e.cartesianToCartographic(t,As),r=e.cartesianToCartographic(n,xs),s=new $t(i,r,e).surfaceDistance/o,c=Math.max(0,Math.ceil(T.log2(s)));return Math.pow(2,c)};je.subdivideTexcoordLine=function(e,t,n,o,i,r){const a=je.subdivideLineCount(n,o,i),s=V.distance(e,t),c=s/a,f=r;f.length=a*2;let d=0;for(let u=0;u<a;u++){const m=cd(e,t,u*c,s);f[d++]=m[0],f[d++]=m[1]}return f};je.subdivideLine=function(e,t,n,o){const i=je.subdivideLineCount(e,t,n),r=h.distance(e,t),a=r/i;l(o)||(o=[]);const s=o;s.length=i*3;let c=0;for(let f=0;f<i;f++){const d=FE(e,t,f*a,r);s[c++]=d[0],s[c++]=d[1],s[c++]=d[2]}return s};je.subdivideTexcoordRhumbLine=function(e,t,n,o,i,r,a){const s=n.cartesianToCartographic(o,As),c=n.cartesianToCartographic(i,xs);fs.setEndPoints(s,c);const f=fs.surfaceDistance/r,d=Math.max(0,Math.ceil(T.log2(f))),u=Math.pow(2,d),m=V.distance(e,t),_=m/u,g=a;g.length=u*2;let y=0;for(let E=0;E<u;E++){const A=cd(e,t,E*_,m);g[y++]=A[0],g[y++]=A[1]}return g};je.subdivideRhumbLine=function(e,t,n,o,i){const r=e.cartesianToCartographic(t,As),a=e.cartesianToCartographic(n,xs),s=new $t(r,a,e);if(l(i)||(i=[]),s.surfaceDistance<=o)return i.length=3,i[0]=t.x,i[1]=t.y,i[2]=t.z,i;const c=s.surfaceDistance/o,f=Math.max(0,Math.ceil(T.log2(c))),d=Math.pow(2,f),u=s.surfaceDistance/d,m=i;m.length=d*3;let _=0;for(let g=0;g<d;g++){const y=s.interpolateUsingSurfaceDistance(g*u,BE),E=e.cartographicToCartesian(y,UE);m[_++]=E.x,m[_++]=E.y,m[_++]=E.z}return m};const GE=new h,qE=new h,kE=new h,jE=new h;je.scaleToGeodeticHeightExtruded=function(e,t,n,o,i){o=o??be.default;const r=GE;let a=qE;const s=kE;let c=jE;if(l(e)&&l(e.attributes)&&l(e.attributes.position)){const f=e.attributes.position.values,d=f.length/2;for(let u=0;u<d;u+=3)h.fromArray(f,u,s),o.geodeticSurfaceNormal(s,r),c=o.scaleToGeodeticSurface(s,c),a=h.multiplyByScalar(r,n,a),a=h.add(c,a,a),f[u+d]=a.x,f[u+1+d]=a.y,f[u+2+d]=a.z,i&&(c=h.clone(s,c)),a=h.multiplyByScalar(r,t,a),a=h.add(c,a,a),f[u]=a.x,f[u+1]=a.y,f[u+2]=a.z}return e};je.polygonOutlinesFromHierarchy=function(e,t,n){const o=[],i=new Eo;i.enqueue(e);let r,a,s;for(;i.length!==0;){const c=i.dequeue();let f=c.positions;if(t)for(s=f.length,r=0;r<s;r++)n.scaleToGeodeticSurface(f[r],f[r]);if(f=ti(f,h.equalsEpsilon,!0),f.length<3)continue;const d=c.holes?c.holes.length:0;for(r=0;r<d;r++){const u=c.holes[r];let m=u.positions;if(t)for(s=m.length,a=0;a<s;++a)n.scaleToGeodeticSurface(m[a],m[a]);if(m=ti(m,h.equalsEpsilon,!0),m.length<3)continue;o.push(m);let _=0;for(l(u.holes)&&(_=u.holes.length),a=0;a<_;a++)i.enqueue(u.holes[a])}o.push(f)}return o};const VE=new le;function HE(e,t,n){const o=n.cartesianToCartographic(e,As),i=n.cartesianToCartographic(t,xs);if(Math.sign(o.latitude)===Math.sign(i.latitude))return;fs.setEndPoints(o,i);const r=fs.findIntersectionWithLatitude(0,VE);if(!l(r))return;let a=Math.min(o.longitude,i.longitude),s=Math.max(o.longitude,i.longitude);if(Math.abs(s-a)>T.PI){const c=a;a=s,s=c}if(!(r.longitude<a||r.longitude>s))return n.cartographicToCartesian(r)}function WE(e,t,n,o){if(o===Ko.RHUMB)return HE(e,t,n);const i=ke.lineSegmentPlane(e,t,De.ORIGIN_XY_PLANE);if(l(i))return n.scaleToGeodeticSurface(i,i)}const YE=new le;function $E(e,t,n){const o=[];let i,r,a,s,c,f=0;for(;f<e.length;){i=e[f],r=e[(f+1)%e.length],a=T.sign(i.z),s=T.sign(r.z);const d=u=>t.cartesianToCartographic(u,YE).longitude;if(a===0)o.push({position:f,type:a,visited:!1,next:s,theta:d(i)});else if(s!==0){if(c=WE(i,r,t,n),++f,!l(c))continue;e.splice(f,0,c),o.push({position:f,type:a,visited:!1,next:s,theta:d(c)})}++f}return o}function fd(e,t,n,o,i,r,a){const s=[];let c=r;const f=u=>m=>m.position===u,d=[];do{const u=n[c];s.push(u);const m=o.findIndex(f(c)),_=o[m];if(!l(_)){++c;continue}const{visited:g,type:y,next:E}=_;if(_.visited=!0,y===0){if(E===0){const M=o[m-(a?1:-1)];if((M==null?void 0:M.position)===c+1)M.visited=!0;else{++c;continue}}if(!g&&a&&E>0||r===c&&!a&&E<0){++c;continue}}if(!(a?y>=0:y<=0)){++c;continue}g||d.push(c);const S=m+(a?1:-1),O=o[S];if(!l(O)){++c;continue}c=O.position}while(c<n.length&&c>=0&&c!==r&&s.length<n.length);e.splice(t,i,s);for(const u of d)t=fd(e,++t,n,o,0,u,!a);return t}je.splitPolygonsOnEquator=function(e,t,n,o){l(o)||(o=[]),o.splice(0,0,...e),o.length=e.length;let i=0;for(;i<o.length;){const r=o[i],a=r.slice();if(r.length<3){o[i]=a,++i;continue}const s=$E(a,t,n);if(a.length===r.length||s.length<=1){o[i]=a,++i;continue}s.sort((f,d)=>f.theta-d.theta);const c=a[0].z>=0;i=fd(o,i,a,s,1,0,c)}return o};je.polygonsFromHierarchy=function(e,t,n,o,i,r){const a=[],s=[],c=new Eo;c.enqueue(e);let f=l(r);for(;c.length!==0;){const d=c.dequeue();let u=d.positions;const m=d.holes;let _,g;if(o)for(g=u.length,_=0;_<g;_++)i.scaleToGeodeticSurface(u[_],u[_]);if(t||(u=ti(u,h.equalsEpsilon,!0)),u.length<3)continue;let y=n(u);if(!l(y))continue;const E=[];let A=pn.computeWindingOrder2D(y);if(A===ki.CLOCKWISE&&(y.reverse(),u=u.slice().reverse()),f){f=!1;let N=[u];if(N=r(N,N),N.length>1){for(const F of N)c.enqueue(new nf(F,m));continue}}let S=u.slice();const O=l(m)?m.length:0,M=[];let R;for(_=0;_<O;_++){const N=m[_];let F=N.positions;if(o)for(g=F.length,R=0;R<g;++R)i.scaleToGeodeticSurface(F[R],F[R]);if(t||(F=ti(F,h.equalsEpsilon,!0)),F.length<3)continue;const z=n(F);if(!l(z))continue;A=pn.computeWindingOrder2D(z),A===ki.CLOCKWISE&&(z.reverse(),F=F.slice().reverse()),M.push(F),E.push(S.length),S=S.concat(F),y=y.concat(z);let G=0;for(l(N.holes)&&(G=N.holes.length),R=0;R<G;R++)c.enqueue(N.holes[R])}a.push({outerRing:u,holes:M}),s.push({positions:S,positions2D:y,holes:E})}return{hierarchy:a,polygons:s}};const XE=new V,ZE=new h,KE=new oe,QE=new B;je.computeBoundingRectangle=function(e,t,n,o,i){const r=oe.fromAxisAngle(e,o,KE),a=B.fromQuaternion(r,QE);let s=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,f=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;const u=n.length;for(let m=0;m<u;++m){const _=h.clone(n[m],ZE);B.multiplyByVector(a,_,_);const g=t(_,XE);l(g)&&(s=Math.min(s,g.x),c=Math.max(c,g.x),f=Math.min(f,g.y),d=Math.max(d,g.y))}return i.x=s,i.y=f,i.width=c-s,i.height=d-f,i};je.createGeometryFromPositions=function(e,t,n,o,i,r,a){let s=pn.triangulate(t.positions2D,t.holes);s.length<3&&(s=[0,1,2]);const c=t.positions,f=l(n),d=f?n.positions:void 0;if(i){const u=c.length,m=new Array(u*3);let _=0;for(let E=0;E<u;E++){const A=c[E];m[_++]=A.x,m[_++]=A.y,m[_++]=A.z}const g={attributes:{position:new Ue({componentDatatype:ue.DOUBLE,componentsPerAttribute:3,values:m})},indices:s,primitiveType:qe.TRIANGLES};f&&(g.attributes.st=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:2,values:V.packArray(d)}));const y=new tt(g);return r.normal?We.computeNormal(y):y}if(a===Ko.GEODESIC)return pn.computeSubdivision(e,c,s,d,o);if(a===Ko.RHUMB)return pn.computeRhumbLineSubdivision(e,c,s,d,o)};const Xl=[],Zl=[],JE=new h,ew=new h;je.computeWallGeometry=function(e,t,n,o,i,r){let a,s,c,f,d,u,m,_,g,y=e.length,E=0,A=0;const S=l(t),O=S?t.positions:void 0;if(i)for(s=y*3*2,a=new Array(s*2),S&&(g=y*2*2,_=new Array(g*2)),c=0;c<y;c++)f=e[c],d=e[(c+1)%y],a[E]=a[E+s]=f.x,++E,a[E]=a[E+s]=f.y,++E,a[E]=a[E+s]=f.z,++E,a[E]=a[E+s]=d.x,++E,a[E]=a[E+s]=d.y,++E,a[E]=a[E+s]=d.z,++E,S&&(u=O[c],m=O[(c+1)%y],_[A]=_[A+g]=u.x,++A,_[A]=_[A+g]=u.y,++A,_[A]=_[A+g]=m.x,++A,_[A]=_[A+g]=m.y,++A);else{const z=T.chordLength(o,n.maximumRadius);let G=0;if(r===Ko.GEODESIC)for(c=0;c<y;c++)G+=je.subdivideLineCount(e[c],e[(c+1)%y],z);else if(r===Ko.RHUMB)for(c=0;c<y;c++)G+=je.subdivideRhumbLineCount(n,e[c],e[(c+1)%y],z);for(s=(G+y)*3,a=new Array(s*2),S&&(g=(G+y)*2,_=new Array(g*2)),c=0;c<y;c++){f=e[c],d=e[(c+1)%y];let q,k;S&&(u=O[c],m=O[(c+1)%y]),r===Ko.GEODESIC?(q=je.subdivideLine(f,d,z,Zl),S&&(k=je.subdivideTexcoordLine(u,m,f,d,z,Xl))):r===Ko.RHUMB&&(q=je.subdivideRhumbLine(n,f,d,z,Zl),S&&(k=je.subdivideTexcoordRhumbLine(u,m,n,f,d,z,Xl)));const X=q.length;for(let b=0;b<X;++b,++E)a[E]=q[b],a[E+s]=q[b];if(a[E]=d.x,a[E+s]=d.x,++E,a[E]=d.y,a[E+s]=d.y,++E,a[E]=d.z,a[E+s]=d.z,++E,S){const b=k.length;for(let v=0;v<b;++v,++A)_[A]=k[v],_[A+g]=k[v];_[A]=m.x,_[A+g]=m.x,++A,_[A]=m.y,_[A+g]=m.y,++A}}}y=a.length;const M=gt.createTypedArray(y/3,y-e.length*6);let R=0;for(y/=6,c=0;c<y;c++){const z=c,G=z+1,q=z+y,k=q+1;f=h.fromArray(a,z*3,JE),d=h.fromArray(a,G*3,ew),!h.equalsEpsilon(f,d,T.EPSILON10,T.EPSILON10)&&(M[R++]=z,M[R++]=q,M[R++]=G,M[R++]=G,M[R++]=q,M[R++]=k)}const N={attributes:new Wr({position:new Ue({componentDatatype:ue.DOUBLE,componentsPerAttribute:3,values:a})}),indices:M,primitiveType:qe.TRIANGLES};return S&&(N.attributes.st=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:2,values:_})),new tt(N)};const tw=new h,nw=new ot,ow=new V,iw=new V,rw=new h,aw=new h,sw=new h,ar=new h,cw=new h,fw=new h,Kl=new oe,hw=new B,lw=new B,uw=new h;function dw(e,t,n,o,i,r,a,s,c){const f=e.positions;let d=pn.triangulate(e.positions2D,e.holes);d.length<3&&(d=[0,1,2]);const u=gt.createTypedArray(f.length,d.length);u.set(d);let m=hw;if(o!==0){let k=oe.fromAxisAngle(a,o,Kl);if(m=B.fromQuaternion(k,m),t.tangent||t.bitangent){k=oe.fromAxisAngle(a,-o,Kl);const X=B.fromQuaternion(k,lw);s=h.normalize(B.multiplyByVector(X,s,s),s),t.bitangent&&(c=h.normalize(h.cross(a,s,c),c))}}else m=B.clone(B.IDENTITY,m);const _=iw;t.st&&(_.x=n.x,_.y=n.y);const g=f.length,y=g*3,E=new Float64Array(y),A=t.normal?new Float32Array(y):void 0,S=t.tangent?new Float32Array(y):void 0,O=t.bitangent?new Float32Array(y):void 0,M=t.st?new Float32Array(g*2):void 0;let R=0,N=0,F=0,z=0,G=0;for(let k=0;k<g;k++){const X=f[k];if(E[R++]=X.x,E[R++]=X.y,E[R++]=X.z,t.st)if(l(i)&&i.positions.length===g)M[G++]=i.positions[k].x,M[G++]=i.positions[k].y;else{const b=B.multiplyByVector(m,X,tw),v=r(b,ow);V.subtract(v,_,v);const C=T.clamp(v.x/n.width,0,1),D=T.clamp(v.y/n.height,0,1);M[G++]=C,M[G++]=D}t.normal&&(A[N++]=a.x,A[N++]=a.y,A[N++]=a.z),t.tangent&&(S[z++]=s.x,S[z++]=s.y,S[z++]=s.z),t.bitangent&&(O[F++]=c.x,O[F++]=c.y,O[F++]=c.z)}const q=new Wr;return t.position&&(q.position=new Ue({componentDatatype:ue.DOUBLE,componentsPerAttribute:3,values:E})),t.normal&&(q.normal=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:3,values:A})),t.tangent&&(q.tangent=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:3,values:S})),t.bitangent&&(q.bitangent=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:3,values:O})),t.st&&(q.st=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:2,values:M})),new tt({attributes:q,indices:u,primitiveType:qe.TRIANGLES})}function mo(e){e=e??xe.EMPTY_OBJECT;const t=e.polygonHierarchy,n=e.textureCoordinates;p.defined("options.polygonHierarchy",t);const o=e.vertexFormat??ze.DEFAULT;this._vertexFormat=ze.clone(o),this._polygonHierarchy=t,this._stRotation=e.stRotation??0,this._ellipsoid=be.clone(e.ellipsoid??be.default),this._workerName="createCoplanarPolygonGeometry",this._textureCoordinates=n,this.packedLength=je.computeHierarchyPackedLength(t,h)+ze.packedLength+be.packedLength+(l(n)?je.computeHierarchyPackedLength(n,V):1)+2}mo.fromPositions=function(e){e=e??xe.EMPTY_OBJECT,p.defined("options.positions",e.positions);const t={polygonHierarchy:{positions:e.positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid,textureCoordinates:e.textureCoordinates};return new mo(t)};mo.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,n=je.packPolygonHierarchy(e._polygonHierarchy,t,n,h),be.pack(e._ellipsoid,t,n),n+=be.packedLength,ze.pack(e._vertexFormat,t,n),n+=ze.packedLength,t[n++]=e._stRotation,l(e._textureCoordinates)?n=je.packPolygonHierarchy(e._textureCoordinates,t,n,V):t[n++]=-1,t[n++]=e.packedLength,t};const mw=be.clone(be.UNIT_SPHERE),pw=new ze,_w={polygonHierarchy:{}};mo.unpack=function(e,t,n){p.defined("array",e),t=t??0;const o=je.unpackPolygonHierarchy(e,t,h);t=o.startingIndex,delete o.startingIndex;const i=be.unpack(e,t,mw);t+=be.packedLength;const r=ze.unpack(e,t,pw);t+=ze.packedLength;const a=e[t++],s=e[t]===-1?void 0:je.unpackPolygonHierarchy(e,t,V);l(s)?(t=s.startingIndex,delete s.startingIndex):t++;const c=e[t++];return l(n)||(n=new mo(_w)),n._polygonHierarchy=o,n._ellipsoid=be.clone(i,n._ellipsoid),n._vertexFormat=ze.clone(r,n._vertexFormat),n._stRotation=a,n._textureCoordinates=s,n.packedLength=c,n};mo.createGeometry=function(e){const t=e._vertexFormat,n=e._polygonHierarchy,o=e._stRotation,i=e._textureCoordinates,r=l(i);let a=n.positions;if(a=ti(a,h.equalsEpsilon,!0),a.length<3)return;let s=rw,c=aw,f=sw,d=cw;const u=fw;if(!Jo.computeProjectTo2DArguments(a,ar,d,u))return;if(s=h.cross(d,u,s),s=h.normalize(s,s),!h.equalsEpsilon(ar,h.ZERO,T.EPSILON6)){const G=e._ellipsoid.geodeticSurfaceNormal(ar,uw);h.dot(s,G)<0&&(s=h.negate(s,s),d=h.negate(d,d))}const _=Jo.createProjectPointsTo2DFunction(ar,d,u),g=Jo.createProjectPointTo2DFunction(ar,d,u);t.tangent&&(c=h.clone(d,c)),t.bitangent&&(f=h.clone(u,f));const y=je.polygonsFromHierarchy(n,r,_,!1),E=y.hierarchy,A=y.polygons,S=function(G){return G},O=r?je.polygonsFromHierarchy(i,!0,S,!1).polygons:void 0;if(E.length===0)return;a=E[0].outerRing;const M=ie.fromPoints(a),R=je.computeBoundingRectangle(s,g,a,o,nw),N=[];for(let G=0;G<A.length;G++){const q=new Kc({geometry:dw(A[G],t,R,o,r?O[G]:void 0,g,s,c,f)});N.push(q)}const F=We.combineInstances(N)[0];F.attributes.position.values=new Float64Array(F.attributes.position.values),F.indices=gt.createTypedArray(F.attributes.position.values.length/3,F.indices);const z=F.attributes;return t.position||delete z.position,new tt({attributes:z,indices:F.indices,primitiveType:F.primitiveType,boundingSphere:M})};function gw(e){const t=e._uSquared,n=e._ellipsoid.maximumRadius,o=e._ellipsoid.minimumRadius,i=(n-o)/n,r=Math.cos(e._startHeading),a=Math.sin(e._startHeading),s=(1-i)*Math.tan(e._start.latitude),c=1/Math.sqrt(1+s*s),f=c*s,d=Math.atan2(s,r),u=c*a,m=u*u,_=1-m,g=Math.sqrt(_),y=t/4,E=y*y,A=E*y,S=E*E,O=1+y-3*E/4+5*A/4-175*S/64,M=1-y+15*E/8-35*A/8,R=1-3*y+35*E/4,N=1-5*y,F=O*d-M*Math.sin(2*d)*y/2-R*Math.sin(4*d)*E/16-N*Math.sin(6*d)*A/48-Math.sin(8*d)*5*S/512,z=e._constants;z.a=n,z.b=o,z.f=i,z.cosineHeading=r,z.sineHeading=a,z.tanU=s,z.cosineU=c,z.sineU=f,z.sigma=d,z.sineAlpha=u,z.sineSquaredAlpha=m,z.cosineSquaredAlpha=_,z.cosineAlpha=g,z.u2Over4=y,z.u4Over16=E,z.u6Over64=A,z.u8Over256=S,z.a0=O,z.a1=M,z.a2=R,z.a3=N,z.distanceRatio=F}function yw(e,t){return e*t*(4+e*(4-3*t))/16}function hd(e,t,n,o,i,r,a){const s=yw(e,n);return(1-s)*e*t*(o+s*i*(a+s*r*(2*a*a-1)))}function bw(e,t,n,o,i,r,a){const s=(t-n)/t,c=r-o,f=Math.atan((1-s)*Math.tan(i)),d=Math.atan((1-s)*Math.tan(a)),u=Math.cos(f),m=Math.sin(f),_=Math.cos(d),g=Math.sin(d),y=u*_,E=u*g,A=m*g,S=m*_;let O=c,M=T.TWO_PI,R=Math.cos(O),N=Math.sin(O),F,z,G,q,k;do{R=Math.cos(O),N=Math.sin(O);const K=E-S*R;G=Math.sqrt(_*_*N*N+K*K),z=A+y*R,F=Math.atan2(G,z);let te;G===0?(te=0,q=1):(te=y*N/G,q=1-te*te),M=O,k=z-2*A/q,isFinite(k)||(k=0),O=c+hd(s,te,q,F,G,z,k)}while(Math.abs(O-M)>T.EPSILON12);const X=q*(t*t-n*n)/(n*n),b=1+X*(4096+X*(X*(320-175*X)-768))/16384,v=X*(256+X*(X*(74-47*X)-128))/1024,C=k*k,D=v*G*(k+v*(z*(2*C-1)-v*k*(4*G*G-3)*(4*C-3)/6)/4),H=n*b*(F-D),Z=Math.atan2(_*N,E-S*R),J=Math.atan2(u*N,E*R-S);e._distance=H,e._startHeading=Z,e._endHeading=J,e._uSquared=X}const Ew=new h,bc=new h;function ld(e,t,n,o){const i=h.normalize(o.cartographicToCartesian(t,bc),Ew),r=h.normalize(o.cartographicToCartesian(n,bc),bc);p.typeOf.number.greaterThanOrEquals("value",Math.abs(Math.abs(h.angleBetween(i,r))-Math.PI),.0125),bw(e,o.maximumRadius,o.minimumRadius,t.longitude,t.latitude,n.longitude,n.latitude),e._start=le.clone(t,e._start),e._end=le.clone(n,e._end),e._start.height=0,e._end.height=0,gw(e)}function Yr(e,t,n){const o=n??be.default;this._ellipsoid=o,this._start=new le,this._end=new le,this._constants={},this._startHeading=void 0,this._endHeading=void 0,this._distance=void 0,this._uSquared=void 0,l(e)&&l(t)&&ld(this,e,t,o)}Object.defineProperties(Yr.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return p.defined("distance",this._distance),this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},startHeading:{get:function(){return p.defined("distance",this._distance),this._startHeading}},endHeading:{get:function(){return p.defined("distance",this._distance),this._endHeading}}});Yr.prototype.setEndPoints=function(e,t){p.defined("start",e),p.defined("end",t),ld(this,e,t,this._ellipsoid)};Yr.prototype.interpolateUsingFraction=function(e,t){return this.interpolateUsingSurfaceDistance(this._distance*e,t)};Yr.prototype.interpolateUsingSurfaceDistance=function(e,t){p.defined("distance",this._distance);const n=this._constants,o=n.distanceRatio+e/n.b,i=Math.cos(2*o),r=Math.cos(4*o),a=Math.cos(6*o),s=Math.sin(2*o),c=Math.sin(4*o),f=Math.sin(6*o),d=Math.sin(8*o),u=o*o,m=o*u,_=n.u8Over256,g=n.u2Over4,y=n.u6Over64,E=n.u4Over16;let A=2*m*_*i/3+o*(1-g+7*E/4-15*y/4+579*_/64-(E-15*y/4+187*_/16)*i-(5*y/4-115*_/16)*r-29*_*a/16)+(g/2-E+71*y/32-85*_/16)*s+(5*E/16-5*y/4+383*_/96)*c-u*((y-11*_/2)*s+5*_*c/2)+(29*y/96-29*_/16)*f+539*_*d/1536;const S=Math.asin(Math.sin(A)*n.cosineAlpha),O=Math.atan(n.a/n.b*Math.tan(S));A=A-n.sigma;const M=Math.cos(2*n.sigma+A),R=Math.sin(A),N=Math.cos(A),F=n.cosineU*N,z=n.sineU*R,q=Math.atan2(R*n.sineHeading,F-z*n.cosineHeading)-hd(n.f,n.sineAlpha,n.cosineSquaredAlpha,A,R,N,M);return l(t)?(t.longitude=this._start.longitude+q,t.latitude=O,t.height=0,t):new le(this._start.longitude+q,O,0)};const Zt={};Zt.numberOfPoints=function(e,t,n){const o=h.distance(e,t);return Math.ceil(o/n)};Zt.numberOfPointsRhumbLine=function(e,t,n){const o=Math.pow(e.longitude-t.longitude,2)+Math.pow(e.latitude-t.latitude,2);return Math.max(1,Math.ceil(Math.sqrt(o/(n*n))))};const ww=new le;Zt.extractHeights=function(e,t){const n=e.length,o=new Array(n);for(let i=0;i<n;i++){const r=e[i];o[i]=t.cartesianToCartographic(r,ww).height}return o};const vw=new U,Tw=new h,Ql=new h,Sw=new De(h.UNIT_X,0),Jl=new h,Aw=new De(h.UNIT_X,0),xw=new h,Ow=new h,Yf=[];function ud(e,t,n){const o=Yf;o.length=e;let i;if(t===n){for(i=0;i<e;i++)o[i]=t;return o}const a=(n-t)/e;for(i=0;i<e;i++){const s=t+i*a;o[i]=s}return o}const Os=new le,hs=new le,Lo=new h,$f=new h,Cw=new h,Ec=new Yr;let sr=new $t;function Mw(e,t,n,o,i,r,a,s){const c=o.scaleToGeodeticSurface(e,$f),f=o.scaleToGeodeticSurface(t,Cw),d=Zt.numberOfPoints(e,t,n),u=o.cartesianToCartographic(c,Os),m=o.cartesianToCartographic(f,hs),_=ud(d,i,r);Ec.setEndPoints(u,m);const g=Ec.surfaceDistance/d;let y=s;u.height=i;let E=o.cartographicToCartesian(u,Lo);h.pack(E,a,y),y+=3;for(let A=1;A<d;A++){const S=Ec.interpolateUsingSurfaceDistance(A*g,hs);S.height=_[A],E=o.cartographicToCartesian(S,Lo),h.pack(E,a,y),y+=3}return y}function Rw(e,t,n,o,i,r,a,s){const c=o.cartesianToCartographic(e,Os),f=o.cartesianToCartographic(t,hs),d=Zt.numberOfPointsRhumbLine(c,f,n);c.height=0,f.height=0;const u=ud(d,i,r);sr.ellipsoid.equals(o)||(sr=new $t(void 0,void 0,o)),sr.setEndPoints(c,f);const m=sr.surfaceDistance/d;let _=s;c.height=i;let g=o.cartographicToCartesian(c,Lo);h.pack(g,a,_),_+=3;for(let y=1;y<d;y++){const E=sr.interpolateUsingSurfaceDistance(y*m,hs);E.height=u[y],g=o.cartographicToCartesian(E,Lo),h.pack(g,a,_),_+=3}return _}Zt.wrapLongitude=function(e,t){const n=[],o=[];if(l(e)&&e.length>0){t=t??U.IDENTITY;const i=U.inverseTransformation(t,vw),r=U.multiplyByPoint(i,h.ZERO,Tw),a=h.normalize(U.multiplyByPointAsVector(i,h.UNIT_Y,Ql),Ql),s=De.fromPointNormal(r,a,Sw),c=h.normalize(U.multiplyByPointAsVector(i,h.UNIT_X,Jl),Jl),f=De.fromPointNormal(r,c,Aw);let d=1;n.push(h.clone(e[0]));let u=n[0];const m=e.length;for(let _=1;_<m;++_){const g=e[_];if(De.getPointDistance(f,u)<0||De.getPointDistance(f,g)<0){const y=ke.lineSegmentPlane(u,g,s,xw);if(l(y)){const E=h.multiplyByScalar(a,5e-9,Ow);De.getPointDistance(s,u)<0&&h.negate(E,E),n.push(h.add(y,E,new h)),o.push(d+1),h.negate(E,E),n.push(h.add(y,E,new h)),d=1}}n.push(h.clone(e[_])),d++,u=g}o.push(d)}return{positions:n,lengths:o}};Zt.generateArc=function(e){l(e)||(e={});const t=e.positions;if(!l(t))throw new w("options.positions is required.");const n=t.length,o=e.ellipsoid??be.default;let i=e.height??0;const r=Array.isArray(i);if(n<1)return[];if(n===1){const y=o.scaleToGeodeticSurface(t[0],$f);if(i=r?i[0]:i,i!==0){const E=o.geodeticSurfaceNormal(y,Lo);h.multiplyByScalar(E,i,E),h.add(y,E,y)}return[y.x,y.y,y.z]}let a=e.minDistance;if(!l(a)){const y=e.granularity??T.RADIANS_PER_DEGREE;a=T.chordLength(y,o.maximumRadius)}let s=0,c;for(c=0;c<n-1;c++)s+=Zt.numberOfPoints(t[c],t[c+1],a);const f=(s+1)*3,d=new Array(f);let u=0;for(c=0;c<n-1;c++){const y=t[c],E=t[c+1],A=r?i[c]:i,S=r?i[c+1]:i;u=Mw(y,E,a,o,A,S,d,u)}Yf.length=0;const m=t[n-1],_=o.cartesianToCartographic(m,Os);_.height=r?i[n-1]:i;const g=o.cartographicToCartesian(_,Lo);return h.pack(g,d,f-3),d};const eu=new le,Pw=new le;Zt.generateRhumbArc=function(e){l(e)||(e={});const t=e.positions;if(!l(t))throw new w("options.positions is required.");const n=t.length,o=e.ellipsoid??be.default;let i=e.height??0;const r=Array.isArray(i);if(n<1)return[];if(n===1){const A=o.scaleToGeodeticSurface(t[0],$f);if(i=r?i[0]:i,i!==0){const S=o.geodeticSurfaceNormal(A,Lo);h.multiplyByScalar(S,i,S),h.add(A,S,A)}return[A.x,A.y,A.z]}const a=e.granularity??T.RADIANS_PER_DEGREE;let s=0,c,f=o.cartesianToCartographic(t[0],eu),d;for(c=0;c<n-1;c++)d=o.cartesianToCartographic(t[c+1],Pw),s+=Zt.numberOfPointsRhumbLine(f,d,a),f=le.clone(d,eu);const u=(s+1)*3,m=new Array(u);let _=0;for(c=0;c<n-1;c++){const A=t[c],S=t[c+1],O=r?i[c]:i,M=r?i[c+1]:i;_=Rw(A,S,a,o,O,M,m,_)}Yf.length=0;const g=t[n-1],y=o.cartesianToCartographic(g,Os);y.height=r?i[n-1]:i;const E=o.cartographicToCartesian(y,Lo);return h.pack(E,m,u-3),m};Zt.generateCartesianArc=function(e){const t=Zt.generateArc(e),n=t.length/3,o=new Array(n);for(let i=0;i<n;i++)o[i]=h.unpack(t,i*3);return o};Zt.generateCartesianRhumbArc=function(e){const t=Zt.generateRhumbArc(e),n=t.length/3,o=new Array(n);for(let i=0;i<n;i++)o[i]=h.unpack(t,i*3);return o};function An(e){this.planes=e??[]}const Dr=[new h,new h,new h];h.clone(h.UNIT_X,Dr[0]);h.clone(h.UNIT_Y,Dr[1]);h.clone(h.UNIT_Z,Dr[2]);const Co=new h,Iw=new h,dd=new De(new h(1,0,0),0);An.fromBoundingSphere=function(e,t){if(!l(e))throw new w("boundingSphere is required.");l(t)||(t=new An);const n=Dr.length,o=t.planes;o.length=2*n;const i=e.center,r=e.radius;let a=0;for(let s=0;s<n;++s){const c=Dr[s];let f=o[a],d=o[a+1];l(f)||(f=o[a]=new Q),l(d)||(d=o[a+1]=new Q),h.multiplyByScalar(c,-r,Co),h.add(i,Co,Co),f.x=c.x,f.y=c.y,f.z=c.z,f.w=-h.dot(c,Co),h.multiplyByScalar(c,r,Co),h.add(i,Co,Co),d.x=-c.x,d.y=-c.y,d.z=-c.z,d.w=-h.dot(h.negate(c,Iw),Co),a+=2}return t};An.prototype.computeVisibility=function(e){if(!l(e))throw new w("boundingVolume is required.");const t=this.planes;let n=!1;for(let o=0,i=t.length;o<i;++o){const r=e.intersectPlane(De.fromCartesian4(t[o],dd));if(r===bt.OUTSIDE)return bt.OUTSIDE;r===bt.INTERSECTING&&(n=!0)}return n?bt.INTERSECTING:bt.INSIDE};An.prototype.computeVisibilityWithPlaneMask=function(e,t){if(!l(e))throw new w("boundingVolume is required.");if(!l(t))throw new w("parentPlaneMask is required.");if(t===An.MASK_OUTSIDE||t===An.MASK_INSIDE)return t;let n=An.MASK_INSIDE;const o=this.planes;for(let i=0,r=o.length;i<r;++i){const a=i<31?1<<i:0;if(i<31&&!(t&a))continue;const s=e.intersectPlane(De.fromCartesian4(o[i],dd));if(s===bt.OUTSIDE)return An.MASK_OUTSIDE;s===bt.INTERSECTING&&(n|=a)}return n};An.MASK_OUTSIDE=4294967295;An.MASK_INSIDE=0;An.MASK_INDETERMINATE=2147483647;function ln(e,t){e=e??0,this._near=e,t=t??Number.MAX_VALUE,this._far=t}Object.defineProperties(ln.prototype,{near:{get:function(){return this._near},set:function(e){this._near=e}},far:{get:function(){return this._far},set:function(e){this._far=e}}});ln.packedLength=2;ln.pack=function(e,t,n){if(!l(e))throw new w("value is required");if(!l(t))throw new w("array is required");return n=n??0,t[n++]=e.near,t[n]=e.far,t};ln.unpack=function(e,t,n){if(!l(e))throw new w("array is required");return t=t??0,l(n)||(n=new ln),n.near=e[t++],n.far=e[t],n};ln.equals=function(e,t){return e===t||l(e)&&l(t)&&e.near===t.near&&e.far===t.far};ln.clone=function(e,t){if(l(e))return l(t)||(t=new ln),t.near=e.near,t.far=e.far,t};ln.prototype.clone=function(e){return ln.clone(this,e)};ln.prototype.equals=function(e){return ln.equals(this,e)};function Jn(e){e=e??xe.EMPTY_OBJECT,this.left=e.left,this._left=void 0,this.right=e.right,this._right=void 0,this.top=e.top,this._top=void 0,this.bottom=e.bottom,this._bottom=void 0,this.near=e.near??1,this._near=this.near,this.far=e.far??5e8,this._far=this.far,this._cullingVolume=new An,this._perspectiveMatrix=new U,this._infinitePerspective=new U}function af(e){if(!l(e.right)||!l(e.left)||!l(e.top)||!l(e.bottom)||!l(e.near)||!l(e.far))throw new w("right, left, top, bottom, near, or far parameters are not set.");const{top:t,bottom:n,right:o,left:i,near:r,far:a}=e;if(t!==e._top||n!==e._bottom||i!==e._left||o!==e._right||r!==e._near||a!==e._far){if(e.near<=0||e.near>e.far)throw new w("near must be greater than zero and less than far.");e._left=i,e._right=o,e._top=t,e._bottom=n,e._near=r,e._far=a,e._perspectiveMatrix=U.computePerspectiveOffCenter(i,o,n,t,r,a,e._perspectiveMatrix),e._infinitePerspective=U.computeInfinitePerspectiveOffCenter(i,o,n,t,r,e._infinitePerspective)}}Object.defineProperties(Jn.prototype,{projectionMatrix:{get:function(){return af(this),this._perspectiveMatrix}},infiniteProjectionMatrix:{get:function(){return af(this),this._infinitePerspective}}});const zw=new h,Nw=new h,Dw=new h,Lw=new h;Jn.prototype.computeCullingVolume=function(e,t,n){if(!l(e))throw new w("position is required.");if(!l(t))throw new w("direction is required.");if(!l(n))throw new w("up is required.");const o=this._cullingVolume.planes,i=this.top,r=this.bottom,a=this.right,s=this.left,c=this.near,f=this.far,d=h.cross(t,n,zw),u=Nw;h.multiplyByScalar(t,c,u),h.add(e,u,u);const m=Dw;h.multiplyByScalar(t,f,m),h.add(e,m,m);const _=Lw;h.multiplyByScalar(d,s,_),h.add(u,_,_),h.subtract(_,e,_),h.normalize(_,_),h.cross(_,n,_),h.normalize(_,_);let g=o[0];return l(g)||(g=o[0]=new Q),g.x=_.x,g.y=_.y,g.z=_.z,g.w=-h.dot(_,e),h.multiplyByScalar(d,a,_),h.add(u,_,_),h.subtract(_,e,_),h.cross(n,_,_),h.normalize(_,_),g=o[1],l(g)||(g=o[1]=new Q),g.x=_.x,g.y=_.y,g.z=_.z,g.w=-h.dot(_,e),h.multiplyByScalar(n,r,_),h.add(u,_,_),h.subtract(_,e,_),h.cross(d,_,_),h.normalize(_,_),g=o[2],l(g)||(g=o[2]=new Q),g.x=_.x,g.y=_.y,g.z=_.z,g.w=-h.dot(_,e),h.multiplyByScalar(n,i,_),h.add(u,_,_),h.subtract(_,e,_),h.cross(_,d,_),h.normalize(_,_),g=o[3],l(g)||(g=o[3]=new Q),g.x=_.x,g.y=_.y,g.z=_.z,g.w=-h.dot(_,e),g=o[4],l(g)||(g=o[4]=new Q),g.x=t.x,g.y=t.y,g.z=t.z,g.w=-h.dot(t,u),h.negate(t,_),g=o[5],l(g)||(g=o[5]=new Q),g.x=_.x,g.y=_.y,g.z=_.z,g.w=-h.dot(_,m),this._cullingVolume};Jn.prototype.getPixelDimensions=function(e,t,n,o,i){if(af(this),!l(e)||!l(t))throw new w("Both drawingBufferWidth and drawingBufferHeight are required.");if(e<=0)throw new w("drawingBufferWidth must be greater than zero.");if(t<=0)throw new w("drawingBufferHeight must be greater than zero.");if(!l(n))throw new w("distance is required.");if(!l(o))throw new w("pixelRatio is required");if(o<=0)throw new w("pixelRatio must be greater than zero.");if(!l(i))throw new w("A result object is required.");const r=1/this.near;let a=this.top*r;const s=2*o*n*a/t;a=this.right*r;const c=2*o*n*a/e;return i.x=c,i.y=s,i};Jn.prototype.clone=function(e){return l(e)||(e=new Jn),e.right=this.right,e.left=this.left,e.top=this.top,e.bottom=this.bottom,e.near=this.near,e.far=this.far,e._left=void 0,e._right=void 0,e._top=void 0,e._bottom=void 0,e._near=void 0,e._far=void 0,e};Jn.prototype.equals=function(e){return l(e)&&e instanceof Jn&&this.right===e.right&&this.left===e.left&&this.top===e.top&&this.bottom===e.bottom&&this.near===e.near&&this.far===e.far};Jn.prototype.equalsEpsilon=function(e,t,n){return e===this||l(e)&&e instanceof Jn&&T.equalsEpsilon(this.right,e.right,t,n)&&T.equalsEpsilon(this.left,e.left,t,n)&&T.equalsEpsilon(this.top,e.top,t,n)&&T.equalsEpsilon(this.bottom,e.bottom,t,n)&&T.equalsEpsilon(this.near,e.near,t,n)&&T.equalsEpsilon(this.far,e.far,t,n)};function un(e){e=e??xe.EMPTY_OBJECT,this._offCenterFrustum=new Jn,this.fov=e.fov,this._fov=void 0,this._fovy=void 0,this._sseDenominator=void 0,this.aspectRatio=e.aspectRatio,this._aspectRatio=void 0,this.near=e.near??1,this._near=this.near,this.far=e.far??5e8,this._far=this.far,this.xOffset=e.xOffset??0,this._xOffset=this.xOffset,this.yOffset=e.yOffset??0,this._yOffset=this.yOffset}un.packedLength=6;un.pack=function(e,t,n){return p.typeOf.object("value",e),p.defined("array",t),n=n??0,t[n++]=e.fov,t[n++]=e.aspectRatio,t[n++]=e.near,t[n++]=e.far,t[n++]=e.xOffset,t[n]=e.yOffset,t};un.unpack=function(e,t,n){return p.defined("array",e),t=t??0,l(n)||(n=new un),n.fov=e[t++],n.aspectRatio=e[t++],n.near=e[t++],n.far=e[t++],n.xOffset=e[t++],n.yOffset=e[t],n};function zn(e){if(!l(e.fov)||!l(e.aspectRatio)||!l(e.near)||!l(e.far))throw new w("fov, aspectRatio, near, or far parameters are not set.");if(!(e.fov!==e._fov||e.aspectRatio!==e._aspectRatio||e.near!==e._near||e.far!==e._far||e.xOffset!==e._xOffset||e.yOffset!==e._yOffset))return;if(p.typeOf.number.greaterThanOrEquals("fov",e.fov,0),p.typeOf.number.lessThan("fov",e.fov,Math.PI),p.typeOf.number.greaterThanOrEquals("aspectRatio",e.aspectRatio,0),p.typeOf.number.greaterThanOrEquals("near",e.near,0),e.near>e.far)throw new w("near must be less than far.");e._aspectRatio=e.aspectRatio,e._fov=e.fov,e._fovy=e.aspectRatio<=1?e.fov:Math.atan(Math.tan(e.fov*.5)/e.aspectRatio)*2,e._near=e.near,e._far=e.far,e._sseDenominator=2*Math.tan(.5*e._fovy),e._xOffset=e.xOffset,e._yOffset=e.yOffset;const n=e._offCenterFrustum;n.top=e.near*Math.tan(.5*e._fovy),n.bottom=-n.top,n.right=e.aspectRatio*n.top,n.left=-n.right,n.near=e.near,n.far=e.far,n.right+=e.xOffset,n.left+=e.xOffset,n.top+=e.yOffset,n.bottom+=e.yOffset}Object.defineProperties(un.prototype,{projectionMatrix:{get:function(){return zn(this),this._offCenterFrustum.projectionMatrix}},infiniteProjectionMatrix:{get:function(){return zn(this),this._offCenterFrustum.infiniteProjectionMatrix}},fovy:{get:function(){return zn(this),this._fovy}},sseDenominator:{get:function(){return zn(this),this._sseDenominator}},offCenterFrustum:{get:function(){return zn(this),this._offCenterFrustum}}});un.prototype.computeCullingVolume=function(e,t,n){return zn(this),this._offCenterFrustum.computeCullingVolume(e,t,n)};un.prototype.getPixelDimensions=function(e,t,n,o,i){return zn(this),this._offCenterFrustum.getPixelDimensions(e,t,n,o,i)};un.prototype.clone=function(e){return l(e)||(e=new un),e.aspectRatio=this.aspectRatio,e.fov=this.fov,e.near=this.near,e.far=this.far,e._aspectRatio=void 0,e._fov=void 0,e._near=void 0,e._far=void 0,this._offCenterFrustum.clone(e._offCenterFrustum),e};un.prototype.equals=function(e){return!l(e)||!(e instanceof un)?!1:(zn(this),zn(e),this.fov===e.fov&&this.aspectRatio===e.aspectRatio&&this._offCenterFrustum.equals(e._offCenterFrustum))};un.prototype.equalsEpsilon=function(e,t,n){return!l(e)||!(e instanceof un)?!1:(zn(this),zn(e),T.equalsEpsilon(this.fov,e.fov,t,n)&&T.equalsEpsilon(this.aspectRatio,e.aspectRatio,t,n)&&this._offCenterFrustum.equalsEpsilon(e._offCenterFrustum,t,n))};function sf(e,t,n){this.heading=e??0,this.pitch=t??0,this.range=n??0}sf.clone=function(e,t){if(l(e))return l(t)||(t=new sf),t.heading=e.heading,t.pitch=e.pitch,t.range=e.range,t};function po(){}po._transcodeTaskProcessor=new St("transcodeKTX2",Number.POSITIVE_INFINITY);po._readyPromise=void 0;function Fw(){const e=po._transcodeTaskProcessor.initWebAssemblyModule({wasmBinaryFile:"ThirdParty/basis_transcoder.wasm"}).then(function(t){if(t)return po._transcodeTaskProcessor;throw new mt("KTX2 transcoder could not be initialized.")});po._readyPromise=e}po.transcode=function(e,t){return p.defined("supportedTargetFormats",t),l(po._readyPromise)||Fw(),po._readyPromise.then(function(n){let o=e;e instanceof ArrayBuffer&&(o=new Uint8Array(e));const i={supportedTargetFormats:t,ktx2Buffer:o};return n.scheduleTask(i,[o.buffer])}).then(function(n){const o=n.length,i=Object.keys(n[0]);for(let r=0;r<o;r++){const a=n[r];for(let s=0;s<i.length;s++){const c=a[i[s]];a[i[s]]=new Ui(c.internalFormat,c.datatype,c.width,c.height,c.levelBuffer)}}if(i.length===1){for(let r=0;r<o;++r)n[r]=n[r][i[0]];o===1&&(n=n[0])}return n}).catch(function(n){throw n})};function Lr(e,t,n){e=e??0,t=t??0,n=n??0,this.value=new Float32Array([e,t,n])}Object.defineProperties(Lr.prototype,{componentDatatype:{get:function(){return ue.FLOAT}},componentsPerAttribute:{get:function(){return 3}},normalize:{get:function(){return!1}}});Lr.fromCartesian3=function(e){return p.defined("offset",e),new Lr(e.x,e.y,e.z)};Lr.toValue=function(e,t){return p.defined("offset",e),l(t)||(t=new Float32Array([e.x,e.y,e.z])),t[0]=e.x,t[1]=e.y,t[2]=e.z,t};const Ne={UNSIGNED_BYTE:I.UNSIGNED_BYTE,UNSIGNED_SHORT:I.UNSIGNED_SHORT,UNSIGNED_INT:I.UNSIGNED_INT,FLOAT:I.FLOAT,HALF_FLOAT:I.HALF_FLOAT_OES,UNSIGNED_INT_24_8:I.UNSIGNED_INT_24_8,UNSIGNED_SHORT_4_4_4_4:I.UNSIGNED_SHORT_4_4_4_4,UNSIGNED_SHORT_5_5_5_1:I.UNSIGNED_SHORT_5_5_5_1,UNSIGNED_SHORT_5_6_5:I.UNSIGNED_SHORT_5_6_5};Ne.toWebGLConstant=function(e,t){switch(e){case Ne.UNSIGNED_BYTE:return I.UNSIGNED_BYTE;case Ne.UNSIGNED_SHORT:return I.UNSIGNED_SHORT;case Ne.UNSIGNED_INT:return I.UNSIGNED_INT;case Ne.FLOAT:return I.FLOAT;case Ne.HALF_FLOAT:return t.webgl2?I.HALF_FLOAT:I.HALF_FLOAT_OES;case Ne.UNSIGNED_INT_24_8:return I.UNSIGNED_INT_24_8;case Ne.UNSIGNED_SHORT_4_4_4_4:return I.UNSIGNED_SHORT_4_4_4_4;case Ne.UNSIGNED_SHORT_5_5_5_1:return I.UNSIGNED_SHORT_5_5_5_1;case Ne.UNSIGNED_SHORT_5_6_5:return Ne.UNSIGNED_SHORT_5_6_5}};Ne.isPacked=function(e){return e===Ne.UNSIGNED_INT_24_8||e===Ne.UNSIGNED_SHORT_4_4_4_4||e===Ne.UNSIGNED_SHORT_5_5_5_1||e===Ne.UNSIGNED_SHORT_5_6_5};Ne.sizeInBytes=function(e){switch(e){case Ne.UNSIGNED_BYTE:return 1;case Ne.UNSIGNED_SHORT:case Ne.UNSIGNED_SHORT_4_4_4_4:case Ne.UNSIGNED_SHORT_5_5_5_1:case Ne.UNSIGNED_SHORT_5_6_5:case Ne.HALF_FLOAT:return 2;case Ne.UNSIGNED_INT:case Ne.FLOAT:case Ne.UNSIGNED_INT_24_8:return 4}};Ne.validate=function(e){return e===Ne.UNSIGNED_BYTE||e===Ne.UNSIGNED_SHORT||e===Ne.UNSIGNED_INT||e===Ne.FLOAT||e===Ne.HALF_FLOAT||e===Ne.UNSIGNED_INT_24_8||e===Ne.UNSIGNED_SHORT_4_4_4_4||e===Ne.UNSIGNED_SHORT_5_5_5_1||e===Ne.UNSIGNED_SHORT_5_6_5};Ne.getTypedArrayConstructor=function(e){const t=Ne.sizeInBytes(e);return t===Uint8Array.BYTES_PER_ELEMENT?Uint8Array:t===Uint16Array.BYTES_PER_ELEMENT?Uint16Array:t===Float32Array.BYTES_PER_ELEMENT&&e===Ne.FLOAT?Float32Array:Uint32Array};const Oe=Object.freeze(Ne),ne={DEPTH_COMPONENT:I.DEPTH_COMPONENT,DEPTH_STENCIL:I.DEPTH_STENCIL,ALPHA:I.ALPHA,RED:I.RED,RG:I.RG,RGB:I.RGB,RGBA:I.RGBA,RED_INTEGER:I.RED_INTEGER,RG_INTEGER:I.RG_INTEGER,RGB_INTEGER:I.RGB_INTEGER,RGBA_INTEGER:I.RGBA_INTEGER,LUMINANCE:I.LUMINANCE,LUMINANCE_ALPHA:I.LUMINANCE_ALPHA,RGB_DXT1:I.COMPRESSED_RGB_S3TC_DXT1_EXT,RGBA_DXT1:I.COMPRESSED_RGBA_S3TC_DXT1_EXT,RGBA_DXT3:I.COMPRESSED_RGBA_S3TC_DXT3_EXT,RGBA_DXT5:I.COMPRESSED_RGBA_S3TC_DXT5_EXT,RGB_PVRTC_4BPPV1:I.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,RGB_PVRTC_2BPPV1:I.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,RGBA_PVRTC_4BPPV1:I.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,RGBA_PVRTC_2BPPV1:I.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,RGBA_ASTC:I.COMPRESSED_RGBA_ASTC_4x4_WEBGL,RGB_ETC1:I.COMPRESSED_RGB_ETC1_WEBGL,RGB8_ETC2:I.COMPRESSED_RGB8_ETC2,RGBA8_ETC2_EAC:I.COMPRESSED_RGBA8_ETC2_EAC,RGBA_BC7:I.COMPRESSED_RGBA_BPTC_UNORM};ne.componentsLength=function(e){switch(e){case ne.RGB:case ne.RGB_INTEGER:return 3;case ne.RGBA:case ne.RGBA_INTEGER:return 4;case ne.LUMINANCE_ALPHA:case ne.RG:case ne.RG_INTEGER:return 2;case ne.ALPHA:case ne.RED:case ne.RED_INTEGER:case ne.LUMINANCE:return 1;default:return 1}};ne.validate=function(e){return e===ne.DEPTH_COMPONENT||e===ne.DEPTH_STENCIL||e===ne.ALPHA||e===ne.RED||e===ne.RG||e===ne.RGB||e===ne.RGBA||e===ne.RED_INTEGER||e===ne.RG_INTEGER||e===ne.RGB_INTEGER||e===ne.RGBA_INTEGER||e===ne.LUMINANCE||e===ne.LUMINANCE_ALPHA||e===ne.RGB_DXT1||e===ne.RGBA_DXT1||e===ne.RGBA_DXT3||e===ne.RGBA_DXT5||e===ne.RGB_PVRTC_4BPPV1||e===ne.RGB_PVRTC_2BPPV1||e===ne.RGBA_PVRTC_4BPPV1||e===ne.RGBA_PVRTC_2BPPV1||e===ne.RGBA_ASTC||e===ne.RGB_ETC1||e===ne.RGB8_ETC2||e===ne.RGBA8_ETC2_EAC||e===ne.RGBA_BC7};ne.isColorFormat=function(e){return e===ne.RED||e===ne.ALPHA||e===ne.RGB||e===ne.RGBA||e===ne.LUMINANCE||e===ne.LUMINANCE_ALPHA};ne.isDepthFormat=function(e){return e===ne.DEPTH_COMPONENT||e===ne.DEPTH_STENCIL};ne.isCompressedFormat=function(e){return e===ne.RGB_DXT1||e===ne.RGBA_DXT1||e===ne.RGBA_DXT3||e===ne.RGBA_DXT5||e===ne.RGB_PVRTC_4BPPV1||e===ne.RGB_PVRTC_2BPPV1||e===ne.RGBA_PVRTC_4BPPV1||e===ne.RGBA_PVRTC_2BPPV1||e===ne.RGBA_ASTC||e===ne.RGB_ETC1||e===ne.RGB8_ETC2||e===ne.RGBA8_ETC2_EAC||e===ne.RGBA_BC7};ne.isDXTFormat=function(e){return e===ne.RGB_DXT1||e===ne.RGBA_DXT1||e===ne.RGBA_DXT3||e===ne.RGBA_DXT5};ne.isPVRTCFormat=function(e){return e===ne.RGB_PVRTC_4BPPV1||e===ne.RGB_PVRTC_2BPPV1||e===ne.RGBA_PVRTC_4BPPV1||e===ne.RGBA_PVRTC_2BPPV1};ne.isASTCFormat=function(e){return e===ne.RGBA_ASTC};ne.isETC1Format=function(e){return e===ne.RGB_ETC1};ne.isETC2Format=function(e){return e===ne.RGB8_ETC2||e===ne.RGBA8_ETC2_EAC};ne.isBC7Format=function(e){return e===ne.RGBA_BC7};ne.compressedTextureSizeInBytes=function(e,t,n){switch(e){case ne.RGB_DXT1:case ne.RGBA_DXT1:case ne.RGB_ETC1:case ne.RGB8_ETC2:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*8;case ne.RGBA_DXT3:case ne.RGBA_DXT5:case ne.RGBA_ASTC:case ne.RGBA8_ETC2_EAC:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*16;case ne.RGB_PVRTC_4BPPV1:case ne.RGBA_PVRTC_4BPPV1:return Math.floor((Math.max(t,8)*Math.max(n,8)*4+7)/8);case ne.RGB_PVRTC_2BPPV1:case ne.RGBA_PVRTC_2BPPV1:return Math.floor((Math.max(t,16)*Math.max(n,8)*2+7)/8);case ne.RGBA_BC7:return Math.ceil(t/4)*Math.ceil(n/4)*16;default:return 0}};ne.textureSizeInBytes=function(e,t,n,o){let i=ne.componentsLength(e);return Oe.isPacked(t)&&(i=1),i*Oe.sizeInBytes(t)*n*o};ne.texture3DSizeInBytes=function(e,t,n,o,i){let r=ne.componentsLength(e);return Oe.isPacked(t)&&(r=1),r*Oe.sizeInBytes(t)*n*o*i};ne.alignmentInBytes=function(e,t,n){const o=ne.textureSizeInBytes(e,t,n,1)%4;return o===0?4:o===2?2:1};ne.createTypedArray=function(e,t,n,o){const i=Oe.getTypedArrayConstructor(t),r=ne.componentsLength(e)*n*o;return new i(r)};ne.flipY=function(e,t,n,o,i){if(i===1)return e;const r=ne.createTypedArray(t,n,o,i),a=ne.componentsLength(t),s=o*a;for(let c=0;c<i;++c){const f=c*o*a,d=(i-c-1)*o*a;for(let u=0;u<s;++u)r[d+u]=e[f+u]}return r};ne.toInternalFormat=function(e,t,n){if(!n.webgl2)return e;if(e===ne.DEPTH_STENCIL)return I.DEPTH24_STENCIL8;if(e===ne.DEPTH_COMPONENT){if(t===Oe.UNSIGNED_SHORT)return I.DEPTH_COMPONENT16;if(t===Oe.UNSIGNED_INT)return I.DEPTH_COMPONENT24}if(t===Oe.FLOAT)switch(e){case ne.RGBA:return I.RGBA32F;case ne.RGB:return I.RGB32F;case ne.RG:return I.RG32F;case ne.RED:return I.R32F}if(t===Oe.HALF_FLOAT)switch(e){case ne.RGBA:return I.RGBA16F;case ne.RGB:return I.RGB16F;case ne.RG:return I.RG16F;case ne.RED:return I.R16F}if(t===Oe.UNSIGNED_BYTE)switch(e){case ne.RGBA:return I.RGBA8;case ne.RGB:return I.RGB8;case ne.RG:return I.RG8;case ne.RED:return I.R8}if(t===Oe.INT)switch(e){case ne.RGBA_INTEGER:return I.RGBA32I;case ne.RGB_INTEGER:return I.RGB32I;case ne.RG_INTEGER:return I.RG32I;case ne.RED_INTEGER:return I.R32I}if(t===Oe.UNSIGNED_INT)switch(e){case ne.RGBA_INTEGER:return I.RGBA32UI;case ne.RGB_INTEGER:return I.RGB32UI;case ne.RG_INTEGER:return I.RG32UI;case ne.RED_INTEGER:return I.R32UI}return e};const Me=Object.freeze(ne);function Xf(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}let md;pd.setKTX2SupportedFormats=function(e,t,n,o,i,r){md={s3tc:e,pvrtc:t,astc:n,etc:o,etc1:i,bc7:r}};function pd(e){p.defined("resourceOrUrlOrBuffer",e);let t;return e instanceof ArrayBuffer||ArrayBuffer.isView(e)?t=Promise.resolve(e):t=se.createIfNeeded(e).fetchArrayBuffer(),t.then(function(n){return po.transcode(n,md)})}function Bw(e,t){if(!l(e))throw new w("array is required.");if(!l(t)||t<1)throw new w("numberOfArrays must be greater than 0.");const n=[],o=e.length;let i=0;for(;i<o;){const r=Math.ceil((o-i)/t--);n.push(e.slice(i,i+r)),i+=r}return n}const Uw=new h;function pe(e){this._size=e.size,this._datatype=e.datatype,this.getValue=e.getValue}const Pt={};Pt[I.FLOAT]="float";Pt[I.FLOAT_VEC2]="vec2";Pt[I.FLOAT_VEC3]="vec3";Pt[I.FLOAT_VEC4]="vec4";Pt[I.INT]="int";Pt[I.INT_VEC2]="ivec2";Pt[I.INT_VEC3]="ivec3";Pt[I.INT_VEC4]="ivec4";Pt[I.BOOL]="bool";Pt[I.BOOL_VEC2]="bvec2";Pt[I.BOOL_VEC3]="bvec3";Pt[I.BOOL_VEC4]="bvec4";Pt[I.FLOAT_MAT2]="mat2";Pt[I.FLOAT_MAT3]="mat3";Pt[I.FLOAT_MAT4]="mat4";Pt[I.SAMPLER_2D]="sampler2D";Pt[I.SAMPLER_CUBE]="samplerCube";pe.prototype.getDeclaration=function(e){let t=`uniform ${Pt[this._datatype]} ${e}`;const n=this._size;return n===1?t+=";":t+=`[${n.toString()}];`,t};const ka={czm_viewport:new pe({size:1,datatype:I.FLOAT_VEC4,getValue:function(e){return e.viewportCartesian4}}),czm_viewportOrthographic:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.viewportOrthographic}}),czm_viewportTransformation:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.viewportTransformation}}),czm_globeDepthTexture:new pe({size:1,datatype:I.SAMPLER_2D,getValue:function(e){return e.globeDepthTexture}}),czm_model:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.model}}),czm_inverseModel:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.inverseModel}}),czm_view:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.view}}),czm_view3D:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.view3D}}),czm_viewRotation:new pe({size:1,datatype:I.FLOAT_MAT3,getValue:function(e){return e.viewRotation}}),czm_viewRotation3D:new pe({size:1,datatype:I.FLOAT_MAT3,getValue:function(e){return e.viewRotation3D}}),czm_inverseView:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.inverseView}}),czm_inverseView3D:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.inverseView3D}}),czm_inverseViewRotation:new pe({size:1,datatype:I.FLOAT_MAT3,getValue:function(e){return e.inverseViewRotation}}),czm_inverseViewRotation3D:new pe({size:1,datatype:I.FLOAT_MAT3,getValue:function(e){return e.inverseViewRotation3D}}),czm_projection:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.projection}}),czm_inverseProjection:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.inverseProjection}}),czm_infiniteProjection:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.infiniteProjection}}),czm_modelView:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.modelView}}),czm_modelView3D:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.modelView3D}}),czm_modelViewRelativeToEye:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.modelViewRelativeToEye}}),czm_inverseModelView:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.inverseModelView}}),czm_inverseModelView3D:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.inverseModelView3D}}),czm_viewProjection:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.viewProjection}}),czm_inverseViewProjection:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.inverseViewProjection}}),czm_modelViewProjection:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.modelViewProjection}}),czm_inverseModelViewProjection:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.inverseModelViewProjection}}),czm_modelViewProjectionRelativeToEye:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.modelViewProjectionRelativeToEye}}),czm_modelViewInfiniteProjection:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.modelViewInfiniteProjection}}),czm_orthographicIn3D:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.orthographicIn3D?1:0}}),czm_normal:new pe({size:1,datatype:I.FLOAT_MAT3,getValue:function(e){return e.normal}}),czm_normal3D:new pe({size:1,datatype:I.FLOAT_MAT3,getValue:function(e){return e.normal3D}}),czm_inverseNormal:new pe({size:1,datatype:I.FLOAT_MAT3,getValue:function(e){return e.inverseNormal}}),czm_inverseNormal3D:new pe({size:1,datatype:I.FLOAT_MAT3,getValue:function(e){return e.inverseNormal3D}}),czm_eyeHeight:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.eyeHeight}}),czm_eyeHeight2D:new pe({size:1,datatype:I.FLOAT_VEC2,getValue:function(e){return e.eyeHeight2D}}),czm_eyeEllipsoidNormalEC:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.eyeEllipsoidNormalEC}}),czm_eyeEllipsoidCurvature:new pe({size:1,datatype:I.FLOAT_VEC2,getValue:function(e){return e.eyeEllipsoidCurvature}}),czm_modelToEnu:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.modelToEnu}}),czm_enuToModel:new pe({size:1,datatype:I.FLOAT_MAT4,getValue:function(e){return e.enuToModel}}),czm_entireFrustum:new pe({size:1,datatype:I.FLOAT_VEC2,getValue:function(e){return e.entireFrustum}}),czm_currentFrustum:new pe({size:1,datatype:I.FLOAT_VEC2,getValue:function(e){return e.currentFrustum}}),czm_frustumPlanes:new pe({size:1,datatype:I.FLOAT_VEC4,getValue:function(e){return e.frustumPlanes}}),czm_farDepthFromNearPlusOne:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.farDepthFromNearPlusOne}}),czm_log2FarDepthFromNearPlusOne:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.log2FarDepthFromNearPlusOne}}),czm_oneOverLog2FarDepthFromNearPlusOne:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.oneOverLog2FarDepthFromNearPlusOne}}),czm_sunPositionWC:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.sunPositionWC}}),czm_sunPositionColumbusView:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.sunPositionColumbusView}}),czm_sunDirectionEC:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.sunDirectionEC}}),czm_sunDirectionWC:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.sunDirectionWC}}),czm_moonDirectionEC:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.moonDirectionEC}}),czm_lightDirectionEC:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.lightDirectionEC}}),czm_lightDirectionWC:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.lightDirectionWC}}),czm_lightColor:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.lightColor}}),czm_lightColorHdr:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.lightColorHdr}}),czm_encodedCameraPositionMCHigh:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.encodedCameraPositionMCHigh}}),czm_encodedCameraPositionMCLow:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.encodedCameraPositionMCLow}}),czm_viewerPositionWC:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return U.getTranslation(e.inverseView,Uw)}}),czm_frameNumber:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.frameState.frameNumber}}),czm_morphTime:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.frameState.morphTime}}),czm_sceneMode:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.frameState.mode}}),czm_pass:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.pass}}),czm_backgroundColor:new pe({size:1,datatype:I.FLOAT_VEC4,getValue:function(e){return e.backgroundColor}}),czm_brdfLut:new pe({size:1,datatype:I.SAMPLER_2D,getValue:function(e){return e.brdfLut}}),czm_environmentMap:new pe({size:1,datatype:I.SAMPLER_CUBE,getValue:function(e){return e.environmentMap}}),czm_specularEnvironmentMaps:new pe({size:1,datatype:I.SAMPLER_CUBE,getValue:function(e){return e.specularEnvironmentMaps}}),czm_specularEnvironmentMapsMaximumLOD:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.specularEnvironmentMapsMaximumLOD}}),czm_sphericalHarmonicCoefficients:new pe({size:9,datatype:I.FLOAT_VEC3,getValue:function(e){return e.sphericalHarmonicCoefficients}}),czm_temeToPseudoFixed:new pe({size:1,datatype:I.FLOAT_MAT3,getValue:function(e){return e.temeToPseudoFixedMatrix}}),czm_pixelRatio:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.pixelRatio}}),czm_fogDensity:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.fogDensity}}),czm_fogVisualDensityScalar:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.fogVisualDensityScalar}}),czm_fogMinimumBrightness:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.fogMinimumBrightness}}),czm_atmosphereHsbShift:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.atmosphereHsbShift}}),czm_atmosphereLightIntensity:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.atmosphereLightIntensity}}),czm_atmosphereRayleighCoefficient:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.atmosphereRayleighCoefficient}}),czm_atmosphereRayleighScaleHeight:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.atmosphereRayleighScaleHeight}}),czm_atmosphereMieCoefficient:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.atmosphereMieCoefficient}}),czm_atmosphereMieScaleHeight:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.atmosphereMieScaleHeight}}),czm_atmosphereMieAnisotropy:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.atmosphereMieAnisotropy}}),czm_atmosphereDynamicLighting:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.atmosphereDynamicLighting}}),czm_splitPosition:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.splitPosition}}),czm_geometricToleranceOverMeter:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.geometricToleranceOverMeter}}),czm_minimumDisableDepthTestDistance:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.minimumDisableDepthTestDistance}}),czm_invertClassificationColor:new pe({size:1,datatype:I.FLOAT_VEC4,getValue:function(e){return e.invertClassificationColor}}),czm_gamma:new pe({size:1,datatype:I.FLOAT,getValue:function(e){return e.gamma}}),czm_ellipsoidRadii:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.ellipsoid.radii}}),czm_ellipsoidInverseRadii:new pe({size:1,datatype:I.FLOAT_VEC3,getValue:function(e){return e.ellipsoid.oneOverRadii}})},ja={STREAM_DRAW:I.STREAM_DRAW,STATIC_DRAW:I.STATIC_DRAW,DYNAMIC_DRAW:I.DYNAMIC_DRAW,validate:function(e){return e===ja.STREAM_DRAW||e===ja.STATIC_DRAW||e===ja.DYNAMIC_DRAW}},Nn=Object.freeze(ja);function At(e){if(e=e??xe.EMPTY_OBJECT,p.defined("options.context",e.context),!l(e.typedArray)&&!l(e.sizeInBytes))throw new w("Either options.sizeInBytes or options.typedArray is required.");if(l(e.typedArray)&&l(e.sizeInBytes))throw new w("Cannot pass in both options.sizeInBytes and options.typedArray.");if(l(e.typedArray)&&(p.typeOf.object("options.typedArray",e.typedArray),p.typeOf.number("options.typedArray.byteLength",e.typedArray.byteLength)),!Nn.validate(e.usage))throw new w("usage is invalid.");const t=e.context._gl,n=e.bufferTarget,o=e.typedArray;let i=e.sizeInBytes;const r=e.usage,a=l(o);a&&(i=o.byteLength),p.typeOf.number.greaterThan("sizeInBytes",i,0);const s=t.createBuffer();t.bindBuffer(n,s),t.bufferData(n,a?o:i,r),t.bindBuffer(n,null),this._id=Xf(),this._gl=t,this._webgl2=e.context._webgl2,this._bufferTarget=n,this._sizeInBytes=i,this._usage=r,this._buffer=s,this.vertexArrayDestroyable=!0}At.createVertexBuffer=function(e){return p.defined("options.context",e.context),new At({context:e.context,bufferTarget:I.ARRAY_BUFFER,typedArray:e.typedArray,sizeInBytes:e.sizeInBytes,usage:e.usage})};At.createIndexBuffer=function(e){if(p.defined("options.context",e.context),!gt.validate(e.indexDatatype))throw new w("Invalid indexDatatype.");if(e.indexDatatype===gt.UNSIGNED_INT&&!e.context.elementIndexUint)throw new w("IndexDatatype.UNSIGNED_INT requires OES_element_index_uint, which is not supported on this system.  Check context.elementIndexUint.");const t=e.context,n=e.indexDatatype,o=gt.getSizeInBytes(n),i=new At({context:t,bufferTarget:I.ELEMENT_ARRAY_BUFFER,typedArray:e.typedArray,sizeInBytes:e.sizeInBytes,usage:e.usage}),r=i.sizeInBytes/o;return Object.defineProperties(i,{indexDatatype:{get:function(){return n}},bytesPerIndex:{get:function(){return o}},numberOfIndices:{get:function(){return r}}}),i};Object.defineProperties(At.prototype,{sizeInBytes:{get:function(){return this._sizeInBytes}},usage:{get:function(){return this._usage}}});At.prototype._getBuffer=function(){return this._buffer};At.prototype.copyFromArrayView=function(e,t){t=t??0,p.defined("arrayView",e),p.typeOf.number.lessThanOrEquals("offsetInBytes + arrayView.byteLength",t+e.byteLength,this._sizeInBytes);const n=this._gl,o=this._bufferTarget;n.bindBuffer(o,this._buffer),n.bufferSubData(o,t,e),n.bindBuffer(o,null)};At.prototype.copyFromBuffer=function(e,t,n,o){if(!this._webgl2)throw new w("A WebGL 2 context is required.");if(!l(e))throw new w("readBuffer must be defined.");if(!l(o)||o<=0)throw new w("sizeInBytes must be defined and be greater than zero.");if(!l(t)||t<0||t+o>e._sizeInBytes)throw new w("readOffset must be greater than or equal to zero and readOffset + sizeInBytes must be less than of equal to readBuffer.sizeInBytes.");if(!l(n)||n<0||n+o>this._sizeInBytes)throw new w("writeOffset must be greater than or equal to zero and writeOffset + sizeInBytes must be less than of equal to this.sizeInBytes.");if(this._buffer===e._buffer&&(n>=t&&n<t+o||t>n&&t<n+o))throw new w("When readBuffer is equal to this, the ranges [readOffset + sizeInBytes) and [writeOffset, writeOffset + sizeInBytes) must not overlap.");if(this._bufferTarget===I.ELEMENT_ARRAY_BUFFER&&e._bufferTarget!==I.ELEMENT_ARRAY_BUFFER||this._bufferTarget!==I.ELEMENT_ARRAY_BUFFER&&e._bufferTarget===I.ELEMENT_ARRAY_BUFFER)throw new w("Can not copy an index buffer into another buffer type.");const i=I.COPY_READ_BUFFER,r=I.COPY_WRITE_BUFFER,a=this._gl;a.bindBuffer(r,this._buffer),a.bindBuffer(i,e._buffer),a.copyBufferSubData(i,r,t,n,o),a.bindBuffer(r,null),a.bindBuffer(i,null)};At.prototype.getBufferData=function(e,t,n,o){if(t=t??0,n=n??0,!this._webgl2)throw new w("A WebGL 2 context is required.");if(!l(e))throw new w("arrayView is required.");let i,r,a=e.byteLength;if(l(o)?(i=o,l(a)?r=1:(a=e.length,r=e.BYTES_PER_ELEMENT)):l(a)?(i=a-n,r=1):(a=e.length,i=a-n,r=e.BYTES_PER_ELEMENT),n<0||n>a)throw new w("destinationOffset must be greater than zero and less than the arrayView length.");if(n+i>a)throw new w("destinationOffset + length must be less than or equal to the arrayViewLength.");if(t<0||t>this._sizeInBytes)throw new w("sourceOffset must be greater than zero and less than the buffers size.");if(t+i*r>this._sizeInBytes)throw new w("sourceOffset + length must be less than the buffers size.");const s=this._gl,c=I.COPY_READ_BUFFER;s.bindBuffer(c,this._buffer),s.getBufferSubData(c,t,e,n,o),s.bindBuffer(c,null)};At.prototype.isDestroyed=function(){return!1};At.prototype.destroy=function(){return this._gl.deleteBuffer(this._buffer),Lt(this)};const Gw={ENVIRONMENT:0,COMPUTE:1,GLOBE:2,TERRAIN_CLASSIFICATION:3,CESIUM_3D_TILE:4,CESIUM_3D_TILE_CLASSIFICATION:5,CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW:6,OPAQUE:7,TRANSLUCENT:8,VOXELS:9,GAUSSIAN_SPLATS:10,OVERLAY:11,NUMBER_OF_PASSES:12},Si=Object.freeze(Gw),ct={CULL:1,OCCLUDE:2,EXECUTE_IN_CLOSEST_FRUSTUM:4,DEBUG_SHOW_BOUNDING_VOLUME:8,CAST_SHADOWS:16,RECEIVE_SHADOWS:32,PICK_ONLY:64,DEPTH_FOR_TRANSLUCENT_CLASSIFICATION:128};function $n(e){e=e??xe.EMPTY_OBJECT,this._boundingVolume=e.boundingVolume,this._orientedBoundingBox=e.orientedBoundingBox,this._modelMatrix=e.modelMatrix,this._primitiveType=e.primitiveType??qe.TRIANGLES,this._vertexArray=e.vertexArray,this._count=e.count,this._offset=e.offset??0,this._instanceCount=e.instanceCount??0,this._shaderProgram=e.shaderProgram,this._uniformMap=e.uniformMap,this._renderState=e.renderState,this._framebuffer=e.framebuffer,this._pass=e.pass,this._owner=e.owner,this._debugOverlappingFrustums=0,this._pickId=e.pickId,this._pickMetadataAllowed=e.pickMetadataAllowed===!0,this._pickedMetadataInfo=void 0,this._flags=0,this.cull=e.cull??!0,this.occlude=e.occlude??!0,this.executeInClosestFrustum=e.executeInClosestFrustum??!1,this.debugShowBoundingVolume=e.debugShowBoundingVolume??!1,this.castShadows=e.castShadows??!1,this.receiveShadows=e.receiveShadows??!1,this.pickOnly=e.pickOnly??!1,this.depthForTranslucentClassification=e.depthForTranslucentClassification??!1,this.dirty=!0,this.lastDirtyTime=0,this.derivedCommands={}}function kt(e,t){return(e._flags&t)===t}function Mo(e,t,n){n?e._flags|=t:e._flags&=~t}Object.defineProperties($n.prototype,{boundingVolume:{get:function(){return this._boundingVolume},set:function(e){this._boundingVolume!==e&&(this._boundingVolume=e,this.dirty=!0)}},orientedBoundingBox:{get:function(){return this._orientedBoundingBox},set:function(e){this._orientedBoundingBox!==e&&(this._orientedBoundingBox=e,this.dirty=!0)}},cull:{get:function(){return kt(this,ct.CULL)},set:function(e){kt(this,ct.CULL)!==e&&(Mo(this,ct.CULL,e),this.dirty=!0)}},occlude:{get:function(){return kt(this,ct.OCCLUDE)},set:function(e){kt(this,ct.OCCLUDE)!==e&&(Mo(this,ct.OCCLUDE,e),this.dirty=!0)}},modelMatrix:{get:function(){return this._modelMatrix},set:function(e){this._modelMatrix!==e&&(this._modelMatrix=e,this.dirty=!0)}},primitiveType:{get:function(){return this._primitiveType},set:function(e){this._primitiveType!==e&&(this._primitiveType=e,this.dirty=!0)}},vertexArray:{get:function(){return this._vertexArray},set:function(e){this._vertexArray!==e&&(this._vertexArray=e,this.dirty=!0)}},count:{get:function(){return this._count},set:function(e){this._count!==e&&(this._count=e,this.dirty=!0)}},offset:{get:function(){return this._offset},set:function(e){this._offset!==e&&(this._offset=e,this.dirty=!0)}},instanceCount:{get:function(){return this._instanceCount},set:function(e){this._instanceCount!==e&&(this._instanceCount=e,this.dirty=!0)}},shaderProgram:{get:function(){return this._shaderProgram},set:function(e){this._shaderProgram!==e&&(this._shaderProgram=e,this.dirty=!0)}},castShadows:{get:function(){return kt(this,ct.CAST_SHADOWS)},set:function(e){kt(this,ct.CAST_SHADOWS)!==e&&(Mo(this,ct.CAST_SHADOWS,e),this.dirty=!0)}},receiveShadows:{get:function(){return kt(this,ct.RECEIVE_SHADOWS)},set:function(e){kt(this,ct.RECEIVE_SHADOWS)!==e&&(Mo(this,ct.RECEIVE_SHADOWS,e),this.dirty=!0)}},uniformMap:{get:function(){return this._uniformMap},set:function(e){this._uniformMap!==e&&(this._uniformMap=e,this.dirty=!0)}},renderState:{get:function(){return this._renderState},set:function(e){this._renderState!==e&&(this._renderState=e,this.dirty=!0)}},framebuffer:{get:function(){return this._framebuffer},set:function(e){this._framebuffer!==e&&(this._framebuffer=e,this.dirty=!0)}},pass:{get:function(){return this._pass},set:function(e){this._pass!==e&&(this._pass=e,this.dirty=!0)}},executeInClosestFrustum:{get:function(){return kt(this,ct.EXECUTE_IN_CLOSEST_FRUSTUM)},set:function(e){kt(this,ct.EXECUTE_IN_CLOSEST_FRUSTUM)!==e&&(Mo(this,ct.EXECUTE_IN_CLOSEST_FRUSTUM,e),this.dirty=!0)}},owner:{get:function(){return this._owner},set:function(e){this._owner!==e&&(this._owner=e,this.dirty=!0)}},debugShowBoundingVolume:{get:function(){return kt(this,ct.DEBUG_SHOW_BOUNDING_VOLUME)},set:function(e){kt(this,ct.DEBUG_SHOW_BOUNDING_VOLUME)!==e&&(Mo(this,ct.DEBUG_SHOW_BOUNDING_VOLUME,e),this.dirty=!0)}},debugOverlappingFrustums:{get:function(){return this._debugOverlappingFrustums},set:function(e){this._debugOverlappingFrustums!==e&&(this._debugOverlappingFrustums=e,this.dirty=!0)}},pickId:{get:function(){return this._pickId},set:function(e){this._pickId!==e&&(this._pickId=e,this.dirty=!0)}},pickMetadataAllowed:{get:function(){return this._pickMetadataAllowed}},pickedMetadataInfo:{get:function(){return this._pickedMetadataInfo},set:function(e){this._pickedMetadataInfo!==e&&(this._pickedMetadataInfo=e,this.dirty=!0)}},pickOnly:{get:function(){return kt(this,ct.PICK_ONLY)},set:function(e){kt(this,ct.PICK_ONLY)!==e&&(Mo(this,ct.PICK_ONLY,e),this.dirty=!0)}},depthForTranslucentClassification:{get:function(){return kt(this,ct.DEPTH_FOR_TRANSLUCENT_CLASSIFICATION)},set:function(e){kt(this,ct.DEPTH_FOR_TRANSLUCENT_CLASSIFICATION)!==e&&(Mo(this,ct.DEPTH_FOR_TRANSLUCENT_CLASSIFICATION,e),this.dirty=!0)}}});$n.shallowClone=function(e,t){if(l(e))return l(t)||(t=new $n),t._boundingVolume=e._boundingVolume,t._orientedBoundingBox=e._orientedBoundingBox,t._modelMatrix=e._modelMatrix,t._primitiveType=e._primitiveType,t._vertexArray=e._vertexArray,t._count=e._count,t._offset=e._offset,t._instanceCount=e._instanceCount,t._shaderProgram=e._shaderProgram,t._uniformMap=e._uniformMap,t._renderState=e._renderState,t._framebuffer=e._framebuffer,t._pass=e._pass,t._owner=e._owner,t._debugOverlappingFrustums=e._debugOverlappingFrustums,t._pickId=e._pickId,t._pickMetadataAllowed=e._pickMetadataAllowed,t._pickedMetadataInfo=e._pickedMetadataInfo,t._flags=e._flags,t.dirty=!0,t.lastDirtyTime=0,t};$n.prototype.execute=function(e,t){e.draw(this,t)};const Ie={_maximumCombinedTextureImageUnits:0,_maximumCubeMapSize:0,_maximumFragmentUniformVectors:0,_maximumTextureImageUnits:0,_maximumRenderbufferSize:0,_maximumTextureSize:0,_maximumVaryingVectors:0,_maximumVertexAttributes:0,_maximumVertexTextureImageUnits:0,_maximumVertexUniformVectors:0,_minimumAliasedLineWidth:0,_maximumAliasedLineWidth:0,_minimumAliasedPointSize:0,_maximumAliasedPointSize:0,_maximumViewportWidth:0,_maximumViewportHeight:0,_maximumTextureFilterAnisotropy:0,_maximumDrawBuffers:0,_maximumColorAttachments:0,_maximumSamples:0,_highpFloatSupported:!1,_highpIntSupported:!1};Object.defineProperties(Ie,{maximumCombinedTextureImageUnits:{get:function(){return Ie._maximumCombinedTextureImageUnits}},maximumCubeMapSize:{get:function(){return Ie._maximumCubeMapSize}},maximumFragmentUniformVectors:{get:function(){return Ie._maximumFragmentUniformVectors}},maximumTextureImageUnits:{get:function(){return Ie._maximumTextureImageUnits}},maximumRenderbufferSize:{get:function(){return Ie._maximumRenderbufferSize}},maximumTextureSize:{get:function(){return Ie._maximumTextureSize}},maximumVaryingVectors:{get:function(){return Ie._maximumVaryingVectors}},maximumVertexAttributes:{get:function(){return Ie._maximumVertexAttributes}},maximumVertexTextureImageUnits:{get:function(){return Ie._maximumVertexTextureImageUnits}},maximumVertexUniformVectors:{get:function(){return Ie._maximumVertexUniformVectors}},minimumAliasedLineWidth:{get:function(){return Ie._minimumAliasedLineWidth}},maximumAliasedLineWidth:{get:function(){return Ie._maximumAliasedLineWidth}},minimumAliasedPointSize:{get:function(){return Ie._minimumAliasedPointSize}},maximumAliasedPointSize:{get:function(){return Ie._maximumAliasedPointSize}},maximumViewportWidth:{get:function(){return Ie._maximumViewportWidth}},maximumViewportHeight:{get:function(){return Ie._maximumViewportHeight}},maximumTextureFilterAnisotropy:{get:function(){return Ie._maximumTextureFilterAnisotropy}},maximumDrawBuffers:{get:function(){return Ie._maximumDrawBuffers}},maximumColorAttachments:{get:function(){return Ie._maximumColorAttachments}},maximumSamples:{get:function(){return Ie._maximumSamples}},highpFloatSupported:{get:function(){return Ie._highpFloatSupported}},highpIntSupported:{get:function(){return Ie._highpIntSupported}}});function wc(e,t,n){const o=e._gl;o.framebufferTexture2D(o.FRAMEBUFFER,t,n._target,n._texture,0)}function Ra(e,t,n){const o=e._gl;o.framebufferRenderbuffer(o.FRAMEBUFFER,t,o.RENDERBUFFER,n._getRenderbuffer())}function qn(e){e=e??xe.EMPTY_OBJECT;const t=e.context;p.defined("options.context",t);const n=t._gl,o=Ie.maximumColorAttachments;if(this._gl=n,this._framebuffer=n.createFramebuffer(),this._colorTextures=[],this._colorRenderbuffers=[],this._activeColorAttachments=[],this._depthTexture=void 0,this._depthRenderbuffer=void 0,this._stencilRenderbuffer=void 0,this._depthStencilTexture=void 0,this._depthStencilRenderbuffer=void 0,this.destroyAttachments=e.destroyAttachments??!0,l(e.colorTextures)&&l(e.colorRenderbuffers))throw new w("Cannot have both color texture and color renderbuffer attachments.");if(l(e.depthTexture)&&l(e.depthRenderbuffer))throw new w("Cannot have both a depth texture and depth renderbuffer attachment.");if(l(e.depthStencilTexture)&&l(e.depthStencilRenderbuffer))throw new w("Cannot have both a depth-stencil texture and depth-stencil renderbuffer attachment.");const i=l(e.depthTexture)||l(e.depthRenderbuffer),r=l(e.depthStencilTexture)||l(e.depthStencilRenderbuffer);if(i&&r)throw new w("Cannot have both a depth and depth-stencil attachment.");if(l(e.stencilRenderbuffer)&&r)throw new w("Cannot have both a stencil and depth-stencil attachment.");if(i&&l(e.stencilRenderbuffer))throw new w("Cannot have both a depth and stencil attachment.");if(this._bind(),l(e.colorTextures)){const a=e.colorTextures,s=this._colorTextures.length=this._activeColorAttachments.length=a.length;if(s>o)throw new w("The number of color attachments exceeds the number supported.");for(let c=0;c<s;++c){const f=a[c];if(!Me.isColorFormat(f.pixelFormat))throw new w("The color-texture pixel-format must be a color format.");if(f.pixelDatatype===Oe.FLOAT&&!t.colorBufferFloat)throw new w("The color texture pixel datatype is FLOAT and the WebGL implementation does not support the EXT_color_buffer_float or WEBGL_color_buffer_float extensions. See Context.colorBufferFloat.");if(f.pixelDatatype===Oe.HALF_FLOAT&&!t.colorBufferHalfFloat)throw new w("The color texture pixel datatype is HALF_FLOAT and the WebGL implementation does not support the EXT_color_buffer_half_float extension. See Context.colorBufferHalfFloat.");const d=this._gl.COLOR_ATTACHMENT0+c;wc(this,d,f),this._activeColorAttachments[c]=d,this._colorTextures[c]=f}}if(l(e.colorRenderbuffers)){const a=e.colorRenderbuffers,s=this._colorRenderbuffers.length=this._activeColorAttachments.length=a.length;if(s>o)throw new w("The number of color attachments exceeds the number supported.");for(let c=0;c<s;++c){const f=a[c],d=this._gl.COLOR_ATTACHMENT0+c;Ra(this,d,f),this._activeColorAttachments[c]=d,this._colorRenderbuffers[c]=f}}if(l(e.depthTexture)){const a=e.depthTexture;if(a.pixelFormat!==Me.DEPTH_COMPONENT)throw new w("The depth-texture pixel-format must be DEPTH_COMPONENT.");wc(this,this._gl.DEPTH_ATTACHMENT,a),this._depthTexture=a}if(l(e.depthRenderbuffer)){const a=e.depthRenderbuffer;Ra(this,this._gl.DEPTH_ATTACHMENT,a),this._depthRenderbuffer=a}if(l(e.stencilRenderbuffer)){const a=e.stencilRenderbuffer;Ra(this,this._gl.STENCIL_ATTACHMENT,a),this._stencilRenderbuffer=a}if(l(e.depthStencilTexture)){const a=e.depthStencilTexture;if(a.pixelFormat!==Me.DEPTH_STENCIL)throw new w("The depth-stencil pixel-format must be DEPTH_STENCIL.");wc(this,this._gl.DEPTH_STENCIL_ATTACHMENT,a),this._depthStencilTexture=a}if(l(e.depthStencilRenderbuffer)){const a=e.depthStencilRenderbuffer;Ra(this,this._gl.DEPTH_STENCIL_ATTACHMENT,a),this._depthStencilRenderbuffer=a}this._unBind()}Object.defineProperties(qn.prototype,{status:{get:function(){this._bind();const e=this._gl.checkFramebufferStatus(this._gl.FRAMEBUFFER);return this._unBind(),e}},numberOfColorAttachments:{get:function(){return this._activeColorAttachments.length}},depthTexture:{get:function(){return this._depthTexture}},depthRenderbuffer:{get:function(){return this._depthRenderbuffer}},stencilRenderbuffer:{get:function(){return this._stencilRenderbuffer}},depthStencilTexture:{get:function(){return this._depthStencilTexture}},depthStencilRenderbuffer:{get:function(){return this._depthStencilRenderbuffer}},hasDepthAttachment:{get:function(){return!!(this.depthTexture||this.depthRenderbuffer||this.depthStencilTexture||this.depthStencilRenderbuffer)}}});qn.prototype._bind=function(){const e=this._gl;e.bindFramebuffer(e.FRAMEBUFFER,this._framebuffer)};qn.prototype._unBind=function(){const e=this._gl;e.bindFramebuffer(e.FRAMEBUFFER,null)};qn.prototype.bindDraw=function(){const e=this._gl;e.bindFramebuffer(e.DRAW_FRAMEBUFFER,this._framebuffer)};qn.prototype.bindRead=function(){const e=this._gl;e.bindFramebuffer(e.READ_FRAMEBUFFER,this._framebuffer)};qn.prototype._getActiveColorAttachments=function(){return this._activeColorAttachments};qn.prototype.getColorTexture=function(e){if(!l(e)||e<0||e>=this._colorTextures.length)throw new w("index is required, must be greater than or equal to zero and must be less than the number of color attachments.");return this._colorTextures[e]};qn.prototype.getColorRenderbuffer=function(e){if(!l(e)||e<0||e>=this._colorRenderbuffers.length)throw new w("index is required, must be greater than or equal to zero and must be less than the number of color attachments.");return this._colorRenderbuffers[e]};qn.prototype.isDestroyed=function(){return!1};qn.prototype.destroy=function(){if(this.destroyAttachments){const e=this._colorTextures;for(let n=0;n<e.length;++n){const o=e[n];l(o)&&o.destroy()}const t=this._colorRenderbuffers;for(let n=0;n<t.length;++n){const o=t[n];l(o)&&o.destroy()}this._depthTexture=this._depthTexture&&this._depthTexture.destroy(),this._depthRenderbuffer=this._depthRenderbuffer&&this._depthRenderbuffer.destroy(),this._stencilRenderbuffer=this._stencilRenderbuffer&&this._stencilRenderbuffer.destroy(),this._depthStencilTexture=this._depthStencilTexture&&this._depthStencilTexture.destroy(),this._depthStencilRenderbuffer=this._depthStencilRenderbuffer&&this._depthStencilRenderbuffer.destroy()}return this._gl.deleteFramebuffer(this._framebuffer),Lt(this)};function _d(e){if(typeof e!="object"||e===null)return e;let t;const n=Object.keys(e);for(let o=0;o<n.length;o++)t=n[o],e.hasOwnProperty(t)&&t!=="_applyFunctions"&&(e[t]=_d(e[t]));return Object.freeze(e)}function tu(e){return e===I.FUNC_ADD||e===I.FUNC_SUBTRACT||e===I.FUNC_REVERSE_SUBTRACT||e===I.MIN||e===I.MAX}function Pa(e){return e===I.ZERO||e===I.ONE||e===I.SRC_COLOR||e===I.ONE_MINUS_SRC_COLOR||e===I.DST_COLOR||e===I.ONE_MINUS_DST_COLOR||e===I.SRC_ALPHA||e===I.ONE_MINUS_SRC_ALPHA||e===I.DST_ALPHA||e===I.ONE_MINUS_DST_ALPHA||e===I.CONSTANT_COLOR||e===I.ONE_MINUS_CONSTANT_COLOR||e===I.CONSTANT_ALPHA||e===I.ONE_MINUS_CONSTANT_ALPHA||e===I.SRC_ALPHA_SATURATE}function qw(e){return e===I.FRONT||e===I.BACK||e===I.FRONT_AND_BACK}function kw(e){return e===I.NEVER||e===I.LESS||e===I.EQUAL||e===I.LEQUAL||e===I.GREATER||e===I.NOTEQUAL||e===I.GEQUAL||e===I.ALWAYS}function nu(e){return e===I.NEVER||e===I.LESS||e===I.EQUAL||e===I.LEQUAL||e===I.GREATER||e===I.NOTEQUAL||e===I.GEQUAL||e===I.ALWAYS}function yi(e){return e===I.ZERO||e===I.KEEP||e===I.REPLACE||e===I.INCR||e===I.DECR||e===I.INVERT||e===I.INCR_WRAP||e===I.DECR_WRAP}function Ut(e){const t=e??xe.EMPTY_OBJECT,n=t.cull??xe.EMPTY_OBJECT,o=t.polygonOffset??xe.EMPTY_OBJECT,i=t.scissorTest??xe.EMPTY_OBJECT,r=i.rectangle??xe.EMPTY_OBJECT,a=t.depthRange??xe.EMPTY_OBJECT,s=t.depthTest??xe.EMPTY_OBJECT,c=t.colorMask??xe.EMPTY_OBJECT,f=t.blending??xe.EMPTY_OBJECT,d=f.color??xe.EMPTY_OBJECT,u=t.stencilTest??xe.EMPTY_OBJECT,m=u.frontOperation??xe.EMPTY_OBJECT,_=u.backOperation??xe.EMPTY_OBJECT,g=t.sampleCoverage??xe.EMPTY_OBJECT,y=t.viewport;if(this.frontFace=t.frontFace??ki.COUNTER_CLOCKWISE,this.cull={enabled:n.enabled??!1,face:n.face??I.BACK},this.lineWidth=t.lineWidth??1,this.polygonOffset={enabled:o.enabled??!1,factor:o.factor??0,units:o.units??0},this.scissorTest={enabled:i.enabled??!1,rectangle:ot.clone(r)},this.depthRange={near:a.near??0,far:a.far??1},this.depthTest={enabled:s.enabled??!1,func:s.func??I.LESS},this.colorMask={red:c.red??!0,green:c.green??!0,blue:c.blue??!0,alpha:c.alpha??!0},this.depthMask=t.depthMask??!0,this.stencilMask=t.stencilMask??-1,this.blending={enabled:f.enabled??!1,color:new x(d.red??0,d.green??0,d.blue??0,d.alpha??0),equationRgb:f.equationRgb??I.FUNC_ADD,equationAlpha:f.equationAlpha??I.FUNC_ADD,functionSourceRgb:f.functionSourceRgb??I.ONE,functionSourceAlpha:f.functionSourceAlpha??I.ONE,functionDestinationRgb:f.functionDestinationRgb??I.ZERO,functionDestinationAlpha:f.functionDestinationAlpha??I.ZERO},this.stencilTest={enabled:u.enabled??!1,frontFunction:u.frontFunction??I.ALWAYS,backFunction:u.backFunction??I.ALWAYS,reference:u.reference??0,mask:u.mask??-1,frontOperation:{fail:m.fail??I.KEEP,zFail:m.zFail??I.KEEP,zPass:m.zPass??I.KEEP},backOperation:{fail:_.fail??I.KEEP,zFail:_.zFail??I.KEEP,zPass:_.zPass??I.KEEP}},this.sampleCoverage={enabled:g.enabled??!1,value:g.value??1,invert:g.invert??!1},this.viewport=l(y)?new ot(y.x,y.y,y.width,y.height):void 0,this.lineWidth<Ie.minimumAliasedLineWidth||this.lineWidth>Ie.maximumAliasedLineWidth)throw new w("renderState.lineWidth is out of range.  Check minimumAliasedLineWidth and maximumAliasedLineWidth.");if(!ki.validate(this.frontFace))throw new w("Invalid renderState.frontFace.");if(!qw(this.cull.face))throw new w("Invalid renderState.cull.face.");if(this.scissorTest.rectangle.width<0||this.scissorTest.rectangle.height<0)throw new w("renderState.scissorTest.rectangle.width and renderState.scissorTest.rectangle.height must be greater than or equal to zero.");if(this.depthRange.near>this.depthRange.far)throw new w("renderState.depthRange.near can not be greater than renderState.depthRange.far.");if(this.depthRange.near<0)throw new w("renderState.depthRange.near must be greater than or equal to zero.");if(this.depthRange.far>1)throw new w("renderState.depthRange.far must be less than or equal to one.");if(!kw(this.depthTest.func))throw new w("Invalid renderState.depthTest.func.");if(this.blending.color.red<0||this.blending.color.red>1||this.blending.color.green<0||this.blending.color.green>1||this.blending.color.blue<0||this.blending.color.blue>1||this.blending.color.alpha<0||this.blending.color.alpha>1)throw new w("renderState.blending.color components must be greater than or equal to zero and less than or equal to one.");if(!tu(this.blending.equationRgb))throw new w("Invalid renderState.blending.equationRgb.");if(!tu(this.blending.equationAlpha))throw new w("Invalid renderState.blending.equationAlpha.");if(!Pa(this.blending.functionSourceRgb))throw new w("Invalid renderState.blending.functionSourceRgb.");if(!Pa(this.blending.functionSourceAlpha))throw new w("Invalid renderState.blending.functionSourceAlpha.");if(!Pa(this.blending.functionDestinationRgb))throw new w("Invalid renderState.blending.functionDestinationRgb.");if(!Pa(this.blending.functionDestinationAlpha))throw new w("Invalid renderState.blending.functionDestinationAlpha.");if(!nu(this.stencilTest.frontFunction))throw new w("Invalid renderState.stencilTest.frontFunction.");if(!nu(this.stencilTest.backFunction))throw new w("Invalid renderState.stencilTest.backFunction.");if(!yi(this.stencilTest.frontOperation.fail))throw new w("Invalid renderState.stencilTest.frontOperation.fail.");if(!yi(this.stencilTest.frontOperation.zFail))throw new w("Invalid renderState.stencilTest.frontOperation.zFail.");if(!yi(this.stencilTest.frontOperation.zPass))throw new w("Invalid renderState.stencilTest.frontOperation.zPass.");if(!yi(this.stencilTest.backOperation.fail))throw new w("Invalid renderState.stencilTest.backOperation.fail.");if(!yi(this.stencilTest.backOperation.zFail))throw new w("Invalid renderState.stencilTest.backOperation.zFail.");if(!yi(this.stencilTest.backOperation.zPass))throw new w("Invalid renderState.stencilTest.backOperation.zPass.");if(l(this.viewport)){if(this.viewport.width<0)throw new w("renderState.viewport.width must be greater than or equal to zero.");if(this.viewport.height<0)throw new w("renderState.viewport.height must be greater than or equal to zero.");if(this.viewport.width>Ie.maximumViewportWidth)throw new w(`renderState.viewport.width must be less than or equal to the maximum viewport width (${Ie.maximumViewportWidth.toString()}).  Check maximumViewportWidth.`);if(this.viewport.height>Ie.maximumViewportHeight)throw new w(`renderState.viewport.height must be less than or equal to the maximum viewport height (${Ie.maximumViewportHeight.toString()}).  Check maximumViewportHeight.`)}this.id=0,this._applyFunctions=[]}let jw=0,Xn={};Ut.fromCache=function(e){const t=JSON.stringify(e);let n=Xn[t];if(l(n))return++n.referenceCount,n.state;let o=new Ut(e);const i=JSON.stringify(o);return n=Xn[i],l(n)||(o.id=jw++,o=_d(o),n={referenceCount:0,state:o},Xn[i]=n),++n.referenceCount,Xn[t]={referenceCount:1,state:n.state},n.state};Ut.removeFromCache=function(e){const t=new Ut(e),n=JSON.stringify(t),o=Xn[n],i=JSON.stringify(e),r=Xn[i];l(r)&&(--r.referenceCount,r.referenceCount===0&&(delete Xn[i],l(o)&&--o.referenceCount)),l(o)&&o.referenceCount===0&&delete Xn[n]};Ut.getCache=function(){return Xn};Ut.clearCache=function(){Xn={}};function ci(e,t,n){n?e.enable(t):e.disable(t)}function gd(e,t){e.frontFace(t.frontFace)}function yd(e,t){const n=t.cull,o=n.enabled;ci(e,e.CULL_FACE,o),o&&e.cullFace(n.face)}function bd(e,t){e.lineWidth(t.lineWidth)}function Ed(e,t){const n=t.polygonOffset,o=n.enabled;ci(e,e.POLYGON_OFFSET_FILL,o),o&&e.polygonOffset(n.factor,n.units)}function wd(e,t,n){const o=t.scissorTest,i=l(n.scissorTest)?n.scissorTest.enabled:o.enabled;if(ci(e,e.SCISSOR_TEST,i),i){const r=l(n.scissorTest)?n.scissorTest.rectangle:o.rectangle;e.scissor(r.x,r.y,r.width,r.height)}}function vd(e,t){const n=t.depthRange;e.depthRange(n.near,n.far)}function Td(e,t){const n=t.depthTest,o=n.enabled;ci(e,e.DEPTH_TEST,o),o&&e.depthFunc(n.func)}function Sd(e,t){const n=t.colorMask;e.colorMask(n.red,n.green,n.blue,n.alpha)}function Ad(e,t){e.depthMask(t.depthMask)}function xd(e,t){e.stencilMask(t.stencilMask)}function Vw(e,t){e.blendColor(t.red,t.green,t.blue,t.alpha)}function Od(e,t,n){const o=t.blending,i=l(n.blendingEnabled)?n.blendingEnabled:o.enabled;ci(e,e.BLEND,i),i&&(Vw(e,o.color),e.blendEquationSeparate(o.equationRgb,o.equationAlpha),e.blendFuncSeparate(o.functionSourceRgb,o.functionDestinationRgb,o.functionSourceAlpha,o.functionDestinationAlpha))}function Cd(e,t){const n=t.stencilTest,o=n.enabled;if(ci(e,e.STENCIL_TEST,o),o){const i=n.frontFunction,r=n.backFunction,a=n.reference,s=n.mask;e.stencilFunc(i,a,s),e.stencilFuncSeparate(e.BACK,r,a,s),e.stencilFuncSeparate(e.FRONT,i,a,s);const c=n.frontOperation,f=c.fail,d=c.zFail,u=c.zPass;e.stencilOpSeparate(e.FRONT,f,d,u);const m=n.backOperation,_=m.fail,g=m.zFail,y=m.zPass;e.stencilOpSeparate(e.BACK,_,g,y)}}function Md(e,t){const n=t.sampleCoverage,o=n.enabled;ci(e,e.SAMPLE_COVERAGE,o),o&&e.sampleCoverage(n.value,n.invert)}const Hw=new ot;function Rd(e,t,n){let o=t.viewport??n.viewport;l(o)||(o=Hw,o.width=n.context.drawingBufferWidth,o.height=n.context.drawingBufferHeight),n.context.uniformState.viewport=o,e.viewport(o.x,o.y,o.width,o.height)}Ut.apply=function(e,t,n){gd(e,t),yd(e,t),bd(e,t),Ed(e,t),vd(e,t),Td(e,t),Sd(e,t),Ad(e,t),xd(e,t),Cd(e,t),Md(e,t),wd(e,t,n),Od(e,t,n),Rd(e,t,n)};function Ww(e,t){const n=[];return e.frontFace!==t.frontFace&&n.push(gd),(e.cull.enabled!==t.cull.enabled||e.cull.face!==t.cull.face)&&n.push(yd),e.lineWidth!==t.lineWidth&&n.push(bd),(e.polygonOffset.enabled!==t.polygonOffset.enabled||e.polygonOffset.factor!==t.polygonOffset.factor||e.polygonOffset.units!==t.polygonOffset.units)&&n.push(Ed),(e.depthRange.near!==t.depthRange.near||e.depthRange.far!==t.depthRange.far)&&n.push(vd),(e.depthTest.enabled!==t.depthTest.enabled||e.depthTest.func!==t.depthTest.func)&&n.push(Td),(e.colorMask.red!==t.colorMask.red||e.colorMask.green!==t.colorMask.green||e.colorMask.blue!==t.colorMask.blue||e.colorMask.alpha!==t.colorMask.alpha)&&n.push(Sd),e.depthMask!==t.depthMask&&n.push(Ad),e.stencilMask!==t.stencilMask&&n.push(xd),(e.stencilTest.enabled!==t.stencilTest.enabled||e.stencilTest.frontFunction!==t.stencilTest.frontFunction||e.stencilTest.backFunction!==t.stencilTest.backFunction||e.stencilTest.reference!==t.stencilTest.reference||e.stencilTest.mask!==t.stencilTest.mask||e.stencilTest.frontOperation.fail!==t.stencilTest.frontOperation.fail||e.stencilTest.frontOperation.zFail!==t.stencilTest.frontOperation.zFail||e.stencilTest.backOperation.fail!==t.stencilTest.backOperation.fail||e.stencilTest.backOperation.zFail!==t.stencilTest.backOperation.zFail||e.stencilTest.backOperation.zPass!==t.stencilTest.backOperation.zPass)&&n.push(Cd),(e.sampleCoverage.enabled!==t.sampleCoverage.enabled||e.sampleCoverage.value!==t.sampleCoverage.value||e.sampleCoverage.invert!==t.sampleCoverage.invert)&&n.push(Md),n}Ut.partialApply=function(e,t,n,o,i,r){if(t!==n){let d=n._applyFunctions[t.id];l(d)||(d=Ww(t,n),n._applyFunctions[t.id]=d);const u=d.length;for(let m=0;m<u;++m)d[m](e,n)}const a=l(o.scissorTest)?o.scissorTest:t.scissorTest,s=l(i.scissorTest)?i.scissorTest:n.scissorTest;(a!==s||r)&&wd(e,n,i);const c=l(o.blendingEnabled)?o.blendingEnabled:t.blending.enabled,f=l(i.blendingEnabled)?i.blendingEnabled:n.blending.enabled;(c!==f||f&&t.blending!==n.blending)&&Od(e,n,i),(t!==n||o!==i||o.context!==i.context)&&Rd(e,n,i)};Ut.getState=function(e){if(!l(e))throw new w("renderState is required.");return{frontFace:e.frontFace,cull:{enabled:e.cull.enabled,face:e.cull.face},lineWidth:e.lineWidth,polygonOffset:{enabled:e.polygonOffset.enabled,factor:e.polygonOffset.factor,units:e.polygonOffset.units},scissorTest:{enabled:e.scissorTest.enabled,rectangle:ot.clone(e.scissorTest.rectangle)},depthRange:{near:e.depthRange.near,far:e.depthRange.far},depthTest:{enabled:e.depthTest.enabled,func:e.depthTest.func},colorMask:{red:e.colorMask.red,green:e.colorMask.green,blue:e.colorMask.blue,alpha:e.colorMask.alpha},depthMask:e.depthMask,stencilMask:e.stencilMask,blending:{enabled:e.blending.enabled,color:x.clone(e.blending.color),equationRgb:e.blending.equationRgb,equationAlpha:e.blending.equationAlpha,functionSourceRgb:e.blending.functionSourceRgb,functionSourceAlpha:e.blending.functionSourceAlpha,functionDestinationRgb:e.blending.functionDestinationRgb,functionDestinationAlpha:e.blending.functionDestinationAlpha},stencilTest:{enabled:e.stencilTest.enabled,frontFunction:e.stencilTest.frontFunction,backFunction:e.stencilTest.backFunction,reference:e.stencilTest.reference,mask:e.stencilTest.mask,frontOperation:{fail:e.stencilTest.frontOperation.fail,zFail:e.stencilTest.frontOperation.zFail,zPass:e.stencilTest.frontOperation.zPass},backOperation:{fail:e.stencilTest.backOperation.fail,zFail:e.stencilTest.backOperation.zFail,zPass:e.stencilTest.backOperation.zPass}},sampleCoverage:{enabled:e.sampleCoverage.enabled,value:e.sampleCoverage.value,invert:e.sampleCoverage.invert},viewport:l(e.viewport)?ot.clone(e.viewport):void 0}};function Yw(e,t,n,o){switch(t.type){case e.FLOAT:return new Pd(e,t,n,o);case e.FLOAT_VEC2:return new Id(e,t,n,o);case e.FLOAT_VEC3:return new zd(e,t,n,o);case e.FLOAT_VEC4:return new Nd(e,t,n,o);case e.SAMPLER_2D:case e.SAMPLER_3D:case e.SAMPLER_CUBE:return new ls(e,t,n,o);case e.UNSIGNED_INT_SAMPLER_2D:return new ls(e,t,n,o);case e.INT:case e.BOOL:return new Dd(e,t,n,o);case e.INT_VEC2:case e.BOOL_VEC2:return new Ld(e,t,n,o);case e.INT_VEC3:case e.BOOL_VEC3:return new Fd(e,t,n,o);case e.INT_VEC4:case e.BOOL_VEC4:return new Bd(e,t,n,o);case e.FLOAT_MAT2:return new Ud(e,t,n,o);case e.FLOAT_MAT3:return new Gd(e,t,n,o);case e.FLOAT_MAT4:return new qd(e,t,n,o);default:throw new mt(`Unrecognized uniform type: ${t.type} for uniform "${n}".`)}}function Pd(e,t,n,o){this.name=n,this.value=void 0,this._value=0,this._gl=e,this._location=o}Pd.prototype.set=function(){this.value!==this._value&&(this._value=this.value,this._gl.uniform1f(this._location,this.value))};function Id(e,t,n,o){this.name=n,this.value=void 0,this._value=new V,this._gl=e,this._location=o}Id.prototype.set=function(){const e=this.value;V.equals(e,this._value)||(V.clone(e,this._value),this._gl.uniform2f(this._location,e.x,e.y))};function zd(e,t,n,o){this.name=n,this.value=void 0,this._value=void 0,this._gl=e,this._location=o}zd.prototype.set=function(){const e=this.value;if(l(e.red))x.equals(e,this._value)||(this._value=x.clone(e,this._value),this._gl.uniform3f(this._location,e.red,e.green,e.blue));else if(l(e.x))h.equals(e,this._value)||(this._value=h.clone(e,this._value),this._gl.uniform3f(this._location,e.x,e.y,e.z));else throw new w(`Invalid vec3 value for uniform "${this.name}".`)};function Nd(e,t,n,o){this.name=n,this.value=void 0,this._value=void 0,this._gl=e,this._location=o}Nd.prototype.set=function(){const e=this.value;if(l(e.red))x.equals(e,this._value)||(this._value=x.clone(e,this._value),this._gl.uniform4f(this._location,e.red,e.green,e.blue,e.alpha));else if(l(e.x))Q.equals(e,this._value)||(this._value=Q.clone(e,this._value),this._gl.uniform4f(this._location,e.x,e.y,e.z,e.w));else throw new w(`Invalid vec4 value for uniform "${this.name}".`)};function ls(e,t,n,o){this.name=n,this.value=void 0,this._gl=e,this._location=o,this.textureUnitIndex=void 0}ls.prototype.set=function(){const e=this._gl;e.activeTexture(e.TEXTURE0+this.textureUnitIndex);const t=this.value;e.bindTexture(t._target,t._texture)};ls.prototype._setSampler=function(e){return this.textureUnitIndex=e,this._gl.uniform1i(this._location,e),e+1};function Dd(e,t,n,o){this.name=n,this.value=void 0,this._value=0,this._gl=e,this._location=o}Dd.prototype.set=function(){this.value!==this._value&&(this._value=this.value,this._gl.uniform1i(this._location,this.value))};function Ld(e,t,n,o){this.name=n,this.value=void 0,this._value=new V,this._gl=e,this._location=o}Ld.prototype.set=function(){const e=this.value;V.equals(e,this._value)||(V.clone(e,this._value),this._gl.uniform2i(this._location,e.x,e.y))};function Fd(e,t,n,o){this.name=n,this.value=void 0,this._value=new h,this._gl=e,this._location=o}Fd.prototype.set=function(){const e=this.value;h.equals(e,this._value)||(h.clone(e,this._value),this._gl.uniform3i(this._location,e.x,e.y,e.z))};function Bd(e,t,n,o){this.name=n,this.value=void 0,this._value=new Q,this._gl=e,this._location=o}Bd.prototype.set=function(){const e=this.value;Q.equals(e,this._value)||(Q.clone(e,this._value),this._gl.uniform4i(this._location,e.x,e.y,e.z,e.w))};const $w=new Float32Array(4);function Ud(e,t,n,o){this.name=n,this.value=void 0,this._value=new ge,this._gl=e,this._location=o}Ud.prototype.set=function(){if(!ge.equalsArray(this.value,this._value,0)){ge.clone(this.value,this._value);const e=ge.toArray(this.value,$w);this._gl.uniformMatrix2fv(this._location,!1,e)}};const Xw=new Float32Array(9);function Gd(e,t,n,o){this.name=n,this.value=void 0,this._value=new B,this._gl=e,this._location=o}Gd.prototype.set=function(){if(!B.equalsArray(this.value,this._value,0)){B.clone(this.value,this._value);const e=B.toArray(this.value,Xw);this._gl.uniformMatrix3fv(this._location,!1,e)}};const Zw=new Float32Array(16);function qd(e,t,n,o){this.name=n,this.value=void 0,this._value=new U,this._gl=e,this._location=o}qd.prototype.set=function(){if(!U.equalsArray(this.value,this._value,0)){U.clone(this.value,this._value);const e=U.toArray(this.value,Zw);this._gl.uniformMatrix4fv(this._location,!1,e)}};function Kw(e,t,n,o){switch(t.type){case e.FLOAT:return new kd(e,t,n,o);case e.FLOAT_VEC2:return new jd(e,t,n,o);case e.FLOAT_VEC3:return new Vd(e,t,n,o);case e.FLOAT_VEC4:return new Hd(e,t,n,o);case e.SAMPLER_2D:case e.SAMPLER_3D:case e.SAMPLER_CUBE:return new Zf(e,t,n,o);case e.INT:case e.BOOL:return new Wd(e,t,n,o);case e.INT_VEC2:case e.BOOL_VEC2:return new Yd(e,t,n,o);case e.INT_VEC3:case e.BOOL_VEC3:return new $d(e,t,n,o);case e.INT_VEC4:case e.BOOL_VEC4:return new Xd(e,t,n,o);case e.FLOAT_MAT2:return new Zd(e,t,n,o);case e.FLOAT_MAT3:return new Kd(e,t,n,o);case e.FLOAT_MAT4:return new Qd(e,t,n,o);default:throw new mt(`Unrecognized uniform type: ${t.type} for uniform "${n}".`)}}function kd(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i),this._gl=e,this._location=o[0]}kd.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1;for(let i=0;i<t;++i){const r=e[i];r!==n[i]&&(n[i]=r,o=!0)}o&&this._gl.uniform1fv(this._location,n)};function jd(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i*2),this._gl=e,this._location=o[0]}jd.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let r=0;r<t;++r){const a=e[r];V.equalsArray(a,n,i)||(V.pack(a,n,i),o=!0),i+=2}o&&this._gl.uniform2fv(this._location,n)};function Vd(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i*3),this._gl=e,this._location=o[0]}Vd.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let r=0;r<t;++r){const a=e[r];if(l(a.red))(a.red!==n[i]||a.green!==n[i+1]||a.blue!==n[i+2])&&(n[i]=a.red,n[i+1]=a.green,n[i+2]=a.blue,o=!0);else if(l(a.x))h.equalsArray(a,n,i)||(h.pack(a,n,i),o=!0);else throw new w("Invalid vec3 value.");i+=3}o&&this._gl.uniform3fv(this._location,n)};function Hd(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i*4),this._gl=e,this._location=o[0]}Hd.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let r=0;r<t;++r){const a=e[r];if(l(a.red))x.equalsArray(a,n,i)||(x.pack(a,n,i),o=!0);else if(l(a.x))Q.equalsArray(a,n,i)||(Q.pack(a,n,i),o=!0);else throw new w("Invalid vec4 value.");i+=4}o&&this._gl.uniform4fv(this._location,n)};function Zf(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i),this._gl=e,this._locations=o,this.textureUnitIndex=void 0}Zf.prototype.set=function(){const e=this._gl,t=e.TEXTURE0+this.textureUnitIndex,n=this.value,o=n.length;for(let i=0;i<o;++i){const r=n[i];e.activeTexture(t+i),e.bindTexture(r._target,r._texture)}};Zf.prototype._setSampler=function(e){this.textureUnitIndex=e;const t=this._locations,n=t.length;for(let o=0;o<n;++o){const i=e+o;this._gl.uniform1i(t[o],i)}return e+n};function Wd(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Int32Array(i),this._gl=e,this._location=o[0]}Wd.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1;for(let i=0;i<t;++i){const r=e[i];r!==n[i]&&(n[i]=r,o=!0)}o&&this._gl.uniform1iv(this._location,n)};function Yd(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Int32Array(i*2),this._gl=e,this._location=o[0]}Yd.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let r=0;r<t;++r){const a=e[r];V.equalsArray(a,n,i)||(V.pack(a,n,i),o=!0),i+=2}o&&this._gl.uniform2iv(this._location,n)};function $d(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Int32Array(i*3),this._gl=e,this._location=o[0]}$d.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let r=0;r<t;++r){const a=e[r];h.equalsArray(a,n,i)||(h.pack(a,n,i),o=!0),i+=3}o&&this._gl.uniform3iv(this._location,n)};function Xd(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Int32Array(i*4),this._gl=e,this._location=o[0]}Xd.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let r=0;r<t;++r){const a=e[r];Q.equalsArray(a,n,i)||(Q.pack(a,n,i),o=!0),i+=4}o&&this._gl.uniform4iv(this._location,n)};function Zd(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i*4),this._gl=e,this._location=o[0]}Zd.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let r=0;r<t;++r){const a=e[r];ge.equalsArray(a,n,i)||(ge.pack(a,n,i),o=!0),i+=4}o&&this._gl.uniformMatrix2fv(this._location,!1,n)};function Kd(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i*9),this._gl=e,this._location=o[0]}Kd.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let r=0;r<t;++r){const a=e[r];B.equalsArray(a,n,i)||(B.pack(a,n,i),o=!0),i+=9}o&&this._gl.uniformMatrix3fv(this._location,!1,n)};function Qd(e,t,n,o){const i=o.length;this.name=n,this.value=new Array(i),this._value=new Float32Array(i*16),this._gl=e,this._location=o[0]}Qd.prototype.set=function(){const e=this.value,t=e.length,n=this._value;let o=!1,i=0;for(let r=0;r<t;++r){const a=e[r];U.equalsArray(a,n,i)||(U.pack(a,n,i),o=!0),i+=16}o&&this._gl.uniformMatrix4fv(this._location,!1,n)};let Qw=0;function Bn(e){let t=e.vertexShaderText,n=e.fragmentShaderText;typeof spector<"u"&&(t=t.replace(/^#line/gm,"//#line"),n=n.replace(/^#line/gm,"//#line"));const o=Jw(t,n);this._gl=e.gl,this._logShaderCompilation=e.logShaderCompilation,this._debugShaders=e.debugShaders,this._attributeLocations=e.attributeLocations,this._program=void 0,this._numberOfVertexAttributes=void 0,this._vertexAttributes=void 0,this._uniformsByName=void 0,this._uniforms=void 0,this._automaticUniforms=void 0,this._manualUniforms=void 0,this._duplicateUniformNames=o.duplicateUniformNames,this._cachedShader=void 0,this.maximumTextureUnitIndex=void 0,this._vertexShaderSource=e.vertexShaderSource,this._vertexShaderText=e.vertexShaderText,this._fragmentShaderSource=e.fragmentShaderSource,this._fragmentShaderText=o.fragmentShaderText,this.id=Qw++}Bn.fromCache=function(e){return e=e??xe.EMPTY_OBJECT,p.defined("options.context",e.context),e.context.shaderCache.getShaderProgram(e)};Bn.replaceCache=function(e){return e=e??xe.EMPTY_OBJECT,p.defined("options.context",e.context),e.context.shaderCache.replaceShaderProgram(e)};Object.defineProperties(Bn.prototype,{vertexShaderSource:{get:function(){return this._vertexShaderSource}},fragmentShaderSource:{get:function(){return this._fragmentShaderSource}},vertexAttributes:{get:function(){return Va(this),this._vertexAttributes}},numberOfVertexAttributes:{get:function(){return Va(this),this._numberOfVertexAttributes}},allUniforms:{get:function(){return Va(this),this._uniformsByName}}});function ou(e){const t=[],n=e.match(/uniform.*?(?![^{]*})(?=[=\[;])/g);if(l(n)){const o=n.length;for(let i=0;i<o;i++){const r=n[i].trim(),a=r.slice(r.lastIndexOf(" ")+1);t.push(a)}}return t}function Jw(e,t){const n={};if(!Ie.highpFloatSupported||!Ie.highpIntSupported){let o,i,r,a;const s=ou(e),c=ou(t),f=s.length,d=c.length;for(o=0;o<f;o++)for(i=0;i<d;i++)if(s[o]===c[i]){r=s[o],a=`czm_mediump_${r}`;const u=new RegExp(`${r}\\b`,"g");t=t.replace(u,a),n[a]=r}}return{fragmentShaderText:t,duplicateUniformNames:n}}const Vn="[Cesium WebGL] ";function ev(e,t){const n=t._vertexShaderText,o=t._fragmentShaderText,i=e.createShader(e.VERTEX_SHADER);e.shaderSource(i,n),e.compileShader(i);const r=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(r,o),e.compileShader(r);const a=e.createProgram();e.attachShader(a,i),e.attachShader(a,r);const s=t._attributeLocations;if(l(s))for(const m in s)s.hasOwnProperty(m)&&e.bindAttribLocation(a,s[m],m);e.linkProgram(a);let c;if(e.getProgramParameter(a,e.LINK_STATUS))return t._logShaderCompilation&&(c=e.getShaderInfoLog(i),l(c)&&c.length>0&&console.log(`${Vn}Vertex shader compile log: ${c}`),c=e.getShaderInfoLog(r),l(c)&&c.length>0&&console.log(`${Vn}Fragment shader compile log: ${c}`),c=e.getProgramInfoLog(a),l(c)&&c.length>0&&console.log(`${Vn}Shader program link log: ${c}`)),e.deleteShader(i),e.deleteShader(r),a;let f;const d=t._debugShaders;throw e.getShaderParameter(r,e.COMPILE_STATUS)?e.getShaderParameter(i,e.COMPILE_STATUS)?(c=e.getProgramInfoLog(a),console.error(`${Vn}Shader program link log: ${c}`),u(i,"vertex"),u(r,"fragment"),f=`Program failed to link.  Link log: ${c}`):(c=e.getShaderInfoLog(i),console.error(`${Vn}Vertex shader compile log: ${c}`),console.error(`${Vn} Vertex shader source:
${n}`),f=`Vertex shader failed to compile.  Compile log: ${c}`):(c=e.getShaderInfoLog(r),console.error(`${Vn}Fragment shader compile log: ${c}`),console.error(`${Vn} Fragment shader source:
${o}`),f=`Fragment shader failed to compile.  Compile log: ${c}`),e.deleteShader(i),e.deleteShader(r),e.deleteProgram(a),new mt(f);function u(m,_){if(!l(d))return;const g=d.getTranslatedShaderSource(m);if(g===""){console.error(`${Vn}${_} shader translation failed.`);return}console.error(`${Vn}Translated ${_} shaderSource:
${g}`)}}function tv(e,t,n){const o={};for(let i=0;i<n;++i){const r=e.getActiveAttrib(t,i),a=e.getAttribLocation(t,r.name);o[r.name]={name:r.name,type:r.type,index:a}}return o}function nv(e,t){const n={},o=[],i=[],r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const s=e.getActiveUniform(t,a),c="[0]",f=s.name.indexOf(c,s.name.length-c.length)!==-1?s.name.slice(0,s.name.length-3):s.name;if(f.indexOf("gl_")!==0)if(s.name.indexOf("[")<0){const d=e.getUniformLocation(t,f);if(d!==null){const u=Yw(e,s,f,d);n[f]=u,o.push(u),u._setSampler&&i.push(u)}}else{let d,u,m,_;const g=f.indexOf("[");if(g>=0){if(d=n[f.slice(0,g)],!l(d))continue;u=d._locations,u.length<=1&&(m=d.value,_=e.getUniformLocation(t,f),_!==null&&(u.push(_),m.push(e.getUniform(t,_))))}else{u=[];for(let y=0;y<s.size;++y)_=e.getUniformLocation(t,`${f}[${y}]`),_!==null&&u.push(_);d=Kw(e,s,f,u),n[f]=d,o.push(d),d._setSampler&&i.push(d)}}}return{uniformsByName:n,uniforms:o,samplerUniforms:i}}function ov(e,t){const n=[],o=[];for(const i in t)if(t.hasOwnProperty(i)){const r=t[i];let a=i;const s=e._duplicateUniformNames[a];l(s)&&(r.name=s,a=s);const c=ka[a];l(c)?n.push({uniform:r,automaticUniform:c}):o.push(r)}return{automaticUniforms:n,manualUniforms:o}}function iv(e,t,n){e.useProgram(t);let o=0;const i=n.length;for(let r=0;r<i;++r)o=n[r]._setSampler(o);return e.useProgram(null),o}function Va(e){l(e._program)||Jd(e)}function Jd(e){const t=e._program,n=e._gl,o=ev(n,e,e._debugShaders),i=n.getProgramParameter(o,n.ACTIVE_ATTRIBUTES),r=nv(n,o),a=ov(e,r.uniformsByName);e._program=o,e._numberOfVertexAttributes=i,e._vertexAttributes=tv(n,o,i),e._uniformsByName=r.uniformsByName,e._uniforms=r.uniforms,e._automaticUniforms=a.automaticUniforms,e._manualUniforms=a.manualUniforms,e.maximumTextureUnitIndex=iv(n,o,r.samplerUniforms),t&&e._gl.deleteProgram(t),typeof spector<"u"&&(e._program.__SPECTOR_rebuildProgram=function(s,c,f,d){const u=e._vertexShaderText,m=e._fragmentShaderText,_=/ ! = /g;e._vertexShaderText=s.replace(_," != "),e._fragmentShaderText=c.replace(_," != ");try{Jd(e),f(e._program)}catch(g){e._vertexShaderText=u,e._fragmentShaderText=m;const E=/(?:Compile|Link) error: ([^]*)/.exec(g.message);d(E?E[1]:g.message)}})}Bn.prototype._bind=function(){Va(this),this._gl.useProgram(this._program)};Bn.prototype._setUniforms=function(e,t,n){let o,i;if(l(e)){const s=this._manualUniforms;for(o=s.length,i=0;i<o;++i){const c=s[i];if(!l(e[c.name]))throw new w(`Unknown uniform: ${c.name}`);c.value=e[c.name]()}}const r=this._automaticUniforms;for(o=r.length,i=0;i<o;++i){const s=r[i];s.uniform.value=s.automaticUniform.getValue(t)}const a=this._uniforms;for(o=a.length,i=0;i<o;++i)a[i].set();if(n){const s=this._gl,c=this._program;if(s.validateProgram(c),!s.getProgramParameter(c,s.VALIDATE_STATUS))throw new w(`Program validation failed.  Program info log: ${s.getProgramInfoLog(c)}`)}};Bn.prototype.isDestroyed=function(){return!1};Bn.prototype.destroy=function(){this._cachedShader.cache.releaseShaderProgram(this)};Bn.prototype.finalDestroy=function(){return this._gl.deleteProgram(this._program),Lt(this)};function $r(e,t,n,o,i,r,a,s,c,f,d){this._context=e,this._texture=t,this._textureTarget=n,this._targetFace=o,this._pixelDatatype=a,this._internalFormat=i,this._pixelFormat=r,this._size=s,this._preMultiplyAlpha=c,this._flipY=f,this._initialized=d}Object.defineProperties($r.prototype,{pixelFormat:{get:function(){return this._pixelFormat}},pixelDatatype:{get:function(){return this._pixelDatatype}},_target:{get:function(){return this._targetFace}}});$r.prototype.copyFrom=function(e){p.defined("options",e);const{xOffset:t=0,yOffset:n=0,source:o,skipColorSpaceConversion:i=!1}=e;if(p.defined("options.source",o),p.typeOf.number.greaterThanOrEquals("xOffset",t,0),p.typeOf.number.greaterThanOrEquals("yOffset",n,0),t+o.width>this._size)throw new w("xOffset + options.source.width must be less than or equal to width.");if(n+o.height>this._size)throw new w("yOffset + options.source.height must be less than or equal to height.");const{width:r,height:a}=o,s=this._context._gl,c=this._textureTarget,f=this._targetFace;s.activeTexture(s.TEXTURE0),s.bindTexture(c,this._texture);let d=o.arrayBufferView;const u=this._size,m=this._pixelFormat,_=this._internalFormat,g=this._pixelDatatype,y=this._preMultiplyAlpha,E=this._flipY;let A=4;l(d)&&(A=Me.alignmentInBytes(m,g,r)),s.pixelStorei(s.UNPACK_ALIGNMENT,A),i?s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE):s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL);let S=!1;if(!this._initialized){let O;t===0&&n===0&&r===u&&a===u?(l(d)?(s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),E&&(d=Me.flipY(d,m,g,u,u)),O=d):(s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E),O=o),S=!0):(s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),O=Me.createTypedArray(m,g,u,u)),s.texImage2D(f,0,_,u,u,0,m,Oe.toWebGLConstant(g,this._context),O),this._initialized=!0}S||(l(d)?(s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),E&&(d=Me.flipY(d,m,g,r,a)),s.texSubImage2D(f,0,t,n,r,a,m,Oe.toWebGLConstant(g,this._context),d)):(s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E),s.texSubImage2D(f,0,t,n,m,Oe.toWebGLConstant(g,this._context),o))),s.bindTexture(c,null)};$r.prototype.copyFromFramebuffer=function(e,t,n,o,i,r){if(e=e??0,t=t??0,n=n??0,o=o??0,i=i??this._size,r=r??this._size,p.typeOf.number.greaterThanOrEquals("xOffset",e,0),p.typeOf.number.greaterThanOrEquals("yOffset",t,0),p.typeOf.number.greaterThanOrEquals("framebufferXOffset",n,0),p.typeOf.number.greaterThanOrEquals("framebufferYOffset",o,0),e+i>this._size)throw new w("xOffset + source.width must be less than or equal to width.");if(t+r>this._size)throw new w("yOffset + source.height must be less than or equal to height.");if(this._pixelDatatype===Oe.FLOAT)throw new w("Cannot call copyFromFramebuffer when the texture pixel data type is FLOAT.");if(this._pixelDatatype===Oe.HALF_FLOAT)throw new w("Cannot call copyFromFramebuffer when the texture pixel data type is HALF_FLOAT.");const a=this._context._gl,s=this._textureTarget;a.activeTexture(a.TEXTURE0),a.bindTexture(s,this._texture),a.copyTexSubImage2D(this._targetFace,0,e,t,n,o,i,r),a.bindTexture(s,null),this._initialized=!0};$r.prototype.copyMipmapFromFramebuffer=function(e,t,n,o,i){if(e=e??0,t=t??0,n=n??this._size,o=o??this._size,i=i??0,p.typeOf.number.greaterThanOrEquals("xOffset",e,0),p.typeOf.number.greaterThanOrEquals("yOffset",t,0),e+n>this._size)throw new w("xOffset + source.width must be less than or equal to width.");if(t+o>this._size)throw new w("yOffset + source.height must be less than or equal to height.");if(this._pixelDatatype===Oe.FLOAT)throw new w("Cannot call copyFromFramebuffer when the texture pixel data type is FLOAT.");if(this._pixelDatatype===Oe.HALF_FLOAT)throw new w("Cannot call copyFromFramebuffer when the texture pixel data type is HALF_FLOAT.");const r=this._context._gl,a=this._textureTarget;r.activeTexture(r.TEXTURE0),r.bindTexture(a,this._texture),r.copyTexImage2D(this._targetFace,i,this._internalFormat,e,t,n,o,0),r.bindTexture(a,null),this._initialized=!0};const Ha={DONT_CARE:I.DONT_CARE,FASTEST:I.FASTEST,NICEST:I.NICEST,validate:function(e){return e===Ha.DONT_CARE||e===Ha.FASTEST||e===Ha.NICEST}},us=Object.freeze(Ha),Wa={NEAREST:I.NEAREST,LINEAR:I.LINEAR};Wa.validate=function(e){return e===Wa.NEAREST||e===Wa.LINEAR};const oi=Object.freeze(Wa),Ro={NEAREST:I.NEAREST,LINEAR:I.LINEAR,NEAREST_MIPMAP_NEAREST:I.NEAREST_MIPMAP_NEAREST,LINEAR_MIPMAP_NEAREST:I.LINEAR_MIPMAP_NEAREST,NEAREST_MIPMAP_LINEAR:I.NEAREST_MIPMAP_LINEAR,LINEAR_MIPMAP_LINEAR:I.LINEAR_MIPMAP_LINEAR};Ro.validate=function(e){return e===Ro.NEAREST||e===Ro.LINEAR||e===Ro.NEAREST_MIPMAP_NEAREST||e===Ro.LINEAR_MIPMAP_NEAREST||e===Ro.NEAREST_MIPMAP_LINEAR||e===Ro.LINEAR_MIPMAP_LINEAR};const Ft=Object.freeze(Ro),Ya={CLAMP_TO_EDGE:I.CLAMP_TO_EDGE,REPEAT:I.REPEAT,MIRRORED_REPEAT:I.MIRRORED_REPEAT,validate:function(e){return e===Ya.CLAMP_TO_EDGE||e===Ya.REPEAT||e===Ya.MIRRORED_REPEAT}},lo=Object.freeze(Ya);function eo(e){e=e??xe.EMPTY_OBJECT;const{wrapR:t=lo.CLAMP_TO_EDGE,wrapS:n=lo.CLAMP_TO_EDGE,wrapT:o=lo.CLAMP_TO_EDGE,minificationFilter:i=Ft.LINEAR,magnificationFilter:r=oi.LINEAR,maximumAnisotropy:a=1}=e;if(!lo.validate(t))throw new w("Invalid sampler.wrapR.");if(!lo.validate(n))throw new w("Invalid sampler.wrapS.");if(!lo.validate(o))throw new w("Invalid sampler.wrapT.");if(!Ft.validate(i))throw new w("Invalid sampler.minificationFilter.");if(!oi.validate(r))throw new w("Invalid sampler.magnificationFilter.");p.typeOf.number.greaterThanOrEquals("maximumAnisotropy",a,1),this._wrapR=t,this._wrapS=n,this._wrapT=o,this._minificationFilter=i,this._magnificationFilter=r,this._maximumAnisotropy=a}Object.defineProperties(eo.prototype,{wrapR:{get:function(){return this._wrapR}},wrapS:{get:function(){return this._wrapS}},wrapT:{get:function(){return this._wrapT}},minificationFilter:{get:function(){return this._minificationFilter}},magnificationFilter:{get:function(){return this._magnificationFilter}},maximumAnisotropy:{get:function(){return this._maximumAnisotropy}}});eo.equals=function(e,t){return e===t||l(e)&&l(t)&&e._wrapR===t._wrapR&&e._wrapS===t._wrapS&&e._wrapT===t._wrapT&&e._minificationFilter===t._minificationFilter&&e._magnificationFilter===t._magnificationFilter&&e._maximumAnisotropy===t._maximumAnisotropy};eo.NEAREST=Object.freeze(new eo({wrapR:lo.CLAMP_TO_EDGE,wrapS:lo.CLAMP_TO_EDGE,wrapT:lo.CLAMP_TO_EDGE,minificationFilter:Ft.NEAREST,magnificationFilter:oi.NEAREST}));function rv(e,t,n,o){const i=l(t.vertexBuffer),r=l(t.value),a=t.value?t.value.length:t.componentsPerAttribute;if(!i&&!r)throw new w("attribute must have a vertexBuffer or a value.");if(i&&r)throw new w("attribute cannot have both a vertexBuffer and a value.  It must have either a vertexBuffer property defining per-vertex data or a value property defining data for all vertices.");if(a!==1&&a!==2&&a!==3&&a!==4)throw r?new w("attribute.value.length must be in the range [1, 4]."):new w("attribute.componentsPerAttribute must be in the range [1, 4].");if(l(t.componentDatatype)&&!ue.validate(t.componentDatatype))throw new w("attribute must have a valid componentDatatype or not specify it.");if(l(t.strideInBytes)&&t.strideInBytes>255)throw new w("attribute must have a strideInBytes less than or equal to 255 or not specify it.");if(l(t.instanceDivisor)&&t.instanceDivisor>0&&!o.instancedArrays)throw new w("instanced arrays is not supported");if(l(t.instanceDivisor)&&t.instanceDivisor<0)throw new w("attribute must have an instanceDivisor greater than or equal to zero");if(l(t.instanceDivisor)&&r)throw new w("attribute cannot have have an instanceDivisor if it is not backed by a buffer");if(l(t.instanceDivisor)&&t.instanceDivisor>0&&t.index===0)throw new w("attribute zero cannot have an instanceDivisor greater than 0");const s={index:t.index??n,enabled:t.enabled??!0,vertexBuffer:t.vertexBuffer,value:r?t.value.slice(0):void 0,componentsPerAttribute:a,componentDatatype:t.componentDatatype??ue.FLOAT,normalize:t.normalize??!1,offsetInBytes:t.offsetInBytes??0,strideInBytes:t.strideInBytes??0,instanceDivisor:t.instanceDivisor??0};if(i)s.vertexAttrib=function(c){const f=this.index;c.bindBuffer(c.ARRAY_BUFFER,this.vertexBuffer._getBuffer()),c.vertexAttribPointer(f,this.componentsPerAttribute,this.componentDatatype,this.normalize,this.strideInBytes,this.offsetInBytes),c.enableVertexAttribArray(f),this.instanceDivisor>0&&(o.glVertexAttribDivisor(f,this.instanceDivisor),o._vertexAttribDivisors[f]=this.instanceDivisor,o._previousDrawInstanced=!0)},s.disableVertexAttribArray=function(c){c.disableVertexAttribArray(this.index),this.instanceDivisor>0&&o.glVertexAttribDivisor(n,0)};else{switch(s.componentsPerAttribute){case 1:s.vertexAttrib=function(c){c.vertexAttrib1fv(this.index,this.value)};break;case 2:s.vertexAttrib=function(c){c.vertexAttrib2fv(this.index,this.value)};break;case 3:s.vertexAttrib=function(c){c.vertexAttrib3fv(this.index,this.value)};break;case 4:s.vertexAttrib=function(c){c.vertexAttrib4fv(this.index,this.value)};break}s.disableVertexAttribArray=function(c){}}e.push(s)}function em(e,t,n){for(let o=0;o<t.length;++o){const i=t[o];i.enabled&&i.vertexAttrib(e)}l(n)&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n._getBuffer())}function Un(e){e=e??xe.EMPTY_OBJECT,p.defined("options.context",e.context),p.defined("options.attributes",e.attributes);const t=e.context,n=t._gl,o=e.attributes,i=e.indexBuffer;let r;const a=[];let s=1,c=!1,f=!1,d=o.length;for(r=0;r<d;++r)rv(a,o[r],r,t);for(d=a.length,r=0;r<d;++r){const _=a[r];if(l(_.vertexBuffer)&&_.instanceDivisor===0){const g=_.strideInBytes||_.componentsPerAttribute*ue.getSizeInBytes(_.componentDatatype);s=_.vertexBuffer.sizeInBytes/g;break}}for(r=0;r<d;++r)a[r].instanceDivisor>0&&(c=!0),l(a[r].value)&&(f=!0);const u={};for(r=0;r<d;++r){const _=a[r].index;if(u[_])throw new w(`Index ${_} is used by more than one attribute.`);u[_]=!0}let m;t.vertexArrayObject&&(m=t.glCreateVertexArray(),t.glBindVertexArray(m),em(n,a,i),t.glBindVertexArray(null)),this._numberOfVertices=s,this._hasInstancedAttributes=c,this._hasConstantAttributes=f,this._context=t,this._gl=n,this._vao=m,this._attributes=a,this._indexBuffer=i}function iu(e){return e.values.length/e.componentsPerAttribute}function av(e){return ue.getSizeInBytes(e.componentDatatype)*e.componentsPerAttribute}function sv(e){let t,n,o;const i=[];for(n in e)e.hasOwnProperty(n)&&l(e[n])&&l(e[n].values)&&(i.push(n),e[n].componentDatatype===ue.DOUBLE&&(e[n].componentDatatype=ue.FLOAT,e[n].values=ue.createTypedArray(ue.FLOAT,e[n].values)));let r;const a=i.length;if(a>0)for(r=iu(e[i[0]]),t=1;t<a;++t){const f=iu(e[i[t]]);if(f!==r)throw new mt(`Each attribute list must have the same number of vertices.  Attribute ${i[t]} has a different number of vertices (${f.toString()}) than attribute ${i[0]} (${r.toString()}).`)}i.sort(function(f,d){return ue.getSizeInBytes(e[d].componentDatatype)-ue.getSizeInBytes(e[f].componentDatatype)});let s=0;const c={};for(t=0;t<a;++t)n=i[t],o=e[n],c[n]=s,s+=av(o);if(s>0){const f=ue.getSizeInBytes(e[i[0]].componentDatatype),d=s%f;d!==0&&(s+=f-d);const u=r*s,m=new ArrayBuffer(u),_={};for(t=0;t<a;++t){n=i[t];const g=ue.getSizeInBytes(e[n].componentDatatype);_[n]={pointer:ue.createTypedArray(e[n].componentDatatype,m),index:c[n]/g,strideInComponentType:s/g}}for(t=0;t<r;++t)for(let g=0;g<a;++g){n=i[g],o=e[n];const y=o.values,E=_[n],A=E.pointer,S=o.componentsPerAttribute;for(let O=0;O<S;++O)A[E.index+O]=y[t*S+O];E.index+=E.strideInComponentType}return{buffer:m,offsetsInBytes:c,vertexSizeInBytes:s}}}Un.fromGeometry=function(e){e=e??xe.EMPTY_OBJECT,p.defined("options.context",e.context);const t=e.context,n=e.geometry??xe.EMPTY_OBJECT,o=e.bufferUsage??Nn.DYNAMIC_DRAW,i=e.attributeLocations??xe.EMPTY_OBJECT,r=e.interleave??!1,a=e.vertexArrayAttributes;let s,c,f;const d=l(a)?a:[],u=n.attributes;if(r){const g=sv(u);if(l(g)){f=At.createVertexBuffer({context:t,typedArray:g.buffer,usage:o});const y=g.offsetsInBytes,E=g.vertexSizeInBytes;for(s in u)u.hasOwnProperty(s)&&l(u[s])&&(c=u[s],l(c.values)?d.push({index:i[s],vertexBuffer:f,componentDatatype:c.componentDatatype,componentsPerAttribute:c.componentsPerAttribute,normalize:c.normalize,offsetInBytes:y[s],strideInBytes:E}):d.push({index:i[s],value:c.value,componentDatatype:c.componentDatatype,normalize:c.normalize}))}}else for(s in u)if(u.hasOwnProperty(s)&&l(u[s])){c=u[s];let g=c.componentDatatype;g===ue.DOUBLE&&(g=ue.FLOAT);let y={};f=void 0,l(c.values)&&(f=At.createVertexBuffer({context:t,typedArray:ue.createTypedArray(g,c.values),usage:o}),y={index:i[s],vertexBuffer:f,value:c.value,componentDatatype:g,componentsPerAttribute:c.componentsPerAttribute,normalize:c.normalize}),l(c.typedArray)&&(f=At.createVertexBuffer({context:t,typedArray:c.typedArray,usage:o}),y={index:i[s],vertexBuffer:f,value:void 0,componentDatatype:g,componentsPerAttribute:L0.getNumberOfComponents(c.type),normalize:c.normalized,instanceDivisor:c.instanceDivisor}),d.push(y)}let m;const _=n.indices;return l(_)&&(tt.computeNumberOfVertices(n)>=T.SIXTY_FOUR_KILOBYTES&&t.elementIndexUint?m=At.createIndexBuffer({context:t,typedArray:new Uint32Array(_),usage:o,indexDatatype:gt.UNSIGNED_INT}):m=At.createIndexBuffer({context:t,typedArray:new Uint16Array(_),usage:o,indexDatatype:gt.UNSIGNED_SHORT})),new Un({context:t,attributes:d,indexBuffer:m})};Object.defineProperties(Un.prototype,{numberOfAttributes:{get:function(){return this._attributes.length}},numberOfVertices:{get:function(){return this._numberOfVertices}},indexBuffer:{get:function(){return this._indexBuffer}}});Un.prototype.getAttribute=function(e){return p.defined("index",e),this._attributes[e]};function cv(e){const t=e._context,n=e._hasInstancedAttributes;if(!n&&!t._previousDrawInstanced)return;t._previousDrawInstanced=n;const o=t._vertexAttribDivisors,i=e._attributes,r=Ie.maximumVertexAttributes;let a;if(n){const s=i.length;for(a=0;a<s;++a){const c=i[a];if(c.enabled){const f=c.instanceDivisor,d=c.index;f!==o[d]&&(t.glVertexAttribDivisor(d,f),o[d]=f)}}}else for(a=0;a<r;++a)o[a]>0&&(t.glVertexAttribDivisor(a,0),o[a]=0)}function fv(e,t){const n=e._attributes,o=n.length;for(let i=0;i<o;++i){const r=n[i];r.enabled&&l(r.value)&&r.vertexAttrib(t)}}Un.prototype._bind=function(){l(this._vao)?(this._context.glBindVertexArray(this._vao),this._context.instancedArrays&&cv(this),this._hasConstantAttributes&&fv(this,this._gl)):em(this._gl,this._attributes,this._indexBuffer)};Un.prototype._unBind=function(){if(l(this._vao))this._context.glBindVertexArray(null);else{const e=this._attributes,t=this._gl;for(let n=0;n<e.length;++n){const o=e[n];o.enabled&&o.disableVertexAttribArray(t)}this._indexBuffer&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)}};Un.prototype.isDestroyed=function(){return!1};Un.prototype.destroy=function(){const e=this._attributes;for(let n=0;n<e.length;++n){const o=e[n].vertexBuffer;l(o)&&!o.isDestroyed()&&o.vertexArrayDestroyable&&o.destroy()}const t=this._indexBuffer;return l(t)&&!t.isDestroyed()&&t.vertexArrayDestroyable&&t.destroy(),l(this._vao)&&this._context.glDeleteVertexArray(this._vao),Lt(this)};function Je(e){e=e??xe.EMPTY_OBJECT,p.defined("options.context",e.context);const{context:t,source:n,pixelFormat:o=Me.RGBA,pixelDatatype:i=Oe.UNSIGNED_BYTE,flipY:r=!0,skipColorSpaceConversion:a=!1,sampler:s=new eo}=e,c=e.preMultiplyAlpha||o===Me.RGB||o===Me.LUMINANCE;let{width:f,height:d}=e;if(l(n)){if(!Object.values(Je.FaceName).every(O=>l(n[O])))throw new w(`options.source requires faces ${Object.values(Je.FaceName).join(", ")}.`);({width:f,height:d}=n.positiveX);for(const O of Je.faceNames()){const M=n[O];if(Number(M.width)!==f||Number(M.height)!==d)throw new w("Each face in options.source must have the same width and height.")}}const u=f;if(!l(f)||!l(d))throw new w("options requires a source field to create an initialized cube map or width and height fields to create a blank cube map.");if(f!==d)throw new w("Width must equal height.");if(u<=0)throw new w("Width and height must be greater than zero.");if(u>Ie.maximumCubeMapSize)throw new w(`Width and height must be less than or equal to the maximum cube map size (${Ie.maximumCubeMapSize}). Check maximumCubeMapSize.`);if(!Me.validate(o))throw new w("Invalid options.pixelFormat.");if(Me.isDepthFormat(o))throw new w("options.pixelFormat cannot be DEPTH_COMPONENT or DEPTH_STENCIL.");if(!Oe.validate(i))throw new w("Invalid options.pixelDatatype.");if(i===Oe.FLOAT&&!t.floatingPointTexture)throw new w("When options.pixelDatatype is FLOAT, this WebGL implementation must support the OES_texture_float extension.");if(i===Oe.HALF_FLOAT&&!t.halfFloatingPointTexture)throw new w("When options.pixelDatatype is HALF_FLOAT, this WebGL implementation must support the OES_texture_half_float extension.");const m=Me.textureSizeInBytes(o,i,u,u)*6,_=Me.toInternalFormat(o,i,t),g=t._gl,y=g.TEXTURE_CUBE_MAP,E=g.createTexture();this._context=t,this._textureFilterAnisotropic=t._textureFilterAnisotropic,this._textureTarget=y,this._texture=E,this._pixelFormat=o,this._pixelDatatype=i,this._size=u,this._hasMipmap=!1,this._sizeInBytes=m,this._preMultiplyAlpha=c,this._flipY=r;const A=l(n);function S(O){return new $r(t,E,y,O,_,o,i,u,c,r,A)}this._positiveX=S(g.TEXTURE_CUBE_MAP_POSITIVE_X),this._negativeX=S(g.TEXTURE_CUBE_MAP_NEGATIVE_X),this._positiveY=S(g.TEXTURE_CUBE_MAP_POSITIVE_Y),this._negativeY=S(g.TEXTURE_CUBE_MAP_NEGATIVE_Y),this._positiveZ=S(g.TEXTURE_CUBE_MAP_POSITIVE_Z),this._negativeZ=S(g.TEXTURE_CUBE_MAP_NEGATIVE_Z),this._sampler=s,tm(this,s),g.activeTexture(g.TEXTURE0),g.bindTexture(y,E),a?g.pixelStorei(g.UNPACK_COLORSPACE_CONVERSION_WEBGL,g.NONE):g.pixelStorei(g.UNPACK_COLORSPACE_CONVERSION_WEBGL,g.BROWSER_DEFAULT_WEBGL);for(const O of Je.faceNames())Kf(this[O],n==null?void 0:n[O],0);g.bindTexture(y,null)}Je.prototype.copyFace=function(e,t,n,o){const i=e.context,r=new qn({context:i,colorTextures:[t],destroyAttachments:!1});r._bind(),this[n].copyMipmapFromFramebuffer(0,0,t.width,t.height,o??0),r._unBind(),r.destroy()};Je.FaceName=Object.freeze({POSITIVEX:"positiveX",NEGATIVEX:"negativeX",POSITIVEY:"positiveY",NEGATIVEY:"negativeY",POSITIVEZ:"positiveZ",NEGATIVEZ:"negativeZ"});function*hv(){yield Je.FaceName.POSITIVEX,yield Je.FaceName.NEGATIVEX,yield Je.FaceName.POSITIVEY,yield Je.FaceName.NEGATIVEY,yield Je.FaceName.POSITIVEZ,yield Je.FaceName.NEGATIVEZ}Je.faceNames=function(){return hv()};function Kf(e,t,n){n=n??0;const o=e._targetFace,i=Math.max(Math.floor(e._size/2**n),1),r=e._pixelFormat,a=e._pixelDatatype,s=e._internalFormat,c=e._flipY,f=e._preMultiplyAlpha,d=e._context,u=d._gl;if(!l(t)){u.texImage2D(o,n,s,i,i,0,r,Oe.toWebGLConstant(a,d),null);return}let{arrayBufferView:m}=t,_=4;l(m)&&(_=Me.alignmentInBytes(r,a,i)),u.pixelStorei(u.UNPACK_ALIGNMENT,_),l(m)?(u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL,!1),c&&(m=Me.flipY(m,r,a,i,i)),u.texImage2D(o,n,s,i,i,0,r,Oe.toWebGLConstant(a,d),m)):(u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f),u.pixelStorei(u.UNPACK_FLIP_Y_WEBGL,c),u.texImage2D(o,n,s,r,Oe.toWebGLConstant(a,d),t))}Je.loadFace=Kf;Object.defineProperties(Je.prototype,{positiveX:{get:function(){return this._positiveX}},negativeX:{get:function(){return this._negativeX}},positiveY:{get:function(){return this._positiveY}},negativeY:{get:function(){return this._negativeY}},positiveZ:{get:function(){return this._positiveZ}},negativeZ:{get:function(){return this._negativeZ}},sampler:{get:function(){return this._sampler},set:function(e){tm(this,e),this._sampler=e}},pixelFormat:{get:function(){return this._pixelFormat}},pixelDatatype:{get:function(){return this._pixelDatatype}},width:{get:function(){return this._size}},height:{get:function(){return this._size}},sizeInBytes:{get:function(){return this._hasMipmap?Math.floor(this._sizeInBytes*4/3):this._sizeInBytes}},preMultiplyAlpha:{get:function(){return this._preMultiplyAlpha}},flipY:{get:function(){return this._flipY}},_target:{get:function(){return this._textureTarget}}});Je.getDirection=function(e,t){switch(e){case Je.FaceName.POSITIVEX:return h.clone(h.UNIT_X,t);case Je.FaceName.NEGATIVEX:return h.negate(h.UNIT_X,t);case Je.FaceName.POSITIVEY:return h.clone(h.UNIT_Y,t);case Je.FaceName.NEGATIVEY:return h.negate(h.UNIT_Y,t);case Je.FaceName.POSITIVEZ:return h.clone(h.UNIT_Z,t);case Je.FaceName.NEGATIVEZ:return h.negate(h.UNIT_Z,t)}};function tm(e,t){let{minificationFilter:n,magnificationFilter:o}=t;const i=[Ft.NEAREST_MIPMAP_NEAREST,Ft.NEAREST_MIPMAP_LINEAR,Ft.LINEAR_MIPMAP_NEAREST,Ft.LINEAR_MIPMAP_LINEAR].includes(n),r=e._context,a=e._pixelDatatype;(a===Oe.FLOAT&&!r.textureFloatLinear||a===Oe.HALF_FLOAT&&!r.textureHalfFloatLinear)&&(n=i?Ft.NEAREST_MIPMAP_NEAREST:Ft.NEAREST,o=oi.NEAREST);const s=r._gl,c=e._textureTarget;s.activeTexture(s.TEXTURE0),s.bindTexture(c,e._texture),s.texParameteri(c,s.TEXTURE_MIN_FILTER,n),s.texParameteri(c,s.TEXTURE_MAG_FILTER,o),s.texParameteri(c,s.TEXTURE_WRAP_S,t.wrapS),s.texParameteri(c,s.TEXTURE_WRAP_T,t.wrapT),l(e._textureFilterAnisotropic)&&s.texParameteri(c,e._textureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,t.maximumAnisotropy),s.bindTexture(c,null)}Je.prototype.loadMipmaps=function(e,t){if(p.defined("source",e),!Array.isArray(e))throw new w("source must be an array");const n=Math.log2(this._size);if(e.length!==n)throw new w("all mip levels must be defined");t=t??!1;const o=this._context._gl,i=this._texture,r=this._textureTarget;o.activeTexture(o.TEXTURE0),o.bindTexture(r,i),t?o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE):o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL);for(let a=0;a<e.length;a++){const s=e[a],c=a+1;for(const f of Je.faceNames())Kf(this[f],s[f],c)}o.bindTexture(r,null),this._hasMipmap=!0};Je.prototype.generateMipmap=function(e){if(e=e??us.DONT_CARE,this._size>1&&!T.isPowerOfTwo(this._size))throw new w("width and height must be a power of two to call generateMipmap().");if(!us.validate(e))throw new w("hint is invalid.");this._hasMipmap=!0;const t=this._context._gl,n=this._textureTarget;t.hint(t.GENERATE_MIPMAP_HINT,e),t.activeTexture(t.TEXTURE0),t.bindTexture(n,this._texture),t.generateMipmap(n),t.bindTexture(n,null)};Je.createVertexArray=function(e){const t=hn.createGeometry(hn.fromDimensions({dimensions:new h(2,2,2),vertexFormat:ze.POSITION_ONLY})),n=this._attributeLocations=We.createAttributeLocations(t);return Un.fromGeometry({context:e,geometry:t,attributeLocations:n,bufferUsage:Nn.STATIC_DRAW})};Je.prototype.isDestroyed=function(){return!1};Je.prototype.destroy=function(){return this._context._gl.deleteTexture(this._texture),this._positiveX=Lt(this._positiveX),this._negativeX=Lt(this._negativeX),this._positiveY=Lt(this._positiveY),this._negativeY=Lt(this._negativeY),this._positiveZ=Lt(this._positiveZ),this._negativeZ=Lt(this._negativeZ),Lt(this)};const lv=`/**
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
`,uv=`/**
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
`,dv=`/**
 * 0.1
 *
 * @name czm_epsilon1
 * @glslConstant
 */
const float czm_epsilon1 = 0.1;
`,mv=`/**
 * 0.01
 *
 * @name czm_epsilon2
 * @glslConstant
 */
const float czm_epsilon2 = 0.01;
`,pv=`/**
 * 0.001
 *
 * @name czm_epsilon3
 * @glslConstant
 */
const float czm_epsilon3 = 0.001;
`,_v=`/**
 * 0.0001
 *
 * @name czm_epsilon4
 * @glslConstant
 */
const float czm_epsilon4 = 0.0001;
`,gv=`/**
 * 0.00001
 *
 * @name czm_epsilon5
 * @glslConstant
 */
const float czm_epsilon5 = 0.00001;
`,yv=`/**
 * 0.000001
 *
 * @name czm_epsilon6
 * @glslConstant
 */
const float czm_epsilon6 = 0.000001;
`,bv=`/**
 * 0.0000001
 *
 * @name czm_epsilon7
 * @glslConstant
 */
const float czm_epsilon7 = 0.0000001;
`,Ev=`/**
 * DOC_TBA
 *
 * @name czm_infinity
 * @glslConstant
 */
const float czm_infinity = 5906376272000.0;  // Distance from the Sun to Pluto in meters.  TODO: What is best given lowp, mediump, and highp?
`,wv=`/**
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
`,vv=`/**
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
`,Tv=`/**
 * The automatic GLSL constant for {@link Pass#CESIUM_3D_TILE}
 *
 * @name czm_passCesium3DTile
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passCesium3DTile = 4.0;
`,Sv=`/**
 * The automatic GLSL constant for {@link Pass#CESIUM_3D_TILE_CLASSIFICATION}
 *
 * @name czm_passCesium3DTileClassification
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passCesium3DTileClassification = 5.0;
`,Av=`/**
 * The automatic GLSL constant for {@link Pass#CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW}
 *
 * @name czm_passCesium3DTileClassificationIgnoreShow
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passCesium3DTileClassificationIgnoreShow = 6.0;
`,xv=`/**
 * The automatic GLSL constant for {@link Pass#CLASSIFICATION}
 *
 * @name czm_passClassification
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passClassification = 7.0;
`,Ov=`/**
 * The automatic GLSL constant for {@link Pass#COMPUTE}
 *
 * @name czm_passCompute
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passCompute = 1.0;
`,Cv=`/**
 * The automatic GLSL constant for {@link Pass#ENVIRONMENT}
 *
 * @name czm_passEnvironment
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passEnvironment = 0.0;
`,Mv=`/**
 * The automatic GLSL constant for {@link Pass#GAUSSIAN_SPLATS}
 *
 * @name czm_passGaussianSplats
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passGaussianSplats = 10.0;
`,Rv=`/**
 * The automatic GLSL constant for {@link Pass#GLOBE}
 *
 * @name czm_passGlobe
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passGlobe = 2.0;
`,Pv=`/**
 * The automatic GLSL constant for {@link Pass#OPAQUE}
 *
 * @name czm_passOpaque
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passOpaque = 7.0;
`,Iv=`/**
 * The automatic GLSL constant for {@link Pass#OVERLAY}
 *
 * @name czm_passOverlay
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passOverlay = 11.0;
`,zv=`/**
 * The automatic GLSL constant for {@link Pass#TERRAIN_CLASSIFICATION}
 *
 * @name czm_passTerrainClassification
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passTerrainClassification = 3.0;
`,Nv=`/**
 * The automatic GLSL constant for {@link Pass#TRANSLUCENT}
 *
 * @name czm_passTranslucent
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passTranslucent = 8.0;
`,Dv=`/**
 * The automatic GLSL constant for {@link Pass#VOXELS}
 *
 * @name czm_passVoxels
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passVoxels = 9.0;
`,Lv=`/**
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
`,Fv=`/**
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
`,Bv=`/**
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
`,Uv=`/**
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
`,Gv=`/**
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
`,qv=`/**
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
`,kv=`/**
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
`,jv=`/**
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
`,Vv=`/**
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
`,Hv=`/**
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
`,Wv=`/**
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
`,Yv=`/**
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
`,$v=`/**
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
`,Xv=`/**
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
`,Zv=`/**
 * @name czm_depthRangeStruct
 * @glslStruct
 */
struct czm_depthRangeStruct
{
    float near;
    float far;
};
`,Kv=`/**
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
`,Qv=`/**
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
`,Jv=`/**
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
`,eT=`/**
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
`,tT=`/**
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
`,nT=`/**
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
`,oT=`struct czm_shadowParameters
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
`,iT=`/**
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
`,rT=`/**
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
`,aT=`/**
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
`,sT=`/**
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
`,cT=`/**
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
`,fT=`/**
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
`,hT=`// See:
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
`,lT=`/**
 * @private
 */
float czm_alphaWeight(float a)
{
    float z = (gl_FragCoord.z - czm_viewportTransformation[3][2]) / czm_viewportTransformation[2][2];

    // See Weighted Blended Order-Independent Transparency for examples of different weighting functions:
    // http://jcgt.org/published/0002/02/09/
    return pow(a + 0.01, 4.0) + max(1e-2, min(3.0 * 1e3, 0.003 / (1e-5 + pow(abs(z) / 200.0, 4.0))));
}
`,uT=`/**
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
`,dT=`/**
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
`,mT=`/**
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
`,pT=`/**
 * Compute a rational approximation to tanh(x)
 *
 * @param {float} x A real number input
 * @returns {float} An approximation for tanh(x)
*/
float czm_approximateTanh(float x) {
    float x2 = x * x;
    return max(-1.0, min(1.0, x * (27.0 + x2) / (27.0 + 9.0 * x2)));
}
`,_T=`/**
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
`,gT=`/**
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
`,yT=`
vec4 czm_cascadeColor(vec4 weights)
{
    return vec4(1.0, 0.0, 0.0, 1.0) * weights.x +
           vec4(0.0, 1.0, 0.0, 1.0) * weights.y +
           vec4(0.0, 0.0, 1.0, 1.0) * weights.z +
           vec4(1.0, 0.0, 1.0, 1.0) * weights.w;
}
`,bT=`
uniform vec4 shadowMap_cascadeDistances;

float czm_cascadeDistance(vec4 weights)
{
    return dot(shadowMap_cascadeDistances, weights);
}
`,ET=`
uniform mat4 shadowMap_cascadeMatrices[4];

mat4 czm_cascadeMatrix(vec4 weights)
{
    return shadowMap_cascadeMatrices[0] * weights.x +
           shadowMap_cascadeMatrices[1] * weights.y +
           shadowMap_cascadeMatrices[2] * weights.z +
           shadowMap_cascadeMatrices[3] * weights.w;
}
`,wT=`
uniform vec4 shadowMap_cascadeSplits[2];

vec4 czm_cascadeWeights(float depthEye)
{
    // One component is set to 1.0 and all others set to 0.0.
    vec4 near = step(shadowMap_cascadeSplits[0], vec4(depthEye));
    vec4 far = step(depthEye, shadowMap_cascadeSplits[1]);
    return near * far;
}
`,vT=`float getSignedDistance(vec2 uv, highp sampler2D clippingDistance) {
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
`,TT=`/**
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
`,ST=`/**
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

`,AT=`/**
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
`,xT=`/**
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
`,OT=`/**
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
`,CT=`/**
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
`,MT=`/**
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
`,RT=`// emulated noperspective
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
`,PT=`/**
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
`,IT=`/**
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
`,zT=`/**
 * Approximate uv coordinates based on the ellipsoid normal.
 *
 * @name czm_ellipsoidTextureCoordinates
 * @glslFunction
 */
vec2 czm_ellipsoidTextureCoordinates(vec3 normal)
{
    return vec2(atan(normal.y, normal.x) * czm_oneOverTwoPi + 0.5, asin(normal.z) * czm_oneOverPi + 0.5);
}
`,NT=`/**
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
`,DT=`/**
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
`,LT=`/**
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
`,FT=`/**
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
`,BT=`/**
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
`,UT=`/**
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
`,GT=`/**
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
`,qT=`/**
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
`,kT=`/**
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
`,jT=`/**
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
`,VT=`/**
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
`,HT=`/**
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
`,WT=`/**
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
`,YT=`/**
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
`,$T=`/**
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
`,XT=`/**
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
`,ZT=`/**
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
`,KT=`/**
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
`,QT=`/**
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
`,JT=`/**
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
`,e2=`/**
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
`,t2=`/**
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
`,n2=`/**
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
`,o2=`/**
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
`,i2=`/**
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
`,r2=` /**
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

`,a2=`/**
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
`,s2=`vec3 lambertianDiffuse(vec3 diffuseColor)
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
`,c2=`// KhronosGroup https://github.com/KhronosGroup/ToneMapping/tree/main/PBR_Neutral

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
`,f2=`float czm_private_getLambertDiffuseOfMaterial(vec3 lightDirectionEC, czm_material material)
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
`,h2=`/**
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
`,l2=`/**
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
`,u2=`/**
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
`,d2=`/**
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
`,m2=`float czm_readDepth(sampler2D depthTexture, vec2 texCoords)
{
    return czm_reverseLogDepth(texture(depthTexture, texCoords).r);
}
`,p2=`/**
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
`,_2=`float czm_reverseLogDepth(float logZ)
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
`,g2=`/**
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
`,y2=`/**
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
`,b2=`
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
`,E2=`
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
`,w2=`/**
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
`,v2=`/**
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
`,T2=`/**
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
`,S2=`/**
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
`,A2=`/**
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
}`,x2=`/**
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
`,O2=`/**
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
`,C2=`/**
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
`,M2=`/**
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
`,R2=`vec2 getLookupUv(vec2 dimensions, int i) {
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
}`,P2=`/**
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
`,I2=`/**
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
`,z2=`/**
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
`,N2=`/**
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
`,D2=`#ifdef LOG_DEPTH
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
`,L2=`vec4 czm_screenToEyeCoordinates(vec4 screenCoordinate)
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
`,F2=`// emulated noperspective
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
`,B2=`#ifdef LOG_DEPTH
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
`,U2=`/**
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
`,vc={czm_degreesPerRadian:lv,czm_depthRange:uv,czm_epsilon1:dv,czm_epsilon2:mv,czm_epsilon3:pv,czm_epsilon4:_v,czm_epsilon5:gv,czm_epsilon6:yv,czm_epsilon7:bv,czm_infinity:Ev,czm_oneOverPi:wv,czm_oneOverTwoPi:vv,czm_passCesium3DTile:Tv,czm_passCesium3DTileClassification:Sv,czm_passCesium3DTileClassificationIgnoreShow:Av,czm_passClassification:xv,czm_passCompute:Ov,czm_passEnvironment:Cv,czm_passGaussianSplats:Mv,czm_passGlobe:Rv,czm_passOpaque:Pv,czm_passOverlay:Iv,czm_passTerrainClassification:zv,czm_passTranslucent:Nv,czm_passVoxels:Dv,czm_pi:Lv,czm_piOverFour:Fv,czm_piOverSix:Bv,czm_piOverThree:Uv,czm_piOverTwo:Gv,czm_radiansPerDegree:qv,czm_sceneMode2D:kv,czm_sceneMode3D:jv,czm_sceneModeColumbusView:Vv,czm_sceneModeMorphing:Hv,czm_solarRadius:Wv,czm_threePiOver2:Yv,czm_twoPi:$v,czm_webMercatorMaxLatitude:Xv,czm_depthRangeStruct:Zv,czm_material:Kv,czm_materialInput:Qv,czm_modelMaterial:Jv,czm_modelVertexOutput:eT,czm_ray:tT,czm_raySegment:nT,czm_shadowParameters:oT,czm_HSBToRGB:iT,czm_HSLToRGB:rT,czm_RGBToHSB:aT,czm_RGBToHSL:sT,czm_RGBToXYZ:cT,czm_XYZToRGB:fT,czm_acesTonemapping:hT,czm_alphaWeight:lT,czm_antialias:uT,czm_applyHSBShift:dT,czm_approximateSphericalCoordinates:mT,czm_approximateTanh:pT,czm_backFacing:_T,czm_branchFreeTernary:gT,czm_cascadeColor:yT,czm_cascadeDistance:bT,czm_cascadeMatrix:ET,czm_cascadeWeights:wT,czm_clipPolygons:vT,czm_columbusViewMorph:TT,czm_computeAtmosphereColor:ST,czm_computeGroundAtmosphereScattering:AT,czm_computePosition:xT,czm_computeScattering:OT,czm_cosineAndSine:CT,czm_decompressTextureCoordinates:MT,czm_depthClamp:RT,czm_eastNorthUpToEyeCoordinates:PT,czm_ellipsoidContainsPoint:IT,czm_ellipsoidTextureCoordinates:zT,czm_equalsEpsilon:NT,czm_eyeOffset:DT,czm_eyeToWindowCoordinates:LT,czm_fastApproximateAtan:FT,czm_fog:BT,czm_gammaCorrect:UT,czm_geodeticSurfaceNormal:GT,czm_getDefaultMaterial:qT,czm_getDynamicAtmosphereLightDirection:kT,czm_getLambertDiffuse:jT,czm_getSpecular:VT,czm_getWaterNoise:HT,czm_hue:WT,czm_inverseGamma:YT,czm_isEmpty:$T,czm_isFull:XT,czm_latitudeToWebMercatorFraction:ZT,czm_lineDistance:KT,czm_linearToSrgb:QT,czm_luminance:JT,czm_maximumComponent:e2,czm_metersPerPixel:t2,czm_modelToWindowCoordinates:n2,czm_multiplyWithColorBalance:o2,czm_nearFarScalar:i2,czm_octDecode:r2,czm_packDepth:a2,czm_pbrLighting:s2,czm_pbrNeutralTonemapping:c2,czm_phong:f2,czm_planeDistance:h2,czm_pointAlongRay:l2,czm_rayEllipsoidIntersectionInterval:u2,czm_raySphereIntersectionInterval:d2,czm_readDepth:m2,czm_readNonPerspective:p2,czm_reverseLogDepth:_2,czm_round:g2,czm_saturation:y2,czm_shadowDepthCompare:b2,czm_shadowVisibility:E2,czm_signNotZero:w2,czm_sphericalHarmonics:v2,czm_srgbToLinear:T2,czm_tangentToEyeSpaceMatrix:S2,czm_textureCube:A2,czm_transformPlane:x2,czm_translateRelativeToEye:O2,czm_translucentPhong:C2,czm_transpose:M2,czm_unpackClippingExtents:R2,czm_unpackDepth:P2,czm_unpackFloat:I2,czm_unpackUint:z2,czm_valueTransform:N2,czm_vertexLogDepth:D2,czm_windowToEyeCoordinates:L2,czm_writeDepthClamp:F2,czm_writeLogDepth:B2,czm_writeNonPerspective:U2};function G2(e,t){let n=e;return n=n.replaceAll("version 300 es",""),n=n.replaceAll(/(texture\()/g,"texture2D("),t?(n=n.replaceAll(/\n\s*(in)\s+(vec\d|mat\d|float)/g,`
varying $2`),/out_FragData_(\d+)/.test(n)&&(n=`#extension GL_EXT_draw_buffers : enable
${n}`,n=n.replaceAll(/layout\s+\(location\s*=\s*\d+\)\s*out\s+vec4\s+out_FragData_\d+;/g,""),n=n.replaceAll(/out_FragData_(\d+)/g,"gl_FragData[$1]")),n=n.replaceAll(/layout\s+\(location\s*=\s*0\)\s*out\s+vec4\s+out_FragColor;/g,""),n=n.replaceAll(/out_FragColor/g,"gl_FragColor"),n=n.replaceAll(/out_FragColor\[(\d+)\]/g,"gl_FragColor[$1]"),/gl_FragDepth/.test(n)&&(n=`#extension GL_EXT_frag_depth : enable
${n}`,n=n.replaceAll(/gl_FragDepth/g,"gl_FragDepthEXT")),n=`#ifdef GL_EXT_shader_texture_lod
#extension GL_EXT_shader_texture_lod : enable
#endif
${n}`,n=`#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif
${n}`):(n=n.replaceAll(/(in)\s+(vec\d|mat\d|float)/g,"attribute $2"),n=n.replaceAll(/(out)\s+(vec\d|mat\d|float)\s+([\w]+);/g,"varying $2 $3;")),n=`#version 100
${n}`,n}function nm(e){return e=e.replace(/\/\/.*/g,""),e.replace(/\/\*\*[\s\S]*?\*\//gm,function(t){const n=t.match(/\n/gm).length;let o="";for(let i=0;i<n;++i)o+=`
`;return o})}function om(e,t,n){let o;for(let i=0;i<n.length;++i)n[i].name===e&&(o=n[i]);return l(o)||(t=nm(t),o={name:e,glslSource:t,dependsOn:[],requiredBy:[],evaluated:!1},n.push(o)),o}function im(e,t){if(e.evaluated)return;e.evaluated=!0;let n=e.glslSource.match(/\bczm_[a-zA-Z0-9_]*/g);l(n)&&n!==null&&(n=n.filter(function(o,i){return n.indexOf(o)===i}),n.forEach(function(o){if(o!==e.name&&it._czmBuiltinsAndUniforms.hasOwnProperty(o)){const i=om(o,it._czmBuiltinsAndUniforms[o],t);e.dependsOn.push(i),i.requiredBy.push(e),im(i,t)}}))}function q2(e){const t=[],n=[];for(;e.length>0;){const i=e.pop();n.push(i),i.requiredBy.length===0&&t.push(i)}for(;t.length>0;){const i=t.shift();e.push(i);for(let r=0;r<i.dependsOn.length;++r){const a=i.dependsOn[r],s=a.requiredBy.indexOf(i);a.requiredBy.splice(s,1),a.requiredBy.length===0&&t.push(a)}}const o=[];for(let i=0;i<n.length;++i)n[i].requiredBy.length!==0&&o.push(n[i]);if(o.length!==0){let i=`A circular dependency was found in the following built-in functions/structs/constants: 
`;for(let r=0;r<o.length;++r)i=`${i+o[r].name}
`;throw new w(i)}}function k2(e){const t=[],n=om("main",e,t);im(n,t),q2(t);let o="";for(let i=t.length-1;i>=0;--i)o=`${o+t[i].glslSource}
`;return o.replace(n.glslSource,"")}function rm(e,t,n){let o,i,r="";const a=e.sources;if(l(a))for(o=0,i=a.length;o<i;++o)r+=`
#line 0
${a[o]}`;r=nm(r);let s;r=r.replace(/#version\s+(.*?)\n/gm,function(y,E){if(l(s)&&s!==E)throw new w(`inconsistent versions found: ${s} and ${E}`);return s=E,`
`});const c=[];r=r.replace(/#extension.*\n/gm,function(y){return c.push(y),`
`}),r=r.replace(/precision\s(lowp|mediump|highp)\s(float|int);/,"");const f=e.pickColorQualifier;l(f)&&(r=it.createPickFragmentShaderSource(r,f));let d="";const u=c.length;for(o=0;o<u;o++)d+=c[o];t&&(d+=`#ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    precision highp int;
#else
    precision mediump float;
    precision mediump int;
    #define highp mediump
#endif

`);const m=e.defines;if(l(m))for(o=0,i=m.length;o<i;++o){const y=m[o];y.length!==0&&(d+=`#define ${y}
`)}n.textureFloatLinear&&(d+=`#define OES_texture_float_linear

`),n.floatingPointTexture&&(d+=`#define OES_texture_float

`);let _="";e.includeBuiltIns&&(_=k2(r)),d+=`
#line 0
`;const g=_+r;return n.webgl2&&t&&!/layout\s*\(location\s*=\s*0\)\s*out\s+vec4\s+out_FragColor;/g.test(g)&&!/czm_out_FragColor/g.test(g)&&/out_FragColor/g.test(g)&&(d+=`layout(location = 0) out vec4 out_FragColor;

`),d+=_,d+=r,n.webgl2?d=`#version 300 es
${d}`:d=G2(d,t),d}function it(e){e=e??xe.EMPTY_OBJECT;const t=e.pickColorQualifier;if(l(t)&&t!=="uniform"&&t!=="in")throw new w("options.pickColorQualifier must be 'uniform' or 'in'.");this.defines=l(e.defines)?e.defines.slice(0):[],this.sources=l(e.sources)?e.sources.slice(0):[],this.pickColorQualifier=t,this.includeBuiltIns=e.includeBuiltIns??!0}it.prototype.clone=function(){return new it({sources:this.sources,defines:this.defines,pickColorQualifier:this.pickColorQualifier,includeBuiltIns:this.includeBuiltIns})};it.replaceMain=function(e,t){return t=`void ${t}()`,e.replace(/void\s+main\s*\(\s*(?:void)?\s*\)/g,t)};it.prototype.getCacheKey=function(){const t=this.defines.slice().sort().join(","),n=this.pickColorQualifier,o=this.includeBuiltIns,i=this.sources.join(`
`);return`${t}:${n}:${o}:${i}`};it.prototype.createCombinedVertexShader=function(e){return rm(this,!1,e)};it.prototype.createCombinedFragmentShader=function(e){return rm(this,!0,e)};it._czmBuiltinsAndUniforms={};for(const e in vc)vc.hasOwnProperty(e)&&(it._czmBuiltinsAndUniforms[e]=vc[e]);for(const e in ka)if(ka.hasOwnProperty(e)){const t=ka[e];typeof t.getDeclaration=="function"&&(it._czmBuiltinsAndUniforms[e]=t.getDeclaration(e))}it.createPickVertexShaderSource=function(e){return`${it.replaceMain(e,"czm_old_main")}
in vec4 pickColor; 
out vec4 czm_pickColor; 
void main() 
{ 
    czm_old_main(); 
    czm_pickColor = pickColor; 
}`};it.createPickFragmentShaderSource=function(e,t){const n=it.replaceMain(e,"czm_old_main"),o=`${t} vec4 czm_pickColor; 
void main() 
{ 
    czm_old_main(); 
    if (out_FragColor.a == 0.0) { 
       discard; 
    } 
    out_FragColor = czm_pickColor; 
}`;return`${n}
${o}`};function j2(e,t){const n=e.defines,o=n.length;for(let i=0;i<o;++i)if(n[i]===t)return!0;return!1}function am(e,t){const n=e.sources,o=n.length;for(let i=0;i<o;++i)if(n[i].indexOf(t)!==-1)return!0;return!1}function sm(e,t){const n=t.length;for(let o=0;o<n;++o){const i=t[o];if(am(e,i))return i}}const V2=["v_normalEC","v_normal"];it.findNormalVarying=function(e){return am(e,"#ifdef HAS_NORMALS")?j2(e,"HAS_NORMALS")?"v_normalEC":void 0:sm(e,V2)};const H2=["v_positionEC"];it.findPositionVarying=function(e){return sm(e,H2)};function Kt(e){e=e??xe.EMPTY_OBJECT,p.defined("options.context",e.context);const{context:t,source:n,pixelFormat:o=Me.RGBA,pixelDatatype:i=Oe.UNSIGNED_BYTE,flipY:r=!0,skipColorSpaceConversion:a=!1,sampler:s=new eo}=e;let{width:c,height:f}=e;l(n)&&(l(c)||(c=n.videoWidth??n.naturalWidth??n.width),l(f)||(f=n.videoHeight??n.naturalHeight??n.height));const d=e.preMultiplyAlpha||o===Me.RGB||o===Me.LUMINANCE,u=Me.toInternalFormat(o,i,t),m=Me.isCompressedFormat(u);if(!l(c)||!l(f))throw new w("options requires a source field to create an initialized texture or width and height fields to create a blank texture.");if(p.typeOf.number.greaterThan("width",c,0),c>Ie.maximumTextureSize)throw new w(`Width must be less than or equal to the maximum texture size (${Ie.maximumTextureSize}).  Check maximumTextureSize.`);if(p.typeOf.number.greaterThan("height",f,0),f>Ie.maximumTextureSize)throw new w(`Height must be less than or equal to the maximum texture size (${Ie.maximumTextureSize}).  Check maximumTextureSize.`);if(!Me.validate(o))throw new w("Invalid options.pixelFormat.");if(!m&&!Oe.validate(i))throw new w("Invalid options.pixelDatatype.");if(o===Me.DEPTH_COMPONENT&&i!==Oe.UNSIGNED_SHORT&&i!==Oe.UNSIGNED_INT)throw new w("When options.pixelFormat is DEPTH_COMPONENT, options.pixelDatatype must be UNSIGNED_SHORT or UNSIGNED_INT.");if(o===Me.DEPTH_STENCIL&&i!==Oe.UNSIGNED_INT_24_8)throw new w("When options.pixelFormat is DEPTH_STENCIL, options.pixelDatatype must be UNSIGNED_INT_24_8.");if(i===Oe.FLOAT&&!t.floatingPointTexture)throw new w("When options.pixelDatatype is FLOAT, this WebGL implementation must support the OES_texture_float extension.  Check context.floatingPointTexture.");if(i===Oe.HALF_FLOAT&&!t.halfFloatingPointTexture)throw new w("When options.pixelDatatype is HALF_FLOAT, this WebGL implementation must support the OES_texture_half_float extension. Check context.halfFloatingPointTexture.");if(Me.isDepthFormat(o)){if(l(n))throw new w("When options.pixelFormat is DEPTH_COMPONENT or DEPTH_STENCIL, source cannot be provided.");if(!t.depthTexture)throw new w("When options.pixelFormat is DEPTH_COMPONENT or DEPTH_STENCIL, this WebGL implementation must support WEBGL_depth_texture.  Check context.depthTexture.")}if(m){if(!l(n)||!l(n.arrayBufferView))throw new w("When options.pixelFormat is compressed, options.source.arrayBufferView must be defined.");if(Me.isDXTFormat(u)&&!t.s3tc)throw new w("When options.pixelFormat is S3TC compressed, this WebGL implementation must support the WEBGL_compressed_texture_s3tc extension. Check context.s3tc.");if(Me.isPVRTCFormat(u)&&!t.pvrtc)throw new w("When options.pixelFormat is PVRTC compressed, this WebGL implementation must support the WEBGL_compressed_texture_pvrtc extension. Check context.pvrtc.");if(Me.isASTCFormat(u)&&!t.astc)throw new w("When options.pixelFormat is ASTC compressed, this WebGL implementation must support the WEBGL_compressed_texture_astc extension. Check context.astc.");if(Me.isETC2Format(u)&&!t.etc)throw new w("When options.pixelFormat is ETC2 compressed, this WebGL implementation must support the WEBGL_compressed_texture_etc extension. Check context.etc.");if(Me.isETC1Format(u)&&!t.etc1)throw new w("When options.pixelFormat is ETC1 compressed, this WebGL implementation must support the WEBGL_compressed_texture_etc1 extension. Check context.etc1.");if(Me.isBC7Format(u)&&!t.bc7)throw new w("When options.pixelFormat is BC7 compressed, this WebGL implementation must support the EXT_texture_compression_bptc extension. Check context.bc7.");if(Me.compressedTextureSizeInBytes(u,c,f)!==n.arrayBufferView.byteLength)throw new w("The byte length of the array buffer is invalid for the compressed texture with the given width and height.")}const _=t._gl,g=m?Me.compressedTextureSizeInBytes(o,c,f):Me.textureSizeInBytes(o,i,c,f);this._id=e.id??Xf(),this._context=t,this._textureFilterAnisotropic=t._textureFilterAnisotropic,this._textureTarget=_.TEXTURE_2D,this._texture=_.createTexture(),this._internalFormat=u,this._pixelFormat=o,this._pixelDatatype=i,this._width=c,this._height=f,this._dimensions=new V(c,f),this._hasMipmap=!1,this._sizeInBytes=g,this._preMultiplyAlpha=d,this._flipY=r,this._initialized=!1,this._sampler=void 0,this._sampler=s,lm(this,s),_.activeTexture(_.TEXTURE0),_.bindTexture(this._textureTarget,this._texture),l(n)?(a?_.pixelStorei(_.UNPACK_COLORSPACE_CONVERSION_WEBGL,_.NONE):_.pixelStorei(_.UNPACK_COLORSPACE_CONVERSION_WEBGL,_.BROWSER_DEFAULT_WEBGL),l(n.arrayBufferView)?Me.isCompressedFormat(u)?W2(this,n):cm(this,n):l(n.framebuffer)?$2(this,n):fm(this,n),this._initialized=!0):hm(this),_.bindTexture(this._textureTarget,null)}function W2(e,t){const o=e._context._gl,i=e._textureTarget,r=e._internalFormat,{width:a,height:s}=e;if(o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.compressedTexImage2D(i,0,r,a,s,0,t.arrayBufferView),l(t.mipLevels)){let c=a,f=s;for(let d=0;d<t.mipLevels.length;++d)c=ds(c),f=ds(f),o.compressedTexImage2D(i,d+1,r,c,f,0,t.mipLevels[d])}}function cm(e,t){const n=e._context,o=n._gl,i=e._textureTarget,r=e._internalFormat,{width:a,height:s,pixelFormat:c,pixelDatatype:f,flipY:d}=e,u=Me.alignmentInBytes(c,f,a);o.pixelStorei(o.UNPACK_ALIGNMENT,u),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1);let{arrayBufferView:m}=t;if(d&&(m=Me.flipY(m,c,f,a,s)),o.texImage2D(i,0,r,a,s,0,c,Oe.toWebGLConstant(f,n),m),l(t.mipLevels)){let _=a,g=s;for(let y=0;y<t.mipLevels.length;++y)_=ds(_),g=ds(g),o.texImage2D(i,y+1,r,_,g,0,c,Oe.toWebGLConstant(f,n),t.mipLevels[y])}}function Y2(e,t,n,o,i,r){const a=e._context,s=a._gl,{pixelFormat:c,pixelDatatype:f}=e,d=Me.alignmentInBytes(c,f,i);s.pixelStorei(s.UNPACK_ALIGNMENT,d),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),e.flipY&&(t=Me.flipY(t,c,f,i,r)),s.texSubImage2D(e._textureTarget,0,n,o,i,r,c,Oe.toWebGLConstant(f,a),t)}function $2(e,t){const n=e._context,o=n._gl;o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),t.framebuffer!==n.defaultFramebuffer&&t.framebuffer._bind(),o.copyTexImage2D(e._textureTarget,0,e._internalFormat,t.xOffset,t.yOffset,e.width,e.height,0),t.framebuffer!==n.defaultFramebuffer&&t.framebuffer._unBind()}function fm(e,t){const n=e._context,o=n._gl;o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.preMultiplyAlpha),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,e.flipY),o.texImage2D(e._textureTarget,0,e._internalFormat,e.pixelFormat,Oe.toWebGLConstant(e.pixelDatatype,n),t)}function X2(e,t,n,o){const i=e._context,r=i._gl;r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.preMultiplyAlpha),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,e.flipY),r.texSubImage2D(e._textureTarget,0,n,o,e.pixelFormat,Oe.toWebGLConstant(e.pixelDatatype,i),t)}function ds(e){const t=Math.floor(e/2)|0;return Math.max(t,1)}function hm(e){const t=e._context;t._gl.texImage2D(e._textureTarget,0,e._internalFormat,e._width,e._height,0,e._pixelFormat,Oe.toWebGLConstant(e._pixelDatatype,t),null)}Kt.create=function(e){return new Kt(e)};Kt.fromFramebuffer=function(e){e=e??xe.EMPTY_OBJECT,p.defined("options.context",e.context);const t=e.context,{pixelFormat:n=Me.RGB,framebufferXOffset:o=0,framebufferYOffset:i=0,width:r=t.drawingBufferWidth,height:a=t.drawingBufferHeight,framebuffer:s}=e;if(!Me.validate(n))throw new w("Invalid pixelFormat.");if(Me.isDepthFormat(n)||Me.isCompressedFormat(n))throw new w("pixelFormat cannot be DEPTH_COMPONENT, DEPTH_STENCIL or a compressed format.");if(p.defined("options.context",t),p.typeOf.number.greaterThanOrEquals("framebufferXOffset",o,0),p.typeOf.number.greaterThanOrEquals("framebufferYOffset",i,0),o+r>t.drawingBufferWidth)throw new w("framebufferXOffset + width must be less than or equal to drawingBufferWidth");if(i+a>t.drawingBufferHeight)throw new w("framebufferYOffset + height must be less than or equal to drawingBufferHeight.");return new Kt({context:t,width:r,height:a,pixelFormat:n,source:{framebuffer:l(s)?s:t.defaultFramebuffer,xOffset:o,yOffset:i,width:r,height:a}})};Object.defineProperties(Kt.prototype,{id:{get:function(){return this._id}},sampler:{get:function(){return this._sampler},set:function(e){lm(this,e),this._sampler=e}},pixelFormat:{get:function(){return this._pixelFormat}},pixelDatatype:{get:function(){return this._pixelDatatype}},dimensions:{get:function(){return this._dimensions}},preMultiplyAlpha:{get:function(){return this._preMultiplyAlpha}},flipY:{get:function(){return this._flipY}},width:{get:function(){return this._width}},height:{get:function(){return this._height}},sizeInBytes:{get:function(){return this._hasMipmap?Math.floor(this._sizeInBytes*4/3):this._sizeInBytes}},_target:{get:function(){return this._textureTarget}}});function lm(e,t){let{minificationFilter:n,magnificationFilter:o}=t;const i=[Ft.NEAREST_MIPMAP_NEAREST,Ft.NEAREST_MIPMAP_LINEAR,Ft.LINEAR_MIPMAP_NEAREST,Ft.LINEAR_MIPMAP_LINEAR].includes(n),r=e._context,a=e._pixelFormat,s=e._pixelDatatype;(s===Oe.FLOAT&&!r.textureFloatLinear||s===Oe.HALF_FLOAT&&!r.textureHalfFloatLinear)&&(n=i?Ft.NEAREST_MIPMAP_NEAREST:Ft.NEAREST,o=oi.NEAREST),r.webgl2&&Me.isDepthFormat(a)&&(n=Ft.NEAREST,o=oi.NEAREST);const c=r._gl,f=e._textureTarget;c.activeTexture(c.TEXTURE0),c.bindTexture(f,e._texture),c.texParameteri(f,c.TEXTURE_MIN_FILTER,n),c.texParameteri(f,c.TEXTURE_MAG_FILTER,o),c.texParameteri(f,c.TEXTURE_WRAP_S,t.wrapS),c.texParameteri(f,c.TEXTURE_WRAP_T,t.wrapT),l(e._textureFilterAnisotropic)&&c.texParameteri(f,e._textureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,t.maximumAnisotropy),c.bindTexture(f,null)}Kt.prototype.copyFrom=function(e){p.defined("options",e);const{xOffset:t=0,yOffset:n=0,source:o,skipColorSpaceConversion:i=!1}=e;if(p.defined("options.source",o),Me.isDepthFormat(this._pixelFormat))throw new w("Cannot call copyFrom when the texture pixel format is DEPTH_COMPONENT or DEPTH_STENCIL.");if(Me.isCompressedFormat(this._pixelFormat))throw new w("Cannot call copyFrom with a compressed texture pixel format.");p.typeOf.number.greaterThanOrEquals("xOffset",t,0),p.typeOf.number.greaterThanOrEquals("yOffset",n,0),p.typeOf.number.lessThanOrEquals("xOffset + options.source.width",t+o.width,this._width),p.typeOf.number.lessThanOrEquals("yOffset + options.source.height",n+o.height,this._height);const a=this._context._gl,s=this._textureTarget;a.activeTexture(a.TEXTURE0),a.bindTexture(s,this._texture);let{width:c,height:f}=o;l(o.videoWidth)&&l(o.videoHeight)?(c=o.videoWidth,f=o.videoHeight):l(o.naturalWidth)&&l(o.naturalHeight)&&(c=o.naturalWidth,f=o.naturalHeight),i?a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.NONE):a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL);let d=!1;this._initialized||(t===0&&n===0&&c===this._width&&f===this._height?(l(o.arrayBufferView)?cm(this,o):fm(this,o),d=!0):(a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),hm(this)),this._initialized=!0),d||(l(o.arrayBufferView)?Y2(this,o.arrayBufferView,t,n,c,f):X2(this,o,t,n)),a.bindTexture(s,null)};Kt.prototype.copyFromFramebuffer=function(e,t,n,o,i,r){if(e=e??0,t=t??0,n=n??0,o=o??0,i=i??this._width,r=r??this._height,Me.isDepthFormat(this._pixelFormat))throw new w("Cannot call copyFromFramebuffer when the texture pixel format is DEPTH_COMPONENT or DEPTH_STENCIL.");if(this._pixelDatatype===Oe.FLOAT)throw new w("Cannot call copyFromFramebuffer when the texture pixel data type is FLOAT.");if(this._pixelDatatype===Oe.HALF_FLOAT)throw new w("Cannot call copyFromFramebuffer when the texture pixel data type is HALF_FLOAT.");if(Me.isCompressedFormat(this._pixelFormat))throw new w("Cannot call copyFrom with a compressed texture pixel format.");p.typeOf.number.greaterThanOrEquals("xOffset",e,0),p.typeOf.number.greaterThanOrEquals("yOffset",t,0),p.typeOf.number.greaterThanOrEquals("framebufferXOffset",n,0),p.typeOf.number.greaterThanOrEquals("framebufferYOffset",o,0),p.typeOf.number.lessThanOrEquals("xOffset + width",e+i,this._width),p.typeOf.number.lessThanOrEquals("yOffset + height",t+r,this._height);const a=this._context._gl,s=this._textureTarget;a.activeTexture(a.TEXTURE0),a.bindTexture(s,this._texture),a.copyTexSubImage2D(s,0,e,t,n,o,i,r),a.bindTexture(s,null),this._initialized=!0};Kt.prototype.generateMipmap=function(e){if(e=e??us.DONT_CARE,Me.isDepthFormat(this._pixelFormat))throw new w("Cannot call generateMipmap when the texture pixel format is DEPTH_COMPONENT or DEPTH_STENCIL.");if(Me.isCompressedFormat(this._pixelFormat))throw new w("Cannot call generateMipmap with a compressed pixel format.");if(!this._context.webgl2){if(this._width>1&&!T.isPowerOfTwo(this._width))throw new w("width must be a power of two to call generateMipmap() in a WebGL1 context.");if(this._height>1&&!T.isPowerOfTwo(this._height))throw new w("height must be a power of two to call generateMipmap() in a WebGL1 context.")}if(!us.validate(e))throw new w("hint is invalid.");this._hasMipmap=!0;const t=this._context._gl,n=this._textureTarget;t.hint(t.GENERATE_MIPMAP_HINT,e),t.activeTexture(t.TEXTURE0),t.bindTexture(n,this._texture),t.generateMipmap(n),t.bindTexture(n,null)};Kt.prototype.isDestroyed=function(){return!1};Kt.prototype.destroy=function(){return this._context._gl.deleteTexture(this._texture),Lt(this)};const $a={MORPHING:0,COLUMBUS_VIEW:1,SCENE2D:2,SCENE3D:3};$a.getMorphTime=function(e){return e===$a.SCENE3D?1:e===$a.MORPHING?void 0:0};const st=Object.freeze($a),Z2={ADD:I.FUNC_ADD,SUBTRACT:I.FUNC_SUBTRACT,REVERSE_SUBTRACT:I.FUNC_REVERSE_SUBTRACT,MIN:I.MIN,MAX:I.MAX},bi=Object.freeze(Z2),K2={ZERO:I.ZERO,ONE:I.ONE,SOURCE_COLOR:I.SRC_COLOR,ONE_MINUS_SOURCE_COLOR:I.ONE_MINUS_SRC_COLOR,DESTINATION_COLOR:I.DST_COLOR,ONE_MINUS_DESTINATION_COLOR:I.ONE_MINUS_DST_COLOR,SOURCE_ALPHA:I.SRC_ALPHA,ONE_MINUS_SOURCE_ALPHA:I.ONE_MINUS_SRC_ALPHA,DESTINATION_ALPHA:I.DST_ALPHA,ONE_MINUS_DESTINATION_ALPHA:I.ONE_MINUS_DST_ALPHA,CONSTANT_COLOR:I.CONSTANT_COLOR,ONE_MINUS_CONSTANT_COLOR:I.ONE_MINUS_CONSTANT_COLOR,CONSTANT_ALPHA:I.CONSTANT_ALPHA,ONE_MINUS_CONSTANT_ALPHA:I.ONE_MINUS_CONSTANT_ALPHA,SOURCE_ALPHA_SATURATE:I.SRC_ALPHA_SATURATE},wn=Object.freeze(K2),Q2={DISABLED:Object.freeze({enabled:!1}),ALPHA_BLEND:Object.freeze({enabled:!0,equationRgb:bi.ADD,equationAlpha:bi.ADD,functionSourceRgb:wn.SOURCE_ALPHA,functionSourceAlpha:wn.ONE,functionDestinationRgb:wn.ONE_MINUS_SOURCE_ALPHA,functionDestinationAlpha:wn.ONE_MINUS_SOURCE_ALPHA}),PRE_MULTIPLIED_ALPHA_BLEND:Object.freeze({enabled:!0,equationRgb:bi.ADD,equationAlpha:bi.ADD,functionSourceRgb:wn.ONE,functionSourceAlpha:wn.ONE,functionDestinationRgb:wn.ONE_MINUS_SOURCE_ALPHA,functionDestinationAlpha:wn.ONE_MINUS_SOURCE_ALPHA}),ADDITIVE_BLEND:Object.freeze({enabled:!0,equationRgb:bi.ADD,equationAlpha:bi.ADD,functionSourceRgb:wn.SOURCE_ALPHA,functionSourceAlpha:wn.ONE,functionDestinationRgb:wn.ONE,functionDestinationAlpha:wn.ONE})},Qf=Object.freeze(Q2),J2={FRONT:I.FRONT,BACK:I.BACK,FRONT_AND_BACK:I.FRONT_AND_BACK},mr=Object.freeze(J2);function Go(e){e=e??xe.EMPTY_OBJECT,this.material=e.material,this.translucent=e.translucent??!0,this._vertexShaderSource=e.vertexShaderSource,this._fragmentShaderSource=e.fragmentShaderSource,this._renderState=e.renderState,this._closed=e.closed??!1}Object.defineProperties(Go.prototype,{vertexShaderSource:{get:function(){return this._vertexShaderSource}},fragmentShaderSource:{get:function(){return this._fragmentShaderSource}},renderState:{get:function(){return this._renderState}},closed:{get:function(){return this._closed}}});Go.prototype.getFragmentShaderSource=function(){const e=[];return this.flat&&e.push("#define FLAT"),this.faceForward&&e.push("#define FACE_FORWARD"),l(this.material)&&e.push(this.material.shaderSource),e.push(this.fragmentShaderSource),e.join(`
`)};Go.prototype.isTranslucent=function(){return l(this.material)&&this.material.isTranslucent()||!l(this.material)&&this.translucent};Go.prototype.getRenderState=function(){const e=this.isTranslucent(),t=en(this.renderState,!1);return e?(t.depthMask=!1,t.blending=Qf.ALPHA_BLEND):t.depthMask=!0,t};Go.getDefaultRenderState=function(e,t,n){let o={depthTest:{enabled:!0}};return e&&(o.depthMask=!1,o.blending=Qf.ALPHA_BLEND),t&&(o.cull={enabled:!0,face:mr.BACK}),l(n)&&(o=nn(n,o,!0)),o};const eS=`uniform sampler2D image;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    vec4 rampColor = texture(image, vec2(materialInput.aspect / (2.0 * czm_pi), 0.5));
    rampColor = czm_gammaCorrect(rampColor);
    material.diffuse = rampColor.rgb;
    material.alpha = rampColor.a;
    return material;
}
`,tS=`uniform sampler2D image;
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
`,nS=`uniform vec4 lightColor;
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
`,oS=`uniform vec4 lightColor;
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
`,iS=`uniform sampler2D heights;
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
`,rS=`uniform vec4 color;
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
`,aS=`uniform sampler2D image;
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
`,sS=`uniform vec4 fadeInColor;
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
`,cS=`uniform vec4 color;
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
`,fS=`uniform sampler2D image;
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
`,hS=`uniform vec4 color;

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
`,lS=`uniform vec4 color;
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
`,uS=`uniform vec4 color;
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
`,dS=`uniform vec4 color;
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
`,mS=`uniform vec4 color;
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
`,pS=`uniform sampler2D image;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    vec4 rampColor = texture(image, vec2(materialInput.slope / (czm_pi / 2.0), 0.5));
    rampColor = czm_gammaCorrect(rampColor);
    material.diffuse = rampColor.rgb;
    material.alpha = rampColor.a;
    return material;
}
`,_S=`uniform vec4 evenColor;
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
`,gS=`uniform vec4 waterColor;
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
`,yS=`// Thanks for the contribution Jonas
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
`;function ee(e){this.type=void 0,this.shaderSource=void 0,this.materials=void 0,this.uniforms=void 0,this._uniforms=void 0,this.translucent=void 0,this._minificationFilter=e.minificationFilter??Ft.LINEAR,this._magnificationFilter=e.magnificationFilter??oi.LINEAR,this._strict=void 0,this._template=void 0,this._count=void 0,this._texturePaths={},this._loadedImages=[],this._loadedCubeMaps=[],this._textures={},this._updateFunctions=[],this._defaultTexture=void 0,this._initializationPromises=[],this._initializationError=void 0,bS(e,this),Object.defineProperties(this,{type:{value:this.type,writable:!1},minificationFilter:{get:function(){return this._minificationFilter},set:function(t){this._minificationFilter=t}},magnificationFilter:{get:function(){return this._magnificationFilter},set:function(t){this._magnificationFilter=t}}}),l(ee._uniformList[this.type])||(ee._uniformList[this.type]=Object.keys(this._uniforms))}ee._uniformList={};ee.fromType=function(e,t){if(!l(ee._materialCache.getMaterial(e)))throw new w(`material with type '${e}' does not exist.`);const n=new ee({fabric:{type:e}});if(l(t))for(const o in t)t.hasOwnProperty(o)&&(n.uniforms[o]=t[o]);return n};ee.fromTypeAsync=async function(e,t){if(!l(ee._materialCache.getMaterial(e)))throw new w(`material with type '${e}' does not exist.`);const n=[],o=new ee({fabric:{type:e,uniforms:t}});if(um(o,n),await Promise.all(n),n.length=0,l(o._initializationError))throw o._initializationError;return o};function um(e,t){t.push(...e._initializationPromises);const n=e.materials;for(const o in n)if(n.hasOwnProperty(o)){const i=n[o];um(i,t)}}ee.prototype.isTranslucent=function(){if(l(this.translucent))return typeof this.translucent=="function"?this.translucent():this.translucent;let e=!0;const t=this._translucentFunctions,n=t.length;for(let o=0;o<n;++o){const i=t[o];if(typeof i=="function"?e=e&&i():e=e&&i,!e)break}return e};ee.prototype.update=function(e){this._defaultTexture=e.defaultTexture;let t,n;const o=this._loadedImages;let i=o.length;for(t=0;t<i;++t){const c=o[t];n=c.id;let f=c.image,d;Array.isArray(f)&&(d=f.slice(1,f.length).map(function(y){return y.bufferView}),f=f[0]);const u=new eo({minificationFilter:this._minificationFilter,magnificationFilter:this._magnificationFilter});let m;l(f.internalFormat)?m=new Kt({context:e,pixelFormat:f.internalFormat,width:f.width,height:f.height,source:{arrayBufferView:f.bufferView,mipLevels:d},sampler:u}):m=new Kt({context:e,source:f,sampler:u});const _=this._textures[n];l(_)&&_!==this._defaultTexture&&_.destroy(),this._textures[n]=m;const g=`${n}Dimensions`;if(this.uniforms.hasOwnProperty(g)){const y=this.uniforms[g];y.x=m._width,y.y=m._height}}o.length=0;const r=this._loadedCubeMaps;for(i=r.length,t=0;t<i;++t){const c=r[t];n=c.id;const f=c.images,d=new Je({context:e,source:{positiveX:f[0],negativeX:f[1],positiveY:f[2],negativeY:f[3],positiveZ:f[4],negativeZ:f[5]},sampler:new eo({minificationFilter:this._minificationFilter,magnificationFilter:this._magnificationFilter})});this._textures[n]=d}r.length=0;const a=this._updateFunctions;for(i=a.length,t=0;t<i;++t)a[t](this,e);const s=this.materials;for(const c in s)s.hasOwnProperty(c)&&s[c].update(e)};ee.prototype.isDestroyed=function(){return!1};ee.prototype.destroy=function(){const e=this._textures;for(const n in e)if(e.hasOwnProperty(n)){const o=e[n];o!==this._defaultTexture&&o.destroy()}const t=this.materials;for(const n in t)t.hasOwnProperty(n)&&t[n].destroy();return Lt(this)};function bS(e,t){e=e??xe.EMPTY_OBJECT,t._strict=e.strict??!1,t._count=e.count??0,t._template=en(e.fabric??xe.EMPTY_OBJECT),t.fabric=en(e.fabric??xe.EMPTY_OBJECT),t._template.uniforms=en(t._template.uniforms??xe.EMPTY_OBJECT),t._template.materials=en(t._template.materials??xe.EMPTY_OBJECT),t.type=l(t._template.type)?t._template.type:Xf(),t.shaderSource="",t.materials={},t.uniforms={},t._uniforms={},t._translucentFunctions=[];let n;const o=ee._materialCache.getMaterial(t.type);if(l(o)){const r=en(o.fabric,!0);t._template=nn(t._template,r,!0),n=o.translucent}TS(t),AS(t),MS(t),PS(t),l(o)||ee._materialCache.addMaterial(t.type,t);const i=t._translucentFunctions.length===0?!0:void 0;if(n=n??i,n=e.translucent??n,l(n))if(typeof n=="function"){const r=function(){return n(t)};t._translucentFunctions.push(r)}else t._translucentFunctions.push(n)}function Tc(e,t,n,o){if(l(e)){for(const i in e)if(e.hasOwnProperty(i)){const r=t.indexOf(i)!==-1;(o&&!r||!o&&r)&&n(i,t)}}}function ru(e,t){let n=`fabric: property name '${e}' is not valid. It should be `;for(let o=0;o<t.length;o++){const i=`'${t[o]}'`;n+=o===t.length-1?`or ${i}.`:`${i}, `}throw new w(n)}function ES(e,t){const n=`fabric: uniforms and materials cannot share the same property '${e}'`;throw new w(n)}const wS=["type","materials","uniforms","components","source"],vS=["diffuse","specular","shininess","normal","emission","alpha"];function TS(e){const t=e._template,n=t.uniforms,o=t.materials,i=t.components;if(l(i)&&l(t.source))throw new w("fabric: cannot have source and components in the same template.");Tc(t,wS,ru,!0),Tc(i,vS,ru,!0);const r=[];for(const a in o)o.hasOwnProperty(a)&&r.push(a);Tc(n,r,ES,!1)}function SS(e,t){const n=t._template.materials;for(const o in n)if(n.hasOwnProperty(o)&&e.indexOf(o)>-1)return!0;return!1}function AS(e){const t=e._template.components,n=e._template.source;if(l(n))e.shaderSource+=`${n}
`;else{if(e.shaderSource+=`czm_material czm_getMaterial(czm_materialInput materialInput)
{
`,e.shaderSource+=`czm_material material = czm_getDefaultMaterial(materialInput);
`,l(t)){const o=Object.keys(e._template.materials).length>0;for(const i in t)if(t.hasOwnProperty(i))if(i==="diffuse"||i==="emission"){const a=o&&SS(t[i],e)?t[i]:`czm_gammaCorrect(${t[i]})`;e.shaderSource+=`material.${i} = ${a}; 
`}else i==="alpha"?e.shaderSource+=`material.alpha = ${t.alpha}; 
`:e.shaderSource+=`material.${i} = ${t[i]};
`}e.shaderSource+=`return material;
}
`}}const au={mat2:ge,mat3:B,mat4:U},xS=/\.ktx2$/i;function OS(e){let t;return function(n,o){const i=n.uniforms,r=i[e],a=t!==r,s=!l(r)||r===ee.DefaultImageId;t=r;let c=n._textures[e],f,d;if(r instanceof HTMLVideoElement){if(r.readyState>=2){if(a&&l(c)&&(c!==o.defaultTexture&&c.destroy(),c=void 0),!l(c)||c===o.defaultTexture){const u=new eo({minificationFilter:n._minificationFilter,magnificationFilter:n._magnificationFilter});c=new Kt({context:o,source:r,sampler:u}),n._textures[e]=c;return}c.copyFrom({source:r})}else l(c)||(n._textures[e]=o.defaultTexture);return}if(r instanceof Kt&&r!==c){n._texturePaths[e]=void 0;const u=n._textures[e];l(u)&&u!==n._defaultTexture&&u.destroy(),n._textures[e]=r,f=`${e}Dimensions`,i.hasOwnProperty(f)&&(d=i[f],d.x=r._width,d.y=r._height);return}if(a&&l(c)&&s&&(c!==n._defaultTexture&&c.destroy(),c=void 0,n._texturePaths[e]=void 0),l(c)||(c=n._textures[e]=n._defaultTexture,f=`${e}Dimensions`,i.hasOwnProperty(f)&&(d=i[f],d.x=c._width,d.y=c._height)),!s){if((r instanceof HTMLCanvasElement||r instanceof HTMLImageElement||r instanceof ImageBitmap||r instanceof OffscreenCanvas)&&r!==n._texturePaths[e]){n._loadedImages.push({id:e,image:r}),n._texturePaths[e]=r;return}dm(n,e)}}}function dm(e,t){const o=e.uniforms[t];if(o===ee.DefaultImageId)return Promise.resolve();const i=se.createIfNeeded(o);if(!(i instanceof se))return Promise.resolve();const r=se.createIfNeeded(e._texturePaths[t]);if(!(!l(r)||r.url!==i.url))return Promise.resolve();let s;return xS.test(i.url)?s=pd(i.url):s=i.fetchImage(),Promise.resolve(s).then(function(c){e._loadedImages.push({id:t,image:c})}).catch(function(c){e._initializationError=c;const f=e._textures[t];l(f)&&f!==e._defaultTexture&&f.destroy(),e._textures[t]=e._defaultTexture}),e._texturePaths[t]=o,s}function CS(e){return function(t,n){const o=t.uniforms[e];if(o instanceof Je){const i=t._textures[e];i!==t._defaultTexture&&i.destroy(),t._texturePaths[e]=void 0,t._textures[e]=o;return}l(t._textures[e])||(t._textures[e]=n.defaultCubeMap),mm(t,e)}}function mm(e,t){const o=e.uniforms[t];if(o===ee.DefaultCubeMapId)return Promise.resolve();const i=o.positiveX+o.negativeX+o.positiveY+o.negativeY+o.positiveZ+o.negativeZ;if(i===e._texturePaths[t])return Promise.resolve();const r=[se.createIfNeeded(o.positiveX).fetchImage(),se.createIfNeeded(o.negativeX).fetchImage(),se.createIfNeeded(o.positiveY).fetchImage(),se.createIfNeeded(o.negativeY).fetchImage(),se.createIfNeeded(o.positiveZ).fetchImage(),se.createIfNeeded(o.negativeZ).fetchImage()],a=Promise.all(r);return a.then(function(s){e._loadedCubeMaps.push({id:t,images:s})}).catch(function(s){e._initializationError=s}),e._texturePaths[t]=i,a}function MS(e){const t=e._template.uniforms;for(const n in t)t.hasOwnProperty(n)&&pm(e,n)}function pm(e,t){const n=e._strict,o=e._template.uniforms,i=o[t],r=RS(i);if(!l(r))throw new w(`fabric: uniform '${t}' has invalid type.`);let a;if(r==="channels"){if(a=Fr(e,t,i,!1),a===0&&n)throw new w(`strict: shader source does not use channels '${t}'.`)}else{if(r==="sampler2D"){const f=`${t}Dimensions`;IS(e,f)>0&&(o[f]={type:"ivec3",x:1,y:1},pm(e,f))}if(!new RegExp(`uniform\\s+${r}\\s+${t}\\s*;`).test(e.shaderSource)){const f=`uniform ${r} ${t};`;e.shaderSource=f+e.shaderSource}const c=`${t}_${e._count++}`;if(a=Fr(e,t,c),a===1&&n)throw new w(`strict: shader source does not use uniform '${t}'.`);if(e.uniforms[t]=i,r==="sampler2D")e._uniforms[c]=function(){return e._textures[t]},e._updateFunctions.push(OS(t)),e._initializationPromises.push(dm(e,t));else if(r==="samplerCube")e._uniforms[c]=function(){return e._textures[t]},e._updateFunctions.push(CS(t)),e._initializationPromises.push(mm(e,t));else if(r.indexOf("mat")!==-1){const f=new au[r];e._uniforms[c]=function(){return au[r].fromColumnMajorArray(e.uniforms[t],f)}}else e._uniforms[c]=function(){return e.uniforms[t]}}}function RS(e){let t=e.type;if(!l(t)){const n=typeof e;if(n==="number")t="float";else if(n==="boolean")t="bool";else if(n==="string"||e instanceof se||e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof ImageBitmap||e instanceof OffscreenCanvas)/^([rgba]){1,4}$/i.test(e)?t="channels":e===ee.DefaultCubeMapId?t="samplerCube":t="sampler2D";else if(n==="object")if(Array.isArray(e))(e.length===4||e.length===9||e.length===16)&&(t=`mat${Math.sqrt(e.length)}`);else{let o=0;for(const i in e)e.hasOwnProperty(i)&&(o+=1);o>=2&&o<=4?t=`vec${o}`:o===6&&(t="samplerCube")}}return t}function PS(e){const t=e._strict,n=e._template.materials;for(const o in n)if(n.hasOwnProperty(o)){const i=new ee({strict:t,fabric:n[o],count:e._count});e._count=i._count,e._uniforms=nn(e._uniforms,i._uniforms,!0),e.materials[o]=i,e._translucentFunctions=e._translucentFunctions.concat(i._translucentFunctions);const r="czm_getMaterial",a=`${r}_${e._count++}`;Fr(i,r,a),e.shaderSource=i.shaderSource+e.shaderSource;const s=`${a}(materialInput)`;if(Fr(e,o,s)===0&&t)throw new w(`strict: shader source does not use material '${o}'.`)}}function Fr(e,t,n,o){o=o??!0;let i=0;const r="([\\w])?",a=`([\\w${o?".":""}])?`,s=new RegExp(a+t+r,"g");return e.shaderSource=e.shaderSource.replace(s,function(c,f,d){return f||d?c:(i+=1,n)}),i}function IS(e,t,n){return Fr(e,t,t,n)}ee._materialCache={_materials:{},addMaterial:function(e,t){this._materials[e]=t},getMaterial:function(e){return this._materials[e]}};ee.DefaultImageId="czm_defaultImage";ee.DefaultCubeMapId="czm_defaultCubeMap";ee.ColorType="Color";ee._materialCache.addMaterial(ee.ColorType,{fabric:{type:ee.ColorType,uniforms:{color:new x(1,0,0,.5)},components:{diffuse:"color.rgb",alpha:"color.a"}},translucent:function(e){return e.uniforms.color.alpha<1}});ee.ImageType="Image";ee._materialCache.addMaterial(ee.ImageType,{fabric:{type:ee.ImageType,uniforms:{image:ee.DefaultImageId,repeat:new V(1,1),color:new x(1,1,1,1)},components:{diffuse:"texture(image, fract(repeat * materialInput.st)).rgb * color.rgb",alpha:"texture(image, fract(repeat * materialInput.st)).a * color.a"}},translucent:function(e){return e.uniforms.color.alpha<1}});ee.DiffuseMapType="DiffuseMap";ee._materialCache.addMaterial(ee.DiffuseMapType,{fabric:{type:ee.DiffuseMapType,uniforms:{image:ee.DefaultImageId,channels:"rgb",repeat:new V(1,1)},components:{diffuse:"texture(image, fract(repeat * materialInput.st)).channels"}},translucent:!1});ee.AlphaMapType="AlphaMap";ee._materialCache.addMaterial(ee.AlphaMapType,{fabric:{type:ee.AlphaMapType,uniforms:{image:ee.DefaultImageId,channel:"a",repeat:new V(1,1)},components:{alpha:"texture(image, fract(repeat * materialInput.st)).channel"}},translucent:!0});ee.SpecularMapType="SpecularMap";ee._materialCache.addMaterial(ee.SpecularMapType,{fabric:{type:ee.SpecularMapType,uniforms:{image:ee.DefaultImageId,channel:"r",repeat:new V(1,1)},components:{specular:"texture(image, fract(repeat * materialInput.st)).channel"}},translucent:!1});ee.EmissionMapType="EmissionMap";ee._materialCache.addMaterial(ee.EmissionMapType,{fabric:{type:ee.EmissionMapType,uniforms:{image:ee.DefaultImageId,channels:"rgb",repeat:new V(1,1)},components:{emission:"texture(image, fract(repeat * materialInput.st)).channels"}},translucent:!1});ee.BumpMapType="BumpMap";ee._materialCache.addMaterial(ee.BumpMapType,{fabric:{type:ee.BumpMapType,uniforms:{image:ee.DefaultImageId,channel:"r",strength:.8,repeat:new V(1,1)},source:tS},translucent:!1});ee.NormalMapType="NormalMap";ee._materialCache.addMaterial(ee.NormalMapType,{fabric:{type:ee.NormalMapType,uniforms:{image:ee.DefaultImageId,channels:"rgb",strength:.8,repeat:new V(1,1)},source:fS},translucent:!1});ee.GridType="Grid";ee._materialCache.addMaterial(ee.GridType,{fabric:{type:ee.GridType,uniforms:{color:new x(0,1,0,1),cellAlpha:.1,lineCount:new V(8,8),lineThickness:new V(1,1),lineOffset:new V(0,0)},source:cS},translucent:function(e){const t=e.uniforms;return t.color.alpha<1||t.cellAlpha<1}});ee.StripeType="Stripe";ee._materialCache.addMaterial(ee.StripeType,{fabric:{type:ee.StripeType,uniforms:{horizontal:!0,evenColor:new x(1,1,1,.5),oddColor:new x(0,0,1,.5),offset:0,repeat:5},source:_S},translucent:function(e){const t=e.uniforms;return t.evenColor.alpha<1||t.oddColor.alpha<1}});ee.CheckerboardType="Checkerboard";ee._materialCache.addMaterial(ee.CheckerboardType,{fabric:{type:ee.CheckerboardType,uniforms:{lightColor:new x(1,1,1,.5),darkColor:new x(0,0,0,.5),repeat:new V(5,5)},source:nS},translucent:function(e){const t=e.uniforms;return t.lightColor.alpha<1||t.darkColor.alpha<1}});ee.DotType="Dot";ee._materialCache.addMaterial(ee.DotType,{fabric:{type:ee.DotType,uniforms:{lightColor:new x(1,1,0,.75),darkColor:new x(0,1,1,.75),repeat:new V(5,5)},source:oS},translucent:function(e){const t=e.uniforms;return t.lightColor.alpha<1||t.darkColor.alpha<1}});ee.WaterType="Water";ee._materialCache.addMaterial(ee.WaterType,{fabric:{type:ee.WaterType,uniforms:{baseWaterColor:new x(.2,.3,.6,1),blendColor:new x(0,1,.699,1),specularMap:ee.DefaultImageId,normalMap:ee.DefaultImageId,frequency:10,animationSpeed:.01,amplitude:1,specularIntensity:.5,fadeFactor:1},source:yS},translucent:function(e){const t=e.uniforms;return t.baseWaterColor.alpha<1||t.blendColor.alpha<1}});ee.RimLightingType="RimLighting";ee._materialCache.addMaterial(ee.RimLightingType,{fabric:{type:ee.RimLightingType,uniforms:{color:new x(1,0,0,.7),rimColor:new x(1,1,1,.4),width:.3},source:mS},translucent:function(e){const t=e.uniforms;return t.color.alpha<1||t.rimColor.alpha<1}});ee.FadeType="Fade";ee._materialCache.addMaterial(ee.FadeType,{fabric:{type:ee.FadeType,uniforms:{fadeInColor:new x(1,0,0,1),fadeOutColor:new x(0,0,0,0),maximumDistance:.5,repeat:!0,fadeDirection:{x:!0,y:!0},time:new V(.5,.5)},source:sS},translucent:function(e){const t=e.uniforms;return t.fadeInColor.alpha<1||t.fadeOutColor.alpha<1}});ee.PolylineArrowType="PolylineArrow";ee._materialCache.addMaterial(ee.PolylineArrowType,{fabric:{type:ee.PolylineArrowType,uniforms:{color:new x(1,1,1,1)},source:hS},translucent:!0});ee.PolylineDashType="PolylineDash";ee._materialCache.addMaterial(ee.PolylineDashType,{fabric:{type:ee.PolylineDashType,uniforms:{color:new x(1,0,1,1),gapColor:new x(0,0,0,0),dashLength:16,dashPattern:255},source:lS},translucent:!0});ee.PolylineGlowType="PolylineGlow";ee._materialCache.addMaterial(ee.PolylineGlowType,{fabric:{type:ee.PolylineGlowType,uniforms:{color:new x(0,.5,1,1),glowPower:.25,taperPower:1},source:uS},translucent:!0});ee.PolylineOutlineType="PolylineOutline";ee._materialCache.addMaterial(ee.PolylineOutlineType,{fabric:{type:ee.PolylineOutlineType,uniforms:{color:new x(1,1,1,1),outlineColor:new x(1,0,0,1),outlineWidth:1},source:dS},translucent:function(e){const t=e.uniforms;return t.color.alpha<1||t.outlineColor.alpha<1}});ee.ElevationContourType="ElevationContour";ee._materialCache.addMaterial(ee.ElevationContourType,{fabric:{type:ee.ElevationContourType,uniforms:{spacing:100,color:new x(1,0,0,1),width:1},source:rS},translucent:!1});ee.ElevationRampType="ElevationRamp";ee._materialCache.addMaterial(ee.ElevationRampType,{fabric:{type:ee.ElevationRampType,uniforms:{image:ee.DefaultImageId,minimumHeight:0,maximumHeight:1e4},source:aS},translucent:!1});ee.SlopeRampMaterialType="SlopeRamp";ee._materialCache.addMaterial(ee.SlopeRampMaterialType,{fabric:{type:ee.SlopeRampMaterialType,uniforms:{image:ee.DefaultImageId},source:pS},translucent:!1});ee.AspectRampMaterialType="AspectRamp";ee._materialCache.addMaterial(ee.AspectRampMaterialType,{fabric:{type:ee.AspectRampMaterialType,uniforms:{image:ee.DefaultImageId},source:eS},translucent:!1});ee.ElevationBandType="ElevationBand";ee._materialCache.addMaterial(ee.ElevationBandType,{fabric:{type:ee.ElevationBandType,uniforms:{heights:ee.DefaultImageId,colors:ee.DefaultImageId},source:iS},translucent:!0});ee.WaterMaskType="WaterMask";ee._materialCache.addMaterial(ee.WaterMaskType,{fabric:{type:ee.WaterMaskType,source:gS,uniforms:{waterColor:new x(1,1,1,1),landColor:new x(0,0,0,0)}},translucent:!1});const zS={NEVER:I.NEVER,LESS:I.LESS,EQUAL:I.EQUAL,LESS_OR_EQUAL:I.LEQUAL,GREATER:I.GREATER,NOT_EQUAL:I.NOTEQUAL,GREATER_OR_EQUAL:I.GEQUAL,ALWAYS:I.ALWAYS},NS=Object.freeze(zS);function no(e,t,n){if(!l(e))throw new w("context is required");if(!l(t))throw new w("attributes is required");if(!l(n))throw new w("numberOfInstances is required");if(this._attributes=t,this._numberOfInstances=n,t.length===0)return;const o=DS(t),i=e.floatingPointTexture,r=o===Oe.FLOAT&&!i,a=LS(t,r),s=FS(a,t,r),c=Math.floor(Ie.maximumTextureSize/s),f=Math.min(n,c),d=s*f,u=Math.ceil(n/f),m=1/d,_=m*.5,g=1/u,y=g*.5;this._textureDimensions=new V(d,u),this._textureStep=new Q(m,_,g,y),this._pixelDatatype=r?Oe.UNSIGNED_BYTE:o,this._packFloats=r,this._offsets=a,this._stride=s,this._texture=void 0;const E=4*d*u;this._batchValues=o===Oe.FLOAT&&!r?new Float32Array(E):new Uint8Array(E),this._batchValuesDirty=!1}Object.defineProperties(no.prototype,{attributes:{get:function(){return this._attributes}},numberOfInstances:{get:function(){return this._numberOfInstances}}});function DS(e){let t=!1;const n=e.length;for(let o=0;o<n;++o)if(e[o].componentDatatype!==ue.UNSIGNED_BYTE){t=!0;break}return t?Oe.FLOAT:Oe.UNSIGNED_BYTE}function _m(e,t){const n=e[t].componentsPerAttribute;return n===2?V:n===3?h:n===4?Q:Number}function LS(e,t){const n=new Array(e.length);let o=0;const i=e.length;for(let r=0;r<i;++r){const s=e[r].componentDatatype;n[r]=o,s!==ue.UNSIGNED_BYTE&&t?o+=4:++o}return n}function FS(e,t,n){const o=e.length,i=e[o-1];return t[o-1].componentDatatype!==ue.UNSIGNED_BYTE&&n?i+4:i+1}const pr=new Q;function BS(e,t,n){let o=Q.unpack(e,t,pr);const i=Q.unpackFloat(o);o=Q.unpack(e,t+4,pr);const r=Q.unpackFloat(o);o=Q.unpack(e,t+8,pr);const a=Q.unpackFloat(o);o=Q.unpack(e,t+12,pr);const s=Q.unpackFloat(o);return Q.fromElements(i,r,a,s,n)}function US(e,t,n){let o=Q.packFloat(e.x,pr);Q.pack(o,t,n),o=Q.packFloat(e.y,o),Q.pack(o,t,n+4),o=Q.packFloat(e.z,o),Q.pack(o,t,n+8),o=Q.packFloat(e.w,o),Q.pack(o,t,n+12)}const su=new Q;no.prototype.getBatchedAttribute=function(e,t,n){if(e<0||e>=this._numberOfInstances)throw new w("instanceIndex is out of range.");if(t<0||t>=this._attributes.length)throw new w("attributeIndex is out of range");const o=this._attributes,i=this._offsets[t],a=4*this._stride*e+4*i;let s;this._packFloats&&o[t].componentDatatype!==Oe.UNSIGNED_BYTE?s=BS(this._batchValues,a,su):s=Q.unpack(this._batchValues,a,su);const c=_m(o,t);return l(c.fromCartesian4)?c.fromCartesian4(s,n):l(c.clone)?c.clone(s,n):s.x};const GS=[void 0,void 0,new V,new h,new Q],qS=new Q;no.prototype.setBatchedAttribute=function(e,t,n){if(e<0||e>=this._numberOfInstances)throw new w("instanceIndex is out of range.");if(t<0||t>=this._attributes.length)throw new w("attributeIndex is out of range");if(!l(n))throw new w("value is required.");const o=this._attributes,i=GS[o[t].componentsPerAttribute],r=this.getBatchedAttribute(e,t,i),a=_m(this._attributes,t);if(l(a.equals)?a.equals(r,n):r===n)return;const c=qS;c.x=l(n.x)?n.x:n,c.y=l(n.y)?n.y:0,c.z=l(n.z)?n.z:0,c.w=l(n.w)?n.w:0;const f=this._offsets[t],u=4*this._stride*e+4*f;this._packFloats&&o[t].componentDatatype!==Oe.UNSIGNED_BYTE?US(c,this._batchValues,u):Q.pack(c,this._batchValues,u),this._batchValuesDirty=!0};function kS(e,t){const n=e._textureDimensions;e._texture=new Kt({context:t,pixelFormat:Me.RGBA,pixelDatatype:e._pixelDatatype,width:n.x,height:n.y,sampler:eo.NEAREST,flipY:!1})}function jS(e){const t=e._textureDimensions;e._texture.copyFrom({source:{width:t.x,height:t.y,arrayBufferView:e._batchValues}})}no.prototype.update=function(e){l(this._texture)&&!this._batchValuesDirty||this._attributes.length===0||(this._batchValuesDirty=!1,l(this._texture)||kS(this,e.context),jS(this))};no.prototype.getUniformMapCallback=function(){const e=this;return function(t){return e._attributes.length===0?t:nn(t,{batchTexture:function(){return e._texture},batchTextureDimensions:function(){return e._textureDimensions},batchTextureStep:function(){return e._textureStep}})}};function VS(e){const t=e._stride;return e._textureDimensions.y===1?`uniform vec4 batchTextureStep; 
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
`}function HS(e){return e===1?"float":`vec${e}`}function WS(e){return e===1?".x":e===2?".xy":e===3?".xyz":""}function YS(e,t){const o=e._attributes[t],i=o.componentsPerAttribute,r=o.functionName,a=HS(i),s=WS(i),c=e._offsets[t];let f=`${a} ${r}(float batchId) 
{ 
    vec2 st = computeSt(batchId); 
    st.x += batchTextureStep.x * float(${c}); 
`;return e._packFloats&&o.componentDatatype!==Oe.UNSIGNED_BYTE?f+=`vec4 textureValue; 
textureValue.x = czm_unpackFloat(texture(batchTexture, st)); 
textureValue.y = czm_unpackFloat(texture(batchTexture, st + vec2(batchTextureStep.x, 0.0))); 
textureValue.z = czm_unpackFloat(texture(batchTexture, st + vec2(batchTextureStep.x * 2.0, 0.0))); 
textureValue.w = czm_unpackFloat(texture(batchTexture, st + vec2(batchTextureStep.x * 3.0, 0.0))); 
`:f+=`    vec4 textureValue = texture(batchTexture, st); 
`,f+=`    ${a} value = textureValue${s}; 
`,e._pixelDatatype===Oe.UNSIGNED_BYTE&&o.componentDatatype===ue.UNSIGNED_BYTE&&!o.normalize?f+=`value *= 255.0; 
`:e._pixelDatatype===Oe.FLOAT&&o.componentDatatype===ue.UNSIGNED_BYTE&&o.normalize&&(f+=`value /= 255.0; 
`),f+=`    return value; 
} 
`,f}no.prototype.getVertexShaderCallback=function(){const e=this._attributes;if(e.length===0)return function(o){return o};let t=`uniform highp sampler2D batchTexture; 
`;t+=`${VS(this)}
`;const n=e.length;for(let o=0;o<n;++o)t+=YS(this,o);return function(o){const i=o.indexOf("void main"),r=o.substring(0,i),a=o.substring(i);return`${r}
${t}
${a}`}};no.prototype.isDestroyed=function(){return!1};no.prototype.destroy=function(){return this._texture=this._texture&&this._texture.destroy(),Lt(this)};function $S(e,t,n){let o=!n;const i=e.length;let r;if(!o&&i>1){const a=e[0].modelMatrix;for(r=1;r<i;++r)if(!U.equals(a,e[r].modelMatrix)){o=!0;break}}if(o)for(r=0;r<i;++r)l(e[r].geometry)&&We.transformToWorldCoordinates(e[r]);else U.multiplyTransformation(t,e[0].modelMatrix,t)}function Sc(e,t){const n=e.attributes,o=n.position,i=o.values.length/o.componentsPerAttribute;n.batchId=new Ue({componentDatatype:ue.FLOAT,componentsPerAttribute:1,values:new Float32Array(i)});const r=n.batchId.values;for(let a=0;a<i;++a)r[a]=t}function XS(e){const t=e.length;for(let n=0;n<t;++n){const o=e[n];l(o.geometry)?Sc(o.geometry,n):l(o.westHemisphereGeometry)&&l(o.eastHemisphereGeometry)&&(Sc(o.westHemisphereGeometry,n),Sc(o.eastHemisphereGeometry,n))}}function ZS(e){const t=e.instances,n=e.projection,o=e.elementIndexUintSupported,i=e.scene3DOnly,r=e.vertexCacheOptimize,a=e.compressVertices,s=e.modelMatrix;let c,f,d,u=t.length;for(c=0;c<u;++c)if(l(t[c].geometry)){d=t[c].geometry.primitiveType;break}for(c=1;c<u;++c)if(l(t[c].geometry)&&t[c].geometry.primitiveType!==d)throw new w("All instance geometries must have the same primitiveType.");if($S(t,s,i),!i)for(c=0;c<u;++c)l(t[c].geometry)&&We.splitLongitude(t[c]);if(XS(t),r)for(c=0;c<u;++c){const _=t[c];l(_.geometry)?(We.reorderForPostVertexCache(_.geometry),We.reorderForPreVertexCache(_.geometry)):l(_.westHemisphereGeometry)&&l(_.eastHemisphereGeometry)&&(We.reorderForPostVertexCache(_.westHemisphereGeometry),We.reorderForPreVertexCache(_.westHemisphereGeometry),We.reorderForPostVertexCache(_.eastHemisphereGeometry),We.reorderForPreVertexCache(_.eastHemisphereGeometry))}let m=We.combineInstances(t);for(u=m.length,c=0;c<u;++c){f=m[c];const _=f.attributes;if(i)for(const g in _)_.hasOwnProperty(g)&&_[g].componentDatatype===ue.DOUBLE&&We.encodeAttribute(f,g,`${g}3DHigh`,`${g}3DLow`);else for(const g in _)if(_.hasOwnProperty(g)&&_[g].componentDatatype===ue.DOUBLE){const y=`${g}3D`,E=`${g}2D`;We.projectTo2D(f,g,y,E,n),l(f.boundingSphere)&&g==="position"&&(f.boundingSphereCV=ie.fromVertices(f.attributes.position2D.values)),We.encodeAttribute(f,y,`${y}High`,`${y}Low`),We.encodeAttribute(f,E,`${E}High`,`${E}Low`)}a&&We.compressVertices(f)}if(!o){let _=[];for(u=m.length,c=0;c<u;++c)f=m[c],_=_.concat(We.fitToUnsignedShortIndices(f));m=_}return m}function Ac(e,t,n,o){let i,r,a;const s=o.length-1;if(s>=0){const f=o[s];i=f.offset+f.count,a=f.index,r=n[a].indices.length}else i=0,a=0,r=n[a].indices.length;const c=e.length;for(let f=0;f<c;++f){const u=e[f][t];if(!l(u))continue;const m=u.indices.length;i+m>r&&(i=0,r=n[++a].indices.length),o.push({index:a,offset:i,count:m}),i+=m}}function KS(e,t){const n=[];return Ac(e,"geometry",t,n),Ac(e,"westHemisphereGeometry",t,n),Ac(e,"eastHemisphereGeometry",t,n),n}const Gn={};Gn.combineGeometry=function(e){let t,n;const o=e.instances,i=o.length;let r,a,s=!1;i>0&&(t=ZS(e),t.length>0&&(n=We.createAttributeLocations(t[0]),e.createPickOffsets&&(r=KS(o,t))),l(o[0].attributes)&&l(o[0].attributes.offset)&&(a=new Array(i),s=!0));const c=new Array(i),f=new Array(i);for(let d=0;d<i;++d){const u=o[d],m=u.geometry;l(m)&&(c[d]=m.boundingSphere,f[d]=m.boundingSphereCV,s&&(a[d]=u.geometry.offsetAttribute));const _=u.eastHemisphereGeometry,g=u.westHemisphereGeometry;l(_)&&l(g)&&(l(_.boundingSphere)&&l(g.boundingSphere)&&(c[d]=ie.union(_.boundingSphere,g.boundingSphere)),l(_.boundingSphereCV)&&l(g.boundingSphereCV)&&(f[d]=ie.union(_.boundingSphereCV,g.boundingSphereCV)))}return{geometries:t,modelMatrix:e.modelMatrix,attributeLocations:n,pickOffsets:r,offsetInstanceExtend:a,boundingSpheres:c,boundingSpheresCV:f}};function QS(e,t){const n=e.attributes;for(const o in n)if(n.hasOwnProperty(o)){const i=n[o];l(i)&&l(i.values)&&t.push(i.values.buffer)}l(e.indices)&&t.push(e.indices.buffer)}function JS(e,t){const n=e.length;for(let o=0;o<n;++o)QS(e[o],t)}function eA(e){let t=1;const n=e.length;for(let o=0;o<n;o++){const i=e[o];if(++t,!l(i))continue;const r=i.attributes;t+=7+2*ie.packedLength+(l(i.indices)?i.indices.length:0);for(const a in r)if(r.hasOwnProperty(a)&&l(r[a])){const s=r[a];t+=5+s.values.length}}return t}Gn.packCreateGeometryResults=function(e,t){const n=new Float64Array(eA(e)),o=[],i={},r=e.length;let a=0;n[a++]=r;for(let s=0;s<r;s++){const c=e[s],f=l(c);if(n[a++]=f?1:0,!f)continue;n[a++]=c.primitiveType,n[a++]=c.geometryType,n[a++]=c.offsetAttribute??-1;const d=l(c.boundingSphere)?1:0;n[a++]=d,d&&ie.pack(c.boundingSphere,n,a),a+=ie.packedLength;const u=l(c.boundingSphereCV)?1:0;n[a++]=u,u&&ie.pack(c.boundingSphereCV,n,a),a+=ie.packedLength;const m=c.attributes,_=[];for(const y in m)m.hasOwnProperty(y)&&l(m[y])&&(_.push(y),l(i[y])||(i[y]=o.length,o.push(y)));n[a++]=_.length;for(let y=0;y<_.length;y++){const E=_[y],A=m[E];n[a++]=i[E],n[a++]=A.componentDatatype,n[a++]=A.componentsPerAttribute,n[a++]=A.normalize?1:0,n[a++]=A.values.length,n.set(A.values,a),a+=A.values.length}const g=l(c.indices)?c.indices.length:0;n[a++]=g,g>0&&(n.set(c.indices,a),a+=g)}return t.push(n.buffer),{stringTable:o,packedData:n}};Gn.unpackCreateGeometryResults=function(e){const t=e.stringTable,n=e.packedData;let o;const i=new Array(n[0]);let r=0,a=1;for(;a<n.length;){if(!(n[a++]===1)){i[r++]=void 0;continue}const c=n[a++],f=n[a++];let d=n[a++];d===-1&&(d=void 0);let u,m;n[a++]===1&&(u=ie.unpack(n,a)),a+=ie.packedLength,n[a++]===1&&(m=ie.unpack(n,a)),a+=ie.packedLength;let y,E,A;const S=new Wr,O=n[a++];for(o=0;o<O;o++){const R=t[n[a++]],N=n[a++];A=n[a++];const F=n[a++]!==0;y=n[a++],E=ue.createTypedArray(N,y);for(let z=0;z<y;z++)E[z]=n[a++];S[R]=new Ue({componentDatatype:N,componentsPerAttribute:A,normalize:F,values:E})}let M;if(y=n[a++],y>0){const R=E.length/A;for(M=gt.createTypedArray(R,y),o=0;o<y;o++)M[o]=n[a++]}i[r++]=new tt({primitiveType:c,geometryType:f,boundingSphere:u,boundingSphereCV:m,indices:M,attributes:S,offsetAttribute:d})}return i};function tA(e,t){const n=e.length,o=new Float64Array(1+n*19);let i=0;o[i++]=n;for(let r=0;r<n;r++){const a=e[r];if(U.pack(a.modelMatrix,o,i),i+=U.packedLength,l(a.attributes)&&l(a.attributes.offset)){const s=a.attributes.offset.value;o[i]=s[0],o[i+1]=s[1],o[i+2]=s[2]}i+=3}return t.push(o.buffer),o}function nA(e){const t=e,n=new Array(t[0]);let o=0,i=1;for(;i<t.length;){const r=U.unpack(t,i);let a;i+=U.packedLength,l(t[i])&&(a={offset:new Lr(t[i],t[i+1],t[i+2])}),i+=3,n[o++]={modelMatrix:r,attributes:a}}return n}Gn.packCombineGeometryParameters=function(e,t){const n=e.createGeometryResults,o=n.length;for(let i=0;i<o;i++)t.push(n[i].packedData.buffer);return{createGeometryResults:e.createGeometryResults,packedInstances:tA(e.instances,t),ellipsoid:e.ellipsoid,isGeographic:e.projection instanceof bo,elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e.createPickOffsets}};Gn.unpackCombineGeometryParameters=function(e){const t=nA(e.packedInstances),n=e.createGeometryResults,o=n.length;let i=0;for(let s=0;s<o;s++){const c=Gn.unpackCreateGeometryResults(n[s]),f=c.length;for(let d=0;d<f;d++){const u=c[d],m=t[i];m.geometry=u,++i}}const r=be.clone(e.ellipsoid),a=e.isGeographic?new bo(r):new cn(r);return{instances:t,ellipsoid:r,projection:a,elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:U.clone(e.modelMatrix),createPickOffsets:e.createPickOffsets}};function cu(e){const t=e.length,n=1+(ie.packedLength+1)*t,o=new Float32Array(n);let i=0;o[i++]=t;for(let r=0;r<t;++r){const a=e[r];l(a)?(o[i++]=1,ie.pack(e[r],o,i)):o[i++]=0,i+=ie.packedLength}return o}function fu(e){const t=new Array(e[0]);let n=0,o=1;for(;o<e.length;)e[o++]===1&&(t[n]=ie.unpack(e,o)),++n,o+=ie.packedLength;return t}Gn.packCombineGeometryResults=function(e,t){l(e.geometries)&&JS(e.geometries,t);const n=cu(e.boundingSpheres),o=cu(e.boundingSpheresCV);return t.push(n.buffer,o.buffer),{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:n,boundingSpheresCV:o}};Gn.unpackCombineGeometryResults=function(e){return{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:fu(e.boundingSpheres),boundingSpheresCV:fu(e.boundingSpheresCV)}};const oA={READY:0,CREATING:1,CREATED:2,COMBINING:3,COMBINED:4,COMPLETE:5,FAILED:6},Tt=Object.freeze(oA),mn={DISABLED:0,ENABLED:1,CAST_ONLY:2,RECEIVE_ONLY:3};mn.NUMBER_OF_SHADOW_MODES=4;mn.castShadows=function(e){return e===mn.ENABLED||e===mn.CAST_ONLY};mn.receiveShadows=function(e){return e===mn.ENABLED||e===mn.RECEIVE_ONLY};mn.fromCastReceive=function(e,t){return e&&t?mn.ENABLED:e?mn.CAST_ONLY:t?mn.RECEIVE_ONLY:mn.DISABLED};const cf=Object.freeze(mn);function rt(e){if(e=e??xe.EMPTY_OBJECT,this.geometryInstances=e.geometryInstances,this.appearance=e.appearance,this._appearance=void 0,this._material=void 0,this.depthFailAppearance=e.depthFailAppearance,this._depthFailAppearance=void 0,this._depthFailMaterial=void 0,this.modelMatrix=U.clone(e.modelMatrix??U.IDENTITY),this._modelMatrix=new U,this.show=e.show??!0,this._vertexCacheOptimize=e.vertexCacheOptimize??!1,this._interleave=e.interleave??!1,this._releaseGeometryInstances=e.releaseGeometryInstances??!0,this._allowPicking=e.allowPicking??!0,this._asynchronous=e.asynchronous??!0,this._compressVertices=e.compressVertices??!0,this.cull=e.cull??!0,this.debugShowBoundingVolume=e.debugShowBoundingVolume??!1,this.rtcCenter=e.rtcCenter,l(this.rtcCenter)&&(!l(this.geometryInstances)||Array.isArray(this.geometryInstances)&&this.geometryInstances.length!==1))throw new w("Relative-to-center rendering only supports one geometry instance.");this.shadows=e.shadows??cf.DISABLED,this._translucent=void 0,this._state=Tt.READY,this._geometries=[],this._error=void 0,this._numberOfInstances=0,this._boundingSpheres=[],this._boundingSphereWC=[],this._boundingSphereCV=[],this._boundingSphere2D=[],this._boundingSphereMorph=[],this._perInstanceAttributeCache=new Map,this._instanceIds=[],this._lastPerInstanceAttributeIndex=0,this._va=[],this._attributeLocations=void 0,this._primitiveType=void 0,this._frontFaceRS=void 0,this._backFaceRS=void 0,this._sp=void 0,this._depthFailAppearance=void 0,this._spDepthFail=void 0,this._frontFaceDepthFailRS=void 0,this._backFaceDepthFailRS=void 0,this._pickIds=[],this._colorCommands=[],this._pickCommands=[],this._createBoundingVolumeFunction=e._createBoundingVolumeFunction,this._createRenderStatesFunction=e._createRenderStatesFunction,this._createShaderProgramFunction=e._createShaderProgramFunction,this._createCommandsFunction=e._createCommandsFunction,this._updateAndQueueCommandsFunction=e._updateAndQueueCommandsFunction,this._createPickOffsets=e._createPickOffsets,this._pickOffsets=void 0,this._createGeometryResults=void 0,this._ready=!1,this._batchTable=void 0,this._batchTableAttributeIndices=void 0,this._offsetInstanceExtend=void 0,this._batchTableOffsetAttribute2DIndex=void 0,this._batchTableOffsetsUpdated=!1,this._instanceBoundingSpheres=void 0,this._instanceBoundingSpheresCV=void 0,this._tempBoundingSpheres=void 0,this._recomputeBoundingSpheres=!1,this._batchTableBoundingSpheresUpdated=!1,this._batchTableBoundingSphereAttributeIndices=void 0}Object.defineProperties(rt.prototype,{vertexCacheOptimize:{get:function(){return this._vertexCacheOptimize}},interleave:{get:function(){return this._interleave}},releaseGeometryInstances:{get:function(){return this._releaseGeometryInstances}},allowPicking:{get:function(){return this._allowPicking}},asynchronous:{get:function(){return this._asynchronous}},compressVertices:{get:function(){return this._compressVertices}},ready:{get:function(){return this._ready}}});function iA(e){const t=e.length,n=[],o=e[0].attributes;let i;for(i in o)if(o.hasOwnProperty(i)&&l(o[i])){const r=o[i];let a=!0;for(let s=1;s<t;++s){const c=e[s].attributes[i];if(!l(c)||r.componentDatatype!==c.componentDatatype||r.componentsPerAttribute!==c.componentsPerAttribute||r.normalize!==c.normalize){a=!1;break}}a&&n.push(i)}return n}const rA=new V,aA=new h,gm=new Q;function ym(e){const t=e.length;if(t===1)return e[0];if(t===2)return V.unpack(e,0,rA);if(t===3)return h.unpack(e,0,aA);if(t===4)return Q.unpack(e,0,gm)}function sA(e,t){const n=e.geometryInstances,o=Array.isArray(n)?n:[n],i=o.length;if(i===0)return;const r=iA(o),a=r.length,s=[],c={},f={};let d,m=o[0].attributes,_,g,y;for(_=0;_<a;++_)g=r[_],y=m[g],c[g]=_,s.push({functionName:`czm_batchTable_${g}`,componentDatatype:y.componentDatatype,componentsPerAttribute:y.componentsPerAttribute,normalize:y.normalize});r.indexOf("distanceDisplayCondition")!==-1&&(s.push({functionName:"czm_batchTable_boundingSphereCenter3DHigh",componentDatatype:ue.FLOAT,componentsPerAttribute:3},{functionName:"czm_batchTable_boundingSphereCenter3DLow",componentDatatype:ue.FLOAT,componentsPerAttribute:3},{functionName:"czm_batchTable_boundingSphereCenter2DHigh",componentDatatype:ue.FLOAT,componentsPerAttribute:3},{functionName:"czm_batchTable_boundingSphereCenter2DLow",componentDatatype:ue.FLOAT,componentsPerAttribute:3},{functionName:"czm_batchTable_boundingSphereRadius",componentDatatype:ue.FLOAT,componentsPerAttribute:1}),f.center3DHigh=s.length-5,f.center3DLow=s.length-4,f.center2DHigh=s.length-3,f.center2DLow=s.length-2,f.radius=s.length-1),r.indexOf("offset")!==-1&&(s.push({functionName:"czm_batchTable_offset2D",componentDatatype:ue.FLOAT,componentsPerAttribute:3}),d=s.length-1),s.push({functionName:"czm_batchTable_pickColor",componentDatatype:ue.UNSIGNED_BYTE,componentsPerAttribute:4,normalize:!0});const E=s.length,A=new no(t,s,i);for(_=0;_<i;++_){const S=o[_];m=S.attributes;for(let F=0;F<a;++F){g=r[F],y=m[g];const z=ym(y.value),G=c[g];A.setBatchedAttribute(_,G,z)}const O={primitive:S.pickPrimitive??e};l(S.id)&&(O.id=S.id);const M=t.createPickId(O);e._pickIds.push(M);const R=M.color,N=gm;N.x=x.floatToByte(R.red),N.y=x.floatToByte(R.green),N.z=x.floatToByte(R.blue),N.w=x.floatToByte(R.alpha),A.setBatchedAttribute(_,E-1,N)}e._batchTable=A,e._batchTableAttributeIndices=c,e._batchTableBoundingSphereAttributeIndices=f,e._batchTableOffsetAttribute2DIndex=d}function cA(e){let t;return Array.isArray(e.values)?t=e.values.slice(0):t=new e.values.constructor(e.values),new Ue({componentDatatype:e.componentDatatype,componentsPerAttribute:e.componentsPerAttribute,normalize:e.normalize,values:t})}function fA(e){const t=e.attributes,n=new Wr;for(const i in t)t.hasOwnProperty(i)&&l(t[i])&&(n[i]=cA(t[i]));let o;if(l(e.indices)){const i=e.indices;Array.isArray(i)?o=i.slice(0):o=new i.constructor(i)}return new tt({attributes:n,indices:o,primitiveType:e.primitiveType,boundingSphere:ie.clone(e.boundingSphere)})}function hA(e,t){return{geometry:t,attributes:e.attributes,modelMatrix:U.clone(e.modelMatrix),pickPrimitive:e.pickPrimitive,id:e.id}}const lA=/in\s+vec(?:3|4)\s+(.*)3DHigh;/g;rt._modifyShaderPosition=function(e,t,n){let o,i="",r="",a="";for(;(o=lA.exec(t))!==null;){const s=o[1],c=`vec4 czm_compute${s[0].toUpperCase()}${s.substr(1)}()`;c!=="vec4 czm_computePosition()"&&(i+=`${c};
`),l(e.rtcCenter)?(t=t.replace(/in\s+vec(?:3|4)\s+position3DHigh;/g,""),t=t.replace(/in\s+vec(?:3|4)\s+position3DLow;/g,""),i+=`uniform mat4 u_modifiedModelView;
`,r+=`in vec4 position;
`,a+=`${c}
{
    return u_modifiedModelView * position;
}

`,t=t.replace(/czm_modelViewRelativeToEye\s+\*\s+/g,""),t=t.replace(/czm_modelViewProjectionRelativeToEye/g,"czm_projection")):n?a+=`${c}
{
    return czm_translateRelativeToEye(${s}3DHigh, ${s}3DLow);
}

`:(r+=`in vec3 ${s}2DHigh;
in vec3 ${s}2DLow;
`,a+=`${c}
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

`)}return[i,r,t,a].join(`
`)};rt._appendShowToShader=function(e,t){return l(e._batchTableAttributeIndices.show)?`${it.replaceMain(t,"czm_non_show_main")}
void main() 
{ 
    czm_non_show_main(); 
    gl_Position *= czm_batchTable_show(batchId); 
}`:t};rt._updateColorAttribute=function(e,t,n){if(!l(e._batchTableAttributeIndices.color)&&!l(e._batchTableAttributeIndices.depthFailColor)||t.search(/in\s+vec4\s+color;/g)===-1)return t;if(n&&!l(e._batchTableAttributeIndices.depthFailColor))throw new w("A depthFailColor per-instance attribute is required when using a depth fail appearance that uses a color attribute.");let o=t;return o=o.replace(/in\s+vec4\s+color;/g,""),n?o=o.replace(/(\b)color(\b)/g,"$1czm_batchTable_depthFailColor(batchId)$2"):o=o.replace(/(\b)color(\b)/g,"$1czm_batchTable_color(batchId)$2"),o};function hu(e){return`${it.replaceMain(e,"czm_non_pick_main")}
out vec4 v_pickColor; 
void main() 
{ 
    czm_non_pick_main(); 
    v_pickColor = czm_batchTable_pickColor(batchId); 
}`}function lu(e){return`in vec4 v_pickColor;
${e}`}rt._updatePickColorAttribute=function(e){let t=e.replace(/in\s+vec4\s+pickColor;/g,"");return t=t.replace(/(\b)pickColor(\b)/g,"$1czm_batchTable_pickColor(batchId)$2"),t};rt._appendOffsetToShader=function(e,t){if(!l(e._batchTableAttributeIndices.offset))return t;let n=`in float batchId;
`;n+="in float applyOffset;";let o=t.replace(/in\s+float\s+batchId;/g,n),i=`vec4 $1 = czm_computePosition();
`;return i+=`    if (czm_sceneMode == czm_sceneMode3D)
`,i+=`    {
`,i+="        $1 = $1 + vec4(czm_batchTable_offset(batchId) * applyOffset, 0.0);",i+=`    }
`,i+=`    else
`,i+=`    {
`,i+="        $1 = $1 + vec4(czm_batchTable_offset2D(batchId) * applyOffset, 0.0);",i+=`    }
`,o=o.replace(/vec4\s+([A-Za-z0-9_]+)\s+=\s+czm_computePosition\(\);/g,i),o};rt._appendDistanceDisplayConditionToShader=function(e,t,n){if(!l(e._batchTableAttributeIndices.distanceDisplayCondition))return t;const o=it.replaceMain(t,"czm_non_distanceDisplayCondition_main");let i=`void main() 
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
${i}`};function uu(e,t){if(!e.compressVertices)return t;const n=t.search(/in\s+vec3\s+normal;/g)!==-1,o=t.search(/in\s+vec2\s+st;/g)!==-1;if(!n&&!o)return t;const i=t.search(/in\s+vec3\s+tangent;/g)!==-1,r=t.search(/in\s+vec3\s+bitangent;/g)!==-1;let a=o&&n?2:1;a+=i||r?1:0;const s=a>1?`vec${a}`:"float",c="compressedAttributes",f=`in ${s} ${c};`;let d="",u="";if(o){d+=`vec2 st;
`;const g=a>1?`${c}.x`:c;u+=`    st = czm_decompressTextureCoordinates(${g});
`}n&&i&&r?(d+=`vec3 normal;
vec3 tangent;
vec3 bitangent;
`,u+=`    czm_octDecode(${c}.${o?"yz":"xy"}, normal, tangent, bitangent);
`):(n&&(d+=`vec3 normal;
`,u+=`    normal = czm_octDecode(${c}${a>1?`.${o?"y":"x"}`:""});
`),i&&(d+=`vec3 tangent;
`,u+=`    tangent = czm_octDecode(${c}.${o&&n?"z":"y"});
`),r&&(d+=`vec3 bitangent;
`,u+=`    bitangent = czm_octDecode(${c}.${o&&n?"z":"y"});
`));let m=t;m=m.replace(/in\s+vec3\s+normal;/g,""),m=m.replace(/in\s+vec2\s+st;/g,""),m=m.replace(/in\s+vec3\s+tangent;/g,""),m=m.replace(/in\s+vec3\s+bitangent;/g,""),m=it.replaceMain(m,"czm_non_compressed_main");const _=`void main() 
{ 
${u}    czm_non_compressed_main(); 
}`;return[f,d,m,_].join(`
`)}function uA(e){let t=it.replaceMain(e,"czm_non_depth_clamp_main");return t+=`void main() {
    czm_non_depth_clamp_main();
    gl_Position = czm_depthClamp(gl_Position);}
`,t}function dA(e){let t=it.replaceMain(e,"czm_non_depth_clamp_main");return t+=`void main() {
    czm_non_depth_clamp_main();
    #if defined(LOG_DEPTH)
        czm_writeLogDepth();
    #else
        czm_writeDepthClamp();
    #endif
}
`,t}function du(e,t){const n=e.vertexAttributes;for(const o in n)if(n.hasOwnProperty(o)&&!l(t[o]))throw new w(`Appearance/Geometry mismatch.  The appearance requires vertex shader attribute input '${o}', which was not computed as part of the Geometry.  Use the appearance's vertexFormat property when constructing the geometry.`)}function mA(e,t){return function(){return e[t]}}const xc=Math.max(xt.hardwareConcurrency-1,1);let Ia;const pA=new St("combineGeometry");function _A(e,t){let n,o,i,r;const a=e._instanceIds;if(e._state===Tt.READY){n=Array.isArray(e.geometryInstances)?e.geometryInstances:[e.geometryInstances];const s=e._numberOfInstances=n.length,c=[];let f=[];for(i=0;i<s;++i){if(o=n[i].geometry,a.push(n[i].id),l(o._workerName)&&l(o._workerPath)||!l(o._workerName)&&!l(o._workerPath))throw new w("Must define either _workerName or _workerPath for asynchronous geometry.");f.push({moduleName:o._workerName,modulePath:o._workerPath,geometry:o})}if(!l(Ia))for(Ia=new Array(xc),i=0;i<xc;i++)Ia[i]=new St("createGeometry");let d;for(f=Bw(f,xc),i=0;i<f.length;i++){let u=0;const m=f[i],_=m.length;for(r=0;r<_;++r)d=m[r],o=d.geometry,l(o.constructor.pack)&&(d.offset=u,u+=o.constructor.packedLength??o.packedLength);let g;if(u>0){const y=new Float64Array(u);for(g=[y.buffer],r=0;r<_;++r)d=m[r],o=d.geometry,l(o.constructor.pack)&&(o.constructor.pack(o,y,d.offset),d.geometry=y)}c.push(Ia[i].scheduleTask({subTasks:f[i]},g))}e._state=Tt.CREATING,Promise.all(c).then(function(u){e._createGeometryResults=u,e._state=Tt.CREATED}).catch(function(u){wr(e,t,Tt.FAILED,u)})}else if(e._state===Tt.CREATED){const s=[];n=Array.isArray(e.geometryInstances)?e.geometryInstances:[e.geometryInstances];const c=t.scene3DOnly,f=t.mapProjection,d=pA.scheduleTask(Gn.packCombineGeometryParameters({createGeometryResults:e._createGeometryResults,instances:n,ellipsoid:f.ellipsoid,projection:f,elementIndexUintSupported:t.context.elementIndexUint,scene3DOnly:c,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e._createPickOffsets},s),s);e._createGeometryResults=void 0,e._state=Tt.COMBINING,Promise.resolve(d).then(function(u){const m=Gn.unpackCombineGeometryResults(u);e._geometries=m.geometries,e._attributeLocations=m.attributeLocations,e.modelMatrix=U.clone(m.modelMatrix,e.modelMatrix),e._pickOffsets=m.pickOffsets,e._offsetInstanceExtend=m.offsetInstanceExtend,e._instanceBoundingSpheres=m.boundingSpheres,e._instanceBoundingSpheresCV=m.boundingSpheresCV,l(e._geometries)&&e._geometries.length>0?(e._recomputeBoundingSpheres=!0,e._state=Tt.COMBINED):wr(e,t,Tt.FAILED,void 0)}).catch(function(u){wr(e,t,Tt.FAILED,u)})}}function gA(e,t){const n=Array.isArray(e.geometryInstances)?e.geometryInstances:[e.geometryInstances],o=e._numberOfInstances=n.length,i=new Array(o),r=e._instanceIds;let a,s,c=0;for(s=0;s<o;s++){a=n[s];const m=a.geometry;let _;l(m.attributes)&&l(m.primitiveType)?_=fA(m):_=m.constructor.createGeometry(m),i[c++]=hA(a,_),r.push(a.id)}i.length=c;const f=t.scene3DOnly,d=t.mapProjection,u=Gn.combineGeometry({instances:i,ellipsoid:d.ellipsoid,projection:d,elementIndexUintSupported:t.context.elementIndexUint,scene3DOnly:f,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e._createPickOffsets});e._geometries=u.geometries,e._attributeLocations=u.attributeLocations,e.modelMatrix=U.clone(u.modelMatrix,e.modelMatrix),e._pickOffsets=u.pickOffsets,e._offsetInstanceExtend=u.offsetInstanceExtend,e._instanceBoundingSpheres=u.boundingSpheres,e._instanceBoundingSpheresCV=u.boundingSpheresCV,l(e._geometries)&&e._geometries.length>0?(e._recomputeBoundingSpheres=!0,e._state=Tt.COMBINED):wr(e,t,Tt.FAILED,void 0)}function yA(e,t){const n=e._batchTableAttributeIndices.offset;if(!e._recomputeBoundingSpheres||!l(n)){e._recomputeBoundingSpheres=!1;return}let o;const i=e._offsetInstanceExtend,r=e._instanceBoundingSpheres,a=r.length;let s=e._tempBoundingSpheres;if(!l(s)){for(s=new Array(a),o=0;o<a;o++)s[o]=new ie;e._tempBoundingSpheres=s}for(o=0;o<a;++o){let y=s[o];const E=e._batchTable.getBatchedAttribute(o,n,new h);y=r[o].clone(y),vm(y,E,i[o])}const c=[],f=[],d=[];for(o=0;o<a;++o){const y=s[o];y.center.x-y.radius>0||ie.intersectPlane(y,De.ORIGIN_ZX_PLANE)!==bt.INTERSECTING?c.push(y):(f.push(y),d.push(y))}let u=c[0],m=d[0],_=f[0];for(o=1;o<c.length;o++)u=ie.union(u,c[o]);for(o=1;o<d.length;o++)m=ie.union(m,d[o]);for(o=1;o<f.length;o++)_=ie.union(_,f[o]);const g=[];for(l(u)&&g.push(u),l(m)&&g.push(m),l(_)&&g.push(_),o=0;o<g.length;o++){const y=g[o].clone(e._boundingSpheres[o]);e._boundingSpheres[o]=y,e._boundingSphereCV[o]=ie.projectTo2D(y,t.mapProjection,e._boundingSphereCV[o])}rt._updateBoundingVolumes(e,t,e.modelMatrix,!0),e._recomputeBoundingSpheres=!1}const mu=new at,bm=new le,Em=new h,wm=new ie;function bA(e,t){if(!l(e._batchTableAttributeIndices.distanceDisplayCondition)||e._batchTableBoundingSpheresUpdated)return;const o=e._batchTableBoundingSphereAttributeIndices,i=o.center3DHigh,r=o.center3DLow,a=o.center2DHigh,s=o.center2DLow,c=o.radius,f=t.mapProjection,d=f.ellipsoid,u=e._batchTable,m=e._instanceBoundingSpheres,_=m.length;for(let g=0;g<_;++g){let y=m[g];if(!l(y))continue;const E=e.modelMatrix;l(E)&&(y=ie.transform(y,E,wm));const A=y.center,S=y.radius;let O=at.fromCartesian(A,mu);if(u.setBatchedAttribute(g,i,O.high),u.setBatchedAttribute(g,r,O.low),!t.scene3DOnly){const M=d.cartesianToCartographic(A,bm),R=f.project(M,Em);O=at.fromCartesian(R,mu),u.setBatchedAttribute(g,a,O.high),u.setBatchedAttribute(g,s,O.low)}u.setBatchedAttribute(g,c,S)}e._batchTableBoundingSpheresUpdated=!0}const Oc=new h,EA=new h;function pu(e,t){if(!l(e._batchTableAttributeIndices.offset)||e._batchTableOffsetsUpdated||t.scene3DOnly)return;const o=e._batchTableOffsetAttribute2DIndex,i=t.mapProjection,r=i.ellipsoid,a=e._batchTable,s=e._instanceBoundingSpheres,c=s.length;for(let f=0;f<c;++f){let d=s[f];if(!l(d))continue;const u=a.getBatchedAttribute(f,e._batchTableAttributeIndices.offset);if(h.equals(u,h.ZERO)){a.setBatchedAttribute(f,o,h.ZERO);continue}const m=e.modelMatrix;l(m)&&(d=ie.transform(d,m,wm));let _=d.center;_=r.scaleToGeodeticSurface(_,EA);let g=r.cartesianToCartographic(_,bm);const y=i.project(g,Em),E=h.add(u,_,Oc);g=r.cartesianToCartographic(E,g);const A=i.project(g,Oc),S=h.subtract(A,y,Oc),O=S.x;S.x=S.z,S.z=S.y,S.y=O,a.setBatchedAttribute(f,o,S)}e._batchTableOffsetsUpdated=!0}function wA(e,t){const n=e._attributeLocations,o=e._geometries,i=t.scene3DOnly,r=t.context,a=[],s=o.length;for(let c=0;c<s;++c){const f=o[c];if(a.push(Un.fromGeometry({context:r,geometry:f,attributeLocations:n,bufferUsage:Nn.STATIC_DRAW,interleave:e._interleave})),l(e._createBoundingVolumeFunction))e._createBoundingVolumeFunction(t,f);else if(e._boundingSpheres.push(ie.clone(f.boundingSphere)),e._boundingSphereWC.push(new ie),!i){const d=f.boundingSphereCV.center,u=d.x,m=d.y,_=d.z;d.x=_,d.y=u,d.z=m,e._boundingSphereCV.push(ie.clone(f.boundingSphereCV)),e._boundingSphere2D.push(new ie),e._boundingSphereMorph.push(new ie)}}e._va=a,e._primitiveType=o[0].primitiveType,e.releaseGeometryInstances&&(e.geometryInstances=void 0),e._geometries=void 0,wr(e,t,Tt.COMPLETE,void 0)}function vA(e,t,n,o){let i=n.getRenderState(),r;o?(r=en(i,!1),r.cull={enabled:!0,face:mr.BACK},e._frontFaceRS=Ut.fromCache(r),r.cull.face=mr.FRONT,e._backFaceRS=Ut.fromCache(r)):(e._frontFaceRS=Ut.fromCache(i),e._backFaceRS=e._frontFaceRS),r=en(i,!1),l(e._depthFailAppearance)&&(r.depthTest.enabled=!1),l(e._depthFailAppearance)&&(i=e._depthFailAppearance.getRenderState(),r=en(i,!1),r.depthTest.func=NS.GREATER,o?(r.cull={enabled:!0,face:mr.BACK},e._frontFaceDepthFailRS=Ut.fromCache(r),r.cull.face=mr.FRONT,e._backFaceDepthFailRS=Ut.fromCache(r)):(e._frontFaceDepthFailRS=Ut.fromCache(r),e._backFaceDepthFailRS=e._frontFaceRS))}function TA(e,t,n){const o=t.context,i=e._attributeLocations;let r=e._batchTable.getVertexShaderCallback()(n.vertexShaderSource);r=rt._appendOffsetToShader(e,r),r=rt._appendShowToShader(e,r),r=rt._appendDistanceDisplayConditionToShader(e,r,t.scene3DOnly),r=hu(r),r=rt._updateColorAttribute(e,r,!1),r=uu(e,r),r=rt._modifyShaderPosition(e,r,t.scene3DOnly);let a=n.getFragmentShaderSource();a=lu(a),e._sp=Bn.replaceCache({context:o,shaderProgram:e._sp,vertexShaderSource:r,fragmentShaderSource:a,attributeLocations:i}),du(e._sp,i),l(e._depthFailAppearance)&&(r=e._batchTable.getVertexShaderCallback()(e._depthFailAppearance.vertexShaderSource),r=rt._appendShowToShader(e,r),r=rt._appendDistanceDisplayConditionToShader(e,r,t.scene3DOnly),r=hu(r),r=rt._updateColorAttribute(e,r,!0),r=uu(e,r),r=rt._modifyShaderPosition(e,r,t.scene3DOnly),r=uA(r),a=e._depthFailAppearance.getFragmentShaderSource(),a=lu(a),a=dA(a),e._spDepthFail=Bn.replaceCache({context:o,shaderProgram:e._spDepthFail,vertexShaderSource:r,fragmentShaderSource:a,attributeLocations:i}),du(e._spDepthFail,i))}const cr=new U,_u=new h;function gu(e,t,n,o){const i=l(n)?n._uniforms:void 0,r={},a=t.uniforms;if(l(a)){for(const c in a)if(a.hasOwnProperty(c)){if(l(i)&&l(i[c]))throw new w(`Appearance and material have a uniform with the same name: ${c}`);r[c]=mA(a,c)}}let s=nn(r,i);return s=e._batchTable.getUniformMapCallback()(s),l(e.rtcCenter)&&(s.u_modifiedModelView=function(){const c=o.context.uniformState.view;return U.multiply(c,e._modelMatrix,cr),U.multiplyByPoint(cr,e.rtcCenter,_u),U.setTranslation(cr,_u,cr),cr}),s}function SA(e,t,n,o,i,r,a,s){const c=gu(e,t,n,s);let f;l(e._depthFailAppearance)&&(f=gu(e,e._depthFailAppearance,e._depthFailAppearance.material,s));const d=o?Si.TRANSLUCENT:Si.OPAQUE;let u=i?2:1;u*=l(e._depthFailAppearance)?2:1,r.length=e._va.length*u;const m=r.length;let _=0;for(let g=0;g<m;++g){let y;i&&(y=r[g],l(y)||(y=r[g]=new $n({owner:e,primitiveType:e._primitiveType})),y.vertexArray=e._va[_],y.renderState=e._backFaceRS,y.shaderProgram=e._sp,y.uniformMap=c,y.pass=d,++g),y=r[g],l(y)||(y=r[g]=new $n({owner:e,primitiveType:e._primitiveType})),y.vertexArray=e._va[_],y.renderState=e._frontFaceRS,y.shaderProgram=e._sp,y.uniformMap=c,y.pass=d,l(e._depthFailAppearance)&&(i&&(++g,y=r[g],l(y)||(y=r[g]=new $n({owner:e,primitiveType:e._primitiveType})),y.vertexArray=e._va[_],y.renderState=e._backFaceDepthFailRS,y.shaderProgram=e._spDepthFail,y.uniformMap=f,y.pass=d),++g,y=r[g],l(y)||(y=r[g]=new $n({owner:e,primitiveType:e._primitiveType})),y.vertexArray=e._va[_],y.renderState=e._frontFaceDepthFailRS,y.shaderProgram=e._spDepthFail,y.uniformMap=f,y.pass=d),++_}}rt._updateBoundingVolumes=function(e,t,n,o){let i,r,a;if(o||!U.equals(n,e._modelMatrix))for(U.clone(n,e._modelMatrix),r=e._boundingSpheres.length,i=0;i<r;++i)a=e._boundingSpheres[i],l(a)&&(e._boundingSphereWC[i]=ie.transform(a,n,e._boundingSphereWC[i]),t.scene3DOnly||(e._boundingSphere2D[i]=ie.clone(e._boundingSphereCV[i],e._boundingSphere2D[i]),e._boundingSphereMorph[i]=ie.union(e._boundingSphereWC[i],e._boundingSphereCV[i])));const s=e.appearance.pixelSize;if(l(s))for(r=e._boundingSpheres.length,i=0;i<r;++i){a=e._boundingSpheres[i];const c=e._boundingSphereWC[i],d=t.camera.getPixelSize(a,t.context.drawingBufferWidth,t.context.drawingBufferHeight)*s;c.radius=a.radius+d}};function AA(e,t,n,o,i,r,a,s){if(t.mode!==st.SCENE3D&&!U.equals(i,U.IDENTITY))throw new w("Primitive.modelMatrix is only supported in 3D mode.");rt._updateBoundingVolumes(e,t,i);let c;t.mode===st.SCENE3D?c=e._boundingSphereWC:t.mode===st.COLUMBUS_VIEW?c=e._boundingSphereCV:t.mode===st.SCENE2D&&l(e._boundingSphere2D)?c=e._boundingSphere2D:l(e._boundingSphereMorph)&&(c=e._boundingSphereMorph);const f=t.commandList,d=t.passes;if(d.render||d.pick){const u=e.allowPicking,m=cf.castShadows(e.shadows),_=cf.receiveShadows(e.shadows),g=n.length;let y=s?2:1;y*=l(e._depthFailAppearance)?2:1;for(let E=0;E<g;++E){const A=Math.floor(E/y),S=n[E];S.modelMatrix=i,S.boundingVolume=c[A],S.cull=r,S.debugShowBoundingVolume=a,S.castShadows=m,S.receiveShadows=_,u?S.pickId="v_pickColor":S.pickId=void 0,f.push(S)}}}rt.prototype.update=function(e){if(!l(this.geometryInstances)&&this._va.length===0||l(this.geometryInstances)&&Array.isArray(this.geometryInstances)&&this.geometryInstances.length===0||!l(this.appearance)||e.mode!==st.SCENE3D&&e.scene3DOnly||!e.passes.render&&!e.passes.pick)return;if(l(this._error))throw this._error;if(l(this.rtcCenter)&&!e.scene3DOnly)throw new w("RTC rendering is only available for 3D only scenes.");if(this._state===Tt.FAILED)return;const t=e.context;if(l(this._batchTable)||sA(this,t),this._batchTable.attributes.length>0){if(Ie.maximumVertexTextureImageUnits===0)throw new mt("Vertex texture fetch support is required to render primitives with per-instance attributes. The maximum number of vertex texture image units must be greater than zero.");this._batchTable.update(e)}if(this._state!==Tt.COMPLETE&&this._state!==Tt.COMBINED&&(this.asynchronous?_A(this,e):gA(this,e)),this._state===Tt.COMBINED&&(bA(this,e),pu(this,e),wA(this,e)),!this.show||this._state!==Tt.COMPLETE)return;this._batchTableOffsetsUpdated||pu(this,e),this._recomputeBoundingSpheres&&yA(this,e);const n=this.appearance,o=n.material;let i=!1,r=!1;this._appearance!==n?(this._appearance=n,this._material=o,i=!0,r=!0):this._material!==o&&(this._material=o,r=!0);const a=this.depthFailAppearance,s=l(a)?a.material:void 0;this._depthFailAppearance!==a?(this._depthFailAppearance=a,this._depthFailMaterial=s,i=!0,r=!0):this._depthFailMaterial!==s&&(this._depthFailMaterial=s,r=!0);const c=this._appearance.isTranslucent();this._translucent!==c&&(this._translucent=c,i=!0),l(this._material)&&this._material.update(t);const f=n.closed&&c;i&&(this._createRenderStatesFunction??vA)(this,t,n,f),r&&(this._createShaderProgramFunction??TA)(this,e,n),(i||r)&&(this._createCommandsFunction??SA)(this,n,o,c,f,this._colorCommands,this._pickCommands,e),(this._updateAndQueueCommandsFunction??AA)(this,e,this._colorCommands,this._pickCommands,this.modelMatrix,this.cull,this.debugShowBoundingVolume,f)};const xA=new ie,OA=new ie;function vm(e,t,n){if(n===ss.TOP){const o=ie.clone(e,xA),i=ie.clone(e,OA);i.center=h.add(i.center,t,i.center),e=ie.union(o,i,e)}else n===ss.ALL&&(e.center=h.add(e.center,t,e.center));return e}function CA(e,t,n){return function(){const o=e.getBatchedAttribute(t,n),i=e.attributes[n],r=i.componentsPerAttribute,a=ue.createTypedArray(i.componentDatatype,r);return l(o.constructor.pack)?o.constructor.pack(o,a,0):a[0]=o,a}}function MA(e,t,n,o,i){return function(r){if(!l(r)||!l(r.length)||r.length<1||r.length>4)throw new w("value must be and array with length between 1 and 4.");const a=ym(r);e.setBatchedAttribute(t,n,a),i==="offset"&&(o._recomputeBoundingSpheres=!0,o._batchTableOffsetsUpdated=!1)}}const RA=new h;function PA(e,t,n){t.boundingSphere={get:function(){let o=e._instanceBoundingSpheres[n];if(l(o)){o=o.clone();const i=e.modelMatrix,r=t.offset;l(r)&&vm(o,h.fromArray(r.get(),0,RA),e._offsetInstanceExtend[n]),l(i)&&(o=ie.transform(o,i))}return o}},t.boundingSphereCV={get:function(){return e._instanceBoundingSpheresCV[n]}}}function IA(e,t,n){t.pickId={get:function(){return e._pickIds[n]}}}rt.prototype.getGeometryInstanceAttributes=function(e){if(!l(e))throw new w("id is required");if(!l(this._batchTable))throw new w("must call update before calling getGeometryInstanceAttributes");let t=this._perInstanceAttributeCache.get(e);if(l(t))return t;let n=-1;const o=this._lastPerInstanceAttributeIndex,i=this._instanceIds,r=i.length;for(let f=0;f<r;++f){const d=(o+f)%r;if(e===i[d]){n=d;break}}if(n===-1)return;const a=this._batchTable,s=this._batchTableAttributeIndices;t={};const c={};for(const f in s)if(s.hasOwnProperty(f)){const d=s[f];c[f]={get:CA(a,n,d),set:MA(a,n,d,this,f)}}return PA(this,c,n),IA(this,c,n),Object.defineProperties(t,c),this._lastPerInstanceAttributeIndex=n,this._perInstanceAttributeCache.set(e,t),t};rt.prototype.isDestroyed=function(){return!1};rt.prototype.destroy=function(){let e,t;this._sp=this._sp&&this._sp.destroy(),this._spDepthFail=this._spDepthFail&&this._spDepthFail.destroy();const n=this._va;for(e=n.length,t=0;t<e;++t)n[t].destroy();this._va=void 0;const o=this._pickIds;for(e=o.length,t=0;t<e;++t)o[t].destroy();return this._pickIds=void 0,this._batchTable=this._batchTable&&this._batchTable.destroy(),this._instanceIds=void 0,this._perInstanceAttributeCache=void 0,this._attributeLocations=void 0,Lt(this)};function wr(e,t,n,o){e._error=o,e._state=n,t.afterRender.push(function(){return e._ready=e._state===Tt.COMPLETE||e._state===Tt.FAILED,!0})}const zA=`void clipLineSegmentToNearPlane(
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
`,NA=`#ifdef VECTOR_TILE
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
`,DA=`in vec3 position3DHigh;
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
`;function Ot(e,t){e=e??xe.EMPTY_OBJECT,this._show=e.show??!0,this._width=e.width??1,this._loop=e.loop??!1,this._distanceDisplayCondition=e.distanceDisplayCondition,this._material=e.material,l(this._material)||(this._material=ee.fromType(ee.ColorType,{color:new x(1,1,1,1)}));let n=e.positions;l(n)||(n=[]),this._positions=n,this._actualPositions=ti(n,h.equalsEpsilon),this._loop&&this._actualPositions.length>2&&(this._actualPositions===this._positions&&(this._actualPositions=n.slice()),this._actualPositions.push(h.clone(this._actualPositions[0]))),this._length=this._actualPositions.length,this._id=e.id;let o;l(t)&&(o=U.clone(t.modelMatrix)),this._modelMatrix=o,this._segments=Zt.wrapLongitude(this._actualPositions,o),this._actualLength=void 0,this._propertiesChanged=new Uint32Array(Sm),this._polylineCollection=t,this._dirty=!1,this._pickId=void 0,this._boundingVolume=ie.fromPoints(this._actualPositions),this._boundingVolumeWC=ie.transform(this._boundingVolume,this._modelMatrix),this._boundingVolume2D=new ie}const Tm=Ot.POSITION_INDEX=0,LA=Ot.SHOW_INDEX=1,FA=Ot.WIDTH_INDEX=2,BA=Ot.MATERIAL_INDEX=3,vr=Ot.POSITION_SIZE_INDEX=4,UA=Ot.DISTANCE_DISPLAY_CONDITION=5,Sm=Ot.NUMBER_OF_PROPERTIES=6;function fo(e,t){++e._propertiesChanged[t];const n=e._polylineCollection;l(n)&&(n._updatePolyline(e,t),e._dirty=!0)}Object.defineProperties(Ot.prototype,{show:{get:function(){return this._show},set:function(e){if(!l(e))throw new w("value is required.");e!==this._show&&(this._show=e,fo(this,LA))}},positions:{get:function(){return this._positions},set:function(e){if(!l(e))throw new w("value is required.");let t=ti(e,h.equalsEpsilon);this._loop&&t.length>2&&(t===e&&(t=e.slice()),t.push(h.clone(t[0]))),(this._actualPositions.length!==t.length||this._actualPositions.length!==this._length)&&fo(this,vr),this._positions=e,this._actualPositions=t,this._length=t.length,this._boundingVolume=ie.fromPoints(this._actualPositions,this._boundingVolume),this._boundingVolumeWC=ie.transform(this._boundingVolume,this._modelMatrix,this._boundingVolumeWC),fo(this,Tm),this.update()}},material:{get:function(){return this._material},set:function(e){if(!l(e))throw new w("material is required.");this._material!==e&&(this._material=e,fo(this,BA))}},width:{get:function(){return this._width},set:function(e){if(!l(e))throw new w("value is required.");const t=this._width;e!==t&&(this._width=e,fo(this,FA))}},loop:{get:function(){return this._loop},set:function(e){if(!l(e))throw new w("value is required.");if(e!==this._loop){let t=this._actualPositions;e?t.length>2&&!h.equals(t[0],t[t.length-1])&&(t.length===this._positions.length&&(this._actualPositions=t=this._positions.slice()),t.push(h.clone(t[0]))):t.length>2&&h.equals(t[0],t[t.length-1])&&(t.length-1===this._positions.length?this._actualPositions=this._positions:t.pop()),this._loop=e,fo(this,vr)}}},id:{get:function(){return this._id},set:function(e){this._id=e,l(this._pickId)&&(this._pickId.object.id=e)}},pickId:{get:function(){return this._pickId}},isDestroyed:{get:function(){return!l(this._polylineCollection)}},distanceDisplayCondition:{get:function(){return this._distanceDisplayCondition},set:function(e){if(l(e)&&e.far<=e.near)throw new w("far distance must be greater than near distance.");ln.equals(e,this._distanceDisplayCondition)||(this._distanceDisplayCondition=ln.clone(e,this._distanceDisplayCondition),fo(this,UA))}}});Ot.prototype.update=function(){let e=U.IDENTITY;l(this._polylineCollection)&&(e=this._polylineCollection.modelMatrix);const t=this._segments.positions.length,n=this._segments.lengths,o=this._propertiesChanged[Tm]>0||this._propertiesChanged[vr]>0;if((!U.equals(e,this._modelMatrix)||o)&&(this._segments=Zt.wrapLongitude(this._actualPositions,e),this._boundingVolumeWC=ie.transform(this._boundingVolume,e,this._boundingVolumeWC)),this._modelMatrix=U.clone(e,this._modelMatrix),this._segments.positions.length!==t)fo(this,vr);else{const i=n.length;for(let r=0;r<i;++r)if(n[r]!==this._segments.lengths[r]){fo(this,vr);break}}};Ot.prototype.getPickId=function(e){return l(this._pickId)||(this._pickId=e.createPickId({primitive:this,collection:this._polylineCollection,id:this._id})),this._pickId};Ot.prototype._clean=function(){this._dirty=!1;const e=this._propertiesChanged;for(let t=0;t<Sm-1;++t)e[t]=0};Ot.prototype._destroy=function(){this._pickId=this._pickId&&this._pickId.destroy(),this._material=this._material&&this._material.destroy(),this._polylineCollection=void 0};const GA=Ot.SHOW_INDEX,qA=Ot.WIDTH_INDEX,ff=Ot.POSITION_INDEX,kA=Ot.MATERIAL_INDEX,yu=Ot.POSITION_SIZE_INDEX,jA=Ot.DISTANCE_DISPLAY_CONDITION,Am=Ot.NUMBER_OF_PROPERTIES,rn={texCoordExpandAndBatchIndex:0,position3DHigh:1,position3DLow:2,position2DHigh:3,position2DLow:4,prevPosition3DHigh:5,prevPosition3DLow:6,prevPosition2DHigh:7,prevPosition2DLow:8,nextPosition3DHigh:9,nextPosition3DLow:10,nextPosition2DHigh:11,nextPosition2DLow:12};function kn(e){e=e??xe.EMPTY_OBJECT,this.show=e.show??!0,this.modelMatrix=U.clone(e.modelMatrix??U.IDENTITY),this._modelMatrix=U.clone(U.IDENTITY),this.debugShowBoundingVolume=e.debugShowBoundingVolume??!1,this._opaqueRS=void 0,this._translucentRS=void 0,this._colorCommands=[],this._polylinesUpdated=!1,this._polylinesRemoved=!1,this._createVertexArray=!1,this._propertiesChanged=new Uint32Array(Am),this._polylines=[],this._polylineBuckets={},this._positionBufferUsage={bufferUsage:Nn.STATIC_DRAW,frameCount:0},this._mode=void 0,this._polylinesToUpdate=[],this._vertexArrays=[],this._positionBuffer=void 0,this._texCoordExpandAndBatchIndexBuffer=void 0,this._batchTable=void 0,this._createBatchTable=!1,this._useHighlightColor=!1,this._highlightColor=x.clone(x.WHITE);const t=this;this._uniformMap={u_highlightColor:function(){return t._highlightColor}}}Object.defineProperties(kn.prototype,{length:{get:function(){return Jf(this),this._polylines.length}}});kn.prototype.add=function(e){const t=new Ot(e,this);return t._index=this._polylines.length,this._polylines.push(t),this._createVertexArray=!0,this._createBatchTable=!0,t};kn.prototype.remove=function(e){if(this.contains(e)){if(this._polylinesRemoved=!0,this._createVertexArray=!0,this._createBatchTable=!0,l(e._bucket)){const t=e._bucket;t.shaderProgram=t.shaderProgram&&t.shaderProgram.destroy()}return e._destroy(),!0}return!1};kn.prototype.removeAll=function(){eh(this),Rm(this),this._polylineBuckets={},this._polylinesRemoved=!1,this._polylines.length=0,this._polylinesToUpdate.length=0,this._createVertexArray=!0};kn.prototype.contains=function(e){return l(e)&&e._polylineCollection===this};kn.prototype.get=function(e){if(!l(e))throw new w("index is required.");return Jf(this),this._polylines[e]};function VA(e,t){l(e._batchTable)&&e._batchTable.destroy();const n=[{functionName:"batchTable_getWidthAndShow",componentDatatype:ue.UNSIGNED_BYTE,componentsPerAttribute:2},{functionName:"batchTable_getPickColor",componentDatatype:ue.UNSIGNED_BYTE,componentsPerAttribute:4,normalize:!0},{functionName:"batchTable_getCenterHigh",componentDatatype:ue.FLOAT,componentsPerAttribute:3},{functionName:"batchTable_getCenterLowAndRadius",componentDatatype:ue.FLOAT,componentsPerAttribute:4},{functionName:"batchTable_getDistanceDisplayCondition",componentDatatype:ue.FLOAT,componentsPerAttribute:2}];e._batchTable=new no(t,n,e._polylines.length)}const xm=new at,Om=new Q,Cm=new V;kn.prototype.update=function(e){if(Jf(this),this._polylines.length===0||!this.show)return;ZA(this,e);const t=e.context,n=e.mapProjection;let o,i=this._propertiesChanged;if(this._createBatchTable){if(Ie.maximumVertexTextureImageUnits===0)throw new mt("Vertex texture fetch support is required to render polylines. The maximum number of vertex texture image units must be greater than zero.");VA(this,t),this._createBatchTable=!1}if(this._createVertexArray||WA(this))wu(this,t,n);else if(this._polylinesUpdated){const c=this._polylinesToUpdate;if(this._mode!==st.SCENE3D){const f=c.length;for(let d=0;d<f;++d)o=c[d],o.update()}if(i[yu]||i[kA])wu(this,t,n);else{const f=c.length,d=this._polylineBuckets;for(let u=0;u<f;++u){o=c[u],i=o._propertiesChanged;const m=o._bucket;let _=0;for(const g in d)if(d.hasOwnProperty(g)){if(d[g]===m){i[ff]&&m.writeUpdate(_,o,this._positionBuffer,n);break}_+=d[g].lengthOfPositions}if((i[GA]||i[qA])&&this._batchTable.setBatchedAttribute(o._index,0,new V(o._width,o._show)),this._batchTable.attributes.length>2){if(i[ff]||i[yu]){const g=e.mode===st.SCENE2D?o._boundingVolume2D:o._boundingVolumeWC,y=at.fromCartesian(g.center,xm),E=Q.fromElements(y.low.x,y.low.y,y.low.z,g.radius,Om);this._batchTable.setBatchedAttribute(o._index,2,y.high),this._batchTable.setBatchedAttribute(o._index,3,E)}if(i[jA]){const g=Cm;g.x=0,g.y=Number.MAX_VALUE;const y=o.distanceDisplayCondition;l(y)&&(g.x=y.near,g.y=y.far),this._batchTable.setBatchedAttribute(o._index,4,g)}}o._clean()}}c.length=0,this._polylinesUpdated=!1}i=this._propertiesChanged;for(let c=0;c<Am;++c)i[c]=0;let r=U.IDENTITY;e.mode===st.SCENE3D&&(r=this.modelMatrix);const a=e.passes,s=e.morphTime!==0;if((!l(this._opaqueRS)||this._opaqueRS.depthTest.enabled!==s)&&(this._opaqueRS=Ut.fromCache({depthMask:s,depthTest:{enabled:s}})),(!l(this._translucentRS)||this._translucentRS.depthTest.enabled!==s)&&(this._translucentRS=Ut.fromCache({blending:Qf.ALPHA_BLEND,depthMask:!s,depthTest:{enabled:s}})),this._batchTable.update(e),a.render||a.pick){const c=this._colorCommands;HA(this,e,c,r)}};const fr=new ie,bu=new ie;function HA(e,t,n,o){const i=t.context,r=t.commandList,a=n.length;let s=0,c=!0;const f=e._vertexArrays,d=e.debugShowBoundingVolume,m=e._batchTable.getUniformMapCallback(),_=f.length;for(let g=0;g<_;++g){const y=f[g],E=y.buckets,A=E.length;for(let S=0;S<A;++S){const O=E[S];let M=O.offset;const R=O.bucket.shaderProgram,N=O.bucket.polylines,F=N.length;let z,G,q=0,k,X;for(let b=0;b<F;++b){const v=N[b],C=$A(v._material);if(C!==z){if(l(z)&&q>0){const J=G.isTranslucent();s>=a?(k=new $n({owner:e}),n.push(k)):k=n[s],++s,X=nn(m(G._uniforms),e._uniformMap),k.boundingVolume=ie.clone(fr,k.boundingVolume),k.modelMatrix=o,k.shaderProgram=R,k.vertexArray=y.va,k.renderState=J?e._translucentRS:e._opaqueRS,k.pass=J?Si.TRANSLUCENT:Si.OPAQUE,k.debugShowBoundingVolume=d,k.pickId="v_pickColor",k.uniformMap=X,k.count=q,k.offset=M,M+=q,q=0,c=!0,r.push(k)}G=v._material,G.update(i),z=C}const D=v._locatorBuckets,H=D.length;for(let J=0;J<H;++J){const K=D[J];K.locator===O&&(q+=K.count)}let Z;t.mode===st.SCENE3D?Z=v._boundingVolumeWC:t.mode===st.COLUMBUS_VIEW?Z=v._boundingVolume2D:t.mode===st.SCENE2D?l(v._boundingVolume2D)&&(Z=ie.clone(v._boundingVolume2D,bu),Z.center.x=0):l(v._boundingVolumeWC)&&l(v._boundingVolume2D)&&(Z=ie.union(v._boundingVolumeWC,v._boundingVolume2D,bu)),c?(c=!1,ie.clone(Z,fr)):ie.union(Z,fr,fr)}l(z)&&q>0&&(s>=a?(k=new $n({owner:e}),n.push(k)):k=n[s],++s,X=nn(m(G._uniforms),e._uniformMap),k.boundingVolume=ie.clone(fr,k.boundingVolume),k.modelMatrix=o,k.shaderProgram=R,k.vertexArray=y.va,k.renderState=G.isTranslucent()?e._translucentRS:e._opaqueRS,k.pass=G.isTranslucent()?Si.TRANSLUCENT:Si.OPAQUE,k.debugShowBoundingVolume=d,k.pickId="v_pickColor",k.uniformMap=X,k.count=q,k.offset=M,c=!0,r.push(k)),z=void 0}}n.length=s}kn.prototype.isDestroyed=function(){return!1};kn.prototype.destroy=function(){return Mm(this),eh(this),Rm(this),this._batchTable=this._batchTable&&this._batchTable.destroy(),Lt(this)};function WA(e){let t=!1;const n=e._propertiesChanged,o=e._positionBufferUsage;return n[ff]?(o.bufferUsage!==Nn.STREAM_DRAW&&(t=!0,o.bufferUsage=Nn.STREAM_DRAW),o.frameCount=100):o.bufferUsage!==Nn.STATIC_DRAW&&(o.frameCount===0?(t=!0,o.bufferUsage=Nn.STATIC_DRAW):o.frameCount--),t}const Eu=[0,0,0];function wu(e,t,n){e._createVertexArray=!1,eh(e),Mm(e),XA(e);const o=[[]];let i=o[0];const r=e._batchTable,a=e._useHighlightColor,s=[0];let c=0;const f=[[]];let d=0;const u=e._polylineBuckets;let m,_;for(m in u)u.hasOwnProperty(m)&&(_=u[m],_.updateShader(t,r,a),d+=_.lengthOfPositions);if(d>0){const g=e._mode,y=new Float32Array(6*d*3),E=new Float32Array(d*4);let A,S=0,O=0,M=0;for(m in u)if(u.hasOwnProperty(m)){_=u[m],_.write(y,E,S,O,M,r,t,n),g===st.MORPHING&&(l(A)||(A=new Float32Array(6*d*3)),_.writeForMorph(A,S));const X=_.lengthOfPositions;S+=6*X*3,O+=X*4,M+=X*4,c=_.updateIndices(o,s,f,c)}const R=e._positionBufferUsage.bufferUsage,N=Nn.STATIC_DRAW;e._positionBuffer=At.createVertexBuffer({context:t,typedArray:y,usage:R});let F;l(A)&&(F=At.createVertexBuffer({context:t,typedArray:A,usage:R})),e._texCoordExpandAndBatchIndexBuffer=At.createVertexBuffer({context:t,typedArray:E,usage:N});const z=3*Float32Array.BYTES_PER_ELEMENT,G=4*Float32Array.BYTES_PER_ELEMENT;let q=0;const k=o.length;for(let X=0;X<k;++X)if(i=o[X],i.length>0){const b=new Uint16Array(i),v=At.createIndexBuffer({context:t,typedArray:b,usage:Nn.STATIC_DRAW,indexDatatype:gt.UNSIGNED_SHORT});q+=s[X];const C=6*(X*(z*T.SIXTY_FOUR_KILOBYTES)-q*z),D=z+C,H=z+D,Z=z+H,J=z+Z,K=z+J,te=X*(G*T.SIXTY_FOUR_KILOBYTES)-q*G,he=[{index:rn.position3DHigh,componentsPerAttribute:3,componentDatatype:ue.FLOAT,offsetInBytes:C,strideInBytes:6*z},{index:rn.position3DLow,componentsPerAttribute:3,componentDatatype:ue.FLOAT,offsetInBytes:D,strideInBytes:6*z},{index:rn.position2DHigh,componentsPerAttribute:3,componentDatatype:ue.FLOAT,offsetInBytes:C,strideInBytes:6*z},{index:rn.position2DLow,componentsPerAttribute:3,componentDatatype:ue.FLOAT,offsetInBytes:D,strideInBytes:6*z},{index:rn.prevPosition3DHigh,componentsPerAttribute:3,componentDatatype:ue.FLOAT,offsetInBytes:H,strideInBytes:6*z},{index:rn.prevPosition3DLow,componentsPerAttribute:3,componentDatatype:ue.FLOAT,offsetInBytes:Z,strideInBytes:6*z},{index:rn.prevPosition2DHigh,componentsPerAttribute:3,componentDatatype:ue.FLOAT,offsetInBytes:H,strideInBytes:6*z},{index:rn.prevPosition2DLow,componentsPerAttribute:3,componentDatatype:ue.FLOAT,offsetInBytes:Z,strideInBytes:6*z},{index:rn.nextPosition3DHigh,componentsPerAttribute:3,componentDatatype:ue.FLOAT,offsetInBytes:J,strideInBytes:6*z},{index:rn.nextPosition3DLow,componentsPerAttribute:3,componentDatatype:ue.FLOAT,offsetInBytes:K,strideInBytes:6*z},{index:rn.nextPosition2DHigh,componentsPerAttribute:3,componentDatatype:ue.FLOAT,offsetInBytes:J,strideInBytes:6*z},{index:rn.nextPosition2DLow,componentsPerAttribute:3,componentDatatype:ue.FLOAT,offsetInBytes:K,strideInBytes:6*z},{index:rn.texCoordExpandAndBatchIndex,componentsPerAttribute:4,componentDatatype:ue.FLOAT,vertexBuffer:e._texCoordExpandAndBatchIndexBuffer,offsetInBytes:te}];let we,Te,ve,Re;g===st.SCENE3D?(Te=e._positionBuffer,we="vertexBuffer",ve=Eu,Re="value"):g===st.SCENE2D||g===st.COLUMBUS_VIEW?(Te=Eu,we="value",ve=e._positionBuffer,Re="vertexBuffer"):(Te=F,we="vertexBuffer",ve=e._positionBuffer,Re="vertexBuffer"),he[0][we]=Te,he[1][we]=Te,he[2][Re]=ve,he[3][Re]=ve,he[4][we]=Te,he[5][we]=Te,he[6][Re]=ve,he[7][Re]=ve,he[8][we]=Te,he[9][we]=Te,he[10][Re]=ve,he[11][Re]=ve;const $e=new Un({context:t,attributes:he,indexBuffer:v});e._vertexArrays.push({va:$e,buckets:f[X]})}}}function YA(e,t){return t instanceof Kt?t.id:t}const za=[];function $A(e){const t=ee._uniformList[e.type],n=t.length;za.length=2*n;let o=0;for(let i=0;i<n;++i){const r=t[i];za[o]=r,za[o+1]=e._uniforms[r](),o+=2}return`${e.type}:${JSON.stringify(za,YA)}`}function XA(e){const t=e._mode,n=e._modelMatrix,o=e._polylineBuckets={},i=e._polylines,r=i.length;for(let a=0;a<r;++a){const s=i[a];if(s._actualPositions.length>1){s.update();const c=s.material;let f=o[c.type];l(f)||(f=o[c.type]=new oo(c,t,n)),f.addPolyline(s)}}}function ZA(e,t){const n=t.mode;(e._mode!==n||!U.equals(e._modelMatrix,e.modelMatrix))&&(e._mode=n,e._modelMatrix=U.clone(e.modelMatrix),e._createVertexArray=!0)}function Jf(e){if(e._polylinesRemoved){e._polylinesRemoved=!1;const t=[],n=[];let o=0,i;const r=e._polylines.length;for(let a=0;a<r;++a)i=e._polylines[a],i.isDestroyed||(i._index=o++,n.push(i),t.push(i));e._polylines=t,e._polylinesToUpdate=n}}function eh(e){const t=e._polylines,n=t.length;for(let o=0;o<n;++o)if(!t[o].isDestroyed){const i=t[o]._bucket;l(i)&&(i.shaderProgram=i.shaderProgram&&i.shaderProgram.destroy())}}function Mm(e){const t=e._vertexArrays.length;for(let n=0;n<t;++n)e._vertexArrays[n].va.destroy();e._vertexArrays.length=0}kn.prototype._updatePolyline=function(e,t){this._polylinesUpdated=!0,e._dirty||this._polylinesToUpdate.push(e),++this._propertiesChanged[t]};function Rm(e){const t=e._polylines,n=t.length;for(let o=0;o<n;++o)t[o].isDestroyed||t[o]._destroy()}function Cc(e,t,n){this.count=e,this.offset=t,this.bucket=n}function oo(e,t,n){this.polylines=[],this.lengthOfPositions=0,this.material=e,this.shaderProgram=void 0,this.mode=t,this.modelMatrix=n}oo.prototype.addPolyline=function(e){this.polylines.push(e),e._actualLength=this.getPolylinePositionsLength(e),this.lengthOfPositions+=e._actualLength,e._bucket=this};oo.prototype.updateShader=function(e,t,n){if(l(this.shaderProgram))return;const o=["DISTANCE_DISPLAY_CONDITION"];n&&o.push("VECTOR_TILE"),this.material.shaderSource.search(/in\s+float\s+v_polylineAngle;/g)!==-1&&o.push("POLYLINE_DASH"),xt.isInternetExplorer()||o.push("CLIP_POLYLINE");const i=new it({defines:o,sources:[`in vec4 v_pickColor;
`,this.material.shaderSource,NA]}),r=t.getVertexShaderCallback()(DA),a=new it({defines:o,sources:[zA,r]});this.shaderProgram=Bn.fromCache({context:e,vertexShaderSource:a,fragmentShaderSource:i,attributeLocations:rn})};function Pm(e){return h.dot(h.UNIT_X,e._boundingVolume.center)<0||e._boundingVolume.intersectPlane(De.ORIGIN_ZX_PLANE)===bt.INTERSECTING}oo.prototype.getPolylinePositionsLength=function(e){let t;if(this.mode===st.SCENE3D||!Pm(e))return t=e._actualPositions.length,t*4-4;let n=0;const o=e._segments.lengths;t=o.length;for(let i=0;i<t;++i)n+=o[i]*4-4;return n};const vt=new h,Tn=new h,Sn=new h,ms=new h,KA=new Q,QA=new V;oo.prototype.write=function(e,t,n,o,i,r,a,s){const c=this.mode,f=s.ellipsoid.maximumRadius*T.PI,d=this.polylines,u=d.length;for(let m=0;m<u;++m){const _=d[m],g=_.width,y=_.show&&g>0,E=_._index,A=this.getSegments(_,s),S=A.positions,O=A.lengths,M=S.length,R=_.getPickId(a).color;let N=0,F=0,z;for(let H=0;H<M;++H){H===0?_._loop?z=S[M-2]:(z=ms,h.subtract(S[0],S[1],z),h.add(S[0],z,z)):z=S[H-1],h.clone(z,Tn),h.clone(S[H],vt),H===M-1?_._loop?z=S[1]:(z=ms,h.subtract(S[M-1],S[M-2],z),h.add(S[M-1],z,z)):z=S[H+1],h.clone(z,Sn);const Z=O[N];H===F+Z&&(F+=Z,++N);const J=H-F===0,K=H===F+O[N]-1;c===st.SCENE2D&&(Tn.z=0,vt.z=0,Sn.z=0),(c===st.SCENE2D||c===st.MORPHING)&&(J||K)&&f-Math.abs(vt.x)<1&&((vt.x<0&&Tn.x>0||vt.x>0&&Tn.x<0)&&h.clone(vt,Tn),(vt.x<0&&Sn.x>0||vt.x>0&&Sn.x<0)&&h.clone(vt,Sn));const te=J?2:0,he=K?2:4;for(let we=te;we<he;++we){at.writeElements(vt,e,n),at.writeElements(Tn,e,n+6),at.writeElements(Sn,e,n+12);const Te=we-2<0?-1:1;t[i]=H/(M-1),t[i+1]=2*(we%2)-1,t[i+2]=Te,t[i+3]=E,n+=6*3,i+=4}}const G=KA;G.x=x.floatToByte(R.red),G.y=x.floatToByte(R.green),G.z=x.floatToByte(R.blue),G.w=x.floatToByte(R.alpha);const q=QA;q.x=g,q.y=y?1:0;const k=c===st.SCENE2D?_._boundingVolume2D:_._boundingVolumeWC,X=at.fromCartesian(k.center,xm),b=X.high,v=Q.fromElements(X.low.x,X.low.y,X.low.z,k.radius,Om),C=Cm;C.x=0,C.y=Number.MAX_VALUE;const D=_.distanceDisplayCondition;l(D)&&(C.x=D.near,C.y=D.far),r.setBatchedAttribute(E,0,q),r.setBatchedAttribute(E,1,G),r.attributes.length>2&&(r.setBatchedAttribute(E,2,b),r.setBatchedAttribute(E,3,v),r.setBatchedAttribute(E,4,C))}};const JA=new h,ex=new h,tx=new h,vu=new h;oo.prototype.writeForMorph=function(e,t){const n=this.modelMatrix,o=this.polylines,i=o.length;for(let r=0;r<i;++r){const a=o[r],s=a._segments.positions,c=a._segments.lengths,f=s.length;let d=0,u=0;for(let m=0;m<f;++m){let _;m===0?a._loop?_=s[f-2]:(_=vu,h.subtract(s[0],s[1],_),h.add(s[0],_,_)):_=s[m-1],_=U.multiplyByPoint(n,_,ex);const g=U.multiplyByPoint(n,s[m],JA);let y;m===f-1?a._loop?y=s[1]:(y=vu,h.subtract(s[f-1],s[f-2],y),h.add(s[f-1],y,y)):y=s[m+1],y=U.multiplyByPoint(n,y,tx);const E=c[d];m===u+E&&(u+=E,++d);const A=m-u===0,S=m===u+c[d]-1,O=A?2:0,M=S?2:4;for(let R=O;R<M;++R)at.writeElements(g,e,t),at.writeElements(_,e,t+6),at.writeElements(y,e,t+12),t+=6*3}}};const nx=new Array(1);oo.prototype.updateIndices=function(e,t,n,o){let i=n.length-1,r=new Cc(0,o,this);n[i].push(r);let a=0,s=e[e.length-1],c=0;s.length>0&&(c=s[s.length-1]+1);const f=this.polylines,d=f.length;for(let u=0;u<d;++u){const m=f[u];m._locatorBuckets=[];let _;if(this.mode===st.SCENE3D){_=nx;const y=m._actualPositions.length;if(y>0)_[0]=y;else continue}else _=m._segments.lengths;const g=_.length;if(g>0){let y=0;for(let E=0;E<g;++E){const A=_[E]-1;for(let S=0;S<A;++S)c+4>T.SIXTY_FOUR_KILOBYTES&&(m._locatorBuckets.push({locator:r,count:y}),y=0,t.push(4),s=[],e.push(s),c=0,r.count=a,a=0,o=0,r=new Cc(0,0,this),n[++i]=[r]),s.push(c,c+2,c+1),s.push(c+1,c+2,c+3),y+=6,a+=6,o+=6,c+=4}m._locatorBuckets.push({locator:r,count:y}),c+4>T.SIXTY_FOUR_KILOBYTES&&(t.push(0),s=[],e.push(s),c=0,r.count=a,o=0,a=0,r=new Cc(0,0,this),n[++i]=[r])}m._clean()}return r.count=a,o};oo.prototype.getPolylineStartIndex=function(e){const t=this.polylines;let n=0;const o=t.length;for(let i=0;i<o;++i){const r=t[i];if(r===e)break;n+=r._actualLength}return n};const Ei={positions:void 0,lengths:void 0},Tu=new Array(1),ox=new h,ix=new le;oo.prototype.getSegments=function(e,t){let n=e._actualPositions;if(this.mode===st.SCENE3D)return Tu[0]=n.length,Ei.positions=n,Ei.lengths=Tu,Ei;Pm(e)&&(n=e._segments.positions);const o=t.ellipsoid,i=[],r=this.modelMatrix,a=n.length;let s,c=ox;for(let f=0;f<a;++f)s=n[f],c=U.multiplyByPoint(r,s,c),i.push(t.project(o.cartesianToCartographic(c,ix)));if(i.length>0){e._boundingVolume2D=ie.fromPoints(i,e._boundingVolume2D);const f=e._boundingVolume2D.center;e._boundingVolume2D.center=new h(f.z,f.x,f.y)}return Ei.positions=i,Ei.lengths=e._segments.lengths,Ei};let Su;oo.prototype.writeUpdate=function(e,t,n,o){const i=this.mode,r=o.ellipsoid.maximumRadius*T.PI;let a=t._actualLength;if(a){e+=this.getPolylineStartIndex(t);let s=Su;const c=6*a*3;!l(s)||s.length<c?s=Su=new Float32Array(c):s.length>c&&(s=new Float32Array(s.buffer,0,c));const f=this.getSegments(t,o),d=f.positions,u=f.lengths;let m=0,_=0,g=0,y;a=d.length;for(let E=0;E<a;++E){E===0?t._loop?y=d[a-2]:(y=ms,h.subtract(d[0],d[1],y),h.add(d[0],y,y)):y=d[E-1],h.clone(y,Tn),h.clone(d[E],vt),E===a-1?t._loop?y=d[1]:(y=ms,h.subtract(d[a-1],d[a-2],y),h.add(d[a-1],y,y)):y=d[E+1],h.clone(y,Sn);const A=u[_];E===g+A&&(g+=A,++_);const S=E-g===0,O=E===g+u[_]-1;i===st.SCENE2D&&(Tn.z=0,vt.z=0,Sn.z=0),(i===st.SCENE2D||i===st.MORPHING)&&(S||O)&&r-Math.abs(vt.x)<1&&((vt.x<0&&Tn.x>0||vt.x>0&&Tn.x<0)&&h.clone(vt,Tn),(vt.x<0&&Sn.x>0||vt.x>0&&Sn.x<0)&&h.clone(vt,Sn));const M=S?2:0,R=O?2:4;for(let N=M;N<R;++N)at.writeElements(vt,s,m),at.writeElements(Tn,s,m+6),at.writeElements(Sn,s,m+12),m+=6*3}n.copyFromArrayView(s,6*3*Float32Array.BYTES_PER_ELEMENT*e)}};function rx(e,t,n){return e+(t-e)*n}const ax=e=>e,sx=e=>e*e,cx=e=>e*(2-e),fx=e=>e<.5?2*e*e:-1+(4-2*e)*e,hx=e=>e*e*e,lx=e=>{const t=e-1;return t*t*t+1},ux=e=>{if(e<.5)return 4*e*e*e;const t=2*e-2;return(t*t*t+2)/2},dx=e=>1-Math.cos(e*Zu),mx=e=>Math.sin(e*Zu),px=e=>-(Math.cos(t_*e)-1)/2,_x=e=>e===0?0:Math.pow(2,10*(e-1)),gx=e=>e===1?1:1-Math.pow(2,-10*e),yx=e=>e===0||e===1?e:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,Im={LINEAR_NONE:ax,QUADRATIC_IN:sx,QUADRATIC_OUT:cx,QUADRATIC_IN_OUT:fx,CUBIC_IN:hx,CUBIC_OUT:lx,CUBIC_IN_OUT:ux,SINUSOIDAL_IN:dx,SINUSOIDAL_OUT:mx,SINUSOIDAL_IN_OUT:px,EXPONENTIAL_IN:_x,EXPONENTIAL_OUT:gx,EXPONENTIAL_IN_OUT:yx};function bx(e,t){return e_(t-e)}const Mc={TRANSPARENT:0,MIN_8BIT:1/255,OPAQUE:1},so=e=>{let t=e.startsWith("#")?e.slice(1):e;t.length===3&&(t=t.split("").map(a=>a+a).join(""));const n=parseInt(t.slice(0,2),16),o=parseInt(t.slice(2,4),16),i=parseInt(t.slice(4,6),16),r=t.length===8?parseInt(t.slice(6,8),16):255;return[n/255,o/255,i/255,r/255]},co={LIGHTGRAY:"#d3d3d3",GRAY:"#808080",DARKGRAY:"#a9a9a9",AXIS_EAST:"#dc2626",AXIS_NORTH:"#16a34a",AXIS_UP:"#2563eb",LEAFLET_BLUE:"#3388ff",WUPP_BLUE:"#0078a8",WUPP_BLUE_DARK:"#123c6a"};so(co.LIGHTGRAY),so(co.GRAY),so(co.DARKGRAY),so(co.AXIS_EAST),so(co.AXIS_NORTH),so(co.AXIS_UP),so(co.LEAFLET_BLUE),so(co.WUPP_BLUE),so(co.WUPP_BLUE_DARK),Mc.MIN_8BIT,Mc.MIN_8BIT,Mc.MIN_8BIT;const th=(()=>{const e=new Set;return t=>{e.has(t)||(console.info(t),e.add(t))}})(),A4=(()=>{const e=new Set;return t=>{e.has(t)||(console.warn(t),e.add(t))}})();function Na(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ex={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(e,t){(function(n){e.exports=n()})(function(){return function n(o,i,r){function a(f,d){if(!i[f]){if(!o[f]){var u=typeof Na=="function"&&Na;if(!d&&u)return u(f,!0);if(s)return s(f,!0);var m=new Error("Cannot find module '"+f+"'");throw m.code="MODULE_NOT_FOUND",m}var _=i[f]={exports:{}};o[f][0].call(_.exports,function(g){var y=o[f][1][g];return a(y||g)},_,_.exports,n,o,i,r)}return i[f].exports}for(var s=typeof Na=="function"&&Na,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(n,o,i){(function(r){var a=r.MutationObserver||r.WebKitMutationObserver,s;if(a){var c=0,f=new a(g),d=r.document.createTextNode("");f.observe(d,{characterData:!0}),s=function(){d.data=c=++c%2}}else if(!r.setImmediate&&typeof r.MessageChannel<"u"){var u=new r.MessageChannel;u.port1.onmessage=g,s=function(){u.port2.postMessage(0)}}else"document"in r&&"onreadystatechange"in r.document.createElement("script")?s=function(){var E=r.document.createElement("script");E.onreadystatechange=function(){g(),E.onreadystatechange=null,E.parentNode.removeChild(E),E=null},r.document.documentElement.appendChild(E)}:s=function(){setTimeout(g,0)};var m,_=[];function g(){m=!0;for(var E,A,S=_.length;S;){for(A=_,_=[],E=-1;++E<S;)A[E]();S=_.length}m=!1}o.exports=y;function y(E){_.push(E)===1&&!m&&s()}}).call(this,typeof Yn<"u"?Yn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(n,o,i){var r=n(1);function a(){}var s={},c=["REJECTED"],f=["FULFILLED"],d=["PENDING"];o.exports=u;function u(R){if(typeof R!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,R!==a&&y(this,R)}u.prototype.catch=function(R){return this.then(null,R)},u.prototype.then=function(R,N){if(typeof R!="function"&&this.state===f||typeof N!="function"&&this.state===c)return this;var F=new this.constructor(a);if(this.state!==d){var z=this.state===f?R:N;_(F,z,this.outcome)}else this.queue.push(new m(F,R,N));return F};function m(R,N,F){this.promise=R,typeof N=="function"&&(this.onFulfilled=N,this.callFulfilled=this.otherCallFulfilled),typeof F=="function"&&(this.onRejected=F,this.callRejected=this.otherCallRejected)}m.prototype.callFulfilled=function(R){s.resolve(this.promise,R)},m.prototype.otherCallFulfilled=function(R){_(this.promise,this.onFulfilled,R)},m.prototype.callRejected=function(R){s.reject(this.promise,R)},m.prototype.otherCallRejected=function(R){_(this.promise,this.onRejected,R)};function _(R,N,F){r(function(){var z;try{z=N(F)}catch(G){return s.reject(R,G)}z===R?s.reject(R,new TypeError("Cannot resolve promise with itself")):s.resolve(R,z)})}s.resolve=function(R,N){var F=E(g,N);if(F.status==="error")return s.reject(R,F.value);var z=F.value;if(z)y(R,z);else{R.state=f,R.outcome=N;for(var G=-1,q=R.queue.length;++G<q;)R.queue[G].callFulfilled(N)}return R},s.reject=function(R,N){R.state=c,R.outcome=N;for(var F=-1,z=R.queue.length;++F<z;)R.queue[F].callRejected(N);return R};function g(R){var N=R&&R.then;if(R&&(typeof R=="object"||typeof R=="function")&&typeof N=="function")return function(){N.apply(R,arguments)}}function y(R,N){var F=!1;function z(X){F||(F=!0,s.reject(R,X))}function G(X){F||(F=!0,s.resolve(R,X))}function q(){N(G,z)}var k=E(q);k.status==="error"&&z(k.value)}function E(R,N){var F={};try{F.value=R(N),F.status="success"}catch(z){F.status="error",F.value=z}return F}u.resolve=A;function A(R){return R instanceof this?R:s.resolve(new this(a),R)}u.reject=S;function S(R){var N=new this(a);return s.reject(N,R)}u.all=O;function O(R){var N=this;if(Object.prototype.toString.call(R)!=="[object Array]")return this.reject(new TypeError("must be an array"));var F=R.length,z=!1;if(!F)return this.resolve([]);for(var G=new Array(F),q=0,k=-1,X=new this(a);++k<F;)b(R[k],k);return X;function b(v,C){N.resolve(v).then(D,function(H){z||(z=!0,s.reject(X,H))});function D(H){G[C]=H,++q===F&&!z&&(z=!0,s.resolve(X,G))}}}u.race=M;function M(R){var N=this;if(Object.prototype.toString.call(R)!=="[object Array]")return this.reject(new TypeError("must be an array"));var F=R.length,z=!1;if(!F)return this.resolve([]);for(var G=-1,q=new this(a);++G<F;)k(R[G]);return q;function k(X){N.resolve(X).then(function(b){z||(z=!0,s.resolve(q,b))},function(b){z||(z=!0,s.reject(q,b))})}}},{1:1}],3:[function(n,o,i){(function(r){typeof r.Promise!="function"&&(r.Promise=n(2))}).call(this,typeof Yn<"u"?Yn:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(n,o,i){var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P};function a(P,j){if(!(P instanceof j))throw new TypeError("Cannot call a class as a function")}function s(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var c=s();function f(){try{if(!c||!c.open)return!1;var P=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),j=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!P||j)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function d(P,j){P=P||[],j=j||{};try{return new Blob(P,j)}catch(W){if(W.name!=="TypeError")throw W;for(var L=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,Y=new L,$=0;$<P.length;$+=1)Y.append(P[$]);return Y.getBlob(j.type)}}typeof Promise>"u"&&n(3);var u=Promise;function m(P,j){j&&P.then(function(L){j(null,L)},function(L){j(L)})}function _(P,j,L){typeof j=="function"&&P.then(j),typeof L=="function"&&P.catch(L)}function g(P){return typeof P!="string"&&(console.warn(P+" used as a key, but it is not a string."),P=String(P)),P}function y(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var E="local-forage-detect-blob-support",A=void 0,S={},O=Object.prototype.toString,M="readonly",R="readwrite";function N(P){for(var j=P.length,L=new ArrayBuffer(j),Y=new Uint8Array(L),$=0;$<j;$++)Y[$]=P.charCodeAt($);return L}function F(P){return new u(function(j){var L=P.transaction(E,R),Y=d([""]);L.objectStore(E).put(Y,"key"),L.onabort=function($){$.preventDefault(),$.stopPropagation(),j(!1)},L.oncomplete=function(){var $=navigator.userAgent.match(/Chrome\/(\d+)/),W=navigator.userAgent.match(/Edge\//);j(W||!$||parseInt($[1],10)>=43)}}).catch(function(){return!1})}function z(P){return typeof A=="boolean"?u.resolve(A):F(P).then(function(j){return A=j,A})}function G(P){var j=S[P.name],L={};L.promise=new u(function(Y,$){L.resolve=Y,L.reject=$}),j.deferredOperations.push(L),j.dbReady?j.dbReady=j.dbReady.then(function(){return L.promise}):j.dbReady=L.promise}function q(P){var j=S[P.name],L=j.deferredOperations.pop();if(L)return L.resolve(),L.promise}function k(P,j){var L=S[P.name],Y=L.deferredOperations.pop();if(Y)return Y.reject(j),Y.promise}function X(P,j){return new u(function(L,Y){if(S[P.name]=S[P.name]||he(),P.db)if(j)G(P),P.db.close();else return L(P.db);var $=[P.name];j&&$.push(P.version);var W=c.open.apply(c,$);j&&(W.onupgradeneeded=function(re){var fe=W.result;try{fe.createObjectStore(P.storeName),re.oldVersion<=1&&fe.createObjectStore(E)}catch(de){if(de.name==="ConstraintError")console.warn('The database "'+P.name+'" has been upgraded from version '+re.oldVersion+" to version "+re.newVersion+', but the storage "'+P.storeName+'" already exists.');else throw de}}),W.onerror=function(re){re.preventDefault(),Y(W.error)},W.onsuccess=function(){var re=W.result;re.onversionchange=function(fe){fe.target.close()},L(re),q(P)}})}function b(P){return X(P,!1)}function v(P){return X(P,!0)}function C(P,j){if(!P.db)return!0;var L=!P.db.objectStoreNames.contains(P.storeName),Y=P.version<P.db.version,$=P.version>P.db.version;if(Y&&(P.version!==j&&console.warn('The database "'+P.name+`" can't be downgraded from version `+P.db.version+" to version "+P.version+"."),P.version=P.db.version),$||L){if(L){var W=P.db.version+1;W>P.version&&(P.version=W)}return!0}return!1}function D(P){return new u(function(j,L){var Y=new FileReader;Y.onerror=L,Y.onloadend=function($){var W=btoa($.target.result||"");j({__local_forage_encoded_blob:!0,data:W,type:P.type})},Y.readAsBinaryString(P)})}function H(P){var j=N(atob(P.data));return d([j],{type:P.type})}function Z(P){return P&&P.__local_forage_encoded_blob}function J(P){var j=this,L=j._initReady().then(function(){var Y=S[j._dbInfo.name];if(Y&&Y.dbReady)return Y.dbReady});return _(L,P,P),L}function K(P){G(P);for(var j=S[P.name],L=j.forages,Y=0;Y<L.length;Y++){var $=L[Y];$._dbInfo.db&&($._dbInfo.db.close(),$._dbInfo.db=null)}return P.db=null,b(P).then(function(W){return P.db=W,C(P)?v(P):W}).then(function(W){P.db=j.db=W;for(var re=0;re<L.length;re++)L[re]._dbInfo.db=W}).catch(function(W){throw k(P,W),W})}function te(P,j,L,Y){Y===void 0&&(Y=1);try{var $=P.db.transaction(P.storeName,j);L(null,$)}catch(W){if(Y>0&&(!P.db||W.name==="InvalidStateError"||W.name==="NotFoundError"))return u.resolve().then(function(){if(!P.db||W.name==="NotFoundError"&&!P.db.objectStoreNames.contains(P.storeName)&&P.version<=P.db.version)return P.db&&(P.version=P.db.version+1),v(P)}).then(function(){return K(P).then(function(){te(P,j,L,Y-1)})}).catch(L);L(W)}}function he(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function we(P){var j=this,L={db:null};if(P)for(var Y in P)L[Y]=P[Y];var $=S[L.name];$||($=he(),S[L.name]=$),$.forages.push(j),j._initReady||(j._initReady=j.ready,j.ready=J);var W=[];function re(){return u.resolve()}for(var fe=0;fe<$.forages.length;fe++){var de=$.forages[fe];de!==j&&W.push(de._initReady().catch(re))}var me=$.forages.slice(0);return u.all(W).then(function(){return L.db=$.db,b(L)}).then(function(_e){return L.db=_e,C(L,j._defaultConfig.version)?v(L):_e}).then(function(_e){L.db=$.db=_e,j._dbInfo=L;for(var Ae=0;Ae<me.length;Ae++){var Le=me[Ae];Le!==j&&(Le._dbInfo.db=L.db,Le._dbInfo.version=L.version)}})}function Te(P,j){var L=this;P=g(P);var Y=new u(function($,W){L.ready().then(function(){te(L._dbInfo,M,function(re,fe){if(re)return W(re);try{var de=fe.objectStore(L._dbInfo.storeName),me=de.get(P);me.onsuccess=function(){var _e=me.result;_e===void 0&&(_e=null),Z(_e)&&(_e=H(_e)),$(_e)},me.onerror=function(){W(me.error)}}catch(_e){W(_e)}})}).catch(W)});return m(Y,j),Y}function ve(P,j){var L=this,Y=new u(function($,W){L.ready().then(function(){te(L._dbInfo,M,function(re,fe){if(re)return W(re);try{var de=fe.objectStore(L._dbInfo.storeName),me=de.openCursor(),_e=1;me.onsuccess=function(){var Ae=me.result;if(Ae){var Le=Ae.value;Z(Le)&&(Le=H(Le));var Xe=P(Le,Ae.key,_e++);Xe!==void 0?$(Xe):Ae.continue()}else $()},me.onerror=function(){W(me.error)}}catch(Ae){W(Ae)}})}).catch(W)});return m(Y,j),Y}function Re(P,j,L){var Y=this;P=g(P);var $=new u(function(W,re){var fe;Y.ready().then(function(){return fe=Y._dbInfo,O.call(j)==="[object Blob]"?z(fe.db).then(function(de){return de?j:D(j)}):j}).then(function(de){te(Y._dbInfo,R,function(me,_e){if(me)return re(me);try{var Ae=_e.objectStore(Y._dbInfo.storeName);de===null&&(de=void 0);var Le=Ae.put(de,P);_e.oncomplete=function(){de===void 0&&(de=null),W(de)},_e.onabort=_e.onerror=function(){var Xe=Le.error?Le.error:Le.transaction.error;re(Xe)}}catch(Xe){re(Xe)}})}).catch(re)});return m($,L),$}function $e(P,j){var L=this;P=g(P);var Y=new u(function($,W){L.ready().then(function(){te(L._dbInfo,R,function(re,fe){if(re)return W(re);try{var de=fe.objectStore(L._dbInfo.storeName),me=de.delete(P);fe.oncomplete=function(){$()},fe.onerror=function(){W(me.error)},fe.onabort=function(){var _e=me.error?me.error:me.transaction.error;W(_e)}}catch(_e){W(_e)}})}).catch(W)});return m(Y,j),Y}function ht(P){var j=this,L=new u(function(Y,$){j.ready().then(function(){te(j._dbInfo,R,function(W,re){if(W)return $(W);try{var fe=re.objectStore(j._dbInfo.storeName),de=fe.clear();re.oncomplete=function(){Y()},re.onabort=re.onerror=function(){var me=de.error?de.error:de.transaction.error;$(me)}}catch(me){$(me)}})}).catch($)});return m(L,P),L}function pt(P){var j=this,L=new u(function(Y,$){j.ready().then(function(){te(j._dbInfo,M,function(W,re){if(W)return $(W);try{var fe=re.objectStore(j._dbInfo.storeName),de=fe.count();de.onsuccess=function(){Y(de.result)},de.onerror=function(){$(de.error)}}catch(me){$(me)}})}).catch($)});return m(L,P),L}function Ve(P,j){var L=this,Y=new u(function($,W){if(P<0){$(null);return}L.ready().then(function(){te(L._dbInfo,M,function(re,fe){if(re)return W(re);try{var de=fe.objectStore(L._dbInfo.storeName),me=!1,_e=de.openKeyCursor();_e.onsuccess=function(){var Ae=_e.result;if(!Ae){$(null);return}P===0||me?$(Ae.key):(me=!0,Ae.advance(P))},_e.onerror=function(){W(_e.error)}}catch(Ae){W(Ae)}})}).catch(W)});return m(Y,j),Y}function Et(P){var j=this,L=new u(function(Y,$){j.ready().then(function(){te(j._dbInfo,M,function(W,re){if(W)return $(W);try{var fe=re.objectStore(j._dbInfo.storeName),de=fe.openKeyCursor(),me=[];de.onsuccess=function(){var _e=de.result;if(!_e){Y(me);return}me.push(_e.key),_e.continue()},de.onerror=function(){$(de.error)}}catch(_e){$(_e)}})}).catch($)});return m(L,P),L}function Gt(P,j){j=y.apply(this,arguments);var L=this.config();P=typeof P!="function"&&P||{},P.name||(P.name=P.name||L.name,P.storeName=P.storeName||L.storeName);var Y=this,$;if(!P.name)$=u.reject("Invalid arguments");else{var W=P.name===L.name&&Y._dbInfo.db,re=W?u.resolve(Y._dbInfo.db):b(P).then(function(fe){var de=S[P.name],me=de.forages;de.db=fe;for(var _e=0;_e<me.length;_e++)me[_e]._dbInfo.db=fe;return fe});P.storeName?$=re.then(function(fe){if(fe.objectStoreNames.contains(P.storeName)){var de=fe.version+1;G(P);var me=S[P.name],_e=me.forages;fe.close();for(var Ae=0;Ae<_e.length;Ae++){var Le=_e[Ae];Le._dbInfo.db=null,Le._dbInfo.version=de}var Xe=new u(function(et,wt){var yt=c.open(P.name,de);yt.onerror=function(gn){var Ki=yt.result;Ki.close(),wt(gn)},yt.onupgradeneeded=function(){var gn=yt.result;gn.deleteObjectStore(P.storeName)},yt.onsuccess=function(){var gn=yt.result;gn.close(),et(gn)}});return Xe.then(function(et){me.db=et;for(var wt=0;wt<_e.length;wt++){var yt=_e[wt];yt._dbInfo.db=et,q(yt._dbInfo)}}).catch(function(et){throw(k(P,et)||u.resolve()).catch(function(){}),et})}}):$=re.then(function(fe){G(P);var de=S[P.name],me=de.forages;fe.close();for(var _e=0;_e<me.length;_e++){var Ae=me[_e];Ae._dbInfo.db=null}var Le=new u(function(Xe,et){var wt=c.deleteDatabase(P.name);wt.onerror=function(){var yt=wt.result;yt&&yt.close(),et(wt.error)},wt.onblocked=function(){console.warn('dropInstance blocked for database "'+P.name+'" until all open connections are closed')},wt.onsuccess=function(){var yt=wt.result;yt&&yt.close(),Xe(yt)}});return Le.then(function(Xe){de.db=Xe;for(var et=0;et<me.length;et++){var wt=me[et];q(wt._dbInfo)}}).catch(function(Xe){throw(k(P,Xe)||u.resolve()).catch(function(){}),Xe})})}return m($,j),$}var Qt={_driver:"asyncStorage",_initStorage:we,_support:f(),iterate:ve,getItem:Te,setItem:Re,removeItem:$e,clear:ht,length:pt,key:Ve,keys:Et,dropInstance:Gt};function _n(){return typeof openDatabase=="function"}var qt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Xi="~~local_forage_type~",mh=/^~~local_forage_type~([^~]+)~/,ea="__lfsc__:",Ms=ea.length,Rs="arbf",Ps="blob",ph="si08",_h="ui08",gh="uic8",yh="si16",bh="si32",Eh="ur16",wh="ui32",vh="fl32",Th="fl64",Sh=Ms+Rs.length,Ah=Object.prototype.toString;function xh(P){var j=P.length*.75,L=P.length,Y,$=0,W,re,fe,de;P[P.length-1]==="="&&(j--,P[P.length-2]==="="&&j--);var me=new ArrayBuffer(j),_e=new Uint8Array(me);for(Y=0;Y<L;Y+=4)W=qt.indexOf(P[Y]),re=qt.indexOf(P[Y+1]),fe=qt.indexOf(P[Y+2]),de=qt.indexOf(P[Y+3]),_e[$++]=W<<2|re>>4,_e[$++]=(re&15)<<4|fe>>2,_e[$++]=(fe&3)<<6|de&63;return me}function Is(P){var j=new Uint8Array(P),L="",Y;for(Y=0;Y<j.length;Y+=3)L+=qt[j[Y]>>2],L+=qt[(j[Y]&3)<<4|j[Y+1]>>4],L+=qt[(j[Y+1]&15)<<2|j[Y+2]>>6],L+=qt[j[Y+2]&63];return j.length%3===2?L=L.substring(0,L.length-1)+"=":j.length%3===1&&(L=L.substring(0,L.length-2)+"=="),L}function pp(P,j){var L="";if(P&&(L=Ah.call(P)),P&&(L==="[object ArrayBuffer]"||P.buffer&&Ah.call(P.buffer)==="[object ArrayBuffer]")){var Y,$=ea;P instanceof ArrayBuffer?(Y=P,$+=Rs):(Y=P.buffer,L==="[object Int8Array]"?$+=ph:L==="[object Uint8Array]"?$+=_h:L==="[object Uint8ClampedArray]"?$+=gh:L==="[object Int16Array]"?$+=yh:L==="[object Uint16Array]"?$+=Eh:L==="[object Int32Array]"?$+=bh:L==="[object Uint32Array]"?$+=wh:L==="[object Float32Array]"?$+=vh:L==="[object Float64Array]"?$+=Th:j(new Error("Failed to get type for BinaryArray"))),j($+Is(Y))}else if(L==="[object Blob]"){var W=new FileReader;W.onload=function(){var re=Xi+P.type+"~"+Is(this.result);j(ea+Ps+re)},W.readAsArrayBuffer(P)}else try{j(JSON.stringify(P))}catch(re){console.error("Couldn't convert value into a JSON string: ",P),j(null,re)}}function _p(P){if(P.substring(0,Ms)!==ea)return JSON.parse(P);var j=P.substring(Sh),L=P.substring(Ms,Sh),Y;if(L===Ps&&mh.test(j)){var $=j.match(mh);Y=$[1],j=j.substring($[0].length)}var W=xh(j);switch(L){case Rs:return W;case Ps:return d([W],{type:Y});case ph:return new Int8Array(W);case _h:return new Uint8Array(W);case gh:return new Uint8ClampedArray(W);case yh:return new Int16Array(W);case Eh:return new Uint16Array(W);case bh:return new Int32Array(W);case wh:return new Uint32Array(W);case vh:return new Float32Array(W);case Th:return new Float64Array(W);default:throw new Error("Unkown type: "+L)}}var zs={serialize:pp,deserialize:_p,stringToBuffer:xh,bufferToString:Is};function Oh(P,j,L,Y){P.executeSql("CREATE TABLE IF NOT EXISTS "+j.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],L,Y)}function gp(P){var j=this,L={db:null};if(P)for(var Y in P)L[Y]=typeof P[Y]!="string"?P[Y].toString():P[Y];var $=new u(function(W,re){try{L.db=openDatabase(L.name,String(L.version),L.description,L.size)}catch(fe){return re(fe)}L.db.transaction(function(fe){Oh(fe,L,function(){j._dbInfo=L,W()},function(de,me){re(me)})},re)});return L.serializer=zs,$}function vo(P,j,L,Y,$,W){P.executeSql(L,Y,$,function(re,fe){fe.code===fe.SYNTAX_ERR?re.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[j.storeName],function(de,me){me.rows.length?W(de,fe):Oh(de,j,function(){de.executeSql(L,Y,$,W)},W)},W):W(re,fe)},W)}function yp(P,j){var L=this;P=g(P);var Y=new u(function($,W){L.ready().then(function(){var re=L._dbInfo;re.db.transaction(function(fe){vo(fe,re,"SELECT * FROM "+re.storeName+" WHERE key = ? LIMIT 1",[P],function(de,me){var _e=me.rows.length?me.rows.item(0).value:null;_e&&(_e=re.serializer.deserialize(_e)),$(_e)},function(de,me){W(me)})})}).catch(W)});return m(Y,j),Y}function bp(P,j){var L=this,Y=new u(function($,W){L.ready().then(function(){var re=L._dbInfo;re.db.transaction(function(fe){vo(fe,re,"SELECT * FROM "+re.storeName,[],function(de,me){for(var _e=me.rows,Ae=_e.length,Le=0;Le<Ae;Le++){var Xe=_e.item(Le),et=Xe.value;if(et&&(et=re.serializer.deserialize(et)),et=P(et,Xe.key,Le+1),et!==void 0){$(et);return}}$()},function(de,me){W(me)})})}).catch(W)});return m(Y,j),Y}function Ch(P,j,L,Y){var $=this;P=g(P);var W=new u(function(re,fe){$.ready().then(function(){j===void 0&&(j=null);var de=j,me=$._dbInfo;me.serializer.serialize(j,function(_e,Ae){Ae?fe(Ae):me.db.transaction(function(Le){vo(Le,me,"INSERT OR REPLACE INTO "+me.storeName+" (key, value) VALUES (?, ?)",[P,_e],function(){re(de)},function(Xe,et){fe(et)})},function(Le){if(Le.code===Le.QUOTA_ERR){if(Y>0){re(Ch.apply($,[P,de,L,Y-1]));return}fe(Le)}})})}).catch(fe)});return m(W,L),W}function Ep(P,j,L){return Ch.apply(this,[P,j,L,1])}function wp(P,j){var L=this;P=g(P);var Y=new u(function($,W){L.ready().then(function(){var re=L._dbInfo;re.db.transaction(function(fe){vo(fe,re,"DELETE FROM "+re.storeName+" WHERE key = ?",[P],function(){$()},function(de,me){W(me)})})}).catch(W)});return m(Y,j),Y}function vp(P){var j=this,L=new u(function(Y,$){j.ready().then(function(){var W=j._dbInfo;W.db.transaction(function(re){vo(re,W,"DELETE FROM "+W.storeName,[],function(){Y()},function(fe,de){$(de)})})}).catch($)});return m(L,P),L}function Tp(P){var j=this,L=new u(function(Y,$){j.ready().then(function(){var W=j._dbInfo;W.db.transaction(function(re){vo(re,W,"SELECT COUNT(key) as c FROM "+W.storeName,[],function(fe,de){var me=de.rows.item(0).c;Y(me)},function(fe,de){$(de)})})}).catch($)});return m(L,P),L}function Sp(P,j){var L=this,Y=new u(function($,W){L.ready().then(function(){var re=L._dbInfo;re.db.transaction(function(fe){vo(fe,re,"SELECT key FROM "+re.storeName+" WHERE id = ? LIMIT 1",[P+1],function(de,me){var _e=me.rows.length?me.rows.item(0).key:null;$(_e)},function(de,me){W(me)})})}).catch(W)});return m(Y,j),Y}function Ap(P){var j=this,L=new u(function(Y,$){j.ready().then(function(){var W=j._dbInfo;W.db.transaction(function(re){vo(re,W,"SELECT key FROM "+W.storeName,[],function(fe,de){for(var me=[],_e=0;_e<de.rows.length;_e++)me.push(de.rows.item(_e).key);Y(me)},function(fe,de){$(de)})})}).catch($)});return m(L,P),L}function xp(P){return new u(function(j,L){P.transaction(function(Y){Y.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function($,W){for(var re=[],fe=0;fe<W.rows.length;fe++)re.push(W.rows.item(fe).name);j({db:P,storeNames:re})},function($,W){L(W)})},function(Y){L(Y)})})}function Op(P,j){j=y.apply(this,arguments);var L=this.config();P=typeof P!="function"&&P||{},P.name||(P.name=P.name||L.name,P.storeName=P.storeName||L.storeName);var Y=this,$;return P.name?$=new u(function(W){var re;P.name===L.name?re=Y._dbInfo.db:re=openDatabase(P.name,"","",0),P.storeName?W({db:re,storeNames:[P.storeName]}):W(xp(re))}).then(function(W){return new u(function(re,fe){W.db.transaction(function(de){function me(Xe){return new u(function(et,wt){de.executeSql("DROP TABLE IF EXISTS "+Xe,[],function(){et()},function(yt,gn){wt(gn)})})}for(var _e=[],Ae=0,Le=W.storeNames.length;Ae<Le;Ae++)_e.push(me(W.storeNames[Ae]));u.all(_e).then(function(){re()}).catch(function(Xe){fe(Xe)})},function(de){fe(de)})})}):$=u.reject("Invalid arguments"),m($,j),$}var Cp={_driver:"webSQLStorage",_initStorage:gp,_support:_n(),iterate:bp,getItem:yp,setItem:Ep,removeItem:wp,clear:vp,length:Tp,key:Sp,keys:Ap,dropInstance:Op};function Mp(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Mh(P,j){var L=P.name+"/";return P.storeName!==j.storeName&&(L+=P.storeName+"/"),L}function Rp(){var P="_localforage_support_test";try{return localStorage.setItem(P,!0),localStorage.removeItem(P),!1}catch{return!0}}function Pp(){return!Rp()||localStorage.length>0}function Ip(P){var j=this,L={};if(P)for(var Y in P)L[Y]=P[Y];return L.keyPrefix=Mh(P,j._defaultConfig),Pp()?(j._dbInfo=L,L.serializer=zs,u.resolve()):u.reject()}function zp(P){var j=this,L=j.ready().then(function(){for(var Y=j._dbInfo.keyPrefix,$=localStorage.length-1;$>=0;$--){var W=localStorage.key($);W.indexOf(Y)===0&&localStorage.removeItem(W)}});return m(L,P),L}function Np(P,j){var L=this;P=g(P);var Y=L.ready().then(function(){var $=L._dbInfo,W=localStorage.getItem($.keyPrefix+P);return W&&(W=$.serializer.deserialize(W)),W});return m(Y,j),Y}function Dp(P,j){var L=this,Y=L.ready().then(function(){for(var $=L._dbInfo,W=$.keyPrefix,re=W.length,fe=localStorage.length,de=1,me=0;me<fe;me++){var _e=localStorage.key(me);if(_e.indexOf(W)===0){var Ae=localStorage.getItem(_e);if(Ae&&(Ae=$.serializer.deserialize(Ae)),Ae=P(Ae,_e.substring(re),de++),Ae!==void 0)return Ae}}});return m(Y,j),Y}function Lp(P,j){var L=this,Y=L.ready().then(function(){var $=L._dbInfo,W;try{W=localStorage.key(P)}catch{W=null}return W&&(W=W.substring($.keyPrefix.length)),W});return m(Y,j),Y}function Fp(P){var j=this,L=j.ready().then(function(){for(var Y=j._dbInfo,$=localStorage.length,W=[],re=0;re<$;re++){var fe=localStorage.key(re);fe.indexOf(Y.keyPrefix)===0&&W.push(fe.substring(Y.keyPrefix.length))}return W});return m(L,P),L}function Bp(P){var j=this,L=j.keys().then(function(Y){return Y.length});return m(L,P),L}function Up(P,j){var L=this;P=g(P);var Y=L.ready().then(function(){var $=L._dbInfo;localStorage.removeItem($.keyPrefix+P)});return m(Y,j),Y}function Gp(P,j,L){var Y=this;P=g(P);var $=Y.ready().then(function(){j===void 0&&(j=null);var W=j;return new u(function(re,fe){var de=Y._dbInfo;de.serializer.serialize(j,function(me,_e){if(_e)fe(_e);else try{localStorage.setItem(de.keyPrefix+P,me),re(W)}catch(Ae){(Ae.name==="QuotaExceededError"||Ae.name==="NS_ERROR_DOM_QUOTA_REACHED")&&fe(Ae),fe(Ae)}})})});return m($,L),$}function qp(P,j){if(j=y.apply(this,arguments),P=typeof P!="function"&&P||{},!P.name){var L=this.config();P.name=P.name||L.name,P.storeName=P.storeName||L.storeName}var Y=this,$;return P.name?$=new u(function(W){P.storeName?W(Mh(P,Y._defaultConfig)):W(P.name+"/")}).then(function(W){for(var re=localStorage.length-1;re>=0;re--){var fe=localStorage.key(re);fe.indexOf(W)===0&&localStorage.removeItem(fe)}}):$=u.reject("Invalid arguments"),m($,j),$}var kp={_driver:"localStorageWrapper",_initStorage:Ip,_support:Mp(),iterate:Dp,getItem:Np,setItem:Gp,removeItem:Up,clear:zp,length:Bp,key:Lp,keys:Fp,dropInstance:qp},jp=function(j,L){return j===L||typeof j=="number"&&typeof L=="number"&&isNaN(j)&&isNaN(L)},Vp=function(j,L){for(var Y=j.length,$=0;$<Y;){if(jp(j[$],L))return!0;$++}return!1},Rh=Array.isArray||function(P){return Object.prototype.toString.call(P)==="[object Array]"},Zi={},Ph={},fi={INDEXEDDB:Qt,WEBSQL:Cp,LOCALSTORAGE:kp},Hp=[fi.INDEXEDDB._driver,fi.WEBSQL._driver,fi.LOCALSTORAGE._driver],ta=["dropInstance"],Ns=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(ta),Wp={description:"",driver:Hp.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Yp(P,j){P[j]=function(){var L=arguments;return P.ready().then(function(){return P[j].apply(P,L)})}}function Ds(){for(var P=1;P<arguments.length;P++){var j=arguments[P];if(j)for(var L in j)j.hasOwnProperty(L)&&(Rh(j[L])?arguments[0][L]=j[L].slice():arguments[0][L]=j[L])}return arguments[0]}var $p=function(){function P(j){a(this,P);for(var L in fi)if(fi.hasOwnProperty(L)){var Y=fi[L],$=Y._driver;this[L]=$,Zi[$]||this.defineDriver(Y)}this._defaultConfig=Ds({},Wp),this._config=Ds({},this._defaultConfig,j),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return P.prototype.config=function(L){if((typeof L>"u"?"undefined":r(L))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var Y in L){if(Y==="storeName"&&(L[Y]=L[Y].replace(/\W/g,"_")),Y==="version"&&typeof L[Y]!="number")return new Error("Database version must be a number.");this._config[Y]=L[Y]}return"driver"in L&&L.driver?this.setDriver(this._config.driver):!0}else return typeof L=="string"?this._config[L]:this._config},P.prototype.defineDriver=function(L,Y,$){var W=new u(function(re,fe){try{var de=L._driver,me=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!L._driver){fe(me);return}for(var _e=Ns.concat("_initStorage"),Ae=0,Le=_e.length;Ae<Le;Ae++){var Xe=_e[Ae],et=!Vp(ta,Xe);if((et||L[Xe])&&typeof L[Xe]!="function"){fe(me);return}}var wt=function(){for(var Ki=function(Kp){return function(){var Qp=new Error("Method "+Kp+" is not implemented by the current driver"),Ih=u.reject(Qp);return m(Ih,arguments[arguments.length-1]),Ih}},Ls=0,Zp=ta.length;Ls<Zp;Ls++){var Fs=ta[Ls];L[Fs]||(L[Fs]=Ki(Fs))}};wt();var yt=function(Ki){Zi[de]&&console.info("Redefining LocalForage driver: "+de),Zi[de]=L,Ph[de]=Ki,re()};"_support"in L?L._support&&typeof L._support=="function"?L._support().then(yt,fe):yt(!!L._support):yt(!0)}catch(gn){fe(gn)}});return _(W,Y,$),W},P.prototype.driver=function(){return this._driver||null},P.prototype.getDriver=function(L,Y,$){var W=Zi[L]?u.resolve(Zi[L]):u.reject(new Error("Driver not found."));return _(W,Y,$),W},P.prototype.getSerializer=function(L){var Y=u.resolve(zs);return _(Y,L),Y},P.prototype.ready=function(L){var Y=this,$=Y._driverSet.then(function(){return Y._ready===null&&(Y._ready=Y._initDriver()),Y._ready});return _($,L,L),$},P.prototype.setDriver=function(L,Y,$){var W=this;Rh(L)||(L=[L]);var re=this._getSupportedDrivers(L);function fe(){W._config.driver=W.driver()}function de(Ae){return W._extend(Ae),fe(),W._ready=W._initStorage(W._config),W._ready}function me(Ae){return function(){var Le=0;function Xe(){for(;Le<Ae.length;){var et=Ae[Le];return Le++,W._dbInfo=null,W._ready=null,W.getDriver(et).then(de).catch(Xe)}fe();var wt=new Error("No available storage method found.");return W._driverSet=u.reject(wt),W._driverSet}return Xe()}}var _e=this._driverSet!==null?this._driverSet.catch(function(){return u.resolve()}):u.resolve();return this._driverSet=_e.then(function(){var Ae=re[0];return W._dbInfo=null,W._ready=null,W.getDriver(Ae).then(function(Le){W._driver=Le._driver,fe(),W._wrapLibraryMethodsWithReady(),W._initDriver=me(re)})}).catch(function(){fe();var Ae=new Error("No available storage method found.");return W._driverSet=u.reject(Ae),W._driverSet}),_(this._driverSet,Y,$),this._driverSet},P.prototype.supports=function(L){return!!Ph[L]},P.prototype._extend=function(L){Ds(this,L)},P.prototype._getSupportedDrivers=function(L){for(var Y=[],$=0,W=L.length;$<W;$++){var re=L[$];this.supports(re)&&Y.push(re)}return Y},P.prototype._wrapLibraryMethodsWithReady=function(){for(var L=0,Y=Ns.length;L<Y;L++)Yp(this,Ns[L])},P.prototype.createInstance=function(L){return new P(L)},P}(),Xp=new $p;o.exports=Xp},{3:3}]},{},[4])(4)})})(Ex);new Headers;new DOMParser;function wx(e){e("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),e("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),e("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");for(var t=1;t<=60;++t)e("EPSG:"+(32600+t),"+proj=utm +zone="+t+" +datum=WGS84 +units=m"),e("EPSG:"+(32700+t),"+proj=utm +zone="+t+" +south +datum=WGS84 +units=m");e.WGS84=e["EPSG:4326"],e["EPSG:3785"]=e["EPSG:3857"],e.GOOGLE=e["EPSG:3857"],e["EPSG:900913"]=e["EPSG:3857"],e["EPSG:102113"]=e["EPSG:3857"]}var ii=1,ri=2,Pi=3,vx=4,hf=5,Au=6378137,Tx=6356752314e-3,xu=.0066943799901413165,Tr=484813681109536e-20,ce=Math.PI/2,Sx=.16666666666666666,Ax=.04722222222222222,xx=.022156084656084655,ye=1e-10,Nt=.017453292519943295,Zn=57.29577951308232,Ke=Math.PI/4,Br=Math.PI*2,Bt=3.14159265359,dn={};dn.greenwich=0;dn.lisbon=-9.131906111111;dn.paris=2.337229166667;dn.bogota=-74.080916666667;dn.madrid=-3.687938888889;dn.rome=12.452333333333;dn.bern=7.439583333333;dn.jakarta=106.807719444444;dn.ferro=-17.666666666667;dn.brussels=4.367975;dn.stockholm=18.058277777778;dn.athens=23.7163375;dn.oslo=10.722916666667;const Ox={mm:{to_meter:.001},cm:{to_meter:.01},ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937},fath:{to_meter:1.8288},kmi:{to_meter:1852},"us-ch":{to_meter:20.1168402336805},"us-mi":{to_meter:1609.34721869444},km:{to_meter:1e3},"ind-ft":{to_meter:.30479841},"ind-yd":{to_meter:.91439523},mi:{to_meter:1609.344},yd:{to_meter:.9144},ch:{to_meter:20.1168},link:{to_meter:.201168},dm:{to_meter:.1},in:{to_meter:.0254},"ind-ch":{to_meter:20.11669506},"us-in":{to_meter:.025400050800101},"us-yd":{to_meter:.914401828803658}};var Ou=/[\s_\-\/\(\)]/g;function Fo(e,t){if(e[t])return e[t];for(var n=Object.keys(e),o=t.toLowerCase().replace(Ou,""),i=-1,r,a;++i<n.length;)if(r=n[i],a=r.toLowerCase().replace(Ou,""),a===o)return e[r]}function lf(e){var t={},n=e.split("+").map(function(s){return s.trim()}).filter(function(s){return s}).reduce(function(s,c){var f=c.split("=");return f.push(!0),s[f[0].toLowerCase()]=f[1],s},{}),o,i,r,a={proj:"projName",datum:"datumCode",rf:function(s){t.rf=parseFloat(s)},lat_0:function(s){t.lat0=s*Nt},lat_1:function(s){t.lat1=s*Nt},lat_2:function(s){t.lat2=s*Nt},lat_ts:function(s){t.lat_ts=s*Nt},lon_0:function(s){t.long0=s*Nt},lon_1:function(s){t.long1=s*Nt},lon_2:function(s){t.long2=s*Nt},alpha:function(s){t.alpha=parseFloat(s)*Nt},gamma:function(s){t.rectified_grid_angle=parseFloat(s)*Nt},lonc:function(s){t.longc=s*Nt},x_0:function(s){t.x0=parseFloat(s)},y_0:function(s){t.y0=parseFloat(s)},k_0:function(s){t.k0=parseFloat(s)},k:function(s){t.k0=parseFloat(s)},a:function(s){t.a=parseFloat(s)},b:function(s){t.b=parseFloat(s)},r:function(s){t.a=t.b=parseFloat(s)},r_a:function(){t.R_A=!0},zone:function(s){t.zone=parseInt(s,10)},south:function(){t.utmSouth=!0},towgs84:function(s){t.datum_params=s.split(",").map(function(c){return parseFloat(c)})},to_meter:function(s){t.to_meter=parseFloat(s)},units:function(s){t.units=s;var c=Fo(Ox,s);c&&(t.to_meter=c.to_meter)},from_greenwich:function(s){t.from_greenwich=s*Nt},pm:function(s){var c=Fo(dn,s);t.from_greenwich=(c||parseFloat(s))*Nt},nadgrids:function(s){s==="@null"?t.datumCode="none":t.nadgrids=s},axis:function(s){var c="ewnsud";s.length===3&&c.indexOf(s.substr(0,1))!==-1&&c.indexOf(s.substr(1,1))!==-1&&c.indexOf(s.substr(2,1))!==-1&&(t.axis=s)},approx:function(){t.approx=!0}};for(o in n)i=n[o],o in a?(r=a[o],typeof r=="function"?r(i):t[r]=i):t[o]=i;return typeof t.datumCode=="string"&&t.datumCode!=="WGS84"&&(t.datumCode=t.datumCode.toLowerCase()),t}class zm{static getId(t){const n=t.find(o=>Array.isArray(o)&&o[0]==="ID");return n&&n.length>=3?{authority:n[1],code:parseInt(n[2],10)}:null}static convertUnit(t,n="unit"){if(!t||t.length<3)return{type:n,name:"unknown",conversion_factor:null};const o=t[1],i=parseFloat(t[2])||null,r=t.find(s=>Array.isArray(s)&&s[0]==="ID"),a=r?{authority:r[1],code:parseInt(r[2],10)}:null;return{type:n,name:o,conversion_factor:i,id:a}}static convertAxis(t){const n=t[1]||"Unknown";let o;const i=n.match(/^\((.)\)$/);if(i){const f=i[1].toUpperCase();if(f==="E")o="east";else if(f==="N")o="north";else if(f==="U")o="up";else throw new Error(`Unknown axis abbreviation: ${f}`)}else o=t[2]?t[2].toLowerCase():"unknown";const r=t.find(f=>Array.isArray(f)&&f[0]==="ORDER"),a=r?parseInt(r[1],10):null,s=t.find(f=>Array.isArray(f)&&(f[0]==="LENGTHUNIT"||f[0]==="ANGLEUNIT"||f[0]==="SCALEUNIT")),c=this.convertUnit(s);return{name:n,direction:o,unit:c,order:a}}static extractAxes(t){return t.filter(n=>Array.isArray(n)&&n[0]==="AXIS").map(n=>this.convertAxis(n)).sort((n,o)=>(n.order||0)-(o.order||0))}static convert(t,n={}){switch(t[0]){case"PROJCRS":n.type="ProjectedCRS",n.name=t[1],n.base_crs=t.find(m=>Array.isArray(m)&&m[0]==="BASEGEOGCRS")?this.convert(t.find(m=>Array.isArray(m)&&m[0]==="BASEGEOGCRS")):null,n.conversion=t.find(m=>Array.isArray(m)&&m[0]==="CONVERSION")?this.convert(t.find(m=>Array.isArray(m)&&m[0]==="CONVERSION")):null;const o=t.find(m=>Array.isArray(m)&&m[0]==="CS");o&&(n.coordinate_system={type:o[1],axis:this.extractAxes(t)});const i=t.find(m=>Array.isArray(m)&&m[0]==="LENGTHUNIT");if(i){const m=this.convertUnit(i);n.coordinate_system.unit=m}n.id=this.getId(t);break;case"BASEGEOGCRS":case"GEOGCRS":n.type="GeographicCRS",n.name=t[1];const r=t.find(m=>Array.isArray(m)&&(m[0]==="DATUM"||m[0]==="ENSEMBLE"));if(r){const m=this.convert(r);r[0]==="ENSEMBLE"?n.datum_ensemble=m:n.datum=m;const _=t.find(g=>Array.isArray(g)&&g[0]==="PRIMEM");_&&_[1]!=="Greenwich"&&(m.prime_meridian={name:_[1],longitude:parseFloat(_[2])})}n.coordinate_system={type:"ellipsoidal",axis:this.extractAxes(t)},n.id=this.getId(t);break;case"DATUM":n.type="GeodeticReferenceFrame",n.name=t[1],n.ellipsoid=t.find(m=>Array.isArray(m)&&m[0]==="ELLIPSOID")?this.convert(t.find(m=>Array.isArray(m)&&m[0]==="ELLIPSOID")):null;break;case"ENSEMBLE":n.type="DatumEnsemble",n.name=t[1],n.members=t.filter(m=>Array.isArray(m)&&m[0]==="MEMBER").map(m=>({type:"DatumEnsembleMember",name:m[1],id:this.getId(m)}));const a=t.find(m=>Array.isArray(m)&&m[0]==="ENSEMBLEACCURACY");a&&(n.accuracy=parseFloat(a[1]));const s=t.find(m=>Array.isArray(m)&&m[0]==="ELLIPSOID");s&&(n.ellipsoid=this.convert(s)),n.id=this.getId(t);break;case"ELLIPSOID":n.type="Ellipsoid",n.name=t[1],n.semi_major_axis=parseFloat(t[2]),n.inverse_flattening=parseFloat(t[3]),t.find(m=>Array.isArray(m)&&m[0]==="LENGTHUNIT")&&this.convert(t.find(m=>Array.isArray(m)&&m[0]==="LENGTHUNIT"),n);break;case"CONVERSION":n.type="Conversion",n.name=t[1],n.method=t.find(m=>Array.isArray(m)&&m[0]==="METHOD")?this.convert(t.find(m=>Array.isArray(m)&&m[0]==="METHOD")):null,n.parameters=t.filter(m=>Array.isArray(m)&&m[0]==="PARAMETER").map(m=>this.convert(m));break;case"METHOD":n.type="Method",n.name=t[1],n.id=this.getId(t);break;case"PARAMETER":n.type="Parameter",n.name=t[1],n.value=parseFloat(t[2]),n.unit=this.convertUnit(t.find(m=>Array.isArray(m)&&(m[0]==="LENGTHUNIT"||m[0]==="ANGLEUNIT"||m[0]==="SCALEUNIT"))),n.id=this.getId(t);break;case"BOUNDCRS":n.type="BoundCRS";const c=t.find(m=>Array.isArray(m)&&m[0]==="SOURCECRS");if(c){const m=c.find(_=>Array.isArray(_));n.source_crs=m?this.convert(m):null}const f=t.find(m=>Array.isArray(m)&&m[0]==="TARGETCRS");if(f){const m=f.find(_=>Array.isArray(_));n.target_crs=m?this.convert(m):null}const d=t.find(m=>Array.isArray(m)&&m[0]==="ABRIDGEDTRANSFORMATION");d?n.transformation=this.convert(d):n.transformation=null;break;case"ABRIDGEDTRANSFORMATION":if(n.type="Transformation",n.name=t[1],n.method=t.find(m=>Array.isArray(m)&&m[0]==="METHOD")?this.convert(t.find(m=>Array.isArray(m)&&m[0]==="METHOD")):null,n.parameters=t.filter(m=>Array.isArray(m)&&(m[0]==="PARAMETER"||m[0]==="PARAMETERFILE")).map(m=>{if(m[0]==="PARAMETER")return this.convert(m);if(m[0]==="PARAMETERFILE")return{name:m[1],value:m[2],id:{authority:"EPSG",code:8656}}}),n.parameters.length===7){const m=n.parameters[6];m.name==="Scale difference"&&(m.value=Math.round((m.value-1)*1e12)/1e6)}n.id=this.getId(t);break;case"AXIS":n.coordinate_system||(n.coordinate_system={type:"unspecified",axis:[]}),n.coordinate_system.axis.push(this.convertAxis(t));break;case"LENGTHUNIT":const u=this.convertUnit(t,"LinearUnit");n.coordinate_system&&n.coordinate_system.axis&&n.coordinate_system.axis.forEach(m=>{m.unit||(m.unit=u)}),u.conversion_factor&&u.conversion_factor!==1&&n.semi_major_axis&&(n.semi_major_axis={value:n.semi_major_axis,unit:u});break;default:n.keyword=t[0];break}return n}}class Cx extends zm{static convert(t,n={}){return super.convert(t,n),n.coordinate_system&&n.coordinate_system.subtype==="Cartesian"&&delete n.coordinate_system,n.usage&&delete n.usage,n}}class Mx extends zm{static convert(t,n={}){super.convert(t,n);const o=t.find(r=>Array.isArray(r)&&r[0]==="CS");o&&(n.coordinate_system={subtype:o[1],axis:this.extractAxes(t)});const i=t.find(r=>Array.isArray(r)&&r[0]==="USAGE");if(i){const r=i.find(c=>Array.isArray(c)&&c[0]==="SCOPE"),a=i.find(c=>Array.isArray(c)&&c[0]==="AREA"),s=i.find(c=>Array.isArray(c)&&c[0]==="BBOX");n.usage={},r&&(n.usage.scope=r[1]),a&&(n.usage.area=a[1]),s&&(n.usage.bbox=s.slice(1))}return n}}function Rx(e){return e.find(t=>Array.isArray(t)&&t[0]==="USAGE")?"2019":(e.find(t=>Array.isArray(t)&&t[0]==="CS")||e[0]==="BOUNDCRS"||e[0]==="PROJCRS"||e[0]==="GEOGCRS","2015")}function Px(e){return(Rx(e)==="2019"?Mx:Cx).convert(e)}function Ix(e){const t=e.toUpperCase();return t.includes("PROJCRS")||t.includes("GEOGCRS")||t.includes("BOUNDCRS")||t.includes("VERTCRS")||t.includes("LENGTHUNIT")||t.includes("ANGLEUNIT")||t.includes("SCALEUNIT")?"WKT2":(t.includes("PROJCS")||t.includes("GEOGCS")||t.includes("LOCAL_CS")||t.includes("VERT_CS")||t.includes("UNIT"),"WKT1")}var Ur=1,Nm=2,Dm=3,ps=4,Lm=5,nh=-1,zx=/\s/,Nx=/[A-Za-z]/,Dx=/[A-Za-z84_]/,Cs=/[,\]]/,Fm=/[\d\.E\-\+]/;function wo(e){if(typeof e!="string")throw new Error("not a string");this.text=e.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=Ur}wo.prototype.readCharicter=function(){var e=this.text[this.place++];if(this.state!==ps)for(;zx.test(e);){if(this.place>=this.text.length)return;e=this.text[this.place++]}switch(this.state){case Ur:return this.neutral(e);case Nm:return this.keyword(e);case ps:return this.quoted(e);case Lm:return this.afterquote(e);case Dm:return this.number(e);case nh:return}};wo.prototype.afterquote=function(e){if(e==='"'){this.word+='"',this.state=ps;return}if(Cs.test(e)){this.word=this.word.trim(),this.afterItem(e);return}throw new Error(`havn't handled "`+e+'" in afterquote yet, index '+this.place)};wo.prototype.afterItem=function(e){if(e===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=Ur;return}if(e==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=Ur,this.currentObject=this.stack.pop(),this.currentObject||(this.state=nh);return}};wo.prototype.number=function(e){if(Fm.test(e)){this.word+=e;return}if(Cs.test(e)){this.word=parseFloat(this.word),this.afterItem(e);return}throw new Error(`havn't handled "`+e+'" in number yet, index '+this.place)};wo.prototype.quoted=function(e){if(e==='"'){this.state=Lm;return}this.word+=e};wo.prototype.keyword=function(e){if(Dx.test(e)){this.word+=e;return}if(e==="["){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=Ur;return}if(Cs.test(e)){this.afterItem(e);return}throw new Error(`havn't handled "`+e+'" in keyword yet, index '+this.place)};wo.prototype.neutral=function(e){if(Nx.test(e)){this.word=e,this.state=Nm;return}if(e==='"'){this.word="",this.state=ps;return}if(Fm.test(e)){this.word=e,this.state=Dm;return}if(Cs.test(e)){this.afterItem(e);return}throw new Error(`havn't handled "`+e+'" in neutral yet, index '+this.place)};wo.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===nh)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function Lx(e){var t=new wo(e);return t.output()}function Rc(e,t,n){Array.isArray(t)&&(n.unshift(t),t=null);var o=t?{}:e,i=n.reduce(function(r,a){return Ai(a,r),r},o);t&&(e[t]=i)}function Ai(e,t){if(!Array.isArray(e)){t[e]=!0;return}var n=e.shift();if(n==="PARAMETER"&&(n=e.shift()),e.length===1){if(Array.isArray(e[0])){t[n]={},Ai(e[0],t[n]);return}t[n]=e[0];return}if(!e.length){t[n]=!0;return}if(n==="TOWGS84"){t[n]=e;return}if(n==="AXIS"){n in t||(t[n]=[]),t[n].push(e);return}Array.isArray(n)||(t[n]={});var o;switch(n){case"UNIT":case"PRIMEM":case"VERT_DATUM":t[n]={name:e[0].toLowerCase(),convert:e[1]},e.length===3&&Ai(e[2],t[n]);return;case"SPHEROID":case"ELLIPSOID":t[n]={name:e[0],a:e[1],rf:e[2]},e.length===4&&Ai(e[3],t[n]);return;case"EDATUM":case"ENGINEERINGDATUM":case"LOCAL_DATUM":case"DATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":e[0]=["name",e[0]],Rc(t,n,e);return;case"COMPD_CS":case"COMPOUNDCRS":case"FITTED_CS":case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"ENGCRS":case"ENGINEERINGCRS":e[0]=["name",e[0]],Rc(t,n,e),t[n].type=n;return;default:for(o=-1;++o<e.length;)if(!Array.isArray(e[o]))return Ai(e,t[n]);return Rc(t,n,e)}}var Fx=.017453292519943295;function Rn(e){return e*Fx}function Bm(e){const t=(e.projName||"").toLowerCase().replace(/_/g," ");!e.long0&&e.longc&&(t==="albers conic equal area"||t==="lambert azimuthal equal area")&&(e.long0=e.longc),!e.lat_ts&&e.lat1&&(t==="stereographic south pole"||t==="polar stereographic (variant b)")?(e.lat0=Rn(e.lat1>0?90:-90),e.lat_ts=e.lat1,delete e.lat1):!e.lat_ts&&e.lat0&&(t==="polar stereographic"||t==="polar stereographic (variant a)")&&(e.lat_ts=e.lat0,e.lat0=Rn(e.lat0>0?90:-90),delete e.lat1)}function Cu(e){let t={units:null,to_meter:void 0};return typeof e=="string"?(t.units=e.toLowerCase(),t.units==="metre"&&(t.units="meter"),t.units==="meter"&&(t.to_meter=1)):e&&e.name&&(t.units=e.name.toLowerCase(),t.units==="metre"&&(t.units="meter"),t.to_meter=e.conversion_factor),t}function Mu(e){return typeof e=="object"?e.value*e.unit.conversion_factor:e}function Ru(e,t){e.ellipsoid.radius?(t.a=e.ellipsoid.radius,t.rf=0):(t.a=Mu(e.ellipsoid.semi_major_axis),e.ellipsoid.inverse_flattening!==void 0?t.rf=e.ellipsoid.inverse_flattening:e.ellipsoid.semi_major_axis!==void 0&&e.ellipsoid.semi_minor_axis!==void 0&&(t.rf=t.a/(t.a-Mu(e.ellipsoid.semi_minor_axis))))}function _s(e,t={}){return!e||typeof e!="object"?e:e.type==="BoundCRS"?(_s(e.source_crs,t),e.transformation&&(e.transformation.method&&e.transformation.method.name==="NTv2"?t.nadgrids=e.transformation.parameters[0].value:t.datum_params=e.transformation.parameters.map(n=>n.value)),t):(Object.keys(e).forEach(n=>{const o=e[n];if(o!==null)switch(n){case"name":if(t.srsCode)break;t.name=o,t.srsCode=o;break;case"type":o==="GeographicCRS"?t.projName="longlat":o==="ProjectedCRS"&&e.conversion&&e.conversion.method&&(t.projName=e.conversion.method.name);break;case"datum":case"datum_ensemble":o.ellipsoid&&(t.ellps=o.ellipsoid.name,Ru(o,t)),o.prime_meridian&&(t.from_greenwich=o.prime_meridian.longitude*Math.PI/180);break;case"ellipsoid":t.ellps=o.name,Ru(o,t);break;case"prime_meridian":t.long0=(o.longitude||0)*Math.PI/180;break;case"coordinate_system":if(o.axis){if(t.axis=o.axis.map(i=>{const r=i.direction;if(r==="east")return"e";if(r==="north")return"n";if(r==="west")return"w";if(r==="south")return"s";throw new Error(`Unknown axis direction: ${r}`)}).join("")+"u",o.unit){const{units:i,to_meter:r}=Cu(o.unit);t.units=i,t.to_meter=r}else if(o.axis[0]&&o.axis[0].unit){const{units:i,to_meter:r}=Cu(o.axis[0].unit);t.units=i,t.to_meter=r}}break;case"id":o.authority&&o.code&&(t.title=o.authority+":"+o.code);break;case"conversion":o.method&&o.method.name&&(t.projName=o.method.name),o.parameters&&o.parameters.forEach(i=>{const r=i.name.toLowerCase().replace(/\s+/g,"_"),a=i.value;i.unit&&i.unit.conversion_factor?t[r]=a*i.unit.conversion_factor:i.unit==="degree"?t[r]=a*Math.PI/180:t[r]=a});break;case"unit":o.name&&(t.units=o.name.toLowerCase(),t.units==="metre"&&(t.units="meter")),o.conversion_factor&&(t.to_meter=o.conversion_factor);break;case"base_crs":_s(o,t),t.datumCode=o.id?o.id.authority+"_"+o.id.code:o.name;break}}),t.latitude_of_false_origin!==void 0&&(t.lat0=t.latitude_of_false_origin),t.longitude_of_false_origin!==void 0&&(t.long0=t.longitude_of_false_origin),t.latitude_of_standard_parallel!==void 0&&(t.lat0=t.latitude_of_standard_parallel,t.lat1=t.latitude_of_standard_parallel),t.latitude_of_1st_standard_parallel!==void 0&&(t.lat1=t.latitude_of_1st_standard_parallel),t.latitude_of_2nd_standard_parallel!==void 0&&(t.lat2=t.latitude_of_2nd_standard_parallel),t.latitude_of_projection_centre!==void 0&&(t.lat0=t.latitude_of_projection_centre),t.longitude_of_projection_centre!==void 0&&(t.longc=t.longitude_of_projection_centre),t.easting_at_false_origin!==void 0&&(t.x0=t.easting_at_false_origin),t.northing_at_false_origin!==void 0&&(t.y0=t.northing_at_false_origin),t.latitude_of_natural_origin!==void 0&&(t.lat0=t.latitude_of_natural_origin),t.longitude_of_natural_origin!==void 0&&(t.long0=t.longitude_of_natural_origin),t.longitude_of_origin!==void 0&&(t.long0=t.longitude_of_origin),t.false_easting!==void 0&&(t.x0=t.false_easting),t.easting_at_projection_centre&&(t.x0=t.easting_at_projection_centre),t.false_northing!==void 0&&(t.y0=t.false_northing),t.northing_at_projection_centre&&(t.y0=t.northing_at_projection_centre),t.standard_parallel_1!==void 0&&(t.lat1=t.standard_parallel_1),t.standard_parallel_2!==void 0&&(t.lat2=t.standard_parallel_2),t.scale_factor_at_natural_origin!==void 0&&(t.k0=t.scale_factor_at_natural_origin),t.scale_factor_at_projection_centre!==void 0&&(t.k0=t.scale_factor_at_projection_centre),t.scale_factor_on_pseudo_standard_parallel!==void 0&&(t.k0=t.scale_factor_on_pseudo_standard_parallel),t.azimuth!==void 0&&(t.alpha=t.azimuth),t.azimuth_at_projection_centre!==void 0&&(t.alpha=t.azimuth_at_projection_centre),t.angle_from_rectified_to_skew_grid&&(t.rectified_grid_angle=t.angle_from_rectified_to_skew_grid),Bm(t),t)}var Bx=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function Ux(e,t){var n=t[0],o=t[1];!(n in e)&&o in e&&(e[n]=e[o],t.length===3&&(e[n]=t[2](e[n])))}function Um(e){for(var t=Object.keys(e),n=0,o=t.length;n<o;++n){var i=t[n];Bx.indexOf(i)!==-1&&Gx(e[i]),typeof e[i]=="object"&&Um(e[i])}}function Gx(e){if(e.AUTHORITY){var t=Object.keys(e.AUTHORITY)[0];t&&t in e.AUTHORITY&&(e.title=t+":"+e.AUTHORITY[t])}if(e.type==="GEOGCS"?e.projName="longlat":e.type==="LOCAL_CS"?(e.projName="identity",e.local=!0):typeof e.PROJECTION=="object"?e.projName=Object.keys(e.PROJECTION)[0]:e.projName=e.PROJECTION,e.AXIS){for(var n="",o=0,i=e.AXIS.length;o<i;++o){var r=[e.AXIS[o][0].toLowerCase(),e.AXIS[o][1].toLowerCase()];r[0].indexOf("north")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="north"?n+="n":r[0].indexOf("south")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="south"?n+="s":r[0].indexOf("east")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="east"?n+="e":(r[0].indexOf("west")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="west")&&(n+="w")}n.length===2&&(n+="u"),n.length===3&&(e.axis=n)}e.UNIT&&(e.units=e.UNIT.name.toLowerCase(),e.units==="metre"&&(e.units="meter"),e.UNIT.convert&&(e.type==="GEOGCS"?e.DATUM&&e.DATUM.SPHEROID&&(e.to_meter=e.UNIT.convert*e.DATUM.SPHEROID.a):e.to_meter=e.UNIT.convert));var a=e.GEOGCS;e.type==="GEOGCS"&&(a=e),a&&(a.DATUM?e.datumCode=a.DATUM.name.toLowerCase():e.datumCode=a.name.toLowerCase(),e.datumCode.slice(0,2)==="d_"&&(e.datumCode=e.datumCode.slice(2)),e.datumCode==="new_zealand_1949"&&(e.datumCode="nzgd49"),(e.datumCode==="wgs_1984"||e.datumCode==="world_geodetic_system_1984")&&(e.PROJECTION==="Mercator_Auxiliary_Sphere"&&(e.sphere=!0),e.datumCode="wgs84"),e.datumCode==="belge_1972"&&(e.datumCode="rnb72"),a.DATUM&&a.DATUM.SPHEROID&&(e.ellps=a.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),e.ellps.toLowerCase().slice(0,13)==="international"&&(e.ellps="intl"),e.a=a.DATUM.SPHEROID.a,e.rf=parseFloat(a.DATUM.SPHEROID.rf,10)),a.DATUM&&a.DATUM.TOWGS84&&(e.datum_params=a.DATUM.TOWGS84),~e.datumCode.indexOf("osgb_1936")&&(e.datumCode="osgb36"),~e.datumCode.indexOf("osni_1952")&&(e.datumCode="osni52"),(~e.datumCode.indexOf("tm65")||~e.datumCode.indexOf("geodetic_datum_of_1965"))&&(e.datumCode="ire65"),e.datumCode==="ch1903+"&&(e.datumCode="ch1903"),~e.datumCode.indexOf("israel")&&(e.datumCode="isr93")),e.b&&!isFinite(e.b)&&(e.b=e.a),e.rectified_grid_angle&&(e.rectified_grid_angle=Rn(e.rectified_grid_angle));function s(d){var u=e.to_meter||1;return d*u}var c=function(d){return Ux(e,d)},f=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",Rn],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",Rn],["x0","false_easting",s],["y0","false_northing",s],["long0","central_meridian",Rn],["lat0","latitude_of_origin",Rn],["lat0","standard_parallel_1",Rn],["lat1","standard_parallel_1",Rn],["lat2","standard_parallel_2",Rn],["azimuth","Azimuth"],["alpha","azimuth",Rn],["srsCode","name"]];f.forEach(c),Bm(e)}function uf(e){if(typeof e=="object")return _s(e);const t=Ix(e);var n=Lx(e);if(t==="WKT2"){const r=Px(n);return _s(r)}var o=n[0],i={};return Ai(n,i),Um(i),i[o]}function Jt(e){var t=this;if(arguments.length===2){var n=arguments[1];typeof n=="string"?n.charAt(0)==="+"?Jt[e]=lf(arguments[1]):Jt[e]=uf(arguments[1]):Jt[e]=n}else if(arguments.length===1){if(Array.isArray(e))return e.map(function(o){return Array.isArray(o)?Jt.apply(t,o):Jt(o)});if(typeof e=="string"){if(e in Jt)return Jt[e]}else"EPSG"in e?Jt["EPSG:"+e.EPSG]=e:"ESRI"in e?Jt["ESRI:"+e.ESRI]=e:"IAU2000"in e?Jt["IAU2000:"+e.IAU2000]=e:console.log(e);return}}wx(Jt);function qx(e){return typeof e=="string"}function kx(e){return e in Jt}function jx(e){return e.indexOf("+")!==0&&e.indexOf("[")!==-1||typeof e=="object"&&!("srsCode"in e)}var Vx=["3857","900913","3785","102113"];function Hx(e){var t=Fo(e,"authority");if(t){var n=Fo(t,"epsg");return n&&Vx.indexOf(n)>-1}}function Wx(e){var t=Fo(e,"extension");if(t)return Fo(t,"proj4")}function Yx(e){return e[0]==="+"}function $x(e){if(qx(e)){if(kx(e))return Jt[e];if(jx(e)){var t=uf(e);if(Hx(t))return Jt["EPSG:3857"];var n=Wx(t);return n?lf(n):t}if(Yx(e))return lf(e)}else return"projName"in e?e:uf(e)}function Pu(e,t){e=e||{};var n,o;if(!t)return e;for(o in t)n=t[o],n!==void 0&&(e[o]=n);return e}function to(e,t,n){var o=e*t;return n/Math.sqrt(1-o*o)}function Xr(e){return e<0?-1:1}function Ee(e){return Math.abs(e)<=Bt?e:e-Xr(e)*Br}function Ln(e,t,n){var o=e*n,i=.5*e;return o=Math.pow((1-o)/(1+o),i),Math.tan(.5*(ce-t))/o}function Gr(e,t){for(var n=.5*e,o,i,r=ce-2*Math.atan(t),a=0;a<=15;a++)if(o=e*Math.sin(r),i=ce-2*Math.atan(t*Math.pow((1-o)/(1+o),n))-r,r+=i,Math.abs(i)<=1e-10)return r;return-9999}function Xx(){var e=this.b/this.a;this.es=1-e*e,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=to(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function Zx(e){var t=e.x,n=e.y;if(n*Zn>90&&n*Zn<-90&&t*Zn>180&&t*Zn<-180)return null;var o,i;if(Math.abs(Math.abs(n)-ce)<=ye)return null;if(this.sphere)o=this.x0+this.a*this.k0*Ee(t-this.long0),i=this.y0+this.a*this.k0*Math.log(Math.tan(Ke+.5*n));else{var r=Math.sin(n),a=Ln(this.e,n,r);o=this.x0+this.a*this.k0*Ee(t-this.long0),i=this.y0-this.a*this.k0*Math.log(a)}return e.x=o,e.y=i,e}function Kx(e){var t=e.x-this.x0,n=e.y-this.y0,o,i;if(this.sphere)i=ce-2*Math.atan(Math.exp(-n/(this.a*this.k0)));else{var r=Math.exp(-n/(this.a*this.k0));if(i=Gr(this.e,r),i===-9999)return null}return o=Ee(this.long0+t/(this.a*this.k0)),e.x=o,e.y=i,e}var Qx=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","Mercator_Variant_A","merc"];const Jx={init:Xx,forward:Zx,inverse:Kx,names:Qx};function eO(){}function Iu(e){return e}var tO=["longlat","identity"];const nO={init:eO,forward:Iu,inverse:Iu,names:tO};var oO=[Jx,nO],$o={},xi=[];function Gm(e,t){var n=xi.length;return e.names?(xi[n]=e,e.names.forEach(function(o){$o[o.toLowerCase()]=n}),this):(console.log(t),!0)}function qm(e){return e.replace(/[-\(\)\s]+/g," ").trim().replace(/ /g,"_")}function iO(e){if(!e)return!1;var t=e.toLowerCase();if(typeof $o[t]<"u"&&xi[$o[t]]||(t=qm(t),t in $o&&xi[$o[t]]))return xi[$o[t]]}function rO(){oO.forEach(Gm)}const aO={start:rO,add:Gm,get:iO};var km={MERIT:{a:6378137,rf:298.257,ellipseName:"MERIT 1983"},SGS85:{a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},GRS80:{a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},IAU76:{a:6378140,rf:298.257,ellipseName:"IAU 1976"},airy:{a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"},APL4:{a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},NWL9D:{a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},mod_airy:{a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"},andrae:{a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},aust_SA:{a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},GRS67:{a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},bessel:{a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"},bess_nam:{a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},clrk66:{a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"},clrk80:{a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."},clrk80ign:{a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"},clrk58:{a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"},CPM:{a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},delmbr:{a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},engelis:{a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"},evrst30:{a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"},evrst48:{a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"},evrst56:{a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"},evrst69:{a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"},evrstSS:{a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},fschr60:{a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},fschr60m:{a:6378155,rf:298.3,ellipseName:"Fischer 1960"},fschr68:{a:6378150,rf:298.3,ellipseName:"Fischer 1968"},helmert:{a:6378200,rf:298.3,ellipseName:"Helmert 1906"},hough:{a:6378270,rf:297,ellipseName:"Hough"},intl:{a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},kaula:{a:6378163,rf:298.24,ellipseName:"Kaula 1961"},lerch:{a:6378139,rf:298.257,ellipseName:"Lerch 1979"},mprts:{a:6397300,rf:191,ellipseName:"Maupertius 1738"},new_intl:{a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"},plessis:{a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},krass:{a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},SEasia:{a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"},walbeck:{a:6376896,b:63558348467e-4,ellipseName:"Walbeck"},WGS60:{a:6378165,rf:298.3,ellipseName:"WGS 60"},WGS66:{a:6378145,rf:298.25,ellipseName:"WGS 66"},WGS7:{a:6378135,rf:298.26,ellipseName:"WGS 72"},WGS84:{a:6378137,rf:298.257223563,ellipseName:"WGS 84"},sphere:{a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"}};const sO=km.WGS84;function cO(e,t,n,o){var i=e*e,r=t*t,a=(i-r)/i,s=0;o?(e*=1-a*(Sx+a*(Ax+a*xx)),i=e*e,a=0):s=Math.sqrt(a);var c=(i-r)/r;return{es:a,e:s,ep2:c}}function fO(e,t,n,o,i){if(!e){var r=Fo(km,o);r||(r=sO),e=r.a,t=r.b,n=r.rf}return n&&!t&&(t=(1-1/n)*e),(n===0||Math.abs(e-t)<ye)&&(i=!0,t=e),{a:e,b:t,rf:n,sphere:i}}var Xa={wgs84:{towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},ch1903:{towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},ggrs87:{towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},nad83:{towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},nad27:{nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},potsdam:{towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},carthage:{towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},hermannskogel:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"},mgi:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"},osni52:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"},ire65:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},rassadiran:{towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},nzgd49:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},osgb36:{towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Ordnance Survey of Great Britain 1936"},s_jtsk:{towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},beduaram:{towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},gunung_segara:{towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},rnb72:{towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"},EPSG_5451:{towgs84:"6.41,-49.05,-11.28,1.5657,0.5242,6.9718,-5.7649"},IGNF_LURESG:{towgs84:"-192.986,13.673,-39.309,-0.4099,-2.9332,2.6881,0.43"},EPSG_4614:{towgs84:"-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065"},EPSG_4615:{towgs84:"-494.088,-312.129,279.877,-1.423,-1.013,1.59,-0.748"},ESRI_37241:{towgs84:"-76.822,257.457,-12.817,2.136,-0.033,-2.392,-0.031"},ESRI_37249:{towgs84:"-440.296,58.548,296.265,1.128,10.202,4.559,-0.438"},ESRI_37245:{towgs84:"-511.151,-181.269,139.609,1.05,2.703,1.798,3.071"},EPSG_4178:{towgs84:"24.9,-126.4,-93.2,-0.063,-0.247,-0.041,1.01"},EPSG_4622:{towgs84:"-472.29,-5.63,-304.12,0.4362,-0.8374,0.2563,1.8984"},EPSG_4625:{towgs84:"126.93,547.94,130.41,-2.7867,5.1612,-0.8584,13.8227"},EPSG_5252:{towgs84:"0.023,0.036,-0.068,0.00176,0.00912,-0.01136,0.00439"},EPSG_4314:{towgs84:"597.1,71.4,412.1,0.894,0.068,-1.563,7.58"},EPSG_4282:{towgs84:"-178.3,-316.7,-131.5,5.278,6.077,10.979,19.166"},EPSG_4231:{towgs84:"-83.11,-97.38,-117.22,0.0276,-0.2167,0.2147,0.1218"},EPSG_4274:{towgs84:"-230.994,102.591,25.199,0.633,-0.239,0.9,1.95"},EPSG_4134:{towgs84:"-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006"},EPSG_4254:{towgs84:"18.38,192.45,96.82,0.056,-0.142,-0.2,-0.0013"},EPSG_4159:{towgs84:"-194.513,-63.978,-25.759,-3.4027,3.756,-3.352,-0.9175"},EPSG_4687:{towgs84:"0.072,-0.507,-0.245,0.0183,-0.0003,0.007,-0.0093"},EPSG_4227:{towgs84:"-83.58,-397.54,458.78,-17.595,-2.847,4.256,3.225"},EPSG_4746:{towgs84:"599.4,72.4,419.2,-0.062,-0.022,-2.723,6.46"},EPSG_4745:{towgs84:"612.4,77,440.2,-0.054,0.057,-2.797,2.55"},EPSG_6311:{towgs84:"8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926"},EPSG_4289:{towgs84:"565.7381,50.4018,465.2904,-1.91514,1.60363,-9.09546,4.07244"},EPSG_4230:{towgs84:"-68.863,-134.888,-111.49,-0.53,-0.14,0.57,-3.4"},EPSG_4154:{towgs84:"-123.02,-158.95,-168.47"},EPSG_4156:{towgs84:"570.8,85.7,462.8,4.998,1.587,5.261,3.56"},EPSG_4299:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4179:{towgs84:"33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84"},EPSG_4313:{towgs84:"-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747"},EPSG_4194:{towgs84:"163.511,127.533,-159.789"},EPSG_4195:{towgs84:"105,326,-102.5"},EPSG_4196:{towgs84:"-45,417,-3.5"},EPSG_4611:{towgs84:"-162.619,-276.959,-161.764,0.067753,-2.243649,-1.158827,-1.094246"},EPSG_4633:{towgs84:"137.092,131.66,91.475,-1.9436,-11.5993,-4.3321,-7.4824"},EPSG_4641:{towgs84:"-408.809,366.856,-412.987,1.8842,-0.5308,2.1655,-121.0993"},EPSG_4643:{towgs84:"-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002"},EPSG_4300:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4188:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4660:{towgs84:"982.6087,552.753,-540.873,32.39344,-153.25684,-96.2266,16.805"},EPSG_4662:{towgs84:"97.295,-263.247,310.882,-1.5999,0.8386,3.1409,13.3259"},EPSG_3906:{towgs84:"577.88891,165.22205,391.18289,4.9145,-0.94729,-13.05098,7.78664"},EPSG_4307:{towgs84:"-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547"},EPSG_6892:{towgs84:"-76.269,-16.683,68.562,-6.275,10.536,-4.286,-13.686"},EPSG_4690:{towgs84:"221.597,152.441,176.523,2.403,1.3893,0.884,11.4648"},EPSG_4691:{towgs84:"218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817"},EPSG_4629:{towgs84:"72.51,345.411,79.241,-1.5862,-0.8826,-0.5495,1.3653"},EPSG_4630:{towgs84:"165.804,216.213,180.26,-0.6251,-0.4515,-0.0721,7.4111"},EPSG_4692:{towgs84:"217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093"},EPSG_9333:{towgs84:"0,0,0,-8.393,0.749,-10.276,0"},EPSG_9059:{towgs84:"0,0,0"},EPSG_4312:{towgs84:"601.705,84.263,485.227,4.7354,1.3145,5.393,-2.3887"},EPSG_4123:{towgs84:"-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496"},EPSG_4309:{towgs84:"-124.45,183.74,44.64,-0.4384,0.5446,-0.9706,-2.1365"},ESRI_104106:{towgs84:"-283.088,-70.693,117.445,-1.157,0.059,-0.652,-4.058"},EPSG_4281:{towgs84:"-219.247,-73.802,269.529"},EPSG_4322:{towgs84:"0,0,4.5"},EPSG_4324:{towgs84:"0,0,1.9"},EPSG_4284:{towgs84:"43.822,-108.842,-119.585,1.455,-0.761,0.737,0.549"},EPSG_4277:{towgs84:"446.448,-125.157,542.06,0.15,0.247,0.842,-20.489"},EPSG_4207:{towgs84:"-282.1,-72.2,120,-1.529,0.145,-0.89,-4.46"},EPSG_4688:{towgs84:"347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647"},EPSG_4689:{towgs84:"410.793,54.542,80.501,-2.5596,-2.3517,-0.6594,17.3218"},EPSG_4720:{towgs84:"0,0,4.5"},EPSG_4273:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},EPSG_4240:{towgs84:"204.64,834.74,293.8"},EPSG_4817:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},ESRI_104131:{towgs84:"426.62,142.62,460.09,4.98,4.49,-12.42,-17.1"},EPSG_4265:{towgs84:"-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68"},EPSG_4263:{towgs84:"-111.92,-87.85,114.5,1.875,0.202,0.219,0.032"},EPSG_4298:{towgs84:"-689.5937,623.84046,-65.93566,-0.02331,1.17094,-0.80054,5.88536"},EPSG_4270:{towgs84:"-253.4392,-148.452,386.5267,0.15605,0.43,-0.1013,-0.0424"},EPSG_4229:{towgs84:"-121.8,98.1,-10.7"},EPSG_4220:{towgs84:"-55.5,-348,-229.2"},EPSG_4214:{towgs84:"12.646,-155.176,-80.863"},EPSG_4232:{towgs84:"-345,3,223"},EPSG_4238:{towgs84:"-1.977,-13.06,-9.993,0.364,0.254,0.689,-1.037"},EPSG_4168:{towgs84:"-170,33,326"},EPSG_4131:{towgs84:"199,931,318.9"},EPSG_4152:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_5228:{towgs84:"572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378"},EPSG_8351:{towgs84:"485.021,169.465,483.839,7.786342,4.397554,4.102655,0"},EPSG_4683:{towgs84:"-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06"},EPSG_4133:{towgs84:"0,0,0"},EPSG_7373:{towgs84:"0.819,-0.5762,-1.6446,-0.00378,-0.03317,0.00318,0.0693"},EPSG_9075:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9072:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9294:{towgs84:"1.16835,-1.42001,-2.24431,-0.00822,-0.05508,0.01818,0.23388"},EPSG_4212:{towgs84:"-267.434,173.496,181.814,-13.4704,8.7154,7.3926,14.7492"},EPSG_4191:{towgs84:"-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703"},EPSG_4237:{towgs84:"52.684,-71.194,-13.975,-0.312,-0.1063,-0.3729,1.0191"},EPSG_4740:{towgs84:"-1.08,-0.27,-0.9"},EPSG_4124:{towgs84:"419.3836,99.3335,591.3451,0.850389,1.817277,-7.862238,-0.99496"},EPSG_5681:{towgs84:"584.9636,107.7175,413.8067,1.1155,0.2824,-3.1384,7.9922"},EPSG_4141:{towgs84:"23.772,17.49,17.859,-0.3132,-1.85274,1.67299,-5.4262"},EPSG_4204:{towgs84:"-85.645,-273.077,-79.708,2.289,-1.421,2.532,3.194"},EPSG_4319:{towgs84:"226.702,-193.337,-35.371,-2.229,-4.391,9.238,0.9798"},EPSG_4200:{towgs84:"24.82,-131.21,-82.66"},EPSG_4130:{towgs84:"0,0,0"},EPSG_4127:{towgs84:"-82.875,-57.097,-156.768,-2.158,1.524,-0.982,-0.359"},EPSG_4149:{towgs84:"674.374,15.056,405.346"},EPSG_4617:{towgs84:"-0.991,1.9072,0.5129,1.25033e-7,4.6785e-8,5.6529e-8,0"},EPSG_4663:{towgs84:"-210.502,-66.902,-48.476,2.094,-15.067,-5.817,0.485"},EPSG_4664:{towgs84:"-211.939,137.626,58.3,-0.089,0.251,0.079,0.384"},EPSG_4665:{towgs84:"-105.854,165.589,-38.312,-0.003,-0.026,0.024,-0.048"},EPSG_4666:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},EPSG_4756:{towgs84:"-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188"},EPSG_4723:{towgs84:"-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925"},EPSG_4726:{towgs84:"8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081"},EPSG_4267:{towgs84:"-8.0,160.0,176.0"},EPSG_5365:{towgs84:"-0.16959,0.35312,0.51846,0.03385,-0.16325,0.03446,0.03693"},EPSG_4218:{towgs84:"304.5,306.5,-318.1"},EPSG_4242:{towgs84:"-33.722,153.789,94.959,-8.581,-4.478,4.54,8.95"},EPSG_4216:{towgs84:"-292.295,248.758,429.447,4.9971,2.99,6.6906,1.0289"},ESRI_104105:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},ESRI_104129:{towgs84:"0,0,0"},EPSG_4673:{towgs84:"174.05,-25.49,112.57"},EPSG_4202:{towgs84:"-124,-60,154"},EPSG_4203:{towgs84:"-117.763,-51.51,139.061,0.292,0.443,0.277,-0.191"},EPSG_3819:{towgs84:"595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408"},EPSG_8694:{towgs84:"-93.799,-132.737,-219.073,-1.844,0.648,-6.37,-0.169"},EPSG_4145:{towgs84:"275.57,676.78,229.6"},EPSG_4283:{towgs84:"61.55,-10.87,-40.19,39.4924,32.7221,32.8979,-9.994"},EPSG_4317:{towgs84:"2.3287,-147.0425,-92.0802,-0.3092483,0.32482185,0.49729934,5.68906266"},EPSG_4272:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993"},EPSG_4248:{towgs84:"-307.7,265.3,-363.5"},EPSG_5561:{towgs84:"24,-121,-76"},EPSG_5233:{towgs84:"-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338"},ESRI_104130:{towgs84:"-86,-98,-119"},ESRI_104102:{towgs84:"682,-203,480"},ESRI_37207:{towgs84:"7,-10,-26"},EPSG_4675:{towgs84:"59.935,118.4,-10.871"},ESRI_104109:{towgs84:"-89.121,-348.182,260.871"},ESRI_104112:{towgs84:"-185.583,-230.096,281.361"},ESRI_104113:{towgs84:"25.1,-275.6,222.6"},IGNF_WGS72G:{towgs84:"0,12,6"},IGNF_NTFG:{towgs84:"-168,-60,320"},IGNF_EFATE57G:{towgs84:"-127,-769,472"},IGNF_PGP50G:{towgs84:"324.8,153.6,172.1"},IGNF_REUN47G:{towgs84:"94,-948,-1262"},IGNF_CSG67G:{towgs84:"-186,230,110"},IGNF_GUAD48G:{towgs84:"-467,-16,-300"},IGNF_TAHI51G:{towgs84:"162,117,154"},IGNF_TAHAAG:{towgs84:"65,342,77"},IGNF_NUKU72G:{towgs84:"84,274,65"},IGNF_PETRELS72G:{towgs84:"365,194,166"},IGNF_WALL78G:{towgs84:"253,-133,-127"},IGNF_MAYO50G:{towgs84:"-382,-59,-262"},IGNF_TANNAG:{towgs84:"-139,-967,436"},IGNF_IGN72G:{towgs84:"-13,-348,292"},IGNF_ATIGG:{towgs84:"1118,23,66"},IGNF_FANGA84G:{towgs84:"150.57,158.33,118.32"},IGNF_RUSAT84G:{towgs84:"202.13,174.6,-15.74"},IGNF_KAUE70G:{towgs84:"126.74,300.1,-75.49"},IGNF_MOP90G:{towgs84:"-10.8,-1.8,12.77"},IGNF_MHPF67G:{towgs84:"338.08,212.58,-296.17"},IGNF_TAHI79G:{towgs84:"160.61,116.05,153.69"},IGNF_ANAA92G:{towgs84:"1.5,3.84,4.81"},IGNF_MARQUI72G:{towgs84:"330.91,-13.92,58.56"},IGNF_APAT86G:{towgs84:"143.6,197.82,74.05"},IGNF_TUBU69G:{towgs84:"237.17,171.61,-77.84"},IGNF_STPM50G:{towgs84:"11.363,424.148,373.13"},EPSG_4150:{towgs84:"674.374,15.056,405.346"},EPSG_4754:{towgs84:"-208.4058,-109.8777,-2.5764"},ESRI_104101:{towgs84:"374,150,588"},EPSG_4693:{towgs84:"0,-0.15,0.68"},EPSG_6207:{towgs84:"293.17,726.18,245.36"},EPSG_4153:{towgs84:"-133.63,-157.5,-158.62"},EPSG_4132:{towgs84:"-241.54,-163.64,396.06"},EPSG_4221:{towgs84:"-154.5,150.7,100.4"},EPSG_4266:{towgs84:"-80.7,-132.5,41.1"},EPSG_4193:{towgs84:"-70.9,-151.8,-41.4"},EPSG_5340:{towgs84:"-0.41,0.46,-0.35"},EPSG_4246:{towgs84:"-294.7,-200.1,525.5"},EPSG_4318:{towgs84:"-3.2,-5.7,2.8"},EPSG_4121:{towgs84:"-199.87,74.79,246.62"},EPSG_4223:{towgs84:"-260.1,5.5,432.2"},EPSG_4158:{towgs84:"-0.465,372.095,171.736"},EPSG_4285:{towgs84:"-128.16,-282.42,21.93"},EPSG_4613:{towgs84:"-404.78,685.68,45.47"},EPSG_4607:{towgs84:"195.671,332.517,274.607"},EPSG_4475:{towgs84:"-381.788,-57.501,-256.673"},EPSG_4208:{towgs84:"-157.84,308.54,-146.6"},EPSG_4743:{towgs84:"70.995,-335.916,262.898"},EPSG_4710:{towgs84:"-323.65,551.39,-491.22"},EPSG_7881:{towgs84:"-0.077,0.079,0.086"},EPSG_4682:{towgs84:"283.729,735.942,261.143"},EPSG_4739:{towgs84:"-156,-271,-189"},EPSG_4679:{towgs84:"-80.01,253.26,291.19"},EPSG_4750:{towgs84:"-56.263,16.136,-22.856"},EPSG_4644:{towgs84:"-10.18,-350.43,291.37"},EPSG_4695:{towgs84:"-103.746,-9.614,-255.95"},EPSG_4292:{towgs84:"-355,21,72"},EPSG_4302:{towgs84:"-61.702,284.488,472.052"},EPSG_4143:{towgs84:"-124.76,53,466.79"},EPSG_4606:{towgs84:"-153,153,307"},EPSG_4699:{towgs84:"-770.1,158.4,-498.2"},EPSG_4247:{towgs84:"-273.5,110.6,-357.9"},EPSG_4160:{towgs84:"8.88,184.86,106.69"},EPSG_4161:{towgs84:"-233.43,6.65,173.64"},EPSG_9251:{towgs84:"-9.5,122.9,138.2"},EPSG_9253:{towgs84:"-78.1,101.6,133.3"},EPSG_4297:{towgs84:"-198.383,-240.517,-107.909"},EPSG_4269:{towgs84:"0,0,0"},EPSG_4301:{towgs84:"-147,506,687"},EPSG_4618:{towgs84:"-59,-11,-52"},EPSG_4612:{towgs84:"0,0,0"},EPSG_4678:{towgs84:"44.585,-131.212,-39.544"},EPSG_4250:{towgs84:"-130,29,364"},EPSG_4144:{towgs84:"214,804,268"},EPSG_4147:{towgs84:"-17.51,-108.32,-62.39"},EPSG_4259:{towgs84:"-254.1,-5.36,-100.29"},EPSG_4164:{towgs84:"-76,-138,67"},EPSG_4211:{towgs84:"-378.873,676.002,-46.255"},EPSG_4182:{towgs84:"-422.651,-172.995,84.02"},EPSG_4224:{towgs84:"-143.87,243.37,-33.52"},EPSG_4225:{towgs84:"-205.57,168.77,-4.12"},EPSG_5527:{towgs84:"-67.35,3.88,-38.22"},EPSG_4752:{towgs84:"98,390,-22"},EPSG_4310:{towgs84:"-30,190,89"},EPSG_9248:{towgs84:"-192.26,65.72,132.08"},EPSG_4680:{towgs84:"124.5,-63.5,-281"},EPSG_4701:{towgs84:"-79.9,-158,-168.9"},EPSG_4706:{towgs84:"-146.21,112.63,4.05"},EPSG_4805:{towgs84:"682,-203,480"},EPSG_4201:{towgs84:"-165,-11,206"},EPSG_4210:{towgs84:"-157,-2,-299"},EPSG_4183:{towgs84:"-104,167,-38"},EPSG_4139:{towgs84:"11,72,-101"},EPSG_4668:{towgs84:"-86,-98,-119"},EPSG_4717:{towgs84:"-2,151,181"},EPSG_4732:{towgs84:"102,52,-38"},EPSG_4280:{towgs84:"-377,681,-50"},EPSG_4209:{towgs84:"-138,-105,-289"},EPSG_4261:{towgs84:"31,146,47"},EPSG_4658:{towgs84:"-73,46,-86"},EPSG_4721:{towgs84:"265.025,384.929,-194.046"},EPSG_4222:{towgs84:"-136,-108,-292"},EPSG_4601:{towgs84:"-255,-15,71"},EPSG_4602:{towgs84:"725,685,536"},EPSG_4603:{towgs84:"72,213.7,93"},EPSG_4605:{towgs84:"9,183,236"},EPSG_4621:{towgs84:"137,248,-430"},EPSG_4657:{towgs84:"-28,199,5"},EPSG_4316:{towgs84:"103.25,-100.4,-307.19"},EPSG_4642:{towgs84:"-13,-348,292"},EPSG_4698:{towgs84:"145,-187,103"},EPSG_4192:{towgs84:"-206.1,-174.7,-87.7"},EPSG_4311:{towgs84:"-265,120,-358"},EPSG_4135:{towgs84:"58,-283,-182"},ESRI_104138:{towgs84:"198,-226,-347"},EPSG_4245:{towgs84:"-11,851,5"},EPSG_4142:{towgs84:"-125,53,467"},EPSG_4213:{towgs84:"-106,-87,188"},EPSG_4253:{towgs84:"-133,-77,-51"},EPSG_4129:{towgs84:"-132,-110,-335"},EPSG_4713:{towgs84:"-77,-128,142"},EPSG_4239:{towgs84:"217,823,299"},EPSG_4146:{towgs84:"295,736,257"},EPSG_4155:{towgs84:"-83,37,124"},EPSG_4165:{towgs84:"-173,253,27"},EPSG_4672:{towgs84:"175,-38,113"},EPSG_4236:{towgs84:"-637,-549,-203"},EPSG_4251:{towgs84:"-90,40,88"},EPSG_4271:{towgs84:"-2,374,172"},EPSG_4175:{towgs84:"-88,4,101"},EPSG_4716:{towgs84:"298,-304,-375"},EPSG_4315:{towgs84:"-23,259,-9"},EPSG_4744:{towgs84:"-242.2,-144.9,370.3"},EPSG_4244:{towgs84:"-97,787,86"},EPSG_4293:{towgs84:"616,97,-251"},EPSG_4714:{towgs84:"-127,-769,472"},EPSG_4736:{towgs84:"260,12,-147"},EPSG_6883:{towgs84:"-235,-110,393"},EPSG_6894:{towgs84:"-63,176,185"},EPSG_4205:{towgs84:"-43,-163,45"},EPSG_4256:{towgs84:"41,-220,-134"},EPSG_4262:{towgs84:"639,405,60"},EPSG_4604:{towgs84:"174,359,365"},EPSG_4169:{towgs84:"-115,118,426"},EPSG_4620:{towgs84:"-106,-129,165"},EPSG_4184:{towgs84:"-203,141,53"},EPSG_4616:{towgs84:"-289,-124,60"},EPSG_9403:{towgs84:"-307,-92,127"},EPSG_4684:{towgs84:"-133,-321,50"},EPSG_4708:{towgs84:"-491,-22,435"},EPSG_4707:{towgs84:"114,-116,-333"},EPSG_4709:{towgs84:"145,75,-272"},EPSG_4712:{towgs84:"-205,107,53"},EPSG_4711:{towgs84:"124,-234,-25"},EPSG_4718:{towgs84:"230,-199,-752"},EPSG_4719:{towgs84:"211,147,111"},EPSG_4724:{towgs84:"208,-435,-229"},EPSG_4725:{towgs84:"189,-79,-202"},EPSG_4735:{towgs84:"647,1777,-1124"},EPSG_4722:{towgs84:"-794,119,-298"},EPSG_4728:{towgs84:"-307,-92,127"},EPSG_4734:{towgs84:"-632,438,-609"},EPSG_4727:{towgs84:"912,-58,1227"},EPSG_4729:{towgs84:"185,165,42"},EPSG_4730:{towgs84:"170,42,84"},EPSG_4733:{towgs84:"276,-57,149"},ESRI_37218:{towgs84:"230,-199,-752"},ESRI_37240:{towgs84:"-7,215,225"},ESRI_37221:{towgs84:"252,-209,-751"},ESRI_4305:{towgs84:"-123,-206,219"},ESRI_104139:{towgs84:"-73,-247,227"},EPSG_4748:{towgs84:"51,391,-36"},EPSG_4219:{towgs84:"-384,664,-48"},EPSG_4255:{towgs84:"-333,-222,114"},EPSG_4257:{towgs84:"-587.8,519.75,145.76"},EPSG_4646:{towgs84:"-963,510,-359"},EPSG_6881:{towgs84:"-24,-203,268"},EPSG_6882:{towgs84:"-183,-15,273"},EPSG_4715:{towgs84:"-104,-129,239"},IGNF_RGF93GDD:{towgs84:"0,0,0"},IGNF_RGM04GDD:{towgs84:"0,0,0"},IGNF_RGSPM06GDD:{towgs84:"0,0,0"},IGNF_RGTAAF07GDD:{towgs84:"0,0,0"},IGNF_RGFG95GDD:{towgs84:"0,0,0"},IGNF_RGNCG:{towgs84:"0,0,0"},IGNF_RGPFGDD:{towgs84:"0,0,0"},IGNF_ETRS89G:{towgs84:"0,0,0"},IGNF_RGR92GDD:{towgs84:"0,0,0"},EPSG_4173:{towgs84:"0,0,0"},EPSG_4180:{towgs84:"0,0,0"},EPSG_4619:{towgs84:"0,0,0"},EPSG_4667:{towgs84:"0,0,0"},EPSG_4075:{towgs84:"0,0,0"},EPSG_6706:{towgs84:"0,0,0"},EPSG_7798:{towgs84:"0,0,0"},EPSG_4661:{towgs84:"0,0,0"},EPSG_4669:{towgs84:"0,0,0"},EPSG_8685:{towgs84:"0,0,0"},EPSG_4151:{towgs84:"0,0,0"},EPSG_9702:{towgs84:"0,0,0"},EPSG_4758:{towgs84:"0,0,0"},EPSG_4761:{towgs84:"0,0,0"},EPSG_4765:{towgs84:"0,0,0"},EPSG_8997:{towgs84:"0,0,0"},EPSG_4023:{towgs84:"0,0,0"},EPSG_4670:{towgs84:"0,0,0"},EPSG_4694:{towgs84:"0,0,0"},EPSG_4148:{towgs84:"0,0,0"},EPSG_4163:{towgs84:"0,0,0"},EPSG_4167:{towgs84:"0,0,0"},EPSG_4189:{towgs84:"0,0,0"},EPSG_4190:{towgs84:"0,0,0"},EPSG_4176:{towgs84:"0,0,0"},EPSG_4659:{towgs84:"0,0,0"},EPSG_3824:{towgs84:"0,0,0"},EPSG_3889:{towgs84:"0,0,0"},EPSG_4046:{towgs84:"0,0,0"},EPSG_4081:{towgs84:"0,0,0"},EPSG_4558:{towgs84:"0,0,0"},EPSG_4483:{towgs84:"0,0,0"},EPSG_5013:{towgs84:"0,0,0"},EPSG_5264:{towgs84:"0,0,0"},EPSG_5324:{towgs84:"0,0,0"},EPSG_5354:{towgs84:"0,0,0"},EPSG_5371:{towgs84:"0,0,0"},EPSG_5373:{towgs84:"0,0,0"},EPSG_5381:{towgs84:"0,0,0"},EPSG_5393:{towgs84:"0,0,0"},EPSG_5489:{towgs84:"0,0,0"},EPSG_5593:{towgs84:"0,0,0"},EPSG_6135:{towgs84:"0,0,0"},EPSG_6365:{towgs84:"0,0,0"},EPSG_5246:{towgs84:"0,0,0"},EPSG_7886:{towgs84:"0,0,0"},EPSG_8431:{towgs84:"0,0,0"},EPSG_8427:{towgs84:"0,0,0"},EPSG_8699:{towgs84:"0,0,0"},EPSG_8818:{towgs84:"0,0,0"},EPSG_4757:{towgs84:"0,0,0"},EPSG_9140:{towgs84:"0,0,0"},EPSG_8086:{towgs84:"0,0,0"},EPSG_4686:{towgs84:"0,0,0"},EPSG_4737:{towgs84:"0,0,0"},EPSG_4702:{towgs84:"0,0,0"},EPSG_4747:{towgs84:"0,0,0"},EPSG_4749:{towgs84:"0,0,0"},EPSG_4674:{towgs84:"0,0,0"},EPSG_4755:{towgs84:"0,0,0"},EPSG_4759:{towgs84:"0,0,0"},EPSG_4762:{towgs84:"0,0,0"},EPSG_4763:{towgs84:"0,0,0"},EPSG_4764:{towgs84:"0,0,0"},EPSG_4166:{towgs84:"0,0,0"},EPSG_4170:{towgs84:"0,0,0"},EPSG_5546:{towgs84:"0,0,0"},EPSG_7844:{towgs84:"0,0,0"},EPSG_4818:{towgs84:"589,76,480"}};for(var hO in Xa){var Pc=Xa[hO];Pc.datumName&&(Xa[Pc.datumName]=Pc)}function lO(e,t,n,o,i,r,a){var s={};return e===void 0||e==="none"?s.datum_type=hf:s.datum_type=vx,t&&(s.datum_params=t.map(parseFloat),(s.datum_params[0]!==0||s.datum_params[1]!==0||s.datum_params[2]!==0)&&(s.datum_type=ii),s.datum_params.length>3&&(s.datum_params[3]!==0||s.datum_params[4]!==0||s.datum_params[5]!==0||s.datum_params[6]!==0)&&(s.datum_type=ri,s.datum_params[3]*=Tr,s.datum_params[4]*=Tr,s.datum_params[5]*=Tr,s.datum_params[6]=s.datum_params[6]/1e6+1)),a&&(s.datum_type=Pi,s.grids=a),s.a=n,s.b=o,s.es=i,s.ep2=r,s}var oh={};function uO(e,t,n){return t instanceof ArrayBuffer?dO(e,t,n):{ready:mO(e,t)}}function dO(e,t,n){var o=!0;n!==void 0&&n.includeErrorFields===!1&&(o=!1);var i=new DataView(t),r=gO(i),a=yO(i,r),s=bO(i,a,r,o),c={header:a,subgrids:s};return oh[e]=c,c}async function mO(e,t){for(var n=[],o=await t.getImageCount(),i=o-1;i>=0;i--){var r=await t.getImage(i),a=await r.readRasters(),s=a,c=[r.getWidth(),r.getHeight()],f=r.getBoundingBox().map(zu),d=[r.fileDirectory.ModelPixelScale[0],r.fileDirectory.ModelPixelScale[1]].map(zu),u=f[0]+(c[0]-1)*d[0],m=f[3]-(c[1]-1)*d[1],_=s[0],g=s[1],y=[];for(let S=c[1]-1;S>=0;S--)for(let O=c[0]-1;O>=0;O--){var E=S*c[0]+O;y.push([-Io(g[E]),Io(_[E])])}n.push({del:d,lim:c,ll:[-u,m],cvs:y})}var A={header:{nSubgrids:o},subgrids:n};return oh[e]=A,A}function pO(e){if(e===void 0)return null;var t=e.split(",");return t.map(_O)}function _O(e){if(e.length===0)return null;var t=e[0]==="@";return t&&(e=e.slice(1)),e==="null"?{name:"null",mandatory:!t,grid:null,isNull:!0}:{name:e,mandatory:!t,grid:oh[e]||null,isNull:!1}}function zu(e){return e*Math.PI/180}function Io(e){return e/3600*Math.PI/180}function gO(e){var t=e.getInt32(8,!1);return t===11?!1:(t=e.getInt32(8,!0),t!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function yO(e,t){return{nFields:e.getInt32(8,t),nSubgridFields:e.getInt32(24,t),nSubgrids:e.getInt32(40,t),shiftType:df(e,56,64).trim(),fromSemiMajorAxis:e.getFloat64(120,t),fromSemiMinorAxis:e.getFloat64(136,t),toSemiMajorAxis:e.getFloat64(152,t),toSemiMinorAxis:e.getFloat64(168,t)}}function df(e,t,n){return String.fromCharCode.apply(null,new Uint8Array(e.buffer.slice(t,n)))}function bO(e,t,n,o){for(var i=176,r=[],a=0;a<t.nSubgrids;a++){var s=wO(e,i,n),c=vO(e,i,s,n,o),f=Math.round(1+(s.upperLongitude-s.lowerLongitude)/s.longitudeInterval),d=Math.round(1+(s.upperLatitude-s.lowerLatitude)/s.latitudeInterval);r.push({ll:[Io(s.lowerLongitude),Io(s.lowerLatitude)],del:[Io(s.longitudeInterval),Io(s.latitudeInterval)],lim:[f,d],count:s.gridNodeCount,cvs:EO(c)});var u=16;o===!1&&(u=8),i+=176+s.gridNodeCount*u}return r}function EO(e){return e.map(function(t){return[Io(t.longitudeShift),Io(t.latitudeShift)]})}function wO(e,t,n){return{name:df(e,t+8,t+16).trim(),parent:df(e,t+24,t+24+8).trim(),lowerLatitude:e.getFloat64(t+72,n),upperLatitude:e.getFloat64(t+88,n),lowerLongitude:e.getFloat64(t+104,n),upperLongitude:e.getFloat64(t+120,n),latitudeInterval:e.getFloat64(t+136,n),longitudeInterval:e.getFloat64(t+152,n),gridNodeCount:e.getInt32(t+168,n)}}function vO(e,t,n,o,i){var r=t+176,a=16;i===!1&&(a=8);for(var s=[],c=0;c<n.gridNodeCount;c++){var f={latitudeShift:e.getFloat32(r+c*a,o),longitudeShift:e.getFloat32(r+c*a+4,o)};i!==!1&&(f.latitudeAccuracy=e.getFloat32(r+c*a+8,o),f.longitudeAccuracy=e.getFloat32(r+c*a+12,o)),s.push(f)}return s}function Fn(e,t){if(!(this instanceof Fn))return new Fn(e);this.forward=null,this.inverse=null,this.name,this.title,t=t||function(f){if(f)throw f};var n=$x(e);if(typeof n!="object"){t("Could not parse to valid json: "+e);return}var o=Fn.projections.get(n.projName);if(!o){t("Could not get projection name from: "+e);return}if(n.datumCode&&n.datumCode!=="none"){var i=Fo(Xa,n.datumCode);i&&(n.datum_params=n.datum_params||(i.towgs84?i.towgs84.split(","):null),n.ellps=i.ellipse,n.datumName=i.datumName?i.datumName:n.datumCode)}n.k0=n.k0||1,n.axis=n.axis||"enu",n.ellps=n.ellps||"wgs84",n.lat1=n.lat1||n.lat0;var r=fO(n.a,n.b,n.rf,n.ellps,n.sphere),a=cO(r.a,r.b,r.rf,n.R_A),s=pO(n.nadgrids),c=n.datum||lO(n.datumCode,n.datum_params,r.a,r.b,a.es,a.ep2,s);Pu(this,n),Pu(this,o),this.a=r.a,this.b=r.b,this.rf=r.rf,this.sphere=r.sphere,this.es=a.es,this.e=a.e,this.ep2=a.ep2,this.datum=c,"init"in this&&typeof this.init=="function"&&this.init(),t(null,this)}Fn.projections=aO;Fn.projections.start();function TO(e,t){return e.datum_type!==t.datum_type||e.a!==t.a||Math.abs(e.es-t.es)>5e-11?!1:e.datum_type===ii?e.datum_params[0]===t.datum_params[0]&&e.datum_params[1]===t.datum_params[1]&&e.datum_params[2]===t.datum_params[2]:e.datum_type===ri?e.datum_params[0]===t.datum_params[0]&&e.datum_params[1]===t.datum_params[1]&&e.datum_params[2]===t.datum_params[2]&&e.datum_params[3]===t.datum_params[3]&&e.datum_params[4]===t.datum_params[4]&&e.datum_params[5]===t.datum_params[5]&&e.datum_params[6]===t.datum_params[6]:!0}function jm(e,t,n){var o=e.x,i=e.y,r=e.z?e.z:0,a,s,c,f;if(i<-ce&&i>-1.001*ce)i=-ce;else if(i>ce&&i<1.001*ce)i=ce;else{if(i<-ce)return{x:-1/0,y:-1/0,z:e.z};if(i>ce)return{x:1/0,y:1/0,z:e.z}}return o>Math.PI&&(o-=2*Math.PI),s=Math.sin(i),f=Math.cos(i),c=s*s,a=n/Math.sqrt(1-t*c),{x:(a+r)*f*Math.cos(o),y:(a+r)*f*Math.sin(o),z:(a*(1-t)+r)*s}}function Vm(e,t,n,o){var i=1e-12,r=i*i,a=30,s,c,f,d,u,m,_,g,y,E,A,S,O,M=e.x,R=e.y,N=e.z?e.z:0,F,z,G;if(s=Math.sqrt(M*M+R*R),c=Math.sqrt(M*M+R*R+N*N),s/n<i){if(F=0,c/n<i)return z=ce,G=-o,{x:e.x,y:e.y,z:e.z}}else F=Math.atan2(R,M);f=N/c,d=s/c,u=1/Math.sqrt(1-t*(2-t)*d*d),g=d*(1-t)*u,y=f*u,O=0;do O++,_=n/Math.sqrt(1-t*y*y),G=s*g+N*y-_*(1-t*y*y),m=t*_/(_+G),u=1/Math.sqrt(1-m*(2-m)*d*d),E=d*(1-m)*u,A=f*u,S=A*g-E*y,g=E,y=A;while(S*S>r&&O<a);return z=Math.atan(A/Math.abs(E)),{x:F,y:z,z:G}}function SO(e,t,n){if(t===ii)return{x:e.x+n[0],y:e.y+n[1],z:e.z+n[2]};if(t===ri){var o=n[0],i=n[1],r=n[2],a=n[3],s=n[4],c=n[5],f=n[6];return{x:f*(e.x-c*e.y+s*e.z)+o,y:f*(c*e.x+e.y-a*e.z)+i,z:f*(-s*e.x+a*e.y+e.z)+r}}}function AO(e,t,n){if(t===ii)return{x:e.x-n[0],y:e.y-n[1],z:e.z-n[2]};if(t===ri){var o=n[0],i=n[1],r=n[2],a=n[3],s=n[4],c=n[5],f=n[6],d=(e.x-o)/f,u=(e.y-i)/f,m=(e.z-r)/f;return{x:d+c*u-s*m,y:-c*d+u+a*m,z:s*d-a*u+m}}}function Da(e){return e===ii||e===ri}function xO(e,t,n){if(TO(e,t)||e.datum_type===hf||t.datum_type===hf)return n;var o=e.a,i=e.es;if(e.datum_type===Pi){var r=Nu(e,!1,n);if(r!==0)return;o=Au,i=xu}var a=t.a,s=t.b,c=t.es;if(t.datum_type===Pi&&(a=Au,s=Tx,c=xu),i===c&&o===a&&!Da(e.datum_type)&&!Da(t.datum_type))return n;if(n=jm(n,i,o),Da(e.datum_type)&&(n=SO(n,e.datum_type,e.datum_params)),Da(t.datum_type)&&(n=AO(n,t.datum_type,t.datum_params)),n=Vm(n,c,a,s),t.datum_type===Pi){var f=Nu(t,!0,n);if(f!==0)return}return n}function Nu(e,t,n){if(e.grids===null||e.grids.length===0)return console.log("Grid shift grids not found"),-1;var o={x:-n.x,y:n.y},i={x:Number.NaN,y:Number.NaN},r=[];e:for(var a=0;a<e.grids.length;a++){var s=e.grids[a];if(r.push(s.name),s.isNull){i=o;break}if(s.grid===null){if(s.mandatory)return console.log("Unable to find mandatory grid '"+s.name+"'"),-1;continue}for(var c=s.grid.subgrids,f=0,d=c.length;f<d;f++){var u=c[f],m=(Math.abs(u.del[1])+Math.abs(u.del[0]))/1e4,_=u.ll[0]-m,g=u.ll[1]-m,y=u.ll[0]+(u.lim[0]-1)*u.del[0]+m,E=u.ll[1]+(u.lim[1]-1)*u.del[1]+m;if(!(g>o.y||_>o.x||E<o.y||y<o.x)&&(i=OO(o,t,u),!isNaN(i.x)))break e}}return isNaN(i.x)?(console.log("Failed to find a grid shift table for location '"+-o.x*Zn+" "+o.y*Zn+" tried: '"+r+"'"),-1):(n.x=-i.x,n.y=i.y,0)}function OO(e,t,n){var o={x:Number.NaN,y:Number.NaN};if(isNaN(e.x))return o;var i={x:e.x,y:e.y};i.x-=n.ll[0],i.y-=n.ll[1],i.x=Ee(i.x-Math.PI)+Math.PI;var r=Du(i,n);if(t){if(isNaN(r.x))return o;r.x=i.x-r.x,r.y=i.y-r.y;var a=9,s=1e-12,c,f;do{if(f=Du(r,n),isNaN(f.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}c={x:i.x-(f.x+r.x),y:i.y-(f.y+r.y)},r.x+=c.x,r.y+=c.y}while(a--&&Math.abs(c.x)>s&&Math.abs(c.y)>s);if(a<0)return console.log("Inverse grid shift iterator failed to converge."),o;o.x=Ee(r.x+n.ll[0]),o.y=r.y+n.ll[1]}else isNaN(r.x)||(o.x=e.x+r.x,o.y=e.y+r.y);return o}function Du(e,t){var n={x:e.x/t.del[0],y:e.y/t.del[1]},o={x:Math.floor(n.x),y:Math.floor(n.y)},i={x:n.x-1*o.x,y:n.y-1*o.y},r={x:Number.NaN,y:Number.NaN},a;if(o.x<0||o.x>=t.lim[0]||o.y<0||o.y>=t.lim[1])return r;a=o.y*t.lim[0]+o.x;var s={x:t.cvs[a][0],y:t.cvs[a][1]};a++;var c={x:t.cvs[a][0],y:t.cvs[a][1]};a+=t.lim[0];var f={x:t.cvs[a][0],y:t.cvs[a][1]};a--;var d={x:t.cvs[a][0],y:t.cvs[a][1]},u=i.x*i.y,m=i.x*(1-i.y),_=(1-i.x)*(1-i.y),g=(1-i.x)*i.y;return r.x=_*s.x+m*c.x+g*d.x+u*f.x,r.y=_*s.y+m*c.y+g*d.y+u*f.y,r}function Lu(e,t,n){var o=n.x,i=n.y,r=n.z||0,a,s,c,f={};for(c=0;c<3;c++)if(!(t&&c===2&&n.z===void 0))switch(c===0?(a=o,"ew".indexOf(e.axis[c])!==-1?s="x":s="y"):c===1?(a=i,"ns".indexOf(e.axis[c])!==-1?s="y":s="x"):(a=r,s="z"),e.axis[c]){case"e":f[s]=a;break;case"w":f[s]=-a;break;case"n":f[s]=a;break;case"s":f[s]=-a;break;case"u":n[s]!==void 0&&(f.z=a);break;case"d":n[s]!==void 0&&(f.z=-a);break;default:return null}return f}function Hm(e){var t={x:e[0],y:e[1]};return e.length>2&&(t.z=e[2]),e.length>3&&(t.m=e[3]),t}function CO(e){Fu(e.x),Fu(e.y)}function Fu(e){if(typeof Number.isFinite=="function"){if(Number.isFinite(e))return;throw new TypeError("coordinates must be finite numbers")}if(typeof e!="number"||e!==e||!isFinite(e))throw new TypeError("coordinates must be finite numbers")}function MO(e,t){return(e.datum.datum_type===ii||e.datum.datum_type===ri||e.datum.datum_type===Pi)&&t.datumCode!=="WGS84"||(t.datum.datum_type===ii||t.datum.datum_type===ri||t.datum.datum_type===Pi)&&e.datumCode!=="WGS84"}function gs(e,t,n,o){var i;Array.isArray(n)?n=Hm(n):n={x:n.x,y:n.y,z:n.z,m:n.m};var r=n.z!==void 0;if(CO(n),e.datum&&t.datum&&MO(e,t)&&(i=new Fn("WGS84"),n=gs(e,i,n,o),e=i),o&&e.axis!=="enu"&&(n=Lu(e,!1,n)),e.projName==="longlat")n={x:n.x*Nt,y:n.y*Nt,z:n.z||0};else if(e.to_meter&&(n={x:n.x*e.to_meter,y:n.y*e.to_meter,z:n.z||0}),n=e.inverse(n),!n)return;if(e.from_greenwich&&(n.x+=e.from_greenwich),n=xO(e.datum,t.datum,n),!!n)return n=n,t.from_greenwich&&(n={x:n.x-t.from_greenwich,y:n.y,z:n.z||0}),t.projName==="longlat"?n={x:n.x*Zn,y:n.y*Zn,z:n.z||0}:(n=t.forward(n),t.to_meter&&(n={x:n.x/t.to_meter,y:n.y/t.to_meter,z:n.z||0})),o&&t.axis!=="enu"?Lu(t,!0,n):(n&&!r&&delete n.z,n)}var Bu=Fn("WGS84");function Ic(e,t,n,o){var i,r,a;return Array.isArray(n)?(i=gs(e,t,n,o)||{x:NaN,y:NaN},n.length>2?typeof e.name<"u"&&e.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"?typeof i.z=="number"?[i.x,i.y,i.z].concat(n.slice(3)):[i.x,i.y,n[2]].concat(n.slice(3)):[i.x,i.y].concat(n.slice(2)):[i.x,i.y]):(r=gs(e,t,n,o),a=Object.keys(n),a.length===2||a.forEach(function(s){if(typeof e.name<"u"&&e.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"){if(s==="x"||s==="y"||s==="z")return}else if(s==="x"||s==="y")return;r[s]=n[s]}),r)}function La(e){return e instanceof Fn?e:typeof e=="object"&&"oProj"in e?e.oProj:Fn(e)}function RO(e,t,n){var o,i,r=!1,a;return typeof t>"u"?(i=La(e),o=Bu,r=!0):(typeof t.x<"u"||Array.isArray(t))&&(n=t,i=La(e),o=Bu,r=!0),o||(o=La(e)),i||(i=La(t)),n?Ic(o,i,n):(a={forward:function(s,c){return Ic(o,i,s,c)},inverse:function(s,c){return Ic(i,o,s,c)}},r&&(a.oProj=i),a)}var Uu=6,Wm="AJSAJS",Ym="AFAFAF",Oi=65,an=73,vn=79,_r=86,gr=90;const PO={forward:$m,inverse:IO,toPoint:Xm};function $m(e,t){return t=t||5,DO(zO({lat:e[1],lon:e[0]}),t)}function IO(e){var t=ih(Km(e.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function Xm(e){var t=ih(Km(e.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function zc(e){return e*(Math.PI/180)}function Gu(e){return 180*(e/Math.PI)}function zO(e){var t=e.lat,n=e.lon,o=6378137,i=.00669438,r=.9996,a,s,c,f,d,u,m,_=zc(t),g=zc(n),y,E;E=Math.floor((n+180)/6)+1,n===180&&(E=60),t>=56&&t<64&&n>=3&&n<12&&(E=32),t>=72&&t<84&&(n>=0&&n<9?E=31:n>=9&&n<21?E=33:n>=21&&n<33?E=35:n>=33&&n<42&&(E=37)),a=(E-1)*6-180+3,y=zc(a),s=i/(1-i),c=o/Math.sqrt(1-i*Math.sin(_)*Math.sin(_)),f=Math.tan(_)*Math.tan(_),d=s*Math.cos(_)*Math.cos(_),u=Math.cos(_)*(g-y),m=o*((1-i/4-3*i*i/64-5*i*i*i/256)*_-(3*i/8+3*i*i/32+45*i*i*i/1024)*Math.sin(2*_)+(15*i*i/256+45*i*i*i/1024)*Math.sin(4*_)-35*i*i*i/3072*Math.sin(6*_));var A=r*c*(u+(1-f+d)*u*u*u/6+(5-18*f+f*f+72*d-58*s)*u*u*u*u*u/120)+5e5,S=r*(m+c*Math.tan(_)*(u*u/2+(5-f+9*d+4*d*d)*u*u*u*u/24+(61-58*f+f*f+600*d-330*s)*u*u*u*u*u*u/720));return t<0&&(S+=1e7),{northing:Math.round(S),easting:Math.round(A),zoneNumber:E,zoneLetter:NO(t)}}function ih(e){var t=e.northing,n=e.easting,o=e.zoneLetter,i=e.zoneNumber;if(i<0||i>60)return null;var r=.9996,a=6378137,s=.00669438,c,f=(1-Math.sqrt(1-s))/(1+Math.sqrt(1-s)),d,u,m,_,g,y,E,A,S,O=n-5e5,M=t;o<"N"&&(M-=1e7),E=(i-1)*6-180+3,c=s/(1-s),y=M/r,A=y/(a*(1-s/4-3*s*s/64-5*s*s*s/256)),S=A+(3*f/2-27*f*f*f/32)*Math.sin(2*A)+(21*f*f/16-55*f*f*f*f/32)*Math.sin(4*A)+151*f*f*f/96*Math.sin(6*A),d=a/Math.sqrt(1-s*Math.sin(S)*Math.sin(S)),u=Math.tan(S)*Math.tan(S),m=c*Math.cos(S)*Math.cos(S),_=a*(1-s)/Math.pow(1-s*Math.sin(S)*Math.sin(S),1.5),g=O/(d*r);var R=S-d*Math.tan(S)/_*(g*g/2-(5+3*u+10*m-4*m*m-9*c)*g*g*g*g/24+(61+90*u+298*m+45*u*u-252*c-3*m*m)*g*g*g*g*g*g/720);R=Gu(R);var N=(g-(1+2*u+m)*g*g*g/6+(5-2*m+28*u-3*m*m+8*c+24*u*u)*g*g*g*g*g/120)/Math.cos(S);N=E+Gu(N);var F;if(e.accuracy){var z=ih({northing:e.northing+e.accuracy,easting:e.easting+e.accuracy,zoneLetter:e.zoneLetter,zoneNumber:e.zoneNumber});F={top:z.lat,right:z.lon,bottom:R,left:N}}else F={lat:R,lon:N};return F}function NO(e){var t="Z";return 84>=e&&e>=72?t="X":72>e&&e>=64?t="W":64>e&&e>=56?t="V":56>e&&e>=48?t="U":48>e&&e>=40?t="T":40>e&&e>=32?t="S":32>e&&e>=24?t="R":24>e&&e>=16?t="Q":16>e&&e>=8?t="P":8>e&&e>=0?t="N":0>e&&e>=-8?t="M":-8>e&&e>=-16?t="L":-16>e&&e>=-24?t="K":-24>e&&e>=-32?t="J":-32>e&&e>=-40?t="H":-40>e&&e>=-48?t="G":-48>e&&e>=-56?t="F":-56>e&&e>=-64?t="E":-64>e&&e>=-72?t="D":-72>e&&e>=-80&&(t="C"),t}function DO(e,t){var n="00000"+e.easting,o="00000"+e.northing;return e.zoneNumber+e.zoneLetter+LO(e.easting,e.northing,e.zoneNumber)+n.substr(n.length-5,t)+o.substr(o.length-5,t)}function LO(e,t,n){var o=Zm(n),i=Math.floor(e/1e5),r=Math.floor(t/1e5)%20;return FO(i,r,o)}function Zm(e){var t=e%Uu;return t===0&&(t=Uu),t}function FO(e,t,n){var o=n-1,i=Wm.charCodeAt(o),r=Ym.charCodeAt(o),a=i+e-1,s=r+t,c=!1;a>gr&&(a=a-gr+Oi-1,c=!0),(a===an||i<an&&a>an||(a>an||i<an)&&c)&&a++,(a===vn||i<vn&&a>vn||(a>vn||i<vn)&&c)&&(a++,a===an&&a++),a>gr&&(a=a-gr+Oi-1),s>_r?(s=s-_r+Oi-1,c=!0):c=!1,(s===an||r<an&&s>an||(s>an||r<an)&&c)&&s++,(s===vn||r<vn&&s>vn||(s>vn||r<vn)&&c)&&(s++,s===an&&s++),s>_r&&(s=s-_r+Oi-1);var f=String.fromCharCode(a)+String.fromCharCode(s);return f}function Km(e){if(e&&e.length===0)throw"MGRSPoint coverting from nothing";for(var t=e.length,n=null,o="",i,r=0;!/[A-Z]/.test(i=e.charAt(r));){if(r>=2)throw"MGRSPoint bad conversion from: "+e;o+=i,r++}var a=parseInt(o,10);if(r===0||r+3>t)throw"MGRSPoint bad conversion from: "+e;var s=e.charAt(r++);if(s<="A"||s==="B"||s==="Y"||s>="Z"||s==="I"||s==="O")throw"MGRSPoint zone letter "+s+" not handled: "+e;n=e.substring(r,r+=2);for(var c=Zm(a),f=BO(n.charAt(0),c),d=UO(n.charAt(1),c);d<GO(s);)d+=2e6;var u=t-r;if(u%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+e;var m=u/2,_=0,g=0,y,E,A,S,O;return m>0&&(y=1e5/Math.pow(10,m),E=e.substring(r,r+m),_=parseFloat(E)*y,A=e.substring(r+m),g=parseFloat(A)*y),S=_+f,O=g+d,{easting:S,northing:O,zoneLetter:s,zoneNumber:a,accuracy:y}}function BO(e,t){for(var n=Wm.charCodeAt(t-1),o=1e5,i=!1;n!==e.charCodeAt(0);){if(n++,n===an&&n++,n===vn&&n++,n>gr){if(i)throw"Bad character: "+e;n=Oi,i=!0}o+=1e5}return o}function UO(e,t){if(e>"V")throw"MGRSPoint given invalid Northing "+e;for(var n=Ym.charCodeAt(t-1),o=0,i=!1;n!==e.charCodeAt(0);){if(n++,n===an&&n++,n===vn&&n++,n>_r){if(i)throw"Bad character: "+e;n=Oi,i=!0}o+=1e5}return o}function GO(e){var t;switch(e){case"C":t=11e5;break;case"D":t=2e6;break;case"E":t=28e5;break;case"F":t=37e5;break;case"G":t=46e5;break;case"H":t=55e5;break;case"J":t=64e5;break;case"K":t=73e5;break;case"L":t=82e5;break;case"M":t=91e5;break;case"N":t=0;break;case"P":t=8e5;break;case"Q":t=17e5;break;case"R":t=26e5;break;case"S":t=35e5;break;case"T":t=44e5;break;case"U":t=53e5;break;case"V":t=62e5;break;case"W":t=7e6;break;case"X":t=79e5;break;default:t=-1}if(t>=0)return t;throw"Invalid zone letter: "+e}function ji(e,t,n){if(!(this instanceof ji))return new ji(e,t,n);if(Array.isArray(e))this.x=e[0],this.y=e[1],this.z=e[2]||0;else if(typeof e=="object")this.x=e.x,this.y=e.y,this.z=e.z||0;else if(typeof e=="string"&&typeof t>"u"){var o=e.split(",");this.x=parseFloat(o[0]),this.y=parseFloat(o[1]),this.z=parseFloat(o[2])||0}else this.x=e,this.y=t,this.z=n||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}ji.fromMGRS=function(e){return new ji(Xm(e))};ji.prototype.toMGRS=function(e){return $m([this.x,this.y],e)};var qO=1,kO=.25,qu=.046875,ku=.01953125,ju=.01068115234375,jO=.75,VO=.46875,HO=.013020833333333334,WO=.007120768229166667,YO=.3645833333333333,$O=.005696614583333333,XO=.3076171875;function rh(e){var t=[];t[0]=qO-e*(kO+e*(qu+e*(ku+e*ju))),t[1]=e*(jO-e*(qu+e*(ku+e*ju)));var n=e*e;return t[2]=n*(VO-e*(HO+e*WO)),n*=e,t[3]=n*(YO-e*$O),t[4]=n*e*XO,t}function $i(e,t,n,o){return n*=t,t*=t,o[0]*e-n*(o[1]+t*(o[2]+t*(o[3]+t*o[4])))}var ZO=20;function ah(e,t,n){for(var o=1/(1-t),i=e,r=ZO;r;--r){var a=Math.sin(i),s=1-t*a*a;if(s=($i(i,a,Math.cos(i),n)-e)*(s*Math.sqrt(s))*o,i-=s,Math.abs(s)<ye)return i}return i}function KO(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=rh(this.es),this.ml0=$i(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function QO(e){var t=e.x,n=e.y,o=Ee(t-this.long0),i,r,a,s=Math.sin(n),c=Math.cos(n);if(this.es){var d=c*o,u=Math.pow(d,2),m=this.ep2*Math.pow(c,2),_=Math.pow(m,2),g=Math.abs(c)>ye?Math.tan(n):0,y=Math.pow(g,2),E=Math.pow(y,2);i=1-this.es*Math.pow(s,2),d=d/Math.sqrt(i);var A=$i(n,s,c,this.en);r=this.a*(this.k0*d*(1+u/6*(1-y+m+u/20*(5-18*y+E+14*m-58*y*m+u/42*(61+179*E-E*y-479*y)))))+this.x0,a=this.a*(this.k0*(A-this.ml0+s*o*d/2*(1+u/12*(5-y+9*m+4*_+u/30*(61+E-58*y+270*m-330*y*m+u/56*(1385+543*E-E*y-3111*y))))))+this.y0}else{var f=c*Math.sin(o);if(Math.abs(Math.abs(f)-1)<ye)return 93;if(r=.5*this.a*this.k0*Math.log((1+f)/(1-f))+this.x0,a=c*Math.cos(o)/Math.sqrt(1-Math.pow(f,2)),f=Math.abs(a),f>=1){if(f-1>ye)return 93;a=0}else a=Math.acos(a);n<0&&(a=-a),a=this.a*this.k0*(a-this.lat0)+this.y0}return e.x=r,e.y=a,e}function JO(e){var t,n,o,i,r=(e.x-this.x0)*(1/this.a),a=(e.y-this.y0)*(1/this.a);if(this.es)if(t=this.ml0+a/this.k0,n=ah(t,this.es,this.en),Math.abs(n)<ce){var u=Math.sin(n),m=Math.cos(n),_=Math.abs(m)>ye?Math.tan(n):0,g=this.ep2*Math.pow(m,2),y=Math.pow(g,2),E=Math.pow(_,2),A=Math.pow(E,2);t=1-this.es*Math.pow(u,2);var S=r*Math.sqrt(t)/this.k0,O=Math.pow(S,2);t=t*_,o=n-t*O/(1-this.es)*.5*(1-O/12*(5+3*E-9*g*E+g-4*y-O/30*(61+90*E-252*g*E+45*A+46*g-O/56*(1385+3633*E+4095*A+1574*A*E)))),i=Ee(this.long0+S*(1-O/6*(1+2*E+g-O/20*(5+28*E+24*A+8*g*E+6*g-O/42*(61+662*E+1320*A+720*A*E))))/m)}else o=ce*Xr(a),i=0;else{var s=Math.exp(r/this.k0),c=.5*(s-1/s),f=this.lat0+a/this.k0,d=Math.cos(f);t=Math.sqrt((1-Math.pow(d,2))/(1+Math.pow(c,2))),o=Math.asin(t),a<0&&(o=-o),c===0&&d===0?i=0:i=Ee(Math.atan2(c,d)+this.long0)}return e.x=i,e.y=o,e}var eC=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const Za={init:KO,forward:QO,inverse:JO,names:eC};function Qm(e){var t=Math.exp(e);return t=(t-1/t)/2,t}function fn(e,t){e=Math.abs(e),t=Math.abs(t);var n=Math.max(e,t),o=Math.min(e,t)/(n||1);return n*Math.sqrt(1+Math.pow(o,2))}function tC(e){var t=1+e,n=t-1;return n===0?e:e*Math.log(t)/n}function nC(e){var t=Math.abs(e);return t=tC(t*(1+t/(fn(1,t)+1))),e<0?-t:t}function sh(e,t){for(var n=2*Math.cos(2*t),o=e.length-1,i=e[o],r=0,a;--o>=0;)a=-r+n*i+e[o],r=i,i=a;return t+a*Math.sin(2*t)}function oC(e,t){for(var n=2*Math.cos(t),o=e.length-1,i=e[o],r=0,a;--o>=0;)a=-r+n*i+e[o],r=i,i=a;return Math.sin(t)*a}function iC(e){var t=Math.exp(e);return t=(t+1/t)/2,t}function Jm(e,t,n){for(var o=Math.sin(t),i=Math.cos(t),r=Qm(n),a=iC(n),s=2*i*a,c=-2*o*r,f=e.length-1,d=e[f],u=0,m=0,_=0,g,y;--f>=0;)g=m,y=u,m=d,u=_,d=-g+s*m-c*u+e[f],_=-y+c*m+s*u;return s=o*a,c=i*r,[s*d-c*_,s*_+c*d]}function rC(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(Za.init.apply(this),this.forward=Za.forward,this.inverse=Za.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var e=this.es/(1+Math.sqrt(1-this.es)),t=e/(2-e),n=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+t*(-2854/675)))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+t*(4642/4725)))))),n=n*t,this.cgb[1]=n*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+t*(2323/945))))),this.cbg[1]=n*(5/3+t*(-16/15+t*(-13/9+t*(904/315+t*(-1522/945))))),n=n*t,this.cgb[2]=n*(56/15+t*(-136/35+t*(-1262/105+t*(73814/2835)))),this.cbg[2]=n*(-26/15+t*(34/21+t*(8/5+t*(-12686/2835)))),n=n*t,this.cgb[3]=n*(4279/630+t*(-332/35+t*(-399572/14175))),this.cbg[3]=n*(1237/630+t*(-12/5+t*(-24832/14175))),n=n*t,this.cgb[4]=n*(4174/315+t*(-144838/6237)),this.cbg[4]=n*(-734/315+t*(109598/31185)),n=n*t,this.cgb[5]=n*(601676/22275),this.cbg[5]=n*(444337/155925),n=Math.pow(t,2),this.Qn=this.k0/(1+t)*(1+n*(1/4+n*(1/64+n/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+t*(-96199/604800)))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+t*(7891/37800)))))),this.utg[1]=n*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+t*(1118711/3870720))))),this.gtu[1]=n*(13/48+t*(-3/5+t*(557/1440+t*(281/630+t*(-1983433/1935360))))),n=n*t,this.utg[2]=n*(-17/480+t*(37/840+t*(209/4480+t*(-5569/90720)))),this.gtu[2]=n*(61/240+t*(-103/140+t*(15061/26880+t*(167603/181440)))),n=n*t,this.utg[3]=n*(-4397/161280+t*(11/504+t*(830251/7257600))),this.gtu[3]=n*(49561/161280+t*(-179/168+t*(6601661/7257600))),n=n*t,this.utg[4]=n*(-4583/161280+t*(108847/3991680)),this.gtu[4]=n*(34729/80640+t*(-3418889/1995840)),n=n*t,this.utg[5]=n*(-20648693/638668800),this.gtu[5]=n*(212378941/319334400);var o=sh(this.cbg,this.lat0);this.Zb=-this.Qn*(o+oC(this.gtu,2*o))}function aC(e){var t=Ee(e.x-this.long0),n=e.y;n=sh(this.cbg,n);var o=Math.sin(n),i=Math.cos(n),r=Math.sin(t),a=Math.cos(t);n=Math.atan2(o,a*i),t=Math.atan2(r*i,fn(o,i*a)),t=nC(Math.tan(t));var s=Jm(this.gtu,2*n,2*t);n=n+s[0],t=t+s[1];var c,f;return Math.abs(t)<=2.623395162778?(c=this.a*(this.Qn*t)+this.x0,f=this.a*(this.Qn*n+this.Zb)+this.y0):(c=1/0,f=1/0),e.x=c,e.y=f,e}function sC(e){var t=(e.x-this.x0)*(1/this.a),n=(e.y-this.y0)*(1/this.a);n=(n-this.Zb)/this.Qn,t=t/this.Qn;var o,i;if(Math.abs(t)<=2.623395162778){var r=Jm(this.utg,2*n,2*t);n=n+r[0],t=t+r[1],t=Math.atan(Qm(t));var a=Math.sin(n),s=Math.cos(n),c=Math.sin(t),f=Math.cos(t);n=Math.atan2(a*f,fn(c,f*s)),t=Math.atan2(c,f*s),o=Ee(t+this.long0),i=sh(this.cgb,n)}else o=1/0,i=1/0;return e.x=o,e.y=i,e}var cC=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"];const Ka={init:rC,forward:aC,inverse:sC,names:cC};function fC(e,t){if(e===void 0){if(e=Math.floor((Ee(t)+Math.PI)*30/Math.PI)+1,e<0)return 0;if(e>60)return 60}return e}var hC="etmerc";function lC(){var e=fC(this.zone,this.long0);if(e===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(e)-183)*Nt,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,Ka.init.apply(this),this.forward=Ka.forward,this.inverse=Ka.inverse}var uC=["Universal Transverse Mercator System","utm"];const dC={init:lC,names:uC,dependsOn:hC};function ch(e,t){return Math.pow((1-e)/(1+e),t)}var mC=20;function pC(){var e=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*e*e),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(e/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+Ke)/(Math.pow(Math.tan(.5*this.lat0+Ke),this.C)*ch(this.e*e,this.ratexp))}function _C(e){var t=e.x,n=e.y;return e.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*n+Ke),this.C)*ch(this.e*Math.sin(n),this.ratexp))-ce,e.x=this.C*t,e}function gC(e){for(var t=1e-14,n=e.x/this.C,o=e.y,i=Math.pow(Math.tan(.5*o+Ke)/this.K,1/this.C),r=mC;r>0&&(o=2*Math.atan(i*ch(this.e*Math.sin(e.y),-.5*this.e))-ce,!(Math.abs(o-e.y)<t));--r)e.y=o;return r?(e.x=n,e.y=o,e):null}var yC=["gauss"];const fh={init:pC,forward:_C,inverse:gC,names:yC};function bC(){fh.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function EC(e){var t,n,o,i;return e.x=Ee(e.x-this.long0),fh.forward.apply(this,[e]),t=Math.sin(e.y),n=Math.cos(e.y),o=Math.cos(e.x),i=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*n*o),e.x=i*n*Math.sin(e.x),e.y=i*(this.cosc0*t-this.sinc0*n*o),e.x=this.a*e.x+this.x0,e.y=this.a*e.y+this.y0,e}function wC(e){var t,n,o,i,r;if(e.x=(e.x-this.x0)/this.a,e.y=(e.y-this.y0)/this.a,e.x/=this.k0,e.y/=this.k0,r=fn(e.x,e.y)){var a=2*Math.atan2(r,this.R2);t=Math.sin(a),n=Math.cos(a),i=Math.asin(n*this.sinc0+e.y*t*this.cosc0/r),o=Math.atan2(e.x*t,r*this.cosc0*n-e.y*this.sinc0*t)}else i=this.phic0,o=0;return e.x=o,e.y=i,fh.inverse.apply(this,[e]),e.x=Ee(e.x+this.long0),e}var vC=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const TC={init:bC,forward:EC,inverse:wC,names:vC};function hh(e,t,n){return t*=n,Math.tan(.5*(ce+e))*Math.pow((1-t)/(1+t),.5*n)}function SC(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=ye&&(this.k0=.5*(1+Xr(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=ye&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=ye&&Math.abs(Math.cos(this.lat_ts))>ye&&(this.k0=.5*this.cons*to(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/Ln(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=to(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(hh(this.lat0,this.sinlat0,this.e))-ce,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function AC(e){var t=e.x,n=e.y,o=Math.sin(n),i=Math.cos(n),r,a,s,c,f,d,u=Ee(t-this.long0);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=ye&&Math.abs(n+this.lat0)<=ye?(e.x=NaN,e.y=NaN,e):this.sphere?(r=2*this.k0/(1+this.sinlat0*o+this.coslat0*i*Math.cos(u)),e.x=this.a*r*i*Math.sin(u)+this.x0,e.y=this.a*r*(this.coslat0*o-this.sinlat0*i*Math.cos(u))+this.y0,e):(a=2*Math.atan(hh(n,o,this.e))-ce,c=Math.cos(a),s=Math.sin(a),Math.abs(this.coslat0)<=ye?(f=Ln(this.e,n*this.con,this.con*o),d=2*this.a*this.k0*f/this.cons,e.x=this.x0+d*Math.sin(t-this.long0),e.y=this.y0-this.con*d*Math.cos(t-this.long0),e):(Math.abs(this.sinlat0)<ye?(r=2*this.a*this.k0/(1+c*Math.cos(u)),e.y=r*s):(r=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*s+this.cosX0*c*Math.cos(u))),e.y=r*(this.cosX0*s-this.sinX0*c*Math.cos(u))+this.y0),e.x=r*c*Math.sin(u)+this.x0,e))}function xC(e){e.x-=this.x0,e.y-=this.y0;var t,n,o,i,r,a=Math.sqrt(e.x*e.x+e.y*e.y);if(this.sphere){var s=2*Math.atan(a/(2*this.a*this.k0));return t=this.long0,n=this.lat0,a<=ye?(e.x=t,e.y=n,e):(n=Math.asin(Math.cos(s)*this.sinlat0+e.y*Math.sin(s)*this.coslat0/a),Math.abs(this.coslat0)<ye?this.lat0>0?t=Ee(this.long0+Math.atan2(e.x,-1*e.y)):t=Ee(this.long0+Math.atan2(e.x,e.y)):t=Ee(this.long0+Math.atan2(e.x*Math.sin(s),a*this.coslat0*Math.cos(s)-e.y*this.sinlat0*Math.sin(s))),e.x=t,e.y=n,e)}else if(Math.abs(this.coslat0)<=ye){if(a<=ye)return n=this.lat0,t=this.long0,e.x=t,e.y=n,e;e.x*=this.con,e.y*=this.con,o=a*this.cons/(2*this.a*this.k0),n=this.con*Gr(this.e,o),t=this.con*Ee(this.con*this.long0+Math.atan2(e.x,-1*e.y))}else i=2*Math.atan(a*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,a<=ye?r=this.X0:(r=Math.asin(Math.cos(i)*this.sinX0+e.y*Math.sin(i)*this.cosX0/a),t=Ee(this.long0+Math.atan2(e.x*Math.sin(i),a*this.cosX0*Math.cos(i)-e.y*this.sinX0*Math.sin(i)))),n=-1*Gr(this.e,Math.tan(.5*(ce+r)));return e.x=t,e.y=n,e}var OC=["stere","Stereographic_South_Pole","Polar_Stereographic_variant_A","Polar_Stereographic_variant_B","Polar_Stereographic"];const CC={init:SC,forward:AC,inverse:xC,names:OC,ssfn_:hh};function MC(){var e=this.lat0;this.lambda0=this.long0;var t=Math.sin(e),n=this.a,o=this.rf,i=1/o,r=2*i-Math.pow(i,2),a=this.e=Math.sqrt(r);this.R=this.k0*n*Math.sqrt(1-r)/(1-r*Math.pow(t,2)),this.alpha=Math.sqrt(1+r/(1-r)*Math.pow(Math.cos(e),4)),this.b0=Math.asin(t/this.alpha);var s=Math.log(Math.tan(Math.PI/4+this.b0/2)),c=Math.log(Math.tan(Math.PI/4+e/2)),f=Math.log((1+a*t)/(1-a*t));this.K=s-this.alpha*c+this.alpha*a/2*f}function RC(e){var t=Math.log(Math.tan(Math.PI/4-e.y/2)),n=this.e/2*Math.log((1+this.e*Math.sin(e.y))/(1-this.e*Math.sin(e.y))),o=-this.alpha*(t+n)+this.K,i=2*(Math.atan(Math.exp(o))-Math.PI/4),r=this.alpha*(e.x-this.lambda0),a=Math.atan(Math.sin(r)/(Math.sin(this.b0)*Math.tan(i)+Math.cos(this.b0)*Math.cos(r))),s=Math.asin(Math.cos(this.b0)*Math.sin(i)-Math.sin(this.b0)*Math.cos(i)*Math.cos(r));return e.y=this.R/2*Math.log((1+Math.sin(s))/(1-Math.sin(s)))+this.y0,e.x=this.R*a+this.x0,e}function PC(e){for(var t=e.x-this.x0,n=e.y-this.y0,o=t/this.R,i=2*(Math.atan(Math.exp(n/this.R))-Math.PI/4),r=Math.asin(Math.cos(this.b0)*Math.sin(i)+Math.sin(this.b0)*Math.cos(i)*Math.cos(o)),a=Math.atan(Math.sin(o)/(Math.cos(this.b0)*Math.cos(o)-Math.sin(this.b0)*Math.tan(i))),s=this.lambda0+a/this.alpha,c=0,f=r,d=-1e3,u=0;Math.abs(f-d)>1e-7;){if(++u>20)return;c=1/this.alpha*(Math.log(Math.tan(Math.PI/4+r/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(f))/2)),d=f,f=2*Math.atan(Math.exp(c))-Math.PI/2}return e.x=s,e.y=f,e}var IC=["somerc"];const zC={init:MC,forward:RC,inverse:PC,names:IC};var vi=1e-7;function NC(e){var t=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],n=typeof e.projName=="object"?Object.keys(e.projName)[0]:e.projName;return"no_uoff"in e||"no_off"in e||t.indexOf(n)!==-1||t.indexOf(qm(n))!==-1}function DC(){var e,t,n,o,i,r,a,s,c,f,d=0,u,m=0,_=0,g=0,y=0,E=0,A=0;this.no_off=NC(this),this.no_rot="no_rot"in this;var S=!1;"alpha"in this&&(S=!0);var O=!1;if("rectified_grid_angle"in this&&(O=!0),S&&(A=this.alpha),O&&(d=this.rectified_grid_angle),S||O)m=this.longc;else if(_=this.long1,y=this.lat1,g=this.long2,E=this.lat2,Math.abs(y-E)<=vi||(e=Math.abs(y))<=vi||Math.abs(e-ce)<=vi||Math.abs(Math.abs(this.lat0)-ce)<=vi||Math.abs(Math.abs(E)-ce)<=vi)throw new Error;var M=1-this.es;t=Math.sqrt(M),Math.abs(this.lat0)>ye?(s=Math.sin(this.lat0),n=Math.cos(this.lat0),e=1-this.es*s*s,this.B=n*n,this.B=Math.sqrt(1+this.es*this.B*this.B/M),this.A=this.B*this.k0*t/e,o=this.B*t/(n*Math.sqrt(e)),i=o*o-1,i<=0?i=0:(i=Math.sqrt(i),this.lat0<0&&(i=-i)),this.E=i+=o,this.E*=Math.pow(Ln(this.e,this.lat0,s),this.B)):(this.B=1/t,this.A=this.k0,this.E=o=i=1),S||O?(S?(u=Math.asin(Math.sin(A)/o),O||(d=A)):(u=d,A=Math.asin(o*Math.sin(u))),this.lam0=m-Math.asin(.5*(i-1/i)*Math.tan(u))/this.B):(r=Math.pow(Ln(this.e,y,Math.sin(y)),this.B),a=Math.pow(Ln(this.e,E,Math.sin(E)),this.B),i=this.E/r,c=(a-r)/(a+r),f=this.E*this.E,f=(f-a*r)/(f+a*r),e=_-g,e<-Math.PI?g-=Br:e>Math.PI&&(g+=Br),this.lam0=Ee(.5*(_+g)-Math.atan(f*Math.tan(.5*this.B*(_-g))/c)/this.B),u=Math.atan(2*Math.sin(this.B*Ee(_-this.lam0))/(i-1/i)),d=A=Math.asin(o*Math.sin(u))),this.singam=Math.sin(u),this.cosgam=Math.cos(u),this.sinrot=Math.sin(d),this.cosrot=Math.cos(d),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(o*o-1)/Math.cos(A))),this.lat0<0&&(this.u_0=-this.u_0)),i=.5*u,this.v_pole_n=this.ArB*Math.log(Math.tan(Ke-i)),this.v_pole_s=this.ArB*Math.log(Math.tan(Ke+i))}function LC(e){var t={},n,o,i,r,a,s,c,f;if(e.x=e.x-this.lam0,Math.abs(Math.abs(e.y)-ce)>ye){if(a=this.E/Math.pow(Ln(this.e,e.y,Math.sin(e.y)),this.B),s=1/a,n=.5*(a-s),o=.5*(a+s),r=Math.sin(this.B*e.x),i=(n*this.singam-r*this.cosgam)/o,Math.abs(Math.abs(i)-1)<ye)throw new Error;f=.5*this.ArB*Math.log((1-i)/(1+i)),s=Math.cos(this.B*e.x),Math.abs(s)<vi?c=this.A*e.x:c=this.ArB*Math.atan2(n*this.cosgam+r*this.singam,s)}else f=e.y>0?this.v_pole_n:this.v_pole_s,c=this.ArB*e.y;return this.no_rot?(t.x=c,t.y=f):(c-=this.u_0,t.x=f*this.cosrot+c*this.sinrot,t.y=c*this.cosrot-f*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function FC(e){var t,n,o,i,r,a,s,c={};if(e.x=(e.x-this.x0)*(1/this.a),e.y=(e.y-this.y0)*(1/this.a),this.no_rot?(n=e.y,t=e.x):(n=e.x*this.cosrot-e.y*this.sinrot,t=e.y*this.cosrot+e.x*this.sinrot+this.u_0),o=Math.exp(-this.BrA*n),i=.5*(o-1/o),r=.5*(o+1/o),a=Math.sin(this.BrA*t),s=(a*this.cosgam+i*this.singam)/r,Math.abs(Math.abs(s)-1)<ye)c.x=0,c.y=s<0?-ce:ce;else{if(c.y=this.E/Math.sqrt((1+s)/(1-s)),c.y=Gr(this.e,Math.pow(c.y,1/this.B)),c.y===1/0)throw new Error;c.x=-this.rB*Math.atan2(i*this.cosgam-a*this.singam,Math.cos(this.BrA*t))}return c.x+=this.lam0,c}var BC=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Variant_B","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const UC={init:DC,forward:LC,inverse:FC,names:BC};function GC(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<ye)){var e=this.b/this.a;this.e=Math.sqrt(1-e*e);var t=Math.sin(this.lat1),n=Math.cos(this.lat1),o=to(this.e,t,n),i=Ln(this.e,this.lat1,t),r=Math.sin(this.lat2),a=Math.cos(this.lat2),s=to(this.e,r,a),c=Ln(this.e,this.lat2,r),f=Math.abs(Math.abs(this.lat0)-ce)<ye?0:Ln(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>ye?this.ns=Math.log(o/s)/Math.log(i/c):this.ns=t,isNaN(this.ns)&&(this.ns=t),this.f0=o/(this.ns*Math.pow(i,this.ns)),this.rh=this.a*this.f0*Math.pow(f,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function qC(e){var t=e.x,n=e.y;Math.abs(2*Math.abs(n)-Math.PI)<=ye&&(n=Xr(n)*(ce-2*ye));var o=Math.abs(Math.abs(n)-ce),i,r;if(o>ye)i=Ln(this.e,n,Math.sin(n)),r=this.a*this.f0*Math.pow(i,this.ns);else{if(o=n*this.ns,o<=0)return null;r=0}var a=this.ns*Ee(t-this.long0);return e.x=this.k0*(r*Math.sin(a))+this.x0,e.y=this.k0*(this.rh-r*Math.cos(a))+this.y0,e}function kC(e){var t,n,o,i,r,a=(e.x-this.x0)/this.k0,s=this.rh-(e.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(a*a+s*s),n=1):(t=-Math.sqrt(a*a+s*s),n=-1);var c=0;if(t!==0&&(c=Math.atan2(n*a,n*s)),t!==0||this.ns>0){if(n=1/this.ns,o=Math.pow(t/(this.a*this.f0),n),i=Gr(this.e,o),i===-9999)return null}else i=-ce;return r=Ee(c/this.ns+this.long0),e.x=r,e.y=i,e}var jC=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const VC={init:GC,forward:qC,inverse:kC,names:jC};function HC(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function WC(e){var t,n,o,i,r,a,s,c=e.x,f=e.y,d=Ee(c-this.long0);return t=Math.pow((1+this.e*Math.sin(f))/(1-this.e*Math.sin(f)),this.alfa*this.e/2),n=2*(Math.atan(this.k*Math.pow(Math.tan(f/2+this.s45),this.alfa)/t)-this.s45),o=-d*this.alfa,i=Math.asin(Math.cos(this.ad)*Math.sin(n)+Math.sin(this.ad)*Math.cos(n)*Math.cos(o)),r=Math.asin(Math.cos(n)*Math.sin(o)/Math.cos(i)),a=this.n*r,s=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(i/2+this.s45),this.n),e.y=s*Math.cos(a)/1,e.x=s*Math.sin(a)/1,this.czech||(e.y*=-1,e.x*=-1),e}function YC(e){var t,n,o,i,r,a,s,c,f=e.x;e.x=e.y,e.y=f,this.czech||(e.y*=-1,e.x*=-1),a=Math.sqrt(e.x*e.x+e.y*e.y),r=Math.atan2(e.y,e.x),i=r/Math.sin(this.s0),o=2*(Math.atan(Math.pow(this.ro0/a,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(o)-Math.sin(this.ad)*Math.cos(o)*Math.cos(i)),n=Math.asin(Math.cos(o)*Math.sin(i)/Math.cos(t)),e.x=this.long0-n/this.alfa,s=t,c=0;var d=0;do e.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(s))/(1-this.e*Math.sin(s)),this.e/2))-this.s45),Math.abs(s-e.y)<1e-10&&(c=1),s=e.y,d+=1;while(c===0&&d<15);return d>=15?null:e}var $C=["Krovak","krovak"];const XC={init:HC,forward:WC,inverse:YC,names:$C};function tn(e,t,n,o,i){return e*i-t*Math.sin(2*i)+n*Math.sin(4*i)-o*Math.sin(6*i)}function Zr(e){return 1-.25*e*(1+e/16*(3+1.25*e))}function Kr(e){return .375*e*(1+.25*e*(1+.46875*e))}function Qr(e){return .05859375*e*e*(1+.75*e)}function Jr(e){return e*e*e*(35/3072)}function lh(e,t,n){var o=t*n;return e/Math.sqrt(1-o*o)}function qo(e){return Math.abs(e)<ce?e:e-Xr(e)*Math.PI}function ys(e,t,n,o,i){var r,a;r=e/t;for(var s=0;s<15;s++)if(a=(e-(t*r-n*Math.sin(2*r)+o*Math.sin(4*r)-i*Math.sin(6*r)))/(t-2*n*Math.cos(2*r)+4*o*Math.cos(4*r)-6*i*Math.cos(6*r)),r+=a,Math.abs(a)<=1e-10)return r;return NaN}function ZC(){this.sphere||(this.e0=Zr(this.es),this.e1=Kr(this.es),this.e2=Qr(this.es),this.e3=Jr(this.es),this.ml0=this.a*tn(this.e0,this.e1,this.e2,this.e3,this.lat0))}function KC(e){var t,n,o=e.x,i=e.y;if(o=Ee(o-this.long0),this.sphere)t=this.a*Math.asin(Math.cos(i)*Math.sin(o)),n=this.a*(Math.atan2(Math.tan(i),Math.cos(o))-this.lat0);else{var r=Math.sin(i),a=Math.cos(i),s=lh(this.a,this.e,r),c=Math.tan(i)*Math.tan(i),f=o*Math.cos(i),d=f*f,u=this.es*a*a/(1-this.es),m=this.a*tn(this.e0,this.e1,this.e2,this.e3,i);t=s*f*(1-d*c*(1/6-(8-c+8*u)*d/120)),n=m-this.ml0+s*r/a*d*(.5+(5-c+6*u)*d/24)}return e.x=t+this.x0,e.y=n+this.y0,e}function QC(e){e.x-=this.x0,e.y-=this.y0;var t=e.x/this.a,n=e.y/this.a,o,i;if(this.sphere){var r=n+this.lat0;o=Math.asin(Math.sin(r)*Math.cos(t)),i=Math.atan2(Math.tan(t),Math.cos(r))}else{var a=this.ml0/this.a+n,s=ys(a,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(s)-ce)<=ye)return e.x=this.long0,e.y=ce,n<0&&(e.y*=-1),e;var c=lh(this.a,this.e,Math.sin(s)),f=c*c*c/this.a/this.a*(1-this.es),d=Math.pow(Math.tan(s),2),u=t*this.a/c,m=u*u;o=s-c*Math.tan(s)/f*u*u*(.5-(1+3*d)*u*u/24),i=u*(1-m*(d/3+(1+3*d)*d*m/15))/Math.cos(s)}return e.x=Ee(i+this.long0),e.y=qo(o),e}var JC=["Cassini","Cassini_Soldner","cass"];const e3={init:ZC,forward:KC,inverse:QC,names:JC};function zo(e,t){var n;return e>1e-7?(n=e*t,(1-e*e)*(t/(1-n*n)-.5/e*Math.log((1-n)/(1+n)))):2*t}var mf=1,pf=2,_f=3,Qa=4;function t3(){var e=Math.abs(this.lat0);if(Math.abs(e-ce)<ye?this.mode=this.lat0<0?mf:pf:Math.abs(e)<ye?this.mode=_f:this.mode=Qa,this.es>0){var t;switch(this.qp=zo(this.e,1),this.mmf=.5/(1-this.es),this.apa=h3(this.es),this.mode){case pf:this.dd=1;break;case mf:this.dd=1;break;case _f:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case Qa:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=zo(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===Qa&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function n3(e){var t,n,o,i,r,a,s,c,f,d,u=e.x,m=e.y;if(u=Ee(u-this.long0),this.sphere){if(r=Math.sin(m),d=Math.cos(m),o=Math.cos(u),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(n=this.mode===this.EQUIT?1+d*o:1+this.sinph0*r+this.cosph0*d*o,n<=ye)return null;n=Math.sqrt(2/n),t=n*d*Math.sin(u),n*=this.mode===this.EQUIT?r:this.cosph0*r-this.sinph0*d*o}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(o=-o),Math.abs(m+this.lat0)<ye)return null;n=Ke-m*.5,n=2*(this.mode===this.S_POLE?Math.cos(n):Math.sin(n)),t=n*Math.sin(u),n*=o}}else{switch(s=0,c=0,f=0,o=Math.cos(u),i=Math.sin(u),r=Math.sin(m),a=zo(this.e,r),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(s=a/this.qp,c=Math.sqrt(1-s*s)),this.mode){case this.OBLIQ:f=1+this.sinb1*s+this.cosb1*c*o;break;case this.EQUIT:f=1+c*o;break;case this.N_POLE:f=ce+m,a=this.qp-a;break;case this.S_POLE:f=m-ce,a=this.qp+a;break}if(Math.abs(f)<ye)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:f=Math.sqrt(2/f),this.mode===this.OBLIQ?n=this.ymf*f*(this.cosb1*s-this.sinb1*c*o):n=(f=Math.sqrt(2/(1+c*o)))*s*this.ymf,t=this.xmf*f*c*i;break;case this.N_POLE:case this.S_POLE:a>=0?(t=(f=Math.sqrt(a))*i,n=o*(this.mode===this.S_POLE?f:-f)):t=n=0;break}}return e.x=this.a*t+this.x0,e.y=this.a*n+this.y0,e}function o3(e){e.x-=this.x0,e.y-=this.y0;var t=e.x/this.a,n=e.y/this.a,o,i,r,a,s,c,f;if(this.sphere){var d=0,u,m=0;if(u=Math.sqrt(t*t+n*n),i=u*.5,i>1)return null;switch(i=2*Math.asin(i),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(m=Math.sin(i),d=Math.cos(i)),this.mode){case this.EQUIT:i=Math.abs(u)<=ye?0:Math.asin(n*m/u),t*=m,n=d*u;break;case this.OBLIQ:i=Math.abs(u)<=ye?this.lat0:Math.asin(d*this.sinph0+n*m*this.cosph0/u),t*=m*this.cosph0,n=(d-Math.sin(i)*this.sinph0)*u;break;case this.N_POLE:n=-n,i=ce-i;break;case this.S_POLE:i-=ce;break}o=n===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,n)}else{if(f=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,n*=this.dd,c=Math.sqrt(t*t+n*n),c<ye)return e.x=this.long0,e.y=this.lat0,e;a=2*Math.asin(.5*c/this.rq),r=Math.cos(a),t*=a=Math.sin(a),this.mode===this.OBLIQ?(f=r*this.sinb1+n*a*this.cosb1/c,s=this.qp*f,n=c*this.cosb1*r-n*this.sinb1*a):(f=n*a/c,s=this.qp*f,n=c*r)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(n=-n),s=t*t+n*n,!s)return e.x=this.long0,e.y=this.lat0,e;f=1-s/this.qp,this.mode===this.S_POLE&&(f=-f)}o=Math.atan2(t,n),i=l3(Math.asin(f),this.apa)}return e.x=Ee(this.long0+o),e.y=i,e}var i3=.3333333333333333,r3=.17222222222222222,a3=.10257936507936508,s3=.06388888888888888,c3=.0664021164021164,f3=.016415012942191543;function h3(e){var t,n=[];return n[0]=e*i3,t=e*e,n[0]+=t*r3,n[1]=t*s3,t*=e,n[0]+=t*a3,n[1]+=t*c3,n[2]=t*f3,n}function l3(e,t){var n=e+e;return e+t[0]*Math.sin(n)+t[1]*Math.sin(n+n)+t[2]*Math.sin(n+n+n)}var u3=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const d3={init:t3,forward:n3,inverse:o3,names:u3,S_POLE:mf,N_POLE:pf,EQUIT:_f,OBLIQ:Qa};function Bo(e){return Math.abs(e)>1&&(e=e>1?1:-1),Math.asin(e)}function m3(){Math.abs(this.lat1+this.lat2)<ye||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=to(this.e3,this.sin_po,this.cos_po),this.qs1=zo(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=to(this.e3,this.sin_po,this.cos_po),this.qs2=zo(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=zo(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>ye?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function p3(e){var t=e.x,n=e.y;this.sin_phi=Math.sin(n),this.cos_phi=Math.cos(n);var o=zo(this.e3,this.sin_phi),i=this.a*Math.sqrt(this.c-this.ns0*o)/this.ns0,r=this.ns0*Ee(t-this.long0),a=i*Math.sin(r)+this.x0,s=this.rh-i*Math.cos(r)+this.y0;return e.x=a,e.y=s,e}function _3(e){var t,n,o,i,r,a;return e.x-=this.x0,e.y=this.rh-e.y+this.y0,this.ns0>=0?(t=Math.sqrt(e.x*e.x+e.y*e.y),o=1):(t=-Math.sqrt(e.x*e.x+e.y*e.y),o=-1),i=0,t!==0&&(i=Math.atan2(o*e.x,o*e.y)),o=t*this.ns0/this.a,this.sphere?a=Math.asin((this.c-o*o)/(2*this.ns0)):(n=(this.c-o*o)/this.ns0,a=this.phi1z(this.e3,n)),r=Ee(i/this.ns0+this.long0),e.x=r,e.y=a,e}function g3(e,t){var n,o,i,r,a,s=Bo(.5*t);if(e<ye)return s;for(var c=e*e,f=1;f<=25;f++)if(n=Math.sin(s),o=Math.cos(s),i=e*n,r=1-i*i,a=.5*r*r/o*(t/(1-c)-n/r+.5/e*Math.log((1-i)/(1+i))),s=s+a,Math.abs(a)<=1e-7)return s;return null}var y3=["Albers_Conic_Equal_Area","Albers_Equal_Area","Albers","aea"];const b3={init:m3,forward:p3,inverse:_3,names:y3,phi1z:g3};function E3(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function w3(e){var t,n,o,i,r,a,s,c,f=e.x,d=e.y;return o=Ee(f-this.long0),t=Math.sin(d),n=Math.cos(d),i=Math.cos(o),a=this.sin_p14*t+this.cos_p14*n*i,r=1,a>0||Math.abs(a)<=ye?(s=this.x0+this.a*r*n*Math.sin(o)/a,c=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*n*i)/a):(s=this.x0+this.infinity_dist*n*Math.sin(o),c=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*n*i)),e.x=s,e.y=c,e}function v3(e){var t,n,o,i,r,a;return e.x=(e.x-this.x0)/this.a,e.y=(e.y-this.y0)/this.a,e.x/=this.k0,e.y/=this.k0,(t=Math.sqrt(e.x*e.x+e.y*e.y))?(i=Math.atan2(t,this.rc),n=Math.sin(i),o=Math.cos(i),a=Bo(o*this.sin_p14+e.y*n*this.cos_p14/t),r=Math.atan2(e.x*n,t*this.cos_p14*o-e.y*this.sin_p14*n),r=Ee(this.long0+r)):(a=this.phic0,r=0),e.x=r,e.y=a,e}var T3=["gnom"];const S3={init:E3,forward:w3,inverse:v3,names:T3};function A3(e,t){var n=1-(1-e*e)/(2*e)*Math.log((1-e)/(1+e));if(Math.abs(Math.abs(t)-n)<1e-6)return t<0?-1*ce:ce;for(var o=Math.asin(.5*t),i,r,a,s,c=0;c<30;c++)if(r=Math.sin(o),a=Math.cos(o),s=e*r,i=Math.pow(1-s*s,2)/(2*a)*(t/(1-e*e)-r/(1-s*s)+.5/e*Math.log((1-s)/(1+s))),o+=i,Math.abs(i)<=1e-10)return o;return NaN}function x3(){this.sphere||(this.k0=to(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function O3(e){var t=e.x,n=e.y,o,i,r=Ee(t-this.long0);if(this.sphere)o=this.x0+this.a*r*Math.cos(this.lat_ts),i=this.y0+this.a*Math.sin(n)/Math.cos(this.lat_ts);else{var a=zo(this.e,Math.sin(n));o=this.x0+this.a*this.k0*r,i=this.y0+this.a*a*.5/this.k0}return e.x=o,e.y=i,e}function C3(e){e.x-=this.x0,e.y-=this.y0;var t,n;return this.sphere?(t=Ee(this.long0+e.x/this.a/Math.cos(this.lat_ts)),n=Math.asin(e.y/this.a*Math.cos(this.lat_ts))):(n=A3(this.e,2*e.y*this.k0/this.a),t=Ee(this.long0+e.x/(this.a*this.k0))),e.x=t,e.y=n,e}var M3=["cea"];const R3={init:x3,forward:O3,inverse:C3,names:M3};function P3(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function I3(e){var t=e.x,n=e.y,o=Ee(t-this.long0),i=qo(n-this.lat0);return e.x=this.x0+this.a*o*this.rc,e.y=this.y0+this.a*i,e}function z3(e){var t=e.x,n=e.y;return e.x=Ee(this.long0+(t-this.x0)/(this.a*this.rc)),e.y=qo(this.lat0+(n-this.y0)/this.a),e}var N3=["Equirectangular","Equidistant_Cylindrical","Equidistant_Cylindrical_Spherical","eqc"];const D3={init:P3,forward:I3,inverse:z3,names:N3};var Vu=20;function L3(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Zr(this.es),this.e1=Kr(this.es),this.e2=Qr(this.es),this.e3=Jr(this.es),this.ml0=this.a*tn(this.e0,this.e1,this.e2,this.e3,this.lat0)}function F3(e){var t=e.x,n=e.y,o,i,r,a=Ee(t-this.long0);if(r=a*Math.sin(n),this.sphere)Math.abs(n)<=ye?(o=this.a*a,i=-1*this.a*this.lat0):(o=this.a*Math.sin(r)/Math.tan(n),i=this.a*(qo(n-this.lat0)+(1-Math.cos(r))/Math.tan(n)));else if(Math.abs(n)<=ye)o=this.a*a,i=-1*this.ml0;else{var s=lh(this.a,this.e,Math.sin(n))/Math.tan(n);o=s*Math.sin(r),i=this.a*tn(this.e0,this.e1,this.e2,this.e3,n)-this.ml0+s*(1-Math.cos(r))}return e.x=o+this.x0,e.y=i+this.y0,e}function B3(e){var t,n,o,i,r,a,s,c,f;if(o=e.x-this.x0,i=e.y-this.y0,this.sphere)if(Math.abs(i+this.a*this.lat0)<=ye)t=Ee(o/this.a+this.long0),n=0;else{a=this.lat0+i/this.a,s=o*o/this.a/this.a+a*a,c=a;var d;for(r=Vu;r;--r)if(d=Math.tan(c),f=-1*(a*(c*d+1)-c-.5*(c*c+s)*d)/((c-a)/d-1),c+=f,Math.abs(f)<=ye){n=c;break}t=Ee(this.long0+Math.asin(o*Math.tan(c)/this.a)/Math.sin(n))}else if(Math.abs(i+this.ml0)<=ye)n=0,t=Ee(this.long0+o/this.a);else{a=(this.ml0+i)/this.a,s=o*o/this.a/this.a+a*a,c=a;var u,m,_,g,y;for(r=Vu;r;--r)if(y=this.e*Math.sin(c),u=Math.sqrt(1-y*y)*Math.tan(c),m=this.a*tn(this.e0,this.e1,this.e2,this.e3,c),_=this.e0-2*this.e1*Math.cos(2*c)+4*this.e2*Math.cos(4*c)-6*this.e3*Math.cos(6*c),g=m/this.a,f=(a*(u*g+1)-g-.5*u*(g*g+s))/(this.es*Math.sin(2*c)*(g*g+s-2*a*g)/(4*u)+(a-g)*(u*_-2/Math.sin(2*c))-_),c-=f,Math.abs(f)<=ye){n=c;break}u=Math.sqrt(1-this.es*Math.pow(Math.sin(n),2))*Math.tan(n),t=Ee(this.long0+Math.asin(o*u/this.a)/Math.sin(n))}return e.x=t,e.y=n,e}var U3=["Polyconic","American_Polyconic","poly"];const G3={init:L3,forward:F3,inverse:B3,names:U3};function q3(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function k3(e){var t,n=e.x,o=e.y,i=o-this.lat0,r=n-this.long0,a=i/Tr*1e-5,s=r,c=1,f=0;for(t=1;t<=10;t++)c=c*a,f=f+this.A[t]*c;var d=f,u=s,m=1,_=0,g,y,E=0,A=0;for(t=1;t<=6;t++)g=m*d-_*u,y=_*d+m*u,m=g,_=y,E=E+this.B_re[t]*m-this.B_im[t]*_,A=A+this.B_im[t]*m+this.B_re[t]*_;return e.x=A*this.a+this.x0,e.y=E*this.a+this.y0,e}function j3(e){var t,n=e.x,o=e.y,i=n-this.x0,r=o-this.y0,a=r/this.a,s=i/this.a,c=1,f=0,d,u,m=0,_=0;for(t=1;t<=6;t++)d=c*a-f*s,u=f*a+c*s,c=d,f=u,m=m+this.C_re[t]*c-this.C_im[t]*f,_=_+this.C_im[t]*c+this.C_re[t]*f;for(var g=0;g<this.iterations;g++){var y=m,E=_,A,S,O=a,M=s;for(t=2;t<=6;t++)A=y*m-E*_,S=E*m+y*_,y=A,E=S,O=O+(t-1)*(this.B_re[t]*y-this.B_im[t]*E),M=M+(t-1)*(this.B_im[t]*y+this.B_re[t]*E);y=1,E=0;var R=this.B_re[1],N=this.B_im[1];for(t=2;t<=6;t++)A=y*m-E*_,S=E*m+y*_,y=A,E=S,R=R+t*(this.B_re[t]*y-this.B_im[t]*E),N=N+t*(this.B_im[t]*y+this.B_re[t]*E);var F=R*R+N*N;m=(O*R+M*N)/F,_=(M*R-O*N)/F}var z=m,G=_,q=1,k=0;for(t=1;t<=9;t++)q=q*z,k=k+this.D[t]*q;var X=this.lat0+k*Tr*1e5,b=this.long0+G;return e.x=b,e.y=X,e}var V3=["New_Zealand_Map_Grid","nzmg"];const H3={init:q3,forward:k3,inverse:j3,names:V3};function W3(){}function Y3(e){var t=e.x,n=e.y,o=Ee(t-this.long0),i=this.x0+this.a*o,r=this.y0+this.a*Math.log(Math.tan(Math.PI/4+n/2.5))*1.25;return e.x=i,e.y=r,e}function $3(e){e.x-=this.x0,e.y-=this.y0;var t=Ee(this.long0+e.x/this.a),n=2.5*(Math.atan(Math.exp(.8*e.y/this.a))-Math.PI/4);return e.x=t,e.y=n,e}var X3=["Miller_Cylindrical","mill"];const Z3={init:W3,forward:Y3,inverse:$3,names:X3};var K3=20;function Q3(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=rh(this.es)}function J3(e){var t,n,o=e.x,i=e.y;if(o=Ee(o-this.long0),this.sphere){if(!this.m)i=this.n!==1?Math.asin(this.n*Math.sin(i)):i;else for(var r=this.n*Math.sin(i),a=K3;a;--a){var s=(this.m*i+Math.sin(i)-r)/(this.m+Math.cos(i));if(i-=s,Math.abs(s)<ye)break}t=this.a*this.C_x*o*(this.m+Math.cos(i)),n=this.a*this.C_y*i}else{var c=Math.sin(i),f=Math.cos(i);n=this.a*$i(i,c,f,this.en),t=this.a*o*f/Math.sqrt(1-this.es*c*c)}return e.x=t,e.y=n,e}function eM(e){var t,n,o,i;return e.x-=this.x0,o=e.x/this.a,e.y-=this.y0,t=e.y/this.a,this.sphere?(t/=this.C_y,o=o/(this.C_x*(this.m+Math.cos(t))),this.m?t=Bo((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=Bo(Math.sin(t)/this.n)),o=Ee(o+this.long0),t=qo(t)):(t=ah(e.y/this.a,this.es,this.en),i=Math.abs(t),i<ce?(i=Math.sin(t),n=this.long0+e.x*Math.sqrt(1-this.es*i*i)/(this.a*Math.cos(t)),o=Ee(n)):i-ye<ce&&(o=this.long0)),e.x=o,e.y=t,e}var tM=["Sinusoidal","sinu"];const nM={init:Q3,forward:J3,inverse:eM,names:tM};function oM(){}function iM(e){for(var t=e.x,n=e.y,o=Ee(t-this.long0),i=n,r=Math.PI*Math.sin(n);;){var a=-(i+Math.sin(i)-r)/(1+Math.cos(i));if(i+=a,Math.abs(a)<ye)break}i/=2,Math.PI/2-Math.abs(n)<ye&&(o=0);var s=.900316316158*this.a*o*Math.cos(i)+this.x0,c=1.4142135623731*this.a*Math.sin(i)+this.y0;return e.x=s,e.y=c,e}function rM(e){var t,n;e.x-=this.x0,e.y-=this.y0,n=e.y/(1.4142135623731*this.a),Math.abs(n)>.999999999999&&(n=.999999999999),t=Math.asin(n);var o=Ee(this.long0+e.x/(.900316316158*this.a*Math.cos(t)));o<-Math.PI&&(o=-Math.PI),o>Math.PI&&(o=Math.PI),n=(2*t+Math.sin(2*t))/Math.PI,Math.abs(n)>1&&(n=1);var i=Math.asin(n);return e.x=o,e.y=i,e}var aM=["Mollweide","moll"];const sM={init:oM,forward:iM,inverse:rM,names:aM};function cM(){Math.abs(this.lat1+this.lat2)<ye||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Zr(this.es),this.e1=Kr(this.es),this.e2=Qr(this.es),this.e3=Jr(this.es),this.sin_phi=Math.sin(this.lat1),this.cos_phi=Math.cos(this.lat1),this.ms1=to(this.e,this.sin_phi,this.cos_phi),this.ml1=tn(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<ye?this.ns=this.sin_phi:(this.sin_phi=Math.sin(this.lat2),this.cos_phi=Math.cos(this.lat2),this.ms2=to(this.e,this.sin_phi,this.cos_phi),this.ml2=tn(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=tn(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function fM(e){var t=e.x,n=e.y,o;if(this.sphere)o=this.a*(this.g-n);else{var i=tn(this.e0,this.e1,this.e2,this.e3,n);o=this.a*(this.g-i)}var r=this.ns*Ee(t-this.long0),a=this.x0+o*Math.sin(r),s=this.y0+this.rh-o*Math.cos(r);return e.x=a,e.y=s,e}function hM(e){e.x-=this.x0,e.y=this.rh-e.y+this.y0;var t,n,o,i;this.ns>=0?(n=Math.sqrt(e.x*e.x+e.y*e.y),t=1):(n=-Math.sqrt(e.x*e.x+e.y*e.y),t=-1);var r=0;if(n!==0&&(r=Math.atan2(t*e.x,t*e.y)),this.sphere)return i=Ee(this.long0+r/this.ns),o=qo(this.g-n/this.a),e.x=i,e.y=o,e;var a=this.g-n/this.a;return o=ys(a,this.e0,this.e1,this.e2,this.e3),i=Ee(this.long0+r/this.ns),e.x=i,e.y=o,e}var lM=["Equidistant_Conic","eqdc"];const uM={init:cM,forward:fM,inverse:hM,names:lM};function dM(){this.R=this.a}function mM(e){var t=e.x,n=e.y,o=Ee(t-this.long0),i,r;Math.abs(n)<=ye&&(i=this.x0+this.R*o,r=this.y0);var a=Bo(2*Math.abs(n/Math.PI));(Math.abs(o)<=ye||Math.abs(Math.abs(n)-ce)<=ye)&&(i=this.x0,n>=0?r=this.y0+Math.PI*this.R*Math.tan(.5*a):r=this.y0+Math.PI*this.R*-Math.tan(.5*a));var s=.5*Math.abs(Math.PI/o-o/Math.PI),c=s*s,f=Math.sin(a),d=Math.cos(a),u=d/(f+d-1),m=u*u,_=u*(2/f-1),g=_*_,y=Math.PI*this.R*(s*(u-g)+Math.sqrt(c*(u-g)*(u-g)-(g+c)*(m-g)))/(g+c);o<0&&(y=-y),i=this.x0+y;var E=c+u;return y=Math.PI*this.R*(_*E-s*Math.sqrt((g+c)*(c+1)-E*E))/(g+c),n>=0?r=this.y0+y:r=this.y0-y,e.x=i,e.y=r,e}function pM(e){var t,n,o,i,r,a,s,c,f,d,u,m,_;return e.x-=this.x0,e.y-=this.y0,u=Math.PI*this.R,o=e.x/u,i=e.y/u,r=o*o+i*i,a=-Math.abs(i)*(1+r),s=a-2*i*i+o*o,c=-2*a+1+2*i*i+r*r,_=i*i/c+(2*s*s*s/c/c/c-9*a*s/c/c)/27,f=(a-s*s/3/c)/c,d=2*Math.sqrt(-f/3),u=3*_/f/d,Math.abs(u)>1&&(u>=0?u=1:u=-1),m=Math.acos(u)/3,e.y>=0?n=(-d*Math.cos(m+Math.PI/3)-s/3/c)*Math.PI:n=-(-d*Math.cos(m+Math.PI/3)-s/3/c)*Math.PI,Math.abs(o)<ye?t=this.long0:t=Ee(this.long0+Math.PI*(r-1+Math.sqrt(1+2*(o*o-i*i)+r*r))/2/o),e.x=t,e.y=n,e}var _M=["Van_der_Grinten_I","VanDerGrinten","Van_der_Grinten","vandg"];const gM={init:dM,forward:mM,inverse:pM,names:_M};function yM(e,t,n,o,i,r){const a=o-t,s=Math.atan((1-r)*Math.tan(e)),c=Math.atan((1-r)*Math.tan(n)),f=Math.sin(s),d=Math.cos(s),u=Math.sin(c),m=Math.cos(c);let _=a,g,y=100,E,A,S,O,M,R,N,F,z,G,q,k,X,b;do{if(E=Math.sin(_),A=Math.cos(_),S=Math.sqrt(m*E*(m*E)+(d*u-f*m*A)*(d*u-f*m*A)),S===0)return{azi1:0,s12:0};O=f*u+d*m*A,M=Math.atan2(S,O),R=d*m*E/S,N=1-R*R,F=N!==0?O-2*f*u/N:0,z=r/16*N*(4+r*(4-3*N)),g=_,_=a+(1-z)*r*R*(M+z*S*(F+z*O*(-1+2*F*F)))}while(Math.abs(_-g)>1e-12&&--y>0);return y===0?{azi1:NaN,s12:NaN}:(G=N*(i*i-i*(1-r)*(i*(1-r)))/(i*(1-r)*(i*(1-r))),q=1+G/16384*(4096+G*(-768+G*(320-175*G))),k=G/1024*(256+G*(-128+G*(74-47*G))),X=k*S*(F+k/4*(O*(-1+2*F*F)-k/6*F*(-3+4*S*S)*(-3+4*F*F))),b=i*(1-r)*q*(M-X),{azi1:Math.atan2(m*E,d*u-f*m*A),s12:b})}function bM(e,t,n,o,i,r){const a=Math.atan((1-r)*Math.tan(e)),s=Math.sin(a),c=Math.cos(a),f=Math.sin(n),d=Math.cos(n),u=Math.atan2(s,c*d),m=c*f,_=1-m*m,g=_*(i*i-i*(1-r)*(i*(1-r)))/(i*(1-r)*(i*(1-r))),y=1+g/16384*(4096+g*(-768+g*(320-175*g))),E=g/1024*(256+g*(-128+g*(74-47*g)));let A=o/(i*(1-r)*y),S,O=100,M,R,N,F;do M=Math.cos(2*u+A),R=Math.sin(A),N=Math.cos(A),F=E*R*(M+E/4*(N*(-1+2*M*M)-E/6*M*(-3+4*R*R)*(-3+4*M*M))),S=A,A=o/(i*(1-r)*y)+F;while(Math.abs(A-S)>1e-12&&--O>0);if(O===0)return{lat2:NaN,lon2:NaN};const z=s*R-c*N*d,G=Math.atan2(s*N+c*R*d,(1-r)*Math.sqrt(m*m+z*z)),q=Math.atan2(R*f,c*N-s*R*d),k=r/16*_*(4+r*(4-3*_)),X=q-(1-k)*r*m*(A+k*R*(M+k*N*(-1+2*M*M))),b=t+X;return{lat2:G,lon2:b}}function EM(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0),this.f=this.es/(1+Math.sqrt(1-this.es))}function wM(e){var t=e.x,n=e.y,o=Math.sin(e.y),i=Math.cos(e.y),r=Ee(t-this.long0),a,s,c,f,d,u,m,_,g,y,E;return this.sphere?Math.abs(this.sin_p12-1)<=ye?(e.x=this.x0+this.a*(ce-n)*Math.sin(r),e.y=this.y0-this.a*(ce-n)*Math.cos(r),e):Math.abs(this.sin_p12+1)<=ye?(e.x=this.x0+this.a*(ce+n)*Math.sin(r),e.y=this.y0+this.a*(ce+n)*Math.cos(r),e):(g=this.sin_p12*o+this.cos_p12*i*Math.cos(r),m=Math.acos(g),_=m?m/Math.sin(m):1,e.x=this.x0+this.a*_*i*Math.sin(r),e.y=this.y0+this.a*_*(this.cos_p12*o-this.sin_p12*i*Math.cos(r)),e):(a=Zr(this.es),s=Kr(this.es),c=Qr(this.es),f=Jr(this.es),Math.abs(this.sin_p12-1)<=ye?(d=this.a*tn(a,s,c,f,ce),u=this.a*tn(a,s,c,f,n),e.x=this.x0+(d-u)*Math.sin(r),e.y=this.y0-(d-u)*Math.cos(r),e):Math.abs(this.sin_p12+1)<=ye?(d=this.a*tn(a,s,c,f,ce),u=this.a*tn(a,s,c,f,n),e.x=this.x0+(d+u)*Math.sin(r),e.y=this.y0+(d+u)*Math.cos(r),e):Math.abs(t)<ye&&Math.abs(n-this.lat0)<ye?(e.x=e.y=0,e):(y=yM(this.lat0,this.long0,n,t,this.a,this.f),E=y.azi1,e.x=y.s12*Math.sin(E),e.y=y.s12*Math.cos(E),e))}function vM(e){e.x-=this.x0,e.y-=this.y0;var t,n,o,i,r,a,s,c,f,d,u,m,_,g,y,E;return this.sphere?(t=Math.sqrt(e.x*e.x+e.y*e.y),t>2*ce*this.a?void 0:(n=t/this.a,o=Math.sin(n),i=Math.cos(n),r=this.long0,Math.abs(t)<=ye?a=this.lat0:(a=Bo(i*this.sin_p12+e.y*o*this.cos_p12/t),s=Math.abs(this.lat0)-ce,Math.abs(s)<=ye?this.lat0>=0?r=Ee(this.long0+Math.atan2(e.x,-e.y)):r=Ee(this.long0-Math.atan2(-e.x,e.y)):r=Ee(this.long0+Math.atan2(e.x*o,t*this.cos_p12*i-e.y*this.sin_p12*o))),e.x=r,e.y=a,e)):(c=Zr(this.es),f=Kr(this.es),d=Qr(this.es),u=Jr(this.es),Math.abs(this.sin_p12-1)<=ye?(m=this.a*tn(c,f,d,u,ce),t=Math.sqrt(e.x*e.x+e.y*e.y),_=m-t,a=ys(_/this.a,c,f,d,u),r=Ee(this.long0+Math.atan2(e.x,-1*e.y)),e.x=r,e.y=a,e):Math.abs(this.sin_p12+1)<=ye?(m=this.a*tn(c,f,d,u,ce),t=Math.sqrt(e.x*e.x+e.y*e.y),_=t-m,a=ys(_/this.a,c,f,d,u),r=Ee(this.long0+Math.atan2(e.x,e.y)),e.x=r,e.y=a,e):(g=Math.atan2(e.x,e.y),y=Math.sqrt(e.x*e.x+e.y*e.y),E=bM(this.lat0,this.long0,g,y,this.a,this.f),e.x=E.lon2,e.y=E.lat2,e))}var TM=["Azimuthal_Equidistant","aeqd"];const SM={init:EM,forward:wM,inverse:vM,names:TM};function AM(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function xM(e){var t,n,o,i,r,a,s,c,f=e.x,d=e.y;return o=Ee(f-this.long0),t=Math.sin(d),n=Math.cos(d),i=Math.cos(o),a=this.sin_p14*t+this.cos_p14*n*i,r=1,(a>0||Math.abs(a)<=ye)&&(s=this.a*r*n*Math.sin(o),c=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*n*i)),e.x=s,e.y=c,e}function OM(e){var t,n,o,i,r,a,s;return e.x-=this.x0,e.y-=this.y0,t=Math.sqrt(e.x*e.x+e.y*e.y),n=Bo(t/this.a),o=Math.sin(n),i=Math.cos(n),a=this.long0,Math.abs(t)<=ye?(s=this.lat0,e.x=a,e.y=s,e):(s=Bo(i*this.sin_p14+e.y*o*this.cos_p14/t),r=Math.abs(this.lat0)-ce,Math.abs(r)<=ye?(this.lat0>=0?a=Ee(this.long0+Math.atan2(e.x,-e.y)):a=Ee(this.long0-Math.atan2(-e.x,e.y)),e.x=a,e.y=s,e):(a=Ee(this.long0+Math.atan2(e.x*o,t*this.cos_p14*i-e.y*this.sin_p14*o)),e.x=a,e.y=s,e))}var CM=["ortho"];const MM={init:AM,forward:xM,inverse:OM,names:CM};var ut={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},Qe={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function RM(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=ce-Ke/2?this.face=ut.TOP:this.lat0<=-(ce-Ke/2)?this.face=ut.BOTTOM:Math.abs(this.long0)<=Ke?this.face=ut.FRONT:Math.abs(this.long0)<=ce+Ke?this.face=this.long0>0?ut.RIGHT:ut.LEFT:this.face=ut.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function PM(e){var t={x:0,y:0},n,o,i,r,a,s,c={value:0};if(e.x-=this.long0,this.es!==0?n=Math.atan(this.one_minus_f_squared*Math.tan(e.y)):n=e.y,o=e.x,this.face===ut.TOP)r=ce-n,o>=Ke&&o<=ce+Ke?(c.value=Qe.AREA_0,i=o-ce):o>ce+Ke||o<=-(ce+Ke)?(c.value=Qe.AREA_1,i=o>0?o-Bt:o+Bt):o>-(ce+Ke)&&o<=-Ke?(c.value=Qe.AREA_2,i=o+ce):(c.value=Qe.AREA_3,i=o);else if(this.face===ut.BOTTOM)r=ce+n,o>=Ke&&o<=ce+Ke?(c.value=Qe.AREA_0,i=-o+ce):o<Ke&&o>=-Ke?(c.value=Qe.AREA_1,i=-o):o<-Ke&&o>=-(ce+Ke)?(c.value=Qe.AREA_2,i=-o-ce):(c.value=Qe.AREA_3,i=o>0?-o+Bt:-o-Bt);else{var f,d,u,m,_,g,y;this.face===ut.RIGHT?o=Ii(o,+ce):this.face===ut.BACK?o=Ii(o,3.14159265359):this.face===ut.LEFT&&(o=Ii(o,-ce)),m=Math.sin(n),_=Math.cos(n),g=Math.sin(o),y=Math.cos(o),f=_*y,d=_*g,u=m,this.face===ut.FRONT?(r=Math.acos(f),i=Fa(r,u,d,c)):this.face===ut.RIGHT?(r=Math.acos(d),i=Fa(r,u,-f,c)):this.face===ut.BACK?(r=Math.acos(-f),i=Fa(r,u,-d,c)):this.face===ut.LEFT?(r=Math.acos(-d),i=Fa(r,u,f,c)):(r=i=0,c.value=Qe.AREA_0)}return s=Math.atan(12/Bt*(i+Math.acos(Math.sin(i)*Math.cos(Ke))-ce)),a=Math.sqrt((1-Math.cos(r))/(Math.cos(s)*Math.cos(s))/(1-Math.cos(Math.atan(1/Math.cos(i))))),c.value===Qe.AREA_1?s+=ce:c.value===Qe.AREA_2?s+=Bt:c.value===Qe.AREA_3&&(s+=1.5*Bt),t.x=a*Math.cos(s),t.y=a*Math.sin(s),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,e.x=t.x,e.y=t.y,e}function IM(e){var t={lam:0,phi:0},n,o,i,r,a,s,c,f,d,u={value:0};if(e.x=(e.x-this.x0)/this.a,e.y=(e.y-this.y0)/this.a,o=Math.atan(Math.sqrt(e.x*e.x+e.y*e.y)),n=Math.atan2(e.y,e.x),e.x>=0&&e.x>=Math.abs(e.y)?u.value=Qe.AREA_0:e.y>=0&&e.y>=Math.abs(e.x)?(u.value=Qe.AREA_1,n-=ce):e.x<0&&-e.x>=Math.abs(e.y)?(u.value=Qe.AREA_2,n=n<0?n+Bt:n-Bt):(u.value=Qe.AREA_3,n+=ce),d=Bt/12*Math.tan(n),a=Math.sin(d)/(Math.cos(d)-1/Math.sqrt(2)),s=Math.atan(a),i=Math.cos(n),r=Math.tan(o),c=1-i*i*r*r*(1-Math.cos(Math.atan(1/Math.cos(s)))),c<-1?c=-1:c>1&&(c=1),this.face===ut.TOP)f=Math.acos(c),t.phi=ce-f,u.value===Qe.AREA_0?t.lam=s+ce:u.value===Qe.AREA_1?t.lam=s<0?s+Bt:s-Bt:u.value===Qe.AREA_2?t.lam=s-ce:t.lam=s;else if(this.face===ut.BOTTOM)f=Math.acos(c),t.phi=f-ce,u.value===Qe.AREA_0?t.lam=-s+ce:u.value===Qe.AREA_1?t.lam=-s:u.value===Qe.AREA_2?t.lam=-s-ce:t.lam=s<0?-s-Bt:-s+Bt;else{var m,_,g;m=c,d=m*m,d>=1?g=0:g=Math.sqrt(1-d)*Math.sin(s),d+=g*g,d>=1?_=0:_=Math.sqrt(1-d),u.value===Qe.AREA_1?(d=_,_=-g,g=d):u.value===Qe.AREA_2?(_=-_,g=-g):u.value===Qe.AREA_3&&(d=_,_=g,g=-d),this.face===ut.RIGHT?(d=m,m=-_,_=d):this.face===ut.BACK?(m=-m,_=-_):this.face===ut.LEFT&&(d=m,m=_,_=-d),t.phi=Math.acos(-g)-ce,t.lam=Math.atan2(_,m),this.face===ut.RIGHT?t.lam=Ii(t.lam,-ce):this.face===ut.BACK?t.lam=Ii(t.lam,-3.14159265359):this.face===ut.LEFT&&(t.lam=Ii(t.lam,+ce))}if(this.es!==0){var y,E,A;y=t.phi<0?1:0,E=Math.tan(t.phi),A=this.b/Math.sqrt(E*E+this.one_minus_f_squared),t.phi=Math.atan(Math.sqrt(this.a*this.a-A*A)/(this.one_minus_f*A)),y&&(t.phi=-t.phi)}return t.lam+=this.long0,e.x=t.lam,e.y=t.phi,e}function Fa(e,t,n,o){var i;return e<ye?(o.value=Qe.AREA_0,i=0):(i=Math.atan2(t,n),Math.abs(i)<=Ke?o.value=Qe.AREA_0:i>Ke&&i<=ce+Ke?(o.value=Qe.AREA_1,i-=ce):i>ce+Ke||i<=-(ce+Ke)?(o.value=Qe.AREA_2,i=i>=0?i-Bt:i+Bt):(o.value=Qe.AREA_3,i+=ce)),i}function Ii(e,t){var n=e+t;return n<-3.14159265359?n+=Br:n>3.14159265359&&(n-=Br),n}var zM=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const NM={init:RM,forward:PM,inverse:IM,names:zM};var gf=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],yr=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],ep=.8487,tp=1.3523,np=Zn/5,DM=1/np,Ci=18,bs=function(e,t){return e[0]+t*(e[1]+t*(e[2]+t*e[3]))},LM=function(e,t){return e[1]+t*(2*e[2]+t*3*e[3])};function FM(e,t,n,o){for(var i=t;o;--o){var r=e(i);if(i-=r,Math.abs(r)<n)break}return i}function BM(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function UM(e){var t=Ee(e.x-this.long0),n=Math.abs(e.y),o=Math.floor(n*np);o<0?o=0:o>=Ci&&(o=Ci-1),n=Zn*(n-DM*o);var i={x:bs(gf[o],n)*t,y:bs(yr[o],n)};return e.y<0&&(i.y=-i.y),i.x=i.x*this.a*ep+this.x0,i.y=i.y*this.a*tp+this.y0,i}function GM(e){var t={x:(e.x-this.x0)/(this.a*ep),y:Math.abs(e.y-this.y0)/(this.a*tp)};if(t.y>=1)t.x/=gf[Ci][0],t.y=e.y<0?-ce:ce;else{var n=Math.floor(t.y*Ci);for(n<0?n=0:n>=Ci&&(n=Ci-1);;)if(yr[n][0]>t.y)--n;else if(yr[n+1][0]<=t.y)++n;else break;var o=yr[n],i=5*(t.y-o[0])/(yr[n+1][0]-o[0]);i=FM(function(r){return(bs(o,r)-t.y)/LM(o,r)},i,ye,100),t.x/=bs(gf[n],i),t.y=(5*n+i)*Nt,e.y<0&&(t.y=-t.y)}return t.x=Ee(t.x+this.long0),t}var qM=["Robinson","robin"];const kM={init:BM,forward:UM,inverse:GM,names:qM};function jM(){this.name="geocent"}function VM(e){var t=jm(e,this.es,this.a);return t}function HM(e){var t=Vm(e,this.es,this.a,this.b);return t}var WM=["Geocentric","geocentric","geocent","Geocent"];const YM={init:jM,forward:VM,inverse:HM,names:WM};var Ht={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},hr={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function $M(){if(Object.keys(hr).forEach((function(n){if(typeof this[n]>"u")this[n]=hr[n].def;else{if(hr[n].num&&isNaN(this[n]))throw new Error("Invalid parameter value, must be numeric "+n+" = "+this[n]);hr[n].num&&(this[n]=parseFloat(this[n]))}hr[n].degrees&&(this[n]=this[n]*Nt)}).bind(this)),Math.abs(Math.abs(this.lat0)-ce)<ye?this.mode=this.lat0<0?Ht.S_POLE:Ht.N_POLE:Math.abs(this.lat0)<ye?this.mode=Ht.EQUIT:(this.mode=Ht.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var e=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(e),this.sw=Math.sin(e)}function XM(e){e.x-=this.long0;var t=Math.sin(e.y),n=Math.cos(e.y),o=Math.cos(e.x),i,r;switch(this.mode){case Ht.OBLIQ:r=this.sinph0*t+this.cosph0*n*o;break;case Ht.EQUIT:r=n*o;break;case Ht.S_POLE:r=-t;break;case Ht.N_POLE:r=t;break}switch(r=this.pn1/(this.p-r),i=r*n*Math.sin(e.x),this.mode){case Ht.OBLIQ:r*=this.cosph0*t-this.sinph0*n*o;break;case Ht.EQUIT:r*=t;break;case Ht.N_POLE:r*=-(n*o);break;case Ht.S_POLE:r*=n*o;break}var a,s;return a=r*this.cg+i*this.sg,s=1/(a*this.sw*this.h1+this.cw),i=(i*this.cg-r*this.sg)*this.cw*s,r=a*s,e.x=i*this.a,e.y=r*this.a,e}function ZM(e){e.x/=this.a,e.y/=this.a;var t={x:e.x,y:e.y},n,o,i;i=1/(this.pn1-e.y*this.sw),n=this.pn1*e.x*i,o=this.pn1*e.y*this.cw*i,e.x=n*this.cg+o*this.sg,e.y=o*this.cg-n*this.sg;var r=fn(e.x,e.y);if(Math.abs(r)<ye)t.x=0,t.y=e.y;else{var a,s;switch(s=1-r*r*this.pfact,s=(this.p-Math.sqrt(s))/(this.pn1/r+r/this.pn1),a=Math.sqrt(1-s*s),this.mode){case Ht.OBLIQ:t.y=Math.asin(a*this.sinph0+e.y*s*this.cosph0/r),e.y=(a-this.sinph0*Math.sin(t.y))*r,e.x*=s*this.cosph0;break;case Ht.EQUIT:t.y=Math.asin(e.y*s/r),e.y=a*r,e.x*=s;break;case Ht.N_POLE:t.y=Math.asin(a),e.y=-e.y;break;case Ht.S_POLE:t.y=-Math.asin(a);break}t.x=Math.atan2(e.x,e.y)}return e.x=t.x+this.long0,e.y=t.y,e}var KM=["Tilted_Perspective","tpers"];const QM={init:$M,forward:XM,inverse:ZM,names:KM};function JM(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var e=1-this.es,t=1/e;this.radius_p=Math.sqrt(e),this.radius_p2=e,this.radius_p_inv2=t,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function eR(e){var t=e.x,n=e.y,o,i,r,a;if(t=t-this.long0,this.shape==="ellipse"){n=Math.atan(this.radius_p2*Math.tan(n));var s=this.radius_p/fn(this.radius_p*Math.cos(n),Math.sin(n));if(i=s*Math.cos(t)*Math.cos(n),r=s*Math.sin(t)*Math.cos(n),a=s*Math.sin(n),(this.radius_g-i)*i-r*r-a*a*this.radius_p_inv2<0)return e.x=Number.NaN,e.y=Number.NaN,e;o=this.radius_g-i,this.flip_axis?(e.x=this.radius_g_1*Math.atan(r/fn(a,o)),e.y=this.radius_g_1*Math.atan(a/o)):(e.x=this.radius_g_1*Math.atan(r/o),e.y=this.radius_g_1*Math.atan(a/fn(r,o)))}else this.shape==="sphere"&&(o=Math.cos(n),i=Math.cos(t)*o,r=Math.sin(t)*o,a=Math.sin(n),o=this.radius_g-i,this.flip_axis?(e.x=this.radius_g_1*Math.atan(r/fn(a,o)),e.y=this.radius_g_1*Math.atan(a/o)):(e.x=this.radius_g_1*Math.atan(r/o),e.y=this.radius_g_1*Math.atan(a/fn(r,o))));return e.x=e.x*this.a,e.y=e.y*this.a,e}function tR(e){var t=-1,n=0,o=0,i,r,a,s;if(e.x=e.x/this.a,e.y=e.y/this.a,this.shape==="ellipse"){this.flip_axis?(o=Math.tan(e.y/this.radius_g_1),n=Math.tan(e.x/this.radius_g_1)*fn(1,o)):(n=Math.tan(e.x/this.radius_g_1),o=Math.tan(e.y/this.radius_g_1)*fn(1,n));var c=o/this.radius_p;if(i=n*n+c*c+t*t,r=2*this.radius_g*t,a=r*r-4*i*this.C,a<0)return e.x=Number.NaN,e.y=Number.NaN,e;s=(-r-Math.sqrt(a))/(2*i),t=this.radius_g+s*t,n*=s,o*=s,e.x=Math.atan2(n,t),e.y=Math.atan(o*Math.cos(e.x)/t),e.y=Math.atan(this.radius_p_inv2*Math.tan(e.y))}else if(this.shape==="sphere"){if(this.flip_axis?(o=Math.tan(e.y/this.radius_g_1),n=Math.tan(e.x/this.radius_g_1)*Math.sqrt(1+o*o)):(n=Math.tan(e.x/this.radius_g_1),o=Math.tan(e.y/this.radius_g_1)*Math.sqrt(1+n*n)),i=n*n+o*o+t*t,r=2*this.radius_g*t,a=r*r-4*i*this.C,a<0)return e.x=Number.NaN,e.y=Number.NaN,e;s=(-r-Math.sqrt(a))/(2*i),t=this.radius_g+s*t,n*=s,o*=s,e.x=Math.atan2(n,t),e.y=Math.atan(o*Math.cos(e.x)/t)}return e.x=e.x+this.long0,e}var nR=["Geostationary Satellite View","Geostationary_Satellite","geos"];const oR={init:JM,forward:eR,inverse:tR,names:nR};var Sr=1.340264,Ar=-.081106,xr=893e-6,Or=.003796,Es=Math.sqrt(3)/2;function iR(){this.es=0,this.long0=this.long0!==void 0?this.long0:0}function rR(e){var t=Ee(e.x-this.long0),n=e.y,o=Math.asin(Es*Math.sin(n)),i=o*o,r=i*i*i;return e.x=t*Math.cos(o)/(Es*(Sr+3*Ar*i+r*(7*xr+9*Or*i))),e.y=o*(Sr+Ar*i+r*(xr+Or*i)),e.x=this.a*e.x+this.x0,e.y=this.a*e.y+this.y0,e}function aR(e){e.x=(e.x-this.x0)/this.a,e.y=(e.y-this.y0)/this.a;var t=1e-9,n=12,o=e.y,i,r,a,s,c,f;for(f=0;f<n&&(i=o*o,r=i*i*i,a=o*(Sr+Ar*i+r*(xr+Or*i))-e.y,s=Sr+3*Ar*i+r*(7*xr+9*Or*i),o-=c=a/s,!(Math.abs(c)<t));++f);return i=o*o,r=i*i*i,e.x=Es*e.x*(Sr+3*Ar*i+r*(7*xr+9*Or*i))/Math.cos(o),e.y=Math.asin(Math.sin(o)/Es),e.x=Ee(e.x+this.long0),e}var sR=["eqearth","Equal Earth","Equal_Earth"];const cR={init:iR,forward:rR,inverse:aR,names:sR};var qr=1e-10;function fR(){var e;if(this.phi1=this.lat1,Math.abs(this.phi1)<qr)throw new Error;this.es?(this.en=rh(this.es),this.m1=$i(this.phi1,this.am1=Math.sin(this.phi1),e=Math.cos(this.phi1),this.en),this.am1=e/(Math.sqrt(1-this.es*this.am1*this.am1)*this.am1),this.inverse=lR,this.forward=hR):(Math.abs(this.phi1)+qr>=ce?this.cphi1=0:this.cphi1=1/Math.tan(this.phi1),this.inverse=dR,this.forward=uR)}function hR(e){var t=Ee(e.x-(this.long0||0)),n=e.y,o,i,r;return o=this.am1+this.m1-$i(n,i=Math.sin(n),r=Math.cos(n),this.en),i=r*t/(o*Math.sqrt(1-this.es*i*i)),e.x=o*Math.sin(i),e.y=this.am1-o*Math.cos(i),e.x=this.a*e.x+(this.x0||0),e.y=this.a*e.y+(this.y0||0),e}function lR(e){e.x=(e.x-(this.x0||0))/this.a,e.y=(e.y-(this.y0||0))/this.a;var t,n,o,i;if(n=fn(e.x,e.y=this.am1-e.y),i=ah(this.am1+this.m1-n,this.es,this.en),(t=Math.abs(i))<ce)t=Math.sin(i),o=n*Math.atan2(e.x,e.y)*Math.sqrt(1-this.es*t*t)/Math.cos(i);else if(Math.abs(t-ce)<=qr)o=0;else throw new Error;return e.x=Ee(o+(this.long0||0)),e.y=qo(i),e}function uR(e){var t=Ee(e.x-(this.long0||0)),n=e.y,o,i;return i=this.cphi1+this.phi1-n,Math.abs(i)>qr?(e.x=i*Math.sin(o=t*Math.cos(n)/i),e.y=this.cphi1-i*Math.cos(o)):e.x=e.y=0,e.x=this.a*e.x+(this.x0||0),e.y=this.a*e.y+(this.y0||0),e}function dR(e){e.x=(e.x-(this.x0||0))/this.a,e.y=(e.y-(this.y0||0))/this.a;var t,n,o=fn(e.x,e.y=this.cphi1-e.y);if(n=this.cphi1+this.phi1-o,Math.abs(n)>ce)throw new Error;return Math.abs(Math.abs(n)-ce)<=qr?t=0:t=o*Math.atan2(e.x,e.y)/Math.cos(n),e.x=Ee(t+(this.long0||0)),e.y=qo(n),e}var mR=["bonne","Bonne (Werner lat_1=90)"];const pR={init:fR,names:mR};function _R(e){e.Proj.projections.add(Za),e.Proj.projections.add(Ka),e.Proj.projections.add(dC),e.Proj.projections.add(TC),e.Proj.projections.add(CC),e.Proj.projections.add(zC),e.Proj.projections.add(UC),e.Proj.projections.add(VC),e.Proj.projections.add(XC),e.Proj.projections.add(e3),e.Proj.projections.add(d3),e.Proj.projections.add(b3),e.Proj.projections.add(S3),e.Proj.projections.add(R3),e.Proj.projections.add(D3),e.Proj.projections.add(G3),e.Proj.projections.add(H3),e.Proj.projections.add(Z3),e.Proj.projections.add(nM),e.Proj.projections.add(sM),e.Proj.projections.add(uM),e.Proj.projections.add(gM),e.Proj.projections.add(SM),e.Proj.projections.add(MM),e.Proj.projections.add(NM),e.Proj.projections.add(kM),e.Proj.projections.add(YM),e.Proj.projections.add(QM),e.Proj.projections.add(oR),e.Proj.projections.add(cR),e.Proj.projections.add(pR)}const Cr=Object.assign(RO,{defaultDatum:"WGS84",Proj:Fn,WGS84:new Fn("WGS84"),Point:ji,toPoint:Hm,defs:Jt,nadgrid:uO,transform:gs,mgrs:PO,version:"__VERSION__"});_R(Cr);const x4=Object.freeze(Object.defineProperty({__proto__:null,default:Cr},Symbol.toStringTag,{value:"Module"}));th("@carma-commons/utils proj4helpers is deprecated: Use @carma-geo/proj");Cr("EPSG:3857"),Cr("EPSG:4326"),Cr("+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs");th("@carma-commons/utils window is deprecated, use @carma-commons/dom/window instead");T.toRadians(10);var gR=(e=>(e[e.HORIZONTAL=0]="HORIZONTAL",e[e.OBLIQUE=T.toRadians(-45)]="OBLIQUE",e[e.ORTHO=T.toRadians(-90)]="ORTHO",e))(gR||{});const zi=e=>typeof e=="number"&&Number.isFinite(e),O4=e=>{if(e&&zi(e.fovy)&&e.fovy>0)return e.fovy;if(!(!e||!zi(e.fov)||e.fov<=0))return zi(e.aspectRatio)&&e.aspectRatio>1?Math.atan(Math.tan(e.fov*.5)/e.aspectRatio)*2:e.fov},C4=e=>{if(!(!e||!zi(e.fov)||e.fov<=0))return e.fov},yR=(e,t)=>{!zi(t)||t<=0||(e.fov=zi(e.aspectRatio)&&e.aspectRatio>1?Math.atan(Math.tan(t*.5)*e.aspectRatio)*2:t)},bR=new No(1,0,0),ER=new No(0,1,0),wR=new No(0,0,-1),M4=e=>{const t=wR.clone().applyQuaternion(e).normalize(),n=ER.clone().applyQuaternion(e).normalize(),o=bR.clone().applyQuaternion(e).normalize();return{forward:t,up:n,right:o}},vR=({forward:e,right:t,up:n})=>new Jp().setFromRotationMatrix(new ai().makeBasis(t.clone().normalize(),n.clone().normalize(),e.clone().negate().normalize())),TR=new No(1,0,0),SR=new No(0,0,1),AR=new No(0,-1,0),op=new ai().makeBasis(TR,SR,AR),xR=op.clone().transpose(),ip=new ai,OR=(e=new ai)=>e.copy(op),CR=(e=new ai)=>e.copy(xR),MR=(e,t=e.clone())=>t.copy(e).transformDirection(CR(ip)),RR=(e,t=e.clone())=>t.copy(e).transformDirection(OR(ip)),rp=new ai,PR=new ai,Nc=(e,t,n=e.clone())=>{const o=n.copy(e).transformDirection(Xu(t,rp));return MR(o,n)},R4=(e,t,n=e.clone())=>{const o=RR(e,n),i=PR.copy(Xu(t,rp)).invert();return o.transformDirection(i).normalize()},P4=(e,t)=>{const n=Nc(e.forward,t),o=Nc(e.right,t);Nc(e.up,t);const i=o.clone().normalize(),r=new No().crossVectors(i,n).normalize(),a=new No().crossVectors(r,i).normalize();return vR({forward:a,right:i,up:r})};new ie;const IR=500,I4=(e,t,n,{durationMs:o=IR,easing:i=Im.SINUSOIDAL_IN_OUT,onComplete:r,onCancel:a}={})=>{const s=e.camera;if(!s||e.isDestroyed())return()=>{};const c=s.heading,f=s.pitch,d=h.distance(t,s.position),u=bx(c,n.heading),m=n.pitch-f,_=n.range-d;if(Math.abs(u)<1e-6&&Math.abs(m)<1e-6&&Math.abs(_)<.001)return()=>{};let g=!1;const y=performance.now(),E=(M,R,N)=>{s.lookAt(t,new sf(M,R,N));try{s.lookAtTransform(U.IDENTITY)}catch{}},A=M=>{if(!e.isDestroyed()){e.preRender.removeEventListener(O);try{s.lookAtTransform(U.IDENTITY)}catch{}e.requestRender(),a==null||a()}},S=()=>{e.isDestroyed()||(E(n.heading,n.pitch,n.range),e.preRender.removeEventListener(O),e.requestRender(),r==null||r())},O=()=>{if(g||e.isDestroyed()){A();return}const M=performance.now()-y,R=o<=0?1:Math.min(M/o,1),N=T.clamp(i(R),0,1),F=c+u*N,z=f+m*N,G=d+_*N;E(F,z,G),e.requestRender(),R>=1&&S()};return e.preRender.addEventListener(O),e.requestRender(),()=>{g=!0,A()}},z4=(e,t,n={})=>{const o=e.camera;return o?(o.lookAtTransform(U.IDENTITY),o.flyTo({destination:t.position,orientation:{direction:t.direction,up:t.up},duration:n.duration,complete:n.onComplete,cancel:n.onCancel}),n.applyFov!==!1&&t.fov!==void 0&&o.frustum instanceof un&&yR(o.frustum,t.fov),e.requestRender(),!0):!1},zR=2,NR=5,DR=3,LR=1,FR=x.WHITE,BR=Im.SINUSOIDAL_IN_OUT,ap="__carmaAxisVisualizerId",Hu=(e,t,{durationMs:n=200,easing:o=BR,onUpdate:i,onComplete:r,onCancel:a})=>{if(n<=0)return i(t),r==null||r(),()=>{};let s=!1;const c=performance.now();let f=0;const d=u=>{if(s)return;const m=u-c,_=Math.min(m/n,1),g=o(_),y=rx(e,t,g);if(i(y),_>=1){r==null||r();return}f=window.requestAnimationFrame(d)};return f=window.requestAnimationFrame(d),()=>{s||(s=!0,window.cancelAnimationFrame(f),a==null||a())}},Wu=(e,t)=>{const n=h.normalize(t,new h),o=Math.abs(h.dot(n,h.UNIT_Z))>.9?h.UNIT_X:h.UNIT_Z,i=h.normalize(h.cross(n,o,new h),new h),r=h.normalize(h.cross(i,n,new h),new h),a=U.clone(U.IDENTITY,new U);return U.setColumn(a,0,new Q(i.x,i.y,i.z,0),a),U.setColumn(a,1,new Q(r.x,r.y,r.z,0),a),U.setColumn(a,2,new Q(n.x,n.y,n.z,0),a),U.setColumn(a,3,new Q(e.x,e.y,e.z,1),a),a},UR=e=>{if(!e)return!1;try{return!e.isDestroyed()}catch{return!1}},GR=(e,t)=>{const n=e.primitives;for(let o=n.length-1;o>=0;o-=1){const i=n.get(o);if(i&&i[ap]===t)try{n.remove(i)}catch{}}},N4=(e,{origin:t,upVector:n,cameraPosition:o,lengthMultiplier:i=zR,dashPixelLength:r=NR,gapPixelLength:a=DR,color:s=FR,width:c=LR})=>{let f=t,d=h.normalize(n,new h),u=o,m=!1,_=!1,g=!0,y=1,E=null,A=null,S=null,O=null,M=null;const R=s,N=()=>{try{A==null||A()}catch{}},F=C=>{if(!E)return 1;const D=E.camera.frustum.fov||1;return C*Math.tan(D/2)*2/E.canvas.clientHeight},z=()=>u?h.distance(u,f)*i:1e5,G=()=>{if(!u||!E)return{dashMeters:1e3,gapMeters:500};const C=h.distance(u,f),D=F(C);return{dashMeters:r*D,gapMeters:a*D}},q=C=>{if(!S||!O)return;const D=O.uniforms.color;D?(D.red=R.red,D.green=R.green,D.blue=R.blue,D.alpha=C):O.uniforms.color=R.withAlpha(C),N()},k=()=>{if(!E)return;if(S)try{E.primitives.remove(S)}catch{}GR(E,e);const C=z(),{dashMeters:D,gapMeters:H}=G(),Z=C*2,J=D+H,K=Math.floor(Z/J);S=new kn,S.modelMatrix=Wu(f,d),O=ee.fromType("Color",{color:R.withAlpha(y)});for(let te=0;te<K;te+=1){const he=-C+te*J,we=he+D;S.add({positions:[new h(0,0,he),new h(0,0,we)],width:c,material:O,show:g})}S[ap]=e,E.primitives.add(S)},X=()=>{if(!S||!E)return;S.modelMatrix=Wu(f,d);const C=z(),{dashMeters:D,gapMeters:H}=G(),Z=C*2,J=D+H,K=Math.floor(Z/J);if(S.length!==K){k();return}for(let te=0;te<K;te+=1){const he=S.get(te);if(!he)continue;const we=-C+te*J,Te=we+D;he.positions=[new h(0,0,we),new h(0,0,Te)],he.show=g}N()},b=()=>{M==null||M(),M=null},v={get id(){return e},get isAttached(){return m},get origin(){return f},get isVisible(){return g},attach:(C,D)=>{if(_)throw new Error("Cannot attach destroyed visualizer");m&&v.detach(),E=C,A=D,k(),m=!0,N()},detach:()=>{if(!(!m||!E)){if(b(),S&&UR(E))try{E.primitives.remove(S)}catch{}S=null,O=null,m=!1,N()}},destroy:()=>{_||(v.detach(),_=!0,E=null,A=null)},update:(C,D,H)=>{_||(f=C,d=h.normalize(D,new h),H&&(u=H),m&&X())},show:()=>{if(!_){if(b(),g=!0,y=1,S)for(let C=0;C<S.length;C+=1){const D=S.get(C);D&&(D.show=!0)}q(y)}},hide:()=>{if(!_){if(b(),g=!1,y=0,S)for(let C=0;C<S.length;C+=1){const D=S.get(C);D&&(D.show=!1)}q(y)}},fadeIn:C=>{if(!(_||!m)){if(b(),g=!0,S)for(let D=0;D<S.length;D+=1){const H=S.get(D);H&&(H.show=!0)}M=Hu(y,1,{durationMs:C,onUpdate:D=>{y=D,q(D)}})}},fadeOut:(C,D)=>{_||!m||(b(),M=Hu(y,0,{durationMs:C,onUpdate:H=>{y=H,q(H)},onComplete:()=>{if(g=!1,S)for(let H=0;H<S.length;H+=1){const Z=S.get(H);Z&&(Z.show=!1)}N(),D==null||D()}}))}};return v},It=new Array(16),zt=new Array(16),qR=new U,kR=new U,jR=new h,VR=1e-12,HR=(e,t=1,n=0,o=0)=>{const i=Math.max(t,o),r=Math.cos(n),a=Math.sin(n);return It[0]=i*r,It[1]=i*a,It[2]=0,It[3]=0,It[4]=-i*a,It[5]=i*r,It[6]=0,It[7]=0,It[8]=0,It[9]=0,It[10]=1,It[11]=0,It[12]=e.x,It[13]=e.y,It[14]=e.z,It[15]=1,U.fromArray(It,0,new U)},D4=(e,t,n,o,i=1,r=1,a=1,s=new U)=>(zt[0]=t.x*i,zt[1]=t.y*i,zt[2]=t.z*i,zt[3]=0,zt[4]=n.x*r,zt[5]=n.y*r,zt[6]=n.z*r,zt[7]=0,zt[8]=o.x*a,zt[9]=o.y*a,zt[10]=o.z*a,zt[11]=0,zt[12]=e.x,zt[13]=e.y,zt[14]=e.z,zt[15]=1,U.fromArray(zt,0,s)),L4=(e,t,n=new h)=>{const o=t*4;return h.fromElements(e[o],e[o+1],e[o+2],n)},F4=e=>h.magnitudeSquared(e)<=VR?null:h.normalize(e,new h),B4=(e,t,n=be.WGS84)=>{const o=Pe.eastNorthUpToFixedFrame(t,n,qR),i=U.inverseTransformation(o,kR),r=U.multiplyByPoint(i,e,jR);return{east:r.x,north:r.y,up:r.z}},Ni={COLOR:"color",CHROME_MIRROR:"chrome-mirror",FROSTED_GLASS:"frosted-glass"},sp=24,cp=x.WHITE.withAlpha(.65),WR=cp.alpha,fp=1e-6,uh=.001,YR=1e-8,Yu=1e-9,hp=ze.POSITION_ONLY,$R=ze.POSITION_AND_ST,lp=Go.getDefaultRenderState(!0,!1),XR=e=>Math.max(Number.isFinite(e)?e:0,fp),ZR=(e,t)=>{const n=Math.max(0,t-uh);return Vi(typeof e=="number"&&Number.isFinite(e)?e:0,0,n)},KR=(e,t)=>Vi(e/t,0,1-uh),up=e=>{const t=typeof e=="number"&&Number.isFinite(e)?e:Do;return Vi(t,0,Do)},dp=e=>Math.max(8,Math.floor(typeof e=="number"&&Number.isFinite(e)?e:sp)),QR=e=>typeof e=="number"&&Number.isFinite(e)?e:0,JR=(e,t)=>Vi(typeof e=="number"&&Number.isFinite(e)?e:t,0,1),e4=e=>e===Ni.CHROME_MIRROR||e===Ni.FROSTED_GLASS?e:Ni.COLOR,t4=(e,t)=>Math.abs(e-Do)<=t,n4=(e,t)=>{const n=Math.max(1,e);if(t<=Yu)return 1;if(t4(t,YR))return n;const o=t/Do*n,i=Math.round(o);return Math.abs(o-i)<=Yu?Math.max(1,i):Math.max(1,Math.ceil(o))},mp=(e,t)=>{const n=Math.max(1,e),o=Vi(t,0,Do),i=n4(n,o),r=i>=n;return{segments:n,pointCount:r?i:i+1,isFullCircle:r,stepRad:Do/n}},kr=(e,t=1)=>{const n=Math.max(t,0);return Array.from({length:e.pointCount},(o,i)=>{const r=e.stepRad*i;return new h(Math.cos(r)*n,Math.sin(r)*n,0)})},o4=(e,t)=>{const n=kr(e),o=kr(e,t).reverse();return new nf(n,[new nf(o)])},i4=({sampling:e,normalizedInnerRadius:t})=>{const n=kr(e);if(t<=0)return[h.ZERO,...n];const o=kr(e,t).reverse();return[...n,...o]},r4=({innerRadiusRatio:e=0,angleRad:t=Do,segments:n=sp,vertexFormat:o=hp})=>{const i=dp(n),r=up(t),a=Vi(Number.isFinite(e)?e:0,0,1-uh),s=mp(i,r);return s.isFullCircle?a>0?new mo({polygonHierarchy:o4(s,a),vertexFormat:o}):mo.fromPositions({positions:kr(s),vertexFormat:o}):mo.fromPositions({positions:i4({sampling:s,normalizedInnerRadius:a}),vertexFormat:o})},a4=`
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
}`,s4=`
in vec3 position3DHigh;
in vec3 position3DLow;
in float batchId;

void main()
{
    vec4 p = czm_computePosition();
    gl_Position = czm_modelViewProjectionRelativeToEye * p;
}`,Ba=e=>Number.isFinite(e)?e.toFixed(6):"0.0",dh=e=>`vec4(${Ba(e.red)}, ${Ba(e.green)}, ${Ba(e.blue)}, ${Ba(e.alpha)})`,c4=e=>`
in vec2 v_st;
in vec3 v_positionEC;

void main()
{
    vec4 color = ${dh(e)};
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
}`,f4=e=>`
in vec2 v_st;
in vec3 v_positionEC;

float hash(vec2 p)
{
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main()
{
    vec4 color = ${dh(e)};
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
}`,h4=(e,t)=>new Go({translucent:!0,closed:!1,renderState:lp,vertexShaderSource:a4,fragmentShaderSource:e===Ni.CHROME_MIRROR?c4(t):f4(t)}),l4=e=>`
void main()
{
    out_FragColor = ${dh(e)};
}`,u4=e=>new Go({translucent:e.alpha<1,closed:!1,renderState:lp,vertexShaderSource:s4,fragmentShaderSource:l4(e)}),d4=({id:e,geometry:t,color:n,opacity:o,materialPreset:i,modelMatrix:r})=>{const a=x.fromAlpha(n,o,new x);return i===Ni.COLOR?new rt({geometryInstances:new Kc({id:`${e}-fill`,geometry:t}),appearance:u4(a),allowPicking:!1,asynchronous:!0,releaseGeometryInstances:!0,show:!0,modelMatrix:r}):new rt({geometryInstances:new Kc({id:`${e}-fill`,geometry:t}),appearance:h4(i,a),allowPicking:!1,asynchronous:!0,releaseGeometryInstances:!0,show:!0,modelMatrix:r})},m4=e=>{const t=XR(e.radius),n=ZR(e.innerRadius,t),o=dp(e.segments),i=up(e.angleRad),r=mp(o,i),a=QR(e.rotationRad),s=e.modelMatrix??U.IDENTITY,c=e4(e.materialPreset),f=e.color??cp,d=JR(e.opacity,f.alpha??WR),u=p4(h.ZERO,t,a);return{normalizedInnerRadius:KR(n,t),arcSampling:r,color:f,opacity:d,materialPreset:c,vertexFormat:c===Ni.COLOR?hp:$R,modelMatrix:U.multiply(s,u,new U)}},p4=(e,t=1,n=0)=>HR(e,t,n,fp),_4=(e,t)=>{const n=m4(t),o=r4({innerRadiusRatio:n.normalizedInnerRadius,angleRad:t.angleRad,segments:n.arcSampling.segments,vertexFormat:n.vertexFormat});return d4({id:e,geometry:o,color:n.color,opacity:n.opacity,materialPreset:n.materialPreset,modelMatrix:n.modelMatrix})},g4=(e,t)=>_4(e,{...t,angleRad:Do,rotationRad:0}),U4=(e,t)=>g4(e,{...t,innerRadius:0});th("[CESIUM|ELEVATION] Using core elevation helpers from @carma-mapping/engines/cesium/core.");export{N4 as $,Ge as A,ie as B,h as C,w as D,Im as E,xe as F,Kc as G,sf as H,gt as I,M4 as J,un as K,yR as L,U as M,O4 as N,Be as O,rt as P,oe as Q,Se as R,R4 as S,Pe as T,P4 as U,D4 as V,L4 as W,Ni as X,ax as Y,C4 as Z,bx as _,x as a,hn as a$,z4 as a0,I4 as a1,cf as a2,th as a3,st as a4,co as a5,F4 as a6,B4 as a7,ze as a8,ss as a9,xt as aA,Ef as aB,Fc as aC,Me as aD,Xf as aE,Kt as aF,qn as aG,Lt as aH,Nn as aI,Un as aJ,At as aK,Je as aL,ln as aM,Go as aN,it as aO,Ut as aP,NS as aQ,Qf as aR,Bn as aS,$n as aT,Si as aU,nn as aV,zA as aW,NA as aX,mr as aY,nf as aZ,Lr as a_,Ue as aa,ue as ab,tt as ac,qe as ad,We as ae,bo as af,Wr as ag,ae as ah,je as ai,ti as aj,Jo as ak,Qn as al,Zt as am,pn as an,Ko as ao,De as ap,$t as aq,ke as ar,at as as,cn as at,Yr as au,ft as av,ki as aw,ur as ax,ot as ay,ge as az,g4 as b,en as b0,I as b1,Ie as b2,L0 as b3,Oe as b4,eo as b5,nt as b6,_t as b7,Fi as b8,bt as b9,An as ba,Zo as bb,lo as bc,Ft as bd,oi as be,Eo as bf,xn as bg,Ku as bh,Xt as bi,_o as bj,Fe as bk,pd as bl,r0 as bm,Mr as bn,$h as bo,Rr as bp,us as bq,Jn as br,Rt as bs,bi as bt,wn as bu,cx as bv,x4 as bw,Cr as bx,Na as by,U4 as c,_4 as d,r4 as e,HR as f,T as g,l as h,V as i,le as j,kn as k,rx as l,ee as m,mo as n,B as o,Q as p,jr as q,p as r,St as s,Wi as t,mt as u,se as v,A4 as w,ns as x,hg as y,be as z};
