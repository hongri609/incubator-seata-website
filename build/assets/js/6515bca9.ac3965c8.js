"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[385],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>C});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),g=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=g(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=g(t),d=r,C=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return t?a.createElement(C,o(o({ref:n},c),{},{components:t})):a.createElement(C,o({ref:n},c))}));function C(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var g=2;g<i;g++)o[g]=t[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var a=t(87462),r=(t(67294),t(3905));const i={title:"Seata\u914d\u7f6e\u7ba1\u7406\u539f\u7406\u89e3\u6790",keywords:["Seata\u3001\u914d\u7f6e\u4e2d\u5fc3\u3001\u914d\u7f6e\u7ba1\u7406\u3001Spring\u914d\u7f6e"],description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdSeata\u914d\u7f6e\u7ba1\u7406\u7684\u6838\u5fc3\u5b9e\u73b0\u4ee5\u53ca\u548cSpring\u914d\u7f6e\u7684\u4ea4\u4e92\u8fc7\u7a0b",author:"\u7f57\u5c0f\u52c7",date:"2021/01/10"},o=void 0,l={permalink:"/blog/seata-config-manager",source:"@site/blog/seata-config-manager.md",title:"Seata\u914d\u7f6e\u7ba1\u7406\u539f\u7406\u89e3\u6790",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdSeata\u914d\u7f6e\u7ba1\u7406\u7684\u6838\u5fc3\u5b9e\u73b0\u4ee5\u53ca\u548cSpring\u914d\u7f6e\u7684\u4ea4\u4e92\u8fc7\u7a0b",date:"2021-01-10T00:00:00.000Z",formattedDate:"January 10, 2021",tags:[],readingTime:12.41,hasTruncateMarker:!1,authors:[{name:"\u7f57\u5c0f\u52c7"}],frontMatter:{title:"Seata\u914d\u7f6e\u7ba1\u7406\u539f\u7406\u89e3\u6790",keywords:["Seata\u3001\u914d\u7f6e\u4e2d\u5fc3\u3001\u914d\u7f6e\u7ba1\u7406\u3001Spring\u914d\u7f6e"],description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdSeata\u914d\u7f6e\u7ba1\u7406\u7684\u6838\u5fc3\u5b9e\u73b0\u4ee5\u53ca\u548cSpring\u914d\u7f6e\u7684\u4ea4\u4e92\u8fc7\u7a0b",author:"\u7f57\u5c0f\u52c7",date:"2021/01/10"},prevItem:{title:"Spring Cloud\u96c6\u6210Seata\u5206\u5e03\u5f0f\u4e8b\u52a1-TCC\u6a21\u5f0f",permalink:"/blog/integrate-seata-tcc-mode-with-spring-cloud"},nextItem:{title:"seata-golang \u901a\u4fe1\u6a21\u578b\u8be6\u89e3",permalink:"/blog/seata-golang-communication-mode"}},p={authorsImageUrls:[void 0]},g=[{value:"ConfigurationFactory\u521d\u59cb\u5316",id:"configurationfactory\u521d\u59cb\u5316",level:2},{value:"Configuration\u521d\u59cb\u5316",id:"configuration\u521d\u59cb\u5316",level:2},{value:"\u914d\u7f6e\u589e\u5f3a\u5b9e\u73b0",id:"\u914d\u7f6e\u589e\u5f3a\u5b9e\u73b0",level:2},{value:"\u914d\u7f6e\u589e\u5f3a\u4e0eSpring",id:"\u914d\u7f6e\u589e\u5f3a\u4e0espring",level:2}],c={toc:g},u="wrapper";function s(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8bf4\u5230Seata\u4e2d\u7684\u914d\u7f6e\u7ba1\u7406\uff0c\u5927\u5bb6\u53ef\u80fd\u4f1a\u60f3\u5230Seata\u4e2d\u9002\u914d\u7684\u5404\u79cd\u914d\u7f6e\u4e2d\u5fc3\uff0c\u5176\u5b9e\u4eca\u5929\u8981\u8bf4\u7684\u4e0d\u662f\u8fd9\u4e2a\uff0c\u867d\u7136\u4e5f\u4f1a\u7b80\u5355\u5206\u6790Seata\u548c\u5404\u914d\u7f6e\u4e2d\u5fc3\u7684\u9002\u914d\u8fc7\u7a0b\uff0c\u4f46\u4e3b\u8981\u8fd8\u662f\u8bb2\u89e3Seata\u914d\u7f6e\u7ba1\u7406\u7684\u6838\u5fc3\u5b9e\u73b0"),(0,r.kt)("h1",{id:"server\u542f\u52a8\u6d41\u7a0b"},"Server\u542f\u52a8\u6d41\u7a0b"),(0,r.kt)("p",null,"\u5728\u8bb2\u914d\u7f6e\u4e2d\u5fc3\u4e4b\u524d\uff0c\u5148\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0bServer\u7aef\u7684\u542f\u52a8\u6d41\u7a0b\uff0c\u56e0\u4e3a\u8fd9\u4e00\u5757\u5c31\u6d89\u53ca\u5230\u914d\u7f6e\u7ba1\u7406\u7684\u521d\u59cb\u5316\uff0c\u6838\u5fc3\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7a0b\u5e8f\u5165\u53e3\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"Server#main"),"\u65b9\u6cd5\u4e2d"),(0,r.kt)("li",{parentName:"ol"},"\u83b7\u53d6port\u7684\u51e0\u79cd\u5f62\u5f0f\uff1a\u4ece\u5bb9\u5668\u4e2d\u83b7\u53d6\uff1b\u4ece\u547d\u4ee4\u884c\u83b7\u53d6\uff1b\u9ed8\u8ba4\u7aef\u53e3"),(0,r.kt)("li",{parentName:"ol"},"\u89e3\u6790\u547d\u4ee4\u884c\u53c2\u6570\uff1ahost\u3001port\u3001storeMode\u7b49\u53c2\u6570\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u53ef\u80fd\u6d89\u53ca\u5230\u914d\u7f6e\u7ba1\u7406\u7684\u521d\u59cb\u5316"),(0,r.kt)("li",{parentName:"ol"},"Metric\u76f8\u5173\uff1a\u65e0\u5173\u7d27\u8981\uff0c\u8df3\u8fc7"),(0,r.kt)("li",{parentName:"ol"},"NettyServer\u521d\u59cb\u5316"),(0,r.kt)("li",{parentName:"ol"},"\u6838\u5fc3\u63a7\u5236\u5668\u521d\u59cb\u5316\uff1aServer\u7aef\u7684\u6838\u5fc3\uff0c\u8fd8\u5305\u62ec\u51e0\u4e2a\u5b9a\u65f6\u4efb\u52a1"),(0,r.kt)("li",{parentName:"ol"},"NettyServer\u542f\u52a8")),(0,r.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff0c\u5220\u9664\u4e86\u975e\u6838\u5fc3\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public static void main(String[] args) throws IOException {\n    // \u83b7\u53d6port\u7684\u51e0\u79cd\u5f62\u5f0f\uff1a\u4ece\u5bb9\u5668\u4e2d\u83b7\u53d6\uff1b\u4ece\u547d\u4ee4\u884c\u83b7\u53d6\uff1b\u9ed8\u8ba4\u7aef\u53e3, use to logback.xml\n    int port = PortHelper.getPort(args);\n    System.setProperty(ConfigurationKeys.SERVER_PORT, Integer.toString(port));\n\n    // \u89e3\u6790\u542f\u52a8\u53c2\u6570\uff0c\u5206\u5bb9\u5668\u548c\u975e\u5bb9\u5668\u4e24\u79cd\u60c5\u51b5\n    ParameterParser parameterParser = new ParameterParser(args);\n\n    // Metric\u76f8\u5173\n    MetricsManager.get().init();\n\n    // NettyServer\u521d\u59cb\u5316\n    NettyRemotingServer nettyRemotingServer = new NettyRemotingServer(workingThreads);\n\n    // \u6838\u5fc3\u63a7\u5236\u5668\u521d\u59cb\u5316\n    DefaultCoordinator coordinator = new DefaultCoordinator(nettyRemotingServer);\n    coordinator.init();\n    \n    // NettyServer\u542f\u52a8\n    nettyRemotingServer.init();\n}\n")),(0,r.kt)("p",null,"\u4e3a\u793e\u4e48\u8bf4",(0,r.kt)("inlineCode",{parentName:"p"},"\u6b65\u9aa43"),"\u4e2d\u80af\u80fd\u6d89\u53ca\u5230\u914d\u7f6e\u7ba1\u7406\u7684\u521d\u59cb\u5316\u5462\uff1f\u6838\u5fc3\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"if (StringUtils.isBlank(storeMode)) {\n    storeMode = ConfigurationFactory.getInstance().getConfig(ConfigurationKeys.STORE_MODE,\n        SERVER_DEFAULT_STORE_MODE);\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u5728\u542f\u52a8\u53c2\u6570\u4e2d\u6ca1\u6709\u7279\u522b\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"storeMode"),"\uff0c\u5c31\u4f1a\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigurationFactory"),"\u76f8\u5173API\u53bb\u83b7\u53d6\u8be5\u914d\u7f6e\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigurationFactory.getInstance()"),"\u8fd9\u884c\u4ee3\u7801\u4e2d\uff0c\u6d89\u53ca\u5230\u4e24\u90e8\u5206\u5185\u5bb9\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigurationFactory"),"\u9759\u6001\u4ee3\u7801\u521d\u59cb\u5316\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"),"\u521d\u59cb\u5316\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u91cd\u70b9\u5206\u6790\u8fd9\u90e8\u5206\u5185\u5bb9"),(0,r.kt)("h1",{id:"\u914d\u7f6e\u7ba1\u7406\u521d\u59cb\u5316"},"\u914d\u7f6e\u7ba1\u7406\u521d\u59cb\u5316"),(0,r.kt)("h2",{id:"configurationfactory\u521d\u59cb\u5316"},"ConfigurationFactory\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u5728Seata\u4e2d\u6709\u4e24\u4e2a\u5173\u952e\u914d\u7f6e\u6587\u4ef6\uff1a\u4e00\u4e2a\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"registry.conf"),"\uff0c\u8fd9\u662f\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6\uff0c\u5fc5\u987b\u8981\u6709\uff1b\u53e6\u4e00\u4e2a\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"file.conf"),"\uff0c\u53ea\u6709\u5728\u914d\u7f6e\u4e2d\u5fc3\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"File"),"\u7684\u60c5\u51b5\u4e0b\u624d\u9700\u8981\u7528\u5230\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigurationFactory"),"\u9759\u6001\u4ee3\u7801\u5757\u4e2d\uff0c\u5176\u5b9e\u4e3b\u8981\u5c31\u662f\u52a0\u8f7d",(0,r.kt)("inlineCode",{parentName:"p"},"registry.conf"),"\u6587\u4ef6\uff0c\u5927\u6982\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"1\u3001\u5728\u6ca1\u6709\u624b\u52a8\u914d\u7f6e\u7684\u60c5\u51b5\uff0c\u9ed8\u8ba4\u8bfb\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"registry.conf"),"\u6587\u4ef6\uff0c\u5c01\u88c5\u6210\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"FileConfiguration"),"\u5bf9\u8c61\uff0c\u6838\u5fc3\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Configuration configuration = new FileConfiguration(seataConfigName,false);\nFileConfigFactory.load("registry.conf", "registry");\nFileConfig fileConfig = EnhancedServiceLoader.load(FileConfig.class, "CONF", argsType, args);\n')),(0,r.kt)("p",null,"2\u3001\u914d\u7f6e\u589e\u5f3a\uff1a\u7c7b\u4f3c\u4ee3\u7406\u6a21\u5f0f\uff0c\u83b7\u53d6\u914d\u7f6e\u65f6\uff0c\u5728\u4ee3\u7406\u5bf9\u8c61\u91cc\u9762\u505a\u4e00\u4e9b\u5176\u4ed6\u5904\u7406\uff0c\u4e0b\u9762\u8be6\u7ec6\u4ecb\u7ecd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Configuration extConfiguration = EnhancedServiceLoader.load(ExtConfigurationProvider.class).provide(configuration);\n")),(0,r.kt)("p",null,"3\u3001\u5c06\u6b65\u9aa42\u4e2d\u7684\u4ee3\u7406\u5bf9\u8c61\u8d4b\u503c\u7ed9",(0,r.kt)("inlineCode",{parentName:"p"},"CURRENT_FILE_INSTANCE"),"\u5f15\u7528\uff0c\u5728\u5f88\u591a\u5730\u65b9\u90fd\u76f4\u63a5\u7528\u5230\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"CURRENT_FILE_INSTANCE"),"\u8fd9\u4e2a\u9759\u6001\u5f15\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"CURRENT_FILE_INSTANCE = extConfiguration == null ? configuration : extConfiguration;\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u7b80\u5355\u7684\u8ba4\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"CURRENT_FILE_INSTANCE"),"\u5bf9\u5e94\u7684\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"registry.conf"),"\u91cc\u9762\u7684\u5185\u5bb9\u3002\u6211\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"registry.conf"),"\u8fd9\u4e2a\u6587\u4ef6\u540d\u53d6\u7684\u4e0d\u592a\u597d\uff0c\u6b67\u4e49\u592a\u5927\uff0c\u53eb\u505a",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap.conf"),"\u662f\u4e0d\u662f\u66f4\u597d\u4e00\u4e9b\uff1f"),(0,r.kt)("h2",{id:"configuration\u521d\u59cb\u5316"},"Configuration\u521d\u59cb\u5316"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"),"\u5176\u5b9e\u5c31\u662f\u5bf9\u5e94\u914d\u7f6e\u4e2d\u5fc3\uff0cSeata\u76ee\u524d\u652f\u6301\u7684\u914d\u7f6e\u4e2d\u5fc3\u5f88\u591a\uff0c\u51e0\u4e4e\u4e3b\u6d41\u7684\u914d\u7f6e\u4e2d\u5fc3\u90fd\u652f\u6301\uff0c\u5982\uff1aapollo\u3001consul\u3001etcd\u3001nacos\u3001zk\u3001springCloud\u3001\u672c\u5730\u6587\u4ef6\u3002\u5f53\u4f7f\u7528\u672c\u5730\u6587\u4ef6\u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3\u7684\u65f6\u5019\uff0c\u6d89\u53ca\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"file.conf"),"\u7684\u52a0\u8f7d\uff0c\u5f53\u7136\u8fd9\u662f\u9ed8\u8ba4\u7684\u540d\u5b57\uff0c\u53ef\u4ee5\u81ea\u5df1\u914d\u7f6e\u3002\u5230\u8fd9\u91cc\uff0c\u5927\u5bb6\u4e5f\u57fa\u672c\u4e0a\u77e5\u9053\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"registry.conf"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"file.conf"),"\u7684\u5173\u7cfb\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"),"\u4f5c\u4e3a\u5355\u4f8b\u653e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigurationFactory"),"\u4e2d\uff0c\u6240\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"),"\u7684\u521d\u59cb\u5316\u903b\u8f91\u4e5f\u662f\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigurationFactory"),"\u4e2d\uff0c\u5927\u6982\u6d41\u7a0b\u5982\u4e0b\uff1a\n1\u3001\u5148\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"registry.conf"),"\u6587\u4ef6\u4e2d\u8bfb\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"config.type"),"\u5c5e\u6027\uff0c\u9ed8\u8ba4\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"configTypeName = CURRENT_FILE_INSTANCE.getConfig(ConfigurationKeys.FILE_ROOT_CONFIG + ConfigurationKeys.FILE_CONFIG_SPLIT_CHAR+ ConfigurationKeys.FILE_ROOT_TYPE);\n")),(0,r.kt)("p",null,"2\u3001\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"config.type"),"\u5c5e\u6027\u503c\u52a0\u8f7d\u914d\u7f6e\u4e2d\u5fc3\uff0c\u6bd4\u5982\u9ed8\u8ba4\u662f:",(0,r.kt)("inlineCode",{parentName:"p"},"file"),"\uff0c\u5219\u5148\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"registry.conf"),"\u6587\u4ef6\u4e2d\u8bfb\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"config.file.name"),"\u8bfb\u53d6\u672c\u5730\u6587\u4ef6\u914d\u7f6e\u4e2d\u5fc3\u5bf9\u5e94\u7684\u6587\u4ef6\u540d\uff0c\u7136\u540e\u57fa\u4e8e\u8be5\u6587\u4ef6\u540d\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"FileConfiguration"),"\u5bf9\u8c61\uff0c\u8fd9\u6837\u5c31\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"file.conf"),"\u4e2d\u7684\u914d\u7f6e\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\u4e86\u3002\u540c\u7406\uff0c\u5982\u679c\u914d\u7f6e\u7684\u662f\u5176\u4ed6\u914d\u7f6e\u4e2d\u5fc3\uff0c\u5219\u4f1a\u901a\u8fc7SPI\u521d\u59cb\u5316\u5176\u4ed6\u914d\u7f6e\u4e2d\u5fc3\u3002\u8fd8\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u8fd9\u9636\u6bb5\uff0c\u5982\u679c\u914d\u7f6e\u4e2d\u5fc3\u662f\u672c\u5730\u6587\u4ef6\uff0c\u5219\u4f1a\u4e3a\u5176\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61\uff1b\u5982\u679c\u4e0d\u662f\u672c\u5730\u6587\u4ef6\uff0c\u5219\u901a\u8fc7SPI\u52a0\u8f7d\u5bf9\u5e94\u7684\u914d\u7f6e\u4e2d\u5fc3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'if (ConfigType.File == configType) {\n    String pathDataId = String.join("config.file.name");\n    String name = CURRENT_FILE_INSTANCE.getConfig(pathDataId);\n    configuration = new FileConfiguration(name);\n    try {\n        // \u914d\u7f6e\u589e\u5f3a \u4ee3\u7406\n        extConfiguration = EnhancedServiceLoader.load(ExtConfigurationProvider.class).provide(configuration);\n    } catch (Exception e) {\n        LOGGER.error("failed to load extConfiguration:{}", e.getMessage(), e);\n    }\n} else {\n    configuration = EnhancedServiceLoader\n            .load(ConfigurationProvider.class, Objects.requireNonNull(configType).name()).provide();\n}\n')),(0,r.kt)("p",null,"3\u3001\u57fa\u4e8e\u6b65\u9aa42\u521b\u5efa\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"),"\u5bf9\u8c61\uff0c\u4e3a\u5176\u518d\u521b\u5efa\u4e00\u5c42\u4ee3\u7406\uff0c\u8fd9\u4e2a\u4ee3\u7406\u5bf9\u8c61\u6709\u4e24\u4e2a\u4f5c\u7528\uff1a\u4e00\u4e2a\u662f\u672c\u5730\u7f13\u5b58\uff0c\u4e0d\u9700\u8981\u6bcf\u6b21\u83b7\u53d6\u914d\u7f6e\u7684\u65f6\u5019\u90fd\u4ece\u914d\u7f6e\u4e2d\u83b7\u53d6\uff1b\u53e6\u4e00\u4e2a\u662f\u76d1\u542c\uff0c\u5f53\u914d\u7f6e\u53d1\u751f\u53d8\u66f4\u4f1a\u66f4\u65b0\u5b83\u7ef4\u62a4\u7684\u7f13\u5b58\u3002\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"if (null != extConfiguration) {\n    configurationCache = ConfigurationCache.getInstance().proxy(extConfiguration);\n} else {\n    configurationCache = ConfigurationCache.getInstance().proxy(configuration);\n}\n")),(0,r.kt)("p",null,"\u5230\u8fd9\u91cc\uff0c\u914d\u7f6e\u7ba1\u7406\u7684\u521d\u59cb\u5316\u5c31\u5b8c\u6210\u4e86\u3002",(0,r.kt)("strong",{parentName:"p"},"Seata\u901a\u8fc7\u5148\u5148\u52a0\u8f7d",(0,r.kt)("inlineCode",{parentName:"strong"},"registry.conf"),"\u6587\u4ef6\u83b7\u53d6\u5bf9\u5e94\u7684\u914d\u7f6e\u4e2d\u5fc3\u4fe1\u606f\u3001\u6ce8\u518c\u4e2d\u5fc3\uff0c\u7136\u540e\u518d\u6839\u636e\u83b7\u53d6\u5230\u7684\u7684\u5bf9\u5e94\u4fe1\u606f\u521d\u59cb\u5316\u914d\u7f6e\u4e2d\u5fc3\u3002\u5728\u4f7f\u7528\u672c\u5730\u6587\u4ef6\u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3\u7684\u60c5\u51b5\u4e0b\uff0c\u9ed8\u8ba4\u662f\u52a0\u8f7d",(0,r.kt)("inlineCode",{parentName:"strong"},"file.conf"),"\u6587\u4ef6\u3002\u7136\u540e\u518d\u4e3a\u5bf9\u5e94\u7684\u914d\u7f6e\u4e2d\u5fc3\u521b\u5efa\u5bf9\u5e94\u7684\u4ee3\u7406\u5bf9\u8c61\uff0c\u4f7f\u5176\u652f\u6301\u672c\u5730\u7f13\u5b58\u548c\u914d\u7f6e\u76d1\u542c")),(0,r.kt)("p",null,"\u6574\u7406\u6d41\u7a0b\u8fd8\u662f\u6bd4\u8f83\u7b80\u5355\uff0c\u5728\u8fd9\u91cc\u6211\u8981\u629b\u51fa\u51e0\u4e2a\u95ee\u9898\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f\u914d\u7f6e\u589e\u5f3a\uff1fSeata\u4e2d\u7684\u914d\u7f6e\u589e\u5f3a\u662f\u600e\u4e48\u505a\u7684\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f7f\u7528\u672c\u5730\u6587\u4ef6\u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3\uff0c\u5c31\u5fc5\u987b\u8981\u5c06\u914d\u7f6e\u5b9a\u4e49\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"file.conf"),"\u6587\u4ef6\u4e2d\u3002\u5982\u679c\u662fSpring\u5e94\u7528\uff0c\u80fd\u4e0d\u80fd\u76f4\u63a5\u5c06\u5bf9\u5e94\u7684\u914d\u7f6e\u9879\u5b9a\u4e49\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"application.yaml"),"\u4e2d\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u4e0a\u9762\u8bf4\u7684\u6b65\u9aa42\u4e2d\uff0c\u4e3a\u4ec0\u4e48\u5728\u4f7f\u7528\u672c\u5730\u6587\u4ef6\u914d\u7f6e\u4e2d\u5fc3\u7684\u60c5\u51b5\u4e0b\uff0c\u8981\u5148\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"Configuration"),"\u521b\u5efa\u5bf9\u5e94\u914d\u7f6e\u589e\u5f3a\u4ee3\u7406\u5bf9\u8c61\uff0c\u800c\u5176\u4ed6\u914d\u7f6e\u4e2d\u5fc3\u4e0d\u7528\uff1f")),(0,r.kt)("p",null,"\u8fd93\u4e2a\u95ee\u9898\u90fd\u662f\u7d27\u5bc6\u8054\u7cfb\u7684\uff0c\u90fd\u548cSeata\u7684\u914d\u7f6e\u589e\u52a0\u76f8\u5173\u3002\u4e0b\u9762\u8be6\u7ec6\u4ecb\u7ecd"),(0,r.kt)("h1",{id:"\u914d\u7f6e\u7ba1\u7406\u589e\u5f3a"},"\u914d\u7f6e\u7ba1\u7406\u589e\u5f3a"),(0,r.kt)("p",null,"\u914d\u7f6e\u589e\u5f3a\uff0c\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u4e3a\u5176\u521b\u5efa\u4e00\u4e2a\u4ee3\u7406\u5bf9\u8c61\uff0c\u5728\u6267\u884c\u76ee\u6807\u72ec\u5bf9\u8c61\u7684\u76ee\u6807\u65b9\u6cd5\u65f6\u5019\uff0c\u6267\u884c\u4ee3\u7406\u903b\u8f91\uff0c\u4ece\u914d\u7f6e\u4e2d\u5fc3\u7684\u89d2\u5ea6\u6765\u8bb2\uff0c\u5c31\u662f\u5728\u901a\u8fc7\u914d\u7f6e\u4e2d\u5fc3\u83b7\u53d6\u5bf9\u5e94\u914d\u7f6e\u7684\u65f6\u5019\uff0c\u6267\u884c\u4ee3\u7406\u903b\u8f91\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"ConfigurationFactory.CURRENT_FILE_INSTANCE.getgetConfig(key)"),"\u83b7\u53d6\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ol"},"\u52a0\u8f7d",(0,r.kt)("inlineCode",{parentName:"li"},"registry.conf"),"\u6587\u4ef6\u521b\u5efaFileConfiguration\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"li"},"configuration")),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"SpringBootConfigurationProvider"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"configuration"),"\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"li"},"configurationProxy")),(0,r.kt)("li",{parentName:"ol"},"\u4ece",(0,r.kt)("inlineCode",{parentName:"li"},"configurationProxy"),"\u4e2d\u83b7\u53d6\u914d\u7f6e\u4e2d\u5fc3\u7684\u8fde\u63a5\u4fe1\u606f",(0,r.kt)("inlineCode",{parentName:"li"},"file zk nacos \u7b49")),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u8fde\u63a5\u4fe1\u606f\u521b\u5efa\u914d\u4e2d\u5fc3Configuration\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"li"},"configuration2")),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"SpringBootConfigurationProvider"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"configuration2"),"\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"li"},"configurationProxy2")),(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"configurationProxy2"),"\u7684\u4ee3\u7406\u903b\u8f91"),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u4e8ekey\u627e\u5230\u5bf9\u5e94\u7684SpringBean"),(0,r.kt)("li",{parentName:"ol"},"\u6267\u884cSpringBean\u7684getXxx\u65b9\u6cd5")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0cb93fec40df40ba9e8ab9db06cc9b93~tplv-k3u1fbpfcp-watermark.image",alt:null})),(0,r.kt)("h2",{id:"\u914d\u7f6e\u589e\u5f3a\u5b9e\u73b0"},"\u914d\u7f6e\u589e\u5f3a\u5b9e\u73b0"),(0,r.kt)("p",null,"\u4e0a\u9762\u4e5f\u7b80\u5355\u63d0\u5230\u8fc7\u914d\u7f6e\u589e\u5f3a\uff0c\u76f8\u5173\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"EnhancedServiceLoader.load(ExtConfigurationProvider.class).provide(configuration);\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\u901a\u8fc7SPI\u673a\u83b7\u53d6\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"ExtConfigurationProvider"),"\u5bf9\u8c61\uff0c\u5728Seata\u4e2d\u9ed8\u8ba4\u53ea\u6709\u4e00\u4e2a\u5b9e\u73b0\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"SpringBootConfigurationProvider")),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"ExtConfigurationProvider#provider"),"\u65b9\u6cd5\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"Configuration"),"\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61")),(0,r.kt)("p",null,"\u6838\u5fc3\u4ee3\u7801\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public Configuration provide(Configuration originalConfiguration) {\n    return (Configuration) Enhancer.create(originalConfiguration.getClass(), new MethodInterceptor() {\n        @Override\n        public Object intercept(Object proxy, Method method, Object[] args, MethodProxy methodProxy)\n            throws Throwable {\n            if (method.getName().startsWith("get") && args.length > 0) {\n                Object result = null;\n                String rawDataId = (String) args[0];\n                if (args.length == 1) {\n                    result = get(convertDataId(rawDataId));\n                } else if (args.length == 2) {\n                    result = get(convertDataId(rawDataId), args[1]);\n                } else if (args.length == 3) {\n                    result = get(convertDataId(rawDataId), args[1], (Long) args[2]);\n                }\n                if (result != null) {\n                    //If the return type is String,need to convert the object to string\n                    if (method.getReturnType().equals(String.class)) {\n                        return String.valueOf(result);\n                    }\n                    return result;\n                }\n            }\n\n            return method.invoke(originalConfiguration, args);\n        }\n    });\n}\n\nprivate Object get(String dataId) throws IllegalAccessException, InstantiationException {\n    String propertyPrefix = getPropertyPrefix(dataId);\n    String propertySuffix = getPropertySuffix(dataId);\n    ApplicationContext applicationContext = (ApplicationContext) ObjectHolder.INSTANCE.getObject(OBJECT_KEY_SPRING_APPLICATION_CONTEXT);\n    Class<?> propertyClass = PROPERTY_BEAN_MAP.get(propertyPrefix);\n    Object valueObject = null;\n    if (propertyClass != null) {\n        try {\n            Object propertyBean = applicationContext.getBean(propertyClass);\n            valueObject = getFieldValue(propertyBean, propertySuffix, dataId);\n        } catch (NoSuchBeanDefinitionException ignore) {\n\n        }\n    } else {\n        throw new ShouldNeverHappenException("PropertyClass for prefix: [" + propertyPrefix + "] should not be null.");\n    }\n    if (valueObject == null) {\n        valueObject = getFieldValue(propertyClass.newInstance(), propertySuffix, dataId);\n    }\n\n    return valueObject;\n}\n')),(0,r.kt)("p",null,"1\u3001\u5982\u679c\u65b9\u6cd5\u662f\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"get"),"\u5f00\u5934\uff0c\u5e76\u4e14\u53c2\u6570\u4e2a\u6570\u4e3a1/2/3\uff0c\u5219\u6267\u884c\u5176\u4ed6\u7684\u83b7\u53d6\u914d\u7f6e\u7684\u903b\u8f91\uff0c\u5426\u5219\u6267\u884c\u539f\u751f",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration"),"\u5bf9\u8c61\u7684\u903b\u8f91\n2\u3001\u6211\u4eec\u6ca1\u5fc5\u8981\u7ea0\u7ed3\u4e3a\u5565\u662f\u8fd9\u6837\u7684\u89c4\u5219\uff0c\u8fd9\u5c31\u662fSeata\u7684\u4e00\u4e2a\u7ea6\u5b9a\n3\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u5176\u4ed6\u83b7\u53d6\u914d\u7f6e\u7684\u903b\u8f91"),"\uff0c\u5c31\u662f\u6307\u901a\u8fc7Spring\u7684\u65b9\u5f0f\u83b7\u53d6\u5bf9\u5e94\u914d\u7f6e\u503c"),(0,r.kt)("p",null,"\u5230\u8fd9\u91cc\u5df2\u7ecf\u6e05\u695a\u4e86\u914d\u7f6e\u589e\u5f3a\u7684\u539f\u7406\uff0c\u540c\u65f6\uff0c\u4e5f\u53ef\u4ee5\u731c\u6d4b\u5f97\u51fa\u552f\u4e00\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ExtConfigurationProvider"),"\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"SpringBootConfigurationProvider"),"\uff0c\u80af\u5b9a\u662f\u548cSpring\u76f8\u5173"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u589e\u5f3a\u4e0espring"},"\u914d\u7f6e\u589e\u5f3a\u4e0eSpring"),(0,r.kt)("p",null,"\u5728\u4ecb\u7ecd\u8fd9\u5757\u5185\u5bb9\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0bSeata\u7684\u4f7f\u7528\u65b9\u5f0f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u975eStarter\u65b9\u5f0f\uff1a\u5f15\u5165\u4f9d\u8d56 ",(0,r.kt)("inlineCode",{parentName:"li"},"seata-all"),", \u7136\u540e\u624b\u52a8\u914d\u7f6e\u51e0\u4e2a\u6838\u5fc3\u7684Bean"),(0,r.kt)("li",{parentName:"ol"},"Starter\u65b9\u5f0f\uff1a \u5f15\u5165\u4f9d\u8d56",(0,r.kt)("inlineCode",{parentName:"li"},"seata-spring-boot-starter"),"\uff0c\u5168\u81ea\u52a8\u51c6\u914d\uff0c\u4e0d\u9700\u8981\u81ea\u52a8\u6ce8\u5165\u6838\u5fc3Bean")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SpringBootConfigurationProvider"),"\u5c31\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"seata-spring-boot-starter"),"\u6a21\u5757\u4e2d\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5f53\u6211\u4eec\u901a\u8fc7\u5f15\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"seata-all"),"\u7684\u65b9\u5f0f\u6765\u4f7f\u7528Seata\u65f6\uff0c\u914d\u7f6e\u589e\u5f3a\u5176\u5b9e\u6ca1\u6709\u4ec0\u4e48\u4f5c\u7528\uff0c\u56e0\u4e3a\u6b64\u65f6\u6839\u672c\u627e\u4e0d\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"ExtConfigurationProvider"),"\u5b9e\u73b0\u7c7b\uff0c\u81ea\u7136\u5c31\u4e0d\u4f1a\u589e\u5f3a\u3002"),(0,r.kt)("p",null,"\u90a3",(0,r.kt)("inlineCode",{parentName:"p"},"seata-spring-boot-starter"),"\u662f\u5982\u4f55\u5c06\u8fd9\u4e9b\u4e1c\u897f\u4e32\u8054\u8d77\u6765\u7684\uff1f"),(0,r.kt)("p",null,"1\u3001\u9996\u5148\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"seata-spring-boot-starter"),"\u6a21\u5757\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"resources/META-INF/services"),"\u76ee\u5f55\u4e0b\uff0c\u5b58\u5728\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"spring.factories"),"\u6587\u4ef6\uff0c\u5185\u5bb9\u5206\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\\nio.seata.spring.boot.autoconfigure.SeataAutoConfiguration,\\\n\n# \u6682\u65f6\u4e0d\u7ba1\nio.seata.spring.boot.autoconfigure.HttpAutoConfiguration\n")),(0,r.kt)("p",null,"2\u3001\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"SeataAutoConfiguration"),"\u6587\u4ef6\u4e2d\uff0c\u4f1a\u521b\u5efa\u4ee5\u4e0bBean\uff1a GlobalTransactionScanner \u3001SeataDataSourceBeanPostProcessor\u3001SeataAutoDataSourceProxyCreator\u3001SpringApplicationContextProvider\u3002\u524d3\u4e2a\u548c\u6211\u4eec\u672c\u6587\u8981\u8bb2\u7684\u5185\u5bb9\u4e0d\u76f8\u5173\uff0c\u4e3b\u8981\u5173\u6ce8",(0,r.kt)("inlineCode",{parentName:"p"},"SpringApplicationContextProvider"),"\uff0c\u6838\u5fc3\u4ee3\u7801\u975e\u5e38\u7b80\u5355\uff0c\u5c31\u662f\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationContext"),"\u4fdd\u5b58\u4e0b\u6765\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class SpringApplicationContextProvider implements ApplicationContextAware {\n    @Override\n    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {\n        ObjectHolder.INSTANCE.setObject(OBJECT_KEY_SPRING_APPLICATION_CONTEXT, applicationContext);\n    }\n}\n")),(0,r.kt)("p",null,"3\u3001\u7136\u540e\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"SeataAutoConfiguration"),"\u6587\u4ef6\u4e2d\uff0c\u8fd8\u4f1a\u5c06\u4e00\u4e9b",(0,r.kt)("inlineCode",{parentName:"p"},"xxxProperties.Class"),"\u548c\u5bf9\u5e94\u7684Key\u524d\u7f00\u7f13\u5b58\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"PROPERTY_BEAN_MAP"),"\u4e2d\u3002`",(0,r.kt)("inlineCode",{parentName:"p"},"xxxProperties"),"\u5c31\u7b80\u5355\u7406\u89e3\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"application.yaml"),"\u4e2d\u7684\u5404\u79cd\u914d\u7f6e\u9879\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"static {\n    PROPERTY_BEAN_MAP.put(SEATA_PREFIX, SeataProperties.class);\n    PROPERTY_BEAN_MAP.put(CLIENT_RM_PREFIX, RmProperties.class);\n    PROPERTY_BEAN_MAP.put(SHUTDOWN_PREFIX, ShutdownProperties.class);\n    ...\u7701\u7565...\n}\n")),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c\u6574\u4e2a\u6d41\u7a0b\u5176\u5b9e\u5df2\u7ecf\u5f88\u6e05\u6670\uff0c\u5728\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"SpringBootConfigurationProvider"),"\u914d\u7f6e\u589e\u5f3a\u7684\u65f6\u5019\uff0c\u6211\u4eec\u83b7\u53d6\u4e00\u4e2a\u914d\u7f6e\u9879\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5148\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"li"},"p\u914d\u7f6e\u9879Key"),"\u83b7\u53d6\u5bf9\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"xxxProperties"),"\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"ObjectHolder"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"ApplicationContext"),"\u83b7\u53d6\u5bf9\u5e94",(0,r.kt)("inlineCode",{parentName:"li"},"xxxProperties"),"\u7684SpringBean"),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"xxxProperties"),"\u7684SpringBean\u83b7\u53d6\u5bf9\u5e94\u914d\u7f6e\u7684\u503c"),(0,r.kt)("li",{parentName:"ol"},"\u81f3\u6b64\uff0c\u901a\u8fc7\u914d\u7f6e\u589e\u5f3a\uff0c\u6211\u4eec\u6210\u529f\u7684\u83b7\u53d6\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"application.yaml"),"\u4e2d\u7684\u503c")))}s.isMDXComponent=!0}}]);