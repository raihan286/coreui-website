(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b856957"],{"159e":function(e,t,a){"use strict";a("3612")},3612:function(e,t,a){},"9b41":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"c-app",class:{"c-dark-theme":e.$store.state.darkMode}},[a("EmailSidebar"),a("TheAside"),a("CWrapper",[a("TheHeader"),a("div",{staticClass:"c-body"},[a("main",{staticClass:"c-main"},[a("CContainer",{attrs:{fluid:""}},[a("CCard",{staticClass:"c-email-app"},[a("CCardBody",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{key:e.$route.path})],1)],1)],1)],1)],1)]),a("TheFooter")],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CSidebar",{attrs:{"color-scheme":"light",minimize:e.minimized,show:e.show},on:{"update:show":function(t){return e.$store.commit("set",["sidebarShow",t])}}},[a("CSidebarBrand",{staticClass:"d-md-down-none",attrs:{to:"/apps/email"}},[a("CIcon",{staticClass:"c-sidebar-brand-full",attrs:{name:"logo",size:"custom-size",height:35,viewBox:"0 0 556 134"}}),a("CIcon",{staticClass:"c-sidebar-brand-minimized",attrs:{name:"logo",size:"custom-size",height:35,viewBox:"0 0 110 134"}})],1),a("CSidebarNav",[a("CSidebarNavItem",{attrs:{color:"success",to:"./compose",icon:"cil-pencil",name:"Compose"}}),a("CSidebarNavItem",{attrs:{to:"./inbox",icon:"cil-inbox",name:"Inbox",badge:{text:4,color:"danger"}}}),a("CSidebarNavItem",{attrs:{icon:"cil-star",name:"Stared"}}),a("CSidebarNavItem",{attrs:{icon:"cil-paper-plane",name:"Sent"}}),a("CSidebarNavItem",{attrs:{icon:"cil-trash",name:"Trash"}}),a("CSidebarNavItem",{attrs:{icon:"cil-bookmark",name:"Important",badge:{text:5,color:"info"}}}),a("CSidebarNavItem",{attrs:{icon:"cil-inbox",name:"Spam",badge:{text:25,color:"warning"}}}),a("CSidebarNavItem",{staticClass:"mt-auto",attrs:{to:"/",icon:"cil-speedometer",name:"Dashboard",badge:{text:"NEW",color:"info"}}})],1),a("CSidebarMinimizer",{staticClass:"c-d-md-down-none",nativeOn:{click:function(t){e.minimized=!e.minimized}}})],1)},s=[],r={name:"EmailSidebar",data:function(){return{minimized:!1}},computed:{show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}}},c=r,d=a("2877"),m=Object(d["a"])(c,o,s,!1,null,null,null),l=m.exports,b=a("01c0"),u=a("0932"),C=a("dbaf"),p={name:"EmailApp",components:{EmailSidebar:l,TheHeader:b["a"],TheFooter:u["a"],TheAside:C["a"]}},h=p,S=(a("159e"),Object(d["a"])(h,i,n,!1,null,"68613d68",null));t["default"]=S.exports}}]);
//# sourceMappingURL=chunk-2b856957.3a54a32e.js.map