(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e9026e8"],{"1eda":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[t._v("喵喵网管理后台 ，欢迎："+t._s(t.$store.state.user.name))]),n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("el-menu",{attrs:{"default-active":"1"}},[n("el-menu-item",{attrs:{index:"1"}},[n("i",{staticClass:"el-icon-menu"}),n("router-link",{attrs:{slot:"title",to:"/admin/users",tag:"span"},slot:"title"},[t._v("用户管理")])],1),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-document"}),n("router-link",{attrs:{slot:"title",to:"/admin/movie",tag:"span"},slot:"title"},[t._v("电影管理")])],1),n("el-menu-item",{attrs:{index:"3"}},[n("i",{staticClass:"el-icon-setting"}),n("router-link",{attrs:{slot:"title",to:"/admin/cinema",tag:"span"},slot:"title"},[t._v("影院管理")])],1)],1)],1),n("el-main",[n("router-view")],1)],1)],1)},i=[],s=n("bc3a"),l=n.n(s),o={name:"admin",beforeRouteEnter:function(t,e,n){l.a.get("/api2/admin").then((function(t){var e=t.data.status;0===e?n():n("/mine/login")}))}},r=o,u=(n("4ad4"),n("2877")),c=Object(u["a"])(r,a,i,!1,null,"2c3a6928",null);e["default"]=c.exports},"4ad4":function(t,e,n){"use strict";var a=n("a0fd"),i=n.n(a);i.a},a0fd:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6e9026e8.9d801cbb.js.map