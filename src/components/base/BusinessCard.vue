<template>
  <div>
    <v-card
      class="ma-auto"
      max-width="width"
      :to="target">
      <div class="card-body">
        <v-img
          class="card-img-top"
          :src="image_url"
          lazy-src="/nextround_front/assets/lazyimg_portfolio.png"
          alt="Card image cap"
          min-height="50"
          @load="handleLoadEvent"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <h5 class="card-title"><strong>{{ title }}</strong></h5>
        <p class="card-text">{{ content }}</p>
      </div>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'BaseCard',

    inheritAttrs: false,

    props: {
      width: [Number, String],
      image_url: String,
      content: String,
      title: String,
      target: String,
    },
    computed: {

    },
    methods: {
      handleLoadEvent() {
        console.log('image loaded:', this.image_url)
        this.$emit('loaded')
      },
      smartTrim(string, maxLength) {
        var trimmedString = string.substr(0, maxLength);
        return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
      }
    }
  }
</script>
