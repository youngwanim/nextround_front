<template>
  <section id="msg-dialog">
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title class="headline grey lighten-2">
            Warning
          </v-card-title>

          <v-card-text>
            해당 페이지는 로그인이 필요합니다. 로그인을 위해 이동하시겠습니까?
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn
              color="grey"
              text
              @click="dialog = false"
            >
              아니오
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              예
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'SectionMsgDialog',
    props: {
      id: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        dialog: true,
      }
    },
    created() {
      console.log('section msg dialog is loaded')
    }
  }
</script>
