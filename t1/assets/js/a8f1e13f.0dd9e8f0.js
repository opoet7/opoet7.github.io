"use strict";(self.webpackChunktaymaz_docs=self.webpackChunktaymaz_docs||[]).push([[4520],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(a),m=l,d=s["".concat(o,".").concat(m)]||s[m]||k[m]||n;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7393:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>p,toc:()=>u});var r=a(7462),l=(a(7294),a(3905));const n={},i="Centeralize CTI",p={unversionedId:"BT/Centeralize CTI",id:"BT/Centeralize CTI",title:"Centeralize CTI",description:"Cortex",source:"@site/docs/BT/4- Centeralize CTI.md",sourceDirName:"BT",slug:"/BT/Centeralize CTI",permalink:"/t1/docs/BT/Centeralize CTI",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/BT/4- Centeralize CTI.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Incident Management System",permalink:"/t1/docs/BT/IMS"},next:{title:"Automation",permalink:"/t1/docs/BT/Automation"}},o={},u=[{value:"Cortex",id:"cortex",level:2},{value:"Cortex Configuration",id:"cortex-configuration",level:2},{value:"Add organization and User",id:"add-organization-and-user",level:3},{value:"Integrated Cortex with MISP",id:"integrated-cortex-with-misp",level:2},{value:"Analyzers Config",id:"analyzers-config",level:2},{value:"New Analysis",id:"new-analysis",level:2},{value:"Integrate Cortex With TheHive",id:"integrate-cortex-with-thehive",level:2},{value:"Integrate TheHive With MISP",id:"integrate-thehive-with-misp",level:2},{value:"Integrate Cortex With MISP",id:"integrate-cortex-with-misp",level:2},{value:"Practical APT Tracks - 1",id:"practical-apt-tracks---1",level:2},{value:"Practical APT Tracks - 2",id:"practical-apt-tracks---2",level:2},{value:"Practical APT Tracks - 3",id:"practical-apt-tracks---3",level:2},{value:"Practical Cortex-TheHive-MISP",id:"practical-cortex-thehive-misp",level:2}],c={toc:u},s="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"centeralize-cti"},"Centeralize CTI"),(0,l.kt)("h2",{id:"cortex"},"Cortex"),(0,l.kt)("alert",{lang:"fa",type:"info",title:"\u062a\u0639\u0631\u06cc\u0641  Cortex"},"\u0627\u0628\u0632\u0627\u0631 Cortex  \u06cc\u06a9 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0645\u062a\u0646 \u0628\u0627\u0632 \u0645\u06cc \u0628\u0627\u0634\u062f  \u0628\u0631\u0627\u06cc \u062c\u0633\u062a\u062c\u0648\u06cc \u06cc\u0627\u0641\u062a\u0647 \u0647\u0627\u06cc \u0642\u0627\u0628\u0644 \u0645\u0634\u0627\u0647\u062f\u0647 \u0645\u0627\u0646\u0646\u062f : \u0627\u06cc\u0645\u06cc\u0644 \u2013 \u0646\u0627\u0645 \u062f\u0627\u0645\u0646\u0647 \u2013 \u0622\u062f\u0631\u0633 \u2013 \u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u06a9\u0647 \u062f\u0631 \u0644\u0627\u06af \u0647\u0627 \u0648 \u06cc\u0627  \u067e\u0631\u0648\u0646\u062f\u0647 \u0647\u0627\u06cc \u0641\u0627\u0631\u0646\u0632\u06cc\u06a9 \u0628\u0647 \u0635\u0648\u0631\u062a \u0645\u062a\u0645\u0631\u06a9\u0632 \u0628\u0647 \u062a\u062d\u0644\u06cc\u0644\u06af\u0631 \u0647\u0627\u06cc \u0627\u0645\u0646\u06cc\u062a\u06cc \u06a9\u0645\u06a9 \u0645\u06cc \u06a9\u0646\u062f"),(0,l.kt)("div",{dir:"auto"},(0,l.kt)("h5",null,"\u0627\u0632 \u06a9\u0631\u062a\u06a9\u0633 \u0628\u0631\u0627\u06cc \u062a\u062d\u0644\u06cc\u0644 \u0648\u062c\u0633\u062a\u062c\u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u062f\u0633\u062a \u0622\u0645\u062f\u0647 \u0627\u0632 \u0641\u0631\u06cc\u0645 \u0648\u0631\u06a9 \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0648 SIEM \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f  \u0634\u0645\u0627 \u062f\u0631 \u06cc\u06a9 \u06a9\u0646\u0633\u0648\u0644 \u0648\u0627\u062d\u062f \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u06cc\u0627\u0641\u062a\u0647 \u0647\u0627\u06cc \u0641\u0631\u06cc\u0645 \u067e\u0648\u0631\u06a9 \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f \u0648 \u062c\u0633\u062a\u062c\u0648 \u0648 \u062a\u062d\u0644\u06cc\u0644 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f \u06a9\u0631\u062a\u06a9\u0633 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0622\u0646\u0627\u0644\u06cc\u0632 \u06a9\u0627\u0631 \u0645\u06cc \u06a9\u0646\u062f \u06a9\u0647 \u0628\u0635\u0648\u0631\u062a \u067e\u06cc\u0634 \u0641\u0631\u0636 \u062d\u062f\u0648\u062f \u06f2\u06f0\u06f0 \u0622\u0646\u0627\u0644\u06cc\u0632 \u062f\u0631 \u0622\u0646 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f \u06a9\u0647 \u0634\u0627\u0645\u0644 \u0633\u0627\u06cc\u062a \u0647\u0627 \u0648 \u062f\u06cc\u062a\u0627 \u0628\u06cc\u0633 \u0647\u0627 \u0645\u062e\u062a\u0644\u0641 \u062c\u0647\u062a \u062c\u0633\u062a\u062c\u0648\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u062f\u0633\u062a \u0622\u0645\u062f\u0647 \u0645\u06cc \u0628\u0627\u0634\u062f \u0645\u0627\u0646\u0646\u062f \u0633\u0627\u06cc\u062a virustotal , domaintools , ...")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/TheHive-Project/Cortex"},"GitHub - TheHive-Project/Cortex: Cortex: a Powerful Observable Analysis and Active Response Engine")),(0,l.kt)("h2",{id:"cortex-configuration"},"Cortex Configuration"),(0,l.kt)("h3",{id:"add-organization-and-user"},"Add organization and User"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"add organization "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"name : NooraNet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Description : NooraNet Blue Team")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Add user "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"login : ",(0,l.kt)("a",{parentName:"p",href:"mailto:nooranet@nooranet.local"},"nooranet@nooranet.local"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Full name : nooranet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"organization : NooraNet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Role"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"read , Analyze")))))),(0,l.kt)("h2",{id:"integrated-cortex-with-misp"},"Integrated Cortex with MISP"),(0,l.kt)("p",null,"Config MISP Module"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"organization --\x3e Analyzers config --\x3e MISP"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://192.168.1.74"},"https://192.168.1.74")," --\x3e MISP Server")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"API Key : KZhdOCY6odpP8OrgzzumqROxME6wIF7dMQGQlizZ"))),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(1166).Z,width:"1780",height:"1340"})))),(0,l.kt)("h2",{id:"analyzers-config"},"Analyzers Config"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"global configuration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"abuselPDB")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Censys")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"shodan")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"MISP "))),(0,l.kt)("h2",{id:"new-analysis"},"New Analysis"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"file name "),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(9411).Z,width:"1806",height:"826"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Domain "),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:a(6553).Z,width:"1802",height:"820"})))),(0,l.kt)("h2",{id:"integrate-cortex-with-thehive"},"Integrate Cortex With TheHive"),(0,l.kt)("div",{dir:"rtl",align:"right"},"\u06cc\u06a9\u06cc \u0627\u0632 \u0633\u0646\u0627\u0631\u06cc\u0648 \u0647\u0627 \u067e\u0631\u06a9\u0627\u0631\u0628\u0631\u062f \u06cc\u06a9\u067e\u0627\u0631\u0686\u0647 \u0633\u0627\u0632\u06cc \u0627\u06cc\u0646 \u062f\u0648\u0641\u0631\u06cc\u0645 \u0648\u0631\u06a9 \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u06cc\u0633 \u0647\u0627\u06cc \u06a9\u0647 \u062f\u0631 Thehive \u062a\u0639\u0631\u06cc\u0641 \u0645\u06cc \u0634\u0648\u062f  \u0648 \u062f\u0627\u0631\u0627\u06cc \u0628\u062e\u0634 observable \u0645\u06cc \u0628\u0627\u0634\u0646\u062f \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0622\u0646\u0627\u0644\u0627\u06cc\u0632\u0647\u0627\u06cc \u06a9\u0631\u062a\u06a9\u0633 \u062a\u062d\u0644\u06cc\u0644 \u0645\u06cc \u0634\u0648\u0646\u062f"),(0,l.kt)("h2",{id:"integrate-thehive-with-misp"},"Integrate TheHive With MISP"),(0,l.kt)("p",null,"MISP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"administration --\x3e list Auth key --\x3e Add Authenticaion key")),(0,l.kt)("p",null,"TheHive"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"login with : username: ",(0,l.kt)("inlineCode",{parentName:"p"},"admin@thehive.local")," pass:",(0,l.kt)("inlineCode",{parentName:"p"},"secret"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"platform management --\x3e MISP --\x3e Add server"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://192.168.1.75/thehive/administration/platform/misp"},"http://192.168.1.75/thehive/administration/platform/misp")),(0,l.kt)("h2",{id:"integrate-cortex-with-misp"},"Integrate Cortex With MISP"),(0,l.kt)("div",{dir:"rtl",align:"right"},"\u0628\u0627 \u06cc\u06a9\u067e\u0627\u0631\u0686\u0647 \u0633\u0627\u0632\u06cc \u0627\u06cc\u0646 \u062f\u0648 \u0641\u0631\u06cc\u0645 \u0648\u0631\u06a9 \u0627\u0645\u06a9\u0627\u0646 \u062c\u0633\u062a\u062c\u0648\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062f\u0631 MISP \u0628\u0647 \u062b\u0628\u062a \u0645\u06cc \u0631\u0633\u062f \u062a\u0648\u0633\u0637 \u06a9\u0631\u062a\u06a9\u0633 \u0648\u062c\u0648\u062f\u0627\u0631\u062f \u0648 \u0633\u0631\u0639\u062a \u0628\u0631\u0631\u0633\u06cc \u06a9\u06cc\u0633 \u0647\u0627 \u0631\u0627 \u0627\u0641\u0632\u0627\u06cc\u0634 \u0645\u06cc \u062f\u0647\u062f"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://192.168.1.75/cotex"},"http://192.168.1.75/cotex")," "),(0,l.kt)("p",null,"username : thehive"),(0,l.kt)("p",null,"pass : thehive1234"),(0,l.kt)("p",null,"STEP 1 : Enable MISP Module"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"organization --\x3e Analyzes --\x3e  Enable MISP")),(0,l.kt)("p",null,"STEP 2 : Config MISP Module"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"organization --\x3e Analyzers config --\x3e MISP"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://192.168.1.74"},"https://192.168.1.74"),"  --\x3e MISP Server ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"API Key : KZhdOCY6odpP8OrgzzumqROxME6wIF7dMQGQlizZ"))))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(1131).Z,width:"2256",height:"950"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(1166).Z,width:"1780",height:"1340"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"New Analysis")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(3176).Z,width:"1812",height:"1584"})),(0,l.kt)("div",{dir:"auto"},"\u0628\u0631\u0627\u06cc \u062a\u0645\u0631\u06cc\u0646 \u0628\u06cc\u0634\u062a\u0631 \u0634\u0646\u0627\u0633\u0647 \u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u062c\u0633\u062a\u062c\u0648 \u0648 \u0631\u0627\u062c\u0639 \u0628\u0647 \u0646\u0648\u0639 \u062d\u0645\u0644\u0647 \u0648 \u06a9\u0634\u0648\u0631 \u06a9\u0647 \u062d\u0645\u0644\u0647 \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u062f\u0627\u062f\u0647 \u0627\u0633\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06a9\u0633\u0628 \u0646\u0645\u0627\u06cc\u06cc\u062f"),(0,l.kt)("p",null,"IOC"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"pupyx86.dll "),(0,l.kt)("li",{parentName:"ul"},"66d24a529308d8ab7b27ddd43a6c2db84107b831257efb664044ec4437f9487b "),(0,l.kt)("li",{parentName:"ul"},"Password_Policy.xlsm "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.microsoft-updateserver.cf"},"www.microsoft-updateserver.cf")," "),(0,l.kt)("li",{parentName:"ul"},"ws_TomcatService.exe"),(0,l.kt)("li",{parentName:"ul"},"XqoYMlBX.exe "),(0,l.kt)("li",{parentName:"ul"},"cld.dll ")),(0,l.kt)("h2",{id:"practical-apt-tracks---1"},"Practical APT Tracks - 1"),(0,l.kt)("div",{dir:"auto"},(0,l.kt)("h5",null,"\u0633\u0646\u0627\u0631\u06cc\u0648\u06cc \u0628\u0631\u0631\u0633\u06cc \u062d\u0645\u0644\u0627\u062a APT \u062f\u0631 \u0633\u0627\u0632\u0645\u0627\u0646 -\u06f1"),"\u0628\u0627  \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631 \u06a9\u0631\u062a\u06a9\u0633  \u0641\u0627\u06cc\u0644 update.exe  \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u0648 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u062f \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06a9\u062f\u0627\u0645 \u062d\u0645\u0644\u0647  APT  \u0645\u06cc \u0628\u0627\u0634\u062f  \u0648 \u062f\u0631 \u0642\u0628\u0627\u0644 \u06a9\u062f\u0627\u0645 \u06a9\u0634\u0648\u0631 \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a"),(0,l.kt)("p",null,"APT Group : "),(0,l.kt)("p",null,"Country : "),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"practical-apt-tracks---2"},"Practical APT Tracks - 2"),(0,l.kt)("div",{dir:"auto"},(0,l.kt)("h5",null,"\u0633\u0646\u0627\u0631\u06cc\u0648\u06cc \u0628\u0631\u0631\u0633\u06cc \u062d\u0645\u0644\u0627\u062a APT \u062f\u0631 \u0633\u0627\u0632\u0645\u0627\u0646 -\u06f2"),"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631 \u06a9\u0631\u062a\u06a9\u0633 Hash  \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647  \u06af\u0631\u0648\u0647 APT   \u0622\u0646 \u0631\u0627 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u062f"),(0,l.kt)("p",null,"HASH : 0385eeab00e946a302b24a91dea4187c1210597b8e17cd9e2230450f5ece21da"),(0,l.kt)("p",null,"APT Group : "),(0,l.kt)("p",null,"Country : "),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"practical-apt-tracks---3"},"Practical APT Tracks - 3"),(0,l.kt)("div",{dir:"auto"},(0,l.kt)("h5",null,"\u0633\u0646\u0627\u0631\u06cc\u0648\u06cc \u0628\u0631\u0631\u0633\u06cc \u062d\u0645\u0644\u0627\u062a APT \u062f\u0631 \u0633\u0627\u0632\u0645\u0627\u0646 -\u06f3"),"\u0641\u0627\u06cc\u0644  mscap.jpg , mscap.bmp \u062f\u0631 \u06a9\u062f\u0627\u0645 \u062d\u0645\u0644\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u061f"),(0,l.kt)("p",null,"APT Group : "),(0,l.kt)("p",null,"Country : "),(0,l.kt)("hr",null),(0,l.kt)("div",{dir:"auto"},(0,l.kt)("h5",null,"\u0633\u0646\u0627\u0631\u06cc\u0648\u06cc \u0628\u0631\u0631\u0633\u06cc \u062d\u0645\u0644\u0627\u062a APT \u062f\u0631 \u0633\u0627\u0632\u0645\u0627\u0646 -\u06f4"),"\u0641\u0627\u06cc\u0644  nti.exe \u062f\u0631 \u06a9\u062f\u0627\u0645 \u062d\u0645\u0644\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u061f"),(0,l.kt)("p",null,"miso info  : "),(0,l.kt)("p",null,"IOC  : "),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"practical-cortex-thehive-misp"},"Practical Cortex-TheHive-MISP"),(0,l.kt)("div",{dir:"rtl",align:"right"},(0,l.kt)("h5",null,"\u0633\u0646\u0627\u0631\u06cc\u0648 \u06cc\u06a9\u067e\u0627\u0631\u0686\u0647 \u0633\u0627\u0632\u06cc \u0647\u0648\u0634 \u062a\u0647\u062f\u06cc\u062f\u0627\u062a \u0633\u0627\u06cc\u0628\u0631\u06cc")),(0,l.kt)("div",{dir:"rtl",align:"right"},"\u062f\u0631 \u0627\u06cc\u0646 \u0633\u0646\u0627\u0631\u06cc\u0648 \u0645\u06cc\u062e\u0648\u0627\u0647\u06cc\u0645 \u0627\u0632 \u0633\u0647 \u0627\u0628\u0632\u0627\u0631 TheHive , Cortex, MISP  \u0628\u0635\u0648\u0631\u062a \u0647\u0645\u0632\u0645\u0627\u0646 \u062f\u0631 \u0634\u0646\u0627\u0633\u0627\u06cc\u06cc \u062a\u0647\u062f\u06cc\u062f\u0627\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645",(0,l.kt)("p",null,"\u062f\u0648 \u0644\u06cc\u0646\u06a9 \u0645\u0634\u06a9\u0648\u06a9 \u06a9\u0647 \u0627\u0632 \u0644\u0627\u06af \u0633\u0645\u062a \u06a9\u0644\u0627\u06cc\u0646\u062a \u0647\u0627 \u0628\u062f\u0633\u062a \u0622\u0645\u062f\u0647 \u0628\u0631\u0627\u06cc \u062a\u06cc\u0645 \u0622\u0628\u06cc \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647 \u0627\u0633\u062a ")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://40.121.90.194./qq/cert"},"http://40.121.90.194./qq/cert")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://104.155.149.103/rar.tmp"},"http://104.155.149.103/rar.tmp")),(0,l.kt)("div",{dir:"rtl",align:"right"},"\u062f\u0631 \u0627\u0628\u062a\u062f\u0627 \u06cc\u06a9 \u06a9\u06cc\u0633 \u062f\u0631 TheHive5  \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0631\u062f\u0647 \u0648 \u062f\u0648 \u0644\u06cc\u0646\u06a9 \u0628\u0627\u0644\u0627 \u0631\u0627 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 observables \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u062f (\u0628\u0635\u0648\u0631\u062a \u0645\u062c\u0632\u0627 ) \u0633\u067e\u0633 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 cortex Analyzer  \u0647\u0627 \u0648 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u062e\u0648\u062f  TheHive   \u0622\u0646 \u0647\u0627 \u0631\u0627 \u062a\u062d\u0644\u06cc\u0644 \u06a9\u0646\u06cc\u062f \u0648 \u062f\u0631 \u0627\u0646\u062a\u0647\u0627 \u067e\u0627\u0633\u062e \u0622\u0646 \u0631\u0627 \u062f\u0631 \u06a9\u06cc\u0633 \u062b\u0628\u062a \u06a9\u0646\u06cc\u062f"))}k.isMDXComponent=!0},3176:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/3-c15f1d4b9be3567453a47eeac05c236d.png"},1166:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/4-aaecfd7495896c4b67509d404292d242.png"},1131:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/5-4a15cf8f01e126f3b7fb8161738ebda7.png"},9411:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/7-0d8d8bb82866c1c88b84038b5d9f2104.png"},6553:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/8-b5e37011c80b2b64a32392812cdecf41.png"}}]);