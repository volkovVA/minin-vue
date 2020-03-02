// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ColorDirectiveRed from './colorRed'
import ColorDirectiveBlue from './colorDif'

Vue.directive('red', ColorDirectiveRed)
Vue.directive('different', ColorDirectiveBlue)

export const eventEmitter = new Vue()

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

