<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      persistent
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Warning
        </v-card-title>

        <v-card-text>
          {{get_modal_msg}}
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
            @click="proceed"
          >
            예
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'MsgDialog',
    props: {
      id: {
        type: String,
        default: ''
      }
    },
    data () {
      return {

      }
    },
    created() {
      console.log('section msg dialog is loaded')
    },
    computed: {
      ...mapGetters('common', [
        'get_modal_on',
        'get_modal_msg',
        'get_modal_target'
      ]),
      dialog: {
        get: function () {
          return this.get_modal_on
        },
        set: function (newValue) {
          this.$store.commit('common/set_modal_on', newValue)
        }
      }
    },
    methods: {
      ...mapMutations('common', [
        'set_modal_on'
      ]),
      proceed() {
        console.log('target modal:', this.get_modal_target)
        this.$router.push({name: this.get_modal_target})
        this.dialog = false
      }
    },
  }
</script>
