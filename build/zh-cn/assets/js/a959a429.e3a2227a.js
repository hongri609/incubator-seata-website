"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[5685],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(t),d=r,k=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return t?n.createElement(k,i(i({ref:a},u),{},{components:t})):n.createElement(k,i({ref:a},u))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54509:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const o={title:"ConcurrentHashMap\u5bfc\u81f4\u7684Seata\u6b7b\u9501\u95ee\u9898",keywords:["Seata\u3001\u52a8\u6001\u6570\u636e\u6e90\u3001DataSource\u3001ConcurrentHashMap\u3001computeIfAbsent"],description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u4e00\u4e2a\u7ebf\u4e0a\u95ee\u9898\uff0c\u56e0ConcurrentHashMap\u7684Bug\u800c\u5bfc\u81f4\u7684Seata\u52a8\u6001\u6570\u636e\u6e90\u4ee3\u7406\u6b7b\u9501",author:"\u7f57\u5c0f\u52c7",date:"2021/03/13"},i="\u80cc\u666f\u4ecb\u7ecd",p={permalink:"/zh-cn/blog/seata-dsproxy-deadlock",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-dsproxy-deadlock.md",title:"ConcurrentHashMap\u5bfc\u81f4\u7684Seata\u6b7b\u9501\u95ee\u9898",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u4e00\u4e2a\u7ebf\u4e0a\u95ee\u9898\uff0c\u56e0ConcurrentHashMap\u7684Bug\u800c\u5bfc\u81f4\u7684Seata\u52a8\u6001\u6570\u636e\u6e90\u4ee3\u7406\u6b7b\u9501",date:"2021-03-13T00:00:00.000Z",formattedDate:"2021\u5e743\u670813\u65e5",tags:[],readingTime:15.61,hasTruncateMarker:!1,authors:[{name:"\u7f57\u5c0f\u52c7"}],frontMatter:{title:"ConcurrentHashMap\u5bfc\u81f4\u7684Seata\u6b7b\u9501\u95ee\u9898",keywords:["Seata\u3001\u52a8\u6001\u6570\u636e\u6e90\u3001DataSource\u3001ConcurrentHashMap\u3001computeIfAbsent"],description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u4e00\u4e2a\u7ebf\u4e0a\u95ee\u9898\uff0c\u56e0ConcurrentHashMap\u7684Bug\u800c\u5bfc\u81f4\u7684Seata\u52a8\u6001\u6570\u636e\u6e90\u4ee3\u7406\u6b7b\u9501",author:"\u7f57\u5c0f\u52c7",date:"2021/03/13"},prevItem:{title:"Seata\u65b0\u7279\u6027\u652f\u6301 -- undo_log\u538b\u7f29",permalink:"/zh-cn/blog/seata-feature-undo-log-compress"},nextItem:{title:"Seata\u5e94\u7528\u4fa7\u542f\u52a8\u8fc7\u7a0b\u5256\u6790\u2014\u2014\u6ce8\u518c\u4e2d\u5fc3\u4e0e\u914d\u7f6e\u4e2d\u5fc3\u6a21\u5757",permalink:"/zh-cn/blog/seata-client-start-analysis-02"}},l={authorsImageUrls:[void 0]},c=[{value:"ConcurrentHashMap#computeIfAbsent",id:"concurrenthashmapcomputeifabsent",level:3},{value:"Seata\u6570\u636e\u6e90\u81ea\u52a8\u4ee3\u7406",id:"seata\u6570\u636e\u6e90\u81ea\u52a8\u4ee3\u7406",level:3},{value:"SeataDataSourceBeanPostProcessor",id:"seatadatasourcebeanpostprocessor",level:5},{value:"SeataAutoDataSourceProxyAdvice",id:"seataautodatasourceproxyadvice",level:5},{value:"DataSourceProxyHolder",id:"datasourceproxyholder",level:5},{value:"\u5ba2\u6237\u7aef\u6570\u636e\u6e90\u914d\u7f6e",id:"\u5ba2\u6237\u7aef\u6570\u636e\u6e90\u914d\u7f6e",level:3},{value:"\u5206\u6790\u8fc7\u7a0b",id:"\u5206\u6790\u8fc7\u7a0b",level:3},{value:"\u89e3\u51b3\u95ee\u9898",id:"\u89e3\u51b3\u95ee\u9898",level:3},{value:"\u4e1a\u52a1\u65b9\u6539\u52a8",id:"\u4e1a\u52a1\u65b9\u6539\u52a8",level:5},{value:"Seata\u5b8c\u5584",id:"seata\u5b8c\u5584",level:5},{value:"\u9057\u7559\u95ee\u9898",id:"\u9057\u7559\u95ee\u9898",level:3}],u={toc:c},s="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(s,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"seata\u7248\u672c\uff1a1.4.0\uff0c\u4f461.4\u4ee5\u4e0b\u7684\u6240\u6709\u7248\u672c\u4e5f\u90fd\u6709\u8fd9\u4e2a\u95ee\u9898"),(0,r.kt)("li",{parentName:"ol"},"\u95ee\u9898\u63cf\u8ff0\uff1a\u5728\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\u4e2d\uff0c\u4e00\u4e2a\u5206\u652f\u4e8b\u52a1\u4e0a\u7684\u7eaf\u67e5\u8be2\u64cd\u4f5c\u7a81\u7136\u5361\u4f4f\u4e86\uff0c\u6ca1\u6709\u4efb\u4f55\u53cd\u9988(\u65e5\u5fd7/\u5f02\u5e38)\uff0c\u76f4\u5230\u6d88\u8d39\u7aefRPC\u8d85\u65f6")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03a7f737b56e45b4b74e662033ec74f6~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"})),(0,r.kt)("h1",{id:"\u95ee\u9898\u6392\u67e5"},"\u95ee\u9898\u6392\u67e5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6574\u4e2a\u6d41\u7a0b\u5728\u4e00\u4e2a\u5168\u5c40\u4e8b\u52a1\u4e2d\uff0c\u6d88\u8d39\u8005\u548c\u63d0\u4f9b\u8005\u53ef\u4ee5\u770b\u6210\u662f\u5168\u5c40\u4e8b\u52a1\u4e2d\u7684\u4e24\u4e2a\u5206\u652f\u4e8b\u52a1\uff0c\u6d88\u8d39\u8005 --\x3e \u63d0\u4f9b\u8005"),(0,r.kt)("li",{parentName:"ol"},"\u6d88\u8d39\u8005\u5148\u6267\u884c\u672c\u5730\u7684\u4e00\u4e9b\u903b\u8f91\uff0c\u7136\u540e\u5411\u63d0\u4f9b\u8005\u53d1\u9001RPC\u8bf7\u6c42\uff0c\u786e\u5b9a\u6d88\u8d39\u8005\u53d1\u51fa\u4e86\u8bf7\u6c42\u5df2\u7ecf\u5e76\u4e14\u63d0\u4f9b\u8005\u63a5\u5230\u4e86\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u8005\u5148\u6253\u5370\u4e00\u6761\u65e5\u5fd7\uff0c\u7136\u540e\u6267\u884c\u4e00\u6761\u7eaf\u67e5\u8be2SQL\uff0c\u5982\u679cSQL\u6b63\u5e38\u6267\u884c\u4f1a\u6253\u5370\u65e5\u5fd7\uff0c\u4f46\u76ee\u524d\u7684\u73b0\u8c61\u662f\u53ea\u6253\u5370\u4e86\u6267\u884cSQL\u524d\u7684\u90a3\u6761\u65e5\u5fd7\uff0c\u800c\u6ca1\u6709\u6253\u5370\u4efb\u4f55SQL\u76f8\u5173\u7684\u65e5\u5fd7\u3002\u627eDBA\u67e5SQL\u65e5\u5fd7\uff0c\u53d1\u73b0\u8be5SQL\u6ca1\u6709\u6267\u884c"),(0,r.kt)("li",{parentName:"ol"},"\u786e\u5b9a\u4e86\u8be5\u64cd\u4f5c\u53ea\u662f\u5168\u5c40\u4e8b\u52a1\u4e0b\u7684\u4e00\u4e2a\u7eaf\u67e5\u8be2\u64cd\u4f5c\uff0c\u5728\u8be5\u64cd\u4f5c\u4e4b\u524d\uff0c\u5168\u5c40\u4e8b\u52a1\u4e2d\u7684\u6574\u4f53\u6d41\u7a0b\u5b8c\u5168\u6b63\u5e38"),(0,r.kt)("li",{parentName:"ol"},"\u5176\u5b9e\u5230\u8fd9\u91cc\u73b0\u8c61\u5df2\u7ecf\u5f88\u660e\u663e\u4e86\uff0c\u4e0d\u8fc7\u5f53\u65f6\u60f3\u6cd5\u6ca1\u8f6c\u53d8\u8fc7\u6765\uff0c\u4e00\u76f4\u5173\u6ce8\u90a3\u6761\u67e5\u8be2SQL\uff0c\u603b\u5728\u60f3\u5c31\u7b97\u67e5\u8be2\u8d85\u65f6\u7b49\u539f\u56e0\u4e5f\u5e94\u8be5\u629b\u51fa\u5f02\u5e38\u554a\uff0c\u4e0d\u5e94\u8be5\u4ec0\u4e48\u90fd\u6ca1\u6709\u3002DBA\u90fd\u627e\u4e0d\u5230\u67e5\u8be2\u8bb0\u5f55\uff0c\u90a3\u662f\u4e0d\u662f\u8bf4\u660eSQL\u53ef\u80fd\u6839\u672c\u5c31\u6ca1\u6267\u884c\u554a\uff0c\u800c\u662f\u5728\u6267\u884cSQL\u524d\u5c31\u51fa\u95ee\u9898\u4e86\uff0c\u6bd4\u5982\u4ee3\u7406\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u501f\u52a9arthas\u7684watch\u547d\u4ee4\uff0c\u4e00\u76f4\u6ca1\u6709\u4e1c\u897f\u8f93\u51fa\u3002\u7b2c\u4e00\u6761\u65e5\u5fd7\u7684\u8f93\u51fa\u4ee3\u8868\u8fd9\u4e2a\u65b9\u6cd5\u4e00\u5b9a\u6267\u884c\u4e86\uff0c\u8fdf\u8fdf\u6ca1\u6709\u7ed3\u679c\u8f93\u51fa\u8bf4\u660e\u5f53\u524d\u8bf7\u6c42\u5361\u4f4f\u4e86\uff0c\u4e3a\u4ec0\u4e48\u5361\u4f4f\u4e86\u5462\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u501f\u52a9arthas\u7684thread\u547d\u4ee4 ",(0,r.kt)("inlineCode",{parentName:"li"},"thread -b")," \u3001",(0,r.kt)("inlineCode",{parentName:"li"},"thread -n"),"\uff0c\u5c31\u662f\u8981\u627e\u51fa\u5f53\u524d\u6700\u5fd9\u7684\u7ebf\u7a0b\u3002\u8fd9\u4e2a\u6548\u679c\u5f88\u597d\uff0c\u6709\u4e00\u4e2a\u7ebf\u7a0bCPU\u4f7f\u7528\u7387",(0,r.kt)("inlineCode",{parentName:"li"},"92%"),",\u5e76\u4e14\u56e0\u4e3a\u8be5\u7ebf\u7a0b\u5bfc\u81f4\u5176\u5b8320\u591a\u4e2aDubbo\u7ebf\u7a0b",(0,r.kt)("inlineCode",{parentName:"li"},"BLOCKED"),"\u4e86\u3002\u5806\u6808\u4fe1\u606f\u5982\u4e0b"),(0,r.kt)("li",{parentName:"ol"},"\u5206\u6790\u5806\u6808\u4fe1\u606f\uff0c\u5df2\u7ecf\u53ef\u4ee5\u5f88\u660e\u663e\u7684\u53d1\u73b0\u548cseata\u76f8\u5173\u7684\u63a5\u53e3\u4e86\uff0c\u4f30\u8ba1\u548cseata\u7684\u6570\u636e\u6e90\u4ee3\u7406\u6709\u5173\uff1b\u540c\u65f6\u53d1\u73b0CPU\u5360\u7528\u6700\u9ad8\u7684\u90a3\u4e2a\u7ebf\u7a0b\u5361\u5728\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"ConcurrentHashMap#computeIfAbsent"),"\u65b9\u6cd5\u4e2d\u3002\u96be\u9053",(0,r.kt)("inlineCode",{parentName:"li"},"ConcurrentHashMap#computeIfAbsent"),"\u65b9\u6cd5\u6709bug\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u5230\u8fd9\u91cc\uff0c\u95ee\u9898\u7684\u5177\u4f53\u539f\u56e0\u6211\u4eec\u8fd8\u4e0d\u77e5\u9053\uff0c\u4f46\u5e94\u8be5\u548cseata\u7684\u6570\u636e\u6e90\u4ee3\u7406\u6709\u70b9\u5173\u7cfb\uff0c\u5177\u4f53\u539f\u56e0\u6211\u4eec\u9700\u8981\u5206\u6790\u4e1a\u52a1\u4ee3\u7801\u548cseata\u4ee3\u7801")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/faac0be0982e45a7a43b335e8f8b44bf~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"})),(0,r.kt)("h1",{id:"\u95ee\u9898\u5206\u6790"},"\u95ee\u9898\u5206\u6790"),(0,r.kt)("h3",{id:"concurrenthashmapcomputeifabsent"},"ConcurrentHashMap#computeIfAbsent"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u786e\u5b9e\u6709\u53ef\u80fd\u51fa\u95ee\u9898\uff1a\u5982\u679c\u4e24\u4e2akey\u7684hascode\u76f8\u540c\uff0c\u5e76\u4e14\u5728\u5bf9\u5e94\u7684mappingFunction\u4e2d\u53c8\u8fdb\u884c\u4e86computeIfAbsent\u64cd\u4f5c\uff0c\u5219\u4f1a\u5bfc\u81f4\u6b7b\u5faa\u73af\uff0c\u5177\u4f53\u5206\u6790\u53c2\u8003\u8fd9\u7bc7\u6587\u7ae0\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844904191077384200"},"https://juejin.cn/post/6844904191077384200")),(0,r.kt)("h3",{id:"seata\u6570\u636e\u6e90\u81ea\u52a8\u4ee3\u7406"},"Seata\u6570\u636e\u6e90\u81ea\u52a8\u4ee3\u7406"),(0,r.kt)("p",null,"\u76f8\u5173\u5185\u5bb9\u4e4b\u524d\u6709\u5206\u6790\u8fc7\uff0c\u6211\u4eec\u91cd\u70b9\u6765\u770b\u770b\u4ee5\u4e0b\u51e0\u4e2a\u6838\u5fc3\u7684\u7c7b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SeataDataSourceBeanPostProcessor"),(0,r.kt)("li",{parentName:"ol"},"SeataAutoDataSourceProxyAdvice"),(0,r.kt)("li",{parentName:"ol"},"DataSourceProxyHolder")),(0,r.kt)("h5",{id:"seatadatasourcebeanpostprocessor"},"SeataDataSourceBeanPostProcessor"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SeataDataSourceBeanPostProcessor"),"\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"BeanPostProcessor"),"\u5b9e\u73b0\u7c7b\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"postProcessAfterInitialization"),"\u65b9\u6cd5(\u5373Bean\u521d\u59cb\u5316\u4e4b\u540e)\u4e2d\uff0c\u4f1a\u4e3a\u4e1a\u52a1\u65b9\u914d\u7f6e\u7684\u6570\u636e\u6e90\u521b\u5efa\u5bf9\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"seata\u4ee3\u7406\u6570\u636e\u6e90")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class SeataDataSourceBeanPostProcessor implements BeanPostProcessor {\n    @Override\n    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {\n        if (bean instanceof DataSource) {\n            //When not in the excludes, put and init proxy.\n            if (!excludes.contains(bean.getClass().getName())) {\n                //Only put and init proxy, not return proxy.\n                DataSourceProxyHolder.get().putDataSource((DataSource) bean, dataSourceProxyMode);\n            }\n            //If is SeataDataSourceProxy, return the original data source.\n            if (bean instanceof SeataDataSourceProxy) {\n                LOGGER.info("Unwrap the bean of the data source," +\n                    " and return the original data source to replace the data source proxy.");\n                return ((SeataDataSourceProxy) bean).getTargetDataSource();\n            }\n        }\n        return bean;\n    }\n}\n')),(0,r.kt)("h5",{id:"seataautodatasourceproxyadvice"},"SeataAutoDataSourceProxyAdvice"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SeataAutoDataSourceProxyAdvice"),"\u662f\u4e00\u4e2aMethodInterceptor\uff0cseata\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"SeataAutoDataSourceProxyCreator"),"\u4f1a\u9488\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"DataSource\u7c7b\u578b\u7684Bean"),"\u521b\u5efa\u52a8\u6001\u4ee3\u7406\u5bf9\u8c61\uff0c\u4ee3\u7406\u903b\u8f91\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"SeataAutoDataSourceProxyAdvice#invoke"),"\u903b\u8f91\u3002\u5373\uff1a\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u6e90AOP\u4ee3\u7406\u5bf9\u8c61"),"\u7684\u76f8\u5173\u65b9\u6cd5\u65f6\u5019\uff0c\u4f1a\u7ecf\u8fc7\u5176",(0,r.kt)("inlineCode",{parentName:"p"},"invoke"),"\u65b9\u6cd5\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"invoke"),"\u65b9\u6cd5\u4e2d\u518d\u6839\u636e\u5f53\u539f\u751f\u6570\u636e\u6e90\uff0c\u627e\u5230\u5bf9\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"seata\u4ee3\u7406\u6570\u636e\u6e90"),"\uff0c\u6700\u7ec8\u8fbe\u5230\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"seata\u4ee3\u7406\u6570\u636e\u6e90"),"\u903b\u8f91\u7684\u76ee\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class SeataAutoDataSourceProxyAdvice implements MethodInterceptor, IntroductionInfo {\n    ......\n    @Override\n    public Object invoke(MethodInvocation invocation) throws Throwable {\n        if (!RootContext.requireGlobalLock() && dataSourceProxyMode != RootContext.getBranchType()) {\n            return invocation.proceed();\n        }\n        Method method = invocation.getMethod();\n        Object[] args = invocation.getArguments();\n        Method m = BeanUtils.findDeclaredMethod(dataSourceProxyClazz, method.getName(), method.getParameterTypes());\n        if (m != null) {\n            SeataDataSourceProxy dataSourceProxy = DataSourceProxyHolder.get().putDataSource((DataSource) invocation.getThis(), dataSourceProxyMode);\n            return m.invoke(dataSourceProxy, args);\n        } else {\n            return invocation.proceed();\n        }\n    }\n}\n")),(0,r.kt)("h5",{id:"datasourceproxyholder"},"DataSourceProxyHolder"),(0,r.kt)("p",null,"\u6d41\u7a0b\u4e0a\u6211\u4eec\u5df2\u7ecf\u6e05\u695a\u4e86\uff0c\u73b0\u5728\u8fd8\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5982\u4f55\u7ef4\u62a4",(0,r.kt)("inlineCode",{parentName:"p"},"\u539f\u751f\u6570\u636e\u6e90"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"seata\u4ee3\u7406\u6570\u636e\u6e90"),"\u4e4b\u95f4\u7684\u5173\u7cfb\uff1f\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"DataSourceProxyHolder"),"\u7ef4\u62a4\uff0c\u8fd9\u662f\u4e00\u4e2a\u5355\u4f8b\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u4e2d\u901a\u8fc7\u4e00\u4e2aConcurrentHashMap\u7ef4\u62a4\u4e24\u8005\u7684\u5173\u7cfb\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"\u539f\u751f\u6570\u636e\u6e90"),"\u4e3akey --\x3e ",(0,r.kt)("inlineCode",{parentName:"p"},"seata\u4ee3\u7406\u6570\u636e\u6e90")," \u4e3avalue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class DataSourceProxyHolder {\n      public SeataDataSourceProxy putDataSource(DataSource dataSource, BranchType dataSourceProxyMode) {\n        DataSource originalDataSource = dataSource;\n        ......\n        return CollectionUtils.computeIfAbsent(this.dataSourceProxyMap, originalDataSource,\n                BranchType.XA == dataSourceProxyMode ? DataSourceProxyXA::new : DataSourceProxy::new);\n    }\n}\n\n\n// CollectionUtils.java\npublic static <K, V> V computeIfAbsent(Map<K, V> map, K key, Function<? super K, ? extends V> mappingFunction) {\n    V value = map.get(key);\n    if (value != null) {\n        return value;\n    }\n    return map.computeIfAbsent(key, mappingFunction);\n}\n")),(0,r.kt)("h3",{id:"\u5ba2\u6237\u7aef\u6570\u636e\u6e90\u914d\u7f6e"},"\u5ba2\u6237\u7aef\u6570\u636e\u6e90\u914d\u7f6e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u4e86\u4e24\u4e2a\u6570\u636e\u6e90\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"DynamicDataSource"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"P6DataSource")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P6DataSource"),"\u53ef\u4ee5\u770b\u6210\u662f\u5bf9",(0,r.kt)("inlineCode",{parentName:"li"},"DynamicDataSource"),"\u7684\u4e00\u5c42\u5305\u88c5"),(0,r.kt)("li",{parentName:"ol"},"\u6211\u4eec\u6682\u65f6\u4e0d\u53bb\u7ba1\u8fd9\u4e2a\u914d\u7f6e\u5408\u4e0d\u5408\u7406\uff0c\u73b0\u5728\u53ea\u662f\u5355\u7eaf\u7684\u57fa\u4e8e\u8fd9\u4e2a\u6570\u636e\u6e90\u914d\u7f6e\u5206\u6790\u95ee\u9898")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Qualifier("dsMaster")\n@Bean("dsMaster")\nDynamicDataSource dsMaster() {\n    return new DynamicDataSource(masterDsRoute);\n}\n\n@Primary\n@Qualifier("p6DataSource")\n@Bean("p6DataSource")\nP6DataSource p6DataSource(@Qualifier("dsMaster") DataSource dataSource) {\n    P6DataSource p6DataSource =  new P6DataSource(dsMaster());\n    return p6DataSource;\n}\n')),(0,r.kt)("h3",{id:"\u5206\u6790\u8fc7\u7a0b"},"\u5206\u6790\u8fc7\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u5047\u8bbe\u73b0\u5728\u5927\u5bb6\u90fd\u5df2\u7ecf\u77e5\u9053\u4e86 ConcurrentHashMap#computeIfAbsent \u53ef\u80fd\u4f1a\u4ea7\u751f\u7684\u95ee\u9898"),"\uff0c\u5df2\u77e5\u73b0\u5728\u4ea7\u751f\u4e86\u8fd9\u4e2a\u95ee\u9898\uff0c\u7ed3\u5408\u5806\u6808\u4fe1\u606f\uff0c\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\u5927\u6982\u54ea\u91cc\u4ea7\u751f\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,r.kt)("p",null,"1\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap#computeIfAbsent"),"\u4f1a\u4ea7\u751f\u8fd9\u4e2a\u95ee\u9898\u7684\u524d\u63d0\u6761\u4ef6\u662f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e24\u4e2akey\u7684hashcode\u76f8\u540c"),"\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"mappingFunction\u4e2d\u5bf9\u5e94\u4e86\u4e00\u4e2aput\u64cd\u4f5c"),"\u3002\u7ed3\u5408\u6211\u4eecseata\u7684\u4f7f\u7528\u573a\u666f\uff0cmappingFunction\u5bf9\u5e94\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"DataSourceProxy::new"),"\uff0c\u8bf4\u660e\u5728DataSourceProxy\u7684\u6784\u9020\u65b9\u6cd5\u4e2d\u53ef\u80fd\u4f1a\u89e6\u53d1put\u64cd\u4f5c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00d8e13f71644c63b3bbb58c93b30e0c~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\u6267\u884cAOP\u4ee3\u7406\u6570\u636e\u6e90\u76f8\u5173\u65b9\u6cd5 =>\n\u8fdb\u5165SeataAutoDataSourceProxyAdvice\u5207\u9762\u903b\u8f91 => \n\u6267\u884cDataSourceProxyHolder#putDataSource\u65b9\u6cd5 => \n\u6267\u884cDataSourceProxy::new => \nAOP\u4ee3\u7406\u6570\u636e\u6e90\u7684getConnection\u65b9\u6cd5 => \n\u539f\u751f\u6570\u636e\u6e90\u7684getConnection\u65b9\u6cd5  => \n\u8fdb\u5165SeataAutoDataSourceProxyAdvice\u5207\u9762\u903b\u8f91 => \n\u6267\u884cDataSourceProxyHolder#putDataSource\u65b9\u6cd5 => \n\u6267\u884cDataSourceProxy::new  => \nDuridDataSource\u7684getConnection\u65b9\u6cd5\n")),(0,r.kt)("p",null,"2\u3001\u6b65\u9aa41\u4e2d\u8bf4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"AOP\u4ee3\u7406\u6570\u636e\u6e90"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"\u539f\u751f\u6570\u636e\u6e90"),"\u5206\u522b\u662f\u4ec0\u4e48\uff1f\u770b\u4e0b\u9762\u8fd9\u5f20\u56fe\n",(0,r.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3579631f58df4d17bfcd6f28ccc3fd79~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"})),(0,r.kt)("p",null,"3\u3001\u4e0a\u9762\u8fd8\u8bf4\u5230\u4e86\u4ea7\u751f\u8fd9\u4e2a\u95ee\u9898\u8fd8\u6709\u4e00\u4e2a\u6761\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e24\u4e2akey\u7684hashcode\u76f8\u540c"),"\uff0c\u4f46\u6211\u770b\u8fd9\u4e24\u4e2a\u6570\u636e\u6e90\u5bf9\u8c61\u90fd\u6ca1\u6709\u91cd\u5199",(0,r.kt)("inlineCode",{parentName:"p"},"hashcode"),"\u65b9\u6cd5\uff0c\u6240\u4ee5\u6309\u7406\u6765\u8bf4\uff0c\u8fd9\u4e24\u4e2a\u5bf9\u8c61\u7684hashcode\u4e00\u5b9a\u662f\u4e0d\u540c\u7684\u3002\u540e\u9762\u53c8\u518d\u770b\u4e86\u4e00\u904dConcurrentHashMap\u8fd9\u4e2a\u95ee\u9898\uff0c\u611f\u89c9",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e24\u4e2akey\u7684hashcode\u76f8\u540c"),"\u8fd9\u4e2a\u8bf4\u6cd5\u662f\u4e0d\u5bf9\u7684\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e24\u4e2akey\u4f1a\u4ea7\u751fhash\u51b2\u7a81"),"\u66f4\u5408\u7406\u4e00\u4e9b\uff0c\u8fd9\u6837\u5c31\u80fd\u89e3\u91ca\u4e24\u4e2ahashcode\u4e0d\u540c\u7684\u5bf9\u8c61\u4e3a\u5565\u4f1a\u9047\u4e0a\u8fd9\u4e2a\u95ee\u9898\u4e86\u3002\u4e3a\u4e86\u8bc1\u660e\u8fd9\u4e2a\uff0c\u4e0b\u9762\u6211\u7ed9\u4e86\u4e00\u4e2a\u4f8b\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test {\n    public static void main(String[] args) {\n        ConcurrentHashMap map = new ConcurrentHashMap(8);\n        Num n1 = new Num(3);\n        Num n2 = new Num(19);\n        Num n3 = new Num(20);\n    \n//      map.computeIfAbsent(n1, k1 -> map.computeIfAbsent(n3, k2 -> 200));      //  \u8fd9\u884c\u4ee3\u7801\u4e0d\u4f1a\u5bfc\u81f4\u7a0b\u5e8f\u6b7b\u5faa\u73af\n        map.computeIfAbsent(n1, k1 -> map.computeIfAbsent(n2, k2 -> 200));      // \u8fd9\u884c\u4ee3\u7801\u4f1a\u5bfc\u81f4\u7a0b\u5e8f\u6b7b\u5faa\u73af\n    }\n\n    static class Num{\n        private int i;\n        public Num(int i){\n            this.i = i;\n        }\n\n        @Override\n        public int hashCode() {\n            return i;\n        }\n    }\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u65b9\u4fbf\u91cd\u73b0\u95ee\u9898\uff0c\u6211\u4eec\u91cd\u5199\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"Num#hashCode"),"\u65b9\u6cd5\uff0c\u4fdd\u8bc1\u6784\u9020\u51fd\u6570\u5165\u53c2\u5c31\u662fhashcode\u7684\u503c"),(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2aConcurrentHashMap\u5bf9\u8c61\uff0cinitialCapacity\u4e3a8\uff0csizeCtl\u8ba1\u7b97\u51fa\u6765\u7684\u503c\u4e3a16\uff0c\u5373\u8be5map\u4e2d\u6570\u7ec4\u957f\u5ea6\u9ed8\u8ba4\u4e3a16"),(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"li"},"n1"),"\uff0c\u5165\u53c2\u4e3a3\uff0c\u5373hashcode\u4e3a3\uff0c\u8ba1\u7b97\u5f97\u51fa\u5176\u5bf9\u5e94\u7684\u6570\u7ec4\u4e0b\u6807\u4e3a3"),(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"li"},"n2"),"\uff0c\u5165\u53c2\u4e3a19\uff0c\u5373hashcode\u4e3a19\uff0c\u8ba1\u7b97\u5f97\u51fa\u5176\u5bf9\u5e94\u7684\u6570\u7ec4\u4e0b\u6807\u4e3a3\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"n1\u548cn2\u4ea7\u751f\u4e86hash\u51b2\u7a81")),(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"li"},"n3"),"\uff0c\u5165\u53c2\u4e3a20\uff0c\u5373hashcode\u4e3a20\uff0c\u8ba1\u7b97\u5f97\u51fa\u5176\u5bf9\u5e94\u7684\u6570\u7ec4\u4e0b\u6807\u4e3a4"),(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"map.computeIfAbsent(n1, k1 -> map.computeIfAbsent(n3, k2 -> 200))"),"\uff0c\u7a0b\u5e8f\u6b63\u5e38\u9000\u51fa\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"\u56e0\u4e3an1\u548cn3\u6ca1\u6709hash\u51b2\u7a81\uff0c\u6240\u4ee5\u6b63\u5e38\u7ed3\u675f")),(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"map.computeIfAbsent(n1, k1 -> map.computeIfAbsent(n2, k2 -> 200))"),"\uff0c\u7a0b\u5e8f\u6b63\u5e38\u9000\u51fa\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"\u56e0\u4e3an1\u548cn2\u4ea7\u751f\u4e86hash\u51b2\u7a81\uff0c\u6240\u4ee5\u9677\u5165\u6b7b\u5faa\u73af"))),(0,r.kt)("p",null,"4\u3001\u5728\u5bf9\u8c61\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"SeataDataSourceBeanPostProcessor"),"\u4e0d\u662f\u5df2\u7ecf\u5c06\u5bf9\u8c61\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u4ee3\u7406\u521d\u59cb\u5316\u597d\u4e86\u5417\uff1f\u4e3a\u4ec0\u4e48\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"SeataAutoDataSourceProxyAdvice"),"\u4e2d\u8fd8\u662f\u4f1a\u521b\u5efa\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u4ee3\u7406\u5462\uff1f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"SeataDataSourceBeanPostProcessor"),"\u6267\u884c\u65f6\u671f\u662f\u665a\u4e8eAOP\u4ee3\u7406\u5bf9\u8c61\u521b\u5efa\u7684\uff0c\u6240\u4ee5\u5728\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"SeataDataSourceBeanPostProcessor"),"\u76f8\u5173\u65b9\u6cd5\u7684\u65f6\u5019\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"SeataAutoDataSourceProxyAdvice"),"\u5176\u5b9e\u5e94\u751f\u6548\u4e86"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SeataDataSourceBeanPostProcessor"),"\u4e2d\u5411map\u4e2d\u6dfb\u52a0\u5143\u7d20\u65f6\uff0ckey\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"AOP\u4ee3\u7406\u6570\u636e\u6e90"),"\uff1b",(0,r.kt)("inlineCode",{parentName:"li"},"SeataAutoDataSourceProxyAdvice"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"invocation.getThis()"),"\u4e2d\u62ff\u5230\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"\u539f\u751f\u6570\u636e\u6e90"),"\uff0c\u6240\u4ee5key\u4e0d\u76f8\u540c")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/747b664a0b6c4f58843947576dd0856e~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"})),(0,r.kt)("p",null,"5\u3001\u8fd8\u6709\u4e00\u4e2a\u95ee\u9898\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"SeataAutoDataSourceProxyAdvic#invoke"),"\u65b9\u6cd5\u4e2d\u5e76\u6ca1\u6709\u8fc7\u6ee4",(0,r.kt)("inlineCode",{parentName:"p"},"toString\u3001hashCode"),"\u7b49\u65b9\u6cd5\uff0ccglib\u521b\u5efa\u7684\u4ee3\u7406\u5bf9\u8c61\u9ed8\u8ba4\u4f1a\u91cd\u5199\u8fd9\u51e0\u4e2a\u65b9\u6cd5\uff0c\u5982\u679c\u5728\u5411map\u4e2dput\u5143\u7d20\u7684\u65f6\u5019\u89e6\u53d1\u4e86\u4ee3\u7406\u5bf9\u8c61\u7684\u8fd9\u4e9b\u65b9\u6cd5\uff0c\u6b64\u65f6\u53c8\u4f1a\u91cd\u65b0\u8fdb\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"SeataAutoDataSourceProxyAdvic#invoke"),"\u5207\u9762\uff0c\u76f4\u5230\u7ebf\u7a0b\u5806\u6808\u76ca\u5904"),(0,r.kt)("h1",{id:"\u95ee\u9898\u603b\u7ed3"},"\u95ee\u9898\u603b\u7ed3"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u4e24\u4e2akey\u4f1a\u4ea7\u751fhash\u51b2\u7a81\u7684\u65f6\u5019\uff0c\u4f1a\u89e6\u53d1",(0,r.kt)("inlineCode",{parentName:"li"},"ConcurrentHashMap#computeIfAbsent"),"BUG\uff0c\u8be5BUG\u7684\u8868\u73b0\u5c31\u662f\u8ba9\u5f53\u524d\u7ebf\u7a0b\u9677\u5165\u6b7b\u5faa\u73af"),(0,r.kt)("li",{parentName:"ol"},"\u4e1a\u52a1\u53cd\u9988\uff0c\u8be5\u95ee\u9898\u662f\u5076\u73b0\u7684\uff0c\u5076\u73b0\u7684\u539f\u56e0\u6709\u4e24\u79cd\uff1a\u9996\u5148\uff0c\u8be5\u5e94\u7528\u662f\u591a\u8282\u70b9\u90e8\u7f72\uff0c\u4f46\u7ebf\u4e0a\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\u89e6\u53d1\u4e86\u8be5BUG(hashcode\u51b2\u7a81)\uff0c\u6240\u4ee5\u53ea\u6709\u5f53\u8bf7\u6c42\u6253\u5230\u8fd9\u4e2a\u8282\u70b9\u7684\u65f6\u5019\u624d\u6709\u53ef\u80fd\u4f1a\u89e6\u53d1\u8be5BUG\uff1b\u5176\u6b21\uff0c\u56e0\u4e3a\u6bcf\u6b21\u91cd\u542f\u5bf9\u8c61\u5730\u5740(hashcode)\u90fd\u662f\u4e0d\u786e\u5b9a\u7684\uff0c\u6240\u4ee5\u5e76\u4e0d\u662f\u6bcf\u6b21\u5e94\u7528\u91cd\u542f\u4e4b\u540e\u90fd\u4f1a\u89e6\u53d1\uff0c\u4f46\u5982\u679c\u4e00\u65e6\u89e6\u53d1\uff0c\u8be5\u8282\u70b9\u5c31\u4f1a\u4e00\u76f4\u5b58\u5728\u8fd9\u4e2a\u95ee\u9898\u3002\u6709\u4e00\u4e2a\u7ebf\u7a0b\u4e00\u76f4\u5728\u6b7b\u5faa\u73af\uff0c\u5e76\u5c06\u5176\u5b83\u5c1d\u8bd5\u4ecemap\u4e2d\u83b7\u53d6\u4ee3\u7406\u6570\u636e\u6e90\u7684\u7ebf\u7a0b\u963b\u585e\u4e86\uff0c\u8fd9\u79cd\u73b0\u8c61\u5728\u4e1a\u52a1\u4e0a\u7684\u53cd\u9988\u5c31\u662f\u8bf7\u6c42\u5361\u4f4f\u4e86\u3002\u5982\u679c\u8fde\u7eed\u8bf7\u6c42\u90fd\u662f\u8fd9\u6837\uff0c\u6b64\u65f6\u4e1a\u52a1\u65b9\u53ef\u80fd\u4f1a\u91cd\u542f\u670d\u52a1\uff0c\u7136\u540e",(0,r.kt)("inlineCode",{parentName:"li"},"\u56e0\u4e3a\u91cd\u542f\u540ehash\u51b2\u7a81\u4e0d\u4e00\u5b9a\u5b58\u5728\uff0c\u53ef\u80fd\u91cd\u542f\u540e\u4e1a\u52a1\u8868\u73b0\u5c31\u6b63\u5e38\u4e86\uff0c\u4f46\u4e5f\u6709\u53ef\u80fd\u5728\u4e0b\u6b21\u91cd\u542f\u7684\u65f6\u5019\u53c8\u4f1a\u89e6\u53d1\u4e86\u8fd9\u4e2aBUG")),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u9047\u5230\u8fd9\u4e2a\u95ee\u9898\u65f6\uff0c\u4ece\u6574\u4e2a\u95ee\u9898\u4e0a\u6765\u770b\uff0c\u786e\u5b9e\u5c31\u662f\u6b7b\u9501\u4e86\uff0c\u56e0\u4e3a\u90a3\u4e2a\u6b7b\u5faa\u73af\u7684\u7ebf\u7a0b\u5360\u8005\u9501\u4e00\u76f4\u4e0d\u91ca\u653e\uff0c\u5bfc\u81f4\u5176\u5b83\u64cd\u4f5c\u8be5map\u7684\u7ebf\u7a0b\u88abBLOCK\u4e86"),(0,r.kt)("li",{parentName:"ol"},"\u672c\u8d28\u4e0a\u8fd8\u662f\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"ConcurrentHashMap#computeIfAbsent\u65b9\u6cd5\u53ef\u80fd\u4f1a\u89e6\u53d1BUG"),"\uff0c\u800cseata\u7684\u4f7f\u7528\u573a\u666f\u521a\u597d\u5c31\u89e6\u53d1\u4e86\u8be5BUG"),(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u9762\u8fd9\u4e2ademo\u5176\u5b9e\u5c31\u5b8c\u6574\u7684\u6a21\u62df\u4e86\u7ebf\u4e0a\u51fa\u95ee\u9898\u65f6\u7684\u573a\u666f\uff0c\u5982\u4e0b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test {\n    public static void main(String[] args) {\n\n        ConcurrentHashMap map = new ConcurrentHashMap(8);\n\n        Num n1 = new Num(3);\n        Num n2 = new Num(19);\n\n        for(int i = 0; i< 20; i++){\n            new Thread(()-> {\n                try {\n                    Thread.sleep(1000);\n                } catch (InterruptedException e) {\n                    e.printStackTrace();\n                }\n\n                map.computeIfAbsent(n1, k-> 200);\n            }).start();\n        }\n        map.computeIfAbsent(n1, k1 -> map.computeIfAbsent(n2, k2 -> 200));\n    }\n\n\n    static class Num{\n        private int i;\n\n        public Num(int i){\n            this.i = i;\n        }\n        @Override\n        public int hashCode() {\n            return i;\n        }\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d6134c6498fa49c4a68b2745ba0895e3~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"})),(0,r.kt)("h3",{id:"\u89e3\u51b3\u95ee\u9898"},"\u89e3\u51b3\u95ee\u9898"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4ece\u4e24\u65b9\u9762\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e1a\u52a1\u65b9\u6539\u52a8\uff1aP6DataSource \u548c DynamicDataSource \u6ca1\u5fc5\u8981\u90fd\u88ab\u4ee3\u7406\uff0c\u76f4\u63a5\u4ee3\u7406P6DataSource\u5c31\u53ef\u4ee5\u4e86\uff0cDynamicDataSource\u6ca1\u6709\u5fc5\u8981\u58f0\u660e\u6210\u4e00\u4e2aBean\uff1b\u6216\u8005\u901a\u8fc7excluds\u5c5e\u6027\u6392\u9664P6DataSource\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u5b58\u5728\u91cd\u590d\u4ee3\u7406\u95ee\u9898"),(0,r.kt)("li",{parentName:"ol"},"Seata\u5b8c\u5584\uff1a\u5b8c\u5584\u6570\u636e\u6e90\u4ee3\u7406\u76f8\u5173\u903b\u8f91")),(0,r.kt)("h5",{id:"\u4e1a\u52a1\u65b9\u6539\u52a8"},"\u4e1a\u52a1\u65b9\u6539\u52a8"),(0,r.kt)("p",null,"1\u3001\u6570\u636e\u6e90\u76f8\u5173\u7684\u914d\u7f6e\u6539\u6210\u5982\u4e0b\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Primary\n@Qualifier("p6DataSource")\n@Bean("p6DataSource")\nP6DataSource p6DataSource(@Qualifier("dsMaster") DataSource dataSource) {\n    P6DataSource p6DataSource =  new P6DataSource(new TuYaDynamicDataSource(masterDsRoute));\n    logger.warn("dsMaster={}, hashcode={}",p6DataSource, p6DataSource.hashCode());\n    return p6DataSource;\n}\n')),(0,r.kt)("p",null,"2\u3001\u6216\u8005\u4e0d\u6539\u53d8\u76ee\u524d\u7684\u6570\u636e\u6e90\u914d\u7f6e\uff0c\u6dfb\u52a0excluds\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@EnableAutoDataSourceProxy(excludes={"P6DataSource"})\n')),(0,r.kt)("h5",{id:"seata\u5b8c\u5584"},"Seata\u5b8c\u5584"),(0,r.kt)("p",null,"1\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap#computeIfAbsent"),"\u65b9\u6cd5\u6539\u6210\u53cc\u91cd\u68c0\u67e5\uff0c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"SeataDataSourceProxy dsProxy = dataSourceProxyMap.get(originalDataSource);\nif (dsProxy == null) {\n    synchronized (dataSourceProxyMap) {\n        dsProxy = dataSourceProxyMap.get(originalDataSource);\n        if (dsProxy == null) {\n            dsProxy = createDsProxyByMode(dataSourceProxyMode, originalDataSource);\n            dataSourceProxyMap.put(originalDataSource, dsProxy);\n        }\n    }\n}\nreturn dsProxy;\n")),(0,r.kt)("p",null,"\u4e4b\u524d\u6211\u60f3\u76f4\u63a5\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"CollectionUtils#computeIfAbsent"),"\u65b9\u6cd5\uff0c\u7fa4\u91cc\u5927\u4f6c\u53cd\u9988\u8fd9\u6837\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6570\u636e\u6e90\u591a\u6b21\u521b\u5efa\uff0c\u786e\u5b9e\u6709\u8fd9\u4e2a\u95ee\u9898\uff1a\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public static <K, V> V computeIfAbsent(Map<K, V> map, K key, Function<? super K, ? extends V> mappingFunction) {\n    V value = map.get(key);\n    if (value != null) {\n        return value;\n    }\n    value = mappingFunction.apply(key);\n    return map.computeIfAbsent(key, value);\n}\n")),(0,r.kt)("p",null,"2\u3001SeataAutoDataSourceProxyAdvice\u5207\u9762\u903b\u8f91\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u8fc7\u6ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Method m = BeanUtils.findDeclaredMethod(dataSourceProxyClazz, method.getName(), method.getParameterTypes());\nif (m != null && DataSource.class.isAssignableFrom(method.getDeclaringClass())) {\n    SeataDataSourceProxy dataSourceProxy = DataSourceProxyHolder.get().putDataSource((DataSource) invocation.getThis(), dataSourceProxyMode);\n    return m.invoke(dataSourceProxy, args);\n} else {\n    return invocation.proceed();\n}\n")),(0,r.kt)("h3",{id:"\u9057\u7559\u95ee\u9898"},"\u9057\u7559\u95ee\u9898"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"SeataDataSourceBeanPostProcessor"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"SeataAutoDataSourceProxyAdvice"),"\u5bf9\u5e94\u65b9\u6cd5\u4e2d\uff0c\u5411map\u4e2d\u521d\u59cb\u5316",(0,r.kt)("inlineCode",{parentName:"p"},"seata\u6570\u636e\u6e90\u4ee3\u7406"),"\u65f6\u5bf9\u5e94\u7684key\u6839\u672c\u5c31\u4e0d\u540c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"SeataDataSourceBeanPostProcessor"),"\u4e2d\u5bf9\u5e94\u7684key\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"AOP\u4ee3\u7406\u6570\u636e\u6e90"),"\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"SeataAutoDataSourceProxyAdvice"),"\u4e2d\u5bf9\u5e94\u7684key\u662f\u539f\u751f\u5bf9\u8c61\uff0c\u6b64\u65f6\u5c31\u9020\u6210\u4e86\u4e0d\u5fc5\u8981\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"seata\u6570\u636e\u6e90\u4ee3\u7406"),"\u5bf9\u8c61\u7684\u521b\u5efa\u3002"),(0,r.kt)("p",null,"\u9488\u5bf9\u8fd9\u4e2a\u95ee\u9898\uff0c\u5927\u5bb6\u6709\u4ec0\u4e48\u597d\u7684\u5efa\u8bae\uff1f\u80fd\u4e0d\u80fd\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"SeataDataSourceBeanPostProcessor"),"\u6307\u5b9a\u4e00\u4e2aorder\uff0c\u8ba9\u5176\u5728\u521b\u5efaAOP\u4ee3\u7406\u5bf9\u8c61\u4e4b\u524d\u751f\u6548"),(0,r.kt)("h1",{id:"\u539f\u6587\u94fe\u63a5"},"\u539f\u6587\u94fe\u63a5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6939041336964153352/"},"https://juejin.cn/post/6939041336964153352/")))}m.isMDXComponent=!0}}]);