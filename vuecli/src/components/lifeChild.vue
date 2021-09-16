<template>
  <div class="lifeChild">
    <slot></slot>
    <slot name="hander"></slot>
    <slot name="footer" :child="resData.children"></slot>
    <life-child-deep v-bind="$attrs" v-on="$listeners" @sunemit="sunEmit" dataSun1='dataSun1'></life-child-deep>
  </div>
</template>

<script>
import lifeChildDeep from '@/components/lifeChildDeep'
export default {
  props: ['id'],
  data () {
    return {
      // 给slot作用域插槽使用
      resData: {
        id: this.id,
        name: 'resData',
        children: [
          {
            id: 1,
            name: 'child'
          }
        ]
      }
    }
  },
  components: {
    lifeChildDeep
  },
  methods: {
    sunEmit (val) {
      console.log('_+_+_+_+_+',`${val}用$listeners调用了子组件`);
    }
  },
  // 生命周期
  beforeCreate () {
    console.log('子=beforeCreate');
  },
  created () {
    console.log(this.$attrs);
    this.$listeners.childemit('子组件')
    console.log('子=created');
  },
  beforeMount () {
    console.log('子=beforeMount');
  },
  mounted () {
    console.log('子=mounted');
  },
  beforeUpdate () {
    console.log('子=beforeUpdate');
  },
  updated () {
    console.log('子=updated');
  },
  beforeDestroy () {
    console.log('子=beforeDestroy');
  },
  destroyed () {
    console.log('子=destroyed');
  }
}
</script>

<style scoped>
</style>