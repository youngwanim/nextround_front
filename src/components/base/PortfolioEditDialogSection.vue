<template>
  <v-card class="pa-4" outlined>
    <p class="display-1 text--primary">
        {{menuDescription.sectionTitle}}
    </p>
  <v-list three-line subheader>
    <v-select
      v-model="data_selected_item"
      :items="auth_list"
      :rules="[v => !!v || 'Item is required']"
      :label="menuDescription.selection.label"
      @change="$emit('update:selectedItem', data_selected_item)"
      required
    ></v-select>
      <v-form v-model="valid">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{menuDescription.title.title}}</v-list-item-title>
            <v-list-item-subtitle>{{menuDescription.title.subtitle}}</v-list-item-subtitle>
            <v-text-field
              class="pl-4"
              v-model="data_title"
              :counter="20"
              :rules="[v => !!v || '회사명 입력은 필수입니다']"
              :label="menuDescription.title.label"
              @change="$emit('update:title', data_title)"
            ></v-text-field>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{menuDescription.subtitle.title}}</v-list-item-title>
            <v-list-item-subtitle>{{menuDescription.subtitle.subtitle}}</v-list-item-subtitle>
            <v-text-field
              class="pl-4"
              v-model="data_subtitle"
              :counter="20"
              :label="menuDescription.subtitle.label"
              @change="$emit('update:subTitle', data_subtitle)"
            ></v-text-field>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{menuDescription.description.title}}</v-list-item-title>
            <v-list-item-subtitle>{{menuDescription.description.subtitle}}</v-list-item-subtitle>
            <v-text-field
              class="pl-4"
              v-model="data_description"
              :counter="300"
              :rules="[v => !!v || '회사 설명 입력은 필수입니다']"
              :label="menuDescription.description.label"
              @change="$emit('update:description', data_description)"
            ></v-text-field>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{menuDescription.image_list.title}}</v-list-item-title>
            <v-list-item-subtitle>{{menuDescription.image_list.subtitle}}</v-list-item-subtitle>

            <!-- <v-file-input
              class="pl-4"
              v-model="image_list"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="소개 이미지(복수선택)"
              :label="menuDescription.image_list.label"
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
            </v-file-input> -->
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-row >
          <v-col cols="12">
            <v-sheet
              v-if="data_image_list.length > 0"
              class="mx-auto"
              elevation="1"
            >
              <v-slide-group
                v-model="model"
                class="pa-4"
                show-arrows
                @change="testUpdate"
              >
                <v-slide-item
                  v-for="(item, index) in data_image_list"
                  :key="index"
                  v-slot:default="{ active, toggle }"
                >
                  <v-card
                    :color="active ? 'primary' : 'grey lighten-5'"
                    class="ma-4"
                    height="100"
                    width="100"
                    @click="toggle"
                  >
                    <v-img :src="item"
                      height="100"
                      contain
                    >
                      <v-row
                        class="fill-height mx-0"
                        align="center"
                        justify="center"
                      >
                        <v-scale-transition>
                          <v-icon
                            v-if="active"
                            color="white"
                            size="48"
                            v-text="'mdi-close-circle-outline'"
                            @click="removeImageList(index)"
                          ></v-icon>
                        </v-scale-transition>
                      </v-row>
                    </v-img>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
            <v-card
              class="mt-4 mx-auto add-image-file-card"
              flat
              width="200"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <v-file-input
                  v-model="image_list"
                  label="파일 추가"
                  small-chips
                  multiple
                  prepend-icon="mdi-plus-circle-outline"
                  @change="onFileImgList"
                ></v-file-input>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-form>
  </v-list>
  </v-card>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'BasePortfolioEditDialogSection',

    inheritAttrs: false,

    props: {
      selectedItem: Number,
      authList: Array,
      title: String,
      imageList: [Array, String],
      subTitle: String,
      description: String,
      menuDescription: Object,
    },
    data() {
      return {
        valid: null,
        model: null,
        data_title: '',
        data_image_list: [],
        data_slide_image_list: [],
        data_subtitle: '',
        data_description: '',
        data_selected_item: 3,
        image_list: [],
        my_portfolio: {},
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
      }
    },
    created() {
      this.data_title = this.title
      this.data_subtitle = this.subTitle
      this.data_description = this.description
      this.data_image_list = this.imageList
      this.data_selected_item = this.selectedItem
      // this._cloneSlideImageList(0, 0)
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
      testUpdate() {
        console.log('slide_group changed')

      },
      showCurrentIndex(index) {
        console.log('current index is: ', index)
      },
      addImageList(image_url) {
        this.data_image_list.push(image_url)
        // this._cloneSlideImageList()
      },
      removeImageList(index) {
        this.data_image_list.splice(index, 1)
        this.emit_image_list()
        // this._cloneSlideImageList()
      },
      // _cloneSlideImageList() {
      //   this.data_slide_image_list = [...this.data_image_list]
      //   // this.data_slide_image_list.push('add')
      // },
      onFileImgList(e) {
        this.imageListFile = []
        if (this.image_list && this.image_list.length > 0) {
          this.submitImageFile()
          const files = this.image_list

          console.log('files:', files)
          // for(var i=0; i<this.image_list.length; i++) {
          //   if(this.image_list[i] !== undefined) {
          //     if (this.image_list[i].name.lastIndexOf('.') <= 0) return
          //     const fr = new FileReader ()
          //     fr.addEventListener('load', () => {
          //       let loadedImage = fr.result
          //       this.imageListFile.push(loadedImage)
          //       this.addImageList(loadedImage)
          //     })
          //     fr.readAsDataURL(this.image_list[i])
          //   } else {
          //     this.imageListFile = []
          //   }
          // }
        }
      },
      emit_image_list(val=null) {
        if (val !== null) {
          this.data_image_list = val
        }
        this.$emit('update:imageList', this.data_image_list)
      },
      submitImageFile() {
        let formData = new FormData();
        for (var i=0;i<this.image_list.length;i++) {
          formData.append('files', this.image_list[i]);
        }
        formData.append('media', this.menuDescription.menu_name)
        // formData.append('files-length', this.image_list.length)

        let payload = {
          param: formData,
          cb_res: (result) => {
            if (result.status === 200) {
              console.log('result data:', result.data)
              this.emit_image_list(this.data_image_list.concat(result.data.upload_filename))
              this.image_list = null
              console.log('data image list:', this.data_image_list)
            } else {
              console.log('returns 200 but failed')
            }
          },
          cb_error: (error) => {
            alert('파일 업로드에 실패했습니다. 다시 시도해주세요')
            console.log('submitImageFile failed')
          }
        }
        this.$store.dispatch('portfolio/upload_portfolio_image', payload)
      }
    }
  }
</script>

<style lang="scss">
  .add-image-file-card {
    .add-image-file-icon {
      .v-icon {
        font-size: 48px
      }
    }
  }
</style>
