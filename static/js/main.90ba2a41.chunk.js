(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r,c=n(1),a=n.n(c),o=n(6),i=n.n(o),s=n(4),j=n(2),b=n(3),d=b.a.button(r||(r=Object(j.a)(["\npadding:5px 10px;\nmargin-right: 20px;\nborder-radius:5px;\nborder:none;\n\n\n&:hover,\n&:focus {\n  background-color: tomato;\n"]))),u=n(0);var l,x=function(e){var t=e.options,n=e.onchangeState;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)(d,{onClick:function(){return n(e)},children:e},e)}))})},h=b.a.p(l||(l=Object(j.a)(["\n\n"])));var O,g=function(e){var t=e.message;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h,{children:t})})},p=b.a.p(O||(O=Object(j.a)(["\n"])));var f,v=function(e){var t=e.good,n=e.neutral,r=e.bad,c=e.total,a=e.positivePercentage;return Object(u.jsx)(u.Fragment,{children:c>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(p,{children:["good: ",t]}),Object(u.jsxs)(p,{children:["neutral: ",n]}),Object(u.jsxs)(p,{children:["bad: ",r]}),Object(u.jsxs)(p,{children:["total: ",c]}),Object(u.jsxs)(p,{children:["positive feedback: ",a,"%"]})]}):Object(u.jsx)(g,{message:"No feedback given"})})},m=b.a.div(f||(f=Object(j.a)(["\n  max-width: 1080px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 15px 20px;\n  margin-top: 25px;\n"])));var k,S,w=function(e){var t=e.children;return Object(u.jsx)(m,{children:t})},F=b.a.section(k||(k=Object(j.a)(["\n"]))),y=b.a.h2(S||(S=Object(j.a)([""])));var J=function(e){var t=e.text,n=e.children;return Object(u.jsxs)(F,{children:[Object(u.jsx)(y,{children:t}),n]})};function N(){var e,t=Object(c.useState)(0),n=Object(s.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(0),i=Object(s.a)(o,2),j=i[0],b=i[1],d=Object(c.useState)(0),l=Object(s.a)(d,2),h=l[0],O=l[1],g=r+j+h,p=0===(e=g)?0:Number((r/e*100).toFixed());return Object(u.jsxs)(w,{children:[Object(u.jsx)(J,{text:"please leave feedback",children:Object(u.jsx)(x,{options:["good","neutral","bad"],onchangeState:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":O((function(e){return e+1}));break;default:return}}})}),Object(u.jsx)(J,{text:"statistics",children:Object(u.jsx)(v,{good:r,neutral:j,bad:h,total:g,positivePercentage:p})})]})}n(17);i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),i.a.render(Object(u.jsx)(N,{}),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.90ba2a41.chunk.js.map