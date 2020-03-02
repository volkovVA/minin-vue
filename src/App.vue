<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-car>
      <h2 slot="title">{{ carName }}</h2>
      <p slot="text">Lorem ipsum dolor sit amet</p>
    </app-car>
    <div>
      <h2 v-red v-if="visible">{{ title }}</h2>
      <button @click="visible=!visible">Toogle</button>
      <button @click="title='New title'">Change Title</button>
    </div>
    <div>
      <h2 v-different:background.font="'green'">{{ title }}</h2>
      <h2 v-different:color.delay.font="'blue'">{{ title }}</h2>
      <h2 v-font>Local font directive</h2>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Car from './components/Car'

export default {
  data() {
    return {
      carName: 'Jaguar',
      title: 'Hello I am Vue!!!',
      visible: true
    }
  },
  directives: {
    font: {
      bind(el, bindings, vNode) {
        el.style.fontSize = '60px'
      }
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
