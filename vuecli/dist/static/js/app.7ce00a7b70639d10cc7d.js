webpackJsonp([4],{"+9Sy":function(e,t){},"5reh":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r});var o="GET_TESTCLASSNAME",r="SET_TESTNAME"},"7Zba":function(e,t,n){"use strict";var o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("div",{staticClass:"title"},[this._v("\n    这个页面用来测试vue虚拟dom、render相关的知识\n  ")])])}]};var r=n("VU/8")({},o,!1,function(e){n("Wnu7")},"data-v-453e0116",null).exports,s=n("Dd8w"),a=n.n(s),u={name:"keepon",activated:function(){console.log("keepalive激活")},deactivated:function(){console.log("keepalive卸载")}},i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  keepalive\n")])},staticRenderFns:[]};var c=n("VU/8")(u,i,!1,function(e){n("C2oO")},null,null).exports,l={inject:{mytext:{from:"text",default:"2333"},mycolor:{from:"color",default:"green"}},beforeCreate:function(){console.log("孙=beforeCreate")},created:function(){console.log(this.$attrs),this.$listeners.childemit("孙组件"),this.$listeners.sunemit("孙组件"),console.log("孙=created")},beforeMount:function(){console.log("孙=beforeMount")},mounted:function(){console.log("孙=mounted")},beforeUpdate:function(){console.log("孙=beforeUpdate")},updated:function(){console.log("孙=updated")},beforeDestroy:function(){console.log("孙=beforeDestroy")},destroyed:function(){console.log("孙=destroyed")}},d={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticStyle:{"margin-left":"20px"}},[this._v("\n  孙组件\n  "),this._v(" "),this._v("\n  "+this._s(this.mycolor())+"\n")])},staticRenderFns:[]};var v={props:["id"],data:function(){return{resData:{id:this.id,name:"resData",children:[{id:1,name:"child"}]}}},components:{lifeChildDeep:n("VU/8")(l,d,!1,function(e){n("dAIx")},null,null).exports},methods:{sunEmit:function(e){console.log("_+_+_+_+_+",e+"用$listeners调用了子组件")}},beforeCreate:function(){console.log("子=beforeCreate")},created:function(){console.log(this.$attrs),this.$listeners.childemit("子组件"),console.log("子=created")},beforeMount:function(){console.log("子=beforeMount")},mounted:function(){console.log("子=mounted")},beforeUpdate:function(){console.log("子=beforeUpdate")},updated:function(){console.log("子=updated")},beforeDestroy:function(){console.log("子=beforeDestroy")},destroyed:function(){console.log("子=destroyed")}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lifeChild"},[e._t("default"),e._v(" "),e._t("hander"),e._v(" "),e._t("footer",null,{child:e.resData.children}),e._v(" "),n("life-child-deep",e._g(e._b({attrs:{dataSun1:"dataSun1"},on:{sunemit:e.sunEmit}},"life-child-deep",e.$attrs,!1),e.$listeners))],2)},staticRenderFns:[]};var f=n("VU/8")(v,_,!1,function(e){n("UYsc")},"data-v-24bfcdec",null).exports,b=n("5reh"),p=n("NYxO"),m={components:{keepalive:c,lifeChild:f},data:function(){return{color:"red",text:"到底能不能好好干"}},provide:function(){var e=this;return{color:function(){return e.color}}},beforeRouteEnter:function(e,t,n){console.log("组件前置守卫：beforeRouteEnter",e,t),n(function(e){console.log("组件前置守卫vm实例",e)})},beforeRouteUpdate:function(e,t,n){console.log("组件更新守卫：beforeRouteUpdate",e,t),n()},beforeRouteLeave:function(e,t,n){console.log("组件后置守卫：beforeRouteLeave",e,t),n()},beforeCreate:function(){console.log("父-beforeCreate")},created:function(){this.init(),console.log("父-created")},beforeMount:function(){console.log(this),console.log("父-beforeMount")},mounted:function(){console.log("父-mounted")},beforeUpdate:function(){console.log("父-beforeUpdate")},updated:function(){console.log("父-updated")},beforeDestroy:function(){console.log("父-beforeDestroy")},destroyed:function(){console.log("父-destroyed")},computed:a()({test_id:function(){return this.$store.state.Test.test_id}},Object(p.d)(["Test"]),Object(p.d)({test_age:function(e){return e.Test.test_age},test_class:function(e){return e.Test.test_class}}),{getter_class_name:function(){return this.$store.getters["Test/GET_TESTCLASSNAME"]}},Object(p.b)({mapGetClassName:"Test/GET_TESTCLASSNAME"})),methods:a()({},Object(p.c)({setTestName:"Test/SET_TESTNAME"}),{init:function(){this.$store.commit("Test/"+b.b,"aaa"),this.setTestName("ccc")},childEmit:function(e){console.log("_+_+_+_+_+",e+"用$listeners调用了父组件")}})},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"routerLife"},[n("div",{staticClass:"title"},[n("el-card",[e._v("\n      这个页面用于组件通讯、路由、生命周期、vuex\n    ")])],1),e._v(" "),n("div",{staticClass:"demo"},[n("el-card",[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.color="green"}}},[e._v(e._s(e.color))])],1),e._v(" "),n("el-card",[n("h4",[e._v("slot-demo:")]),e._v(" "),n("life-child",e._g(e._b({staticStyle:{background:"#eeeccc"},attrs:{dataSon1:"dataSon1",dataSon2:"dataSon2"},on:{childemit:e.childEmit},scopedSlots:e._u([{key:"hander",fn:function(){return[e._v("\n          2.测试组件具名插槽\n        ")]},proxy:!0},{key:"footer",fn:function(t){return[e._v("\n          3.测试组件具名插槽+作用域插槽："+e._s(t.child[0].name)+"\n        ")]}}])},"life-child",e.$attrs,!1),e.$listeners),[[e._v("\n          1.测试组件默认插槽\n        ")]],2),n("br"),e._v(" "),n("h4",[e._v("keepalive-demo:")]),e._v(" "),n("div",{staticClass:"testkeep"},[n("keep-alive",{attrs:{max:10,include:["keepon"]}},[n("keepalive",{staticStyle:{background:"#eecc99"}})],1)],1),e._v(" "),n("h4",[e._v("vuex-demo:")]),e._v("\n      "+e._s(e.test_id)+"-"+e._s(e.Test.test_name)),n("br"),e._v("\n      "+e._s(e.test_age)+"-"+e._s(e.Test.test_class)),n("br"),e._v("\n      "+e._s(e.getter_class_name)),n("br"),e._v("\n      "+e._s(e.mapGetClassName)),n("br")],1)],1),e._v(" "),n("div",{staticClass:"article"},[n("el-card",[n("h3",[e._v("组件通讯：")]),e._v(" "),n("h3",[e._v("$attrs/$listeners")]),e._v(" "),n("h4",[e._v("$attrs")]),e._v("\n      1.组件v-bind=“$attrs”可传给子组件非绑定值，如datason=‘datason’"),n("br"),e._v("\n      2.子组件再v-bind=“$attrs”可继续累加传给孙组件"),n("br"),e._v("\n      3.this.$attrs.xxx可取"),n("br"),e._v(" "),n("h4",[e._v("$listeners")]),e._v("\n      1.组件v-on=“$listeners”可传方法给子组件，如@xxx=xxx"),n("br"),e._v("\n      2.子组件再v-on=“$listeners”可继续累加传给孙组件"),n("br"),e._v("\n      3.this.$listeners.xxx可直接调取"),n("br"),n("br"),e._v(" "),n("h3",[e._v("provide/inject是链式查找，找到就停止")]),e._v(" "),n("h5",[e._v("第一种")]),e._v("\n      字符串方式简单传值"),n("br"),e._v("\n      provide:{sunzi:''}"),n("br"),e._v(" "),n("h5",[e._v("第二种")]),e._v("\n      函数方式可使用this"),n("br"),e._v("\n      provide(){return{color:this.color,text:this.text}}"),n("br"),e._v(" "),n("h5",[e._v("第三种")]),e._v("\n      以上绑定是不可响应的，provide改变不会通知inject"),n("br"),e._v("\n      provide(){return{color:()=>this.color}}"),n("br"),e._v(" "),n("h3",[e._v("inject接收")]),e._v("\n      inject:['sunzi']"),n("br"),e._v("\n      inject:{mycolor:{from:'color',default:'xxx'},mytext:{from:'text',default:'xxx'}}"),n("br")]),e._v(" "),n("el-card",[n("h4",[e._v("路由守卫流程：")]),e._v("\n        全局守卫：beforeEach"),n("br"),e._v("\n        router内独享守卫beforeEnter"),n("br"),e._v("\n        组件前置守卫：beforeRouteEnter"),n("br"),e._v("\n        全局解析守卫：beforeResolve"),n("br"),e._v("\n        全局后置守卫：afterEach"),n("br"),n("br"),e._v(" "),n("h4",[e._v("其余的守卫：")]),e._v("\n      组件更新守卫：beforeRouteUpdate在动态组件更新调用"),n("br"),e._v("\n      组件后置守卫：beforeRouteLeave在离开组件时调用"),n("br")]),e._v(" "),n("el-card",[n("h4",[e._v("组件嵌套的生命周期：")]),e._v("\n      父beforeCreate"),n("br"),e._v("\n      父created"),n("br"),e._v("\n      父beforeMount"),n("br"),n("br"),e._v("\n         子beforeCreate"),n("br"),e._v("\n         子created"),n("br"),e._v("\n         子beforeMount"),n("br"),n("br"),e._v("\n            孙beforeCreate"),n("br"),e._v("\n            孙created"),n("br"),e._v("\n            孙beforeMount"),n("br"),e._v("\n            孙mounted"),n("br"),n("br"),e._v("\n         子mounted"),n("br"),n("br"),e._v("\n      父keepalive"),n("br"),e._v("\n      父mounted"),n("br")]),e._v(" "),n("el-card",[n("h4",[e._v("keepalive: ")]),e._v("\n      keepalive包裹的组件可缓存"),n("br"),e._v("\n          :max     最多可以缓存多少组件实例"),n("br"),e._v("\n          :include=['name']/exclude 只有名称匹配的组件会/不会被缓存"),n("br"),e._v("\n          匿名组件不能被匹配"),n("br"),e._v(" "),n("h4",[e._v("keepalive钩子: ")]),e._v("\n        activated 在mounted之前激活\n    ")]),e._v(" "),n("el-card",[n("h4",[e._v("vuex: ")]),e._v(" "),n("h4",[e._v("state仓库：计算属性里获取")]),e._v("\n        this.$store.state.Test.test_id"),n("br"),e._v("\n        ...mapState(['Test'])"),n("br"),e._v("\n        ...mapState({test_age: state => state.Test.test_age})"),n("br"),e._v(" "),n("h4",[e._v("getters(不改变仓库的情况下对值修饰)：计算属性里获取")]),e._v(" "),n("br"),e._v("\n        this.$store.getters['Test/GET_TESTCLASSNAME']"),n("br"),e._v("\n        ...mapGetters({ mapGetClassName: 'Test/GET_TESTCLASSNAME'})"),n("br"),e._v(" "),n("h4",[e._v("mutations/actions：更新仓库数据")]),e._v("\n      1. this.$state.commit(name, data)"),n("br"),e._v("\n      2. this.$store.commit(`Test/${types.SET_TESTNAME}`, 'aaa')"),n("br"),e._v("\n      3. 在methods里"),n("br"),e._v("\n      ...mapMutations({setTestName: 'Test/SET_TESTNAME'})"),n("br"),e._v(" "),n("h4",[e._v("modules命名空间：needspace:true")]),e._v("\n      export default {"),n("br"),e._v("\n        namespaced: true,"),n("br"),e._v("\n        state,"),n("br"),e._v("\n        getters,"),n("br"),e._v("\n        mutations,"),n("br"),e._v("\n        actions"),n("br"),e._v("\n      };\n    ")])],1)])},staticRenderFns:[]};var g=n("VU/8")(m,h,!1,function(e){n("hDRQ")},"data-v-4399ef47",null).exports,T={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  这个页面用来测试vue各种指令方法\n")])},staticRenderFns:[]};var x=n("VU/8")({},T,!1,function(e){n("+9Sy")},"data-v-6cb9c137",null).exports;n.d(t,"a",function(){return E});var E=[{path:"/layout/helloVue",name:"helloVue",component:r},{path:"/layout/vueRouteLife",name:"vueRouteLife",component:g,beforeEnter:function(e,t,n){console.log("router内独享守卫beforeEnter",e,t),n()}},{path:"/layout/vueMethods",name:"vueMethods",component:x}]},C2oO:function(e,t){},UVIz:function(e,t){},UYsc:function(e,t){},Wnu7:function(e,t){},dAIx:function(e,t){},gUaJ:function(e,t){},hDRQ:function(e,t){},lVK7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},s=n("VU/8")({name:"App"},r,!1,null,null,null).exports,a=n("/ocq"),u=n("Gu7T"),i=n.n(u),c=n("7Zba"),l=[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:function(){return n.e(2).then(n.bind(null,"erHe"))}}],d=[{path:"*",component:function(){return n.e(1).then(n.bind(null,"33KA"))}}],v=[].concat(i()(l),[{path:"/layout",name:"layout",component:function(){return n.e(0).then(n.bind(null,"quRh"))},children:[].concat(i()(c.a))}],i()(d)),_=n("Y81h"),f=n.n(_),b=["/login"];o.default.use(a.a);var p,m=new a.a({routes:v});(p=m).beforeEach(function(e,t,n){"/layout/vueRouteLife"==e.path&&console.log("全局守卫beforeEach",e,t),f.a.configure({showSpinner:!1}),f.a.start();var o=localStorage.getItem("token");console.log("守卫检查token：",o),b.includes(e.path)?(console.log("发现了啥白名单",e.path),n()):o?n():n({path:"/login"})}),p.beforeResolve(function(e,t,n){"/layout/vueRouteLife"==e.path&&console.log("全局解析守卫beforeResolve",e,t),n()}),p.afterEach(function(e,t){f.a.done(),"/layout/vueRouteLife"==e.path&&console.log("全局后置守卫afterEach",e,t)});var h=m,g=n("NYxO"),T=n("bOdI"),x=n.n(T),E=n("5reh"),S=x()({},E.a,function(e){return e.test_class+"年级"}),C=x()({},E.b,function(e,t){e.test_name=t}),$=n("gUaJ"),y={namespaced:!0,state:{test_id:1,test_name:"names",test_age:18,test_class:"6"},getters:S,mutations:C,actions:n.n($).a};o.default.use(g.a);var R,M=new g.a.Store({modules:{Test:y}}),k=(n("m0iu"),n("UVIz"),n("tvR6"),n("zL8q"));(R=o.default).use(k.Pagination),R.use(k.Dialog),R.use(k.Autocomplete),R.use(k.Dropdown),R.use(k.DropdownMenu),R.use(k.DropdownItem),R.use(k.Menu),R.use(k.Submenu),R.use(k.MenuItem),R.use(k.MenuItemGroup),R.use(k.Input),R.use(k.InputNumber),R.use(k.Radio),R.use(k.RadioGroup),R.use(k.RadioButton),R.use(k.Checkbox),R.use(k.CheckboxButton),R.use(k.CheckboxGroup),R.use(k.Switch),R.use(k.Select),R.use(k.Option),R.use(k.OptionGroup),R.use(k.Button),R.use(k.ButtonGroup),R.use(k.Table),R.use(k.TableColumn),R.use(k.DatePicker),R.use(k.TimeSelect),R.use(k.TimePicker),R.use(k.Popover),R.use(k.Tooltip),R.use(k.Breadcrumb),R.use(k.BreadcrumbItem),R.use(k.Form),R.use(k.FormItem),R.use(k.Tabs),R.use(k.TabPane),R.use(k.Tag),R.use(k.Tree),R.use(k.Alert),R.use(k.Slider),R.use(k.Icon),R.use(k.Row),R.use(k.Col),R.use(k.Upload),R.use(k.Progress),R.use(k.Spinner),R.use(k.Badge),R.use(k.Card),R.use(k.Rate),R.use(k.Steps),R.use(k.Step),R.use(k.Carousel),R.use(k.CarouselItem),R.use(k.Collapse),R.use(k.CollapseItem),R.use(k.Cascader),R.use(k.ColorPicker),R.use(k.Transfer),R.use(k.Container),R.use(k.Header),R.use(k.Aside),R.use(k.Main),R.use(k.Footer),R.use(k.Timeline),R.use(k.TimelineItem),R.use(k.Link),R.use(k.Divider),R.use(k.Image),R.use(k.Calendar),R.use(k.Backtop),R.use(k.PageHeader),R.use(k.CascaderPanel),R.use(k.Scrollbar),R.use(k.Loading.directive),R.prototype.$loading=k.Loading.service,R.prototype.$msgbox=k.MessageBox,R.prototype.$alert=k.MessageBox.alert,R.prototype.$confirm=k.MessageBox.confirm,R.prototype.$prompt=k.MessageBox.prompt,R.prototype.$notify=k.Notification,R.prototype.$message=k.Message,o.default.config.productionTip=!1;var U=new o.default({el:"#app",router:h,store:M,render:function(e){return e(s)}});console.log("_+_+_+_+_+index.js打印: vue实例",U)},m0iu:function(e,t){},tvR6:function(e,t){}},["lVK7"]);
//# sourceMappingURL=app.7ce00a7b70639d10cc7d.js.map