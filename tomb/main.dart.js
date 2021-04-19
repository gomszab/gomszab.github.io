(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.hA(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)H.hB(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.dz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.dz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.dz(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={di:function di(){},
e5:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dS:function(){return new P.az("No element")},
f9:function(){return new P.az("Too many elements")},
bH:function bH(a){this.a=a},
aN:function aN(){},
W:function W(){},
ah:function ah(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ai:function ai(a,b,c){this.a=a
this.b=b
this.$ti=c},
am:function am(a,b,c){this.a=a
this.b=b
this.$ti=c},
b4:function b4(a,b,c){this.a=a
this.b=b
this.$ti=c},
eD:function(a){var t,s=H.eC(a)
if(s!=null)return s
t="minified:"+a
return t},
hr:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
a:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aI(a)
if(typeof t!="string")throw H.f(H.es(a))
return t},
b_:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cu:function(a){return H.fe(a)},
fe:function(a){var t,s,r
if(a instanceof P.m)return H.J(H.a9(a),null)
if(J.bp(a)===C.G||u.z.b(a)){t=C.m(a)
if(H.e0(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.e0(r))return r}}return H.J(H.a9(a),null)},
e0:function(a){var t=a!=="Object"&&a!==""
return t},
dB:function(a){throw H.f(H.es(a))},
r:function(a,b){if(a==null)J.bu(a)
throw H.f(H.cV(a,b))},
cV:function(a,b){var t,s,r="index"
if(!H.dw(b))return new P.P(!0,b,r,null)
t=J.bu(a)
if(!(b<0)){if(typeof t!=="number")return H.dB(t)
s=b>=t}else s=!0
if(s)return P.dg(b,a,r,null,t)
return P.cv(b,r)},
es:function(a){return new P.P(!0,a,null,null)},
f:function(a){var t,s
if(a==null)a=new P.bK()
t=new Error()
t.dartException=a
s=H.hC
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
hC:function(){return J.aI(this.dartException)},
T:function(a){throw H.f(a)},
dG:function(a){throw H.f(P.ae(a))},
Y:function(a){var t,s,r,q,p,o
a=H.hx(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.p([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.cx(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
cy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
e7:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
dZ:function(a,b){return new H.bJ(a,b==null?null:b.method)},
dj:function(a,b){var t=b==null,s=t?null:b.method
return new H.bG(a,s,t?null:b.receiver)},
bs:function(a){if(a==null)return new H.ct(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.aq(a,a.dartException)
return H.h5(a)},
aq:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
h5:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.aI(s,16)&8191)===10)switch(r){case 438:return H.aq(a,H.dj(H.a(t)+" (Error "+r+")",f))
case 445:case 5007:return H.aq(a,H.dZ(H.a(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.eG()
p=$.eH()
o=$.eI()
n=$.eJ()
m=$.eM()
l=$.eN()
k=$.eL()
$.eK()
j=$.eP()
i=$.eO()
h=q.A(t)
if(h!=null)return H.aq(a,H.dj(H.D(t),h))
else{h=p.A(t)
if(h!=null){h.method="call"
return H.aq(a,H.dj(H.D(t),h))}else{h=o.A(t)
if(h==null){h=n.A(t)
if(h==null){h=m.A(t)
if(h==null){h=l.A(t)
if(h==null){h=k.A(t)
if(h==null){h=n.A(t)
if(h==null){h=j.A(t)
if(h==null){h=i.A(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.aq(a,H.dZ(H.D(t),h))}}return H.aq(a,new H.bV(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.b2()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.aq(a,new P.P(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.b2()
return a},
hj:function(a){var t
if(a==null)return new H.bc(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.bc(a)},
hf:function(a,b){var t,s=a.length
for(t=0;t<s;++t)b.h(0,a[t])
return b},
hq:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.dt(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.cD("Unsupported number of arguments for wrapped closure"))},
bn:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hq)
a.$identity=t
return t},
f5:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.bN().constructor.prototype):Object.create(new H.at(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.U
if(typeof s!=="number")return s.q()
$.U=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.dO(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.f1(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dO(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
f1:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ex,a)
if(typeof a=="string"){if(b)throw H.f("Cannot compute signature for static tearoff.")
t=c?H.f_:H.eZ
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.f("Error in functionType of tearoff")},
f2:function(a,b,c,d){var t=H.dN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
dO:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.f4(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.f2(s,!q,t,b)
if(s===0){q=$.U
if(typeof q!=="number")return q.q()
$.U=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.a(H.de())+";return "+o+"."+H.a(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.U
if(typeof q!=="number")return q.q()
$.U=q+1
n+=q
return new Function("return function("+n+"){return this."+H.a(H.de())+"."+H.a(t)+"("+n+");}")()},
f3:function(a,b,c,d){var t=H.dN,s=H.f0
switch(b?-1:a){case 0:throw H.f(new H.bM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
f4:function(a,b){var t,s,r,q,p,o,n=H.de(),m=$.dL
if(m==null)m=$.dL=H.dK("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.f3(s,!q,t,b)
if(s===1){q="return function(){return this."+H.a(n)+"."+H.a(t)+"(this."+m+");"
p=$.U
if(typeof p!=="number")return p.q()
$.U=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.a(n)+"."+H.a(t)+"(this."+m+", "+o+");"
p=$.U
if(typeof p!=="number")return p.q()
$.U=p+1
return new Function(q+p+"}")()},
dz:function(a,b,c,d,e,f,g){return H.f5(a,b,c,d,!!e,!!f,g)},
eZ:function(a,b){return H.cb(v.typeUniverse,H.a9(a.a),b)},
f_:function(a,b){return H.cb(v.typeUniverse,H.a9(a.c),b)},
dN:function(a){return a.a},
f0:function(a){return a.c},
de:function(){var t=$.dM
return t==null?$.dM=H.dK("self"):t},
dK:function(a){var t,s,r,q=new H.at("self","target","receiver","name"),p=J.fa(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.f(P.eX("Field name "+a+" not found."))},
cQ:function(a){if(a==null)H.h6("boolean expression must not be null")
return a},
h6:function(a){throw H.f(new H.bY(a))},
hA:function(a){throw H.f(new P.bx(a))},
hh:function(a){return v.getIsolateTag(a)},
hB:function(a){return H.T(new H.bH(a))},
ie:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ht:function(a){var t,s,r,q,p,o=H.D($.ew.$1(a)),n=$.cW[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.d4[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.em($.er.$2(a,o))
if(r!=null){n=$.cW[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.d4[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.d9(t)
$.cW[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.d4[o]=t
return t}if(q==="-"){p=H.d9(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.ez(a,t)
if(q==="*")throw H.f(P.e8(o))
if(v.leafTags[o]===true){p=H.d9(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.ez(a,t)},
ez:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.dD(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
d9:function(a){return J.dD(a,!1,null,!!a.$ibF)},
hw:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.d9(t)
else return J.dD(t,c,null,null)},
ho:function(){if(!0===$.dC)return
$.dC=!0
H.hp()},
hp:function(){var t,s,r,q,p,o,n,m
$.cW=Object.create(null)
$.d4=Object.create(null)
H.hn()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.eA.$1(p)
if(o!=null){n=H.hw(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
hn:function(){var t,s,r,q,p,o,n=C.v()
n=H.aF(C.w,H.aF(C.x,H.aF(C.n,H.aF(C.n,H.aF(C.y,H.aF(C.z,H.aF(C.A(C.m),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.ew=new H.d1(q)
$.er=new H.d2(p)
$.eA=new H.d3(o)},
aF:function(a,b){return a(b)||b},
hx:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cx:function cx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bJ:function bJ(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(a){this.a=a},
ct:function ct(a){this.a=a},
bc:function bc(a){this.a=a
this.b=null},
ad:function ad(){},
bR:function bR(){},
bN:function bN(){},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a){this.a=a},
bY:function bY(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cm:function cm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aT:function aT(a,b){this.a=a
this.$ti=b},
aU:function aU(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
d1:function d1(a){this.a=a},
d2:function d2(a){this.a=a},
d3:function d3(a){this.a=a},
fh:function(a,b){var t=b.c
return t==null?b.c=H.dr(a,b.z,!0):t},
e1:function(a,b){var t=b.c
return t==null?b.c=H.bf(a,"dR",[b.z]):t},
e2:function(a){var t=a.y
if(t===6||t===7||t===8)return H.e2(a.z)
return t===11||t===12},
fg:function(a){return a.cy},
cX:function(a){return H.ds(v.typeUniverse,a,!1)},
a8:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.a8(a,t,c,a0)
if(s===t)return b
return H.ej(a,s,!0)
case 7:t=b.z
s=H.a8(a,t,c,a0)
if(s===t)return b
return H.dr(a,s,!0)
case 8:t=b.z
s=H.a8(a,t,c,a0)
if(s===t)return b
return H.ei(a,s,!0)
case 9:r=b.Q
q=H.bm(a,r,c,a0)
if(q===r)return b
return H.bf(a,b.z,q)
case 10:p=b.z
o=H.a8(a,p,c,a0)
n=b.Q
m=H.bm(a,n,c,a0)
if(o===p&&m===n)return b
return H.dp(a,o,m)
case 11:l=b.z
k=H.a8(a,l,c,a0)
j=b.Q
i=H.h2(a,j,c,a0)
if(k===l&&i===j)return b
return H.eh(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.bm(a,h,c,a0)
p=b.z
o=H.a8(a,p,c,a0)
if(g===h&&o===p)return b
return H.dq(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.f(P.ce("Attempted to substitute unexpected RTI kind "+d))}},
bm:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.a8(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
h3:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.a8(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
h2:function(a,b,c,d){var t,s=b.a,r=H.bm(a,s,c,d),q=b.b,p=H.bm(a,q,c,d),o=b.c,n=H.h3(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.c2()
t.a=r
t.b=p
t.c=n
return t},
p:function(a,b){a[v.arrayRti]=b
return a},
hb:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.ex(t)
return a.$S()}return null},
ey:function(a,b){var t
if(H.e2(b))if(a instanceof H.ad){t=H.hb(a)
if(t!=null)return t}return H.a9(a)},
a9:function(a){var t
if(a instanceof P.m){t=a.$ti
return t!=null?t:H.du(a)}if(Array.isArray(a))return H.a7(a)
return H.du(J.bp(a))},
a7:function(a){var t=a[v.arrayRti],s=u.n
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
I:function(a){var t=a.$ti
return t!=null?t:H.du(a)},
du:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.fP(a,t)},
fP:function(a,b){var t=a instanceof H.ad?a.__proto__.__proto__.constructor:b,s=H.fG(v.typeUniverse,t.name)
b.$ccache=s
return s},
ex:function(a){var t,s,r
H.dt(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.ds(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
fO:function(a){var t,s,r=this,q=u.K
if(r===q)return H.bj(r,a,H.fS)
if(!H.a_(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.bj(r,a,H.fV)
q=r.y
t=q===6?r.z:r
if(t===u.bL)s=H.dw
else if(t===u.cb||t===u.cY)s=H.fR
else if(t===u.N)s=H.fT
else s=t===u.cB?H.ep:null
if(s!=null)return H.bj(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.hs)){r.r="$i"+q
return H.bj(r,a,H.fU)}}else if(q===7)return H.bj(r,a,H.fM)
return H.bj(r,a,H.fK)},
bj:function(a,b,c){a.b=c
return a.b(b)},
fN:function(a){var t,s,r=this
if(!H.a_(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.fJ
else if(r===u.K)s=H.fI
else s=H.fL
r.a=s
return r.a(a)},
dy:function(a){var t,s=a.y
if(!H.a_(a))if(!(a===u._))if(!(a===u.G))if(s!==7)t=s===8&&H.dy(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fK:function(a){var t=this
if(a==null)return H.dy(t)
return H.u(v.typeUniverse,H.ey(a,t),null,t,null)},
fM:function(a){if(a==null)return!0
return this.z.b(a)},
fU:function(a){var t,s=this
if(a==null)return H.dy(s)
t=s.r
if(a instanceof P.m)return!!a[t]
return!!J.bp(a)[t]},
id:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.en(a,t)},
fL:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.en(a,t)},
en:function(a,b){throw H.f(H.fw(H.e9(a,H.ey(a,b),H.J(b,null))))},
e9:function(a,b,c){var t=P.bz(a),s=H.J(b==null?H.a9(a):b,null)
return t+": type '"+H.a(s)+"' is not a subtype of type '"+H.a(c)+"'"},
fw:function(a){return new H.be("TypeError: "+a)},
C:function(a,b){return new H.be("TypeError: "+H.e9(a,null,b))},
fS:function(a){return a!=null},
fI:function(a){return a},
fV:function(a){return!0},
fJ:function(a){return a},
ep:function(a){return!0===a||!1===a},
i2:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.f(H.C(a,"bool"))},
fH:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.f(H.C(a,"bool"))},
i3:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.f(H.C(a,"bool?"))},
i4:function(a){if(typeof a=="number")return a
throw H.f(H.C(a,"double"))},
i6:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.C(a,"double"))},
i5:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.C(a,"double?"))},
dw:function(a){return typeof a=="number"&&Math.floor(a)===a},
i7:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.f(H.C(a,"int"))},
dt:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.f(H.C(a,"int"))},
i8:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.f(H.C(a,"int?"))},
fR:function(a){return typeof a=="number"},
i9:function(a){if(typeof a=="number")return a
throw H.f(H.C(a,"num"))},
ib:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.C(a,"num"))},
ia:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.C(a,"num?"))},
fT:function(a){return typeof a=="string"},
ic:function(a){if(typeof a=="string")return a
throw H.f(H.C(a,"String"))},
D:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.f(H.C(a,"String"))},
em:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.f(H.C(a,"String?"))},
h_:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.c.q(s,H.J(a[r],b))
return t},
eo:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.p([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.a.h(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.r(a5,j)
m=C.c.q(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.c.q(" extends ",H.J(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.J(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.c.q(a2,H.J(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.c.q(a2,H.J(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.dI(H.J(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.a(a0)},
J:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.J(a.z,b)
return t}if(m===7){s=a.z
t=H.J(s,b)
r=s.y
return J.dI(r===11||r===12?C.c.q("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.a(H.J(a.z,b))+">"
if(m===9){q=H.h4(a.z)
p=a.Q
return p.length!==0?q+("<"+H.h_(p,b)+">"):q}if(m===11)return H.eo(a,b,null)
if(m===12)return H.eo(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.r(b,o)
return b[o]}return"?"},
h4:function(a){var t,s=H.eC(a)
if(s!=null)return s
t="minified:"+a
return t},
ek:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
fG:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.ds(a,b,!1)
else if(typeof n=="number"){t=n
s=H.bg(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.bf(a,b,r)
o[b]=p
return p}else return n},
fE:function(a,b){return H.el(a.tR,b)},
fD:function(a,b){return H.el(a.eT,b)},
ds:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.ef(H.ed(a,null,b,c))
s.set(b,t)
return t},
cb:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.ef(H.ed(a,b,c,!0))
r.set(c,s)
return s},
fF:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.dp(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
a6:function(a,b){b.a=H.fN
b.b=H.fO
return b},
bg:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.M(null,null)
t.y=b
t.cy=c
s=H.a6(a,t)
a.eC.set(c,s)
return s},
ej:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.fB(a,b,s,c)
a.eC.set(s,t)
return t},
fB:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.a_(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.M(null,null)
r.y=6
r.z=b
r.cy=c
return H.a6(a,r)},
dr:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.fA(a,b,s,c)
a.eC.set(s,t)
return t},
fA:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.a_(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.d5(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.G)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.d5(r.z))return r
else return H.fh(a,b)}}q=new H.M(null,null)
q.y=7
q.z=b
q.cy=c
return H.a6(a,q)},
ei:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.fy(a,b,s,c)
a.eC.set(s,t)
return t},
fy:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.a_(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.bf(a,"dR",[b])
else if(b===u.P||b===u.T)return u.bc}r=new H.M(null,null)
r.y=8
r.z=b
r.cy=c
return H.a6(a,r)},
fC:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.M(null,null)
t.y=13
t.z=b
t.cy=r
s=H.a6(a,t)
a.eC.set(r,s)
return s},
ca:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
fx:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
bf:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.ca(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.M(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.a6(a,s)
a.eC.set(q,r)
return r},
dp:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.ca(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.M(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.a6(a,p)
a.eC.set(r,o)
return o},
eh:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.ca(n)
if(k>0){t=m>0?",":""
s=H.ca(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.fx(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.M(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.a6(a,p)
a.eC.set(r,s)
return s},
dq:function(a,b,c,d){var t,s=b.cy+("<"+H.ca(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.fz(a,b,c,s,d)
a.eC.set(s,t)
return t},
fz:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.a8(a,b,s,0)
n=H.bm(a,c,s,0)
return H.dq(a,o,n,c!==n)}}m=new H.M(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.a6(a,m)},
ed:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ef:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.fq(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.ee(a,s,h,g,!1)
else if(r===46)s=H.ee(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.a5(a.u,a.e,g.pop()))
break
case 94:g.push(H.fC(a.u,g.pop()))
break
case 35:g.push(H.bg(a.u,5,"#"))
break
case 64:g.push(H.bg(a.u,2,"@"))
break
case 126:g.push(H.bg(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.dn(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.bf(q,o,p))
else{n=H.a5(q,a.e,o)
switch(n.y){case 11:g.push(H.dq(q,n,p,a.n))
break
default:g.push(H.dp(q,n,p))
break}}break
case 38:H.fr(a,g)
break
case 42:m=a.u
g.push(H.ej(m,H.a5(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.dr(m,H.a5(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.ei(m,H.a5(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.c2()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.dn(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.eh(q,H.a5(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.dn(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.ft(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.a5(a.u,a.e,i)},
fq:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
ee:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.ek(t,p.z)[q]
if(o==null)H.T('No "'+q+'" in "'+H.fg(p)+'"')
d.push(H.cb(t,p,o))}else d.push(q)
return n},
fr:function(a,b){var t=b.pop()
if(0===t){b.push(H.bg(a.u,1,"0&"))
return}if(1===t){b.push(H.bg(a.u,4,"1&"))
return}throw H.f(P.ce("Unexpected extended operation "+H.a(t)))},
a5:function(a,b,c){if(typeof c=="string")return H.bf(a,c,a.sEA)
else if(typeof c=="number")return H.fs(a,b,c)
else return c},
dn:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.a5(a,b,c[t])},
ft:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.a5(a,b,c[t])},
fs:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.f(P.ce("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.f(P.ce("Bad index "+c+" for "+b.i(0)))},
u:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.a_(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.a_(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.u(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.u(a,b.z,c,d,e)
if(q===6){t=d.z
return H.u(a,b,c,t,e)}if(s===8){if(!H.u(a,b.z,c,d,e))return!1
return H.u(a,H.e1(a,b),c,d,e)}if(s===7){t=H.u(a,b.z,c,d,e)
return t}if(q===8){if(H.u(a,b,c,d.z,e))return!0
return H.u(a,b,c,H.e1(a,d),e)}if(q===7){t=H.u(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.u(a,l,c,k,e)||!H.u(a,k,e,l,c))return!1}return H.eq(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.eq(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.fQ(a,b,c,d,e)}return!1},
eq:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.u(a1,a2.z,a3,a4.z,a5))return!1
t=a2.Q
s=a4.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.u(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.u(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.u(a1,l[i],a5,h,a3))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
if(a0<a)continue
h=g[c-1]
if(!H.u(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
fQ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.u(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.ek(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.u(a,H.cb(a,b,m[q]),c,s[q],e))return!1
return!0},
d5:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.a_(a))if(s!==7)if(!(s===6&&H.d5(a.z)))t=s===8&&H.d5(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
hs:function(a){var t
if(!H.a_(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
a_:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
el:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
M:function M(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
c2:function c2(){this.c=this.b=this.a=null},
c1:function c1(){},
be:function be(a){this.a=a},
eC:function(a){return v.mangledGlobalNames[a]}},J={
dD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cZ:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.dC==null){H.ho()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.f(P.e8("Return interceptor for "+H.a(t(a,p))))}r=a.constructor
q=r==null?null:r[J.dT()]
if(q!=null)return q
q=H.ht(a)
if(q!=null)return q
if(typeof a=="function")return C.I
t=Object.getPrototypeOf(a)
if(t==null)return C.p
if(t===Object.prototype)return C.p
if(typeof r=="function"){Object.defineProperty(r,J.dT(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
dT:function(){var t=$.eb
return t==null?$.eb=v.getIsolateTag("_$dart_js"):t},
fa:function(a,b){a.fixed$length=Array
return a},
bp:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aQ.prototype
return J.bE.prototype}if(typeof a=="string")return J.a1.prototype
if(a==null)return J.aR.prototype
if(typeof a=="boolean")return J.bD.prototype
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.V.prototype
return a}if(a instanceof P.m)return a
return J.cZ(a)},
dA:function(a){if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.V.prototype
return a}if(a instanceof P.m)return a
return J.cZ(a)},
eu:function(a){if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.V.prototype
return a}if(a instanceof P.m)return a
return J.cZ(a)},
hg:function(a){if(typeof a=="number")return J.ax.prototype
if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.al.prototype
return a},
ev:function(a){if(typeof a=="string")return J.a1.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.al.prototype
return a},
cY:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.V.prototype
return a}if(a instanceof P.m)return a
return J.cZ(a)},
dI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.hg(a).q(a,b)},
dd:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bp(a).B(a,b)},
eR:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hr(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dA(a).j(a,b)},
eS:function(a,b){return J.eu(a).K(a,b)},
eT:function(a){return J.cY(a).gaK(a)},
aH:function(a){return J.bp(a).gl(a)},
bt:function(a){return J.eu(a).gu(a)},
bu:function(a){return J.dA(a).gm(a)},
eU:function(a,b){return J.ev(a).aT(a,b)},
dJ:function(a){return J.cY(a).af(a)},
eV:function(a,b){return J.cY(a).saD(a,b)},
eW:function(a){return J.ev(a).aX(a)},
aI:function(a){return J.bp(a).i(a)},
z:function z(){},
bD:function bD(){},
aR:function aR(){},
a2:function a2(){},
bL:function bL(){},
al:function al(){},
V:function V(){},
q:function q(a){this.$ti=a},
cl:function cl(a){this.$ti=a},
aJ:function aJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ax:function ax(){},
aQ:function aQ(){},
bE:function bE(){},
a1:function a1(){}},P={
fk:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.h7()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.bn(new P.cA(r),1)).observe(t,{childList:true})
return new P.cz(r,t,s)}else if(self.setImmediate!=null)return P.h8()
return P.h9()},
fl:function(a){self.scheduleImmediate(H.bn(new P.cB(u.M.a(a)),0))},
fm:function(a){self.setImmediate(H.bn(new P.cC(u.M.a(a)),0))},
fn:function(a){u.M.a(a)
P.fu(0,a)},
e6:function(a,b){var t=C.e.M(a.a,1000)
return P.fv(t<0?0:t,b)},
fu:function(a,b){var t=new P.bd()
t.aw(a,b)
return t},
fv:function(a,b){var t=new P.bd()
t.ax(a,b)
return t},
fX:function(){var t,s
for(t=$.aE;t!=null;t=$.aE){$.bl=null
s=t.b
$.aE=s
if(s==null)$.bk=null
t.a.$0()}},
h1:function(){$.dv=!0
try{P.fX()}finally{$.bl=null
$.dv=!1
if($.aE!=null)$.dH().$1(P.et())}},
h0:function(a){var t,s,r,q,p,o=$.aE
if(o==null){t=new P.bZ(a)
s=$.bk
if(s==null){$.aE=$.bk=t
if(!$.dv)$.dH().$1(P.et())}else $.bk=s.b=t
$.bl=$.bk
return}r=new P.bZ(a)
q=$.bl
if(q==null){r.b=o
$.aE=$.bl=r}else{p=q.b
r.b=p
$.bl=q.b=r
if(p==null)$.bk=r}},
fi:function(a,b){var t=$.bX
if(t===C.h)return P.e6(a,u.F.a(b))
return P.e6(a,u.F.a(t.aL(b,u.j)))},
fY:function(a,b,c,d,e){P.h0(new P.cP(d,e))},
fZ:function(a,b,c,d,e,f,g){var t,s=$.bX
if(s===c)return d.$1(e)
$.bX=c
t=s
try{s=d.$1(e)
return s}finally{$.bX=t}},
cA:function cA(a){this.a=a},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a){this.a=a},
cC:function cC(a){this.a=a},
bd:function bd(){this.c=0},
cM:function cM(a,b){this.a=a
this.b=b},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bZ:function bZ(a){this.a=a
this.b=null},
cO:function cO(){},
cP:function cP(a,b){this.a=a
this.b=b},
cG:function cG(){},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function(a,b){return new H.aS(a.k("@<0>").aA(b).k("aS<1,2>"))},
cn:function(a){return new P.Z(a.k("Z<0>"))},
fb:function(a){return new P.Z(a.k("Z<0>"))},
co:function(a,b){return b.k("dV<0>").a(H.hf(a,new P.Z(b.k("Z<0>"))))},
dm:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
f8:function(a,b,c){var t,s
if(P.dx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.p([],u.s)
C.a.h($.E,a)
try{P.fW(a,t)}finally{if(0>=$.E.length)return H.r($.E,-1)
$.E.pop()}s=P.e4(b,u.R.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
dh:function(a,b,c){var t,s
if(P.dx(a))return b+"..."+c
t=new P.bO(b)
C.a.h($.E,a)
try{s=t
s.a=P.e4(s.a,a,", ")}finally{if(0>=$.E.length)return H.r($.E,-1)
$.E.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dx:function(a){var t,s
for(t=$.E.length,s=0;s<t;++s)if(a===$.E[s])return!0
return!1},
fW:function(a,b){var t,s,r,q,p,o,n,m=a.gu(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.n())return
t=H.a(m.gp())
C.a.h(b,t)
l+=t.length+2;++k}if(!m.n()){if(k<=5)return
if(0>=b.length)return H.r(b,-1)
s=b.pop()
if(0>=b.length)return H.r(b,-1)
r=b.pop()}else{q=m.gp();++k
if(!m.n()){if(k<=4){C.a.h(b,H.a(q))
return}s=H.a(q)
if(0>=b.length)return H.r(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gp();++k
for(;m.n();q=p,p=o){o=m.gp();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.r(b,-1)
l-=b.pop().length+2;--k}C.a.h(b,"...")
return}}r=H.a(q)
s=H.a(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.r(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.h(b,n)
C.a.h(b,r)
C.a.h(b,s)},
dW:function(a,b){var t,s,r=P.cn(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.dG)(a),++s)r.h(0,b.a(a[s]))
return r},
dY:function(a){var t,s={}
if(P.dx(a))return"{...}"
t=new P.bO("")
try{C.a.h($.E,a)
t.a+="{"
s.a=!0
a.F(0,new P.cq(s,t))
t.a+="}"}finally{if(0>=$.E.length)return H.r($.E,-1)
$.E.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
Z:function Z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c4:function c4(a){this.a=a
this.b=null},
b7:function b7(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
aV:function aV(){},
x:function x(){},
aX:function aX(){},
cq:function cq(a,b){this.a=a
this.b=b},
B:function B(){},
b1:function b1(){},
ba:function ba(){},
b8:function b8(){},
bi:function bi(){},
f7:function(a){if(a instanceof H.ad)return a.i(0)
return"Instance of '"+H.a(H.cu(a))+"'"},
dX:function(a,b,c){var t=P.fc(a,c)
return t},
fc:function(a,b){var t,s
if(Array.isArray(a))return H.p(a.slice(0),b.k("q<0>"))
t=H.p([],b.k("q<0>"))
for(s=J.bt(a);s.n();)C.a.h(t,s.gp())
return t},
e4:function(a,b,c){var t=J.bt(b)
if(!t.n())return a
if(c.length===0){do a+=H.a(t.gp())
while(t.n())}else{a+=H.a(t.gp())
for(;t.n();)a=a+c+H.a(t.gp())}return a},
bz:function(a){if(typeof a=="number"||H.ep(a)||null==a)return J.aI(a)
if(typeof a=="string")return JSON.stringify(a)
return P.f7(a)},
ce:function(a){return new P.aK(a)},
eX:function(a){return new P.P(!1,null,null,a)},
eY:function(a,b,c){return new P.P(!0,a,b,c)},
ff:function(a){var t=null
return new P.b0(t,t,!1,t,t,a)},
cv:function(a,b){return new P.b0(null,null,!0,a,b,"Value not in range")},
dg:function(a,b,c,d,e){var t=e==null?J.bu(b):e
return new P.bC(t,!0,a,c,"Index out of range")},
aB:function(a){return new P.bW(a)},
e8:function(a){return new P.bU(a)},
dl:function(a){return new P.az(a)},
ae:function(a){return new P.bw(a)},
aM:function aM(a){this.a=a},
cg:function cg(){},
ch:function ch(){},
o:function o(){},
aK:function aK(a){this.a=a},
bT:function bT(){},
bK:function bK(){},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b0:function b0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bC:function bC(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bW:function bW(a){this.a=a},
bU:function bU(a){this.a=a},
az:function az(a){this.a=a},
bw:function bw(a){this.a=a},
b2:function b2(){},
bx:function bx(a){this.a=a},
cD:function cD(a){this.a=a},
i:function i(){},
A:function A(){},
w:function w(){},
m:function m(){},
bO:function bO(a){this.a=a},
cE:function cE(){},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
ay:function ay(){},
c:function c(){}},W={
eE:function(){return window},
f6:function(a,b,c){var t,s,r,q=document.body
q.toString
t=C.k.w(q,a,b,c)
t.toString
q=u.k
q=new H.am(new W.y(t),q.k("v(x.E)").a(new W.ci()),q.k("am<x.E>"))
s=q.gu(q)
if(!s.n())H.T(H.dS())
r=s.gp()
if(s.n())H.T(H.f9())
return u.h.a(r)},
aO:function(a){var t,s,r="element tag unavailable"
try{t=J.cY(a)
if(typeof t.gah(a)=="string")r=t.gah(a)}catch(s){H.bs(s)}return r},
cF:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ec:function(a,b,c,d){var t=W.cF(W.cF(W.cF(W.cF(0,a),b),c),d),s=t+((t&67108863)<<3)&536870911
s^=s>>>11
return s+((s&16383)<<15)&536870911},
ea:function(a){var t=document.createElement("a"),s=new W.c7(t,window.location)
s=new W.an(s)
s.au(a)
return s},
fo:function(a,b,c,d){u.h.a(a)
H.D(b)
H.D(c)
u.f.a(d)
return!0},
fp:function(a,b,c,d){var t,s,r
u.h.a(a)
H.D(b)
H.D(c)
t=u.f.a(d).a
s=t.a
C.u.saR(s,c)
r=s.hostname
t=t.b
if(!(r==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(r==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
eg:function(){var t=u.N,s=P.dW(C.o,t),r=u.u.a(new W.cK()),q=H.p(["TEMPLATE"],u.s)
t=new W.c9(s,P.cn(t),P.cn(t),P.cn(t),null)
t.av(null,new H.ai(C.o,r,u.W),q,null)
return t},
d:function d(){},
ar:function ar(){},
bv:function bv(){},
as:function as(){},
aa:function aa(){},
ab:function ab(){},
ac:function ac(){},
au:function au(){},
Q:function Q(){},
af:function af(){},
cf:function cf(){},
by:function by(){},
aL:function aL(){},
l:function l(){},
ci:function ci(){},
b:function b(){},
bA:function bA(){},
bB:function bB(){},
aP:function aP(){},
aw:function aw(){},
bI:function bI(){},
S:function S(){},
y:function y(a){this.a=a},
e:function e(){},
aY:function aY(){},
aj:function aj(){},
ak:function ak(){},
b3:function b3(){},
bP:function bP(){},
bQ:function bQ(){},
aA:function aA(){},
N:function N(){},
b5:function b5(){},
aD:function aD(){},
b6:function b6(){},
b9:function b9(){},
c_:function c_(){},
c0:function c0(a){this.a=a},
an:function an(a){this.a=a},
R:function R(){},
aZ:function aZ(a){this.a=a},
cs:function cs(a){this.a=a},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(){},
cI:function cI(){},
cJ:function cJ(){},
c9:function c9(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
cK:function cK(){},
c8:function c8(){},
ag:function ag(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
c7:function c7(a,b){this.a=a
this.b=b},
bh:function bh(a){this.a=a
this.b=!1},
cN:function cN(a){this.a=a},
c5:function c5(){},
c6:function c6(){},
cc:function cc(){},
cd:function cd(){}},R={cj:function cj(a){this.a=a},ck:function ck(a){this.a=a}},F={
hv:function(){var t,s,r,q,p,o="cat",n="dog",m="number",l=u.D
$.j.C(0,o,H.p([],l))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(1,H.a($.k())+"/cat1"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(2,H.a($.k())+"/cat2"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(3,H.a($.k())+"/cat3"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(4,H.a($.k())+"/cat4"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(5,H.a($.k())+"/cat5"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(6,H.a($.k())+"/cat6"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(7,H.a($.k())+"/cat7"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(0,H.a($.k())+"/catempty"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(0,H.a($.k())+"/cathasvalue"))
$.j.C(0,n,H.p([],l))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(1,H.a($.k())+"/dog1"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(2,H.a($.k())+"/dog2"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(3,H.a($.k())+"/dog3"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(4,H.a($.k())+"/dog4"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(5,H.a($.k())+"/dog5"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(6,H.a($.k())+"/dog6"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(7,H.a($.k())+"/dog7"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(0,H.a($.k())+"/dogempty"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(0,H.a($.k())+"/doghasvalue"))
$.j.C(0,m,H.p([],l))
l=$.j.j(0,m);(l&&C.a).h(l,Y.n(1,H.a($.k())+"/number1"))
l=$.j.j(0,m);(l&&C.a).h(l,Y.n(2,H.a($.k())+"/number2"))
l=$.j.j(0,m);(l&&C.a).h(l,Y.n(3,H.a($.k())+"/number3"))
l=$.j.j(0,m);(l&&C.a).h(l,Y.n(4,H.a($.k())+"/number4"))
l=$.j.j(0,m);(l&&C.a).h(l,Y.n(5,H.a($.k())+"/number5"))
l=$.j.j(0,m);(l&&C.a).h(l,Y.n(6,H.a($.k())+"/number6"))
l=$.j.j(0,m);(l&&C.a).h(l,Y.n(7,H.a($.k())+"/number7"))
l=$.j.j(0,m);(l&&C.a).h(l,Y.n(0,H.a($.k())+"/numberempty"))
l=$.j.j(0,m);(l&&C.a).h(l,Y.n(0,H.a($.k())+"/numberhasvalue"))
l=document
t=l.createElement("select")
s=u.ak
s.a(t)
r=l.createElement("select")
s.a(r)
q=l.createElement("option")
p=u.aq
p.a(q)
q.value="single"
C.d.v(q,"Single")
t.appendChild(q)
q=l.createElement("option")
p.a(q)
q.value="multiple"
C.d.v(q,"Multiple")
t.appendChild(q)
q=l.createElement("option")
p.a(q)
q.value="count"
C.d.v(q,"Count")
t.appendChild(q)
C.q.Y(t,"change",new F.d7(t,r))
q=l.body
if(q!=null)q.appendChild(t)
q=l.createElement("select")
s.a(q)
s=l.createElement("option")
p.a(s)
s.value=o
C.d.v(s,"Cat")
q.appendChild(s)
s=l.createElement("option")
p.a(s)
s.value=n
C.d.v(s,"Dog")
q.appendChild(s)
s=l.createElement("option")
p.a(s)
s.value=m
C.d.v(s,"Number")
q.appendChild(s)
s=l.body
if(s!=null)s.appendChild(q)
s=l.createElement("option")
p.a(s)
s.value="1"
C.d.v(s,"1")
r.appendChild(s)
s=l.createElement("option")
p.a(s)
s.value="2"
C.d.v(s,"2")
r.appendChild(s)
s=l.createElement("option")
p.a(s)
s.value="3"
C.d.v(s,"3")
r.appendChild(s)
s=l.body
if(s!=null)s.appendChild(r)
s=l.createElement("button")
u.I.a(s)
C.l.v(s,"Generate")
C.l.Y(s,"click",new F.d8(t,q,r))
t=l.body
if(t!=null)t.appendChild(s)
t=l.body
if(t!=null){l=l.createElement("br")
t.appendChild(l)}},
hu:function(a,b){P.fi(new P.aM(30),new F.d6(a,b))},
hd:function(a,b){var t,s,r,q,p=a.a,o=b.getBoundingClientRect().left
o.toString
if(typeof p!=="number")return p.an()
t=a.b
s=b.getBoundingClientRect().top
s.toString
if(typeof t!=="number")return t.an()
s=t-s
r=new P.a4(p-o,s,u.a)
p=$.ao.a
if(T.da(r,new T.t(50,20,null,64,64*p.length))){o=$.aG
u.a3.a(r)
q=C.b.M(s-20,64)
window
if(typeof console!="undefined")window.console.log(q)
if(!!p.fixed$length)H.T(P.aB("removeAt"))
if(q<0||q>=p.length)H.T(P.cv(q,null))
o.a=p.splice(q,1)[0]}C.a.F($.ap,new F.cT(r))
C.a.F($.bo,new F.cU(r))
p=$.dF
if(p!=null&&T.da(r,new T.t(500,100,null,100,100))){o=$.aG
p.a=o.a
o.a=null}},
ha:function(a,b,c){var t,s,r,q,p=null,o={},n=document,m=u.B,l=m.a(n.getElementById("canvas"))
o.a=l
if(l!=null)C.f.af(l)
$.br=b.value
t=n.createElement("canvas")
m.a(t)
o.a=t
t.id="canvas"
C.f.saZ(t,640)
C.f.saQ(t,480)
t.setAttribute("style","border: 1px solid #000; background: #FFF")
s=u.bJ.a(C.f.ai(t,"2d"))
n=n.body
if(n!=null)n.appendChild(t)
r=H.p([B.aC(1,new T.t(0,0,32,p,p)),B.aC(2,new T.t(0,0,32,p,p)),B.aC(3,new T.t(0,0,32,p,p)),B.aC(4,new T.t(0,0,32,p,p)),B.aC(5,new T.t(0,0,32,p,p)),B.aC(6,new T.t(0,0,32,p,p)),B.aC(7,new T.t(0,0,32,p,p))],u.U)
C.a.ak(r)
n=new R.cj(r)
n.at(r)
$.ao=n
$.aG=new E.cp()
$.ap=H.p([],u.E)
n=$.bo=H.p([],u.S)
m=a.value
if(m==="multiple"){n=c.value
if(n==="1")C.a.h($.ap,new G.F(450,$.ao.H()))
else{m=$.ap
q=$.ao
if(n==="2"){C.a.h(m,new G.F(450,q.H()))
C.a.h($.ap,new G.F(514,$.ao.H()))}else{C.a.h(m,new G.F(450,q.H()))
C.a.h($.ap,new G.F(514,$.ao.H()))
C.a.h($.ap,new G.F(578,$.ao.H()))}}}else if(m==="count"){m=c.value
if(m==="1"){m=new A.G(450)
m.I(1,450)
C.a.h(n,m)}else if(m==="2"){m=new A.G(450)
m.I(1,450)
C.a.h(n,m)
m=$.bo
n=new A.G(514)
n.I(2,514)
C.a.h(m,n)}else{m=new A.G(450)
m.I(1,450)
C.a.h(n,m)
m=$.bo
n=new A.G(514)
n.I(2,514)
C.a.h(m,n)
n=$.bo
m=new A.G(578)
m.I(3,578)
C.a.h(n,m)}}else $.dF=new A.cw()
C.f.Y(t,"click",new F.cR(o))
F.hu(s,a.value)},
d7:function d7(a,b){this.a=a
this.b=b},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b){this.a=a
this.b=b},
cT:function cT(a){this.a=a},
cU:function cU(a){this.a=a},
cR:function cR(a){this.a=a},
hz:function(a){C.a.F($.ap,new F.dc(a))},
hy:function(a){C.a.F($.bo,new F.db(a))},
dc:function dc(a){this.a=a},
db:function db(a){this.a=a}},E={cp:function cp(){this.a=null}},Y={
hc:function(){var t=$.br
t=$.j.j(0,t)
return(t&&C.a).Z(t,new Y.cS())},
hk:function(){var t=$.br
t=$.j.j(0,t)
return(t&&C.a).Z(t,new Y.d0())},
hi:function(a){var t=$.br
t=$.j.j(0,t)
return(t&&C.a).Z(t,new Y.d_(a))},
dE:function(a,b,c){var t=b.c
a.drawImage(Y.hi(c).c,b.a,b.b,t,t)},
eB:function(a,b){var t=b.c
a.drawImage(Y.hc().c,b.a,b.b,t,t)},
n:function(a,b){var t=new Y.a3(b,a),s=b+".png",r=document.createElement("img")
C.F.sal(r,s)
t.c=r
return t},
cS:function cS(){},
d0:function d0(){},
d_:function d_(a){this.a=a},
a3:function a3(a,b){this.a=a
this.b=b
this.c=null}},T={
da:function(a,b){var t,s=a.a,r=b.a
if(typeof s!=="number")return s.aj()
if(s>r){t=b.d
if(typeof t!=="number")return H.dB(t)
if(s<r+t){s=a.b
r=b.b
if(typeof s!=="number")return s.aj()
if(s>r){t=b.e
if(typeof t!=="number")return H.dB(t)
t=s<r+t
s=t}else s=!1}else s=!1}else s=!1
return s},
t:function t(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},G={F:function F(a,b){this.a=a
this.b=b}},A={G:function G(a){this.a=0
this.b=a
this.c=null},cw:function cw(){this.a=null}},B={
aC:function(a,b){var t=new B.H(b,a)
t.b=t.a=!1
return t},
H:function H(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=null
_.e=b}}
var w=[C,H,J,P,W,R,F,E,Y,T,G,A,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.di.prototype={}
J.z.prototype={
B:function(a,b){return a===b},
gl:function(a){return H.b_(a)},
i:function(a){return"Instance of '"+H.a(H.cu(a))+"'"}}
J.bD.prototype={
i:function(a){return String(a)},
gl:function(a){return a?519018:218159},
$iv:1}
J.aR.prototype={
B:function(a,b){return null==b},
i:function(a){return"null"},
gl:function(a){return 0}}
J.a2.prototype={
gl:function(a){return 0},
i:function(a){return String(a)}}
J.bL.prototype={}
J.al.prototype={}
J.V.prototype={
i:function(a){var t=a[$.eF()]
if(t==null)return this.aq(a)
return"JavaScript function for "+H.a(J.aI(t))},
$iav:1}
J.q.prototype={
h:function(a,b){H.a7(a).c.a(b)
if(!!a.fixed$length)H.T(P.aB("add"))
a.push(b)},
F:function(a,b){var t,s
H.a7(a).k("~(1)").a(b)
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.f(P.ae(a))}},
Z:function(a,b){var t,s,r
H.a7(a).k("v(1)").a(b)
t=a.length
for(s=0;s<t;++s){r=a[s]
if(H.cQ(b.$1(r)))return r
if(a.length!==t)throw H.f(P.ae(a))}throw H.f(H.dS())},
K:function(a,b){if(b>=a.length)return H.r(a,b)
return a[b]},
ac:function(a,b){var t,s
H.a7(a).k("v(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(H.cQ(b.$1(a[s])))return!0
if(a.length!==t)throw H.f(P.ae(a))}return!1},
ak:function(a){var t,s,r,q
if(!!a.immutable$list)H.T(P.aB("shuffle"))
t=a.length
for(;t>1;){s=C.B.aU(t);--t
r=a.length
if(t>=r)return H.r(a,t)
q=a[t]
if(s<0||s>=r)return H.r(a,s)
this.C(a,t,a[s])
this.C(a,s,q)}},
t:function(a,b){var t
for(t=0;t<a.length;++t)if(J.dd(a[t],b))return!0
return!1},
i:function(a){return P.dh(a,"[","]")},
gu:function(a){return new J.aJ(a,a.length,H.a7(a).k("aJ<1>"))},
gl:function(a){return H.b_(a)},
gm:function(a){return a.length},
j:function(a,b){if(!H.dw(b))throw H.f(H.cV(a,b))
if(b>=a.length||b<0)throw H.f(H.cV(a,b))
return a[b]},
C:function(a,b,c){H.a7(a).c.a(c)
if(!!a.immutable$list)H.T(P.aB("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cV(a,b))
a[b]=c},
$ii:1,
$iK:1}
J.cl.prototype={}
J.aJ.prototype={
gp:function(){return this.d},
n:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.f(H.dG(r))
t=s.c
if(t>=q){s.sa7(null)
return!1}s.sa7(r[t]);++s.c
return!0},
sa7:function(a){this.d=this.$ti.k("1?").a(a)},
$iA:1}
J.ax.prototype={
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl:function(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
as:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ab(a,b)},
M:function(a,b){return(a|0)===a?a/b|0:this.ab(a,b)},
ab:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.f(P.aB("Result of truncating division is "+H.a(t)+": "+H.a(a)+" ~/ "+b))},
aI:function(a,b){var t
if(a>0)t=this.aH(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aH:function(a,b){return b>31?0:a>>>b},
$iO:1}
J.aQ.prototype={$ibq:1}
J.bE.prototype={}
J.a1.prototype={
q:function(a,b){if(typeof b!="string")throw H.f(P.eY(b,null,null))
return a+b},
am:function(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
aX:function(a){return a.toLowerCase()},
aT:function(a,b){var t=a.length,s=b.length
if(t+s>t)t-=s
return a.lastIndexOf(b,t)},
i:function(a){return a},
gl:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gm:function(a){return a.length},
$ie_:1,
$ih:1}
H.bH.prototype={
i:function(a){var t=this.a
return t!=null?"LateInitializationError: "+t:"LateInitializationError"}}
H.aN.prototype={}
H.W.prototype={
gu:function(a){var t=this
return new H.ah(t,t.gm(t),t.$ti.k("ah<W.E>"))},
O:function(a,b){return this.ap(0,this.$ti.k("v(W.E)").a(b))}}
H.ah.prototype={
gp:function(){return this.d},
n:function(){var t,s=this,r=s.a,q=J.dA(r),p=q.gm(r)
if(s.b!==p)throw H.f(P.ae(r))
t=s.c
if(t>=p){s.sa1(null)
return!1}s.sa1(q.K(r,t));++s.c
return!0},
sa1:function(a){this.d=this.$ti.k("1?").a(a)},
$iA:1}
H.ai.prototype={
gm:function(a){return J.bu(this.a)},
K:function(a,b){return this.b.$1(J.eS(this.a,b))}}
H.am.prototype={
gu:function(a){return new H.b4(J.bt(this.a),this.b,this.$ti.k("b4<1>"))}}
H.b4.prototype={
n:function(){var t,s
for(t=this.a,s=this.b;t.n();)if(H.cQ(s.$1(t.gp())))return!0
return!1},
gp:function(){return this.a.gp()}}
H.cx.prototype={
A:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.bJ.prototype={
i:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.a(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.bG.prototype={
i:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.a(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.a(s.a)+")"
return r+q+"' on '"+t+"' ("+H.a(s.a)+")"}}
H.bV.prototype={
i:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ct.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.bc.prototype={
i:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$ie3:1}
H.ad.prototype={
i:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.eD(s==null?"unknown":s)+"'"},
$iav:1,
gb_:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bR.prototype={}
H.bN.prototype={
i:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.eD(t)+"'"}}
H.at.prototype={
B:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.at))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gl:function(a){var t,s=this.c
if(s==null)t=H.b_(this.a)
else t=typeof s!=="object"?J.aH(s):H.b_(s)
return(t^H.b_(this.b))>>>0},
i:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.a(H.cu(t))+"'")}}
H.bM.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.bY.prototype={
i:function(a){return"Assertion failed: "+P.bz(this.a)}}
H.aS.prototype={
gm:function(a){return this.a},
gG:function(){return new H.aT(this,H.I(this).k("aT<1>"))},
j:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.U(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.U(q,b)
r=s==null?o:s.b
return r}else return p.aS(b)},
aS:function(a){var t,s,r=this.d
if(r==null)return null
t=this.a9(r,J.aH(a)&0x3ffffff)
s=this.ad(t,a)
if(s<0)return null
return t[s].b},
C:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.I(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.a2(t==null?n.b=n.V():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.a2(s==null?n.c=n.V():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.V()
q=J.aH(b)&0x3ffffff
p=n.a9(r,q)
if(p==null)n.X(r,q,[n.R(b,c)])
else{o=n.ad(p,b)
if(o>=0)p[o].b=c
else p.push(n.R(b,c))}}},
F:function(a,b){var t,s,r=this
H.I(r).k("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.f(P.ae(r))
t=t.c}},
a2:function(a,b,c){var t,s=this,r=H.I(s)
r.c.a(b)
r.Q[1].a(c)
t=s.U(a,b)
if(t==null)s.X(a,b,s.R(b,c))
else t.b=c},
aE:function(){this.r=this.r+1&67108863},
R:function(a,b){var t=this,s=H.I(t),r=new H.cm(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else{s=t.f
s.toString
r.d=s
t.f=s.c=r}++t.a
t.aE()
return r},
ad:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.dd(a[s].a,b))return s
return-1},
i:function(a){return P.dY(this)},
U:function(a,b){return a[b]},
a9:function(a,b){return a[b]},
X:function(a,b,c){a[b]=c},
aC:function(a,b){delete a[b]},
V:function(){var t="<non-identifier-key>",s=Object.create(null)
this.X(s,t,s)
this.aC(s,t)
return s}}
H.cm.prototype={}
H.aT.prototype={
gm:function(a){return this.a.a},
gu:function(a){var t=this.a,s=new H.aU(t,t.r,this.$ti.k("aU<1>"))
s.c=t.e
return s}}
H.aU.prototype={
gp:function(){return this.d},
n:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.f(P.ae(r))
t=s.c
if(t==null){s.sa3(null)
return!1}else{s.sa3(t.a)
s.c=t.c
return!0}},
sa3:function(a){this.d=this.$ti.k("1?").a(a)},
$iA:1}
H.d1.prototype={
$1:function(a){return this.a(a)},
$S:11}
H.d2.prototype={
$2:function(a,b){return this.a(a,b)},
$S:12}
H.d3.prototype={
$1:function(a){return this.a(H.D(a))},
$S:13}
H.M.prototype={
k:function(a){return H.cb(v.typeUniverse,this,a)},
aA:function(a){return H.fF(v.typeUniverse,this,a)}}
H.c2.prototype={}
H.c1.prototype={
i:function(a){return this.a}}
H.be.prototype={}
P.cA.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:14}
P.cz.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:15}
P.cB.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cC.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bd.prototype={
aw:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bn(new P.cM(this,b),0),a)
else throw H.f(P.aB("`setTimeout()` not found."))},
ax:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bn(new P.cL(this,a,Date.now(),b),0),a)
else throw H.f(P.aB("Periodic timer."))},
$ibS:1}
P.cM.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.cL.prototype={
$0:function(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=C.e.as(t,p)}r.c=q
s.d.$1(r)},
$S:0}
P.bZ.prototype={}
P.cO.prototype={}
P.cP.prototype={
$0:function(){var t=H.f(this.a)
t.stack=J.aI(this.b)
throw t},
$S:1}
P.cG.prototype={
aV:function(a,b,c){var t,s,r,q=null
c.k("~(0)").a(a)
c.a(b)
try{if(C.h===$.bX){a.$1(b)
return}P.fZ(q,q,this,a,b,u.H,c)}catch(r){t=H.bs(r)
s=H.hj(r)
P.fY(q,q,this,t,u.l.a(s))}},
aL:function(a,b){return new P.cH(this,b.k("~(0)").a(a),b)}}
P.cH.prototype={
$1:function(a){var t=this.c
return this.a.aV(this.b,t.a(a),t)},
$S:function(){return this.c.k("~(0)")}}
P.Z.prototype={
gu:function(a){var t=this,s=new P.b7(t,t.r,H.I(t).k("b7<1>"))
s.c=t.e
return s},
gm:function(a){return this.a},
t:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.O.a(t[b])!=null}else{s=this.aB(b)
return s}},
aB:function(a){var t=this.d
if(t==null)return!1
return this.a8(t[this.a6(a)],a)>=0},
h:function(a,b){var t,s,r=this
H.I(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.a4(t==null?r.b=P.dm():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.a4(s==null?r.c=P.dm():s,b)}else return r.ay(b)},
ay:function(a){var t,s,r,q=this
H.I(q).c.a(a)
t=q.d
if(t==null)t=q.d=P.dm()
s=q.a6(a)
r=t[s]
if(r==null)t[s]=[q.W(a)]
else{if(q.a8(r,a)>=0)return!1
r.push(q.W(a))}return!0},
a4:function(a,b){H.I(this).c.a(b)
if(u.O.a(a[b])!=null)return!1
a[b]=this.W(b)
return!0},
W:function(a){var t=this,s=new P.c4(H.I(t).c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
a6:function(a){return J.aH(a)&1073741823},
a8:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.dd(a[s].a,b))return s
return-1},
$idV:1}
P.c4.prototype={}
P.b7.prototype={
gp:function(){return this.d},
n:function(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw H.f(P.ae(r))
else if(s==null){t.sa5(null)
return!1}else{t.sa5(t.$ti.k("1?").a(s.a))
t.c=s.b
return!0}},
sa5:function(a){this.d=this.$ti.k("1?").a(a)},
$iA:1}
P.aV.prototype={$ii:1,$iK:1}
P.x.prototype={
gu:function(a){return new H.ah(a,this.gm(a),H.a9(a).k("ah<x.E>"))},
K:function(a,b){return this.j(a,b)},
i:function(a){return P.dh(a,"[","]")}}
P.aX.prototype={}
P.cq.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.a(a)
s.a=t+": "
s.a+=H.a(b)},
$S:16}
P.B.prototype={
F:function(a,b){var t,s
H.I(this).k("~(B.K,B.V)").a(b)
for(t=J.bt(this.gG());t.n();){s=t.gp()
b.$2(s,this.j(0,s))}},
gm:function(a){return J.bu(this.gG())},
i:function(a){return P.dY(this)},
$iaW:1}
P.b1.prototype={
D:function(a,b){var t
for(t=J.bt(H.I(this).k("i<1>").a(b));t.n();)this.h(0,t.gp())},
i:function(a){return P.dh(this,"{","}")}}
P.ba.prototype={$ii:1,$iX:1}
P.b8.prototype={}
P.bi.prototype={}
P.aM.prototype={
B:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a},
gl:function(a){return C.e.gl(this.a)},
i:function(a){var t,s,r,q=new P.ch(),p=this.a
if(p<0)return"-"+new P.aM(0-p).i(0)
t=q.$1(C.e.M(p,6e7)%60)
s=q.$1(C.e.M(p,1e6)%60)
r=new P.cg().$1(p%1e6)
return""+C.e.M(p,36e8)+":"+H.a(t)+":"+H.a(s)+"."+H.a(r)}}
P.cg.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:4}
P.ch.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:4}
P.o.prototype={}
P.aK.prototype={
i:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.bz(t)
return"Assertion failed"}}
P.bT.prototype={}
P.bK.prototype={
i:function(a){return"Throw of null."}}
P.P.prototype={
gT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gS:function(){return""},
i:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gT()+p+n
if(!r.a)return m
t=r.gS()
s=P.bz(r.b)
return m+t+": "+s}}
P.b0.prototype={
gT:function(){return"RangeError"},
gS:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.a(r):""
else if(r==null)t=": Not greater than or equal to "+H.a(s)
else if(r>s)t=": Not in inclusive range "+H.a(s)+".."+H.a(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.a(s)
return t}}
P.bC.prototype={
gT:function(){return"RangeError"},
gS:function(){var t,s=H.dt(this.b)
if(typeof s!=="number")return s.b0()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.a(t)},
gm:function(a){return this.f}}
P.bW.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.bU.prototype={
i:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.az.prototype={
i:function(a){return"Bad state: "+this.a}}
P.bw.prototype={
i:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bz(t)+"."}}
P.b2.prototype={
i:function(a){return"Stack Overflow"},
$io:1}
P.bx.prototype={
i:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.cD.prototype={
i:function(a){return"Exception: "+this.a}}
P.i.prototype={
O:function(a,b){var t=H.I(this)
return new H.am(this,t.k("v(i.E)").a(b),t.k("am<i.E>"))},
gm:function(a){var t,s=this.gu(this)
for(t=0;s.n();)++t
return t},
i:function(a){return P.f8(this,"(",")")}}
P.A.prototype={}
P.w.prototype={
gl:function(a){return P.m.prototype.gl.call(C.H,this)},
i:function(a){return"null"}}
P.m.prototype={constructor:P.m,$im:1,
B:function(a,b){return this===b},
gl:function(a){return H.b_(this)},
i:function(a){return"Instance of '"+H.a(H.cu(this))+"'"},
toString:function(){return this.i(this)}}
P.bO.prototype={
gm:function(a){return this.a.length},
i:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.d.prototype={}
W.ar.prototype={
saR:function(a,b){a.href=b},
i:function(a){return String(a)},
$iar:1}
W.bv.prototype={
i:function(a){return String(a)}}
W.as.prototype={$ias:1}
W.aa.prototype={$iaa:1}
W.ab.prototype={$iab:1}
W.ac.prototype={
saQ:function(a,b){a.height=b},
saZ:function(a,b){a.width=b},
ai:function(a,b){return a.getContext(b)},
$iac:1}
W.au.prototype={
saP:function(a,b){a.fillStyle=b},
$iau:1}
W.Q.prototype={
gm:function(a){return a.length}}
W.af.prototype={}
W.cf.prototype={
i:function(a){return String(a)}}
W.by.prototype={
aO:function(a,b){return a.createHTMLDocument(b)}}
W.aL.prototype={
i:function(a){var t,s=a.left
s.toString
s="Rectangle ("+H.a(s)+", "
t=a.top
t.toString
t=s+H.a(t)+") "
s=a.width
s.toString
s=t+H.a(s)+" x "
t=a.height
t.toString
return s+H.a(t)},
B:function(a,b){var t,s
if(b==null)return!1
if(u.q.b(b)){t=a.left
t.toString
s=b.left
s.toString
if(t===s){t=a.top
t.toString
s=b.top
s.toString
if(t===s){t=a.width
t.toString
s=b.width
s.toString
if(t===s){t=a.height
t.toString
s=b.height
s.toString
s=t===s
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gl:function(a){var t,s,r,q=a.left
q.toString
q=C.b.gl(q)
t=a.top
t.toString
t=C.b.gl(t)
s=a.width
s.toString
s=C.b.gl(s)
r=a.height
r.toString
return W.ec(q,t,s,C.b.gl(r))},
$idk:1}
W.l.prototype={
gaK:function(a){return new W.c0(a)},
i:function(a){return a.localName},
w:function(a,b,c,d){var t,s,r,q
if(c==null){t=$.dQ
if(t==null){t=H.p([],u.Q)
s=new W.aZ(t)
C.a.h(t,W.ea(null))
C.a.h(t,W.eg())
$.dQ=s
d=s}else d=t
t=$.dP
if(t==null){t=new W.bh(d)
$.dP=t
c=t}else{t.a=d
c=t}}if($.a0==null){t=document
s=t.implementation
s.toString
s=C.D.aO(s,"")
$.a0=s
$.df=s.createRange()
s=$.a0.createElement("base")
u.v.a(s)
t=t.baseURI
t.toString
s.href=t
$.a0.head.appendChild(s)}t=$.a0
if(t.body==null){s=t.createElement("body")
C.E.saM(t,u.t.a(s))}t=$.a0
if(u.t.b(a)){t=t.body
t.toString
r=t}else{t.toString
r=t.createElement(a.tagName)
$.a0.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.t(C.K,a.tagName)){$.df.selectNodeContents(r)
t=$.df
q=t.createContextualFragment(b)}else{J.eV(r,b)
q=$.a0.createDocumentFragment()
for(;t=r.firstChild,t!=null;)q.appendChild(t)}if(r!==$.a0.body)J.dJ(r)
c.a0(q)
document.adoptNode(q)
return q},
aN:function(a,b,c){return this.w(a,b,c,null)},
v:function(a,b){this.saW(a,null)
a.appendChild(this.w(a,b,null,null))},
saD:function(a,b){a.innerHTML=b},
gah:function(a){return a.tagName},
$il:1}
W.ci.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:17}
W.b.prototype={$ib:1}
W.bA.prototype={
Y:function(a,b,c){this.az(a,b,u.o.a(c),null)},
az:function(a,b,c,d){return a.addEventListener(b,H.bn(u.o.a(c),1),d)}}
W.bB.prototype={
gm:function(a){return a.length}}
W.aP.prototype={
saM:function(a,b){a.body=b}}
W.aw.prototype={
sal:function(a,b){a.src=b},
$iaw:1}
W.bI.prototype={
i:function(a){return String(a)},
$ibI:1}
W.S.prototype={$iS:1}
W.y.prototype={
gN:function(a){var t=this.a,s=t.childNodes.length
if(s===0)throw H.f(P.dl("No elements"))
if(s>1)throw H.f(P.dl("More than one element"))
t=t.firstChild
t.toString
return t},
D:function(a,b){var t,s,r,q,p
u.J.a(b)
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q){p=t.firstChild
p.toString
s.appendChild(p)}return},
gu:function(a){var t=this.a.childNodes
return new W.ag(t,t.length,H.a9(t).k("ag<R.E>"))},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var t=this.a.childNodes
if(b<0||b>=t.length)return H.r(t,b)
return t[b]}}
W.e.prototype={
af:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
i:function(a){var t=a.nodeValue
return t==null?this.ao(a):t},
saW:function(a,b){a.textContent=b},
$ie:1}
W.aY.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.dg(b,a,null,null,null))
return a[b]},
K:function(a,b){if(b>=a.length)return H.r(a,b)
return a[b]},
$ibF:1,
$ii:1,
$iK:1}
W.aj.prototype={$iaj:1}
W.ak.prototype={
gm:function(a){return a.length},
saY:function(a,b){a.value=b},
$iak:1}
W.b3.prototype={
w:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.P(a,b,c,d)
t=W.f6("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.y(s).D(0,new W.y(t))
return s}}
W.bP.prototype={
w:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.P(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.r.w(t.createElement("table"),b,c,d)
t.toString
t=new W.y(t)
r=t.gN(t)
r.toString
t=new W.y(r)
q=t.gN(t)
s.toString
q.toString
new W.y(s).D(0,new W.y(q))
return s}}
W.bQ.prototype={
w:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.P(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.r.w(t.createElement("table"),b,c,d)
t.toString
t=new W.y(t)
r=t.gN(t)
s.toString
r.toString
new W.y(s).D(0,new W.y(r))
return s}}
W.aA.prototype={$iaA:1}
W.N.prototype={}
W.b5.prototype={
gae:function(a){return a.location}}
W.aD.prototype={$iaD:1}
W.b6.prototype={
i:function(a){var t,s=a.left
s.toString
s="Rectangle ("+H.a(s)+", "
t=a.top
t.toString
t=s+H.a(t)+") "
s=a.width
s.toString
s=t+H.a(s)+" x "
t=a.height
t.toString
return s+H.a(t)},
B:function(a,b){var t,s
if(b==null)return!1
if(u.q.b(b)){t=a.left
t.toString
s=b.left
s.toString
if(t===s){t=a.top
t.toString
s=b.top
s.toString
if(t===s){t=a.width
t.toString
s=b.width
s.toString
if(t===s){t=a.height
t.toString
s=b.height
s.toString
s=t===s
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gl:function(a){var t,s,r,q=a.left
q.toString
q=C.b.gl(q)
t=a.top
t.toString
t=C.b.gl(t)
s=a.width
s.toString
s=C.b.gl(s)
r=a.height
r.toString
return W.ec(q,t,s,C.b.gl(r))}}
W.b9.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.dg(b,a,null,null,null))
return a[b]},
K:function(a,b){if(b>=a.length)return H.r(a,b)
return a[b]},
$ibF:1,
$ii:1,
$iK:1}
W.c_.prototype={
F:function(a,b){var t,s,r,q,p
u.aa.a(b)
for(t=this.gG(),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.dG)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gG:function(){var t,s,r,q,p,o,n=this.a.attributes
n.toString
t=H.p([],u.s)
for(s=n.length,r=u.x,q=0;q<s;++q){if(q>=n.length)return H.r(n,q)
p=r.a(n[q])
if(p.namespaceURI==null){o=p.name
o.toString
C.a.h(t,o)}}return t}}
W.c0.prototype={
j:function(a,b){return this.a.getAttribute(H.D(b))},
gm:function(a){return this.gG().length}}
W.an.prototype={
au:function(a){var t
if($.c3.a===0){for(t=0;t<262;++t)$.c3.C(0,C.J[t],W.hl())
for(t=0;t<12;++t)$.c3.C(0,C.i[t],W.hm())}},
J:function(a){return $.eQ().t(0,W.aO(a))},
E:function(a,b,c){var t=$.c3.j(0,H.a(W.aO(a))+"::"+b)
if(t==null)t=$.c3.j(0,"*::"+b)
if(t==null)return!1
return H.fH(t.$4(a,b,c,this))},
$iL:1}
W.R.prototype={
gu:function(a){return new W.ag(a,this.gm(a),H.a9(a).k("ag<R.E>"))}}
W.aZ.prototype={
J:function(a){return C.a.ac(this.a,new W.cs(a))},
E:function(a,b,c){return C.a.ac(this.a,new W.cr(a,b,c))},
$iL:1}
W.cs.prototype={
$1:function(a){return u.e.a(a).J(this.a)},
$S:5}
W.cr.prototype={
$1:function(a){return u.e.a(a).E(this.a,this.b,this.c)},
$S:5}
W.bb.prototype={
av:function(a,b,c,d){var t,s,r
this.a.D(0,c)
t=b.O(0,new W.cI())
s=b.O(0,new W.cJ())
this.b.D(0,t)
r=this.c
r.D(0,C.L)
r.D(0,s)},
J:function(a){return this.a.t(0,W.aO(a))},
E:function(a,b,c){var t=this,s=W.aO(a),r=t.c
if(r.t(0,H.a(s)+"::"+b))return t.d.aJ(c)
else if(r.t(0,"*::"+b))return t.d.aJ(c)
else{r=t.b
if(r.t(0,H.a(s)+"::"+b))return!0
else if(r.t(0,"*::"+b))return!0
else if(r.t(0,H.a(s)+"::*"))return!0
else if(r.t(0,"*::*"))return!0}return!1},
$iL:1}
W.cI.prototype={
$1:function(a){return!C.a.t(C.i,H.D(a))},
$S:6}
W.cJ.prototype={
$1:function(a){return C.a.t(C.i,H.D(a))},
$S:6}
W.c9.prototype={
E:function(a,b,c){if(this.ar(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.t(0,b)
return!1}}
W.cK.prototype={
$1:function(a){return"TEMPLATE::"+H.a(H.D(a))},
$S:18}
W.c8.prototype={
J:function(a){var t
if(u.Y.b(a))return!1
t=u.w.b(a)
if(t&&W.aO(a)==="foreignObject")return!1
if(t)return!0
return!1},
E:function(a,b,c){if(b==="is"||C.c.am(b,"on"))return!1
return this.J(a)},
$iL:1}
W.ag.prototype={
n:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.saa(J.eR(t.a,s))
t.c=s
return!0}t.saa(null)
t.c=r
return!1},
gp:function(){return this.d},
saa:function(a){this.d=this.$ti.k("1?").a(a)},
$iA:1}
W.c7.prototype={$ifj:1}
W.bh.prototype={
a0:function(a){var t=this,s=new W.cN(t)
t.b=!1
s.$2(a,null)
for(;t.b;){t.b=!1
s.$2(a,null)}},
L:function(a,b){var t=this.b=!0
if(b!=null?b!==a.parentNode:t)J.dJ(a)
else b.removeChild(a)},
aG:function(a,b){var t,s,r,q,p,o=!0,n=null,m=null
try{n=J.eT(a)
m=n.a.getAttribute("is")
u.h.a(a)
t=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='previousSibling'||i.name=='previousSibling'||i.id=='children'||i.name=='children')return true}return false}(a)
o=H.cQ(t)?!0:!(a.attributes instanceof NamedNodeMap)}catch(q){H.bs(q)}s="element unprintable"
try{s=J.aI(a)}catch(q){H.bs(q)}try{r=W.aO(a)
this.aF(u.h.a(a),b,o,s,r,u.V.a(n),H.em(m))}catch(q){if(H.bs(q) instanceof P.P)throw q
else{this.L(a,b)
window
p="Removing corrupted element "+H.a(s)
if(typeof console!="undefined")window.console.warn(p)}}},
aF:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n=this
if(c){n.L(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!n.a.J(a)){n.L(a,b)
window
t="Removing disallowed element <"+H.a(e)+"> from "+H.a(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!n.a.E(a,"is",g)){n.L(a,b)
window
t="Removing disallowed type extension <"+H.a(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gG()
s=H.p(t.slice(0),H.a7(t))
for(r=f.gG().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.r(s,r)
q=s[r]
p=n.a
o=J.eW(q)
H.D(q)
if(!p.E(a,o,t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.a(e)+" "+q+'="'+H.a(t.getAttribute(q))+'">'
if(typeof console!="undefined")window.console.warn(p)
t.removeAttribute(q)}}if(u.d.b(a)){t=a.content
t.toString
n.a0(t)}},
$ifd:1}
W.cN.prototype={
$2:function(a,b){var t,s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.aG(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.L(a,b)}t=a.lastChild
for(r=u.A;null!=t;){s=null
try{s=t.previousSibling
if(s!=null){q=s.nextSibling
p=t
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.dl("Corrupt HTML")
throw H.f(q)}}catch(o){H.bs(o)
q=r.a(t)
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:19}
W.c5.prototype={}
W.c6.prototype={}
W.cc.prototype={}
W.cd.prototype={}
P.cE.prototype={
aU:function(a){if(a<=0||a>4294967296)throw H.f(P.ff("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.a4.prototype={
i:function(a){return"Point("+H.a(this.a)+", "+H.a(this.b)+")"},
B:function(a,b){if(b==null)return!1
return b instanceof P.a4&&this.a==b.a&&this.b==b.b},
gl:function(a){var t=J.aH(this.a),s=J.aH(this.b),r=H.e5(H.e5(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911}}
P.ay.prototype={$iay:1}
P.c.prototype={
w:function(a,b,c,d){var t,s,r,q,p,o=H.p([],u.Q)
C.a.h(o,W.ea(null))
C.a.h(o,W.eg())
C.a.h(o,new W.c8())
c=new W.bh(new W.aZ(o))
t='<svg version="1.1">'+b+"</svg>"
o=document
s=o.body
s.toString
r=C.k.aN(s,t,c)
q=o.createDocumentFragment()
r.toString
o=new W.y(r)
p=o.gN(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
$ic:1}
R.cj.prototype={
at:function(a){var t,s
for(t=this.a,s=0;s<t.length;++s)t[s].d=s},
a_:function(a){var t,s
for(t=this.a,s=0;s<t.length;++s){a.save()
if(s>=t.length)return H.r(t,s)
t[s].ag(a,50,20+s*64)
a.restore()}},
H:function(){var t=P.dX(this.a,!0,u.m),s=H.a7(t),r=s.k("ai<1,H*>")
return P.dX(new H.ai(t,s.k("H*(1)").a(new R.ck(this)),r),!0,r.k("W.E"))}}
R.ck.prototype={
$1:function(a){var t
u.m.a(a)
t=new B.H(null,null)
t.c=a.c
t.e=a.e
t.b=t.a=!0
return t},
$S:20}
F.d7.prototype={
$1:function(a){var t,s
u.L.a(a)
t=P.fb(u.bf)
s=this.b
if(this.a.value==="single"){s.disabled=!0
C.q.saY(s,"1")
t.h(0,P.co([!0,"1"],u._))}else{s.disabled=!1
t.h(0,P.co([!1],u.c5))}return t},
$S:21}
F.d8.prototype={
$1:function(a){u.L.a(a)
return P.co([F.ha(this.a,this.b,this.c)],u.H)},
$S:7}
F.d6.prototype={
$1:function(a){var t,s=null,r=this.a,q=this.b
r.clearRect(0,0,640,480)
t=$.aG.a
if(t!=null)Y.dE(r,new T.t(200,200,200,s,s),t.e)
$.ao.a_(r)
if(q==="single"){q=$.dF.a
if(q!=null)Y.dE(r,new T.t(500,100,100,s,s),q.e)
else Y.eB(r,new T.t(500,100,100,s,s))}else if(q==="multiple")F.hz(r)
else F.hy(r)},
$S:22}
F.cT.prototype={
$1:function(a){var t,s
u.b.a(a)
t=a.a
s=a.b
if(T.da(this.a,new T.t(t,20,null,64,64*s.length))){t=$.aG.a
if(t!=null){C.a.j(s,t.d).a=!1
$.aG.a=null}}},
$S:8}
F.cU.prototype={
$1:function(a){var t
u.y.a(a)
if(T.da(this.a,new T.t(a.b,20,null,64,64))){t=$.aG
if(t.a!=null){++a.a
t.a=null}}},
$S:9}
F.cR.prototype={
$1:function(a){a=u.bE.a(u.L.a(a))
return P.co([F.hd(new P.a4(a.clientX,a.clientY,u.r),this.a.a)],u.H)},
$S:7}
E.cp.prototype={}
Y.cS.prototype={
$1:function(a){return u.c.a(a).a===C.c.q(H.a($.k())+"/",$.br)+"empty"},
$S:2}
Y.d0.prototype={
$1:function(a){return u.c.a(a).a===C.c.q(H.a($.k())+"/",$.br)+"hasvalue"},
$S:2}
Y.d_.prototype={
$1:function(a){return u.c.a(a).b===this.a},
$S:2}
Y.a3.prototype={}
T.t.prototype={}
F.dc.prototype={
$1:function(a){u.b.a(a).a_(this.a)},
$S:8}
F.db.prototype={
$1:function(a){var t,s
u.y.a(a)
t=this.a
a.toString
t.save()
C.C.saP(t,a.c)
s=a.b
t.fillRect(s,20,64,64)
t.restore()
t.font="italic 26pt Calibri"
t.fillText(C.e.i(a.a),s+21.333333333333332,68)},
$S:9}
G.F.prototype={
a_:function(a){var t,s,r
for(t=this.b,s=this.a,r=0;r<t.length;++r){a.save()
if(r>=t.length)return H.r(t,r)
t[r].ag(a,s,20+r*64)
a.restore()}}}
A.G.prototype={
I:function(a,b){var t=this
t.a=0
if(a===1)t.c="#98b65d"
else if(a===2)t.c="#f5bdbe"
else t.c="#3eabe8"}}
A.cw.prototype={}
B.H.prototype={
ag:function(a,b,c){var t=null
if(!this.a)if(this.b)Y.dE(a,new T.t(b,c,64,t,t),this.e)
else a.drawImage(Y.hk().c,b,c,64,64)
else Y.eB(a,new T.t(b,c,64,t,t))}};(function aliases(){var t=J.z.prototype
t.ao=t.i
t=J.a2.prototype
t.aq=t.i
t=P.i.prototype
t.ap=t.O
t=W.l.prototype
t.P=t.w
t=W.bb.prototype
t.ar=t.E})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff
t(P,"h7","fl",3)
t(P,"h8","fm",3)
t(P,"h9","fn",3)
s(P,"et","h1",1)
r(W,"hl",4,null,["$4"],["fo"],10,0)
r(W,"hm",4,null,["$4"],["fp"],10,0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.m,null)
r(P.m,[H.di,J.z,J.aJ,P.o,P.i,H.ah,P.A,H.cx,H.ct,H.bc,H.ad,P.B,H.cm,H.aU,H.M,H.c2,P.bd,P.bZ,P.cO,P.bi,P.c4,P.b7,P.b8,P.x,P.b1,P.aM,P.b2,P.cD,P.w,P.bO,W.an,W.R,W.aZ,W.bb,W.c8,W.ag,W.c7,W.bh,P.cE,P.a4,R.cj,E.cp,Y.a3,T.t,G.F,A.G,A.cw,B.H])
r(J.z,[J.bD,J.aR,J.a2,J.q,J.ax,J.a1,W.bA,W.au,W.cf,W.by,W.aL,W.b,W.bI,W.c5,W.cc])
r(J.a2,[J.bL,J.al,J.V])
s(J.cl,J.q)
r(J.ax,[J.aQ,J.bE])
r(P.o,[H.bH,P.bT,H.bG,H.bV,H.bM,P.aK,H.c1,P.bK,P.P,P.bW,P.bU,P.az,P.bw,P.bx])
r(P.i,[H.aN,H.am])
r(H.aN,[H.W,H.aT])
s(H.ai,H.W)
s(H.b4,P.A)
s(H.bJ,P.bT)
r(H.ad,[H.bR,H.d1,H.d2,H.d3,P.cA,P.cz,P.cB,P.cC,P.cM,P.cL,P.cP,P.cH,P.cq,P.cg,P.ch,W.ci,W.cs,W.cr,W.cI,W.cJ,W.cK,W.cN,R.ck,F.d7,F.d8,F.d6,F.cT,F.cU,F.cR,Y.cS,Y.d0,Y.d_,F.dc,F.db])
r(H.bR,[H.bN,H.at])
s(H.bY,P.aK)
s(P.aX,P.B)
r(P.aX,[H.aS,W.c_])
s(H.be,H.c1)
s(P.cG,P.cO)
s(P.ba,P.bi)
s(P.Z,P.ba)
s(P.aV,P.b8)
r(P.P,[P.b0,P.bC])
r(W.bA,[W.e,W.b5])
r(W.e,[W.l,W.Q,W.af,W.aD])
r(W.l,[W.d,P.c])
r(W.d,[W.ar,W.bv,W.as,W.aa,W.ab,W.ac,W.bB,W.aw,W.aj,W.ak,W.b3,W.bP,W.bQ,W.aA])
s(W.aP,W.af)
s(W.N,W.b)
s(W.S,W.N)
s(W.y,P.aV)
s(W.c6,W.c5)
s(W.aY,W.c6)
s(W.b6,W.aL)
s(W.cd,W.cc)
s(W.b9,W.cd)
s(W.c0,W.c_)
s(W.c9,W.bb)
s(P.ay,P.c)
t(P.b8,P.x)
t(P.bi,P.b1)
t(W.c5,P.x)
t(W.c6,W.R)
t(W.cc,P.x)
t(W.cd,W.R)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{bq:"int",he:"double",O:"num",h:"String",v:"bool",w:"Null",K:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["w()","~()","v*(a3*)","~(~())","h(bq)","v(L)","v(h)","X<~>*(b*)","w(F*)","w(G*)","v(l,h,h,an)","@(@)","@(@,h)","@(h)","w(@)","w(~())","~(m?,m?)","v(e)","h(h)","~(e,e?)","H*(H*)","X<X<m*>*>*(b*)","w(bS*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.fE(v.typeUniverse,JSON.parse('{"bL":"a2","al":"a2","V":"a2","hE":"b","hK":"b","hD":"c","hL":"c","hF":"d","hM":"d","hO":"e","hJ":"e","i_":"af","hN":"S","hH":"N","hG":"Q","hP":"Q","bD":{"v":[]},"a2":{"av":[]},"q":{"K":["1"],"i":["1"]},"cl":{"q":["1"],"K":["1"],"i":["1"]},"aJ":{"A":["1"]},"ax":{"O":[]},"aQ":{"bq":[],"O":[]},"bE":{"O":[]},"a1":{"h":[],"e_":[]},"bH":{"o":[]},"aN":{"i":["1"]},"W":{"i":["1"]},"ah":{"A":["1"]},"ai":{"W":["2"],"i":["2"],"W.E":"2","i.E":"2"},"am":{"i":["1"],"i.E":"1"},"b4":{"A":["1"]},"bJ":{"o":[]},"bG":{"o":[]},"bV":{"o":[]},"bc":{"e3":[]},"ad":{"av":[]},"bR":{"av":[]},"bN":{"av":[]},"at":{"av":[]},"bM":{"o":[]},"bY":{"o":[]},"aS":{"B":["1","2"],"aW":["1","2"],"B.K":"1","B.V":"2"},"aT":{"i":["1"],"i.E":"1"},"aU":{"A":["1"]},"c1":{"o":[]},"be":{"o":[]},"bd":{"bS":[]},"Z":{"b1":["1"],"dV":["1"],"X":["1"],"i":["1"]},"b7":{"A":["1"]},"aV":{"x":["1"],"K":["1"],"i":["1"]},"aX":{"B":["1","2"],"aW":["1","2"]},"B":{"aW":["1","2"]},"ba":{"b1":["1"],"X":["1"],"i":["1"]},"bq":{"O":[]},"K":{"i":["1"]},"X":{"i":["1"]},"h":{"e_":[]},"aK":{"o":[]},"bT":{"o":[]},"bK":{"o":[]},"P":{"o":[]},"b0":{"o":[]},"bC":{"o":[]},"bW":{"o":[]},"bU":{"o":[]},"az":{"o":[]},"bw":{"o":[]},"b2":{"o":[]},"bx":{"o":[]},"d":{"l":[],"e":[]},"ar":{"l":[],"e":[]},"bv":{"l":[],"e":[]},"as":{"l":[],"e":[]},"aa":{"l":[],"e":[]},"ab":{"l":[],"e":[]},"ac":{"l":[],"e":[]},"Q":{"e":[]},"af":{"e":[]},"aL":{"dk":["O"]},"l":{"e":[]},"bB":{"l":[],"e":[]},"aP":{"e":[]},"aw":{"l":[],"e":[]},"S":{"b":[]},"y":{"x":["e"],"K":["e"],"i":["e"],"x.E":"e"},"aY":{"x":["e"],"R":["e"],"K":["e"],"bF":["e"],"i":["e"],"x.E":"e","R.E":"e"},"aj":{"l":[],"e":[]},"ak":{"l":[],"e":[]},"b3":{"l":[],"e":[]},"bP":{"l":[],"e":[]},"bQ":{"l":[],"e":[]},"aA":{"l":[],"e":[]},"N":{"b":[]},"aD":{"e":[]},"b6":{"dk":["O"]},"b9":{"x":["e"],"R":["e"],"K":["e"],"bF":["e"],"i":["e"],"x.E":"e","R.E":"e"},"c_":{"B":["h","h"],"aW":["h","h"]},"c0":{"B":["h","h"],"aW":["h","h"],"B.K":"h","B.V":"h"},"an":{"L":[]},"aZ":{"L":[]},"bb":{"L":[]},"c9":{"L":[]},"c8":{"L":[]},"ag":{"A":["1"]},"c7":{"fj":[]},"bh":{"fd":[]},"ay":{"c":[],"l":[],"e":[]},"c":{"l":[],"e":[]}}'))
H.fD(v.typeUniverse,JSON.parse('{"aN":1,"aV":1,"aX":2,"ba":1,"b8":1,"bi":1}'))
0
var u=(function rtii(){var t=H.cX
return{v:t("as"),t:t("aa"),h:t("l"),C:t("o"),Z:t("av"),J:t("i<e>"),R:t("i<@>"),Q:t("q<L>"),s:t("q<h>"),n:t("q<@>"),D:t("q<a3*>"),E:t("q<F*>"),S:t("q<G*>"),i:t("q<h*>"),U:t("q<H*>"),T:t("aR"),g:t("V"),p:t("bF<@>"),V:t("aW<@,@>"),W:t("ai<h*,h>"),A:t("e"),e:t("L"),P:t("w"),K:t("m"),a:t("a4<O*>"),r:t("a4<O>"),q:t("dk<O>"),Y:t("ay"),l:t("e3"),N:t("h"),u:t("h(h*)"),w:t("c"),d:t("aA"),j:t("bS"),z:t("al"),x:t("aD"),k:t("y"),f:t("an"),cB:t("v"),cb:t("he"),bL:t("bq"),I:t("ab*"),B:t("ac*"),bJ:t("au*"),L:t("b*"),bE:t("S*"),G:t("0&*"),_:t("m*"),aq:t("aj*"),c:t("a3*"),a3:t("a4<O>*"),b:t("F*"),y:t("G*"),ak:t("ak*"),bf:t("X<m*>*"),m:t("H*"),c5:t("v*"),bc:t("dR<w>?"),X:t("m?"),O:t("c4?"),o:t("@(b)?"),cY:t("O"),H:t("~"),M:t("~()"),aa:t("~(h,h)"),F:t("~(bS)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.u=W.ar.prototype
C.k=W.aa.prototype
C.l=W.ab.prototype
C.f=W.ac.prototype
C.C=W.au.prototype
C.D=W.by.prototype
C.E=W.aP.prototype
C.F=W.aw.prototype
C.G=J.z.prototype
C.a=J.q.prototype
C.e=J.aQ.prototype
C.H=J.aR.prototype
C.b=J.ax.prototype
C.c=J.a1.prototype
C.I=J.V.prototype
C.d=W.aj.prototype
C.p=J.bL.prototype
C.q=W.ak.prototype
C.r=W.b3.prototype
C.j=J.al.prototype
C.t=W.b5.prototype
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.v=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.A=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.w=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.x=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.z=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.y=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.n=function(hooks) { return hooks; }

C.B=new P.cE()
C.h=new P.cG()
C.J=H.p(t(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),u.i)
C.K=H.p(t(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),u.i)
C.L=H.p(t([]),u.i)
C.o=H.p(t(["bind","if","ref","repeat","syntax"]),u.i)
C.i=H.p(t(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),u.i)})();(function staticFields(){$.eb=null
$.U=0
$.dM=null
$.dL=null
$.ew=null
$.er=null
$.eA=null
$.cW=null
$.d4=null
$.dC=null
$.aE=null
$.bk=null
$.bl=null
$.dv=!1
$.bX=C.h
$.E=H.p([],H.cX("q<m>"))
$.a0=null
$.df=null
$.dQ=null
$.dP=null
$.c3=P.dU(u.N,u.Z)
$.ao=null
$.aG=null
$.br="cat"
$.j=P.dU(H.cX("h*"),H.cX("K<a3*>*"))
$.ap=H.p([],u.E)
$.bo=H.p([],u.S)
$.dF=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazyOld
t($,"hI","eF",function(){return H.hh("_$dart_dartClosure")})
t($,"hQ","eG",function(){return H.Y(H.cy({
toString:function(){return"$receiver$"}}))})
t($,"hR","eH",function(){return H.Y(H.cy({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"hS","eI",function(){return H.Y(H.cy(null))})
t($,"hT","eJ",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"hW","eM",function(){return H.Y(H.cy(void 0))})
t($,"hX","eN",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"hV","eL",function(){return H.Y(H.e7(null))})
t($,"hU","eK",function(){return H.Y(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"hZ","eP",function(){return H.Y(H.e7(void 0))})
t($,"hY","eO",function(){return H.Y(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"i0","dH",function(){return P.fk()})
t($,"i1","eQ",function(){return P.dW(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],u.N)})
s($,"ig","k",function(){var r=C.t.gae(W.eE()).href,q=J.eU(C.t.gae(W.eE()).href,"/")
r.toString
if(0>q)H.T(P.cv(0,null))
if(q>r.length)H.T(P.cv(q,null))
return r.substring(0,q)+"/images"})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.z,MediaError:J.z,NavigatorUserMediaError:J.z,OverconstrainedError:J.z,PositionError:J.z,Range:J.z,WebGLRenderingContext:J.z,WebGL2RenderingContext:J.z,SQLError:J.z,HTMLAudioElement:W.d,HTMLBRElement:W.d,HTMLContentElement:W.d,HTMLDListElement:W.d,HTMLDataElement:W.d,HTMLDataListElement:W.d,HTMLDetailsElement:W.d,HTMLDialogElement:W.d,HTMLDivElement:W.d,HTMLEmbedElement:W.d,HTMLFieldSetElement:W.d,HTMLHRElement:W.d,HTMLHeadElement:W.d,HTMLHeadingElement:W.d,HTMLHtmlElement:W.d,HTMLIFrameElement:W.d,HTMLInputElement:W.d,HTMLLIElement:W.d,HTMLLabelElement:W.d,HTMLLegendElement:W.d,HTMLLinkElement:W.d,HTMLMapElement:W.d,HTMLMediaElement:W.d,HTMLMenuElement:W.d,HTMLMetaElement:W.d,HTMLMeterElement:W.d,HTMLModElement:W.d,HTMLOListElement:W.d,HTMLObjectElement:W.d,HTMLOptGroupElement:W.d,HTMLOutputElement:W.d,HTMLParagraphElement:W.d,HTMLParamElement:W.d,HTMLPictureElement:W.d,HTMLPreElement:W.d,HTMLProgressElement:W.d,HTMLQuoteElement:W.d,HTMLScriptElement:W.d,HTMLShadowElement:W.d,HTMLSlotElement:W.d,HTMLSourceElement:W.d,HTMLSpanElement:W.d,HTMLStyleElement:W.d,HTMLTableCaptionElement:W.d,HTMLTableCellElement:W.d,HTMLTableDataCellElement:W.d,HTMLTableHeaderCellElement:W.d,HTMLTableColElement:W.d,HTMLTextAreaElement:W.d,HTMLTimeElement:W.d,HTMLTitleElement:W.d,HTMLTrackElement:W.d,HTMLUListElement:W.d,HTMLUnknownElement:W.d,HTMLVideoElement:W.d,HTMLDirectoryElement:W.d,HTMLFontElement:W.d,HTMLFrameElement:W.d,HTMLFrameSetElement:W.d,HTMLMarqueeElement:W.d,HTMLElement:W.d,HTMLAnchorElement:W.ar,HTMLAreaElement:W.bv,HTMLBaseElement:W.as,HTMLBodyElement:W.aa,HTMLButtonElement:W.ab,HTMLCanvasElement:W.ac,CanvasRenderingContext2D:W.au,CDATASection:W.Q,CharacterData:W.Q,Comment:W.Q,ProcessingInstruction:W.Q,Text:W.Q,XMLDocument:W.af,Document:W.af,DOMException:W.cf,DOMImplementation:W.by,DOMRectReadOnly:W.aL,Element:W.l,AbortPaymentEvent:W.b,AnimationEvent:W.b,AnimationPlaybackEvent:W.b,ApplicationCacheErrorEvent:W.b,BackgroundFetchClickEvent:W.b,BackgroundFetchEvent:W.b,BackgroundFetchFailEvent:W.b,BackgroundFetchedEvent:W.b,BeforeInstallPromptEvent:W.b,BeforeUnloadEvent:W.b,BlobEvent:W.b,CanMakePaymentEvent:W.b,ClipboardEvent:W.b,CloseEvent:W.b,CustomEvent:W.b,DeviceMotionEvent:W.b,DeviceOrientationEvent:W.b,ErrorEvent:W.b,ExtendableEvent:W.b,ExtendableMessageEvent:W.b,FetchEvent:W.b,FontFaceSetLoadEvent:W.b,ForeignFetchEvent:W.b,GamepadEvent:W.b,HashChangeEvent:W.b,InstallEvent:W.b,MediaEncryptedEvent:W.b,MediaKeyMessageEvent:W.b,MediaQueryListEvent:W.b,MediaStreamEvent:W.b,MediaStreamTrackEvent:W.b,MessageEvent:W.b,MIDIConnectionEvent:W.b,MIDIMessageEvent:W.b,MutationEvent:W.b,NotificationEvent:W.b,PageTransitionEvent:W.b,PaymentRequestEvent:W.b,PaymentRequestUpdateEvent:W.b,PopStateEvent:W.b,PresentationConnectionAvailableEvent:W.b,PresentationConnectionCloseEvent:W.b,ProgressEvent:W.b,PromiseRejectionEvent:W.b,PushEvent:W.b,RTCDataChannelEvent:W.b,RTCDTMFToneChangeEvent:W.b,RTCPeerConnectionIceEvent:W.b,RTCTrackEvent:W.b,SecurityPolicyViolationEvent:W.b,SensorErrorEvent:W.b,SpeechRecognitionError:W.b,SpeechRecognitionEvent:W.b,SpeechSynthesisEvent:W.b,StorageEvent:W.b,SyncEvent:W.b,TrackEvent:W.b,TransitionEvent:W.b,WebKitTransitionEvent:W.b,VRDeviceEvent:W.b,VRDisplayEvent:W.b,VRSessionEvent:W.b,MojoInterfaceRequestEvent:W.b,ResourceProgressEvent:W.b,USBConnectionEvent:W.b,IDBVersionChangeEvent:W.b,AudioProcessingEvent:W.b,OfflineAudioCompletionEvent:W.b,WebGLContextEvent:W.b,Event:W.b,InputEvent:W.b,SubmitEvent:W.b,EventTarget:W.bA,HTMLFormElement:W.bB,HTMLDocument:W.aP,HTMLImageElement:W.aw,Location:W.bI,MouseEvent:W.S,DragEvent:W.S,PointerEvent:W.S,WheelEvent:W.S,DocumentFragment:W.e,ShadowRoot:W.e,DocumentType:W.e,Node:W.e,NodeList:W.aY,RadioNodeList:W.aY,HTMLOptionElement:W.aj,HTMLSelectElement:W.ak,HTMLTableElement:W.b3,HTMLTableRowElement:W.bP,HTMLTableSectionElement:W.bQ,HTMLTemplateElement:W.aA,CompositionEvent:W.N,FocusEvent:W.N,KeyboardEvent:W.N,TextEvent:W.N,TouchEvent:W.N,UIEvent:W.N,Window:W.b5,DOMWindow:W.b5,Attr:W.aD,ClientRect:W.b6,DOMRect:W.b6,NamedNodeMap:W.b9,MozNamedAttrMap:W.b9,SVGScriptElement:P.ay,SVGAElement:P.c,SVGAnimateElement:P.c,SVGAnimateMotionElement:P.c,SVGAnimateTransformElement:P.c,SVGAnimationElement:P.c,SVGCircleElement:P.c,SVGClipPathElement:P.c,SVGDefsElement:P.c,SVGDescElement:P.c,SVGDiscardElement:P.c,SVGEllipseElement:P.c,SVGFEBlendElement:P.c,SVGFEColorMatrixElement:P.c,SVGFEComponentTransferElement:P.c,SVGFECompositeElement:P.c,SVGFEConvolveMatrixElement:P.c,SVGFEDiffuseLightingElement:P.c,SVGFEDisplacementMapElement:P.c,SVGFEDistantLightElement:P.c,SVGFEFloodElement:P.c,SVGFEFuncAElement:P.c,SVGFEFuncBElement:P.c,SVGFEFuncGElement:P.c,SVGFEFuncRElement:P.c,SVGFEGaussianBlurElement:P.c,SVGFEImageElement:P.c,SVGFEMergeElement:P.c,SVGFEMergeNodeElement:P.c,SVGFEMorphologyElement:P.c,SVGFEOffsetElement:P.c,SVGFEPointLightElement:P.c,SVGFESpecularLightingElement:P.c,SVGFESpotLightElement:P.c,SVGFETileElement:P.c,SVGFETurbulenceElement:P.c,SVGFilterElement:P.c,SVGForeignObjectElement:P.c,SVGGElement:P.c,SVGGeometryElement:P.c,SVGGraphicsElement:P.c,SVGImageElement:P.c,SVGLineElement:P.c,SVGLinearGradientElement:P.c,SVGMarkerElement:P.c,SVGMaskElement:P.c,SVGMetadataElement:P.c,SVGPathElement:P.c,SVGPatternElement:P.c,SVGPolygonElement:P.c,SVGPolylineElement:P.c,SVGRadialGradientElement:P.c,SVGRectElement:P.c,SVGSetElement:P.c,SVGStopElement:P.c,SVGStyleElement:P.c,SVGSVGElement:P.c,SVGSwitchElement:P.c,SVGSymbolElement:P.c,SVGTSpanElement:P.c,SVGTextContentElement:P.c,SVGTextElement:P.c,SVGTextPathElement:P.c,SVGTextPositioningElement:P.c,SVGTitleElement:P.c,SVGUseElement:P.c,SVGViewElement:P.c,SVGGradientElement:P.c,SVGComponentTransferFunctionElement:P.c,SVGFEDropShadowElement:P.c,SVGMPathElement:P.c,SVGElement:P.c})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,HTMLImageElement:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLOptionElement:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=F.hv
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map
