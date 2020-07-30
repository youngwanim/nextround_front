<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home-hero.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          width="100%"
        >
          <base-heading title="누구나 시작은 벤처였다." />

          <base-body>
            작은 기업의 큰 내일을 만들어 냅니다. 강해지고 또 강해져서 100년 가는 기업이 됩니다.
            당신의 꿈과 기술이 대한민국 미래입니다. <br />KDB NextRound가 함께 하겠습니다.
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn @click="showVideoModal = !showVideoModal">
              Discover More
            </base-btn>
            <base-video-dialog
              v-if="showVideoModal"
              :title="`Introduction`"
              :dialog="showVideoModal"
              @close="showVideoModal=false"
            />
            <!-- </base-video-dialog> -->

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
            >
              Get Started Now
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    data () {
      return {
        showVideoModal: false,
      }
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
