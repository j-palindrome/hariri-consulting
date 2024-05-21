import{g as ct,r as c,bF as dt,e as lt,j as M,bG as Q,bH as pt}from"./sanity-39d42081.js";import{w as yt,r as mt,p as vt,t as wt,D as C,g as V,a as gt}from"./PresentationTool-2d688f4f.js";import"./DisplayedDocumentBroadcaster-cdd62250.js";const At=e=>e;function St(e,r,t,n=At,i="raw"){if(!r)return e;if(i!=="published"&&i!=="raw"&&i!=="previewDrafts")throw new Error(`Unknown perspective "${i}"`);return yt(JSON.parse(JSON.stringify(e)),(s,f)=>{const h=mt(f,r);if(!h)return s;const{mapping:o,pathSuffix:a}=h;if(o.type!=="value"||o.source.type!=="documentValue")return s;const u=r.documents[o.source.document],l=r.paths[o.source.path];if(u){const y=vt(l+a),v=wt(y);if(v==="_id")return s;let d;if(i==="previewDrafts"?(d=t(u._id.startsWith(C)?u:{...u,_id:`${C}${u._id}}`}),d||(d=t(u._id.startsWith(C)?{...u,_id:V(u._id)}:u)),d&&(d={...d,_id:V(u._id),_originalId:u._id})):d=t(u),!d)return s;const m=d?gt(d,v,s):s;return s===m?s:n(m,{cachedDocument:d,previousValue:s,sourceDocument:u,sourcePath:y})}return s})}function S(e){if(typeof e!="function")throw new Error("obliterator/iterator: expecting a function!");this.next=e}typeof Symbol<"u"&&(S.prototype[Symbol.iterator]=function(){return this});S.of=function(){var e=arguments,r=e.length,t=0;return new S(function(){return t>=r?{done:!0}:{done:!1,value:e[t++]}})};S.empty=function(){var e=new S(function(){return{done:!0}});return e};S.fromSequence=function(e){var r=0,t=e.length;return new S(function(){return r>=t?{done:!0}:{done:!1,value:e[r++]}})};S.is=function(e){return e instanceof S?!0:typeof e=="object"&&e!==null&&typeof e.next=="function"};var Et=S,F={};F.ARRAY_BUFFER_SUPPORT=typeof ArrayBuffer<"u";F.SYMBOL_SUPPORT=typeof Symbol<"u";var et=F,It=et.ARRAY_BUFFER_SUPPORT,bt=et.SYMBOL_SUPPORT,k=function(r,t){var n,i,s,f,h;if(!r)throw new Error("obliterator/forEach: invalid iterable.");if(typeof t!="function")throw new Error("obliterator/forEach: expecting a callback.");if(Array.isArray(r)||It&&ArrayBuffer.isView(r)||typeof r=="string"||r.toString()==="[object Arguments]"){for(s=0,f=r.length;s<f;s++)t(r[s],s);return}if(typeof r.forEach=="function"){r.forEach(t);return}if(bt&&Symbol.iterator in r&&typeof r.next!="function"&&(r=r[Symbol.iterator]()),typeof r.next=="function"){for(n=r,s=0;h=n.next(),h.done!==!0;)t(h.value,s),s++;return}for(i in r)r.hasOwnProperty(i)&&t(r[i],i)},j={};(function(e){var r=Math.pow(2,8)-1,t=Math.pow(2,16)-1,n=Math.pow(2,32)-1,i=Math.pow(2,7)-1,s=Math.pow(2,15)-1,f=Math.pow(2,31)-1;e.getPointerArray=function(o){var a=o-1;if(a<=r)return Uint8Array;if(a<=t)return Uint16Array;if(a<=n)return Uint32Array;throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")},e.getSignedPointerArray=function(o){var a=o-1;return a<=i?Int8Array:a<=s?Int16Array:a<=f?Int32Array:Float64Array},e.getNumberType=function(o){return o===(o|0)?Math.sign(o)===-1?o<=127&&o>=-128?Int8Array:o<=32767&&o>=-32768?Int16Array:Int32Array:o<=255?Uint8Array:o<=65535?Uint16Array:Uint32Array:Float64Array};var h={Uint8Array:1,Int8Array:2,Uint16Array:3,Int16Array:4,Uint32Array:5,Int32Array:6,Float32Array:7,Float64Array:8};e.getMinimalRepresentation=function(o,a){var u=null,l=0,y,v,d,m,w;for(m=0,w=o.length;m<w;m++)d=a?a(o[m]):o[m],v=e.getNumberType(d),y=h[v.name],y>l&&(l=y,u=v);return u},e.isTypedArray=function(o){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(o)},e.concat=function(){var o=0,a,u,l;for(a=0,l=arguments.length;a<l;a++)o+=arguments[a].length;var y=new arguments[0].constructor(o);for(a=0,u=0;a<l;a++)y.set(arguments[a],u),u+=arguments[a].length;return y},e.indices=function(o){for(var a=e.getPointerArray(o),u=new a(o),l=0;l<o;l++)u[l]=l;return u}})(j);var L={},rt=k,it=j;function _t(e){return Array.isArray(e)||it.isTypedArray(e)}function N(e){if(typeof e.length=="number")return e.length;if(typeof e.size=="number")return e.size}function Pt(e){var r=N(e),t=typeof r=="number"?new Array(r):[],n=0;return rt(e,function(i){t[n++]=i}),t}function Mt(e){var r=N(e),t=typeof r=="number"?it.getPointerArray(r):Array,n=typeof r=="number"?new Array(r):[],i=typeof r=="number"?new t(r):[],s=0;return rt(e,function(f){n[s]=f,i[s]=s++}),[n,i]}L.isArrayLike=_t;L.guessLength=N;L.toArray=Pt;L.toArrayWithIndices=Mt;var B=Et,zt=k,Rt=j,Tt=L;function p(e,r,t){if(arguments.length<2&&(t=e,e=null,r=null),this.capacity=t,typeof this.capacity!="number"||this.capacity<=0)throw new Error("mnemonist/lru-cache: capacity should be positive number.");if(!isFinite(this.capacity)||Math.floor(this.capacity)!==this.capacity)throw new Error("mnemonist/lru-cache: capacity should be a finite positive integer.");var n=Rt.getPointerArray(t);this.forward=new n(t),this.backward=new n(t),this.K=typeof e=="function"?new e(t):new Array(t),this.V=typeof r=="function"?new r(t):new Array(t),this.size=0,this.head=0,this.tail=0,this.items={}}p.prototype.clear=function(){this.size=0,this.head=0,this.tail=0,this.items={}};p.prototype.splayOnTop=function(e){var r=this.head;if(this.head===e)return this;var t=this.backward[e],n=this.forward[e];return this.tail===e?this.tail=t:this.backward[n]=t,this.forward[t]=n,this.backward[r]=e,this.head=e,this.forward[e]=r,this};p.prototype.set=function(e,r){var t=this.items[e];if(typeof t<"u"){this.splayOnTop(t),this.V[t]=r;return}this.size<this.capacity?t=this.size++:(t=this.tail,this.tail=this.backward[t],delete this.items[this.K[t]]),this.items[e]=t,this.K[t]=e,this.V[t]=r,this.forward[t]=this.head,this.backward[this.head]=t,this.head=t};p.prototype.setpop=function(e,r){var t=null,n=null,i=this.items[e];return typeof i<"u"?(this.splayOnTop(i),t=this.V[i],this.V[i]=r,{evicted:!1,key:e,value:t}):(this.size<this.capacity?i=this.size++:(i=this.tail,this.tail=this.backward[i],t=this.V[i],n=this.K[i],delete this.items[n]),this.items[e]=i,this.K[i]=e,this.V[i]=r,this.forward[i]=this.head,this.backward[this.head]=i,this.head=i,n?{evicted:!0,key:n,value:t}:null)};p.prototype.has=function(e){return e in this.items};p.prototype.get=function(e){var r=this.items[e];if(!(typeof r>"u"))return this.splayOnTop(r),this.V[r]};p.prototype.peek=function(e){var r=this.items[e];if(!(typeof r>"u"))return this.V[r]};p.prototype.forEach=function(e,r){r=arguments.length>1?r:this;for(var t=0,n=this.size,i=this.head,s=this.K,f=this.V,h=this.forward;t<n;)e.call(r,f[i],s[i],this),i=h[i],t++};p.prototype.keys=function(){var e=0,r=this.size,t=this.head,n=this.K,i=this.forward;return new B(function(){if(e>=r)return{done:!0};var s=n[t];return e++,e<r&&(t=i[t]),{done:!1,value:s}})};p.prototype.values=function(){var e=0,r=this.size,t=this.head,n=this.V,i=this.forward;return new B(function(){if(e>=r)return{done:!0};var s=n[t];return e++,e<r&&(t=i[t]),{done:!1,value:s}})};p.prototype.entries=function(){var e=0,r=this.size,t=this.head,n=this.K,i=this.V,s=this.forward;return new B(function(){if(e>=r)return{done:!0};var f=n[t],h=i[t];return e++,e<r&&(t=s[t]),{done:!1,value:[f,h]}})};typeof Symbol<"u"&&(p.prototype[Symbol.iterator]=p.prototype.entries);p.prototype.inspect=function(){for(var e=new Map,r=this.entries(),t;t=r.next(),!t.done;)e.set(t.value[0],t.value[1]);return Object.defineProperty(e,"constructor",{value:p,enumerable:!1}),e};typeof Symbol<"u"&&(p.prototype[Symbol.for("nodejs.util.inspect.custom")]=p.prototype.inspect);p.from=function(e,r,t,n){if(arguments.length<2){if(n=Tt.guessLength(e),typeof n!="number")throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(n=r,r=null,t=null);var i=new p(r,t,n);return zt(e,function(s,f){i.set(f,s)}),i};var Lt=p,T=Lt,Ut=k,Dt=j,Ot=L;function E(e,r,t){arguments.length<2?T.call(this,e):T.call(this,e,r,t);var n=Dt.getPointerArray(this.capacity);this.deleted=new n(this.capacity),this.deletedSize=0}for(var Z in T.prototype)E.prototype[Z]=T.prototype[Z];typeof Symbol<"u"&&(E.prototype[Symbol.iterator]=T.prototype[Symbol.iterator]);E.prototype.clear=function(){T.prototype.clear.call(this),this.deletedSize=0};E.prototype.set=function(e,r){var t=this.items[e];if(typeof t<"u"){this.splayOnTop(t),this.V[t]=r;return}this.size<this.capacity?(this.deletedSize>0?t=this.deleted[--this.deletedSize]:t=this.size,this.size++):(t=this.tail,this.tail=this.backward[t],delete this.items[this.K[t]]),this.items[e]=t,this.K[t]=e,this.V[t]=r,this.forward[t]=this.head,this.backward[this.head]=t,this.head=t};E.prototype.setpop=function(e,r){var t=null,n=null,i=this.items[e];return typeof i<"u"?(this.splayOnTop(i),t=this.V[i],this.V[i]=r,{evicted:!1,key:e,value:t}):(this.size<this.capacity?(this.deletedSize>0?i=this.deleted[--this.deletedSize]:i=this.size,this.size++):(i=this.tail,this.tail=this.backward[i],t=this.V[i],n=this.K[i],delete this.items[n]),this.items[e]=i,this.K[i]=e,this.V[i]=r,this.forward[i]=this.head,this.backward[this.head]=i,this.head=i,n?{evicted:!0,key:n,value:t}:null)};E.prototype.delete=function(e){var r=this.items[e];if(typeof r>"u")return!1;if(delete this.items[e],this.size===1)return this.size=0,this.head=0,this.tail=0,this.deletedSize=0,!0;var t=this.backward[r],n=this.forward[r];return this.head===r&&(this.head=n),this.tail===r&&(this.tail=t),this.forward[t]=n,this.backward[n]=t,this.size--,this.deleted[this.deletedSize++]=r,!0};E.prototype.remove=function(e,r=void 0){var t=this.items[e];if(typeof t>"u")return r;var n=this.V[t];if(delete this.items[e],this.size===1)return this.size=0,this.head=0,this.tail=0,this.deletedSize=0,n;var i=this.backward[t],s=this.forward[t];return this.head===t&&(this.head=s),this.tail===t&&(this.tail=i),this.forward[i]=s,this.backward[s]=i,this.size--,this.deleted[this.deletedSize++]=t,n};E.from=function(e,r,t,n){if(arguments.length<2){if(n=Ot.guessLength(e),typeof n!="number")throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(n=r,r=null,t=null);var i=new E(r,t,n);return Ut(e,function(s,f){i.set(f,s)}),i};var Vt=E;const jt=ct(Vt);function xt(e){return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)}function Gt(e){const{liveDocument:r,channel:t,perspective:n,liveQueries:i,documentsOnPage:s}=e,[f]=c.useState(()=>new jt(dt)),h=lt({apiVersion:"2023-10-16"}),o=c.useMemo(()=>h.config(),[h]),a=c.useMemo(()=>h.withConfig({resultSourceMap:"withKeyArraySelector"}),[h]);c.useEffect(()=>{if(t){const{projectId:v,dataset:d}=o;t.send("loaders","loader/perspective",{projectId:v,dataset:d,perspective:n})}},[t,o,n]);const u=c.useMemo(()=>{const v=s.map(({_id:w})=>w),d=[...new Set(v)],m=f.capacity;return d.length>=m&&(d.length=m),d},[f.capacity,s]),[l,y]=c.useState(0);return M.jsxs(M.Fragment,{children:[M.jsx(Ct,{cache:f,client:a,turboIds:u,setDocumentsCacheLastUpdated:y}),Object.entries(i).map(([v,{query:d,params:m,perspective:w}])=>M.jsx(Ft,{cache:f,projectId:o.projectId,dataset:o.dataset,perspective:w,query:d,params:m,channel:t,client:a,refreshInterval:n?2e3:0,liveDocument:r,documentsCacheLastUpdated:l},`${v}${w}`))]})}const Ct=c.memo(function(e){const{cache:r,client:t,turboIds:n,setDocumentsCacheLastUpdated:i}=e,[s,f]=c.useState([]);return c.useEffect(()=>{const h=new Set(s.flat()),o=new Set;for(const u of n)!h.has(u)&&!r.has(u)&&o.add(u);const a=[...o].slice(0,Q);a.length!==0&&f(u=>[...u.slice(-Q),a])},[s,r,n]),c.useEffect(()=>{const h=t.listen("*",{},{events:["mutation"],effectFormat:"mendoza",includePreviousRevision:!1,includeResult:!1,tag:"presentation-loader"}).subscribe(o=>{var a,u;if(o.type==="mutation"&&o.transition==="disappear"&&r.delete(o.documentId)&&i(Date.now()),o.type!=="mutation"||(u=(a=o.effects)==null?void 0:a.apply)==null||!u.length)return;const l=r.peek(o.documentId);if(l){const y={...l};delete y._rev;const v=pt(y,o.effects.apply);r.set(o.documentId,v),i(Date.now())}});return()=>h.unsubscribe()},[r,t,i]),M.jsx(M.Fragment,{children:s.map(h=>M.jsx(nt,{cache:r,client:t,ids:h,setDocumentsCacheLastUpdated:i},JSON.stringify(h)))})}),nt=c.memo(function(e){const{client:r,cache:t,ids:n,setDocumentsCacheLastUpdated:i}=e;return c.useEffect(()=>{const s=n.filter(f=>!t.has(f));s.length!==0&&r.getDocuments(s).then(f=>{for(const h of f)h&&h!=null&&h._id&&(t.set(h._id,h),i(Date.now()))},console.error)},[t,r,n,i]),null});function Ft(e){const{cache:r,projectId:t,dataset:n,perspective:i,query:s,client:f,refreshInterval:h,liveDocument:o,channel:a,documentsCacheLastUpdated:u}=e,l=function(m){const w=c.useMemo(()=>JSON.stringify(m||{}),[m]);return c.useMemo(()=>JSON.parse(w),[w])}(e.params),y=function(m){const{cache:w,liveDocument:x,client:D,refreshInterval:st,query:$,params:G,perspective:O,documentsCacheLastUpdated:X}=m,[_,ot]=c.useState(null),{projectId:at,dataset:ut}=c.useMemo(()=>{const{projectId:z,dataset:g}=D.config();return{projectId:z,dataset:g}},[D]),[Y,ht]=c.useState(null);if(Y)throw Y;const[q,K]=function(z){const{refreshInterval:g}=z,R=function(){const[b,U]=c.useState(!1);c.useEffect(()=>{U(navigator.onLine);const J=()=>U(!0),H=()=>U(!1);return window.addEventListener("online",J),window.addEventListener("offline",H),()=>{window.removeEventListener("online",J),window.removeEventListener("offline",H)}},[]);const ft=c.useSyncExternalStore(xt,()=>document.visibilityState,()=>"hidden");return!b||ft==="hidden"}(),[A,I]=c.useState("hit"),P=c.useCallback(()=>(I("inflight"),()=>I("hit")),[]);return c.useEffect(()=>{if(!g||A!=="hit")return;const b=setTimeout(()=>I("stale"),g);return()=>clearTimeout(b)},[g,A]),c.useEffect(()=>{if(A!=="hit")return;const b=()=>I("stale");return window.addEventListener("focus",b),()=>window.removeEventListener("focus",b)},[g,A]),c.useEffect(()=>{R&&A==="hit"&&I("stale"),!R&&A==="stale"&&I("refresh")},[R,A]),[A,P]}({refreshInterval:st}),W=q==="refresh"||q==="inflight";return c.useEffect(()=>{if(!W)return;let z=!1,g=!1;const R=new AbortController;async function A(){const{signal:P}=R;g=!0;const{result:b,resultSourceMap:U}=await D.fetch($,G,{tag:"presentation-loader",signal:P,perspective:O,filterResponse:!1});g=!1,P.aborted||(ot({result:b,resultSourceMap:U}),z=!0)}const I=K();return A().catch(P=>{g=!1,P.name!=="AbortError"&&ht(P)}).finally(I),()=>{!z&&!g&&R.abort()}},[D,ut,x,G,O,at,$,W,K]),c.useMemo(()=>X&&_!=null&&_.resultSourceMap?{result:kt(w,x,_.result,O,_.resultSourceMap),resultSourceMap:_.resultSourceMap}:_,[w,X,x,O,_])}({cache:r,client:f,liveDocument:o,params:l,perspective:i,query:s,refreshInterval:h,documentsCacheLastUpdated:u}),v=y==null?void 0:y.result,d=y==null?void 0:y.resultSourceMap;return c.useEffect(()=>{d&&a.send("loaders","loader/query-change",{projectId:t,dataset:n,perspective:i,query:s,params:l,result:v,resultSourceMap:d})},[a,n,l,i,t,s,v,d]),null}nt.displayName="GetDocuments";let tt=!1;function kt(e,r,t,n,i){if(n==="raw")throw new Error("turboChargeResultIfSourceMap does not support raw perspective");return St(t,i,s=>{if(!s._projectId)return r!=null&&r._id&&V(r._id)===V(s._id)?r:e.get(s._id);tt||(console.warn("Cross dataset references are not supported yet, ignoring source document",s),tt=!0)},(s,{previousValue:f})=>typeof s=="number"&&typeof f=="string"?`${s}`:s,n)}export{Gt as default,kt as turboChargeResultIfSourceMap};
