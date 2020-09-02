<template>
  <v-row justify="start">
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
        <v-toolbar-title>PORTFOLIO</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false">Save</v-btn>
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
              <base-portfolio-edit-dialog-section
                :selectedItem.sync="companyData.auth_type"
                :authList = "auth_list"
                :title.sync = "companyData.title"
                :imageList.sync = "companyData.image_list"
                :subTitle.sync = "companyData.sub_title"
                :description.sync = "companyData.description"
                :menuDescription = "menu_desc.company"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-row >
                <base-portfolio-detail-card-sample
                  :image_url="companyData.image_list"
                  :title="companyData.title"
                  :sub_title="companyData.sub_title"
                  :description="companyData.description"
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
                :selectedItem.sync="product.auth_type"
                :authList = "auth_list"
                :title.sync = "product.title"
                :imageList.sync = "product.image_list"
                :subTitle.sync = "product.sub_title"
                :description.sync = "product.description"
                :menuDescription = "menu_desc.product"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-row >
                <base-portfolio-detail-card-sample
                  :image_url="product.image_list"
                  :title="product.title"
                  :sub_title="product.sub_title"
                  :description="product.description"
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
                :selectedItem.sync="team.auth_type"
                :authList = "auth_list"
                :title.sync = "team.title"
                :imageList.sync = "team.image_list"
                :subTitle.sync = "team.sub_title"
                :description.sync = "team.description"
                :menuDescription = "menu_desc.team"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-row >
                <base-portfolio-detail-card-sample
                  :image_url="team.image_list"
                  :title="team.title"
                  :sub_title="team.sub_title"
                  :description="team.description"
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
                :selectedItem.sync="ceo.auth_type"
                :authList = "auth_list"
                :title.sync = "ceo.title"
                :imageList.sync = "ceo.image_list"
                :subTitle.sync = "ceo.sub_title"
                :description.sync = "ceo.description"
                :menuDescription = "menu_desc.ceo"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-row >
                <base-portfolio-detail-card-sample
                  :image_url="ceo.image_list"
                  :title="ceo.title"
                  :sub_title="ceo.sub_title"
                  :description="ceo.description"
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
        notifications: false,
        sound: true,
        widgets: false,
        my_portfolio: {},
        overall_select: {},
        valid_company: null,
        image_url: '',
        business_category: [],
        companyData: {
          auth_type: 3,
          title: '',
          sub_title: '',
          description: '',
          image_list: [],
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
        selected_item: 3,
        title: '',
        sub_title: '',
        description: '',
        image_list: [],
        imageListName: [],
        imageListUrl: [],
        imageListFile: [],
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
          this.companyData = pf_object.companyData
          this.product = pf_object.product
          this.team = pf_object.team
          this.ceo = pf_object.ceo
          this.ir = pf_object.ir
          this.business_category = pf_object.business_category
        },
        cb_error: (error) => {}
      }
      this.$store.dispatch('portfolio/get_portfolio_of_mine', payload)
    },
    computed: {
      ...mapGetters('portfolio', [
        'get_my_portfolio'
      ]),
    },
    methods: {
      ...mapActions('portfolio', [
          'get_portfolio_of_mine'
      ]),
      testShowData() {
        console.log('current data: ', this.companyData)
      },
      onFileImgList(e) {
        this.imageListName = []
        this.imageListFile = []
        this.imageListUrl = []
        if (this.image_list.length > 0) {
          const files = this.image_list
          console.log(files)
          for(var i=0; i<this.image_list.length; i++) {
            if(files[i] !== undefined) {
              this.imageListName.push(files[i].name)
              if(this.imageListName[i].lastIndexOf('.') <= 0) {
                return
              }
              const fr = new FileReader ()
              fr.readAsDataURL(files[i])
              fr.addEventListener('load', () => {
                this.imageListUrl.push(fr.result)
                this.imageListFile.push(files[i]) // this is an image file that can be sent to server...
              })
            } else {
              this.imageListName.push('')
              this.imageListFile.push('')
              this.imageListUrl.push('')
            }
          }
        }
      },
    }
  }
</script>
