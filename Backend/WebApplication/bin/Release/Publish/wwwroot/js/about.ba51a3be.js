(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1071:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Edit"},[e("button",{on:{click:t.ReloadBoard}},[t._v("ReloadBoard")]),e("Board",{attrs:{isReadonly:!1},on:{SaveTask:t.SaveBoard},model:{value:t.data,callback:function(a){t.data=a},expression:"data"}})],1)},o=[],n=(e("8e6e"),e("ac6a"),e("456d"),e("ade3")),d=e("2f62"),c=e("91ea"),i=e("aca9");function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){Object(n["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var l={name:"Edit",components:{Board:c["a"]},data:function(){return{apiHandler:new i["a"],data:this.$store.state.remoteBoard.boardData}},computed:{boardData:{get:function(){return this.$store.state.remoteBoard.boardData}}},methods:u({ReloadBoard:function(){var t=this;t.apiHandler.GetBoardData().then((function(a){t.SetBoardData(a.data),t.data=a.data}))},SaveBoard:function(){var t=this;t.SetBoardData(t.data),t.apiHandler.SaveBoardData(t.boardData)}},Object(d["b"])("remoteBoard",["SetBoardData"])),mounted:function(){this.ReloadBoard()}},b=l,p=e("2877"),f=Object(p["a"])(b,r,o,!1,null,"79a2f973",null);a["default"]=f.exports}}]);
//# sourceMappingURL=about.ba51a3be.js.map