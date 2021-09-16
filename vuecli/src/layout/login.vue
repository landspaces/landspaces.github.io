<template>
  <div class="login">
    <div class="loginbox">
      <el-dialog
        title="登陆"
        :show-close="false"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :visible.sync="centerDialogVisible"
        width="50%"
        center>
        <div>
          <div class="inputCss">
            账号：<el-input class="inputwidth" v-model="user_name"/>
          </div>
          <div class="inputCss">
            密码：<el-input class="inputwidth" v-model="user_pass"/>
          </div>
          
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" v-on:keyup.enter="setToken()" @click="setToken()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user_name: '',
      user_pass: '',
      centerDialogVisible: true
    }
  },
  created () {
    this.login()
  },
  methods: {
    login () {
      // 验证token过期
      let token = localStorage.getItem('token')
      if (token) {
        this.$router.push('/layout')
      }
    },
    setToken () {
      if (this.user_name === 'abc' && this.user_pass === '123') {        
        localStorage.setItem('token', '瞎几把写的token')
        const timer = setTimeout(()=>{
          localStorage.setItem('token', '')
        },3600000)
        this.$once('$hook: beforDestroy', ()=>{
          clearTimeout(timer)
        })
        this.$router.push('/layout')
      }
    }
  }
}
</script>

<style scoped>
.inputCss{
  display: flex;
  justify-content: center;
}
</style>