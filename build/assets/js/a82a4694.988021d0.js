"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||l;return n?r.createElement(m,o(o({ref:t},i),{},{components:n})):r.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},37283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={},o="Consul \u6ce8\u518c\u4e2d\u5fc3",s={unversionedId:"user/registry/consul",id:"user/registry/consul",title:"Consul \u6ce8\u518c\u4e2d\u5fc3",description:"Consul \u662f Seata \u7ec4\u4ef6\u4e2d\u91cd\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0",source:"@site/docs/user/registry/consul.md",sourceDirName:"user/registry",slug:"/user/registry/consul",permalink:"/docs/user/registry/consul",draft:!1,tags:[],version:"current",frontMatter:{}},c={},u=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3},{value:"Client \u7aef\u589e\u52a0 Maven \u4f9d\u8d56",id:"client-\u7aef\u589e\u52a0-maven-\u4f9d\u8d56",level:3},{value:"Client\u7aef\u914d\u7f6e",id:"client\u7aef\u914d\u7f6e",level:3}],i={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"consul-\u6ce8\u518c\u4e2d\u5fc3"},"Consul \u6ce8\u518c\u4e2d\u5fc3"),(0,a.kt)("p",null,"Consul \u662f Seata \u7ec4\u4ef6\u4e2d\u91cd\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0"),(0,a.kt)("p",null,"\u672c\u6587\u57fa\u4e8e Seata 1.4.2\uff0c\u628a Seata \u6ce8\u518c\u5230 Consul \u4e0a\uff0c\u4ee5 file \u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3"),(0,a.kt)("p",null,"Consul \u7248\u672c\u5efa\u8bae 1.8+\uff0c\u4e0b\u6587\u4ee5 Consul 1.11.2 \u4e3a\u4f8b"),(0,a.kt)("h2",{id:"\u9884\u5907\u5de5\u4f5c"},"\u9884\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"\u5f53\u60a8\u51c6\u5907\u5c06 ",(0,a.kt)("strong",{parentName:"p"},"Seata")," \u6ce8\u518c\u5230 Consul \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u7ecf\u542f\u52a8 Consul \u670d\u52a1\u3002\u5982\u679c\u60a8\u5c1a\u4e14\u4e0d\u719f\u6089 Consul \u7684\u57fa\u672c\u4f7f\u7528\u7684\u8bdd\uff0c\n\u53ef\u5148\u884c\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://www.consul.io/docs"},"Consul \u5b98\u65b9\u6587\u6863")," "),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u53ea\u60f3\u5feb\u901f\u4f53\u9a8c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b docker \u547d\u4ee4\u542f\u52a8\u4e00\u4e2a Consul \u5bb9\u5668\uff0c\u8f93\u5165 http://localhost:8500 \u8bbf\u95ee Consul \u63a7\u5236\u53f0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name=consul -p 8500:8500 -p 8600:8600/udp consul:1.11.2 agent -dev -client=0.0.0.0 -ui\n")),(0,a.kt)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,a.kt)("p",null,"Seata \u878d\u5408 Consul \u6ce8\u518c\u4e2d\u5fc3\u7684\u975e\u5e38\u7b80\u5355\uff0c\u5206 Server \u7aef\u548c Client \u7aef"),(0,a.kt)("p",null,"Server \u7aef\u53ea\u9700\u8981\u914d\u7f6e\u201c\u6ce8\u518c\u4e2d\u5fc3\u201d"),(0,a.kt)("p",null,"Client \u7aef\u5219\u9700\u8981\u589e\u52a0 Maven \u4f9d\u8d56\u4ee5\u53ca\u914d\u7f6e"),(0,a.kt)("h3",{id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"},"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"),(0,a.kt)("p",null,"\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/releases/tag/v1.4.2"},"Seata 1.4.2 release")," \u5e76\u89e3\u538b"),(0,a.kt)("p",null,"\u5728 /conf/registry.conf \u4e2d\u4fee\u6539\u5bf9\u5e94\u914d\u7f6e\u4e2d\u5fc3\uff0c\u5176\u4f59",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/client/conf/registry.conf"},"\u914d\u7f6e\u53c2\u8003")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'registry {\n  type = "consul"\n\n  consul {\n    # \u6ce8\u518c\u5230 Consul \u4e0a\u7684\u96c6\u7fa4\u540d\u79f0\uff0c\u9ed8\u8ba4\u662f default\n    cluster = "default"\n    serverAddr = "127.0.0.1:8500"\n    aclToken = ""\n  }\n}\n')),(0,a.kt)("p",null,"\u6267\u884c /bin/seata-server.bat (Windows) \u6216 /bin/seata-server.sh (Unix) \u542f\u52a8 Seata\uff0c\u670d\u52a1\u5c06\u8fd0\u884c\u5728\u672c\u5730 8091 \u7aef\u53e3\u4e0a"),(0,a.kt)("p",null,"\u8fdb\u5165 Consul \u63a7\u5236\u53f0\uff0c\u67e5\u770b Seata \u662f\u5426\u6ce8\u518c\u6210\u529f"),(0,a.kt)("h3",{id:"client-\u7aef\u589e\u52a0-maven-\u4f9d\u8d56"},"Client \u7aef\u589e\u52a0 Maven \u4f9d\u8d56"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ee5 SpringBoot \u9879\u76ee\u4e3a\u4f8b\uff0c\u5728\u9879\u76ee pom.xml \u4e2d\u52a0\u5165")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>\u6700\u65b0\u7248\uff08Seata\u7248\u672c\uff09</version>\n</dependency>\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-consul-discovery</artifactId>\n</dependency>\n")),(0,a.kt)("h3",{id:"client\u7aef\u914d\u7f6e"},"Client\u7aef\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728 application.yml \u4e2d\u52a0\u5165\u5bf9\u5e94\u7684\u6ce8\u518c\u4e2d\u5fc3\uff0c\u5176\u4f59",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/client/spring/application.yml"},"\u914d\u7f6e\u53c2\u8003")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"seata:\n  registry:\n    consul:\n      server-addr: 127.0.0.1:8500\n  # \u4e8b\u52a1\u5206\u7ec4\u914d\u7f6e\uff0c1.4.2 \u9ed8\u8ba4\u540d\u79f0\u4e3a my_test_tx_group \uff0c1.5\u7248\u672c\u5c06\u6539\u4e3a default_tx_group\n  # \u6709\u5173\u4e8b\u52a1\u5206\u7ec4\uff0c\u8bf7\u53c2\u8003 http://seata.io/zh-cn/docs/user/txgroup/transaction-group.html\n  tx-service-group: my_test_tx_group\n  service:\n    # \u4e8b\u52a1\u5206\u7ec4\u4e0e\u96c6\u7fa4\u6620\u5c04\u5173\u7cfb\n    vgroup-mapping:\n      my_test_tx_group: default\n")),(0,a.kt)("p",null,"Client \u914d\u7f6e\u5b8c\u6210\u540e\u542f\u52a8\u5e94\u7528\u5e76\u7a0d\u5f85\u7247\u523b\uff0c\u51fa\u73b0\u4ee5\u4e0b\u540e\u65e5\u5fd7\u5c31\u53ef\u4ee5\u6b63\u5f0f\u4f53\u9a8c Seata \u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"register TM success. client version:1.4.2, server version:1.4.2,channel:[id: 0xa4675e28, L:/127.0.0.1:8238 - R:/127.0.0.1:8091]\nregister RM success. client version:1.4.2, server version:1.4.2,channel:[id: 0x408192d3, L:/127.0.0.1:8237 - R:/127.0.0.1:8091]\nregister success, cost 94 ms, version:1.4.2,role:RMROLE,channel:[id: 0x408192d3, L:/127.0.0.1:8237 - R:/127.0.0.1:8091]\nregister success, cost 94 ms, version:1.4.2,role:TMROLE,channel:[id: 0xa4675e28, L:/127.0.0.1:8238 - R:/127.0.0.1:8091]\n")))}d.isMDXComponent=!0}}]);