"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[83604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,p=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return n?a.createElement(p,c(c({ref:t},d),{},{components:n})):a.createElement(p,c({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Alibaba Seata Resolves Idempotence, Dangling, and Empty Rollback Issues in TCC Mode",author:"Zhu Jinjun",keywords:["Seata","TCC","idempotence","dangling","empty rollback"],description:"Seata version 1.5.1 from Alibaba has finally resolved the issues of idempotence, dangling, and empty rollback in TCC (Try-Confirm-Cancel) mode. This article mainly explains how Seata addresses these problems.",date:"2022/06/25"},c=void 0,i={permalink:"/blog/seata-tcc-fence",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-tcc-fence.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-tcc-fence.md",title:"Alibaba Seata Resolves Idempotence, Dangling, and Empty Rollback Issues in TCC Mode",description:"Seata version 1.5.1 from Alibaba has finally resolved the issues of idempotence, dangling, and empty rollback in TCC (Try-Confirm-Cancel) mode. This article mainly explains how Seata addresses these problems.",date:"2022-06-25T00:00:00.000Z",formattedDate:"June 25, 2022",tags:[],readingTime:10.97,hasTruncateMarker:!1,authors:[{name:"Zhu Jinjun"}],frontMatter:{title:"Alibaba Seata Resolves Idempotence, Dangling, and Empty Rollback Issues in TCC Mode",author:"Zhu Jinjun",keywords:["Seata","TCC","idempotence","dangling","empty rollback"],description:"Seata version 1.5.1 from Alibaba has finally resolved the issues of idempotence, dangling, and empty rollback in TCC (Try-Confirm-Cancel) mode. This article mainly explains how Seata addresses these problems.",date:"2022/06/25"},prevItem:{title:"Seata:Bridging Data and Applications",permalink:"/blog/seata-connect-data-and-application"},nextItem:{title:"In-Depth Analysis of Seata TCC Mode (1)",permalink:"/blog/seata-tcc"}},s={authorsImageUrls:[void 0]},l=[{value:"1 TCC",id:"1-tcc",level:2},{value:"1.1 try-commit",id:"11-try-commit",level:3},{value:"1.2 try-cancel",id:"12-try-cancel",level:3},{value:"2 TCC Advantages",id:"2-tcc-advantages",level:2},{value:"2.1 Asynchronous Commit",id:"21-asynchronous-commit",level:3},{value:"2.2 Same-Database Mode",id:"22-same-database-mode",level:3},{value:"3 RM Code Example",id:"3-rm-code-example",level:2},{value:"4 Issues with TCC",id:"4-issues-with-tcc",level:2},{value:"4.1 Idempotence",id:"41-idempotence",level:3},{value:"4.2 Empty Rollback",id:"42-empty-rollback",level:3},{value:"4.3 Hanging",id:"43-hanging",level:3},{value:"5 Summary",id:"5-summary",level:3}],d={toc:l},h="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Today, let's talk about how the new version (1.5.1) of Alibaba's Seata resolves the issues of idempotence, dangling, and empty rollback in TCC mode."),(0,r.kt)("h2",{id:"1-tcc"},"1 TCC"),(0,r.kt)("p",null,"TCC mode is the most classic solution for distributed transactions. It divides the distributed transaction into two phases. In the try phase, resources are reserved for each branch transaction. If all branch transactions successfully reserve resources, the global transaction proceeds to the commit phase for committing the transaction globally. However, if any node fails to reserve resources, the global transaction enters the cancel phase to rollback the transaction globally."),(0,r.kt)("p",null,"Taking traditional order, inventory, and account services as an example, in the try phase, resources are attempted to be reserved by inserting orders, deducting inventory, and deducting amounts. These three services require local transaction commits, and the resources can be transferred to an intermediate table. In the commit phase, the resources reserved in the try phase are transferred to the final table. In the cancel phase, the resources reserved in the try phase are released, such as returning the account amount to the customer's account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: The try phase must involve committing local transactions. For example, when deducting the order amount, the money must be deducted from the customer's account. If it is not deducted, there will be a problem in the commit phase if the customer's account does not have enough money.")),(0,r.kt)("h3",{id:"11-try-commit"},"1.1 try-commit"),(0,r.kt)("p",null,"In the try phase, resources are first reserved, and then they are deducted in the commit phase. The diagram below illustrates this process:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fence-try-commit",src:n(73754).Z,width:"501",height:"681"})),(0,r.kt)("h3",{id:"12-try-cancel"},"1.2 try-cancel"),(0,r.kt)("p",null,"In the try phase, resources are first reserved. If the deduction of inventory fails, leading to a rollback of the global transaction, the resources are released in the cancel phase. The diagram below illustrates this process:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fence-try-cancel",src:n(35840).Z,width:"501",height:"681"})),(0,r.kt)("h2",{id:"2-tcc-advantages"},"2 TCC Advantages"),(0,r.kt)("p",null,"The biggest advantage of TCC mode is its high efficiency. In the try phase, the resource locking in TCC mode is not a true lock, but rather a real local transaction submission that reserves resources in an intermediate state without the need for blocking and waiting. Therefore, it is more efficient than other modes."),(0,r.kt)("p",null,"Additionally, the TCC mode can be optimized as follows:"),(0,r.kt)("h3",{id:"21-asynchronous-commit"},"2.1 Asynchronous Commit"),(0,r.kt)("p",null,"After the try phase succeeds, instead of immediately entering the confirm/cancel phase, it is considered that the global transaction has already ended. A scheduled task is started to asynchronously execute the confirm/cancel phase, which involves deducting or releasing resources. This approach can greatly improve performance."),(0,r.kt)("h3",{id:"22-same-database-mode"},"2.2 Same-Database Mode"),(0,r.kt)("p",null,"In the TCC mode, there are three roles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TM: Manages the global transaction, including starting the global transaction and committing/rolling back the global transaction."),(0,r.kt)("li",{parentName:"ul"},"RM: Manages the branch transaction."),(0,r.kt)("li",{parentName:"ul"},"TC: Manages the state of the global transaction and branch transactions.")),(0,r.kt)("p",null,"The diagram below is from the Seata official website:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fence-fiffrent-db",src:n(65228).Z,width:"853",height:"482"})),(0,r.kt)("p",null,"When TM starts a global transaction, RM needs to send a registration message to TC, and TC saves the state of the branch transaction. When TM requests a commit or rollback, TC needs to send commit or rollback messages to RM. In this way, in a distributed transaction with two branch transactions, there are four RPCs between TC and RM."),(0,r.kt)("p",null,"After optimization, the process is as shown in the diagram below:"),(0,r.kt)("p",null,"TC saves the state of the global transaction. When TM starts a global transaction, RM no longer needs to send a registration message to TC. Instead, it saves the state of the branch transaction locally. After TM sends a commit or rollback message to TC, the asynchronous thread in RM first retrieves the uncommitted branch transactions saved locally, and then sends a message to TC to obtain the state of the global transaction in which the local branch transaction is located, in order to determine whether to commit or rollback the local transaction."),(0,r.kt)("p",null,"With this optimization, the number of RPCs is reduced by 50%, resulting in a significant performance improvement."),(0,r.kt)("h2",{id:"3-rm-code-example"},"3 RM Code Example"),(0,r.kt)("p",null,"Taking the inventory service as an example, the RM inventory service interface code is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},'@LocalTCC\npublic interface StorageService {\n\n    /**\n     * decrease\n     * @param xid \n     * @param productId \n     * @param count \n     * @return\n     */\n    @TwoPhaseBusinessAction(name = "storageApi", commitMethod = "commit", rollbackMethod = "rollback", useTCCFence = true)\n    boolean decrease(String xid, Long productId, Integer count);\n\n    /**\n     * commit\n     * @param actionContext\n     * @return\n     */\n    boolean commit(BusinessActionContext actionContext);\n\n    /**\n     * rollback\n     * @param actionContext\n     * @return\n     */\n    boolean rollback(BusinessActionContext actionContext);\n}\n')),(0,r.kt)("p",null,"By using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@LocalTCC")," annotation, when the RM is initialized, it registers a branch transaction with the TC. The ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," phase method (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"decrease")," method) is annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@TwoPhaseBusinessAction"),", which defines the branch transaction's ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," method, ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel")," method, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTCCFence")," property, which will be explained in the next section."),(0,r.kt)("h2",{id:"4-issues-with-tcc"},"4 Issues with TCC"),(0,r.kt)("p",null,"There are three major issues with the TCC pattern: idempotence, suspension, and empty rollback. In version 1.5.1 of Seata, a transaction control table named ",(0,r.kt)("inlineCode",{parentName:"p"},"tcc_fence_log")," is introduced to address these issues. The ",(0,r.kt)("inlineCode",{parentName:"p"},"useTCCFence")," property mentioned in the previous ",(0,r.kt)("inlineCode",{parentName:"p"},"@TwoPhaseBusinessAction")," annotation is used to enable or disable this mechanism, with a default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"The creation SQL statement for the ",(0,r.kt)("inlineCode",{parentName:"p"},"tcc_fence_log")," table (in MySQL syntax) is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE TABLE IF NOT EXISTS `tcc_fence_log`\n(\n    `xid`           VARCHAR(128)  NOT NULL COMMENT 'global id',\n    `branch_id`     BIGINT        NOT NULL COMMENT 'branch id',\n    `action_name`   VARCHAR(64)   NOT NULL COMMENT 'action name',\n    `status`        TINYINT       NOT NULL COMMENT 'status(tried:1;committed:2;rollbacked:3;suspended:4)',\n    `gmt_create`    DATETIME(3)   NOT NULL COMMENT 'create time',\n    `gmt_modified`  DATETIME(3)   NOT NULL COMMENT 'update time',\n    PRIMARY KEY (`xid`, `branch_id`),\n    KEY `idx_gmt_modified` (`gmt_modified`),\n    KEY `idx_status` (`status`)\n) ENGINE = InnoDB\nDEFAULT CHARSET = utf8mb4;\n")),(0,r.kt)("h3",{id:"41-idempotence"},"4.1 Idempotence"),(0,r.kt)("p",null,"During the commit/cancel phase, if the TC does not receive a response from the branch transaction, it needs to retry the operation. Therefore, it is necessary for the branch transaction to support idempotence."),(0,r.kt)("p",null,"Let's take a look at how this is addressed in the new version. The following code is from the ",(0,r.kt)("inlineCode",{parentName:"p"},"TCCResourceManager")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},'@Override\npublic BranchStatus branchCommit(BranchType branchType, String xid, long branchId, String resourceId,\n                                 String applicationData) throws TransactionException {\n    TCCResource tccResource = (TCCResource)tccResourceCache.get(resourceId);\n    Object targetTCCBean = tccResource.getTargetBean();\n    Method commitMethod = tccResource.getCommitMethod();\n    try {\n        //BusinessActionContext\n        BusinessActionContext businessActionContext = getBusinessActionContext(xid, branchId, resourceId,\n            applicationData);\n        Object[] args = this.getTwoPhaseCommitArgs(tccResource, businessActionContext);\n        Object ret;\n        boolean result;\n        //whether the useTCCFence property is set to true\n        if (Boolean.TRUE.equals(businessActionContext.getActionContext(Constants.USE_TCC_FENCE))) {\n            try {\n                result = TCCFenceHandler.commitFence(commitMethod, targetTCCBean, xid, branchId, args);\n            } catch (SkipCallbackWrapperException | UndeclaredThrowableException e) {\n                throw e.getCause();\n            }\n        } else {\n        }\n        LOGGER.info("TCC resource commit result : {}, xid: {}, branchId: {}, resourceId: {}", result, xid, branchId, resourceId);\n        return result ? BranchStatus.PhaseTwo_Committed : BranchStatus.PhaseTwo_CommitFailed_Retryable;\n    } catch (Throwable t) {\n        return BranchStatus.PhaseTwo_CommitFailed_Retryable;\n    }\n}\n')),(0,r.kt)("p",null,"The above code shows that when executing the commit method of the branch transaction, it first checks if the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTCCFence")," property is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". If it is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", it follows the ",(0,r.kt)("inlineCode",{parentName:"p"},"commitFence")," logic in the ",(0,r.kt)("inlineCode",{parentName:"p"},"TCCFenceHandler")," class; otherwise, it follows the normal commit logic."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"commitFence")," method in the ",(0,r.kt)("inlineCode",{parentName:"p"},"TCCFenceHandler")," class calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"commitFence")," method of the same class. The code is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},'public static boolean commitFence(Method commitMethod, Object targetTCCBean,\n                                  String xid, Long branchId, Object[] args) {\n    return transactionTemplate.execute(status -> {\n        try {\n            Connection conn = DataSourceUtils.getConnection(dataSource);\n            TCCFenceDO tccFenceDO = TCC_FENCE_DAO.queryTCCFenceDO(conn, xid, branchId);\n            if (tccFenceDO == null) {\n                throw new TCCFenceException(String.format("TCC fence record not exists, commit fence method failed. xid= %s, branchId= %s", xid, branchId),\n                        FrameworkErrorCode.RecordAlreadyExists);\n            }\n            if (TCCFenceConstant.STATUS_COMMITTED == tccFenceDO.getStatus()) {\n                LOGGER.info("Branch transaction has already committed before. idempotency rejected. xid: {}, branchId: {}, status: {}", xid, branchId, tccFenceDO.getStatus());\n                return true;\n            }\n            if (TCCFenceConstant.STATUS_ROLLBACKED == tccFenceDO.getStatus() || TCCFenceConstant.STATUS_SUSPENDED == tccFenceDO.getStatus()) {\n                if (LOGGER.isWarnEnabled()) {\n                    LOGGER.warn("Branch transaction status is unexpected. xid: {}, branchId: {}, status: {}", xid, branchId, tccFenceDO.getStatus());\n                }\n                return false;\n            }\n            return updateStatusAndInvokeTargetMethod(conn, commitMethod, targetTCCBean, xid, branchId, TCCFenceConstant.STATUS_COMMITTED, status, args);\n        } catch (Throwable t) {\n            status.setRollbackOnly();\n            throw new SkipCallbackWrapperException(t);\n        }\n    });\n}\n')),(0,r.kt)("p",null,"From the code, we can see that when committing the transaction, it first checks if there is a record in the ",(0,r.kt)("inlineCode",{parentName:"p"},"tcc_fence_log")," table. If a record exists, it checks the transaction execution status and returns. This ensures idempotence by avoiding duplicate commits if the transaction status is already ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS_COMMITTED"),". If there is no record in the ",(0,r.kt)("inlineCode",{parentName:"p"},"tcc_fence_log")," table, a new record is inserted for later retry detection."),(0,r.kt)("p",null,"The rollback logic is similar to the commit logic and is implemented in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rollbackFence")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"TCCFenceHandler")," class."),(0,r.kt)("h3",{id:"42-empty-rollback"},"4.2 Empty Rollback"),(0,r.kt)("p",null,"In the scenario shown in the following diagram, the account service consists of a cluster of two nodes. During the try phase, the account service on Node 1 encounters a failure. Without considering retries, the global transaction must reach the end state, requiring a cancel operation to be performed on the account service."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fence-empty-rollback",src:n(79460).Z,width:"591",height:"681"})),(0,r.kt)("p",null,"Seata's solution is to insert a record into the ",(0,r.kt)("inlineCode",{parentName:"p"},"tcc_fence_log")," table during the try phase, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," field set to ",(0,r.kt)("inlineCode",{parentName:"p"},"STATUS_TRIED"),". During the rollback phase, it checks if the record exists, and if it doesn't, the rollback operation is not executed. The code is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},'//TCCFenceHandler \npublic static Object prepareFence(String xid, Long branchId, String actionName, Callback<Object> targetCallback) {\n    return transactionTemplate.execute(status -> {\n        try {\n            Connection conn = DataSourceUtils.getConnection(dataSource);\n            boolean result = insertTCCFenceLog(conn, xid, branchId, actionName, TCCFenceConstant.STATUS_TRIED);\n            LOGGER.info("TCC fence prepare result: {}. xid: {}, branchId: {}", result, xid, branchId);\n            if (result) {\n                return targetCallback.execute();\n            } else {\n                throw new TCCFenceException(String.format("Insert tcc fence record error, prepare fence failed. xid= %s, branchId= %s", xid, branchId),\n                        FrameworkErrorCode.InsertRecordError);\n            }\n        } catch (TCCFenceException e) {\n        } catch (Throwable t) {\n        }\n    });\n}\n')),(0,r.kt)("p",null,"The processing logic in the Rollback phase is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},'//TCCFenceHandler \npublic static boolean rollbackFence(Method rollbackMethod, Object targetTCCBean,\n                                    String xid, Long branchId, Object[] args, String actionName) {\n    return transactionTemplate.execute(status -> {\n        try {\n            Connection conn = DataSourceUtils.getConnection(dataSource);\n            TCCFenceDO tccFenceDO = TCC_FENCE_DAO.queryTCCFenceDO(conn, xid, branchId);\n            // non_rollback\n            if (tccFenceDO == null) {\n                //The rollback logic is not executed\n                return true;\n            } else {\n                if (TCCFenceConstant.STATUS_ROLLBACKED == tccFenceDO.getStatus() || TCCFenceConstant.STATUS_SUSPENDED == tccFenceDO.getStatus()) {\n                    LOGGER.info("Branch transaction had already rollbacked before, idempotency rejected. xid: {}, branchId: {}, status: {}", xid, branchId, tccFenceDO.getStatus());\n                    return true;\n                }\n                if (TCCFenceConstant.STATUS_COMMITTED == tccFenceDO.getStatus()) {\n                    if (LOGGER.isWarnEnabled()) {\n                        LOGGER.warn("Branch transaction status is unexpected. xid: {}, branchId: {}, status: {}", xid, branchId, tccFenceDO.getStatus());\n                    }\n                    return false;\n                }\n            }\n            return updateStatusAndInvokeTargetMethod(conn, rollbackMethod, targetTCCBean, xid, branchId, TCCFenceConstant.STATUS_ROLLBACKED, status, args);\n        } catch (Throwable t) {\n            status.setRollbackOnly();\n            throw new SkipCallbackWrapperException(t);\n        }\n    });\n}\n')),(0,r.kt)("p",null,"updateStatusAndInvokeTargetMethod method executes the following SQL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"update tcc_fence_log set status = ?, gmt_modified = ?\n    where xid = ? and  branch_id = ? and status = ? ;\n")),(0,r.kt)("p",null,"As we can see, it updates the value of the status field in the tcc_fence_log table from STATUS_TRIED to STATUS_ROLLBACKED. If the update is successful, the rollback logic is executed."),(0,r.kt)("h3",{id:"43-hanging"},"4.3 Hanging"),(0,r.kt)("p",null,"Hanging refers to a situation where, due to network issues, the RM did not receive the try instruction initially, but after executing the rollback, the RM receives the try instruction and successfully reserves resources. This leads to the inability to release the reserved resources, as shown in the following diagram:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fence-suspend",src:n(57915).Z,width:"451",height:"193"})),(0,r.kt)("p",null,"Seata solves this problem by checking if there is a record for the current xid in the tcc_fence_log table before executing the rollback method. If there is no record, it inserts a new record into the tcc_fence_log table with the status STATUS_SUSPENDED and does not perform the rollback operation. The code is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},"public static boolean rollbackFence(Method rollbackMethod, Object targetTCCBean,\n                                    String xid, Long branchId, Object[] args, String actionName) {\n    return transactionTemplate.execute(status -> {\n        try {\n            Connection conn = DataSourceUtils.getConnection(dataSource);\n            TCCFenceDO tccFenceDO = TCC_FENCE_DAO.queryTCCFenceDO(conn, xid, branchId);\n            // non_rollback\n            if (tccFenceDO == null) {\n                boolean result = insertTCCFenceLog(conn, xid, branchId, actionName, TCCFenceConstant.STATUS_SUSPENDED);\n                return true;\n            } else {\n            }\n            return updateStatusAndInvokeTargetMethod(conn, rollbackMethod, targetTCCBean, xid, branchId, TCCFenceConstant.STATUS_ROLLBACKED, status, args);\n        } catch (Throwable t) {\n        }\n    });\n}\n")),(0,r.kt)("p",null,"When executing the try phase method, a record for the current xid is first inserted into the tcc_fence_log table, which causes a primary key conflict. The code is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},'//TCCFenceHandler \npublic static Object prepareFence(String xid, Long branchId, String actionName, Callback<Object> targetCallback) {\n    return transactionTemplate.execute(status -> {\n        try {\n            Connection conn = DataSourceUtils.getConnection(dataSource);\n            boolean result = insertTCCFenceLog(conn, xid, branchId, actionName, TCCFenceConstant.STATUS_TRIED);\n        } catch (TCCFenceException e) {\n            if (e.getErrcode() == FrameworkErrorCode.DuplicateKeyException) {\n                LOGGER.error("Branch transaction has already rollbacked before,prepare fence failed. xid= {},branchId = {}", xid, branchId);\n                addToLogCleanQueue(xid, branchId);\n            }\n            status.setRollbackOnly();\n            throw new SkipCallbackWrapperException(e);\n        } catch (Throwable t) {\n        }\n    });\n}\n')),(0,r.kt)("p",null,"Note: The queryTCCFenceDO method in the SQL statement uses for update, so there is no need to worry about not being able to determine the execution result of the local transaction in the rollback method due to the inability to obtain records from the tcc_fence_log table."),(0,r.kt)("h3",{id:"5-summary"},"5 Summary"),(0,r.kt)("p",null,"TCC mode is a very important transaction mode in distributed transactions. However, idempotence, hanging, and empty rollback have always been issues that need to be considered in TCC mode. The Seata framework perfectly solves these problems in version 1.5.1.\nThe operations on the tcc_fence_log table also need to consider transaction control. Seata uses a proxy data source to execute the operations on the tcc_fence_log table and the RM business operations in the same local transaction. This ensures that the local operations and the operations on the tcc_fence_log table succeed or fail together."))}u.isMDXComponent=!0},79460:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fence-empty-rollback-55e0c44f8e67d5df91c0f930860baa1f.png"},65228:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fence-fiffrent-db-1f7a834639aa755d73fa2af435c4f042.png"},57915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fence-suspend-054f87611ab16153c07bd28495c6902c.png"},35840:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fence-try-cancel-eafbbb62134fe4e3ed61bdc2a47461b9.png"},73754:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fence-try-commit-453b9a1e280200057448436ecd7eef27.png"}}]);