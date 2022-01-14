<template>
  <v-container>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center v-if="!loading && myAds.length !== 0">
        <v-flex
          xs12
          sm6
          md3
          v-for="ad of myAds"
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
                :to="'/ad/' + ad.id"
              >
                Open
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout v-else-if="!loading && myAds.length === 0">
        <v-flex xs-12 class="text-center">
          <h1 class="text-primary">You have no ads</h1>
        </v-flex>
      </v-layout>
      <v-layout v-else>
        <v-flex xs-12 class="text-center">
          <v-progress-circular
            :size="100"
            :width="4"
            color="purple"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
