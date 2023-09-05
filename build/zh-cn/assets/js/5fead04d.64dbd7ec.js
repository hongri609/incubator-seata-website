"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[79258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>C});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,C=p["".concat(i,".").concat(g)]||p[g]||m[g]||c;return n?r.createElement(C,o(o({ref:t},u),{},{components:n})):r.createElement(C,o({ref:t},u))}));function C(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},69462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const c={title:"Seata tcc \u6a21\u5757\u6e90\u7801\u5206\u6790",author:"\u8d75\u6da6\u6cfd",keywords:["Seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"],date:"2019/12/25"},o=void 0,s={permalink:"/zh-cn/blog/seata-analysis-tcc-modular",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-analysis-tcc-modular.md",title:"Seata tcc \u6a21\u5757\u6e90\u7801\u5206\u6790",description:"\u4e00  .\u5bfc\u8bfb",date:"2019-12-25T00:00:00.000Z",formattedDate:"2019\u5e7412\u670825\u65e5",tags:[],readingTime:10.08,hasTruncateMarker:!1,authors:[{name:"\u8d75\u6da6\u6cfd"}],frontMatter:{title:"Seata tcc \u6a21\u5757\u6e90\u7801\u5206\u6790",author:"\u8d75\u6da6\u6cfd",keywords:["Seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"],date:"2019/12/25"},prevItem:{title:"\u6e90\u7801\u5206\u6790Seata-XID\u4f20\u9012 Dubbo\u7bc7",permalink:"/zh-cn/blog/seata-analysis-dubbo-transmit-xid"},nextItem:{title:"Seata core \u6a21\u5757\u6e90\u7801\u5206\u6790",permalink:"/zh-cn/blog/seata-analysis-core-modular"}},i={authorsImageUrls:[void 0]},l=[{value:"\u4e00  .\u5bfc\u8bfb",id:"\u4e00--\u5bfc\u8bfb",level:2},{value:"\u4e8c  .TCC\u6a21\u5f0f\u4ecb\u7ecd",id:"\u4e8c--tcc\u6a21\u5f0f\u4ecb\u7ecd",level:2},{value:"\u4e09  . remoting \u5305\u89e3\u6790",id:"\u4e09---remoting-\u5305\u89e3\u6790",level:2},{value:"\u4e09  .tcc \u8d44\u6e90\u7ba1\u7406\u5668",id:"\u4e09--tcc-\u8d44\u6e90\u7ba1\u7406\u5668",level:2},{value:"\u56db  . tcc \u6a21\u5f0f\u4e8b\u52a1\u5904\u7406",id:"\u56db---tcc-\u6a21\u5f0f\u4e8b\u52a1\u5904\u7406",level:2},{value:"\u4e94  .\u603b\u7ed3",id:"\u4e94--\u603b\u7ed3",level:2},{value:"\u4e94  .\u76f8\u5173",id:"\u4e94--\u76f8\u5173",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00--\u5bfc\u8bfb"},"\u4e00  .\u5bfc\u8bfb"),(0,a.kt)("p",null,"spring \u6a21\u5757\u5206\u6790\u4e2d\u8bb2\u5230\uff0cSeata \u7684 spring \u6a21\u5757\u4f1a\u5bf9\u6d89\u53ca\u5230\u5206\u5e03\u5f0f\u4e1a\u52a1\u7684 bean \u8fdb\u884c\u5904\u7406\u3002\u9879\u76ee\u542f\u52a8\u65f6\uff0c\u5f53 GlobalTransactionalScanner \u626b\u63cf\u5230 TCC \u670d\u52a1\u7684 reference \u65f6\uff08\u5373tcc\u4e8b\u52a1\u53c2\u4e0e\u65b9\uff09\uff0c\u4f1a\u5bf9\u5176\u8fdb\u884c\u52a8\u6001\u4ee3\u7406\uff0c\u5373\u7ed9 bean \u7ec7\u5165 TCC \u6a21\u5f0f\u4e0b\u7684 MethodInterceptor \u7684\u5b9e\u73b0\u7c7b\u3002tcc \u4e8b\u52a1\u53d1\u8d77\u65b9\u4f9d\u7136\u4f7f\u7528 @GlobalTransactional \u6ce8\u89e3\u5f00\u542f\uff0c\u7ec7\u5165\u7684\u662f\u901a\u7528\u7684 MethodInterceptor \u7684\u5b9e\u73b0\u7c7b\u3002"),(0,a.kt)("p",null,"TCC \u6a21\u5f0f\u4e0b\u7684 MethodInterceptor \u5b9e\u73b0\u7c7b\u5373 TccActionInterceptor(spring\u6a21\u5757) \uff0c\u8fd9\u4e2a\u7c7b\u4e2d\u8c03\u7528\u4e86 ActionInterceptorHandler(tcc\u6a21\u5757) \u8fdb\u884c TCC \u6a21\u5f0f\u4e0b\u4e8b\u52a1\u6d41\u7a0b\u7684\u5904\u7406\u3002\t"),(0,a.kt)("p",null,"TCC \u52a8\u6001\u4ee3\u7406\u7684\u4e3b\u8981\u529f\u80fd\u662f\uff1a\u751f\u6210TCC\u8fd0\u884c\u65f6\u4e0a\u4e0b\u6587\u3001\u900f\u4f20\u4e1a\u52a1\u53c2\u6570\u3001\u6ce8\u518c\u5206\u652f\u4e8b\u52a1\u8bb0\u5f55\u3002"),(0,a.kt)("h2",{id:"\u4e8c--tcc\u6a21\u5f0f\u4ecb\u7ecd"},"\u4e8c  .TCC\u6a21\u5f0f\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u57282PC\uff08\u4e24\u9636\u6bb5\u63d0\u4ea4\uff09\u534f\u8bae\u4e2d\uff0c\u4e8b\u52a1\u7ba1\u7406\u5668\u5206\u4e24\u9636\u6bb5\u534f\u8c03\u8d44\u6e90\u7ba1\u7406\uff0c\u8d44\u6e90\u7ba1\u7406\u5668\u5bf9\u5916\u63d0\u4f9b\u4e09\u4e2a\u64cd\u4f5c\uff0c\u5206\u522b\u662f\u4e00\u9636\u6bb5\u7684\u51c6\u5907\u64cd\u4f5c\uff0c\u548c\u4e8c\u9636\u6bb5\u7684\u63d0\u4ea4\u64cd\u4f5c\u548c\u56de\u6eda\u64cd\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public interface TccAction {\n\n    @TwoPhaseBusinessAction(name = "tccActionForTest" , commitMethod = "commit", rollbackMethod = "rollback")\n    public boolean prepare(BusinessActionContext actionContext,\n                           @BusinessActionContextParameter(paramName = "a") int a,\n                           @BusinessActionContextParameter(paramName = "b", index = 0) List b,\n                           @BusinessActionContextParameter(isParamInProperty = true) TccParam tccParam);\n\n    public boolean commit(BusinessActionContext actionContext);\n    \n    public boolean rollback(BusinessActionContext actionContext);\n}\n')),(0,a.kt)("p",null,"\u8fd9\u662f TCC \u53c2\u4e0e\u8005\u5b9e\u4f8b\uff0c\u53c2\u4e0e\u8005\u9700\u8981\u5b9e\u73b0\u4e09\u4e2a\u65b9\u6cd5\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u5fc5\u987b\u662f BusinessActionContext \uff0c\u65b9\u6cd5\u8fd4\u56de\u7c7b\u578b\u56fa\u5b9a\uff0c\u5bf9\u5916\u53d1\u5e03\u6210\u5fae\u670d\u52a1\uff0c\u4f9b\u4e8b\u52a1\u7ba1\u7406\u5668\u8c03\u7528\u3002"),(0,a.kt)("p",null,"prepare\uff1a\u8d44\u6e90\u7684\u68c0\u67e5\u548c\u9884\u7559\u3002\u4f8b\uff1a\u6263\u51cf\u8d26\u6237\u7684\u4f59\u989d\uff0c\u5e76\u589e\u52a0\u76f8\u540c\u7684\u51bb\u7ed3\u4f59\u989d\u3002"),(0,a.kt)("p",null,"commit\uff1a\u4f7f\u7528\u9884\u7559\u7684\u8d44\u6e90\uff0c\u5b8c\u6210\u771f\u6b63\u7684\u4e1a\u52a1\u64cd\u4f5c\u3002\u4f8b\uff1a\u51cf\u5c11\u51bb\u7ed3\u4f59\u989d\uff0c\u6263\u51cf\u8d44\u91d1\u4e1a\u52a1\u5b8c\u6210\u3002"),(0,a.kt)("p",null,"cancel\uff1a\u91ca\u653e\u9884\u7559\u8d44\u6e90\u3002\u4f8b\uff1a\u51bb\u7ed3\u4f59\u989d\u52a0\u56de\u8d26\u6237\u7684\u4f59\u989d\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d BusinessActionContext \u5c01\u88c5\u4e86\u672c\u6b21\u4e8b\u52a1\u7684\u4e0a\u4e0b\u6587\u73af\u5883\uff1axid\u3001branchId\u3001actionName \u548c\u88ab @BusinessActionContextParam \u6ce8\u89e3\u7684\u53c2\u6570\u7b49\u3002"),(0,a.kt)("p",null,"\u53c2\u4e0e\u65b9\u4e1a\u52a1\u6709\u51e0\u4e2a\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\uff1a\n1.\u63a7\u5236\u4e1a\u52a1\u5e42\u7b49\u6027\uff0c\u9700\u8981\u652f\u6301\u540c\u4e00\u7b14\u4e8b\u52a1\u7684\u91cd\u590d\u63d0\u4ea4\u548c\u91cd\u590d\u56de\u6eda\u3002\n2.\u9632\u60ac\u6302\uff0c\u5373\u4e8c\u9636\u6bb5\u7684\u56de\u6eda\uff0c\u6bd4\u4e00\u9636\u6bb5\u7684 try \u5148\u6267\u884c\u3002\n3.\u653e\u5bbd\u4e00\u81f4\u6027\u534f\u8bae\uff0c\u6700\u7ec8\u4e00\u81f4\uff0c\u6240\u4ee5\u662f\u8bfb\u5df2\u4fee\u6539"),(0,a.kt)("h2",{id:"\u4e09---remoting-\u5305\u89e3\u6790"},"\u4e09  . remoting \u5305\u89e3\u6790"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20191124211806237.png?",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u5305\u4e2d\u6240\u6709\u7684\u7c7b\u90fd\u662f\u4e3a\u5305\u4e2d\u7684 DefaultRemotingParser \u670d\u52a1\uff0cDubbo\u3001LocalTCC\u3001SofaRpc \u5206\u522b\u8d1f\u8d23\u89e3\u6790\u5404\u81eaRPC\u534f\u8bae\u4e0b\u7684\u7c7b\u3002"),(0,a.kt)("p",null,"DefaultRemotingParser \u7684\u4e3b\u8981\u65b9\u6cd5\uff1a\n1.\u5224\u65ad bean \u662f\u5426\u662f remoting bean\uff0c\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public boolean isRemoting(Object bean, String beanName) throws FrameworkException {\n        //\u5224\u65ad\u662f\u5426\u662f\u670d\u52a1\u8c03\u7528\u65b9\u6216\u8005\u662f\u5426\u662f\u670d\u52a1\u63d0\u4f9b\u65b9\n        return isReference(bean, beanName) || isService(bean, beanName);\n    }\n")),(0,a.kt)("p",null,"2.\u8fdc\u7a0b bean \u89e3\u6790\uff0c\u628a rpc\u7c7b \u89e3\u6790\u6210 RemotingDesc\uff0c\uff0c\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\n    public boolean isRemoting(Object bean, String beanName) throws FrameworkException {\n        //\u5224\u65ad\u662f\u5426\u662f\u670d\u52a1\u8c03\u7528\u65b9\u6216\u8005\u662f\u5426\u662f\u670d\u52a1\u63d0\u4f9b\u65b9\n        return isReference(bean, beanName) || isService(bean, beanName);\n    }\n")),(0,a.kt)("p",null,"\u5229\u7528 allRemotingParsers \u6765\u89e3\u6790\u8fdc\u7a0b bean \u3002allRemotingParsers\u662f\u5728\uff1ainitRemotingParser()  \u4e2d\u8c03\u7528EnhancedServiceLoader.loadAll(RemotingParser.class) \u52a8\u6001\u8fdb\u884c RemotingParser \u5b50\u7c7b\u7684\u52a0\u8f7d\uff0c\u5373 SPI \u52a0\u8f7d\u673a\u5236\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u6269\u5c55\uff0c\u6bd4\u5982\u5b9e\u73b0\u4e00\u4e2afeign\u8fdc\u7a0b\u8c03\u7528\u7684\u89e3\u6790\u7c7b\uff0c\u53ea\u8981\u628aRemotingParser\u76f8\u5173\u5b9e\u73b0\u7c7b\u5199\u5728 SPI \u7684\u914d\u7f6e\u4e2d\u5c31\u53ef\u4ee5\u4e86\uff0c\u6269\u5c55\u6027\u5f88\u5f3a\u3002"),(0,a.kt)("p",null,"RemotingDesc \u4e8b\u52a1\u6d41\u7a0b\u9700\u8981\u7684\u8fdc\u7a0b bean \u7684\u4e00\u4e9b\u5177\u4f53\u4fe1\u606f\uff0c\u6bd4\u5982 targetBean\u3001interfaceClass\u3001interfaceClassName\u3001protocol\u3001isReference\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"3.TCC\u8d44\u6e90\u6ce8\u518c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public RemotingDesc parserRemotingServiceInfo(Object bean, String beanName) {\n        RemotingDesc remotingBeanDesc = getServiceDesc(bean, beanName);\n        if (remotingBeanDesc == null) {\n            return null;\n        }\n        remotingServiceMap.put(beanName, remotingBeanDesc);\n\n        Class<?> interfaceClass = remotingBeanDesc.getInterfaceClass();\n        Method[] methods = interfaceClass.getMethods();\n        if (isService(bean, beanName)) {\n            try {\n                //service bean, registry resource\n                Object targetBean = remotingBeanDesc.getTargetBean();\n                for (Method m : methods) {\n                    TwoPhaseBusinessAction twoPhaseBusinessAction = m.getAnnotation(TwoPhaseBusinessAction.class);\n                    if (twoPhaseBusinessAction != null) {\n                        TCCResource tccResource = new TCCResource();\n                        tccResource.setActionName(twoPhaseBusinessAction.name());\n                        tccResource.setTargetBean(targetBean);\n                        tccResource.setPrepareMethod(m);\n                        tccResource.setCommitMethodName(twoPhaseBusinessAction.commitMethod());\n                        tccResource.setCommitMethod(ReflectionUtil\n                            .getMethod(interfaceClass, twoPhaseBusinessAction.commitMethod(),\n                                new Class[] {BusinessActionContext.class}));\n                        tccResource.setRollbackMethodName(twoPhaseBusinessAction.rollbackMethod());\n                        tccResource.setRollbackMethod(ReflectionUtil\n                            .getMethod(interfaceClass, twoPhaseBusinessAction.rollbackMethod(),\n                                new Class[] {BusinessActionContext.class}));\n                        //registry tcc resource\n                        DefaultResourceManager.get().registerResource(tccResource);\n                    }\n                }\n            } catch (Throwable t) {\n                throw new FrameworkException(t, "parser remoting service error");\n            }\n        }\n        if (isReference(bean, beanName)) {\n            //reference bean, TCC proxy\n            remotingBeanDesc.setReference(true);\n        }\n        return remotingBeanDesc;\n    }\n')),(0,a.kt)("p",null,"\u9996\u5148\u5224\u65ad\u662f\u5426\u662f\u4e8b\u52a1\u53c2\u4e0e\u65b9\uff0c\u5982\u679c\u662f\uff0c\u62ff\u5230 RemotingDesc \u4e2d\u7684 interfaceClass\uff0c\u904d\u5386\u63a5\u53e3\u4e2d\u7684\u65b9\u6cd5\uff0c\u5224\u65ad\u65b9\u6cd5\u4e0a\u662f\u5426\u6709@TwoParserBusinessAction \u6ce8\u89e3\uff0c\u5982\u679c\u6709\uff0c\u628a\u53c2\u6570\u5c01\u88c5\u6210 TCCRecource\uff0c\u901a\u8fc7 DefaultResourceManager \u8fdb\u884c TCC \u8d44\u6e90\u7684\u6ce8\u518c\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc DefaultResourceManager \u4f1a\u6839\u636e Resource \u7684 BranchType \u6765\u5bfb\u627e\u5bf9\u5e94\u7684\u8d44\u6e90\u7ba1\u7406\u5668\uff0cTCC \u6a21\u5f0f\u4e0b\u8d44\u6e90\u7ba1\u7406\u7c7b\uff0c\u5728 tcc \u6a21\u5757\u4e2d\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a rpc \u89e3\u6790\u7c7b\u4e3b\u8981\u63d0\u4f9b\u7ed9 spring \u6a21\u5757\u8fdb\u884c\u4f7f\u7528\u3002parserRemotingServiceInfo() \u88ab\u5c01\u88c5\u5230\u4e86 spring \u6a21\u5757\u7684 TCCBeanParserUtils \u5de5\u5177\u7c7b\u4e2d\u3002spring \u6a21\u5757\u7684 GlobalTransactionScanner \u5728\u9879\u76ee\u542f\u52a8\u7684\u65f6\u5019\uff0c\u901a\u8fc7\u5de5\u5177\u7c7b\u89e3\u6790 TCC bean\uff0c\u5de5\u5177\u7c7b TCCBeanParserUtils \u4f1a\u8c03\u7528 TCCResourceManager \u8fdb\u884c\u8d44\u6e90\u7684\u6ce8\u518c\uff0c\u5e76\u4e14\u5982\u679c\u662f\u5168\u5c40\u4e8b\u52a1\u7684\u670d\u52a1\u63d0\u4f9b\u8005\uff0c\u4f1a\u7ec7\u5165 TccActionInterceptor \u4ee3\u7406\u3002\u8fd9\u4e9b\u4e2a\u6d41\u7a0b\u662f spring \u6a21\u5757\u7684\u529f\u80fd\uff0ctcc \u6a21\u5757\u662f\u63d0\u4f9b\u529f\u80fd\u7c7b\u7ed9 spring \u6a21\u5757\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u4e09--tcc-\u8d44\u6e90\u7ba1\u7406\u5668"},"\u4e09  .tcc \u8d44\u6e90\u7ba1\u7406\u5668"),(0,a.kt)("p",null,"TCCResourceManager \u8d1f\u8d23\u7ba1\u7406 TCC \u6a21\u5f0f\u4e0b\u8d44\u6e90\u7684\u6ce8\u518c\u3001\u5206\u652f\u7684\u6ce8\u518c\u3001\u63d0\u4ea4\u3001\u548c\u56de\u6eda\u3002"),(0,a.kt)("p",null,"1.\u5728\u9879\u76ee\u542f\u52a8\u65f6\uff0c spring \u6a21\u5757\u7684 GlobalTransactionScanner \u626b\u63cf\u5230 bean \u662f tcc bean \u65f6\uff0c\u4f1a\u672c\u5730\u7f13\u5b58\u8d44\u6e90\uff0c\u5e76\u5411 server \u6ce8\u518c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public void registerResource(Resource resource) {\n        TCCResource tccResource = (TCCResource)resource;\n        tccResourceCache.put(tccResource.getResourceId(), tccResource);\n        super.registerResource(tccResource);\n    }\n")),(0,a.kt)("p",null,"\u4e0eserver\u901a\u4fe1\u7684\u903b\u8f91\u88ab\u5c01\u88c5\u5728\u4e86\u7236\u7c7b AbstractResourceManage \u4e2d\uff0c\u8fd9\u91cc\u6839\u636e resourceId \u5bf9 TCCResource \u8fdb\u884c\u7f13\u5b58\u3002\u7236\u7c7b AbstractResourceManage  \u6ce8\u518c\u8d44\u6e90\u7684\u65f6\u5019\uff0c\u4f7f\u7528 resourceGroupId + actionName\uff0cactionName \u5c31\u662f @TwoParseBusinessAction \u6ce8\u89e3\u4e2d\u7684 name\uff0cresourceGroupId \u9ed8\u8ba4\u662f DEFAULT\u3002"),(0,a.kt)("p",null,"2.\u4e8b\u52a1\u5206\u652f\u7684\u6ce8\u518c\u5728 rm-datasource \u5305\u4e0b\u7684 AbstractResourceManager \u4e2d\uff0c\u6ce8\u518c\u65f6\u53c2\u6570 lockKeys \u4e3a null\uff0c\u548c AT \u6a21\u5f0f\u4e0b\u4e8b\u52a1\u5206\u652f\u7684\u6ce8\u518c\u8fd8\u662f\u6709\u4e9b\u4e0d\u4e00\u6837\u7684\u3002"),(0,a.kt)("p",null,"3.\u5206\u652f\u7684\u63d0\u4ea4\u6216\u8005\u56de\u6eda\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public BranchStatus branchCommit(BranchType branchType, String xid, long branchId, String resourceId,\n                                     String applicationData) throws TransactionException {\n        TCCResource tccResource = (TCCResource)tccResourceCache.get(resourceId);\n        if (tccResource == null) {\n            throw new ShouldNeverHappenException("TCC resource is not exist, resourceId:" + resourceId);\n        }\n        Object targetTCCBean = tccResource.getTargetBean();\n        Method commitMethod = tccResource.getCommitMethod();\n        if (targetTCCBean == null || commitMethod == null) {\n            throw new ShouldNeverHappenException("TCC resource is not available, resourceId:" + resourceId);\n        }\n        try {\n            boolean result = false;\n            //BusinessActionContext\n            BusinessActionContext businessActionContext = getBusinessActionContext(xid, branchId, resourceId,\n                applicationData);\n            Object ret = commitMethod.invoke(targetTCCBean, businessActionContext);\n            if (ret != null) {\n                if (ret instanceof TwoPhaseResult) {\n                    result = ((TwoPhaseResult)ret).isSuccess();\n                } else {\n                    result = (boolean)ret;\n                }\n            }\n            return result ? BranchStatus.PhaseTwo_Committed : BranchStatus.PhaseTwo_CommitFailed_Retryable;\n        } catch (Throwable t) {\n            LOGGER.error(msg, t);\n            throw new FrameworkException(t, msg);\n        }\n    }\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u53c2\u6570 xid\u3001branchId\u3001resourceId\u3001applicationData \u6062\u590d\u4e1a\u52a1\u7684\u4e0a\u4e0b\u6587 businessActionContext\u3002"),(0,a.kt)("p",null,"\u6839\u636e\u83b7\u53d6\u5230\u7684\u4e0a\u4e0b\u6587\u901a\u8fc7\u53cd\u5c04\u6267\u884c commit \u65b9\u6cd5\uff0c\u5e76\u8fd4\u56de\u6267\u884c\u7ed3\u679c\u3002\u56de\u6eda\u65b9\u6cd5\u7c7b\u4f3c\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc branchCommit() \u548c branchRollback() \u63d0\u4f9b\u7ed9 rm \u6a21\u5757\u8d44\u6e90\u5904\u7406\u7684\u62bd\u8c61\u7c7b AbstractRMHandler \u8c03\u7528\uff0c\u8fd9\u4e2a handler \u662f core \u6a21\u5757\u5b9a\u4e49\u7684\u6a21\u677f\u65b9\u6cd5\u7684\u8fdb\u4e00\u6b65\u5b9e\u73b0\u7c7b\u3002\u548c registerResource() \u4e0d\u4e00\u6837\uff0c\u540e\u8005\u662f spring \u626b\u63cf\u65f6\u4e3b\u52a8\u6ce8\u518c\u8d44\u6e90\u3002"),(0,a.kt)("h2",{id:"\u56db---tcc-\u6a21\u5f0f\u4e8b\u52a1\u5904\u7406"},"\u56db  . tcc \u6a21\u5f0f\u4e8b\u52a1\u5904\u7406"),(0,a.kt)("p",null,"spring \u6a21\u5757\u4e2d\u7684 TccActionInterceptor \u7684 invoke() \u65b9\u6cd5\u5728\u88ab\u4ee3\u7406\u7684 rpc bean \u88ab\u8c03\u7528\u65f6\u6267\u884c\u3002\u8be5\u65b9\u6cd5\u5148\u83b7\u53d6 rpc \u62e6\u622a\u5668\u900f\u4f20\u8fc7\u6765\u7684\u5168\u5c40\u4e8b\u52a1 xid \uff0c\u7136\u540e TCC \u6a21\u5f0f\u4e0b\u5168\u5c40\u4e8b\u52a1\u53c2\u4e0e\u8005\u7684\u4e8b\u52a1\u6d41\u7a0b\u8fd8\u662f\u4ea4\u7ed9 tcc \u6a21\u5757 ActionInterceptorHandler  \u5904\u7406\u3002"),(0,a.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e8b\u52a1\u53c2\u4e0e\u8005\uff0c\u5728\u9879\u76ee\u542f\u52a8\u7684\u65f6\u5019\uff0c\u88ab\u4ee3\u7406\u3002\u771f\u5b9e\u7684\u4e1a\u52a1\u65b9\u6cd5\uff0c\u5728 ActionInterceptorHandler \u4e2d\uff0c\u901a\u8fc7\u56de\u8c03\u6267\u884c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    public Map<String, Object> proceed(Method method, Object[] arguments, String xid, TwoPhaseBusinessAction businessAction,\n                                       Callback<Object> targetCallback) throws Throwable {\n        Map<String, Object> ret = new HashMap<String, Object>(4);\n\n        //TCC name\n        String actionName = businessAction.name();\n        BusinessActionContext actionContext = new BusinessActionContext();\n        actionContext.setXid(xid);\n        //set action anme\n        actionContext.setActionName(actionName);\n\n        //Creating Branch Record\n        String branchId = doTccActionLogStore(method, arguments, businessAction, actionContext);\n        actionContext.setBranchId(branchId);\n\n        //set the parameter whose type is BusinessActionContext\n        Class<?>[] types = method.getParameterTypes();\n        int argIndex = 0;\n        for (Class<?> cls : types) {\n            if (cls.getName().equals(BusinessActionContext.class.getName())) {\n                arguments[argIndex] = actionContext;\n                break;\n            }\n            argIndex++;\n        }\n        //the final parameters of the try method\n        ret.put(Constants.TCC_METHOD_ARGUMENTS, arguments);\n        //the final result\n        ret.put(Constants.TCC_METHOD_RESULT, targetCallback.execute());\n        return ret;\n    }\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u6709\u4e24\u4e2a\u91cd\u8981\u64cd\u4f5c\uff1a"),(0,a.kt)("p",null,"1.doTccActionLogStore() \u8fd9\u4e2a\u65b9\u6cd5\u4e2d\uff0c\u8c03\u7528\u4e86\u4e24\u4e2a\u6bd4\u8f83\u91cd\u8981\u7684\u65b9\u6cd5\uff1a\nfetchActionRequestContext(method, arguments)\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u628a\u88ab @BusinessActionContextParam \u6ce8\u89e3\u7684\u53c2\u6570\u53d6\u51fa\u6765\uff0c\u5728\u4e0b\u9762\u7684 init \u65b9\u6cd5\u4e2d\u585e\u5165 BusinessActionComtext \uff0c\u540c\u65f6\u585e\u5165\u7684\u8fd8\u6709\u4e8b\u52a1\u76f8\u5173\u53c2\u6570\u3002\nDefaultResourceManager.get().branchRegister(BranchType.TCC, actionName, null, xid,applicationContextStr, null)\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u6267\u884c TCC \u6a21\u5f0f\u4e0b\u4e8b\u52a1\u53c2\u4e0e\u8005\u4e8b\u52a1\u5206\u652f\u7684\u6ce8\u518c\u3002"),(0,a.kt)("p",null,"2.\u56de\u8c03\u6267\u884c targetCallback.execute() \uff0c\u88ab\u4ee3\u7406\u7684 bean \u5177\u4f53\u7684\u4e1a\u52a1\uff0c\u5373 prepare() \u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"\u4e94--\u603b\u7ed3"},"\u4e94  .\u603b\u7ed3"),(0,a.kt)("p",null,"tcc\u6a21\u5757\uff0c\u4e3b\u8981\u63d0\u4f9b\u4ee5\u4e0b\u529f\u80fd \uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e24\u9636\u6bb5\u534f\u8bae\u6ce8\u89e3\uff0c\u63d0\u4f9b tcc \u6a21\u5f0f\u4e0b\u4e8b\u52a1\u6d41\u7a0b\u9700\u8981\u7684\u5c5e\u6027\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u89e3\u6790\u4e0d\u540c rpc \u6846\u67b6 remoting bean \u7684 ParserRemoting \u5b9e\u73b0\uff0c\u4f9b spring \u6a21\u5757\u8c03\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u63d0\u4f9b TCC \u6a21\u5f0f\u4e0b\u8d44\u6e90\u7ba1\u7406\u5668\uff0c\u8fdb\u884c\u8d44\u6e90\u6ce8\u518c\u3001\u4e8b\u52a1\u5206\u652f\u6ce8\u518c\u63d0\u4ea4\u56de\u6eda\u7b49\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u63d0\u4f9b TCC \u6a21\u5f0f\u4e0b\u4e8b\u52a1\u6d41\u7a0b\u7684\u5904\u7406\u7c7b\uff0c\u8ba9 MethodInterceptor \u4ee3\u7406\u7c7b\u4e0d\u6267\u884c\u5177\u4f53\u6a21\u5f0f\u7684\u4e8b\u52a1\u6d41\u7a0b\uff0c\u800c\u662f\u4e0b\u653e\u5230 tcc \u6a21\u5757\u3002")),(0,a.kt)("h2",{id:"\u4e94--\u76f8\u5173"},"\u4e94  .\u76f8\u5173"),(0,a.kt)("p",null,"\u4f5c\u8005\uff1a\u8d75\u6da6\u6cfd\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_37804737/category_9530078.html"},"\u7cfb\u5217\u5730\u5740"),"\u3002"))}m.isMDXComponent=!0}}]);