<template>
  <div>
    <h2>Form inputs</h2>

    <input type="text" v-model.lazy="name">
    <p>{{ name }}</p>

    <textarea v-model="textarea"></textarea>
    <p>{{ textarea }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Initial state',
        textarea: 'I am initial text'
      }
    }
  }
</script>

<style scoped>
  textarea {
    height: 100px;
    width: 400px;
  }

  p {
    white-space: pre;
  }
</style>