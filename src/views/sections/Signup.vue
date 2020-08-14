<template>
  <v-stepper v-model="e1" vertical>
    <v-stepper-step :complete="e1 > 1" step="1">
      가입유형
      <small>가입유형에 따라 접근권한이 다릅니다</small>
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-card
        class="mb-12 d-flex align-content-center flex-wrap pa-4"
        color="light-blue lighten-3"
      >
        <v-card class="mx-auto mb-4" max-width="300">
          <v-card-title class="display-1 light-blue--text">스타트업</v-card-title>
          <v-card-text style="height: 82px;">
            <!-- <p class="display-1 text--primary"></p> -->
            <div class="light-blue--text">
              투자유치와 함께 넥스트라운드에 참여하길 원하시는 스타트업은
              여기를 클릭해주세요!
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="proceedRegister('startup')" class="light-blue white--text" block>스타트업으로 등록</v-btn>
          </v-card-actions>

        </v-card>
        <v-card class="mx-auto mb-4" max-width="300">
          <v-card-title class="display-1 light-blue--text">벤쳐 캐피탈</v-card-title>
          <v-card-text style="height: 82px;">
            <div class="light-blue--text">
              유망한 스타트업 발굴을 원하시는 VC는 여기를 클릭해주세요!
            </div>
          </v-card-text>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn @click="proceedRegister('vc')" class="light-blue white--text" block>VC로 등록</v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto mb-4" max-width="300">
          <v-card-title class="display-1 light-blue--text">일반 유저</v-card-title>
          <v-card-text style="height: 82px;">
            <div class="light-blue--text">
              스타트업 갤러리를 둘러보고 넥스트 라운드에 관심있는 일반 유저는
              여기를 클릭해 주세요!
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="proceedRegister('normal')" class="light-blue white--text" block>일반유저로 등록</v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
      <!-- <v-btn
        color="primary"
        @click="e1 = 2"
      >
        계속
      </v-btn>
      <v-btn text>취소</v-btn> -->
    </v-stepper-content>
    <v-stepper-step :complete="e1 > 2" step="2">
      회원정보
      <small>소속 회사의 정보를 입력해주세요</small>
    </v-stepper-step>
    <v-stepper-content step="2">
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
      <v-card
        class="mb-12"
        color="light-blue lighten-5"
      >
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
          >
            <v-text-field
              v-model="accountInfo.common.id"
              label="ID"
              :counter="20"
              :rules="nameRules"
              name="login"
              prepend-icon="mdi-account"
              type="text"
              autocomplete="username"
              required
            >
              <!-- <v-btn class="mb-1" slot="append"  color="primary">중복확인</v-btn> -->
              <template v-slot:append-outer>
                <v-menu
                  style="top: -12px"
                  offset-y
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                    >
                      중복확인
                    </v-btn>
                  </template>
                </v-menu>
              </template>
            </v-text-field>
            <v-text-field
              v-model="accountInfo.common.password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              id="password"
              label="Password"
              name="password"
              counter="30"
              :rules="passwordRules"
              prepend-icon="mdi-lock"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              autocomplete="new-password"
              required
            ></v-text-field>
            <v-text-field
              v-model="accountInfo.common.repassword"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              id="re_password"
              label="Retype Password"
              name="repassword"
              counter="30"
              :rules="repasswordRules"
              prepend-icon="mdi-minus"
              :type="show2 ? 'text' : 'password'"
              @click:append="show2 = !show2"
              autocomplete="new-password"
              required
            ></v-text-field>
            <v-text-field
              v-if="accountInfo.common.user_type < 3"
              v-model="accountInfo.specific.companyName"
              id="cname"
              label="Corporation Name"
              name="cname"
              prepend-icon="mdi-office-building"
              type="text"
              required
            ></v-text-field>
            <v-text-field
              v-model="accountInfo.common.address"
              id="address"
              label="Address"
              name="address"
              prepend-icon="mdi-google-maps"
              type="address"
              required
            ></v-text-field>
            <v-text-field
              v-model="accountInfo.common.email"
              id="email"
              label="E-mail"
              :rules="emailRules"
              name="email"
              prepend-icon="mdi-email"
              type="text"
              required
            ></v-text-field>
            <v-text-field
              v-model="accountInfo.common.mdn"
              id="mdn"
              label="Mobile Phone Number"
              name="mdn"
              maxlength="11"
              prepend-icon="mdi-cellphone"
              type="text"
              :rules="mdnRules"
              required
            >
            </v-text-field>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
    </v-row>
    <!-- <v-row>
      입력하신 메일주소로 인증 메일이 발송됩니다. 메일을 확인하시고
      포함된 링크를 클릭해주시면 계정 생성이 완료됩니다.
      인증 완료까지 한단계 더 남았습니다!
    </v-row> -->
    <v-alert
      :value="alert_el2_response_fail"
      color="pink"
      dark
      border="top"
      icon="mdi-error"
      transition="scale-transition"
      close-text="Close Alert"
    >
     등록 과정에서 문제가 발생하였습니다. 다시 시도해주시기 바랍니다.
    </v-alert>
    </v-container>
      <v-btn
        color="primary"
        :disabled="!valid"
        :loading="btn_el2_register"
        @click="validate"
      >
        계속
      </v-btn>
      <v-btn @click="e1=1" text>돌아가기</v-btn>
      <v-btn text>취소</v-btn>

    </v-stepper-content>
    <v-stepper-step step="3">
      인증요청
      <small>인증이 완료된 후 정상적으로 사용가능합니다</small>
    </v-stepper-step>
    <v-stepper-content step="3">
      <v-card
        class="mb-12"
        color="light-blue lighten-5"
        min-height="200px"
      >
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
              sm="10"
              md="8"
            >
              <v-img max-height="300" contain :src="imageUrl" v-if="imageUrl"/>
              <v-file-input
                v-model="businessCardImage"
                :rules="inputImgRules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="명함 사진을 업로드해주세요"
                prepend-icon="mdi-camera"
                label="명함 이미지"
                ref="file1"
                type="file"
                @change="onFilePicked"
              >
                <!-- <template v-slot:append-outer>
                  <v-menu
                    style="top: -12px"
                    offset-y
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        :disabled="btn_el3_register_profile_image_disable"
                        v-bind="attrs"
                        v-on="on"
                      >
                        등록하기
                      </v-btn>
                      <v-btn
                        color="primary"
                        v-bind="attrs"
                        v-on="on"
                      >
                        다음에
                      </v-btn>
                    </template>
                  </v-menu>
                </template> -->

              </v-file-input>
              <v-btn
                class="mr-4"
                color="primary"
                @click="submitProfileImage"
                :disabled="btn_el3_register_profile_image_disable"
              >
                등록하기
              </v-btn>
              <v-btn
                color="primary"
              >
                다음에
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-btn
        color="primary"
        :to="`/`"
      >
        등록완료
      </v-btn>

      <v-btn text>나중에</v-btn>
    </v-stepper-content>

  </v-stepper>
</template>

<script>
  import api from '@/api/api.js'
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    data () {
      return {
        e1: 1,
        valid: true,
        lazy: true,
        registerType: 'normal',
        show1: false,
        show2: false,
        btn_el2_register: false,
        alert_el2_response_fail: false,
        btn_el3_register_profile_image_disable: true,
        file_profile_image: null,
        file_business_card: null,
        accountInfo: {
          common: {
            id: 'testid_',
            password: '2fjsTlqkf!',
            repassword: '2fjsTlqkf!',
            user_type: 2,
            name: 'test_name_',
            mdn: '01011112222',
            email: 'test@test.com',
            address: '서울특별시 서초구 우면동',
          },
          specific: {
            companyName: 'TEST co.ltd',
            businessCategory: '',
          }
        },
        imageName: '',
        imageUrl: '',
        imageFile: '',
        businessCardImage: [],
        register_step2_response_msg: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 20 || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must have 8+ characters',
          v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
          v => /(?=.*\d)/.test(v) || 'Must have one number',
          v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
        ],
        repasswordRules: [
          v => !!v || 'Re-type password is required',
          v => v === this.accountInfo.common.password || 'Different from the above password'
        ],
        mdnRules: [
          v => !!v || 'Phone number is required',
          v => (v && v.length >= 10 && v.length <= 11) || 'Please input valid phone number'
        ],
        inputImgRules: [
          v => !!v || 'Please select your business card',
          v => (v && v.size < 4000000) || 'Image file should be less than 4 MB!'
        ]
      }
    },
    methods: {
      ...mapActions('user', [
          'signup'
      ]),
      onFilePicked(e) {
        this.imageName = ''
        this.imageFile = ''
        this.imageUrl = ''
        this.file_profile_image = null
        this.btn_el3_register_profile_image_disable = true
        if (this.businessCardImage) {
          const files = [this.businessCardImage]
          console.log(files[0])
          if(files[0] !== undefined) {
            this.imageName = files[0].name
            if(this.imageName.lastIndexOf('.') <= 0) {
              return
            }
            const fr = new FileReader ()
            fr.readAsDataURL(files[0])
            fr.addEventListener('load', () => {
              this.imageUrl = fr.result
              this.imageFile = files[0] // this is an image file that can be sent to server...
              this.btn_el3_register_profile_image_disable = false
              this.file_profile_image = this.businessCardImage
            })
          } else {
            this.imageName = ''
            this.imageFile = ''
            this.imageUrl = ''
          }
        }
      },
      submitProfileImage() {
        let formData = new FormData();
        formData.append('file', this.file_profile_image);
        let payload = {
          param: formData,
          cb_res: (result) => {
            this.btn_el3_register_profile_image_disable = false
            if (result.status === 200) {
              this.btn_el3_register_profile_image_disable = true
            } else {
              this.alert_el2_response_fail = true
            }
          },
          cb_error: (error) => {
            this.btn_el2_register = false
            this.alert_el2_response_fail = true
          }
        }
        this.$store.dispatch('user/upload_profile_image', payload)

      },
      proceedRegister(type) {
        if (type === 'startup') {
          this.accountInfo.common.user_type = 2
        } else if(type === 'vc') {
          this.accountInfo.common.user_type = 1
        } else {
          this.accountInfo.common.user_type = 3
        }
        this.registerType = type
        this.e1 = 2
      },
      validate () {
        let result = this.$refs.form.validate()
        if (result) {
          let payload = {
            param: {
              login_key: this.accountInfo.common.id,
              login_value: this.accountInfo.common.password,
              user_type: this.accountInfo.common.user_type,
              name: this.accountInfo.common.name,
              corporation_name: this.accountInfo.specific.companyName,
              email: this.accountInfo.common.email,
              mdn: this.accountInfo.common.mdn,
              address: this.accountInfo.common.address
            },
            cb_res: (result) => {
              this.btn_el2_register = false
              console.log('signup success result: ', JSON.stringify(result))
              if (result.status === 200) {
                this.btn_el2_register = false
                this.e1 = 3
              } else {
                this.alert_el2_response_fail = true
              }
            },
            cb_error: (error) => {
              console.log('signup error: ', error)
              this.btn_el2_register = false
              this.alert_el2_response_fail = true
            }
          }
          this.btn_el2_register = true
          this.$store.dispatch('user/signup', payload)
        }
        console.log('result=', result)
      },
    },
  }
</script>
