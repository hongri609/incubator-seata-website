"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[59390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=i,v=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={title:"\u6d4b\u8bd5\u8986\u76d6\u7387\u5411\u5bfc",keywords:["Seata"],description:"\u6d4b\u8bd5\u8986\u76d6\u7387\u5411\u5bfc\u3002"},o="\u6d4b\u8bd5\u8986\u76d6\u7387\u5411\u5bfc",l={unversionedId:"developers/contributor-guide/test-coverage-guide_dev",id:"version-v1.4/developers/contributor-guide/test-coverage-guide_dev",title:"\u6d4b\u8bd5\u8986\u76d6\u7387\u5411\u5bfc",description:"\u6d4b\u8bd5\u8986\u76d6\u7387\u5411\u5bfc\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4/developers/contributor-guide/test-coverage-guide_dev.md",sourceDirName:"developers/contributor-guide",slug:"/developers/contributor-guide/test-coverage-guide_dev",permalink:"/zh-cn/docs/v1.4/developers/contributor-guide/test-coverage-guide_dev",draft:!1,tags:[],version:"v1.4",frontMatter:{title:"\u6d4b\u8bd5\u8986\u76d6\u7387\u5411\u5bfc",keywords:["Seata"],description:"\u6d4b\u8bd5\u8986\u76d6\u7387\u5411\u5bfc\u3002"},sidebar:"developers",previous:{title:"\u65b0\u8d21\u732e\u8005\u5411\u5bfc",permalink:"/zh-cn/docs/v1.4/developers/contributor-guide/new-contributor-guide_dev"},next:{title:"\u62a5\u544a\u5b89\u5168\u95ee\u9898",permalink:"/zh-cn/docs/v1.4/developers/contributor-guide/reporting-security-issues_dev"}},c={},u=[{value:"\u6d4b\u8bd5\u7c92\u5ea6\u5982\u4f55\u5212\u5206",id:"\u6d4b\u8bd5\u7c92\u5ea6\u5982\u4f55\u5212\u5206",level:2},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:2},{value:"1.\u5199\u5355\u5143\u6d4b\u8bd5\u7684\u6536\u76ca",id:"1\u5199\u5355\u5143\u6d4b\u8bd5\u7684\u6536\u76ca",level:3},{value:"2.\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u7684\u4e00\u4e9b\u8bbe\u8ba1\u539f\u5219",id:"2\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u7684\u4e00\u4e9b\u8bbe\u8ba1\u539f\u5219",level:3},{value:"3.\u6d4b\u8bd5\u8986\u76d6\u7387\u8bbe\u5b9a\u503c",id:"3\u6d4b\u8bd5\u8986\u76d6\u7387\u8bbe\u5b9a\u503c",level:3},{value:"4.\u9879\u76ee\u7ea6\u5b9a",id:"4\u9879\u76ee\u7ea6\u5b9a",level:3},{value:"\u96c6\u6210\u6d4b\u8bd5",id:"\u96c6\u6210\u6d4b\u8bd5",level:2},{value:"\u9879\u76ee\u7ea6\u5b9a",id:"\u9879\u76ee\u7ea6\u5b9a",level:3}],p={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6d4b\u8bd5\u8986\u76d6\u7387\u5411\u5bfc"},"\u6d4b\u8bd5\u8986\u76d6\u7387\u5411\u5bfc"),(0,i.kt)("h2",{id:"\u6d4b\u8bd5\u7c92\u5ea6\u5982\u4f55\u5212\u5206"},"\u6d4b\u8bd5\u7c92\u5ea6\u5982\u4f55\u5212\u5206"),(0,i.kt)("img",{src:"https://microservices.io/i/test-pyramid.jpeg"}),'\u6d4b\u8bd5\u7c92\u5ea6\u5982\u4f55\u5212\u5206\u662f\u4e2a\u5927\u95ee\u9898\u3002Chris Richardson \u5728" [\u964d\u4f4e\u6d4b\u8bd5\u91d1\u5b57\u5854\uff1a\u5fae\u670d\u52a1\u7684\u6709\u6548\u6d4b\u8bd5\u7b56\u7565](https://microservices.io/microservices/testing/2019/09/20/oracle-code-one-testing.html)" \u4e00\u6587\u4e2d\u5c06\u670d\u52a1\u6d4b\u8bd5\u5212\u5206\u4e3a\uff1a\u5355\u5143\u6d4b\u8bd5\u3001\u96c6\u6210\u6d4b\u8bd5\u3001\u7ec4\u4ef6\u6d4b\u8bd5\u3001\u7aef\u5230\u7aef\u7684\u6d4b\u8bd5\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u8bbe\u8ba1\u6d4b\u8bd5\u7528\u4f8b\u7684\u8fc7\u7a0b\u4e2d,\u62ff\u6765\u501f\u9274\u3002',(0,i.kt)("h2",{id:"\u5355\u5143\u6d4b\u8bd5"},"\u5355\u5143\u6d4b\u8bd5"),(0,i.kt)("h3",{id:"1\u5199\u5355\u5143\u6d4b\u8bd5\u7684\u6536\u76ca"},"1.\u5199\u5355\u5143\u6d4b\u8bd5\u7684\u6536\u76ca"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5\u80fd\u5e2e\u52a9\u6bcf\u4e2a\u4eba\u6df1\u5165\u4ee3\u7801\u7ec6\u8282\uff0c\u4e86\u89e3\u4ee3\u7801\u7684\u529f\u80fd\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6d4b\u8bd5\u7528\u4f8b\u6211\u4eec\u80fd\u53d1\u73b0bug\uff0c\u5e76\u63d0\u4ea4\u4ee3\u7801\u7684\u5065\u58ee\u6027\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u7528\u4f8b\u540c\u65f6\u4e5f\u662f\u4ee3\u7801\u7684demo\u7528\u6cd5\u3002")),(0,i.kt)("h3",{id:"2\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u7684\u4e00\u4e9b\u8bbe\u8ba1\u539f\u5219"},"2.\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u7684\u4e00\u4e9b\u8bbe\u8ba1\u539f\u5219"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5e94\u8be5\u7cbe\u5fc3\u8bbe\u8ba1\u597d\u6b65\u9aa4\uff0c\u9897\u7c92\u5ea6\u548c\u7ec4\u5408\u6761\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u8fb9\u754c\u6761\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5\u4e5f\u5e94\u8be5\u597d\u597d\u8bbe\u8ba1\uff0c\u4e0d\u8981\u5199\u65e0\u7528\u7684\u4ee3\u7801\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u4f60\u53d1\u73b0\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"\u65b9\u6cd5"),"\u5f88\u96be\u5199\u5355\u5143\u6d4b\u8bd5\u65f6\uff0c\u5982\u679c\u53ef\u4ee5\u786e\u8ba4\u8fd9\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"\u65b9\u6cd5"),"\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"\u81ed\u4ee3\u7801"),"\uff0c\u90a3\u4e48\u5c31\u548c\u5f00\u53d1\u8005\u4e00\u8d77\u91cd\u6784\u5b83\u3002"),(0,i.kt)("li",{parentName:"ul"},"Seata\u4e2d\u7528\u7684mock\u6846\u67b6\u662f: ",(0,i.kt)("a",{parentName:"li",href:"http://site.mockito.org/"},"mockito"),". \u4e0b\u9762\u662f\u4e00\u4e9b\u5f00\u53d1\u5411\u5bfc:",(0,i.kt)("a",{parentName:"li",href:"http://www.baeldung.com/bdd-mockito"},"mockito tutorial"),",",(0,i.kt)("a",{parentName:"li",href:"https://dzone.com/refcardz/mockito"},"mockito refcard")),(0,i.kt)("li",{parentName:"ul"},"TDD\uff08\u53ef\u9009\uff09\uff1a\u5f53\u4f60\u5f00\u59cb\u5199\u4e00\u4e2a\u65b0\u7684\u529f\u80fd\u65f6\uff0c\u4f60\u53ef\u4ee5\u8bd5\u7740\u5148\u5199\u6d4b\u8bd5\u7528\u4f8b\u3002 ")),(0,i.kt)("h3",{id:"3\u6d4b\u8bd5\u8986\u76d6\u7387\u8bbe\u5b9a\u503c"},"3.\u6d4b\u8bd5\u8986\u76d6\u7387\u8bbe\u5b9a\u503c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u73b0\u9636\u6bb5\uff0cDelta\u66f4\u6539\u4ee3\u7801\u7684\u6d4b\u8bd5\u8986\u76d6\u8bbe\u5b9a\u503c\u4e3a\uff1a>\uff1d80%\uff0c\u8d8a\u9ad8\u8d8a\u597d\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u4e2a\u9875\u9762\u4e2d\u770b\u5230\u6d4b\u8bd5\u62a5\u544a: ",(0,i.kt)("a",{parentName:"li",href:"https://codecov.io/gh/seata/seata"},"https://codecov.io/gh/seata/seata"))),(0,i.kt)("h3",{id:"4\u9879\u76ee\u7ea6\u5b9a"},"4.\u9879\u76ee\u7ea6\u5b9a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Seata \u9879\u76ee\u7684\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u5206\u5e03\u5728\u9879\u76ee\u6bcf\u4e2a\u5b50\u6a21\u5757\u4e2d\uff0c\u6d4b\u8bd5\u65ad\u8a00\u7c7b\u4ee5Test\u7ed3\u5c3e\u3002")),(0,i.kt)("h2",{id:"\u96c6\u6210\u6d4b\u8bd5"},"\u96c6\u6210\u6d4b\u8bd5"),(0,i.kt)("h3",{id:"\u9879\u76ee\u7ea6\u5b9a"},"\u9879\u76ee\u7ea6\u5b9a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u96c6\u6210\u6d4b\u8bd5\u5728\u672c\u9879\u76ee\u6cdb\u6307\u5355\u5143\u6d4b\u8bd5\u4ee5\u4e0a\u7ea7\u522b\u7684\u6d4b\u8bd5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9879\u76ee\u4f7f\u7528",(0,i.kt)("a",{parentName:"li",href:"https://help.github.com/cn/actions/automating-your-workflow-with-github-actions"},"github actions"),"\u3001",(0,i.kt)("a",{parentName:"li",href:"https://github.com/GoogleContainerTools/jib"},"jiblib maven \u63d2\u4ef6"),"\u3001",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fabric8io/fabric8-maven-plugin"},"fabric maven \u63d2\u4ef6"),"\u3001",(0,i.kt)("a",{parentName:"li",href:"https://github.com/testcontainers/testcontainers-java"},"testContainers"),"\u7b49\u7528\u6765\u6784\u5efa",(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"),"\u955c\u50cf\uff0c\u642d\u5efa\u96c6\u6210\u6d4b\u8bd5\u73af\u5883 "),(0,i.kt)("li",{parentName:"ul"},"\u533a\u522b\u4e8e\u5355\u5143\u6d4b\u8bd5\uff0c\u67d0\u4e2a\u6d4b\u8bd5\u7528\u4f8b\uff0c\u9700\u8981\u4f9d\u8d56\u7b2c\u4e09\u65b9\u4e2d\u95f4\u4ef6\u7684\uff0c\u53ef\u4ee5\u4e0d\u7528Mock, \u4f7f\u7528\u4e0a\u9762\u4ecb\u7ecd\u7684\u5de5\u5177\u642d\u5efadocker\u73af\u5883,\u8fdb\u884c\u6d4b\u8bd5\u3002\u4f46\u662f\u4e5f\u8981\u6ce8\u610f\u642d\u5efa\u7ec4\u4ef6\u7684\u7c92\u5ea6\u3002\u8fc7\u4e8e\u590d\u6742\u7684\u73af\u5883\uff0c\u53ef\u4ee5\uff1a\u6838\u5fc3\u6d4b\u8bd5\u4f9d\u8d56\u7684\u4e2d\u95f4\u4ef6\u53ef\u4ee5docker\u642d\u5efa\uff0c\u975e\u5f3a\u4f9d\u8d56\u7684\u53ef\u4ee5Mock"),(0,i.kt)("li",{parentName:"ul"},"Seata \u9879\u76ee\u7684\u96c6\u6210\u6d4b\u8bd5\u7528\u4f8b\u5206\u5e03\u7edf\u4e00\u653e\u5728integration-test\u5b50\u6a21\u5757\u4e2d\uff0c\u6d4b\u8bd5\u65ad\u8a00\u7c7b\u4ee5IT\u7ed3\u5c3e\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u8fd8\u7528 ",(0,i.kt)("a",{parentName:"li",href:"https://junit.org/junit5/"},"Junit5")," "),(0,i.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u7528\u4f8b\u5e76\u884c\u8dd1\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6ce8\u610f\u516c\u5171\u4e2d\u95f4\u4ef6\u7684\u9694\u79bb\u72b6\u6001\uff0c\u89c4\u5212\u597d\u6240\u9020\u6570\u636e\uff0c\u9632\u6b62\u51b2\u7a81\u3002")))}d.isMDXComponent=!0}}]);