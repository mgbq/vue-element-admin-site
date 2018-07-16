(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{171:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("本项目基于 element-ui 默认视觉风格搭建了。如果对视觉风格有额外的要求可以按照"),a("a",{attrs:{href:"http://element-cn.eleme.io/#/zh-CN/component/custom-theme",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方自定义主题指导"),a("OutboundLink")],1),t._v("。该方案是通过样式变量覆盖的方式。")]),t._m(1),a("p",[t._v("element-ui 的通用样式变量可能无法满足所有定制需求，你可以通过覆盖默认的组件样式的方式实现。\n由于 element-ui 的样式我们是在全局引入的，所以你想在某个"),a("code",[t._v("view")]),t._v("里面覆盖它的样式就不能加 scoped，但你又想只覆盖这个页面的 element 样式，你就可在它的父级加一个 class，以用命名空间来解决问题。或者使用"),a("a",{attrs:{href:"https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B1%E5%BA%A6%E4%BD%9C%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("深度作用选择器"),a("OutboundLink")],1),t._v("。")]),t._m(2),a("p",[t._v("一些全局的 element-ui 样式修改可以在 "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/styles/element-ui.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/src/styles/element-ui.scss"),a("OutboundLink")],1),t._v(" 中进行设置。")]),a("br"),t._m(3),a("p",[t._v("本项目提供了两种动态换肤的功能，各有利弊，请结合个人需求自行选择。")]),t._m(4),a("p",[t._v("element-ui 升级为 2.0 之后官方文档的右上角提供了动态换肤的功能，本项目也提供了改功能。\n代码地址："),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/ThemePicker/index.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/src/components/ThemePicker"),a("OutboundLink")],1),t._v("。")]),a("p",[a("strong",[t._v("简单说明一下它的原理：")]),t._v("\nelement-ui 2.0 版本之后所有的样式都是基于 SCSS 编写的，所有的颜色都是基于几个基础颜色"),a("a",{attrs:{href:"https://github.com/PanJiaChen/custom-element-theme/blob/master/element-variables.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("变量"),a("OutboundLink")],1),t._v("来设置的，所以就不难实现动态换肤了，只要找到那几个颜色变量修改它就可以了。\n首先我们需要拿到通过 "),a("code",[t._v("package.json")]),t._v(" 拿到 element-ui 的版本号，根据该版本号去请求相应的样式。拿到样式之后将样色，通过正则匹配和替换，将颜色变量替换成你需要的，之后动态添加 "),a("code",[t._v("style")]),t._v(" 标签来覆盖原有的 css 样式。")]),t._m(5),t._m(6),t._m(7),a("p",[t._v("在项目中引入 ThemePicker 组件即可")]),t._m(8),t._m(9),a("br"),a("br"),t._m(10),t._m(11),t._m(12),a("blockquote",[a("p",[t._v("我们这里基于官方的主题生成库 "),a("a",{attrs:{href:"https://github.com/ElementUI/element-theme",target:"_blank",rel:"noopener noreferrer"}},[t._v("element-theme"),a("OutboundLink")],1),t._v(" 进行了相应的改造。")])]),a("p",[t._v("首先我们下载 "),a("a",{attrs:{href:"https://github.com/PanJiaChen/custom-element-theme",target:"_blank",rel:"noopener noreferrer"}},[t._v("custom-element-theme"),a("OutboundLink")],1),t._v(" 项目")]),t._m(13),a("p",[t._v("之后全局安装主题生成工具")]),t._m(14),a("p",[t._v("进入项目目录 安装相关依赖")]),t._m(15),t._m(16),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("如果需要修改打包生成样式命名空间的名字 只要修改该"),a("a",{attrs:{href:"https://github.com/PanJiaChen/custom-element-theme/blob/master/gulpfile.js#L6",target:"_blank",rel:"noopener noreferrer"}},[t._v("变量"),a("OutboundLink")],1),t._v("即可")])]),t._m(17),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000009762198#articleHeader2",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多动态换肤文章"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"更换主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更换主题","aria-hidden":"true"}},[this._v("#")]),this._v(" 更换主题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"样式覆盖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式覆盖","aria-hidden":"true"}},[this._v("#")]),this._v(" 样式覆盖")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/* 你的命名空间 */")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v(".aritle-page")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("/* element-ui 元素 */")]),t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v(".el-tag")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("margin-right")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"动态换肤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态换肤","aria-hidden":"true"}},[this._v("#")]),this._v(" 动态换肤")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"element-ui-官方文档页面-换肤方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-ui-官方文档页面-换肤方式","aria-hidden":"true"}},[this._v("#")]),this._v(" element-ui 官方文档页面 换肤方式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),s("p",[this._v("这里需要获取 element-ui 的版本号，从而锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" version "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'element-ui/package.json'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`https://unpkg.com/element-ui@")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("version"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("/lib/theme-chalk/index.css`")])]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getCSSString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chalkHandler"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'chalk'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("getCSSString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" variable"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xhr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("variable"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/@font-face{[^}]+}/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("callback")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("open")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("send")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("使用方式")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[this._v("import")]),this._v(" ThemePicker "),s("span",{attrs:{class:"token keyword"}},[this._v("from")]),this._v(" "),s("span",{attrs:{class:"token string"}},[this._v('"@/components/ThemePicker"')]),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("优点\n"),s("ul",[s("li",[this._v("无需准备多套主题，可以自由动态换肤")])])]),s("li",[this._v("缺点\n"),s("ul",[s("li",[this._v("自定义不够，只支持基础颜色的切换")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"多套主题换肤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多套主题换肤","aria-hidden":"true"}},[this._v("#")]),this._v(" 多套主题换肤")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("本方法就是最常见的换肤方式，本地存放多套主题，两者有不同的命名空间，如写两套主题，一套叫 "),a("code",[t._v("day-theme")]),t._v(" ，一套叫 "),a("code",[t._v("night-theme")]),t._v(" ，"),a("code",[t._v("night-theme")]),t._v(" 主题都在一个 "),a("code",[t._v(".night-theme")]),t._v(" 的命名空间下，我们动态的在 body 上 add "),a("code",[t._v(".night-theme")]),t._v(" ; remove "),a("code",[t._v(".night-theme")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("git@github.com:PanJiaChen/custom-element-theme.git\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" i element-theme -g\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("首先执行 "),a("code",[t._v("et -i")]),t._v(" 生成 "),a("code",[t._v("element-variables.scss")]),t._v(" 存放样式变量的文件，然后进入 "),a("code",[t._v("element-variables.scss")]),t._v(" 文件 修改你自己需要的变量，修改完成之后执行 "),a("code",[t._v("et")]),t._v(" ， 编译主题，最后执行"),a("code",[t._v("gulp")]),t._v(" 生成命名空间。所有生成文件在 "),a("code",[t._v("dist")]),t._v(" 目录下，你只需复制文件下所有内容到 "),a("code",[t._v("vue-element-admin")]),t._v(" 项目中 "),a("code",[t._v("src/assets/custom-theme")]),t._v(" 进行覆盖替换就行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://wpimg.wallstcn.com/0726b472-90f4-4fe9-a665-26fb8f9795c3.gif",alt:""}})])}],!1,null,null,null);s.default=n.exports}}]);