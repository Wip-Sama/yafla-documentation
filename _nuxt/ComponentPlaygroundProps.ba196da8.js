import b from"./ProseH4.bc60472a.js";import k from"./ProseCodeInline.2f36d020.js";import B from"./Badge.60c9a4a8.js";import q from"./ProseP.37b37789.js";import{d as D,as as N,H as j,b as o,c as r,F as I,aj as w,I as d,e as m,g as i,w as s,C as _,t as u,W as l,f as p,k as F}from"./entry.e93115ae.js";import"./slot.c3e42096.js";import"./node.676c5e99.js";const H={class:"component-playground-data-section"},O=["id"],E=["value","onChange"],L=D({__name:"ComponentPlaygroundProps",props:{modelValue:{type:Object,required:!0},componentData:{type:Object,required:!0}},emits:["update:modelValue"],setup(f,{emit:g}){const a=f,c=N(a,"modelValue",g),y=(t,n)=>{c.value={...c.value,[n]:t.target.value}},v=j(()=>{var t,n;return(n=(t=a==null?void 0:a.componentData)==null?void 0:t.meta)==null?void 0:n.props});return(t,n)=>{const x=b,C=k,P=B,h=q;return o(),r("div",H,[(o(!0),r(I,null,w(d(v),e=>(o(),r("div",{key:e.name},[m("div",{id:e.name,class:"prop-title"},[i(x,{id:e.name},{default:s(()=>[_(u(e.name),1)]),_:2},1032,["id"]),m("span",null,[i(C,null,{default:s(()=>[_(u(e.type),1)]),_:2},1024),e.required?p("",!0):(o(),l(P,{key:0},{default:s(()=>[_(" Required ")]),_:1}))])],8,O),e.description?(o(),l(h,{key:0},{default:s(()=>[_(u(e.description),1)]),_:2},1024)):p("",!0),m("input",{value:d(c)[e.name],onChange:V=>y(V,e.name)},null,40,E)]))),128))])}}});const G=F(L,[["__scopeId","data-v-9b527b66"]]);export{G as default};