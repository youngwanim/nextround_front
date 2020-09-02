<template>
  <v-navigation-drawer
    bottom
    color="transparent"
    fixed
    height="auto"
    overlay-color="secondary"
    overlay-opacity=".8"
    temporary
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list
      color="grey lighten-5"
      shaped
    >
      <v-list-item
        v-for="name in drawerList"
        :key="name"
        :to="{ name }"
        :exact="name === 'Home'"
        color="primary"
      >
        <v-list-item-content>
          <v-list-item-title v-text="name" />
        </v-list-item-content>
      </v-list-item>

      <v-list-group
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              <v-btn
                text
                class="align-self-center ml-0 pl-0 mr-4"
              >
                <v-list-item-avatar  :style="`border: 1px solid #000000`">
                  <v-img :src="get_profile_image"></v-img>
                </v-list-item-avatar>
              </v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </template>

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
      </v-list-group>

      <!-- <v-list-item v-if="get_authenticated">
        <v-menu
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
              <v-list-item-avatar>
                <v-img :src="get_profile_image"></v-img>
              </v-list-item-avatar>
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <v-list class="grey lighten-5">
            <v-list-item>
              USER INFO.
            </v-list-item>
            <v-list-item>
              YOUR PORTFOLIO
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              LOG OUT
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'HomeDrawer',

    props: {
      items: {
        type: Array,
        default: () => ([]),
      },
    },
    data () {
      return {
        login_key: '',
        login_value: ''
      }
    },
    created() {
    },
    mounted() {
      this.$nextTick(() => {
      })
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
  }
</script>
