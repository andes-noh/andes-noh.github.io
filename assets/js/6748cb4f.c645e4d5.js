"use strict";(self.webpackChunkblog_template=self.webpackChunkblog_template||[]).push([[9946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=l,b=m["".concat(s,".").concat(k)]||m[k]||c[k]||r;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={slug:"see k3s via local client",title:"\uc6b0\ubd84\ud22c\uc5d0 k3s \uc124\uce58\ud574\uc11c kubernetes \ud658\uacbd \uad6c\ucd95\ud558\uace0 \uc0b4\ud3b4\ubcf4\uae30(3/4)",authors:"andes",tags:["ubuntu","k8s","kubernetes","k3s","k9s","\ucfe0\ubc84\ub124\ud2f0\uc2a4"]},i=void 0,o={permalink:"/blog/see k3s via local client",source:"@site/blog/2022-08-22-connected-client-via-ssh/content.md",title:"\uc6b0\ubd84\ud22c\uc5d0 k3s \uc124\uce58\ud574\uc11c kubernetes \ud658\uacbd \uad6c\ucd95\ud558\uace0 \uc0b4\ud3b4\ubcf4\uae30(3/4)",description:"ssh \uc811\uc18d\uc744 \uc774\uc6a9\ud574 local pc\uc5d0\uc11c remote k3s \uc0b4\ud3b4\ubcf4\uae30",date:"2022-08-22T00:00:00.000Z",formattedDate:"2022\ub144 8\uc6d4 22\uc77c",tags:[{label:"ubuntu",permalink:"/blog/tags/ubuntu"},{label:"k8s",permalink:"/blog/tags/k-8-s"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"k3s",permalink:"/blog/tags/k-3-s"},{label:"k9s",permalink:"/blog/tags/k-9-s"},{label:"\ucfe0\ubc84\ub124\ud2f0\uc2a4",permalink:"/blog/tags/\ucfe0\ubc84\ub124\ud2f0\uc2a4"}],readingTime:1.27,truncated:!1,authors:[{name:"Andes Noh",title:"\uc5f0\uad6c\uc6d0",url:"https://github.com/andes-noh",imageURL:"https://github.com/andes-noh.png",key:"andes"}],nextItem:{title:"\uc6b0\ubd84\ud22c\uc5d0 k3s \uc124\uce58\ud574\uc11c kubernetes \ud658\uacbd \uad6c\ucd95\ud558\uace0 \uc0b4\ud3b4\ubcf4\uae30(1/4)",permalink:"/blog/how to install k3s"}},s={authorsImageUrls:[void 0]},p=[{value:"ssh \uc811\uc18d\uc744 \uc774\uc6a9\ud574 local pc\uc5d0\uc11c remote k3s \uc0b4\ud3b4\ubcf4\uae30",id:"ssh-\uc811\uc18d\uc744-\uc774\uc6a9\ud574-local-pc\uc5d0\uc11c-remote-k3s-\uc0b4\ud3b4\ubcf4\uae30",children:[]}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ssh-\uc811\uc18d\uc744-\uc774\uc6a9\ud574-local-pc\uc5d0\uc11c-remote-k3s-\uc0b4\ud3b4\ubcf4\uae30"},"ssh \uc811\uc18d\uc744 \uc774\uc6a9\ud574 local pc\uc5d0\uc11c remote k3s \uc0b4\ud3b4\ubcf4\uae30"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h3",{parentName:"li",id:"\ud544\uc694-\ud30c\uc77c"},"\ud544\uc694 \ud30c\uc77c"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://andes-noh.github.io/blog/how%20to%20install%20k9s#3-k3s-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0",title:"\ucc38\uc870"},"\ucc38\uc870")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h3",{parentName:"li",id:"scp-\uba85\ub839\uc5b4-\uc0ac\uc6a9\ud574\uc11c-local-\ud074\ub77c\uc774\uc5b8\ud2b8\ucabd\uc73c\ub85c-k3syaml-\ud30c\uc77c-\uc774\ub3d9"},"scp \uba85\ub839\uc5b4 \uc0ac\uc6a9\ud574\uc11c local \ud074\ub77c\uc774\uc5b8\ud2b8\ucabd\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"h3"},"k3s.yaml")," \ud30c\uc77c \uc774\ub3d9"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scp -P [\ud3ec\ud2b8] [\uc6d0\uaca9 \uc11c\ubc84 \uc774\ub984]@[\uc6d0\uaca9\uc11c\ubc84 \uc544\uc774\ud53c]:[\uac00\uc838\uc62c \ud30c\uc77c \uacbd\ub85c] [\ubd99\uc5ec\ub123\uc744 \uacbd\ub85c]")),(0,l.kt)("li",{parentName:"ul"},"\ud3ec\ud2b8\ub294 \ucd94\uac00 \uc635\uc158"),(0,l.kt)("li",{parentName:"ul"},"\uc18c\uc720\uc790 \ubcc0\uacbd \ud560\uac83",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc18c\uc720\uc790 \ubcc0\uacbd \uba85\ub839(chown)\uc740 \uc774\uc804 \ud3ec\uc2a4\ud305 \ud655\uc778"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h3",{parentName:"li",id:"\uc6d0\uaca9-\uc11c\ubc84-ssh\uc811\uc18d"},"\uc6d0\uaca9 \uc11c\ubc84 ssh\uc811\uc18d"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ssh [\uc6d0\uaca9 \uc11c\ubc84 \uc774\ub984]@[\uc6d0\uaca9\uc11c\ubc84 \uc544\uc774\ud53c] -p[\ud3ec\ud2b8] -L 6443:localhost:6443")),(0,l.kt)("li",{parentName:"ul"},"-L: \ud130\ub110\ub9c1 \uc635\uc158"),(0,l.kt)("li",{parentName:"ul"},"A\uac00 B\uc5d0 \uc811\uadfc\uac00\ub2a5, B\uac00 C\uc5d0 \uc811\uadfc\uac00\ub2a5, A\ub294 C\uc5d0 \uc811\uadfc \ubd88\uac00\ub2a5\uc77c\ub54c -L \uc0ac\uc6a9\uc2dc A\uac00 C\uc5d0 \uc811\uadfc\uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"\uc774 \uacbd\uc6b0\ub294 k8s default \ud3ec\ud2b8\uc778 6443\uc73c\ub85c \ud130\ub110\ub9c1"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h3",{parentName:"li",id:"\ucd94\uac00-\ud130\ubbf8\ub110-\uc624\ud508"},"\ucd94\uac00 \ud130\ubbf8\ub110 \uc624\ud508"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc704\uc758 \uc811\uc18d \ud130\ubbf8\ub110\uc740 \uadf8\ub300\ub85c \ub450\uace0"),(0,l.kt)("li",{parentName:"ul"},"\uc544\ub798 \uba85\ub839\uc5b4 \uc2e4\ud589"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export KUBECONFIG=[local \ud074\ub77c\uc774\uc5b8\ud2b8\ucabd\uc73c\ub85c \ubcf5\uc0ac\ud574\uc628 "),"k3s.yaml",(0,l.kt)("inlineCode",{parentName:"li"}," \ud30c\uc77c \uacbd\ub85c]")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h3",{parentName:"li",id:"k9s-\uc2e4\ud589"},"k9s \uc2e4\ud589"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"k9s"))))))}c.isMDXComponent=!0}}]);