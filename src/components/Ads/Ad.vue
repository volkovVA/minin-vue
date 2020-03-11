<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
              <v-img
                src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
                height="500px"
              ></v-img>
              <v-card-text>
                <h1 class="text--primary mb-5">lorem</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, dolorem!</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="warning">Edit</v-btn>
                <v-btn class="success">Buy</v-btn>
              </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
