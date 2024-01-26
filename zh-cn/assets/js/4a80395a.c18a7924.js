"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[83846],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35308:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"Seata-Server\u4e0b\u8f7d",keywords:["Seata","Seata-Server","\u4e0b\u8f7d"],description:"Seata-Server\u53d1\u5e03\u7248\u672c\u4e0b\u8f7d",hide_table_of_contents:!0},o="Seata-Server \u4e0b\u8f7d",i={unversionedId:"download/seata-server",id:"download/seata-server",title:"Seata-Server\u4e0b\u8f7d",description:"Seata-Server\u53d1\u5e03\u7248\u672c\u4e0b\u8f7d",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs-unversioned/current/download/seata-server.md",sourceDirName:"download",slug:"/download/seata-server",permalink:"/zh-cn/unversioned/download/seata-server",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs-unversioned/current/download/seata-server.md",tags:[],version:"current",frontMatter:{title:"Seata-Server\u4e0b\u8f7d",keywords:["Seata","Seata-Server","\u4e0b\u8f7d"],description:"Seata-Server\u53d1\u5e03\u7248\u672c\u4e0b\u8f7d",hide_table_of_contents:!0},sidebar:"download"},p={},s=[{value:"\u7cfb\u7edf\u8981\u6c42",id:"\u7cfb\u7edf\u8981\u6c42",level:2},{value:"\u7a33\u5b9a\u7248",id:"\u7a33\u5b9a\u7248",level:2},{value:"\u5feb\u7167\u7248",id:"\u5feb\u7167\u7248",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"seata-server-\u4e0b\u8f7d"},"Seata-Server \u4e0b\u8f7d"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"2.0.0 \u7248\u672c\u5df2\u53d1\u5e03\uff0c\u652f\u6301 Raft \u96c6\u7fa4\uff1bAT \u4e8b\u52a1\u6a21\u5f0f\u65b0\u589e\u8fbe\u68a6\u3001SQLServer \u548c PolarDB-X\xa02.0 \u6570\u636e\u5e93\u652f\u6301\uff1b\u652f\u6301 IPV6\uff1b\u652f\u6301\u7edf\u4e00 API\uff1b\u652f\u6301\u4e8b\u52a1\u4e8c\u9636\u6bb5\u5e76\u884c\u5904\u7406\u3002\u6b22\u8fce\u4e0b\u8f7d\u8bd5\u7528\u3002")),(0,n.kt)("h2",{id:"\u7cfb\u7edf\u8981\u6c42"},"\u7cfb\u7edf\u8981\u6c42"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u7cfb\u7edf\u8981\u6c42\u662f\u90e8\u7f72 Seata-Server \u7684\u6700\u4f4e\u8981\u6c42\uff0c\u5982\u679c\u60a8\u7684\u8bbe\u5907\u4e0d\u6ee1\u8db3\u8fd9\u4e9b\u8981\u6c42\uff0c\u60a8\u53ef\u80fd\u65e0\u6cd5\u5728\u8bbe\u5907\u4e0a\u90e8\u7f72 Seata-Server\u3002")),(0,n.kt)("section",{class:"full_width_table_section"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u9879\u76ee"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8981\u6c42"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"JDK"),(0,n.kt)("td",{parentName:"tr",align:null},"JDK 8 \u6216\u66f4\u9ad8\u7248\u672c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CPU"),(0,n.kt)("td",{parentName:"tr",align:null},"1 \u6838\u53ca\u4ee5\u4e0a\uff0c\u652f\u6301 64 \u4f4d\u7684 CPU")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58"),(0,n.kt)("td",{parentName:"tr",align:null},"2G \u53ca\u4ee5\u4e0a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u786c\u76d8"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e0\u6700\u5c0f\u8981\u6c42\uff0c\u9700\u8981\u6839\u636e\u65e5\u5fd7\u3001\u5b58\u50a8\u6a21\u5f0f\u7b49\u914d\u7f6e\u5177\u4f53\u8c03\u6574")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf"),(0,n.kt)("td",{parentName:"tr",align:null},"64 \u4f4d\u7684 Linux\u3001Mac OS X\u3001Windows"))))),(0,n.kt)("h2",{id:"\u7a33\u5b9a\u7248"},"\u7a33\u5b9a\u7248"),(0,n.kt)("section",{class:"full_width_table_section"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u7248\u672c\u53f7"),(0,n.kt)("th",{parentName:"tr",align:null},"\u4e8c\u8fdb\u5236\u4e0b\u8f7d"),(0,n.kt)("th",{parentName:"tr",align:null},"Docker \u955c\u50cf"),(0,n.kt)("th",{parentName:"tr",align:null},"CheckSum"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53d1\u5e03\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-seata/releases/download/v2.0.0/seata-server-2.0.0.zip"},"2.0.0.zip")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/seataio/seata-server/tags?page=1&name=2.0.0"},"seataio/seata-server:2.0.0")),(0,n.kt)("td",{parentName:"tr",align:null},"5c5c6a98649f37ed7894743b21bc8777"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/release-notes/"},"2.0.x \u53d1\u5e03\u8bf4\u660e")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/user/quickstart/"},"2.0.x \u5feb\u901f\u5f00\u59cb"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1.8.0"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-seata/releases/download/v1.8.0/seata-server-1.8.0.zip"},"1.8.0.zip")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/seataio/seata-server/tags?page=1&name=1.8.0"},"seataio/seata-server:1.8.0")),(0,n.kt)("td",{parentName:"tr",align:null},"f5de162a4577f5f96828cba75d912240"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/v1.8/release-notes/"},"1.8.x \u53d1\u5e03\u8bf4\u660e")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/v1.8/user/quickstart/"},"1.8.x \u5feb\u901f\u5f00\u59cb"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1.7.1"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/incubator-seata/releases/download/v1.7.1/seata-server-1.7.1.zip"},"1.7.1.zip")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/seataio/seata-server/tags?page=1&name=1.7.1"},"seataio/seata-server:1.7.1")),(0,n.kt)("td",{parentName:"tr",align:null},"5e7f41965f8f26a46b727d204eef3054"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/v1.7/release-notes/"},"1.7.x \u53d1\u5e03\u8bf4\u660e")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/v1.7/user/quickstart/"},"1.7.x \u5feb\u901f\u5f00\u59cb"))))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Seata \u7248\u672c\u7ef4\u62a4\u7b56\u7565\uff0c\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"li",href:"/docs/ops/version-maintain-plan"},"\u7248\u672c\u7ef4\u62a4\u6587\u6863"),"\uff0c\u8bf7\u60a8\u5c3d\u5feb\u5347\u7ea7\u4f4e\u7248\u672c\u81f3\u5f53\u524d\u7ef4\u62a4\u7248\u672c\u3002\u7248\u672c\u5347\u7ea7\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"li",href:"/docs/ops/upgrade"},"\u5347\u7ea7\u6307\u5357")),(0,n.kt)("li",{parentName:"ol"},"\u66f4\u591a\u5386\u53f2\u7248\u672c\u4e0b\u8f7d\uff0c\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"li",href:"/unversioned/release-history/seata-server"},"\u7248\u672c\u5386\u53f2")))),(0,n.kt)("h2",{id:"\u5feb\u7167\u7248"},"\u5feb\u7167\u7248"),(0,n.kt)("section",{class:"full_width_table_section"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u7248\u672c\u53f7"),(0,n.kt)("th",{parentName:"tr",align:null},"\u4e8c\u8fdb\u5236\u4e0b\u8f7d"),(0,n.kt)("th",{parentName:"tr",align:null},"docker \u955c\u50cf"),(0,n.kt)("th",{parentName:"tr",align:null},"checksum"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53d1\u5e03\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7248\u672c\u6587\u6863"))))))}c.isMDXComponent=!0}}]);