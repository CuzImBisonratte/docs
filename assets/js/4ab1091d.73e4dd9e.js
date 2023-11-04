"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:99,title:"Ping",tags:["Ping","Latency","Latency Test","Latency Check","Check","Test","Ping Test"]},i=void 0,s={unversionedId:"endpoints/ping",id:"endpoints/ping",title:"Ping",description:"The Ping-Endpoint returns the latency between the API-Server and the Database-Server.",source:"@site/docs/endpoints/ping.md",sourceDirName:"endpoints",slug:"/endpoints/ping",permalink:"/next/endpoints/ping",draft:!1,editUrl:"https://github.com/noten-app/docs/tree/main/docs/endpoints/ping.md",tags:[{label:"Ping",permalink:"/next/tags/ping"},{label:"Latency",permalink:"/next/tags/latency"},{label:"Latency Test",permalink:"/next/tags/latency-test"},{label:"Latency Check",permalink:"/next/tags/latency-check"},{label:"Check",permalink:"/next/tags/check"},{label:"Test",permalink:"/next/tags/test"},{label:"Ping Test",permalink:"/next/tags/ping-test"}],version:"current",lastUpdatedBy:"Konstantin Protzen",lastUpdatedAt:1699121157,formattedLastUpdatedAt:"Nov 4, 2023",sidebarPosition:99,frontMatter:{sidebar_position:99,title:"Ping",tags:["Ping","Latency","Latency Test","Latency Check","Check","Test","Ping Test"]},sidebar:"tutorialSidebar",previous:{title:"Grades",permalink:"/next/endpoints/grades"},next:{title:"Tutorials",permalink:"/next/category/tutorials"}},p={},l=[{value:"GET /ping/",id:"get-ping",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Ping-Endpoint returns the latency between the API-Server and the Database-Server.",(0,a.kt)("br",{parentName:"p"}),"\n","It can be used to check if the API-Server AND the Database-Servers are Online.",(0,a.kt)("br",{parentName:"p"}),"\n","Also it does NOT require Authentication!"),(0,a.kt)("h2",{id:"get-ping"},"GET /ping/"),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "GET",\n  url: "https://api.noten-app.de/ping",\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ping": "0.564ms"\n}\n')))}d.isMDXComponent=!0}}]);