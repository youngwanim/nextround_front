<template>
  <!-- <v-app id="inspire"> -->
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card flat>
              <!-- <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :href="source"
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar> -->
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="ID"
                    v-model="login_key"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="current-password"
                    v-model="login_value"
                    label="Password"
                    name="current-password"
                    autocomplete="on"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text :to="`signup`" color="primary">회원가입</v-btn>
                <v-btn color="primary" @click="submit">로그인</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  <!-- </v-app> -->
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    props: {
      source: String,
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
        'get_user_type',
        'get_name',
        'get_corporation_name',
        'get_email',
        'get_mdn',
        'get_profile_image',
        'get_address',
      ]),
    },
    methods: {
      ...mapActions('user', [
          'signin'
      ]),
      submit() {
        let payload = {
          param: {
            login_key: this.login_key,
            login_value: this.login_value
          },
          cb_res: (result) => {

          },
          cb_error: (error) =>{
            alert('아이디와 패스워드를 다시 확인해주시기 바랍니다.')
          }
        }
        this.$store.dispatch('user/signin', payload)
      }
    }
  }
</script>
