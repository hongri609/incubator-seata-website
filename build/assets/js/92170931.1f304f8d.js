"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[45905],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?i.createElement(h,o(o({ref:t},p),{},{components:a})):i.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78984:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=a(87462),n=(a(67294),a(3905));const r={title:"Contributing to Seata",keywords:["Seata"],description:"It is warmly welcomed if you have interest to hack on Seata. First, we encourage this kind of willing very much. And here is a list of contributing guide for you."},o="Contributing to Seata",l={unversionedId:"developers/guide_dev",id:"version-v1.4/developers/guide_dev",title:"Contributing to Seata",description:"It is warmly welcomed if you have interest to hack on Seata. First, we encourage this kind of willing very much. And here is a list of contributing guide for you.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.4/developers/guide_dev.md",sourceDirName:"developers",slug:"/developers/guide_dev",permalink:"/docs/v1.4/developers/guide_dev",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.4/developers/guide_dev.md",tags:[],version:"v1.4",frontMatter:{title:"Contributing to Seata",keywords:["Seata"],description:"It is warmly welcomed if you have interest to hack on Seata. First, we encourage this kind of willing very much. And here is a list of contributing guide for you."},sidebar:"developers",previous:{title:"New contributor guide",permalink:"/docs/v1.4/developers/contributor-guide/reporting-security-issues_dev"},next:{title:"Label an Issue",permalink:"/docs/v1.4/developers/committer-guide/label-an-issue-guide_dev"}},s={},u=[{value:"Topics",id:"topics",level:2},{value:"Reporting security issues",id:"reporting-security-issues",level:2},{value:"Reporting general issues",id:"reporting-general-issues",level:2},{value:"Code and doc contribution",id:"code-and-doc-contribution",level:2},{value:"Workspace Preparation",id:"workspace-preparation",level:3},{value:"Branch Definition",id:"branch-definition",level:3},{value:"Commit Rules",id:"commit-rules",level:3},{value:"Commit Message",id:"commit-message",level:4},{value:"Commit Content",id:"commit-content",level:4},{value:"PR Description",id:"pr-description",level:3},{value:"Test case contribution",id:"test-case-contribution",level:2},{value:"Engage to help anything",id:"engage-to-help-anything",level:2},{value:"Code Style",id:"code-style",level:2},{value:"Guidelines",id:"guidelines",level:3},{value:"IDE Plugin Install\uff08not necessary\uff09",id:"ide-plugin-installnot-necessary",level:3},{value:"idea IDE",id:"idea-ide",level:4},{value:"eclipse IDE",id:"eclipse-ide",level:4}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"contributing-to-seata"},"Contributing to Seata"),(0,n.kt)("p",null,"It is warmly welcomed if you have interest to hack on Seata. First, we encourage this kind of willing very much. And here is a list of contributing guide for you."),(0,n.kt)("h2",{id:"topics"},"Topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#reporting-security-issues"},"Reporting security issues")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#reporting-general-issues"},"Reporting general issues")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#code-and-doc-contribution"},"Code and doc contribution")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#test-case-contribution"},"Test case contribution")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#engage-to-help-anything"},"Engage to help anything")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#code-style"},"Code Style"))),(0,n.kt)("h2",{id:"reporting-security-issues"},"Reporting security issues"),(0,n.kt)("p",null,"Security issues are always treated seriously. As our usual principle, we discourage anyone to spread security issues. If you find a security issue of Seata, please do not discuss it in public and even do not open a public issue. Instead we encourage you to send us a private email to  ",(0,n.kt)("a",{parentName:"p",href:"mailto:private@seata.apache.org"},"private@seata.apache.org")," to report this."),(0,n.kt)("h2",{id:"reporting-general-issues"},"Reporting general issues"),(0,n.kt)("p",null,"To be honest, we regard every user of Seata as a very kind contributor. After experiencing Seata, you may have some feedback for the project. Then feel free to open an issue via ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/issues/new/choose"},"NEW ISSUE"),"."),(0,n.kt)("p",null,"Since we collaborate project Seata in a distributed way, we appreciate ",(0,n.kt)("strong",{parentName:"p"},"WELL-WRITTEN"),", ",(0,n.kt)("strong",{parentName:"p"},"DETAILED"),", ",(0,n.kt)("strong",{parentName:"p"},"EXPLICIT")," issue reports. To make the communication more efficient, we wish everyone could search if your issue is an existing one in the searching list. If you find it existing, please add your details in comments under the existing issue instead of opening a brand new one."),(0,n.kt)("p",null,"To make the issue details as standard as possible, we setup an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/develop/.github/ISSUE_TEMPLATE"},"ISSUE TEMPLATE")," for issue reporters. Please ",(0,n.kt)("strong",{parentName:"p"},"BE SURE")," to follow the instructions to fill fields in template."),(0,n.kt)("p",null,"There are a lot of cases when you could open an issue:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"bug report"),(0,n.kt)("li",{parentName:"ul"},"feature request"),(0,n.kt)("li",{parentName:"ul"},"performance issues"),(0,n.kt)("li",{parentName:"ul"},"feature proposal"),(0,n.kt)("li",{parentName:"ul"},"feature design"),(0,n.kt)("li",{parentName:"ul"},"help wanted"),(0,n.kt)("li",{parentName:"ul"},"doc incomplete"),(0,n.kt)("li",{parentName:"ul"},"test improvement"),(0,n.kt)("li",{parentName:"ul"},"any questions on project"),(0,n.kt)("li",{parentName:"ul"},"and so on")),(0,n.kt)("p",null,"Also we must remind that when filling a new issue, please remember to remove the sensitive data from your post. Sensitive data could be password, secret key, network locations, private business data and so on."),(0,n.kt)("h2",{id:"code-and-doc-contribution"},"Code and doc contribution"),(0,n.kt)("p",null,"Every action to make project Seata better is encouraged. On GitHub, every improvement for Seata could be via a PR (short for pull request)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you find a typo, try to fix it!"),(0,n.kt)("li",{parentName:"ul"},"If you find a bug, try to fix it!"),(0,n.kt)("li",{parentName:"ul"},"If you find some redundant codes, try to remove them!"),(0,n.kt)("li",{parentName:"ul"},"If you find some test cases missing, try to add them!"),(0,n.kt)("li",{parentName:"ul"},"If you could enhance a feature, please ",(0,n.kt)("strong",{parentName:"li"},"DO NOT")," hesitate!"),(0,n.kt)("li",{parentName:"ul"},"If you find code implicit, try to add comments to make it clear!"),(0,n.kt)("li",{parentName:"ul"},"If you find code ugly, try to refactor that!"),(0,n.kt)("li",{parentName:"ul"},"If you can help to improve documents, it could not be better!"),(0,n.kt)("li",{parentName:"ul"},"If you find document incorrect, just do it and fix that!"),(0,n.kt)("li",{parentName:"ul"},"...")),(0,n.kt)("p",null,"Actually it is impossible to list them completely. Just remember one principle:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"WE ARE LOOKING FORWARD TO ANY PR FROM YOU.")),(0,n.kt)("p",null,"Since you are ready to improve Seata with a PR, we suggest you could take a look at the PR rules here."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#workspace-preparation"},"Workspace Preparation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#branch-definition"},"Branch Definition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#commit-rules"},"Commit Rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#pr-description"},"PR Description"))),(0,n.kt)("h3",{id:"workspace-preparation"},"Workspace Preparation"),(0,n.kt)("p",null,"To put forward a PR, we assume you have registered a GitHub ID. Then you could finish the preparation in the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"FORK")," Seata to your repository. To make this work, you just need to click the button Fork in right-left of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata"},"apache/incubator-seata")," main page. Then you will end up with your repository in ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/<your-username>/incubator-seata"),", in which ",(0,n.kt)("inlineCode",{parentName:"p"},"your-username")," is your GitHub username.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"CLONE")," your own repository to develop locally. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"git clone git@github.com:<your-username>/seata.git")," to clone repository to your local machine. Then you can create new branches to finish the change you wish to make.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Set Remote")," upstream to be ",(0,n.kt)("inlineCode",{parentName:"p"},"git@github.com:apache/incubator-seata.git")," using the following two commands:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git remote add upstream git@github.com:apache/incubator-seata.git\ngit remote set-url --push upstream no-pushing\n")),(0,n.kt)("p",null,"With this remote setting, you can check your git remote configuration like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git remote -v\norigin     git@github.com:<your-username>/seata.git (fetch)\norigin     git@github.com:<your-username>/seata.git (push)\nupstream   git@github.com:apache/incubator-seata.git (fetch)\nupstream   no-pushing (push)\n")),(0,n.kt)("p",null,"Adding this, we can easily synchronize local branches with upstream branches."),(0,n.kt)("h3",{id:"branch-definition"},"Branch Definition"),(0,n.kt)("p",null,"Right now we assume every contribution via pull request is for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/tree/develop"},"branch develop")," in Seata. Before contributing, be aware of branch definition would help a lot."),(0,n.kt)("p",null,"As a contributor, keep in mind again that every contribution via pull request is for branch develop. While in project Seata, there are several other branches, we generally call them release branches(such as 0.6.0,0.6.1), feature branches, hotfix branches and master branch."),(0,n.kt)("p",null,"When officially releasing a version, there will be a release branch and named with the version number. "),(0,n.kt)("p",null,"After the release, we will merge the commit of the release branch into the master branch."),(0,n.kt)("p",null,"When we find that there is a bug in a certain version, we will decide to fix it in a later version or fix it in a specific hotfix version. When we decide to fix the hotfix version, we will checkout the hotfix branch based on the corresponding release branch, perform code repair and verification, and merge it into the develop branch and the master branch."),(0,n.kt)("p",null,"For larger features, we will pull out the feature branch for development and verification."),(0,n.kt)("h3",{id:"commit-rules"},"Commit Rules"),(0,n.kt)("p",null,"Actually in Seata, we take two rules serious when committing:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#commit-message"},"Commit Message")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#commit-content"},"Commit Content"))),(0,n.kt)("h4",{id:"commit-message"},"Commit Message"),(0,n.kt)("p",null,"Commit message could help reviewers better understand what is the purpose of submitted PR. It could help accelerate the code review procedure as well. We encourage contributors to use ",(0,n.kt)("strong",{parentName:"p"},"EXPLICIT")," commit message rather than ambiguous message. In general, we advocate the following commit message type:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'docs: xxxx. For example, "docs: add docs about Seata cluster installation".'),(0,n.kt)("li",{parentName:"ul"},'feature: xxxx.For example, "feature: support oracle in AT mode".'),(0,n.kt)("li",{parentName:"ul"},'bugfix: xxxx. For example, "bugfix: fix panic when input nil parameter".'),(0,n.kt)("li",{parentName:"ul"},'refactor: xxxx. For example, "refactor: simplify to make codes more readable".'),(0,n.kt)("li",{parentName:"ul"},'test: xxx. For example, "test: add unit test case for func InsertIntoArray".'),(0,n.kt)("li",{parentName:"ul"},"other readable and explicit expression ways.")),(0,n.kt)("p",null,"On the other side, we discourage contributors from committing message like the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("del",{parentName:"li"},"fix bug")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("del",{parentName:"li"},"update")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("del",{parentName:"li"},"add doc"))),(0,n.kt)("p",null,"If you get lost, please see ",(0,n.kt)("a",{parentName:"p",href:"http://chris.beams.io/posts/git-commit/"},"How to Write a Git Commit Message")," for a start."),(0,n.kt)("h4",{id:"commit-content"},"Commit Content"),(0,n.kt)("p",null,"Commit content represents all content changes included in one commit. We had better include things in one single commit which could support reviewer's complete review without any other commits' help. In another word, contents in one single commit can pass the CI to avoid code mess. In brief, there are three minor rules for us to keep in mind:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"avoid very large change in a commit;"),(0,n.kt)("li",{parentName:"ul"},"complete and reviewable for each commit."),(0,n.kt)("li",{parentName:"ul"},"check git config(",(0,n.kt)("inlineCode",{parentName:"li"},"user.name"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"user.email"),") when committing to ensure that it is associated with your github ID.")),(0,n.kt)("p",null,"In addition, in the code change part, we suggest that all contributors should read the ",(0,n.kt)("a",{parentName:"p",href:"#code-style"},"code style of Seata"),"."),(0,n.kt)("p",null,"No matter commit message, or commit content, we do take more emphasis on code review."),(0,n.kt)("h3",{id:"pr-description"},"PR Description"),(0,n.kt)("p",null,"PR is the only way to make change to Seata project files. To help reviewers better get your purpose, PR description could not be too detailed. We encourage contributors to follow the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/develop/.github/PULL_REQUEST_TEMPLATE.md"},"PR template")," to finish the pull request."),(0,n.kt)("h2",{id:"test-case-contribution"},"Test case contribution"),(0,n.kt)("p",null,"Any test case would be welcomed. Currently, Seata function test cases are high priority."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For unit test, you need to create a test file named ",(0,n.kt)("inlineCode",{parentName:"p"},"xxxTest.java")," in the test directory of the same module. Recommend you to use the junit5 UT framework")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For integration test, you can put the integration test in the test directory or the seata-test module. It is recommended to use the mockito test framework."))),(0,n.kt)("h2",{id:"engage-to-help-anything"},"Engage to help anything"),(0,n.kt)("p",null,"We choose GitHub as the primary place for Seata to collaborate. So the latest updates of Seata are always here. Although contributions via PR is an explicit way to help, we still call for any other ways."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"reply to other's issues if you could;"),(0,n.kt)("li",{parentName:"ul"},"help solve other user's problems;"),(0,n.kt)("li",{parentName:"ul"},"help review other's PR design;"),(0,n.kt)("li",{parentName:"ul"},"help review other's codes in PR;"),(0,n.kt)("li",{parentName:"ul"},"discuss about Seata to make things clearer;"),(0,n.kt)("li",{parentName:"ul"},"advocate Seata technology beyond GitHub;"),(0,n.kt)("li",{parentName:"ul"},"write blogs on Seata and so on.")),(0,n.kt)("h2",{id:"code-style"},"Code Style"),(0,n.kt)("p",null,"Seata code style Comply with Alibaba Java Coding Guidelines."),(0,n.kt)("h3",{id:"guidelines"},"Guidelines"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://alibaba.github.io/Alibaba-Java-Coding-Guidelines/"},"Alibaba-Java-Coding-Guidelines")," "),(0,n.kt)("h3",{id:"ide-plugin-installnot-necessary"},"IDE Plugin Install\uff08not necessary\uff09"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"It is not necessary to install, if you want to find a problem when you are coding.")),(0,n.kt)("h4",{id:"idea-ide"},"idea IDE"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/p3c/blob/master/idea-plugin/README.md"},"p3c-idea-plugin-install")," "),(0,n.kt)("h4",{id:"eclipse-ide"},"eclipse IDE"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/p3c/blob/master/eclipse-plugin/README.md"},"p3c-eclipse-plugin-install")),(0,n.kt)("p",null,"In a word, ",(0,n.kt)("strong",{parentName:"p"},"ANY HELP IS CONTRIBUTION.")))}m.isMDXComponent=!0}}]);