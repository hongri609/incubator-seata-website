"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[95468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"Seata TCC \u6a21\u5f0f",keywords:["Seata"],description:"Seata Tcc \u6a21\u5f0f\u3002"},c="Seata TCC \u6a21\u5f0f",l={unversionedId:"dev/mode/tcc-mode",id:"dev/mode/tcc-mode",title:"Seata TCC \u6a21\u5f0f",description:"Seata Tcc \u6a21\u5f0f\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/mode/tcc-mode.md",sourceDirName:"dev/mode",slug:"/dev/mode/tcc-mode",permalink:"/zh-cn/docs/next/dev/mode/tcc-mode",draft:!1,tags:[],version:"current",frontMatter:{title:"Seata TCC \u6a21\u5f0f",keywords:["Seata"],description:"Seata Tcc \u6a21\u5f0f\u3002"},sidebar:"docs",previous:{title:"Seata AT \u6a21\u5f0f",permalink:"/zh-cn/docs/next/dev/mode/at-mode"},next:{title:"Seata SAGA \u6a21\u5f0f",permalink:"/zh-cn/docs/next/dev/mode/saga-mode"}},p={},i=[],s={toc:i},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"seata-tcc-\u6a21\u5f0f"},"Seata TCC \u6a21\u5f0f"),(0,a.kt)("p",null,"\u56de\u987e\u603b\u89c8\u4e2d\u7684\u63cf\u8ff0\uff1a\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u5168\u5c40\u4e8b\u52a1\uff0c\u6574\u4f53\u662f ",(0,a.kt)("strong",{parentName:"p"},"\u4e24\u9636\u6bb5\u63d0\u4ea4")," \u7684\u6a21\u578b\u3002\u5168\u5c40\u4e8b\u52a1\u662f\u7531\u82e5\u5e72\u5206\u652f\u4e8b\u52a1\u7ec4\u6210\u7684\uff0c\u5206\u652f\u4e8b\u52a1\u8981\u6ee1\u8db3 ",(0,a.kt)("strong",{parentName:"p"},"\u4e24\u9636\u6bb5\u63d0\u4ea4")," \u7684\u6a21\u578b\u8981\u6c42\uff0c\u5373\u9700\u8981\u6bcf\u4e2a\u5206\u652f\u4e8b\u52a1\u90fd\u5177\u5907\u81ea\u5df1\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u9636\u6bb5 prepare \u884c\u4e3a"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 commit \u6216 rollback \u884c\u4e3a")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Overview of a global transaction",src:r(55352).Z,width:"853",height:"482"})),(0,a.kt)("p",null,"\u6839\u636e\u4e24\u9636\u6bb5\u884c\u4e3a\u6a21\u5f0f\u7684\u4e0d\u540c\uff0c\u6211\u4eec\u5c06\u5206\u652f\u4e8b\u52a1\u5212\u5206\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"Automatic (Branch) Transaction Mode")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"TCC (Branch) Transaction Mode"),"."),(0,a.kt)("p",null,"AT \u6a21\u5f0f\u57fa\u4e8e ",(0,a.kt)("strong",{parentName:"p"},"\u652f\u6301\u672c\u5730 ACID \u4e8b\u52a1")," \u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u5173\u7cfb\u578b\u6570\u636e\u5e93"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u9636\u6bb5 prepare \u884c\u4e3a\uff1a\u5728\u672c\u5730\u4e8b\u52a1\u4e2d\uff0c\u4e00\u5e76\u63d0\u4ea4\u4e1a\u52a1\u6570\u636e\u66f4\u65b0\u548c\u76f8\u5e94\u56de\u6eda\u65e5\u5fd7\u8bb0\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 commit \u884c\u4e3a\uff1a\u9a6c\u4e0a\u6210\u529f\u7ed3\u675f\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u52a8")," \u5f02\u6b65\u6279\u91cf\u6e05\u7406\u56de\u6eda\u65e5\u5fd7\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 rollback \u884c\u4e3a\uff1a\u901a\u8fc7\u56de\u6eda\u65e5\u5fd7\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u52a8")," \u751f\u6210\u8865\u507f\u64cd\u4f5c\uff0c\u5b8c\u6210\u6570\u636e\u56de\u6eda\u3002")),(0,a.kt)("p",null,"\u76f8\u5e94\u7684\uff0cTCC \u6a21\u5f0f\uff0c\u4e0d\u4f9d\u8d56\u4e8e\u5e95\u5c42\u6570\u636e\u8d44\u6e90\u7684\u4e8b\u52a1\u652f\u6301\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u9636\u6bb5 prepare \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49")," \u7684 prepare \u903b\u8f91\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 commit \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49")," \u7684 commit \u903b\u8f91\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 rollback \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49")," \u7684 rollback \u903b\u8f91\u3002")),(0,a.kt)("p",null,"\u6240\u8c13 TCC \u6a21\u5f0f\uff0c\u662f\u6307\u652f\u6301\u628a ",(0,a.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49")," \u7684\u5206\u652f\u4e8b\u52a1\u7eb3\u5165\u5230\u5168\u5c40\u4e8b\u52a1\u7684\u7ba1\u7406\u4e2d\u3002"))}u.isMDXComponent=!0},55352:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/seata_tcc-1-1f7a834639aa755d73fa2af435c4f042.png"}}]);