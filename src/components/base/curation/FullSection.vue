<template>
  <div>
  <v-img
    v-if="contents.media_type === 0"
    :src="contents.media_url"
    class="white--text bg-img-gradient"
  >
    <v-container class="fill-height px-4 py-12">
      <v-row
        :justify="`start`">
        <v-col cols="6" >
          <base-heading
            class="ml-1"
            :tag="'h6'"
            :weight="'medium'"
            :size="'subtitle-1'"
            :title="contents.content_title" />
          <base-heading :title="contents.title" />
          <base-body class="white--text">
            {{build_description}}
          </base-body>
          <v-btn
            color="primary"
            dark
            rounded
          >
            상세 보기
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-img>

  <video-background
    v-if="contents.media_type === 1"
    :src="contents.media_url"
    :poster="contents.media_url"
    style="height: 90vh;"
    overlay="linear-gradient(to left, rgba(255, 255, 255, 0), rgba(0,0,0, 0.4) 50%, rgba(0, 0, 0, .8) 100%),
            linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0, 0.5) 10%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.1))"
  >
  <v-container class="fill-height px-4 py-12">
    <v-row
      :justify="`start`">
      <v-col cols="6" >
        <base-heading
          class="ml-1"
          :tag="'h6'"
          :weight="'medium'"
          :size="'subtitle-1'"
          :title="contents.content_title" />
        <base-heading :title="contents.title" />
        <base-body style="white-space: pre-line"  class="white--text">
          {{build_description}}
        </base-body>
        <v-btn
          color="primary"
          dark
          rounded
        >
          상세 보기
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  </video-background>
</div>
</template>
<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'BaseCurationFullSection',
    inheritAttrs: false,
    props: {
      contents: {
        type: Object,
        default: () => ({
          media_type: 0, // 0: image 1: video
          media_url: '',
          media_url_extra: '',
          title: '',
          description: [],
          target_type: 2, //0: portfolio, 1: event 2: reserved
          target_id: 0, // portfolio_id or event_id
        })
      }
    },
    created() {
      console.log('contents in full section:', this.contents)
    },
    computed: {
      build_description() {
        return this.contents.description.join('\n')
      }
    },
    methods: {
      // ...mapActions('user', [
      //     'validation',
      // ]),

    }
  }
</script>

<style lang="sass">
  .bg-img-gradient
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, .8))
    background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0, 0.5) 50%, rgba(0, 0, 0, .8) 100%)

  .scroll
    overflow-y: scroll
</style>
