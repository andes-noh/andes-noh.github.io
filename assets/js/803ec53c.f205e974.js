"use strict";(self.webpackChunkblog_template=self.webpackChunkblog_template||[]).push([[3320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={slug:"how  to ubuntu ip setting",title:"netplan\uc73c\ub85c \uc6b0\ubd84\ud22c ip \uc138\ud305\ud558\uae30(with WIFI)",authors:"andes",tags:["ubuntu","netplan","\uc6b0\ubd84\ud22c \ub124\ud2b8\uc6cc\ud06c \uc138\ud305","ubuntu ip setting","ubuntu wifi setting"]},i=void 0,p={permalink:"/blog/how  to ubuntu ip setting",source:"@site/blog/2022-08-17-ubuntu-ip-setting/content.md",title:"netplan\uc73c\ub85c \uc6b0\ubd84\ud22c ip \uc138\ud305\ud558\uae30(with WIFI)",description:"1. LAN",date:"2022-08-17T00:00:00.000Z",formattedDate:"2022\ub144 8\uc6d4 17\uc77c",tags:[{label:"ubuntu",permalink:"/blog/tags/ubuntu"},{label:"netplan",permalink:"/blog/tags/netplan"},{label:"\uc6b0\ubd84\ud22c \ub124\ud2b8\uc6cc\ud06c \uc138\ud305",permalink:"/blog/tags/\uc6b0\ubd84\ud22c-\ub124\ud2b8\uc6cc\ud06c-\uc138\ud305"},{label:"ubuntu ip setting",permalink:"/blog/tags/ubuntu-ip-setting"},{label:"ubuntu wifi setting",permalink:"/blog/tags/ubuntu-wifi-setting"}],readingTime:.995,truncated:!1,authors:[{name:"Andes Noh",title:"\uc5f0\uad6c\uc6d0",url:"https://github.com/andes-noh",imageURL:"https://github.com/andes-noh.png",key:"andes"}],nextItem:{title:"\uc6b0\ubd84\ud22c \uc124\uce58 usb \ub9cc\ub4e4\uae30",permalink:"/blog/make ubuntu install usb"}},o={authorsImageUrls:[void 0]},u=[{value:"1. LAN",id:"1-lan",children:[]},{value:"2. WIFI",id:"2-wifi",children:[]}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-lan"},"1. LAN"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"cd-etcnetplan-\ucee4\ub9e8\ub4dc\ub97c-\uc774\uc6a9\ud574-netplan-\ud3f4\ub354\ub85c-\uc774\ub3d9"},(0,a.kt)("inlineCode",{parentName:"h3"},"cd /etc/netplan")," \ucee4\ub9e8\ub4dc\ub97c \uc774\uc6a9\ud574 netplan \ud3f4\ub354\ub85c \uc774\ub3d9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"\ud3f4\ub354-\uc548\uc5d0-\uc788\ub294-yaml\ud30c\uc77c\uc744-\ud655\uc778-\ud6c4-\uc544\ub798-\ud615\uc2dd\uc5d0-\ub9de\ucdb0-\uc218\uc815\uc6b0\ubd84\ud22c-\ubc84\uc804\uc5d0-\ub530\ub77c-\ud30c\uc77c-\uc774\ub984\uc740-\uc0c1\uc774"},"\ud3f4\ub354 \uc548\uc5d0 \uc788\ub294 yaml\ud30c\uc77c\uc744 \ud655\uc778 \ud6c4 \uc544\ub798 \ud615\uc2dd\uc5d0 \ub9de\ucdb0 \uc218\uc815(\uc6b0\ubd84\ud22c \ubc84\uc804\uc5d0 \ub530\ub77c \ud30c\uc77c \uc774\ub984\uc740 \uc0c1\uc774)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"\uc544\ub798-\uc124\uc815\uc758-enp3s0-\ubd80\ubd84\uc740-\ub79c\uce74\ub4dc\uc774\uae30\ub54c\ubb38\uc5d0-\ub2e4\ub97c\uc218-\uc788\uc74c"},"\uc544\ub798 \uc124\uc815\uc758 ",(0,a.kt)("inlineCode",{parentName:"h3"},"enp3s0")," \ubd80\ubd84\uc740 \ub79c\uce74\ub4dc\uc774\uae30\ub54c\ubb38\uc5d0 \ub2e4\ub97c\uc218 \uc788\uc74c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"dhcp-\uc124\uc815"},"DHCP \uc124\uc815"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"network:\n  ethernets:\n    enp3s0:\n      dhcp4: true\n  version: 2\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"static"},"STATIC"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"network:\n  ethernets:\n    enp3s0:\n      dhcp4: no\n      addresses: [192.168.0.167/24]\n      gateway4: 192.168.0.1\n      nameservers:\n        addresses: [8.8.8.8, 1.1.1.1]\n      optional: true\n  version: 2\n")),(0,a.kt)("h2",{id:"2-wifi"},"2. WIFI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"\uc6b0\ubd84\ud22c-\uc124\uce58\uc2dc-wifi-\uc138\ud305\uc744-\ud588\ub2e4\uba74--wifiyaml-\ud30c\uc77c-\uc874\uc7ac"},"\uc6b0\ubd84\ud22c \uc124\uce58\uc2dc Wifi \uc138\ud305\uc744 \ud588\ub2e4\uba74 ~-wifi.yaml \ud30c\uc77c \uc874\uc7ac")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"\ud30c\uc77c\uc774-\uc5c6\ub2e4\uba74-\ub9cc\ub4e4\uc5b4\uc11c-\ucd94\uac00"},"\ud30c\uc77c\uc774 \uc5c6\ub2e4\uba74 \ub9cc\ub4e4\uc5b4\uc11c \ucd94\uac00")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"\ud639\uc740-\ub514\ud3f4\ud2b8-yaml-\ud30c\uc77c\uc5d0-\ucd94\uac00"},"\ud639\uc740 \ub514\ud3f4\ud2b8 yaml \ud30c\uc77c\uc5d0 \ucd94\uac00")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"dhcp"},"DHCP"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"network:\n  version: 2\n  wifis:\n    wlp1s0:\n      access-points:\n        'YOUR SSID':\n          password: 'YOUR PASSWORD'\n    dhcp4: true\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"static-1"},"STATIC"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"network:\n  version: 2\n  wifis:\n    wlp1s0:\n      addresses: [192.168.0.167/24]\n      gateway4: 192.168.0.1\n      nameservers:\n        addresses: [8.8.8.8, 1.1.1.1]\n      access-points:\n        UNOMIC_LTS 2G:\n          password: unomic12$#^21\n      dhcp4: no\n")))}c.isMDXComponent=!0}}]);