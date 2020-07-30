<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    bottom
    left
    max-width="70%"
    min-width="70%"
    offset-x
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-card
        id="settings"
        class="py-2 px-4"
        color="#0000004D"
        dark
        flat
        style="position: fixed; top: 164px; right: -35px;"
        width="100"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon large>
          mdi-cog
        </v-icon>
      </v-card>
    </template>

    <v-card class="py-2">
      <base-title
        align="center"
        title="Theme Colors"
        space="0"
      />
      <div>
        <vue-core-video-player
          :src="require('@/assets/ad_video.mp4')"
        />
      </div>
    </v-card>
  </v-menu>
</template>

<script>
  // import VueCoreVideoPlayer from 'vue-core-video-player'

  export default {
    name: 'HomeVideointro',
    // components: {
    //   VueCoreVideoPlayer,
    // },
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
