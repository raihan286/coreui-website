(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{620:function(t,e,c){"use strict";c.d(e,"a",(function(){return l}));var n=c(44),r=c(159),o=c(20),a=c(1),i=c.n(a),s=c(619),u=function(t){var e=t.name,c=t.text,a=Object(r.a)(t,["name","text"]),i=e?"https://coreui.io/react/docs/components/".concat(e):t.href;return Object(o.jsx)("div",{className:"card-header-actions",children:Object(o.jsx)(s.db,Object(n.a)(Object(n.a)({},a),{},{href:i,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(o.jsx)("small",{className:"text-muted",children:c||"docs"})}))})},l=i.a.memo(u)},621:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(623);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var c=[],n=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done)&&(c.push(a.value),!e||c.length!==e);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return c}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},622:function(t,e,c){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var c=0,n=new Array(e);c<e;c++)n[c]=t[c];return n}c.d(e,"a",(function(){return n}))},623:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(622);function r(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);return"Object"===c&&t.constructor&&(c=t.constructor.name),"Map"===c||"Set"===c?Array.from(t):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Object(n.a)(t,e):void 0}}},684:function(t,e,c){"use strict";c.r(e);var n=c(622);var r=c(623);function o(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=c(621),i=c(20),s=c(1),u=c(619),l=c(620);e.default=function(){var t=Object(s.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),e=Object(a.a)(t,2),c=e[0],n=e[1],r=Object(s.useState)("top-right"),b=Object(a.a)(r,2),j=b[0],d=b[1],h=Object(s.useState)(!0),m=Object(a.a)(h,2),f=m[0],O=m[1],p=Object(s.useState)(5e3),x=Object(a.a)(p,2),y=x[0],v=x[1],g=Object(s.useState)(!0),k=Object(a.a)(g,2),S=k[0],w=k[1],A=Object(s.useState)(!0),N=Object(a.a)(A,2),T=N[0],C=N[1],F=c.reduce((function(t,e){return t[e.position]=t[e.position]||[],t[e.position].push(e),t}),{});return Object(i.jsxs)(u.j,{children:[Object(i.jsxs)(u.n,{children:["Toasts.",Object(i.jsx)(l.a,{name:"-Toast"})]}),Object(i.jsx)(u.k,{children:Object(i.jsx)(u.w,{children:Object(i.jsxs)(u.wb,{children:[Object(i.jsx)(u.u,{sm:"12",lg:"6",children:Object(i.jsxs)(u.J,{children:[Object(i.jsx)("h5",{children:"Add toast with following props:"}),Object(i.jsxs)(u.K,{variant:"custom-checkbox",className:"my-2 mt-4",children:[Object(i.jsx)(u.T,{id:"autohide",checked:f,onChange:function(t){O(t.target.checked)},custom:!0}),Object(i.jsx)(u.cb,{variant:"custom-checkbox",htmlFor:"autohide",children:"Autohide of the toast"})]}),f&&Object(i.jsxs)(u.K,{className:"my-2",children:[Object(i.jsx)(u.cb,{htmlFor:"ccyear",children:"Time to autohide"}),Object(i.jsx)(u.S,{type:"number",value:y,onChange:function(t){v(Number(t.target.value))}})]}),Object(i.jsxs)(u.K,{className:"my-2",children:[Object(i.jsx)(u.cb,{htmlFor:"ccyear",children:"Position"}),Object(i.jsx)("select",{className:"form-control",value:j,onChange:function(t){d(t.target.value)},children:["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(t,e){return Object(i.jsx)("option",{children:t},e)}))})]}),Object(i.jsxs)(u.K,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(u.T,{id:"fade",checked:T,onChange:function(t){C(t.target.checked)},custom:!0}),Object(i.jsx)(u.cb,{variant:"custom-checkbox",htmlFor:"fade",children:"fade"})]}),Object(i.jsxs)(u.K,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(u.T,{id:"close",custom:!0,checked:S,onChange:function(t){w(t.target.checked)}}),Object(i.jsx)(u.cb,{variant:"custom-checkbox",htmlFor:"close",children:"closeButton"})]}),Object(i.jsx)(u.f,{className:"mr-1 w-25",color:"success",onClick:function(){n([].concat(o(c),[{position:j,autohide:f&&y,closeButton:S,fade:T}]))},children:"Add toast"})]})}),Object(i.jsx)(u.u,{sm:"12",lg:"6",children:Object.keys(F).map((function(t){return Object(i.jsx)(u.Pb,{position:t,children:F[t].map((function(e,c){return Object(i.jsxs)(u.Mb,{show:!0,autohide:e.autohide,fade:e.fade,children:[Object(i.jsx)(u.Ob,{closeButton:e.closeButton,children:"Toast title"}),Object(i.jsx)(u.Nb,{children:"This is a toast in ".concat(t," positioned toaster number ").concat(c+1,".")})]},"toast"+c)}))},"toaster"+t)}))})]})})})]})}}}]);
//# sourceMappingURL=18.4c7a4fdf.chunk.js.map