"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2217],{89469:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var o=t(85893),c=t(11151);const i={title:"Connection",sidebar_label:"Connection",sidebar_position:4,slug:"/ibc/light-clients/localhost/connection"},s="Localhost connections",l={id:"light-clients/localhost/connection",title:"Connection",description:"The 09-localhost light client module integrates with core IBC through a single sentinel localhost connection.",source:"@site/versioned_docs/version-v7.6.x/03-light-clients/03-localhost/04-connection.md",sourceDirName:"03-light-clients/03-localhost",slug:"/ibc/light-clients/localhost/connection",permalink:"/v7/ibc/light-clients/localhost/connection",draft:!1,unlisted:!1,tags:[],version:"v7.6.x",sidebarPosition:4,frontMatter:{title:"Connection",sidebar_label:"Connection",sidebar_position:4,slug:"/ibc/light-clients/localhost/connection"},sidebar:"defaultSidebar",previous:{title:"ClientState",permalink:"/v7/ibc/light-clients/localhost/client-state"},next:{title:"State Verification",permalink:"/v7/ibc/light-clients/localhost/state-verification"}},r={},a=[];function h(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"localhost-connections",children:"Localhost connections"}),"\n",(0,o.jsxs)(n.p,{children:["The 09-localhost light client module integrates with core IBC through a single sentinel localhost connection.\nThe sentinel ",(0,o.jsx)(n.code,{children:"ConnectionEnd"})," is stored by default in the core IBC store."]}),"\n",(0,o.jsxs)(n.p,{children:["This enables channel handshakes to be initiated out of the box by supplying the localhost connection identifier (",(0,o.jsx)(n.code,{children:"connection-localhost"}),") in the ",(0,o.jsx)(n.code,{children:"connectionHops"})," parameter of ",(0,o.jsx)(n.code,{children:"MsgChannelOpenInit"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ConnectionEnd"})," is created and set in store via the ",(0,o.jsx)(n.code,{children:"InitGenesis"})," handler of the 03-connection submodule in core IBC.\nThe ",(0,o.jsx)(n.code,{children:"ConnectionEnd"})," and its ",(0,o.jsx)(n.code,{children:"Counterparty"})," both reference the ",(0,o.jsx)(n.code,{children:"09-localhost"})," client identifier, and share the localhost connection identifier ",(0,o.jsx)(n.code,{children:"connection-localhost"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// CreateSentinelLocalhostConnection creates and sets the sentinel localhost connection end in the IBC store.\nfunc (k Keeper) CreateSentinelLocalhostConnection(ctx sdk.Context) {\n  counterparty := types.NewCounterparty(exported.LocalhostClientID, exported.LocalhostConnectionID, commitmenttypes.NewMerklePrefix(k.GetCommitmentPrefix().Bytes()))\n  connectionEnd := types.NewConnectionEnd(types.OPEN, exported.LocalhostClientID, counterparty, types.ExportedVersionsToProto(types.GetCompatibleVersions()), 0)\n\n  k.SetConnection(ctx, exported.LocalhostConnectionID, connectionEnd)\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that connection handshakes are disallowed when using the ",(0,o.jsx)(n.code,{children:"09-localhost"})," client type."]})]})}function d(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var o=t(67294);const c={},i=o.createContext(c);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);