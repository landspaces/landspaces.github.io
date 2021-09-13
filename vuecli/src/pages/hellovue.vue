<template>
  <div class="pages">
    <div class='routebox' v-for="(item, index) in routeData" :key="index">
      <el-button :disabled="item.path === $route.fullPath || item.path == '/'" class="routeBtn" type="primary" @click="routePush(item.path)">{{item.path}}</el-button>
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
  methods: {
    routePush (val) {
      let res = val === this.$route.fullPath || val == '/'
      !res ? this.$router.push({path: val}) : ''
    }
  }

}
</script>

<style>
.routebox{
  display: flex;
}
.routeBtn{
  margin: 5px;
}
</style>