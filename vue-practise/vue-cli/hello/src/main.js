import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router, // 注册路由对象
  render: (h) => h(App),
}).$mount('#app')
