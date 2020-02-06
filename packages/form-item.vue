<template>
  <div class="xm-form-item">
    <label class="xm-form-item__label" :style="{width:this.Form.lableWidth}"  >{{lable}}</label>
    <div class="xm-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XmFormItem',
  inject: ['Form'],
  props: {
    lable: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  watch: { // 监测变化

  },
  created () { // 实例被创建之后执行代码
    // console.log('Form', this.Form)
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
.xm-form-item {
  margin-bottom: 25px;
  .xm-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .xm-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
