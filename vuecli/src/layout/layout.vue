<template>
  <div class="layout">
    <!-- <div class='routebox' v-for="(item, index) in routeData" :key="index">
      <el-button :disabled="item.path === $route.fullPath || item.path == '/'" class="routeBtn" type="primary" @click="routePush(item.path)">{{item.path}}</el-button>
    </div> -->
    <div class="menus">

    </div>
    <div class="content">
      <div class="titleBar">

      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import RouteData from '@/router'
export default {
  data () {
    return {
      routeData: [...RouteData.options.routes]
    }
  },
  created () {
    console.log(RouteData);
  },
  methods: {
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
  min-width: 1200px;
  display: flex;
}
.menus{
  width: 300px;
  height: 100vh;
  background-color: #ccc;
}
.content{
  width: 100%;
  height: calc(100vh-50px);
  background-color: #cccfff;
}
.titleBar{
  width: 100%;
  height: 50px;
  background-color: #fff223;
}
.routebox{
  display: flex;
}
.routeBtn{
  margin: 5px;
}
</style>