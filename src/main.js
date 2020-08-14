import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins'
import VueVideoPlayer from 'vue-video-player'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import {VueMasonryPlugin} from 'vue-masonry'

import 'video.js/dist/video-js.css'

Vue.config.productionTip = false

Vue.use(VueCookies)
Vue.use(VueVideoPlayer)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
Vue.use(VueMasonryPlugin)
