<template>
  <div class="hm-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XmForm',
  props: {
    model: {
      type: Object,
      required: true // 必须要传这个对象
    },
    lableWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
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

<style>

</style>
