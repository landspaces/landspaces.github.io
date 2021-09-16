<template>
  <div class="layout">
    <div class="menus">
      <menus></menus>
    </div>
    <div class="content">
      <div class="titleBar">
        <el-button size='small' @click="loginOut">退出</el-button>
      </div>
      <div class="contentView">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// import {vueDemos} from '@/router/layoutChilden'
import menus from '@/layout/menus'
export default {
  data () {
    return {
      // routeData: [...vueDemos]
    }
  },
  components: {
    menus
  },
  methods: {
    loginOut () {
      localStorage.setItem('token','');
      this.$router.push({path:'/login'})
    },
    routePush (val) {
      let res = val === this.$route.fullPath || val == '/'
      !res ? this.$router.push({path: val}) : ''
    }
  }

}
</script>

<style scoped>
.layout{
  width: 100vw;
  height: 100vh;
  display: flex;
}
.menus{
  width: 300px;
  height: 100vh;
  background-color: #fff;
}
.content{
  width: 100%;
  height: 100vh;
}
.content .titleBar{
  width: 100%;
  height: 50px;
  background-color: #ff99cc;
}
.content .contentView{
  width: 100%;
  height: calc(100vh - 50px);
  box-sizing: border-box;
  padding: 10px;
  background-color: #f3f5f9;
  overflow: scroll;
}
</style>