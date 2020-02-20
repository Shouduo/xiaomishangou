import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont.css'
import './mock.js'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
