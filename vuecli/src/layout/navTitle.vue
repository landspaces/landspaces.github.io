<template>
  <div class="nav">
    <div v-for="item in navData" :key="item.id">
      <el-button type='primary' size='mini' :icon="item.icon" @click="handleClick(item.keys)">{{item.label}}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navData: [
        {
          id: 1,
          label: '退出',
          icon: 'el-icon-switch-button',
          keys: 'loginOut'
        }
      ]
    }
  },
  methods: {
    handleClick () {
      localStorage.setItem('token','');
      this.$router.push({path:'/login'})
    },
  }
}
</script>

<style>

</style>