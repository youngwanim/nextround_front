<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="400px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mt-4"
          large
          v-bind="attrs"
          v-on="on"
          @click="sync_data"
        >
          <v-icon left>mdi-plus</v-icon>태그 추가
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">관련 태그를 선택해주세요</span>
        </v-card-title>
        <v-card-text>
          <v-chip-group
            v-model="tag_chip_group"
            column
            multiple
            @change="update_tag_selected"
          >
            <v-chip
              v-for="tag in tagAllList"
              @click="handleTag"
              :key="tag.id"
              filter
              outlined
            >{{tag.term}}</v-chip>
          </v-chip-group>
        </v-card-text>
        <v-autocomplete
            v-model="data_tag_selected"
            class="mx-4"
            :items="tagAllList"
            item-text="term"
            item-value="id"
            outlined
            dense
            chips
            small-chips
            label="검색"
            multiple
            @change="handleAutocomplete"
        ></v-autocomplete>
        <v-expansion-panels flat
          v-model="new_tag_expans"
        >
          <v-expansion-panel>
            <v-expansion-panel-header color="primary">찾으시는 태그가 없나요?</v-expansion-panel-header>
            <v-expansion-panel-content>
              추가하고자 하는 태그를 한글로 입력하신 후 '새로운 태그 추가' 버튼을 클릭해주세요
              <v-text-field
                v-model="new_tag"
                label="신규 태그 입력"
              >
                <template v-slot:append-outer>
                  <v-btn style="top: -8px"
                    color="primary"
                    @click="submitNewTag"
                  >새로운 태그 등록</v-btn>
                </template>
              </v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">cancel</v-btn>
          <v-btn color="green darken-1" text @click="applySelectedTagList();dialog = false">apply</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'BaseTagDialog',

    inheritAttrs: false,

    props: {
      tagAllList: Array,
      tagSelected: Array,
    },
    data() {
      return {
        tag_chip_group: [],
        data_tag_all_list: [],
        data_tag_selected: [],
        dialog: false,
        new_tag_expans: [],
        new_tag: '',
        new_tag_state: false,
      }
    },
    created() {
      console.log('tagList:', this.tagAllList)
      this.data_tag_all_list = this.tagAllList
      this.data_tag_selected = this.tagSelected
      this.update_chip_group()
    },
    computed: {
      ...mapGetters('portfolio', [
        'get_my_portfolio'
      ])
    },
    methods: {
      ...mapActions('portfolio', [
          'get_portfolio_of_mine',
          'create_new_tag',
      ]),
      submitNewTag () {
        console.log('submitNewTag')
        let payload = {
          param: {
            term: this.new_tag
          },
          cb_res: (result) => {
            let tag_data = result.data.tags
            console.log('new tag submit:', tag_data)
            this.new_tag = ''
            this.new_tag_expans = []
            this.data_tag_selected.push(tag_data.id)
            this.tagAllList.push(tag_data)
            this.update_chip_group()
          },
          cb_error: (error) => {
            alert('신규 태그 등록이 실패하였습니다. 관리자에게 문의바랍니다.')
          }
        }
        this.$store.dispatch('portfolio/create_new_tag', payload)
      },
      sync_data () {
        this.data_tag_all_list = this.tagAllList
        this.data_tag_selected = this.tagSelected
        this.tag_chip_group = []
        this.update_chip_group()
      },
      handleAutocomplete (e) {
        console.log('handleAuto:', e)
        this.data_tag_selected = e
        this.update_chip_group()
      },
      update_chip_group () {
        // returns index array- if id in tagSelected coincide with the id
        // in some object id of tagAllList
        this.tag_chip_group = []
        this.data_tag_all_list.forEach((element, index) => {
          if (this.data_tag_selected.includes(element.id)) {
            this.tag_chip_group.push(index)
          }
        })
      },
      update_tag_selected () {
        this.data_tag_selected = this.tag_chip_group.map((index) => {
          return this.data_tag_all_list[index].id
        })
        // console.log('tag_selected:', this.data_tag_selected)
      },
      close () {

      },
      handleTag (tag) {
        // console.log('tag:', tag)
      },
      handle_tag_selected_chips() {
        // console.log('tag_selected_chips:', this.tag_selected_chips)
      },
      applySelectedTagList () {
        this.$emit('update:tagAllList', this.data_tag_all_list)
        this.$emit('update:tagSelected', this.data_tag_selected)
        this.$store.commit('portfolio/set_chip_selected_list', this.data_tag_selected)
        console.log('emit done:', this.data_tag_selected, this.data_tag_all_list)
      }
    }
  }
</script>
