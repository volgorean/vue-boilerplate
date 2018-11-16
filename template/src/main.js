import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// handy global aliases
Vue.prototype.$s = store
Vue.prototype.$d = store.state

window.$vivi = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
