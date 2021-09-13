<template>
  <div>
    lifeChild
    <life-child-deep></life-child-deep>
  </div>
</template>

<script>
import lifeChildDeep from '@/components/lifeChildDeep'
export default {
  components: {
    lifeChildDeep
  },
  // 生命周期
  beforeCreate () {
    console.log('子=beforeCreate');
  },
  created () {
    console.log('子=created');
  },
  beforeMount () {
    console.log('子=beforeMount');
  },
  mounted () {
    console.log('子=mounted');
  },
  beforeUpdate () {
    console.log('子=beforeUpdate');
  },
  updated () {
    console.log('子=updated');
  },
  beforeDestroy () {
    console.log('子=beforeDestroy');
  },
  destroyed () {
    console.log('子=destroyed');
  }
}
</script>

<style>

</style>