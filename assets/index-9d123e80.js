import{V as O}from"./index-31bcb5d0.js";import{V as U}from"./index-7f20510e.js";import{T as J,a as K}from"./index-c9cabc56.js";import{I as j}from"./index-0c730a10.js";import{A as E,u as B,x as z,e as n,q as P,Q as X,H as N,D as W,r as Q,o as L,a as Z,w as x,C as l,c as q,f as G,d as Y,t as M,F as R}from"./vue-libs-be453a05.js";import{e as I,c as _,W as ee,a as te}from"./use-translate-769ce24f.js";import{b as le,t as H,m as oe,n as ae,w as ne}from"./with-install-d98d04c2.js";import{H as se}from"./constant-a81ffd37.js";import{d as ue}from"./deep-clone-37b51d14.js";import{u as ie}from"./index.esm-ae406f38.js";import"./index-a5a7bf7b.js";import"./use-route-93f32ad6.js";import"./use-id-bdb6362f.js";import"./use-expose-aabc78b1.js";import"./use-touch-fc112571.js";import"./use-lazy-render-e313d03a.js";import"./on-popup-reopen-79dd6347.js";import"./index-2de37b7b.js";import"./interceptor-0f3f24ae.js";import"./index-338f956a.js";import"./use-refs-5200d168.js";import"./index-de873a8a.js";import"./index-f8a24fe6.js";function re(m){return typeof m=="function"||Object.prototype.toString.call(m)==="[object Object]"&&!X(m)}const[de,V,ve]=_("cascader"),me={title:String,options:le(),closeable:H,swipeable:H,closeIcon:oe("cross"),showHeader:H,modelValue:ae,fieldNames:Object,placeholder:String,activeColor:String},pe=E({name:de,props:me,emits:["close","change","finish","clickTab","update:modelValue"],setup(m,{slots:h,emit:g}){const o=B([]),f=B(0),{text:w,value:r,children:d}=I({text:"text",value:"value",children:"children"},m.fieldNames),b=(a,s)=>{for(const v of a){if(v[r]===s)return[v];if(v[d]){const u=b(v[d],s);if(u)return[v,...u]}}},A=()=>{const{options:a,modelValue:s}=m;if(s!==void 0){const v=b(a,s);if(v){let u=a;o.value=v.map(p=>{const F={options:u,selected:p},k=u.find($=>$[r]===p[r]);return k&&(u=k[d]),F}),u&&o.value.push({options:u,selected:null}),P(()=>{f.value=o.value.length-1});return}}o.value=[{options:a,selected:null}]},C=(a,s)=>{if(a.disabled)return;if(o.value[s].selected=a,o.value.length>s+1&&(o.value=o.value.slice(0,s+1)),a[d]){const p={options:a[d],selected:null};o.value[s+1]?o.value[s+1]=p:o.value.push(p),P(()=>{f.value++})}const v=o.value.map(p=>p.selected).filter(Boolean);g("update:modelValue",a[r]);const u={value:a[r],tabIndex:s,selectedOptions:v};g("change",u),a[d]||g("finish",u)},T=()=>g("close"),D=({name:a,title:s})=>g("clickTab",a,s),y=()=>m.showHeader?n("div",{class:V("header")},[n("h2",{class:V("title")},[h.title?h.title():m.title]),m.closeable?n(j,{name:m.closeIcon,class:[V("close-icon"),se],onClick:T},null):null]):null,c=(a,s,v)=>{const{disabled:u}=a,p=!!(s&&a[r]===s[r]),F=a.color||(p?m.activeColor:void 0),k=h.option?h.option({option:a,selected:p}):n("span",null,[a[w]]);return n("li",{role:"menuitemradio",class:[V("option",{selected:p,disabled:u}),a.className],style:{color:F},tabindex:u?void 0:p?0:-1,"aria-checked":p,"aria-disabled":u||void 0,onClick:()=>C(a,v)},[k,p?n(j,{name:"success",class:V("selected-icon")},null):null])},e=(a,s,v)=>n("ul",{role:"menu",class:V("options")},[a.map(u=>c(u,s,v))]),i=(a,s)=>{const{options:v,selected:u}=a,p=m.placeholder||ve("select"),F=u?u[w]:p;return n(K,{title:F,titleClass:V("tab",{unselected:!u})},{default:()=>{var k,$;return[(k=h["options-top"])==null?void 0:k.call(h,{tabIndex:s}),e(v,u,s),($=h["options-bottom"])==null?void 0:$.call(h,{tabIndex:s})]}})},t=()=>{let a;return n(J,{active:f.value,"onUpdate:active":s=>f.value=s,shrink:!0,animated:!0,class:V("tabs"),color:m.activeColor,swipeable:m.swipeable,onClickTab:D},re(a=o.value.map(i))?a:{default:()=>[a]})};return A(),z(()=>m.options,A,{deep:!0}),z(()=>m.modelValue,a=>{a!==void 0&&o.value.map(v=>{var u;return(u=v.selected)==null?void 0:u[r]}).includes(a)||A()}),()=>n("div",{class:V()},[y(),t()])}}),ce=ne(pe),S=ce,fe=[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100",children:[{text:"上城区",value:"330102"},{text:"下城区",value:"330103"},{text:"江干区",value:"330104"}]},{text:"宁波市",value:"330200",children:[{text:"海曙区",value:"330203"},{text:"江北区",value:"330205"},{text:"北仑区",value:"330206"}]},{text:"温州市",value:"330300",children:[{text:"鹿城区",value:"330302"},{text:"龙湾区",value:"330303"},{text:"瓯海区",value:"330304"}]}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100",children:[{text:"玄武区",value:"320102"},{text:"秦淮区",value:"320104"},{text:"建邺区",value:"320105"}]},{text:"无锡市",value:"320200",children:[{text:"锡山区",value:"320205"},{text:"惠山区",value:"320206"},{text:"滨湖区",value:"320211"}]},{text:"徐州市",value:"320300",children:[{text:"鼓楼区",value:"320302"},{text:"云龙区",value:"320303"},{text:"贾汪区",value:"320305"}]}]}],xe=[{text:"Zhejiang",value:"330000",children:[{text:"Hangzhou",value:"330100",children:[{text:"Shangcheng",value:"330102"},{text:"Xiacheng",value:"330103"},{text:"Jianggan",value:"330104"}]},{text:"Ningbo",value:"330200",children:[{text:"Haishu",value:"330203"},{text:"Jiangbei",value:"330205"},{text:"Beilun",value:"330206"}]},{text:"Wenzhou",value:"330300",children:[{text:"Lucheng",value:"330302"},{text:"Longwan",value:"330303"},{text:"Ouhai",value:"330304"}]}]},{text:"Jiangsu",value:"320000",children:[{text:"Nanjing",value:"320100",children:[{text:"Xuanwu",value:"320102"},{text:"Qinghuai",value:"320104"},{text:"Jianye",value:"320105"}]},{text:"Wuxi",value:"320200",children:[{text:"Xishan",value:"320205"},{text:"Huishan",value:"320206"},{text:"Binhu",value:"320211"}]},{text:"Xuzhou",value:"320300",children:[{text:"Gulou",value:"320302"},{text:"Yunlong",value:"320303"},{text:"Jiawang",value:"320305"}]}]}],he={class:"current-level"},Je=E({__name:"index",setup(m){const h=ee(),g=ie(),o=te({"zh-CN":{area:"地区",options:fe,selectArea:"请选择地区",customColor:"自定义颜色",asyncOptions:"异步加载选项",asyncOptions1:[{text:"浙江省",value:"330000",children:[]}],asyncOptions2:[{text:"杭州市",value:"330100"},{text:"宁波市",value:"330200"}],currentLevel:c=>`当前为第 ${c} 级`,chinaAreaData:"中国省市区数据",customContent:"自定义选项上方内容",customFieldNames:"自定义字段名"},"en-US":{area:"Area",options:xe,selectArea:"Select Area",customColor:"Custom Color",asyncOptions:"Async Options",asyncOptions1:[{text:"Zhejiang",value:"330000",children:[]}],asyncOptions2:[{text:"Hangzhou",value:"330100"},{text:"Ningbo",value:"330200"}],currentLevel:c=>`Current level is ${c}`,chinaAreaData:"China Area Data",customContent:"Custom Content",customFieldNames:"Custom Field Names"}}),f=N({show:!1,value:"",result:""}),w=N({show:!1,value:"",result:""}),r=N({show:!1,value:void 0,result:""}),d=N({show:!1,value:void 0,result:"",options:o("asyncOptions1")}),b=N({show:!1,value:void 0,result:""}),A={text:"name",value:"code",children:"items"},C=N({show:!1,value:void 0,result:""}),T=W(()=>{const c=ue(o("options")),e=i=>{"text"in i&&(i.name=i.text,delete i.text),"value"in i&&(i.code=i.value,delete i.value),"children"in i&&(i.items=i.children,delete i.children,i.items.forEach(e))};return c.forEach(e),c}),D=({value:c})=>{c==="330000"&&setTimeout(()=>{d.options[0].children=o("asyncOptions2")},500)},y=(c,{value:e,selectedOptions:i})=>{const t=i.map(a=>a.text||a.name).join("/");c.show=!1,c.value=e,c.result=t};return(c,e)=>{const i=Q("demo-block");return L(),Z(R,null,[n(i,{card:"",title:l(o)("basicUsage")},{default:x(()=>[n(l(O),{modelValue:f.result,"onUpdate:modelValue":e[0]||(e[0]=t=>f.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[1]||(e[1]=t=>f.show=!0)},null,8,["modelValue","label","placeholder"]),n(l(U),{show:f.show,"onUpdate:show":e[5]||(e[5]=t=>f.show=t),round:"",teleport:"body",position:"bottom"},{default:x(()=>[n(l(S),{modelValue:f.value,"onUpdate:modelValue":e[2]||(e[2]=t=>f.value=t),title:l(o)("selectArea"),options:l(o)("options"),onClose:e[3]||(e[3]=t=>f.show=!1),onFinish:e[4]||(e[4]=t=>y(f,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),l(h)==="zh-CN"?(L(),q(i,{key:0,card:"",title:l(o)("chinaAreaData")},{default:x(()=>[n(l(O),{modelValue:w.result,"onUpdate:modelValue":e[6]||(e[6]=t=>w.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[7]||(e[7]=t=>w.show=!0)},null,8,["modelValue","label","placeholder"]),n(l(U),{show:w.show,"onUpdate:show":e[11]||(e[11]=t=>w.show=t),round:"",teleport:"body",position:"bottom"},{default:x(()=>[n(l(S),{modelValue:w.value,"onUpdate:modelValue":e[8]||(e[8]=t=>w.value=t),title:l(o)("selectArea"),options:l(g),onClose:e[9]||(e[9]=t=>w.show=!1),onFinish:e[10]||(e[10]=t=>y(w,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"])):G("",!0),n(i,{card:"",title:l(o)("customColor")},{default:x(()=>[n(l(O),{modelValue:r.result,"onUpdate:modelValue":e[12]||(e[12]=t=>r.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[13]||(e[13]=t=>r.show=!0)},null,8,["modelValue","label","placeholder"]),n(l(U),{show:r.show,"onUpdate:show":e[17]||(e[17]=t=>r.show=t),round:"",teleport:"body",position:"bottom"},{default:x(()=>[n(l(S),{modelValue:r.value,"onUpdate:modelValue":e[14]||(e[14]=t=>r.value=t),title:l(o)("selectArea"),options:l(o)("options"),"active-color":"#ee0a24",onClose:e[15]||(e[15]=t=>r.show=!1),onFinish:e[16]||(e[16]=t=>y(r,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),n(i,{card:"",title:l(o)("asyncOptions")},{default:x(()=>[n(l(O),{modelValue:d.result,"onUpdate:modelValue":e[18]||(e[18]=t=>d.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[19]||(e[19]=t=>d.show=!0)},null,8,["modelValue","label","placeholder"]),n(l(U),{show:d.show,"onUpdate:show":e[23]||(e[23]=t=>d.show=t),round:"",teleport:"body",position:"bottom"},{default:x(()=>[n(l(S),{modelValue:d.value,"onUpdate:modelValue":e[20]||(e[20]=t=>d.value=t),title:l(o)("selectArea"),options:d.options,onClose:e[21]||(e[21]=t=>d.show=!1),onChange:D,onFinish:e[22]||(e[22]=t=>y(d,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),n(i,{card:"",title:l(o)("customFieldNames")},{default:x(()=>[n(l(O),{modelValue:b.result,"onUpdate:modelValue":e[24]||(e[24]=t=>b.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[25]||(e[25]=t=>b.show=!0)},null,8,["modelValue","label","placeholder"]),n(l(U),{show:b.show,"onUpdate:show":e[29]||(e[29]=t=>b.show=t),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:x(()=>[n(l(S),{modelValue:b.value,"onUpdate:modelValue":e[26]||(e[26]=t=>b.value=t),title:l(o)("selectArea"),options:l(T),"field-names":A,onClose:e[27]||(e[27]=t=>b.show=!1),onFinish:e[28]||(e[28]=t=>y(b,t))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),n(i,{card:"",title:l(o)("customContent")},{default:x(()=>[n(l(O),{modelValue:C.result,"onUpdate:modelValue":e[30]||(e[30]=t=>C.result=t),"is-link":"",readonly:"",label:l(o)("area"),placeholder:l(o)("selectArea"),onClick:e[31]||(e[31]=t=>C.show=!0)},null,8,["modelValue","label","placeholder"]),n(l(U),{show:C.show,"onUpdate:show":e[35]||(e[35]=t=>C.show=t),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:x(()=>[n(l(S),{modelValue:C.value,"onUpdate:modelValue":e[32]||(e[32]=t=>C.value=t),title:l(o)("selectArea"),options:l(T),"field-names":A,onClose:e[33]||(e[33]=t=>C.show=!1),onFinish:e[34]||(e[34]=t=>y(C,t))},{"options-top":x(({tabIndex:t})=>[Y("div",he,M(l(o)("currentLevel",t+1)),1)]),_:1},8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{Je as default};
