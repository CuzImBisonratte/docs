"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3764],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,g=u["".concat(i,".").concat(m)]||u[m]||c[m]||s;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const s={sidebar_position:3,title:"Years",tags:["Years","Year","Management","School","Grade"]},o=void 0,l={unversionedId:"endpoints/years",id:"endpoints/years",title:"Years",description:"Year-Management is a new Feature introduced in Noten-App-2.4.0.",source:"@site/docs/endpoints/years.md",sourceDirName:"endpoints",slug:"/endpoints/years",permalink:"/next/endpoints/years",draft:!1,editUrl:"https://github.com/noten-app/docs/tree/main/docs/endpoints/years.md",tags:[{label:"Years",permalink:"/next/tags/years"},{label:"Year",permalink:"/next/tags/year"},{label:"Management",permalink:"/next/tags/management"},{label:"School",permalink:"/next/tags/school"},{label:"Grade",permalink:"/next/tags/grade"}],version:"current",lastUpdatedBy:"Konstantin Protzen",lastUpdatedAt:1699118766,formattedLastUpdatedAt:"Nov 4, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Years",tags:["Years","Year","Management","School","Grade"]},sidebar:"tutorialSidebar",previous:{title:"Classes",permalink:"/next/endpoints/subjects"},next:{title:"Grades",permalink:"/next/endpoints/grades"}},i={},p=[{value:"Endpoints and Methods",id:"endpoints-and-methods",level:2},{value:"GET /years/",id:"get-years",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"POST /years/",id:"post-years",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3},{value:"DELETE /years/{:id}",id:"delete-yearsid",level:2},{value:"Request",id:"request-2",level:3},{value:"Response",id:"response-2",level:3},{value:"PATCH /years/{:id}",id:"patch-yearsid",level:2},{value:"Request",id:"request-3",level:3},{value:"Response",id:"response-3",level:3}],d={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"New Endpoint",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Year-Management is a new Feature introduced in Noten-App-2.4.0.",(0,r.kt)("br",{parentName:"p"}),"\n","Therefore, this Endpoint is also new.")),(0,r.kt)("h2",{id:"endpoints-and-methods"},"Endpoints and Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoints"),(0,r.kt)("th",{parentName:"tr",align:null},"Methods"),(0,r.kt)("th",{parentName:"tr",align:null},"Use"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/years/"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"Get a List of all Years")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/years/"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new Year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/years/{:id}/"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a Year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/years/{:id}/"),(0,r.kt)("td",{parentName:"tr",align:null},"PATCH"),(0,r.kt)("td",{parentName:"tr",align:null},"Change Year details")))),(0,r.kt)("h2",{id:"get-years"},"GET /years/"),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "GET",\n  url: "https://api.noten-app.de/v2/years/",\n  headers: { Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun" },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "sjdu6a9j",\n    "name": "4th Grade"\n  },\n  {\n    "id": "a76ak8g8",\n    "name": "5th Grade"\n  }\n]\n')),(0,r.kt)("h2",{id:"post-years"},"POST /years/"),(0,r.kt)("h3",{id:"request-1"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "POST",\n  url: "https://api.noten-app.de/v2/years",\n  headers: {\n    Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",\n    "Content-Type": "application/json",\n  },\n  data: {\n    name: "6th Grade",\n  },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,r.kt)("h3",{id:"response-1"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "id": "asd7jda9"\n}\n')),(0,r.kt)("h2",{id:"delete-yearsid"},"DELETE /years/{:id}"),(0,r.kt)("h3",{id:"request-2"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "DELETE",\n  url: "https://api.noten-app.de/v2/years/asd7jda9",\n  headers: {\n    Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",\n  },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,r.kt)("h3",{id:"response-2"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true\n}\n')),(0,r.kt)("h2",{id:"patch-yearsid"},"PATCH /years/{:id}"),(0,r.kt)("h3",{id:"request-3"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "PATCH",\n  url: "https://api.noten-app.de/v2/years/asd7jda9",\n  headers: {\n    Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",\n    "Content-Type": "application/json",\n  },\n  data: {\n    name: "3rd Grade",\n  },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,r.kt)("h3",{id:"response-3"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true\n}\n')))}c.isMDXComponent=!0}}]);