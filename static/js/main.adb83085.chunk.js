(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),o=n.n(r),i=n(4),s=n(5),b=n(6),u=n(10),d=n(9),j=n(0),l=function(e){var t=e.title;return Object(j.jsx)("h1",{children:t})},h=n(7),O=n.n(h),v=function(e){var t=e.children;return Object(j.jsx)("div",{className:O.a.container,children:t})},f=function(e){var t=e.message;return Object(j.jsx)("p",{children:t})},p=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage,o=0===a;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{title:"Statistics"}),o?Object(j.jsx)(f,{message:"No feedback given"}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Good: ",t]}),Object(j.jsxs)("p",{children:["Neutral: ",n]}),Object(j.jsxs)("p",{children:["Bad: ",c]}),Object(j.jsxs)("p",{children:["Total: ",a]}),Object(j.jsxs)("p",{children:["Positive feedback: ",r,"%"]})]})]})},x=n(8),k=n.n(x),g=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)("button",{type:"button",className:k.a.button,onClick:function(){return n(t)},children:t})},m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.incrementFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.bad+t.good+t.neutral},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return n?Math.round(100*t/n):0},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.bad,c=t.good,a=t.neutral,r=Object.keys(this.state),o=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage();return Object(j.jsxs)(v,{children:[Object(j.jsx)(l,{title:"Please leave feedback"}),r.map((function(t){return Object(j.jsx)(g,{options:t,onLeaveFeedback:e.incrementFeedback},t)})),Object(j.jsx)(p,{good:c,bad:n,neutral:a,total:o,positivePercentage:i})]})}}]),n}(c.Component);o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={container:"Section_container__3XqtL"}},8:function(e,t,n){e.exports={button:"FeedbackOptions_button__1CBqS"}}},[[16,1,2]]]);
//# sourceMappingURL=main.adb83085.chunk.js.map