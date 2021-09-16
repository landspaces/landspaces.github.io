<template>
  <div class="menus">
    <el-menu default-active="0-0" class="menubox">
      <el-submenu v-for="(item, index) in menuData" :key="index" :index="`${index}`">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item v-for="(child, index2) in item.children" @click="routerPush(child)" :key="index2" :index="`${index}-${index2}`">
          {{child.name}}
          </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {vueDemos} from '@/router/routerType/routerMenus'
export default {
  created () {
    console.log('_+_+_+_+menus.vue打印', this.menuData);
    this.routerPush(this.menuData[0].children[0])
  },
  computed: {
    menuData () {
      const menus = [
        {
          name:'vueDemos',
          icon:'el-icon-s-opportunity',
          children:[...vueDemos]
        }
      ]
      return menus
    }
  },
  methods: {
    routerPush (item) {
      let res = item.path === this.$route.fullPath || item.path == '/'
      !res ? this.$router.push({path: item.path}) : ''
    }
  }
}
</script>

<style scoped>
</style>