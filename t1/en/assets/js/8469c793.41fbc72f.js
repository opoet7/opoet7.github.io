"use strict";(self.webpackChunktaymaz_docs=self.webpackChunktaymaz_docs||[]).push([[1045],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>N});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),m=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return l.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,N=u["".concat(o,".").concat(d)]||u[d]||k[d]||r;return a?l.createElement(N,i(i({ref:t},s),{},{components:a})):l.createElement(N,i({ref:t},s))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8328:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var l=a(7462),n=(a(7294),a(3905));const r={},i="Automation",p={unversionedId:"BT/Automation",id:"BT/Automation",title:"Automation",description:"Shuffle",source:"@site/docs/BT/5- Automation.md",sourceDirName:"BT",slug:"/BT/Automation",permalink:"/t1/en/docs/BT/Automation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/BT/5- Automation.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Centeralize CTI",permalink:"/t1/en/docs/BT/Centeralize CTI"},next:{title:"SOAR",permalink:"/t1/en/docs/BT/SOAR"}},o={},m=[{value:"Shuffle",id:"shuffle",level:2},{value:"Installation Guide",id:"installation-guide",level:2},{value:"Use case for Shuffle",id:"use-case-for-shuffle",level:2},{value:"First Workflow",id:"first-workflow",level:3},{value:"send Message to Mail",id:"send-message-to-mail",level:3},{value:"send Message to Mobile",id:"send-message-to-mobile",level:3},{value:"Send Message to Discord",id:"send-message-to-discord",level:3}],s={toc:m},u="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"automation"},"Automation"),(0,n.kt)("h2",{id:"shuffle"},"Shuffle"),(0,n.kt)("alert",{lang:"fa",type:"info",title:"\u062a\u0639\u0631\u06cc\u0641  Shuffle"},"\u0627\u0632 \u0627\u0628\u0632\u0627\u0631 Shuffle \u0628\u0631\u0627\u06cc \u0627\u062a\u0648\u0645\u0627\u062a\u06cc\u06a9 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0631\u0647\u0627 \u0648 \u0641\u0631\u0622\u06cc\u0646\u062f \u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f \u06a9\u0647 \u0628\u0635\u0648\u0631\u062a \u0631\u0627\u06cc\u06af\u0627\u0646 \u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u0639\u0645\u0648\u0645 \u0642\u0631\u0627\u0631 \u062f\u0627\u0631\u062f \u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0645\u06cc \u062e\u0648\u0627\u0647\u06cc\u0645 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631 Shuffle \u0641\u0631\u0622\u06cc\u0646\u062f \u0647\u0627\u06cc \u06a9\u0627\u0631\u06cc \u0631\u0627 \u0627\u062a\u0648\u0645\u0627\u062a\u06cc\u06a9 \u06a9\u0646\u06cc\u0645 \u062a\u0627 \u0645\u0647\u0645\u062a\u0631\u06cc\u0646 \u06af\u0627\u0645 \u062f\u0631 \u062c\u0647\u062a \u067e\u06cc\u0627\u062f\u0647 \u0633\u0627\u0632\u06cc SOAR  \u0631\u0627 \u0628\u0631 \u062f\u0627\u0631\u06cc\u0645"),(0,n.kt)("h2",{id:"installation-guide"},"Installation Guide"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/frikky/Shuffle\ncd Shuffle\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir shuffle-database\nsudo chown -R 1000:1000 shuffle-database\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://192.168.1.249:3443"},"http://192.168.1.249:3443")),(0,n.kt)("h2",{id:"use-case-for-shuffle"},"Use case for Shuffle"),(0,n.kt)("h3",{id:"first-workflow"},"First Workflow"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"login to shuffle  ",(0,n.kt)("a",{parentName:"p",href:"https://192.168.1.249:3443"},"https://192.168.1.249:3443")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"username : ",(0,n.kt)("a",{parentName:"p",href:"mailto:nooranet@nooranet.local"},"nooranet@nooranet.local"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"password : nooranet")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add testing module")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add HTTP Module "),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"first action GET")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"url  : ",(0,n.kt)("a",{parentName:"p",href:"https://ip.seeip.org/jsonip"},"https://ip.seeip.org/jsonip"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add test module "),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"call : My IP is $get_ip.body")))),(0,n.kt)("h3",{id:"send-message-to-mail"},"send Message to Mail"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add shuffle Tools"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"name : start")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"find  Action :  Repeat Back to me")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"call : welcome to NooraNet Blue Team")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add http module"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"name : get_ip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"find action : GET")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"url : ",(0,n.kt)("a",{parentName:"p",href:"https://ip.seeip.org/jsonip"},"https://ip.seeip.org/jsonip"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add test module "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"name : print_ip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"find action : Repeat Back To me")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"call : My IP is : $get_ip.body.ip")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add email module"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"name : email_1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"find action : send email shuffle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"API Key : ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Recipients : ",(0,n.kt)("a",{parentName:"p",href:"mailto:Nooranetblue@gmail.com"},"Nooranetblue@gmail.com"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"subject :  My IP is : $get_ip.body.ip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Message : $get_ip.body.ip"))))),(0,n.kt)("h3",{id:"send-message-to-mobile"},"send Message to Mobile"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add shuffle Tools"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"name : start")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"find Action : Repeat Back to me")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"call : welcome to NooraNet Blue Team")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add http module"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"name : get_ip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"find action : GET")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"url : ",(0,n.kt)("a",{parentName:"p",href:"https://ip.seeip.org/jsonip"},"https://ip.seeip.org/jsonip"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add test module"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"name : print_ip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"find action : Repeat Back To me")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"call : My IP is : $get_ip.body.ip")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add  shuflle Tools"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"name : SMS_1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"find action : send SMS shuffle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"API Key :")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"phone numbers : +989028888046")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"subject : My IP is : $get_ip.body.ip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Body : $get_ip.body.ip"))))),(0,n.kt)("h3",{id:"send-message-to-discord"},"Send Message to Discord"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add  HTTP Module "),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"action :  GET")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"url :",(0,n.kt)("a",{parentName:"p",href:"https://ip.seeip.org/jsonip"},"https://ip.seeip.org/jsonip"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add Test Module "),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"call :My ip is $get_ip.body.ip"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"add discord module"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"action : send message")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"webhook url : 1019174806287024190/3QCRcV7A8wgYb2VTkg0feX3PuHWCBmeeGiji_sUhUt6PcqSIK0DgLS74CxMNXh21Sjt5")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"message : my ip is : $get_ip.body.ip"))))))}k.isMDXComponent=!0}}]);