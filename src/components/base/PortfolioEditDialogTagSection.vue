<template>
  <v-card class="pa-4 mb-4" outlined>
    <p class="display-1 text--primary">
        비즈니스 카테고리
    </p>
    <div class="text-center">
      <v-chip
        v-for="(item, i) in tag_list"
        :key="i"
        class="ma-2"
        close
        color="primary"
        text-color="white"
        @click:close="close(i)"
      >
        <v-avatar left>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>
        {{get_tag_term(item).term}}
      </v-chip>
    </div>
    <div class="text-center">
      <base-tag-dialog
        :tagAllList.sync="tag_all_list"
        :tagSelected.sync="tag_list"
      />
    </div>
  </v-card>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'BasePortfolioEditDialogTagSection',

    inheritAttrs: false,

    props: {
      tagAllList: Array,
      tagList: Array,
    },
    data() {
      return {
        tag_all_list: [],
        tag_list: [],
      }
    },
    created() {
      this.tag_all_list = this.tagAllList
      this.tag_list = this.tagList
    },
    computed: {
      ...mapGetters('portfolio', [
        'get_my_portfolio'
      ]),
      get_selected_tag_list() {
        let tag_chip_list = []
        this.tag_list.forEach((element) => {
          tag_chip_list.push(this.tag_all_list.find((e=>{
            return e.id === element
          })))
        })
        console.log('get_selected_tag_list',tag_chip_list)
        return tag_chip_list
      },
    },
    methods: {
      ...mapActions('portfolio', [
          'get_portfolio_of_mine'
      ]),
      close (i) {
        this.tag_list.splice(i,1)
        this.$store.commit('portfolio/set_chip_selected_list', this.tag_list)
      },
      get_tag_term(id) {
        return this.tag_all_list.find((e => { return e.id === id }))
      },
      // testUpdate() {
      //   console.log('slide_group changed')
      //
      // },
      // showCurrentIndex(index) {
      //   console.log('current index is: ', index)
      // },
      // addImageList(image_url) {
      //   this.data_image_list.push(image_url)
      //   // this._cloneSlideImageList()
      // },
      // removeImageList(index) {
      //   this.data_image_list.splice(index, 1)
      //   this.emit_image_list()
      //   // this._cloneSlideImageList()
      // },
      // // _cloneSlideImageList() {
      // //   this.data_slide_image_list = [...this.data_image_list]
      // //   // this.data_slide_image_list.push('add')
      // // },
      // onFileImgList(e) {
      //   this.imageListFile = []
      //   if (this.image_list && this.image_list.length > 0) {
      //     this.submitImageFile()
      //     const files = this.image_list
      //
      //     console.log('files:', files)
      //     // for(var i=0; i<this.image_list.length; i++) {
      //     //   if(this.image_list[i] !== undefined) {
      //     //     if (this.image_list[i].name.lastIndexOf('.') <= 0) return
      //     //     const fr = new FileReader ()
      //     //     fr.addEventListener('load', () => {
      //     //       let loadedImage = fr.result
      //     //       this.imageListFile.push(loadedImage)
      //     //       this.addImageList(loadedImage)
      //     //     })
      //     //     fr.readAsDataURL(this.image_list[i])
      //     //   } else {
      //     //     this.imageListFile = []
      //     //   }
      //     // }
      //   }
      // },
      // emit_image_list(val=null) {
      //   if (val !== null) {
      //     this.data_image_list = val
      //   }
      //   this.$emit('update:imageList', this.data_image_list)
      // },
      // submitImageFile() {
      //   let formData = new FormData();
      //   for (var i=0;i<this.image_list.length;i++) {
      //     formData.append('files', this.image_list[i]);
      //   }
      //   formData.append('media', this.menuDescription.menu_name)
      //   // formData.append('files-length', this.image_list.length)
      //
      //   let payload = {
      //     param: formData,
      //     cb_res: (result) => {
      //       if (result.status === 200) {
      //         console.log('result data:', result.data)
      //         this.emit_image_list(this.data_image_list.concat(result.data.upload_filename))
      //         this.image_list = null
      //         console.log('data image list:', this.data_image_list)
      //       } else {
      //         console.log('returns 200 but failed')
      //       }
      //     },
      //     cb_error: (error) => {
      //       alert('파일 업로드에 실패했습니다. 다시 시도해주세요')
      //       console.log('submitImageFile failed')
      //     }
      //   }
      //   this.$store.dispatch('portfolio/upload_portfolio_image', payload)
      //}
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
