"use strict";(self.webpackChunkblog_template=self.webpackChunkblog_template||[]).push([[5350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,w=u["".concat(s,".").concat(m)]||u[m]||b[m]||o;return n?r.createElement(w,a(a({ref:t},p),{},{components:n})):r.createElement(w,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const o={slug:"windows wsl homebrew install",title:"\uc708\ub3c4\uc6b0 Homebrew \uc124\uce58\ud558\uae30 (with wsl2)",authors:"andes",tags:["windows","wsl2","homebrew"]},a=void 0,i={permalink:"/blog/windows wsl homebrew install",source:"@site/blog/2022-08-10-windows-wsl-Homebrew/content.md",title:"\uc708\ub3c4\uc6b0 Homebrew \uc124\uce58\ud558\uae30 (with wsl2)",description:"1. Homebrew\ub780?",date:"2022-08-10T00:00:00.000Z",formattedDate:"2022\ub144 8\uc6d4 10\uc77c",tags:[{label:"windows",permalink:"/blog/tags/windows"},{label:"wsl2",permalink:"/blog/tags/wsl-2"},{label:"homebrew",permalink:"/blog/tags/homebrew"}],readingTime:.775,truncated:!1,authors:[{name:"Andes Noh",title:"\uc5f0\uad6c\uc6d0",url:"https://github.com/andes-noh",imageURL:"https://github.com/andes-noh.png",key:"andes"}],prevItem:{title:"\uc708\ub3c4\uc6b0 choco\ub85c \ub178\ub4dc \uc124\uce58\ud574\ubcf4\uae30",permalink:"/blog/windows package choco & node install"},nextItem:{title:"\uc6b0\ubd84\ud22c \ubd80\ud305 \uc2dc\uac04 \ub2e8\ucd95 (with network setting)",permalink:"/blog/reduce ubuntu booting time"}},s={authorsImageUrls:[void 0]},c=[{value:"1. Homebrew\ub780?",id:"1-homebrew\ub780",children:[]},{value:"2. \uc124\uce58 \ubc29\ubc95",id:"2-\uc124\uce58-\ubc29\ubc95",children:[]},{value:"3. \uc124\uce58 \ud655\uc778",id:"3-\uc124\uce58-\ud655\uc778",children:[]}],p={toc:c};function b(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-homebrew\ub780"},"1. Homebrew\ub780?"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"brew",src:n(7362).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud130\ubbf8\ub110\uc5d0\uc11c \uba85\ub839\uc744 \uc2e4\ud589\ud558\ub294 \uac83\ub9cc\uc73c\ub85c, \ud328\ud0a4\uc9c0 \uc124\uce58 \ubc0f \uc81c\uac70\uac00 \uc6a9\uc774\ud558\uac8c \ud560 \uc218\uc788\uac8c \ud574\uc8fc\ub294 \ud328\ud0a4\uc9c0 \uad00\ub9ac \ub3c4\uad6c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"brew install aaa bbb ccc"))),(0,l.kt)("h2",{id:"2-\uc124\uce58-\ubc29\ubc95"},"2. \uc124\uce58 \ubc29\ubc95"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"wsl2 \uc124\uce58\ud558\uae30(\uc124\uce58 \ud544\uc218): ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/ko-kr/windows/wsl/install",title:"go wsl"},"\uc708\ub3c4\uc6b0 Wsl2 \uc124\uce58\ubc29\ubc95"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"brew \uc124\uce58 \ubc0f \ud658\uacbd \ubcc0\uc218 \ub4f1\ub85d"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'// \uc124\uce58\n$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n\n// \ud658\uacbd\ubcc0\uc218 \ub4f1\ub85d\n// \ud55c\ub77c\uc778\uc529\n\n$ test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)\n$ test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)\n$ test -r ~/.bash_profile && echo "eval \\$($(brew --prefix)/bin/brew shellenv)" >>~/.bash_profile\n$ echo "eval \\$($(brew --prefix)/bin/brew shellenv)" >>~/.profile\n')))),(0,l.kt)("h2",{id:"3-\uc124\uce58-\ud655\uc778"},"3. \uc124\uce58 \ud655\uc778"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"brew \uc785\ub825\n",(0,l.kt)("img",{alt:"tobe",src:n(3048).Z}))))}b.isMDXComponent=!0},7362:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/brew-b4b0117892f2bbc73bd62f0f97ef166f.png"},3048:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tobe-ab2766e2c8b2a45cb37d2903af1e8ac0.png"}}]);