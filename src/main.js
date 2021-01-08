import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式
import './styles/index.less'
// 引入vant组件库和css
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
// 注册vant
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
