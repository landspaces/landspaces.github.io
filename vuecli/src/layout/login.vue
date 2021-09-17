<template>
  <div class="login">
    <div class="loginbox">
      <el-dialog
        title="登陆"
        :show-close="false"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :visible.sync="centerDialogVisible"
        width="30%"
        style="margin-top:10vh"
        center>
        <div>
          <div class="inputCss">
            <div class="texttip">账号：</div><el-input @keyup.enter.native="enter" class="inputwidth" v-model="user_name"/>
          </div>
          <div class="inputCss">
            <div class="texttip">密码：</div><el-input @keyup.enter.native="enter" class="inputwidth" v-model="user_pass"/>
          </div>
          
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button size='mini' type="primary" @click="setToken">登陆</el-button>
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
      if (this.user_name === 'sure' && this.user_pass === '111') {        
        localStorage.setItem('token', '瞎几把写的token')
        const timer = setTimeout(()=>{
          localStorage.setItem('token', '')
        },3600000)
        this.$once('$hook: beforDestroy', ()=>{
          clearTimeout(timer)
        })
        this.$router.push('/layout')
      }
    },
    enter () {
      this.setToken ()
    }
  }
}
</script>

<style scoped>
.inputCss{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}
.inputCss .inputwidth{
  width: 300px;
  box-sizing: border-box;
}
.texttip{
  width: 50px;
}
</style>