<template>
  <div>
    <h1>Car id {{ id }}</h1>
    <button class="btn btn-sm btn-info" @click="goBackToCars">Back</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // id: this.$router.currentRoute.params['id'] // стр. 9 и 10 идентичны
        id: this.$route.params['id']
      }
    },
    methods: {
      goBackToCars() {
        this.$router.push('/cars')
      }
    },
    watch: {
      $route(toR, fromR) {
        this.id = toR.params['id']
      }
    }
  }
</script>

<style scoped>
  
</style>