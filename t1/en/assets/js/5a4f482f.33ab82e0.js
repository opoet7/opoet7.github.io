"use strict";(self.webpackChunktaymaz_docs=self.webpackChunktaymaz_docs||[]).push([[7195],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(a),u=p,d=s["".concat(l,".").concat(u)]||s[u]||k[u]||r;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:p,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7549:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(7462),p=(a(7294),a(3905));const r={},i="Tcpdump",o={permalink:"/t1/en/blog/tcpdump",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/tcpdump.md",source:"@site/blog/tcpdump.md",title:"Tcpdump",description:"Tcpdump is a commandline tool that is used to dump traffic on a network. This",date:"2023-07-25T09:37:31.680Z",formattedDate:"July 25, 2023",tags:[],readingTime:3.595,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Welcome",permalink:"/t1/en/blog/welcome"}},l={authorsImageUrls:[]},m=[{value:"Expressions",id:"expressions",level:3},{value:"Examples",id:"examples",level:3},{value:"More Examples",id:"more-examples",level:3}],c={toc:m},s="wrapper";function k(e){let{components:t,...a}=e;return(0,p.kt)(s,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Tcpdump is a commandline tool that is used to dump traffic on a network. This\ntool comes in hand when you want to analyse network captures within the\ncommand line. Basically it can do most of the wireshark job."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"NOTE")," This guide might not be complete it just serve as a reference to me."),(0,p.kt)("h1",{id:"additional-note--reference"},"Additional Note & Reference"),(0,p.kt)("p",null,"To be fair: This gist is itself a fork I created some time ago, but the original gist\nor author seems to not exist anymore, and it looks like that I'm now in the lead ;-)\nPlease see the revision history for details."),(0,p.kt)("p",null,"Furthermore some more and basic advanced examples may be of interest (thanks to twitter://@howtouselinux1):"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://howtouselinux.com/post/tcpdump-cheat-sheet"},"Tcpdump Cheat Sheet (Basic Advanced Examples)"))),(0,p.kt)("h1",{id:"options"},"Options"),(0,p.kt)("p",null,"The following are some of options that I prefer when using ",(0,p.kt)("inlineCode",{parentName:"p"},"tcpdump")," for my\ndaily use."),(0,p.kt)("p",null,"tcpdump ","[OPTIONS]"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"-i any : Listen to all the interfaces\n-i virbr0: Listen to a specific interface virbr0\n-D: Show the list of available interface\n-n: Don't resolve the hostnames\n-nn: Don't resolve hostnames or port names.\n-q: quite output\n-t: Don't print a timestamp on each dump line.\n-tttt: Give maximally human-readbale timestamp output\n-X: Show the packet's contents in both HEX ad ASCII\n-XX: Same as -X but shows the ethernet header.\n-v, -vv, -vvv: Being more verbose(increase number of packet information)\n-c: Only capture number of packets and stop\n-s: Define the snaplength(size) of the capture in bytes. Use -s0 to get\neverything.\n-S: Print absolute sequence numbers.\n-e: Get the ethernet header as well\n-E: Decrypt IPSEC traffic by providing an encryption key.\n")),(0,p.kt)("h3",{id:"expressions"},"Expressions"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"tcpdump")," allow us to use expression so we can narrow down our solution to get\nexactly what we're looking for."),(0,p.kt)("p",null,"There are 3 types of expression: ",(0,p.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"dir")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"proto")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Type options are: ",(0,p.kt)("inlineCode",{parentName:"li"},"host"),",",(0,p.kt)("inlineCode",{parentName:"li"},"net"),", and ",(0,p.kt)("inlineCode",{parentName:"li"},"port")),(0,p.kt)("li",{parentName:"ul"},"Direction are: ",(0,p.kt)("inlineCode",{parentName:"li"},"src")," and ",(0,p.kt)("inlineCode",{parentName:"li"},"dst")),(0,p.kt)("li",{parentName:"ul"},"Protocol : ",(0,p.kt)("inlineCode",{parentName:"li"},"tcp"),",",(0,p.kt)("inlineCode",{parentName:"li"},"udp"),",",(0,p.kt)("inlineCode",{parentName:"li"},"icmp"),",",(0,p.kt)("inlineCode",{parentName:"li"},"ah")," etc")),(0,p.kt)("h3",{id:"examples"},"Examples"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Basic communication to see what happens on the network"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump -i any\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Monitor specific interface"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump -i virbr0\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Raw output view with verbose output,no host/port resolution,absolute sequence number and\nhuman-readable timestamps."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"}," $ tcpdump -ttttnnvvS\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Find traffic by IP"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump host 192.168.122.131\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Seeing packets with HEX output"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump -nnvXSs 0 -c1 icmp\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Filtering by Source and Destination"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump src 192.168.122.131\n$ tcpdump dst 192.168.122.14\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Finding packets by network"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump net 192.168.122.0/24\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Show traffic related to a specific port"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump port 3389\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Show traffic of one protocol"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump icmp\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Show only IPv6 Traffic"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump ip6\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Find traffic using Port ranges"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump portrange 21-25\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Find traffic base on packet size"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump less 32\n\n$ tcpdump greater 32\n\n$ tcpdump <= 102\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Writing captures to a file"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump port 80 -w output\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Reading from pcap files"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump -r output.pcap\n")))),(0,p.kt)("h3",{id:"more-examples"},"More Examples"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Options Combination"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"AND : ",(0,p.kt)("inlineCode",{parentName:"p"},"and")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"&&"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"OR : ",(0,p.kt)("inlineCode",{parentName:"p"},"or")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"||"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"EXCEPT : ",(0,p.kt)("inlineCode",{parentName:"p"},"not")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"!")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump -nnvvS src 192.168.122.1 and dst port 4444\n"))))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Complex grouping and special characters\nFor complex grouping we use ",(0,p.kt)("inlineCode",{parentName:"p"},"()")," to specify our options"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ tcpdump 'src 192.168.122.84 and (dst port 4444 or 22)'\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Isolating Specific TCP Flags. The filter ",(0,p.kt)("inlineCode",{parentName:"p"},"tcp[13]")," look at offset 13 in ",(0,p.kt)("inlineCode",{parentName:"p"},"TCP HEADER"),",hence the number\nrepresent the location within the byte, while the ",(0,p.kt)("inlineCode",{parentName:"p"},"!=0")," means that the flag\nis set to 1.\\\nShow all URGENT (URG) packets\\"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"}," $ tcpdump 'tcp[13] & 32!=0'\n")),(0,p.kt)("p",{parentName:"li"},"Show all ACKNOWLEDGE( ACK) packets\\"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"}," $ tcpdump 'tcp[13] & 16!=0'\n")),(0,p.kt)("p",{parentName:"li"},"Show all PUSH (PSH) packets\\"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"}," $ tcpdump 'tcp[13] & 8!=0'\n")),(0,p.kt)("p",{parentName:"li"},"Show all RESET (RST packets\\"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"}," $ tcpdump 'tcp[13] & 4!=0'\n")),(0,p.kt)("p",{parentName:"li"},"Show all SYNCHRONIZE (SYN) packets\\"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"}," $ tcpdump 'tcp[13] & 2!=0'\n")),(0,p.kt)("p",{parentName:"li"},"Show all FINISH (FIN) packets\\"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"}," $ tcpdump 'tcp[13] & 1!=0'\n")),(0,p.kt)("p",{parentName:"li"},"Show all SYNCRONIZE/ACKNOWLEDGE (SYNACK) packets\\"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"}," $ tcpdump 'tcp[13]=18'\n")),(0,p.kt)("p",{parentName:"li"},"Alternative we could also use ",(0,p.kt)("inlineCode",{parentName:"p"},"tcpflags")," syntax"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"}," $ tcpdump 'tcp[tcpflags] == tcp-syn'\n $ tcpdump 'tcp[tcpflags] == tcp-rst'\n $ tcpdump 'tcp[tcpflags] == tcp-fin'\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Identifying malformed/malicious packets."),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Packets with both rst and syn flags shouldn't be the case."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"   $ tcpdump 'tcp=[13] = 6'\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Find cleartext http get requests"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"   $ tcpdump 'tcp[32:4] = 0x47455420'\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Find ssh connection on any port via (banner text)"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"   $ # tcpdump 'tcp[(tcp[12]>>2):4] = 0x5353482D'\n")))))))}k.isMDXComponent=!0}}]);