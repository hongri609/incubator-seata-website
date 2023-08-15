"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[6804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,k=u["".concat(p,".").concat(f)]||u[f]||s[f]||o;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"MT \u6a21\u5f0f",keywords:["MT \u6a21\u5f0f"],description:"\u4ecb\u7ecd MT \u6a21\u5f0f",author:"kmmshmily",date:new Date("2019-02-13T00:00:00.000Z")},l="Manual Transaction \u6a21\u5f0f",i={permalink:"/zh-cn/blog/manual-transaction-mode",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/manual-transaction-mode.md",title:"MT \u6a21\u5f0f",description:"\u4ecb\u7ecd MT \u6a21\u5f0f",date:"2019-02-13T00:00:00.000Z",formattedDate:"2019\u5e742\u670813\u65e5",tags:[],readingTime:1.605,hasTruncateMarker:!1,authors:[{name:"kmmshmily"}],frontMatter:{title:"MT \u6a21\u5f0f",keywords:["MT \u6a21\u5f0f"],description:"\u4ecb\u7ecd MT \u6a21\u5f0f",author:"kmmshmily",date:"2019-02-13T00:00:00.000Z"},prevItem:{title:"Fescar\u5206\u5e03\u5f0f\u4e8b\u52a1\u539f\u7406\u89e3\u6790\u63a2\u79d8",permalink:"/zh-cn/blog/seata-analysis-simple"}},p={authorsImageUrls:[void 0]},c=[],m={toc:c},u="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u56de\u987e\u603b\u89c8\u4e2d\u7684\u63cf\u8ff0\uff1a\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u5168\u5c40\u4e8b\u52a1\uff0c\u6574\u4f53\u662f ",(0,a.kt)("strong",{parentName:"p"},"\u4e24\u9636\u6bb5\u63d0\u4ea4")," \u7684\u6a21\u578b\u3002\u5168\u5c40\u4e8b\u52a1\u662f\u7531\u82e5\u5e72\u5206\u652f\u4e8b\u52a1\u7ec4\u6210\u7684\uff0c\u5206\u652f\u4e8b\u52a1\u8981\u6ee1\u8db3 ",(0,a.kt)("strong",{parentName:"p"},"\u4e24\u9636\u6bb5\u63d0\u4ea4")," \u7684\u6a21\u578b\u8981\u6c42\uff0c\u5373\u9700\u8981\u6bcf\u4e2a\u5206\u652f\u4e8b\u52a1\u90fd\u5177\u5907\u81ea\u5df1\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u9636\u6bb5 prepare \u884c\u4e3a"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 commit \u6216 rollback \u884c\u4e3a")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://upload-images.jianshu.io/upload_images/4420767-e48f0284a037d1df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"Overview of a global transaction"})),(0,a.kt)("p",null,"\u6839\u636e\u4e24\u9636\u6bb5\u884c\u4e3a\u6a21\u5f0f\u7684\u4e0d\u540c\uff0c\u6211\u4eec\u5c06\u5206\u652f\u4e8b\u52a1\u5212\u5206\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"Automatic (Branch) Transaction Mode")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"Manual (Branch) Transaction Mode"),"."),(0,a.kt)("p",null,"AT \u6a21\u5f0f\u57fa\u4e8e ",(0,a.kt)("strong",{parentName:"p"},"\u652f\u6301\u672c\u5730 ACID \u4e8b\u52a1")," \u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u5173\u7cfb\u578b\u6570\u636e\u5e93"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u9636\u6bb5 prepare \u884c\u4e3a\uff1a\u5728\u672c\u5730\u4e8b\u52a1\u4e2d\uff0c\u4e00\u5e76\u63d0\u4ea4\u4e1a\u52a1\u6570\u636e\u66f4\u65b0\u548c\u76f8\u5e94\u56de\u6eda\u65e5\u5fd7\u8bb0\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 commit \u884c\u4e3a\uff1a\u9a6c\u4e0a\u6210\u529f\u7ed3\u675f\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u52a8")," \u5f02\u6b65\u6279\u91cf\u6e05\u7406\u56de\u6eda\u65e5\u5fd7\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 rollback \u884c\u4e3a\uff1a\u901a\u8fc7\u56de\u6eda\u65e5\u5fd7\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u52a8")," \u751f\u6210\u8865\u507f\u64cd\u4f5c\uff0c\u5b8c\u6210\u6570\u636e\u56de\u6eda\u3002")),(0,a.kt)("p",null,"\u76f8\u5e94\u7684\uff0cMT \u6a21\u5f0f\uff0c\u4e0d\u4f9d\u8d56\u4e8e\u5e95\u5c42\u6570\u636e\u8d44\u6e90\u7684\u4e8b\u52a1\u652f\u6301\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u9636\u6bb5 prepare \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49")," \u7684 prepare \u903b\u8f91\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 commit \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49")," \u7684 commit \u903b\u8f91\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u9636\u6bb5 rollback \u884c\u4e3a\uff1a\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49")," \u7684 rollback \u903b\u8f91\u3002")),(0,a.kt)("p",null,"\u6240\u8c13 MT \u6a21\u5f0f\uff0c\u662f\u6307\u652f\u6301\u628a ",(0,a.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49")," \u7684\u5206\u652f\u4e8b\u52a1\u7eb3\u5165\u5230\u5168\u5c40\u4e8b\u52a1\u7684\u7ba1\u7406\u4e2d\u3002"))}s.isMDXComponent=!0}}]);