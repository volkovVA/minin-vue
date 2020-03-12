import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as fb from 'firebase'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyD-gH3J2vRpmdaszhPLSrsXLde7_uf9t6c',
      authDomain: 'itc-ads-7568c.firebaseapp.com',
      databaseURL: 'https://itc-ads-7568c.firebaseio.com',
      projectId: 'itc-ads-7568c',
      storageBucket: 'itc-ads-7568c.appspot.com',
      messagingSenderId: '465476665125',
      appId: '1:465476665125:web:356aa0dfe4a1cc140d24cc'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
