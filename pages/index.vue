<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
    >
      <v-card min-width="600">
        <v-snackbar
          v-model="snackbar"
          :timeout="10000"
          bottom
        >
          {{ message }}
          <v-btn
            color="pink"
            text
            @click="snackbar = false"
          >
            Закрыть
          </v-btn>
        </v-snackbar>
        <v-card-title><h1>Nuxt чат</h1></v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :counter="16"
              :rules="nameRules"
              label="Ваше имя"
              required
            />
            <v-text-field
              v-model="room"
              :rules="roomRules"
              label="Введите комнату"
              required
            />
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="submit"
            >
              Войти
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'empty',
  data: () => ({
    snackbar: false,
    message: '',
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Введите имя',
      v => (v && v.length <= 16) || 'Имя не должно превышать 16 символов'
    ],
    room: '',
    roomRules: [
      v => !!v || 'Введите комнату'
    ]
  }),
  mounted () {
    const { message } = this.$route.query
    if (message === 'noUser' || {}) {
      this.message = 'Введите данные'
    } else if (message === 'leftChat') {
      this.message = 'Вы вышли из чата'
    }

    this.snackbar = !!this.message
  },
  head: {
    title: 'Добро пожаловать в Nuxt чат'
  },
  sockets: {
    connect () {
      // eslint-disable-next-line no-console
      console.log('socket connected')
    }
  },
  // eslint-disable-next-line vue/order-in-components
  methods: {
    ...mapMutations(['setUser']),
    submit () {
      if (this.$refs.form.validate()) {
        // eslint-disable-next-line no-unused-vars
        const user = {
          name: this.name,
          room: this.room
        }

        this.$socket.emit('userJoined', user, (data) => {
          if (typeof data === 'string') {
            // eslint-disable-next-line no-console
            console.error(data)
          } else {
            user.id = data.userId
            this.setUser(user)
            this.$router.push('/chat')
          }
        })
      }
    }
  }
}
</script>
