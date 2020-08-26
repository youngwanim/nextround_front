<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialogStatus"
      max-width="90%"
      @click:outside="$emit('close')"
    >
      <v-card>
        <v-card-title class="headline">
          {{ getTitle }}
        </v-card-title>
        <v-card-text>
          <video-player
            ref="videoPlayer"
            class="video-player-box"
            :options="playerOptions"
            :playsinline="true"
            customEventName="customstatechangedeventname"

            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
            @ended="onPlayerEnded($event)"
            @waiting="onPlayerWaiting($event)"
            @playing="onPlayerPlaying($event)"
            @loadeddata="onPlayerLoadeddata($event)"
            @timeupdate="onPlayerTimeupdate($event)"
            @canplay="onPlayerCanplay($event)"
            @canplaythrough="onPlayerCanplaythrough($event)"

            @statechanged="playerStateChanged($event)"
            @ready="playerReadied"
          />
          <!-- </video-player> -->
          <!-- <vue-core-video-player
            :src="require('@/assets/ad_video.mp4')"
          /> -->
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="green darken-1"
            text
            @click="$emit('close')"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name: 'BaseVideoDialog',

    inheritAttrs: false,

    props: {
      title: String,
      dialog: Boolean,
    },
    data () {
      return {
        playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          fill: true,
          responsive: true,
          fluid: true,
          autoplay: true,
          crossorigin: true,
          // height: '500px',
          sources: [{
            //type: 'video/mp4',
            type: 'application/x-mpegURL',
            //src: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
            src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
            //src: 'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8'
            //src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
            //src: './assets/ad_video.mp4',
          }],
          poster: './static/images/author.jpg',
        },
      }
    },
    computed: {
      dialogStatus () {
        return this.dialog
      },
      getTitle () {
        return this.title
      },
      player () {
        return this.$refs.videoPlayer.player
      },
    },
    mounted () {
      console.log('this is current player instance object', this.player)
    },
    methods: {
      // listen event
      onPlayerPlay (player) {
        // console.log('player play!', player)
      },
      onPlayerPause (player) {
        // console.log('player pause!', player)
      },
      // ...player event
      onPlayerEnded (player) {

      },
      onPlayerWaiting (player) {

      },
      onPlayerPlaying (player) {

      },
      onPlayerLoadeddata (player) {

      },
      onPlayerTimeupdate (player) {

      },
      onPlayerCanplay (player) {

      },
      onPlayerCanplaythrough (player) {

      },
      // or listen state event
      playerStateChanged (playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied (player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      },
    },
  }
</script>

<style>

</style>
