<template>
   <label class="xm-checkbox " :class="{'is-checked':isChecked}">
    <span class="xm-checkbox__input">
      <span class="xm-checkbox__inner"></span>
      <input type="checkbox" class="xm-checkbox__original" :name='name' v-model="model" :value="lable">
    </span>
    <span class="xm-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{lable}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'XmCheckbox',
  // 提供父组件的值
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    lable: {
      type: String,
      default: ''
    }
  },
  computed: { // 计算属性
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 根据父组件里的值 , 查看是否被group包裹
    isGroup () {
      return !!this.CheckboxGroup
    },
    isChecked () {
      // 如果是group包裹, 判断lable是否在model中 ( includes是否包含某个值)
      // 如果没有group包裹 , 直接使用model
      return this.isGroup ? this.model.includes(this.lable) : this.model
    }
  },
  components: { // 组件的引用

  },
  mounted () { // 页面进入时加载内容

  }
}
</script>

<style lang='scss'>
.xm-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .xm-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .xm-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .xm-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .xm-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 选中的样式
.xm-checkbox.is-checked {
  .xm-checkbox__input {
    .xm-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .xm-checkbox__label {
    color: #409eff;
  }
}
</style>
