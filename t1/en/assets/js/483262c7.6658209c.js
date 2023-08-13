"use strict";(self.webpackChunktaymaz_docs=self.webpackChunktaymaz_docs||[]).push([[4153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},509:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={},o="Lateral Movement",i={unversionedId:"BT/Lateral Movement",id:"BT/Lateral Movement",title:"Lateral Movement",description:"Pass The Hash",source:"@site/docs/BT/14- Lateral Movement.md",sourceDirName:"BT",slug:"/BT/Lateral Movement",permalink:"/t1/en/docs/BT/Lateral Movement",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/BT/14- Lateral Movement.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Persistent",permalink:"/t1/en/docs/BT/Detecting Persistent"},next:{title:"Detecting Exflitration",permalink:"/t1/en/docs/BT/Exfiltration"}},s={},c=[{value:"Pass The Hash",id:"pass-the-hash",level:2},{value:"Detection",id:"detection",level:3},{value:"Event ID : 4624",id:"event-id--4624",level:4},{value:"Event ID : 4672",id:"event-id--4672",level:4},{value:"Pass The Ticket",id:"pass-the-ticket",level:2},{value:"Attack",id:"attack",level:4},{value:"Detection",id:"detection-1",level:3},{value:"Event ID : 4768",id:"event-id--4768",level:4},{value:"Event ID : 4769",id:"event-id--4769",level:4},{value:"Event ID : 4770",id:"event-id--4770",level:4},{value:"Remote Management",id:"remote-management",level:2},{value:"Winrm",id:"winrm",level:3},{value:"Attack",id:"attack-1",level:4},{value:"Microsoft Channel",id:"microsoft-channel",level:4},{value:"WinlogBeat Config",id:"winlogbeat-config",level:4},{value:"ELK Filter",id:"elk-filter",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lateral-movement"},"Lateral Movement"),(0,r.kt)("h2",{id:"pass-the-hash"},"Pass The Hash"),(0,r.kt)("p",null,"is a technique whereby an attacker captures a password hash (as opposed  to the password characters) and then simply passes it through for  authentication and potentially lateral access to other networked systems"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"sekurlsa::pth /user:administrator /domain:nooranetshield.local /ntlm:47bf8039a8506cd67c524a03ff84ba4e /run: cmd\n")),(0,r.kt)("h3",{id:"detection"},"Detection"),(0,r.kt)("h4",{id:"event-id--4624"},"Event ID : 4624"),(0,r.kt)("p",null," 4624  has a Logon Type of 9, which is NewCredential, Logon Type 9 is very rare. However, I was able to generate some false  positives running applications that use impersonation. The main  difference to key off of is the Logon Process will always be \u201cseclogo\u201d  for pass the hash , so you can filter on that to reduce  false-positive rates."),(0,r.kt)("h4",{id:"event-id--4672"},"Event ID : 4672"),(0,r.kt)("p",null,"In the normal authentication scenario, this event identified a  privileged logon for user account. With pass-the-hash  authentication."),(0,r.kt)("p",null,"Normal Operation "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Source host"),(0,r.kt)("th",{parentName:"tr",align:null},"Target Host"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4624 - logon type 2"),(0,r.kt)("td",{parentName:"tr",align:null},"4624 - log on Type 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4672 - Special Privileges"),(0,r.kt)("td",{parentName:"tr",align:null},"4672 - Special Privilege")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Source host"),(0,r.kt)("th",{parentName:"tr",align:null},"Target Host"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4624 - logon type 9"),(0,r.kt)("td",{parentName:"tr",align:null},"4624 - log on type 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4672 - not impersonated"),(0,r.kt)("td",{parentName:"tr",align:null},"4672 - Special Privilege")))),(0,r.kt)("p",null,"KQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'event.code:4624 and winlog.event_data.LogonProcessName :"seclogo" and winlog.event_data.LogonType :9\n')),(0,r.kt)("h2",{id:"pass-the-ticket"},"Pass The Ticket"),(0,r.kt)("p",null,"In a pass-the-ticket attack, an attacker is able to extract a Kerberos Ticket Granting Ticket (TGT) from LSASS memory on a system and then use this on another system to request Kerberos service tickets (TGS) to gain access to network resources"),(0,r.kt)("h4",{id:"attack"},"Attack"),(0,r.kt)("p",null,"Step 1 : Steal user Ticket"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'mimikatz.exe "privilege::debug" "sekurlsa::tickets /export"\n')),(0,r.kt)("p",null,"Step 2 : Reuse a Ticket"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'mimikatz.exe "kerberos::ptt [0;3e7]-0-1-40a50000-ADMIN-PC$@cifs-ht.nooranetshield.local.kirbi"\n')),(0,r.kt)("p",null,"Step3 : Access resources as the user"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},".\\PsExec.exe \\\\ht.nooranetshield.local powershell.exe\n")),(0,r.kt)("h3",{id:"detection-1"},"Detection"),(0,r.kt)("h4",{id:"event-id--4768"},"Event ID : 4768"),(0,r.kt)("p",null,"This is the TGT request and is the first thing that must happen for a user to leverage Kerberos to access a network resource , If a user account logs in from two separate workstations, they will request a TGT from each."),(0,r.kt)("h4",{id:"event-id--4769"},"Event ID : 4769"),(0,r.kt)("p",null,"The next step in Kerberos is for the user to use that TGT and request a  TGS service ticket to access a service on a computer, such as CIFS to  get to a file share"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," event.code: 4769\n  not username : $@\n")),(0,r.kt)("h4",{id:"event-id--4770"},"Event ID : 4770"),(0,r.kt)("p",null,"Renewing a TGT generates event 4770\xa0By default, TGTs can be renewed for 7 days"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You would have to look at a TGS request or TGT renewal and then scan\nback the previous 10 hours to see if there was a TGT request that\nmatches that user and computer.\xa0"),(0,r.kt)("p",{parentName:"blockquote"},"That is because in pass-the-ticket the attacker will never request a\nTGT, they will always steal it from LSASS.\xa0They may renew it, and they\ndefinitely may use it to request TGS service tickets.")),(0,r.kt)("h2",{id:"remote-management"},"Remote Management"),(0,r.kt)("h3",{id:"winrm"},"Winrm"),(0,r.kt)("p",null,"WinRM HTTP uses port 5985 and WinRM HTTPS uses port 5986. On earlier versions of Windows"),(0,r.kt)("h4",{id:"attack-1"},"Attack"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"}," New-Pssession -computername ht -Credential(Get-credential)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Enter-pssession ht\n")),(0,r.kt)("h4",{id:"microsoft-channel"},"Microsoft Channel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Microsoft-Windows-WinRM/Operational")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Event ID : 31 , 6 , 13")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Event ID : 31"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"WSMan Create Session operation completed successfuly"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Event ID :6 "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"WSMAN Connection Strings"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Event ID : 13"))),(0,r.kt)("h4",{id:"winlogbeat-config"},"WinlogBeat Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"}," - name: Microsoft-Windows-WinRM/Operational\n    event_id: 31, 6, 13\n")),(0,r.kt)("h4",{id:"elk-filter"},"ELK Filter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'event.provider : Microsoft-Windows-WinRM and event.code: "13" or "31" or "6"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'sequence \n[ process where process.pid == "6284" ]\n[ any where event.provider : "Microsoft-Windows-WinRM" and event.code : "13"]\n')))}d.isMDXComponent=!0}}]);