<template>
  <section id="event">
    <v-row class="fill-height">
      <v-col cols="12"
        xs="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
        >
        <v-sheet height="64">
          <v-toolbar flat color="white">
            <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
              오늘
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>
            <!-- <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title> -->
            <!-- <base-month-picker-dialog
              v-if="$refs.calendar"
              :title="$refs.calendar.title"
              @update:month="updateMonth"
            > -->
            <base-month-picker-dialog
              :title="title"
              @update:month="updateMonth"
            >
            </base-month-picker-dialog>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <!-- <v-spacer></v-spacer> -->
            <!-- <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  outlined
                  color="grey darken-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title>4 days</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu> -->
          </v-toolbar>
        </v-sheet>
        <v-sheet height="500">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            locale="ko"
            :events="[]"
            :event-color="getEventColor"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"
          >
            <template v-slot:day="{date}" >
              <!-- <v-btn class="ma-2" color="primary" dark>Accept -->
                <v-icon v-if="date.split('-')[2] === '03'" right>$nextround</v-icon>
              <!-- </v-btn> -->
            </template>
          </v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card
              color="grey lighten-4"
              min-width="350px"
              flat
            >
              <v-toolbar
                :color="selectedEvent.color"
                dark
              >
                <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="secondary"
                  @click="selectedOpen = false"
                >
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
      <v-col cols="12"
        xs="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
        >
        <!-- Video for IR -->
        <v-row>
          <v-col class="text-center" cols="12">
            <v-hover v-slot:default="{ hover }">
              <v-card
                 :class="{ 'on-hover': hover }"
                 class="v-ir-card mx-auto"
               >
                <v-img :src="`./assets/portfolio_mod.png`"
                  height="260"
                  @click="showVideoModal = !showVideoModal">
                  <v-card-title
                    v-if="hover"
                    class="title white--text text-center"
                  >
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 heading">IR 영상</p>

                      <div>
                        <p class="ma-0 body-1 font-weight-bold font-italic">
                          스타트업의 성장에 함께 참여해주세요!
                        </p>
                        <!-- <p class="caption font-weight-medium font-italic text-left">
                          테스트
                        </p> -->
                      </div>

                      <div class="align-self-center">
                        <v-btn
                          :class="{ 'show-btns': hover }"
                          x-large
                          icon
                        >
                          <v-icon
                            :class="{ 'show-btns': hover }"
                            class="white--text"
                          >
                            mdi-television-play
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
            <base-video-dialog
              v-if="showVideoModal"
              :title="`Introduction`"
              :dialog="showVideoModal"
              @close="showVideoModal=false"
            />
          </v-col>
          <v-col cols="12">
            <v-sheet
              class="mx-auto"
              elevation="3"
              max-width="800"
            >
              <v-slide-group
                v-model="model"
                class="pa-4"
                show-arrows
              >
                <v-slide-item
                  v-for="post in posts"
                  :key="post.id"
                  v-slot:default="{ active, toggle }"
                >
                  <!-- <v-card
                    :color="active ? 'primary' : 'grey lighten-5'"
                    class="ma-4"
                    height="200"
                    width="150"
                    @click="toggle"
                  > -->
                  <v-card
                    class="ma-4"
                    width="150"
                    height="200"
                    :to="'/portfolio/' + post.id">
                    <div class="card-body">
                      <v-img
                        class="card-img-top"
                        :src="post.image_url"
                        lazy-src="/nextround_front/assets/lazyimg_portfolio.png"
                        alt="Card image cap"
                        height="150"
                        min-height="50"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                      <h5 class="pa-2 card-title"><strong>{{ post.title }}</strong></h5>
                      <!-- <p class="card-text">{{ post.description }}</p> -->
                    </div>
                  </v-card>
                  <!-- </v-card> -->
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'SectionEvent',
    provide: {
      theme: { isDark: false },
    },

    data () {
      return {
        focus: '',
        type: 'month',
        title: '',
        testEvent: null,
        showVideoModal: false,
        model: null,
        posts: [],
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        events: [],
        transparent: 'rgba(255, 255, 255, 0)',
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
      }
    },
    created() {
      if (this.posts.length === 0) {
        let payload = {
          param: {},
          cb_res: (result) => {
            this.posts = this.get_portfolio_list
          },
          cb_error: (error) => {}
        }
        this.$store.dispatch('portfolio/get_portfolio_overall_list', payload)
      }
    },
    mounted() {
      this.$nextTick(() => {
        if (this.$refs.calendar) {
          this.$refs.calendar.checkChange()
        }
        console.log('focus: ', this.focus)
      })
    },
    computed: {
      ...mapGetters('portfolio', [
        'get_portfolio_list',
        'get_chip_list'
      ]),
      items () {

      },
      getTitle () {
        if (this.$refs.calendar) {
          return this.$refs.calendar.title
        }
      }
    },
    watch: {
      search (val) {
      },
    },
    methods: {
      ...mapActions('portfolio', [
          'get_portfolio_overall_list'
      ]),
      updateMonth (value) {
        console.log('updated month is: ', value)
        //
        let yearmonth = value.split('-')
        this.focus = value + '-01'
        //this.focus = new Date(yearmonth[0], yearmonth[1], 1)
      },
      viewDay ({ date }) {
        this.focus = date
        this.type = 'month'
        console.log('focus followed click: ', this.focus)
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
        console.log('focus followed by prev is: ', this.focus)
      },
      next () {
        this.$refs.calendar.next()
        console.log('focus followed by next is: ', this.focus)
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        // const events = []
        //
        // const min = new Date(`${start.date}T00:00:00`)
        // const max = new Date(`${end.date}T23:59:59`)
        // const days = (max.getTime() - min.getTime()) / 86400000
        // const eventCount = this.rnd(days, days + 20)
        //
        // for (let i = 0; i < eventCount; i++) {
        //   const allDay = this.rnd(0, 3) === 0
        //   const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        //   const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        //   const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        //   const second = new Date(first.getTime() + secondTimestamp)
        //
        //   events.push({
        //     name: this.names[this.rnd(0, this.names.length - 1)],
        //     start: first,
        //     end: second,
        //     color: this.colors[this.rnd(0, this.colors.length - 1)],
        //     timed: !allDay,
        //   })
        // }

        // this.events = events
        console.log('testEvent: ', this.testEvent)
        this.title = this.$refs.calendar.parsedValue.year + '년 ' +
                    this.$refs.calendar.parsedValue.month + '월';
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },

    }
  }
</script>
<style>
.v-ir-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1);
}
</style>
