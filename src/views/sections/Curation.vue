<template>
  <section id="curation">
    <!-- <v-img
      :src="`https://corp.onoffmix.com/images/logo.png`"
      class="white--text bg-img-gradient"
    >
    <video-background
        src="//localhost:8010/media/onoffmix_1080p.mp4"
        poster="//localhost:8080/nextround_front/assets/about.jpg"
        style="height: 100vh;"
        overlay="linear-gradient(to left, rgba(255, 255, 255, 0), rgba(0,0,0, 0.4) 50%, rgba(0, 0, 0, .8) 100%)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-row
          :justify="`start`">
          <v-col cols="6" >
            <base-heading title="온오프믹스" />
            <base-body class="white--text">
              모임에 대한 모든 것.<br>
              온오프믹스는 사람들간의 원활한 소통과 만남을 위해<br>
              쉽고 편리하게 모임을 위한 개설, 참여, 정보 등의 <br>
              모든 서비스를 제공하는 통합 솔루션입니다.<br>
              공유의 가치를 실현할 수 있도록 온오프믹스가 함께합니다.
            </base-body>
            <v-btn
              color="primary"
              dark
              rounded
            >
              상세 보기
            </v-btn>
          </v-col>
        </v-row>

      </v-container>

    </video-background>
    </v-img> -->
    <div v-for="(item, index) in get_curation_detail">
      <base-curation-full-section
        v-if="item.type === 0"
        :contents="item.contents"
      />
      <base-curation-object-list
        v-if="item.type === 1"
        :contents="item.contents"
      />
      <!-- <v-container fluid class="mt-4 pa-0">
        <v-row
          :justify="`start`"
          class="mt-0">
          <v-col cols="12" >
            <v-sheet
              class="mx-0"
              elevation="8"
              color="black"
            >
              <base-heading class="pt-16 pl-16" title="#핀테크" />
              <v-slide-group
                v-model="model"
                class="py-4 px-16"
                active-class="success"
                show-arrows
              >
                <v-slide-item
                  v-for="post in posts"
                  :key="post.id"
                  v-slot:default="{ active, toggle }"
                >
                  <v-card
                    class="ma-4"
                    width="150"
                    height="200"
                    :to="'/portfolio/' + post.id">
                    <div class="card-body">
                      <v-img
                        class="card-img-top"
                        :src="post.image_url"
                        lazy-src="/assets/lazyimg_portfolio.png"
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
                    </div>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container> -->
      <!-- <base-curation-object-list
        :contents="get_curation_detail[2].contents"
      /> -->
      <!-- <v-container fluid class="mt-4 pa-0">
        <v-row
          :justify="`start`"
          class="mt-0">
          <v-col cols="12" >
            <v-sheet
              class="mx-0"
              elevation="8"
              color="black"
            >
              <base-heading class="pt-16 pl-16" title="#블록체인" />
              <v-slide-group
                v-model="model"
                class="py-4 px-0"
                active-class="success"
                show-arrows
              >
                <v-slide-item
                  v-for="post in posts2"
                  :key="post.id"
                  v-slot:default="{ active, toggle }"
                >
                  <v-card
                    class="ma-4"
                    width="150"
                    height="200"
                    :to="'/portfolio/' + post.id">
                    <div class="card-body">
                      <v-img
                        class="card-img-top"
                        :src="post.image_url"
                        lazy-src="/assets/lazyimg_portfolio.png"
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
                    </div>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container> -->
      <base-curation-image-with-cards
        v-if="item.type === 2"
        :contents="item.contents"
      />
    </div>
    <!-- <v-container fluid class="mt-4 pa-0">
      <base-heading class="pt-16 pl-16" title="Upcoming Round" />
      <v-row
        :justify="`start`"
        :align="`center`"
        class="mt-0">
        <v-col cols="12">
          <v-img :src="`//localhost:8010/media/curation_sample_test2.png`">
          </v-img>
        </v-col>
        <v-col cols="12"
          xs="12"
          sm="6"
          md="6"
          lg="6"
          xl="6"
        >
          <v-card
            class="mx-auto scroll"
            color="#26c6da"
            dark
            max-width="400"
            max-height="200"
          >
            <v-card-title>
              <v-icon
                large
                left
              >
                mdi-mail
              </v-icon>
              <span class="title font-weight-light">404번째 라운드</span>
            </v-card-title>

            <v-card-text class="font-weight-bold">
              "온라인 IR round로, 카카오 TV live채널을 통해 시청 가능합니다(채널명: 넥스트라운드/KDB NEXTROUND)"
            </v-card-text>
            <v-card-actions class=" font-weight-bold">
              <v-spacer></v-spacer>
              <v-btn text>보러가기</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col  cols="12"
          xs="12"
          sm="6"
          md="6"
          lg="6"
          xl="6">
          <v-sheet
            class="mx-0"
            elevation="8"
            color="black"
          >
            <v-slide-group
              v-model="model"
              class="py-4"
              active-class="success"
              show-arrows
            >
              <v-slide-item
                v-for="post in posts2"
                :key="post.id"
                v-slot:default="{ active, toggle }"
              >
                <v-card
                  class="ma-4"
                  width="150"
                  height="200"
                  :to="'/portfolio/' + post.id">
                  <div class="card-body">
                    <v-img
                      class="card-img-top"
                      :src="post.image_url"
                      lazy-src="/assets/lazyimg_portfolio.png"
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
                  </div>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container> -->
  </section>
</template>
<script>
/*
  Curation page layouts
  1. 오늘의 추천 스타트업 (싱글 오브젝트)
  2. 오늘의 이벤트 (싱글 오브젝트)
  3. 추천 스타트업 리스트 (리스트 오브젝트)
  4. 추천 행사 리스트 (리스트 오브젝트)
  5. 인기 비즈니스 카테고리(리스트 오브젝트)
  6. 이미지 배너(싱글 오브젝트)
  7. 이미지 배너 리스트 (리스트 오브젝트)
*/
  import {mapGetters, mapMutations, mapActions} from 'vuex'
  import {portfolios_sample,
    portfolio_detail_sample} from '@/store/modules/constants.js'

  export default {
    name: 'SectionCuration',

    provide: {
      theme: { isDark: true },
    },

    data () {
      return {
        showVideo: false,
        model: null,
        posts:[],
        posts2: [],
      }
    },
    created() {
      let create_post = (num, org_arr) => {
        let tarray = []
        for (let i=0, j=0; i<num; i++) {
          let ele = {}
          for (let attr in org_arr[j]){
            ele[attr] = org_arr[j][attr]
          }
          ele.id = i
          tarray.push(ele)
          j++
          if (j == org_arr.length) {
            j = 0
          }
        }
        return tarray
      }
      if (this.posts.length === 0) {
        this.posts = portfolio_detail_sample
        this.posts2 = create_post(15, portfolio_detail_sample)
      }
      let payload = {}
      this.$store.dispatch('curation/get_curation_detail', payload)
    },
    computed: {
      ...mapGetters('curation', [
        'get_curation_detail'
      ]),
      curation_detail_contents() {
        if (this.get_curation_detail && this.get_curation_detail.length > 0) {
          return this.get_curation_detail[0].contents
        } else {
          console.log('No curation detail:')
          return null
        }
      },
    },
    methods: {
      // ...mapActions('curation', [
      //   'get_curation_detail'
      // ]),
    }
  }
  // gradient="to left, rgba(255, 255, 255, 0) 50%, rgba(5, 11, 31, .8)"
</script>
<style lang="sass">
  .bg-img-gradient
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, .8))
  .scroll
    overflow-y: scroll
</style>
