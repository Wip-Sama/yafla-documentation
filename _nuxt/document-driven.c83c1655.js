import h from"./DocumentDrivenEmpty.65f9e288.js";import L from"./ContentRenderer.63b02562.js";import R from"./DocumentDrivenNotFound.7b6226e3.js";import{j as g,d as c,E as x,P as C,q as b,G as k,H as B,I as u,r as N,J as y,K as S,L as T,M as l,T as j,N as A,O as E,S as w,Q as D,R as H,l as O,U as q,V as $,b as d,c as I,g as f,w as _,W as v}from"./entry.e93115ae.js";import"./ContentRendererMarkdown.vue.e534f431.js";import"./preview.26eb0b90.js";import"./ButtonLink.30ef18af.js";import"./slot.c3e42096.js";import"./node.676c5e99.js";const M=c({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(o,n){const e=await y[o.name]().then(t=>t.default||t);return()=>l(e,o.layoutProps,n.slots)}}),V=c({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(o,n){const e=g(),t=x(C),a=t===b()?k():t,s=B(()=>u(o.name)??a.meta.layout??"default"),r=N();n.expose({layoutRef:r});const m=e.deferHydration();return()=>{const p=s.value&&s.value in y,i=a.meta.layoutTransition??S;return T(j,p&&i,{default:()=>l(w,{suspensible:!0,onResolve:()=>{E(m)}},{default:()=>l(F,{layoutProps:A(n.attrs,{ref:r}),key:s.value,name:s.value,shouldProvide:!o.name,hasTransition:!!i},n.slots)})}).default()}}}),F=c({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(o,n){const e=o.name;return o.shouldProvide&&D(H,{isCurrent:t=>e===(t.meta.layout??"default")}),()=>{var t,a;return!e||typeof e=="string"&&!(e in y)?(a=(t=n.slots).default)==null?void 0:a.call(t):l(M,{key:e,layoutProps:o.layoutProps,name:e},n.slots)}}}),G={class:"document-driven-page"},ee=c({__name:"document-driven",setup(o){const{contentHead:n}=O().public.content,{page:e,layout:t}=q();return e.value,n&&$(e),(a,s)=>{const r=h,m=L,p=R,i=V;return d(),I("div",G,[f(i,{name:u(t)||"default"},{default:_(()=>[u(e)?(d(),v(m,{key:u(e)._id,value:u(e)},{empty:_(({value:P})=>[f(r,{value:P},null,8,["value"])]),_:1},8,["value"])):(d(),v(p,{key:1}))]),_:1},8,["name"])])}}});export{ee as default};
