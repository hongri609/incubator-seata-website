"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[65864],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},24199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"Seata\uff08Fescar\uff09\u5206\u5e03\u5f0f\u4e8b\u52a1 \u6574\u5408 Spring Cloud",author:"\u5927\u83f2.Fei",date:"2019/04/15",keywords:["fescar\u3001seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"]},l="1.\u524d\u8a00",i={permalink:"/zh-cn/blog/integrate-seata-with-spring-cloud",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/integrate-seata-with-spring-cloud.md",title:"Seata\uff08Fescar\uff09\u5206\u5e03\u5f0f\u4e8b\u52a1 \u6574\u5408 Spring Cloud",description:"\u9488\u5bf9Fescar \u76f8\u4fe1\u5f88\u591a\u5f00\u53d1\u8005\u5df2\u7ecf\u5bf9\u4ed6\u5e76\u4e0d\u964c\u751f\uff0c\u5f53\u7136Fescar \u5df2\u7ecf\u6210\u4e3a\u4e86\u8fc7\u53bb\u65f6\uff0c\u4e3a\u4ec0\u4e48\u8bf4\u5b83\u662f\u8fc7\u53bb\u65f6\uff0c\u56e0\u4e3aFescar \u5df2\u7ecf\u534e\u4e3d\u7684\u53d8\u8eab\u4e3aSeata\u3002\u5982\u679c\u8fd8\u4e0d\u77e5\u9053Seata \u7684\u670b\u53cb\uff0c\u8bf7\u767b\u5f55\u4e0b\u9762\u7f51\u5740\u67e5\u770b\u3002",date:"2019-04-15T00:00:00.000Z",formattedDate:"2019\u5e744\u670815\u65e5",tags:[],readingTime:8.715,hasTruncateMarker:!1,authors:[{name:"\u5927\u83f2.Fei"}],frontMatter:{title:"Seata\uff08Fescar\uff09\u5206\u5e03\u5f0f\u4e8b\u52a1 \u6574\u5408 Spring Cloud",author:"\u5927\u83f2.Fei",date:"2019/04/15",keywords:["fescar\u3001seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"]},prevItem:{title:"Fescar \u4e0e Spring Cloud \u96c6\u6210\u6e90\u7801\u6df1\u5ea6\u5256\u6790",permalink:"/zh-cn/blog/how-to-support-spring-cloud"},nextItem:{title:"\u5206\u5e03\u5f0f\u4e8b\u52a1\u4e4bSeata-Client\u539f\u7406\u53ca\u6d41\u7a0b\u8be6\u89e3",permalink:"/zh-cn/blog/seata-analysis-java-client"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9488\u5bf9Fescar \u76f8\u4fe1\u5f88\u591a\u5f00\u53d1\u8005\u5df2\u7ecf\u5bf9\u4ed6\u5e76\u4e0d\u964c\u751f\uff0c\u5f53\u7136Fescar \u5df2\u7ecf\u6210\u4e3a\u4e86\u8fc7\u53bb\u65f6\uff0c\u4e3a\u4ec0\u4e48\u8bf4\u5b83\u662f\u8fc7\u53bb\u65f6\uff0c\u56e0\u4e3aFescar \u5df2\u7ecf\u534e\u4e3d\u7684\u53d8\u8eab\u4e3aSeata\u3002\u5982\u679c\u8fd8\u4e0d\u77e5\u9053Seata \u7684\u670b\u53cb\uff0c\u8bf7\u767b\u5f55\u4e0b\u9762\u7f51\u5740\u67e5\u770b\u3002"),(0,a.kt)("p",null,"  SEATA GITHUB:","[https://github.com/seata/seata]"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u963f\u91cc\u5404\u4f4d\u540c\u5b66\u7684\u524d\u4ec6\u540e\u7ee7\uff0c\u7ed9\u6211\u4eec\u5e7f\u5927\u5f00\u53d1\u8005\u5e26\u6765\u5f88\u591a\u5f00\u6e90\u8f6f\u4ef6\uff0c\u5728\u8fd9\u91cc\u5bf9\u4ed6\u4eec\u8868\u793a\u771f\u631a\u7684\u611f\u8c22\u4e0e\u95ee\u5019\u3002"),(0,a.kt)("p",null,"\u4eca\u5929\u5728\u8fd9\u91cc\u548c\u5927\u5bb6\u5206\u4eab\u4e0bSpring Cloud \u6574\u5408Seata \u7684\u76f8\u5173\u5fc3\u5f97\u3002\u4e5f\u8ba9\u66f4\u591a\u7684\u670b\u53cb\u5728\u642d\u5efa\u7684\u9053\u8def\u4e0a\u5c11\u8d70\u4e00\u4e9b\u5f2f\u8def\uff0c\u5c11\u8e29\u4e00\u4e9b\u5751\u3002"),(0,a.kt)("h1",{id:"2\u5de5\u7a0b\u5185\u5bb9"},"2.\u5de5\u7a0b\u5185\u5bb9"),(0,a.kt)("p",null,"\u672c\u6b21\u642d\u5efa\u6d41\u7a0b\u4e3a\uff1aclient->\u7f51\u5173->\u670d\u52a1\u6d88\u8d39\u8005->\u670d\u52a1\u63d0\u4f9b\u8005."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"                        \u6280\u672f\u6846\u67b6\uff1aspring cloud gateway\n\n                                spring cloud fegin\n\n                                nacos1.0.RC2\n\n                                fescar-server0.4.1(Seata)\n")),(0,a.kt)("p",null,"\u5173\u4e8enacos\u7684\u542f\u52a8\u65b9\u5f0f\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/quick-start.html"},"Nacos\u542f\u52a8\u53c2\u8003"),"       "),(0,a.kt)("p",null,"\u9996\u5148seata\u652f\u6301\u5f88\u591a\u79cd\u6ce8\u518c\u670d\u52a1\u65b9\u5f0f\uff0c\u5728 fescar-server-0.4.1\\conf \u76ee\u5f55\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    file.conf\n    logback.xml\n    nacos-config.sh\n    nacos-config.text\n    registry.conf\n")),(0,a.kt)("p",null,"\u603b\u5171\u5305\u542b\u4e94\u4e2a\u6587\u4ef6\uff0c\u5176\u4e2d file.conf\u548c registry.conf \u5206\u522b\u662f\u6211\u4eec\u5728 \u670d\u52a1\u6d88\u8d39\u8005 & \u670d\u52a1\u63d0\u4f9b\u8005 \u4ee3\u7801\u6bb5\u9700\u8981\u7528\u5230\u7684\u6587\u4ef6\u3002\n\u6ce8\uff1afile.conf\u548c registry.conf \u5fc5\u987b\u5728\u5f53\u524d\u4f7f\u7528\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u5373\uff1a \u670d\u52a1\u6d88\u8d39\u8005 & \u670d\u52a1\u63d0\u4f9b\u8005 \u4e24\u4e2a\u5e94\u7528\u5728\u90fd\u9700\u8981\u5305\u542b\u3002\n\u5982\u679c\u4f60\u91c7\u7528\u4e86\u914d\u7f6e\u4e2d\u5fc3 \u662fnacos \u3001zk \uff0cfile.cnf \u662f\u53ef\u4ee5\u5ffd\u7565\u7684\u3002\u4f46\u662ftype=\u201cfile\u201d \u5982\u679c\u662f\u4e3afile  \u5c31\u5fc5\u987b\u5f97\u7528file.cnf"),(0,a.kt)("p",null,"\u4e0b\u9762\u662fregistry.conf \u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u5176\u4e2d registry \u662f\u6ce8\u518c\u670d\u52a1\u4e2d\u5fc3\u914d\u7f6e\u3002config\u4e3a\u914d\u7f6e\u4e2d\u5fc3\u7684\u914d\u7f6e\u5730\u65b9\u3002"),(0,a.kt)("p",null,"\u4ece\u4e0b\u9762\u53ef\u77e5\u9053\u76ee\u524dseata\u652f\u6301nacos\uff0cfile eureka redis zookeeper \u7b49\u6ce8\u518c\u914d\u7f6e\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u4e0b\u8f7d\u7684type=\u201cfile\u201d \u6587\u4ef6\u65b9\u5f0f\uff0c\u5f53\u7136\u8fd9\u91cc\u9009\u7528\u4ec0\u4e48\u65b9\u5f0f\uff0c\u53d6\u51b3\u4e8e"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u4eba\u9879\u76ee\u7684\u5b9e\u9645\u60c5\u51b5\uff0c\u8fd9\u91cc\u6211\u9009\u7528\u7684\u662fnacos\uff0ceureka\u7684\u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u6211\u8fd9\u8fb9\u5206\u522b\u5bf9\u8fd9\u4e24\u4e2a\u7248\u672c\u8fdb\u884c\u6574\u5408\u6d4b\u8bd5\u5747\u53ef\u4ee5\u901a\u8fc7\u3002"),(0,a.kt)("p",null,"\u6ce8\uff1a\u5982\u679c\u6574\u5408eureka\u8bf7\u9009\u7528\u5b98\u65b9\u6700\u65b0\u7248\u672c\u3002"),(0,a.kt)("h1",{id:"3\u6838\u5fc3\u914d\u7f6e"},"3.\u6838\u5fc3\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'registry {\n  # file \u3001nacos \u3001eureka\u3001redis\u3001zk\n  type = "nacos"\n\n  nacos {\n    serverAddr = "localhost"\n    namespace = "public"\n    cluster = "default"\n  }\n  eureka {\n    serviceUrl = "http://localhost:1001/eureka"\n    application = "default"\n    weight = "1"\n  }\n  redis {\n    serverAddr = "localhost:6379"\n    db = "0"\n  }\n  zk {\n    cluster = "default"\n    serverAddr = "127.0.0.1:2181"\n    session.timeout = 6000\n    connect.timeout = 2000\n  }\n  file {\n    name = "file.conf"\n  }\n}\n\nconfig {\n  # file\u3001nacos \u3001apollo\u3001zk\n  type = "nacos"\n\n  nacos {\n    serverAddr = "localhost"\n    namespace = "public"\n    cluster = "default"\n  }\n  apollo {\n    app.id = "fescar-server"\n    apollo.meta = "http://192.168.1.204:8801"\n  }\n  zk {\n    serverAddr = "127.0.0.1:2181"\n    session.timeout = 6000\n    connect.timeout = 2000\n  }\n  file {\n    name = "file.conf"\n  }\n}\n')),(0,a.kt)("p",null,"\u8fd9\u91cc\u8981\u8bf4\u660e\u7684\u662fnacos-config.sh \u662f\u9488\u5bf9\u91c7\u7528nacos\u914d\u7f6e\u4e2d\u5fc3\u7684\u8bdd\uff0c\u9700\u8981\u6267\u884c\u7684\u4e00\u4e9b\u9ed8\u8ba4\u521d\u59cb\u5316\u9488\u5bf9nacos\u7684\u811a\u672c\u3002"),(0,a.kt)("p",null,"SEATA\u7684\u542f\u52a8\u65b9\u5f0f\u53c2\u8003\u5b98\u65b9\uff1a \u6ce8\u610f\uff0c\u8fd9\u91cc\u9700\u8981\u8bf4\u660e\u4e0b\uff0c\u547d\u4ee4\u542f\u52a8\u5b98\u65b9\u662f\u901a\u8fc7 \u7a7a\u683c\u533a\u5206\u53c2\u6570\uff0c\u6240\u4ee5\u8981\u6ce8\u610f\u3002\u8fd9\u91cc\u7684IP \u662f\u53ef\u9009\u53c2\u6570\uff0c\u56e0\u4e3a\u6d89\u53ca\u5230DNS\u89e3\u6790\uff0c\u5728\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u6709\u7684\u65f6\u5019\u5728\u6ce8\u518c\u4e2d\u5fc3fescar \u6ce8\u5165nacos\u7684\u65f6\u5019\u4f1a\u901a\u8fc7\u83b7\u53d6\u5730\u5740\uff0c\u5982\u679c\u542f\u52a8\u62a5\u9519\u6ce8\u518c\u53d1\u73b0\u662f\u8ba1\u7b97\u673a\u540d\u79f0\uff0c\u9700\u8981\u6307\u5b9aIP\u3002\u6216\u8005host\u914d\u7f6eIP\u6307\u5411\u3002\u4e0d\u8fc7\u8fd9\u4e2a\u95ee\u9898\uff0c\u5728\u6700\u65b0\u7684SEATA\u4e2d\u5df2\u7ecf\u8fdb\u884c\u4e86\u4fee\u590d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sh fescar-server.sh 8091 /home/admin/fescar/data/ IP\uff08\u53ef\u9009\uff09\n")),(0,a.kt)("p",null,'\u4e0a\u9762\u63d0\u5230\u8fc7\uff0c\u5728\u6211\u4eec\u7684\u4ee3\u7801\u4e2d\u4e5f\u662f\u9700\u8981file.conf \u548cregistry.conf \u8fd9\u91cc\u7740\u91cd\u7684\u5730\u65b9\u8981\u8bf4\u7684\u662ffile.conf,file.conf\u53ea\u6709\u5f53registry\u4e2d\n\u914d\u7f6efile\u7684\u65f6\u5019\u624d\u4f1a\u8fdb\u884c\u52a0\u8f7d\uff0c\u5982\u679c\u91c7\u7528ZK\u3001nacos\u3001\u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3\uff0c\u53ef\u4ee5\u5ffd\u7565\u3002\u56e0\u4e3atype\u6307\u5b9a\u5176\u4ed6\u662f\u4e0d\u52a0\u8f7dfile.conf\u7684\uff0c\u4f46\u662f\u5bf9\u5e94\u7684 service.localRgroup.grouplist  \u548c service.vgroupMapping  \u9700\u8981\u5728\u652f\u6301\u914d\u7f6e\u4e2d\u5fc3 \u8fdb\u884c\u6307\u5b9a\uff0c\u8fd9\u6837\u4f60\u7684client \u5728\u542f\u52a8\u540e\u4f1a\u901a\u8fc7\u81ea\u52a8\u4ece\u914d\u7f6e\u4e2d\u5fc3\u83b7\u53d6\u5bf9\u5e94\u7684 SEATA \u670d\u52a1 \u548c\u5730\u5740\u3002\u5982\u679c\u4e0d\u914d\u7f6e\u4f1a\u51fa\u73b0\u65e0\u6cd5\u8fde\u63a5server\u7684\u9519\u8bef\u3002\u5f53\u7136\u5982\u679c\u4f60\u91c7\u7528\u7684eureka\u5728config\u7684\u5730\u65b9\u5c31\u9700\u8981\u91c7\u7528type="file" \u76ee\u524dSEATA config\u6682\u65f6\u4e0d\u652f\u6301eureka\u7684\u5f62\u52bf'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'transport {\n  # tcp udt unix-domain-socket\n  type = "TCP"\n  #NIO NATIVE\n  server = "NIO"\n  #enable heartbeat\n  heartbeat = true\n  #thread factory for netty\n  thread-factory {\n    boss-thread-prefix = "NettyBoss"\n    worker-thread-prefix = "NettyServerNIOWorker"\n    server-executor-thread-prefix = "NettyServerBizHandler"\n    share-boss-worker = false\n    client-selector-thread-prefix = "NettyClientSelector"\n    client-selector-thread-size = 1\n    client-worker-thread-prefix = "NettyClientWorkerThread"\n    # netty boss thread size,will not be used for UDT\n    boss-thread-size = 1\n    #auto default pin or 8\n    worker-thread-size = 8\n  }\n}\nservice {\n  #vgroup->rgroup\n  vgroup_mapping.service-provider-fescar-service-group = "default"\n  #only support single node\n  localRgroup.grouplist = "127.0.0.1:8091"\n  #degrade current not support\n  enableDegrade = false\n  #disable\n  disable = false\n}\n\nclient {\n  async.commit.buffer.limit = 10000\n  lock {\n    retry.internal = 10\n    retry.times = 30\n  }\n}\n')),(0,a.kt)("h1",{id:"4\u670d\u52a1\u76f8\u5173"},"4.\u670d\u52a1\u76f8\u5173"),(0,a.kt)("p",null," \u8fd9\u91cc\u6709\u4e24\u4e2a\u5730\u65b9\u9700\u8981\u6ce8\u610f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    grouplist IP\uff0c\u8fd9\u91cc\u662f\u5f53\u524dfescar-sever\u7684IP\u7aef\u53e3\uff0c\n    vgroup_mapping\u7684\u914d\u7f6e\u3002\n")),(0,a.kt)("p",null,' vgroup_mapping.\u670d\u52a1\u540d\u79f0-fescar-service-group,\u8fd9\u91cc \u8981\u8bf4\u4e0b\u670d\u52a1\u540d\u79f0\u5176\u5b9e\u662f\u4f60\u5f53\u524d\u7684consumer \u6216\u8005provider application.properties\u7684\u914d\u7f6e\u7684\u5e94\u7528\u540d\u79f0\uff1aspring.application.name=service-provider\uff0c\u6e90\u4ee3\u7801\u4e2d\u662f \u83b7\u53d6\u5e94\u7528\u540d\u79f0\u4e0e fescar-service-group \u8fdb\u884c\u62fc\u63a5\uff0c\u505akey\u503c\u3002\u540c\u7406value\u662f\u5f53\u524dfescar\u7684\u670d\u52a1\u540d\u79f0\uff0c  cluster = "default"  / application = "default"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'     vgroup_mapping.service-provider-fescar-service-group = "default"\n      #only support single node\n      localRgroup.grouplist = "127.0.0.1:8091"\n')),(0,a.kt)("p",null,"\u540c\u7406\u65e0\u8bba\u662fprovider \u8fd8\u662fconsumer \u90fd\u9700\u8981\u8fd9\u4e24\u4e2a\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u91c7\u7528nacos\u505a\u914d\u7f6e\u4e2d\u5fc3\uff0c\u9700\u8981\u5728nacos\u901a\u8fc7\u6dfb\u52a0\u914d\u7f6e\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\u6dfb\u52a0\u3002"),(0,a.kt)("h1",{id:"5\u4e8b\u52a1\u4f7f\u7528"},"5.\u4e8b\u52a1\u4f7f\u7528"),(0,a.kt)("p",null,"\u6211\u8fd9\u91cc\u7684\u4ee3\u7801\u903b\u8f91\u662f\u8bf7\u6c42\u901a\u8fc7\u7f51\u5173\u8fdb\u884c\u8d1f\u8f7d\u8f6c\u53d1\u5230\u6211\u7684consumer\u4e0a\uff0c\u5728consumer \u4e2d\u901a\u8fc7fegin\u8fdb\u884cprovider\u8bf7\u6c42\u3002\u5b98\u65b9\u7684\u4f8b\u5b50\u4e2d\u662f\u901a\u8fc7fegin\u8fdb\u884c\u7684\uff0c\u800c\u6211\u4eec\u8fd9\u8fb9\u76f4\u63a5\u901a\u8fc7\u7f51\u5173\u8f6c\u53d1\uff0c\u6240\u4ee5\u5168\u5c40\u4e8b\u52a1\u540c\u5b98\u65b9\u7684demo\u4e00\u6837 \u4e5f\u90fd\u662f\u5728controller\u5c42\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class DemoController {\n    @Autowired\n    private DemoFeignClient demoFeignClient;\n    \n    @Autowired\n    private DemoFeignClient2 demoFeignClient2;\n    @GlobalTransactional(timeoutMills = 300000, name = "spring-cloud-demo-tx")\n    @GetMapping("/getdemo")\n    public String demo() {\n        \n        // \u8c03\u7528A \u670d\u52a1  \u7b80\u5355save\n        ResponseData<Integer> result = demoFeignClient.insertService("test",1);\n        if(result.getStatus()==400) {\n            System.out.println(result+"+++++++++++++++++++++++++++++++++++++++");\n            throw new RuntimeException("this is error1");\n        }\n    \n        // \u8c03\u7528B \u670d\u52a1\u3002\u62a5\u9519\u6d4b\u8bd5A \u670d\u52a1\u56de\u6eda\n        ResponseData<Integer>  result2 = demoFeignClient2.saveService();\n    \n        if(result2.getStatus()==400) {\n            System.out.println(result2+"+++++++++++++++++++++++++++++++++++++++");\n            throw new RuntimeException("this is error2");\n        }\n\n        return "SUCCESS";\n    }\n}\n')),(0,a.kt)("p",null,"\u5230\u6b64\u4e3a\u6b62\u6838\u5fc3\u7684\u4e8b\u52a1\u6574\u5408\u57fa\u672c\u5230\u6b64\u7ed3\u675f\u4e86\uff0c\u6211\u8fd9\u91cc\u662f\u9488\u5bf9A,B \u4e24\u4e2aprovider\u8fdb\u884c\u8c03\u7528\uff0c\u5f53B\u53d1\u751f\u62a5\u9519\u540e\uff0c\u8fdb\u884c\u5168\u5c40\u4e8b\u52a1\u56de\u6eda\u3002\u5f53\u7136\u6bcf\u4e2a\u4e8b\u52a1\u5185\u90e8\u90fd\u53ef\u4ee5\u901a\u8fc7\u81ea\u5df1\u7684\u72ec\u7acb\u672c\u5730\u4e8b\u52a1\u53bb\u5904\u7406\u81ea\u5df1\u672c\u5730\u4e8b\u52a1\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"SEATA\u662f\u901a\u8fc7\u5168\u5c40\u7684XID\u65b9\u5f0f\u8fdb\u884c\u4e8b\u52a1\u7edf\u4e00\u6807\u8bc6\u65b9\u5f0f\u3002\u8fd9\u91cc\u5c31\u4e0d\u5217\u51faSEATA\u9700\u8981\u7528\u7684\u6570\u636e\u5e93\u8868\u3002\u5177\u4f53\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba/tree/master/spring-cloud-alibaba-examples/fescar-example"},"spring-cloud-fescar \u5b98\u65b9DEMO")),(0,a.kt)("h1",{id:"5\u6570\u636e\u4ee3\u7406"},"5.\u6570\u636e\u4ee3\u7406"),(0,a.kt)("p",null,"\u8fd9\u91cc\u8fd8\u6709\u4e00\u4e2a\u91cd\u8981\u7684\u8bf4\u660e\u5c31\u662f\uff0c\u5728\u5206\u5e93\u670d\u52a1\u7684\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u5185\u90fd\u9700\u8981\u6709\u4e00\u4e2aundo_log\u7684\u6570\u636e\u5e93\u8868\u8fdb\u884cXID\u7edf\u4e00\u5b58\u50a8\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u540c\u4e8b\u9488\u5bf9\u6bcf\u4e2a\u63d0\u4f9b\u670d\u52a1\u7684\u9879\u76ee\uff0c\u9700\u8981\u8fdb\u884c\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u7684\u4ee3\u7406\u3002\u4e5f\u5c31\u662f\uff1a"),(0,a.kt)("p",null,"\u76ee\u524d\u53ea\u652f\u6301Druid\u8fde\u63a5\u6c60\uff0c\u540e\u7eed\u4f1a\u7ee7\u7eed\u652f\u6301\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class DatabaseConfiguration {\n\n    \n    @Bean(destroyMethod = "close", initMethod = "init")\n    @ConfigurationProperties(prefix="spring.datasource")\n    public DruidDataSource druidDataSource() {\n\n        return new DruidDataSource();\n    }\n    \n    \n    @Bean\n    public DataSourceProxy dataSourceProxy(DruidDataSource druidDataSource) {\n    \n        return new DataSourceProxy(druidDataSource);\n    }\n    \n\n    @Bean\n    public SqlSessionFactory sqlSessionFactory(DataSourceProxy dataSourceProxy) throws Exception {\n        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();\n        factoryBean.setDataSource(dataSourceProxy);    \n        return factoryBean.getObject();\n    }\n}\n')),(0,a.kt)("p",null,"\u5927\u5bb6\u8981\u6ce8\u610f\u7684\u5c31\u662f\u914d\u7f6e\u6587\u4ef6\u548c\u6570\u636e\u4ee3\u7406\u3002\u5982\u679c\u6ca1\u6709\u8fdb\u884c\u6570\u636e\u6e90\u4ee3\u7406\uff0cundo_log\u662f\u65e0\u6570\u636e\u7684\uff0c\u4e5f\u5c31\u662f\u6ca1\u529e\u8fdb\u884cXID\u7684\u7ba1\u7406\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u4f5c\u8005\uff1a\u5927\u83f2.Fei"))}d.isMDXComponent=!0}}]);