<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-car>
      <h2 slot="title">{{ carName }}</h2>
      <p slot="text">Lorem ipsum dolor sit amet</p>
    </app-car>
    <router-view/>
  </div>
</template>

<script>
import Car from './components/Car'

export default {
  data() {
    return {
      carName: 'Jaguar'
    }
  },
  components: {
    appCar: Car
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
