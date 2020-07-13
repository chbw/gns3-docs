(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=(n(0),n(211)),i=n(213);const c={id:"link-control",title:"Link Control",sidebar_label:"Link Control"},o={id:"using-gns3/beginners/link-control",isDocsHomePage:!1,title:"Link Control",description:"available in GNS3 version 2.1 and later.",source:"@site/docs/using-gns3/beginners/link-control.md",permalink:"/docs/using-gns3/beginners/link-control",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/beginners/link-control.md",sidebar_label:"Link Control",sidebar:"someSidebar",previous:{title:"Import GNS3 appliance",permalink:"/docs/using-gns3/beginners/import-gns3-appliance"},next:{title:"Connect GNS3 to the Internet (local server)",permalink:"/docs/using-gns3/advanced/connect-gns3-internet"}},l=[{value:"Packet Filters",id:"packet-filters",children:[]},{value:"Suspend a Link",id:"suspend-a-link",children:[]}],s={rightToc:l};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"available in GNS3 version 2.1 and later."))),Object(a.b)("h2",{id:"packet-filters"},"Packet Filters"),Object(a.b)("p",null,"Packet filters can be applied on links without stopping any node."),Object(a.b)("p",null,"Supported packet filters are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Frequency_drop")," drop a packet every x packets."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Packet_loss")," randomly drop a packet"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Delay"),":  adds latency and/or jitter."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Packet_corruption")," randomly corrupt a packet."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"BPF_(Berkeley_Packet_Filter)")," filter packets matching a BPF expression.")),Object(a.b)("p",null,"All packet filters can be combined, meaning you can apply both a packet loss filter and a delay filter on the same link that will be active simultaneously."),Object(a.b)("p",null,"To apply a packet filter, right-click on a link, and select ",Object(a.b)("strong",{parentName:"p"},"Packet filters"),":"),Object(a.b)("img",{alt:"screenshot",src:Object(i.a)("img/using-gns3/beginners/link-control/1.jpg")}),Object(a.b)("img",{alt:"screenshot",src:Object(i.a)("img/using-gns3/beginners/link-control/2.jpg")}),Object(a.b)("p",null,"As an example, click the ",Object(a.b)("strong",{parentName:"p"},"Delay")," tab, add a non-zero value for ",Object(a.b)("strong",{parentName:"p"},"Latency"),", then click ",Object(a.b)("strong",{parentName:"p"},"Apply"),":"),Object(a.b)("img",{alt:"screenshot",src:Object(i.a)("img/using-gns3/beginners/link-control/3.jpg")}),Object(a.b)("p",null,"The icon on the ",Object(a.b)("strong",{parentName:"p"},"Delay")," tab changes from a red square to a green circle, indicating it\u2019s active:"),Object(a.b)("img",{alt:"screenshot",src:Object(i.a)("img/using-gns3/beginners/link-control/4.jpg")}),Object(a.b)("p",null,"Click ",Object(a.b)("strong",{parentName:"p"},"OK")," to close the ",Object(a.b)("strong",{parentName:"p"},"Packet filters")," window:"),Object(a.b)("img",{alt:"screenshot",src:Object(i.a)("img/using-gns3/beginners/link-control/5.jpg")}),Object(a.b)("p",null,"A filter icon will be displayed on the link to indicate one or more packet filters are active."),Object(a.b)("img",{alt:"screenshot",src:Object(i.a)("img/using-gns3/beginners/link-control/6.jpg")}),Object(a.b)("h2",{id:"suspend-a-link"},"Suspend a Link"),Object(a.b)("p",null,"It is possible to suspend a link.  For instance, to simulate a temporary connectivity issue in your project. Suspending a link currently means that all packets going through the link will be dropped."),Object(a.b)("p",null,"To suspend a link, right-click it and then select ",Object(a.b)("strong",{parentName:"p"},"Suspend"),":"),Object(a.b)("img",{alt:"screenshot",src:Object(i.a)("img/using-gns3/beginners/link-control/7.jpg")}),Object(a.b)("p",null,"The link is now suspended, so no traffic can pass through it:"),Object(a.b)("img",{alt:"screenshot",src:Object(i.a)("img/using-gns3/beginners/link-control/8.jpg")}))}b.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),g=r,d=p["".concat(c,".").concat(g)]||p[g]||u[g]||i;return n?a.a.createElement(d,o(o({ref:t},s),{},{components:n})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";var r=n(0),a=n(52);t.a=function(){return Object(r.useContext)(a.a)}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(76);var r=n(212),a=n(214);function i(e,t){var n=void 0===t?{}:t,i=n.forcePrependBaseUrl,c=void 0!==i&&i,o=n.absolute,l=void 0!==o&&o,s=Object(r.a)().siteConfig,b=(s=void 0===s?{}:s).baseUrl,p=void 0===b?"/":b,u=s.url;if(!e)return e;if(c)return p+e;if(!Object(a.a)(e))return e;var g=p+e.replace(/^\//,"");return l?u+g:g}},214:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))}}]);