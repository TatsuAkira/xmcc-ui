import Vue from 'vue'
import App from './App.vue'
import XmUI from '../packages'

Vue.config.productionTip = false
Vue.use(XmUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
