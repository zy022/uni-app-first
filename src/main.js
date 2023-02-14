import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import utils from './utils/utils.js'

Vue.prototype.$store = store
Vue.prototype.$ut = utils

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
