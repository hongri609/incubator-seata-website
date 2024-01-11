"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[68718],{3905:(t,a,e)=>{e.d(a,{Zo:()=>s,kt:()=>g});var r=e(67294);function i(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){i(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,r,i=function(t,a){if(null==t)return{};var e,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)e=n[r],a.indexOf(e)>=0||(i[e]=t[e]);return i}(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)e=n[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var p=r.createContext({}),u=function(t){var a=r.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},s=function(t){var a=u(t.components);return r.createElement(p.Provider,{value:a},t.children)},h="mdxType",c={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(t,a){var e=t.components,i=t.mdxType,n=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),h=u(e),m=i,g=h["".concat(p,".").concat(m)]||h[m]||c[m]||n;return e?r.createElement(g,l(l({ref:a},s),{},{components:e})):r.createElement(g,l({ref:a},s))}));function g(t,a){var e=arguments,i=a&&a.mdxType;if("string"==typeof t||i){var n=e.length,l=new Array(n);l[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o[h]="string"==typeof t?t:i,l[1]=o;for(var u=2;u<n;u++)l[u]=e[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},40915:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=e(87462),i=(e(67294),e(3905));const n={title:"\u751f\u4ea7\u73af\u5883\u53ef\u7528\u7684 seata-go 1.2.0 \u6765\u4e86\uff01\uff01\uff01",author:"Seata\u793e\u533a",keywords:["seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u3001golang\u30011.2.0"],description:"\u751f\u4ea7\u73af\u5883\u53ef\u7528\u7684 seata-go 1.2.0 \u6765\u4e86\uff01\uff01\uff01",date:"2023/06/08"},l=void 0,o={permalink:"/zh-cn/blog/seata-go-1.2.0",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/seata-go-1.2.0.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-go-1.2.0.md",title:"\u751f\u4ea7\u73af\u5883\u53ef\u7528\u7684 seata-go 1.2.0 \u6765\u4e86\uff01\uff01\uff01",description:"\u751f\u4ea7\u73af\u5883\u53ef\u7528\u7684 seata-go 1.2.0 \u6765\u4e86\uff01\uff01\uff01",date:"2023-06-08T00:00:00.000Z",formattedDate:"2023\u5e746\u67088\u65e5",tags:[],readingTime:2.095,hasTruncateMarker:!1,authors:[{name:"Seata\u793e\u533a"}],frontMatter:{title:"\u751f\u4ea7\u73af\u5883\u53ef\u7528\u7684 seata-go 1.2.0 \u6765\u4e86\uff01\uff01\uff01",author:"Seata\u793e\u533a",keywords:["seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1\u3001golang\u30011.2.0"],description:"\u751f\u4ea7\u73af\u5883\u53ef\u7528\u7684 seata-go 1.2.0 \u6765\u4e86\uff01\uff01\uff01",date:"2023/06/08"},prevItem:{title:"Seata\u7684\u53ef\u89c2\u6d4b\u5b9e\u8df5",permalink:"/zh-cn/blog/seata-observable-practice"},nextItem:{title:"6\u5927\u8bfe\u9898\u73b0\u5df2\u5f00\u653e\u6311\u9009 | \u6b22\u8fce\u62a5\u540d Seata \u5f00\u6e90\u4e4b\u590f",permalink:"/zh-cn/blog/iscas2023"}},p={authorsImageUrls:[void 0]},u=[{value:"\u751f\u4ea7\u73af\u5883\u53ef\u7528\u7684 seata-go 1.2.0 \u6765\u4e86",id:"\u751f\u4ea7\u73af\u5883\u53ef\u7528\u7684-seata-go-120-\u6765\u4e86",level:2},{value:"\u53d1\u5e03\u6982\u89c8",id:"\u53d1\u5e03\u6982\u89c8",level:3},{value:"feature",id:"feature",level:3},{value:"bugfix",id:"bugfix",level:3},{value:"optimize",id:"optimize",level:3},{value:"test",id:"test",level:3},{value:"doc",id:"doc",level:3},{value:"contributors",id:"contributors",level:3},{value:"Link",id:"link",level:4}],s={toc:u},h="wrapper";function c(t){let{components:a,...e}=t;return(0,i.kt)(h,(0,r.Z)({},s,e,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u751f\u4ea7\u73af\u5883\u53ef\u7528\u7684-seata-go-120-\u6765\u4e86"},"\u751f\u4ea7\u73af\u5883\u53ef\u7528\u7684 seata-go 1.2.0 \u6765\u4e86"),(0,i.kt)("p",null,"Seata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002"),(0,i.kt)("h3",{id:"\u53d1\u5e03\u6982\u89c8"},"\u53d1\u5e03\u6982\u89c8"),(0,i.kt)("p",null,"Seata-go 1.2.0\u7248\u672c\u652f\u6301 XA \u6a21\u5f0f\u3002XA \u534f\u8bae\u662f\u7531 X/Open \u7ec4\u7ec7\u63d0\u51fa\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u5904\u7406\u89c4\u8303\uff0c\u5176\u4f18\u70b9\u662f\u5bf9\u4e1a\u52a1\u4ee3\u7801\u65e0\u4fb5\u5165\u3002\u5f53\u524d Seata-go \u7684 XA \u6a21\u5f0f\u652f\u6301 MySQL \u6570\u636e\u5e93\u3002\u81f3\u6b64\uff0cseata-go \u5df2\u7ecf\u96c6\u9f50 AT\u3001TCC\u3001Saga \u548c XA \u56db\u79cd\u4e8b\u52a1\u6a21\u5f0f\uff0c\u5b8c\u6210\u4e86\u4e0e Seata Java \u7684\u529f\u80fd\u5bf9\u9f50\u3002 XA \u6a21\u5f0f\u7684\u4e3b\u8981\u529f\u80fd:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e86 XA \u6570\u636e\u6e90\u4ee3\u7406",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go-samples/tree/main/xa"},"https://github.com/apache/incubator-seata-go-samples/tree/main/xa")),(0,i.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e86 XA \u4e8b\u52a1\u6a21\u5f0f",(0,i.kt)("br",{parentName:"li"}),"XA \u76f8\u5173\u7684 sampes \u53ef\u4ee5\u53c2\u8003\u793a\u4f8b\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go-samples/tree/main/xa"},"https://github.com/apache/incubator-seata-go-samples/tree/main/xa"))),(0,i.kt)("h3",{id:"feature"},"feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go/pull/467"},"#467"),"] \u5b9e\u73b0 XA \u6a21\u5f0f\u652f\u6301 MySQL"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"ttps://github.com/apache/incubator-seata-go/pull/534"},"#534"),"] \u652f\u6301 session \u7684\u8d1f\u8f7d\u5747\u8861")),(0,i.kt)("h3",{id:"bugfix"},"bugfix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go/pull/540"},"#540"),"] \u4fee\u590d\u521d\u59cb\u5316 xa \u6a21\u5f0f\u7684 bug"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go/pull/545"},"#545"),"] \u4fee\u590d xa \u6a21\u5f0f\u83b7\u53d6 db \u7248\u672c\u53f7\u7684 bug"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go/pull/548"},"#548"),"] \u4fee\u590d\u542f\u52a8 xa \u4f1a\u5931\u8d25\u7684 bug"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go/pull/556"},"#556"),"] \u4fee\u590d xa \u6570\u636e\u6e90\u7684 bug"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go/pull/562"},"#562"),"] \u4fee\u590d\u63d0\u4ea4 xa \u5168\u5c40\u4e8b\u52a1\u7684 bug"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go/pull/564"},"#564"),"] \u4fee\u590d\u63d0\u4ea4 xa \u5206\u652f\u4e8b\u52a1\u7684 bug"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"htps://github.com/apache/incubator-seata-go/pull/566"},"#566"),"] \u4fee\u590d\u4f7f\u7528 xa \u6570\u636e\u6e90\u6267\u884c\u672c\u5730\u4e8b\u52a1\u7684 bug")),(0,i.kt)("h3",{id:"optimize"},"optimize"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go/pull/523"},"#523"),"] \u4f18\u5316 CI \u6d41\u7a0b"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go/pull/456"},"#525"),"] \u5c06 jackson \u5e8f\u5217\u5316\u91cd\u547d\u540d\u4e3a json"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go/pull/532"},"#532"),"] \u79fb\u9664\u91cd\u590d\u7684\u4ee3\u7801"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go/pull/536"},"#536"),"] \u4f18\u5316 go import \u4ee3\u7801\u683c\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go/pull/554"},"#554"),"] \u4f18\u5316 xa \u6a21\u5f0f\u7684\u6027\u80fd"),(0,i.kt)("li",{parentName:"ul"},"[","[#561(https://github.com/apache/incubator-seata-go/pull/561)]"," \u4f18\u5316 xa \u6a21\u5f0f\u7684\u65e5\u5fd7\u8f93\u51fa")),(0,i.kt)("h3",{id:"test"},"test"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go/pull/535"},"#53"),"] \u6dfb\u52a0\u96c6\u6210\u6d4b\u8bd5")),(0,i.kt)("h3",{id:"doc"},"doc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("a",{parentName:"li",href:"https:/github.com/apache/incubator-seata-go/pull/550"},"#550"),"] \u6dfb\u52a0 1.2.0 \u7248\u672c\u7684\u6539\u52a8\u65e5\u5fd7")),(0,i.kt)("h3",{id:"contributors"},"contributors"),(0,i.kt)("p",null,"Thanks to these contributors for their code commits. Please report an unintended omission."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/georgehao"},"georgehao")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/luky116"},"luky116")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jasondeng1997"},"jasondeng1997")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/106umao"},"106umao")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wang1309"},"wang1309")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iSuperCoder"},"iSuperCoder")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Charlie17Li"},"Charlie17Li")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Code-Fight"},"Code-Fight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Kirhaku"},"Kirhaku")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/VaderKai"},"Vaderkai"))),(0,i.kt)("h4",{id:"link"},"Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://github.com/apache/incubator-seata"},"http://github.com/apache/incubator-seata")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata-php"},"https://github.com/seata/seata-php"),"r-seata>"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/seata/seata-js"},"https://github.com/seata/seata-js"),"hp>"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go"},"https://github.com/apache/incubator-seata-go")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go"},"https://github.com/apache/incubator-seata-go"),(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-samples"},"https://github.com/apache/incubator-seata-samples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata-go-samples"},"https://github.com/apache/incubator-seata-go-samples")),(0,i.kt)("li",{parentName:"ul"},"<https:ithub.com/apache/incubator-seata-go-samples>\n",(0,i.kt)("a",{parentName:"li",href:"https://seata.io/"},"https://seata.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://seata.io/"},"https://seata.io/"))))}c.isMDXComponent=!0}}]);