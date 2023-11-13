"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[71391],{3905:(t,a,e)=>{e.d(a,{Zo:()=>m,kt:()=>k});var n=e(67294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var s=n.createContext({}),c=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},m=function(t){var a=c(t.components);return n.createElement(s.Provider,{value:a},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),p=c(e),u=l,k=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return e?n.createElement(k,i(i({ref:a},m),{},{components:e})):n.createElement(k,i({ref:a},m))}));function k(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=t,o[p]="string"==typeof t?t:l,i[1]=o;for(var c=2;c<r;c++)i[c]=e[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},19797:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=e(87462),l=(e(67294),e(3905));const r={title:"Global Transaction Status",keywords:["Seata","Transaction Status"],description:"Global Transaction Status, Branch Transaction Status"},i="Global Transaction Status Table",o={unversionedId:"user/appendix/global-transaction-status",id:"version-v1.1/user/appendix/global-transaction-status",title:"Global Transaction Status",description:"Global Transaction Status, Branch Transaction Status",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1/user/appendix/global-transaction-status.md",sourceDirName:"user/appendix",slug:"/user/appendix/global-transaction-status",permalink:"/en/docs/v1.1/user/appendix/global-transaction-status",draft:!1,tags:[],version:"v1.1",frontMatter:{title:"Global Transaction Status",keywords:["Seata","Transaction Status"],description:"Global Transaction Status, Branch Transaction Status"},sidebar:"docs",previous:{title:"Performance Testing Report",permalink:"/en/docs/v1.1/user/performance"},next:{title:"Transaction Isolation",permalink:"/en/docs/v1.1/user/appendix/isolation"}},s={},c=[],m={toc:c},p="wrapper";function d(t){let{components:a,...e}=t;return(0,l.kt)(p,(0,n.Z)({},m,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"global-transaction-status-table"},"Global Transaction Status Table"),(0,l.kt)("p",null,"Taking the db mode as an example, global_table is the global transaction table of Seata. You can determine which state the global transaction is in by observing the status field in the global_table."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Global transaction begins (Begin)"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"This status can accept new branch transaction registration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Global transaction committing (Committing)"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"This status can change at any time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Global transaction commit retry (CommitRetry)"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Retry commit after resolving commit exceptions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Global transaction rolling back (Rollbacking)"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Rolling back global transaction in progress")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Global transaction rollback retrying (RollbackRetry)"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Retry transaction rollback after resolving global rollback exceptions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Global transaction timeout rollbacking (TimoutRollbacking)"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{href:"#TimeoutRollbacking_description",target:"_self"},"Global transaction timeout rollbacking"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Global transaction timeout rollback retrying (TimeoutRollbackRetrying)"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"Global transaction timeout rollback retrying")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Asynchronous committing (AsyncCommitting)"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"Asynchronous commit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase committed (Committed)"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase committed, the global transaction status will not change after this state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase commit failed (CommitFailed)"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase commit failed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase global rollback (Rollbacked)"),(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase global rollback")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase global rollback failed (RollbackFailed)"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase global rollback failed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase timeout rollback (TimeoutRollbacked)"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase timeout rollback")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase timeout rollback failed (TimeoutRollbackFailed)"),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase timeout rollback failed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Global transaction finished (Finished)"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"Global transaction finished")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase commit retry timeout (CommitRetryTimeout)"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase commit failed due to exceeding retry time limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase rollback retry timeout (RollbackRetryTimeout)"),(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null},"Two-phase rollback failed due to exceeding retry time limit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unknown status"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Unknown status")))),(0,l.kt)("h1",{id:"branch-transaction-status-table"},"Branch Transaction Status Table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Branch Transaction Registered"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Register branch transaction with TC (Registered)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Branch Transaction Phase One Done (PhaseOne_Done)"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Branch transaction phase one business logic completed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Branch Transaction Phase One Failed (PhaseOne_Failed)"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Branch transaction phase one business logic failed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Branch Transaction Phase One Timeout (PhaseOne_Timeout)"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Branch transaction phase one processing timed out")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Branch Transaction Phase Two Committed (PhaseTwo_Committed)"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Branch transaction phase two committed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Branch Transaction Phase Two Commit Failed Retryable (PhaseTwo_CommitFailed_Retryable)"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Branch transaction phase two commit failed and retriable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Branch Transaction Phase Two Commit Failed Unretryable (PhaseTwo_CommitFailed_Unretryable)"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"Branch transaction phase two commit failed and not retriable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Branch Transaction Phase Two Rolled Back (PhaseTwo_Rollbacked)"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"Branch transaction phase two rolled back")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Branch Transaction Phase Two Rollback Failed Retryable (PhaseTwo_RollbackFailed_Retryable)"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"Branch transaction phase two rollback failed and retriable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Branch Transaction Phase Two Rollback Failed Unretryable (PhaseTwo_RollbackFailed_Unretryable)"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"Branch transaction phase two rollback failed and not retriable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unknown Status"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Unknown status")))),(0,l.kt)("p",null,"For better understanding, below are additional descriptions for individual states:"),(0,l.kt)("h3",{id:"TimeoutRollbacking_description"}," Global Transaction Timeout Rollbacking (TimeoutRollbacking) "),"How does it occur?",(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"When a seata global transaction is unable to complete business logic during execution.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"A scheduled task in TC (specifically used to find timed out global transactions) discovers that the global transaction has not completed rollback, it will change this global transaction to ",(0,l.kt)("strong",{parentName:"p"},"Global Transaction Timeout Rollbacking (TimeoutRollbacking)")," and start rollback, until the global_table data is deleted after rollback is completed."),(0,l.kt)("p",{parentName:"li"},"Recommendation: When you find a global transaction in this state, investigate why the business cannot complete within the specified time. If it is indeed unable to complete, the global transaction timeout should be extended. (If everything is normal, please check if the tc cluster's time zone is consistent with the database. If not, please make it consistent)."))))}d.isMDXComponent=!0}}]);