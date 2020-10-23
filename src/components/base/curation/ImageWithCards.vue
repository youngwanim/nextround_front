<template>
  <v-container fluid class="mt-2 pa-0">
    <base-heading class="pt-6 pl-16" :title="contents.title"
    :size="`display-1`"/>
    <v-row
      :justify="`start`"
      :align="`center`"
      class="mt-0">
      <v-col cols="12">
        <v-img :src="contents.main_media_url">
        </v-img>
      </v-col>
      <v-col cols="12"
        xs="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
      >
        <v-card
          class="mx-auto scroll"
          color="white black--text"
          max-width="400"
          max-height="200"
        >
          <v-card-title>
            <v-icon
              color="black"
              large
              left
            >
              mdi-mail
            </v-icon>
            <span class="title font-weight-light">{{contents.sub_col_1.title}}</span>
          </v-card-title>

          <v-card-text class="font-weight-bold black--text">
            {{contents.sub_col_1.description}}
          </v-card-text>
          <v-card-actions v-if="contents.sub_col_1.link !== ''" class="font-weight-bold ">
            <v-spacer></v-spacer>
            <v-btn class="black--text" :href="contents.sub_col_1.link" target="_blank" text>보러가기</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col  cols="12"
        xs="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
      >
        <v-sheet
          class="mx-0"
          elevation="8"
          color="black"
        >
          <v-slide-group
            v-model="model"
            class="py-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item
              v-for="(post, index) in subColArray"
              :key="index"
              v-slot:default="{ active, toggle }"
            >
              <v-card
                class="ma-4"
                width="150"
                height="200"
                :to="routing_dest(post.target_type, post.target_id)">
                <div class="card-body">
                  <v-img
                    class="card-img-top"
                    :src="post.image"
                    lazy-src="/nextround_front/assets/lazyimg_portfolio.png"
                    alt="Card image cap"
                    height="150"
                    min-height="50"
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
                  <h5 class="pa-2 card-title"><strong>{{ post.title }}</strong></h5>
                </div>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'BaseCurationImageWithCards',
    inheritAttrs: false,
    props: {
      contents: {
        type: Object,
        default: () => ({
          title: '',
          sub_title: '',
          main_media_type: 1,
          main_media_url: '',
          target_type: 1,
          target_id: 0,
          sub_col_1: {
            title: '',
            description: '',
            link: ''
          },
          sub_col_2: {
            target_type: 0, //0: portfolio, 1: event 2: reserved
            target_object_array: [], // portfolio_id or event_id
          },
        })
      }
    },
    data () {
      return {
        model: null
      }
    },
    created() {
      console.log('contents in image blah:', this.contents)
    },
    computed: {
      subColArray() {
        console.log('target_object_array:', this.contents.target_object_array)
        return this.contents.sub_col_2.target_object_array
      }
    },
    methods: {
      routing_dest(type, id) {
        console.log('routing_dst:', type, id)
        if (type === 0) {
          return '/portfolio/' + id
        } else if (type === 1) {
          return '/event/' + id
        } else {
          return ''
        }
      }
    }
  }
</script>
<style lang="sass">
</style>
