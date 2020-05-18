<template>
  <h1>CHAT PAGE {{ user.name }}</h1>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: ['chat'],
  head () {
    return {
      title: `Комната ${this.user.room}`
    }
  },
  // eslint-disable-next-line vue/order-in-components
  computed: mapState(['user'])
}
</script>
