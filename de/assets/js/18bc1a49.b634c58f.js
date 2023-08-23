"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2493],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),k=i,h=d["".concat(u,".").concat(k)]||d[k]||c[k]||a;return t?r.createElement(h,s(s({ref:n},p),{},{components:t})):r.createElement(h,s({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=k;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3645:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:1,title:"Authentifizierung",tags:["Auth","Authentifizierung","Login","Token","Tokens","Refresh","Refresh Token","Refresh Tokens","Erneuern","Erneuerungs","Erneuerungs Token","Erneuerungs Tokens"]},s=void 0,o={unversionedId:"endpoints/authentication",id:"endpoints/authentication",title:"Authentifizierung",description:"Um jegliche Endpunkte der API zu verwenden, musst du dich Authentifizieren.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/endpoints/authentication.md",sourceDirName:"endpoints",slug:"/endpoints/authentication",permalink:"/de/next/endpoints/authentication",draft:!1,editUrl:"https://github.com/noten-app/docs/tree/main/docs/endpoints/authentication.md",tags:[{label:"Auth",permalink:"/de/next/tags/auth"},{label:"Authentifizierung",permalink:"/de/next/tags/authentifizierung"},{label:"Login",permalink:"/de/next/tags/login"},{label:"Token",permalink:"/de/next/tags/token"},{label:"Tokens",permalink:"/de/next/tags/tokens"},{label:"Refresh",permalink:"/de/next/tags/refresh"},{label:"Refresh Token",permalink:"/de/next/tags/refresh-token"},{label:"Refresh Tokens",permalink:"/de/next/tags/refresh-tokens"},{label:"Erneuern",permalink:"/de/next/tags/erneuern"},{label:"Erneuerungs",permalink:"/de/next/tags/erneuerungs"},{label:"Erneuerungs Token",permalink:"/de/next/tags/erneuerungs-token"},{label:"Erneuerungs Tokens",permalink:"/de/next/tags/erneuerungs-tokens"}],version:"current",lastUpdatedBy:"Konstantin Protzen",lastUpdatedAt:1692736756,formattedLastUpdatedAt:"22. Aug. 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Authentifizierung",tags:["Auth","Authentifizierung","Login","Token","Tokens","Refresh","Refresh Token","Refresh Tokens","Erneuern","Erneuerungs","Erneuerungs Token","Erneuerungs Tokens"]},sidebar:"tutorialSidebar",previous:{title:"Endpoints",permalink:"/de/next/category/endpoints"},next:{title:"Homework",permalink:"/de/next/endpoints/homework"}},u={},l=[{value:"Einen Access-Token anfragen",id:"einen-access-token-anfragen",level:2},{value:"Authentifizierungs URL (Beispiel)",id:"authentifizierungs-url-beispiel",level:3},{value:"Access-Token Antwort",id:"access-token-antwort",level:3},{value:"Code-Beispiel",id:"code-beispiel",level:3},{value:"Erneuern eines Access-Tokens",id:"erneuern-eines-access-tokens",level:2},{value:"Authentifizierungs-URL (Beispiel)",id:"authentifizierungs-url-beispiel-1",level:3},{value:"Code-Beispiele",id:"code-beispiele",level:3},{value:"Authentifizierung an anderen Endpunkten",id:"authentifizierung-an-anderen-endpunkten",level:2},{value:"Code-Beispiel",id:"code-beispiel-1",level:3}],p={toc:l},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Um jegliche Endpunkte der API zu verwenden, musst du dich Authentifizieren."),(0,i.kt)("p",null,"Alle Authentifizierungs-Endpunkte nutzen den RFC6749-(OAuth2.0)-Standart."),(0,i.kt)("p",null,"Aktuell wird nur der ",(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6749#section-4.3"},(0,i.kt)("inlineCode",{parentName:"a"},"Resource Owner Password Credentials Grant"))," unterst\xfctzt."),(0,i.kt)("h1",{id:"endpunkte-und-methoden"},"Endpunkte und Methoden"),(0,i.kt)("h2",{id:"einen-access-token-anfragen"},"Einen Access-Token anfragen"),(0,i.kt)("h3",{id:"authentifizierungs-url-beispiel"},"Authentifizierungs URL (Beispiel)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://api.noten-app.de/v1/auth/token?grant_type=password&username=johndoe&password=A3ddj3w\n")),(0,i.kt)("p",null,"Der Wert von ",(0,i.kt)("inlineCode",{parentName:"p"},"grant_type"),' MUSS "password" sein, da dies aktuell der einzig unterst\xfctzte Typ ist. Der ',(0,i.kt)("inlineCode",{parentName:"p"},"username"),"-Parameter entspricht dem Nutzernamen des Accounts, den du Authentifizieren willst - der ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),"-Parameter entspricht dem Passwort des Accounts, den du Authentifizieren willst."),(0,i.kt)("h3",{id:"access-token-antwort"},"Access-Token Antwort"),(0,i.kt)("p",null,"Eine Antwort k\xf6nnte folgenderma\xdfen aussehen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "refresh_token": "lCVzojP2OGkggXm9NRFflppHXoSjWeKu"\n}\n')),(0,i.kt)("p",null,"Der ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," ist der Token, den du zum Authentifizieren in weiteren Anfragen ben\xf6tigst, der ",(0,i.kt)("inlineCode",{parentName:"p"},"token_type")," ist immer 'Bearer'. Der ",(0,i.kt)("inlineCode",{parentName:"p"},"expires_in"),"-Parameter beschreibt wie lange der access_token validiert ist (3600 Sekunden = 1 Stunde). Der ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," muss genutzt werden um den access_token zu erneuern, nachdem die validierung zuende ist."),(0,i.kt)("h3",{id:"code-beispiel"},"Code-Beispiel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const axios = require("axios").default;\n\nconst options = {\n  method: "GET",\n  url: "https://api.noten-app.de/v1/auth/token",\n  params: { grant_type: "password", username: "johndoe", password: "A3ddj3w" },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,i.kt)("h2",{id:"erneuern-eines-access-tokens"},"Erneuern eines Access-Tokens"),(0,i.kt)("p",null,"Der Vorgang um den Access-Token zu erneuern erf\xfcllt genauso wie auch die erstmalige Anfrage den ",(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6749#section-6"},"RFC6749-(OAuth2.0)-Standart (Sektion 6)"),"."),(0,i.kt)("h3",{id:"authentifizierungs-url-beispiel-1"},"Authentifizierungs-URL (Beispiel)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://api.noten-app.de/v1/auth/refresh?grant_type=refresh_token&refresh_token=lCVzojP2OGkggXm9NRFflppHXoSjWeKu\n")),(0,i.kt)("p",null,"Der ",(0,i.kt)("inlineCode",{parentName:"p"},"grant_type"),'-Parameter MUSS "refresh_token" sein, da diese Anfrage genutzt wird um einen Access-Token zu erneuern. Der ',(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),"-Parameter entspricht dem Token, den du bei der erstmaligen Anfrage erhalten hast."),(0,i.kt)("p",null,"Die Antwort wird die gleiche sein wie die, welche du zur erstmaligen Authentifizierung erhalten hast. (Du erh\xe4ltst einen neuen Access-Token UND einen neuen Refresh-Token)!"),(0,i.kt)("h3",{id:"code-beispiele"},"Code-Beispiele"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "GET",\n  url: "https://api.noten-app.de/v1/auth/refresh",\n  params: {\n    grant_type: "refresh_token",\n    refresh_token: "lCVzojP2OGkggXm9NRFflppHXoSjWeKu",\n  },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')),(0,i.kt)("h2",{id:"authentifizierung-an-anderen-endpunkten"},"Authentifizierung an anderen Endpunkten"),(0,i.kt)("p",null,"Um dich an anderen Enpunkten zu Authentifizieren musst du nur einen Authentication-Header mit dem access_token nutzen."),(0,i.kt)("h3",{id:"code-beispiel-1"},"Code-Beispiel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'var axios = require("axios").default;\n\nvar options = {\n  method: "GET",\n  url: "https://api.noten-app.de/v1/classes",\n  headers: {\n    Authorization: "Bearer DFw6zar4QF33Rb6jfp7cQj2UvcrAKgun",\n  },\n};\n\naxios\n  .request(options)\n  .then(function (response) {\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    console.error(error);\n  });\n')))}c.isMDXComponent=!0}}]);