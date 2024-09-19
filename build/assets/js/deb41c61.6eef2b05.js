"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[85143],{90890:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=a(74848),t=a(28453);const s={title:"Seata XA Mode",keywords:["Seata"],description:"Seata XA Mode"},i="Seata XA Mode",o={id:"dev/mode/xa-mode",title:"Seata XA Mode",description:"Seata XA Mode",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.1/dev/mode/xa-mode.md",sourceDirName:"dev/mode",slug:"/dev/mode/xa-mode",permalink:"/docs/dev/mode/xa-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.1/dev/mode/xa-mode.md",tags:[],version:"v2.1",frontMatter:{title:"Seata XA Mode",keywords:["Seata"],description:"Seata XA Mode"},sidebar:"docs",previous:{title:"Seata Saga Mode",permalink:"/docs/dev/mode/saga-mode"},next:{title:"Overview of Domain Model",permalink:"/docs/dev/domain/overviewDomainModel"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overall Mechanism",id:"overall-mechanism",level:2},{value:"1. Overall Operation Mechanism",id:"1-overall-operation-mechanism",level:4},{value:"2. Data Source Proxy",id:"2-data-source-proxy",level:4},{value:"3. Branch Registration",id:"3-branch-registration",level:4},{value:"How to use XA Mode",id:"how-to-use-xa-mode",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"seata-xa-mode",children:"Seata XA Mode"}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Databases that support XA transaction."}),"\n",(0,r.jsx)(n.li,{children:"Java applications that access database via JDBC."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"overall-mechanism",children:"Overall Mechanism"}),"\n",(0,r.jsx)(n.p,{children:"In the distributed transaction framework defined by Seata, XA mode is a transaction mode that manages branch transactions using the XA protocol mechanism, leveraging transaction resources such as databases and message services with XA protocol support."}),"\n",(0,r.jsx)("img",{src:"https://img.alicdn.com/tfs/TB1hSpccIVl614jSZKPXXaGjpXa-1330-924.png",style:{zoom:"50%"}}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Execution Phase:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Rollbackable: Business SQL operations are placed in XA branches, and the XA protocol support ensures ",(0,r.jsx)(n.em,{children:"rollbackability"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Persistent: After XA branches are completed, XA prepare is executed, and again, XA protocol support ensures ",(0,r.jsx)(n.em,{children:"persistence"})," (i.e., no unexpected situations will prevent rollback)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Completion Phase:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Branch Commit: Execute XA branch commit."}),"\n",(0,r.jsx)(n.li,{children:"Branch Rollback: Execute XA branch rollback."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"working-mechanism",children:"Working Mechanism"}),"\n",(0,r.jsx)(n.h4,{id:"1-overall-operation-mechanism",children:"1. Overall Operation Mechanism"}),"\n",(0,r.jsx)(n.p,{children:"XA mode runs within the transaction framework defined by Seata:"}),"\n",(0,r.jsx)("img",{src:"https://img.alicdn.com/tfs/TB1uM2OaSslXu8jSZFuXXXg7FXa-1330-958.png",alt:"xa-fw",style:{zoom:"50%"}}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Execution Phase (E xecute):"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"XA start/XA end/XA prepare + SQL + Register Branch"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Completion Phase (F inish):"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"XA commit/XA rollback"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"2-data-source-proxy",children:"2. Data Source Proxy"}),"\n",(0,r.jsx)(n.p,{children:"XA mode requires XAConnection."}),"\n",(0,r.jsx)(n.p,{children:"There are two ways to obtain XAConnection:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Option 1: Developers are required to configure XADataSource."}),"\n",(0,r.jsx)(n.li,{children:"Option 2: Create it based on the developer's regular DataSource."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The first method adds cognitive burden to developers, as they need to learn and use XADataSource specifically for XA mode, which contradicts the design goal of transparent XA programming."}),"\n",(0,r.jsx)(n.p,{children:"The second method is more developer-friendly. Like the AT mode, developers do not need to worry about any XA-related issues. They can maintain the local programming model."}),"\n",(0,r.jsx)(n.p,{children:"We prioritize designing and implementing the second method: DataSource proxy creates the corresponding XAConnection based on the regular JDBC connection obtained from the regular data source."}),"\n",(0,r.jsx)(n.p,{children:"Compared to the data source proxy mechanism in the AT mode, it looks like this:"}),"\n",(0,r.jsx)("img",{src:"https://img.alicdn.com/tfs/TB11_LJcggP7K4jSZFqXXamhVXa-1564-894.png",alt:"ds1",style:{zoom:"50%"}}),"\n",(0,r.jsx)(n.p,{children:"However, the second method also has its limitations: it cannot guarantee compatibility correctness."}),"\n",(0,r.jsx)(n.p,{children:"In fact, this method is what database drivers should do. The implementation mechanisms of database drivers from different vendors and versions are vendor-specific. We can only ensure correctness on well-tested driver programs. Differences in the versions of driver programs used by developers may lead to the failure of the mechanism."}),"\n",(0,r.jsxs)(n.p,{children:["This is particularly evident with Oracle. See the Druid issue: ",(0,r.jsx)(n.a,{href:"https://github.com/alibaba/druid/issues/3707",children:"https://github.com/alibaba/druid/issues/3707"})]}),"\n",(0,r.jsx)(n.p,{children:"Taking all factors into consideration, the data source proxy design for XA mode needs to support the first method: proxy based on XADataSource."}),"\n",(0,r.jsx)(n.p,{children:"Compared to the data source proxy mechanism in the AT mode, it looks like this:"}),"\n",(0,r.jsx)("img",{src:"https://img.alicdn.com/tfs/TB1qJ57XZieb18jSZFvXXaI3FXa-1564-894.png",alt:"ds2",style:{zoom:"50%"}}),"\n",(0,r.jsx)(n.h4,{id:"3-branch-registration",children:"3. Branch Registration"}),"\n",(0,r.jsx)(n.p,{children:"XA start requires an Xid parameter."}),"\n",(0,r.jsx)(n.p,{children:"This parameter needs to be associated with the Seata global transaction's XID and BranchId so that the TC can drive the XA branch's commit or rollback."}),"\n",(0,r.jsx)(n.p,{children:"Currently, Seata's BranchId is generated uniformly during branch registration. Therefore, the timing of XA mode branch registration needs to be before XA start."}),"\n",(0,r.jsx)(n.p,{children:"A possible optimization in the future is:"}),"\n",(0,r.jsx)(n.p,{children:"Delay branch registration as much as possible. Similar to the AT mode, we register the branch just before local transaction submission to avoid registering meaningless branches in case of branch execution failure."}),"\n",(0,r.jsx)(n.p,{children:"This optimization direction requires changes to the BranchId generation mechanism. BranchId should not be generated through branch registration but should be generated separately and then used to register the branch."}),"\n",(0,r.jsx)(n.h2,{id:"how-to-use-xa-mode",children:"How to use XA Mode"}),"\n",(0,r.jsx)(n.p,{children:"From a programming model perspective, XA mode is identical to AT mode."}),"\n",(0,r.jsxs)(n.p,{children:["You can refer to Seata's official sample: ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata-samples/tree/master/seata-xa",children:"seata-xa"})]}),"\n",(0,r.jsx)(n.p,{children:"In the sample, the upper-level programming model is the same as the AT mode. You only need to modify the data source proxy to switch between XA mode and AT mode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Bean("dataSource")\npublic DataSource dataSource(DruidDataSource druidDataSource) {\n    // DataSourceProxy for AT mode\n    // return new DataSourceProxy(druidDataSource);\n\n    // DataSourceProxyXA for XA mode\n    return new DataSourceProxyXA(druidDataSource);\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var r=a(96540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);