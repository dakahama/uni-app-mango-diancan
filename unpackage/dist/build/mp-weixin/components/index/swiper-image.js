(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/index/swiper-image"],{3411:function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return r})},6703:function(t,e,n){"use strict";n.r(e);var r=n("3411"),u=n("f501");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);var a,c=n("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=o.exports},c8b1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{resdata:Array,height:{type:Number,default:350},preview:{type:Boolean,default:!1}},computed:{getStyle:function(){return"height: ".concat(this.height,"rpx")},getUrls:function(){return this.resdata.map(function(t){return t.src})}},methods:{event:function(e,n){if(this.preview)return t.previewImage({current:n,urls:this.getUrls,indicator:"default"});console.log("点击了轮播图"+e.index)}}};e.default=n}).call(this,n("543d")["default"])},f501:function(t,e,n){"use strict";n.r(e);var r=n("c8b1"),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/index/swiper-image-create-component',
    {
        'components/index/swiper-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6703"))
        })
    },
    [['components/index/swiper-image-create-component']]
]);
