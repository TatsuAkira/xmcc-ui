<template>
  <label class="xm-radio" :class="{'is-checked':lable===model}">
    <span class="xm-radio__input" >
      <span class="xm-radio__inner"></span>
      <input
        class="xm-radio__original"
        type="radio"
        :value='lable'
        :name='name'
        v-model="model"
      >
    </span>
    <span class="xm-radio__label">
     <slot></slot>
     <!-- 如果传过来的slots里没有没有数据 , 就把lable当做 数据内容 -->
     <template v-if="!$slots.default">{{lable}}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: 'XmRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    lable: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
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
    console.log(this.radioGroup)
  },
  methods: { // 方法

  },
  computed: { // 计算属性
    model: {
      // 拿到父组件的值
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      // 触发父组件给当前组件注册的input事件
      set (value) {
        // this.$emit('input', value)
        // 如果是被包裹的radio就触发group里的input事件
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 判断radio是否被group包裹
    isGroup () {
      return !!this.RadioGroup
    }
  },
  components: { // 组件的引用

  },
  mounted () { // 页面进入时加载内容

  }
}
</script>

<style lang='scss'>
.xm-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .xm-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .xm-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .xm-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .xm-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.xm-radio.is-checked {
  .xm-radio__input {
    .xm-radio__inner {
      border-color: #c295d8;
      background: #c295d8;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .xm-radio__label {
    color: #c295d8;
  }
}
</style>
