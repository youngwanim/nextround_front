// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import CustomIcon from '@/components/icons/nextround.vue'
import {
  VCol,
  VRow,
} from 'vuetify/lib'

const MY_ICONS = {
  nextround: './assets/frog.ico',
}

Vue.use(Vuetify, {
  components: {
    VCol,
    VRow,
  },
})

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#42a5f6',
        secondary: '#050b1f',
        accent: '#204165',
      },
      dark: {},
    },
  },
  icons: {
    values: {
      nextround: {
        component: CustomIcon,
      }
    },
  },
})
