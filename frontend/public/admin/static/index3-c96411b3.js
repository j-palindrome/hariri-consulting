import{V as ye,W as xe,r as p,X as Y,Y as q,Z as Q,$ as O,a0 as ge,u as ie,a1 as $,j as l,a2 as K,a3 as U,Q as ve,f as Pe,a4 as oe,z as Ie,a5 as we,a6 as be,a7 as D,a8 as je,a9 as W,aa as _e,ab as Se,ac as ke,ad as Ee,ae as Te,af as Ce,ag as Re,ah as De,ai as $e,aj as le,ak as Le,al as C,h as A,am as V,an as F,C as M,i as de,k as ze,S as J,t as k,l as Z,n as N,ao as ue,ap as Me,aq as Ne,ar as Oe,as as Ae,at as Ve,au as ee,F as te,av as Be,aw as We,ax as ne,ay as X,az as Fe,aA as Ge,aB as He,aC as Ke,aD as ce,aE as Ue,aF as Je,aG as Ye,aH as qe,aI as Qe,aJ as L,aK as Xe,aL as Ze,aM as et,aN as tt}from"./sanity-f5c43ce2.js";function nt(){return ye(function(e,n){var t,o=!1;e.subscribe(xe(n,function(s){var i=t;t=s,o&&n.next([i,s]),o=!0}))})}const at=[];function rt(e){const{children:n,flatIndex:t,index:o,params:s,payload:i,siblingIndex:a}=e,{navigate:r,navigateIntent:d,resolvePathFromState:y}=Y(),u=q(),{panes:m,expand:f}=Ee(),c=p.useMemo(()=>(u==null?void 0:u.panes)||at,[u==null?void 0:u.panes]),h=p.useMemo(()=>m==null?void 0:m[m.length-2],[m]),g=o-1,b=p.useCallback(x=>{const P=c[g]||[],w=P[a],E=x(P,w),fe=[...c.slice(0,g),E,...c.slice(g+1)];return{...u||{},panes:fe}},[g,c,u,a]),I=p.useCallback(x=>{const P=b(x);return setTimeout(()=>r(P),0),P},[b,r]),_=p.useCallback(x=>{const P=b((w,E)=>[...w.slice(0,a),{...E,params:x},...w.slice(a+1)]);return y(P)},[b,y,a]),S=p.useCallback(x=>{I((P,w)=>[...P.slice(0,a),{...w,payload:x},...P.slice(a+1)])},[I,a]),v=p.useCallback(x=>{I((P,w)=>[...P.slice(0,a),{...w,params:x},...P.slice(a+1)])},[I,a]),j=p.useCallback(({id:x,parentRefPath:P,type:w,template:E})=>{r({panes:[...c.slice(0,g+1),[{id:x,params:{template:E.id,parentRefPath:Te(P),type:w},payload:E.params}]]})},[g,r,c]),T=p.useMemo(()=>({index:t,groupIndex:g,siblingIndex:a,payload:i,params:s,hasGroupSiblings:c[g]?c[g].length>1:!1,groupLength:c[g]?c[g].length:0,routerPanesState:c,ChildLink:Ce,BackLink:t?Re:void 0,ReferenceChildLink:De,handleEditReference:j,ParameterizedLink:$e,replaceCurrent:(x={})=>{I(()=>[{id:x.id||"",payload:x.payload,params:x.params||{}}])},closeCurrent:()=>{I((x,P)=>x.length>1?x.filter(w=>w!==P):x)},closeCurrentAndAfter:(x=!0)=>{x&&h&&f(h.element),r({panes:[...c.slice(0,g)]},{replace:!0})},duplicateCurrent:x=>{I((P,w)=>{const E={...w,payload:(x==null?void 0:x.payload)||w.payload,params:(x==null?void 0:x.params)||w.params};return[...P.slice(0,a),E,...P.slice(a)]})},setView:x=>{const P=le(s,"view");return v(x?{...P,view:x}:P)},setParams:v,setPayload:S,createPathWithParams:_,navigateIntent:d}),[t,g,a,i,s,c,j,v,S,_,d,I,h,r,f]);return l.jsx(Le.Provider,{value:T,children:n})}var st=Object.defineProperty,it=(e,n,t)=>n in e?st(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,G=(e,n,t)=>(it(e,typeof n!="symbol"?n+"":n,t),t);class R extends Error{constructor({message:n,context:t,helpId:o,cause:s}){super(n),G(this,"cause"),G(this,"context"),G(this,"helpId"),this.context=t,this.helpId=o,this.cause=s}}const ae=new WeakMap;function B(e){const n=ae.get(e);if(n)return n;const t=Ze();return ae.set(e,t),t}const ot=e=>!!e&&typeof(e==null?void 0:e.then)=="function",lt=e=>Q(e)?typeof e.serialize=="function":!1,dt=e=>(n,t,o)=>{try{return e(n,t,o)}catch(s){throw s instanceof R?s:new R({message:typeof(s==null?void 0:s.message)=="string"?s.message:"",context:t,cause:s})}},ut=e=>(...n)=>e(...n).pipe(et(1),tt());function pe(e){const n=dt(ut(e((t,o,s)=>{if(!t)throw new R({message:"Pane returned no child",context:o,helpId:"structure-item-returned-no-child"});return ot(t)||qe(t)?Qe(t).pipe(X(i=>n(i,o,s))):lt(t)?n(t.serialize(o),o,s):typeof t=="function"?n(t(o.id,o),o,s):L(t)})));return n}const re=new WeakMap;function he(e,n){const t=re.get(e)||new Map;if(t){const i=t.get(n);if(i)return i}const o=e[n];if(typeof o!="function")throw new Error(`Expected property \`${n}\` to be a function but got ${typeof o} instead.`);const s=o.bind(e);return t.set(n,s),re.set(e,t),s}async function ct(e){const n=new Map,t=pe(a=>(r,d,y)=>{const u=r&&`${B(r)}-${d.path.join("__")}`,m=u&&n.get(u);if(m)return m;const f=a(r,d,y);return u&&n.set(u,f),f}),o=[[{id:`__edit__${e.params.id}`,params:{...le(e.params,["id"]),type:e.params.type},payload:e.payload}]];async function s({currentId:a,flatIndex:r,intent:d,params:y,parent:u,path:m,payload:f,unresolvedPane:c,levelIndex:h,structureContext:g}){var b;if(!c)return[];const{id:I,type:_,...S}=y,v=await ce(t(c,{id:a,splitIndex:0,parent:u,path:m,index:r,params:{},payload:void 0,structureContext:g},r));return v.type==="document"&&v.id===I?[{panes:[...m.slice(0,m.length-1).map(j=>[{id:j}]),[{id:I,params:S,payload:f}]],depthIndex:m.length,levelIndex:h}]:(b=v.canHandleIntent)!=null&&b.call(v,d,y,{pane:v,index:r})||v.type==="documentList"&&v.schemaTypeName===_&&v.options.filter==="_type == $type"?[{panes:[...m.map(j=>[{id:j}]),[{id:y.id,params:S,payload:f}]],depthIndex:m.length,levelIndex:h}]:v.type==="list"&&v.child&&v.items?(await Promise.all(v.items.map((j,T)=>j.type==="divider"?Promise.resolve([]):s({currentId:j._id||j.id,flatIndex:r+1,intent:d,params:y,parent:v,path:[...m,j.id],payload:f,unresolvedPane:typeof v.child=="function"?he(v,"child"):v.child,levelIndex:T,structureContext:g})))).flat():[]}const i=(await s({currentId:"root",flatIndex:0,levelIndex:0,intent:e.intent,params:e.params,parent:null,path:[],payload:e.payload,unresolvedPane:e.rootPaneNode,structureContext:e.structureContext})).sort((a,r)=>a.depthIndex===r.depthIndex?a.levelIndex-r.levelIndex:a.depthIndex-r.depthIndex)[0];return i?i.panes:o}const pt=(e,n)=>{const t=e.replace(/^__edit__/,""),{params:o,payload:s,structureContext:{resolveDocumentNode:i}}=n,{type:a,template:r}=o;if(!a)throw new Error(`Document type for document with ID ${t} was not provided in the router params.`);let d=i({schemaType:a,documentId:t}).id("editor");return r&&(d=d.initialValueTemplate(r,s)),d.serialize()};function ht(e){var n,t;return`contextHash(${JSON.stringify({id:e.id,parentId:parent&&B(parent),path:e.path,index:e.index,splitIndex:e.splitIndex,serializeOptionsIndex:(n=e.serializeOptions)==null?void 0:n.index,serializeOptionsPath:(t=e.serializeOptions)==null?void 0:t.path})})`}const se=e=>{const n={type:e.type,id:e.routerPaneSibling.id,params:e.routerPaneSibling.params||{},payload:e.routerPaneSibling.payload||null,flatIndex:e.flatIndex,groupIndex:e.groupIndex,siblingIndex:e.siblingIndex,path:e.path,paneNode:e.type==="resolvedMeta"?B(e.paneNode):null};return`metaHash(${JSON.stringify(n)})`};function z({unresolvedPane:e,flattenedRouterPanes:n,parent:t,path:o,resolvePane:s,structureContext:i}){const[a,...r]=n,d=r[0],y={id:a.routerPaneSibling.id,splitIndex:a.siblingIndex,parent:t,path:[...o,a.routerPaneSibling.id],index:a.flatIndex,params:a.routerPaneSibling.params||{},payload:a.routerPaneSibling.payload,structureContext:i};try{return s(e,y,a.flatIndex).pipe(X(u=>{const m={type:"resolvedMeta",...a,paneNode:u,path:y.path},f=r.map((h,g)=>({type:"loading",path:[...y.path,...r.slice(g).map((b,I)=>`[${h.flatIndex+I}]`)],paneNode:null,...h}));if(!r.length)return L([m]);let c;return d!=null&&d.routerPaneSibling.id.startsWith("__edit__")?c=z({unresolvedPane:pt,flattenedRouterPanes:r,parent:t,path:y.path,resolvePane:s,structureContext:i}):a.groupIndex===(d==null?void 0:d.groupIndex)?c=z({unresolvedPane:e,flattenedRouterPanes:r,parent:t,path:o,resolvePane:s,structureContext:i}):c=z({unresolvedPane:typeof u.child=="function"?he(u,"child"):u.child,flattenedRouterPanes:r,parent:u,path:y.path,resolvePane:s,structureContext:i}),Xe(L([m,...f]),c.pipe(C(h=>[m,...h])))}))}catch(u){if(u instanceof R&&(u.context&&console.warn(`Pane resolution error at index ${u.context.index}${u.context.splitIndex>0?` for split pane index ${u.context.splitIndex}`:""}: ${u.message}${u.helpId?` - see ${ue(u.helpId)}`:""}`,u),u.helpId==="structure-item-returned-no-child"))return L([]);throw u}}function mt({routerPanesStream:e,rootPaneNode:n,initialCacheState:t={cacheKeysByFlatIndex:[],flattenedRouterPanes:[],resolvedPaneCache:new Map,resolvePane:()=>Ge},structureContext:o}){return e.pipe(C(s=>[[{id:"root"}],...s]),C(s=>s.flatMap((i,a)=>i.map((r,d)=>({routerPaneSibling:r,groupIndex:a,siblingIndex:d}))).map((i,a)=>({...i,flatIndex:a}))),We([]),nt(),C(([s,i])=>{for(let a=0;a<i.length;a++){const r=s[a],d=i[a];if(!U(r,d))return{flattenedRouterPanes:i,diffIndex:a}}return{flattenedRouterPanes:i,diffIndex:i.length}}),ne((s,i)=>{const{cacheKeysByFlatIndex:a,resolvedPaneCache:r}=s,{flattenedRouterPanes:d,diffIndex:y}=i,u=a.slice(0,y+1),m=a.slice(y+1),f=new Set(u.flatMap(h=>Array.from(h))),c=m.flatMap(h=>Array.from(h)).filter(h=>!f.has(h));for(const h of c)r.delete(h);return{flattenedRouterPanes:d,cacheKeysByFlatIndex:a,resolvedPaneCache:r,resolvePane:pe(h=>(g,b,I)=>{const _=g&&`${B(g)}-${ht(b)}`,S=_&&r.get(_);if(S)return S;const v=h(g,b,I);if(!_)return v;const j=a[I]||new Set;return j.add(_),a[I]=j,r.set(_,v),v})}},t),X(({flattenedRouterPanes:s,resolvePane:i})=>z({unresolvedPane:n,flattenedRouterPanes:s,parent:null,path:[],resolvePane:i,structureContext:o}))).pipe(ne((s,i)=>i.map((a,r)=>{const d=s[r];return!d||a.type!=="loading"?a:d.routerPaneSibling.id===a.routerPaneSibling.id?d:a}),[]),Fe((s,i)=>{if(s.length!==i.length)return!1;for(let a=0;a<i.length;a++){const r=s[a],d=i[a];if(se(r)!==se(d))return!1}return!0}))}function ft(){const e=p.useMemo(()=>new He(1),[]),n=p.useMemo(()=>e.asObservable().pipe(C(o=>(o==null?void 0:o.panes)||[])),[e]),{state:t}=Y();return p.useEffect(()=>{e.next(t)},[t,e]),n}function yt(){const[e,n]=p.useState();if(e)throw e;const{structureContext:t,rootPaneNode:o}=O(),[s,i]=p.useState({paneDataItems:[],resolvedPanes:[],routerPanes:[]}),a=ft();return p.useEffect(()=>{const r=mt({rootPaneNode:o,routerPanesStream:a,structureContext:t}).pipe(C(d=>{const y=d.reduce((f,c)=>{const h=f[c.groupIndex]||[];return h[c.siblingIndex]=c.routerPaneSibling,f[c.groupIndex]=h,f},[]),u=y.length,m=d.map(f=>{var c;const{groupIndex:h,flatIndex:g,siblingIndex:b,routerPaneSibling:I,path:_}=f,S=I.id,v=y[h+1];return{active:h===u-2,childItemId:(c=v==null?void 0:v[0].id)!=null?c:null,index:g,itemId:I.id,groupIndex:h,key:`${f.type==="loading"?"unknown":f.paneNode.id}-${S}-${b}`,pane:f.type==="loading"?D:f.paneNode,params:I.params||{},path:_.join(";"),payload:I.payload,selected:g===d.length-1,siblingIndex:b}});return{paneDataItems:m,routerPanes:y,resolvedPanes:m.map(f=>f.pane)}})).subscribe({next:d=>i(d),error:d=>n(d)});return()=>r.unsubscribe()},[o,a,t]),s}async function xt(e,n,t){if(n&&t)return{id:n,type:t};if(!n&&t)return{id:Ke(),type:t};if(n&&!t){const o=await ce(e.resolveTypeForDocument(n));return{id:n,type:o}}throw new R({message:"Neither document `id` or `type` was provided when trying to resolve intent."})}const gt={},vt=p.memo(function(){const{navigate:e}=Y(),n=q(p.useCallback(r=>{const d=typeof r.intent=="string"?r.intent:void 0;return d?{intent:d,params:Q(r.params)?r.params:gt,payload:r.payload}:void 0},[])),{rootPaneNode:t,structureContext:o}=O(),s=ge(),[i,a]=p.useState(null);if(i)throw i;return p.useEffect(()=>{if(n){const{intent:r,params:d,payload:y}=n;let u=!1;async function m(){const{id:f,type:c}=await xt(s,typeof d.id=="string"?d.id:void 0,typeof d.type=="string"?d.type:void 0);if(u)return;const h=await ct({intent:r,params:{...d,id:f,type:c},payload:y,rootPaneNode:t,structureContext:o});u||e({panes:h},{replace:!0})}return m().catch(a),()=>{u=!0}}},[s,n,e,t,o]),null}),Pt=ie.span`
  &:not(:last-child)::after {
    content: ' ➝ ';
    opacity: 0.5;
  }
`;function It(e){return e.replace(/\(\.\.\.\)\./g,`(...)
  .`).replace(/__WEBPACK_IMPORTED_MODULE_\d+_+/g,"").replace(/___default\./g,".").replace(new RegExp(` \\(https?:\\/\\/${window.location.host}`,"g")," (")}function wt({error:e}){if(!(e instanceof R))throw e;const{cause:n}=e,{t}=A(V),o=(n==null?void 0:n.stack)||e.stack,s=o&&!(n instanceof F)&&!e.message.includes("Module build failed:"),i=n instanceof F?n.path:[],a=n instanceof F&&n.helpId||e.helpId,r=p.useCallback(()=>{window.location.reload()},[]);return l.jsx(M,{height:"fill",overflow:"auto",padding:4,sizing:"border",tone:"critical",children:l.jsxs(de,{children:[l.jsx(ze,{as:"h2",children:t("structure-error.header.text")}),l.jsxs(M,{marginTop:4,padding:4,radius:2,overflow:"auto",shadow:1,tone:"inherit",children:[i.length>0&&l.jsxs(J,{space:2,children:[l.jsx(k,{size:1,weight:"medium",children:t("structure-error.structure-path.label")}),l.jsx(Z,{children:i.slice(1).map((d,y)=>l.jsx(Pt,{children:d},`${d}-${y}`))})]}),l.jsxs(J,{marginTop:4,space:2,children:[l.jsx(k,{size:1,weight:"medium",children:t("structure-error.error.label")}),l.jsx(Z,{children:s?It(o):e.message})]}),a&&l.jsx(N,{marginTop:4,children:l.jsx(k,{children:l.jsx("a",{href:ue(a),rel:"noopener noreferrer",target:"_blank",children:t("structure-error.docs-link.text")})})}),l.jsx(N,{marginTop:4,children:l.jsx(Me,{text:t("structure-error.reload-button.text"),icon:Ne,tone:"primary",onClick:r})})]})]})})}function bt(e){const{isSelected:n,pane:t,paneKey:o}=e,s=Q(t)&&t.type||null,{t:i}=A(V);return l.jsxs(Oe,{id:o,selected:n,children:[l.jsx(Ae,{title:i("panes.unknown-pane-type.title")}),l.jsx(Ve,{children:l.jsx(N,{padding:4,children:typeof s=="string"?l.jsx(k,{as:"p",muted:!0,children:l.jsx(ee,{t:i,i18nKey:"panes.unknown-pane-type.unknown-type.text",values:{type:s}})}):l.jsx(k,{as:"p",muted:!0,children:l.jsx(ee,{t:i,i18nKey:"panes.unknown-pane-type.missing-type.text"})})})})]})}const jt={component:p.lazy(()=>$(()=>import("./index-98986bf2.js"),["static/index-98986bf2.js","static/sanity-f5c43ce2.js"])),document:p.lazy(()=>$(()=>import("./sanity-f5c43ce2.js").then(e=>e.bI),[]).then(function(e){return e.aa})),documentList:p.lazy(()=>$(()=>import("./sanity-f5c43ce2.js").then(e=>e.bI),[]).then(function(e){return e.ab})),list:p.lazy(()=>$(()=>import("./index2-6e5ed767.js"),["static/index2-6e5ed767.js","static/sanity-f5c43ce2.js"]))},_t=p.memo(function(e){const{active:n,childItemId:t,groupIndex:o,index:s,itemId:i,pane:a,paneKey:r,params:d,payload:y,path:u,selected:m,siblingIndex:f}=e,c=jt[a.type]||bt;return l.jsx(rt,{flatIndex:s,index:o,params:d,payload:y,siblingIndex:f,children:l.jsx(p.Suspense,{fallback:l.jsx(K,{paneKey:r,path:u,selected:m}),children:l.jsx(c,{childItemId:t||"",index:s,itemId:i,isActive:n,isSelected:m,paneKey:r,pane:a})})})},({params:e={},payload:n=null,...t},{params:o={},payload:s=null,...i})=>{if(!U(e,o)||!U(n,s))return!1;const a=new Set([...Object.keys(t),...Object.keys(i)]);for(const r of a)if(t[r]!==i[r])return!1;return!0});function St(){const{t:e}=A(V);return l.jsx(M,{height:"fill",children:l.jsx(te,{align:"center",height:"fill",justify:"center",padding:4,sizing:"border",children:l.jsx(de,{width:0,children:l.jsx(M,{padding:4,radius:2,shadow:1,tone:"caution",children:l.jsxs(te,{children:[l.jsx(N,{children:l.jsx(k,{size:1,children:l.jsx(Be,{})})}),l.jsxs(J,{flex:1,marginLeft:3,space:3,children:[l.jsx(k,{as:"h1",size:1,weight:"medium",children:e("no-document-types-screen.title")}),l.jsx(k,{as:"p",muted:!0,size:1,children:e("no-document-types-screen.subtitle")}),l.jsx(k,{as:"p",muted:!0,size:1,children:l.jsx("a",{href:"https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio",target:"_blank",rel:"noreferrer",children:e("no-document-types-screen.link-text")})})]})]})})})})})}const kt=e=>{const{documentId:n,documentType:t}=e,o=Ue(n,t),s=oe(),{t:i}=A(V),a=!(o!=null&&o.published)&&!(o!=null&&o.draft),r=(o==null?void 0:o.draft)||(o==null?void 0:o.published),d=s.get(t),{value:y,isLoading:u}=Je({enabled:!0,schemaType:d,value:r}),m=a?i("browser-document-title.new-document",{schemaType:(d==null?void 0:d.title)||(d==null?void 0:d.name)}):(y==null?void 0:y.title)||i("browser-document-title.untitled-document"),f=o.ready&&!u,c=me(m);return p.useEffect(()=>{f&&(document.title=c)},[m,f,c]),null},H=e=>{const{title:n}=e,t=me(n);return p.useEffect(()=>{document.title=t},[t,n]),null},Et=e=>{const{resolvedPanes:n}=e;if(!(n!=null&&n.length))return null;const t=n[n.length-1];return Ct(t)?l.jsx(H,{}):Tt(t)?t!=null&&t.title?l.jsx(H,{title:t.title}):l.jsx(kt,{documentId:t.options.id,documentType:t.options.type}):l.jsx(H,{title:t==null?void 0:t.title})};function me(e){const n=O().structureContext.title;return[e,n].filter(t=>t).join(" | ")}function Tt(e){return e!==D&&e.type==="document"}function Ct(e){return e===D}const Rt=ie(Ye)`
  min-height: 100%;
  min-width: 320px;
`,Dt=ve("mod+s"),$t=p.memo(function({onPaneChange:e}){var n;const{push:t}=Pe(),o=oe(),{layoutCollapsed:s,setLayoutCollapsed:i}=O(),{paneDataItems:a,resolvedPanes:r}=yt(),d=q(p.useCallback(h=>typeof h.intent=="string",[])),{sanity:{media:y}}=Ie(),[u,m]=p.useState(null),f=p.useCallback(()=>i(!0),[i]),c=p.useCallback(()=>i(!1),[i]);return p.useEffect(()=>{r.length&&e(r)},[e,r]),p.useEffect(()=>{const h=g=>{Dt(g)&&(g.preventDefault(),t({closable:!0,id:"auto-save-message",status:"info",title:"Your work is automatically saved!",duration:4e3}))};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[t]),(n=o._original)!=null&&n.types.some(we)?l.jsxs(be,{element:u||null,children:[l.jsxs(Rt,{flex:1,height:s?void 0:"fill",minWidth:y[1],onCollapse:f,onExpand:c,children:[a.map(({active:h,childItemId:g,groupIndex:b,itemId:I,key:_,pane:S,index:v,params:j,path:T,payload:x,siblingIndex:P,selected:w})=>l.jsx(p.Fragment,{children:S===D?l.jsx(K,{paneKey:_,path:T,selected:w}):l.jsx(_t,{active:h,groupIndex:b,index:v,pane:S,childItemId:g,itemId:I,paneKey:_,params:j,payload:x,path:T,selected:w,siblingIndex:P})},`${S===D?"loading":S.type}-${v}`)),a.length<=1&&d&&l.jsx(K,{paneKey:"intent-resolver"})]}),l.jsx(Et,{resolvedPanes:r}),l.jsx("div",{"data-portal":"",ref:m})]}):l.jsx(St,{})});function zt({tool:{options:e}}){const{unstable_sources:n}=je(),[t]=n,{source:o,defaultDocumentNode:s,structure:i}=e||{};p.useEffect(()=>(W([]),()=>W([])),[]);const[{error:a},r]=p.useState({error:null});return a?l.jsx(wt,{error:a}):l.jsx(_e,{onCatch:r,children:l.jsx(Se,{name:o||t.name,children:l.jsxs(ke,{defaultDocumentNode:s,structure:i,children:[l.jsx($t,{onPaneChange:W}),l.jsx(vt,{})]})})})}export{zt as default};
