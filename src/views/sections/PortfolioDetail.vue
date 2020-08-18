<template>
  <section id="portfolio-detail">
      <v-container
        class="px-4 py-12 black"
        fluid
      >
        <v-responsive
          class="d-flex align-center"
          height="100%"
          width="100%"
        >
          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
          <v-row justify="space-around">
            <!-- <v-row justify="space-around">
              <v-col>
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
                      >
                        <v-card
                          class="white grey--text"
                          flat
                        >
                          <v-img :src="info.team_image">
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
                      >
                        <v-card
                          class="white grey--text"
                          flat
                        >
                          <v-row
                            :align="`end`"
                            :justify="`center`"
                            class="font-weight-black text-h2 grey--text pa-2 fill-height">
                              <span :class="`heading`">{{info.title}}</span>
                          </v-row>
                          <v-card-title>
                            {{info.sub_title}}
                          </v-card-title>
                          <v-card-text>
                            {{info.description}}

                          </v-card-text>
                          <div class="text-center">
                            <v-chip
                              v-for="tag in info.tags"
                              :key="tag.key"
                              class="mt-4 ml-4"
                              disabled
                              color="primary white--text"
                            >
                              {{ tag.text }}
                            </v-chip>
                          </div>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row> -->
            <base-portfolio-detail-card
              :image_url="info.image_list"
              :title="info.title"
              :sub_title="info.sub_title"
              :description="info.description"
              :order_forward="true"
            >
              <template #text_footer>
                <div class="text-center">
                  <v-chip
                    v-for="tag in info.tags"
                    :key="tag.key"
                    class="mt-4 ml-4"
                    disabled
                    color="primary white--text"
                  >
                    {{ tag.text }}
                  </v-chip>
                </div>
              </template>
            </base-portfolio-detail-card>
            <base-portfolio-detail-card
              :image_url="info.image_list"
              :title="`오우 이런`"
              :sub_title="`서브 타이틀 테스트`"
              :description="`일단 이정도로만 넣어두겠다 담에 만나면 그리 안돼`"
              :order_forward="false"
            />
            <base-portfolio-detail-card
              :image_url="info.product_image"
              :title="info.product_title"
              :sub_title="``"
              :description="info.product_introduce"
              :order_forward="true"
            />
            <base-portfolio-detail-card
              :image_url="info.ceo_image"
              :title="`CEO`"
              :sub_title="info.ceo"
              :description="info.ceo_introduce"
              :order_forward="false"
            />
            <base-portfolio-detail-card
              :image_url="info.team_image"
              :title="`팀 소개`"
              :sub_title="info.team_title"
              :description="info.team_introduce"
              :order_forward="true"
            />
            <base-portfolio-detail-card
              :title="`IR 다운로드`"
              :description="`보다 상세한 자료를 원하신다면, IR자료를 다운받아보세요!`"
              :order_forward="true"
            >
              <template #image_col>
                <div class="text-center">
                  <v-btn class="ma-2" tile outlined color="success">
                    <v-icon left>mdi-file-download-outline</v-icon>IR자료 다운로드
                  </v-btn>
                </div>
              </template>
            </base-portfolio-detail-card>
        </v-row>
          </div>
        </v-responsive>
      </v-container>
    <!-- </v-img> -->
  </section>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'SectionPortfolioDetail',
    props: {
      id: {
        type: String,
        default: ''
      }
    },
    provide: {
      theme: { isDark: false },
    },

    data () {
      return {
        info: {},
        showVideoModal: false,
        tags: [],
        tags_selected: [],
        mandatory: false,
        multiple: true,
        selected: null,
        types: [
          'cards',
          'images',
        ],
        descriptionLimit: 60, // for autocomplete
        entries: [],
        type: 'cards',
        chip_selection: [0],
        isLoading: false,
        model: null,
        search: null,
      }
    },
    created() {
      console.log('prop ID input: ', this.$route.params.id)
      if (Object.keys(this.info).length === 0) {
        let payload = {
          param: {id:this.id},
          cb_res: (result) => {
            //this.info = this.get_portfolio_detail_on_interest
            this.info = result.data
            console.log('pf detail info: ', this.info)
          },
          cb_error: (error) => {}
        }
        this.$store.dispatch('portfolio/get_portfolio_detail', payload)
      }
    },
    mounted() {
      this.$nextTick(() => {

      })
    },
    computed: {
      ...mapGetters('portfolio', [
        'get_portfolio_detail_on_interest'
      ]),
    },
    watch: {
      // search (val) {
      // },
    },
    methods: {
      ...mapActions('portfolio', [
          'get_portfolio_detail'
      ])
    }
  }
</script>
<style>
.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
}
</style>
