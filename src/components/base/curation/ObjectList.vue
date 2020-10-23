<template>
  <v-container fluid class="curation-object-list mt-2 pa-0">
    <v-row
      :justify="`start`"
      class="mt-0">
      <v-col cols="12" >
        <v-sheet
          class="mx-0"
          elevation="8"
          color="black"
        >
          <base-heading
            class="pt-6 pl-16"
            :title="contents.title"
            :size="`display-1`"
          />
          <v-slide-group
            v-model="model"
            class="py-4 slide-group-margin"
            active-class="success"
            show-arrows
            ref="slidegroup"
          >
            <v-slide-item
              v-for="(post, index) in objectArray"
              :key="index"
              v-slot:default="{ active, toggle }"
            >
              <v-card
                class="ma-4"
                width="150"
                height="200"
                :to="routing_dest(post.target_type, post.target_id)"
              >
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
    name: 'BaseCurationObjectList',
    inheritAttrs: false,
    props: {
      contents: {
        type: Object,
        default: () => ({
          title: '',
          sub_title: '',
          target_type: 2, //0: portfolio, 1: event 2: reserved
          target_object_array: []
        })
      }
    },
    data () {
      return {
        model: [],
        group_has_affix: true
      }
    },
    created() {

    },
    mounted() {
      this.$nextTick(function () {
        // 모든 화면이 렌더링된 후 실행합니다.
        // this.group_has_affix = this.hasAffix()
        // console.log('applied done')
      })
    },
    computed: {
      objectArray() {
        console.log('target_object_array:', this.contents.target_object_array)
        return this.contents.target_object_array
      },
    },
    methods: {
      hasAffix() {
        if (this.$refs.slidegroup) {
          const classList = this.$refs.slidegroup.$el.classList
          console.log('slide group data:', classList)
          if (classList.contains('v-slide-group--has-affixes')) {
            console.log('returns true')
            return true
          } else {
            console.log('returns false')
            return false
          }
        } else {
          console.log('No slide group data:')
          return false
        }
      },
      routing_dest(type, id) {
        console.log('routing_dst:', type, id)
        if (type === 0) {
          return '/portfolio/' + id
        } else if (type === 1) {
          return '/event/' + id
        } else {
          return ''
        }
      },
    }
  }
</script>
<style lang="sass">
  .curation-object-list
    .slide-group-margin.v-slide-group--has-affixes
      padding-left: 0px !important
    .slide-group-margin
      padding-left: 52px !important



</style>
