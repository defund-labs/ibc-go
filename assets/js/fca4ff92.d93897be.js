"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6297,7918],{59983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var a=n(85893),s=n(11151),i=n(18573);const c={title:"Scaffold a React App",sidebar_label:"Scaffold a React App",sidebar_position:5,slug:"/fee/scaffold-react"},o="Scaffold a React app",r={id:"fee/scaffold-react",title:"Scaffold a React App",description:"In this section, we will scaffold a React app using Ignite CLI, and test it. This will be the base for us to add Fee Middleware support.",source:"@site/tutorials/01-fee/05-scaffold-react.md",sourceDirName:"01-fee",slug:"/fee/scaffold-react",permalink:"/tutorials/fee/scaffold-react",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Scaffold a React App",sidebar_label:"Scaffold a React App",sidebar_position:5,slug:"/fee/scaffold-react"},sidebar:"defaultSidebar",previous:{title:"Wire Up the ICS-29 Fee Middleware to a Cosmos SDK Blockchain",permalink:"/tutorials/fee/wire-feeibc-mod"},next:{title:"Wire up ICS-29 Fees to the React App",permalink:"/tutorials/fee/fee-react"}},l={},d=[{value:"Set up test wallets",id:"set-up-test-wallets",level:2},{value:"Scaffold a React app",id:"scaffold-a-react-app-1",level:2},{value:"Update the dependencies",id:"update-the-dependencies",level:3},{value:"Fix the bugs",id:"fix-the-bugs",level:3},{value:"Test the app",id:"test-the-app",level:2},{value:"Start the chain",id:"start-the-chain",level:3},{value:"Start the React app",id:"start-the-react-app",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"scaffold-a-react-app",children:"Scaffold a React app"}),"\n",(0,a.jsx)(t.p,{children:"In this section, we will scaffold a React app using Ignite CLI, and test it. This will be the base for us to add Fee Middleware support."}),"\n",(0,a.jsx)(t.h2,{id:"set-up-test-wallets",children:"Set up test wallets"}),"\n",(0,a.jsx)(t.p,{children:"We will use 4 test wallets for this tutorial. Use the following mnemonic phrases to import them into Keplr."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="anna.mnemonic"',children:"antenna hen skate tooth during heart agent code exclude measure text math time budget industry cage eagle prosper program enter cruise join tragic one\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="bo.mnemonic"',children:"uphold tube excess primary night armor circle puzzle pet memory empower conduct blush hat glare tortoise into embody powder raise punch promote kidney catalog\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="charlie.mnemonic"',children:"rug cotton ceiling olive cake october way spy million grain actress sponsor\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="damian.mnemonic"',children:"mansion wing limit daughter allow fiscal attend planet viable giggle prison ready\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Then add these wallet mnemonics to ",(0,a.jsx)(t.a,{href:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/blob/65032986f671e901bc13ab160e3f96a5046857c0/config.yml",children:(0,a.jsx)(t.code,{children:"config.yml"})})," so that they are funded automatically by ignite."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="config.yml"',children:"version: 1\naccounts:\n- name: alice\n  coins:\n  - 20000token\n  - 200000000stake\n- name: bob\n  coins:\n  - 10000token\n  - 100000000stake\n# plus-diff-start\n- name: anna\n  coins: \n  - 20000token\n  - 200000000stake\n  mnemonic: antenna hen skate tooth during heart agent code exclude measure text math time budget industry cage eagle prosper program enter cruise join tragic one\n- name: bo\n  coins: \n  - 20000token\n  - 200000000stake\n  mnemonic: uphold tube excess primary night armor circle puzzle pet memory empower conduct blush hat glare tortoise into embody powder raise punch promote kidney catalog\n- name: charlie\n  coins: \n  - 20000token\n  - 200000000stake\n  mnemonic: rug cotton ceiling olive cake october way spy million grain actress sponsor\n- name: damian\n  coins: \n  - 20000token\n  - 200000000stake\n  mnemonic: mansion wing limit daughter allow fiscal attend planet viable giggle prison ready\n# plus-diff-end\nclient:\n  openapi:\n    path: docs/static/openapi.yml\nfaucet:\n  name: bob\n  coins:\n  - 5token\n  - 100000stake\nvalidators:\n- name: alice\n  bonded: 100000000stake\n"})}),"\n",(0,a.jsx)(t.h2,{id:"scaffold-a-react-app-1",children:"Scaffold a React app"}),"\n",(0,a.jsx)(t.p,{children:"Scaffold a React app using the following command:"}),"\n",(0,a.jsx)(i.Z,{className:"language-bash",source:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/commit/51b8e3304f5c8c2e2e477dac9985237be676254b",children:(0,a.jsx)(t.p,{children:"ignite scaffold react"})}),"\n",(0,a.jsxs)(t.p,{children:["For this will create a React app within the ",(0,a.jsx)(t.code,{children:"react/"})," directory. The app depends on a typescript client that is yet to be generated.\nThe following command generates the typescript client for the chain, including the Fee Middleware types, and its react hooks."]}),"\n",(0,a.jsx)(i.Z,{className:"language-bash",source:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/commit/6b31da02d1ca4fba70d58a3b3e56d9f1e3f06833",children:(0,a.jsx)(t.p,{children:"ignite generate hooks --clear-cache"})}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:["You need to add ",(0,a.jsx)(t.code,{children:"--clear-cache"})," to the command above to make sure that the custom modules' (such as Fee Middleware) types are generated."]})}),"\n",(0,a.jsx)(t.h3,{id:"update-the-dependencies",children:"Update the dependencies"}),"\n",(0,a.jsxs)(t.p,{children:["The generated React app and ts-client depends on the ",(0,a.jsx)(t.code,{children:"@cosmjs"})," packages. We need to update the dependencies to the latest version because the Cosmos SDK version is not fully compatible with the version of ",(0,a.jsx)(t.code,{children:"@cosmjs"})," packages used by the generated app.\nRun the following commands in the root directory of the project to update the dependencies."]}),"\n",(0,a.jsx)(i.Z,{className:"language-bash",source:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/commit/dffcf719fd8c223be06d3327e6bc24ec7cf0cec3",children:(0,a.jsx)(t.p,{children:"cd ts-client &&\nnpm install @cosmjs/launchpad@0.27.1 @cosmjs/proto-signing@0.31.1 @cosmjs/stargate@0.31.1 @keplr-wallet/types@0.11.14"})}),"\n",(0,a.jsx)(i.Z,{className:"language-bash",source:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/commit/1c90ffddbab1655038dc296874f427b036afb749",children:(0,a.jsx)(t.p,{children:"cd react &&\nnpm install @cosmjs/proto-signing@0.31.1 @cosmjs/stargate@0.31.1 @cosmjs/encoding@0.31.1"})}),"\n",(0,a.jsx)(t.h3,{id:"fix-the-bugs",children:"Fix the bugs"}),"\n",(0,a.jsxs)(t.p,{children:["There is a bug in the generated app that we need to fix. While this is fixed in the next version of Ignite CLI, we need to fix it manually for now since we are using the latest version (",(0,a.jsx)(t.code,{children:"v0.27.1"}),") of Ignite CLI. (The next version of ignite comes with the Fee Middleware wired!)"]}),"\n",(0,a.jsxs)(t.p,{children:["The bug is in the ",(0,a.jsx)(t.code,{children:"react/src/hooks/useIbcApplicationsTransferV1/index.ts"})," file. For some reason, the generated code uses the string ",(0,a.jsx)(t.code,{children:"=**"})," in certain places. We need to remove this using replace.\nYou can use the following command to fix this (or simply use your editor to replace the string with an empty string):"]}),"\n",(0,a.jsx)(i.Z,{className:"language-bash",source:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/commit/17c40b79109712460f8f2613c19f3a5fe9519e33",children:(0,a.jsx)(t.p,{children:"sed -i 's/=**//g' react/src/hooks/useIbcApplicationsTransferV1/index.ts"})}),"\n",(0,a.jsx)(t.h2,{id:"test-the-app",children:"Test the app"}),"\n",(0,a.jsx)(t.h3,{id:"start-the-chain",children:"Start the chain"}),"\n",(0,a.jsx)(t.p,{children:"Start the chain using the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"ignite chain serve --reset-once\n"})}),"\n",(0,a.jsx)(t.h3,{id:"start-the-react-app",children:"Start the React app"}),"\n",(0,a.jsx)(t.p,{children:"Start the React app in a separate terminal using the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd react\nnpm run dev\n"})}),"\n",(0,a.jsx)(t.p,{children:"You should see the following screen:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Landing Page",src:n(78560).Z+"",width:"3840",height:"1968"})}),"\n",(0,a.jsx)(t.p,{children:"Connect your keplr wallet (as one of the test wallets) to the app. You should see the following screen:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Connected",src:n(60434).Z+"",width:"3840",height:"1952"})}),"\n",(0,a.jsx)(t.p,{children:"Feel free to play around with the app. You can send tokens to other wallets, however, IBC transfers will not work at this point since we are not running any IBC relayer."})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},18573:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var a=n(33010),s=n.n(a),i=n(85893);function c(e){const{source:t,...n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{...n}),t&&(0,i.jsx)("div",{className:"text-right mb-4",children:(0,i.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:"View Source"})})]})}},78560:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ignite-landing-b0e486ca0cd588b330479985b684ebe3.png"},60434:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ignite-unmodified-80dbee61413ff31a04ce3f9791d80518.png"}}]);