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
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.fD(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.cI(this,a,b,c,true,false,e).prototype
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
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={cw:function cw(){},
eg:function(){return new P.bc("No element")},
ak:function ak(){},
av:function av(a,b,c){this.a=a
this.b=b
this.$ti=c},
aw:function aw(a,b,c){this.a=a
this.b=b
this.$ti=c},
dP:function(a){var t,s=H.dO(a)
if(s!=null)return s
t="minified:"+a
return t},
d:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aV(a)
if(typeof t!="string")throw H.e(H.dy(a))
return t},
aq:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bI:function(a){var t=H.ej(a)
return t},
ej:function(a){var t,s,r
if(a instanceof P.h)return H.y(H.aS(a),null)
if(J.ad(a)===C.u||u.D.b(a)){t=C.h(a)
if(H.d2(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.d2(r))return r}}return H.y(H.aS(a),null)},
d2:function(a){var t=a!=="Object"&&a!==""
return t},
cL:function(a){throw H.e(H.dy(a))},
N:function(a,b){if(a==null)J.e3(a)
throw H.e(H.fj(a,b))},
fj:function(a,b){var t,s,r,q="index"
if(!H.ds(b))return new P.C(!0,b,q,null)
t=J.dF(a)
s=H.aa(t.gm(a))
if(!(b<0)){if(typeof s!=="number")return H.cL(s)
r=b>=s}else r=!0
if(r){t=H.aa(s==null?t.gm(a):s)
return new P.b1(t,!0,b,q,"Index out of range")}return P.ek(b,q)},
dy:function(a){return new P.C(!0,a,null,null)},
e:function(a){var t,s
if(a==null)a=new P.b6()
t=new Error()
t.dartException=a
s=H.fE
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
fE:function(){return J.aV(this.dartException)},
cs:function(a){throw H.e(a)},
dN:function(a){throw H.e(P.cu(a))},
L:function(a){var t,s,r,q,p,o
a=H.fA(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.aT([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.bM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
bN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
d7:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
d1:function(a,b){return new H.b5(a,b==null?null:b.method)},
cx:function(a,b){var t=b==null,s=t?null:b.method
return new H.b4(a,s,t?null:b.receiver)},
aU:function(a){if(a==null)return new H.bH(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.a5(a,a.dartException)
return H.fc(a)},
a5:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fc:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.ah(s,16)&8191)===10)switch(r){case 438:return H.a5(a,H.cx(H.d(t)+" (Error "+r+")",f))
case 445:case 5007:return H.a5(a,H.d1(H.d(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.dR()
p=$.dS()
o=$.dT()
n=$.dU()
m=$.dX()
l=$.dY()
k=$.dW()
$.dV()
j=$.e_()
i=$.dZ()
h=q.q(t)
if(h!=null)return H.a5(a,H.cx(H.bw(t),h))
else{h=p.q(t)
if(h!=null){h.method="call"
return H.a5(a,H.cx(H.bw(t),h))}else{h=o.q(t)
if(h==null){h=n.q(t)
if(h==null){h=m.q(t)
if(h==null){h=l.q(t)
if(h==null){h=k.q(t)
if(h==null){h=n.q(t)
if(h==null){h=j.q(t)
if(h==null){h=i.q(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.a5(a,H.d1(H.bw(t),h))}}return H.a5(a,new H.bh(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.as()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.a5(a,new P.C(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.as()
return a},
ae:function(a){var t
if(a==null)return new H.aF(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.aF(a)},
fl:function(a,b){var t,s=a.length
for(t=0;t<s;++t)b.n(0,a[t])
return b},
fv:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.aa(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.bU("Unsupported number of arguments for wrapped closure"))},
aQ:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.fv)
a.$identity=t
return t},
ed:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.bd().constructor.prototype):Object.create(new H.a6(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.J
if(typeof s!=="number")return s.l()
$.J=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}j.constructor=t
t.prototype=j
if(!e){r=H.cY(a,l,f)
r.$reflectionInfo=d}else{j.$static_name=g
r=l}q=H.e9(d,e,f)
j.$S=q
j[k]=r
for(p=r,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.cY(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return t},
e9:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.dH,a)
if(typeof a=="string"){if(b)throw H.e("Cannot compute signature for static tearoff.")
t=c?H.e7:H.e6
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.e("Error in functionType of tearoff")},
ea:function(a,b,c,d){var t=H.cW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cY:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.ec(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.ea(s,!q,t,b)
if(s===0){q=$.J
if(typeof q!=="number")return q.l()
$.J=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.d(H.ct())+";return "+o+"."+H.d(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.J
if(typeof q!=="number")return q.l()
$.J=q+1
n+=q
return new Function("return function("+n+"){return this."+H.d(H.ct())+"."+H.d(t)+"("+n+");}")()},
eb:function(a,b,c,d){var t=H.cW,s=H.e8
switch(b?-1:a){case 0:throw H.e(H.en("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
ec:function(a,b){var t,s,r,q,p,o,n=H.ct(),m=$.cU
if(m==null)m=$.cU=H.cT("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.eb(s,!q,t,b)
if(s===1){q="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+m+");"
p=$.J
if(typeof p!=="number")return p.l()
$.J=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+m+", "+o+");"
p=$.J
if(typeof p!=="number")return p.l()
$.J=p+1
return new Function(q+p+"}")()},
cI:function(a,b,c,d,e,f,g){return H.ed(a,b,c,d,!!e,!!f,g)},
e6:function(a,b){return H.bv(v.typeUniverse,H.aS(a.a),b)},
e7:function(a,b){return H.bv(v.typeUniverse,H.aS(a.c),b)},
cW:function(a){return a.a},
e8:function(a){return a.c},
ct:function(){var t=$.cV
return t==null?$.cV=H.cT("self"):t},
cT:function(a){var t,s,r,q=new H.a6("self","target","receiver","name"),p=J.eh(Object.getOwnPropertyNames(q),u.z)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.e(P.e4("Field name "+a+" not found."))},
a4:function(a){if(a==null)H.fe("boolean expression must not be null")
return a},
fe:function(a){throw H.e(new H.bk(a))},
fD:function(a){throw H.e(new P.aZ(a))},
en:function(a){return new H.b9(a)},
fp:function(a){return v.getIsolateTag(a)},
aT:function(a,b){a[v.arrayRti]=b
return a},
fr:function(a){if(a==null)return null
return a.$ti},
fq:function(a,b,c){return H.fC(a["$a"+H.d(c)],H.fr(b))},
fC:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return null
if(Array.isArray(a))return a
if(typeof a=="function")return a.apply(null,b)
return b},
hi:function(a,b,c){return a.apply(b,H.fq(J.ad(b),b,c))},
hj:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fx:function(a){var t,s,r,q,p,o=H.bw($.dG.$1(a)),n=$.ce[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ci[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.eN($.dx.$2(a,o))
if(r!=null){n=$.ce[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ci[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.cq(t)
$.ce[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.ci[o]=t
return t}if(q==="-"){p=H.cq(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.dL(a,t)
if(q==="*")throw H.e(P.d8(o))
if(v.leafTags[o]===true){p=H.cq(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.dL(a,t)},
dL:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cN(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cq:function(a){return J.cN(a,!1,null,!!a.$ifP)},
fz:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.cq(t)
else return J.cN(t,c,null,null)},
ft:function(){if(!0===$.cM)return
$.cM=!0
H.fu()},
fu:function(){var t,s,r,q,p,o,n,m
$.ce=Object.create(null)
$.ci=Object.create(null)
H.fs()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dM.$1(p)
if(o!=null){n=H.fz(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fs:function(){var t,s,r,q,p,o,n=C.m()
n=H.ac(C.n,H.ac(C.o,H.ac(C.i,H.ac(C.i,H.ac(C.p,H.ac(C.q,H.ac(C.r(C.h),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dG=new H.cf(q)
$.dx=new H.cg(p)
$.dM=new H.ch(o)},
ac:function(a,b){return a(b)||b},
fA:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bM:function bM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b5:function b5(a,b){this.a=a
this.b=b},
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a){this.a=a},
bH:function bH(a){this.a=a},
aF:function aF(a){this.a=a
this.b=null},
Z:function Z(){},
bf:function bf(){},
bd:function bd(){},
a6:function a6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b9:function b9(a){this.a=a},
bk:function bk(a){this.a=a},
cf:function cf(a){this.a=a},
cg:function cg(a){this.a=a},
ch:function ch(a){this.a=a},
em:function(a,b){var t=b.c
return t==null?b.c=H.cD(a,b.z,!0):t},
d3:function(a,b){var t=b.c
return t==null?b.c=H.aI(a,"al",[b.z]):t},
d4:function(a){var t=a.y
if(t===6||t===7||t===8)return H.d4(a.z)
return t===11||t===12},
el:function(a){return a.cy},
dE:function(a){return H.cE(v.typeUniverse,a,!1)},
W:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.W(a,t,c,a0)
if(s===t)return b
return H.dk(a,s,!0)
case 7:t=b.z
s=H.W(a,t,c,a0)
if(s===t)return b
return H.cD(a,s,!0)
case 8:t=b.z
s=H.W(a,t,c,a0)
if(s===t)return b
return H.dj(a,s,!0)
case 9:r=b.Q
q=H.aP(a,r,c,a0)
if(q===r)return b
return H.aI(a,b.z,q)
case 10:p=b.z
o=H.W(a,p,c,a0)
n=b.Q
m=H.aP(a,n,c,a0)
if(o===p&&m===n)return b
return H.cB(a,o,m)
case 11:l=b.z
k=H.W(a,l,c,a0)
j=b.Q
i=H.f9(a,j,c,a0)
if(k===l&&i===j)return b
return H.di(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.aP(a,h,c,a0)
p=b.z
o=H.W(a,p,c,a0)
if(g===h&&o===p)return b
return H.cC(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.e(P.bx("Attempted to substitute unexpected RTI kind "+d))}},
aP:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.W(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
fa:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.W(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
f9:function(a,b,c,d){var t,s=b.a,r=H.aP(a,s,c,d),q=b.b,p=H.aP(a,q,c,d),o=b.c,n=H.fa(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.bq()
t.a=r
t.b=p
t.c=n
return t},
fi:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.dH(t)
return a.$S()}return null},
dJ:function(a,b){var t
if(H.d4(b))if(a instanceof H.Z){t=H.fi(a)
if(t!=null)return t}return H.aS(a)},
aS:function(a){var t
if(a instanceof P.h){t=a.$ti
return t!=null?t:H.cF(a)}if(Array.isArray(a))return H.aL(a)
return H.cF(J.ad(a))},
aL:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
eU:function(a){var t=a.$ti
return t!=null?t:H.cF(a)},
cF:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.eV(a,t)},
eV:function(a,b){var t=a instanceof H.Z?a.__proto__.__proto__.constructor:b,s=H.eL(v.typeUniverse,t.name)
b.$ccache=s
return s},
dH:function(a){var t,s,r
H.aa(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.cE(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
eT:function(a){var t,s,r=this,q=u.K
if(r===q)return H.aM(r,a,H.eY)
if(!H.O(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.aM(r,a,H.f0)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.ds
else if(t===u.i||t===u.G)s=H.eX
else if(t===u.W)s=H.eZ
else s=t===u.y?H.dq:null
if(s!=null)return H.aM(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.fw)){r.r="$i"+q
return H.aM(r,a,H.f_)}}else if(q===7)return H.aM(r,a,H.eR)
return H.aM(r,a,H.eP)},
aM:function(a,b,c){a.b=c
return a.b(b)},
eS:function(a){var t,s,r=this
if(!H.O(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.eO
else if(r===u.K)s=H.eM
else s=H.eQ
r.a=s
return r.a(a)},
f3:function(a){var t,s=a.y
if(!H.O(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.A||s===7||a===u.P||a===u.T},
eP:function(a){var t=this
if(a==null)return H.f3(t)
return H.m(v.typeUniverse,H.dJ(a,t),null,t,null)},
eR:function(a){if(a==null)return!0
return this.z.b(a)},
f_:function(a){var t=this,s=t.r
if(a instanceof P.h)return!!a[s]
return!!J.ad(a)[s]},
hg:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.dn(a,t)},
eQ:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.dn(a,t)},
dn:function(a,b){throw H.e(H.eB(H.da(a,H.dJ(a,b),H.y(b,null))))},
da:function(a,b,c){var t=P.b_(a),s=H.y(b==null?H.aS(a):b,null)
return t+": type '"+H.d(s)+"' is not a subtype of type '"+H.d(c)+"'"},
eB:function(a){return new H.aH("TypeError: "+a)},
t:function(a,b){return new H.aH("TypeError: "+H.da(a,null,b))},
eY:function(a){return a!=null},
eM:function(a){return a},
f0:function(a){return!0},
eO:function(a){return a},
dq:function(a){return!0===a||!1===a},
h4:function(a){if(!0===a||!1===a)return a
throw H.e(H.t(a,"bool"))},
h6:function(a){if(!0===a||!1===a)return a
if(a==null)return a
throw H.e(H.t(a,"bool"))},
h5:function(a){if(!0===a||!1===a)return a
if(a==null)return a
throw H.e(H.t(a,"bool?"))},
h7:function(a){if(typeof a=="number")return a
throw H.e(H.t(a,"double"))},
h9:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.t(a,"double"))},
h8:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.t(a,"double?"))},
ds:function(a){return typeof a=="number"&&Math.floor(a)===a},
ha:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.e(H.t(a,"int"))},
aa:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.e(H.t(a,"int"))},
hb:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.e(H.t(a,"int?"))},
eX:function(a){return typeof a=="number"},
hc:function(a){if(typeof a=="number")return a
throw H.e(H.t(a,"num"))},
he:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.t(a,"num"))},
hd:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.t(a,"num?"))},
eZ:function(a){return typeof a=="string"},
hf:function(a){if(typeof a=="string")return a
throw H.e(H.t(a,"String"))},
bw:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.e(H.t(a,"String"))},
eN:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.e(H.t(a,"String?"))},
f6:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.e.l(s,H.y(a[r],b))
return t},
dp:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.aT([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.a.n(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.N(a5,j)
m=C.e.l(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.e.l(" extends ",H.y(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.y(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.e.l(a2,H.y(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.e.l(a2,H.y(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.cQ(H.y(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.d(a0)},
y:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.y(a.z,b)
return t}if(m===7){s=a.z
t=H.y(s,b)
r=s.y
return J.cQ(r===11||r===12?C.e.l("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.d(H.y(a.z,b))+">"
if(m===9){q=H.fb(a.z)
p=a.Q
return p.length!==0?q+("<"+H.f6(p,b)+">"):q}if(m===11)return H.dp(a,b,null)
if(m===12)return H.dp(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.N(b,o)
return b[o]}return"?"},
fb:function(a){var t,s=H.dO(a)
if(s!=null)return s
t="minified:"+a
return t},
dl:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
eL:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.cE(a,b,!1)
else if(typeof n=="number"){t=n
s=H.aJ(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.aI(a,b,r)
o[b]=p
return p}else return n},
eJ:function(a,b){return H.dm(a.tR,b)},
eI:function(a,b){return H.dm(a.eT,b)},
cE:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.dh(H.df(a,null,b,c))
s.set(b,t)
return t},
bv:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.dh(H.df(a,b,c,!0))
r.set(c,s)
return s},
eK:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.cB(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
V:function(a,b){b.a=H.eS
b.b=H.eT
return b},
aJ:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.z(null,null)
t.y=b
t.cy=c
s=H.V(a,t)
a.eC.set(c,s)
return s},
dk:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.eG(a,b,s,c)
a.eC.set(s,t)
return t},
eG:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.O(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.z(null,null)
r.y=6
r.z=b
r.cy=c
return H.V(a,r)},
cD:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.eF(a,b,s,c)
a.eC.set(s,t)
return t},
eF:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.O(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.cj(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.cj(r.z))return r
else return H.em(a,b)}}q=new H.z(null,null)
q.y=7
q.z=b
q.cy=c
return H.V(a,q)},
dj:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.eD(a,b,s,c)
a.eC.set(s,t)
return t},
eD:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.O(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.aI(a,"al",[b])
else if(b===u.P||b===u.T)return u.x}r=new H.z(null,null)
r.y=8
r.z=b
r.cy=c
return H.V(a,r)},
eH:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.z(null,null)
t.y=13
t.z=b
t.cy=r
s=H.V(a,t)
a.eC.set(r,s)
return s},
bu:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
eC:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
aI:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.bu(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.z(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.V(a,s)
a.eC.set(q,r)
return r},
cB:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.bu(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.z(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.V(a,p)
a.eC.set(r,o)
return o},
di:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.bu(n)
if(k>0){t=m>0?",":""
s=H.bu(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.eC(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.z(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.V(a,p)
a.eC.set(r,s)
return s},
cC:function(a,b,c,d){var t,s=b.cy+("<"+H.bu(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.eE(a,b,c,s,d)
a.eC.set(s,t)
return t},
eE:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.W(a,b,s,0)
n=H.aP(a,c,s,0)
return H.cC(a,o,n,c!==n)}}m=new H.z(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.V(a,m)},
df:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dh:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.ev(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.dg(a,s,h,g,!1)
else if(r===46)s=H.dg(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.U(a.u,a.e,g.pop()))
break
case 94:g.push(H.eH(a.u,g.pop()))
break
case 35:g.push(H.aJ(a.u,5,"#"))
break
case 64:g.push(H.aJ(a.u,2,"@"))
break
case 126:g.push(H.aJ(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.cA(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.aI(q,o,p))
else{n=H.U(q,a.e,o)
switch(n.y){case 11:g.push(H.cC(q,n,p,a.n))
break
default:g.push(H.cB(q,n,p))
break}}break
case 38:H.ew(a,g)
break
case 42:m=a.u
g.push(H.dk(m,H.U(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.cD(m,H.U(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.dj(m,H.U(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.bq()
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
H.cA(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.di(q,H.U(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.cA(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.ey(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.U(a.u,a.e,i)},
ev:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
dg:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.dl(t,p.z)[q]
if(o==null)H.cs('No "'+q+'" in "'+H.el(p)+'"')
d.push(H.bv(t,p,o))}else d.push(q)
return n},
ew:function(a,b){var t=b.pop()
if(0===t){b.push(H.aJ(a.u,1,"0&"))
return}if(1===t){b.push(H.aJ(a.u,4,"1&"))
return}throw H.e(P.bx("Unexpected extended operation "+H.d(t)))},
U:function(a,b,c){if(typeof c=="string")return H.aI(a,c,a.sEA)
else if(typeof c=="number")return H.ex(a,b,c)
else return c},
cA:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.U(a,b,c[t])},
ey:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.U(a,b,c[t])},
ex:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.e(P.bx("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.e(P.bx("Bad index "+c+" for "+b.h(0)))},
m:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.O(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.O(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.m(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.m(a,b.z,c,d,e)
if(q===6){t=d.z
return H.m(a,b,c,t,e)}if(s===8){if(!H.m(a,b.z,c,d,e))return!1
return H.m(a,H.d3(a,b),c,d,e)}if(s===7){t=H.m(a,b.z,c,d,e)
return t}if(q===8){if(H.m(a,b,c,d.z,e))return!0
return H.m(a,b,c,H.d3(a,d),e)}if(q===7){t=H.m(a,b,c,d.z,e)
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
if(!H.m(a,l,c,k,e)||!H.m(a,k,e,l,c))return!1}return H.dr(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.dr(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.eW(a,b,c,d,e)}return!1},
dr:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.m(a2,a3.z,a4,a5.z,a6))return!1
t=a3.Q
s=a5.Q
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
if(!H.m(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.m(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.m(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!H.m(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
eW:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.m(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.dl(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.m(a,H.bv(a,b,m[q]),c,s[q],e))return!1
return!0},
cj:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.O(a))if(s!==7)if(!(s===6&&H.cj(a.z)))t=s===8&&H.cj(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fw:function(a){var t
if(!H.O(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
O:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
dm:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
z:function z(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
bq:function bq(){this.c=this.b=this.a=null},
bo:function bo(){},
aH:function aH(a){this.a=a},
dO:function(a){return v.mangledGlobalNames[a]}},J={
cN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cK:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.cM==null){H.ft()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.e(P.d8("Return interceptor for "+H.d(t(a,p))))}r=a.constructor
q=r==null?null:r[J.d_()]
if(q!=null)return q
q=H.fx(a)
if(q!=null)return q
if(typeof a=="function")return C.w
t=Object.getPrototypeOf(a)
if(t==null)return C.l
if(t===Object.prototype)return C.l
if(typeof r=="function"){Object.defineProperty(r,J.d_(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
d_:function(){var t=$.dd
return t==null?$.dd=v.getIsolateTag("_$dart_js"):t},
eh:function(a,b){a.fixed$length=Array
return a},
ad:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ao.prototype
return J.an.prototype}if(typeof a=="string")return J.a_.prototype
if(a==null)return J.a9.prototype
if(typeof a=="boolean")return J.b3.prototype
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
return a}if(a instanceof P.h)return a
return J.cK(a)},
fm:function(a){if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(!(a instanceof P.h))return J.a3.prototype
return a},
fn:function(a){if(typeof a=="number")return J.ap.prototype
if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(!(a instanceof P.h))return J.a3.prototype
return a},
dF:function(a){if(typeof a=="string")return J.a_.prototype
if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
return a}if(a instanceof P.h)return a
return J.cK(a)},
fo:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.Q.prototype
return a}if(a instanceof P.h)return a
return J.cK(a)},
cQ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.fn(a).l(a,b)},
cR:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ad(a).u(a,b)},
e1:function(a,b,c,d){return J.fo(a).a_(a,b,c,d)},
I:function(a){return J.ad(a).gj(a)},
e2:function(a){return J.fm(a).gv(a)},
e3:function(a){return J.dF(a).gm(a)},
aV:function(a){return J.ad(a).h(a)},
w:function w(){},
b3:function b3(){},
a9:function a9(){},
R:function R(){},
b7:function b7(){},
a3:function a3(){},
Q:function Q(){},
q:function q(a){this.$ti=a},
bG:function bG(a){this.$ti=a},
X:function X(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ap:function ap(){},
ao:function ao(){},
an:function an(){},
a_:function a_(){}},P={
ep:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.ff()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.aQ(new P.bQ(r),1)).observe(t,{childList:true})
return new P.bP(r,t,s)}else if(self.setImmediate!=null)return P.fg()
return P.fh()},
eq:function(a){self.scheduleImmediate(H.aQ(new P.bR(u.M.a(a)),0))},
er:function(a){self.setImmediate(H.aQ(new P.bS(u.M.a(a)),0))},
es:function(a){u.M.a(a)
P.ez(0,a)},
d6:function(a,b){var t=C.d.G(a.a,1000)
return P.eA(t<0?0:t,b)},
ez:function(a,b){var t=new P.aG()
t.ab(a,b)
return t},
eA:function(a,b){var t=new P.aG()
t.ac(a,b)
return t},
eu:function(a,b){var t,s,r
b.a=1
try{a.a4(new P.bW(b),new P.bX(b),u.P)}catch(r){t=H.aU(r)
s=H.ae(r)
P.fB(new P.bY(b,t,s))}},
dc:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.N()
b.a=a.a
b.c=a.c
P.aB(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.Y(r)}},
aB:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.n,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.ca(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.aB(c.a,b)
q.a=n
m=n.a}l=c.a
k=l.c
q.b=p
q.c=k
j=!p
if(j){i=b.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=b.b.b
if(p){i=l.b===h
i=!(i||i)}else i=!1
if(i){t.a(k)
P.ca(d,d,l.b,k.a,k.b)
return}g=$.j
if(g!==h)$.j=h
else g=d
b=b.c
if((b&15)===8)new P.c1(q,c,p).$0()
else if(j){if((b&1)!==0)new P.c0(q,k).$0()}else if((b&2)!==0)new P.c_(c,q).$0()
if(g!=null)$.j=g
b=q.c
if(r.b(b)){f=q.a.b
if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.F(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.dc(b,f)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.F(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
f4:function(a,b){var t=u.Q
if(t.b(a))return t.a(a)
t=u.v
if(t.b(a))return t.a(a)
throw H.e(P.cS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
f2:function(){var t,s
for(t=$.ab;t!=null;t=$.ab){$.aO=null
s=t.b
$.ab=s
if(s==null)$.aN=null
t.a.$0()}},
f8:function(){$.cG=!0
try{P.f2()}finally{$.aO=null
$.cG=!1
if($.ab!=null)$.cP().$1(P.dz())}},
dw:function(a){var t=new P.bl(a),s=$.aN
if(s==null){$.ab=$.aN=t
if(!$.cG)$.cP().$1(P.dz())}else $.aN=s.b=t},
f7:function(a){var t,s,r,q=$.ab
if(q==null){P.dw(a)
$.aO=$.aN
return}t=new P.bl(a)
s=$.aO
if(s==null){t.b=q
$.ab=$.aO=t}else{r=s.b
t.b=r
$.aO=s.b=t
if(r==null)$.aN=t}},
fB:function(a){var t=null,s=$.j
if(C.b===s){P.cc(t,t,C.b,a)
return}P.cc(t,t,s,u.M.a(s.a0(a)))},
eo:function(a,b){var t=$.j
if(t===C.b)return P.d6(a,u.e.a(b))
return P.d6(a,u.e.a(t.a1(b,u.p)))},
by:function(a,b){var t=b==null?P.e5(a):b
if(a==null)H.cs(new P.C(!1,null,"error","Must not be null"))
return new P.ag(a,t)},
e5:function(a){var t
if(u.C.b(a)){t=a.gI()
if(t!=null)return t}return C.t},
ca:function(a,b,c,d,e){P.f7(new P.cb(d,e))},
du:function(a,b,c,d,e){var t,s=$.j
if(s===c)return d.$0()
$.j=c
t=s
try{s=d.$0()
return s}finally{$.j=t}},
dv:function(a,b,c,d,e,f,g){var t,s=$.j
if(s===c)return d.$1(e)
$.j=c
t=s
try{s=d.$1(e)
return s}finally{$.j=t}},
f5:function(a,b,c,d,e,f,g,h,i){var t,s=$.j
if(s===c)return d.$2(e,f)
$.j=c
t=s
try{s=d.$2(e,f)
return s}finally{$.j=t}},
cc:function(a,b,c,d){var t
u.M.a(d)
t=C.b!==c
if(t)d=!(!t||!1)?c.a0(d):c.aj(d,u.H)
P.dw(d)},
bQ:function bQ(a){this.a=a},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a){this.a=a},
bS:function bS(a){this.a=a},
aG:function aG(){this.c=0},
c8:function c8(a,b){this.a=a
this.b=b},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aA:function aA(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
B:function B(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bV:function bV(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.b=b},
bW:function bW(a){this.a=a},
bX:function bX(a){this.a=a},
bY:function bY(a,b,c){this.a=a
this.b=b
this.c=c},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(a){this.a=a},
c0:function c0(a,b){this.a=a
this.b=b},
c_:function c_(a,b){this.a=a
this.b=b},
bl:function bl(a){this.a=a
this.b=null},
at:function at(){},
bJ:function bJ(a,b){this.a=a
this.b=b},
bK:function bK(a,b){this.a=a
this.b=b},
be:function be(){},
K:function K(){},
ag:function ag(a,b){this.a=a
this.b=b},
aK:function aK(){},
cb:function cb(a,b){this.a=a
this.b=b},
bs:function bs(){},
c5:function c5(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a,b){this.a=a
this.b=b},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function(a,b){return b.i("d0<0>").a(H.fl(a,new P.aC(b.i("aC<0>"))))},
cz:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
ef:function(a,b,c){var t,s
if(P.dt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.aT([],u.s)
C.a.n($.M,a)
try{P.f1(a,t)}finally{if(0>=$.M.length)return H.N($.M,-1)
$.M.pop()}s=P.d5(b,u.N.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
cZ:function(a,b,c){var t,s
if(P.dt(a))return b+"..."+c
t=new P.bL(b)
C.a.n($.M,a)
try{s=t
s.a=P.d5(s.a,a,", ")}finally{if(0>=$.M.length)return H.N($.M,-1)
$.M.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dt:function(a){var t,s
for(t=$.M.length,s=0;s<t;++s)if(a===$.M[s])return!0
return!1},
f1:function(a,b){var t,s,r,q,p,o,n,m=a.gv(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.k())return
t=H.d(m.gp())
C.a.n(b,t)
l+=t.length+2;++k}if(!m.k()){if(k<=5)return
if(0>=b.length)return H.N(b,-1)
s=b.pop()
if(0>=b.length)return H.N(b,-1)
r=b.pop()}else{q=m.gp();++k
if(!m.k()){if(k<=4){C.a.n(b,H.d(q))
return}s=H.d(q)
if(0>=b.length)return H.N(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gp();++k
for(;m.k();q=p,p=o){o=m.gp();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.N(b,-1)
l-=b.pop().length+2;--k}C.a.n(b,"...")
return}}r=H.d(q)
s=H.d(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.N(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.n(b,n)
C.a.n(b,r)
C.a.n(b,s)},
aC:function aC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
br:function br(a){this.a=a
this.b=null},
aD:function aD(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
aE:function aE(){},
ee:function(a){if(a instanceof H.Z)return a.h(0)
return"Instance of '"+H.d(H.bI(a))+"'"},
d5:function(a,b,c){var t=J.e2(b)
if(!t.k())return a
if(c.length===0){do a+=H.d(t.gp())
while(t.k())}else{a+=H.d(t.gp())
for(;t.k();)a=a+c+H.d(t.gp())}return a},
b_:function(a){if(typeof a=="number"||H.dq(a)||null==a)return J.aV(a)
if(typeof a=="string")return JSON.stringify(a)
return P.ee(a)},
bx:function(a){return new P.af(a)},
e4:function(a){return new P.C(!1,null,null,a)},
cS:function(a,b,c){return new P.C(!0,a,b,c)},
ek:function(a,b){return new P.b8(null,null,!0,a,b,"Value not in range")},
bj:function(a){return new P.bi(a)},
d8:function(a){return new P.bg(a)},
cu:function(a){return new P.aY(a)},
G:function G(){},
aR:function aR(){},
aj:function aj(a){this.a=a},
bE:function bE(){},
bF:function bF(){},
f:function f(){},
af:function af(a){this.a=a},
b6:function b6(){},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
b1:function b1(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bi:function bi(a){this.a=a},
bg:function bg(a){this.a=a},
bc:function bc(a){this.a=a},
aY:function aY(a){this.a=a},
as:function as(){},
aZ:function aZ(a){this.a=a},
bU:function bU(a){this.a=a},
H:function H(){},
p:function p(){},
P:function P(){},
T:function T(){},
i:function i(){},
u:function u(){},
h:function h(){},
ar:function ar(){},
F:function F(){},
bt:function bt(){},
x:function x(){},
bL:function bL(a){this.a=a}},W={
fk:function(){return document},
c3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
de:function(a,b,c,d){var t=W.c3(W.c3(W.c3(W.c3(0,a),b),c),d),s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
db:function(a,b,c,d,e){var t=W.fd(new W.bT(c),u.B)
if(t!=null&&!0)J.e1(a,b,t,!1)
return new W.bp(a,b,t,!1,e.i("bp<0>"))},
c9:function(a){var t
if(a==null)return null
if("postMessage" in a){t=W.et(a)
return t}else return u.u.a(a)},
et:function(a){if(a===window)return u.w.a(a)
else return new W.bm()},
fd:function(a,b){var t=$.j
if(t===C.b)return a
return t.a1(a,b)},
c:function c(){},
aW:function aW(){},
aX:function aX(){},
Y:function Y(){},
a7:function a7(){},
D:function D(){},
bD:function bD(){},
ai:function ai(){},
b:function b(){},
a:function a(){},
k:function k(){},
b0:function b0(){},
b2:function b2(){},
a0:function a0(){},
E:function E(){},
r:function r(){},
bb:function bb(){},
A:function A(){},
ax:function ax(){},
ay:function ay(){},
cv:function cv(a){this.$ti=a},
az:function az(){},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bp:function bp(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bT:function bT(a){this.a=a},
bm:function bm(){}},O={
dI:function(a,b,c){var t=c.a
if(a>=t)if(a<=t+c.c){t=c.b
t=b>=t&&b<=t+c.d}else t=!1
else t=!1
return t},
dD:function(a,b,c,d,e){b.save()
C.c.sam(b,"rgba("+e+", "+c+", "+a+", 0.5)")
b.fillRect(d.a,d.b,d.c,d.d)
b.restore()},
n:function n(){},
v:function v(a){var _=this
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null
_.cx=-1
_.cy=0
_.db=!1
_.dx=null
_.dy=a
_.a=null},
bz:function bz(a,b){this.a=a
this.b=b},
bA:function bA(a){this.a=a},
bB:function bB(a){this.a=a},
bC:function bC(){},
ba:function ba(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
o:function o(){},
a2:function a2(a,b){this.a=a
this.b=b},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
S:function S(a,b,c){var _=this
_.e=!1
_.f=a
_.b=b
_.c=c
_.a=null},
au:function au(a,b){this.b=a
this.c=b
this.a=null},
am:function am(a,b){this.b=a
this.c=b
this.a=null},
ah:function ah(a,b){this.b=a
this.c=b
this.a=null},
l:function l(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
cd:function(a,b,c){var t,s=document,r=s.createElement("div"),q=s.createElement("label")
u.j.a(q)
C.x.sat(q,b)
q.setAttribute("id",a)
s=s.createElement("input")
u.R.a(s)
s.setAttribute("type","checkbox")
s.setAttribute("id",a)
t=u.L
t.i("~(1)?").a(c)
u.Y.a(null)
W.db(s,"change",c,!1,t.c)
r.appendChild(s)
r.appendChild(q)
return u.h.a(r)},
dK:function(){var t,s=document,r=s.createElement("canvas")
u.f.a(r)
r.width=800
r.height=600
r.setAttribute("style","border: 1px solid #000; background: #FFF")
t=u.t.a(C.j.a5(r,"2d"))
s.body.appendChild(r)
s.body.appendChild(F.cd("needRects","Jel\xf6l\u0151k",new F.cl()))
s.body.appendChild(F.cd("explode","Robbant\xe1s",new F.cm()))
s.body.appendChild(F.cd("move","Mozg\xe1s",new F.cn()))
s.body.appendChild(F.cd("coords","Koordin\xe1ta rendszerek megjelen\xedt\xe9se",new F.co()))
C.j.ai(r,"click",new F.cp(r))
s=new O.v(new O.l(500,20,250,180))
s.st(0,null)
s.Q=200
s.ch=120
s.z=new O.l(200,120,300,270)
r=new O.S("Mels\u0151 jobb",new O.l(6,25,3,5),new O.l(50,220,30,50))
r.st(0,s)
s.b=r
r=new O.S("Mels\u0151 bal",new O.l(10,25,3,5),new O.l(90,220,30,50))
r.st(0,s)
s.c=r
r=new O.S("H\xe1ts\xf3 jobb",new O.l(18,25,3,5),new O.l(170,220,30,50))
r.st(0,s)
s.d=r
r=new O.S("H\xe1ts\xf3 bal",new O.l(22,25,3,5),new O.l(210,220,30,50))
r.st(0,s)
s.e=r
r=new O.au(new O.l(23,10,7,15),new O.l(230,70,70,150))
r.st(0,s)
s.f=r
r=new O.am(new O.l(1,4,10,13),new O.l(0,0,100,130))
r.st(0,s)
s.r=r
r=new O.ah(new O.l(3,17,21,8),new O.l(20,130,210,90))
r.st(0,s)
s.x=r
s.sak(H.aT([s.c,s.b,s.e,s.d,s.f,s.r,r],u.V))
$.cr=s
F.fy(t)},
fy:function(a){P.eo(new P.aj(30),new F.ck(a))},
cl:function cl(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cp:function cp(a){this.a=a},
ck:function ck(a){this.a=a}},M={
cJ:function(a,b,c,d,e,f,g){var t,s,r,q,p
c.save()
t=d-f
s=e-g
r=Math.atan2(s,t)
q=Math.sqrt(t*t+s*s)
c.translate(f,g)
c.rotate(r)
c.beginPath()
c.moveTo(0,0)
c.lineTo(q,0)
if(b){c.moveTo(5,-8)
c.lineTo(0,0)
c.lineTo(5,8)}if(a){p=q-5
c.moveTo(p,-8)
c.lineTo(q,0)
c.lineTo(p,8)}c.stroke()
c.setTransform(1,0,0,1,0,0)
c.restore()},
dC:function(a,b){var t=b.a,s=b.b
M.cJ(!0,!1,a,t+b.c,s,t,s)
s=b.a
t=b.b
M.cJ(!0,!1,a,s,t+b.d,s,t)}}
var w=[C,H,J,P,W,O,F,M]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.cw.prototype={}
J.w.prototype={
u:function(a,b){return a===b},
gj:function(a){return H.aq(a)},
h:function(a){return"Instance of '"+H.d(H.bI(a))+"'"}}
J.b3.prototype={
h:function(a){return String(a)},
gj:function(a){return a?519018:218159},
$iG:1}
J.a9.prototype={
u:function(a,b){return null==b},
h:function(a){return"null"},
gj:function(a){return 0},
$ii:1}
J.R.prototype={
gj:function(a){return 0},
h:function(a){return String(a)}}
J.b7.prototype={}
J.a3.prototype={}
J.Q.prototype={
h:function(a){var t=a[$.dQ()]
if(t==null)return this.a9(a)
return"JavaScript function for "+H.d(J.aV(t))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ia8:1}
J.q.prototype={
n:function(a,b){H.aL(a).c.a(b)
if(!!a.fixed$length)H.cs(P.bj("add"))
a.push(b)},
O:function(a,b){var t,s
H.aL(a).i("~(1)").a(b)
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.e(P.cu(a))}},
ao:function(a,b){var t,s=a.length
if(0>=s)return-1
for(t=0;t<s;++t){if(t>=a.length)return H.N(a,t)
if(J.cR(a[t],b))return t}return-1},
h:function(a){return P.cZ(a,"[","]")},
gv:function(a){return new J.X(a,a.length,H.aL(a).i("X<1>"))},
gj:function(a){return H.aq(a)},
gm:function(a){return a.length},
$ip:1,
$iT:1}
J.bG.prototype={}
J.X.prototype={
gp:function(){return this.d},
k:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.e(H.dN(r))
t=s.c
if(t>=q){s.sX(null)
return!1}s.sX(r[t]);++s.c
return!0},
sX:function(a){this.d=this.$ti.i("1?").a(a)},
$iP:1}
J.ap.prototype={
a2:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.e(P.bj(""+a+".floor()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj:function(a){var t,s,r,q,p=a|0
if(a===p)return 536870911&p
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
aa:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.Z(a,b)},
G:function(a,b){return(a|0)===a?a/b|0:this.Z(a,b)},
Z:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(P.bj("Result of truncating division is "+H.d(t)+": "+H.d(a)+" ~/ "+b))},
ah:function(a,b){var t
if(a>0)t=this.ag(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ag:function(a,b){return b>31?0:a>>>b},
$iu:1}
J.ao.prototype={$iH:1}
J.an.prototype={}
J.a_.prototype={
l:function(a,b){if(typeof b!="string")throw H.e(P.cS(b,null,null))
return a+b},
h:function(a){return a},
gj:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gm:function(a){return a.length},
$ix:1}
H.ak.prototype={}
H.av.prototype={
gv:function(a){var t=this.a
return new H.aw(new J.X(t,t.length,H.aL(t).i("X<1>")),this.b,this.$ti.i("aw<1>"))}}
H.aw.prototype={
k:function(){var t,s
for(t=this.a,s=this.b;t.k();)if(H.a4(s.$1(t.d)))return!0
return!1},
gp:function(){return this.a.d}}
H.bM.prototype={
q:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
H.b5.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.b4.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.d(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.d(s.a)+")"
return r+q+"' on '"+t+"' ("+H.d(s.a)+")"}}
H.bh.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.bH.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.aF.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iF:1}
H.Z.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.dP(s==null?"unknown":s)+"'"},
$ia8:1,
gav:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bf.prototype={}
H.bd.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.dP(t)+"'"}}
H.a6.prototype={
u:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.a6))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gj:function(a){var t,s=this.c
if(s==null)t=H.aq(this.a)
else t=typeof s!=="object"?J.I(s):H.aq(s)
return(t^H.aq(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.bI(t))+"'")}}
H.b9.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.bk.prototype={
h:function(a){return"Assertion failed: "+P.b_(this.a)}}
H.cf.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.cg.prototype={
$2:function(a,b){return this.a(a,b)},
$S:8}
H.ch.prototype={
$1:function(a){return this.a(H.bw(a))},
$S:9}
H.z.prototype={
i:function(a){return H.bv(v.typeUniverse,this,a)},
w:function(a){return H.eK(v.typeUniverse,this,a)}}
H.bq.prototype={}
H.bo.prototype={
h:function(a){return this.a}}
H.aH.prototype={}
P.bQ.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:5}
P.bP.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:10}
P.bR.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bS.prototype={
$0:function(){this.a.$0()},
$S:0}
P.aG.prototype={
ab:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aQ(new P.c8(this,b),0),a)
else throw H.e(P.bj("`setTimeout()` not found."))},
ac:function(a,b){if(self.setTimeout!=null)self.setInterval(H.aQ(new P.c7(this,a,Date.now(),b),0),a)
else throw H.e(P.bj("Periodic timer."))},
$iK:1}
P.c8.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.c7.prototype={
$0:function(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=C.d.aa(t,p)}r.c=q
s.d.$1(r)},
$S:0}
P.aA.prototype={
ap:function(a){if((this.c&15)!==6)return!0
return this.b.b.P(u.r.a(this.d),a.a,u.y,u.K)},
an:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.Q.b(t))return q.a(p.aq(t,a.a,a.b,s,r,u.l))
else return q.a(p.P(u.v.a(t),a.a,s,r))}}
P.B.prototype={
a4:function(a,b,c){var t,s,r,q=this.$ti
q.w(c).i("1/(2)").a(a)
t=$.j
if(t!==C.b){c.i("@<0/>").w(q.c).i("1(2)").a(a)
if(b!=null)b=P.f4(b,t)}s=new P.B($.j,c.i("B<0>"))
r=b==null?1:3
this.T(new P.aA(s,r,a,b,q.i("@<1>").w(c).i("aA<1,2>")))
return s},
au:function(a,b){return this.a4(a,null,b)},
T:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.T(a)
return}s.a=r
s.c=t.c}P.cc(null,null,s.b,u.M.a(new P.bV(s,a)))}},
Y:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.Y(a)
return}n.a=t
n.c=o.c}m.a=n.F(a)
P.cc(null,null,n.b,u.M.a(new P.bZ(m,n)))}},
N:function(){var t=u.F.a(this.c)
this.c=null
return this.F(t)},
F:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
V:function(a){var t,s=this,r=s.$ti
r.i("1/").a(a)
if(r.i("al<1>").b(a))if(r.b(a))P.dc(a,s)
else P.eu(a,s)
else{t=s.N()
r.c.a(a)
s.a=4
s.c=a
P.aB(s,t)}},
W:function(a,b){var t,s,r=this
u.l.a(b)
t=r.N()
s=P.by(a,b)
r.a=8
r.c=s
P.aB(r,t)},
$ial:1}
P.bV.prototype={
$0:function(){P.aB(this.a,this.b)},
$S:0}
P.bZ.prototype={
$0:function(){P.aB(this.b,this.a.a)},
$S:0}
P.bW.prototype={
$1:function(a){var t=this.a
t.a=0
t.V(a)},
$S:5}
P.bX.prototype={
$2:function(a,b){this.a.W(a,u.l.a(b))},
$S:11}
P.bY.prototype={
$0:function(){this.a.W(this.b,this.c)},
$S:0}
P.c1.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.a3(u.O.a(r.d),u.z)}catch(q){t=H.aU(q)
s=H.ae(q)
if(n.c){r=u.n.a(n.b.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.a
if(r)p.c=u.n.a(n.b.a.c)
else p.c=P.by(t,s)
p.b=!0
return}if(m instanceof P.B&&m.a>=4){if(m.a===8){r=n.a
r.c=u.n.a(m.c)
r.b=!0}return}if(u.d.b(m)){o=n.b.a
r=n.a
r.c=m.au(new P.c2(o),u.z)
r.b=!1}},
$S:1}
P.c2.prototype={
$1:function(a){return this.a},
$S:12}
P.c0.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.P(p.i("2/(1)").a(q.d),n,p.i("2/"),o)}catch(m){t=H.aU(m)
s=H.ae(m)
r=this.a
r.c=P.by(t,s)
r.b=!0}},
$S:1}
P.c_.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.b
if(H.a4(q.a.ap(t))&&q.a.e!=null){q.c=q.a.an(t)
q.b=!1}}catch(p){s=H.aU(p)
r=H.ae(p)
q=u.n.a(l.a.a.c)
o=q.a
n=s
m=l.b
if(o==null?n==null:o===n)m.c=q
else m.c=P.by(s,r)
m.b=!0}},
$S:1}
P.bl.prototype={}
P.at.prototype={
gm:function(a){var t,s,r=this,q={},p=new P.B($.j,u.a)
q.a=0
t=r.$ti
s=t.i("~(1)?").a(new P.bJ(q,r))
u.Y.a(new P.bK(q,p))
W.db(r.a,r.b,s,!1,t.c)
return p}}
P.bJ.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.i("i(1)")}}
P.bK.prototype={
$0:function(){this.b.V(this.a.a)},
$S:0}
P.be.prototype={}
P.K.prototype={}
P.ag.prototype={
h:function(a){return H.d(this.a)},
$if:1,
gI:function(){return this.b}}
P.aK.prototype={$id9:1}
P.cb.prototype={
$0:function(){var t=H.e(this.a)
t.stack=J.aV(this.b)
throw t},
$S:0}
P.bs.prototype={
ar:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.b===$.j){a.$0()
return}P.du(q,q,this,a,u.H)}catch(r){t=H.aU(r)
s=H.ae(r)
P.ca(q,q,this,t,u.l.a(s))}},
as:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.b===$.j){a.$1(b)
return}P.dv(q,q,this,a,b,u.H,c)}catch(r){t=H.aU(r)
s=H.ae(r)
P.ca(q,q,this,t,u.l.a(s))}},
aj:function(a,b){return new P.c5(this,b.i("0()").a(a),b)},
a0:function(a){return new P.c4(this,u.M.a(a))},
a1:function(a,b){return new P.c6(this,b.i("~(0)").a(a),b)},
a3:function(a,b){b.i("0()").a(a)
if($.j===C.b)return a.$0()
return P.du(null,null,this,a,b)},
P:function(a,b,c,d){c.i("@<0>").w(d).i("1(2)").a(a)
d.a(b)
if($.j===C.b)return a.$1(b)
return P.dv(null,null,this,a,b,c,d)},
aq:function(a,b,c,d,e,f){d.i("@<0>").w(e).w(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.j===C.b)return a.$2(b,c)
return P.f5(null,null,this,a,b,c,d,e,f)}}
P.c5.prototype={
$0:function(){return this.a.a3(this.b,this.c)},
$S:function(){return this.c.i("0()")}}
P.c4.prototype={
$0:function(){return this.a.ar(this.b)},
$S:1}
P.c6.prototype={
$1:function(a){var t=this.c
return this.a.as(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.aC.prototype={
gv:function(a){var t=this,s=new P.aD(t,t.r,t.$ti.i("aD<1>"))
s.c=t.e
return s},
gm:function(a){return this.a},
n:function(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.S(t==null?r.b=P.cz():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.S(s==null?r.c=P.cz():s,b)}else return r.ad(b)},
ad:function(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=P.cz()
s=J.I(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.M(a)]
else{if(q.af(r,a)>=0)return!1
r.push(q.M(a))}return!0},
S:function(a,b){this.$ti.c.a(b)
if(u.E.a(a[b])!=null)return!1
a[b]=this.M(b)
return!0},
M:function(a){var t=this,s=new P.br(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=1073741823&t.r+1
return s},
af:function(a,b){var t,s=a.length
for(t=0;t<s;++t)if(J.cR(a[t].a,b))return t
return-1},
$id0:1}
P.br.prototype={}
P.aD.prototype={
gp:function(){return this.d},
k:function(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw H.e(P.cu(r))
else if(s==null){t.sU(null)
return!1}else{t.sU(t.$ti.i("1?").a(s.a))
t.c=s.b
return!0}},
sU:function(a){this.d=this.$ti.i("1?").a(a)},
$iP:1}
P.aE.prototype={
h:function(a){return P.cZ(this,"{","}")},
$ip:1}
P.G.prototype={}
P.aR.prototype={}
P.aj.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a},
gj:function(a){return C.d.gj(this.a)},
h:function(a){var t,s,r,q=new P.bF(),p=this.a
if(p<0)return"-"+new P.aj(0-p).h(0)
t=q.$1(C.d.G(p,6e7)%60)
s=q.$1(C.d.G(p,1e6)%60)
r=new P.bE().$1(p%1e6)
return""+C.d.G(p,36e8)+":"+H.d(t)+":"+H.d(s)+"."+H.d(r)}}
P.bE.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:6}
P.bF.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:6}
P.f.prototype={
gI:function(){return H.ae(this.$thrownJsError)}}
P.af.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.b_(t)
return"Assertion failed"}}
P.b6.prototype={
h:function(a){return"Throw of null."}}
P.C.prototype={
gL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gK:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gL()+p+n
if(!r.a)return m
t=r.gK()
s=P.b_(r.b)
return m+t+": "+s}}
P.b8.prototype={
gL:function(){return"RangeError"},
gK:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.d(r):""
else if(r==null)t=": Not greater than or equal to "+H.d(s)
else if(r>s)t=": Not in inclusive range "+H.d(s)+".."+H.d(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.d(s)
return t}}
P.b1.prototype={
gL:function(){return"RangeError"},
gK:function(){var t,s=H.aa(this.b)
if(typeof s!=="number")return s.aw()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gm:function(a){return this.f}}
P.bi.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.bg.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bc.prototype={
h:function(a){return"Bad state: "+this.a}}
P.aY.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.b_(t)+"."}}
P.as.prototype={
h:function(a){return"Stack Overflow"},
gI:function(){return null},
$if:1}
P.aZ.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.bU.prototype={
h:function(a){return"Exception: "+this.a}}
P.H.prototype={}
P.p.prototype={
gm:function(a){var t,s=this.gv(this)
for(t=0;s.k();)++t
return t},
h:function(a){return P.ef(this,"(",")")}}
P.P.prototype={}
P.T.prototype={$ip:1}
P.i.prototype={
gj:function(a){return P.h.prototype.gj.call(C.v,this)},
h:function(a){return"null"}}
P.u.prototype={}
P.h.prototype={constructor:P.h,$ih:1,
u:function(a,b){return this===b},
gj:function(a){return H.aq(this)},
h:function(a){return"Instance of '"+H.d(H.bI(this))+"'"},
toString:function(){return this.h(this)}}
P.ar.prototype={}
P.F.prototype={}
P.bt.prototype={
h:function(a){return""},
$iF:1}
P.x.prototype={}
P.bL.prototype={
gm:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.c.prototype={$ic:1}
W.aW.prototype={
h:function(a){return String(a)}}
W.aX.prototype={
h:function(a){return String(a)}}
W.Y.prototype={
a5:function(a,b){return a.getContext(b)},
$iY:1}
W.a7.prototype={
sam:function(a,b){a.fillStyle=b},
sJ:function(a,b){a.strokeStyle=b},
H:function(a,b,c,d){a.fillText(b,c,d)},
$ia7:1}
W.D.prototype={
gm:function(a){return a.length}}
W.bD.prototype={
h:function(a){return String(a)}}
W.ai.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
u:function(a,b){if(b==null)return!1
return u.q.b(b)&&a.left==b.left&&a.top==b.top&&a.width==b.width&&a.height==b.height},
gj:function(a){return W.de(J.I(a.left),J.I(a.top),J.I(a.width),J.I(a.height))},
$icy:1}
W.b.prototype={
h:function(a){return a.localName},
$ib:1}
W.a.prototype={$ia:1}
W.k.prototype={
a_:function(a,b,c,d){u.o.a(c)
if(c!=null)this.ae(a,b,c,d)},
ai:function(a,b,c){return this.a_(a,b,c,null)},
ae:function(a,b,c,d){return a.addEventListener(b,H.aQ(u.o.a(c),1),d)},
$ik:1}
W.b0.prototype={
gm:function(a){return a.length}}
W.b2.prototype={$icX:1}
W.a0.prototype={$ia0:1}
W.E.prototype={$iE:1}
W.r.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.a8(a):t},
sat:function(a,b){a.textContent=b}}
W.bb.prototype={
gm:function(a){return a.length}}
W.A.prototype={}
W.ax.prototype={$ibO:1}
W.ay.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
u:function(a,b){if(b==null)return!1
return u.q.b(b)&&a.left==b.left&&a.top==b.top&&a.width==b.width&&a.height==b.height},
gj:function(a){return W.de(J.I(a.left),J.I(a.top),J.I(a.width),J.I(a.height))}}
W.cv.prototype={}
W.az.prototype={}
W.bn.prototype={}
W.bp.prototype={}
W.bT.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:13}
W.bm.prototype={$ik:1,$ibO:1}
O.n.prototype={
st:function(a,b){this.a=H.eU(this).i("n.T*").a(b)}}
O.v.prototype={
a6:function(a,b){var t,s,r,q,p,o,n=this.y
n.toString
t=H.aL(n)
s=new H.av(n,t.i("G(1)").a(new O.bz(a,b)),t.i("av<1>"))
if(s.gv(s).k()){r=s.gv(s)
if(!r.k())H.cs(H.eg())
q=r.gp()
if(q instanceof O.S){p=q.f
o="Macska l\xe1b"}else{o=""
p=""}if(q instanceof O.au){o="Macska farok"
p="Farok"}if(q instanceof O.ah){o="Macska test"
p="Test"}if(q instanceof O.am){o="Macska fej"
p="Fej"}return new O.ba(q.D(),p,o,"Macska testr\xe9sz","")}else{n=this.z
if(O.dI(a,b,n))return new O.ba(n,"Mirtil","Macska","","Macska test,Macska fej,Macska farok,4x Macska l\xe1b")}return null},
C:function(a){var t,s,r,q,p,o=this
if(H.a4($.cO)){o.db=!1
O.dD(0,a,255,o.z,0)}t=o.y;(t&&C.a).O(t,new O.bA(a))
if(H.a4($.dB)){o.db=!1
a.save()
t=o.y;(t&&C.a).O(t,new O.bB(a))
C.c.sJ(a,"#9867FF")
M.dC(a,o.z)
a.restore()}if(o.db&&o.dx!=null){a.save()
C.c.sJ(a,"#FF00FF")
a.lineWidth=3
t=o.dx.a
s=o.dy
r=t.a
q=C.k.a2(t.c/2)
p=t.b
t=C.k.a2(t.d/2)
M.cJ(!1,!0,a,s.a,s.b+s.d,r+q,p+t)
a.restore()
o.al(o.dx,a)}},
al:function(a,b){var t,s,r,q,p,o,n,m,l,k
b.save()
t=this.dy
b.strokeRect(t.a,t.b,t.c,t.d)
s=a.b
r=a.c
q=a.d
t=a.e
p=t!==""?H.aT(t.split(","),u.s):[]
b.font="25px serif"
C.c.H(b,"N\xe9v: "+s,510,50)
t=q===""
if(!t){C.c.H(b,"T\xedpus: "+q,510,80)
o=1}else o=0
if(r!==""){C.c.H(b,(t?"T\xedpus":"Alt\xedpus")+": "+r,510,80+o*30);++o}if(p.length!==0){n=80+o*30
C.c.H(b,"R\xe9szek:",510,n)
b.font="18px serif"
for(t=p.length,m=n+20,l=0;l<p.length;p.length===t||(0,H.dN)(p),++l){k=p[l]
b.fillText(H.d(k),510,m+20*C.a.ao(p,k))}}b.restore()},
A:function(){var t,s,r=this
if(H.a4($.cH)){r.db=!1
t=r.c
s=!t.e
if(s&&!r.b.e&&!r.e.e&&!r.d.e){t.e=s
s=r.e
s.e=!s.e}if(++r.cy>30){t.e=!t.e
t=r.b
t.e=!t.e
t=r.e
t.e=!t.e
t=r.d
t.e=!t.e
r.cy=0}t=r.Q
s=r.cx
t=r.Q=t+s
if(t>599||t<0)r.cx=-1*s
s=r.z
s.a=t
s.b=r.ch
s=r.y;(s&&C.a).O(s,new O.bC())}},
sak:function(a){this.y=u.U.a(a)}}
O.bz.prototype={
$1:function(a){return O.dI(this.a,this.b,u.m.a(a).D())},
$S:14}
O.bA.prototype={
$1:function(a){u.m.a(a).C(this.a)},
$S:3}
O.bB.prototype={
$1:function(a){var t
u.m.a(a)
t=this.a
C.c.sJ(t,"#FF6798")
M.dC(t,a.D())},
$S:3}
O.bC.prototype={
$1:function(a){u.m.a(a).A()},
$S:3}
O.ba.prototype={}
O.o.prototype={
C:function(a){var t,s=this.D(),r=this.b
a.drawImage($.e0(),r.a,r.b,r.c,r.d,s.a,s.b,s.c,s.d)
if(H.a4($.cO)){t=this.B()
O.dD(t.c,a,t.b,s,t.a)}},
D:function(){var t,s,r=new O.a2(0,0)
if(H.a4($.dA))r=this.E()
t=this.a
s=this.c
return new O.l(t.Q+s.a+r.a,t.ch+s.b+r.b,s.c,s.d)},
B:function(){return new O.a1(0,0,0)},
E:function(){return new O.a2(0,0)}}
O.a2.prototype={}
O.a1.prototype={}
O.S.prototype={
C:function(a){if(H.a4($.cH)){if(this.e)this.R(a)}else this.R(a)},
B:function(){return new O.a1(255,0,0)},
E:function(){return new O.a2(0,10)},
A:function(){}}
O.au.prototype={
A:function(){},
B:function(){return new O.a1(3,252,86)},
E:function(){return new O.a2(10,-10)}}
O.am.prototype={
A:function(){},
B:function(){return new O.a1(24,46,125)},
E:function(){return new O.a2(10,-10)}}
O.ah.prototype={
A:function(){},
B:function(){return new O.a1(235,3,252)}}
O.l.prototype={}
F.cl.prototype={
$1:function(a){$.cO=u.R.a(W.c9(a.currentTarget)).checked},
$S:2}
F.cm.prototype={
$1:function(a){$.dA=u.R.a(W.c9(a.currentTarget)).checked},
$S:2}
F.cn.prototype={
$1:function(a){$.cH=u.R.a(W.c9(a.currentTarget)).checked},
$S:2}
F.co.prototype={
$1:function(a){$.dB=u.R.a(W.c9(a.currentTarget)).checked},
$S:2}
F.cp.prototype={
$1:function(a){var t,s,r,q
u.I.a(a)
t=$.cr
u.k.a(a)
s=a.clientX
a.clientY
r=this.a
q=r.getBoundingClientRect().left
if(typeof s!=="number")return s.a7()
if(typeof q!=="number")return H.cL(q)
q=H.aa(s-q)
a.clientX
s=a.clientY
r=r.getBoundingClientRect().top
if(typeof s!=="number")return s.a7()
if(typeof r!=="number")return H.cL(r)
t.dx=t.a6(q,H.aa(s-r))
t.db=!0
return P.ei([null],u.H)},
$S:15}
F.ck.prototype={
$1:function(a){var t
u.J.a(a)
$.cr.A()
t=this.a
t.clearRect(0,0,800,600)
$.cr.C(t)},
$S:16};(function aliases(){var t=J.w.prototype
t.a8=t.h
t=J.R.prototype
t.a9=t.h
t=O.o.prototype
t.R=t.C})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0
t(P,"ff","eq",4)
t(P,"fg","er",4)
t(P,"fh","es",4)
s(P,"dz","f8",1)})();(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.h,null)
s(P.h,[H.cw,J.w,J.X,P.p,P.P,H.bM,P.f,H.bH,H.aF,H.Z,H.z,H.bq,P.aG,P.aA,P.B,P.bl,P.at,P.be,P.K,P.ag,P.aK,P.aE,P.br,P.aD,P.G,P.u,P.aj,P.as,P.bU,P.T,P.i,P.F,P.bt,P.x,P.bL,W.cv,W.bm,O.n,O.ba,O.a2,O.a1,O.l])
s(J.w,[J.b3,J.a9,J.R,J.q,J.ap,J.a_,W.k,W.a7,W.bD,W.ai,W.a])
s(J.R,[J.b7,J.a3,J.Q])
t(J.bG,J.q)
s(J.ap,[J.ao,J.an])
s(P.p,[H.ak,H.av])
t(H.aw,P.P)
s(P.f,[H.b5,H.b4,H.bh,H.b9,P.af,H.bo,P.b6,P.C,P.bi,P.bg,P.bc,P.aY,P.aZ])
s(H.Z,[H.bf,H.cf,H.cg,H.ch,P.bQ,P.bP,P.bR,P.bS,P.c8,P.c7,P.bV,P.bZ,P.bW,P.bX,P.bY,P.c1,P.c2,P.c0,P.c_,P.bJ,P.bK,P.cb,P.c5,P.c4,P.c6,P.bE,P.bF,W.bT,O.bz,O.bA,O.bB,O.bC,F.cl,F.cm,F.cn,F.co,F.cp,F.ck])
s(H.bf,[H.bd,H.a6])
t(H.bk,P.af)
t(H.aH,H.bo)
t(P.bs,P.aK)
t(P.aC,P.aE)
s(P.u,[P.aR,P.H])
s(P.C,[P.b8,P.b1])
t(P.ar,H.ak)
s(W.k,[W.r,W.ax])
s(W.r,[W.b,W.D])
t(W.c,W.b)
s(W.c,[W.aW,W.aX,W.Y,W.b0,W.b2,W.a0,W.bb])
t(W.A,W.a)
t(W.E,W.A)
t(W.ay,W.ai)
t(W.az,P.at)
t(W.bn,W.az)
t(W.bp,P.be)
s(O.n,[O.v,O.o])
s(O.o,[O.S,O.au,O.am,O.ah])})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{H:"int",aR:"double",u:"num",x:"String",G:"bool",i:"Null",T:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["i()","~()","i(a*)","i(o*)","~(~())","i(@)","x(H)","@(@)","@(@,x)","@(x)","i(~())","i(h,F)","B<@>(@)","@(a)","G*(o*)","ar<~>*(a*)","i(K*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.eJ(v.typeUniverse,JSON.parse('{"Q":"R","b7":"R","a3":"R","fG":"a","fM":"a","fF":"b","fN":"b","fS":"b","fH":"c","fQ":"c","fO":"r","fL":"r","fR":"E","fJ":"A","fI":"D","fT":"D","b3":{"G":[]},"a9":{"i":[]},"R":{"a8":[]},"q":{"T":["1"],"p":["1"]},"bG":{"q":["1"],"T":["1"],"p":["1"]},"X":{"P":["1"]},"ap":{"u":[]},"ao":{"H":[],"u":[]},"an":{"u":[]},"a_":{"x":[]},"ak":{"p":["1"]},"av":{"p":["1"]},"aw":{"P":["1"]},"b5":{"f":[]},"b4":{"f":[]},"bh":{"f":[]},"aF":{"F":[]},"Z":{"a8":[]},"bf":{"a8":[]},"bd":{"a8":[]},"a6":{"a8":[]},"b9":{"f":[]},"bk":{"f":[]},"bo":{"f":[]},"aH":{"f":[]},"aG":{"K":[]},"B":{"al":["1"]},"ag":{"f":[]},"aK":{"d9":[]},"bs":{"aK":[],"d9":[]},"aC":{"d0":["1"],"p":["1"]},"aD":{"P":["1"]},"aE":{"p":["1"]},"aR":{"u":[]},"af":{"f":[]},"b6":{"f":[]},"C":{"f":[]},"b8":{"f":[]},"b1":{"f":[]},"bi":{"f":[]},"bg":{"f":[]},"bc":{"f":[]},"aY":{"f":[]},"as":{"f":[]},"aZ":{"f":[]},"H":{"u":[]},"T":{"p":["1"]},"ar":{"p":["1"]},"bt":{"F":[]},"c":{"b":[],"k":[]},"aW":{"c":[],"b":[],"k":[]},"aX":{"c":[],"b":[],"k":[]},"Y":{"c":[],"b":[],"k":[]},"D":{"k":[]},"ai":{"cy":["u"]},"b":{"k":[]},"b0":{"c":[],"b":[],"k":[]},"b2":{"cX":[],"c":[],"b":[],"k":[]},"a0":{"c":[],"b":[],"k":[]},"E":{"a":[]},"r":{"k":[]},"bb":{"c":[],"b":[],"k":[]},"A":{"a":[]},"ax":{"bO":[],"k":[]},"ay":{"cy":["u"]},"az":{"at":["1"]},"bn":{"az":["1"],"at":["1"]},"bm":{"bO":[],"k":[]},"v":{"n":["n<@>*"],"n.T":"n<@>*"},"o":{"n":["v*"]},"S":{"o":[],"n":["v*"],"n.T":"v*"},"au":{"o":[],"n":["v*"],"n.T":"v*"},"am":{"o":[],"n":["v*"],"n.T":"v*"},"ah":{"o":[],"n":["v*"],"n.T":"v*"}}'))
H.eI(v.typeUniverse,JSON.parse('{"ak":1,"be":1,"aE":1}'))
var u=(function rtii(){var t=H.dE
return{n:t("ag"),C:t("f"),B:t("a"),Z:t("a8"),d:t("al<@>"),N:t("p<@>"),s:t("q<x>"),b:t("q<@>"),V:t("q<o*>"),T:t("a9"),g:t("Q"),P:t("i"),K:t("h"),q:t("cy<u>"),l:t("F"),W:t("x"),p:t("K"),D:t("a3"),w:t("bO"),L:t("bn<a*>"),c:t("B<@>"),a:t("B<H>"),y:t("G"),r:t("G(h)"),i:t("aR"),z:t("@"),O:t("@()"),v:t("@(h)"),Q:t("@(h,F)"),S:t("H"),f:t("Y*"),t:t("a7*"),m:t("o*"),R:t("cX*"),I:t("a*"),h:t("c*"),j:t("a0*"),U:t("T<o*>*"),k:t("E*"),A:t("0&*"),_:t("h*"),J:t("K*"),u:t("k?"),x:t("al<i>?"),X:t("h?"),F:t("aA<@,@>?"),E:t("br?"),o:t("@(a)?"),Y:t("~()?"),G:t("u"),H:t("~"),M:t("~()"),e:t("~(K)")}})();(function constants(){C.j=W.Y.prototype
C.c=W.a7.prototype
C.u=J.w.prototype
C.a=J.q.prototype
C.k=J.an.prototype
C.d=J.ao.prototype
C.v=J.a9.prototype
C.e=J.a_.prototype
C.w=J.Q.prototype
C.x=W.a0.prototype
C.l=J.b7.prototype
C.f=J.a3.prototype
C.h=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.m=function() {
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
C.r=function(getTagFallback) {
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
C.n=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.o=function(hooks) {
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
C.q=function(hooks) {
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
C.p=function(hooks) {
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
C.i=function(hooks) { return hooks; }

C.b=new P.bs()
C.t=new P.bt()})();(function staticFields(){$.dd=null
$.J=0
$.cV=null
$.cU=null
$.dG=null
$.dx=null
$.dM=null
$.ce=null
$.ci=null
$.cM=null
$.ab=null
$.aN=null
$.aO=null
$.cG=!1
$.j=C.b
$.M=H.aT([],H.dE("q<h>"))
$.cr=null
$.cO=!1
$.dA=!1
$.cH=!1
$.dB=!1})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"fK","dQ",function(){return H.fp("_$dart_dartClosure")})
t($,"fU","dR",function(){return H.L(H.bN({
toString:function(){return"$receiver$"}}))})
t($,"fV","dS",function(){return H.L(H.bN({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"fW","dT",function(){return H.L(H.bN(null))})
t($,"fX","dU",function(){return H.L(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"h_","dX",function(){return H.L(H.bN(void 0))})
t($,"h0","dY",function(){return H.L(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"fZ","dW",function(){return H.L(H.d7(null))})
t($,"fY","dV",function(){return H.L(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"h2","e_",function(){return H.L(H.d7(void 0))})
t($,"h1","dZ",function(){return H.L(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"h3","cP",function(){return P.ep()})
t($,"hh","e0",function(){var s=W.fk().createElement("img")
s.src="./cat.png"
return s})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.w,MediaError:J.w,NavigatorUserMediaError:J.w,OverconstrainedError:J.w,PositionError:J.w,WebGLRenderingContext:J.w,WebGL2RenderingContext:J.w,SQLError:J.w,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLLIElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.aW,HTMLAreaElement:W.aX,HTMLCanvasElement:W.Y,CanvasRenderingContext2D:W.a7,CDATASection:W.D,CharacterData:W.D,Comment:W.D,ProcessingInstruction:W.D,Text:W.D,DOMException:W.bD,DOMRectReadOnly:W.ai,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,EventTarget:W.k,HTMLFormElement:W.b0,HTMLInputElement:W.b2,HTMLLabelElement:W.a0,MouseEvent:W.E,DragEvent:W.E,PointerEvent:W.E,WheelEvent:W.E,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,HTMLSelectElement:W.bb,CompositionEvent:W.A,FocusEvent:W.A,KeyboardEvent:W.A,TextEvent:W.A,TouchEvent:W.A,UIEvent:W.A,Window:W.ax,DOMWindow:W.ax,ClientRect:W.ay,DOMRect:W.ay})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLInputElement:true,HTMLLabelElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.dK,[])
else F.dK([])})})()
//# sourceMappingURL=main.dart.js.map
