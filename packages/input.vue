<template>
  <div class="xm-input" :class="{'xm-input--suffix':showSuffix}" :style='{width}'>
    <input @input="handleInput"
      :clearable='clearable'
      :password='password'
      :placeholder='placeholder'
      :type="password?(passwordVisible?'text':'password'):'type'"
      :name='name'
      :value="value"
      :disabled='disabled'
      :width="width"
     class="xm-input__inner" :class="{'is-disabled':disabled}">
     <span class="xm-input__suffix" v-if="showSuffix">
      <i class="xm-input__icon xm-icon-circle-close" v-if="clearable && value" @click="clear"></i>
      <i class="xm-input__icon xm-icon-view" v-if="password" @click="handlePassword"></i>
</span>
  </div>
</template>

<script>
export default {
  name: 'XmInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    password: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '250px'
    }
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  computed: { // 监测变化
    showSuffix () {
      return this.clearable || this.password
    }
  },
  created () { // 实例被创建之后执行代码

  },
  methods: { // 方法
    handleInput (e) {
      console.log('inut的值', e.target.value)
      // 步骤
      // 1. 给组件注册@input事件
      // 2. 通过子传父$emit来触发input事件---- v-model语法糖,同事用到
      // :value='username' @input = 'username = $event.target.value'
      this.$emit('input', e.target.value)
    },
    // 清空
    clear () {
      this.$emit('input', '')
    },
    // 点击显示/隐藏密码
    handlePassword () {
      // 1.注册事件
      // 2.点击密码显示隐藏图标 , 修改type;类型
      // 3.先给一个data值 , 点击取反
      // 4.首先通过type来判断是否是密码类型 , 不是的话就默认text,是的话就通过passwordVisible来判断 , 如果是就为password,如果不是就为text
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang='scss'>
.xm-input {
  width: 240px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .xm-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #df63f8;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.xm-input--suffix {
  .xm-input__inner {
    padding-right: 30px;
  }
  .xm-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
  }
}

</style>
