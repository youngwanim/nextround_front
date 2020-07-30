<template>
  <v-dialog
    v-model="dialog"
    max-width="70%"
    min-width="70%"
  >
    <v-card>
      <v-card-title class="headline">Use Google's location service?</v-card-title>

      <v-card-text>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  // import VueCoreVideoPlayer from 'vue-core-video-player'

  export default {
    name: 'HomeVideointro',
    // components: {
    //   VueCoreVideoPlayer,
    // },
    props: {
      dialog: Boolean,
    },
    data () {
      return {
        colors: [
          this.$vuetify.theme.themes.light.primary,
          '#9368e9',
          '#F4511E',
        ],
        menu: false,
        currentMovie: './assets/ad_video.mp4',
      }
    },
  }
</script>
