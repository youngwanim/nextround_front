<template>
  <v-list three-line subheader>
    <v-subheader>회사 소개(필수항목)</v-subheader>
    <v-select
      v-model="data_selected_item"
      :items="auth_list"
      :rules="[v => !!v || 'Item is required']"
      label="전체 포트폴리오 노출 설정"
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
              label="회사명"
              @change="$emit('update:title', data_title)"
            ></v-text-field>
          </v-list-item-content>
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
              label="회사소개 부제목"
              @change="$emit('update:subTitle', data_subtitle)"
            ></v-text-field>
          </v-list-item-content>
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
              label="회사소개 본문"
              @change="$emit('update:description', data_description)"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{menuDescription.image_list.title}}</v-list-item-title>
            <v-list-item-subtitle>{{menuDescription.image_list.subtitle}}</v-list-item-subtitle>
            <v-file-input
              class="pl-4"
              v-model="data_image_list"
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
  </v-list>
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
        data_title: '',
        data_image_list: [],
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
      // let payload = {
      //   param: {
      //     open_id: this.$cookies.get('openid')
      //   }
      // }
      // this.$store.dispatch('portfolio/get_portfolio_of_mine', payload)
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
      onFileImgList(e) {
        this.imageListName = []
        this.imageListFile = []
        this.imageListUrl = []
        if (this.data_image_list.length > 0) {
          const files = this.data_image_list
          console.log(files)
          for(var i=0; i<this.data_image_list.length; i++) {
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
