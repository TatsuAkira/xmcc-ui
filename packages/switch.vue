<template>
  <div class="xm-switch" :class="{'is-checked':value}" @click="handleClick">
    <span class="xm-switch__core" ref='core'>
      <span class="xm-switch__button"></span>
    </span>
    <input class="hm-switch__input" :name="name" type="checkbox" ref = 'input'>
  </div>
</template>

<script>
export default {
  name: 'XmSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
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

  },
  methods: { // 方法
    async handleClick (e) {
      this.$emit('input', !this.value)
      // 当点击这个开关时, 需要改变这个开关的颜色 , 然后修改里面的颜色
      // 由于存在异步延迟 , 必须先等待父组件的值改变后才能再改变子组件里的颜色.
      await this.$nextTick()
      this.setColor()
      // 通过ref来控制input的选中
      this.$refs.input.checked = this.value
    },
    setColor () {
      // 只有传了这两个值  , 才能去操作
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () { // 页面进入时加载内容
    // 修改开关的颜色  操作ref
    this.setColor()
    // 通过ref来控制input的选中
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang='scss'>
.xm-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .xm-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .xm-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.xm-switch.is-checked {
  .xm-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .xm-switch__button {
      transform: translateX(20px);
    }
  }
}
// 控制input勾选框的隐藏
.hm-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
