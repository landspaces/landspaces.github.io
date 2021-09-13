<template>
  <div style="margin-left:20px">lifeChildDeep</div>
</template>

<script>
export default {
  // 生命周期
  beforeCreate () {
    console.log('孙=beforeCreate');
  },
  created () {
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