import{V as c,b as _}from"./index-c9cabc56.js";import{V as f}from"./index-9f74ff49.js";import{c as n}from"./index-2630be1a.js";import{a as v}from"./use-translate-769ce24f.js";import{s as T}from"./function-call-4e0d0112.js";import{A as x,u as V,D as y,M as R,o as w,c as C,w as o,e as a,C as e,d as i,t as g,i as U}from"./vue-libs-be453a05.js";import"./use-id-bdb6362f.js";import"./use-expose-aabc78b1.js";import"./use-route-93f32ad6.js";import"./index-338f956a.js";import"./with-install-d98d04c2.js";import"./use-touch-fc112571.js";import"./on-popup-reopen-79dd6347.js";import"./use-refs-5200d168.js";import"./index-de873a8a.js";import"./index-f8a24fe6.js";import"./constant-a81ffd37.js";import"./interceptor-0f3f24ae.js";import"./index-17f43b09.js";import"./mount-component-b0262729.js";import"./index-0c730a10.js";import"./index-7f20510e.js";import"./use-lazy-render-e313d03a.js";import"./index-2de37b7b.js";const $=["src"],h=["src"],b=["src"],se=x({__name:"index",setup(I){const l=v({"zh-CN":{try:"下拉试试",text:"刷新次数",success:"刷新成功",successTip:"成功提示",customTips:"自定义提示"},"en-US":{try:"Try it down",text:"Refresh Count",success:"Refresh success",successTip:"Success Tip",customTips:"Custom Tips"}}),m=V(0),r=V(!1),p=y(()=>m.value?`${l("text")}: ${m.value}`:l("try")),d=u=>{setTimeout(()=>{u&&T(l("success")),r.value=!1,m.value++},1e3)};return R(()=>{const u=new Image,s=new Image;u.src=n("doge.png"),s.src=n("doge-fire.jpeg")}),(u,s)=>(w(),C(e(_),null,{default:o(()=>[a(e(c),{title:e(l)("basicUsage")},{default:o(()=>[a(e(f),{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=t=>r.value=t),onRefresh:s[1]||(s[1]=t=>d(!0))},{default:o(()=>[i("p",null,g(e(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(e(c),{title:e(l)("successTip")},{default:o(()=>[a(e(f),{modelValue:r.value,"onUpdate:modelValue":s[2]||(s[2]=t=>r.value=t),"success-text":e(l)("success"),onRefresh:s[3]||(s[3]=t=>d(!1))},{default:o(()=>[i("p",null,g(e(p)),1)]),_:1},8,["modelValue","success-text"])]),_:1},8,["title"]),a(e(c),{title:e(l)("customTips")},{default:o(()=>[a(e(f),{modelValue:r.value,"onUpdate:modelValue":s[4]||(s[4]=t=>r.value=t),"head-height":"80",onRefresh:s[5]||(s[5]=t=>d(!0))},{pulling:o(({distance:t})=>[i("img",{class:"doge",src:e(n)("doge.png"),style:U({transform:`scale(${t/80})`})},null,12,$)]),loosing:o(()=>[i("img",{src:e(n)("doge.png"),class:"doge"},null,8,h)]),loading:o(()=>[i("img",{src:e(n)("doge-fire.jpeg"),class:"doge"},null,8,b)]),default:o(()=>[i("p",null,g(e(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{se as default};
