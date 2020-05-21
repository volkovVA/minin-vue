import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: 'AIzaSyDavIcDUYq9iBHzHIqHd7aYBfvG7kGo11c',
  authDomain: 'vue-crm-e0c0a.firebaseapp.com',
  databaseURL: 'https://vue-crm-e0c0a.firebaseio.com',
  projectId: 'vue-crm-e0c0a',
  storageBucket: 'vue-crm-e0c0a.appspot.com',
  messagingSenderId: '845255896423',
  appId: '1:845255896423:web:c3487b9fb365b119d013c2'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
