import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import Vant from 'vant'
import 'vant/lib/index.css'
//通过解构赋值的方法用import引入checkLogin和save两种全局方法
import { checkLogin, save } from './utils/index'

Vue.use(Vant)

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$checkLogin = checkLogin //定义$checkLogin和$save这两种全局方法
Vue.prototype.$save = save

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')