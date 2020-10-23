<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      elevation="0"
      height="80"
    >
      <v-spacer />
      <!-- <base-img
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
      /> -->
      <div>
        <v-tabs
          class="title-tab hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(name, i) in drawerList"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            active-class="v-tab-active-custom white--text"
            class="font-weight-bold white--text"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
          <v-menu
            v-if="get_authenticated"
            bottom
            right
            :value="menu_value"
          >
            <template v-slot:activator="{ on, attrs }">

              <v-btn
                text
                class="align-self-center mr-4"
                v-bind="attrs"
                v-on="on"
              >
                <v-list-item-avatar :style="`border: 1px solid #FFFFFF`">
                  <v-img v-if="get_profile_image.length > 0" :src="get_profile_image"></v-img>
                  <v-icon v-else
                    color="white"
                  >mdi-account</v-icon>
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
                <base-sign-out-btn/>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up theme--dark"
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
        'Next Round',
        'Portfolio',
        'Event',
        // 'About',
        // 'Contact',
        // 'Pro',
        'Signin',
      ],
      menu_value: false,
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
      listClickHandle() {
        this.menu_value = false
        console.log('menu_value:', this.menu_value)
      }
    }

  }
</script>

<style lang="sass">
  #home-app-bar
    // background-color: rgba(0,0,0,0.2)
    background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, .8) 100%)
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none

    .title-tab
      .v-tabs-bar
        background-color: rgba(0,0,0,0)
        .v-tab-active-custom
          opacity: 1

</style>
