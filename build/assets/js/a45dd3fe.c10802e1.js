"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[16243],{68008:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=i(74848),a=i(28453);const o={title:"Overview of Domain Model",keywords:["Seata","domain model"],description:"Seata domain model."},s="Overview of Domain Model",r={id:"dev/domain/overviewDomainModel",title:"Overview of Domain Model",description:"Seata domain model.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.1/dev/domain/overviewDomainModel.md",sourceDirName:"dev/domain",slug:"/dev/domain/overviewDomainModel",permalink:"/docs/dev/domain/overviewDomainModel",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.1/dev/domain/overviewDomainModel.md",tags:[],version:"v2.1",frontMatter:{title:"Overview of Domain Model",keywords:["Seata","domain model"],description:"Seata domain model."},sidebar:"docs",previous:{title:"Seata XA Mode",permalink:"/docs/dev/mode/xa-mode"},next:{title:"Transaction Manager(TM)",permalink:"/docs/dev/domain/tm"}},c={},d=[{value:"Seata Domain Model",id:"seata-domain-model",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"overview-of-domain-model",children:"Overview of Domain Model"}),"\n",(0,t.jsx)(n.p,{children:"This article introduces the domain model of Seata (Simple Extensible Autonomous Transaction Architecture)."}),"\n",(0,t.jsx)(n.p,{children:"Seata is a distributed transaction product designed to address data consistency issues in a distributed architecture. It uses two-phase commit (2PC) or eventual consistency based on the BASE theory to achieve transaction consistency. For a detailed explanation of the transaction modes, please refer to the Transaction Modes section in the developer's guide. Seata offers advantages such as XA and AT support without business intrusion, TCC decoupled from specific service frameworks, independence from underlying RPC protocols, and storage media. It also provides highly customizable SAGA mode, eventual consistency, and high performance. Seata is capable of effectively establishing secure transaction protection for different business scenarios on the Seata distributed transaction platform."}),"\n",(0,t.jsx)(n.h2,{id:"seata-domain-model",children:"Seata Domain Model"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.alicdn.com/tfs/TB19qmhOrY1gK0jSZTEXXXDQVXa-1330-924.png",alt:"image"})}),"\n",(0,t.jsx)(n.p,{children:"As shown in the diagram above, the lifecycle of a transaction in Seata mainly consists of three parts: Begin (TM), Registry (RM), and Commit/Rollback (TM & TC)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Transaction Creation"})}),"\n",(0,t.jsx)(n.p,{children:"Transaction Manager (TM):"}),"\n",(0,t.jsx)(n.p,{children:"This is an entity in Seata used for creating and determining the transaction result. It is typically integrated into the upstream of the business invocation chain."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Branch Transaction"})}),"\n",(0,t.jsx)(n.p,{children:"Resource Manager (RM):"}),"\n",(0,t.jsx)(n.p,{children:"This is an entity in Seata used for managing resources. In most cases, it is equivalent to a provider in a microservice, managing resources within the service, such as database resources."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Transaction Determination"})}),"\n",(0,t.jsx)(n.p,{children:"Transaction Coordinator (TC):"}),"\n",(0,t.jsx)(n.p,{children:"This is an entity in Seata used for coordinating transactions in the two-phase commit (2PC) mode (except for SAGA). It can be driven by the transaction manager or self-driven for the two-phase transaction behavior."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Commit:"}),"\n",(0,t.jsx)(n.p,{children:'In Seata, when the transaction manager determines to commit, TC initiates the two-phase commit behavior for the transaction. For example, in TCC mode, it\'s the "confirm" step, in AT mode, it\'s the "undo log delete," and in XA mode, it\'s "XA Commit."'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Rollback:"}),"\n",(0,t.jsx)(n.p,{children:'In Seata, when the transaction manager determines to roll back, TC initiates the two-phase rollback behavior for the transaction. For example, in TCC mode, it\'s the "cancel" step, in AT mode, it\'s "undo," and in XA mode, it\'s "XA Rollback."'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Timeout Rollback:"}),"\n",(0,t.jsx)(n.p,{children:"In Seata, when the transaction manager specifies a timeout for a created transaction and that timeout is reached without determination, TC will actively perform a timeout rollback for transactions that have exceeded the timeout. The behavior for timeouts is the same as the Rollback behavior described above."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The three scenarios mentioned above are the transaction processing cases involving TC. These three states can expand into more transaction states. ",(0,t.jsx)(n.a,{href:"/docs/user/appendix/global-transaction-status",children:"For specific details, you can refer to this link"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"High Availability"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/user/txgroup/transaction-group",children:"Transaction Group"})," (tx-service-group):"]}),"\n",(0,t.jsx)(n.p,{children:"Seata's logical resource grouping allows applications (clients) to define transaction groups based on their microservices' needs, with each group having a unique name."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/user/registry",children:"Service Discovery"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"Seata supports service discovery for Eureka, Nacos, Consul, Etcd, ZooKeeper, Sofa, Redis, and file-based (using a specific file) configurations."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(96540);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);