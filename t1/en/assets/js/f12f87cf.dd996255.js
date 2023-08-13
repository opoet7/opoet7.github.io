"use strict";(self.webpackChunktaymaz_docs=self.webpackChunktaymaz_docs||[]).push([[4244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),k=l,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||s;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,r=new Array(s);r[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const s={},r="Privilege Escalation Detection",i={unversionedId:"BT/Detecting PE",id:"BT/Detecting PE",title:"Privilege Escalation Detection",description:"\u0631\u0648\u0634 \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641\u06cc \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0627\u06cc\u0634 \u0633\u0637\u062d \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0639\u0627\u0645\u0644 \u0647\u0627 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f \u06a9\u0647 \u0628\u062e\u0634\u06cc \u0627\u0632 \u0622\u0646 \u0647\u0627 \u0628\u0647 \u062f\u0644\u06cc\u0644 \u0622\u0633\u06cc\u0628 \u067e\u0630\u06cc\u0631\u06cc \u0648 \u06cc\u0627 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0646\u0627\u0645\u0646\u0627\u0633\u0628 \u0633\u0631\u0648\u06cc\u0633 \u0647\u0627 \u0645\u06cc \u0628\u0627\u0634\u062f \u06cc\u06a9\u06cc \u0627\u0632 \u0631\u0627\u06cc\u062c \u062a\u0631\u06cc\u0646 \u0631\u0648\u0634 \u0647\u0627 \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0639\u0627\u0645\u0644 \u0648\u06cc\u0646\u062f\u0648\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062a\u0648\u06a9\u0646 \u067e\u0631\u0648\u0633\u0633 \u0647\u0627 \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u062f\u0648\u0631\u0647 \u062a\u06cc\u0645 \u0622\u0628\u06cc \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0631\u0627 \u0645\u0648\u0631\u062f \u0628\u0631\u0631\u0633\u06cc \u0642\u0631\u0627\u0631 \u0645\u06cc \u062f\u0647\u06cc\u0645",source:"@site/docs/BT/10- Detecting PE.md",sourceDirName:"BT",slug:"/BT/Detecting PE",permalink:"/en/docs/BT/Detecting PE",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/BT/10- Detecting PE.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Execution",permalink:"/en/docs/BT/Detecting Execution"},next:{title:"Detecting Evasion",permalink:"/en/docs/BT/Detecting Evasion"}},o={},c=[{value:"Stealing Access Tokens",id:"stealing-access-tokens",level:2},{value:"Enable Audit policy",id:"enable-audit-policy",level:3},{value:"Detection",id:"detection",level:3},{value:"Event ID : 4656",id:"event-id--4656",level:5},{value:"Event ID : 4663",id:"event-id--4663",level:4},{value:"Results",id:"results",level:3},{value:"Event ID : 4703",id:"event-id--4703",level:5},{value:"Powershell Token Adjusted",id:"powershell-token-adjusted",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...s}=e;return(0,l.kt)(u,(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"privilege-escalation-detection"},"Privilege Escalation Detection"),(0,l.kt)("alert",{lang:"fa",type:"info",title:"\u0627\u0641\u0632\u0627\u06cc\u0634 \u0633\u0637\u062d \u062f\u0633\u062a\u0631\u0633\u06cc"},"\u0631\u0648\u0634 \u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641\u06cc \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0627\u06cc\u0634 \u0633\u0637\u062d \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0639\u0627\u0645\u0644 \u0647\u0627 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f \u06a9\u0647 \u0628\u062e\u0634\u06cc \u0627\u0632 \u0622\u0646 \u0647\u0627 \u0628\u0647 \u062f\u0644\u06cc\u0644 \u0622\u0633\u06cc\u0628 \u067e\u0630\u06cc\u0631\u06cc \u0648 \u06cc\u0627 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0646\u0627\u0645\u0646\u0627\u0633\u0628 \u0633\u0631\u0648\u06cc\u0633 \u0647\u0627 \u0645\u06cc \u0628\u0627\u0634\u062f \u06cc\u06a9\u06cc \u0627\u0632 \u0631\u0627\u06cc\u062c \u062a\u0631\u06cc\u0646 \u0631\u0648\u0634 \u0647\u0627 \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0639\u0627\u0645\u0644 \u0648\u06cc\u0646\u062f\u0648\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062a\u0648\u06a9\u0646 \u067e\u0631\u0648\u0633\u0633 \u0647\u0627 \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u062f\u0648\u0631\u0647 \u062a\u06cc\u0645 \u0622\u0628\u06cc \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0631\u0627 \u0645\u0648\u0631\u062f \u0628\u0631\u0631\u0633\u06cc \u0642\u0631\u0627\u0631 \u0645\u06cc \u062f\u0647\u06cc\u0645"),(0,l.kt)("h2",{id:"stealing-access-tokens"},"Stealing Access Tokens"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1216).Z,width:"1648",height:"688"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4222).Z,width:"741",height:"756"})),(0,l.kt)("h3",{id:"enable-audit-policy"},"Enable Audit policy"),(0,l.kt)("p",null,"Detection will be based on system access control lists (SACLs)"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"enable Audit kernel object access and handle manipulation")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"obtain a handle to the ",(0,l.kt)("inlineCode",{parentName:"p"},"winlogon.exe")," process with the ",(0,l.kt)("inlineCode",{parentName:"p"},"GenericAll")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"AccessSystemSecurity")," access rights. The ",(0,l.kt)("inlineCode",{parentName:"p"},"AccessSystemSecurity")," right is necessary to access the SACL."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Install-Module -Name NtObjectManager\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"$p = Get-NtProcess -name winlogon.exe -Access GenericAll,AccessSystemSecurity\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"audit ACE type (AU) that will generate a security event for\nsuccessful/failed access (SAFA) from the Everyone(WD) group. "),(0,l.kt)("p",{parentName:"li"},"0x1400 : PROCESS_QUERY_INFORMATION"),(0,l.kt)("p",{parentName:"li"},"0x1000 : PROCESS_QUERY_LIMITED_INFORMATION"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-NtSecurityDescriptor $p \u201cS:(AU;SAFA;0x1400;;;WD)\u201d Sacl\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"With this SACL in place we should be able to get alerts when ",(0,l.kt)("inlineCode",{parentName:"p"},"winlogon.exe")," is accessed with specific access rights.")),(0,l.kt)("h3",{id:"detection"},"Detection"),(0,l.kt)("h5",{id:"event-id--4656"},"Event ID : 4656"),(0,l.kt)("p",null,"This event indicates that specific access was requested for an object.  The object could be a file system, kernel, or registry object, or a file  system object on removable storage or a device.This event generates only if the object\u2019s SACL has the required ACE to handle the use of specific access rights."),(0,l.kt)("p",null,"Access mask : 1400 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-NtAccessMask -AccessMask 0x1400 -ToSpecificAccess Process\nQueryInformation, QueryLimitedInformation\n")),(0,l.kt)("h4",{id:"event-id--4663"},"Event ID : 4663"),(0,l.kt)("p",null,"This event indicates that a specific operation was performed on an  object. The object could be a file system, kernel, or registry object,  or a file system object on removable storage or a device."),(0,l.kt)("p",null,"This event generates only if object\u2019s SACL has required ACE to handle specific access right use."),(0,l.kt)("p",null,"The main difference with 4656 :\nA handle to an object was requested. event is that 4663 shows that  access right was used instead of just requested and 4663 doesn\u2019t have  Failure events."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Interesting to note that the access mask for EID 4663 is 0x1000 which represents the",(0,l.kt)("inlineCode",{parentName:"p"},"PROCESS_QUERY_LIMITED_INFORMATION")," access right. Additionally, when the test program is run with the ",(0,l.kt)("inlineCode",{parentName:"p"},"PROCESS_QUERY_INFORMATION")," access right, EID 4656 is generated and EID 4663 is not.")),(0,l.kt)("p",null,"KQL "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"event.code : 4656 and winlog.event_data.AccessMask : 0x1400\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"add winlog.event_data.ProcessName")),(0,l.kt)("p",null,"tips : Nov 13 2022 14:33:19"),(0,l.kt)("p",null,"EQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},' any  where event.code == "4656" and winlog.event_data.AccessMask == "0x1400" and winlog.event_data.ObjectName : ("*winlogon.exe*" , "*lsass.exe*")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},' any  where event.code == "4656" and winlog.event_data.AccessMask == "0x1400" and winlog.event_data.ObjectName : ("*winlogon.exe*" , "*lsass.exe*") and winlog.event_data.SubjectUserName != "system"\n')),(0,l.kt)("h3",{id:"results"},"Results"),(0,l.kt)("p",null,"The following SYSTEM processes can have their access token stolen when calling ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenProcess()")," with the ",(0,l.kt)("inlineCode",{parentName:"p"},"PROCESS_QUERY_INFORMATION")," access right:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dllhost.exe"),(0,l.kt)("li",{parentName:"ul"},"lsass.exe"),(0,l.kt)("li",{parentName:"ul"},"OfficeClickToRun.exe"),(0,l.kt)("li",{parentName:"ul"},"svchost.exe (only some PIDs)"),(0,l.kt)("li",{parentName:"ul"},"Sysmon64.exe"),(0,l.kt)("li",{parentName:"ul"},"unsecapp.exe"),(0,l.kt)("li",{parentName:"ul"},"VGAuthService.exe"),(0,l.kt)("li",{parentName:"ul"},"vmacthlp.exe"),(0,l.kt)("li",{parentName:"ul"},"vmtoolsd.exe"),(0,l.kt)("li",{parentName:"ul"},"winlogon.exe")),(0,l.kt)("p",null,"The following SYSTEM processes, with Protected Process Light, can have their access token stolen when calling ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenProcess()")," with the ",(0,l.kt)("inlineCode",{parentName:"p"},"PROCESS_QUERY_LIMITED_INFORMATION")," access right:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"csrss.exe"),(0,l.kt)("li",{parentName:"ul"},"Memory Compression.exe"),(0,l.kt)("li",{parentName:"ul"},"services.exe"),(0,l.kt)("li",{parentName:"ul"},"smss.exe"),(0,l.kt)("li",{parentName:"ul"},"wininit.exe")),(0,l.kt)("h1",{id:"audit-token-right-adjusted"},"Audit Token Right Adjusted"),(0,l.kt)("p",null,"Audit Token Right Adjusted allows you to audit events generated by adjusting the privileges of a token."),(0,l.kt)("h5",{id:"event-id--4703"},"Event ID : 4703"),(0,l.kt)("p",null,"you can get information related to changes to the privileges of a token.",(0,l.kt)("br",{parentName:"p"}),"\n","However, if you are using an application or system service that dynamically adjusts token privilege"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'any where event.code == 4703  and  process.name.text  not in~ ("svchost.exe")\n')),(0,l.kt)("h4",{id:"powershell-token-adjusted"},"Powershell Token Adjusted"),(0,l.kt)("p",null,"Event Code : 4104 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"powershell execution Content ")),(0,l.kt)("p",null,"KQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'powershell.file.script_block_text : ("TokenPrivileges" or "TokenLinkedToken" or "TokenElevation")\n')),(0,l.kt)("p",null,"EQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'event.category:process and powershell.file.script_block_text in~\n("TokenPrivileges", "TokenLinkedToken", "TokenElevation") \n')))}d.isMDXComponent=!0},1216:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/14-ee3bbad2b0d78717c1093f0a7cd035d3.png"},4222:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/token-11b19c0691a66860d55703e37a1ef7bc.png"}}]);