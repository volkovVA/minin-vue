<template>
  <div class="car">
    <h3>Name: {{ carName }} / {{ reverseName }}</h3>
    <p>Year: {{ carYear }}</p>
    <button @click="changeName">Change name</button> 
    <button @click="changeFunc()">Change car from Parent</button> 
    <button @click="updateCounter">Update Counter</button>
  </div>
</template>

<script>
  export default {
    // props: ['carName', 'carYear'],
    // props: {
    //   carName: String,
    //   carYear: Number
    // },
    props: {
      carName: {
        type: String, 
        required: true
      },
      carYear: Number,
      changeFunc: Function,
      counter: Number
    },
    computed: {
      reverseName() {
        return this.carName.split('').reverse().join('')
      }
    },
    methods: {
      changeName() {
        this.carName = "Mercedes"
        this.$emit('nameChanged', this.carName)
      },
      updateCounter() {
        this.$emit('counterUpdated', this.counter + 1)
      }
    }
  }
</script>

<style>
  .car {
    border: 2px solid green;
  }
</style>