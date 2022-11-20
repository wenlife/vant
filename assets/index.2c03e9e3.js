import{c as v,e as d,w as C,a as B}from"./use-translate.4764287f.js";import{w as S}from"./with-install.bb994bce.js";import{C as D}from"./index.010991be.js";import{F as w}from"./index.cf9fa6cc.js";import{F as b}from"./index.3869547b.js";import{B as _}from"./index.72e98335.js";import{S as E}from"./index.bd516072.js";import{z as h,H as x,x as V,e as a,C as y,r as k,o as F,c as T,w as L,B as u}from"./vue-libs.7ad34eae.js";import{T as g}from"./function-call.dae83f0e.js";import"./use-route.13c8c682.js";import"./index.de1d0b70.js";import"./constant.80c6de18.js";import"./use-expose.6911a823.js";import"./use-id.fe691ba6.js";import"./index.eee57e92.js";import"./mount-component.18ad4a6f.js";import"./index.5b4db4e8.js";import"./interceptor.958dcd96.js";import"./use-touch.79e2b006.js";import"./use-lazy-render.96f053d1.js";import"./on-popup-reopen.c53e1654.js";import"./index.54e1cc24.js";const[U,s,n]=v("contact-edit"),m={tel:"",name:""},A={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>d({},m)},telValidator:{type:Function,default:C}},I=h({name:U,props:A,emits:["save","delete","change-default"],setup(t,{emit:l}){const e=x(d({},m,t.contactInfo)),i=()=>{t.isSaving||l("save",e)},c=()=>l("delete",e),f=()=>a("div",{class:s("buttons")},[a(_,{block:!0,round:!0,type:"danger",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(_,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:c},null)]),p=()=>a(E,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,size:24,onChange:o=>l("change-default",o)},null),r=()=>{if(t.showSetDefault)return a(D,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return V(()=>t.contactInfo,o=>d(e,m,o)),()=>a(w,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),r(),f()]})}}),N=S(I),z=N,se=h({__name:"index",setup(t){const l=B({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),e=y({tel:"",name:""}),i=()=>g(l("save")),c=()=>g(l("delete"));return(f,p)=>{const r=k("demo-block");return F(),T(r,{title:u(l)("basicUsage")},{default:L(()=>[a(u(z),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(l)("defaultLabel"),onSave:i,onDelete:c},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{se as default};