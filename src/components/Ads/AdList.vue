<template>
  <v-container>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center>
        <v-flex
          xs12
          sm6
          md3
          v-for="ad of ads"
          :key="ad.id"
        >
          <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="ad.imageSrc"
            >
            </v-img>
              <v-card-title>{{ ad.title }}</v-card-title>
            <v-card-text class="text--primary">
              <div>{{ ad.description }}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                text
                class="primary"
              >
                Open
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {
          title: 'First ad',
          description: 'Hello i am description',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          id: '123'
        }
      ]
    }
  }
}
</script>
