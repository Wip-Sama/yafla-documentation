import{d as r,a4 as l,H as u,M as n,ab as p,k as _}from"./entry.e93115ae.js";import{_ as d}from"./MDCSlot.7200a8f3.js";import{u as m,f}from"./node.676c5e99.js";const y=()=>({unwrap:m,flatUnwrap:f}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},g=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const a=l(),{flatUnwrap:o,unwrap:s}=y(),i=u(()=>e.icon||h[e.type]);return()=>{const c=o((a.default&&a.default())??[],["ul"]).map(t=>s(t,["li"]));return n("ul",c.map(t=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:i.value,class:"icon"})),n("span",n(d,{use:()=>t}))])))}}});const v=_(g,[["__scopeId","data-v-892bdddb"]]);export{v as default};