<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'XmRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  },
  data () {
    return {
    }
  },
  watch: { // 监测变化

  },
  created () { // 实例被创建之后执行代码

  },
  methods: { // 方法

  },
  computed: { // 计算属性

  },
  components: { // 组件的引用

  },
  mounted () { // 页面进入时加载内容

  }
}
</script>

<style lang='scss'>

</style>
