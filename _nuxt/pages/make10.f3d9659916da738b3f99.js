webpackJsonp([1],{"5zSc":function(t,e,n){var s=n("ZhPZ");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("a013cf6a",s,!1,{sourceMap:!1})},"Rp/F":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("tRzy"),i=n("Yf/k"),a=!1;var c=function(t){a||n("5zSc")},o=n("VU/8")(s.a,i.a,!1,c,null,null);o.options.__file="pages/make10.vue",e.default=o.exports},"Yf/k":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",[n("style",{attrs:{type:"text/css"}},[t._v('\n        input[type="number"]::-webkit-inner-spin-button,\n        input[type="number"]::-webkit-outer-spin-button {\n            -webkit-appearance: none;\n        },\n        input[type="number"] {\n            -moz-appearance: textfield;\n        }\n    ')]),n("h1",{staticClass:"title"},[t._v("\n      make 10\n    ")]),n("input",{staticClass:"input",attrs:{id:"0"},on:{change:t.changeNum}}),n("input",{staticClass:"input",attrs:{id:"1"},on:{change:t.changeNum}}),n("input",{staticClass:"input",attrs:{id:"2"},on:{change:t.changeNum}}),n("input",{staticClass:"input",attrs:{id:"3"},on:{change:t.changeNum}}),n("p",{staticClass:"counter"},[t._v("\n      "+t._s(t.anss.length)+" solutions\n    ")]),t._l(t.anss,function(e,s){return n("li",{key:s,staticClass:"list"},[n("span",{staticClass:"ans"},[t._v(t._s(e)+" ")])])})],2)])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},ZhPZ:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:calc(80% + 12.5vw)}.input,.title{color:#35495e;letter-spacing:1px}.input{font-weight:160;font-size:calc(80% + 3.125vw);width:20%;height:10vw;margin:3px;text-align:center;margin-bottom:4vh}.counter{font-weight:200;font-size:calc(50% + 2.1875vw)}.ans{font-weight:160;font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:calc(50% + 1.25vw)}.list{margin-top:10px;list-style:none}",""])},tRzy:function(t,e,n){"use strict";e.a={computed:{anss:function(){return this.$store.state.make10.list},nums:function(){return this.$store.state.make10.nums}},methods:{changeNum:function(t){var e=t.target.value;console.log(e);var n="0123456789".indexOf(e,0);n<0&&(n=0,t.target.value="0"),this.$store.commit("make10/changeNum",{num:n,i:t.target.id})}}}}});