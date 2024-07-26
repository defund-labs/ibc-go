"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7333],{64055:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var t=n(85893),s=n(11151);const o={},l="ADR 010: IBC light clients as SDK modules",r={id:"adr-010-light-clients-as-sdk-modules",title:"ADR 010: IBC light clients as SDK modules",description:"Changelog",source:"@site/architecture/adr-010-light-clients-as-sdk-modules.md",sourceDirName:".",slug:"/adr-010-light-clients-as-sdk-modules",permalink:"/architecture/adr-010-light-clients-as-sdk-modules",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 009: ICS27 message server addition",permalink:"/architecture/adr-009-v6-ics27-msgserver"},next:{title:"ADR 011: ICS-20 transfer state entry for total amount of tokens in escrow",permalink:"/architecture/adr-011-transfer-total-escrow-state-entry"}},c={},a=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Intermodule communication",id:"intermodule-communication",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"adr-010-ibc-light-clients-as-sdk-modules",children:"ADR 010: IBC light clients as SDK modules"}),"\n",(0,t.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"12/12/2022: initial draft"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"status",children:"Status"}),"\n",(0,t.jsx)(i.p,{children:"Proposed"}),"\n",(0,t.jsx)(i.h2,{id:"context",children:"Context"}),"\n",(0,t.jsx)(i.p,{children:"ibc-go has 3 main consumers:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"IBC light clients"}),"\n",(0,t.jsx)(i.li,{children:"IBC applications"}),"\n",(0,t.jsx)(i.li,{children:"relayers"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Relayers listen and respond to events emitted by ibc-go while IBC light clients and applications are invoked by core IBC.\nCurrently there exists two different approaches to callbacks being invoked by core IBC."}),"\n",(0,t.jsxs)(i.p,{children:["IBC light clients currently are invoked by a ",(0,t.jsx)(i.code,{children:"ClientState"})," and ",(0,t.jsx)(i.code,{children:"ConsensusState"})," interface as defined by ",(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L36",children:"core IBC"}),".\nThe 02-client submodule will retrieve the ",(0,t.jsx)(i.code,{children:"ClientState"})," or ",(0,t.jsx)(i.code,{children:"ConsensusState"})," from the IBC store in order to perform callbacks to the light client.\nThis design requires all required information for the light client to function to be stored in the ",(0,t.jsx)(i.code,{children:"ClientState"})," or ",(0,t.jsx)(i.code,{children:"ConsensusState"})," or potentially under metadata keys for a specific client instance.\nAdditional information may be provided by core IBC via the defined interface arguments if that information is generic enough to be useful to all IBC light clients.\nThis constraint has proved problematic as pass through clients (such as wasm) cannot maintain easy access to a VM instance.\nIn addition, without increasing the size of the defined ",(0,t.jsx)(i.code,{children:"ClientState"})," interface, light clients are unable to take advantage of basic built-in SDK functionality such as genesis import/export and migrations."]}),"\n",(0,t.jsx)(i.p,{children:"The other approach used to perform callback logic is via registered SDK modules.\nThis approach is used by core IBC to interact with IBC applications.\nIBC applications will register their callbacks on the IBC router at compile time.\nWhen a packet comes in, core IBC will use the IBC router to lookup the registered callback functions for the provided packet.\nThe benefit of registered callbacks opposed to interface functions is that additional information may be accessed via external keepers.\nBecause the IBC applications are also SDK modules, they additionally get access to a host of functionality provided by the SDK.\nThis includes: genesis import/export, migrations, query/transaction CLI commands, type registration, gRPC query registration, and message server registration."}),"\n",(0,t.jsxs)(i.p,{children:["As described in ",(0,t.jsx)(i.a,{href:"/architecture/adr-006-02-client-refactor",children:"ADR 006"}),", generalizing light client behaviour is difficult.\nIBC light clients will obtain greater flexibility and control via the registered SDK module approach."]}),"\n",(0,t.jsx)(i.h2,{id:"decision",children:"Decision"}),"\n",(0,t.jsx)(i.p,{children:"Instead of using two different approaches to invoking callbacks, IBC light clients should be invoked as SDK modules.\nOver time and as necessary, core IBC should adjust its interactions with light clients such that they are SDK modules as opposed to interfaces."}),"\n",(0,t.jsxs)(i.p,{children:["One immediate decision that has already been applied is to formalize light client type registration via the inclusion of an ",(0,t.jsx)(i.code,{children:"AppModuleBasic"})," within the ",(0,t.jsx)(i.code,{children:"ModuleManager"})," for a chain.\nThe ",(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/pull/2825",children:"tendermint"})," and ",(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/pull/2826",children:"solo machine"})," clients were refactored to include this ",(0,t.jsx)(i.code,{children:"AppModuleBasic"})," implementation and core IBC will no longer include either type as registered by default."]}),"\n",(0,t.jsxs)(i.p,{children:["Longer term solutions include using internal module communication as described in ",(0,t.jsx)(i.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-033-protobuf-inter-module-comm.md",children:"ADR 033"})," on the SDK.\nThe following functions should become callbacks invoked via intermodule communication:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"Status"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"GetTimestampAtHeight"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"VerifyMembership"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"VerifyNonMembership"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"Initialize"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"VerifyClientMessage"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"CheckForMisbehaviour"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"UpdateStateOnMisbehaviour"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"UpdateState"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"CheckSubstituteAndUpdateState"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"VerifyUpgradeAndUpdateState"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The ClientState interface should eventually be trimmed down to something along the lines of:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:"type ClientState interface {\n    proto.Message\n\n    ClientType() string\n    GetLatestHeight() Height\n    Validate() error\n\n    ZeroCustomFields() ClientState\n\n    // ADDITION\n    Route() string // route used for intermodule communication\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["For the most part, any functions which require access to the client store should likely not be an interface function of the ",(0,t.jsx)(i.code,{children:"ClientState"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"ExportMetadata"})," should eventually be replaced by a light client's ability to import/export it's own genesis information."]}),"\n",(0,t.jsx)(i.h3,{id:"intermodule-communication",children:"Intermodule communication"}),"\n",(0,t.jsxs)(i.p,{children:["To keep the transition from interface callbacks to SDK module callbacks as simple as possible, intermodule communication (when available) should be used to route to light client modules.\nWithout intermodule communication, a routing system would need to be developed/maintained to register callbacks.\nThis functionality of routing to another SDK module should and will be provided by the SDK.\nOnce it is possible to route to SDK modules, a ",(0,t.jsx)(i.code,{children:"ClientState"})," type could expose the function ",(0,t.jsx)(i.code,{children:"Route"})," which returns the callback route used to call the light client module."]}),"\n",(0,t.jsx)(i.h2,{id:"consequences",children:"Consequences"}),"\n",(0,t.jsx)(i.h3,{id:"positive",children:"Positive"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"use a single approach for interacting with callbacks"}),"\n",(0,t.jsx)(i.li,{children:"greater flexibility and control for IBC light clients"}),"\n",(0,t.jsx)(i.li,{children:"does not require developing another routing system"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"negative",children:"Negative"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"requires breaking changes"}),"\n",(0,t.jsx)(i.li,{children:"requires waiting for intermodule communication"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"neutral",children:"Neutral"}),"\n",(0,t.jsx)(i.p,{children:"N/A"})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>l});var t=n(67294);const s={},o=t.createContext(s);function l(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);