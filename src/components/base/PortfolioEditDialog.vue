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
          >
            <v-col
              cols="12"
              md="6"
            >
              <base-portfolio-edit-dialog-section
                :selectedItem.sync="companyData.selected_item"
                :authList = "auth_list"
                :title.sync = "companyData.title"
                :imageList.sync = "companyData.image_list"
                :subTitle.sync = "companyData.sub_title"
                :description.sync = "companyData.description"
                :menuDescription = "menu_desc.company"
              />
              <!-- <v-list three-line subheader>
                <v-subheader>회사 소개(필수항목)</v-subheader>
                <v-select
                  v-model="overall_select"
                  :items="auth_list"
                  :rules="[v => !!v || 'Item is required']"
                  label="전체 포트폴리오 노출 설정"
                  required
                ></v-select>
                  <v-form v-model="valid_company">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>회사명(타이틀)</v-list-item-title>
                        <v-list-item-subtitle>회사 섹션의 타이틀로 표시됩니다</v-list-item-subtitle>
                        <v-text-field
                          class="pl-4"
                          v-model="title"
                          :counter="10"
                          :rules="[v => !!v || '회사명 입력은 필수입니다']"
                          label="회사명"
                        ></v-text-field>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>회사소개 부제목</v-list-item-title>
                        <v-list-item-subtitle>회사의 가치와 지향점을 설명할 수 있는 짧은 소제목입니다</v-list-item-subtitle>
                        <v-text-field
                          class="pl-4"
                          v-model="sub_title"
                          :counter="10"
                          :rules="[v => !!v || '입력은 필수입니다']"
                          label="회사소개 부제목"
                        ></v-text-field>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>회사 설명</v-list-item-title>
                        <v-list-item-subtitle>회사에 대한 설명을 기술해주시기 바랍니다</v-list-item-subtitle>
                        <v-text-field
                          class="pl-4"
                          v-model="description"
                          :counter="300"
                          :rules="[v => !!v || '회사 설명 입력은 필수입니다']"
                          label="회사소개 본문"
                        ></v-text-field>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>회사 소개 이미지</v-list-item-title>
                        <v-list-item-subtitle>포트폴리오 상세 페이지에 노출될 회사 소개 이미지를 업로드해주시기 바랍니다.
                          정사각형(aspect ratio 1:1 기준)에 가까운 이미지가 레이아웃에 잘 어울립니다.
                        </v-list-item-subtitle>
                        <v-file-input
                          class="pl-4"
                          v-model="image_list"
                          accept="image/png, image/jpeg, image/bmp"
                          placeholder="회사 소개 이미지(복수선택)"
                          label="회사 소개 이미지"
                          multiple
                          prepend-icon="mdi-paperclip"
                          type="file"
                          @change="onFileImgList"
                        >
                          <template v-slot:selection="{ text }">
                            <v-chip
                              small
                              label
                              color="primary"
                            >
                              {{ text }}
                            </v-chip>
                          </template>
                        </v-file-input>
                      </v-list-item-content>
                    </v-list-item>
                  </v-form>
              </v-list> -->

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
        companyData: {
          selected_item: 3,
          title: '',
          sub_title: '',
          description: '',
          image_list: [],
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
            title: {
              title: '회사명(타이틀)',
              subtitle: '회사 섹션의 타이틀로 표시됩니다'
            },
            subtitle: {
              title: '회사소개 부제목',
              subtitle: '회사의 가치와 지향점을 설명할 수 있는 짧은 소제목입니다'
            },
            description: {
              title: '회사 설명',
              subtitle: '회사에 대한 설명을 기술해주시기 바랍니다'
            },
            image_list: {
              title: '회사 소개 이미지',
              subtitle: '포트폴리오 상세 페이지에 노출될 회사 소개 이미지를 업로드해주시기 바랍니다.\
                정사각형(aspect ratio 1:1 기준)에 가까운 이미지가 레이아웃에 잘 어울립니다.'
            }
          }
        }
      }
    },
    created() {
      let payload = {
        param: {
          open_id: this.$cookies.get('openid')
        }
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
