<template>
  <div style="background:#ffccff; margin-left:20px">
    <div>
      孙组件
      <!-- {{sunzi}} -->
      <!-- {{mytext}} -->
      {{mycolor()}}
    </div>
  </div>
</template>

<script>
export default {
  inject: {
    mytext:{
      from: 'text',
      default:'2333'
    },
    mycolor:{
      from: 'color',
      default:'green'
    }
  },
  // inject: ['sunzi'],
  // 生命周期
  beforeCreate () {
    console.log('孙=beforeCreate');
  },
  created () {
    console.log(this.$attrs);
    this.$listeners.childemit('孙组件')
    this.$listeners.sunemit('孙组件')
    console.log('孙=created');
  },
  beforeMount () {
    console.log('孙=beforeMount');
  },
  mounted () {
    console.log('孙=mounted');
  },
  beforeUpdate () {
    console.log('孙=beforeUpdate');
  },
  updated () {
    console.log('孙=updated');
  },
  beforeDestroy () {
    console.log('孙=beforeDestroy');
  },
  destroyed () {
    console.log('孙=destroyed');
  }
}
</script>

<style>

</style>