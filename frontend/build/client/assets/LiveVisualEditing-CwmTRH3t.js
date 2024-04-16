function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/VisualEditingComponent2-CjdJR05-.js","assets/jsx-runtime-7ou52q_D.js","assets/components-DEPq4dSd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as t,j as o}from"./jsx-runtime-7ou52q_D.js";import{d as r}from"./index.browser-rVRsldjq.js";import{_ as n}from"./components-DEPq4dSd.js";import{c as i}from"./stega.browser-CJ5dsYcC.js";const s=t.lazy(()=>n(()=>import("./VisualEditingComponent2-CjdJR05-.js").then(e=>e.V),__vite__mapDeps([0,1,2]))),_=()=>()=>{};function a(e){return t.useSyncExternalStore(_,()=>!0,()=>!1)?o.jsx(t.Suspense,{fallback:null,children:o.jsx(s,{...e})}):null}var u={VITE_SANITY_STUDIO_PROJECT_ID:"nctksjox",VITE_SANITY_STUDIO_DATASET:"production",VITE_SANITY_STUDIO_URL:"undefined",VITE_SANITY_STUDIO_STEGA_ENABLED:"false",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};console.log("INFO:",u);const l=i({projectId:"nctksjox",dataset:"production",useCdn:!0,apiVersion:"2024-04-13",stega:{enabled:!0,studioUrl:"undefined"}});function I(){return r({client:l}),o.jsx(a,{})}export{I as default};
