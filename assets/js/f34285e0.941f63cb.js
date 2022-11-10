"use strict";(self.webpackChunkblog_template=self.webpackChunkblog_template||[]).push([[1592],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>N});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),m=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=m(e.components);return l.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),c=m(a),N=n,o=c["".concat(u,".").concat(N)]||c[N]||s[N]||r;return a?l.createElement(o,p(p({ref:t},k),{},{components:a})):l.createElement(o,p({ref:t},k))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var m=2;m<r;m++)p[m]=a[m];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var l=a(7462),n=(a(7294),a(3905));const r={slug:"eks",title:"eks \uad6c\uc131\ud558\uae30(1) - vpc",authors:"andes",tags:["kubernetes","aws","eks","vpc"]},p=void 0,i={permalink:"/blog/eks",source:"@site/blog/2022-11-10-eks-vpc/content.md",title:"eks \uad6c\uc131\ud558\uae30(1) - vpc",description:"\uc21c\uc11c",date:"2022-11-10T00:00:00.000Z",formattedDate:"2022\ub144 11\uc6d4 10\uc77c",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"aws",permalink:"/blog/tags/aws"},{label:"eks",permalink:"/blog/tags/eks"},{label:"vpc",permalink:"/blog/tags/vpc"}],readingTime:6.73,truncated:!1,authors:[{name:"Andes Noh",title:"\uc5f0\uad6c\uc6d0",url:"https://github.com/andes-noh",imageURL:"https://github.com/andes-noh.png",key:"andes"}],nextItem:{title:"jenkins pipeline\uc5d0\uc11c sed \ucee4\ub9e8\ub4dc \uc0ac\uc6a9\ud558\uae30",permalink:"/blog/sed command"}},u={authorsImageUrls:[void 0]},m=[{value:"\uc21c\uc11c",id:"\uc21c\uc11c",children:[]},{value:"vpc \uad6c\uc131\ud558\uae30",id:"vpc-\uad6c\uc131\ud558\uae30",children:[]}],k={toc:m};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\uc21c\uc11c"},"\uc21c\uc11c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"vpc-\uad6c\uc1311"},"vpc \uad6c\uc131(1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"eks-cluster-\uc0dd\uc131"},"eks cluster \uc0dd\uc131")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"worknode-\uc0dd\uc131-\ubc0f-\ud655\uc778"},"worknode \uc0dd\uc131 \ubc0f \ud655\uc778"))),(0,n.kt)("h2",{id:"vpc-\uad6c\uc131\ud558\uae30"},"vpc \uad6c\uc131\ud558\uae30"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"vpcvirtual-private-cloud-\ub780"},"VPC(Virtual Private Cloud) \ub780"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 \uc815\uc758\ud55c \uac00\uc0c1\uc758 \ub124\ud2b8\uc6cc\ud06c \ud658\uacbd"),(0,n.kt)("li",{parentName:"ul"},"\uc815\uc758\ud55c \ub124\ud2b8\uc6cc\ud06c \ud658\uacbd\uc744 \ubc14\ud0d5\uc73c\ub85c \ub2e4\uc591\ud55c \uc11c\ube44\uc2a4 \uc774\uc6a9 \uac00\ub2a5"),(0,n.kt)("li",{parentName:"ul"},"\uac00\uc7a5 \uae30\ubcf8\uc801\uc778 vpc \uad6c\uc131\ub3c4\n",(0,n.kt)("img",{alt:"vpc",src:a(8443).Z}))))),(0,n.kt)("h1",{id:""}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"vpc-\uc0dd\uc131\ubb34\ub8cc"},"vpc \uc0dd\uc131(\ubb34\ub8cc)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"IAM \ub85c\uadf8\uc778 -> vpc \uac80\uc0c9 -> vpc \uc0dd\uc131 \ud074\ub9ad"),(0,n.kt)("li",{parentName:"ul"},"\uc138\ud305\n",(0,n.kt)("img",{alt:"vpc create",src:a(5622).Z})),(0,n.kt)("li",{parentName:"ul"},"\uc774\ub984\ud0dc\uadf8: \uc6d0\ud558\ub294 \uc774\ub984\ud0dc\uadf8 \uc791\uc131(ex: EKS-TEST-VPC)"),(0,n.kt)("li",{parentName:"ul"},"IPv4 CIDR: VPC\uc758 \uc544\uc774\ud53c \ub300\uc5ed \uc9c0\uc815(\uc5ec\uae30\uc11c\ub294 192.168.0.0/16 \ub300\uc5ed \uc0ac\uc6a9)"),(0,n.kt)("li",{parentName:"ul"},"\uc0dd\uc131")))),(0,n.kt)("h1",{id:"-1"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"\uc11c\ube0c\ub137-\uc0dd\uc131\ubb34\ub8cc"},"\uc11c\ube0c\ub137 \uc0dd\uc131(\ubb34\ub8cc)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc88c\uce21 \uba54\ub274 \uc11c\ube0c\ub137 \ud074\ub9ad -> \uc11c\ube0c\ub137 \uc0dd\uc131 \ud074\ub9ad\n",(0,n.kt)("img",{alt:"subnet create",src:a(3541).Z})),(0,n.kt)("li",{parentName:"ul"},"VPC ID: \uae30\uc874 \uc0dd\uc131\ud55c vpc \uc120\ud0dd"),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ube0c\ub137 \uc774\ub984: public \uc11c\ube0c\ub137 2\uac1c, private \uc11c\ube0c\ub137 2\uac1c \ucd1d 4\uac1c\uc758 \uc11c\ube0c\ub137\uc744 \uad6c\ubd84 \uac00\ub2a5\ud558\uac8c \uc0dd\uc131(ex: pub-a, pri-a, pub-c, pri-c)"),(0,n.kt)("li",{parentName:"ul"},"\uac00\uc6a9\uc601\uc5ed: \uae30\ubcf8\uc801\uc778 \uad6c\uc131\ub3c4(AZ)\ucc38\uace0, \uc774 \uae00\uc5d0\uc11c\ub294 ap-northeast-2a\uc640 ap-northeast-2c\ub97c \uc0ac\uc6a9, \uc11c\ube0c\ub137 \uc774\ub984 \ub4a4\uc758 \uc54c\ud30c\ubcb3\uc774 AZ\ub97c \ub098\ud0c0\ub0c4"),(0,n.kt)("li",{parentName:"ul"},"IPv4 CIDR: \uc11c\ube0c\ub137\uc758 IPv4 \uc9c0\uc815, \uae30\uc5b5 \ud558\uae30 \uc27d\uac8c \uc9c0\uc815\ud574\uc57c \ud655\uc7a5\uc2dc \ud63c\ub780\uc774 \uc801\uc74c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"pub-a: 192.168.10.0/24"),(0,n.kt)("li",{parentName:"ul"},"pri-a: 192.168.11.0/24"),(0,n.kt)("li",{parentName:"ul"},"pub-c: 192.168.20.0/24"),(0,n.kt)("li",{parentName:"ul"},"pri-c: 192.168.21.0/24"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\ucd1d 4\uac1c\uc758 \uc11c\ube0c\ub137 \uc0dd\uc131"))))),(0,n.kt)("h1",{id:"-2"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"\uc778\ud130\ub137-\uac8c\uc774\ud2b8\uc6e8\uc774-\uc0dd\uc131\ubb34\ub8cc"},"\uc778\ud130\ub137 \uac8c\uc774\ud2b8\uc6e8\uc774 \uc0dd\uc131(\ubb34\ub8cc)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc778\ud130\ub137 \ud1b5\uc2e0\uc744 \uc704\ud55c GW"),(0,n.kt)("li",{parentName:"ul"},"\uc88c\uce21 \uba54\ub274 \uc778\ud130\ub137 \uac8c\uc774\ud2b8\uc6e8\uc774 \ud074\ub9ad -> \uc778\ud130\ub137 \uac8c\uc774\ud2b8\uc6e8\uc774 \uc0dd\uc131 \ud074\ub9ad\n",(0,n.kt)("img",{alt:"IGW create",src:a(1106).Z})),(0,n.kt)("li",{parentName:"ul"},"\uc774\ub984\ud0dc\uadf8: \uc6d0\ud558\ub294 \uc774\ub984\ud0dc\uadf8 \uc791\uc131(ex: EKS-TEST-IGW)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"1\uac1c\uc758 IGW \uc0dd\uc131"))))),(0,n.kt)("h1",{id:"-3"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"nat-\uac8c\uc774\ud2b8\uc6e8\uc774-\uc0dd\uc131\uc720\ub8cc-\ub9cc\ub4e0-\uc21c\uac04\ubd80\ud130-\uacfc\uae08-\ud14c\uc2a4\ud2b8\ub97c-\uc704\ud574-\ub9cc\ub4e0\ub2e4\uba74-\ud14c\uc2a4\ud2b8\ud6c4-\uc0ad\uc81c\ud560\uac83"},"NAT \uac8c\uc774\ud2b8\uc6e8\uc774 \uc0dd\uc131(\uc720\ub8cc: \ub9cc\ub4e0 \uc21c\uac04\ubd80\ud130 \uacfc\uae08, \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 \ub9cc\ub4e0\ub2e4\uba74 \ud14c\uc2a4\ud2b8\ud6c4 \uc0ad\uc81c\ud560\uac83)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc678\ubd80\uc640 \ud1b5\uc2e0\uc774 \uc548\ub418\ub294 private-subnet\uc774 \uc678\ubd80\uc640\uc758 \ud1b5\uc2e0\uc744 \uc704\ud574 \uc5f0\uacb0\ud558\ub294 GW"),(0,n.kt)("li",{parentName:"ul"},"\uc88c\uce21 \uba54\ub274 NAT \uac8c\uc774\ud2b8\uc6e8\uc774 \ud074\ub9ad -> NAT \uac8c\uc774\ud2b8\uc6e8\uc774 \uc0dd\uc131 \ud074\ub9ad"),(0,n.kt)("li",{parentName:"ul"},"\uac01 AZ \ubcc4\ub85c \uc0dd\uc131\n",(0,n.kt)("img",{alt:"NAT create",src:a(3968).Z})),(0,n.kt)("li",{parentName:"ul"},"\uc774\ub984 - \uad6c\ubd84 \uac00\ub2a5\ud558\uac8c \uc0dd\uc131(\ub77c\uc6b0\ud305 \ud14c\uc774\ube14 \uc5f0\uacb0\uc2dc \ud63c\ub780 \ubc29\uc9c0)"),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ube0c\ub137: NAT GW\ub97c \uc0dd\uc131\ud560 \uc11c\ube0c\ub137 \uc120\ud0dd, private-subnet\uc758 \ud1b5\uc2e0\uc744 \uc704\ud574 \ub9cc\ub4dc\ub294\uac83\uc774\uae30\ub54c\ubb38\uc5d0 \ud639\uc2dc private-subnet \uc548\uc5d0 \uc704\uce58\ud574\uc57c \ud55c\ub2e4\uace0 \uc0dd\uac01\ud560\uc218 \uc788\uc9c0\ub9cc public-subnet\uc5d0 \uc704\uce58\ud574\uc57c RT\ub97c \ud1b5\ud574 \ud1b5\uc2e0 \uac00\ub2a5, \uae30\uc874\uc5d0 \ub9cc\ub4e0 ap-northeast-2a\uc640 ap-northeast-2c\uc758 public-subnet\uc548\uc5d0 \uac01\uac01 \uc0dd\uc131"),(0,n.kt)("li",{parentName:"ul"},"\uc5f0\uacb0 \uc720\ud615: \ud37c\ube14\ub9ad"),(0,n.kt)("li",{parentName:"ul"},"\ud0c4\ub825\uc801 IP \ud560\ub2f9 ID: \ud0c4\ub825\uc801 IP \ud560\ub2f9 \ud074\ub9ad \ud574\uc11c \ud560\ub2f9(\ud55c\uac1c\uc758 \ud0c4\ub825\uc801 IP\ub294 \ubb34\ub8cc\uc9c0\ub9cc 2\uac1c\uc774\uc0c1\ubd80\ud130\ub294 \uacfc\uae08 \ubc1c\uc0dd)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\ucd1d 2\uac1c\uc758 NAT GW \uc0dd\uc131"))))),(0,n.kt)("h1",{id:"-4"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"\ub77c\uc6b0\ud305-\ud14c\uc774\ube14-\uc0dd\uc131\ubb34\ub8cc"},"\ub77c\uc6b0\ud305 \ud14c\uc774\ube14 \uc0dd\uc131(\ubb34\ub8cc)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\uc88c\uce21 \uba54\ub274 \ub77c\uc6b0\ud305 \ud14c\uc774\ube14 -> \ub77c\uc6b0\ud305 \ud14c\uc774\ube14 \uc0dd\uc131 \ud074\ub9ad")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\uc11c\ube0c\ub137\uc774 4\uac1c\uc774\ubbc0\ub85c 4\uac1c\uc758 \ub77c\uc6b0\ud305 \ud14c\uc774\ube14 \ud544\uc694\n",(0,n.kt)("img",{alt:"RT create",src:a(1262).Z}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\uc774\ub984: \uc6d0\ud558\ub294 \uc774\ub984 \uc9c0\uc815, \ucd1d 4\uac1c\ub97c \ub9cc\ub4e4\uc5b4\uc57c\ud558\ubbc0\ub85c \ud63c\ub780 \ubc29\uc9c0\ub97c \uc704\ud574 \uad6c\ubd84\uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"VPC: \uae30\uc874\uc5d0 \ub9cc\ub4e0 VPC \uc120\ud0dd")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u203b\ub77c\uc6b0\ud305 \ud14c\uc774\ube14 \uc5f0\uacb0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"public subnet case"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"pub-a\uc6a9\uc73c\ub85c \ub9cc\ub4e0 \ub77c\uc6b0\ud305 \ud14c\uc774\ube14 ID \ud074\ub9ad"),(0,n.kt)("li",{parentName:"ul"},"\ud558\ub2e8 \ub77c\uc6b0\ud305 \ud3b8\uc9d1 \ud074\ub9ad -> \ub77c\uc6b0\ud305 \ucd94\uac00 \ud074\ub9ad \ud6c4 \uc67c\ucabd \ub300\uc0c1 0.0.0.0/0, \uc624\ub978\ucabd \ub300\uc0c1 \uc778\ud130\ub137 \uac8c\uc774\ud2b8\uc6e8\uc774 \uc120\ud0dd \ud6c4 \uae30\uc874\uc5d0 \ub9cc\ub4e0 \uac8c\uc774\ud2b8\uc6e8\uc774 \uc120\ud0dd \ud6c4 \ubcc0\uacbd\uc0ac\ud56d \uc800\uc7a5\n",(0,n.kt)("img",{alt:"RT setting",src:a(599).Z})),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ube0c\ub137 \uc5f0\uacb0 -> \uba85\uc2dc\uc801 \uc11c\ube0c\ub137 \uc5f0\uacb0 -> \uc11c\ube0c\ub137 \uc5f0\uacb0 \ud3b8\uc9d1 \ud074\ub9ad"),(0,n.kt)("li",{parentName:"ul"},"pub-a \uc11c\ube0c\ub137 \uccb4\ud06c \ubc0f \uc5f0\uacb0 \uc800\uc7a5"),(0,n.kt)("li",{parentName:"ul"},"\uba85\uc2dc\uc801 \uc11c\ube0c\ub137 \uc5f0\uacb0 \ud655\uc778"),(0,n.kt)("li",{parentName:"ul"},"pub-c\ub3c4 \uc704\uc640 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uc5f0\uacb0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"private subnet case"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"pri-a\uc6a9\uc73c\ub85c \ub9cc\ub4e0 \ub77c\uc6b0\ud305 \ud14c\uc774\ube14 ID \ud074\ub9ad"),(0,n.kt)("li",{parentName:"ul"},"\ud558\ub2e8 \ub77c\uc6b0\ud305 \ud3b8\uc9d1 \ud074\ub9ad -> \ub77c\uc6b0\ud305 \ucd94\uac00 \ud074\ub9ad \ud6c4 \uc67c\ucabd \ub300\uc0c1 0.0.0.0/0, \uc624\ub978\ucabd \ub300\uc0c1 NAT \uac8c\uc774\ud2b8\uc6e8\uc774 \uc120\ud0dd \ud6c4 ap-northeast-2a\uc6a9\uc73c\ub85c \ub9cc\ub4e0 NAT GW \uc120\ud0dd \ud6c4 \ubcc0\uacbd\uc0ac\ud56d \uc800\uc7a5"),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ube0c\ub137 \uc5f0\uacb0 -> \uba85\uc2dc\uc801 \uc11c\ube0c\ub137 \uc5f0\uacb0 -> \uc11c\ube0c\ub137 \uc5f0\uacb0 \ud3b8\uc9d1 \ud074\ub9ad"),(0,n.kt)("li",{parentName:"ul"},"pri-a \uc11c\ube0c\ub137 \uccb4\ud06c \ubc0f \uc5f0\uacb0 \uc800\uc7a5"),(0,n.kt)("li",{parentName:"ul"},"\uba85\uc2dc\uc801 \uc11c\ube0c\ub137 \uc5f0\uacb0 \ud655\uc778"),(0,n.kt)("li",{parentName:"ul"},"pub-c\ub3c4 \uc704\uc640 \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uc5f0\uacb0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"public RT\uc758 \uacbd\uc6b0 \ub77c\uc6b0\ud305\uc5d0 \uac19\uc740 IGW \uc5f0\uacb0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"private RT\uc758 \uacbd\uc6b0 \ub77c\uc6b0\ud305\uc5d0 \uac01\uac01 \ub2e4\ub978 NAT GW \uc5f0\uacb0"))))),(0,n.kt)("h1",{id:"-5"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"bastion-\uc11c\ubc84-\uad6c\uc131"},"Bastion \uc11c\ubc84 \uad6c\uc131"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"vpc -> \ubcf4\uc548\uadf8\ub8f9 -> \ubcf4\uc548\uadf8\ub8f9 \uc0dd\uc131",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ubcf4\uc548 \uadf8\ub8f9 \uc774\ub984"),(0,n.kt)("li",{parentName:"ul"},"\uc124\uba85"),(0,n.kt)("li",{parentName:"ul"},"VPC: \uae30\uc874 EKS-TEST-VPC \uc120\ud0dd"),(0,n.kt)("li",{parentName:"ul"},"\uc778\ubc14\uc6b4\ub4dc \uaddc\uce59 \ucd94\uac00",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc720\ud615: ssh"),(0,n.kt)("li",{parentName:"ul"},"\uc18c\uc2a4: \uac00\uc7a5 \uc88b\uc740\uac74 \ub0b4 IP\uc9c0\ub9cc \ub2e4\ub978 \uc7a5\uc18c\uc5d0\uc11c \ub85c\uadf8\uc778\uc744 \ub9ce\uc774 \ud560\uc2dc Anywhere \uc120\ud0dd(\uc5b4\ub5a4 ip\ub85c \uc811\uc18d\ud558\ub4e0 ssh \uc811\uc18d \uac00\ub2a5)"))),(0,n.kt)("li",{parentName:"ul"},"\ubcf4\uc548 \uadf8\ub8f9 \uc0dd\uc131")))),(0,n.kt)("h1",{parentName:"li",id:"-6"}),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ec2 \uac80\uc0c9 -> \uc778\uc2a4\ud134\uc2a4 \uc2dc\uc791"),(0,n.kt)("li",{parentName:"ul"},"\uc774\ub984 \ubc0f \ud0dc\uadf8: Bastion"),(0,n.kt)("li",{parentName:"ul"},"Amazon Linux \uc120\ud0dd(\ud504\ub9ac\ud2f0\uc5b4 \uba38\uc2e0 \uc774\ubbf8\uc9c0 \uc120\ud0dd)"),(0,n.kt)("li",{parentName:"ul"},"\uc778\uc2a4\ud134\uc2a4 \uc720\ud615: t2.micro(\ud504\ub9ac\ud2f0\uc5b4)"),(0,n.kt)("li",{parentName:"ul"},"\ud0a4\ud398\uc5b4: \uc0c8 \ud0a4\ud398\uc5b4 \uc0dd\uc131 \ud074\ub9ad \ud6c4 \uc774\ub984 \uc785\ub825 -> \uc0dd\uc131"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\ub124\ud2b8\uc6cc\ud06c \uc124\uc815(\ud3b8\uc9d1)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"VPC: \uae30\uc874 \uc0dd\uc131 VPC(EKS-TEST-VPC) \uc120\ud0dd"),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ube0c\ub137: pub-a \uc120\ud0dd(pub-c\ub3c4 \uc0c1\uad00\uc5c6\uc74c)"),(0,n.kt)("li",{parentName:"ul"},"\ud37c\ube14\ub9ad IP \uc790\ub3d9 \ud560\ub2f9: \ud65c\uc131\ud654"),(0,n.kt)("li",{parentName:"ul"},"\ubcf4\uc548\uadf8\ub8f9: \uae30\uc874 \ubcf4\uc548 \uadf8\ub8f9 -> \uc704\uc5d0\uc11c \uc0dd\uc131\ud55c \ubcf4\uc548 \uadf8\ub8f9 \uc120\ud0dd"))),(0,n.kt)("li",{parentName:"ul"},"\uc778\uc2a4\ud134\uc2a4 \uc2dc\uc791"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"bastion-\uc11c\ubc84-\uc5f0\uacb0"},"Bastion \uc11c\ubc84 \uc5f0\uacb0"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc778\uc2a4\ud134\uc2a4 ID \ud074\ub9ad"),(0,n.kt)("li",{parentName:"ul"},"\uc5f0\uacb0 \ud074\ub9ad"),(0,n.kt)("li",{parentName:"ul"},"SSH \uc5f0\uacb0 \ud074\ub9ad\ud558\uc5ec \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131\uc2dc \ub2e4\uc6b4 \ubc1b\uc740 .pem \ud30c\uc77c\uacfc \ud568\uaed8 ssh \uc811\uc18d(putty, mobaxterm)"),(0,n.kt)("li",{parentName:"ul"},"\ub9ac\ub205\uc2a4\ub098 \ub9e5\uc73c\ub85c ssh \uc5f0\uacb0\uc2dc .pem \ud30c\uc77c \uad8c\ud55c ",(0,n.kt)("inlineCode",{parentName:"li"},"chmod 600 ~.pem"),"\uc73c\ub85c \uad8c\ud55c \ubcc0\uacbd \ud6c4 \uc811\uc18d"),(0,n.kt)("li",{parentName:"ul"},"Bastion \uc11c\ubc84\ub85c vpc\ub0b4 \ub2e4\ub978 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc811\uc18d \uac00\ub2a5"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"\uae30\ubcf8-vpc-\uad6c\uc131-\uc644\ub8cc"},"\uae30\ubcf8 vpc \uad6c\uc131 \uc644\ub8cc"))))}s.isMDXComponent=!0},5622:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/1-7a9309477ef9fefaa8d3cd153a32b2f1.png"},3541:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/2-d538e2effe774b9564a8677ffbd43c49.png"},1106:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/3-a59caa564e336bec56b7c0fa6bb1263d.png"},3968:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/4-60aa99d914d4964a1adeca3452f05283.png"},1262:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/5-8b551d6a3380eac960105cfb97865562.png"},599:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/6-503d00a5a057fddd147d0eb39b0a86ad.png"},8443:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/vpc-c1f6d37c7473cf0ba039190dadbe7dba.png"}}]);