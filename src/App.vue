<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ carName }}</h1>
    <app-car 
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNameToAudi"
      @nameChanged="carName = $event"
    >
    </app-car>
    <router-view/>
  </div>
</template>

<script>
import Car from './components/Car'

export default {
  // name: 'App',
  components: {
    appCar: Car
  },
  data() {
    return {
      carName: 'Mazda',
      carYear: 2020
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
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
