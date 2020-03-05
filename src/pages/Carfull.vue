<template>
  <div>
    <h4>Car name: {{ $route.query.name }}</h4>
    <h4>Car year: {{ year }}</h4>

    <div class="scroll"></div>

    <h6 id="scroll">Hello from the bottom</h6>

    <div class="scroll"></div>
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
  .scroll {
    width: 50px;
    height: 250px;
    background: #ccc;
  }
</style>