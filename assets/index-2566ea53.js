import{A as _,u as D,e as r,F as Q,H as W,D as A,x as X,q as Z,j as p,v as x,r as ee,o as ae,c as te,w as le,C as S}from"./vue-libs-be453a05.js";import{u as se}from"./use-expose-aabc78b1.js";import{A as E,a as oe}from"./index-5e795bf8.js";import{C as j}from"./index-a5a7bf7b.js";import{F as re}from"./index-ee2a62da.js";import{F as y}from"./index-31bcb5d0.js";import{P as ne}from"./index-7f20510e.js";import{B as T}from"./index-357b7ce9.js";import{S as ue}from"./index-accb4f7b.js";import{n as R,t as L,c as U,b as ce,w as de}from"./with-install-d98d04c2.js";import{c as k,f as ie,e as M,y as me,a as he}from"./use-translate-769ce24f.js";import{s as B}from"./function-call-4e0d0112.js";import{a as fe}from"./index.esm-ae406f38.js";import"./Picker-5692db70.js";import"./index-17f43b09.js";import"./use-touch-fc112571.js";import"./constant-a81ffd37.js";import"./index-c9cabc56.js";import"./use-id-bdb6362f.js";import"./use-route-93f32ad6.js";import"./index-338f956a.js";import"./on-popup-reopen-79dd6347.js";import"./use-refs-5200d168.js";import"./index-de873a8a.js";import"./index-f8a24fe6.js";import"./interceptor-0f3f24ae.js";import"./index-32f9930a.js";import"./index-0c730a10.js";import"./use-lazy-render-e313d03a.js";import"./index-2de37b7b.js";import"./mount-component-b0262729.js";const[ve,I]=k("address-edit-detail"),N=k("address-edit")[2],ge=_({name:ve,props:{show:Boolean,rows:R,value:String,rules:Array,focused:Boolean,maxlength:R,searchResult:Array,showSearchResult:Boolean},emits:["blur","focus","input","selectSearch"],setup(e,{emit:s}){const m=D(),h=()=>e.focused&&e.searchResult&&e.showSearchResult,t=u=>{s("selectSearch",u),s("input",`${u.address||""} ${u.name||""}`.trim())},d=()=>{if(!h())return;const{searchResult:u}=e;return u.map(c=>r(j,{clickable:!0,key:(c.name||"")+(c.address||""),icon:"location-o",title:c.name,label:c.address,class:I("search-item"),border:!1,onClick:()=>t(c)},null))},i=u=>s("blur",u),w=u=>s("focus",u),g=u=>s("input",u);return()=>{if(e.show)return r(Q,null,[r(y,{autosize:!0,clearable:!0,ref:m,class:I(),rows:e.rows,type:"textarea",rules:e.rules,label:N("addressDetail"),border:!h(),maxlength:e.maxlength,modelValue:e.value,placeholder:N("addressDetail"),onBlur:i,onFocus:w,"onUpdate:modelValue":g},null),d()])}}}),[De,v,n]=k("address-edit"),O={name:"",tel:"",city:"",county:"",country:"",province:"",areaCode:"",isDefault:!1,addressDetail:""},we={areaList:Object,isSaving:Boolean,isDeleting:Boolean,validator:Function,showArea:L,showDetail:L,showDelete:Boolean,disableArea:Boolean,searchResult:Array,telMaxlength:R,showSetDefault:Boolean,saveButtonText:String,areaPlaceholder:String,deleteButtonText:String,showSearchResult:Boolean,detailRows:U(1),detailMaxlength:U(200),areaColumnsPlaceholder:ce(),addressInfo:{type:Object,default:()=>M({},O)},telValidator:{type:Function,default:me}},Ce=_({name:De,props:we,emits:["save","focus","delete","clickArea","changeArea","changeDetail","selectSearch","changeDefault"],setup(e,{emit:s,slots:m}){const h=D(),t=W({}),d=D(!1),i=D(!1),w=A(()=>ie(e.areaList)&&Object.keys(e.areaList).length),g=A(()=>{const{province:a,city:o,county:l,areaCode:f}=t;if(f){const b=[a,o,l];return a&&a===o&&b.splice(1,1),b.filter(Boolean).join("/")}return""}),u=A(()=>{var a;return((a=e.searchResult)==null?void 0:a.length)&&i.value}),c=a=>{i.value=a==="addressDetail",s("focus",a)},C=A(()=>{const{validator:a,telValidator:o}=e,l=(f,b)=>({validator:P=>{if(a){const V=a(f,P);if(V)return V}return P?!0:b}});return{name:[l("name",n("nameEmpty"))],tel:[l("tel",n("telInvalid")),{validator:o,message:n("telInvalid")}],areaCode:[l("areaCode",n("areaEmpty"))],addressDetail:[l("addressDetail",n("addressEmpty"))]}}),$=()=>s("save",t),z=a=>{t.addressDetail=a,s("changeDetail",a)},F=a=>{t.province=a[0].text,t.city=a[1].text,t.county=a[2].text},H=({selectedValues:a,selectedOptions:o})=>{a.some(l=>l===E)?B(n("areaEmpty")):(d.value=!1,F(o),s("changeArea",o))},q=()=>s("delete",t),G=a=>{t.areaCode=a||""},Y=()=>{setTimeout(()=>{i.value=!1})},J=a=>{t.addressDetail=a},K=()=>{if(e.showSetDefault){const a={"right-icon":()=>r(ue,{modelValue:t.isDefault,"onUpdate:modelValue":o=>t.isDefault=o,onChange:o=>s("changeDefault",o)},null)};return p(r(j,{center:!0,title:n("defaultAddress"),class:v("default")},a),[[x,!u.value]])}};return se({setAreaCode:G,setAddressDetail:J}),X(()=>e.addressInfo,a=>{M(t,O,a),Z(()=>{var l;const o=(l=h.value)==null?void 0:l.getSelectedOptions();o&&o.every(f=>f&&f.value!==E)&&F(o)})},{deep:!0,immediate:!0}),()=>{const{disableArea:a}=e;return r(re,{class:v(),onSubmit:$},{default:()=>{var o;return[r("div",{class:v("fields")},[r(y,{modelValue:t.name,"onUpdate:modelValue":l=>t.name=l,clearable:!0,label:n("name"),rules:C.value.name,placeholder:n("name"),onFocus:()=>c("name")},null),r(y,{modelValue:t.tel,"onUpdate:modelValue":l=>t.tel=l,clearable:!0,type:"tel",label:n("tel"),rules:C.value.tel,maxlength:e.telMaxlength,placeholder:n("tel"),onFocus:()=>c("tel")},null),p(r(y,{readonly:!0,label:n("area"),"is-link":!a,modelValue:g.value,rules:C.value.areaCode,placeholder:e.areaPlaceholder||n("area"),onFocus:()=>c("areaCode"),onClick:()=>{s("clickArea"),d.value=!a}},null),[[x,e.showArea]]),r(ge,{show:e.showDetail,rows:e.detailRows,rules:C.value.addressDetail,value:t.addressDetail,focused:i.value,maxlength:e.detailMaxlength,searchResult:e.searchResult,showSearchResult:e.showSearchResult,onBlur:Y,onFocus:()=>c("addressDetail"),onInput:z,onSelectSearch:l=>s("selectSearch",l)},null),(o=m.default)==null?void 0:o.call(m)]),K(),p(r("div",{class:v("buttons")},[r(T,{block:!0,round:!0,type:"primary",text:e.saveButtonText||n("save"),class:v("button"),loading:e.isSaving,nativeType:"submit"},null),e.showDelete&&r(T,{block:!0,round:!0,class:v("button"),loading:e.isDeleting,text:e.deleteButtonText||n("delete"),onClick:q},null)]),[[x,!u.value]]),r(ne,{show:d.value,"onUpdate:show":l=>d.value=l,round:!0,teleport:"body",position:"bottom",lazyRender:!1},{default:()=>[r(oe,{modelValue:t.areaCode,"onUpdate:modelValue":l=>t.areaCode=l,ref:h,loading:!w.value,areaList:e.areaList,columnsPlaceholder:e.areaColumnsPlaceholder,onConfirm:H,onCancel:()=>{d.value=!1}},null)]})]}})}}}),be=de(Ce),Ae=be,Ze=_({__name:"index",setup(e){const s=he({"zh-CN":{areaColumnsPlaceholder:["请选择","请选择","请选择"],searchResult:[{name:"黄龙万科中心",address:"杭州市西湖区"},{name:"黄龙万科中心G座"},{name:"黄龙万科中心H座",address:"杭州市西湖区"}]},"en-US":{areaColumnsPlaceholder:["Choose","Choose","Choose"],searchResult:[{name:"Name1",address:"Address"},{name:"Name2"},{name:"Name3",address:"Address"}]}}),m=D([]),h=()=>B(s("save")),t=()=>B(s("delete")),d=i=>{m.value=i?s("searchResult"):[]};return(i,w)=>{const g=ee("demo-block");return ae(),te(g,{title:S(s)("basicUsage")},{default:le(()=>[r(S(Ae),{"area-list":S(fe),"show-delete":"","show-set-default":"","show-search-result":"","search-result":m.value,"area-columns-placeholder":S(s)("areaColumnsPlaceholder"),onSave:h,onDelete:t,onChangeDetail:d},null,8,["area-list","search-result","area-columns-placeholder"])]),_:1},8,["title"])}}});export{Ze as default};
