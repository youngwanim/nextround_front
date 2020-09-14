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
              :counter="10"
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
              :counter="10"
              :rules="[v => !!v || '입력은 필수입니다']"
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
        <v-row v-if="data_image_list.length > 0">
          <v-col cols="12">
            <v-sheet
              class="mx-auto"
              elevation="1"
            >
              <v-slide-group
                v-model="model"
                class="pa-4"
                show-arrows
              >
                <v-slide-item
                  v-for="(item, index) in data_slide_image_list"
                  :key="index"
                  v-slot:default="{ active, toggle }"
                >
                  <v-card
                    v-if="index === data_slide_image_list.length-1"
                    :color="'white'"
                    class="ma-4 add-image-file-card"
                    height="100"
                    width="100"
                    flat
                    @click="showCurrentIndex(index)"
                  >
                    <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                    >
                      <v-file-input
                        class="add-image-file-icon ml-4"
                        label="File input"
                        hide-input
                        filled
                        prepend-icon="mdi-plus-circle-outline"
                      ></v-file-input>
                    </v-row>
                  </v-card>
                  <v-card
                    v-else
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
                        class="fill-height"
                        align="center"
                        justify="center"
                      >
                        <v-scale-transition>
                          <v-icon
                            v-if="active"
                            color="white"
                            size="48"
                            v-text="'mdi-close-circle-outline'"
                          ></v-icon>
                        </v-scale-transition>
                      </v-row>
                    </v-img>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
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
      this._cloneSlideImageList(0, 0)
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
      showCurrentIndex(index) {
        console.log('current index is: ', index)
      },
      addImageList(image_url) {
        this.data_image_list.push(image_url)
        this._cloneSlideImageList()
      },
      removeImageList(index) {
        this.data_image_list.splice(index, 1)
        this._cloneSlideImageList()
      },
      _cloneSlideImageList() {
        this.data_slide_image_list = [...this.data_image_list]
        this.data_slide_image_list.push('add')
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

<style lang="scss">
  .add-image-file-card {
    .add-image-file-icon {
      .v-icon {
        font-size: 48px
      }
    }
  }
</style>
