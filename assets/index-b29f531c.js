import{A as c,e as a,r as u,o as _,a as m,w as n,C as t,g as s,t as l,F as f}from"./vue-libs-be453a05.js";import{c as h,a as p}from"./use-translate-769ce24f.js";import{t as x,m as v,w as P}from"./with-install-d98d04c2.js";const[g,y]=h("divider"),C={dashed:Boolean,hairline:x,contentPosition:v("center")},w=c({name:g,props:C,setup(d,{slots:e}){return()=>{var r;return a("div",{role:"separator",class:y({dashed:d.dashed,hairline:d.hairline,[`content-${d.contentPosition}`]:!!e.default})},[(r=e.default)==null?void 0:r.call(e)])}}}),S=P(w),o=S,N=c({__name:"index",setup(d){const e=p({"zh-CN":{text:"文本",dashed:"虚线",withText:"展示文本",contentPosition:"内容位置",customStyle:"自定义样式"},"en-US":{text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style"}});return(r,T)=>{const i=u("demo-block");return _(),m(f,null,[a(i,{title:t(e)("basicUsage")},{default:n(()=>[a(t(o))]),_:1},8,["title"]),a(i,{title:t(e)("withText")},{default:n(()=>[a(t(o),null,{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(i,{title:t(e)("contentPosition")},{default:n(()=>[a(t(o),{"content-position":"left"},{default:n(()=>[s(l(t(e)("text")),1)]),_:1}),a(t(o),{"content-position":"right"},{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(i,{title:t(e)("dashed")},{default:n(()=>[a(t(o),{dashed:"",hairline:!1},{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(i,{title:t(e)("customStyle")},{default:n(()=>[a(t(o),{style:{borderColor:"#1989fa",color:"#1989fa",padding:"0 16px"}},{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"])],64)}}});export{N as default};
