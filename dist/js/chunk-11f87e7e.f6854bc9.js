(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11f87e7e"],{"2eb4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[e._v("个人中心：")]),a("div",[e._v("当前用户："+e._s(e.$store.state.user.name)+" "),a("a",{attrs:{href:"javascript:;"},on:{touchstart:e.handleToLogout}},[e._v("退出")])]),e.$store.state.user.isAdmin?a("div",[e._v("用户身份：管理员 "),a("a",{attrs:{href:"/admin",target:"_blank"}},[e._v("进入管理后台")])]):a("div",[e._v("用户身份：普通会员")]),a("div",[a("input",{attrs:{type:"file",name:"file",value:"上传头像"},on:{change:e.handleToUpload}}),a("img",{staticClass:"userHead",attrs:{src:e.$store.state.user.userHead}})])])},s=[],o=(a("b0c0"),a("bc3a")),i=a.n(o),r=a("7826"),d={name:"center",methods:{handleToLogout:function(){var e=this;this.axios.get("/api2/users/logout").then((function(t){var a=t.data.status;0===a&&(localStorage.removeItem("name"),localStorage.removeItem("isAdmin"),e.$store.commit("user/USER_NAME",{name:"",isAdmin:!1,userHead:""}),e.$router.push("/mine/login"))}))},handleToUpload:function(e){var t=this,a=e.target.files[0],n=new FormData;n.append("file",a,a.name);var s={headers:{"Content-Type":"multipart/form-data"}};this.axios.post("/api2/users/uploadUserHead",n,s).then((function(e){var a=e.data.status,n=t;0===a?Object(r["a"])({title:"信息",content:"上传头像成功",ok:"确定",handleOk:function(){n.$store.commit("user/USER_NAME",{name:n.$store.state.user.name,isAdmin:n.$store.state.user.isAdmin,userHead:e.data.data.userHead+"?"+Math.random()})}}):Object(r["a"])({title:"信息",content:"上传头像失败",ok:"确定"})}))}},beforeRouteEnter:function(e,t,a){i.a.get("/api2/users/getUser").then((function(e){var t=e.data.status;a(0===t?function(t){localStorage.setItem("name",e.data.data.username),localStorage.setItem("isAdmin",e.data.data.isAdmin),t.$store.commit("user/USER_NAME",{name:e.data.data.username,isAdmin:e.data.data.isAdmin,userHead:e.data.data.userHead})}:"/mine/login")}))}},c=d,l=(a("85e4"),a("2877")),u=Object(l["a"])(c,n,s,!1,null,"67f9a968",null);t["default"]=u.exports},"6afa":function(e,t,a){},7826:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"messageBox"},[a("h2",[e._v(e._s(e.title))]),a("p",[e._v(e._s(e.content))]),a("div",[e.cancel?a("div",{on:{touchstart:e.handleCancel}},[e._v(e._s(e.cancel))]):e._e(),e.ok?a("div",{on:{touchstart:e.handleOk}},[e._v(e._s(e.ok))]):e._e()])])},o=[],i={name:"MessageBox"},r=i,d=(a("8b0c"),a("2877")),c=Object(d["a"])(r,s,o,!1,null,"4825d109",null),l=c.exports,u=function(){return function(e){var t={title:"",content:"",cancel:"",ok:"",handleCancel:null,handleOk:null},a=n["default"].extend(l);for(var s in e)t[s]=e[s];var o=new a({el:document.createElement("div"),data:{title:t.title,content:t.content,cancel:t.cancel,ok:t.ok},methods:{handleCancel:function(){t.handleCancel&&t.handleCancel.call(this),document.body.removeChild(o.$el)},handleOk:function(){t.handleOk&&t.handleOk.call(this),document.body.removeChild(o.$el)}}});document.body.appendChild(o.$el)}}()},"85e4":function(e,t,a){"use strict";var n=a("b174"),s=a.n(n);s.a},"8b0c":function(e,t,a){"use strict";var n=a("6afa"),s=a.n(n);s.a},b174:function(e,t,a){}}]);
//# sourceMappingURL=chunk-11f87e7e.f6854bc9.js.map