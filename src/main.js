import Vue from 'vue'
import App from './App.vue'
import Screenshot from './components/ScreenGrab.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // render: h => h(Screenshot),
}).$mount('#app')
// }).$mount('#screenshot')
