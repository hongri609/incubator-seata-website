"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[7956],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),o=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=o(a),m=l,k=c["".concat(u,".").concat(m)]||c[m]||h[m]||n;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var o=2;o<n;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58344:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>p,toc:()=>o});var r=a(87462),l=(a(67294),a(3905));const n={title:"\u53d1\u5e03\u8bf4\u660e",keywords:["Seata","\u53d1\u5e03\u8bf4\u660e","1.8.x"],description:"1.8.x \u53d1\u5e03\u8bf4\u660e"},i="\u53d1\u5e03\u8bf4\u660e",p={unversionedId:"release-notes",id:"version-v1.8/release-notes",title:"\u53d1\u5e03\u8bf4\u660e",description:"1.8.x \u53d1\u5e03\u8bf4\u660e",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.8/release-notes.md",sourceDirName:".",slug:"/release-notes",permalink:"/zh-cn/docs/v1.8/release-notes",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.8/release-notes.md",tags:[],version:"v1.8",frontMatter:{title:"\u53d1\u5e03\u8bf4\u660e",keywords:["Seata","\u53d1\u5e03\u8bf4\u660e","1.8.x"],description:"1.8.x \u53d1\u5e03\u8bf4\u660e"},sidebar:"release-notes"},u={},o=[{value:"Seata",id:"seata",level:2},{value:"1.8.0 (2023-11-05)",id:"180-2023-11-05",level:3},{value:"Seata 1.8.0",id:"seata-180",level:3},{value:"feature",id:"feature",level:3},{value:"bugfix",id:"bugfix",level:3},{value:"optimize",id:"optimize",level:3},{value:"security",id:"security",level:3},{value:"test",id:"test",level:3},{value:"\u5e38\u7528\u94fe\u63a5",id:"\u5e38\u7528\u94fe\u63a5",level:4}],s={toc:o},c="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u53d1\u5e03\u8bf4\u660e"},"\u53d1\u5e03\u8bf4\u660e"),(0,l.kt)("h2",{id:"seata"},"Seata"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"GitHub: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata"},"https://github.com/apache/incubator-seata")),(0,l.kt)("p",{parentName:"blockquote"},"\u53d1\u5e03\u8bf4\u660e: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/releases"},"https://github.com/apache/incubator-seata/releases"))),(0,l.kt)("h3",{id:"180-2023-11-05"},"1.8.0 (2023-11-05)"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/archive/v1.8.0.zip"},"source")," |\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/releases/download/v1.8.0/seata-server-1.8.0.zip"},"binary")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("mark",null,"Release notes")),(0,l.kt)("h3",{id:"seata-180"},"Seata 1.8.0"),(0,l.kt)("p",null,"Seata 1.8.0 \u53d1\u5e03"),(0,l.kt)("p",null,"Seata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002"),(0,l.kt)("p",null,"\u6b64\u7248\u672c\u66f4\u65b0\u5982\u4e0b\uff1a"),(0,l.kt)("h3",{id:"feature"},"feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/3672"},"#3672"),"] AT\u6a21\u5f0f\u652f\u6301Dameng\u6570\u636e\u5e93"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5892"},"#5892"),"] AT\u6a21\u5f0f\u652f\u6301PolarDB-X 2.0\u6570\u636e\u5e93")),(0,l.kt)("h3",{id:"bugfix"},"bugfix"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5833"},"#5833"),"] \u4fee\u590d XA \u4e8b\u52a1\u5931\u8d25\u56de\u6eda\u540e\uff0cTC \u7ee7\u7eed\u91cd\u8bd5\u56de\u6eda\u7684\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5884"},"#5884"),"] \u4fee\u590d\u8fbe\u68a6\u524d\u540e\u955c\u50cf\u67e5\u8be2\u5217\u540d\u90fd\u52a0\u4e86\u5f15\u53f7\u5bfc\u81f4sql\u5f02\u5e38\u7684\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5931"},"#5931"),"] \u4fee\u590d\u5b58\u50a8redis\u54e8\u5175\u6a21\u5f0f\u4e0b\u54e8\u5175\u5bc6\u7801\u7f3a\u5931\u7684\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5970"},"#5970"),'] \u4fee\u590d\u67d0\u4e9b\u672a\u5f03\u7528\u7684\u914d\u7f6e\u663e\u793a"\u5df2\u5f03\u7528"')),(0,l.kt)("h3",{id:"optimize"},"optimize"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5866"},"#5866"),"] \u4e00\u4e9b\u5c0f\u7684\u8bed\u6cd5\u4f18\u5316"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5889"},"#5889"),"] \u79fb\u9664\u65e0license\u7ec4\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5890"},"#5890"),"] \u79fb\u96647z\u538b\u7f29\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5891"},"#5891"),"] \u79fb\u9664 mariadb.jdbc \u4f9d\u8d56"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5828"},"#5828"),"] \u4fee\u6b63 ",(0,l.kt)("inlineCode",{parentName:"li"},"codecov chart")," \u4e0d\u5c55\u793a\u7684\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5927"},"#5927"),"] \u4f18\u5316\u4e00\u4e9b\u4e0e Apollo \u76f8\u5173\u7684\u811a\u672c"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5918"},"#5918"),"] \u4fee\u6b63codecov.yml\u4e0d\u6807\u51c6\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5939"},"#5939"),"] \u652f\u6301 jmx \u76d1\u63a7\u914d\u7f6e")),(0,l.kt)("h3",{id:"security"},"security"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5867"},"#5867"),"] \u4fee\u590dnpm package\u6f0f\u6d1e"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5898"},"#5898"),"] \u4fee\u590dnpm package\u6f0f\u6d1e")),(0,l.kt)("h3",{id:"test"},"test"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5888"},"#5888"),"] \u79fb\u9664 sofa \u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5831"},"#5831"),"] \u5347\u7ea7 ",(0,l.kt)("inlineCode",{parentName:"li"},"druid")," \u7248\u672c\uff0c\u5e76\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"test-druid.yml")," \u7528\u4e8e\u6d4b\u8bd5seata\u4e0edruid\u5404\u7248\u672c\u7684\u517c\u5bb9\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5862"},"#5862"),"] \u4fee\u590d\u5355\u5143\u6d4b\u8bd5\u5728Java21\u4e0b\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c\u7684\u95ee\u9898\u3002"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5914"},"#5914"),"] \u5347\u7ea7 native-lib-loader \u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5960"},"#5960"),"] \u4fee\u590d zookeeper \u5355\u6d4b\u5931\u8d25\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/pull/5981"},"#5981"),"] \u56fa\u5b9a ",(0,l.kt)("inlineCode",{parentName:"li"},"seata-server")," \u6240\u4f7f\u7528\u6709 jedis \u7248\u672c")),(0,l.kt)("p",null,"\u975e\u5e38\u611f\u8c22\u4ee5\u4e0b contributors \u7684\u4ee3\u7801\u8d21\u732e\u3002\u82e5\u6709\u65e0\u610f\u9057\u6f0f\uff0c\u8bf7\u62a5\u544a\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/slievrly"},"slievrly")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/capthua"},"capthua")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/funky-eyes"},"funky-eyes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/iquanzhan"},"iquanzhan")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/leizhiyuan"},"leizhiyuan")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/l81893521"},"l81893521")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/PeppaO"},"PeppaO")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/wangliang181230"},"wangliang181230")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/hsien999"},"hsien999"))),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u6536\u5230\u4e86\u793e\u533a\u53cd\u9988\u7684\u5f88\u591a\u6709\u4ef7\u503c\u7684issue\u548c\u5efa\u8bae\uff0c\u975e\u5e38\u611f\u8c22\u5927\u5bb6\u3002"),(0,l.kt)("h4",{id:"\u5e38\u7528\u94fe\u63a5"},"\u5e38\u7528\u94fe\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Seata:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata"},"https://github.com/apache/incubator-seata")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Seata-Samples:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-samples"},"https://github.com/apache/incubator-seata-samples")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Release:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/releases"},"https://github.com/apache/incubator-seata/releases")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"WebSite:")," ",(0,l.kt)("a",{parentName:"li",href:"https://seata.io"},"https://seata.io")))))}h.isMDXComponent=!0}}]);