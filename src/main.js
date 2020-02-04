//官方預設載入
import Vue from 'vue'
import App from './App.vue'
//router跟vuex
import router from './router'
import store from './store'



Vue.config.productionTip = false

//手牽手
new Vue({
  router,
  store,
  render: h => h(App) //渲染他的App function(handler)
}).$mount('#app') //好了之後mount到#app
//把什麼東西render出來呢 App.vue
