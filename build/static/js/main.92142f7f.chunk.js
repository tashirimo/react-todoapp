(this["webpackJsonpreact-todoapp"]=this["webpackJsonpreact-todoapp"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(14),s=n.n(r),i=(n(20),n.p,n(21),n(12)),o=n(9),l=n(29),j=n(30),d=n(15),b=n(31),u=n(32),O=(n(22),n(5)),f=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),f=s[0],h=s[1],x=Object(c.useState)(!0),m=Object(o.a)(x,2),p=m[0],g=m[1];Object(c.useEffect)((function(){return window.addEventListener("onload",v),window.addEventListener("beforeunload",w),function(){window.removeEventListener("onload",w),window.removeEventListener("beforeunload",w)}}));var v=function(){localStorage.TODO_APP=JSON.parse(localStorage.TODO_APP)},w=function(){localStorage.TODO_APP=JSON.stringify(n)},S=function(e){var t=Object(i.a)(n);t.splice(e,1),a(t)};return Object(O.jsxs)(l.a,{className:"py-sm-4 py-2",children:[Object(O.jsx)(j.a,{children:Object(O.jsx)(d.a,{children:Object(O.jsx)("h1",{className:"font-weight-bold",children:"TO DO APP"})})}),Object(O.jsx)(j.a,{className:"mb-3",children:Object(O.jsx)(d.a,{children:Object(O.jsx)(b.a,{onSubmit:function(e){e.preventDefault(),""!==f&&(a((function(e){return[].concat(Object(i.a)(e),[{task:f,isCompleted:!1}])})),h(""),g(!0))},children:Object(O.jsxs)(b.a.Row,{className:"align-items-center",children:[Object(O.jsx)(d.a,{xs:12,sm:10,children:Object(O.jsx)(b.a.Control,{required:!0,type:"text",placeholder:"",autoComplete:"off",value:f,onChange:function(e){e.target.value?g(!1):g(!0),h(e.target.value)}})}),Object(O.jsx)(d.a,{xs:12,sm:2,children:Object(O.jsx)(u.a,{type:"submit",variant:"primary",disabled:p,block:!0,children:"\u8ffd\u52a0"})})]})})})}),Object(O.jsx)(j.a,{children:Object(O.jsx)(d.a,{children:Object(O.jsx)("ul",{className:"p-0",children:n.map((function(e,t){return Object(O.jsxs)("li",{className:"d-flex align-items-center border p-2 mb-2 rounded",children:[Object(O.jsx)("span",{className:"col-10 text-break",children:e.task}),Object(O.jsx)("div",{className:"col-2 d-flex align-items-center justify-content-center",children:Object(O.jsx)(u.a,{onClick:function(){return S(t)},type:"button",variant:"danger",children:"\xd7"})})]},t)}))})})})]})},h=function(){return Object(O.jsx)(f,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(h,{})}),document.getElementById("root")),x()}},[[27,1,2]]]);
//# sourceMappingURL=main.92142f7f.chunk.js.map