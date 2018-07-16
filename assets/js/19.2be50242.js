(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{194:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("Mock data is an integral part of the front-end development, the key link to separate the front and back-end development. By pre-agreed with the server-side interface, analog request data and even logic, can make the front-end development independent, will not be blocked by the development of the server.")]),t._m(1),a("p",[t._v("In my company project, the data is usually simulated by the backend using "),a("a",{attrs:{href:"https://swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("swagger"),a("OutboundLink")],1),t._v(".\n"),a("code",[t._v("swagger")]),t._v("it is a REST APIs document generation tool that can cross-platform automatically generated from code comments, open source, support most of the language, the community is good. In short, it is very good and strongly recommended.")]),a("p",[a("a",{attrs:{href:"http://petstore.swagger.io/?_ga=2.222649619.983598878.1509960455-2044209180.1509960455#/pet/addPet",target:"_blank",rel:"noopener noreferrer"}},[t._v("Online Demo"),a("OutboundLink")],1)]),t._m(2),a("p",[a("a",{attrs:{href:"https://github.com/PanJiaChen/vueAdmin-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("vueAdmin-template"),a("OutboundLink")],1),t._v(" uses "),a("a",{attrs:{href:"https://easy-mock.com/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("easy-mock"),a("OutboundLink")],1),t._v(" to simulate the data.\nIt is a pure front-end visualization, and can quickly generate simulation data persistence services. It's very easy to use and can be combined with "),a("code",[t._v("swagger")]),t._v(", suporrt cors. It's worth a try for both the team and the individual project.")]),a("p",[a("a",{attrs:{href:"https://easy-mock.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Online Demo"),a("OutboundLink")],1)]),t._m(3),a("p",[a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-element-admin"),a("OutboundLink")],1),t._v(" is a purely front-end personal project, so all the data is generated locally by "),a("a",{attrs:{href:"https://github.com/nuysoft/Mock",target:"_blank",rel:"noopener noreferrer"}},[t._v("mockjs"),a("OutboundLink")],1),t._v(". Its principle is: intercept all requests and proxy to local simulation data, so no network sends any request.")]),a("p",[t._v("If you need to remove it is easy.")]),t._m(4),t._m(5),a("br"),t._m(6),a("p",[t._v("There are many times when we encounter, local use of mock data, and the online environment uses real data.")]),t._m(7),a("p",[t._v("You need to ensure that your local simulated api is consistent with all other addresses except the root path.\nsuch as:")]),t._m(8),a("p",[t._v("We can use the "),a("router-link",{attrs:{to:"/guide/essentials/deploy.html#environmental-variables"}},[t._v("environment variables")]),t._v(" to do different environments and request different api base path.")],1),t._m(9),t._m(10),a("p",[t._v("Then create an "),a("code",[t._v("axios")]),t._v(" instance based on the environment variable to have a different "),a("code",[t._v("baseURL")]),t._v(".\n"),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/utils/request.js"),a("OutboundLink")],1)]),t._m(11),a("p",[t._v("In this way we can automatically switched local and online apis based on environment variables.")]),t._m(12),t._m(13),t._m(14),a("p",[t._v("Mock data is only import in the local environment.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"mock-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mock-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Mock Data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"swagger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#swagger","aria-hidden":"true"}},[this._v("#")]),this._v(" Swagger")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"easy-mock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#easy-mock","aria-hidden":"true"}},[this._v("#")]),this._v(" Easy-mock")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"mockjs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mockjs","aria-hidden":"true"}},[this._v("#")]),this._v(" Mockjs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("All mock data is in the "),e("code",[this._v("@/src/mock")]),this._v(" directory. It will only intercept the url you declared in "),e("code",[this._v("@/src/mock/index.js")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Remove:")]),t._v(" Just remove "),a("code",[t._v("import '/Mock'")]),t._v(" from"),a("code",[t._v("@/src/main.js")]),t._v(" and delete the "),a("code",[t._v("@/src/mock")]),t._v(" folder.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"switch-from-mock-directly-to-server-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switch-from-mock-directly-to-server-request","aria-hidden":"true"}},[this._v("#")]),this._v(" Switch from mock directly to server request")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("Easy-Mock")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("https://api-dev/login   // Local request\n\nhttps://api-prod/login  // Online request\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//dev.env.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Inject the base path of thie local")]),t._v("\n  "),a("span",{attrs:{class:"token constant"}},[t._v("BASE_API")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'\"https://api-dev\"'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//prod.env.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Inject the base path of thie production")]),t._v("\n  "),a("span",{attrs:{class:"token constant"}},[t._v("BASE_API")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'\"https://api-prod\"'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// create an axios instance")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" service "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  baseURL"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("BASE_API")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// api的base_url")]),t._v("\n  timeout"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5000")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// request timeout")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("Mock.js")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When we use "),e("code",[this._v("Mock.js")]),this._v(" to simulate data locally, the real-world api method is used online. This is similar to the easy-mock method above. We mainly judge that when it is an online environment, we use real-world api. We only import "),e("code",[this._v("Mock.js")]),this._v(" locally.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//main.js")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"development"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"./mock"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// simulation data")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);