import Vue from 'vue'
import api from '@/api/api.js'
import router from '@/router'
import VueCookies from "vue-cookies"
import st_config from '@/config/config.js'
import {curation_sample} from './constants.js'

const state = {
  curation_id : 0,
  create_date: '',
  popup_title : '공지사항',
  popup_description : '',
  popup_background_image : '',
  curation_detail: [],
}

const getters = {
  get_curation_detail: state => state.curation_detail,
  get_popup_title: state => state.popup_title,
  get_popup_description: state => state.popup_description,
  get_popup_background_image: state => state.popup_background_image,
  get_corporation_name: state => state.corporation_name,
}

const mutations = {
  set_curation_detail(state, payload) {
    state.curation_detail = payload
  },
  set_popup_title(state, payload) {
    state.popup_title = payload
  },
  set_popup_description(state, payload) {
    state.popup_description = payload
  },
  set_popup_background_image(state, payload) {
    state.popup_background_image = payload
  },
}

const actions = {
  get_curation_detail(context, payload) {
    context.commit('set_curation_detail', curation_sample)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
