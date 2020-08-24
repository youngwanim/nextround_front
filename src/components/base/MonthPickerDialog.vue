<template>
  <!-- <v-row justify="center"> -->
    <v-dialog
      v-model="dialog"
      max-width="300"
    >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        v-bind="attrs"
        v-on="on"
      >
        {{title}}
      </v-btn>
    </template>
    <v-row justify="space-around">
      <v-date-picker
        v-model="picker"
        type="month"
        locale="ko"
        @change="showthis"
      ></v-date-picker>
    </v-row>
    </v-dialog>
  <!-- </v-row> -->
</template>

<script>
  export default {
    name: 'BaseMonthPickerDialog',
    inheritAttrs: false,
    props: {
      title: String,
    },
    data () {
      return {
        dialog: false,
        picker: new Date().toISOString().substr(0, 7),
      }
    },
    methods: {
      showthis(e) {
        this.dialog = false
        this.$emit('update:month', this.picker)
        console.log('picker:', this.picker)
      }
    }
  }
</script>
