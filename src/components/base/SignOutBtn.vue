<template>
  <v-dialog v-model="dialog" width="300" transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        v-bind="attrs"
        v-on="on"
      >
        LOG OUT
      </v-btn>
    </template>
    <v-card>
        <v-card-title class="headline primary white--text">
          로그 아웃
        </v-card-title>

        <v-card-text class="pt-4">
          확인 버튼을 누르면 로그아웃 상태가 됩니다. 진행하시겠습니까?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="signOut"
          >
            확인
          </v-btn>
          <v-btn
            color="grey"
            text
            @click="dialog = false"
          >
            취소
          </v-btn>
        </v-card-actions>
      </v-card>
 </v-dialog>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'BaseSignOutBtn',
    data() {
      return {
        dialog: false
      }
    },
    methods: {
      ...mapActions('user', [
        'signout'
      ]),
      signOut() {
        let payload = {
          cb_res : (result) => {
            this.dialog = false
          },
          cb_error : (error) => {
            alert('죄송합니다. 오류가 발생하였으니 다시 시도해주시기 바랍니다.')
          }
        }
        this.$store.dispatch('user/signout', payload)
      }
    }
  }
</script>
