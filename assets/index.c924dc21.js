import{V as u}from"./index.d6a4ac5e.js";import{I as v}from"./function-call.d4dac5f9.js";import{c as m}from"./index.6869290c.js";import{T as b}from"./function-call.cfe02c45.js";import{a as x}from"./use-translate.4af05b41.js";import{z as F,C as f,r as P,o as B,a as D,e as s,w as a,B as e,h as I,t as h,F as $}from"./vue-libs.7ad34eae.js";import"./with-install.bc951e22.js";import"./use-route.13c8c682.js";import"./index.334a3abb.js";import"./mount-component.b3b1a921.js";import"./use-expose.313b91e7.js";import"./constant.80c6de18.js";import"./interceptor.a316706b.js";import"./index.2e55f3b2.js";import"./use-touch.79e2b006.js";import"./on-popup-reopen.c53e1654.js";import"./index.24b817f9.js";import"./use-lazy-render.96f053d1.js";import"./index.01b1c0bb.js";import"./index.64a2e6fd.js";import"./index.3b9bd9d1.js";const Y=F({__name:"index",setup(S){const d=v.Component,t=x({"zh-CN":{closed:"\u5173\u95ED",showClose:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",showImages:"\u9884\u89C8\u56FE\u7247",beforeClose:"\u5F02\u6B65\u5173\u95ED",closeEvent:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",customConfig:"\u4F20\u5165\u914D\u7F6E\u9879",startPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",componentCall:"\u7EC4\u4EF6\u8C03\u7528",index:l=>`\u7B2C${l+1}\u9875`},"en-US":{closed:"closed",showClose:"Show Close Icon",showImages:"Show Images",beforeClose:"Before Close",closeEvent:"Close Event",customConfig:"Custom Config",startPosition:"Set Start Position",componentCall:"Component Call",index:l=>`Page: ${l}`}}),C=[m("apple-1.jpeg"),m("apple-2.jpeg"),m("apple-3.jpeg"),m("apple-4.jpeg")],p=f(!1),c=f(0),g=()=>b(t("closed")),w=()=>new Promise(l=>{setTimeout(()=>{l(!0)},1e3)}),E=()=>{p.value=!0},k=l=>{c.value=l},i=(l={})=>{const o=v({images:C,...l});l.beforeClose&&setTimeout(()=>{o==null||o.close()},2e3)};return(l,o)=>{const r=P("demo-block");return B(),D($,null,[s(r,{card:"",title:e(t)("basicUsage")},{default:a(()=>[s(e(u),{"is-link":"",value:e(t)("showImages"),onClick:o[0]||(o[0]=n=>i())},null,8,["value"])]),_:1},8,["title"]),s(r,{card:"",title:e(t)("customConfig")},{default:a(()=>[s(e(u),{"is-link":"",value:e(t)("startPosition"),onClick:o[1]||(o[1]=n=>i({startPosition:1}))},null,8,["value"]),s(e(u),{"is-link":"",value:e(t)("showClose"),onClick:o[2]||(o[2]=n=>i({closeable:!0}))},null,8,["value"]),s(e(u),{"is-link":"",value:e(t)("closeEvent"),onClick:o[3]||(o[3]=n=>i({onClose:g}))},null,8,["value"])]),_:1},8,["title"]),s(r,{card:"",title:e(t)("beforeClose")},{default:a(()=>[s(e(u),{"is-link":"",value:e(t)("beforeClose"),onClick:o[4]||(o[4]=n=>i({beforeClose:w}))},null,8,["value"])]),_:1},8,["title"]),s(r,{card:"",title:e(t)("componentCall")},{default:a(()=>[s(e(u),{"is-link":"",value:e(t)("componentCall"),onClick:E},null,8,["value"]),s(e(d),{show:p.value,"onUpdate:show":o[5]||(o[5]=n=>p.value=n),images:C,onChange:k},{index:a(()=>[I(h(e(t)("index",c.value)),1)]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{Y as default};