(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-personSetting-personSetting"],{"0211":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("d4ec")),r=i(n("bee2")),o=function(){function t(){(0,a.default)(this,t)}return(0,r.default)(t,null,[{key:"hideLoading",value:function(){uni.hideLoading()}},{key:"showLoading",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"加载中...",e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];uni.showLoading({mask:e,title:t})}}]),t}();e.default=o},"133d":function(t,e,n){"use strict";n.r(e);var i=n("1faf"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"1faf":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),r=i(n("d6e3")),o=i(n("9cf4")),l=i(n("9ce4")),c=i(n("d287")),s=i(n("de40")),u=i(n("0211")),d={components:{NormalCell:r.default},data:function(){return{user:null}},onShow:function(){this.loadUser()},methods:{loadUser:function(){this.user=o.default.getUserInfo()},goCollectMoneySet:function(){uni.navigateTo({url:"/pages/me/personSetting/collectMoneyChannel/collectMoneyChannel"})},logoutEvent:function(){o.default.clearDiskAndMemoryCache(),this.$store.commit("logout"),uni.reLaunch({url:"/pages/login/login"})},clickToCHangePhone:function(){uni.navigateTo({url:"/pages/me/personSetting/modifyPhone/modifyPhone"})},clickToChangePwd:function(){uni.navigateTo({url:"/pages/me/personSetting/modifyPwd/modifyPwd"})},clickToEditPersonAddress:function(){uni.navigateTo({url:"personAddress/personAddress"})},clickNickName:function(){uni.navigateTo({url:"/pages/me/personSetting/ChangeNickName/ChangeNickName"})},chooseAvatar:function(){var t=this;uni.chooseImage({count:1,success:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(n){var i,a,r,d,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=n.tempFilePaths,n.tempFiles,a=i[0],u.default.showLoading("头像上传中..."),e.next=6,l.default.uploadFile(a);case 6:return r=e.sent,u.default.hideLoading(),e.next=10,c.default.getMyInfo();case 10:return d=e.sent,d.image=r,e.next=14,c.default.userInfoEditSave(d);case 14:if(f=e.sent,!f.status){e.next=21;break}return s.default.showSuccess("修改头像成功"),e.next=19,o.default.updateUserInfo();case 19:e.sent,t.loadUser();case 21:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()})}},computed:{addressShowText:function(){if(!this.user)return"";var t="";return this.user.province&&(t+=this.user.province),this.user.city&&(t+=this.user.city),this.user.region&&(t+=this.user.region),this.user.address&&(t+=this.user.address),t}}};e.default=d},"21dc":function(t,e,n){var i=n("25fd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3e73c771",i,!0,{sourceMap:!1,shadowMode:!1})},2268:function(t,e,n){"use strict";var i=n("75dd"),a=n.n(i);a.a},"25fd":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.wrap[data-v-390e13fe]{width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;padding-left:%?30?%;padding-right:%?30?%}.cell-icon[data-v-390e13fe]{width:%?40?%;height:%?40?%;margin-right:%?30?%}.cell-title[data-v-390e13fe]{-webkit-align-self:center;align-self:center}.cell-right-row[data-v-390e13fe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?40?%;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.cell-right-arraw[data-v-390e13fe]{height:%?20?%;width:%?12?%;margin-left:%?10?%}',""]),t.exports=e},5195:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-533571f6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#f5f5f5;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}.user-avatar-section[data-v-533571f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?30?%;font-size:%?28?%;color:#333;background-color:#fff}.user-avatar[data-v-533571f6]{width:%?120?%;height:%?120?%;border-radius:%?60?%}.section-header[data-v-533571f6]{margin-left:%?20?%;font-size:%?24?%;color:#666;margin-top:%?20?%;margin-bottom:%?20?%}.logout-bt[data-v-533571f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;color:#ff552e;font-size:%?28?%;margin-top:%?40?%;height:%?100?%;font-weight:400}',""]),t.exports=e},"550a":function(t,e,n){"use strict";var i=n("21dc"),a=n.n(i);a.a},"61f8":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={normalCell:n("d6e3").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!=t.user?n("v-uni-view",{staticClass:"container"},[n("v-uni-text",{staticClass:"section-header"},[t._v("基础信息")]),n("v-uni-view",{staticClass:"user-avatar-section",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseAvatar.apply(void 0,arguments)}}},[n("v-uni-text",[t._v("头像")]),n("v-uni-image",{staticClass:"user-avatar",attrs:{src:t.user.image?t.user.image:"/static/image/image_placeholder_user.png"}})],1),n("v-uni-view",{staticClass:"divider"}),n("normal-cell",{attrs:{title:"ID",content:t.user.id,itemHeight:100}}),n("v-uni-view",{staticClass:"divider"}),n("normal-cell",{attrs:{title:"昵称",content:t.user.name,itemHeight:100,showRightArraw:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickNickName.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"divider"}),n("normal-cell",{attrs:{title:"地址",content:t.addressShowText,itemHeight:100,showRightArraw:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickToEditPersonAddress.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"divider"}),n("v-uni-text",{staticClass:"section-header"},[t._v("收款信息")]),"ALIPAY"==t.user.collectionChannels?[n("normal-cell",{attrs:{title:"收款渠道",content:"支付宝",itemHeight:100,showRightArraw:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCollectMoneySet.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"divider"}),n("normal-cell",{attrs:{title:"账号",content:t.user.alipayAccount+"("+t.user.alipayName+")",itemHeight:100}})]:"WECHAT"==t.user.collectionChannels?[n("normal-cell",{attrs:{title:"收款渠道",content:"微信",itemHeight:100,showRightArraw:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCollectMoneySet.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"divider"}),n("normal-cell",{attrs:{title:"账号",content:t.user.weChatAccount+"("+t.user.weChatName+")",itemHeight:100}})]:"BANK_CARD"==t.user.collectionChannels?[n("normal-cell",{attrs:{title:"收款渠道",content:"银行卡",itemHeight:100,showRightArraw:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCollectMoneySet.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"divider"}),n("normal-cell",{attrs:{title:"持卡人",content:t.user.cardHolderName,itemHeight:100}}),n("v-uni-view",{staticClass:"divider"}),n("normal-cell",{attrs:{title:"银行卡号",content:t.user.bankCardNo,itemHeight:100}}),n("v-uni-view",{staticClass:"divider"}),n("normal-cell",{attrs:{title:"所属银行",content:t.user.bankName,itemHeight:100}}),n("v-uni-view",{staticClass:"divider"}),n("normal-cell",{attrs:{title:"所属支行",content:t.user.bankBranch,itemHeight:100}})]:[n("normal-cell",{attrs:{title:"收款渠道",content:"请选择",itemHeight:100,showRightArraw:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCollectMoneySet.apply(void 0,arguments)}}})],n("v-uni-view",{staticClass:"divider"}),n("v-uni-text",{staticClass:"section-header"},[t._v("账号安全")]),n("normal-cell",{attrs:{title:"更换手机号",content:t.user.phone,itemHeight:100,showRightArraw:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickToCHangePhone.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"divider"}),n("normal-cell",{attrs:{title:"修改密码",content:"",itemHeight:100,showRightArraw:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickToChangePwd.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"divider"}),n("v-uni-view",{staticClass:"logout-bt",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logoutEvent.apply(void 0,arguments)}}},[n("v-uni-text",[t._v("退出登录")])],1)],2):t._e()},r=[]},"75dd":function(t,e,n){var i=n("5195");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("485168b4",i,!0,{sourceMap:!1,shadowMode:!1})},9413:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"wrap",style:t.realItemHeight,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.itemClick.apply(void 0,arguments)}}},[t.iconSrc?i("v-uni-image",{staticClass:"cell-icon",attrs:{src:t.iconSrc}}):t._e(),i("v-uni-text",{staticClass:"cell-title",style:{color:t.titleColor,fontSize:t.titleFontSize+"rpx"}},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"cell-right-row"},[t.showRightArraw?i("v-uni-image",{staticClass:"cell-right-arraw",attrs:{src:n("fe05")}}):t._e(),t.slotRightIcon?t._t("icon_right"):t._e(),i("v-uni-text",{staticClass:"cell-content",style:{color:t.contentColor,fontSize:t.contentFontSize+"rpx"}},[t._v(t._s(t.content))])],2)],1)},r=[]},"9ce4":function(t,e,n){"use strict";var i=n("4ea4");n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("795c")),r=function(t,e,n,i){return new(n||(n=Promise))((function(a,r){function o(t){try{c(i.next(t))}catch(e){r(e)}}function l(t){try{c(i["throw"](t))}catch(e){r(e)}}function c(t){t.done?a(t.value):new n((function(e){e(t.value)})).then(o,l)}c((i=i.apply(t,e||[])).next())}))},o=function(t,e){var n,i,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(t){return function(e){return c([t,e])}}function c(r){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,i&&(a=2&r[0]?i["return"]:r[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,i=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(a=o.trys,!(a=a.length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(l){r=[6,l],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},l=function(){function t(){}return t.uploadFile=function(t){return r(this,void 0,Promise,(function(){var e,n;return o(this,(function(i){switch(i.label){case 0:return e={url:t,name:"sourceFile"},[4,a.default.upload("file/oss",e)];case 1:return n=i.sent(),n.status?[2,n.data]:[2,null]}}))}))},t}(),c=l;e.default=c},"9ed1":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"normal-cell",props:{itemHeight:{type:Number,default:0},iconSrc:{type:String,default:null},title:{type:String,default:null},content:{type:[String,Number],default:null},showRightArraw:{type:Boolean,default:!1},slotRightIcon:{type:Boolean,default:!1},titleFontSize:{type:Number,default:28},titleColor:{type:String,default:"#333333"},contentFontSize:{type:Number,default:28},contentColor:{type:String,default:"#333333"}},computed:{realItemHeight:function(){return this.itemHeight>0?{height:this.itemHeight+"rpx"}:{paddingTop:"30rpx",paddingBottom:"30rpx"}}},data:function(){return{}},methods:{itemClick:function(){this.$emit("click")}}};e.default=i},c72e:function(t,e,n){"use strict";n.r(e);var i=n("9ed1"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},d6e3:function(t,e,n){"use strict";n.r(e);var i=n("9413"),a=n("c72e");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("550a");var o,l=n("f0c5"),c=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"390e13fe",null,!1,i["a"],o);e["default"]=c.exports},f4b4:function(t,e,n){"use strict";n.r(e);var i=n("61f8"),a=n("133d");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("2268");var o,l=n("f0c5"),c=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"533571f6",null,!1,i["a"],o);e["default"]=c.exports},fe05:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAABxUlEQVQ4T32Sv2sUQRTHv28WTkyQgBAsDEFQEAstBHd+cPGIoiJiZWNnZZHGvyRd0M7SRuz8ASZodMPNDneb4rDQIiCiaKGNIuG8/fFkjolEd9fXzXufDztvvksAwMw0GAxWmfmLUmrV99qKAnyXmVeCfEdrvdYqWGsPCiGeAlgOEBPRbSnl/SaJfHM0Gs2Ox+N1ZjYBKpn5ltb6wb/SVPCVZdlcnucbRHRuTwJwUyn1aL/0R/BNa+1hIcQmgDMBmhDRDSnlkz3pL8E3kySZ73Q6rwGc8mci+sXM15VSG9Nz02LW2qNCiFcAToT5rhDiahzHSaMQdlrM83yLiBaD9APAlVbBQ2marhDRvX232GoVnHOXiOgxMx8IwtvJZNJr26EnhHgGYCbAO0VR9Lrd7uea4JxTANYBHArwByHEUhzHH2uvlKbpWSJ6CWAuwJ+qqlo2xuzUcrDWno6i6AUzz4f3/1qW5XljzLta0sPh8GRZlj6sI2H4raqqC8aYN7V/qd/vH4+iyIe0EIbfAVxUSm03hUrOufcAjoXhTyK6LKVMm+DpVZ1zCYAlALvMfE1r7b/WWpRl2UxRFA+JaE1K+fx/sJ/9BhRJrxp64B+CAAAAAElFTkSuQmCC"}}]);