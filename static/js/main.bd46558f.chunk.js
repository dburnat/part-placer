(this["webpackJsonppart-placer"]=this["webpackJsonppart-placer"]||[]).push([[0],{113:function(e,t,n){"use strict";var a=n(20),r=n(0),c=n.n(r),o=n(35),i=n(69),l=n(198),u=n(21);function s(){var e=Object(a.a)(["\n  display: inline-block;\n  margin-right: 10px;\n"]);return s=function(){return e},e}var d=Object(u.b)(i.a)(s());function f(e){var t=e.children;return c.a.createElement(o.a,{className:"pp-action-bar",paddingamount:10},c.a.createElement(o.e,null,c.a.createElement(l.a,{smDown:!0},c.a.createElement(d,{variant:"h6"},"Actions:")),t))}n(74),n(193);var p=n(16),m=n(36),b=n(248),v=n(240),h=n(238),g=n(239),E=n(237),y=n(121),O=c.a.forwardRef((function(e,t){return c.a.createElement(y.a,Object.assign({direction:"up",ref:t},e))}));function j(e){var t=e.children,n=e.title,a=e.message,i=e.okText,l=void 0===i?"Ok":i,u=e.cancelText,s=void 0===u?"Cancel":u,d=Object(r.useState)(!1),f=Object(m.a)(d,2),y=f[0],j=f[1],w=Object(r.useState)(null),S=Object(m.a)(w,2),k=S[0],x=S[1],A=function(){j(!1),x(null)},T=function(){A()};return c.a.createElement(c.a.Fragment,null,t((function(e){return function(t){t.preventDefault();var n=Object(p.a)({},t,{target:Object(p.a)({},t.target,{value:t.target.value})});j(!0),x((function(){return function(){return e(n)}}))}})),c.a.createElement(b.a,{open:y,TransitionComponent:O,keepMounted:!0,onClose:T,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},c.a.createElement(E.a,{id:"alert-dialog-slide-title"},n),c.a.createElement(h.a,null,c.a.createElement(g.a,{id:"alert-dialog-slide-description"},a)),c.a.createElement(v.a,null,c.a.createElement(o.b,{"data-testid":"confirmation-dialog-ok",onClick:function(){k(),A()}},l),c.a.createElement(o.d,{"data-testid":"confirmation-dialog-cancel",onClick:T},s))))}var w=n(2),S=n(48),k=n(116),x=n(115);function A(e){var t=e.name,n=e.showHelperText,a=void 0===n||n,r=e.label,o=Object(w.a)(e,["name","showHelperText","label"]);return c.a.createElement(S.a,Object.assign({label:r,variant:"filled",component:k.a,type:"text",fullWidth:!0,name:t,validate:function(e){var t;if(e)try{Object(x.a)(e)}catch(n){t="Invalid dimension"}else t="Required";return t},helperText:a?"e.g. 4'10\", 11cm":null},o))}var T=n(83);n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return A})),n.d(t,"d",(function(){return T.a})),n.d(t,"f",(function(){return o.c})),n.d(t,"h",(function(){return o.e})),n.d(t,"e",(function(){return o.b})),n.d(t,"g",(function(){return o.d}))},162:function(e,t,n){e.exports=n(187)},187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=n(36),l=n(16),u=n(20),s=n(45),d=n(74),f=n(21),p=n(232),m=n(75),b=n(56),v=n(83),h=n(114),g=n(58),E=n(38),y=n(137),O=n(138),j=n(144),w=n(28),S=n(245),k=n(113),x=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(y.a)(this,Object(O.a)(t).call(this,e))).state={eventId:null},n}return Object(j.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(e,t){var n=this;w.b((function(a){a.setExtras(t);var r=w.a(e);n.setState({eventId:r})}))}},{key:"render",value:function(){var e=this;return this.state.hasError?r.a.createElement(k.e,{onClick:function(){return S.a({eventId:e.state.eventId})}},"Report feedback"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(a.Component);function A(){var e=Object(u.a)(["\nbody {\n  background-color:#333;\n  overflow-x:hidden;\n}\n@media print {\n  .MuiAppBar-root {\n    display: none;\n  }\n  .pp-action-bar {\n    display: none;\n  }\n}\n"]);return A=function(){return e},e}var T=Object(f.a)(A()),P=r.a.lazy((function(){return n.e(4).then(n.bind(null,275))})),R=r.a.lazy((function(){return Promise.all([n.e(3),n.e(6)]).then(n.bind(null,276))})),C=r.a.lazy((function(){return n.e(5).then(n.bind(null,274))}));var I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement((function(){var e,t=Object(a.useRef)(),n=new URLSearchParams(window.location.search).get("share");n&&(e=Object(l.a)({},JSON.parse(decodeURIComponent(escape(atob(n)))),{shared:!0}));var c=Object(a.useState)(e),o=Object(i.a)(c,1)[0];return Object(a.useEffect)((function(){e&&Object(s.c)("/")}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.SnackbarProvider,null,r.a.createElement(m.a,{value:o},r.a.createElement(b.a,null,r.a.createElement(p.b,{injectFirst:!0},r.a.createElement(T,null),r.a.createElement(d.a,{ref:t}),r.a.createElement(x,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(v.a,{message:"Loading Application"})},r.a.createElement(s.b,null,r.a.createElement(P,{path:"/"}),r.a.createElement(R,{headerRef:t,path:"/layout"}),r.a.createElement(C,{path:"/about"})))))))))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/part-placer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/part-placer","/service-worker.js");I?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}()},35:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return v})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"d",(function(){return E}));var a=n(2),r=n(20),c=n(0),o=n.n(c),i=n(21),l=n(45),u=n(110),s=n(146);function d(){var e=Object(r.a)(["\n  padding: ","px;\n"]);return d=function(){return e},e}function f(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n"]);return f=function(){return e},e}function p(){var e=Object(r.a)(["\n  text-decoration: none;\n"]);return p=function(){return e},e}function m(){var e=Object(r.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n"]);return m=function(){return e},e}i.b.span(m());var b=Object(i.b)(l.a)(p()),v=i.b.div(f()),h=Object(i.b)(u.a)(d(),(function(e){return e.paddingamount||20}));function g(e){var t=e.children,n=Object(a.a)(e,["children"]);return o.a.createElement(s.a,Object.assign({variant:"contained",color:"primary"},n),t)}function E(e){var t=e.children,n=Object(a.a)(e,["children"]);return o.a.createElement(s.a,Object.assign({variant:"contained"},n),t)}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n(0),r=n.n(a),c=n(109),o=r.a.createContext();function i(e){var t=!1;return t=!0,c.a.initialize("UA-155991675-1"),r.a.createElement(o.Provider,Object.assign({value:{reactGA:c.a,enabled:t}},e))}function l(){var e=r.a.useContext(o),t=e.reactGA,n=e.enabled;if(!t)throw new Error("useAnalytics must be called with a AnalyticsProvider");return{pageview:r.a.useCallback((function(e){return n&&t.pageview(e)}),[t,n]),event:r.a.useCallback((function(e){var a=e.category,r=e.action;return n&&t.event({category:a,action:r})}),[n,t])}}},74:function(e,t,n){"use strict";var a=n(65),r=n.n(a),c=n(36),o=n(20),i=n(0),l=n.n(i),u=n(190),s=n(193),d=n(66),f=n(194),p=n(111),m=n(198),b=n(45),v=n(21),h=n(136),g=n.n(h),E=n(134),y=n.n(E),O=n(135),j=n.n(O),w=n(96);function S(){var e=Object(o.a)(["\n  color: white;\n"]);return S=function(){return e},e}function k(){var e=Object(o.a)(["\n  flex-grow: 1;\n"]);return k=function(){return e},e}function x(){var e=Object(o.a)(["\n  justify-content: space-between;\n"]);return x=function(){return e},e}function A(){var e=Object(o.a)(["\n  color: white;\n  height: 2em;\n  width: 2em;\n  margin-right: 10px;\n"]);return A=function(){return e},e}function T(){var e=Object(o.a)(['\n  font-size: 200%;\n  font-family: "Lobster", cursive;\n  margin-right: 20px;\n  display: flex;\n  align-items: center;\n']);return T=function(){return e},e}function P(){var e=Object(o.a)(["\n  color: white;\n  &:hover {\n    text-decoration: none;\n  }\n  & .MuiIconButton-label {\n    color: white;\n  }\n"]);return P=function(){return e},e}function R(){var e=Object(o.a)(["\n  margin-bottom: 10px;\n"]);return R=function(){return e},e}var C=Object(v.b)(u.a)(R()),I=Object(v.b)(s.a)(P()),W=Object(v.b)(I)(T()),z=Object(v.b)((function(e){var t=e.className;return l.a.createElement(d.a,{className:t,viewBox:"0 -105 448 448"},l.a.createElement("path",{d:"m22.65625 200.390625-4.359375 4.714844h96.367187c11.238282-51.386719 56.738282-88.011719 109.335938-88.011719s98.097656 36.625 109.335938 88.011719h96.367187l-4.359375-4.714844c-2.480469-2.679687-2.832031-6.703125-.847656-9.773437l9.390625-14.527344-13.765625-10.472656c-2.902344-2.214844-3.941406-6.109376-2.519532-9.472657l6.710938-15.945312-15.402344-7.894531c-3.25-1.667969-4.957031-5.324219-4.148437-8.890626l3.824219-16.863281-16.539063-5.101562c-3.464844-1.085938-5.765625-4.371094-5.597656-8l.796875-17.28125-17.167969-2.167969c-3.621094-.457031-6.476563-3.3125-6.933594-6.9375l-2.160156-17.160156-17.28125.800781c-3.628906.167969-6.914063-2.132813-8-5.597656l-5.101563-16.539063-16.875 3.824219c-3.558593.804687-7.210937-.902344-8.878906-4.152344l-7.902344-15.390625-15.945312 6.710938c-3.367188 1.417968-7.261719.375-9.472656-2.535156l-10.472656-13.765626-14.535157 9.390626c-3.070312 1.984374-7.09375 1.632812-9.777343-.847657l-12.742188-11.800781-12.710938 11.761719c-2.683593 2.480469-6.707031 2.828125-9.777343.847656l-14.527344-9.394531-10.472656 13.769531c-2.207031 2.90625-6.105469 3.949219-9.472657 2.535156l-15.941406-6.710937-7.898437 15.382812c-1.667969 3.25-5.324219 4.960938-8.886719 4.152344l-16.863281-3.824219-5.105469 16.535157c-1.085938 3.46875-4.371094 5.765624-8 5.601562l-17.28125-.800781-2.167969 17.167969c-.457031 3.625-3.308593 6.480468-6.933593 6.9375l-17.167969 2.167968.800781 17.277344c.164062 3.628906-2.136719 6.914062-5.601562 8l-16.535157 5.105469 3.824219 16.871093c.800781 3.5625-.90625 7.214844-4.152344 8.882813l-15.394531 7.902344 6.664063 15.96875c1.417968 3.367187.375 7.261719-2.535157 9.472656l-13.75 10.46875 9.390625 14.539063c1.984375 3.070312 1.632813 7.09375-.847656 9.773437zm0 0"}),l.a.createElement("path",{d:"m265.496094 205.105469h51.503906c-10.96875-42.390625-49.214844-71.996094-93-71.996094s-82.03125 29.605469-93 71.996094h51.503906c8.542969-14.851563 24.367188-24.003907 41.496094-24.003907s32.953125 9.152344 41.496094 24.003907zm-1.894532-26.914063 5.65625-5.65625c3.136719-3.03125 8.125-2.988281 11.210938.097656 3.085938 3.085938 3.132812 8.074219.097656 11.214844l-5.65625 5.65625c-2.007812 2.078125-4.980468 2.914063-7.777344 2.183594-2.796874-.734375-4.980468-2.917969-5.714843-5.714844-.730469-2.796875.101562-5.773437 2.183593-7.78125zm-79.203124 11.3125c-3.121094 3.125-8.1875 3.125-11.308594 0l-5.65625-5.65625c-3.035156-3.140625-2.988282-8.128906.097656-11.214844 3.085938-3.085937 8.074219-3.128906 11.210938-.097656l5.65625 5.65625c3.125 3.125 3.125 8.1875 0 11.3125zm47.601562-24.398437c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8v-8c0-4.417969 3.582031-8 8-8s8 3.582031 8 8zm0 0"}),l.a.createElement("path",{d:"m0 221.105469h448v16h-448zm0 0"}),l.a.createElement("path",{d:"m202.847656 205.105469h42.304688c-12.089844-10.652344-30.214844-10.652344-42.304688 0zm0 0"}))}))(A()),_=Object(v.b)(f.a)(x()),L=v.b.div(k()),M=Object(v.b)(p.a)(S());t.a=l.a.forwardRef((function(e,t){var n=Object(w.b)().encodeState,a=Object(w.a)().event,o=Object(i.useState)(),u=Object(c.a)(o,2),s=u[0],d=u[1];window.addEventListener("beforeinstallprompt",(function(e){d(e)}));return l.a.createElement(C,{position:"static"},l.a.createElement(_,null,l.a.createElement(W,{component:b.a,to:"/"},l.a.createElement(m.a,{xsDown:!0}," ",l.a.createElement(z,{title:"Part Placer",color:"primary"})),l.a.createElement("span",null,"Part Placer")),l.a.createElement(L,{ref:t}),navigator.share&&l.a.createElement(M,{onClick:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.awrap(navigator.share({title:"Part Placer",text:"A shared layout from part placer!",url:"".concat(window.location.origin,"/?share=").concat(n())}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("navigator share",e.t0);case 8:case"end":return e.stop()}}),null,null,[[0,5]])}},l.a.createElement(y.a,null)),s&&l.a.createElement(M,{onClick:function(e){var t,n;return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return s.prompt(),e.next=3,r.a.awrap(s.userChoice);case 3:t=e.sent,n=t.outcome,a("accepted"===n?{category:"App",action:"Installed"}:{category:"App",action:"Install declined"}),d(null);case 7:case"end":return e.stop()}}))}},l.a.createElement(j.a,null)),l.a.createElement(I,{title:"About Part Placer",component:b.a,to:"/about"},l.a.createElement(p.a,null,l.a.createElement(g.a,null)))))}))},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return T}));var a=n(36),r=n(2),c=n(16),o=n(25),i=n(0),l=n.n(i),u=n(56),s="MATERIAL_CHANGE",d="ADD_PART",f="UPDATE_PARTS",p="DELETE_MATERIAL",m="RESET_STATE",b="ACKNOWLEDGE_WELCOME",v="HYDRATE",h="SET_KERF",g="SET_ROTATION",E="SET_SELECTION_STRATEGY",y="SET_SPLIT_STRATEGY",O="SET_SORT_STRATEGY",j={materials:[],showWelcome:!0,shared:!1,allowRotation:!0,kerfSize:"0",selectionStrategy:"",splitStrategy:"",sortStategy:""},w=function(e,t){switch(t.type){case s:return function(e,t){if(t.id){var n=Object(o.a)(e.materials),a=n.findIndex((function(e){return e.id===t.id})),r=Object(c.a)({},n[a],{},t);return n[a]=r,Object(c.a)({},e,{materials:n})}var i,l=Object(c.a)({},t,{parts:[],id:(i=e.materials,i.length>0?Math.max.apply(Math,Object(o.a)(i.map((function(e){return e.id}))))+1:1)});return Object(c.a)({},e,{materials:[].concat(Object(o.a)(e.materials),[l]),showWelcome:!1})}(e,t.payload);case p:return function(e,t){var n=e.materials.filter((function(e){return e.id!==t}));return Object(c.a)({},e,{materials:n})}(e,t.payload);case f:return function(e,t){var n=t.materialId,a=t.parts,r=Object(o.a)(e.materials),i=r.findIndex((function(e){return e.id===n})),l=Object(c.a)({},r[i]),u=a.map((function(e){return Object(c.a)({},e,{isNew:!1})}));return l.parts=u,r[i]=l,Object(c.a)({},e,{materials:r})}(e,t.payload);case m:return Object(c.a)({},j,{showWelcome:e.showWelcome});case b:return Object(c.a)({},e,{showWelcome:!1});case h:return Object(c.a)({},e,{kerfSize:t.payload});case g:return Object(c.a)({},e,{allowRotation:t.payload});case v:return Object(c.a)({},t.payload,{showWelcome:e.showWelcome});case E:return Object(c.a)({},e,{selectionStrategy:t.payload});case y:return Object(c.a)({},e,{splitStrategy:t.payload});case O:return Object(c.a)({},e,{sortStrategy:t.payload});default:throw new Error("Unknown action type ".concat(t.type))}},S=l.a.createContext(),k="StoreContext",x=function(e){return window.localStorage.setItem(k,JSON.stringify(e))};function A(e){var t=e.value,n=Object(r.a)(e,["value"]),c=j;if(t)x(c=t);else{var o=window.localStorage.getItem(k);o&&((c=JSON.parse(o)).kerfSize||(c.kerfSize=j.kerfSize),c.allowRotation||(c.allowRotation=j.allowRotation))}var u=Object(i.useReducer)((function(){var e=w.apply(void 0,arguments);return x(e),e}),c),s=Object(a.a)(u,2),d=s[0],f=s[1],p=l.a.useMemo((function(){return[d,f]}),[d]);return l.a.createElement(S.Provider,Object.assign({value:p},n))}function T(){var e=l.a.useContext(S);if(!e)throw new Error("useStore must be called with a StoreProvider");var t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(u.b)().event;return{state:n,dispatch:r,addPart:function(e){return c({category:"Parts",action:"Add Part"}),r({type:d,payload:e})},encodeState:function(){return e=window.localStorage.getItem(k),btoa(unescape(encodeURIComponent(e)));var e},updateParts:function(e,t){return c({category:"Parts",action:"Update Parts"}),r({type:f,payload:{materialId:e,parts:t}})},deleteMaterial:function(e){return c({category:"Parts",action:"Delete Material"}),r({type:p,payload:e})},materialChanged:function(e){return c({category:"Parts",action:e.id?"Material Updated":"Material Added"}),r({type:s,payload:e})},resetState:function(){return c({category:"Parts",action:"Reset"}),r({type:m})},hydrate:function(e){return r({type:v,payload:e})},setKerf:function(e){return r({type:h,payload:e})},setRotation:function(e){return r({type:g,payload:e})},setSelectionStrategy:function(e){return r({type:E,payload:e})},setSplitStrategy:function(e){return r({type:y,payload:e})},setSortStrategy:function(e){return r({type:O,payload:e})},acknowledgeWelcome:function(){return c({category:"Parts",action:"Welcome acknowledged"}),r({type:b})}}}},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(20),r=n(0),c=n.n(r),o=n(35),i=n(69),l=n(195),u=n(21);function s(){var e=Object(a.a)(["\n  text-align: center;\n"]);return s=function(){return e},e}var d=Object(u.b)(i.a)(s());function f(e){var t=e.children,n=e.message;return c.a.createElement(o.a,null,c.a.createElement(l.a,null),c.a.createElement(d,{color:"textPrimary",variant:"h4"},n||t))}},96:function(e,t,n){"use strict";var a=n(56);n.d(t,"a",(function(){return a.b}));var r=n(75);n.d(t,"b",(function(){return r.b}))}},[[162,1,2]]]);
//# sourceMappingURL=main.bd46558f.chunk.js.map