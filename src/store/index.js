import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import portfolio from './modules/portfolio'
import curation from './modules/curation'
import common from './modules/common'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
})

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  modules: {
    user,
    portfolio,
    curation,
    common
  }
})
