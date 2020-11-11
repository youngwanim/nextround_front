<template>
  <section id="portfolio-detail">
      <v-container
        class="px-4 py-16 black"
        fluid
      >
        <v-responsive
          class="d-flex align-center"
          height="100%"
          width="100%"
        >
          <div
            :class="'align-center'"
            class="d-flex flex-wrap"
          >
          <v-row
            v-masonry="`containerID`"
            justify="space-around"
            item-selector=".item"
          >
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
              @loaded="$redrawVueMasonry('containerID')"
            >
              <template #text_footer>
                <div class="text-center">
                  <v-chip
                    v-for="tag in tags"
                    :key="tag.id"
                    class="mt-4 ml-4"
                    disabled
                    color="primary white--text"
                  >
                    {{ tag.term }}
                  </v-chip>
                </div>
              </template>
            </base-portfolio-detail-card>
            <base-portfolio-detail-card
              v-if="get_user_type <= info.product_auth_type"
              :image_url="info.product_image_list"
              :title="info.product_title"
              :sub_title="info.product_sub_title"
              :description="info.product_introduce"
              :order_forward="false"
              @loaded="$redrawVueMasonry('containerID')"
            />
            <base-portfolio-detail-card
              v-if="get_user_type <= info.ceo_auth_type"
              :image_url="info.ceo_image_list"
              :title="info.ceo"
              :sub_title="info.ceo_sub_title"
              :description="info.ceo_introduce"
              :order_forward="true"
              @loaded="$redrawVueMasonry('containerID')"
            />
            <base-portfolio-detail-card
              v-if="get_user_type <= info.team_auth_type"
              :image_url="info.team_image_list"
              :title="info.team_title"
              :sub_title="info.team_title"
              :description="info.team_introduce"
              :order_forward="false"
              @loaded="$redrawVueMasonry('containerID')"
            />
            <base-portfolio-detail-card
              v-if="get_user_type <= info.ir_auth_type"
              :title="`IR 다운로드`"
              :description="`보다 상세한 자료를 원하신다면, IR자료를 다운받아보세요!`"
              :order_forward="true"
              @loaded="$redrawVueMasonry('containerID')"
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
      if (Object.keys(this.info).length === 0) {
        let payload = {
          param: {id:this.$route.params.id},
          cb_res: (result) => {
            //this.info = this.get_portfolio_detail_on_interest
            this.info = result.data.portfolio.content
            this.tags = result.data.tags
          },
          cb_error: (error) => {
            alter('포트폴리오 상세 페이지 로드에 실패했습니다. 잠시 후 다시 시도해주세요')
          }
        }
        this.$store.dispatch('portfolio/get_portfolio_detail', payload)
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$redrawVueMasonry('containerID')
      })
    },
    updated() {
      this.$redrawVueMasonry('containerID')
    },
    computed: {
      // ...mapGetters('portfolio', [
      //   'get_portfolio_detail'
      // ]),
      ...mapGetters('user', [
        'get_user_type'
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
