<template>
  <v-row :justify="`center`">
   <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
     <template v-slot:activator="{ on, attrs }">
       <v-btn
         text
         v-bind="attrs"
         v-on="on"
       >
         PORTFOLIO
       </v-btn>
     </template>
     <v-card>
        <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{toolbarTitle}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="submitPortfolio">Save</v-btn>
        </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-row
            :align="`center`"
            :justify="`center`"
            :style="`background-color: lightgrey;border: thin solid rgba(0, 0, 0, .12)`"
            class="mb-4 rounded"
          >
            <v-col
              cols="12"
              md="6"
            >
              <base-portfolio-edit-dialog-tag-section
                :tagList.sync="portfolio.business_category"
                :tagAllList="tag_all_list"
              />
              <base-portfolio-edit-dialog-section
                :selectedItem.sync="portfolio_content.auth_type"
                :authList = "auth_list"
                :title.sync = "portfolio_content.title"
                :imageList.sync = "portfolio_content.image_list"
                :subTitle.sync = "portfolio_content.sub_title"
                :description.sync = "portfolio_content.description"
                :menuDescription = "menu_desc.company"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-row >
                <base-portfolio-detail-card-sample
                  :image_url="portfolio_content.image_list"
                  :title="portfolio_content.title"
                  :sub_title="portfolio_content.sub_title"
                  :description="portfolio_content.description"
                  :order_forward="true"
                >
                  <!-- <template #text_footer>
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
                  </template> -->
                </base-portfolio-detail-card-sample>
              </v-row>
            </v-col>
          </v-row>
          <v-row
            :align="`center`"
            :justify="`center`"
            :style="`background-color: lightgrey;border: thin solid rgba(0, 0, 0, .12)`"
            class="mb-4 rounded"
          >
            <v-col
              cols="12"
              md="6"
            >
              <base-portfolio-edit-dialog-section
                :selectedItem.sync="portfolio_content.product_auth_type"
                :authList = "auth_list"
                :title.sync = "portfolio_content.product_title"
                :imageList.sync = "portfolio_content.product_image_list"
                :subTitle.sync = "portfolio_content.product_sub_title"
                :description.sync = "portfolio_content.product_introduce"
                :menuDescription = "menu_desc.product"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-row >
                <base-portfolio-detail-card-sample
                  :image_url="portfolio_content.product_image_list"
                  :title="portfolio_content.product_title"
                  :sub_title="portfolio_content.product_sub_title"
                  :description="portfolio_content.product_introduce"
                  :order_forward="true"
                >
                </base-portfolio-detail-card-sample>
              </v-row>
            </v-col>
          </v-row>
          <v-row
            :align="`center`"
            :justify="`center`"
            :style="`background-color: lightgrey;border: thin solid rgba(0, 0, 0, .12)`"
            class="mb-4 rounded"
          >
            <v-col
              cols="12"
              md="6"
            >
              <base-portfolio-edit-dialog-section
                :selectedItem.sync="portfolio_content.team_auth_type"
                :authList = "auth_list"
                :title.sync = "portfolio_content.team_title"
                :imageList.sync = "portfolio_content.team_image_list"
                :subTitle.sync = "portfolio_content.team_sub_title"
                :description.sync = "portfolio_content.team_introduce"
                :menuDescription = "menu_desc.team"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-row >
                <base-portfolio-detail-card-sample
                  :image_url="portfolio_content.team_image_list"
                  :title="portfolio_content.team_title"
                  :sub_title="portfolio_content.team_sub_title"
                  :description="portfolio_content.team_introduce"
                  :order_forward="true"
                >
                </base-portfolio-detail-card-sample>
              </v-row>
            </v-col>
          </v-row>
          <v-row
            :align="`center`"
            :justify="`center`"
            :style="`background-color: lightgrey;border: thin solid rgba(0, 0, 0, .12)`"
            class="mb-4 rounded"
          >
            <v-col
              cols="12"
              md="6"
            >
              <base-portfolio-edit-dialog-section
                :selectedItem.sync="portfolio_content.ceo_auth_type"
                :authList = "auth_list"
                :title.sync = "portfolio_content.ceo"
                :imageList.sync = "portfolio_content.ceo_image_list"
                :subTitle.sync = "portfolio_content.ceo_sub_title"
                :description.sync = "portfolio_content.ceo_introduce"
                :menuDescription = "menu_desc.ceo"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-row >
                <base-portfolio-detail-card-sample
                  :image_url="portfolio_content.ceo_image_list"
                  :title="portfolio_content.ceo"
                  :sub_title="portfolio_content.ceo_sub_title"
                  :description="portfolio_content.ceo_introduce"
                  :order_forward="true"
                >
                </base-portfolio-detail-card-sample>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <v-btn
          @click="testShowData"
        ></v-btn>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'BasePortfolioEditDialog',

    inheritAttrs: false,

    props: {
      // image_url: [Array, String],
      // title: String,
      // sub_title: String,
      // description: String,
      order_forward: Boolean,
    },
    data() {
      return {
        dialog: false,
        tag_all_list: [],
        portfolio: {
          homepage_url: '',
          business_category: [],
        },
        portfolio_content: {
          auth_type: 3,
          title: '',
          sub_title: '',
          image_url: '',
          image_list: [],
          description: '',
          product_auth_type: 3,
          product_title: '',
          product_sub_title: '',
          product_image_list: [],
          product_introduce: '',
          team_auth_type: 3,
          team_title: '',
          team_sub_title: '',
          team_image_list: [],
          team_introduce: '',
          ceo_auth_type: 3,
          ceo: '',
          ceo_sub_title: '',
          ceo_image_list: [],
          ceo_introduce: '',
          ir_auth_type: 3,
          ir_file: '',
        },
        product: {
          auth_type: 3,
          title: '',
          sub_title: '',
          description: '',
          image_list: [],
        },
        team: {
          auth_type: 3,
          title: '',
          sub_title: '',
          description: '',
          image_list: [],
        },
        ceo: {
          auth_type: 3,
          title: '',
          sub_title: '',
          description: '',
          image_list: [],
        },
        ir: {
          auth_type: 3,
          file: ''
        },
        auth_list: [
          {
            text:'노출안함',
            value: 0
          },
          {
            text:'VC에게만 노출',
            value: 1
          },
          {
            text:'VC + 다른 스타트업에 노출',
            value: 2
          },
          {
            text:'모두에게 노출',
            value: 3
          }
        ],
        menu_desc: {
          company: {
            menu_name: "company",
            sectionTitle: '회사 소개(필수항목)',
            selection: {
              label: '전체 포트폴리오 노출 설정',
            },
            title: {
              title: '회사명(타이틀)',
              subtitle: '회사 섹션의 타이틀로 표시됩니다',
              label: '회사명',
            },
            subtitle: {
              title: '회사소개 부제목',
              subtitle: '회사의 가치와 지향점을 설명할 수 있는 짧은 소제목입니다',
              label: '회사소개 부제목',
            },
            description: {
              title: '회사 설명',
              subtitle: '회사에 대한 설명을 기술해주시기 바랍니다',
              label: '회사소개 본문',
            },
            image_list: {
              title: '회사 소개 이미지',
              subtitle: '포트폴리오 상세 페이지에 노출될 회사 소개 이미지를 업로드해주시기 바랍니다.\
                정사각형(aspect ratio 1:1 기준)에 가까운 이미지가 레이아웃에 잘 어울립니다.',
              label: '회사 소개 이미지',
            }
          },
          product: {
            menu_name: "product",
            sectionTitle: '상품 혹은 서비스 소개',
            selection: {
              label: '상품/서비스 노출 설정',
            },
            title: {
              title: '상품/서비스 이름',
              subtitle: '상품이나 서비스를 소개해주세요',
              label: '상품/서비스 이름을 입력하세요',
            },
            subtitle: {
              title: '상품/서비스 소개 부제목',
              subtitle: '짧은 문장의 캐치프레이즈를 입력해주세요',
              label: '상품/서비스 소개 부제목',
            },
            description: {
              title: '상품/서비스 소개 설명',
              subtitle: '상품/서비스를 설명할 수 있는 자세한 내용을 입력해주세요. 본 섹션의 \
               이미지를 설명할 수 있는 내용이면 더욱 효과적으로 소개할 수 있습니다.',
              label: '소개 설명 본문',
            },
            image_list: {
              title: '상품/서비스 소개 이미지',
              subtitle: '포트폴리오 상세 페이지에 노출될 상품/서비스 소개 이미지를 업로드해주시기 바랍니다.\
                정사각형(aspect ratio 1:1 기준)에 가까운 이미지가 레이아웃에 잘 어울립니다.',
              label: '상품/서비스 소개 이미지',
            }
          },
          team: {
            menu_name: "team",
            sectionTitle: '팀 소개',
            selection: {
              label: '팀 소개 노출 설정',
            },
            title: {
              title: '팀 소개 타이틀',
              subtitle: '팀 소개 섹션의 제목에 위치할 내용을 입력해주세요.',
              label: '팀 소개 타이틀',
            },
            subtitle: {
              title: '팀 소개 서브타이틀',
              subtitle: '생략 가능합니다. ',
              label: '팀 소개 부제목',
            },
            description: {
              title: '팀 소개 설명',
              subtitle: '우리 팀을 설명할 수 있는 자세한 내용을 입력해주세요. 본 섹션의 \
               이미지를 설명할 수 있는 내용이면 더욱 효과적으로 소개할 수 있습니다.',
              label: '팀 소개 본문',
            },
            image_list: {
              title: '팀 소개 이미지',
              subtitle: '포트폴리오 상세 페이지에 노출될 팀 소개 이미지를 업로드해주시기 바랍니다.\
                정사각형(aspect ratio 1:1 기준)에 가까운 이미지가 레이아웃에 잘 어울립니다.',
              label: '팀 소개 이미지',
            }
          },
          ceo: {
            menu_name: "ceo",
            sectionTitle: 'CEO 소개',
            selection: {
              label: 'CEO 소개 노출 설정',
            },
            title: {
              title: 'CEO 소개 타이틀',
              subtitle: 'CEO 소개 섹션의 제목에 위치할 내용을 입력해주세요.',
              label: 'CEO 소개 타이틀',
            },
            subtitle: {
              title: 'CEO 소개 서브타이틀',
              subtitle: '생략 가능합니다. ',
              label: 'CEO 소개 부제목',
            },
            description: {
              title: 'CEO 소개 본문',
              subtitle: '우리 회사 CEO를 설명할 수 있는 자세한 내용을 입력해주세요. 예를 들어, CEO의 이력이나 \
               비전, 커리어 등을 포함하면 좋을 것입니다',
              label: 'CEO 소개 본문',
            },
            image_list: {
              title: 'CEO 소개 이미지',
              subtitle: '포트폴리오 상세 페이지에 노출될 CEO 소개 이미지를 업로드해주시기 바랍니다.\
                정사각형(aspect ratio 1:1 기준)에 가까운 이미지가 레이아웃에 잘 어울립니다.',
              label: 'CEO 소개 이미지',
            }
          }
        }
      }
    },
    created() {
      let payload = {
        param: {
          open_id: this.$cookies.get('openid')
        },
        cb_res: (result) => {
          let pf_object = this.get_my_portfolio
          this.portfolio.homepage_url = pf_object.homepage_url
          this.portfolio.business_category = pf_object.business_category

          for (let key of Object.keys(this.portfolio_content)){
            if (key in pf_object.content) {
              this.portfolio_content[key] = pf_object.content[key]
            }
          }
        },
        cb_error: (error) => {
          this.initPortfolioData()
        }
      }
      let payload_tag = {
        cb_res: (result) => {
          console.log('tag_list_result:', result.data)
          this.tag_all_list = result.data.tags
        },
        cb_error: (error) => {
          alert('태크 리스트 로딩에 실패했습니다')
        }
      }
      this.$store.dispatch('portfolio/get_portfolio_of_mine', payload)
      this.$store.dispatch('portfolio/get_all_tag_list', payload_tag)
    },
    computed: {
      ...mapGetters('portfolio', [
        'get_my_portfolio'
      ]),
      toolbarTitle() {
        if ( Object.keys(this.get_my_portfolio).length === 0) {
          return '포트폴리오 등록'
        } else{
          return '포트폴리오 수정'
        }
      }
    },
    methods: {
      ...mapActions('portfolio', [
          'get_portfolio_of_mine',
          'get_all_tag_list'
      ]),
      testShowData() {
        console.log('current data: ', this.companyData)
      },
      initPortfolioData() {
        this.portfolio = {
          homepage_url: '',
          business_category: [],
        }

        this.portfolio_content =  {
          auth_type: 3,
          title: '',
          sub_title: '',
          image_url: '',
          image_list: [],
          description: '',
          product_auth_type: 3,
          product_title: '',
          product_sub_title: '',
          product_image_list: [],
          product_introduce: '',
          team_auth_type: 3,
          team_title: '',
          team_sub_title: '',
          team_image_list: [],
          team_introduce: '',
          ceo_auth_type: 3,
          ceo: '',
          ceo_sub_title: '',
          ceo_image_list: [],
          ceo_introduce: '',
          ir_auth_type: 3,
          ir_file: '',
        }
      },
      mutatePortiflio() {
        let payload = {
          business_category: this.portfolio.business_category,
          content: this.portfolio_content
        }
        console.log('tag_list:', this.portfolio.business_category)
        this.$store.commit('portfolio/set_my_portfolio_attr', payload)
      },
      submitPortfolio() {
        this.mutatePortiflio()
        //
        // let portfolio = {
        //   open_id: '',
        //   business_category: this.tag_list
        // }
        // portfolio['content'] = {
        //   auth_type: this.portfolio_content.auth_type,
        //   title: this.portfolio_content.title,
        //   sub_title: this.portfolio_content.sub_title,
        //   image_url: this.portfolio_content.image_url,
        //   image_list: this.portfolio_content.image_list,
        //   description: this.portfolio_content.description,
        //   product_auth_type: this.portfolio_content.product_auth_type,
        //   product_title: this.portfolio_content.product_title,
        //   product_sub_title: this.portfolio_content.product_sub_title,
        //   product_image_list: this.portfolio_content.product_image_list,
        //   product_introduce: this.portfolio_content.product_introduce,
        //   team_auth_type: this.portfolio_content.team_auth_type,
        //   team_title: this.portfolio_content.team_title,
        //   team_sub_title: this.portfolio_content.team_sub_title,
        //   team_image_list: this.portfolio_content.team_image_list,
        //   team_introduce: this.portfolio_content.team_introduce,
        //   ceo_auth_type: this.portfolio_content.ceo_auth_type,
        //   ceo: this.portfolio_content.ceo,
        //   ceo_sub_title: this.portfolio_content.ceo_sub_title,
        //   ceo_image_list: this.portfolio_content.ceo_image_list,
        //   ceo_introduce: this.portfolio_content.ceo_introduce,
        //   ir_auth_type: this.portfolio_content.ir_auth_type,
        //   ir_file: this.portfolio_content.ir_file
        // }
        let payload = {
          param: null,
          cb_res: (result) => {
            console.log('submit my portfolio:', result.data)
            alert('포트폴리오가 성공적으로 등록되었습니다')
            this.dialog = false
          },
          cb_error: (error) => {
            console.log('failed to submit my portfolio', error)
          }
        }

        this.$store.dispatch('portfolio/update_my_portfolio', payload)
      },
    }
  }
</script>
