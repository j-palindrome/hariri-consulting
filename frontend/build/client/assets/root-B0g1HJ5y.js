function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LiveVisualEditing-CwmTRH3t.js","assets/jsx-runtime-7ou52q_D.js","assets/index.browser-rVRsldjq.js","assets/components-DEPq4dSd.js","assets/stega.browser-CJ5dsYcC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as m,g as y,h as f,j,k as w,O as S,_ as g,M as _,L as k,n as o,S as b}from"./components-DEPq4dSd.js";import{r as i,j as e}from"./jsx-runtime-7ou52q_D.js";/**
 * @remix-run/react v2.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let l="positions";function L({getKey:t,...c}){let{isSpaMode:x}=m(),n=y(),u=f();j({getKey:t,storageKey:l});let d=i.useMemo(()=>{if(!t)return null;let s=t(n,u);return s!==n.key?s:null},[]);if(x)return null;let h=((s,p)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let a=JSON.parse(sessionStorage.getItem(s)||"{}")[p||window.history.state.key];typeof a=="number"&&window.scrollTo(0,a)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",w({},c,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${h})(${JSON.stringify(l)}, ${JSON.stringify(d)})`}}))}const N="/assets/index-3L2NJQlx.css",O=()=>[{rel:"stylesheet",href:N}];i.lazy(()=>g(()=>import("./LiveVisualEditing-CwmTRH3t.js"),__vite__mapDeps([0,1,2,3,4])));function R({children:t}){return e.jsxs("html",{lang:"en",className:"text-[18px]",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(_,{}),e.jsx(k,{})]}),e.jsxs("body",{className:"min-h-screen bg-gradient-to-br from-black to-gray-900 font-sans text-white text-base",children:[e.jsxs("nav",{className:"flex space-x-6 px-2 py-2 w-full h-[100px]",children:[e.jsx(o,{to:"/",children:"Jay Reinier"}),e.jsx("div",{className:"grow"}),e.jsx(o,{to:"/portfolio",children:"portfolio"}),e.jsx(o,{to:"/bio",children:"bio"})]}),t,e.jsx(L,{}),e.jsx(b,{})]})]})}function E(){return e.jsx(S,{})}export{R as Layout,E as default,O as links};
