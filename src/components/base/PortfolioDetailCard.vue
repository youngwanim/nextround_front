<template>
  <!-- <v-row justify="space-around">
    <v-col cols="12"> -->
    <v-col
      cols="12"
      lg="6"
      xl="6">
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
              class="item"
              cols="12"
              sm="12"
              xs="6"
              md="6"
              lg="6"
              xl="6"
              :order-sm="orderNumber"
            >
              <v-card
                class="white grey--text"
                flat
              >
                <v-img :src="image_url" aspect-ratio="1">
                </v-img>
              </v-card>
            </v-col>
            <v-col
              class="item"
              cols="12"
              sm="12"
              xs="6"
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
                  class="font-weight-black text-h2 grey--text pa-2 fill-height">
                  <!-- <v-col cols="12"> -->
                    <span :class="`heading`">{{title}}</span>
                  <!-- </v-col> -->
                </v-row>
                <v-card-title>
                  {{sub_title}}
                </v-card-title>
                <v-card-text>
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
    name: 'BasePortfolioDetailCard',

    inheritAttrs: false,

    props: {
      image_url: String,
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
      }
    },
    methods: {
    }
  }
</script>
