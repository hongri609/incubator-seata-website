"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[402],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=o.createContext({}),l=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=l(t.components);return o.createElement(p.Provider,{value:e},t.children)},u="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),u=l(n),s=r,g=u["".concat(p,".").concat(s)]||u[s]||b[s]||a;return n?o.createElement(g,i(i({ref:e},d),{},{components:n})):o.createElement(g,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[u]="string"==typeof t?t:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},81629:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={title:"\u6e90\u7801\u5206\u6790Seata-XID\u4f20\u9012 Dubbo\u7bc7",keywords:["Seata","Dubbo","\u5206\u5e03\u5f0f\u4e8b\u52a1","spring"],description:"\u672c\u6587\u8bb2\u8ff0\u901a\u8fc7\u6e90\u7801\u89e3\u6790Seata-Dubbo\u4f20\u9012XID",author:"FUNKYE",date:"2020/01/01"},i="\u6e90\u7801\u5206\u6790Seata-XID\u4f20\u9012 Dubbo\u7bc7",c={permalink:"/zh-cn/blog/seata-analysis-dubbo-transmit-xid",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-analysis-dubbo-transmit-xid.md",title:"\u6e90\u7801\u5206\u6790Seata-XID\u4f20\u9012 Dubbo\u7bc7",description:"\u672c\u6587\u8bb2\u8ff0\u901a\u8fc7\u6e90\u7801\u89e3\u6790Seata-Dubbo\u4f20\u9012XID",date:"2020-01-01T00:00:00.000Z",formattedDate:"2020\u5e741\u67081\u65e5",tags:[],readingTime:3.39,hasTruncateMarker:!1,authors:[{name:"FUNKYE"}],frontMatter:{title:"\u6e90\u7801\u5206\u6790Seata-XID\u4f20\u9012 Dubbo\u7bc7",keywords:["Seata","Dubbo","\u5206\u5e03\u5f0f\u4e8b\u52a1","spring"],description:"\u672c\u6587\u8bb2\u8ff0\u901a\u8fc7\u6e90\u7801\u89e3\u6790Seata-Dubbo\u4f20\u9012XID",author:"FUNKYE",date:"2020/01/01"},prevItem:{title:"Seata config \u6a21\u5757\u6e90\u7801\u5206\u6790",permalink:"/zh-cn/blog/seata-analysis-config-modular"},nextItem:{title:"Seata tcc \u6a21\u5757\u6e90\u7801\u5206\u6790",permalink:"/zh-cn/blog/seata-analysis-tcc-modular"}},p={authorsImageUrls:[void 0]},l=[{value:"\u5206\u6790\u6e90\u7801",id:"\u5206\u6790\u6e90\u7801",level:2},{value:"\u8981\u70b9\u77e5\u8bc6",id:"\u8981\u70b9\u77e5\u8bc6",level:2}],d={toc:l},u="wrapper";function b(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,o.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4f5c\u8005\uff1aFUNKYE(\u9648\u5065\u658c),\u676d\u5dde\u67d0\u4e92\u8054\u7f51\u516c\u53f8\u4e3b\u7a0b\u3002"),(0,r.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u200b\t1.\u9996\u5148\u6765\u770b\u4e0b\u5305\u7ed3\u6784,\u5728seata-dubbo\u548cseata-dubbo-alibaba\u4e0b\u6709\u7edf\u4e00\u7531TransactionPropagationFilter\u8fd9\u4e2a\u7c7b,\u5206\u522b\u5bf9\u5e94apache-dubbo\u8ddfalibaba-dubbo."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"20200101203229",src:n(28401).Z,width:"422",height:"410"})),(0,r.kt)("h2",{id:"\u5206\u6790\u6e90\u7801"},"\u5206\u6790\u6e90\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package io.seata.integration.dubbo;\n\nimport io.seata.core.context.RootContext;\nimport org.apache.dubbo.common.Constants;\nimport org.apache.dubbo.common.extension.Activate;\nimport org.apache.dubbo.rpc.Filter;\nimport org.apache.dubbo.rpc.Invocation;\nimport org.apache.dubbo.rpc.Invoker;\nimport org.apache.dubbo.rpc.Result;\nimport org.apache.dubbo.rpc.RpcContext;\nimport org.apache.dubbo.rpc.RpcException;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\n@Activate(group = {Constants.PROVIDER, Constants.CONSUMER}, order = 100)\npublic class TransactionPropagationFilter implements Filter {\n\n    private static final Logger LOGGER = LoggerFactory.getLogger(TransactionPropagationFilter.class);\n\n    @Override\n    public Result invoke(Invoker<?> invoker, Invocation invocation) throws RpcException {\n        //\u83b7\u53d6\u672c\u5730XID\n        String xid = RootContext.getXID();\n        String xidInterceptorType = RootContext.getXIDInterceptorType();\n        //\u83b7\u53d6Dubbo\u9690\u5f0f\u4f20\u53c2\u4e2d\u7684XID\n        String rpcXid = getRpcXid();\n        String rpcXidInterceptorType = RpcContext.getContext().getAttachment(RootContext.KEY_XID_INTERCEPTOR_TYPE);\n        if (LOGGER.isDebugEnabled()) {\n            LOGGER.debug("xid in RootContext[{}] xid in RpcContext[{}]", xid, rpcXid);\n        }\n        boolean bind = false;\n        if (xid != null) {\n            //\u4f20\u9012XID\n            RpcContext.getContext().setAttachment(RootContext.KEY_XID, xid);\n            RpcContext.getContext().setAttachment(RootContext.KEY_XID_INTERCEPTOR_TYPE, xidInterceptorType);\n        } else {\n            if (rpcXid != null) {\n                //\u7ed1\u5b9aXID\n                RootContext.bind(rpcXid);\n                RootContext.bindInterceptorType(rpcXidInterceptorType);\n                bind = true;\n                if (LOGGER.isDebugEnabled()) {\n                    LOGGER.debug("bind[{}] interceptorType[{}] to RootContext", rpcXid, rpcXidInterceptorType);\n                }\n            }\n        }\n        try {\n            return invoker.invoke(invocation);\n        } finally {\n            if (bind) {\n                //\u8fdb\u884c\u5254\u9664\u5df2\u5b8c\u6210\u4e8b\u52a1\u7684XID\n                String unbindInterceptorType = RootContext.unbindInterceptorType();\n                String unbindXid = RootContext.unbind();\n                if (LOGGER.isDebugEnabled()) {\n                    LOGGER.debug("unbind[{}] interceptorType[{}] from RootContext", unbindXid, unbindInterceptorType);\n                }\n                //\u5982\u679c\u53d1\u73b0\u89e3\u7ed1\u7684XID\u5e76\u4e0d\u662f\u5f53\u524d\u63a5\u6536\u5230\u7684XID\n                if (!rpcXid.equalsIgnoreCase(unbindXid)) {\n                    LOGGER.warn("xid in change during RPC from {} to {}, xidInterceptorType from {} to {} ", rpcXid, unbindXid, rpcXidInterceptorType, unbindInterceptorType);\n                    if (unbindXid != null) {\n                        //\u91cd\u65b0\u7ed1\u5b9aXID\n                        RootContext.bind(unbindXid);\n                        RootContext.bindInterceptorType(unbindInterceptorType);\n                        LOGGER.warn("bind [{}] interceptorType[{}] back to RootContext", unbindXid, unbindInterceptorType);\n                    }\n                }\n            }\n        }\n    }\n\n    /**\n     * get rpc xid\n     * @return\n     */\n    private String getRpcXid() {\n        String rpcXid = RpcContext.getContext().getAttachment(RootContext.KEY_XID);\n        if (rpcXid == null) {\n            rpcXid = RpcContext.getContext().getAttachment(RootContext.KEY_XID.toLowerCase());\n        }\n        return rpcXid;\n    }\n\n}\n')),(0,r.kt)("p",null,"\u200b\t1.\u6839\u636e\u6e90\u7801,\u6211\u4eec\u53ef\u4ee5\u63a8\u51fa\u76f8\u5e94\u7684\u903b\u8f91\u5904\u7406"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"20200101213336",src:n(18039).Z,width:"775",height:"743"})),(0,r.kt)("h2",{id:"\u8981\u70b9\u77e5\u8bc6"},"\u8981\u70b9\u77e5\u8bc6"),(0,r.kt)("p",null,"\u200b\t1.Dubbo @Activate\u6ce8\u89e3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target({ElementType.TYPE, ElementType.METHOD})\npublic @interface Activate {\n    /**\n     * Group\u8fc7\u6ee4\u6761\u4ef6\u3002\n     * <br />\n     * \u5305\u542b{@link ExtensionLoader#getActivateExtension}\u7684group\u53c2\u6570\u7ed9\u7684\u503c\uff0c\u5219\u8fd4\u56de\u6269\u5c55\u3002\n     * <br />\n     * \u5982\u6ca1\u6709Group\u8bbe\u7f6e\uff0c\u5219\u4e0d\u8fc7\u6ee4\u3002\n     */\n    String[] group() default {};\n\n    /**\n     * Key\u8fc7\u6ee4\u6761\u4ef6\u3002\u5305\u542b{@link ExtensionLoader#getActivateExtension}\u7684URL\u7684\u53c2\u6570Key\u4e2d\u6709\uff0c\u5219\u8fd4\u56de\u6269\u5c55\u3002\n     * <p/>\n     * \u793a\u4f8b\uff1a<br/>\n     * \u6ce8\u89e3\u7684\u503c <code>@Activate("cache,validatioin")</code>\uff0c\n     * \u5219{@link ExtensionLoader#getActivateExtension}\u7684URL\u7684\u53c2\u6570\u6709<code>cache</code>Key\uff0c\u6216\u662f<code>validatioin</code>\u5219\u8fd4\u56de\u6269\u5c55\u3002\n     * <br/>\n     * \u5982\u6ca1\u6709\u8bbe\u7f6e\uff0c\u5219\u4e0d\u8fc7\u6ee4\u3002\n     */\n    String[] value() default {};\n\n    /**\n     * \u6392\u5e8f\u4fe1\u606f\uff0c\u53ef\u4ee5\u4e0d\u63d0\u4f9b\u3002\n     */\n    String[] before() default {};\n\n    /**\n     * \u6392\u5e8f\u4fe1\u606f\uff0c\u53ef\u4ee5\u4e0d\u63d0\u4f9b\u3002\n     */\n    String[] after() default {};\n\n    /**\n     * \u6392\u5e8f\u4fe1\u606f\uff0c\u53ef\u4ee5\u4e0d\u63d0\u4f9b\u3002\n     */\n    int order() default 0;\n}\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u5206\u6790\u5f97\u77e5,Seata\u7684dubbo\u8fc7\u6ee4\u5668\u4e0a\u7684\u6ce8\u89e3@Activate(group = {Constants.PROVIDER, Constants.CONSUMER}, order = 100),\u8868\u793adubbo\u7684\u670d\u52a1\u63d0\u4f9b\u65b9\u8ddf\u6d88\u8d39\u65b9\u90fd\u4f1a\u89e6\u53d1\u5230\u8fd9\u4e2a\u8fc7\u6ee4\u5668,\u6240\u4ee5\u6211\u4eec\u7684Seata\u53d1\u8d77\u8005\u4f1a\u4ea7\u751f\u4e00\u4e2aXID\u7684\u4f20\u9012,\u4e0a\u8ff0\u6d41\u7a0b\u56fe\u8ddf\u4ee3\u7801\u5df2\u7ecf\u5f88\u6e05\u6670\u7684\u8868\u793a\u4e86."),(0,r.kt)("p",null,"\u200b\t2.Dubbo\u9690\u5f0f\u4f20\u53c2\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"RpcContext")," \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"setAttachment")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"getAttachment")," \u5728\u670d\u52a1\u6d88\u8d39\u65b9\u548c\u63d0\u4f9b\u65b9\u4e4b\u95f4\u8fdb\u884c\u53c2\u6570\u7684\u9690\u5f0f\u4f20\u9012\u3002"),(0,r.kt)("p",null,"\u83b7\u53d6:RpcContext.getContext().getAttachment(RootContext.KEY_XID);"),(0,r.kt)("p",null,"\u4f20\u9012:RpcContext.getContext().setAttachment(RootContext.KEY_XID, xid);"),(0,r.kt)("h1",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u66f4\u591a\u6e90\u7801\u9605\u8bfb\u8bf7\u8bbf\u95ee",(0,r.kt)("a",{parentName:"p",href:"http://seata.io/zh-cn/index.html"},"Seata\u5b98\u7f51")))}b.isMDXComponent=!0},28401:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/20200101203229-b1377d653c52962ea621a450291bcf87.png"},18039:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/20200101213336-dec117cebba3464f980a52714f43ff7d.png"}}]);