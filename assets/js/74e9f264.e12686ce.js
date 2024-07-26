"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2446],{28644:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=i(85893),n=i(11151);const o={title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/ibc/light-clients/wasm/overview"},a="08-wasm",l={id:"light-clients/wasm/overview",title:"Overview",description:"Overview",source:"@site/versioned_docs/version-v7.6.x/03-light-clients/04-wasm/01-overview.md",sourceDirName:"03-light-clients/04-wasm",slug:"/ibc/light-clients/wasm/overview",permalink:"/v7/ibc/light-clients/wasm/overview",draft:!1,unlisted:!1,tags:[],version:"v7.6.x",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/ibc/light-clients/wasm/overview"},sidebar:"defaultSidebar",previous:{title:"State Verification",permalink:"/v7/ibc/light-clients/localhost/state-verification"},next:{title:"Concepts",permalink:"/v7/ibc/light-clients/wasm/concepts"}},r={},c=[{value:"Overview",id:"overview",level:2},{value:"Context",id:"context",level:3},{value:"Motivation",id:"motivation",level:3},{value:"Use cases",id:"use-cases",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"08-wasm",children:(0,s.jsx)(t.code,{children:"08-wasm"})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["Learn about the ",(0,s.jsx)(t.code,{children:"08-wasm"})," light client proxy module."]}),"\n",(0,s.jsx)(t.h3,{id:"context",children:"Context"}),"\n",(0,s.jsxs)(t.p,{children:["Traditionally, light clients used by ibc-go have been implemented only in Go, and since ibc-go v7 (with the release of the 02-client refactor), they are ",(0,s.jsx)(t.a,{href:"/architecture/adr-010-light-clients-as-sdk-modules",children:"first-class Cosmos SDK modules"}),". This means that updating existing light client implementations or adding support for new light clients is a multi-step, time-consuming process involving on-chain governance: it is necessary to modify the codebase of ibc-go (if the light client is part of its codebase), re-build chains' binaries, pass a governance proposal and have validators upgrade their nodes."]}),"\n",(0,s.jsx)(t.h3,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsxs)(t.p,{children:["To break the limitation of being able to write light client implementations only in Go, the ",(0,s.jsx)(t.code,{children:"08-wasm"})," adds support to run light clients written in a Wasm-compilable language. The light client byte code implements the entry points of a ",(0,s.jsx)(t.a,{href:"https://docs.cosmwasm.com/docs/",children:"CosmWasm"})," smart contract, and runs inside a Wasm VM. The ",(0,s.jsx)(t.code,{children:"08-wasm"})," module exposes a proxy light client interface that routes incoming messages to the appropriate handler function, inside the Wasm VM, for execution."]}),"\n",(0,s.jsxs)(t.p,{children:["Adding a new light client to a chain is just as simple as submitting a governance proposal with the message that stores the byte code of the light client contract. No coordinated upgrade is needed. When the governance proposal passes and the message is executed, the contract is ready to be instantiated upon receiving a relayer-submitted ",(0,s.jsx)(t.code,{children:"MsgCreateClient"}),". The process of creating a Wasm light client is the same as with a regular light client implemented in Go."]}),"\n",(0,s.jsx)(t.h3,{id:"use-cases",children:"Use cases"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Development of light clients for non-Cosmos ecosystem chains: state machines in other ecosystems are, in many cases, implemented in Rust, and thus there are probably libraries used in their light client implementations for which there is no equivalent in Go. This makes the development of a light client in Go very difficult, but relatively simple to do it in Rust. Therefore, writing a CosmWasm smart contract in Rust that implements the light client algorithm becomes a lower effort."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>a});var s=i(67294);const n={},o=s.createContext(n);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);