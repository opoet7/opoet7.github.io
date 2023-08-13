"use strict";(self.webpackChunktaymaz_docs=self.webpackChunktaymaz_docs||[]).push([[5330],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const o={},i="Sigma Rule EDR Integration",s={unversionedId:"BT/Sigma Rule EDR Integration",id:"BT/Sigma Rule EDR Integration",title:"Sigma Rule EDR Integration",description:"*",source:"@site/docs/BT/7-Sigma Rule EDR Integration.md",sourceDirName:"BT",slug:"/BT/Sigma Rule EDR Integration",permalink:"/en/docs/BT/Sigma Rule EDR Integration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/BT/7-Sigma Rule EDR Integration.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SOAR",permalink:"/en/docs/BT/SOAR"},next:{title:"Event Query Language - EQL",permalink:"/en/docs/BT/EQL-SIEM"}},l={},u=[{value:"Sigma Rule",id:"sigma-rule",level:2},{value:"Chainsaw",id:"chainsaw",level:2},{value:"Integrate chainsaw with EDR",id:"integrate-chainsaw-with-edr",level:2},{value:"Wazuh Rule",id:"wazuh-rule",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sigma-rule-edr-integration"},"Sigma Rule EDR Integration"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sigma-rule"},"Sigma Rule"),(0,r.kt)("p",null,"Sigma is a text-based, generic, open signature format that analysts can use to describe log events, making detections easier to write"),(0,r.kt)("h2",{id:"chainsaw"},"Chainsaw"),(0,r.kt)("div",{dir:"auto"},"\u067e\u0631\u0648\u0698\u0647\u0627\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f \u06a9\u0647 \u0628\u0631 \u0627\u0633\u0627\u0633 sigma rules \u0647\u0627 \u0628\u0647 \u0628\u0631\u0631\u0633\u06cc \u0644\u0627\u06af \u0647\u0627.\u0648 \u0628\u062e\u0634 \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0647\u0627\u06cc \u0648\u06cc\u0646\u062f\u0648\u0632 \u0645\u06cc \u067e\u0631\u062f\u0627\u0632\u062f \u0648  \u062d\u0645\u0644\u0627\u062a\u06cc \u0631\u0627 \u06a9\u0647 \u0627\u062a\u0641\u0627\u0642 \u0627\u0641\u062a\u0627\u062f\u0647 \u06af\u0632\u0627\u0631\u0634 \u0645\u06cc \u062f\u0647\u062f"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/WithSecureLabs/chainsaw"},"GitHub - WithSecureLabs/chainsaw: Rapidly Search and Hunt through Windows Forensic Artefacts")),(0,r.kt)("p",null,"usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'C:\\NBT\\Blue\\chainsaw\\chainsaw.exe hunt C:\\Windows\\System32\\winevt\\ -s "C:\\NBT\\Blue\\chainsaw\\sigma\\rules\\windows" --mapping "C:\\NBT\\Blue\\chainsaw\\mappings\\sigma-event-logs-all.yml"\n')),(0,r.kt)("h2",{id:"integrate-chainsaw-with-edr"},"Integrate chainsaw with EDR"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chainsaw.ps1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"$ErrorActionPreference = \"SilentlyContinue\"\n\n# Clone or pull Sigma repo\n$repo_path = \"C:\\Program Files\\socfortress\\chainsaw\\sigma\"\nif (!(test-path $repo_path)) {\n    New-Item -ItemType Directory -Force -Path $repo_path\n    $env:PATH += \";C:\\Program Files\\Git\\bin\"\n    git clone https://github.com/SigmaHQ/sigma.git $repo_path\n} else {\n    $env:PATH += \";C:\\Program Files\\Git\\bin\"\n    git -C $repo_path pull\n}\n\n# Analyse events recorded in last 5 Minutes. Convert Start Date to Timestamp\n$start_date = (Get-Date).AddMinutes(-5)\n$from = Get-Date -Date $start_date -UFormat '+%Y-%m-%dT%H:%M:%S'\n\n# Create Chainsaw Output Folder if it doesn't exist\n$chainsaw_output = \"$env:TMP\\chainsaw_output\"\nIf(!(test-path $chainsaw_output)) {\n    New-Item -ItemType Directory -Force -Path $chainsaw_output\n}\n\n# Windows Sigma Path\n$windows_path = \"C:\\Program Files\\socfortress\\chainsaw\\sigma\\rules\\windows\"\n\n# Run Chainsaw and store JSONs in TMP folder\n& 'C:\\Program Files\\socfortress\\chainsaw\\chainsaw.exe' hunt C:\\Windows\\System32\\winevt -s $windows_path --mapping 'C:\\Program Files\\socfortress\\chainsaw\\mappings\\sigma-event-logs-all.yml' --from $from --output $env:TMP\\chainsaw_output\\results.json --json --level high --level critical\n\n# Convert JSON to new line entry for every 'group'\nfunction Convert-JsonToNewLine($json) {\n    foreach($document in $json) {\n        $document.document | ConvertTo-Json -Compress -Depth 99 | foreach-object {\n            [pscustomobject]@{\n                group = $document.group\n                kind = $document.kind\n                document = $_\n                event = $document.document.data.Event.EventData\n                path = $document.document.path\n                system = $document.document.data.Event.System\n                name = $document.name\n                timestamp = $document.timestamp\n                authors = $document.authors\n                level = $document.level\n                source = $document.source\n                status = $document.status\n                falsepositives = $document.falsepositives\n                id = $document.id\n                logsource = $document.logsource\n                references = $document.references\n                tags = $document.tags\n            } | ConvertTo-Json -Compress\n        }\n    }\n}\n\n# Define the file path\n$file = \"C:\\Program Files (x86)\\ossec-agent\\active-response\\active-responses.log\"\n\n# Convert JSONs to new line entry and append to active-responses.log\nGet-ChildItem $env:TMP\\chainsaw_output -Filter *.json | Foreach-Object {\n    $Chainsaw_Array = Get-Content $_.FullName | ConvertFrom-Json\n    Convert-JsonToNewLine $Chainsaw_Array | Out-File -Append -Encoding ascii $file\n}\n\n# Remove TMP JSON Folder\nrm -r $env:TMP\\chainsaw_output\n\n# Output status if Sigma rules were updated\nif ($LASTEXITCODE -eq 0) {\n    $status_payload = @{\n        group = 'Sigma'\n        status = 'success'\n        message = 'Sigma rules were updated successfully.'\n    } | ConvertTo-Json -Compress\n    Write-Output $status_payload\n\n    # Append the payload to the log file\n    $status_payload | Out-File -Append -Encoding ascii $file\n}\nelse {\n    $error_payload = @{\n        group = 'Sigma'\n        status = 'failure'\n        message = 'Failed to update Sigma rules.'\n    } | ConvertTo-Json -Compress\n    Write-Output $error_payload\n\n    # Append the payload to the log file\n    $error_payload | Out-File -Append -Encoding ascii $file\n}\n")),(0,r.kt)("h3",{id:"wazuh-rule"},"Wazuh Rule"),(0,r.kt)("p",null,"add rule to this path : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/var/ossec/etc/rules/\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"200050-chainsaw_sigma_rules.xml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'<group name="windows,chainsaw,">\n <rule id="200050" level="3">\n    <field name="group">^Sigma$</field>\n    <description>Chainsaw Forensics - Sigma Scan</description>\n    <group>sigma,</group>\n    <options>no_full_log</options>\n  </rule>\n  <rule id="200051" level="12">\n    <if_sid>200050</if_sid>\n    <field name="level">high</field>\n    <description>$(name)</description>\n    <group>sigma,</group>\n    <options>no_full_log</options>\n  </rule>\n  <rule id="200052" level="1">\n    <if_sid>200051</if_sid>\n    <field name="logsource.category">^driver_load$</field>\n    <description>Exclude high driver loads due to FPs</description>\n    <group>sigma,</group>\n    <options>no_full_log</options>\n  </rule>\n  <rule id="200053" level="14">\n    <if_sid>200050</if_sid>\n    <field name="level">critical</field>\n    <description>$(name)</description>\n    <group>sigma,</group>\n    <options>no_full_log</options>\n  </rule>\n <rule id="200054" level="1">\n    <if_sid>200050</if_sid>\n    <field name="message">^Sigma rules were updated successfully.$</field>\n    <description>$(message)</description>\n    <group>sigma,</group>\n    <options>no_full_log</options>\n  </rule>\n  <rule id="200055" level="13">\n    <if_sid>200050</if_sid>\n    <field name="message">^Failed to update Sigma rules.$</field>\n    <description>$(message)</description>\n    <group>sigma,</group>\n    <options>no_full_log</options>\n  </rule>\n </group>\n')),(0,r.kt)("p",null,"Automating"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano /var/ossec/etc/ossec.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'<wodle name="command">\n  <disabled>no</disabled>\n  <tag>windows_chainsaw</tag>\n  <command>Powershell.exe -executionpolicy bypass -File "C:\\Program Files (x86)\\ossec-agent\\active-response\\bin\\chainsaw.ps1"</command>\n  <interval>5m</interval>\n  <ignore_output>yes</ignore_output>\n  <run_on_start>yes</run_on_start>\n  <timeout>0</timeout>\n </wodle>\n')))}d.isMDXComponent=!0}}]);