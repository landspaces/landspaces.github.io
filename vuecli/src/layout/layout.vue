<template>
  <div class="layout">
    <div class="menus">
      <menus></menus>
    </div>
    <div class="content">
      <div class="titleBar">
        <el-button type='primary' size='mini' icon="el-icon-s-home" @click="goHome">首页</el-button>
        <navtitle></navtitle>
      </div>
      <div class="contentView">
        <el-scrollbar style="height:100%">
          <router-view/>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import menus from '@/layout/menus'
import navtitle from '@/layout/navTitle'
export default {
  components: {
    menus,
    navtitle
  },
  methods: {
    goHome () {
      window.open('https://aliyun.blue')
      // window.open('https://aliyun.blue','_self')
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
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #99ccf4;
}
.content .contentView{
  width: 100%;
  height: calc(100vh - 50px);
  box-sizing: border-box;
  padding: 0 10px;
  background-color: #f3f5f9;
}
.layout >>> .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>