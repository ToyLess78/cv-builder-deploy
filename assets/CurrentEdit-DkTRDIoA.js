function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EditCertifications-CtnXStNc.js","assets/index-XqE_m-q9.js","assets/index-B2QTBBps.css","assets/Inputs-D1I08rEC.js","assets/EditWrapper--t4niZBQ.js","assets/EditSummary-CPOxTsCz.js","assets/MainEditWrapper-Z77TlRuW.js","assets/MainEditWrapper-BJSG8w56.css","assets/EditInfo-Dm3Q8AOj.js","assets/EditInfo-CDpLcmqA.css","assets/EditSkills-DeE4Qcn9.js","assets/AutoCompleteCustom-DzOMCqzH.js","assets/button.esm-CGs7GssB.js","assets/inputtext.esm-CLK3QdkL.js","assets/EditLanguage-C9bqSvs8.js","assets/EditContacts-DFjzCGBj.js","assets/index.esm-CXlr8-Yg.js","assets/EditExperience-Dcnr6gND.js","assets/MonthYearPicker-BG2c3luX.js","assets/MonthYearPicker-CnKJu2-4.css","assets/EditEducation-B69dlLlK.js","assets/EditProjects-okR6VS9j.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as e,_ as s,d as _,e as n,f as t,j as r}from"./index-XqE_m-q9.js";const c=e.lazy(()=>s(()=>import("./EditCertifications-CtnXStNc.js"),__vite__mapDeps([0,1,2,3,4]))),E=e.lazy(()=>s(()=>import("./EditSummary-CPOxTsCz.js"),__vite__mapDeps([5,1,2,3,6,7]))),u=e.lazy(()=>s(()=>import("./EditInfo-Dm3Q8AOj.js"),__vite__mapDeps([8,1,2,3,9]))),i=e.lazy(()=>s(()=>import("./EditSkills-DeE4Qcn9.js"),__vite__mapDeps([10,1,2,3,4,11,12,13]))),d=e.lazy(()=>s(()=>import("./EditLanguage-C9bqSvs8.js"),__vite__mapDeps([14,1,2,3,4]))),o=e.lazy(()=>s(()=>import("./EditContacts-DFjzCGBj.js"),__vite__mapDeps([15,1,2,3,4,16,12]))),l=e.lazy(()=>s(()=>import("./EditExperience-Dcnr6gND.js"),__vite__mapDeps([17,1,2,18,12,3,16,13,19,6,7]))),x=e.lazy(()=>s(()=>import("./EditEducation-B69dlLlK.js"),__vite__mapDeps([20,1,2,18,12,3,16,13,19,6,7]))),m=e.lazy(()=>s(()=>import("./EditProjects-okR6VS9j.js"),__vite__mapDeps([21,1,2,18,12,3,16,13,19,6,7,11]))),I=()=>{switch(_(a=>n(a))){case t.Additional:return r.jsx(i,{isAdditional:!0});case t.Info:return r.jsx(u,{});case t.Summary:return r.jsx(E,{});case t.Skills:return r.jsx(i,{});case t.Certifications:return r.jsx(c,{});case t.Languages:return r.jsx(d,{});case t.Contacts:return r.jsx(o,{});case t.Social:return r.jsx(o,{isShare:!0});case t.Experience:return r.jsx(l,{});case t.Education:return r.jsx(x,{});case t.Projects:return r.jsx(m,{});default:return""}};export{I as default};