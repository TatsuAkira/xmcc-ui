// 导入入口文件  , 相当于在main.js中引入这个文件 , 通过vue.use(xxx)会自动寻找这个文件  说白了就是导入文件
// 统一导出
// 导入颜色选择器组件
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import './fonts/font.scss'

// 存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem
]
// 注册组件
const install = function (Vue) {
  // 遍历列表 , 通过组件name注册组件
  console.log('123')

  components.forEach(items => {
    Vue.component(items.name, items)
  })
}
// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
