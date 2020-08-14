<template>
  <section id="portfolio">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/portfolio.png')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container
        class="fill-height px-4 py-12"
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
                <!-- <v-sheet
                  elevation="1"
                  class="pa-4 white--text"
                > -->
                <v-chip-group
                  column
                  multiple
                  active-class="primary--text"
                >
                  <v-chip
                    v-for="tag in tags"
                    :key="tag"
                  >
                    {{ tag }}
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
                    ></v-autocomplete>
                  </v-card-text>
                  <v-card
                    v-for="n in 20"
                    :key="n"
                    class="pa-0 ma-2"
                    max-width="250"
                    outlined
                    tile
                  >
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="headline">업체명</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                      height="194"
                    ></v-img>

                    <v-card-text class="pl-2 pr-2 pt-1 pb-1">
                      상품 혹은 서비스에 대한 간단한 소개:
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        text
                        color="blue accent-4"
                      >
                        > Detail
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-card>
                <!-- <v-item-group
                  v-model="selected"
                  :mandatory="mandatory"
                  :multiple="multiple"
                >
                  <v-container class="pa-0">
                    <v-row justify="space-around">
                      <v-col
                        v-for="n in 11"
                        :key="n"
                        cols="12"
                        md="4"
                      >
                        <v-item v-slot:default="{ active, toggle }">
                          <v-card
                            width="200"
                            height="300"
                            :color="active ? 'primary' : ''"
                            class="d-flex align-center"
                            dark
                            @click="toggle"
                          >
                            <v-scroll-y-transition>
                              <div
                                v-if="active"
                                class="display-3 flex-grow-1 text-center"
                              >
                                Active
                              </div>
                            </v-scroll-y-transition>
                          </v-card>
                        </v-item>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-item-group> -->
              </v-col>
            </v-row>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionPortfolio',

    provide: {
      theme: { isDark: true },
    },

    data () {
      return {
        showVideoModal: false,
        tags: [
          'Work',
          'Home Improvement',
          'Vacation',
          'Food',
          'Drawers',
          'Shopping',
          'Art',
          'Tech',
          'Creative Writing',
        ],
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
        isLoading: false,
        model: null,
        search: null,
      }
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
      fields () {
        if (!this.model) return []

        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a',
          }
        })
      },
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
  }
</script>
