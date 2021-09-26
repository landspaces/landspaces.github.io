<template>
  <div>
    这个页面用来测试vue各种指令方法
    <el-button @click="fangdou">防抖</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    debounce (fn) {
      let timeout = null; // 创建一个标记用来存放定时器的返回值
      return function () {
        clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
          fn.apply(this, arguments);
        }, 500);
      };
    },  
    sayHi () {
      console.log('防抖成功');
    },
    fangdou () {
      let res = this.debounce(this.sayHi)
      res()
    }
  }

}
</script>

<style scoped>

</style>