(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/search/color-tag"],{"098c":function(r,o,t){"use strict";var n,e=function(){var r=this,o=r.$createElement;r._self._c},c=[];t.d(o,"b",function(){return e}),t.d(o,"c",function(){return c}),t.d(o,"a",function(){return n})},1780:function(r,o,t){"use strict";t.r(o);var n=t("86a4"),e=t.n(n);for(var c in n)"default"!==c&&function(r){t.d(o,r,function(){return n[r]})}(c);o["default"]=e.a},"6f7d":function(r,o,t){"use strict";t.r(o);var n=t("098c"),e=t("1780");for(var c in e)"default"!==c&&function(r){t.d(o,r,function(){return e[r]})}(c);var u,a=t("f0c5"),l=Object(a["a"])(e["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);o["default"]=l.exports},"86a4":function(r,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={props:{item:Object,color:{type:Boolean,default:!0}},computed:{getStyle:function(){if(!this.color)return"border:0;background:#F5F5F5;";var r={borderColor:["#EEA6AA","#DD6A4B","#98D5D8","#9DBE93","#BCCD99"],background:["#F8EAE9","#FFBEC6","#E8F6F6","#E4F5E2","#F2F6E8"]},o=Math.floor(Math.random()*r.borderColor.length),t=r.borderColor[o],n=r.background[o];return"background: ".concat(n,";border-color: ").concat(t,";")}}};o.default=n}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/search/color-tag-create-component',
    {
        'components/search/color-tag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6f7d"))
        })
    },
    [['components/search/color-tag-create-component']]
]);
