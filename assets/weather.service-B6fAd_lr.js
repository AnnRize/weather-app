var Re=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var l=(e,t,n)=>(Re(e,t,"read from private field"),n?n.call(e):t.get(e)),S=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},O=(e,t,n,r)=>(Re(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);var A=(e,t,n)=>(Re(e,t,"access private method"),n);import{S as Bt,s as Te,j as jt,k as Qe,l as We,m as kt,q as It,v as vt,w as Ke,x as Mt,y as Ht,z as qt,A as zt,B as Jt,C as Vt,D as fe,E as Qt,G as Wt,H as Kt,I as $t,J as $e,K as Ge}from"./index-MQ-TjPsP.js";var x,R,Z,C,I,z,_,Y,J,V,v,M,k,Q,H,G,ee,Ce,te,xe,ne,Pe,re,Ne,se,Fe,ie,Ue,oe,De,pe,dt,ft,Gt=(ft=class extends Bt{constructor(t,n){super();S(this,H);S(this,ee);S(this,te);S(this,ne);S(this,re);S(this,se);S(this,ie);S(this,oe);S(this,pe);S(this,x,void 0);S(this,R,void 0);S(this,Z,void 0);S(this,C,void 0);S(this,I,void 0);S(this,z,void 0);S(this,_,void 0);S(this,Y,void 0);S(this,J,void 0);S(this,V,void 0);S(this,v,void 0);S(this,M,void 0);S(this,k,void 0);S(this,Q,new Set);this.options=n,O(this,x,t),O(this,_,null),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(l(this,R).addObserver(this),Xe(l(this,R),this.options)?A(this,H,G).call(this):this.updateResult(),A(this,re,Ne).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return _e(l(this,R),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return _e(l(this,R),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,A(this,se,Fe).call(this),A(this,ie,Ue).call(this),l(this,R).removeObserver(this)}setOptions(t,n){const r=this.options,s=l(this,R);if(this.options=l(this,x).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");A(this,oe,De).call(this),l(this,R).setOptions(this.options),r._defaulted&&!Te(this.options,r)&&l(this,x).getQueryCache().notify({type:"observerOptionsUpdated",query:l(this,R),observer:this});const i=this.hasListeners();i&&Ze(l(this,R),s,this.options,r)&&A(this,H,G).call(this),this.updateResult(n),i&&(l(this,R)!==s||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&A(this,ee,Ce).call(this);const o=A(this,te,xe).call(this);i&&(l(this,R)!==s||this.options.enabled!==r.enabled||o!==l(this,k))&&A(this,ne,Pe).call(this,o)}getOptimisticResult(t){const n=l(this,x).getQueryCache().build(l(this,x),t),r=this.createResult(n,t);return Zt(this,r)&&(O(this,C,r),O(this,z,this.options),O(this,I,l(this,R).state)),r}getCurrentResult(){return l(this,C)}trackResult(t,n){const r={};return Object.keys(t).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(s),n==null||n(s),t[s])})}),r}trackProp(t){l(this,Q).add(t)}getCurrentQuery(){return l(this,R)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const n=l(this,x).defaultQueryOptions(t),r=l(this,x).getQueryCache().build(l(this,x),n);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,n))}fetch(t){return A(this,H,G).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),l(this,C)))}createResult(t,n){var Ve;const r=l(this,R),s=this.options,i=l(this,C),o=l(this,I),u=l(this,z),m=t!==r?t.state:l(this,Z),{state:f}=t;let c={...f},y=!1,w;if(n._optimisticResults){const F=this.hasListeners(),Ee=!F&&Xe(t,n),Lt=F&&Ze(t,r,n,s);(Ee||Lt)&&(c={...c,...vt(f.data,t.options)}),n._optimisticResults==="isRestoring"&&(c.fetchStatus="idle")}let{error:d,errorUpdatedAt:h,status:E}=c;if(n.select&&c.data!==void 0)if(i&&c.data===(o==null?void 0:o.data)&&n.select===l(this,Y))w=l(this,J);else try{O(this,Y,n.select),w=n.select(c.data),w=Ke(i==null?void 0:i.data,w,n),O(this,J,w),O(this,_,null)}catch(F){O(this,_,F)}else w=c.data;if(n.placeholderData!==void 0&&w===void 0&&E==="pending"){let F;if(i!=null&&i.isPlaceholderData&&n.placeholderData===(u==null?void 0:u.placeholderData))F=i.data;else if(F=typeof n.placeholderData=="function"?n.placeholderData((Ve=l(this,V))==null?void 0:Ve.state.data,l(this,V)):n.placeholderData,n.select&&F!==void 0)try{F=n.select(F),O(this,_,null)}catch(Ee){O(this,_,Ee)}F!==void 0&&(E="success",w=Ke(i==null?void 0:i.data,F,n),y=!0)}l(this,_)&&(d=l(this,_),w=l(this,J),h=Date.now(),E="error");const g=c.fetchStatus==="fetching",P=E==="pending",N=E==="error",le=P&&g,Je=w!==void 0;return{status:E,fetchStatus:c.fetchStatus,isPending:P,isSuccess:E==="success",isError:N,isInitialLoading:le,isLoading:le,data:w,dataUpdatedAt:c.dataUpdatedAt,error:d,errorUpdatedAt:h,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>m.dataUpdateCount||c.errorUpdateCount>m.errorUpdateCount,isFetching:g,isRefetching:g&&!P,isLoadingError:N&&!Je,isPaused:c.fetchStatus==="paused",isPlaceholderData:y,isRefetchError:N&&Je,isStale:ve(t,n),refetch:this.refetch}}updateResult(t){const n=l(this,C),r=this.createResult(l(this,R),this.options);if(O(this,I,l(this,R).state),O(this,z,this.options),l(this,I).data!==void 0&&O(this,V,l(this,R)),Te(r,n))return;O(this,C,r);const s={},i=()=>{if(!n)return!0;const{notifyOnChangeProps:o}=this.options,u=typeof o=="function"?o():o;if(u==="all"||!u&&!l(this,Q).size)return!0;const p=new Set(u??l(this,Q));return this.options.throwOnError&&p.add("error"),Object.keys(l(this,C)).some(m=>{const f=m;return l(this,C)[f]!==n[f]&&p.has(f)})};(t==null?void 0:t.listeners)!==!1&&i()&&(s.listeners=!0),A(this,pe,dt).call(this,{...s,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&A(this,re,Ne).call(this)}},x=new WeakMap,R=new WeakMap,Z=new WeakMap,C=new WeakMap,I=new WeakMap,z=new WeakMap,_=new WeakMap,Y=new WeakMap,J=new WeakMap,V=new WeakMap,v=new WeakMap,M=new WeakMap,k=new WeakMap,Q=new WeakMap,H=new WeakSet,G=function(t){A(this,oe,De).call(this);let n=l(this,R).fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(jt)),n},ee=new WeakSet,Ce=function(){if(A(this,se,Fe).call(this),Qe||l(this,C).isStale||!We(this.options.staleTime))return;const n=kt(l(this,C).dataUpdatedAt,this.options.staleTime)+1;O(this,v,setTimeout(()=>{l(this,C).isStale||this.updateResult()},n))},te=new WeakSet,xe=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(l(this,R)):this.options.refetchInterval)??!1},ne=new WeakSet,Pe=function(t){A(this,ie,Ue).call(this),O(this,k,t),!(Qe||this.options.enabled===!1||!We(l(this,k))||l(this,k)===0)&&O(this,M,setInterval(()=>{(this.options.refetchIntervalInBackground||It.isFocused())&&A(this,H,G).call(this)},l(this,k)))},re=new WeakSet,Ne=function(){A(this,ee,Ce).call(this),A(this,ne,Pe).call(this,A(this,te,xe).call(this))},se=new WeakSet,Fe=function(){l(this,v)&&(clearTimeout(l(this,v)),O(this,v,void 0))},ie=new WeakSet,Ue=function(){l(this,M)&&(clearInterval(l(this,M)),O(this,M,void 0))},oe=new WeakSet,De=function(){const t=l(this,x).getQueryCache().build(l(this,x),this.options);if(t===l(this,R))return;const n=l(this,R);O(this,R,t),O(this,Z,t.state),this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))},pe=new WeakSet,dt=function(t){Mt.batch(()=>{t.listeners&&this.listeners.forEach(n=>{n(l(this,C))}),l(this,x).getQueryCache().notify({query:l(this,R),type:"observerResultsUpdated"})})},ft);function Xt(e,t){return t.enabled!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Xe(e,t){return Xt(e,t)||e.state.data!==void 0&&_e(e,t,t.refetchOnMount)}function _e(e,t,n){if(t.enabled!==!1){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&ve(e,t)}return!1}function Ze(e,t,n,r){return(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&ve(e,n)}function ve(e,t){return t.enabled!==!1&&e.isStaleByTime(t.staleTime)}function Zt(e,t){return!Te(e.getCurrentResult(),t)}function Yt(e=""){if(!Ht())throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");const t=zt(e),n=qt(t);if(!n)throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");return n}function en(e,t,n){const r=Yt(),s=Jt(()=>{const y=$t(t);typeof y.enabled=="function"&&(y.enabled=y.enabled());const w=r.defaultQueryOptions(y);return w._optimisticResults=r.isRestoring.value?"isRestoring":"optimistic",w}),i=new e(r,s.value),o=Vt(i.getCurrentResult());let u=()=>{};fe(r.isRestoring,y=>{y||(u(),u=i.subscribe(w=>{$e(o,w)}))},{immediate:!0});const p=()=>{i.setOptions(s.value),$e(o,i.getCurrentResult())};fe(s,p),Qt(()=>{u()});const m=(...y)=>(p(),o.refetch(...y)),f=()=>new Promise((y,w)=>{let d=()=>{};const h=()=>{if(s.value.enabled!==!1){i.setOptions(s.value);const E=i.getOptimisticResult(s.value);E.isStale?(d(),i.fetchOptimistic(s.value).then(y,g=>{Ge(s.value.throwOnError,[g,i.getCurrentQuery()])?w(g):y(i.getCurrentResult())})):(d(),y(E))}};h(),d=fe(s,h)});fe(()=>o.error,y=>{if(o.isError&&!o.isFetching&&Ge(s.value.throwOnError,[y,i.getCurrentQuery()]))throw y});const c=Wt(Kt(o));for(const y in o)typeof o[y]=="function"&&(c[y]=o[y]);return c.suspense=f,c.refetch=m,c}function Er(e,t){return en(Gt,e)}function ht(e,t){return function(){return e.apply(t,arguments)}}const{toString:tn}=Object.prototype,{getPrototypeOf:Me}=Object,me=(e=>t=>{const n=tn.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),B=e=>(e=e.toLowerCase(),t=>me(t)===e),ye=e=>t=>typeof t===e,{isArray:K}=Array,X=ye("undefined");function nn(e){return e!==null&&!X(e)&&e.constructor!==null&&!X(e.constructor)&&U(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const pt=B("ArrayBuffer");function rn(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&pt(e.buffer),t}const sn=ye("string"),U=ye("function"),mt=ye("number"),be=e=>e!==null&&typeof e=="object",on=e=>e===!0||e===!1,de=e=>{if(me(e)!=="object")return!1;const t=Me(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},an=B("Date"),cn=B("File"),un=B("Blob"),ln=B("FileList"),fn=e=>be(e)&&U(e.pipe),dn=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||U(e.append)&&((t=me(e))==="formdata"||t==="object"&&U(e.toString)&&e.toString()==="[object FormData]"))},hn=B("URLSearchParams"),pn=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ae(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),K(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let u;for(r=0;r<o;r++)u=i[r],t.call(null,e[u],u,e)}}function yt(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const bt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wt=e=>!X(e)&&e!==bt;function Le(){const{caseless:e}=wt(this)&&this||{},t={},n=(r,s)=>{const i=e&&yt(t,s)||s;de(t[i])&&de(r)?t[i]=Le(t[i],r):de(r)?t[i]=Le({},r):K(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&ae(arguments[r],n);return t}const mn=(e,t,n,{allOwnKeys:r}={})=>(ae(t,(s,i)=>{n&&U(s)?e[i]=ht(s,n):e[i]=s},{allOwnKeys:r}),e),yn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),bn=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},wn=(e,t,n,r)=>{let s,i,o;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!u[o]&&(t[o]=e[o],u[o]=!0);e=n!==!1&&Me(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},En=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Rn=e=>{if(!e)return null;if(K(e))return e;let t=e.length;if(!mt(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Sn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Me(Uint8Array)),On=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},gn=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},An=B("HTMLFormElement"),Tn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ye=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Cn=B("RegExp"),Et=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ae(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},xn=e=>{Et(e,(t,n)=>{if(U(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(U(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Pn=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return K(e)?r(e):r(String(e).split(t)),n},Nn=()=>{},Fn=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Se="abcdefghijklmnopqrstuvwxyz",et="0123456789",Rt={DIGIT:et,ALPHA:Se,ALPHA_DIGIT:Se+Se.toUpperCase()+et},Un=(e=16,t=Rt.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Dn(e){return!!(e&&U(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const _n=e=>{const t=new Array(10),n=(r,s)=>{if(be(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=K(r)?[]:{};return ae(r,(o,u)=>{const p=n(o,s+1);!X(p)&&(i[u]=p)}),t[s]=void 0,i}}return r};return n(e,0)},Ln=B("AsyncFunction"),Bn=e=>e&&(be(e)||U(e))&&U(e.then)&&U(e.catch),a={isArray:K,isArrayBuffer:pt,isBuffer:nn,isFormData:dn,isArrayBufferView:rn,isString:sn,isNumber:mt,isBoolean:on,isObject:be,isPlainObject:de,isUndefined:X,isDate:an,isFile:cn,isBlob:un,isRegExp:Cn,isFunction:U,isStream:fn,isURLSearchParams:hn,isTypedArray:Sn,isFileList:ln,forEach:ae,merge:Le,extend:mn,trim:pn,stripBOM:yn,inherits:bn,toFlatObject:wn,kindOf:me,kindOfTest:B,endsWith:En,toArray:Rn,forEachEntry:On,matchAll:gn,isHTMLForm:An,hasOwnProperty:Ye,hasOwnProp:Ye,reduceDescriptors:Et,freezeMethods:xn,toObjectSet:Pn,toCamelCase:Tn,noop:Nn,toFiniteNumber:Fn,findKey:yt,global:bt,isContextDefined:wt,ALPHABET:Rt,generateString:Un,isSpecCompliantForm:Dn,toJSONObject:_n,isAsyncFn:Ln,isThenable:Bn};function b(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(b,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const St=b.prototype,Ot={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ot[e]={value:e}});Object.defineProperties(b,Ot);Object.defineProperty(St,"isAxiosError",{value:!0});b.from=(e,t,n,r,s,i)=>{const o=Object.create(St);return a.toFlatObject(e,o,function(p){return p!==Error.prototype},u=>u!=="isAxiosError"),b.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const jn=null;function Be(e){return a.isPlainObject(e)||a.isArray(e)}function gt(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function tt(e,t,n){return e?e.concat(t).map(function(s,i){return s=gt(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function kn(e){return a.isArray(e)&&!e.some(Be)}const In=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function we(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,E){return!a.isUndefined(E[h])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function m(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!p&&a.isBlob(d))throw new b("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?p&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function f(d,h,E){let g=d;if(d&&!E&&typeof d=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&kn(d)||(a.isFileList(d)||a.endsWith(h,"[]"))&&(g=a.toArray(d)))return h=gt(h),g.forEach(function(N,le){!(a.isUndefined(N)||N===null)&&t.append(o===!0?tt([h],le,i):o===null?h:h+"[]",m(N))}),!1}return Be(d)?!0:(t.append(tt(E,h,i),m(d)),!1)}const c=[],y=Object.assign(In,{defaultVisitor:f,convertValue:m,isVisitable:Be});function w(d,h){if(!a.isUndefined(d)){if(c.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));c.push(d),a.forEach(d,function(g,P){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(P)?P.trim():P,h,y))===!0&&w(g,h?h.concat(P):[P])}),c.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function nt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function He(e,t){this._pairs=[],e&&we(e,this,t)}const At=He.prototype;At.append=function(t,n){this._pairs.push([t,n])};At.toString=function(t){const n=t?function(r){return t.call(this,r,nt)}:nt;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function vn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Tt(e,t,n){if(!t)return e;const r=n&&n.encode||vn,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new He(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class rt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ct={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Mn=typeof URLSearchParams<"u"?URLSearchParams:He,Hn=typeof FormData<"u"?FormData:null,qn=typeof Blob<"u"?Blob:null,zn={isBrowser:!0,classes:{URLSearchParams:Mn,FormData:Hn,Blob:qn},protocols:["http","https","file","blob","url","data"]},xt=typeof window<"u"&&typeof document<"u",Jn=(e=>xt&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Vn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Qn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:xt,hasStandardBrowserEnv:Jn,hasStandardBrowserWebWorkerEnv:Vn},Symbol.toStringTag,{value:"Module"})),L={...Qn,...zn};function Wn(e,t){return we(e,new L.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return L.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Kn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function $n(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Pt(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const u=Number.isFinite(+o),p=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,p?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!u):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=$n(s[o])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Kn(r),s,n,0)}),n}return null}function Gn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ce={transitional:Ct,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Pt(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Wn(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return we(u?{"files[]":t}:t,p&&new p,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Gn(t)):t}],transformResponse:[function(t){const n=this.transitional||ce.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(o)throw u.name==="SyntaxError"?b.from(u,b.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:L.classes.FormData,Blob:L.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ce.headers[e]={}});const Xn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Zn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Xn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},st=Symbol("internals");function $(e){return e&&String(e).trim().toLowerCase()}function he(e){return e===!1||e==null?e:a.isArray(e)?e.map(he):String(e)}function Yn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const er=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Oe(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function tr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function nr(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class D{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(u,p,m){const f=$(p);if(!f)throw new Error("header name must be a non-empty string");const c=a.findKey(s,f);(!c||s[c]===void 0||m===!0||m===void 0&&s[c]!==!1)&&(s[c||p]=he(u))}const o=(u,p)=>a.forEach(u,(m,f)=>i(m,f,p));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!er(t)?o(Zn(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=$(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Yn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=$(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Oe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=$(o),o){const u=a.findKey(r,o);u&&(!n||Oe(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Oe(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=he(s),delete n[i];return}const u=t?tr(i):String(i).trim();u!==i&&delete n[i],n[u]=he(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[st]=this[st]={accessors:{}}).accessors,s=this.prototype;function i(o){const u=$(o);r[u]||(nr(s,o),r[u]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}D.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(D.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(D);function ge(e,t){const n=this||ce,r=t||n,s=D.from(r.headers);let i=r.data;return a.forEach(e,function(u){i=u.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Nt(e){return!!(e&&e.__CANCEL__)}function ue(e,t,n){b.call(this,e??"canceled",b.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(ue,b,{__CANCEL__:!0});function rr(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new b("Request failed with status code "+n.status,[b.ERR_BAD_REQUEST,b.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const sr=L.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),a.isString(r)&&o.push("path="+r),a.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ir(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function or(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ft(e,t){return e&&!ir(t)?or(e,t):t}const ar=L.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const u=a.isString(o)?s(o):o;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function cr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ur(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(p){const m=Date.now(),f=r[i];o||(o=m),n[s]=p,r[s]=m;let c=i,y=0;for(;c!==s;)y+=n[c++],c=c%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),m-o<t)return;const w=f&&m-f;return w?Math.round(y*1e3/w):void 0}}function it(e,t){let n=0;const r=ur(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,u=i-n,p=r(u),m=i<=o;n=i;const f={loaded:i,total:o,progress:o?i/o:void 0,bytes:u,rate:p||void 0,estimated:p&&o&&m?(o-i)/p:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const lr=typeof XMLHttpRequest<"u",fr=lr&&function(e){return new Promise(function(n,r){let s=e.data;const i=D.from(e.headers).normalize();let{responseType:o,withXSRFToken:u}=e,p;function m(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let f;if(a.isFormData(s)){if(L.hasStandardBrowserEnv||L.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[h,...E]=f?f.split(";").map(g=>g.trim()).filter(Boolean):[];i.setContentType([h||"multipart/form-data",...E].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(h+":"+E))}const y=Ft(e.baseURL,e.url);c.open(e.method.toUpperCase(),Tt(y,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function w(){if(!c)return;const h=D.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),g={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:h,config:e,request:c};rr(function(N){n(N),m()},function(N){r(N),m()},g),c=null}if("onloadend"in c?c.onloadend=w:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(w)},c.onabort=function(){c&&(r(new b("Request aborted",b.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new b("Network Error",b.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||Ct;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),r(new b(E,g.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,c)),c=null},L.hasStandardBrowserEnv&&(u&&a.isFunction(u)&&(u=u(e)),u||u!==!1&&ar(y))){const h=e.xsrfHeaderName&&e.xsrfCookieName&&sr.read(e.xsrfCookieName);h&&i.set(e.xsrfHeaderName,h)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(E,g){c.setRequestHeader(g,E)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",it(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",it(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=h=>{c&&(r(!h||h.type?new ue(null,e,c):h),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const d=cr(y);if(d&&L.protocols.indexOf(d)===-1){r(new b("Unsupported protocol "+d+":",b.ERR_BAD_REQUEST,e));return}c.send(s||null)})},je={http:jn,xhr:fr};a.forEach(je,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ot=e=>`- ${e}`,dr=e=>a.isFunction(e)||e===null||e===!1,Ut={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!dr(n)&&(r=je[(o=String(n)).toLowerCase()],r===void 0))throw new b(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([u,p])=>`adapter ${u} `+(p===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(ot).join(`
`):" "+ot(i[0]):"as no adapter specified";throw new b("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:je};function Ae(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ue(null,e)}function at(e){return Ae(e),e.headers=D.from(e.headers),e.data=ge.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ut.getAdapter(e.adapter||ce.adapter)(e).then(function(r){return Ae(e),r.data=ge.call(e,e.transformResponse,r),r.headers=D.from(r.headers),r},function(r){return Nt(r)||(Ae(e),r&&r.response&&(r.response.data=ge.call(e,e.transformResponse,r.response),r.response.headers=D.from(r.response.headers))),Promise.reject(r)})}const ct=e=>e instanceof D?{...e}:e;function W(e,t){t=t||{};const n={};function r(m,f,c){return a.isPlainObject(m)&&a.isPlainObject(f)?a.merge.call({caseless:c},m,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(m,f,c){if(a.isUndefined(f)){if(!a.isUndefined(m))return r(void 0,m,c)}else return r(m,f,c)}function i(m,f){if(!a.isUndefined(f))return r(void 0,f)}function o(m,f){if(a.isUndefined(f)){if(!a.isUndefined(m))return r(void 0,m)}else return r(void 0,f)}function u(m,f,c){if(c in t)return r(m,f);if(c in e)return r(void 0,m)}const p={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u,headers:(m,f)=>s(ct(m),ct(f),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(f){const c=p[f]||s,y=c(e[f],t[f],f);a.isUndefined(y)&&c!==u||(n[f]=y)}),n}const Dt="1.6.8",qe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{qe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ut={};qe.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Dt+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,u)=>{if(t===!1)throw new b(s(o," has been removed"+(n?" in "+n:"")),b.ERR_DEPRECATED);return n&&!ut[o]&&(ut[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,u):!0}};function hr(e,t,n){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const u=e[i],p=u===void 0||o(u,i,e);if(p!==!0)throw new b("option "+i+" must be "+p,b.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new b("Unknown option "+i,b.ERR_BAD_OPTION)}}const ke={assertOptions:hr,validators:qe},j=ke.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new rt,response:new rt}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=W(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ke.assertOptions(r,{silentJSONParsing:j.transitional(j.boolean),forcedJSONParsing:j.transitional(j.boolean),clarifyTimeoutError:j.transitional(j.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ke.assertOptions(s,{encode:j.function,serialize:j.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete i[d]}),n.headers=D.concat(o,i);const u=[];let p=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(p=p&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const m=[];this.interceptors.response.forEach(function(h){m.push(h.fulfilled,h.rejected)});let f,c=0,y;if(!p){const d=[at.bind(this),void 0];for(d.unshift.apply(d,u),d.push.apply(d,m),y=d.length,f=Promise.resolve(n);c<y;)f=f.then(d[c++],d[c++]);return f}y=u.length;let w=n;for(c=0;c<y;){const d=u[c++],h=u[c++];try{w=d(w)}catch(E){h.call(this,E);break}}try{f=at.call(this,w)}catch(d){return Promise.reject(d)}for(c=0,y=m.length;c<y;)f=f.then(m[c++],m[c++]);return f}getUri(t){t=W(this.defaults,t);const n=Ft(t.baseURL,t.url);return Tt(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(n,r){return this.request(W(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,u){return this.request(W(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}q.prototype[t]=n(),q.prototype[t+"Form"]=n(!0)});class ze{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(u=>{r.subscribe(u),i=u}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,u){r.reason||(r.reason=new ue(i,o,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ze(function(s){t=s}),cancel:t}}}function pr(e){return function(n){return e.apply(null,n)}}function mr(e){return a.isObject(e)&&e.isAxiosError===!0}const Ie={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ie).forEach(([e,t])=>{Ie[t]=e});function _t(e){const t=new q(e),n=ht(q.prototype.request,t);return a.extend(n,q.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return _t(W(e,s))},n}const T=_t(ce);T.Axios=q;T.CanceledError=ue;T.CancelToken=ze;T.isCancel=Nt;T.VERSION=Dt;T.toFormData=we;T.AxiosError=b;T.Cancel=T.CanceledError;T.all=function(t){return Promise.all(t)};T.spread=pr;T.isAxiosError=mr;T.mergeConfig=W;T.AxiosHeaders=D;T.formToJSON=e=>Pt(a.isHTMLForm(e)?new FormData(e):e);T.getAdapter=Ut.getAdapter;T.HttpStatusCode=Ie;T.default=T;const lt=T.create({baseURL:"https://api.openweathermap.org/data/2.5/",params:{appid:"ae5e0e421bb0a8a29c08b7966d912bd0",units:"metric",lang:"ru"}}),Rr={async getCurrent(e,t){return(await lt.get("weather",{params:{lat:e,lon:t}})).data},async getForecast(e,t){return(await lt.get("forecast",{params:{lat:e,lon:t}})).data}};export{Rr as W,Er as u};
