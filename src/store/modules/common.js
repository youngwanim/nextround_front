import Vue from 'vue'
import api from '@/api/api.js'
import router from '@/router'
import VueCookies from "vue-cookies"
import st_config from '@/config/config.js'
import {curation_sample} from './constants.js'

const state = {
  modal_on : false,
  modal_msg : '',
  modal_target : '',
}

const getters = {
  get_modal_on: state => state.modal_on,
  get_modal_msg: state => state.modal_msg,
  get_modal_target: state => state.modal_target
}

const mutations = {
  set_modal_on(state, payload) {
    state.modal_on = payload
  },
  set_modal_msg(state, payload) {
    state.modal_msg = payload
  },
  set_modal_target(state, payload) {
    state.modal_target = payload
  },
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
