import{d as b,at as y,r as a,u as I,j as s,au as k,o as w,av as f,aw as M,n as V}from"./index-DOR4Yorj.js";import{r as N,a as U,M as W}from"./MonthYearPicker-B60LpBY0.js";import{M as B,E as F}from"./MainEditWrapper-Quitt-j-.js";import{U as l}from"./Inputs-BWd0snBt.js";import{b as m}from"./index.esm-y7lw39hI.js";import"./button.esm-Btq8fx93.js";import"./inputtext.esm-B5qMd3bK.js";const K=()=>{const c=b(t=>y(t)),{data:x,editedId:d}=c,E={id:d,duration:"",isYear:!1,isPresent:!1,school:"",degree:"",location:"",description:"<p>Your Description</p>"},[e,n]=a.useState(x.find(t=>t.id===d)||E),[o,j]=a.useState(e.description);a.useEffect(()=>{n({...e,description:o})},[o]);const[r,v]=a.useState(null),{isYear:u,isPresent:i}=e;a.useEffect(()=>{var t;r&&!e.isPresent&&n({...e,duration:((t=g.current)==null?void 0:t.value)||e.duration})},[r,e.isYear,e.isPresent]),a.useEffect(()=>{var t;r&&e.isPresent&&n({...e,duration:((t=p.current)==null?void 0:t.value)||e.duration})},[r,e.isYear,e.isPresent]);const S=()=>{n({...e,isYear:!u})},g=a.useRef(null),p=a.useRef(null),R=()=>{n({...e,isPresent:!i})},[C,Y]=a.useState(null),[D,P]=a.useState(null);a.useEffect(()=>{i&&e.duration&&Y(N(e.duration)),!i&&e.duration&&P(U(e.duration))},[]);const h=I(),T=t=>{t.preventDefault(),h(M({education:e})),h(V(""))};return s.jsx(B,{onSubmit:T,style:{width:"90%"},preview:s.jsx(k,{educationItem:e,children:s.jsx(w,{text:c.title})}),edit:s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:f.inputs,children:[s.jsx(l,{label:"degree",value:e.degree,onChange:t=>n({...e,degree:t.currentTarget.value})}),s.jsx(l,{label:"school",value:e.school,onChange:t=>n({...e,school:t.currentTarget.value})})]}),s.jsxs("div",{className:f.inputs,children:[s.jsxs(W,{duration:r,setDuration:v,isYear:u,inputRefRangeDates:g,inputRefSingleDate:p,isPresent:i,rangeValue:D,singleValue:C,children:[s.jsx(m,{checked:u,onChange:S,title:"Currently only Year"}),s.jsx(m,{checked:i,onChange:R,title:"Currently study here"})]}),s.jsx(l,{label:"location",value:e.location,onChange:t=>n({...e,location:t.currentTarget.value})})]}),s.jsx(F,{text:o,setText:j})]})})};export{K as default};
