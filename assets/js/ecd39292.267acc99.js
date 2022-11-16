"use strict";(self.webpackChunkblog_template=self.webpackChunkblog_template||[]).push([[9418],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function A(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,i=A(e,["components","mdxType","originalType","parentName"]),o=p(a),k=n,m=o["".concat(u,".").concat(k)]||o[k]||c[k]||l;return a?r.createElement(m,s(s({ref:t},i),{},{components:a})):r.createElement(m,s({ref:t},i))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=o;var A={};for(var u in t)hasOwnProperty.call(t,u)&&(A[u]=t[u]);A.originalType=e,A.mdxType="string"==typeof e?e:n,s[1]=A;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},5385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>A,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={slug:"eks cluster",title:"eks \uad6c\uc131\ud558\uae30(2) - eks cluster \uc0dd\uc131",authors:"andes",tags:["kubernetes","aws","eks","vpc"]},s=void 0,A={permalink:"/blog/eks cluster",source:"@site/blog/2022-11-14-eks-cluster/content.md",title:"eks \uad6c\uc131\ud558\uae30(2) - eks cluster \uc0dd\uc131",description:"\uc21c\uc11c",date:"2022-11-14T00:00:00.000Z",formattedDate:"2022\ub144 11\uc6d4 14\uc77c",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"aws",permalink:"/blog/tags/aws"},{label:"eks",permalink:"/blog/tags/eks"},{label:"vpc",permalink:"/blog/tags/vpc"}],readingTime:1.9,truncated:!1,authors:[{name:"Andes Noh",title:"\uc5f0\uad6c\uc6d0",url:"https://github.com/andes-noh",imageURL:"https://github.com/andes-noh.png",key:"andes"}],prevItem:{title:"eks \uad6c\uc131\ud558\uae30(3) - worknode \uc0dd\uc131 \ubc0f \ud655\uc778",permalink:"/blog/eks worknode"},nextItem:{title:"eks \uad6c\uc131\ud558\uae30(1) - vpc \uad6c\uc131",permalink:"/blog/eks vpc"}},u={authorsImageUrls:[void 0]},p=[{value:"\uc21c\uc11c",id:"\uc21c\uc11c",children:[]},{value:"eks cluster \uc0dd\uc131",id:"eks-cluster-\uc0dd\uc131",children:[]}],i={toc:p};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\uc21c\uc11c"},"\uc21c\uc11c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"vpc-\uad6c\uc1311"},"vpc \uad6c\uc131(1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"eks-cluster-\uc0dd\uc1312---"},"eks cluster \uc0dd\uc131(2) - \u2605")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"worknode-\uc0dd\uc131-\ubc0f-\ud655\uc7783"},"worknode \uc0dd\uc131 \ubc0f \ud655\uc778(3)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"eks-\uc0ad\uc81c4"},"eks \uc0ad\uc81c(4)"))),(0,n.kt)("h2",{id:"eks-cluster-\uc0dd\uc131"},"eks cluster \uc0dd\uc131"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"\uae30\uc874-vpc-\uad6c\uc131\ub3c4"},"\uae30\uc874 VPC \uad6c\uc131\ub3c4"),(0,n.kt)("img",{alt:"vpc",src:a(3179).Z}))),(0,n.kt)("h1",{id:""}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"role-\uc0dd\uc131"},"role \uc0dd\uc131"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"IAM \ub85c\uadf8\uc778 -> IAM \uac80\uc0c9 -> \uc5ed\ud560(\uc5d1\uc138\uc2a4 \uad00\ub9ac) -> \uc5ed\ud560 \ub9cc\ub4e4\uae30"),(0,n.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9 \uc0ac\ub840 EKS-Cluster \uc120\ud0dd\n",(0,n.kt)("img",{alt:"role create",src:a(4515).Z})),(0,n.kt)("li",{parentName:"ul"},"\uad8c\ud55c \ucd94\uac00 -> \ub2e4\uc74c"),(0,n.kt)("li",{parentName:"ul"},"\uc774\ub984 \uc9c0\uc815(EKS-ControlPlane-Role), \uac80\ud1a0 \ubc0f \uc0dd\uc131 -> \uc5ed\ud560 \uc0dd\uc131"),(0,n.kt)("li",{parentName:"ul"},"\uc5ed\ud560 \uc0dd\uc131 \uc644\ub8cc \ud655\uc778\n",(0,n.kt)("img",{alt:"role create complete",src:a(4333).Z}))))),(0,n.kt)("h1",{id:"-1"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"\ubcf4\uc548-\uadf8\ub8f9-\uc0dd\uc131"},"\ubcf4\uc548 \uadf8\ub8f9 \uc0dd\uc131"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"vpc \uac80\uc0c9 -> \ubcf4\uc548\uadf8\ub8f9 -> \ubcf4\uc548 \uadf8\ub8f9 \uc0dd\uc131\n",(0,n.kt)("img",{alt:"SG create",src:a(8023).Z}),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc774\ub984"),(0,n.kt)("li",{parentName:"ul"},"\uc124\uba85"),(0,n.kt)("li",{parentName:"ul"},"VPC: EKS\uc6a9 \uc120\ud0dd"),(0,n.kt)("li",{parentName:"ul"},"\uc778\ubc14\uc6b4\ub4dc \uaddc\uce59 \ucd94\uac00: \uc0ac\uc9c4\uacfc \uac19\uc774 \ud504\ub85c\ud1a0\ucf5c \ubc0f \ud3ec\ud2b8 \uc9c0\uc815(kubernetes \ud1b5\uc2e0\uacfc \uad00\ub828 \uc788\ub294 \ud3ec\ud2b8), \uc18c\uc2a4\ub294 Bastion server \ubcf4\uc548 \uadf8\ub8f9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TCP: 443"),(0,n.kt)("li",{parentName:"ul"},"TCP: 10250"),(0,n.kt)("li",{parentName:"ul"},"TCP: 53"),(0,n.kt)("li",{parentName:"ul"},"UDP: 53"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/sec-group-reqs.html"},"Amazon EKS \ubcf4\uc548 \uadf8\ub8f9 \uc694\uad6c \uc0ac\ud56d \ubc0f \uace0\ub824 \uc0ac\ud56d"))))))),(0,n.kt)("h1",{id:"-2"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"eks-\uc0dd\uc131"},"eks \uc0dd\uc131"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"eks \uac80\uc0c9 -> \ud074\ub7ec\uc2a4\ud130 \ucd94\uac00 -> \uc0dd\uc131"),(0,n.kt)("li",{parentName:"ul"},"\ud074\ub7ec\uc2a4\ud130 \uad6c\uc131\n",(0,n.kt)("img",{alt:"eks create1",src:a(8375).Z}),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc774\ub984: EKS-Cluster"),(0,n.kt)("li",{parentName:"ul"},"\ubc84\uc804: \uae30\ubcf8"),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4 \uc5ed\ud560: EKS-ControlPlane-Role"))),(0,n.kt)("li",{parentName:"ul"},"\ub124\ud2b8\uc6cc\ud0b9 \uc9c0\uc815\n",(0,n.kt)("img",{alt:"net",src:a(73).Z}),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"VPC: EKS-VPC"),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ube0c\ub137: pub, pri \uac01\uac01 2\uac1c\uc529 \ubaa8\ub450 \uc120\ud0dd(\ud6c4\uc5d0 private subnet\uc5d0 \uc874\uc7ac\ud558\ub294 \uc6cc\ud06c \ub178\ub4dc\ub4e4\uc758 \uc678\ubd80 \ud1b5\uc2e0\uc744 \ub300\ube44\ud574 public subnet\ub3c4 \ud3ec\ud568\ud574 \ud074\ub7ec\uc2a4\ud130 \uc0dd\uc131)"),(0,n.kt)("li",{parentName:"ul"},"\ubcf4\uc548 \uadf8\ub8f9: \uc704\uc5d0\uc11c \uc0dd\uc131\ud55c \ubcf4\uc548 \uadf8\ub8f9 \uc120\ud0dd"))),(0,n.kt)("li",{parentName:"ul"},"\ud074\ub7ec\uc2a4\ud130 \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc5d1\uc138\uc2a4\n",(0,n.kt)("img",{alt:"ep",src:a(5088).Z}),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud504\ub77c\uc774\ube57 \uc120\ud0dd"))),(0,n.kt)("li",{parentName:"ul"},"\ub85c\uae45 \uad6c\uc131\n",(0,n.kt)("img",{alt:"logging",src:a(1068).Z})),(0,n.kt)("li",{parentName:"ul"},"\uac80\ud1a0 \ubc0f \uc0dd\uc131 -> \uc0dd\uc131")))),(0,n.kt)("h1",{id:"-3"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"eks-\uc0dd\uc131\uc911\uc218\ubd84-\uc18c\uc694"},"eks \uc0dd\uc131\uc911(\uc218\ubd84 \uc18c\uc694)"),(0,n.kt)("img",{alt:"creating",src:a(544).Z}))),(0,n.kt)("h1",{id:"-4"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"eks-\uc0dd\uc131-\uc644\ub8cc"},"eks \uc0dd\uc131 \uc644\ub8cc"),(0,n.kt)("img",{alt:"complete",src:a(5672).Z}))))}c.isMDXComponent=!0},4515:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1-12862fb395d395e6e054637c21644495.png"},4333:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},8375:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/3-e6f7358a955610b9cf29e2863ec3ccb8.png"},8023:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/4-5436cbf711b2c6e2f67b02c9120d21ab.png"},73:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/5-090f720758bc5d5558f5b984ba14bf90.png"},5088:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/6-9e3e1884feadb41c8fd24f1b182056da.png"},1068:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/7-11b77fad38a85e7bfa5608ac2bea1ecf.png"},544:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/8-98d7e819be533d654e8c72befb02c33f.jpeg"},5672:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/9-8bc795cd5ed0bbdcd8779fbe41578aa4.jpeg"},3179:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/vpc-c1f6d37c7473cf0ba039190dadbe7dba.png"}}]);