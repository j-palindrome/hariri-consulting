import{r as P,j as a}from"./jsx-runtime-7ou52q_D.js";function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(r){q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function q(e,t,n){return t=z(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){var t=R(e,"string");return typeof t=="symbol"?t:t+""}function R(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _(e){return e._type==="span"&&"text"in e&&typeof e.text=="string"&&(typeof e.marks>"u"||Array.isArray(e.marks)&&e.marks.every(t=>typeof t=="string"))}function E(e){return typeof e._type=="string"&&e._type[0]!=="@"&&(!("markDefs"in e)||!e.markDefs||Array.isArray(e.markDefs)&&e.markDefs.every(t=>typeof t._key=="string"))&&"children"in e&&Array.isArray(e.children)&&e.children.every(t=>typeof t=="object"&&"_type"in t)}function K(e){return E(e)&&"listItem"in e&&typeof e.listItem=="string"&&(typeof e.level>"u"||typeof e.level=="number")}function N(e){return e._type==="@list"}function U(e){return e._type==="@span"}function A(e){return e._type==="@text"}const L=["strong","em","code","underline","strike-through"];function V(e,t,n){if(!_(e)||!e.marks)return[];if(!e.marks.length)return[];const r=e.marks.slice(),l={};return r.forEach(i=>{l[i]=1;for(let u=t+1;u<n.length;u++){const y=n[u];if(y&&_(y)&&Array.isArray(y.marks)&&y.marks.indexOf(i)!==-1)l[i]++;else break}}),r.sort((i,u)=>G(l,i,u))}function G(e,t,n){const r=e[t],l=e[n];if(r!==l)return l-r;const i=L.indexOf(t),u=L.indexOf(n);return i!==u?i-u:t.localeCompare(n)}function J(e){var t;const{children:n,markDefs:r=[]}=e;if(!n||!n.length)return[];const l=n.map(V),i={_type:"@span",children:[],markType:"<unknown>"};let u=[i];for(let y=0;y<n.length;y++){const h=n[y];if(!h)continue;const x=l[y]||[];let g=1;if(u.length>1)for(g;g<u.length;g++){const o=((t=u[g])==null?void 0:t.markKey)||"",c=x.indexOf(o);if(c===-1)break;x.splice(c,1)}u=u.slice(0,g);let s=u[u.length-1];if(s){for(const o of x){const c=r.find(p=>p._key===o),k=c?c._type:o,f={_type:"@span",_key:h._key,children:[],markDef:c,markType:k,markKey:o};s.children.push(f),u.push(f),s=f}if(_(h)){const o=h.text.split(`
`);for(let c=o.length;c-- >1;)o.splice(c,0,`
`);s.children=s.children.concat(o.map(c=>({_type:"@text",text:c})))}else s.children=s.children.concat(h)}}return i.children}function Q(e,t){const n=[];let r;for(let l=0;l<e.length;l++){const i=e[l];if(i){if(!K(i)){n.push(i),r=void 0;continue}if(!r){r=v(i,l,t),n.push(r);continue}if(X(i,r)){r.children.push(i);continue}if((i.level||1)>r.level){const u=v(i,l,t);if(t==="html"){const y=r.children[r.children.length-1],h=S(S({},y),{},{children:[...y.children,u]});r.children[r.children.length-1]=h}else r.children.push(u);r=u;continue}if((i.level||1)<r.level){const u=n[n.length-1],y=u&&O(u,i);if(y){r=y,r.children.push(i);continue}r=v(i,l,t),n.push(r);continue}if(i.listItem!==r.listItem){const u=n[n.length-1],y=u&&O(u,{level:i.level||1});if(y&&y.listItem===i.listItem){r=y,r.children.push(i);continue}else{r=v(i,l,t),n.push(r);continue}}console.warn("Unknown state encountered for block",i),n.push(i)}}return n}function X(e,t){return(e.level||1)===t.level&&e.listItem===t.listItem}function v(e,t,n){return{_type:"@list",_key:`${e._key||`${t}`}-parent`,mode:n,level:e.level||1,listItem:e.listItem,children:[e]}}function O(e,t){const n=t.level||1,r=t.listItem||"normal",l=typeof t.listItem=="string";if(N(e)&&(e.level||1)===n&&l&&(e.listItem||"normal")===r)return e;if(!("children"in e))return;const i=e.children[e.children.length-1];return i&&!_(i)?O(i,t):void 0}function W(e){let t="";return e.children.forEach(n=>{A(n)?t+=n.text:U(n)&&(t+=W(n))}),t}const Y="html",Z=["block","list","listItem","marks","types"],ee=["listItem"],te=["_key"];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ne(e,t,n){return t=re(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e){var t=ie(e,"string");return typeof t=="symbol"?t:t+""}function ie(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function I(e,t){if(e==null)return{};var n=le(e,t),r,l;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function le(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}const se={number:({children:e})=>a.jsx("ol",{children:e}),bullet:({children:e})=>a.jsx("ul",{children:e})},oe=({children:e})=>a.jsx("li",{children:e}),ce=({children:e,value:t})=>a.jsx("a",{href:t==null?void 0:t.href,children:e}),ue={textDecoration:"underline"},ae={em:({children:e})=>a.jsx("em",{children:e}),strong:({children:e})=>a.jsx("strong",{children:e}),code:({children:e})=>a.jsx("code",{children:e}),underline:({children:e})=>a.jsx("span",{style:ue,children:e}),"strike-through":({children:e})=>a.jsx("del",{children:e}),link:ce},w=(e,t)=>`[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,C=e=>w(`block type "${e}"`,"types"),fe=e=>w(`mark type "${e}"`,"marks"),ye=e=>w(`block style "${e}"`,"block"),pe=e=>w(`list style "${e}"`,"list"),ke=e=>w(`list item style "${e}"`,"listItem");function me(e){console.warn(e)}const B={display:"none"},he=({value:e,isInline:t})=>{const n=C(e._type);return t?a.jsx("span",{style:B,children:n}):a.jsx("div",{style:B,children:n})},de=({markType:e,children:t})=>a.jsx("span",{className:`unknown__pt__mark__${e}`,children:t}),be=({children:e})=>a.jsx("p",{children:e}),ge=({children:e})=>a.jsx("ul",{children:e}),xe=({children:e})=>a.jsx("li",{children:e}),je=()=>a.jsx("br",{}),we={normal:({children:e})=>a.jsx("p",{children:e}),blockquote:({children:e})=>a.jsx("blockquote",{children:e}),h1:({children:e})=>a.jsx("h1",{children:e}),h2:({children:e})=>a.jsx("h2",{children:e}),h3:({children:e})=>a.jsx("h3",{children:e}),h4:({children:e})=>a.jsx("h4",{children:e}),h5:({children:e})=>a.jsx("h5",{children:e}),h6:({children:e})=>a.jsx("h6",{children:e})},$={types:{},block:we,marks:ae,list:se,listItem:oe,hardBreak:je,unknownType:he,unknownMark:de,unknownList:ge,unknownListItem:xe,unknownBlockStyle:be};function ve(e,t){const n=I(t,Z);return b(b({},e),{},{block:j(e,t,"block"),list:j(e,t,"list"),listItem:j(e,t,"listItem"),marks:j(e,t,"marks"),types:j(e,t,"types")},n)}function j(e,t,n){const r=t[n],l=e[n];return typeof r=="function"||r&&typeof l=="function"?r:r?b(b({},l),r):l}function Pe({value:e,components:t,listNestingMode:n,onMissingComponent:r=me}){const l=r||Oe,i=Array.isArray(e)?e:[e],u=Q(i,n||Y),y=P.useMemo(()=>t?ve($,t):$,[t]),h=P.useMemo(()=>_e(y,l),[y,l]),x=u.map((g,s)=>h({node:g,index:s,isInline:!1,renderNode:h}));return a.jsx(a.Fragment,{children:x})}const _e=(e,t)=>{function n(s){const{node:o,index:c,isInline:k}=s,f=o._key||`node-${c}`;return N(o)?i(o,c,f):K(o)?l(o,c,f):U(o)?u(o,c,f):r(o)?g(o,c,f,k):E(o)?y(o,c,f,k):A(o)?h(o,f):x(o,c,f,k)}function r(s){return s._type in e.types}function l(s,o,c){const k=M({node:s,index:o,isInline:!1,renderNode:n}),f=e.listItem,p=(typeof f=="function"?f:f[s.listItem])||e.unknownListItem;if(p===e.unknownListItem){const d=s.listItem||"bullet";t(ke(d),{type:d,nodeType:"listItemStyle"})}let m=k.children;if(s.style&&s.style!=="normal"){const d=I(s,ee);m=n({node:d,index:o,isInline:!1,renderNode:n})}return a.jsx(p,{value:s,index:o,isInline:!1,renderNode:n,children:m},c)}function i(s,o,c){const k=s.children.map((m,d)=>n({node:m._key?m:b(b({},m),{},{_key:`li-${o}-${d}`}),index:d,isInline:!1,renderNode:n})),f=e.list,p=(typeof f=="function"?f:f[s.listItem])||e.unknownList;if(p===e.unknownList){const m=s.listItem||"bullet";t(pe(m),{nodeType:"listStyle",type:m})}return a.jsx(p,{value:s,index:o,isInline:!1,renderNode:n,children:k},c)}function u(s,o,c){const{markDef:k,markType:f,markKey:p}=s,m=e.marks[f]||e.unknownMark,d=s.children.map((F,H)=>n({node:F,index:H,isInline:!0,renderNode:n}));return m===e.unknownMark&&t(fe(f),{nodeType:"mark",type:f}),a.jsx(m,{text:W(s),value:k,markType:f,markKey:p,renderNode:n,children:d},c)}function y(s,o,c,k){const f=M({node:s,index:o,isInline:k,renderNode:n}),p=I(f,te),m=p.node.style||"normal",d=(typeof e.block=="function"?e.block:e.block[m])||e.unknownBlockStyle;return d===e.unknownBlockStyle&&t(ye(m),{nodeType:"blockStyle",type:m}),a.jsx(d,b(b({},p),{},{value:p.node,renderNode:n}),c)}function h(s,o){if(s.text===`
`){const c=e.hardBreak;return c?a.jsx(c,{},o):`
`}return s.text}function x(s,o,c,k){const f={value:s,isInline:k,index:o,renderNode:n};t(C(s._type),{nodeType:"block",type:s._type});const p=e.unknownType;return a.jsx(p,b({},f),c)}function g(s,o,c,k){const f={value:s,isInline:k,index:o,renderNode:n},p=e.types[s._type];return p?a.jsx(p,b({},f),c):null}return n};function M(e){const{node:t,index:n,isInline:r,renderNode:l}=e,i=J(t).map((u,y)=>l({node:u,isInline:!0,index:y,renderNode:l}));return{_key:t._key||`block-${n}`,children:i,index:n,isInline:r,node:t}}function Oe(){}export{Pe as P};