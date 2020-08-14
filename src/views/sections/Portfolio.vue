<template>
  <section id="portfolio">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/portfolio.png')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container
        class="px-4 py-12"
        fluid
      >
        <v-responsive
          class="d-flex align-center"
          height="100%"
          width="100%"
        >
          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <v-row justify="space-around">
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="12"
              >
                <v-chip-group
                  v-model="chip_selection"
                  column
                  multiple
                  active-class="primary--text"
                  @change="handleChipSelection"
                >
                  <v-chip
                    v-for="tag in tags"
                    @click="handleSingleChip"
                    :key="tag.key"
                  >
                    {{ tag.text }}
                  </v-chip>
                </v-chip-group>
                <!-- </v-sheet> -->
                <v-card
                  class="d-flex flex-wrap pl-0 pr-0"
                  color="transparent"
                  flat
                  tile
                >
                  <v-card-text>
                    <v-autocomplete
                      v-model="model"
                      :items="get_portfolio_list"
                      color="white"
                      hide-no-data
                      hide-selected
                      item-text="title"
                      item-value="description"
                      label="업체명 찾기"
                      placeholder="찾으시는 업체명을 입력해주세요"
                      prepend-icon="mdi-database-search"
                      clear-icon
                      clearable
                      @change="handleAutocomplete"
                      return-object
                    ></v-autocomplete>
                    <!-- <v-autocomplete
                      v-model="model"
                      :items="items"
                      :loading="isLoading"
                      :search-input.sync="search"
                      color="white"
                      hide-no-data
                      hide-selected
                      item-text="Description"
                      item-value="API"
                      label="업체명 찾기"
                      placeholder="찾으시는 업체명을 입력해주세요"
                      prepend-icon="mdi-database-search"
                      return-object
                    ></v-autocomplete> -->
                  </v-card-text>
                  <v-container fluid>
                    <v-row
                      v-masonry="`containerID`"
                      :align="`center`"
                      :justify="`center`"
                      transition-duration="0.3s"
                      item-selector=".item"
                    >
                      <v-col v-masonry-tile
                        class="item"
                        cols="12"
                        v-for="(post, index) in posts"
                        sm="6"
                        md="4"
                        lg="3"
                        xl="2"
                        :key="index"
                      >
                        <!-- <v-card class="ma-auto" style="width: 18rem;">
                          <div class="card-body">
                            <v-img
                              class="card-img-top"
                              :src="post.src"
                              alt="Card image cap"
                              @load="$redrawVueMasonry('containerID')"
                            >
                            </v-img>
                            <h5 class="card-title"><strong>{{ post.title }}</strong></h5>
                            <p class="card-text">{{ smartTrim(post.content, 100) }}</p>
                          </div>
                        </v-card> -->
                        <base-business-card
                          :image_url="post.image_url"
                          :width="200"
                          :title="post.title"
                          :content="post.description"
                          :target="'/portfolio/' + post.id"
                          @loaded="$redrawVueMasonry('containerID')"
                        >
                        </base-business-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'SectionPortfolio',
    provide: {
      theme: { isDark: true },
    },

    data () {
      return {
        posts: [],
        showVideoModal: false,
        tags: [],
        tags_selected: [],
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
      if (this.posts.length === 0) {
        let payload = {
          param: {},
          cb_res: (result) => {
            this.posts = this.get_portfolio_list
            this.tags = this.get_chip_list

          },
          cb_error: (error) => {}
        }
        this.$store.dispatch('portfolio/get_portfolio_overall_list', payload)
      }
    },
    mounted() {
      // window.addEventListener('scroll', this.handleScroll);
      // this.getPosts()
      this.$nextTick(() => {
        this.$redrawVueMasonry('containerID')
      })
    },
    computed: {
      ...mapGetters('portfolio', [
        'get_portfolio_list',
        'get_chip_list'
      ]),
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
      // fields () {
      //   if (!this.model) return []
      //
      //   return Object.keys(this.model).map(key => {
      //     return {
      //       key,
      //       value: this.model[key] || 'n/a',
      //     }
      //   })
      // },
      items () {
        return this.entries.map(entry => {
          const Description = entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + '...'
            : entry.Description

          return Object.assign({}, entry, { Description })
        })
      },
    },
    watch: {
      search (val) {
        // Items have already been loaded
        if (this.items.length > 0) return

        // Items have already been requested
        if (this.isLoading) return

        this.isLoading = true

        // Lazily load input items
        fetch('https://api.publicapis.org/entries')
          .then(res => res.json())
          .then(res => {
            const { count, entries } = res
            this.count = count
            this.entries = entries
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      },
    },
    methods: {
      ...mapActions('portfolio', [
          'get_portfolio_overall_list'
      ]),
      triggerMason() {
        this.$redrawVueMasonry('containerID')
        console.log('redraw Masonry')
      },
      getPosts() {
      	for (var i = 0; i < 16; i++) {
        	this.posts.push(
            {
              src: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
              title: 'this is it',
              content: 'beat it'
            }
          )
        }
      },
      selectPost(ids) {

      },
      handleChipSelection() {
        console.log(this.chip_selection)
        if (this.chip_selection[this.chip_selection.length - 1] === 0) {
          this.chip_selection = [0]
        } else if (this.chip_selection.length > 1 && this.chip_selection.some(elm => elm === 0)) {
          this.chip_selection.shift();
        } else if(this.chip_selection.length === 0){
          this.chip_selection.push(0)
        }
        if (this.chip_selection.length === 1 && this.chip_selection[0] === 0){
          this.posts = this.get_portfolio_list
        } else {
          this.posts = this.get_portfolio_list.filter(
            element => {
              return element.business_category.some(bc => this.chip_selection.includes(bc))
            }
          )
        }
      },
      handleSingleChip(model) {
        console.log('single chip model: ', model)
        console.log('last element: ', this.chip_selection[this.chip_selection.length - 1])
      },
      handleAutocomplete() {
        console.log(this.model)
        this.posts = this.get_portfolio_list.filter(element => element.id === this.model.id)
      },
      handleScroll() {
        let scrollHeight = window.scrollY
        let maxHeight = window.document.body.scrollHeight - window.document.documentElement.clientHeight

        if (scrollHeight >= maxHeight - 200) {
          this.getPosts()
        }
      },
      smartTrim(string, maxLength) {
        var trimmedString = string.substr(0, maxLength);
  			return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
      }
    }
  }
</script>
