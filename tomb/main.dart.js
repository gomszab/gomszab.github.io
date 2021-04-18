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
a[c]=function(){a[c]=function(){H.ht(b)}
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
if(a[b]!==t)H.hu(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ds"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ds"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.ds(this,a,b,c,true,false,e).prototype
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
if(w[t][a])return w[t][a]}}var C={},H={db:function db(){},
e0:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dN:function(){return new P.aw("No element")},
f4:function(){return new P.aw("Too many elements")},
bD:function bD(a){this.a=a},
aJ:function aJ(){},
U:function U(){},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ag:function ag(a,b,c){this.a=a
this.b=b
this.$ti=c},
ak:function ak(a,b,c){this.a=a
this.b=b
this.$ti=c},
b_:function b_(a,b,c){this.a=a
this.b=b
this.$ti=c},
ey:function(a){var t,s=H.ex(a)
if(s!=null)return s
t="minified:"+a
return t},
hl:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
a:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aD(a)
if(typeof t!="string")throw H.f(H.en(a))
return t},
aW:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
cs:function(a){return H.f9(a)},
f9:function(a){var t,s,r
if(a instanceof P.m)return H.I(H.a6(a),null)
if(J.bj(a)===C.E||u.z.b(a)){t=C.m(a)
if(H.dW(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.dW(r))return r}}return H.I(H.a6(a),null)},
dW:function(a){var t=a!=="Object"&&a!==""
return t},
dv:function(a){throw H.f(H.en(a))},
v:function(a,b){if(a==null)J.bq(a)
throw H.f(H.dt(a,b))},
dt:function(a,b){var t,s,r="index"
if(!H.dp(b))return new P.O(!0,b,r,null)
t=J.bq(a)
if(!(b<0)){if(typeof t!=="number")return H.dv(t)
s=b>=t}else s=!0
if(s)return P.d9(b,a,r,null,t)
return P.ct(b,r)},
en:function(a){return new P.O(!0,a,null,null)},
f:function(a){var t,s
if(a==null)a=new P.bG()
t=new Error()
t.dartException=a
s=H.hv
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
hv:function(){return J.aD(this.dartException)},
a7:function(a){throw H.f(a)},
dB:function(a){throw H.f(P.ac(a))},
W:function(a){var t,s,r,q,p,o
a=H.hr(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.p([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.cv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
cw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
e2:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
dU:function(a,b){return new H.bF(a,b==null?null:b.method)},
dc:function(a,b){var t=b==null,s=t?null:b.method
return new H.bC(a,s,t?null:b.receiver)},
bo:function(a){if(a==null)return new H.cr(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.ao(a,a.dartException)
return H.h_(a)},
ao:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
h_:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.aG(s,16)&8191)===10)switch(r){case 438:return H.ao(a,H.dc(H.a(t)+" (Error "+r+")",f))
case 445:case 5007:return H.ao(a,H.dU(H.a(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.eB()
p=$.eC()
o=$.eD()
n=$.eE()
m=$.eH()
l=$.eI()
k=$.eG()
$.eF()
j=$.eK()
i=$.eJ()
h=q.w(t)
if(h!=null)return H.ao(a,H.dc(H.D(t),h))
else{h=p.w(t)
if(h!=null){h.method="call"
return H.ao(a,H.dc(H.D(t),h))}else{h=o.w(t)
if(h==null){h=n.w(t)
if(h==null){h=m.w(t)
if(h==null){h=l.w(t)
if(h==null){h=k.w(t)
if(h==null){h=n.w(t)
if(h==null){h=j.w(t)
if(h==null){h=i.w(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.ao(a,H.dU(H.D(t),h))}}return H.ao(a,new H.bS(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.aY()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.ao(a,new P.O(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.aY()
return a},
hd:function(a){var t
if(a==null)return new H.b7(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.b7(a)},
h9:function(a,b){var t,s=a.length
for(t=0;t<s;++t)b.h(0,a[t])
return b},
hk:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.dl(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.cB("Unsupported number of arguments for wrapped closure"))},
bi:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.hk)
a.$identity=t
return t},
f0:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.bK().constructor.prototype):Object.create(new H.ar(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.S
if(typeof s!=="number")return s.q()
$.S=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.dJ(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.eX(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dJ(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
eX:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.es,a)
if(typeof a=="string"){if(b)throw H.f("Cannot compute signature for static tearoff.")
t=c?H.eV:H.eU
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.f("Error in functionType of tearoff")},
eY:function(a,b,c,d){var t=H.dI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
dJ:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.f_(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.eY(s,!q,t,b)
if(s===0){q=$.S
if(typeof q!=="number")return q.q()
$.S=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.a(H.d7())+";return "+o+"."+H.a(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.S
if(typeof q!=="number")return q.q()
$.S=q+1
n+=q
return new Function("return function("+n+"){return this."+H.a(H.d7())+"."+H.a(t)+"("+n+");}")()},
eZ:function(a,b,c,d){var t=H.dI,s=H.eW
switch(b?-1:a){case 0:throw H.f(new H.bJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
f_:function(a,b){var t,s,r,q,p,o,n=H.d7(),m=$.dG
if(m==null)m=$.dG=H.dF("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.eZ(s,!q,t,b)
if(s===1){q="return function(){return this."+H.a(n)+"."+H.a(t)+"(this."+m+");"
p=$.S
if(typeof p!=="number")return p.q()
$.S=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.a(n)+"."+H.a(t)+"(this."+m+", "+o+");"
p=$.S
if(typeof p!=="number")return p.q()
$.S=p+1
return new Function(q+p+"}")()},
ds:function(a,b,c,d,e,f,g){return H.f0(a,b,c,d,!!e,!!f,g)},
eU:function(a,b){return H.c9(v.typeUniverse,H.a6(a.a),b)},
eV:function(a,b){return H.c9(v.typeUniverse,H.a6(a.c),b)},
dI:function(a){return a.a},
eW:function(a){return a.c},
d7:function(){var t=$.dH
return t==null?$.dH=H.dF("self"):t},
dF:function(a){var t,s,r,q=new H.ar("self","target","receiver","name"),p=J.f5(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.f(P.eS("Field name "+a+" not found."))},
cN:function(a){if(a==null)H.h0("boolean expression must not be null")
return a},
h0:function(a){throw H.f(new H.bW(a))},
ht:function(a){throw H.f(new P.bt(a))},
hb:function(a){return v.getIsolateTag(a)},
hu:function(a){return H.a7(new H.bD(a))},
i7:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
hn:function(a){var t,s,r,q,p,o=H.D($.er.$1(a)),n=$.cR[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.d_[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.eh($.em.$2(a,o))
if(r!=null){n=$.cR[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.d_[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.d4(t)
$.cR[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.d_[o]=t
return t}if(q==="-"){p=H.d4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.eu(a,t)
if(q==="*")throw H.f(P.e3(o))
if(v.leafTags[o]===true){p=H.d4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.eu(a,t)},
eu:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.dx(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
d4:function(a){return J.dx(a,!1,null,!!a.$ibB)},
hq:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.d4(t)
else return J.dx(t,c,null,null)},
hi:function(){if(!0===$.dw)return
$.dw=!0
H.hj()},
hj:function(){var t,s,r,q,p,o,n,m
$.cR=Object.create(null)
$.d_=Object.create(null)
H.hh()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.ev.$1(p)
if(o!=null){n=H.hq(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
hh:function(){var t,s,r,q,p,o,n=C.v()
n=H.aB(C.w,H.aB(C.x,H.aB(C.n,H.aB(C.n,H.aB(C.y,H.aB(C.z,H.aB(C.A(C.m),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.er=new H.cX(q)
$.em=new H.cY(p)
$.ev=new H.cZ(o)},
aB:function(a,b){return a(b)||b},
hr:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cv:function cv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bF:function bF(a,b){this.a=a
this.b=b},
bC:function bC(a,b,c){this.a=a
this.b=b
this.c=c},
bS:function bS(a){this.a=a},
cr:function cr(a){this.a=a},
b7:function b7(a){this.a=a
this.b=null},
ab:function ab(){},
bO:function bO(){},
bK:function bK(){},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a){this.a=a},
bW:function bW(a){this.a=a},
aO:function aO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ck:function ck(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aP:function aP(a,b){this.a=a
this.$ti=b},
aQ:function aQ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
cX:function cX(a){this.a=a},
cY:function cY(a){this.a=a},
cZ:function cZ(a){this.a=a},
fb:function(a,b){var t=b.c
return t==null?b.c=H.dj(a,b.z,!0):t},
dX:function(a,b){var t=b.c
return t==null?b.c=H.ba(a,"dM",[b.z]):t},
dY:function(a){var t=a.y
if(t===6||t===7||t===8)return H.dY(a.z)
return t===11||t===12},
fa:function(a){return a.cy},
cS:function(a){return H.dk(v.typeUniverse,a,!1)},
a5:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.a5(a,t,c,a0)
if(s===t)return b
return H.ee(a,s,!0)
case 7:t=b.z
s=H.a5(a,t,c,a0)
if(s===t)return b
return H.dj(a,s,!0)
case 8:t=b.z
s=H.a5(a,t,c,a0)
if(s===t)return b
return H.ed(a,s,!0)
case 9:r=b.Q
q=H.bh(a,r,c,a0)
if(q===r)return b
return H.ba(a,b.z,q)
case 10:p=b.z
o=H.a5(a,p,c,a0)
n=b.Q
m=H.bh(a,n,c,a0)
if(o===p&&m===n)return b
return H.dh(a,o,m)
case 11:l=b.z
k=H.a5(a,l,c,a0)
j=b.Q
i=H.fX(a,j,c,a0)
if(k===l&&i===j)return b
return H.ec(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.bh(a,h,c,a0)
p=b.z
o=H.a5(a,p,c,a0)
if(g===h&&o===p)return b
return H.di(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.f(P.cc("Attempted to substitute unexpected RTI kind "+d))}},
bh:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.a5(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
fY:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.a5(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
fX:function(a,b,c,d){var t,s=b.a,r=H.bh(a,s,c,d),q=b.b,p=H.bh(a,q,c,d),o=b.c,n=H.fY(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.c0()
t.a=r
t.b=p
t.c=n
return t},
p:function(a,b){a[v.arrayRti]=b
return a},
h5:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.es(t)
return a.$S()}return null},
et:function(a,b){var t
if(H.dY(b))if(a instanceof H.ab){t=H.h5(a)
if(t!=null)return t}return H.a6(a)},
a6:function(a){var t
if(a instanceof P.m){t=a.$ti
return t!=null?t:H.dm(a)}if(Array.isArray(a))return H.am(a)
return H.dm(J.bj(a))},
am:function(a){var t=a[v.arrayRti],s=u.n
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
H:function(a){var t=a.$ti
return t!=null?t:H.dm(a)},
dm:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.fJ(a,t)},
fJ:function(a,b){var t=a instanceof H.ab?a.__proto__.__proto__.constructor:b,s=H.fA(v.typeUniverse,t.name)
b.$ccache=s
return s},
es:function(a){var t,s,r
H.dl(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.dk(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
fI:function(a){var t,s,r=this,q=u.K
if(r===q)return H.be(r,a,H.fM)
if(!H.Y(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.be(r,a,H.fP)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.dp
else if(t===u.cb||t===u.cY)s=H.fL
else if(t===u.N)s=H.fN
else s=t===u.w?H.ek:null
if(s!=null)return H.be(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.hm)){r.r="$i"+q
return H.be(r,a,H.fO)}}else if(q===7)return H.be(r,a,H.fG)
return H.be(r,a,H.fE)},
be:function(a,b,c){a.b=c
return a.b(b)},
fH:function(a){var t,s,r=this
if(!H.Y(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.fD
else if(r===u.K)s=H.fC
else s=H.fF
r.a=s
return r.a(a)},
dr:function(a){var t,s=a.y
if(!H.Y(a))if(!(a===u._))if(!(a===u.G))if(s!==7)t=s===8&&H.dr(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fE:function(a){var t=this
if(a==null)return H.dr(t)
return H.r(v.typeUniverse,H.et(a,t),null,t,null)},
fG:function(a){if(a==null)return!0
return this.z.b(a)},
fO:function(a){var t,s=this
if(a==null)return H.dr(s)
t=s.r
if(a instanceof P.m)return!!a[t]
return!!J.bj(a)[t]},
i6:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.ei(a,t)},
fF:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.ei(a,t)},
ei:function(a,b){throw H.f(H.fq(H.e4(a,H.et(a,b),H.I(b,null))))},
e4:function(a,b,c){var t=P.bv(a),s=H.I(b==null?H.a6(a):b,null)
return t+": type '"+H.a(s)+"' is not a subtype of type '"+H.a(c)+"'"},
fq:function(a){return new H.b9("TypeError: "+a)},
C:function(a,b){return new H.b9("TypeError: "+H.e4(a,null,b))},
fM:function(a){return a!=null},
fC:function(a){return a},
fP:function(a){return!0},
fD:function(a){return a},
ek:function(a){return!0===a||!1===a},
hW:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.f(H.C(a,"bool"))},
fB:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.f(H.C(a,"bool"))},
hX:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.f(H.C(a,"bool?"))},
hY:function(a){if(typeof a=="number")return a
throw H.f(H.C(a,"double"))},
i_:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.C(a,"double"))},
hZ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.C(a,"double?"))},
dp:function(a){return typeof a=="number"&&Math.floor(a)===a},
i0:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.f(H.C(a,"int"))},
dl:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.f(H.C(a,"int"))},
i1:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.f(H.C(a,"int?"))},
fL:function(a){return typeof a=="number"},
i2:function(a){if(typeof a=="number")return a
throw H.f(H.C(a,"num"))},
i4:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.C(a,"num"))},
i3:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.f(H.C(a,"num?"))},
fN:function(a){return typeof a=="string"},
i5:function(a){if(typeof a=="string")return a
throw H.f(H.C(a,"String"))},
D:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.f(H.C(a,"String"))},
eh:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.f(H.C(a,"String?"))},
fU:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.c.q(s,H.I(a[r],b))
return t},
ej:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.p([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.a.h(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.v(a5,j)
m=C.c.q(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.c.q(" extends ",H.I(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.I(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.c.q(a2,H.I(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.c.q(a2,H.I(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.dD(H.I(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.a(a0)},
I:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.I(a.z,b)
return t}if(m===7){s=a.z
t=H.I(s,b)
r=s.y
return J.dD(r===11||r===12?C.c.q("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.a(H.I(a.z,b))+">"
if(m===9){q=H.fZ(a.z)
p=a.Q
return p.length!==0?q+("<"+H.fU(p,b)+">"):q}if(m===11)return H.ej(a,b,null)
if(m===12)return H.ej(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.v(b,o)
return b[o]}return"?"},
fZ:function(a){var t,s=H.ex(a)
if(s!=null)return s
t="minified:"+a
return t},
ef:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
fA:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.dk(a,b,!1)
else if(typeof n=="number"){t=n
s=H.bb(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.ba(a,b,r)
o[b]=p
return p}else return n},
fy:function(a,b){return H.eg(a.tR,b)},
fx:function(a,b){return H.eg(a.eT,b)},
dk:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.ea(H.e8(a,null,b,c))
s.set(b,t)
return t},
c9:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.ea(H.e8(a,b,c,!0))
r.set(c,s)
return s},
fz:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.dh(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
a4:function(a,b){b.a=H.fH
b.b=H.fI
return b},
bb:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.L(null,null)
t.y=b
t.cy=c
s=H.a4(a,t)
a.eC.set(c,s)
return s},
ee:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.fv(a,b,s,c)
a.eC.set(s,t)
return t},
fv:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.Y(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.L(null,null)
r.y=6
r.z=b
r.cy=c
return H.a4(a,r)},
dj:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.fu(a,b,s,c)
a.eC.set(s,t)
return t},
fu:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.Y(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.d0(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.G)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.d0(r.z))return r
else return H.fb(a,b)}}q=new H.L(null,null)
q.y=7
q.z=b
q.cy=c
return H.a4(a,q)},
ed:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.fs(a,b,s,c)
a.eC.set(s,t)
return t},
fs:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.Y(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.ba(a,"dM",[b])
else if(b===u.P||b===u.T)return u.bc}r=new H.L(null,null)
r.y=8
r.z=b
r.cy=c
return H.a4(a,r)},
fw:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.L(null,null)
t.y=13
t.z=b
t.cy=r
s=H.a4(a,t)
a.eC.set(r,s)
return s},
c8:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
fr:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
ba:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.c8(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.L(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.a4(a,s)
a.eC.set(q,r)
return r},
dh:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.c8(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.L(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.a4(a,p)
a.eC.set(r,o)
return o},
ec:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.c8(n)
if(k>0){t=m>0?",":""
s=H.c8(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.fr(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.L(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.a4(a,p)
a.eC.set(r,s)
return s},
di:function(a,b,c,d){var t,s=b.cy+("<"+H.c8(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.ft(a,b,c,s,d)
a.eC.set(s,t)
return t},
ft:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.a5(a,b,s,0)
n=H.bh(a,c,s,0)
return H.di(a,o,n,c!==n)}}m=new H.L(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.a4(a,m)},
e8:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ea:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.fk(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.e9(a,s,h,g,!1)
else if(r===46)s=H.e9(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.a3(a.u,a.e,g.pop()))
break
case 94:g.push(H.fw(a.u,g.pop()))
break
case 35:g.push(H.bb(a.u,5,"#"))
break
case 64:g.push(H.bb(a.u,2,"@"))
break
case 126:g.push(H.bb(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.dg(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.ba(q,o,p))
else{n=H.a3(q,a.e,o)
switch(n.y){case 11:g.push(H.di(q,n,p,a.n))
break
default:g.push(H.dh(q,n,p))
break}}break
case 38:H.fl(a,g)
break
case 42:m=a.u
g.push(H.ee(m,H.a3(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.dj(m,H.a3(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.ed(m,H.a3(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.c0()
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
H.dg(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.ec(q,H.a3(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.dg(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.fn(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.a3(a.u,a.e,i)},
fk:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
e9:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.ef(t,p.z)[q]
if(o==null)H.a7('No "'+q+'" in "'+H.fa(p)+'"')
d.push(H.c9(t,p,o))}else d.push(q)
return n},
fl:function(a,b){var t=b.pop()
if(0===t){b.push(H.bb(a.u,1,"0&"))
return}if(1===t){b.push(H.bb(a.u,4,"1&"))
return}throw H.f(P.cc("Unexpected extended operation "+H.a(t)))},
a3:function(a,b,c){if(typeof c=="string")return H.ba(a,c,a.sEA)
else if(typeof c=="number")return H.fm(a,b,c)
else return c},
dg:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.a3(a,b,c[t])},
fn:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.a3(a,b,c[t])},
fm:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.f(P.cc("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.f(P.cc("Bad index "+c+" for "+b.i(0)))},
r:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.Y(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.Y(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.r(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.r(a,b.z,c,d,e)
if(q===6){t=d.z
return H.r(a,b,c,t,e)}if(s===8){if(!H.r(a,b.z,c,d,e))return!1
return H.r(a,H.dX(a,b),c,d,e)}if(s===7){t=H.r(a,b.z,c,d,e)
return t}if(q===8){if(H.r(a,b,c,d.z,e))return!0
return H.r(a,b,c,H.dX(a,d),e)}if(q===7){t=H.r(a,b,c,d.z,e)
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
if(!H.r(a,l,c,k,e)||!H.r(a,k,e,l,c))return!1}return H.el(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.el(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.fK(a,b,c,d,e)}return!1},
el:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.r(a1,a2.z,a3,a4.z,a5))return!1
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
if(!H.r(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.r(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.r(a1,l[i],a5,h,a3))return!1}g=t.c
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
if(!H.r(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
fK:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.r(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.ef(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.r(a,H.c9(a,b,m[q]),c,s[q],e))return!1
return!0},
d0:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.Y(a))if(s!==7)if(!(s===6&&H.d0(a.z)))t=s===8&&H.d0(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
hm:function(a){var t
if(!H.Y(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
Y:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
eg:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
L:function L(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
c0:function c0(){this.c=this.b=this.a=null},
c_:function c_(){},
b9:function b9(a){this.a=a},
ex:function(a){return v.mangledGlobalNames[a]}},J={
dx:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cU:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.dw==null){H.hi()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.f(P.e3("Return interceptor for "+H.a(t(a,p))))}r=a.constructor
q=r==null?null:r[J.dO()]
if(q!=null)return q
q=H.hn(a)
if(q!=null)return q
if(typeof a=="function")return C.G
t=Object.getPrototypeOf(a)
if(t==null)return C.p
if(t===Object.prototype)return C.p
if(typeof r=="function"){Object.defineProperty(r,J.dO(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
dO:function(){var t=$.e6
return t==null?$.e6=v.getIsolateTag("_$dart_js"):t},
f5:function(a,b){a.fixed$length=Array
return a},
bj:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aM.prototype
return J.bA.prototype}if(typeof a=="string")return J.a_.prototype
if(a==null)return J.aN.prototype
if(typeof a=="boolean")return J.bz.prototype
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
return a}if(a instanceof P.m)return a
return J.cU(a)},
du:function(a){if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
return a}if(a instanceof P.m)return a
return J.cU(a)},
ep:function(a){if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
return a}if(a instanceof P.m)return a
return J.cU(a)},
ha:function(a){if(typeof a=="number")return J.au.prototype
if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.aj.prototype
return a},
eq:function(a){if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.aj.prototype
return a},
cT:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
return a}if(a instanceof P.m)return a
return J.cU(a)},
dD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ha(a).q(a,b)},
d6:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bj(a).B(a,b)},
eM:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hl(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.du(a).j(a,b)},
eN:function(a,b){return J.ep(a).H(a,b)},
eO:function(a){return J.cT(a).gaI(a)},
aC:function(a){return J.bj(a).gl(a)},
bp:function(a){return J.ep(a).gu(a)},
bq:function(a){return J.du(a).gm(a)},
eP:function(a,b){return J.eq(a).aQ(a,b)},
dE:function(a){return J.cT(a).ae(a)},
eQ:function(a,b){return J.cT(a).saB(a,b)},
eR:function(a){return J.eq(a).aT(a)},
aD:function(a){return J.bj(a).i(a)},
z:function z(){},
bz:function bz(){},
aN:function aN(){},
a0:function a0(){},
bH:function bH(){},
aj:function aj(){},
T:function T(){},
q:function q(a){this.$ti=a},
cj:function cj(a){this.$ti=a},
aE:function aE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
au:function au(){},
aM:function aM(){},
bA:function bA(){},
a_:function a_(){}},P={
fe:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.h1()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.bi(new P.cy(r),1)).observe(t,{childList:true})
return new P.cx(r,t,s)}else if(self.setImmediate!=null)return P.h2()
return P.h3()},
ff:function(a){self.scheduleImmediate(H.bi(new P.cz(u.M.a(a)),0))},
fg:function(a){self.setImmediate(H.bi(new P.cA(u.M.a(a)),0))},
fh:function(a){u.M.a(a)
P.fo(0,a)},
e1:function(a,b){var t=C.e.L(a.a,1000)
return P.fp(t<0?0:t,b)},
fo:function(a,b){var t=new P.b8()
t.au(a,b)
return t},
fp:function(a,b){var t=new P.b8()
t.av(a,b)
return t},
fR:function(){var t,s
for(t=$.aA;t!=null;t=$.aA){$.bg=null
s=t.b
$.aA=s
if(s==null)$.bf=null
t.a.$0()}},
fW:function(){$.dn=!0
try{P.fR()}finally{$.bg=null
$.dn=!1
if($.aA!=null)$.dC().$1(P.eo())}},
fV:function(a){var t,s,r,q,p,o=$.aA
if(o==null){t=new P.bX(a)
s=$.bf
if(s==null){$.aA=$.bf=t
if(!$.dn)$.dC().$1(P.eo())}else $.bf=s.b=t
$.bg=$.bf
return}r=new P.bX(a)
q=$.bg
if(q==null){r.b=o
$.aA=$.bg=r}else{p=q.b
r.b=p
$.bg=q.b=r
if(p==null)$.bf=r}},
fc:function(a,b){var t=$.bV
if(t===C.h)return P.e1(a,u.F.a(b))
return P.e1(a,u.F.a(t.aJ(b,u.j)))},
fS:function(a,b,c,d,e){P.fV(new P.cM(d,e))},
fT:function(a,b,c,d,e,f,g){var t,s=$.bV
if(s===c)return d.$1(e)
$.bV=c
t=s
try{s=d.$1(e)
return s}finally{$.bV=t}},
cy:function cy(a){this.a=a},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a){this.a=a},
cA:function cA(a){this.a=a},
b8:function b8(){this.c=0},
cJ:function cJ(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bX:function bX(a){this.a=a
this.b=null},
cL:function cL(){},
cM:function cM(a,b){this.a=a
this.b=b},
cD:function cD(){},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function(a,b){return new H.aO(a.k("@<0>").ay(b).k("aO<1,2>"))},
cl:function(a){return new P.X(a.k("X<0>"))},
f6:function(a){return new P.X(a.k("X<0>"))},
cm:function(a,b){return b.k("dQ<0>").a(H.h9(a,new P.X(b.k("X<0>"))))},
df:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
f3:function(a,b,c){var t,s
if(P.dq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.p([],u.s)
C.a.h($.E,a)
try{P.fQ(a,t)}finally{if(0>=$.E.length)return H.v($.E,-1)
$.E.pop()}s=P.e_(b,u.R.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
da:function(a,b,c){var t,s
if(P.dq(a))return b+"..."+c
t=new P.bL(b)
C.a.h($.E,a)
try{s=t
s.a=P.e_(s.a,a,", ")}finally{if(0>=$.E.length)return H.v($.E,-1)
$.E.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dq:function(a){var t,s
for(t=$.E.length,s=0;s<t;++s)if(a===$.E[s])return!0
return!1},
fQ:function(a,b){var t,s,r,q,p,o,n,m=a.gu(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.n())return
t=H.a(m.gp())
C.a.h(b,t)
l+=t.length+2;++k}if(!m.n()){if(k<=5)return
if(0>=b.length)return H.v(b,-1)
s=b.pop()
if(0>=b.length)return H.v(b,-1)
r=b.pop()}else{q=m.gp();++k
if(!m.n()){if(k<=4){C.a.h(b,H.a(q))
return}s=H.a(q)
if(0>=b.length)return H.v(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gp();++k
for(;m.n();q=p,p=o){o=m.gp();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.v(b,-1)
l-=b.pop().length+2;--k}C.a.h(b,"...")
return}}r=H.a(q)
s=H.a(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.v(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.h(b,n)
C.a.h(b,r)
C.a.h(b,s)},
dR:function(a,b){var t,s,r=P.cl(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.dB)(a),++s)r.h(0,b.a(a[s]))
return r},
dT:function(a){var t,s={}
if(P.dq(a))return"{...}"
t=new P.bL("")
try{C.a.h($.E,a)
t.a+="{"
s.a=!0
a.I(0,new P.co(s,t))
t.a+="}"}finally{if(0>=$.E.length)return H.v($.E,-1)
$.E.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
X:function X(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c2:function c2(a){this.a=a
this.b=null},
b2:function b2(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
aR:function aR(){},
w:function w(){},
aT:function aT(){},
co:function co(a,b){this.a=a
this.b=b},
B:function B(){},
aX:function aX(){},
b5:function b5(){},
b3:function b3(){},
bd:function bd(){},
f2:function(a){if(a instanceof H.ab)return a.i(0)
return"Instance of '"+H.a(H.cs(a))+"'"},
dS:function(a,b,c){var t=P.f7(a,c)
return t},
f7:function(a,b){var t,s
if(Array.isArray(a))return H.p(a.slice(0),b.k("q<0>"))
t=H.p([],b.k("q<0>"))
for(s=J.bp(a);s.n();)C.a.h(t,s.gp())
return t},
e_:function(a,b,c){var t=J.bp(b)
if(!t.n())return a
if(c.length===0){do a+=H.a(t.gp())
while(t.n())}else{a+=H.a(t.gp())
for(;t.n();)a=a+c+H.a(t.gp())}return a},
bv:function(a){if(typeof a=="number"||H.ek(a)||null==a)return J.aD(a)
if(typeof a=="string")return JSON.stringify(a)
return P.f2(a)},
cc:function(a){return new P.aF(a)},
eS:function(a){return new P.O(!1,null,null,a)},
eT:function(a,b,c){return new P.O(!0,a,b,c)},
ct:function(a,b){return new P.bI(null,null,!0,a,b,"Value not in range")},
d9:function(a,b,c,d,e){var t=e==null?J.bq(b):e
return new P.by(t,!0,a,c,"Index out of range")},
bU:function(a){return new P.bT(a)},
e3:function(a){return new P.bR(a)},
de:function(a){return new P.aw(a)},
ac:function(a){return new P.bs(a)},
aI:function aI(a){this.a=a},
ce:function ce(){},
cf:function cf(){},
o:function o(){},
aF:function aF(a){this.a=a},
bQ:function bQ(){},
bG:function bG(){},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
by:function by(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bT:function bT(a){this.a=a},
bR:function bR(a){this.a=a},
aw:function aw(a){this.a=a},
bs:function bs(a){this.a=a},
aY:function aY(){},
bt:function bt(a){this.a=a},
cB:function cB(a){this.a=a},
i:function i(){},
A:function A(){},
x:function x(){},
m:function m(){},
bL:function bL(a){this.a=a},
a2:function a2(a,b,c){this.a=a
this.b=b
this.$ti=c},
av:function av(){},
c:function c(){}},W={
ez:function(){return window},
f1:function(a,b,c){var t,s,r,q=document.body
q.toString
t=C.k.v(q,a,b,c)
t.toString
q=u.k
q=new H.ak(new W.y(t),q.k("t(w.E)").a(new W.cg()),q.k("ak<w.E>"))
s=q.gu(q)
if(!s.n())H.a7(H.dN())
r=s.gp()
if(s.n())H.a7(H.f4())
return u.h.a(r)},
aK:function(a){var t,s,r="element tag unavailable"
try{t=J.cT(a)
if(typeof t.gag(a)=="string")r=t.gag(a)}catch(s){H.bo(s)}return r},
cC:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
e7:function(a,b,c,d){var t=W.cC(W.cC(W.cC(W.cC(0,a),b),c),d),s=t+((t&67108863)<<3)&536870911
s^=s>>>11
return s+((s&16383)<<15)&536870911},
e5:function(a){var t=document.createElement("a"),s=new W.c5(t,window.location)
s=new W.al(s)
s.as(a)
return s},
fi:function(a,b,c,d){u.h.a(a)
H.D(b)
H.D(c)
u.f.a(d)
return!0},
fj:function(a,b,c,d){var t,s,r
u.h.a(a)
H.D(b)
H.D(c)
t=u.f.a(d).a
s=t.a
C.u.saO(s,c)
r=s.hostname
t=t.b
if(!(r==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(r==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
eb:function(){var t=u.N,s=P.dR(C.o,t),r=u.u.a(new W.cH()),q=H.p(["TEMPLATE"],u.s)
t=new W.c7(s,P.cl(t),P.cl(t),P.cl(t),null)
t.at(null,new H.ag(C.o,r,u.W),q,null)
return t},
d:function d(){},
ap:function ap(){},
br:function br(){},
aq:function aq(){},
a8:function a8(){},
a9:function a9(){},
aa:function aa(){},
aG:function aG(){},
P:function P(){},
ad:function ad(){},
cd:function cd(){},
bu:function bu(){},
aH:function aH(){},
l:function l(){},
cg:function cg(){},
b:function b(){},
bw:function bw(){},
bx:function bx(){},
aL:function aL(){},
at:function at(){},
bE:function bE(){},
R:function R(){},
y:function y(a){this.a=a},
e:function e(){},
aU:function aU(){},
ah:function ah(){},
ai:function ai(){},
aZ:function aZ(){},
bM:function bM(){},
bN:function bN(){},
ax:function ax(){},
M:function M(){},
b0:function b0(){},
az:function az(){},
b1:function b1(){},
b4:function b4(){},
bY:function bY(){},
bZ:function bZ(a){this.a=a},
al:function al(a){this.a=a},
Q:function Q(){},
aV:function aV(a){this.a=a},
cq:function cq(a){this.a=a},
cp:function cp(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(){},
cF:function cF(){},
cG:function cG(){},
c7:function c7(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
cH:function cH(){},
c6:function c6(){},
ae:function ae(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
c5:function c5(a,b){this.a=a
this.b=b},
bc:function bc(a){this.a=a
this.b=!1},
cK:function cK(a){this.a=a},
c3:function c3(){},
c4:function c4(){},
ca:function ca(){},
cb:function cb(){}},R={ch:function ch(a){this.a=a},ci:function ci(a){this.a=a}},F={
hp:function(){var t,s,r,q,p,o="cat",n="dog",m="number",l=u.D
$.j.J(0,o,H.p([],l))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(1,H.a($.k())+"/cat1"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(2,H.a($.k())+"/cat2"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(3,H.a($.k())+"/cat3"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(4,H.a($.k())+"/cat4"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(5,H.a($.k())+"/cat5"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(6,H.a($.k())+"/cat6"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(7,H.a($.k())+"/cat7"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(0,H.a($.k())+"/catempty"))
t=$.j.j(0,o);(t&&C.a).h(t,Y.n(0,H.a($.k())+"/cathasvalue"))
$.j.J(0,n,H.p([],l))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(1,H.a($.k())+"/dog1"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(2,H.a($.k())+"/dog2"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(3,H.a($.k())+"/dog3"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(4,H.a($.k())+"/dog4"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(5,H.a($.k())+"/dog5"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(6,H.a($.k())+"/dog6"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(7,H.a($.k())+"/dog7"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(0,H.a($.k())+"/dogempty"))
t=$.j.j(0,n);(t&&C.a).h(t,Y.n(0,H.a($.k())+"/doghasvalue"))
$.j.J(0,m,H.p([],l))
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
C.d.A(q,"Single")
t.appendChild(q)
q=l.createElement("option")
p.a(q)
q.value="multiple"
C.d.A(q,"Multiple")
t.appendChild(q)
C.q.X(t,"change",new F.d2(t,r))
q=l.body
if(q!=null)q.appendChild(t)
q=l.createElement("select")
s.a(q)
s=l.createElement("option")
p.a(s)
s.value=o
C.d.A(s,"Cat")
q.appendChild(s)
s=l.createElement("option")
p.a(s)
s.value=n
C.d.A(s,"Dog")
q.appendChild(s)
s=l.createElement("option")
p.a(s)
s.value=m
C.d.A(s,"Number")
q.appendChild(s)
s=l.body
if(s!=null)s.appendChild(q)
s=l.createElement("option")
p.a(s)
s.value="1"
C.d.A(s,"1")
r.appendChild(s)
s=l.createElement("option")
p.a(s)
s.value="2"
C.d.A(s,"2")
r.appendChild(s)
s=l.createElement("option")
p.a(s)
s.value="3"
C.d.A(s,"3")
r.appendChild(s)
s=l.body
if(s!=null)s.appendChild(r)
s=l.createElement("button")
u.I.a(s)
C.l.A(s,"Generate")
C.l.X(s,"click",new F.d3(t,q,r))
t=l.body
if(t!=null)t.appendChild(s)
t=l.body
if(t!=null){l=l.createElement("br")
t.appendChild(l)}},
ho:function(a,b){P.fc(new P.aI(30),new F.d1(a,b))},
h7:function(a,b){var t,s,r,q,p=a.a,o=b.getBoundingClientRect().left
o.toString
if(typeof p!=="number")return p.al()
t=a.b
s=b.getBoundingClientRect().top
s.toString
if(typeof t!=="number")return t.al()
s=t-s
r=new P.a2(p-o,s,u.a)
p=$.an.a
if(T.dy(r,new T.u(50,20,null,64,64*p.length))){o=$.bl
u.a3.a(r)
q=C.b.L(s-20,64)
window
if(typeof console!="undefined")window.console.log(q)
if(!!p.fixed$length)H.a7(P.bU("removeAt"))
if(q<0||q>=p.length)H.a7(P.ct(q,null))
o.a=p.splice(q,1)[0]}C.a.I($.bn,new F.cQ(r))
p=$.dA
if(p!=null&&T.dy(r,new T.u(500,100,null,100,100))){o=$.bl
p.a=o.a
o.a=null}},
h4:function(a,b,c){var t,s,r,q=null,p={},o=document,n=u.B,m=n.a(o.getElementById("canvas"))
p.a=m
if(m!=null)C.f.ae(m)
$.bm=b.value
t=o.createElement("canvas")
n.a(t)
p.a=t
t.id="canvas"
C.f.saV(t,640)
C.f.saN(t,480)
t.setAttribute("style","border: 1px solid #000; background: #FFF")
s=u.bJ.a(C.f.ah(t,"2d"))
o=o.body
if(o!=null)o.appendChild(t)
o=H.p([B.ay(1,new T.u(0,0,32,q,q)),B.ay(2,new T.u(0,0,32,q,q)),B.ay(3,new T.u(0,0,32,q,q)),B.ay(4,new T.u(0,0,32,q,q)),B.ay(5,new T.u(0,0,32,q,q)),B.ay(6,new T.u(0,0,32,q,q)),B.ay(7,new T.u(0,0,32,q,q))],u.U)
n=new R.ch(o)
n.ar(o)
$.an=n
$.bl=new E.cn()
n=$.bn=H.p([],u.E)
if(a.value==="multiple"){o=c.value
if(o==="1")C.a.h(n,new G.F(500,$.an.F()))
else{r=$.an
if(o==="2"){C.a.h(n,new G.F(500,r.F()))
C.a.h($.bn,new G.F(564,$.an.F()))}else{C.a.h(n,new G.F(500,r.F()))
C.a.h($.bn,new G.F(564,$.an.F()))
C.a.h($.bn,new G.F(628,$.an.F()))}}}else $.dA=new A.cu()
C.f.X(t,"click",new F.cO(p))
F.ho(s,a.value)},
d2:function d2(a,b){this.a=a
this.b=b},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b){this.a=a
this.b=b},
cQ:function cQ(a){this.a=a},
cO:function cO(a){this.a=a},
hs:function(a){C.a.I($.bn,new F.d5(a))},
d5:function d5(a){this.a=a}},E={cn:function cn(){this.a=null}},Y={
h6:function(){var t=$.bm
t=$.j.j(0,t)
return(t&&C.a).Y(t,new Y.cP())},
he:function(){var t=$.bm
t=$.j.j(0,t)
return(t&&C.a).Y(t,new Y.cW())},
hc:function(a){var t=$.bm
t=$.j.j(0,t)
return(t&&C.a).Y(t,new Y.cV(a))},
dz:function(a,b,c){var t=b.c
a.drawImage(Y.hc(c).c,b.a,b.b,t,t)},
ew:function(a,b){var t=b.c
a.drawImage(Y.h6().c,b.a,b.b,t,t)},
n:function(a,b){var t=new Y.a1(b,a),s=b+".png",r=document.createElement("img")
C.D.saj(r,s)
t.c=r
return t},
cP:function cP(){},
cW:function cW(){},
cV:function cV(a){this.a=a},
a1:function a1(a,b){this.a=a
this.b=b
this.c=null}},T={
dy:function(a,b){var t,s=a.a,r=b.a
if(typeof s!=="number")return s.ai()
if(s>r){t=b.d
if(typeof t!=="number")return H.dv(t)
if(s<r+t){s=a.b
r=b.b
if(typeof s!=="number")return s.ai()
if(s>r){t=b.e
if(typeof t!=="number")return H.dv(t)
t=s<r+t
s=t}else s=!1}else s=!1}else s=!1
return s},
u:function u(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},G={F:function F(a,b){this.a=a
this.b=b}},A={cu:function cu(){this.a=null}},B={
ay:function(a,b){var t=new B.G(b,a)
t.b=t.a=!1
return t},
G:function G(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=null
_.e=b}}
var w=[C,H,J,P,W,R,F,E,Y,T,G,A,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.db.prototype={}
J.z.prototype={
B:function(a,b){return a===b},
gl:function(a){return H.aW(a)},
i:function(a){return"Instance of '"+H.a(H.cs(a))+"'"}}
J.bz.prototype={
i:function(a){return String(a)},
gl:function(a){return a?519018:218159},
$it:1}
J.aN.prototype={
B:function(a,b){return null==b},
i:function(a){return"null"},
gl:function(a){return 0}}
J.a0.prototype={
gl:function(a){return 0},
i:function(a){return String(a)}}
J.bH.prototype={}
J.aj.prototype={}
J.T.prototype={
i:function(a){var t=a[$.eA()]
if(t==null)return this.ao(a)
return"JavaScript function for "+H.a(J.aD(t))},
$ias:1}
J.q.prototype={
h:function(a,b){H.am(a).c.a(b)
if(!!a.fixed$length)H.a7(P.bU("add"))
a.push(b)},
I:function(a,b){var t,s
H.am(a).k("~(1)").a(b)
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.f(P.ac(a))}},
Y:function(a,b){var t,s,r
H.am(a).k("t(1)").a(b)
t=a.length
for(s=0;s<t;++s){r=a[s]
if(H.cN(b.$1(r)))return r
if(a.length!==t)throw H.f(P.ac(a))}throw H.f(H.dN())},
H:function(a,b){if(b>=a.length)return H.v(a,b)
return a[b]},
ab:function(a,b){var t,s
H.am(a).k("t(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(H.cN(b.$1(a[s])))return!0
if(a.length!==t)throw H.f(P.ac(a))}return!1},
t:function(a,b){var t
for(t=0;t<a.length;++t)if(J.d6(a[t],b))return!0
return!1},
i:function(a){return P.da(a,"[","]")},
gu:function(a){return new J.aE(a,a.length,H.am(a).k("aE<1>"))},
gl:function(a){return H.aW(a)},
gm:function(a){return a.length},
j:function(a,b){if(!H.dp(b))throw H.f(H.dt(a,b))
if(b>=a.length||b<0)throw H.f(H.dt(a,b))
return a[b]},
$ii:1,
$iJ:1}
J.cj.prototype={}
J.aE.prototype={
gp:function(){return this.d},
n:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.f(H.dB(r))
t=s.c
if(t>=q){s.sa6(null)
return!1}s.sa6(r[t]);++s.c
return!0},
sa6:function(a){this.d=this.$ti.k("1?").a(a)},
$iA:1}
J.au.prototype={
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl:function(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
aq:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.aa(a,b)},
L:function(a,b){return(a|0)===a?a/b|0:this.aa(a,b)},
aa:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.f(P.bU("Result of truncating division is "+H.a(t)+": "+H.a(a)+" ~/ "+b))},
aG:function(a,b){var t
if(a>0)t=this.aF(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aF:function(a,b){return b>31?0:a>>>b},
$iN:1}
J.aM.prototype={$ibk:1}
J.bA.prototype={}
J.a_.prototype={
q:function(a,b){if(typeof b!="string")throw H.f(P.eT(b,null,null))
return a+b},
ak:function(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
aT:function(a){return a.toLowerCase()},
aQ:function(a,b){var t=a.length,s=b.length
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
$idV:1,
$ih:1}
H.bD.prototype={
i:function(a){var t=this.a
return t!=null?"LateInitializationError: "+t:"LateInitializationError"}}
H.aJ.prototype={}
H.U.prototype={
gu:function(a){var t=this
return new H.af(t,t.gm(t),t.$ti.k("af<U.E>"))},
N:function(a,b){return this.an(0,this.$ti.k("t(U.E)").a(b))}}
H.af.prototype={
gp:function(){return this.d},
n:function(){var t,s=this,r=s.a,q=J.du(r),p=q.gm(r)
if(s.b!==p)throw H.f(P.ac(r))
t=s.c
if(t>=p){s.sa0(null)
return!1}s.sa0(q.H(r,t));++s.c
return!0},
sa0:function(a){this.d=this.$ti.k("1?").a(a)},
$iA:1}
H.ag.prototype={
gm:function(a){return J.bq(this.a)},
H:function(a,b){return this.b.$1(J.eN(this.a,b))}}
H.ak.prototype={
gu:function(a){return new H.b_(J.bp(this.a),this.b,this.$ti.k("b_<1>"))}}
H.b_.prototype={
n:function(){var t,s
for(t=this.a,s=this.b;t.n();)if(H.cN(s.$1(t.gp())))return!0
return!1},
gp:function(){return this.a.gp()}}
H.cv.prototype={
w:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
H.bF.prototype={
i:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.a(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.bC.prototype={
i:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.a(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.a(s.a)+")"
return r+q+"' on '"+t+"' ("+H.a(s.a)+")"}}
H.bS.prototype={
i:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.cr.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.b7.prototype={
i:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$idZ:1}
H.ab.prototype={
i:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.ey(s==null?"unknown":s)+"'"},
$ias:1,
gaW:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bO.prototype={}
H.bK.prototype={
i:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.ey(t)+"'"}}
H.ar.prototype={
B:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.ar))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gl:function(a){var t,s=this.c
if(s==null)t=H.aW(this.a)
else t=typeof s!=="object"?J.aC(s):H.aW(s)
return(t^H.aW(this.b))>>>0},
i:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.a(H.cs(t))+"'")}}
H.bJ.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.bW.prototype={
i:function(a){return"Assertion failed: "+P.bv(this.a)}}
H.aO.prototype={
gm:function(a){return this.a},
gE:function(){return new H.aP(this,H.H(this).k("aP<1>"))},
j:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.T(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.T(q,b)
r=s==null?o:s.b
return r}else return p.aP(b)},
aP:function(a){var t,s,r=this.d
if(r==null)return null
t=this.a8(r,J.aC(a)&0x3ffffff)
s=this.ac(t,a)
if(s<0)return null
return t[s].b},
J:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.H(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.a1(t==null?n.b=n.U():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.a1(s==null?n.c=n.U():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.U()
q=J.aC(b)&0x3ffffff
p=n.a8(r,q)
if(p==null)n.W(r,q,[n.P(b,c)])
else{o=n.ac(p,b)
if(o>=0)p[o].b=c
else p.push(n.P(b,c))}}},
I:function(a,b){var t,s,r=this
H.H(r).k("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.f(P.ac(r))
t=t.c}},
a1:function(a,b,c){var t,s=this,r=H.H(s)
r.c.a(b)
r.Q[1].a(c)
t=s.T(a,b)
if(t==null)s.W(a,b,s.P(b,c))
else t.b=c},
aC:function(){this.r=this.r+1&67108863},
P:function(a,b){var t=this,s=H.H(t),r=new H.ck(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else{s=t.f
s.toString
r.d=s
t.f=s.c=r}++t.a
t.aC()
return r},
ac:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.d6(a[s].a,b))return s
return-1},
i:function(a){return P.dT(this)},
T:function(a,b){return a[b]},
a8:function(a,b){return a[b]},
W:function(a,b,c){a[b]=c},
aA:function(a,b){delete a[b]},
U:function(){var t="<non-identifier-key>",s=Object.create(null)
this.W(s,t,s)
this.aA(s,t)
return s}}
H.ck.prototype={}
H.aP.prototype={
gm:function(a){return this.a.a},
gu:function(a){var t=this.a,s=new H.aQ(t,t.r,this.$ti.k("aQ<1>"))
s.c=t.e
return s}}
H.aQ.prototype={
gp:function(){return this.d},
n:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.f(P.ac(r))
t=s.c
if(t==null){s.sa2(null)
return!1}else{s.sa2(t.a)
s.c=t.c
return!0}},
sa2:function(a){this.d=this.$ti.k("1?").a(a)},
$iA:1}
H.cX.prototype={
$1:function(a){return this.a(a)},
$S:10}
H.cY.prototype={
$2:function(a,b){return this.a(a,b)},
$S:11}
H.cZ.prototype={
$1:function(a){return this.a(H.D(a))},
$S:12}
H.L.prototype={
k:function(a){return H.c9(v.typeUniverse,this,a)},
ay:function(a){return H.fz(v.typeUniverse,this,a)}}
H.c0.prototype={}
H.c_.prototype={
i:function(a){return this.a}}
H.b9.prototype={}
P.cy.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:13}
P.cx.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:14}
P.cz.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cA.prototype={
$0:function(){this.a.$0()},
$S:0}
P.b8.prototype={
au:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bi(new P.cJ(this,b),0),a)
else throw H.f(P.bU("`setTimeout()` not found."))},
av:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bi(new P.cI(this,a,Date.now(),b),0),a)
else throw H.f(P.bU("Periodic timer."))},
$ibP:1}
P.cJ.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.cI.prototype={
$0:function(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=C.e.aq(t,p)}r.c=q
s.d.$1(r)},
$S:0}
P.bX.prototype={}
P.cL.prototype={}
P.cM.prototype={
$0:function(){var t=H.f(this.a)
t.stack=J.aD(this.b)
throw t},
$S:1}
P.cD.prototype={
aR:function(a,b,c){var t,s,r,q=null
c.k("~(0)").a(a)
c.a(b)
try{if(C.h===$.bV){a.$1(b)
return}P.fT(q,q,this,a,b,u.H,c)}catch(r){t=H.bo(r)
s=H.hd(r)
P.fS(q,q,this,t,u.l.a(s))}},
aJ:function(a,b){return new P.cE(this,b.k("~(0)").a(a),b)}}
P.cE.prototype={
$1:function(a){var t=this.c
return this.a.aR(this.b,t.a(a),t)},
$S:function(){return this.c.k("~(0)")}}
P.X.prototype={
gu:function(a){var t=this,s=new P.b2(t,t.r,H.H(t).k("b2<1>"))
s.c=t.e
return s},
gm:function(a){return this.a},
t:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.O.a(t[b])!=null}else{s=this.az(b)
return s}},
az:function(a){var t=this.d
if(t==null)return!1
return this.a7(t[this.a5(a)],a)>=0},
h:function(a,b){var t,s,r=this
H.H(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.a3(t==null?r.b=P.df():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.a3(s==null?r.c=P.df():s,b)}else return r.aw(b)},
aw:function(a){var t,s,r,q=this
H.H(q).c.a(a)
t=q.d
if(t==null)t=q.d=P.df()
s=q.a5(a)
r=t[s]
if(r==null)t[s]=[q.V(a)]
else{if(q.a7(r,a)>=0)return!1
r.push(q.V(a))}return!0},
a3:function(a,b){H.H(this).c.a(b)
if(u.O.a(a[b])!=null)return!1
a[b]=this.V(b)
return!0},
V:function(a){var t=this,s=new P.c2(H.H(t).c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
a5:function(a){return J.aC(a)&1073741823},
a7:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.d6(a[s].a,b))return s
return-1},
$idQ:1}
P.c2.prototype={}
P.b2.prototype={
gp:function(){return this.d},
n:function(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw H.f(P.ac(r))
else if(s==null){t.sa4(null)
return!1}else{t.sa4(t.$ti.k("1?").a(s.a))
t.c=s.b
return!0}},
sa4:function(a){this.d=this.$ti.k("1?").a(a)},
$iA:1}
P.aR.prototype={$ii:1,$iJ:1}
P.w.prototype={
gu:function(a){return new H.af(a,this.gm(a),H.a6(a).k("af<w.E>"))},
H:function(a,b){return this.j(a,b)},
i:function(a){return P.da(a,"[","]")}}
P.aT.prototype={}
P.co.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.a(a)
s.a=t+": "
s.a+=H.a(b)},
$S:15}
P.B.prototype={
I:function(a,b){var t,s
H.H(this).k("~(B.K,B.V)").a(b)
for(t=J.bp(this.gE());t.n();){s=t.gp()
b.$2(s,this.j(0,s))}},
gm:function(a){return J.bq(this.gE())},
i:function(a){return P.dT(this)},
$iaS:1}
P.aX.prototype={
C:function(a,b){var t
for(t=J.bp(H.H(this).k("i<1>").a(b));t.n();)this.h(0,t.gp())},
i:function(a){return P.da(this,"{","}")}}
P.b5.prototype={$ii:1,$iV:1}
P.b3.prototype={}
P.bd.prototype={}
P.aI.prototype={
B:function(a,b){if(b==null)return!1
return b instanceof P.aI&&this.a===b.a},
gl:function(a){return C.e.gl(this.a)},
i:function(a){var t,s,r,q=new P.cf(),p=this.a
if(p<0)return"-"+new P.aI(0-p).i(0)
t=q.$1(C.e.L(p,6e7)%60)
s=q.$1(C.e.L(p,1e6)%60)
r=new P.ce().$1(p%1e6)
return""+C.e.L(p,36e8)+":"+H.a(t)+":"+H.a(s)+"."+H.a(r)}}
P.ce.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:4}
P.cf.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:4}
P.o.prototype={}
P.aF.prototype={
i:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.bv(t)
return"Assertion failed"}}
P.bQ.prototype={}
P.bG.prototype={
i:function(a){return"Throw of null."}}
P.O.prototype={
gS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gR:function(){return""},
i:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gS()+p+n
if(!r.a)return m
t=r.gR()
s=P.bv(r.b)
return m+t+": "+s}}
P.bI.prototype={
gS:function(){return"RangeError"},
gR:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.a(r):""
else if(r==null)t=": Not greater than or equal to "+H.a(s)
else if(r>s)t=": Not in inclusive range "+H.a(s)+".."+H.a(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.a(s)
return t}}
P.by.prototype={
gS:function(){return"RangeError"},
gR:function(){var t,s=H.dl(this.b)
if(typeof s!=="number")return s.aX()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.a(t)},
gm:function(a){return this.f}}
P.bT.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.bR.prototype={
i:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aw.prototype={
i:function(a){return"Bad state: "+this.a}}
P.bs.prototype={
i:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bv(t)+"."}}
P.aY.prototype={
i:function(a){return"Stack Overflow"},
$io:1}
P.bt.prototype={
i:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.cB.prototype={
i:function(a){return"Exception: "+this.a}}
P.i.prototype={
N:function(a,b){var t=H.H(this)
return new H.ak(this,t.k("t(i.E)").a(b),t.k("ak<i.E>"))},
gm:function(a){var t,s=this.gu(this)
for(t=0;s.n();)++t
return t},
i:function(a){return P.f3(this,"(",")")}}
P.A.prototype={}
P.x.prototype={
gl:function(a){return P.m.prototype.gl.call(C.F,this)},
i:function(a){return"null"}}
P.m.prototype={constructor:P.m,$im:1,
B:function(a,b){return this===b},
gl:function(a){return H.aW(this)},
i:function(a){return"Instance of '"+H.a(H.cs(this))+"'"},
toString:function(){return this.i(this)}}
P.bL.prototype={
gm:function(a){return this.a.length},
i:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.d.prototype={}
W.ap.prototype={
saO:function(a,b){a.href=b},
i:function(a){return String(a)},
$iap:1}
W.br.prototype={
i:function(a){return String(a)}}
W.aq.prototype={$iaq:1}
W.a8.prototype={$ia8:1}
W.a9.prototype={$ia9:1}
W.aa.prototype={
saN:function(a,b){a.height=b},
saV:function(a,b){a.width=b},
ah:function(a,b){return a.getContext(b)},
$iaa:1}
W.aG.prototype={$iaG:1}
W.P.prototype={
gm:function(a){return a.length}}
W.ad.prototype={}
W.cd.prototype={
i:function(a){return String(a)}}
W.bu.prototype={
aM:function(a,b){return a.createHTMLDocument(b)}}
W.aH.prototype={
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
return W.e7(q,t,s,C.b.gl(r))},
$idd:1}
W.l.prototype={
gaI:function(a){return new W.bZ(a)},
i:function(a){return a.localName},
v:function(a,b,c,d){var t,s,r,q
if(c==null){t=$.dL
if(t==null){t=H.p([],u.Q)
s=new W.aV(t)
C.a.h(t,W.e5(null))
C.a.h(t,W.eb())
$.dL=s
d=s}else d=t
t=$.dK
if(t==null){t=new W.bc(d)
$.dK=t
c=t}else{t.a=d
c=t}}if($.Z==null){t=document
s=t.implementation
s.toString
s=C.B.aM(s,"")
$.Z=s
$.d8=s.createRange()
s=$.Z.createElement("base")
u.y.a(s)
t=t.baseURI
t.toString
s.href=t
$.Z.head.appendChild(s)}t=$.Z
if(t.body==null){s=t.createElement("body")
C.C.saK(t,u.t.a(s))}t=$.Z
if(u.t.b(a)){t=t.body
t.toString
r=t}else{t.toString
r=t.createElement(a.tagName)
$.Z.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.t(C.I,a.tagName)){$.d8.selectNodeContents(r)
t=$.d8
q=t.createContextualFragment(b)}else{J.eQ(r,b)
q=$.Z.createDocumentFragment()
for(;t=r.firstChild,t!=null;)q.appendChild(t)}if(r!==$.Z.body)J.dE(r)
c.a_(q)
document.adoptNode(q)
return q},
aL:function(a,b,c){return this.v(a,b,c,null)},
A:function(a,b){this.saS(a,null)
a.appendChild(this.v(a,b,null,null))},
saB:function(a,b){a.innerHTML=b},
gag:function(a){return a.tagName},
$il:1}
W.cg.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:16}
W.b.prototype={$ib:1}
W.bw.prototype={
X:function(a,b,c){this.ax(a,b,u.o.a(c),null)},
ax:function(a,b,c,d){return a.addEventListener(b,H.bi(u.o.a(c),1),d)}}
W.bx.prototype={
gm:function(a){return a.length}}
W.aL.prototype={
saK:function(a,b){a.body=b}}
W.at.prototype={
saj:function(a,b){a.src=b},
$iat:1}
W.bE.prototype={
i:function(a){return String(a)},
$ibE:1}
W.R.prototype={$iR:1}
W.y.prototype={
gM:function(a){var t=this.a,s=t.childNodes.length
if(s===0)throw H.f(P.de("No elements"))
if(s>1)throw H.f(P.de("More than one element"))
t=t.firstChild
t.toString
return t},
C:function(a,b){var t,s,r,q,p
u.J.a(b)
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q){p=t.firstChild
p.toString
s.appendChild(p)}return},
gu:function(a){var t=this.a.childNodes
return new W.ae(t,t.length,H.a6(t).k("ae<Q.E>"))},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var t=this.a.childNodes
if(b<0||b>=t.length)return H.v(t,b)
return t[b]}}
W.e.prototype={
ae:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
i:function(a){var t=a.nodeValue
return t==null?this.am(a):t},
saS:function(a,b){a.textContent=b},
$ie:1}
W.aU.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.d9(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b>=a.length)return H.v(a,b)
return a[b]},
$ibB:1,
$ii:1,
$iJ:1}
W.ah.prototype={$iah:1}
W.ai.prototype={
gm:function(a){return a.length},
saU:function(a,b){a.value=b},
$iai:1}
W.aZ.prototype={
v:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.O(a,b,c,d)
t=W.f1("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.y(s).C(0,new W.y(t))
return s}}
W.bM.prototype={
v:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.O(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.r.v(t.createElement("table"),b,c,d)
t.toString
t=new W.y(t)
r=t.gM(t)
r.toString
t=new W.y(r)
q=t.gM(t)
s.toString
q.toString
new W.y(s).C(0,new W.y(q))
return s}}
W.bN.prototype={
v:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.O(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.r.v(t.createElement("table"),b,c,d)
t.toString
t=new W.y(t)
r=t.gM(t)
s.toString
r.toString
new W.y(s).C(0,new W.y(r))
return s}}
W.ax.prototype={$iax:1}
W.M.prototype={}
W.b0.prototype={
gad:function(a){return a.location}}
W.az.prototype={$iaz:1}
W.b1.prototype={
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
return W.e7(q,t,s,C.b.gl(r))}}
W.b4.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.d9(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b>=a.length)return H.v(a,b)
return a[b]},
$ibB:1,
$ii:1,
$iJ:1}
W.bY.prototype={
I:function(a,b){var t,s,r,q,p
u.aa.a(b)
for(t=this.gE(),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.dB)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gE:function(){var t,s,r,q,p,o,n=this.a.attributes
n.toString
t=H.p([],u.s)
for(s=n.length,r=u.x,q=0;q<s;++q){if(q>=n.length)return H.v(n,q)
p=r.a(n[q])
if(p.namespaceURI==null){o=p.name
o.toString
C.a.h(t,o)}}return t}}
W.bZ.prototype={
j:function(a,b){return this.a.getAttribute(H.D(b))},
gm:function(a){return this.gE().length}}
W.al.prototype={
as:function(a){var t
if($.c1.a===0){for(t=0;t<262;++t)$.c1.J(0,C.H[t],W.hf())
for(t=0;t<12;++t)$.c1.J(0,C.i[t],W.hg())}},
G:function(a){return $.eL().t(0,W.aK(a))},
D:function(a,b,c){var t=$.c1.j(0,H.a(W.aK(a))+"::"+b)
if(t==null)t=$.c1.j(0,"*::"+b)
if(t==null)return!1
return H.fB(t.$4(a,b,c,this))},
$iK:1}
W.Q.prototype={
gu:function(a){return new W.ae(a,this.gm(a),H.a6(a).k("ae<Q.E>"))}}
W.aV.prototype={
G:function(a){return C.a.ab(this.a,new W.cq(a))},
D:function(a,b,c){return C.a.ab(this.a,new W.cp(a,b,c))},
$iK:1}
W.cq.prototype={
$1:function(a){return u.e.a(a).G(this.a)},
$S:5}
W.cp.prototype={
$1:function(a){return u.e.a(a).D(this.a,this.b,this.c)},
$S:5}
W.b6.prototype={
at:function(a,b,c,d){var t,s,r
this.a.C(0,c)
t=b.N(0,new W.cF())
s=b.N(0,new W.cG())
this.b.C(0,t)
r=this.c
r.C(0,C.J)
r.C(0,s)},
G:function(a){return this.a.t(0,W.aK(a))},
D:function(a,b,c){var t=this,s=W.aK(a),r=t.c
if(r.t(0,H.a(s)+"::"+b))return t.d.aH(c)
else if(r.t(0,"*::"+b))return t.d.aH(c)
else{r=t.b
if(r.t(0,H.a(s)+"::"+b))return!0
else if(r.t(0,"*::"+b))return!0
else if(r.t(0,H.a(s)+"::*"))return!0
else if(r.t(0,"*::*"))return!0}return!1},
$iK:1}
W.cF.prototype={
$1:function(a){return!C.a.t(C.i,H.D(a))},
$S:6}
W.cG.prototype={
$1:function(a){return C.a.t(C.i,H.D(a))},
$S:6}
W.c7.prototype={
D:function(a,b,c){if(this.ap(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.t(0,b)
return!1}}
W.cH.prototype={
$1:function(a){return"TEMPLATE::"+H.a(H.D(a))},
$S:17}
W.c6.prototype={
G:function(a){var t
if(u.Y.b(a))return!1
t=u.v.b(a)
if(t&&W.aK(a)==="foreignObject")return!1
if(t)return!0
return!1},
D:function(a,b,c){if(b==="is"||C.c.ak(b,"on"))return!1
return this.G(a)},
$iK:1}
W.ae.prototype={
n:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.sa9(J.eM(t.a,s))
t.c=s
return!0}t.sa9(null)
t.c=r
return!1},
gp:function(){return this.d},
sa9:function(a){this.d=this.$ti.k("1?").a(a)},
$iA:1}
W.c5.prototype={$ifd:1}
W.bc.prototype={
a_:function(a){var t=this,s=new W.cK(t)
t.b=!1
s.$2(a,null)
for(;t.b;){t.b=!1
s.$2(a,null)}},
K:function(a,b){var t=this.b=!0
if(b!=null?b!==a.parentNode:t)J.dE(a)
else b.removeChild(a)},
aE:function(a,b){var t,s,r,q,p,o=!0,n=null,m=null
try{n=J.eO(a)
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
o=H.cN(t)?!0:!(a.attributes instanceof NamedNodeMap)}catch(q){H.bo(q)}s="element unprintable"
try{s=J.aD(a)}catch(q){H.bo(q)}try{r=W.aK(a)
this.aD(u.h.a(a),b,o,s,r,u.V.a(n),H.eh(m))}catch(q){if(H.bo(q) instanceof P.O)throw q
else{this.K(a,b)
window
p="Removing corrupted element "+H.a(s)
if(typeof console!="undefined")window.console.warn(p)}}},
aD:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n=this
if(c){n.K(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!n.a.G(a)){n.K(a,b)
window
t="Removing disallowed element <"+H.a(e)+"> from "+H.a(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!n.a.D(a,"is",g)){n.K(a,b)
window
t="Removing disallowed type extension <"+H.a(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gE()
s=H.p(t.slice(0),H.am(t))
for(r=f.gE().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.v(s,r)
q=s[r]
p=n.a
o=J.eR(q)
H.D(q)
if(!p.D(a,o,t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.a(e)+" "+q+'="'+H.a(t.getAttribute(q))+'">'
if(typeof console!="undefined")window.console.warn(p)
t.removeAttribute(q)}}if(u.d.b(a)){t=a.content
t.toString
n.a_(t)}},
$if8:1}
W.cK.prototype={
$2:function(a,b){var t,s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.aE(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.K(a,b)}t=a.lastChild
for(r=u.A;null!=t;){s=null
try{s=t.previousSibling
if(s!=null){q=s.nextSibling
p=t
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.de("Corrupt HTML")
throw H.f(q)}}catch(o){H.bo(o)
q=r.a(t)
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:18}
W.c3.prototype={}
W.c4.prototype={}
W.ca.prototype={}
W.cb.prototype={}
P.a2.prototype={
i:function(a){return"Point("+H.a(this.a)+", "+H.a(this.b)+")"},
B:function(a,b){if(b==null)return!1
return b instanceof P.a2&&this.a==b.a&&this.b==b.b},
gl:function(a){var t=J.aC(this.a),s=J.aC(this.b),r=H.e0(H.e0(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911}}
P.av.prototype={$iav:1}
P.c.prototype={
v:function(a,b,c,d){var t,s,r,q,p,o=H.p([],u.Q)
C.a.h(o,W.e5(null))
C.a.h(o,W.eb())
C.a.h(o,new W.c6())
c=new W.bc(new W.aV(o))
t='<svg version="1.1">'+b+"</svg>"
o=document
s=o.body
s.toString
r=C.k.aL(s,t,c)
q=o.createDocumentFragment()
r.toString
o=new W.y(r)
p=o.gM(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
$ic:1}
R.ch.prototype={
ar:function(a){var t,s
for(t=this.a,s=0;s<t.length;++s)t[s].d=s},
Z:function(a){var t,s
for(t=this.a,s=0;s<t.length;++s){a.save()
if(s>=t.length)return H.v(t,s)
t[s].af(a,50,20+s*64)
a.restore()}},
F:function(){var t=P.dS(this.a,!0,u.m),s=H.am(t),r=s.k("ag<1,G*>")
return P.dS(new H.ag(t,s.k("G*(1)").a(new R.ci(this)),r),!0,r.k("U.E"))}}
R.ci.prototype={
$1:function(a){var t
u.m.a(a)
t=new B.G(null,null)
t.c=a.c
t.e=a.e
t.b=t.a=!0
return t},
$S:19}
F.d2.prototype={
$1:function(a){var t,s
u.L.a(a)
t=P.f6(u.bf)
s=this.b
if(this.a.value==="single"){s.disabled=!0
C.q.saU(s,"1")
t.h(0,P.cm([!0,"1"],u._))}else{s.disabled=!1
t.h(0,P.cm([!1],u.c5))}return t},
$S:20}
F.d3.prototype={
$1:function(a){u.L.a(a)
return P.cm([F.h4(this.a,this.b,this.c)],u.H)},
$S:7}
F.d1.prototype={
$1:function(a){var t,s=null,r=this.a
r.clearRect(0,0,640,480)
t=$.bl.a
if(t!=null)Y.dz(r,new T.u(200,200,200,s,s),t.e)
$.an.Z(r)
if(this.b==="single"){t=$.dA.a
if(t!=null)Y.dz(r,new T.u(500,100,100,s,s),t.e)
else Y.ew(r,new T.u(500,100,100,s,s))}else F.hs(r)},
$S:21}
F.cQ.prototype={
$1:function(a){var t,s
u.b.a(a)
t=a.a
s=a.b
if(T.dy(this.a,new T.u(t,20,null,64,64*s.length))){t=$.bl.a
if(t!=null){C.a.j(s,t.d).a=!1
$.bl.a=null}}},
$S:8}
F.cO.prototype={
$1:function(a){a=u.bE.a(u.L.a(a))
return P.cm([F.h7(new P.a2(a.clientX,a.clientY,u.r),this.a.a)],u.H)},
$S:7}
E.cn.prototype={}
Y.cP.prototype={
$1:function(a){return u.c.a(a).a===C.c.q(H.a($.k())+"/",$.bm)+"empty"},
$S:2}
Y.cW.prototype={
$1:function(a){return u.c.a(a).a===C.c.q(H.a($.k())+"/",$.bm)+"hasvalue"},
$S:2}
Y.cV.prototype={
$1:function(a){return u.c.a(a).b===this.a},
$S:2}
Y.a1.prototype={}
T.u.prototype={}
F.d5.prototype={
$1:function(a){u.b.a(a).Z(this.a)},
$S:8}
G.F.prototype={
Z:function(a){var t,s,r
for(t=this.b,s=this.a,r=0;r<t.length;++r){a.save()
if(r>=t.length)return H.v(t,r)
t[r].af(a,s,20+r*64)
a.restore()}}}
A.cu.prototype={}
B.G.prototype={
af:function(a,b,c){var t=null
if(!this.a)if(this.b)Y.dz(a,new T.u(b,c,64,t,t),this.e)
else a.drawImage(Y.he().c,b,c,64,64)
else Y.ew(a,new T.u(b,c,64,t,t))}};(function aliases(){var t=J.z.prototype
t.am=t.i
t=J.a0.prototype
t.ao=t.i
t=P.i.prototype
t.an=t.N
t=W.l.prototype
t.O=t.v
t=W.b6.prototype
t.ap=t.D})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff
t(P,"h1","ff",3)
t(P,"h2","fg",3)
t(P,"h3","fh",3)
s(P,"eo","fW",1)
r(W,"hf",4,null,["$4"],["fi"],9,0)
r(W,"hg",4,null,["$4"],["fj"],9,0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.m,null)
r(P.m,[H.db,J.z,J.aE,P.o,P.i,H.af,P.A,H.cv,H.cr,H.b7,H.ab,P.B,H.ck,H.aQ,H.L,H.c0,P.b8,P.bX,P.cL,P.bd,P.c2,P.b2,P.b3,P.w,P.aX,P.aI,P.aY,P.cB,P.x,P.bL,W.al,W.Q,W.aV,W.b6,W.c6,W.ae,W.c5,W.bc,P.a2,R.ch,E.cn,Y.a1,T.u,G.F,A.cu,B.G])
r(J.z,[J.bz,J.aN,J.a0,J.q,J.au,J.a_,W.bw,W.aG,W.cd,W.bu,W.aH,W.b,W.bE,W.c3,W.ca])
r(J.a0,[J.bH,J.aj,J.T])
s(J.cj,J.q)
r(J.au,[J.aM,J.bA])
r(P.o,[H.bD,P.bQ,H.bC,H.bS,H.bJ,P.aF,H.c_,P.bG,P.O,P.bT,P.bR,P.aw,P.bs,P.bt])
r(P.i,[H.aJ,H.ak])
r(H.aJ,[H.U,H.aP])
s(H.ag,H.U)
s(H.b_,P.A)
s(H.bF,P.bQ)
r(H.ab,[H.bO,H.cX,H.cY,H.cZ,P.cy,P.cx,P.cz,P.cA,P.cJ,P.cI,P.cM,P.cE,P.co,P.ce,P.cf,W.cg,W.cq,W.cp,W.cF,W.cG,W.cH,W.cK,R.ci,F.d2,F.d3,F.d1,F.cQ,F.cO,Y.cP,Y.cW,Y.cV,F.d5])
r(H.bO,[H.bK,H.ar])
s(H.bW,P.aF)
s(P.aT,P.B)
r(P.aT,[H.aO,W.bY])
s(H.b9,H.c_)
s(P.cD,P.cL)
s(P.b5,P.bd)
s(P.X,P.b5)
s(P.aR,P.b3)
r(P.O,[P.bI,P.by])
r(W.bw,[W.e,W.b0])
r(W.e,[W.l,W.P,W.ad,W.az])
r(W.l,[W.d,P.c])
r(W.d,[W.ap,W.br,W.aq,W.a8,W.a9,W.aa,W.bx,W.at,W.ah,W.ai,W.aZ,W.bM,W.bN,W.ax])
s(W.aL,W.ad)
s(W.M,W.b)
s(W.R,W.M)
s(W.y,P.aR)
s(W.c4,W.c3)
s(W.aU,W.c4)
s(W.b1,W.aH)
s(W.cb,W.ca)
s(W.b4,W.cb)
s(W.bZ,W.bY)
s(W.c7,W.b6)
s(P.av,P.c)
t(P.b3,P.w)
t(P.bd,P.aX)
t(W.c3,P.w)
t(W.c4,W.Q)
t(W.ca,P.w)
t(W.cb,W.Q)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{bk:"int",h8:"double",N:"num",h:"String",t:"bool",x:"Null",J:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["x()","~()","t*(a1*)","~(~())","h(bk)","t(K)","t(h)","V<~>*(b*)","x(F*)","t(l,h,h,al)","@(@)","@(@,h)","@(h)","x(@)","x(~())","~(m?,m?)","t(e)","h(h)","~(e,e?)","G*(G*)","V<V<m*>*>*(b*)","x(bP*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.fy(v.typeUniverse,JSON.parse('{"bH":"a0","aj":"a0","T":"a0","hx":"b","hD":"b","hw":"c","hE":"c","hy":"d","hF":"d","hH":"e","hC":"e","hT":"ad","hG":"R","hA":"M","hz":"P","hI":"P","bz":{"t":[]},"a0":{"as":[]},"q":{"J":["1"],"i":["1"]},"cj":{"q":["1"],"J":["1"],"i":["1"]},"aE":{"A":["1"]},"au":{"N":[]},"aM":{"bk":[],"N":[]},"bA":{"N":[]},"a_":{"h":[],"dV":[]},"bD":{"o":[]},"aJ":{"i":["1"]},"U":{"i":["1"]},"af":{"A":["1"]},"ag":{"U":["2"],"i":["2"],"U.E":"2","i.E":"2"},"ak":{"i":["1"],"i.E":"1"},"b_":{"A":["1"]},"bF":{"o":[]},"bC":{"o":[]},"bS":{"o":[]},"b7":{"dZ":[]},"ab":{"as":[]},"bO":{"as":[]},"bK":{"as":[]},"ar":{"as":[]},"bJ":{"o":[]},"bW":{"o":[]},"aO":{"B":["1","2"],"aS":["1","2"],"B.K":"1","B.V":"2"},"aP":{"i":["1"],"i.E":"1"},"aQ":{"A":["1"]},"c_":{"o":[]},"b9":{"o":[]},"b8":{"bP":[]},"X":{"aX":["1"],"dQ":["1"],"V":["1"],"i":["1"]},"b2":{"A":["1"]},"aR":{"w":["1"],"J":["1"],"i":["1"]},"aT":{"B":["1","2"],"aS":["1","2"]},"B":{"aS":["1","2"]},"b5":{"aX":["1"],"V":["1"],"i":["1"]},"bk":{"N":[]},"J":{"i":["1"]},"V":{"i":["1"]},"h":{"dV":[]},"aF":{"o":[]},"bQ":{"o":[]},"bG":{"o":[]},"O":{"o":[]},"bI":{"o":[]},"by":{"o":[]},"bT":{"o":[]},"bR":{"o":[]},"aw":{"o":[]},"bs":{"o":[]},"aY":{"o":[]},"bt":{"o":[]},"d":{"l":[],"e":[]},"ap":{"l":[],"e":[]},"br":{"l":[],"e":[]},"aq":{"l":[],"e":[]},"a8":{"l":[],"e":[]},"a9":{"l":[],"e":[]},"aa":{"l":[],"e":[]},"P":{"e":[]},"ad":{"e":[]},"aH":{"dd":["N"]},"l":{"e":[]},"bx":{"l":[],"e":[]},"aL":{"e":[]},"at":{"l":[],"e":[]},"R":{"b":[]},"y":{"w":["e"],"J":["e"],"i":["e"],"w.E":"e"},"aU":{"w":["e"],"Q":["e"],"J":["e"],"bB":["e"],"i":["e"],"w.E":"e","Q.E":"e"},"ah":{"l":[],"e":[]},"ai":{"l":[],"e":[]},"aZ":{"l":[],"e":[]},"bM":{"l":[],"e":[]},"bN":{"l":[],"e":[]},"ax":{"l":[],"e":[]},"M":{"b":[]},"az":{"e":[]},"b1":{"dd":["N"]},"b4":{"w":["e"],"Q":["e"],"J":["e"],"bB":["e"],"i":["e"],"w.E":"e","Q.E":"e"},"bY":{"B":["h","h"],"aS":["h","h"]},"bZ":{"B":["h","h"],"aS":["h","h"],"B.K":"h","B.V":"h"},"al":{"K":[]},"aV":{"K":[]},"b6":{"K":[]},"c7":{"K":[]},"c6":{"K":[]},"ae":{"A":["1"]},"c5":{"fd":[]},"bc":{"f8":[]},"av":{"c":[],"l":[],"e":[]},"c":{"l":[],"e":[]}}'))
H.fx(v.typeUniverse,JSON.parse('{"aJ":1,"aR":1,"aT":2,"b5":1,"b3":1,"bd":1}'))
0
var u=(function rtii(){var t=H.cS
return{y:t("aq"),t:t("a8"),h:t("l"),C:t("o"),Z:t("as"),J:t("i<e>"),R:t("i<@>"),Q:t("q<K>"),s:t("q<h>"),n:t("q<@>"),D:t("q<a1*>"),E:t("q<F*>"),i:t("q<h*>"),U:t("q<G*>"),T:t("aN"),g:t("T"),p:t("bB<@>"),V:t("aS<@,@>"),W:t("ag<h*,h>"),A:t("e"),e:t("K"),P:t("x"),K:t("m"),a:t("a2<N*>"),r:t("a2<N>"),q:t("dd<N>"),Y:t("av"),l:t("dZ"),N:t("h"),u:t("h(h*)"),v:t("c"),d:t("ax"),j:t("bP"),z:t("aj"),x:t("az"),k:t("y"),f:t("al"),w:t("t"),cb:t("h8"),S:t("bk"),I:t("a9*"),B:t("aa*"),bJ:t("aG*"),L:t("b*"),bE:t("R*"),G:t("0&*"),_:t("m*"),aq:t("ah*"),c:t("a1*"),a3:t("a2<N>*"),b:t("F*"),ak:t("ai*"),bf:t("V<m*>*"),m:t("G*"),c5:t("t*"),bc:t("dM<x>?"),X:t("m?"),O:t("c2?"),o:t("@(b)?"),cY:t("N"),H:t("~"),M:t("~()"),aa:t("~(h,h)"),F:t("~(bP)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.u=W.ap.prototype
C.k=W.a8.prototype
C.l=W.a9.prototype
C.f=W.aa.prototype
C.B=W.bu.prototype
C.C=W.aL.prototype
C.D=W.at.prototype
C.E=J.z.prototype
C.a=J.q.prototype
C.e=J.aM.prototype
C.F=J.aN.prototype
C.b=J.au.prototype
C.c=J.a_.prototype
C.G=J.T.prototype
C.d=W.ah.prototype
C.p=J.bH.prototype
C.q=W.ai.prototype
C.r=W.aZ.prototype
C.j=J.aj.prototype
C.t=W.b0.prototype
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

C.h=new P.cD()
C.H=H.p(t(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),u.i)
C.I=H.p(t(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),u.i)
C.J=H.p(t([]),u.i)
C.o=H.p(t(["bind","if","ref","repeat","syntax"]),u.i)
C.i=H.p(t(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),u.i)})();(function staticFields(){$.e6=null
$.S=0
$.dH=null
$.dG=null
$.er=null
$.em=null
$.ev=null
$.cR=null
$.d_=null
$.dw=null
$.aA=null
$.bf=null
$.bg=null
$.dn=!1
$.bV=C.h
$.E=H.p([],H.cS("q<m>"))
$.Z=null
$.d8=null
$.dL=null
$.dK=null
$.c1=P.dP(u.N,u.Z)
$.an=null
$.bl=null
$.bm="cat"
$.j=P.dP(H.cS("h*"),H.cS("J<a1*>*"))
$.bn=H.p([],u.E)
$.dA=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazyOld
t($,"hB","eA",function(){return H.hb("_$dart_dartClosure")})
t($,"hJ","eB",function(){return H.W(H.cw({
toString:function(){return"$receiver$"}}))})
t($,"hK","eC",function(){return H.W(H.cw({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"hL","eD",function(){return H.W(H.cw(null))})
t($,"hM","eE",function(){return H.W(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"hP","eH",function(){return H.W(H.cw(void 0))})
t($,"hQ","eI",function(){return H.W(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"hO","eG",function(){return H.W(H.e2(null))})
t($,"hN","eF",function(){return H.W(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"hS","eK",function(){return H.W(H.e2(void 0))})
t($,"hR","eJ",function(){return H.W(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"hU","dC",function(){return P.fe()})
t($,"hV","eL",function(){return P.dR(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],u.N)})
s($,"i8","k",function(){var r=C.t.gad(W.ez()).href,q=J.eP(C.t.gad(W.ez()).href,"/")
r.toString
if(0>q)H.a7(P.ct(0,null))
if(q>r.length)H.a7(P.ct(q,null))
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.z,MediaError:J.z,NavigatorUserMediaError:J.z,OverconstrainedError:J.z,PositionError:J.z,Range:J.z,WebGLRenderingContext:J.z,WebGL2RenderingContext:J.z,SQLError:J.z,HTMLAudioElement:W.d,HTMLBRElement:W.d,HTMLContentElement:W.d,HTMLDListElement:W.d,HTMLDataElement:W.d,HTMLDataListElement:W.d,HTMLDetailsElement:W.d,HTMLDialogElement:W.d,HTMLDivElement:W.d,HTMLEmbedElement:W.d,HTMLFieldSetElement:W.d,HTMLHRElement:W.d,HTMLHeadElement:W.d,HTMLHeadingElement:W.d,HTMLHtmlElement:W.d,HTMLIFrameElement:W.d,HTMLInputElement:W.d,HTMLLIElement:W.d,HTMLLabelElement:W.d,HTMLLegendElement:W.d,HTMLLinkElement:W.d,HTMLMapElement:W.d,HTMLMediaElement:W.d,HTMLMenuElement:W.d,HTMLMetaElement:W.d,HTMLMeterElement:W.d,HTMLModElement:W.d,HTMLOListElement:W.d,HTMLObjectElement:W.d,HTMLOptGroupElement:W.d,HTMLOutputElement:W.d,HTMLParagraphElement:W.d,HTMLParamElement:W.d,HTMLPictureElement:W.d,HTMLPreElement:W.d,HTMLProgressElement:W.d,HTMLQuoteElement:W.d,HTMLScriptElement:W.d,HTMLShadowElement:W.d,HTMLSlotElement:W.d,HTMLSourceElement:W.d,HTMLSpanElement:W.d,HTMLStyleElement:W.d,HTMLTableCaptionElement:W.d,HTMLTableCellElement:W.d,HTMLTableDataCellElement:W.d,HTMLTableHeaderCellElement:W.d,HTMLTableColElement:W.d,HTMLTextAreaElement:W.d,HTMLTimeElement:W.d,HTMLTitleElement:W.d,HTMLTrackElement:W.d,HTMLUListElement:W.d,HTMLUnknownElement:W.d,HTMLVideoElement:W.d,HTMLDirectoryElement:W.d,HTMLFontElement:W.d,HTMLFrameElement:W.d,HTMLFrameSetElement:W.d,HTMLMarqueeElement:W.d,HTMLElement:W.d,HTMLAnchorElement:W.ap,HTMLAreaElement:W.br,HTMLBaseElement:W.aq,HTMLBodyElement:W.a8,HTMLButtonElement:W.a9,HTMLCanvasElement:W.aa,CanvasRenderingContext2D:W.aG,CDATASection:W.P,CharacterData:W.P,Comment:W.P,ProcessingInstruction:W.P,Text:W.P,XMLDocument:W.ad,Document:W.ad,DOMException:W.cd,DOMImplementation:W.bu,DOMRectReadOnly:W.aH,Element:W.l,AbortPaymentEvent:W.b,AnimationEvent:W.b,AnimationPlaybackEvent:W.b,ApplicationCacheErrorEvent:W.b,BackgroundFetchClickEvent:W.b,BackgroundFetchEvent:W.b,BackgroundFetchFailEvent:W.b,BackgroundFetchedEvent:W.b,BeforeInstallPromptEvent:W.b,BeforeUnloadEvent:W.b,BlobEvent:W.b,CanMakePaymentEvent:W.b,ClipboardEvent:W.b,CloseEvent:W.b,CustomEvent:W.b,DeviceMotionEvent:W.b,DeviceOrientationEvent:W.b,ErrorEvent:W.b,ExtendableEvent:W.b,ExtendableMessageEvent:W.b,FetchEvent:W.b,FontFaceSetLoadEvent:W.b,ForeignFetchEvent:W.b,GamepadEvent:W.b,HashChangeEvent:W.b,InstallEvent:W.b,MediaEncryptedEvent:W.b,MediaKeyMessageEvent:W.b,MediaQueryListEvent:W.b,MediaStreamEvent:W.b,MediaStreamTrackEvent:W.b,MessageEvent:W.b,MIDIConnectionEvent:W.b,MIDIMessageEvent:W.b,MutationEvent:W.b,NotificationEvent:W.b,PageTransitionEvent:W.b,PaymentRequestEvent:W.b,PaymentRequestUpdateEvent:W.b,PopStateEvent:W.b,PresentationConnectionAvailableEvent:W.b,PresentationConnectionCloseEvent:W.b,ProgressEvent:W.b,PromiseRejectionEvent:W.b,PushEvent:W.b,RTCDataChannelEvent:W.b,RTCDTMFToneChangeEvent:W.b,RTCPeerConnectionIceEvent:W.b,RTCTrackEvent:W.b,SecurityPolicyViolationEvent:W.b,SensorErrorEvent:W.b,SpeechRecognitionError:W.b,SpeechRecognitionEvent:W.b,SpeechSynthesisEvent:W.b,StorageEvent:W.b,SyncEvent:W.b,TrackEvent:W.b,TransitionEvent:W.b,WebKitTransitionEvent:W.b,VRDeviceEvent:W.b,VRDisplayEvent:W.b,VRSessionEvent:W.b,MojoInterfaceRequestEvent:W.b,ResourceProgressEvent:W.b,USBConnectionEvent:W.b,IDBVersionChangeEvent:W.b,AudioProcessingEvent:W.b,OfflineAudioCompletionEvent:W.b,WebGLContextEvent:W.b,Event:W.b,InputEvent:W.b,SubmitEvent:W.b,EventTarget:W.bw,HTMLFormElement:W.bx,HTMLDocument:W.aL,HTMLImageElement:W.at,Location:W.bE,MouseEvent:W.R,DragEvent:W.R,PointerEvent:W.R,WheelEvent:W.R,DocumentFragment:W.e,ShadowRoot:W.e,DocumentType:W.e,Node:W.e,NodeList:W.aU,RadioNodeList:W.aU,HTMLOptionElement:W.ah,HTMLSelectElement:W.ai,HTMLTableElement:W.aZ,HTMLTableRowElement:W.bM,HTMLTableSectionElement:W.bN,HTMLTemplateElement:W.ax,CompositionEvent:W.M,FocusEvent:W.M,KeyboardEvent:W.M,TextEvent:W.M,TouchEvent:W.M,UIEvent:W.M,Window:W.b0,DOMWindow:W.b0,Attr:W.az,ClientRect:W.b1,DOMRect:W.b1,NamedNodeMap:W.b4,MozNamedAttrMap:W.b4,SVGScriptElement:P.av,SVGAElement:P.c,SVGAnimateElement:P.c,SVGAnimateMotionElement:P.c,SVGAnimateTransformElement:P.c,SVGAnimationElement:P.c,SVGCircleElement:P.c,SVGClipPathElement:P.c,SVGDefsElement:P.c,SVGDescElement:P.c,SVGDiscardElement:P.c,SVGEllipseElement:P.c,SVGFEBlendElement:P.c,SVGFEColorMatrixElement:P.c,SVGFEComponentTransferElement:P.c,SVGFECompositeElement:P.c,SVGFEConvolveMatrixElement:P.c,SVGFEDiffuseLightingElement:P.c,SVGFEDisplacementMapElement:P.c,SVGFEDistantLightElement:P.c,SVGFEFloodElement:P.c,SVGFEFuncAElement:P.c,SVGFEFuncBElement:P.c,SVGFEFuncGElement:P.c,SVGFEFuncRElement:P.c,SVGFEGaussianBlurElement:P.c,SVGFEImageElement:P.c,SVGFEMergeElement:P.c,SVGFEMergeNodeElement:P.c,SVGFEMorphologyElement:P.c,SVGFEOffsetElement:P.c,SVGFEPointLightElement:P.c,SVGFESpecularLightingElement:P.c,SVGFESpotLightElement:P.c,SVGFETileElement:P.c,SVGFETurbulenceElement:P.c,SVGFilterElement:P.c,SVGForeignObjectElement:P.c,SVGGElement:P.c,SVGGeometryElement:P.c,SVGGraphicsElement:P.c,SVGImageElement:P.c,SVGLineElement:P.c,SVGLinearGradientElement:P.c,SVGMarkerElement:P.c,SVGMaskElement:P.c,SVGMetadataElement:P.c,SVGPathElement:P.c,SVGPatternElement:P.c,SVGPolygonElement:P.c,SVGPolylineElement:P.c,SVGRadialGradientElement:P.c,SVGRectElement:P.c,SVGSetElement:P.c,SVGStopElement:P.c,SVGStyleElement:P.c,SVGSVGElement:P.c,SVGSwitchElement:P.c,SVGSymbolElement:P.c,SVGTSpanElement:P.c,SVGTextContentElement:P.c,SVGTextElement:P.c,SVGTextPathElement:P.c,SVGTextPositioningElement:P.c,SVGTitleElement:P.c,SVGUseElement:P.c,SVGViewElement:P.c,SVGGradientElement:P.c,SVGComponentTransferFunctionElement:P.c,SVGFEDropShadowElement:P.c,SVGMPathElement:P.c,SVGElement:P.c})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,HTMLImageElement:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLOptionElement:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=F.hp
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map
