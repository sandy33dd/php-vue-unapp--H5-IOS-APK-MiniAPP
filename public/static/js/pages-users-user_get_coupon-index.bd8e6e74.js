(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_get_coupon-index"],{"114b":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndexData=u,e.getLogo=s,e.setFormId=a,e.setCouponReceive=r,e.getCoupons=c,e.getUserCoupons=l,e.getNewCoupon=f,e.getArticleCategoryList=d,e.getArticleList=g,e.getArticleHotList=p,e.getArticleBannerList=v,e.getArticleDetails=h,e.loginMobile=_,e.verifyCode=w,e.registerVerify=b,e.phoneRegister=C,e.phoneRegisterReset=m,e.phoneLogin=y,e.switchH5Login=A,e.bindingPhone=L,e.bindingUserPhone=x,e.logout=k,e.getTemlIds=T,e.pink=$,e.getCity=R,e.getLiveList=U,e.getDiy=I,e.follow=M;var o=i(n("f2c5"));function u(){return o.default.get("v2/index",{},{noAuth:!0})}function s(){return o.default.get("wechat/get_logo",{},{noAuth:!0})}function a(t){return o.default.post("wechat/set_form_id",{formId:t})}function r(t){return o.default.post("coupon/receive",{couponId:t})}function c(t){return o.default.get("coupons",t,{noAuth:!0})}function l(t){return o.default.get("coupons/user/"+t)}function f(){return o.default.get("v2/new_coupon")}function d(){return o.default.get("article/category/list",{},{noAuth:!0})}function g(t,e){return o.default.get("article/list/"+t,e,{noAuth:!0})}function p(){return o.default.get("article/hot/list",{},{noAuth:!0})}function v(){return o.default.get("article/banner/list",{},{noAuth:!0})}function h(t){return o.default.get("article/details/"+t,{},{noAuth:!0})}function _(t){return o.default.post("login/mobile",t,{noAuth:!0})}function w(){return o.default.get("verify_code",{},{noAuth:!0})}function b(t,e,n,i){return o.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:i},{noAuth:!0})}function C(t){return o.default.post("register",t,{noAuth:!0})}function m(t){return o.default.post("register/reset",t,{noAuth:!0})}function y(t){return o.default.post("login",t,{noAuth:!0})}function A(){return o.default.post("switch_h5",{from:"wechat"})}function L(t){return o.default.post("binding",t,{noAuth:!0})}function x(t){return o.default.post("user/binding",t)}function k(){return o.default.get("logout")}function T(){return o.default.get("wechat/teml_ids",{},{noAuth:!0})}function $(){return o.default.get("pink",{},{noAuth:!0})}function R(){return o.default.get("city_list",{},{noAuth:!0})}function U(t,e){return o.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}function I(){return o.default.get("v2/diy/get_diy",{},{noAuth:!0})}function M(){return o.default.get("wechat/follow",{},{noAuth:!0})}},"1edf":function(t,e,n){"use strict";n.r(e);var i=n("f5b6"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a},3531:function(t,e,n){"use strict";var i=n("d065"),o=n.n(i);o.a},"419f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".condition .line-title[data-v-c776b7c4]{width:%?90?%;padding:0 %?10?%;box-sizing:border-box;background:#fff7f7;border:1px solid #e83323;opacity:1;border-radius:%?20?%;font-size:%?20?%;color:#e83323;margin-right:%?12?%}.condition .line-title.gray[data-v-c776b7c4]{border-color:#bbb;color:#bbb;background-color:#f5f5f5}.coupon-list .pic-num[data-v-c776b7c4]{color:#fff;font-size:%?24?%}",""]),t.exports=e},"47ec":function(t,e,n){t.exports=n.p+"static/img/noCoupon.e524084b.png"},a945:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.couponsList.length?i("v-uni-view",{staticClass:"coupon-list"},t._l(t.couponsList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item acea-row row-center-wrapper"},[i("v-uni-view",{staticClass:"money",class:e.is_use?"moneyGray":""},[i("v-uni-view",[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.coupon_price))])],1),i("v-uni-view",{staticClass:"pic-num"},[t._v("满"+t._s(e.use_min_price)+"元可用")])],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"condition line1"},[0===e.type?i("span",{staticClass:"line-title",class:1==e.is_use||2==e.is_use?"gray":""},[t._v("通用劵")]):1===e.type?i("span",{staticClass:"line-title",class:1==e.is_use||2==e.is_use?"gray":""},[t._v("品类券")]):i("span",{staticClass:"line-title",class:1==e.is_use||2==e.is_use?"gray":""},[t._v("商品券")]),i("span",[t._v(t._s(e.title))])]),i("v-uni-view",{staticClass:"data acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(e.start_time?e.start_time+"-":"")+t._s(e.end_time))]),1==e.is_use?i("v-uni-view",{staticClass:"bnt gray"},[t._v("已领取")]):2==e.is_use?i("v-uni-view",{staticClass:"bnt gray"},[t._v("已领完")]):i("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getCoupon(e.id,n)}}},[t._v("立即领取")])],1)],1)],1)})),1):t._e(),t.couponsList.length?i("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t.couponsList.length||1!=t.loading?t._e():i("v-uni-view",{staticClass:"noCommodity"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:n("47ec")}})],1)],1)],1)},u=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}))},bbca:function(t,e,n){"use strict";n.r(e);var i=n("a945"),o=n("1edf");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("3531");var s,a=n("f0c5"),r=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"c776b7c4",null,!1,i["a"],s);e["default"]=r.exports},d065:function(t,e,n){var i=n("419f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("35578caa",i,!0,{sourceMap:!1,shadowMode:!1})},f5b6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("114b"),o=n("8212"),u=n("2f62"),s={components:{},data:function(){return{couponsList:[],loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:20,isAuto:!1,isShowAuth:!1}},computed:(0,u.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?this.getUseCoupons():(0,o.toLogin)()},onReachBottom:function(){this.getUseCoupons()},methods:{onLoadFun:function(){this.getUseCoupons()},authColse:function(t){this.isShowAuth=t},getCoupon:function(t,e){var n=this,o=n.couponsList;(0,i.setCouponReceive)(t).then((function(t){o[e].is_use=!0,n.$set(n,"couponsList",o),n.$util.Tips({title:"领取成功"})}),(function(t){return n.$util.Tips({title:t.msg})}))},getUseCoupons:function(){var t=this;return!this.loadend&&(!this.loading&&void(0,i.getCoupons)({page:t.page,limit:t.limit}).then((function(e){var n=e.data,i=n.length<t.limit,o=t.$util.SplitArray(n,t.couponsList);t.$set(t,"couponsList",o),t.loadend=i,t.loadTitle=i?"我也是有底线的":"加载更多",t.page=t.page+1,t.loading=!1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))}}};e.default=s}}]);