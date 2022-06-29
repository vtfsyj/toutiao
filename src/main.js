import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'amfe-flexible' //导入flexible
import Vant from 'vant'
import 'vant/lib/index.css'
import './styles/index.less' //导入全局less(放在vant样式表后面做自定义替换)
import './utils/dayjs' // 加载 dayjs 初始化配置
Vue.use(Vant)

import axios from 'axios'
axios.defaults.baseURL = 'http://api-toutiao-web.itheima.net/'
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
