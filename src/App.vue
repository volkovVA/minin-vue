<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-counter></app-counter>
    <app-car></app-car>
    <router-view/>
  </div>
</template>

<script>
import Car from './components/Car'
import Counter from './components/Counter'

export default {
  // name: 'App',
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
