<template>
  <div>
    routeLife
    <life-child></life-child>
    <div class="testkeep">
        <!--
          max     最多可以缓存多少组件实例
          include/exclude 只有名称匹配的组件会/不会被缓存
          先检查组件自身的 name 选项，否则匹配它的局部注册名称 (父组件 components 选项的键值)
          匿名组件不能被匹配
        -->
      <keep-alive :max='10' :include="['keepon']">
        <keepaliveon></keepaliveon>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import keepaliveon from '@/components/keepaliveOn'
import lifeChild from '@/components/lifeChild'
export default {
  components: {
    keepaliveon,
    lifeChild
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
    console.log(this);
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
  }

}
</script>

<style>
.testkeep{
  background-color: #ccc;
}
</style>