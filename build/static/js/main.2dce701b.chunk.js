(this["webpackJsonpreact-notes-app"]=this["webpackJsonpreact-notes-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),o=n.n(s),i=(n(14),n(9)),r=n(3),d=n(5),l=n(8),j=n(0),u=function(e){var t=e.id,n=e.text,a=e.date,c=e.handleDeleteNote;return Object(j.jsxs)("div",{className:"note",children:[Object(j.jsx)("span",{children:n}),Object(j.jsxs)("div",{className:"note-footer",children:[Object(j.jsx)("small",{children:a}),Object(j.jsx)(l.a,{onClick:function(){return c(t)},className:"delete-icons",size:"1.3em"})]})]})},b=function(e){var t=e.handleAddNote,n=Object(a.useState)(""),c=Object(r.a)(n,2),s=c[0],o=c[1];return Object(j.jsxs)("div",{className:"note new",children:[Object(j.jsx)("textarea",{rows:"8",cols:"100",placeholder:"ketik disini broo...",value:s,onChange:function(e){250-e.target.value.length>=0&&o(e.target.value)}}),Object(j.jsxs)("div",{className:"note-footer",children:[Object(j.jsxs)("small",{children:[250-s.length," Remaining..."]}),Object(j.jsx)("button",{className:"save",onClick:function(){t(s),o("")},children:"Save"})]})]})},O=function(e){var t=e.notes,n=e.handleAddNote,a=e.handleDeleteNote;return Object(j.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(j.jsx)(u,{id:e.id,text:e.text,date:e.date,handleDeleteNote:a})})),Object(j.jsx)(b,{handleAddNote:n})]})},h=function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{className:"judul",children:"NOTE SAMPAH"})})},x=function(){var e=Object(a.useState)([{id:Object(d.a)(),text:"...",date:"05/12/2021"},{id:Object(d.a)(),text:"...",date:"05/12/2021"}]),t=Object(r.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-notes-app-data"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("react-notes-app-data",JSON.stringify(n))}),[n]);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(h,{}),Object(j.jsx)(O,{notes:n,handleAddNote:function(e){var t=(new Date).toLocaleDateString().split("/"),a=Object(r.a)(t,3),s=a[0],o=a[1],l=a[2],j={id:Object(d.a)(),text:e,date:"".concat(o,"/").concat(s,"/").concat(l)},u=[].concat(Object(i.a)(n),[j]);c(u)},handleDeleteNote:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2dce701b.chunk.js.map