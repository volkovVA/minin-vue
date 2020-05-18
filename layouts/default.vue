<template>
  <v-app app dark>
    <v-navigation-drawer v-model="drawer" app>
      <v-list subheader>
        <v-subheader>Список людей в комнате</v-subheader>
        <v-list-item
          v-for="u in users"
          :key="u.id"
          @click.prevent
        >
          <v-list-item-content>
            <v-list-item-title>{{ u.name }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon :color="u.id === 2 ? 'primary' : 'grey'">
              mdi-message
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-btn icon @click="exit">
        <v-icon>
          mdi-arrow-left-bold
        </v-icon>
      </v-btn>
      <v-toolbar-title>Чат комнаты {{ user.room }}</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <div style="height:100%">
        <nuxt />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    drawer: true,
    users: [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' }
    ]
  }),
  computed: mapState(['user']),
  methods: {
    ...mapMutations(['clearData']),
    exit () {
      this.$router.push('/?message=leftChat')
      this.clearData()
    }
  }
}
</script>
