(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(5),s=c(1),d=(c(10),c(11),c(12),c(4)),b=c.n(d),o=c(0),l=function(t){var e=t.tabs,c=t.selectedTab,n=t.onTabSelected;return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t){return Object(o.jsx)("li",{className:b()({"is-active":t.id===c.id}),"data-cy":"Tab",children:Object(o.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){c.id!==t.id&&n(t)},children:t.title})},t.id)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:null===c||void 0===c?void 0:c.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)(r[0].id),e=Object(i.a)(t,2),c=e[0],n=e[1],a=Object(s.useMemo)((function(){return r.find((function(t){return t.id===c}))||r[0]}),[c]);return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(a.title)}),Object(o.jsx)(l,{tabs:r,onTabSelected:function(t){n(t.id)},selectedTab:a})]})};a.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.af6b7dfd.chunk.js.map