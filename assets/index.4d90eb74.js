import{c as m,b as v,e as V,u as A}from"./use-translate.21aea044.js";import{c as k,w as u,n as I}from"./with-install.9b509712.js";import{z as b,e as i,A as h}from"./vue-libs.a65f1bfc.js";import{r as x,u as B}from"./use-route.985ba6da.js";import{B as C}from"./index.4a104a44.js";const[p,N]=m("sidebar"),f=Symbol(p),_={modelValue:k(0)},w=b({name:p,props:_,emits:["change","update:modelValue"],setup(s,{emit:o,slots:t}){const{linkChildren:n}=v(f),a=()=>+s.modelValue;return n({getActive:a,setActive:e=>{e!==a()&&(o("update:modelValue",e),o("change",e))}}),()=>{var e;return i("div",{role:"tablist",class:N()},[(e=t.default)==null?void 0:e.call(t)])}}}),E=u(w),q=E,[R,l]=m("sidebar-item"),$=V({},x,{dot:Boolean,title:String,badge:I,disabled:Boolean,badgeProps:Object}),j=b({name:R,props:$,emits:["click"],setup(s,{emit:o,slots:t}){const n=B(),{parent:a,index:r}=A(f);if(!a)return;const e=()=>{s.disabled||(o("click",r.value),a.setActive(r.value),n())};return()=>{const{dot:g,badge:S,title:P,disabled:c}=s,d=r.value===a.getActive();return i("div",{role:"tab",class:l({select:d,disabled:c}),tabindex:c?void 0:0,"aria-selected":d,onClick:e},[i(C,h({dot:g,class:l("text"),content:S},s.badgeProps),{default:()=>[t.title?t.title():P]})])}}}),y=u(j),F=y;export{E as S,q as V,F as a,y as b};