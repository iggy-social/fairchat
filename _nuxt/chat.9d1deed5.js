import{m as a}from"./entry.819646ae.js";import{a as s}from"./site.8837e2a9.js";const o=a({id:"chat",state:()=>({selectedTagIndex:0}),getters:{getSelectedTagIndex(e){const t=s("selectedTagIndex",0);return t.value&&(e.selectedTagIndex=t.value),e.selectedTagIndex}},actions:{setSelectedTagIndex(e){this.selectedTagIndex=e,localStorage.setItem("selectedTagIndex",String(e))}}});export{o as u};
