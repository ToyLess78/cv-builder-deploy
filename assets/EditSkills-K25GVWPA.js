import{u as m,d as p,h as S,r as o,j as e,S as x,o as f,X as h,Y as j,Z as k,n as E}from"./index-DOR4Yorj.js";import{U as g}from"./Inputs-BWd0snBt.js";import{E as v}from"./EditWrapper-B0CVrmnV.js";import{A as b}from"./AutoCompleteCustom-VeB4CtXA.js";import"./button.esm-Btq8fx93.js";import"./inputtext.esm-B5qMd3bK.js";const w=({isAdditional:l=!1})=>{const i=m(),n=p(s=>S(s)),c=l?n.additional:n.skills,[t,r]=o.useState(c),[a,d]=o.useState([...t.data]);o.useEffect(()=>{r({...t,data:a})},[a]);const u=s=>{s.preventDefault(),r({...t,data:a}),i(l?j(t):k(t)),i(E(""))};return e.jsx(v,{preview:e.jsx(x,{isAdditional:l,isButtons:!1,data:t,children:e.jsx(f,{text:t.title})}),edit:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:h.container,children:e.jsx(g,{label:"title",value:t==null?void 0:t.title,onChange:s=>r({...t,title:s.currentTarget.value})})}),e.jsx(b,{selectedSkillsOrTechnologies:a,setSelectedSkillsOrTechnologies:d,label:t.title})]}),onSubmit:u})};export{w as default};