import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/Carfull'

export default new VueRouter ({
  routes: [
    {
      path: '', // localhost:8080
      component: Home
    },
    {
      path: '/cars', // localhost:8080/cars
      component: Cars
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full', // localhost:8080/car/3/full
          component: CarFull,
          name: 'carFull'
        }
      ]
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return { selector: to.hash}
    }
    return {
      x: 0,
      y: 0
    }
  }
})