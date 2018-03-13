import Vue from 'vue'
import axios from 'axios'

import App from './App'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/es'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

/* eslint-disable no-new */
const eventHub = new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

Vue.mixin({
  data: function () {
    return {
      eventHub: eventHub
    }
  }
})
