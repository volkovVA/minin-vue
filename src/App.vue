<template>
  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
    >
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(link, i) in links"
            :key="i.link"
            :to="link.url"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Ad application</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(link, i) in links"
          :key="i.link"
          :to="link.url"
          color="blue darken-2"
          >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
     <template v-if="error">
      <v-snackbar
        :timeout="5000"
        :multi-line="true"
        color="error"
        @input="closeError"
        :value="true"
      >
        {{error}}
        <v-btn dark @click.native="closeError">Close</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      drawer: false,
      links: [
        { title: 'Login', icon: 'lock', url: '/login' },
        { title: 'Registration', icon: 'face', url: '/registration' },
        { title: 'Orders', icon: 'bookmark_border', url: '/orders' },
        { title: 'New ad', icon: 'note_add', url: '/new' },
        { title: 'My ads', icon: 'list', url: '/list' }
      ]
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
