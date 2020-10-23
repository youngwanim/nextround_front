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
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="5" class="px-4 ml-4">
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
              <v-container>
                <v-row justify="center">
                  <v-col cols="12" sm="6">
                    <v-card flat class="mx-auto">
                    <v-img
                      :src="get_business_card_image"
                      :style="`border: 1px solid #000000`"
                      contain
                    ></v-img>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="12" sm="6"
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
                          @change="onBCFilePicked"
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
                          <template v-slot:append>
                            <v-btn
                              color="primary"
                              @click="submitBCImage"
                              :disabled="image_bc === null"
                            >
                              등록
                            </v-btn>
                          </template>
                        </v-file-input>
                      </div>
                      <v-snackbar
                        v-model="snackbar"
                        :timeout="1000"
                      >
                        정상적으로 등록되었습니다

                        <template v-slot:action="{ attrs }">
                          <v-btn
                            color="blue"
                            text
                            v-bind="attrs"
                            @click="snackbar = false"
                          >
                            Close
                          </v-btn>
                        </template>
                      </v-snackbar>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
              <v-container>
                <v-row justify="center">
                  <v-col cols="12" sm="6">
                    <v-card flat class="mx-auto">
                    <v-img
                      :src="get_profile_image"
                      :style="`border: 1px solid #000000`"
                      contain
                    ></v-img>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="12" sm="6"
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
                          @change="onPFFilePicked"
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
                          <template v-slot:append>
                            <v-btn
                              color="primary"
                              @click="submitPFImage"
                              :disabled="image_pf === null"
                            >
                              등록
                            </v-btn>
                          </template>
                        </v-file-input>
                      </div>
                      <v-snackbar
                        v-model="snackbar"
                        :timeout="1000"
                      >
                        정상적으로 등록되었습니다

                        <template v-slot:action="{ attrs }">
                          <v-btn
                            color="blue"
                            text
                            v-bind="attrs"
                            @click="snackbar = false"
                          >
                            Close
                          </v-btn>
                        </template>
                      </v-snackbar>
                    </v-row>
                  </v-col>
                </v-row>
                <v-alert
                  :value="alert_image_response_fail"
                  color="pink"
                  dark
                  border="top"
                  icon="mdi-error"
                  transition="scale-transition"
                  close-text="Close Alert"
                >
                 이미지 등록 과정에서 문제가 발생하였습니다. 다시 시도해주시기 바랍니다.
                </v-alert>
              </v-container>

            </v-col>
          </v-row>
        </v-container>
      </v-form>
     </v-card>
   </v-dialog>
 </v-row>
</template>

<script>
  import st_config from '@/config/config.js'
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
        snackbar: false,
        oss_url: st_config.oss_url,
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
        business_card: '',
        address: '',
        image_pf: null,
        image_bc: null,
        alert_image_response_fail: false
      }
    },
    created() {
      this.updateUserInfo(this.get_user_info)
    },
    computed: {
      ...mapGetters('user', [
        'get_user_info'
      ]),
      get_business_card_image() {
        return (this.business_card === '' ? '/assets/empty_bc.png' : this.business_card)
      },
      get_profile_image() {
        return (this.profile_image === '' ? '/assets/empty_pf.png' : this.profile_image)
      },
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
      ...mapActions('user', [
        'upload_busicesscard_image',
        'upload_profile_image',
      ]),
      updateUserInfo(obj) {
        console.log('obj in userinfodialog: ', obj)
        this.login_key = obj.login_key
        this.name = obj.name
        this.corporation_name = obj.corporation_name
        this.is_active = obj.is_active
        this.qualified = obj.qualified
        this.user_type = obj.user_type
        this.email = obj.email
        this.mdn = obj.mdn
        if (obj.profile_image && obj.profile_image.length > 0)
          this.profile_image = this.oss_url + obj.profile_image
        if (obj.business_card && obj.business_card.length > 0)
          this.business_card = this.oss_url + obj.business_card
        this.address = obj.address
      },
      onBCFilePicked(e) {
        console.log('image_bc is: ', this.image_bc)
        if (this.image_bc) {
          const files = [this.image_bc]
          const fr = new FileReader()

          if (this.image_bc.name.lastIndexOf('.') <= 0) return
          fr.readAsDataURL(this.image_bc)
          fr.addEventListener('load', () => {
            this.business_card = fr.result
            console.log('business_card:', this.business_card)
          })
        } else {
          this.image_bc = null
        }
      },
      submitBCImage() {
        let formData = new FormData();
        formData.append('file', this.image_bc);
        let payload = {
          param: formData,
          cb_res: (result) => {
            console.log('submitBCImage:', result)
            if (result.status === 200) {
              this.alert_image_response_fail = false
              this.image_bc = null
              this.snackbar = true
            } else {
              this.alert_image_response_fail = true
            }
          },
          cb_error: (error) => {
            this.alert_image_response_fail = true
          }
        }
        this.$store.dispatch('user/upload_busicesscard_image', payload)
      },
      onPFFilePicked(e) {
        if (this.image_pf) {
          const files = [this.image_pf]
          const fr = new FileReader()

          if (this.image_pf.name.lastIndexOf('.') <= 0) return
          fr.readAsDataURL(this.image_pf)
          fr.addEventListener('load', () => {
            this.profile_image = fr.result
          })
        } else {
          this.image_pf = null
        }
      },
      submitPFImage() {
        let formData = new FormData();
        formData.append('file', this.image_pf);
        let payload = {
          param: formData,
          cb_res: (result) => {
            console.log('submitPFImage cb_res:', result)
            if (result.status === 200) {
              this.alert_image_response_fail = false
              this.image_pf = null
              this.snackbar = true
            } else {
              this.alert_image_response_fail = true
            }
          },
          cb_error: (error) => {
            console.log('submitPFImage cb_error:', error)
            this.alert_image_response_fail = true
          }
        }
        this.$store.dispatch('user/upload_profile_image', payload)
      }
    }
  }
</script>
