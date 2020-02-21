import Vue from 'vue'
import App from './App.vue'
import VueJsonp from 'vue-jsonp'
import './assets/iconfont/iconfont.css'
import './mock.js'

Vue.config.productionTip = false
Vue.use(VueJsonp)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
