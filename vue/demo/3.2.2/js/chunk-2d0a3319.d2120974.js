(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3319"],{"00ad":function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("CCard",[e("CCardHeader",[e("div",[e("CIcon",{attrs:{name:"cil-task"}}),t._v(" Toasts "),e("a",{staticClass:"badge badge-danger ml-1",attrs:{href:"https://coreui.io/pro/vue/",rel:"noreferrer noopener",target:"_blank"}},[t._v(" CoreUI Pro ")]),e("div",{staticClass:"card-header-actions"},[e("a",{staticClass:"card-header-action",attrs:{href:"https://coreui.io/vue/docs/components/toast",rel:"noreferrer noopener",target:"_blank"}},[e("small",{staticClass:"text-muted"},[t._v("docs")])])])],1)]),e("CRow",[e("CCol",{attrs:{sm:"12",lg:"6"}},[e("CForm",{staticClass:"m-4"},[e("h5",[t._v("Add toast with following props:")]),e("CInputCheckbox",{staticClass:"my-2 mt-4",attrs:{checked:t.autohide,custom:"",label:"Autohide of the toast"},on:{"update:checked":function(o){t.autohide=o}}}),t.autohide?e("CInput",{staticClass:"my-2",attrs:{value:t.autohideValue,type:"number",lazy:"",label:"Time to autohide"},on:{"update:value":function(o){t.autohideValue=o}}}):t._e(),e("CSelect",{staticClass:"my-2",attrs:{value:t.position,options:t.positions,custom:"",label:"Position"},on:{"update:value":function(o){t.position=o}}}),e("CInputCheckbox",{staticClass:"my-2",attrs:{checked:t.fade,custom:"",label:"fade"},on:{"update:checked":function(o){t.fade=o}}}),e("CInputCheckbox",{staticClass:"my-2",attrs:{checked:t.closeButton,custom:"",label:"closeButton"},on:{"update:checked":function(o){t.closeButton=o}}}),e("CButton",{staticClass:"mr-1 w-25",attrs:{color:"success"},on:{click:function(o){return t.addToast()}}},[t._v(" Add toast ")])],1)],1),e("CCol",{attrs:{sm:"12",lg:"6"}},[e("div",{staticClass:"m-4"},t._l(t.toasters,(function(o,s){return e("CToaster",{key:"toaster"+s,attrs:{position:s}},[t._l(o,(function(o,a){return[e("CToast",t._b({key:"toast"+a,attrs:{show:!0}},"CToast",o,!1),[t._v(" "+t._s("This is a toast in "+s+" positioned toaster number "+(a+1)+".")+" ")])]}))],2)})),1)])],1)],1)},a=[],i={name:"Toaster",data:function(){return{toasts:[{position:"static",header:"Toast title"},{position:"static",header:"Toast title"},{position:"top-right",header:"Toast title",autohide:3e3}],autohide:!0,autohideValue:5e3,closeButton:!0,fade:!0,position:"top-right",header:"Toast title",positions:["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"]}},computed:{toastConfig:function(){return{autohide:!!this.autohide&&this.autohideValue,closeButton:this.closeButton,fade:this.fade,position:this.position,header:this.header}},toasters:function(){return this.toasts.reduce((function(t,o){return t[o.position]=t[o.position]||[],t[o.position].push(o),t}),{})}},methods:{addToast:function(){this.toasts.push(this.toastConfig)}}},n=i,r=e("2877"),u=Object(r["a"])(n,s,a,!1,null,null,null);o["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0a3319.d2120974.js.map