<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="1"
      height="80"
    >
      <base-img
        :src="require('@/assets/frog.png')"
        class="mr-3"
        contain
        max-width="52"
        width="100%"
      />

      <base-img
        :src="require('@/assets/img_gnb_nr.png')"
        contain
        max-width="128"
        width="100%"
      />

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(name, i) in drawerList"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
          <v-menu
            v-if="get_authenticated"
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">

              <v-btn
                text
                class="align-self-center mr-4"
                v-bind="attrs"
                v-on="on"
              >
                <v-list-item-avatar :style="`border: 1px solid #000000`">
                  <v-img v-if="get_profile_image.length > 0" :src="get_profile_image"></v-img>
                  <v-icon v-else>mdi-account</v-icon>
                </v-list-item-avatar>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>

            <v-list class="grey lighten-5">
              <!-- <v-list-item
                v-for="item in more"
                :key="item"
              >
                {{ item }}
              </v-list-item> -->
              <v-list-item>
                <base-user-info-dialog/>
              </v-list-item>
              <v-list-item>
                <base-portfolio-edit-dialog/>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <!-- <v-btn
                  text
                  @click=""
                >
                  LOG OUT
                </v-btn> -->
                <base-sign-out-btn/>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'HomeAppBar',

    components: {
      HomeDrawer: () => import('./Drawer'),
    },

    data: () => ({
      drawer: null,
      mini: false,
      items: [
        'Home',
        'Portfolio',
        'Event',
        // 'About',
        // 'Contact',
        // 'Pro',
        'Signin',
      ],
      more: [
        'News', 'Maps', 'Books', 'Flights', 'Apps',
      ],
    }),
    created() {
      this.$store.dispatch('user/validation', null)
    },
    computed: {
      ...mapGetters('user', [
        'get_authenticated',
        'get_user_type',
        'get_name',
        'get_corporation_name',
        'get_email',
        'get_mdn',
        'get_profile_image',
        'get_address',
      ]),
      profile_image() {
        if (this.get_profile_image.length > 0) {
          return this.get_profile_image
        } else {

        }
      },
      drawerList() {
        if (this.get_authenticated) {
          let filteredList = this.items.filter(n=>{return n !== 'Signin'})
          console.log('drawlist filteredList:', filteredList)
          return this.items.filter(n=>{return n !== 'Signin'})
        } else {
          return this.items
        }
      },
    },
    methods: {
      ...mapActions('user', [
          'validation',
      ]),

    }

  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
