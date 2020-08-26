<template>
  <!-- <v-row justify="space-around">
    <v-col cols="12"> -->
    <v-col
      cols="12">
      <v-card
        class="d-flex flex-wrap pl-0 pr-0 rounded-lg"
        color="white"
        tile
      >
        <v-container fluid>
          <v-row
            :align="`center`"
            :justify="`center`"
          >
            <v-col
              v-if="ifImgColAvailable"

              cols="12"
              xs="12"
              sm="6"
              md="6"
              lg="6"
              xl="6"
              :order-sm="orderNumber"
            >
              <v-card
                class="white grey--text"
                flat
              >
                <v-carousel
                  v-if="checkIfArray"
                  cycle
                  height="100%"
                  hide-delimiter-background
                  show-arrows-on-hover
                >
                  <v-carousel-item
                    v-for="(image, i) in image_url"
                    :key="i"
                  >
                    <v-img :src="image" aspect-ratio="1" contain>
                    </v-img>
                  </v-carousel-item>
                </v-carousel>
                <v-img
                  v-else-if="checkIfImage"
                  :src="image_url" aspect-ratio="1" contain>
                </v-img>
                <slot name="image_col">
                </slot>
              </v-card>
            </v-col>
            <v-col

              cols="12"
              xs="12"
              sm="6"
              md="6"
              lg="6"
              xl="6"
              order-sm="5"
            >
              <v-card
                class="white grey--text"
                flat
              >
                <v-row
                  :align="`end`"
                  :justify="`center`"
                  class="font-weight-black grey--text pa-2 fill-height">
                  <!-- <v-col cols="12"> -->
                    <span :class="`px-4 text-h4 font-weight-black`">{{title}}</span>
                  <!-- </v-col> -->
                </v-row>
                <v-card-title v-if="sub_title && sub_title.length > 0">
                  {{sub_title}}
                </v-card-title>
                <v-card-text
                  :height="`170px`"
                  :class="`overflow-y-auto`"
                  v-if="description && description.length > 0">
                  {{description}}
                </v-card-text>
                <slot name="text_footer">
                </slot>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  <!-- </v-row> -->
</template>

<script>
  export default {
    name: 'BasePortfolioDetailCardSample',

    inheritAttrs: false,

    props: {
      image_url: [Array, String],
      title: String,
      sub_title: String,
      description: String,
      order_forward: Boolean,
    },
    computed: {
      orderNumber() {
        console.log(this.order_forward)
        if(this.order_forward) {
          return 1
        } else {
          return 10
        }
      },
      ifImgColAvailable() {
        if (this.$slots.image_col) {
          return true
        }else if ((this.image_url && this.image_url.length > 0)
          || this.checkIfArray){
            return true
        }

        return false
      },
      checkIfArray() {
        if (this.image_url) {
          return Array.isArray(this.image_url)
        }
        return false
      },
      checkIfImage() {
        if (this.image_url && this.image_url.length > 0) {
          return true
        }
        return false
      }
    },
    methods: {
    }
  }
</script>
