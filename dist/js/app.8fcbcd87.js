(function(t){function e(e){for(var o,a,i=e[0],s=e[1],u=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},c=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/VueTest/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"33f6":function(t,e,n){},"39a3":function(t,e,n){"use strict";var o=n("33f6"),r=n.n(o);r.a},"3c0b":function(t,e,n){},4864:function(t,e,n){"use strict";var o=n("c1a9"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AddTodo"),n("Todos")],1)},c=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mytodos"},[n("h2",{staticClass:"heading"},[t._v("Let's DO IT")]),n("p",[t._v("Double click once done.")]),n("div",{staticClass:"todos"},t._l(t.allTodos,(function(e){return n("div",{key:e.id,staticClass:"todo",class:{completed:e.completed},on:{dblclick:function(n){return t.onDblClick(e)}}},[n("h3",{staticClass:"title"},[t._v(t._s(e.title))]),n("i",{staticClass:"fas fa-trash-alt delete_icon",class:{delete_icon_active:e.completed},on:{click:function(n){return t.deleteTodo(e.id)}}})])})),0)])},i=[],s=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),u=n("9ce4");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"Todos",methods:d({},Object(u["b"])(["fetchTodos","deleteTodo","updateTodo"]),{onDblClick:function(t){var e={id:t.id,title:t.title,completed:!t.completed};this.updateTodo(e)}}),computed:Object(u["c"])(["allTodos"]),created:function(){this.fetchTodos()}},f=p,b=(n("39a3"),n("2877")),v=Object(b["a"])(f,a,i,!1,null,null,null),m=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"AddTodo"},[n("form",{on:{submit:t.onSubmit}},[n("h2",{staticClass:"heading"},[t._v("Add To List")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"addInput",attrs:{type:"text",placeholder:"Add Todo.."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("input",{staticClass:"add_button",attrs:{type:"submit",value:"ADD"}})]),n("FilterTodos")],1)},O=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter"},[n("span",[t._v("Filter TODOS")]),n("select",{on:{change:function(e){return t.filterTodo(e)}}},[n("option",{attrs:{value:"5"}},[t._v("5")]),n("option",{attrs:{selected:"",value:"10"}},[t._v("10")]),n("option",{attrs:{value:"50"}},[t._v("20")]),n("option",{attrs:{value:"200"}},[t._v("200")])])])},j=[],g={name:"FilterTodos",methods:Object(u["b"])(["filterTodo"])},T=g,w=(n("4864"),Object(b["a"])(T,y,j,!1,null,null,null)),_=w.exports;function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k={name:"AddTodo",components:{FilterTodos:_},data:function(){return{title:""}},methods:P({},Object(u["b"])(["addTodo"]),{onSubmit:function(t){""!==this.title?(t.preventDefault(),this.addTodo(this.title),this.title=""):alert("Text Required..!")}})},D=k,C=(n("5c74"),Object(b["a"])(D,h,O,!1,null,"6db2a147",null)),S=C.exports,R={name:"app",components:{Todos:m,AddTodo:S}},E=R,A=(n("034f"),Object(b["a"])(E,r,c,!1,null,null,null)),I=A.exports,$=(n("c740"),n("a434"),n("e25e"),n("96cf"),n("1da1")),F=n("8206"),M=n.n(F),J={todos:[]},L={allTodos:function(t){return t.todos}},q={fetchTodos:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,M.a.get("http://jsonplaceholder.typicode.com/todos?_limit=10");case 3:o=t.sent,n("setTodos",o.data);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),addTodo:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,M.a.post("http://jsonplaceholder.typicode.com/todos",{title:n,completed:!1});case 3:r=t.sent,o("newTodo",r.data);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),deleteTodo:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,M.a.delete("http://jsonplaceholder.typicode.com/todos/".concat(n));case 3:o("removeTodo",n);case 4:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),filterTodo:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){var o,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,r=parseInt(n.target.options[n.target.options.selectedIndex].innerText),t.next=4,M.a.get("http://jsonplaceholder.typicode.com/todos?_limit=".concat(r));case 4:c=t.sent,o("setTodos",c.data);case 6:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),updateTodo:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,M.a.put("http://jsonplaceholder.typicode.com/todos/".concat(n.id),n);case 3:r=t.sent,o("updateTodo",r.data);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},N={setTodos:function(t,e){return t.todos=e},newTodo:function(t,e){return t.todos.unshift(e)},removeTodo:function(t,e){return t.todos=t.todos.filter((function(t){return t.id!==e}))},updateTodo:function(t,e){var n=t.todos.findIndex((function(t){return t.id===e.id}));-1!==n&&t.todos.splice(n,1,e)}},V={state:J,getters:L,actions:q,mutations:N};o["a"].use(u["a"]);var z=new u["a"].Store({modules:{todos:V}});o["a"].config.productionTip=!1,new o["a"]({store:z,render:function(t){return t(I)}}).$mount("#app")},"5c74":function(t,e,n){"use strict";var o=n("3c0b"),r=n.n(o);r.a},"85ec":function(t,e,n){},c1a9:function(t,e,n){}});
//# sourceMappingURL=app.8fcbcd87.js.map