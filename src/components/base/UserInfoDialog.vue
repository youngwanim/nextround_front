<template>
  <v-row :justify="`center`">
   <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
     <template v-slot:activator="{ on, attrs }">
       <v-btn
         text
         v-bind="attrs"
         v-on="on"
       >
         USER INFO.
       </v-btn>
     </template>
     <v-card>
       <v-toolbar dark color="primary">
         <v-btn icon dark @click="dialog = false">
           <v-icon>mdi-close</v-icon>
         </v-btn>
         <v-toolbar-title>User Info. Setting</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-toolbar-items>
           <v-btn dark text @click="dialog = false">Save</v-btn>
         </v-toolbar-items>
       </v-toolbar>
       <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="5">
              <v-text-field
                label="ID"
                :value="login_key"
                disabled
              ></v-text-field>
              <v-text-field
                label="Password"
                :value="login_value"
                :type="'password'"
                append-icon="mdi-pencil"
                disabled
                @click:append=""
              ></v-text-field>
              <v-text-field
                label="name"
                :value="name"
                disabled
                append-icon="mdi-pencil"
              ></v-text-field>
              <v-text-field
                label="Corporation"
                :value="corporation_name"
                disabled
                append-icon="mdi-pencil"
              ></v-text-field>
              <v-text-field
                label="이메일 인증"
                :value="getIsActive"
                disabled
              ></v-text-field>
              <v-text-field
                label="관리자 인증"
                :value="getQualifiedType"
                disabled
              ></v-text-field>
              <v-text-field
                label="유저 유형"
                :value="getUserType"
                disabled
              ></v-text-field>
              <v-text-field
                label="E-mail"
                :value="email"
                disabled
              ></v-text-field>
              <v-text-field
                label="Phone number"
                :value="mdn"
                append-icon="mdi-pencil"
                disabled
              ></v-text-field>
              <v-text-field
                label="Address"
                :value="address"
                disabled
              ></v-text-field>
            </v-col>
            <v-divider
               class="mx-4"
               vertical
            ></v-divider>
            <v-col cols="12" sm="6">
              <v-card flat class="d-inline-block mb-4">
                <v-container>
                  <v-row justify="center">
                    <v-col cols="auto">
                      <v-img
                        height="200"
                        width="200"
                        :src="profile_image"
                        :style="`border: 1px solid #000000`"
                        contain
                      ></v-img>
                    </v-col>

                    <v-col
                      cols="auto"
                      class="text-center pl-0"
                    >
                      <v-row
                        class="flex-column ma-0 fill-height"
                        justify="center"
                        align="center"
                      >
                        <div class="pr-4">
                          <v-file-input
                            v-model="image_pf"
                            accept="image/png, image/jpeg, image/bmp"
                            :placeholder="getPfImagePlaceholder"
                            :label="`프로필 이미지`"
                            prepend-icon="mdi-paperclip"
                            type="file"
                          >
                            <template v-slot:selection="{ text }">
                              <v-chip
                                small
                                label
                                color="primary"
                              >
                                {{ text }}
                              </v-chip>
                            </template>
                          </v-file-input>
                        </div>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
              <v-card flat class="d-inline-block">
                <v-container>
                  <v-row justify="space-between">
                    <v-col cols="auto">
                      <v-img
                        height="200"
                        width="200"
                        :src="business_card"
                        :style="`border: 1px solid #000000`"
                        contain
                      ></v-img>
                    </v-col>

                    <v-col
                      cols="auto"
                      class="text-center pl-0"
                    >
                      <v-row
                        class="flex-column ma-0 fill-height"
                        justify="center"
                        align="center"
                      >
                        <div class="pr-4">
                          <v-file-input
                            v-model="image_bc"
                            accept="image/png, image/jpeg, image/bmp"
                            :placeholder="getBCImagePlaceholder"
                            :label="`명함 이미지`"
                            prepend-icon="mdi-paperclip"
                            type="file"
                          >
                            <template v-slot:selection="{ text }">
                              <v-chip
                                small
                                label
                                color="primary"
                              >
                                {{ text }}
                              </v-chip>
                            </template>
                          </v-file-input>
                        </div>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
       <!-- <v-list three-line subheader>
         <v-subheader>User Information</v-subheader>
         <v-list-item>
           <v-list-item-content>
             <v-list-item-title>ID</v-list-item-title>
           </v-list-item-content>
         </v-list-item>
         <v-list-item>
           <v-list-item-content>
             <v-list-item-title>Password</v-list-item-title>
             <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
           </v-list-item-content>
         </v-list-item>
       </v-list>
       <v-divider></v-divider>
       <v-list three-line subheader>
         <v-subheader>General</v-subheader>
         <v-list-item>
           <v-list-item-action>
             <v-checkbox v-model="notifications"></v-checkbox>
           </v-list-item-action>
           <v-list-item-content>
             <v-list-item-title>Notifications</v-list-item-title>
             <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
           </v-list-item-content>
         </v-list-item>
       </v-list> -->
     </v-card>
   </v-dialog>
 </v-row>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'BaseUserInfoDialog',

    inheritAttrs: false,

    props: {
      image_url: [Array, String],
      title: String,
      sub_title: String,
      description: String,
      order_forward: Boolean,
    },
    data() {
      return {
        dialog: false,
        login_key: '',
        login_value: '*******',
        name: '',
        corporation_name: '',
        is_active: false,
        qualified: false,
        user_type: 0,
        email: '',
        mdn: '',
        profile_image: '',
        address: '',
        business_card: '',
        image_pf: null,
        image_bc: null,
      }
    },
    created() {
      this.updateUserInfo(this.get_user_info)
    },
    computed: {
      ...mapGetters('user', [
        'get_user_info'
      ]),
      getBCImagePlaceholder() {
        if (this.business_card !== '') {
          return '이미지 수정'
        } else {
          return '이미지 등록'
        }
      },
      getPfImagePlaceholder() {
        if (this.profile_image !== '') {
          return '이미지 수정'
        } else {
          return '이미지 등록'
        }
      },
      getUserType() {
        if (this.user_type === 0) {
          return '관리자'
        } else if (this.user_type === 1) {
          return 'Venture Capital'
        } else if (this.user_type === 2) {
          return 'Startup'
        } else {
          return '일반'
        }
      },
      getIsActive() {
        if (this.is_active) {
          return '인증 완료'
        } else {
          return '미완료'
        }
      },
      getQualifiedType() {
        if (this.qualified) {
          return '인증 완료'
        } else {
          return '미완료'
        }
      },
    },
    methods: {
      updateUserInfo(obj) {
        this.login_key = obj.login_key
        this.name = obj.name
        this.corporation_name = obj.corporation_name
        this.is_active = obj.is_active
        this.qualified = obj.qualified
        this.user_type = obj.user_type
        this.email = obj.email
        this.mdn = obj.mdn
        this.profile_image = obj.profile_image
        this.address = obj.address
        this.business_card = obj.business_card
      }
    }
  }
</script>
