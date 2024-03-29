// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/common.scss'
import '@/assets/js/common.js'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import database from './assets/js/dataHandler.js'
Vue.use(ElementUi)
Vue.prototype.$database = database

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
