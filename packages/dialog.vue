<template>
 <transition name='xm-dialog-fead'>
  <div class="xm-dialog__wrapper" v-show='visible' @click.self="closeDialog">
    <div class="xm-dialog" :style={width,marginTop:top}>
      <div class="xm-dialog__header">
        <slot name='tittle'>
          <span class="xm-dialog__title">{{tittle}}</span>
        </slot>
        <button class="xm-dialog__headerbtn" @click="closeDialog">
          <i class="xm-icon-close" ></i>
        </button>
      </div>
      <div class="xm-dialog__body">
        <slot></slot>
      </div>
      <div class="xm-dialog__footer" v-if='$slots.footer'>
        <slot name='footer'>
        </slot>
      </div>
    </div>
  </div>
 </transition>

</template>

<script>
export default {
  name: 'XmDialog',
  props: {
    tittle: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh' // vh代表整个高度的15%
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  created () { // 实例被创建之后执行代码

  },
  methods: { // 方法
    closeDialog () {
      console.log('点击了关闭模态框')
      this.$emit('update:visible', false)
    }
  }

}
</script>

<style lang='scss' scope>
.xm-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .xm-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .xm-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .xm-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .xm-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.xm-dialog-fead-enter-active{
  animation: fead 0.5s;
}
.xm-dialog-fead-leave-active{
  animation: fead 0.5s reverse ;
}
@keyframes fead {
  0%{
    opacity: 0;
    transform: translateY(-30px)
  }
  100%{
    opacity: 1;
    transform: translateY(0)
  }
}
</style>
