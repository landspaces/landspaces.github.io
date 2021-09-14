<template>
  <div>
    keepalive
  </div>
</template>

<script>
export default {
  name: 'keepon',
  // keep激活
  // beforeMount之后
  activated () {
    console.log('keepalive激活');
  },
  deactivated () {
    console.log('keepalive卸载');
  }
}
</script>

<style>

</style>