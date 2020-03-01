<template>
  <div class="car">
    <h3>Name: {{ carName }} / {{ reverseName }}</h3>
    <p>Year: {{ carYear }}</p> 
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
      carYear: {
        type: Number
      }
    },
    computed: {
      reverseName() {
        return this.carName.split('').reverse().join('')
      }
    }
  }
</script>

<style>
  .car {
    border: 2px solid green;
  }
</style>