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
