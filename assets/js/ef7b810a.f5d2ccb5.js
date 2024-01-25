"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[46868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(d,s(s({ref:t},h),{},{components:n})):a.createElement(d,s({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={title:"In-Depth Analysis of Seata TCC Mode (1)",author:"Zhang Chenghui",keywords:["Seata\u3001distributed transaction\u3001TCC"],description:"Seata currently supports AT mode, XA mode, TCC mode, and SAGA mode. Previous articles have talked more about non-intrusive AT mode. Today, we will introduce TCC mode, which is also a two-phase commit.",date:"2022/01/18"},s="Preface",i={permalink:"/blog/seata-tcc",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-tcc.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-tcc.md",title:"In-Depth Analysis of Seata TCC Mode (1)",description:"Seata currently supports AT mode, XA mode, TCC mode, and SAGA mode. Previous articles have talked more about non-intrusive AT mode. Today, we will introduce TCC mode, which is also a two-phase commit.",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[],readingTime:11.26,hasTruncateMarker:!1,authors:[{name:"Zhang Chenghui"}],frontMatter:{title:"In-Depth Analysis of Seata TCC Mode (1)",author:"Zhang Chenghui",keywords:["Seata\u3001distributed transaction\u3001TCC"],description:"Seata currently supports AT mode, XA mode, TCC mode, and SAGA mode. Previous articles have talked more about non-intrusive AT mode. Today, we will introduce TCC mode, which is also a two-phase commit.",date:"2022/01/18"},prevItem:{title:"Alibaba Seata Resolves Idempotence, Dangling, and Empty Rollback Issues in TCC Mode",permalink:"/blog/seata-tcc-fence"},nextItem:{title:"Q&A on the New Version of Snowflake Algorithm",permalink:"/blog/seata-snowflake-explain"}},c={authorsImageUrls:[void 0]},l=[{value:"Resource Parsing",id:"resource-parsing",level:2},{value:"Resource Management",id:"resource-management",level:2},{value:"Transaction Processing",id:"transaction-processing",level:2},{value:"How to handle empty rollback",id:"how-to-handle-empty-rollback",level:2},{value:"How to Handle Idempotent Operations",id:"how-to-handle-idempotent-operations",level:2},{value:"How to Handle Suspend",id:"how-to-handle-suspend",level:2}],h={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Seata currently supports AT mode, XA mode, TCC mode, and SAGA mode. Previous articles have talked more about non-intrusive AT mode. Today, we will introduce TCC mode, which is also a two-phase commit."),(0,o.kt)("h1",{id:"what-is-tcc"},"What is TCC"),(0,o.kt)("p",null,"TCC is a two-phase commit protocol in distributed transactions. Its full name is Try-Confirm-Cancel. Their specific meanings are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Try: Check and reserve business resources;"),(0,o.kt)("li",{parentName:"ol"},"Confirm: Commit the business transaction, i.e., the commit operation. If Try is successful, this step will definitely be successful;"),(0,o.kt)("li",{parentName:"ol"},"Cancel: Cancel the business transaction, i.e., the rollback operation. This step will release the resources reserved in Try.")),(0,o.kt)("p",null,"TCC is an intrusive distributed transaction solution. All three operations need to be implemented by the business system itself, which has a significant impact on the business system. The design is relatively complex, but the advantage is that TCC does not rely on the database. It can manage resources across databases and applications, and can implement an atomic operation for different data access through intrusive coding, better solving the distributed transaction problems in various complex business scenarios."),(0,o.kt)("img",{src:"/img/blog/20220116160157.png",alt:"img",style:{zoom:"50%"}}),(0,o.kt)("h1",{id:"seata-tcc-mode"},"Seata TCC mode"),(0,o.kt)("p",null,"Seata TCC mode follows the same principle as the general TCC mode. Let's first use Seata TCC mode to implement a distributed transaction:"),(0,o.kt)("p",null,"Suppose there is a business that needs to use service A and service B to complete a transaction operation. We define a TCC interface for this service in service A:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public interface TccActionOne {\n    @TwoPhaseBusinessAction(name = "DubboTccActionOne", commitMethod = "commit", rollbackMethod = "rollback")\n    public boolean prepare(BusinessActionContext actionContext, @BusinessActionContextParameter(paramName = "a") String a);\n\n    public boolean commit(BusinessActionContext actionContext);\n\n    public boolean rollback(BusinessActionContext actionContext);\n}\n')),(0,o.kt)("p",null,"Similarly, we define a TCC interface for this service in service B:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public interface TccActionTwo {\n    @TwoPhaseBusinessAction(name = "DubboTccActionTwo", commitMethod = "commit", rollbackMethod = "rollback")\n    public void prepare(BusinessActionContext actionContext, @BusinessActionContextParameter(paramName = "b") String b);\n\n    public void commit(BusinessActionContext actionContext);\n\n    public void rollback(BusinessActionContext actionContext);\n}\n')),(0,o.kt)("p",null,"In the business system, we start a global transaction and execute the TCC reserve resource methods for service A and service B:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@GlobalTransactional\npublic String doTransactionCommit(){\n    // Service A transaction participant\n    tccActionOne.prepare(null,"one");\n    // Service B transaction participant\n    tccActionTwo.prepare(null,"two");\n}\n')),(0,o.kt)("p",null,"The example above demonstrates the implementation of a global transaction using Seata TCC mode. It can be seen that the TCC mode also uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional")," annotation to initiate a global transaction, while the TCC interfaces of Service A and Service B are transaction participants. Seata treats a TCC interface as a Resource, also known as a TCC Resource."),(0,o.kt)("p",null,"TCC interfaces can be RPC or internal JVM calls, meaning that a TCC interface has both a sender and a caller identity. In the example above, the TCC interface is the sender in Service A and Service B, and the caller in the business system. If the TCC interface is a Dubbo RPC, the caller is a dubbo:reference and the sender is a dubbo:service."),(0,o.kt)("img",{src:"/img/blog/20220116161933.png",alt:"img",style:{zoom:"50%"}}),(0,o.kt)("p",null,"When Seata starts, it scans and parses the TCC interfaces. If a TCC interface is a sender, Seata registers the TCC Resource with the TC during startup, and each TCC Resource has a resource ID. If a TCC interface is a caller, Seata proxies the caller and intercepts the TCC interface calls. Similar to the AT mode, the proxy intercepts the call to the Try method, registers a branch transaction with the TC, and then executes the original RPC call."),(0,o.kt)("p",null,"When the global transaction decides to commit/rollback, the TC will callback to the corresponding participant service to execute the Confirm/Cancel method of the TCC Resource using the resource ID registered by the branch."),(0,o.kt)("h1",{id:"how-seata-implements-tcc-mode"},"How Seata Implements TCC Mode"),(0,o.kt)("p",null,"From the above Seata TCC model, it can be seen that the TCC mode in Seata also follows the TC, TM, RM three-role model. How to implement TCC mode in these three-role models? I mainly summarize the implementation as resource parsing, resource management, and transaction processing."),(0,o.kt)("h2",{id:"resource-parsing"},"Resource Parsing"),(0,o.kt)("p",null,"Resource parsing is the process of parsing and registering TCC interfaces. As mentioned earlier, TCC interfaces can be RPC or internal JVM calls. In the Seata TCC module, there is a remoting module that is specifically used to parse TCC interfaces with the ",(0,o.kt)("inlineCode",{parentName:"p"},"TwoPhaseBusinessAction")," annotation:"),(0,o.kt)("img",{src:"/img/blog/20220116175059.png",alt:"img",style:{zoom:"50%"}}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RemotingParser")," interface mainly has methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"isRemoting"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isReference"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isService"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getServiceDesc"),", etc. The default implementation is ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultRemotingParser"),", and the parsing of various RPC protocols is executed in ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultRemotingParser"),". Seata has already implemented parsing of Dubbo, HSF, SofaRpc, and LocalTCC RPC protocols while also providing SPI extensibility for additional RPC protocol parsing classes."),(0,o.kt)("p",null,"During the Seata startup process, the ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalTransactionScanner")," annotation is used for scanning and executes the following method:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"io.seata.spring.util.TCCBeanParserUtils#isTccAutoProxy")),(0,o.kt)("p",null,"The purpose of this method is to determine if the bean has been TCC proxied. In the process, it first checks if the bean is a Remoting bean. If it is, it calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"getServiceDesc")," method to parse the remoting bean, and if it is a sender, it registers the resource:"),(0,o.kt)("p",null,"io.seata.rm.tcc.remoting.parser.DefaultRemotingParser#parserRemotingServiceInfo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public RemotingDesc parserRemotingServiceInfo(Object bean, String beanName, RemotingParser remotingParser){\n    RemotingDesc remotingBeanDesc = remotingParser.getServiceDesc(bean, beanName);\n    if(remotingBeanDesc == null){\n    return null;\n    }\n    remotingServiceMap.put(beanName, remotingBeanDesc);\n\n    Class<?> interfaceClass = remotingBeanDesc.getInterfaceClass();\n    Method[] methods = interfaceClass.getMethods();\n    if (remotingParser.isService(bean, beanName)) {\n        try {\n            //service bean, registry resource\n            Object targetBean = remotingBeanDesc.getTargetBean();\n            for (Method m : methods) {\n                TwoPhaseBusinessAction twoPhaseBusinessAction = m.getAnnotation(TwoPhaseBusinessAction.class);\n                if (twoPhaseBusinessAction != null) {\n                    TCCResource tccResource = new TCCResource();\n                    tccResource.setActionName(twoPhaseBusinessAction.name());\n                    tccResource.setTargetBean(targetBean);\n                    tccResource.setPrepareMethod(m);\n                    tccResource.setCommitMethodName(twoPhaseBusinessAction.commitMethod());\n                    tccResource.setCommitMethod(interfaceClass.getMethod(twoPhaseBusinessAction.commitMethod(),\n                    twoPhaseBusinessAction.commitArgsClasses()));\n                    tccResource.setRollbackMethodName(twoPhaseBusinessAction.rollbackMethod());\n                    tccResource.setRollbackMethod(interfaceClass.getMethod(twoPhaseBusinessAction.rollbackMethod(),\n                    twoPhaseBusinessAction.rollbackArgsClasses()));\n                    // set argsClasses\n                    tccResource.setCommitArgsClasses(twoPhaseBusinessAction.commitArgsClasses());\n                    tccResource.setRollbackArgsClasses(twoPhaseBusinessAction.rollbackArgsClasses());\n                    // set phase two method\'s keys\n                    tccResource.setPhaseTwoCommitKeys(this.getTwoPhaseArgs(tccResource.getCommitMethod(),\n                    twoPhaseBusinessAction.commitArgsClasses()));\n                    tccResource.setPhaseTwoRollbackKeys(this.getTwoPhaseArgs(tccResource.getRollbackMethod(),\n                    twoPhaseBusinessAction.rollbackArgsClasses()));\n                    // registry tcc resource\n                    DefaultResourceManager.get().registerResource(tccResource);\n                }\n            }\n        } catch (Throwable t) {\n            throw new FrameworkException(t, "parser remoting service error");\n        }\n    }\n    if (remotingParser.isReference(bean, beanName)) {\n        // reference bean, TCC proxy\n        remotingBeanDesc.setReference(true);\n    }\n    return remotingBeanDesc;\n    }\n')),(0,o.kt)("p",null,"The above method first calls the parsing class ",(0,o.kt)("inlineCode",{parentName:"p"},"getServiceDesc")," method to parse the remoting bean and puts the parsed ",(0,o.kt)("inlineCode",{parentName:"p"},"remotingBeanDesc")," into the local cache ",(0,o.kt)("inlineCode",{parentName:"p"},"remotingServiceMap"),". At the same time, it calls the parsing class ",(0,o.kt)("inlineCode",{parentName:"p"},"isService")," method to determine if it is the initiator. If it is the initiator, it parses the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},"TwoPhaseBusinessAction")," annotation to generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"TCCResource")," and registers it as a resource."),(0,o.kt)("h2",{id:"resource-management"},"Resource Management"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Resource Registration")),(0,o.kt)("p",null,"The resource for Seata TCC mode is called ",(0,o.kt)("inlineCode",{parentName:"p"},"TCCResource"),", and its resource manager is called ",(0,o.kt)("inlineCode",{parentName:"p"},"TCCResourceManager"),". As mentioned earlier, after parsing the TCC interface RPC resource, if it is the initiator, it will be registered as a resource:"),(0,o.kt)("p",null,"io.seata.rm.tcc.TCCResourceManager#registerResource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public void registerResource(Resource resource){\n    TCCResource tccResource=(TCCResource)resource;\n    tccResourceCache.put(tccResource.getResourceId(),tccResource);\n    super.registerResource(tccResource);\n    }\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TCCResource")," contains the relevant information of the TCC interface and is cached locally. It continues to call the parent class ",(0,o.kt)("inlineCode",{parentName:"p"},"registerResource")," method (which encapsulates communication methods) to register with the TC. The TCC resource's resourceId is the actionName, and the actionName is the name in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@TwoParseBusinessAction")," annotation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Resource Commit/Rollback")),(0,o.kt)("p",null,"io.seata.rm.tcc.TCCResourceManager#branchCommit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public BranchStatus branchCommit(BranchType branchType,String xid,long branchId,String resourceId,\n    String applicationData)throws TransactionException{\n    TCCResource tccResource=(TCCResource)tccResourceCache.get(resourceId);\n    if(tccResource==null){\n    throw new ShouldNeverHappenException(String.format("TCC resource is not exist, resourceId: %s",resourceId));\n    }\n    Object targetTCCBean=tccResource.getTargetBean();\n    Method commitMethod=tccResource.getCommitMethod();\n    if(targetTCCBean==null||commitMethod==null){\n    throw new ShouldNeverHappenException(String.format("TCC resource is not available, resourceId: %s",resourceId));\n    }\n    try{\n    //BusinessActionContext\n    BusinessActionContext businessActionContext=getBusinessActionContext(xid,branchId,resourceId,\n    applicationData);\n    // ... ... \n    ret=commitMethod.invoke(targetTCCBean,args);\n    // ... ... \n    return result?BranchStatus.PhaseTwo_Committed:BranchStatus.PhaseTwo_CommitFailed_Retryable;\n    }catch(Throwable t){\n    String msg=String.format("commit TCC resource error, resourceId: %s, xid: %s.",resourceId,xid);\n    LOGGER.error(msg,t);\n    return BranchStatus.PhaseTwo_CommitFailed_Retryable;\n    }\n    }\n')),(0,o.kt)("p",null,"When the TM resolves the phase two commit, the TC will callback to the corresponding participant (i.e., TCC interface initiator) service to execute the Confirm/Cancel method of the TCC Resource registered by the branch."),(0,o.kt)("p",null,"In the resource manager, the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"TCCResource")," will be found in the local cache based on the resourceId, and the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"BusinessActionContext")," will be found based on xid, branchId, resourceId, and applicationData, and the parameters to be executed are in the context. Finally, the commit method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"TCCResource")," is executed to perform the phase two commit."),(0,o.kt)("p",null,"The phase two rollback is similar."),(0,o.kt)("h2",{id:"transaction-processing"},"Transaction Processing"),(0,o.kt)("p",null,"As mentioned earlier, if the TCC interface is a caller, the Seata TCC proxy will be used to intercept the caller and register the branch before processing the actual RPC method call."),(0,o.kt)("p",null,"The method ",(0,o.kt)("inlineCode",{parentName:"p"},"io.seata.spring.util.TCCBeanParserUtils#isTccAutoProxy")," not only parses the TCC interface resources, but also determines whether the TCC interface is a caller. If it is a caller, it returns true:"),(0,o.kt)("p",null,"io.seata.spring.annotation.GlobalTransactionScanner#wrapIfNecessary"),(0,o.kt)("img",{src:"/img/blog/20220116192544.png",alt:"img",style:{zoom:"50%"}}),(0,o.kt)("p",null,"As shown in the figure, when ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalTransactionalScanner")," scans the TCC interface caller (Reference), it will proxy and intercept it with ",(0,o.kt)("inlineCode",{parentName:"p"},"TccActionInterceptor"),", which implements ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodInterceptor"),"."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"TccActionInterceptor"),", it will also call ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionInterceptorHandler")," to execute the interception logic, and the transaction-related processing is in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionInterceptorHandler#proceed")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public Object proceed(Method method, Object[] arguments, String xid, TwoPhaseBusinessAction businessAction, \n    Callback<Object> targetCallback) throws Throwable {\n    //Get action context from arguments, or create a new one and then reset to arguments\n    BusinessActionContext actionContext = getOrCreateActionContextAndResetToArguments(method.getParameterTypes(), arguments);\n    //Creating Branch Record\n    String branchId = doTccActionLogStore(method, arguments, businessAction, actionContext);\n    // ... ... \n    try {\n    // ... ...\n    return targetCallback.execute();\n    } finally {\n    try {\n    //to report business action context finally if the actionContext.getUpdated() is true\n    BusinessActionContextUtil.reportContext(actionContext);\n    } finally {\n    // ... ... \n    }\n    }\n}\n")),(0,o.kt)("p",null,"In the process of executing the first phase of the TCC interface, the ",(0,o.kt)("inlineCode",{parentName:"p"},"doTccActionLogStore")," method is called for branch registration, and the TCC-related information such as parameters is placed in the context. This context will be used for resource submission/rollback as mentioned above."),(0,o.kt)("h1",{id:"how-to-control-exceptions"},"How to control exceptions"),(0,o.kt)("p",null,"In the process of executing the TCC model, various exceptions may occur, the most common of which are empty rollback, idempotence, and suspense. Here I will explain how Seata handles these three types of exceptions."),(0,o.kt)("h2",{id:"how-to-handle-empty-rollback"},"How to handle empty rollback"),(0,o.kt)("p",null,"What is an empty rollback?"),(0,o.kt)("p",null,"An empty rollback refers to a situation in a distributed transaction where the TM drives the second-phase rollback of the participant's Cancel method without calling the participant's Try method."),(0,o.kt)("p",null,"How does an empty rollback occur?"),(0,o.kt)("img",{src:"/img/blog/20220116201900.png",alt:"img",style:{zoom:"50%"}}),(0,o.kt)("p",null,"As shown in the above figure, after the global transaction is opened, participant A will execute the first-phase RPC method after completing branch registration. If the machine where participant A is located crashes or there is a network anomaly at this time, the RPC call will fail, meaning that participant A's first-phase method did not execute successfully. However, the global transaction has already been opened, so Seata must progress to the final state. When the global transaction is rolled back, participant A's Cancel method will be called, resulting in an empty rollback."),(0,o.kt)("p",null,"To prevent empty rollback, it is necessary to identify it in the Cancel method. How does Seata do this?"),(0,o.kt)("p",null,"Seata's approach is to add a TCC transaction control table, which contains the XID and BranchID information of the transaction. A record is inserted when the Try method is executed, indicating that phase one has been executed. When the Cancel method is executed, this record is read. If the record does not exist, it means that the Try method was not executed."),(0,o.kt)("h2",{id:"how-to-handle-idempotent-operations"},"How to Handle Idempotent Operations"),(0,o.kt)("p",null,"Idempotent operation refers to TC repeating the two-phase commit, so the Confirm/Cancel interface needs to support idempotent processing, which means that it will not cause duplicate resource submission or release."),(0,o.kt)("p",null,"So how does idempotent operation arise?"),(0,o.kt)("img",{src:"/img/blog/20220116203816.png",alt:"img",style:{zoom:"50%"}}),(0,o.kt)("p",null,"As shown in the above figure, after participant A completes the two phases, network jitter or machine failure may cause TC not to receive the return result of participant A's execution of the two phases. TC will continue to make repeated calls until the two-phase execution result is successful."),(0,o.kt)("p",null,"How does Seata handle idempotent operations?"),(0,o.kt)("p",null,"Similarly, a status field is added to the TCC transaction control table. This field has 3 values:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"tried: 1"),(0,o.kt)("li",{parentName:"ol"},"committed: 2"),(0,o.kt)("li",{parentName:"ol"},"rollbacked: 3")),(0,o.kt)("p",null,"After the execution of the two-phase Confirm/Cancel method, the status is changed to committed or rollbacked. When the two-phase Confirm/Cancel method is called repeatedly, checking the transaction status can solve the idempotent problem."),(0,o.kt)("h2",{id:"how-to-handle-suspend"},"How to Handle Suspend"),(0,o.kt)("p",null,"Suspension refers to the two-phase Cancel method being executed before the phase Try method, because empty rollback is allowed. After the execution of the two-phase Cancel method, directly returning success, the global transaction has ended. However, because the Try method is executed later, this will cause the resources reserved by the phase Try method to never be committed or released."),(0,o.kt)("p",null,"So how does suspension arise?"),(0,o.kt)("img",{src:"/img/blog/20220116205241.png",alt:"img",style:{zoom:"50%"}}),(0,o.kt)("p",null,"As shown in the above figure, when participant A's phase Try method is executed, network congestion occurs, and due to Seata's global transaction timeout limit, after the Try method times out, TM resolves to roll back the global transaction. After the rollback is completed, if the RPC request arrives at participant A at this time and the Try method is executed to reserve resources, it will cause suspension."),(0,o.kt)("p",null,"How does Seata handle suspension?"),(0,o.kt)("p",null,"Add a status to the TCC transaction control table:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"suspended: 4")),(0,o.kt)("p",null,"When the two-phase Cancel method is executed, if it is found that there is no related record in the TCC transaction control table, it means that the two-phase Cancel method is executed before the phase Try method. Therefore, a record with status=4 is inserted. Then, when the phase Try method is executed, if status=4 is encountered, it means that the two-phase Cancel has been executed, and false is returned to prevent the phase Try method from succeeding."),(0,o.kt)("h1",{id:"author-introduction"},"Author Introduction"),(0,o.kt)("p",null,'Zhang Chenghui, currently working at Ant Group, loves to share technology. He is the author of the WeChat public account "Advanced Backend," the author of the technical blog (',(0,o.kt)("a",{parentName:"p",href:"https://objcoding.com/"},"https://objcoding.com/"),"), a Seata Committer, and his GitHub ID is: objcoding."))}p.isMDXComponent=!0}}]);