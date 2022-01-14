<template>
  <v-flex xs12>
    <v-text-field
      v-model="text"
      label="Введите сообщение"
      outlined
      @keydown.enter="send"
    />
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    text: ''
  }),
  methods: {
    send () {
      this.$socket.emit('createMessage', {
        text: this.text,
        id: this.$store.state.user.id
      }, (data) => {
        if (typeof data === 'string') {
          // eslint-disable-next-line no-console
          console.error(data)
        } else {
          this.text = ''
        }
      })
    }
  }
}
</script>

<style>

</style>
