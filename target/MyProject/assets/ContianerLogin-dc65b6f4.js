import{d as m,u as p,r as u,c as _,a as n,w as l,v as r,t as d,o as h,p as g,b as f}from"./index-bbb7e5d4.js";import{a as w,_ as x}from"./_plugin-vue_export-helper-12449478.js";const a=s=>(g("data-v-b9e7f822"),s=s(),f(),s),I={class:"container"},b=a(()=>n("div",{class:"text-2xl text-black font-bold mb-5"},"login",-1)),k={class:"input-div"},N=a(()=>n("label",null,"name",-1)),y={class:"text-red-400 text-sm"},B=a(()=>n("label",null,"inv",-1)),C={class:"text-red-400 text-sm"},S=m({__name:"ContianerLogin",setup(s){const c=p(),e=u({name:"",inv:"",wrongName:"",wrongInv:"",checkName(){this.wrongName="",this.name?this.name.length>10&&(this.wrongName="name不能超过10"):this.wrongName="不能为空值"},checkInv(){this.wrongInv="",this.inv?this.inv.length!=4&&(this.wrongInv="inv必须是四位"):this.wrongInv="不能为空值"}});function v(){!e.wrongInv&&!e.wrongName&&w.post("/loginIn.do",{name:e.name,inv:e.inv}).then(i=>{c.push({path:"/login"})}).catch(i=>{console.log(i)})}return(i,t)=>(h(),_("div",I,[b,n("div",k,[n("div",null,[l(n("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":t[0]||(t[0]=o=>e.name=o),onBlur:t[1]||(t[1]=(...o)=>e.checkName&&e.checkName(...o)),required:""},null,544),[[r,e.name]]),N,n("div",y,d(e.wrongName),1)]),n("div",null,[l(n("input",{type:"password",name:"inv",id:"inv","onUpdate:modelValue":t[2]||(t[2]=o=>e.inv=o),onBlur:t[3]||(t[3]=(...o)=>e.checkInv&&e.checkInv(...o)),required:""},null,544),[[r,e.inv]]),B,n("div",C,d(e.wrongInv),1)])]),n("div",{class:"btn-div"},[n("button",{onClick:v},"提交")])]))}});const q=x(S,[["__scopeId","data-v-b9e7f822"]]);export{q as default};