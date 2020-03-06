<template>
  <div>
    <h2>Counter {{ counter }}</h2>
  </div>
</template>

<script>
  export default {
    computed: {
      counter() {
        return this.$store.state.counter
      }
    }
  }
</script>

<style scoped>
  
</style>