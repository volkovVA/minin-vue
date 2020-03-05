<template>
  <div>
    <h4>Car name: {{ $route.query.name }}</h4>
    <h4>Car year: {{ year }}</h4>
  </div>
</template>

<script>
  export default {
    computed: {
      year() {
        return this.$route.query.year
      }
    }
  }
</script>

<style scoped>
  h2 {
    color: red;
  }
</style>