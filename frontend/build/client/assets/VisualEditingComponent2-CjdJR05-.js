function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/client-SjMj0teH.js","assets/components-DEPq4dSd.js","assets/jsx-runtime-7ou52q_D.js","assets/VisualEditing-DH9Eyt5r.js","assets/index.browser-rVRsldjq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as f,r}from"./jsx-runtime-7ou52q_D.js";import{_ as y,t as P,v as j,g as R}from"./components-DEPq4dSd.js";const w="sanity-visual-editing";let n=null,a=null,m=null;function S(d={}){m&&clearTimeout(m);const o=new AbortController;return Promise.all([y(()=>import("./client-SjMj0teH.js").then(t=>t.c),__vite__mapDeps([0,1,2])),y(()=>import("./VisualEditing-DH9Eyt5r.js"),__vite__mapDeps([3,2,4,1]))]).then(([t,{VisualEditing:s}])=>{if(!o.signal.aborted){if(n||(n=document.createElement("div"),n.id=w,document.body.appendChild(n)),!a){const{createRoot:i}="default"in t?t.default:t;a=i(n)}a.render(f.jsx(f.Fragment,{children:f.jsx(s,{...d})}))}}),()=>{o.abort(),m=window.setTimeout(()=>{a&&(a.unmount(),a=null),n&&(document.body.removeChild(n),n=null)},1e3)}}function T(d){const{refresh:o,zIndex:t}=d,s=P(),i=r.useRef(s),[p,h]=r.useState(),l=j(),[c,_]=r.useState(null),[v,E]=r.useState(!1);r.useEffect(()=>{i.current=s},[s]),r.useEffect(()=>{c&&l.state==="loading"?E(!0):c&&v&&l.state==="idle"&&(c(),_(null),E(!1))},[v,l.state,c]),r.useEffect(()=>{const g=S({zIndex:t,refresh:e=>{function b(){return(e.source!=="mutation"||!e.livePreviewEnabled)&&new Promise(x=>{l.revalidate(),_(()=>x)})}return o?o(e,b):b()},history:{subscribe:e=>(h(()=>e),()=>h(void 0)),update:e=>{e.type==="push"||e.type==="replace"?i.current(e.url,{replace:e.type==="replace"}):e.type==="pop"&&i.current(-1)}}});return()=>g()},[o,l,t]);const u=R();return r.useEffect(()=>{p&&p({type:"push",url:`${u.pathname}${u.search}${u.hash}`})},[u.hash,u.pathname,u.search,p]),null}const I=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));export{I as V,w as n};