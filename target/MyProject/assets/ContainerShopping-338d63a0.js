import{_ as u,a as $}from"./_plugin-vue_export-helper-12449478.js";import{o as l,c,e as S,d as x,f as r,r as f,a as e,w as v,v as _,t as m,p as b,b as y,F as I,g as k,h,n as g}from"./index-bbb7e5d4.js";const C={},V={class:"content1 hide"},w=S('<div class="box1 box" data-v-87cc8f76><div class="image" data-v-87cc8f76><div class="text" data-v-87cc8f76><div class="text-2xl" data-v-87cc8f76>Not Of This World</div></div></div></div><div class="box2 box" data-v-87cc8f76><div class="image" data-v-87cc8f76><div class="text" data-v-87cc8f76><div class="text-2xl" data-v-87cc8f76>Real World</div></div></div></div><div class="box3 box" data-v-87cc8f76><div class="image" data-v-87cc8f76></div></div>',3),B=[w];function N(o,t){return l(),c("div",V,B)}const A=u(C,[["render",N],["__scopeId","data-v-87cc8f76"]]),p=o=>(b("data-v-2fcffb38"),o=o(),y(),o),D={class:"grid w-full h-full"},U={class:"phone-msg-box min-h-[375px]"},q={class:"input-data"},T=p(()=>e("label",null,"Name",-1)),z={class:"input-data"},F=p(()=>e("label",null,"Age",-1)),H={class:"input-data flex-1"},W=p(()=>e("label",null,"VIPID",-1)),j=p(()=>e("div",null,[e("button",{class:"btn-s-i"},"submit")],-1)),E=x({__name:"ShoppingConfig",setup(o){r(!0);const t=f({name:"",age:"",inv:""}),a=f({name:!0,age:!0,inv:!0,validateName(){if(!t.name)i.name="不可以为空值";else if(t.name.length<4)i.name="用户名要大于 4 个字符";else return i.name="",!0;return!1},validateAge(){if(!t.age)i.age="不可以为空值";else return i.age="",!0;return!1},validateInv(){if(!t.inv)i.inv="不可以为空值";else return i.inv="",!0;return!1}}),i=f({name:"",age:"",inv:""});return(d,s)=>(l(),c("div",D,[e("div",U,[e("div",q,[v(e("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>t.name=n),type:"text",name:"myname",id:"myname",required:"",onBlur:s[1]||(s[1]=(...n)=>a.validateName&&a.validateName(...n))},null,544),[[_,t.name]]),T,e("div",null,m(i.name),1)]),e("div",z,[v(e("input",{"onUpdate:modelValue":s[2]||(s[2]=n=>t.age=n),type:"text",name:"myage",id:"myage",required:"",onBlur:s[3]||(s[3]=(...n)=>a.validateAge&&a.validateAge(...n))},null,544),[[_,t.age]]),F,e("div",null,m(i.age),1)]),e("div",H,[v(e("input",{"onUpdate:modelValue":s[4]||(s[4]=n=>t.inv=n),type:"text",name:"inv",id:"inv",required:"",onBlur:s[5]||(s[5]=(...n)=>a.validateInv&&a.validateInv(...n))},null,544),[[_,t.inv]]),W,e("div",null,m(i.inv),1)]),j])]))}});const K=u(E,[["__scopeId","data-v-2fcffb38"]]),L=o=>(b("data-v-c61203d9"),o=o(),y(),o),M={class:"content2"},O={class:"search-box"},P=L(()=>e("input",{type:"button",value:"search",class:"search-btn text-sm p-2",onclick:"search()"},null,-1)),R={class:"search-show"},G={key:0,style:{"font-size":"14px"}},J={key:1},Q=["src"],X=x({__name:"ShoppingSearch",setup(o){const t=r(""),a=r([]);function i(){$.get("search.do",{params:{txt:t.value}}).then(d=>{a.value=d.data,a.value=a.value.map(s=>({...s,path:`/shopping${s.path.slice(1)}`}))}).catch(()=>{console.log("error")})}return(d,s)=>(l(),c("div",M,[e("div",O,[v(e("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>t.value=n),onInput:i,type:"text",name:"search",class:"search-txt",id:"search-p-txt"},null,544),[[_,t.value]]),P]),e("div",R,[a.value.length===0?(l(),c("div",G,' ·请输入你要搜的内容 如果不知道搜索什么请输入"潮流"~· ')):(l(),c("div",J,[(l(!0),c(I,null,k(a.value,n=>(l(),c("div",{key:n.id},[e("img",{src:n.path,alt:""},null,8,Q)]))),128))]))])]))}});const Y=u(X,[["__scopeId","data-v-c61203d9"]]),Z=o=>(b("data-v-2db65bce"),o=o(),y(),o),ee={class:"container"},te=Z(()=>e("div",{class:"text-3xl text-center font-bold p-2"},"DIK",-1)),se={class:"content"},ae={class:"nav-p-s flex justify-center items-center p-0 h-12"},ne=x({__name:"ContainerShopping",setup(o){const t=r(0);function a(i){t.value=i}return(i,d)=>(l(),c("div",ee,[te,e("div",se,[t.value==0?(l(),h(A,{key:0})):t.value==1?(l(),h(Y,{key:1})):(l(),h(K,{key:2}))]),e("div",null,[e("ul",ae,[e("li",{onClick:d[0]||(d[0]=s=>a(0)),class:g(["text-[#808080]",{"focus-class":t.value==0}])},"首页",2),e("li",{onClick:d[1]||(d[1]=s=>a(1)),class:g(["text-[#808080]",{"focus-class":t.value==1}])},"搜索",2),e("li",{onClick:d[2]||(d[2]=s=>a(2)),class:g(["text-[#808080]",{"focus-class":t.value==2}])},"我的",2)])])]))}});const le=u(ne,[["__scopeId","data-v-2db65bce"]]);export{le as default};
