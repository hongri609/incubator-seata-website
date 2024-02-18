"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[30072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u5feb\u901f\u542f\u52a8",keywords:["Seata"],description:"Seata \u5feb\u901f\u5f00\u59cb\u3002"},i="\u5feb\u901f\u5f00\u59cb",l={unversionedId:"user/quickstart",id:"version-v1.2/user/quickstart",title:"\u5feb\u901f\u542f\u52a8",description:"Seata \u5feb\u901f\u5f00\u59cb\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.2/user/quickstart.md",sourceDirName:"user",slug:"/user/quickstart",permalink:"/zh-cn/docs/v1.2/user/quickstart",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.2/user/quickstart.md",tags:[],version:"v1.2",frontMatter:{title:"\u5feb\u901f\u542f\u52a8",keywords:["Seata"],description:"Seata \u5feb\u901f\u5f00\u59cb\u3002"},sidebar:"docs",previous:{title:"FAQ",permalink:"/zh-cn/docs/v1.2/overview/faq"},next:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-cn/docs/v1.2/user/configurations"}},c={},u=[{value:"\u7528\u4f8b",id:"\u7528\u4f8b",level:2},{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",level:3},{value:"\u4ed3\u50a8\u670d\u52a1",id:"\u4ed3\u50a8\u670d\u52a1",level:3},{value:"\u8ba2\u5355\u670d\u52a1",id:"\u8ba2\u5355\u670d\u52a1",level:3},{value:"\u5e10\u6237\u670d\u52a1",id:"\u5e10\u6237\u670d\u52a1",level:3},{value:"\u4e3b\u8981\u4e1a\u52a1\u903b\u8f91",id:"\u4e3b\u8981\u4e1a\u52a1\u903b\u8f91",level:3},{value:"SEATA \u7684\u5206\u5e03\u5f0f\u4ea4\u6613\u89e3\u51b3\u65b9\u6848",id:"seata-\u7684\u5206\u5e03\u5f0f\u4ea4\u6613\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u7531Dubbo + SEATA\u63d0\u4f9b\u652f\u6301\u7684\u793a\u4f8b",id:"\u7531dubbo--seata\u63d0\u4f9b\u652f\u6301\u7684\u793a\u4f8b",level:2},{value:"\u6b65\u9aa4 1\uff1a\u5efa\u7acb\u6570\u636e\u5e93",id:"\u6b65\u9aa4-1\u5efa\u7acb\u6570\u636e\u5e93",level:3},{value:"\u6b65\u9aa4 2\uff1a\u521b\u5efa UNDO_LOG \u8868",id:"\u6b65\u9aa4-2\u521b\u5efa-undo_log-\u8868",level:3},{value:"\u6b65\u9aa4 3\uff1a\u4e3a\u793a\u4f8b\u4e1a\u52a1\u521b\u5efa\u8868",id:"\u6b65\u9aa4-3\u4e3a\u793a\u4f8b\u4e1a\u52a1\u521b\u5efa\u8868",level:3},{value:"\u6b65\u9aa4 4: \u542f\u52a8\u670d\u52a1",id:"\u6b65\u9aa4-4-\u542f\u52a8\u670d\u52a1",level:3},{value:"\u6b65\u9aa4 5: \u8fd0\u884c\u793a\u4f8b",id:"\u6b65\u9aa4-5-\u8fd0\u884c\u793a\u4f8b",level:3}],s={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u4ece\u4e00\u4e2a\u5fae\u670d\u52a1\u793a\u4f8b\u5f00\u59cb\u3002"),(0,a.kt)("h2",{id:"\u7528\u4f8b"},"\u7528\u4f8b"),(0,a.kt)("p",null,"\u7528\u6237\u8d2d\u4e70\u5546\u54c1\u7684\u4e1a\u52a1\u903b\u8f91\u3002\u6574\u4e2a\u4e1a\u52a1\u903b\u8f91\u75313\u4e2a\u5fae\u670d\u52a1\u63d0\u4f9b\u652f\u6301\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ed3\u50a8\u670d\u52a1\uff1a\u5bf9\u7ed9\u5b9a\u7684\u5546\u54c1\u6263\u9664\u4ed3\u50a8\u6570\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8ba2\u5355\u670d\u52a1\uff1a\u6839\u636e\u91c7\u8d2d\u9700\u6c42\u521b\u5efa\u8ba2\u5355\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5e10\u6237\u670d\u52a1\uff1a\u4ece\u7528\u6237\u5e10\u6237\u4e2d\u6263\u9664\u4f59\u989d\u3002")),(0,a.kt)("h3",{id:"\u67b6\u6784\u56fe"},"\u67b6\u6784\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture",src:n(15414).Z,width:"1732",height:"940"})," "),(0,a.kt)("h3",{id:"\u4ed3\u50a8\u670d\u52a1"},"\u4ed3\u50a8\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface StorageService {\n\n    /**\n     * \u6263\u9664\u5b58\u50a8\u6570\u91cf\n     */\n    void deduct(String commodityCode, int count);\n}\n")),(0,a.kt)("h3",{id:"\u8ba2\u5355\u670d\u52a1"},"\u8ba2\u5355\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface OrderService {\n\n    /**\n     * \u521b\u5efa\u8ba2\u5355\n     */\n    Order create(String userId, String commodityCode, int orderCount);\n}\n")),(0,a.kt)("h3",{id:"\u5e10\u6237\u670d\u52a1"},"\u5e10\u6237\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface AccountService {\n\n    /**\n     * \u4ece\u7528\u6237\u8d26\u6237\u4e2d\u501f\u51fa\n     */\n    void debit(String userId, int money);\n}\n")),(0,a.kt)("h3",{id:"\u4e3b\u8981\u4e1a\u52a1\u903b\u8f91"},"\u4e3b\u8981\u4e1a\u52a1\u903b\u8f91"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class BusinessServiceImpl implements BusinessService {\n\n    private StorageService storageService;\n\n    private OrderService orderService;\n\n    /**\n     * \u91c7\u8d2d\n     */\n    public void purchase(String userId, String commodityCode, int orderCount) {\n\n        storageService.deduct(commodityCode, orderCount);\n\n        orderService.create(userId, commodityCode, orderCount);\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class OrderServiceImpl implements OrderService {\n\n    private OrderDAO orderDAO;\n\n    private AccountService accountService;\n\n    public Order create(String userId, String commodityCode, int orderCount) {\n\n        int orderMoney = calculate(commodityCode, orderCount);\n\n        accountService.debit(userId, orderMoney);\n\n        Order order = new Order();\n        order.userId = userId;\n        order.commodityCode = commodityCode;\n        order.count = orderCount;\n        order.money = orderMoney;\n\n        // INSERT INTO orders ...\n        return orderDAO.insert(order);\n    }\n}\n")),(0,a.kt)("h2",{id:"seata-\u7684\u5206\u5e03\u5f0f\u4ea4\u6613\u89e3\u51b3\u65b9\u6848"},"SEATA \u7684\u5206\u5e03\u5f0f\u4ea4\u6613\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(59753).Z,width:"868",height:"473"}),"\n\u6211\u4eec\u53ea\u9700\u8981\u4f7f\u7528\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"@GlobalTransactional")," \u6ce8\u89e3\u5728\u4e1a\u52a1\u65b9\u6cd5\u4e0a: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\n    @GlobalTransactional\n    public void purchase(String userId, String commodityCode, int orderCount) {\n        ......\n    }\n")),(0,a.kt)("h2",{id:"\u7531dubbo--seata\u63d0\u4f9b\u652f\u6301\u7684\u793a\u4f8b"},"\u7531Dubbo + SEATA\u63d0\u4f9b\u652f\u6301\u7684\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u6b65\u9aa4-1\u5efa\u7acb\u6570\u636e\u5e93"},"\u6b65\u9aa4 1\uff1a\u5efa\u7acb\u6570\u636e\u5e93"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8981\u6c42\uff1a\u5177\u6709InnoDB\u5f15\u64ce\u7684MySQL\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u5b9e\u9645\u4e0a\uff0c\u5728\u793a\u4f8b\u7528\u4f8b\u4e2d\uff0c\u8fd93\u4e2a\u670d\u52a1\u5e94\u8be5\u67093\u4e2a\u6570\u636e\u5e93\u3002 \u4f46\u662f\uff0c\u4e3a\u4e86\u7b80\u5355\u8d77\u89c1\uff0c\u6211\u4eec\u53ea\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93\u5e76\u914d\u7f6e3\u4e2a\u6570\u636e\u6e90\u3002 "),(0,a.kt)("p",null,"\u4f7f\u7528\u60a8\u521a\u521b\u5efa\u7684\u6570\u636e\u5e93 URL/username/password \u4fee\u6539Spring XML\u3002"),(0,a.kt)("p",null,"dubbo-account-service.xml\ndubbo-order-service.xml\ndubbo-storage-service.xml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'        <property name="url" value="jdbc:mysql://x.x.x.x:3306/xxx" />\n        <property name="username" value="xxx" />\n        <property name="password" value="xxx" />\n')),(0,a.kt)("h3",{id:"\u6b65\u9aa4-2\u521b\u5efa-undo_log-\u8868"},"\u6b65\u9aa4 2\uff1a\u521b\u5efa UNDO_LOG \u8868"),(0,a.kt)("p",null,"SEATA AT \u6a21\u5f0f\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNDO_LOG")," \u8868\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 github \u83b7\u53d6\u5230\u6307\u5b9a\u7248\u672c\u7684undo log SQL ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/tree/2.x/script/client/at/db"},"\u811a\u672c"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `undo_log`\n(\n    `branch_id`     BIGINT       NOT NULL COMMENT 'branch transaction id',\n    `xid`           VARCHAR(128) NOT NULL COMMENT 'global transaction id',\n    `context`       VARCHAR(128) NOT NULL COMMENT 'undo_log context,such as serialization',\n    `rollback_info` LONGBLOB     NOT NULL COMMENT 'rollback info',\n    `log_status`    INT(11)      NOT NULL COMMENT '0:normal status,1:defense status',\n    `log_created`   DATETIME(6)  NOT NULL COMMENT 'create datetime',\n    `log_modified`  DATETIME(6)  NOT NULL COMMENT 'modify datetime',\n    UNIQUE KEY `ux_undo_log` (`xid`, `branch_id`)\n    ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COMMENT ='AT transaction mode undo table';\nALTER TABLE `undo_log` ADD INDEX `ix_log_created` (`log_created`);\n\n")),(0,a.kt)("h3",{id:"\u6b65\u9aa4-3\u4e3a\u793a\u4f8b\u4e1a\u52a1\u521b\u5efa\u8868"},"\u6b65\u9aa4 3\uff1a\u4e3a\u793a\u4f8b\u4e1a\u52a1\u521b\u5efa\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\nDROP TABLE IF EXISTS `storage_tbl`;\nCREATE TABLE `storage_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `commodity_code` varchar(255) DEFAULT NULL,\n  `count` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY (`commodity_code`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nDROP TABLE IF EXISTS `order_tbl`;\nCREATE TABLE `order_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user_id` varchar(255) DEFAULT NULL,\n  `commodity_code` varchar(255) DEFAULT NULL,\n  `count` int(11) DEFAULT 0,\n  `money` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n\nDROP TABLE IF EXISTS `account_tbl`;\nCREATE TABLE `account_tbl` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `user_id` varchar(255) DEFAULT NULL,\n  `money` int(11) DEFAULT 0,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),(0,a.kt)("h3",{id:"\u6b65\u9aa4-4-\u542f\u52a8\u670d\u52a1"},"\u6b65\u9aa4 4: \u542f\u52a8\u670d\u52a1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ece ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/releases"},"https://github.com/apache/incubator-seata/releases"),",\u4e0b\u8f7d\u670d\u52a1\u5668\u8f6f\u4ef6\u5305\uff0c\u5c06\u5176\u89e3\u538b\u7f29\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Usage: sh seata-server.sh(for linux and mac) or cmd seata-server.bat(for windows) [options]\n  Options:\n    --host, -h\n      The address is expose to registration center and other service can access seata-server via this ip\n      Default: 0.0.0.0\n    --port, -p\n      The port to listen.\n      Default: 8091\n    --storeMode, -m\n      log store mode : file\u3001db\n      Default: file\n    --help\n\ne.g.\n\nsh seata-server.sh -p 8091 -h 127.0.0.1 -m file\n")),(0,a.kt)("h3",{id:"\u6b65\u9aa4-5-\u8fd0\u884c\u793a\u4f8b"},"\u6b65\u9aa4 5: \u8fd0\u884c\u793a\u4f8b"),(0,a.kt)("p",null,"\u793a\u4f8b\u4ed3\u5e93: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata-samples"},"seata-samples")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8 DubboAccountServiceStarter"),(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8 DubboStorageServiceStarter"),(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8 DubboOrderServiceStarter"),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c DubboBusinessTester for demo test")),(0,a.kt)("p",null,"TBD: \u8fd0\u884c\u6f14\u793a\u5e94\u7528\u7a0b\u5e8f\u7684\u811a\u672c"))}p.isMDXComponent=!0},15414:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-6bdb120b83710010167e8b75448505ec.png"},59753:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/solution-1bdadb80e54074aa3088372c17f0244b.png"}}]);