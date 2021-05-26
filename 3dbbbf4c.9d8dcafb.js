(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),i=(n(0),n(212)),c=n(214),a={id:"development-of-gns3",title:"Development of GNS3",sidebar_label:"Development of GNS3"},l={id:"contribute/development-of-gns3",isDocsHomePage:!1,title:"Development of GNS3",description:"Using the GNS3 API",source:"@site/docs/contribute/development-of-gns3.md",permalink:"/docs/contribute/development-of-gns3",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/contribute/development-of-gns3.md",sidebar_label:"Development of GNS3",sidebar:"someSidebar",previous:{title:"Contribute to GNS3",permalink:"/docs/contribute/contribute-to-gns3"},next:{title:"How to debug Web UI Guide",permalink:"/docs/contribute/how-to-debug-web-ui-guide"}},b=[{value:"Using the GNS3 API",id:"using-the-gns3-api",children:[]},{value:"Get the Source Code",id:"get-the-source-code",children:[]},{value:"Dependencies",id:"dependencies",children:[{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Mac OS X",id:"mac-os-x",children:[]}]},{value:"Run Tests",id:"run-tests",children:[{value:"For Linux &amp; Mac OS X",id:"for-linux--mac-os-x",children:[]},{value:"For Windows",id:"for-windows",children:[]}]},{value:"Start the Server",id:"start-the-server",children:[{value:"For Linux &amp; Mac OS X",id:"for-linux--mac-os-x-1",children:[]},{value:"For Windows",id:"for-windows-1",children:[]}]},{value:"Start the GUI",id:"start-the-gui",children:[{value:"For Linux &amp; Mac OS X",id:"for-linux--mac-os-x-2",children:[]},{value:"For Windows",id:"for-windows-2",children:[]}]},{value:"Modify the GUI",id:"modify-the-gui",children:[]},{value:"Contribute Code",id:"contribute-code",children:[]}],u={rightToc:b};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"using-the-gns3-api"},"Using the GNS3 API"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://api.gns3.net/en/latest/"}),"http://api.gns3.net/en/latest/")),Object(i.b)("h2",{id:"get-the-source-code"},"Get the Source Code"),Object(i.b)("p",null,"At first you need to clone both project:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/GNS3/gns3-server.git\ngit clone https://github.com/GNS3/gns3-gui.git\n")),Object(i.b)("p",null,"If you want to access to the code of next big release in both project:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"git checkout NEXT_RELEASE\n")),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"git checkout 2.0\n")),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("h3",{id:"linux"},"Linux"),Object(i.b)("p",null,"If you are on Linux the best is to install GNS3 via the ppa. This will setup all the dependencies required for the development."),Object(i.b)("p",null,"Go to both folder (gns3-gui & gns3-server)"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo pip3 install -r dev-requirements.txt\n")),Object(i.b)("h3",{id:"windows"},"Windows"),Object(i.b)("p",null,"On Windows you need to install Python 3.5 and PyQT.\nGo to both folder (gns3-gui & gns3-server)"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"python.exe -m pip install -r dev-requirements.txt\n")),Object(i.b)("h3",{id:"mac-os-x"},"Mac OS X"),Object(i.b)("p",null,"With homebrew:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"brew install python3\nbrew install PyQt5\n")),Object(i.b)("p",null,"Go to both folder (gns3-gui & gns3-server)"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"pip3 install -r dev-requirements.txt\n")),Object(i.b)("h2",{id:"run-tests"},"Run Tests"),Object(i.b)("h3",{id:"for-linux--mac-os-x"},"For Linux & Mac OS X"),Object(i.b)("p",null,"After that the tests should work go to both projects. And run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"py.test\n")),Object(i.b)("h3",{id:"for-windows"},"For Windows"),Object(i.b)("p",null,"After that the tests should work go to both projects. And run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"python.exe -m py.test\n")),Object(i.b)("h2",{id:"start-the-server"},"Start the Server"),Object(i.b)("h3",{id:"for-linux--mac-os-x-1"},"For Linux & Mac OS X"),Object(i.b)("p",null,"Go to the gns3-server folder and run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"python3 -m gns3server --debug --local\n")),Object(i.b)("h3",{id:"for-windows-1"},"For Windows"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"python.exe -m gns3server --debug --local\n")),Object(i.b)("h2",{id:"start-the-gui"},"Start the GUI"),Object(i.b)("p",null,"For starting the gui go to the gns3-gui folder."),Object(i.b)("h3",{id:"for-linux--mac-os-x-2"},"For Linux & Mac OS X"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"python3 -m gns3\n")),Object(i.b)("h3",{id:"for-windows-2"},"For Windows"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"python3.exe -m gns3\n")),Object(i.b)("h2",{id:"modify-the-gui"},"Modify the GUI"),Object(i.b)("p",null,"We will start by a simple modification by adding your name to the thanks to in the about dialog."),Object(i.b)("p",null,"In the gns3-gui folder open with the Qt Designer the file gns3/ui/about_dialog.ui click on Thanks to and add your name to the list:"),Object(i.b)("img",{alt:"screenshot",src:Object(c.a)("img/contribute/development-of-gns3/1.jpg")}),Object(i.b)("p",null,"Click on About (otherwise the dialog will open the Thanks to tab) and save.\nNow you need to export the dialog to python code.\nJust run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"python scripts/build_pyqt.py\n")),Object(i.b)("p",null,"This will regenerate all the changed Qt interface.\nYou can now start the GUI and see your change."),Object(i.b)("h2",{id:"contribute-code"},"Contribute Code"),Object(i.b)("p",null,"You can create a pull request on Gui or Server via Github. Even for work in progress code. We will help you."))}s.isMDXComponent=!0},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(n),p=r,h=s["".concat(c,".").concat(p)]||s[p]||d[p]||i;return n?o.a.createElement(h,a(a({ref:t},b),{},{components:n})):o.a.createElement(h,a({ref:t},b))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var b=2;b<i;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},213:function(e,t,n){"use strict";var r=n(0),o=n(52);t.a=function(){return Object(r.useContext)(o.a)}},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(76);var r=n(213),o=n(215);function i(e,t){var n=void 0===t?{}:t,i=n.forcePrependBaseUrl,c=void 0!==i&&i,a=n.absolute,l=void 0!==a&&a,b=Object(r.a)().siteConfig,u=(b=void 0===b?{}:b).baseUrl,s=void 0===u?"/":u,d=b.url;if(!e)return e;if(c)return s+e;if(!Object(o.a)(e))return e;var p=s+e.replace(/^\//,"");return l?d+p:p}},215:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))}}]);