(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-baseWeb-CommonWebView"],{"0d97":function(n,t,e){"use strict";e.r(t);var a=e("63b9"),i=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);t["default"]=i.a},"20b3":function(n,t,e){"use strict";e.r(t);var a=e("aea2"),i=e("0d97");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("dbff");var u,o=e("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"11e99700",null,!1,a["a"],u);t["default"]=s.exports},"62f5":function(n,t,e){var a=e("fd5b");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("2e74a74e",a,!0,{sourceMap:!1,shadowMode:!1})},"63b9":function(n,t,e){"use strict";var a=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("de40")),r={onLoad:function(n){var t=n.url,e=n.title;if(null==t||"undefined"==t)return uni.navigateBack({animationDuration:300}),void i.default.showMessage("链接错误");this.url=t,null==e||"undefined"==e?uni.setNavigationBarTitle({title:""}):uni.setNavigationBarTitle({title:e})},data:function(){return{url:null}}};t.default=r},aea2:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-web-view",{staticClass:"web-container",attrs:{src:n.url}})],1)},r=[]},dbff:function(n,t,e){"use strict";var a=e("62f5"),i=e.n(a);i.a},fd5b:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-11e99700]{width:100%;height:100%;background-color:#fff}.web-container[data-v-11e99700]{position:absolute;top:%?0?%;bottom:%?0?%;left:%?0?%;right:%?0?%}',""]),n.exports=t}}]);