(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/detail/comments-scroll"],{"0dd2":function(t,n,e){"use strict";e.r(n);var o=e("7506"),r=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=r.a},7506:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:["comments","goodId"],computed:{},methods:{open:function(){t.navigateTo({url:"/pages/detail-comments/detail-comments?id="+this.goodId})},event:function(n,e,o){return t.previewImage({current:o,urls:this.comments[o].imgList,indicator:"default"})}}};n.default=e}).call(this,e("543d")["default"])},a077:function(t,n,e){"use strict";e.r(n);var o=e("b439"),r=e("0dd2");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("b9e4");var a,c=e("f0c5"),i=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=i.exports},b439:function(t,n,e){"use strict";var o,r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.comments,function(n,e){var o=t._f("formatTime")(n.createTime);return{$orig:t.__get_orig(n),f0:o}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},u=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return o})},b9e4:function(t,n,e){"use strict";var o=e("d2f6"),r=e.n(o);r.a},d2f6:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/detail/comments-scroll-create-component',
    {
        'components/detail/comments-scroll-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a077"))
        })
    },
    [['components/detail/comments-scroll-create-component']]
]);
