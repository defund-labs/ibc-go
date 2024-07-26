"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9502],{11548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(85893),a=n(11151);const s={title:"Transactions",sidebar_label:"Transactions",sidebar_position:6,slug:"/apps/interchain-accounts/transactions"},c="Transactions",o={id:"apps/interchain-accounts/transactions",title:"Transactions",description:"Learn about Interchain Accounts transaction execution",source:"@site/versioned_docs/version-v5.4.x/02-apps/02-interchain-accounts/06-transactions.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/transactions",permalink:"/v5/apps/interchain-accounts/transactions",draft:!1,unlisted:!1,tags:[],version:"v5.4.x",sidebarPosition:6,frontMatter:{title:"Transactions",sidebar_label:"Transactions",sidebar_position:6,slug:"/apps/interchain-accounts/transactions"},sidebar:"defaultSidebar",previous:{title:"Parameters",permalink:"/v5/apps/interchain-accounts/parameters"},next:{title:"Overview",permalink:"/v5/middleware/ics29-fee/overview"}},r={},d=[{value:"Executing a transaction",id:"executing-a-transaction",level:2},{value:"Atomicity",id:"atomicity",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"transactions",children:"Transactions"}),"\n",(0,i.jsx)(t.admonition,{title:"Synopsis",type:"note",children:(0,i.jsx)(t.p,{children:"Learn about Interchain Accounts transaction execution"})}),"\n",(0,i.jsx)(t.h2,{id:"executing-a-transaction",children:"Executing a transaction"}),"\n",(0,i.jsxs)(t.p,{children:["As described in ",(0,i.jsx)(t.a,{href:"/v5/apps/interchain-accounts/auth-modules#trysendtx",children:"Authentication Modules"})," transactions are executed using the interchain accounts controller API and require a ",(0,i.jsx)(t.code,{children:"Base Application"})," as outlined in ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-030-middleware",children:"ICS30 IBC Middleware"})," to facilitate authentication. The method of authentication remains unspecified to provide flexibility for the authentication module developer."]}),"\n",(0,i.jsxs)(t.p,{children:["Transactions are executed via the ICS27 ",(0,i.jsxs)(t.a,{href:"/v5/apps/interchain-accounts/auth-modules#trysendtx",children:[(0,i.jsx)(t.code,{children:"SendTx"})," API"]}),". This must be invoked through an Interchain Accounts authentication module and follows the outlined path of execution below. Packet relaying semantics provided by the IBC core transport, authentication, and ordering (IBC/TAO) layer are omitted for brevity."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"send-interchain-tx.png",src:n(98885).Z+"",width:"1921",height:"949"})}),"\n",(0,i.jsx)(t.h2,{id:"atomicity",children:"Atomicity"}),"\n",(0,i.jsxs)(t.p,{children:["As the Interchain Accounts module supports the execution of multiple transactions using the Cosmos SDK ",(0,i.jsx)(t.code,{children:"Msg"})," interface, it provides the same atomicity guarantees as Cosmos SDK-based applications, leveraging the ",(0,i.jsx)(t.a,{href:"https://docs.cosmos.network/main/learn/advanced/store#cachemultistore",children:(0,i.jsx)(t.code,{children:"CacheMultiStore"})})," architecture provided by the ",(0,i.jsx)(t.a,{href:"https://docs.cosmos.network/main/learn/advanced/context.html",children:(0,i.jsx)(t.code,{children:"Context"})})," type."]}),"\n",(0,i.jsxs)(t.p,{children:["This provides atomic execution of transactions when using Interchain Accounts, where state changes are only committed if all ",(0,i.jsx)(t.code,{children:"Msg"}),"s succeed."]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},98885:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/send-interchain-tx-2e6dfe2d3da61f43a64d5b5169014f0a.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var i=n(67294);const a={},s=i.createContext(a);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);