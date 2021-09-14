<template>
  <div class="routerLife">
    <div class="title">
      <el-card>
        这个页面用于组件通讯、路由、生命周期、vuex
      </el-card>
    </div>
    <div class="demo">
      <el-card>
        <h4>slot-demo:</h4>
        <life-child :id="test_id" @childemit="childEmit" style="background:#eeeccc">
          <template>
            测试组件默认插槽
          </template>
          <template #hander>
            测试组件具名插槽
          </template>
          <template v-slot:footer="mySlot" >
            测试组件具名插槽+作用域插槽：{{ mySlot.child[0].name }}
          </template> 
        </life-child><br/>

        <!--
          max     最多可以缓存多少组件实例
          include/exclude 只有名称匹配的组件会/不会被缓存
          先检查组件自身的 name 选项，否则匹配它的局部注册名称 (父组件 components 选项的键值)
          匿名组件不能被匹配
        -->
        <h4>keepalive-demo:</h4>
        <div class="testkeep">
          <keep-alive :max='10' :include="['keepon']">
            <keepalive style="background:#eecc99"></keepalive>
          </keep-alive>
        </div>

        <h4>vuex-demo:</h4>
        {{test_id}}-{{Test.test_name}}<br/>
        {{test_age}}-{{Test.test_class}}<br/>
        {{getter_class_name}}<br/>
        {{mapGetClassName}}<br/>
      </el-card>
    </div>
    <div class="article">
      <el-card>
        <h4>路由守卫流程：</h4>
          全局守卫：beforeEach<br/>
          router内独享守卫beforeEnter<br/>
          组件前置守卫：beforeRouteEnter<br/>
          全局解析守卫：beforeResolve<br/>
          全局后置守卫：afterEach<br/><br/>
        <h4>其余的守卫：</h4>
        组件更新守卫：beforeRouteUpdate在动态组件更新调用<br/>
        组件后置守卫：beforeRouteLeave在离开组件时调用<br/>
      </el-card>

      <el-card>
        <h4>组件嵌套的生命周期：</h4>
        父beforeCreate<br/>
        父created<br/>
        父beforeMount<br/><br/>
          &nbsp;子beforeCreate<br/>
          &nbsp;子created<br/>
          &nbsp;子beforeMount<br/><br/>
            &nbsp;&nbsp;孙beforeCreate<br/>
            &nbsp;&nbsp;孙created<br/>
            &nbsp;&nbsp;孙beforeMount<br/>
            &nbsp;&nbsp;孙mounted<br/><br/>
          &nbsp;子mounted<br/><br/>
        父keepalive<br/>
        父mounted<br/>
      </el-card>

      <el-card>
        <h4>keepalive: </h4>
        keepalive包裹的组件可缓存<br/>
          &nbsp;&nbsp;:max     最多可以缓存多少组件实例<br/>
          &nbsp;&nbsp;:include=['name']/exclude 只有名称匹配的组件会/不会被缓存<br/>
          &nbsp;&nbsp;匿名组件不能被匹配<br/>
        <h4>keepalive钩子: </h4>
          activated 在mounted之前激活
      </el-card>

      <el-card>
        <h4>vuex: </h4>
        <h4>state仓库：计算属性里获取</h4>
          this.$store.state.Test.test_id<br/>
          ...mapState(['Test'])<br/>
          ...mapState({test_age: state => state.Test.test_age})<br/>
        <h4>getters(不改变仓库的情况下对值修饰)：计算属性里获取</h4>
          <br/>
          this.$store.getters['Test/GET_TESTCLASSNAME']<br/>
          ...mapGetters({ mapGetClassName: 'Test/GET_TESTCLASSNAME'})<br/>
        <h4>mutations/actions：更新仓库数据</h4>
        1. this.$state.commit(name, data)<br/>
        2. this.$store.commit(`Test/${types.SET_TESTNAME}`, 'aaa')<br/>
        3. 在methods里<br/>
        ...mapMutations({setTestName: 'Test/SET_TESTNAME'})<br/>
        <h4>modules命名空间：needspace:true</h4>
        export default {<br/>
          namespaced: true,<br/>
          state,<br/>
          getters,<br/>
          mutations,<br/>
          actions<br/>
        };
      </el-card>
    </div>

  </div>
</template>

<script>
import keepalive from '@/components/keepalive'
import lifeChild from '@/components/lifeChild'
import * as types from '@/store/types'
import { mapState, mapGetters, mapMutations} from 'vuex';
export default {
  components: {
    keepalive,
    lifeChild
  },
  // 依赖注入
  provide(){
    return {
      sunzi:'给孙子的一席话'
    }
  },
  // 组件前置守卫：因为当守卫执行前，组件实例还没被创建，不能获取组件实例 `this`，但是可以拿vm实例
  // beforeMount之后
  beforeRouteEnter(to, from, next) {
    console.log('组件前置守卫：beforeRouteEnter', to, from);
    next(vm=>{
      // 但是可以
      console.log('组件前置守卫vm实例', vm);
    })
  },
  // 组件更新守卫: 在当前路由改变，但是该组件被复用时调用, 比如带有动态路由之间跳转的时候, 可以访问组件实例 `this`
  beforeRouteUpdate(to, from, next) {
    console.log('组件更新守卫：beforeRouteUpdate', to, from);
    next()
  },
  // 组件后置守卫: 导航离开该组件的对应路由时调用，可以访问组件实例 `this`
  beforeRouteLeave(to, from, next) {
    console.log('组件后置守卫：beforeRouteLeave', to, from);
    next()
  },
  // 生命周期
  beforeCreate () {
    console.log('父-beforeCreate');
  },
  created () {
    this.init()
    console.log('父-created');
  },
  beforeMount () {
    console.log(this);
    console.log('父-beforeMount');
  },
  mounted () {
    console.log('父-mounted');
  },
  beforeUpdate () {
    console.log('父-beforeUpdate');
  },
  updated () {
    console.log('父-updated');
  },
  beforeDestroy () {
    console.log('父-beforeDestroy');
  },
  destroyed () {
    console.log('父-destroyed');
  },
  computed: {
    // state使用
    test_id () {
      return this.$store.state.Test.test_id
    },
    ...mapState(['Test']),
    ...mapState({
      test_age: state => state.Test.test_age,
      test_class: state => {
        return state.Test.test_class
      }
    }),
    // getter使用 相当于state的修饰计算属性
    getter_class_name () {
      return this.$store.getters['Test/GET_TESTCLASSNAME']
    },
    ...mapGetters({
      mapGetClassName: 'Test/GET_TESTCLASSNAME'
    }),
  },
  methods: {
    ...mapMutations({
      setTestName: 'Test/SET_TESTNAME'
    }),
    init () {
      this.$store.commit(`Test/${types.SET_TESTNAME}`, 'aaa')
      this.setTestName('ccc')
    },
    childEmit (val) {
      console.log('_+_+_+_+_+childEmit', val);
    }
  }
}
</script>

<style scoped>
.article{
  padding-bottom: 20px;
}
</style>