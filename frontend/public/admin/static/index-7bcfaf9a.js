import{u as f,r as l,bw as P,j as e,ar as h,bx as j,by as b,$ as I,as as B,bz as E,ap as H,ag as k,bA as y,n as C}from"./sanity-6f7168f8.js";const g=f(C)`
  position: relative;
`;function v(a){const{children:o}=a,{collapsed:t}=b();return e.jsx(g,{hidden:t,height:"fill",overflow:"auto",children:o})}function w(a){const{actionHandlers:o,index:t,menuItems:n,menuItemGroups:r,title:i}=a,{features:s}=I();return!(n!=null&&n.length)&&!i?null:e.jsx(B,{actions:e.jsx(E,{menuItems:n,menuItemGroups:r,actionHandlers:o}),backButton:s.backButton&&t>0&&e.jsx(H,{as:k,"data-as":"a",icon:y,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}function S(a){const{index:o,pane:t,paneKey:n,...r}=a,{child:i,component:s,menuItems:c,menuItemGroups:d,type:A,...p}=t,[u,m]=l.useState(null),{title:x=""}=P(t);return e.jsxs(h,{id:n,minWidth:320,selected:r.isSelected,children:[e.jsx(w,{actionHandlers:u==null?void 0:u.actionHandlers,index:o,menuItems:c,menuItemGroups:d,title:x}),e.jsxs(v,{children:[j.isValidElementType(s)&&l.createElement(s,{...r,...p,ref:m,child:i,paneKey:n}),l.isValidElement(s)&&s]})]})}export{S as default};
