import{I as j}from"./index-0c730a10.js";import{S as B,b as V}from"./index-9e6a7d6e.js";import{A as M,e as n,Q as G,u as r,D as C,r as D,o as k,a as P,w as p,C as a,c as y,f as w,F as T}from"./vue-libs-be453a05.js";import{h as _,c as z,a as F}from"./use-translate-769ce24f.js";import{c as A,b as O,m as K,w as L}from"./with-install-d98d04c2.js";import{V as N}from"./index-acf13778.js";import{c as U}from"./index-2630be1a.js";import{d as R}from"./deep-clone-37b51d14.js";import"./index-f8a24fe6.js";import"./use-route-93f32ad6.js";function q(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!G(t)}const[E,m]=z("tree-select"),Q={max:A(1/0),items:O(),height:A(300),selectedIcon:K("success"),mainActiveIndex:A(0),activeId:{type:[Number,String,Array],default:0}},H=M({name:E,props:Q,emits:["clickNav","clickItem","update:activeId","update:mainActiveIndex"],setup(t,{emit:s,slots:v}){const x=e=>Array.isArray(t.activeId)?t.activeId.includes(e):t.activeId===e,I=e=>{const o=()=>{if(e.disabled)return;let c;if(Array.isArray(t.activeId)){c=t.activeId.slice();const l=c.indexOf(e.id);l!==-1?c.splice(l,1):c.length<t.max&&c.push(e.id)}else c=e.id;s("update:activeId",c),s("clickItem",e)};return n("div",{key:e.id,class:["van-ellipsis",m("item",{active:x(e.id),disabled:e.disabled})],onClick:o},[e.text,x(e.id)&&n(j,{name:t.selectedIcon,class:m("selected")},null)])},f=e=>{s("update:mainActiveIndex",e)},b=e=>s("clickNav",e),u=()=>{const e=t.items.map(o=>n(B,{dot:o.dot,title:o.text,badge:o.badge,class:[m("nav-item"),o.className],disabled:o.disabled,onClick:b},null));return n(V,{class:m("nav"),modelValue:t.mainActiveIndex,onChange:f},q(e)?e:{default:()=>[e]})},g=()=>{if(v.content)return v.content();const e=t.items[+t.mainActiveIndex]||{};if(e.children)return e.children.map(I)};return()=>n("div",{class:m(),style:{height:_(t.height)}},[u(),n("div",{class:m("content")},[g()])])}}),J=L(H),S=J,W=[{text:"杭州",id:1},{text:"温州",id:2},{text:"宁波",id:3,disabled:!0}],X=[{text:"南京",id:4},{text:"无锡",id:5},{text:"徐州",id:6}],Y=[{text:"泉州",id:7},{text:"厦门",id:8}],Z=[{text:"浙江",children:W},{text:"江苏",children:X},{text:"福建",disabled:!0,children:Y}],$=[{text:"Delaware",id:1},{text:"Florida",id:2},{text:"Georqia",id:3,disabled:!0}],ee=[{text:"Alabama",id:4},{text:"Kansas",id:5},{text:"Louisiana",id:6}],te=[{text:"Alabama",id:7},{text:"Kansas",id:8}],ae=[{text:"Group 1",children:$},{text:"Group 2",children:ee},{text:"Group 3",disabled:!0,children:te}],ve=M({__name:"index",setup(t){const s=F({"zh-CN":{showBadge:"徽标提示",radioMode:"单选模式",multipleMode:"多选模式",customContent:"自定义内容",data:Z,dataSimple:[{text:"分组 1"},{text:"分组 2"}]},"en-US":{showBadge:"Show Badge",radioMode:"Radio Mode",multipleMode:"Multiple Mode",customContent:"Custom Content",data:ae,dataSimple:[{text:"Group 1"},{text:"Group 2"}]}}),v=r(1),x=r(1),I=r([1,2]),f=r(0),b=r(0),u=r(0),g=r(0),e=C(()=>s("data")),o=C(()=>s("dataSimple")),c=C(()=>{const l=R(s("data")).slice(0,2);return l[0].dot=!0,l[1].badge=5,l});return(l,i)=>{const h=D("demo-block");return k(),P(T,null,[n(h,{title:a(s)("radioMode")},{default:p(()=>[n(a(S),{"active-id":v.value,"onUpdate:active-id":i[0]||(i[0]=d=>v.value=d),"main-active-index":f.value,"onUpdate:main-active-index":i[1]||(i[1]=d=>f.value=d),items:a(e)},null,8,["active-id","main-active-index","items"])]),_:1},8,["title"]),n(h,{title:a(s)("multipleMode")},{default:p(()=>[n(a(S),{"active-id":I.value,"onUpdate:active-id":i[2]||(i[2]=d=>I.value=d),"main-active-index":b.value,"onUpdate:main-active-index":i[3]||(i[3]=d=>b.value=d),items:a(e)},null,8,["active-id","main-active-index","items"])]),_:1},8,["title"]),n(h,{title:a(s)("customContent")},{default:p(()=>[n(a(S),{"main-active-index":u.value,"onUpdate:main-active-index":i[4]||(i[4]=d=>u.value=d),height:"55vw",items:a(o)},{content:p(()=>[u.value===0?(k(),y(a(N),{key:0,"show-loading":!1,src:a(U)("apple-1.jpeg")},null,8,["src"])):w("",!0),u.value===1?(k(),y(a(N),{key:1,"show-loading":!1,src:a(U)("apple-2.jpeg")},null,8,["src"])):w("",!0)]),_:1},8,["main-active-index","items"])]),_:1},8,["title"]),n(h,{title:a(s)("showBadge")},{default:p(()=>[n(a(S),{"active-id":x.value,"onUpdate:active-id":i[5]||(i[5]=d=>x.value=d),"main-active-index":g.value,"onUpdate:main-active-index":i[6]||(i[6]=d=>g.value=d),height:"55vw",items:a(c)},null,8,["active-id","main-active-index","items"])]),_:1},8,["title"])],64)}}});export{ve as default};
