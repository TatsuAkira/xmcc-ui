<template>
    <button class="xm-button" :disabled=disabled :class="[`xm-button--${type}`,{'is-plain':plain,'is-round':round,'is-circle':circle,'is-disabled':disabled}]" @click="handleClick">
      <i v-if="icon" :class="icon"></i>
      <!-- 如果没有传入任何内容 ,就不用展示span -->
      <!-- 也就是没有传入插槽的时候 -->
    <span v-if="$slots.default"><slot></slot></span>
    </button>

</template>

<script>
export default {
  name: 'XmButton',
  // 通过props获取父组件传过来的值.
  props: {
    // 接收的值名称
    type: {
      // 接收的值类型 进行校验
      type: String,
      // 接收值里没内容就给一个默认值
      default: 'default'
    },
    plain: {
      type: Boolean,
      derault: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      // 触发父组件的点击事件
      this.$emit('click', e)
    }
  },
  created () {
    console.log(this.type)
    console.log(this.$slots)
  }

}
</script>

<style lang='scss' scoped>
.xm-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background:#fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus{
    color: #e7a4e4;
    border-color: #ebb8e7;
    background-color: #f3e7f1;
  }
}
.xm-button--primary{
  color: #fff;
  background-color: #20e9d8;
  border-color: #20e9d8;
  &:hover,
  &:focus{
    background: #86eee5;
    background-color:#86eee5 ;
    color: #fff;
  }
}
.xm-button--success{
  color: #fff;
  background-color: #50d890;
  border-color: #50d890;
  &:hover,
  &:focus{
    background: #8dfac0;
    background-color:#8dfac0 ;
    color: #fff;
  }
}
.xm-button--info{
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus{
    background: #a6a9ad;
    background-color:#a6a9ad ;
    color: #fff;
  }
}
.xm-button--warning{
  color: #fff;
  background-color: #ffd369;
  border-color: #ffd369;
  &:hover,
  &:focus{
    background: #ffe29e;
    background-color:#ffe29e ;
    color: #fff;
  }
}
.xm-button--danger{
  color: #fff;
  background-color: #f67280;
  border-color: #f67280;
  &:hover,
  &:focus{
    background: #f79ba4;
    background-color:#f79ba4 ;
    color: #fff;
  }
}
// 朴素的按钮
.xm-button.is-plain {
  &:hover,
  &:focus {
    background: #e7a4e4;
    border-color: #ebb8e7;
    color: #fff;
  }
}
.xm-button--primary.is-plain {
  color: #409eff;
  background: #94f3f7;
  border-color: #4ee4f8;
  &:hover,
  &:focus {
    background: #86eee5;
    border-color: #86eee5;
    color: #fff;
  }
}
.xm-button--success.is-plain {
  color: #50d890;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #50d890;
    border-color: #50d890;
    color: #fff;
  }
}
.xm-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.xm-button--warning.is-plain {
  color: #ffd369;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #ffd369;
    border-color: #ffd369;
    color: #fff;
  }
}
.xm-button--danger.is-plain {
  color: #f67280;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f67280;
    border-color: #f67280;
    color: #fff;
  }
}
// 圆角按钮
.xm-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}
// 圆形按钮
.xm-button.is-circle{
  border-radius: 50%;
  padding: 16px;
}

 // 找到xm-button下面,只要是xm-icon ,在后面的span中加一个margin-left5px
 .xm-button [class*=xm-icon-]+span{
   margin-left: 5px
 }
 // 禁用
.xm-button.is-disabled,
.xm-button.is-disabled:focus,
.xm-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
.xm-button.is-disabled,
.xm-button.is-disabled:focus,
.xm-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
.xm-button--primary.is-disabled,
.xm-button--primary.is-disabled:active,
.xm-button--primary.is-disabled:focus,
.xm-button--primary.is-disabled:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
}
.xm-button--success.is-disabled,
.xm-button--success.is-disabled:active,
.xm-button--success.is-disabled:focus,
.xm-button--success.is-disabled:hover {
    color: #fff;
    background-color: #84d1a8;
    border-color: #84d1a8;
}
.xm-button--info.is-disabled,
.xm-button--info.is-disabled:active,
.xm-button--info.is-disabled:focus,
.xm-button--info.is-disabled:hover {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}
.xm-button--warning.is-disabled,
.xm-button--warning.is-disabled:active,
.xm-button--warning.is-disabled:focus,
.xm-button--warning.is-disabled:hover {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
}
.xm-button--danger.is-disabled,
.xm-button--danger.is-disabled:active,
.xm-button--danger.is-disabled:focus,
.xm-button--danger.is-disabled:hover {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
}
</style>
