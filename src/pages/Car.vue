<template>
  <div>
    <h1>Car id {{ id }}</h1>
    <button class="btn btn-success mb-2" @click="goBackToCars">Back</button>
    <br>
    <!-- <router-link 
      class="btn btn-info mt-2"
      tag="button"
      :to="'/car/' + id + '/full'"
    >
      Full info
    </router-link> -->
    <router-link 
      class="btn btn-info mt-2"
      tag="button"
      :to="{name: 'carFull', params: {id: id}, query: {name: 'Mazda', year: 2000}}"
    >
      Full info
    </router-link>
    <hr>
    <router-view></router-view>
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