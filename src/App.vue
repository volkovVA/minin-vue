/* eslint-disable vue/require-v-for-key */
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-car>
      <h2 slot="title">{{ carName }}</h2>
      <p slot="text">Lorem ipsum dolor sit amet</p>
    </app-car>
    <div> <!-- Блок жизненного цикла директив -->
      <h2 v-red v-if="visible">{{ title }}</h2>
      <button @click="visible=!visible">Toogle</button>
      <button @click="title='New title'">Change Title</button>
    </div>
    <div> <!-- Блок с применением аргументов и модификаторов директив-->
      <h2 v-different:background.font="'green'">{{ title }}</h2>
      <h2 v-different:color.delay.font="'blue'">{{ title }}</h2>
      <h2 v-font>Local font directive</h2>
    </div>
    <div>
      <h2>{{ title2 }}</h2>
      <h2>{{ title2 | lowercase }}</h2>
      <h2>{{ title2 | uppercase }}</h2>
    </div> <!-- Блок фильтрации списков -->
      <input type="text" v-model="searchName"> 
      <ul>
        <li v-for="name of filteredNames" :key=name.id>{{ name }}</li>
      </ul>
    <div>
      <div>
        <app-list></app-list>
      </div>
    </div>
    <div>
      <app-input></app-input>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Car from './components/Car'
import Input from './components/Input'

export default {
  components: {
    appCar: Car,
    appInput: Input
  },
  data() {
    return {
      carName: 'Jaguar',
      title: 'Hello I am Vue!!!',
      title2: 'I Am VUE Filter!!!',
      visible: true,
      names: ['Vlad', 'Max', 'Elena', 'Slava'],
      searchName: ''
    }
  },
  directives: {
    font: {
      bind(el, bindings, vNode) {
        el.style.fontSize = '60px'
      }
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase()
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
