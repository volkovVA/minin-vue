<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-btn @click="message">
        NEW MESSAGE
      </v-btn>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  sockets: {
    connect () {
      // eslint-disable-next-line no-console
      console.log('socket connected')
    }
  },
  methods: {
    message () {
      this.$socket.emit('createMessage', {
        text: 'FROM CLIENT'
      })
    }
  }
}
</script>
