"use strict";(self.webpackChunkblog_template=self.webpackChunkblog_template||[]).push([[939],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),i=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=i(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=i(t),k=r,b=u["".concat(o,".").concat(k)]||u[k]||c[k]||l;return t?a.createElement(b,s(s({ref:n},m),{},{components:t})):a.createElement(b,s({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var i=2;i<l;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=t(7462),r=(t(7294),t(3905));const l={slug:"sed command",title:"jenkins pipeline\uc5d0\uc11c sed \ucee4\ub9e8\ub4dc \uc0ac\uc6a9\ud558\uae30",authors:"andes",tags:["jenkins","pipeline","kubernetes","k3s","k9s","\ucfe0\ubc84\ub124\ud2f0\uc2a4","sed","cicd","deploy"]},s=void 0,p={permalink:"/blog/sed command",source:"@site/blog/2022-10-21-jenkins-sed-command/content.md",title:"jenkins pipeline\uc5d0\uc11c sed \ucee4\ub9e8\ub4dc \uc0ac\uc6a9\ud558\uae30",description:"sed \ucee4\ub9e8\ub4dc \uc0ac\uc6a9\ud558\uae30",date:"2022-10-21T00:00:00.000Z",formattedDate:"2022\ub144 10\uc6d4 21\uc77c",tags:[{label:"jenkins",permalink:"/blog/tags/jenkins"},{label:"pipeline",permalink:"/blog/tags/pipeline"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"k3s",permalink:"/blog/tags/k-3-s"},{label:"k9s",permalink:"/blog/tags/k-9-s"},{label:"\ucfe0\ubc84\ub124\ud2f0\uc2a4",permalink:"/blog/tags/\ucfe0\ubc84\ub124\ud2f0\uc2a4"},{label:"sed",permalink:"/blog/tags/sed"},{label:"cicd",permalink:"/blog/tags/cicd"},{label:"deploy",permalink:"/blog/tags/deploy"}],readingTime:1.48,truncated:!1,authors:[{name:"Andes Noh",title:"\uc5f0\uad6c\uc6d0",url:"https://github.com/andes-noh",imageURL:"https://github.com/andes-noh.png",key:"andes"}],prevItem:{title:"eks \uad6c\uc131\ud558\uae30(1) - vpc \uad6c\uc131",permalink:"/blog/eks"},nextItem:{title:"\uc6b0\ubd84\ud22c\uc5d0 k3s \uc124\uce58\ud574\uc11c kubernetes \ud658\uacbd \uad6c\ucd95\ud558\uace0 \uc0b4\ud3b4\ubcf4\uae30(4/4)",permalink:"/blog/k9s command"}},o={authorsImageUrls:[void 0]},i=[{value:"sed \ucee4\ub9e8\ub4dc \uc0ac\uc6a9\ud558\uae30",id:"sed-\ucee4\ub9e8\ub4dc-\uc0ac\uc6a9\ud558\uae30",children:[]}],m={toc:i};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sed-\ucee4\ub9e8\ub4dc-\uc0ac\uc6a9\ud558\uae30"},"sed \ucee4\ub9e8\ub4dc \uc0ac\uc6a9\ud558\uae30"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sed command\ub97c \uc0ac\uc6a9\ud574\uc11c image \ubcc0\uacbd\ud6c4 deploy \uc7ac\ubc30\ud3ec\ud558\uae30"),(0,r.kt)("li",{parentName:"ul"},"CR: Container Registry")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"testk8syaml-\uc608\uc2dc"},"test.k8s.yaml \uc608\uc2dc"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app.kubernetes.io/component: back\n    app.kubernetes.io/name: test\n    app.kubernetes.io/part-of: test\n  name: test\n  namespace: jenkins\nspec:\n  revisionHistoryLimit: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/component: back\n      app.kubernetes.io/name: test\n      app.kubernetes.io/part-of: test\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/component: back\n        app.kubernetes.io/name: test\n        app.kubernetes.io/part-of: test\n    spec:\n      containers:\n        - image: ${YOUR CR}:latest\n          name: app\n          ports:\n            - containerPort: 3000\n          resources: {}\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.kubernetes.io/component: back\n    app.kubernetes.io/name: test\n    app.kubernetes.io/part-of: test\n  name: test\n  namespace: jenkins\nspec:\n  ports:\n    - port: 3000\n      targetPort: 3000\n  selector:\n    app.kubernetes.io/component: back\n    app.kubernetes.io/name: test\n    app.kubernetes.io/part-of: test\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"image-\ub77c\uc778-\ubcc0\uacbd-sed-command-\uc608\uc2dc-\ubc0f-\uc124\uba85"},"image \ub77c\uc778 \ubcc0\uacbd sed command \uc608\uc2dc \ubc0f \uc124\uba85"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'pipeline {\n    agent any\n\n    environment {\n        dockerHubRegistry = \'dockerHubRegistry\'\n    }\n\n    stages {\n        stage(\'Pull\') {\n            steps {\n                git url: "${GIT_URL}", branch: "main", poll: true, changelog: true\n            }\n        }\n\n        stage(\'...\') {\n\n        }\n        ...\n\n              stage( "Deploy to Cluster" ) {\n          steps {\n            script {\n              ...\n              sh """\n              #!/bin/bash\n              cat test.k8s.yml | grep image\n              sed -i \'s|image: .*|image: "${YOUR _CR}:${YOUR _VERSION}"|\' test.k8s.yaml\n              cat test.k8s.yml | grep image\n              """\n              ...\n            }\n          }\n                }\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uccab\ubc88\uc9f8 \ub77c\uc778: test.k8s.yaml\ud30c\uc77c\uc5d0\uc11c image \ub77c\ub294 \uae00\uc790\uac00 \ud3ec\ud568\ub41c \ub77c\uc778 \ucd9c\ub825 \ubc0f \ud655\uc778")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"image: ${YOUR CR}:latest\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ub450\ubc88\uc9f8 \ub77c\uc778: test.k8s.yaml\uc758 image\ub85c \uc2dc\uc791\ud558\ub294 \ub77c\uc778\uc744 sed command\ub85c \uc6d0\ud558\ub294 \uac12\uc73c\ub85c \ubcc0\uacbd\ud6c4 \ud30c\uc77c\uc5d0 \uc801\uc6a9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc138\ubc88\uc9f8 \ub77c\uc778: \ubcc0\uacbd\ub41c image \ub77c\uc778 \ucd9c\ub825 \ubc0f \ud655\uc778"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"image: ${YOUR _CR}:${YOUR _VERSION}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"reference"},"Reference"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devopsian.net/notes/sed-in-jenkinsfile/"},"\ucc38\uace0"))))))}c.isMDXComponent=!0}}]);