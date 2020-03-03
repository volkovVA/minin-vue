<template>
  <div>
    <h2>Form inputs</h2>

    <input type="text" v-model.lazy="name">
    <p>{{ name }}</p>

    <textarea v-model="textarea"></textarea>
    <p>{{ textarea }}</p>

    <label>
      <input type="checkbox" value="instagram" v-model="socials"> Instagram
    </label>
    <label>
      <input type="checkbox" value="vk" v-model="socials"> VK
    </label>
    <label>
      <input type="checkbox" value="facebok" v-model="socials"> Facebook
    </label>
    <hr>
    <ul>
      <li v-for="social in socials" :key=social.id>{{ social }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Initial state',
        textarea: 'I am initial text',
        socials: ['vk']
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