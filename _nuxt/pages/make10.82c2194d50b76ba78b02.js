webpackJsonp([0],{"5zSc":function(t,e,n){var i=n("ZhPZ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("a013cf6a",i,!1,{sourceMap:!1})},"8H2S":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("style",{attrs:{type:"text/css"}},[t._v('\n      input[type="number"]::-webkit-inner-spin-button,\n      input[type="number"]::-webkit-outer-spin-button {\n          -webkit-appearance: none;\n      }\n\n      input[type="number"] {\n          -moz-appearance: textfield;\n      }\n  ')]),n("input",{staticClass:"input",attrs:{type:"number",min:"0",max:"9",placeholder:"0",id:"0"},on:{change:t.changeNum}}),n("input",{staticClass:"input",attrs:{type:"number",min:"0",max:"9",placeholder:"0",id:"1"},on:{change:t.changeNum}}),n("input",{staticClass:"input",attrs:{type:"number",min:"0",max:"9",placeholder:"0",id:"2"},on:{change:t.changeNum}}),n("input",{staticClass:"input",attrs:{type:"number",min:"0",max:"9",placeholder:"0",id:"3"},on:{change:t.changeNum}}),n("p",{staticClass:"counter"},[t._v("\n    "+t._s(t.anss.length)+" solutions\n  ")]),t._l(t.anss,function(e,i){return n("li",{key:i,staticClass:"list"},[n("span",{staticClass:"ans"},[t._v(t._s(e)+" ")])])})],2)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},"AS/t":function(t,e,n){var i=n("gKpz");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("5fac2ecd",i,!1,{sourceMap:!1})},FxuI:function(t,e,n){"use strict";var i=n("rHJw"),s=n("8H2S"),a=!1;var c=function(t){a||n("AS/t")},o=n("VU/8")(i.a,s.a,!1,c,null,null);o.options.__file="components/make10.vue",e.a=o.exports},"Rp/F":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("tRzy"),s=n("Yf/k"),a=!1;var c=function(t){a||n("5zSc")},o=n("VU/8")(i.a,s.a,!1,c,null,null);o.options.__file="pages/make10.vue",e.default=o.exports},"Yf/k":function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[this._v("\n      make 10\n    ")]),e("input4nums")],1)])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},ZhPZ:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;color:#35495e;letter-spacing:1px;font-size:calc(80% + 12.5vw)}",""])},gKpz:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".input{font-weight:160;font-size:calc(60% + 6.25vw);color:#35495e;letter-spacing:1px;width:20%;height:10vw;margin:3px;text-align:center;margin-bottom:4vh}.counter{font-weight:200;font-size:calc(50% + 2.1875vw)}.ans{font-weight:160;font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:calc(50% + 1.25vw)}.list{margin-top:10px;list-style:none}",""])},rHJw:function(t,e,n){"use strict";e.a={computed:{anss:function(){return this.$store.state.make10.list},nums:function(){return this.$store.state.make10.nums}},methods:{changeNum:function(t){this.$store.commit("make10/changeNum",{num:t.target.value,i:t.target.id})}}}},tRzy:function(t,e,n){"use strict";var i=n("FxuI");e.a={components:{input4nums:i.a}}}});