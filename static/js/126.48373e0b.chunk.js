(self.webpackChunkfrontend_exercise=self.webpackChunkfrontend_exercise||[]).push([[126],{757:function(t,e,n){t.exports=n(727)},126:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}n.r(e),n.d(e,{default:function(){return w}});var i=n(757),a=n.n(i),c=n(791),s=n(913),u=n(8),l=function(t){return{type:u.H.SET_SINGEDUP_USERS,payload:t}},f=function(t){return{type:u.H.UPDATE_SIDEPANEL_STATE,payload:t}},h=n(164),d=n(184);var p=function(t){var e=t.children,n=t.title,r=t.onClose,o=t.contentPaneStyles,i=t.enableMask,a=void 0===i||i,s=t.style,u=t.isMouseOutClose,l=void 0===u||u,f=(0,c.useRef)();return(0,c.useEffect)((function(){if(l){var t=function(t){27===t.keyCode?r(t):f.current.contains(t.target)||"btnModelYes"===t.target.id||"btnModelNo"===t.target.id||r(t)};return document.addEventListener("keyup",t),document.addEventListener("pointerdown",t),function(){document.removeEventListener("keyup",t),document.removeEventListener("pointerdown",t)}}}),[r]),(0,h.createPortal)((0,d.jsxs)("div",{id:t.id,children:[(0,d.jsx)("div",{className:a?"overlay":void 0}),(0,d.jsxs)("div",{style:s,className:"sidepanel",ref:f,children:[(0,d.jsxs)("div",{className:"sidepanel-header",children:[(0,d.jsx)("label",{children:n}),(0,d.jsx)("i",{id:"sidePanelClose",className:"sidepanel-close",onClick:r,children:"X"})]}),(0,d.jsx)("div",{className:"sidepanel-content",style:o,children:e})]})]}),document.querySelector("body"))},v=function(){return{getSignedUpUsers:function(){return new Promise((function(t,e){fetch("https://jsonplaceholder.typicode.com/users").then((function(n){n.json().then((function(n){n?t(n):e("Error in fetching Uesrs")})).catch((function(t){return e(t)}))})).catch((function(t){return e(t)}))}))},getUserPosts:function(t){return new Promise((function(e,n){fetch("".concat("https://jsonplaceholder.typicode.com/posts","?").concat(t)).then((function(t){t.json().then((function(t){t?e(t):n("Error in fetching Uesrs")})).catch((function(t){return n(t)}))})).catch((function(t){return n(t)}))}))}}},y=function(){var t=(0,s.v)(),e=t.data,n=t.dispatch,r=e.currentUserPosts,i=e.currentUserID,l=function(){var t=o(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v().getUserPosts(i);case 2:(e=t.sent)&&e.length&&n((r=e,{type:u.H.SET_USER_POSTS,payload:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(){return t.apply(this,arguments)}}();(0,c.useEffect)((function(){i&&l()}),[]);return(0,d.jsx)("main",{className:"posts-container",children:r&&r.length>0&&r.map((function(t){return function(t){return(0,d.jsxs)("section",{className:"post-container",children:[(0,d.jsx)("h3",{children:t.title}),(0,d.jsx)("p",{children:t.body})]},t.id)}(t)}))})},m=n(238),g=function(){var t=(0,s.v)().data.currentUserData,e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,d.jsxs)("section",{className:"profile-field",children:[(0,d.jsxs)("label",{className:"label",children:[t," ",(0,d.jsx)("span",{style:{color:"red"},children:"Email"===t?"*":""})]}),(0,d.jsx)("div",{className:"value",children:e})]})};return(0,d.jsxs)("main",{className:"profile-container",children:[function(t,e){var n=t.split(" "),r="";return n.forEach((function(t){r+=t[0]})),(0,d.jsxs)("section",{className:"profile-info",children:[(0,d.jsx)("span",{alt:"Profile Pic",className:"profile-pic",children:(0,d.jsx)("label",{className:"name-abbr",children:r})}),(0,d.jsx)("h3",{className:"name",children:t}),(0,d.jsx)("h4",{className:"user-name",children:e})]})}(t.name,t.username),e("Email",t.email),e("Address",(0,m.K)(t)),e("Phone",t.phone),e("Website",t.website),e("Company name",t.company.name)]})},w=(n(639),function(){var t=(0,s.v)(),e=t.dispatch,n=t.data,r=n.viewPosts,i=n.viewProfile,h=n.signedUpUserList,m=(0,c.useRef)(null);console.log("indexstate",n);var w=(0,c.useCallback)((function(t){var n,r,o=t.data;"object"===typeof o&&!1===Array.isArray(o)&&o.id&&(e(f({viewPosts:!1,viewProfile:!0})),e((n=t.data,{type:u.H.SET_CURRENT_USER,payload:n}))),"object"!==typeof o&&(e(f({viewPosts:!0,viewProfile:!1})),e((r=t.data,{type:u.H.SET_CURRENT_USERID,payload:r})))}),[e]);(0,c.useEffect)((function(){return window.removeEventListener("message",w)}),[w]);var x=(0,c.useCallback)(o(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v().getSignedUpUsers();case 2:n=t.sent,e(l(n));case 4:case"end":return t.stop()}}),t)}))),[e]);(0,c.useEffect)((function(){x()}),[x]),(0,c.useEffect)((function(){h&&h.length&&m.current.contentWindow.postMessage(h)}),[h]),window.addEventListener("message",w);return(0,d.jsxs)("main",{className:"users-container",children:[(0,d.jsx)("iframe",{src:"GEVME-Assignment/#/users",title:"Users",ref:m,style:{height:"98%",width:"100%",border:"none"}}),(!0===r||!0===i)&&(0,d.jsxs)(p,{isMouseOutClose:!0,onClose:function(){e(f({viewPosts:!1,viewProfile:!1}))},title:i?"Profile":"Post",children:[!0===r&&(0,d.jsx)(y,{}),!0===i&&(0,d.jsx)(g,{})]})]})})},238:function(t,e,n){"use strict";n.d(e,{K:function(){return i},P:function(){return o}});var r=n(184),o=function(t,e){return[{title:"Name",dataIndex:"name",key:"name",width:150,align:"left",sortable:!0},{title:"User Name",dataIndex:"username",key:"username",width:150,align:"left"},{title:"Email",dataIndex:"email",key:"email",width:350,align:"left"},{title:"Phone",dataIndex:"phone",key:"phone",width:200,align:"left"},{title:"Website",dataIndex:"website",key:"website",width:200,align:"left"},{title:"",dataIndex:"",key:"viewprofile",render:function(e,n,o){return(0,r.jsx)("a",{href:"#",onClick:function(){return t(e)},children:"View Profile"})},align:"left",width:100},{title:"",dataIndex:"",key:"viewpost",render:function(t,n,o){return(0,r.jsx)("a",{href:"#",onClick:function(){return e(t.id)},children:"View Post"})},align:"left",width:100}]},i=function(t){return Object.keys(t).length?"".concat(t.street,", ").concat(t.suite,", ").concat(t.city,", ").concat(t.zipcode):""}},727:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return U()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function y(){}function m(){}function g(){}var w={};s(w,i,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(S([])));E&&E!==n&&r.call(E,i)&&(w=E);var b=g.prototype=y.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function n(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:U}}function U(){return{value:e,done:!0}}return m.prototype=g,s(b,"constructor",g),s(g,"constructor",m),m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},j(P.prototype),s(P.prototype,a,(function(){return this})),t.AsyncIterator=P,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new P(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(b),s(b,c,"Generator"),s(b,i,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},639:function(){}}]);
//# sourceMappingURL=126.48373e0b.chunk.js.map