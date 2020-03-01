<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ carName }}</h1>
    <app-counter></app-counter>
    <app-car 
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNameToAudi"
      @nameChanged="carName = $event"
      @counterUpdated="counter = $event"
    >
    </app-car>
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
