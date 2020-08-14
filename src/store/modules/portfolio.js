import Vue from 'vue'
import api from '@/api/api.js'
import router from '@/router'
import VueCookies from "vue-cookies"
import {business_category,
  portfolios_sample,
  portfolio_detail_sample} from './constants.js'

Vue.use(VueCookies)

const state = {
  portfolio_list : [],
  portfolio_selected_list : [],
  portfolio_detail: {},
  portfolio_detail_on_interest: {
    id: 11,
    title: '스타코어',
    description: '',
    thumbnail: '',
    image_url: '',
    image_list: ['','',''],
    ceo: '',
    ir_document: '',
    hompage_link: '',
    found_date: ''
  },
  portfolio_tags: [],
  chip_list: [],
  chip_selected_list: []
}

const getters = {
  get_portfolio_list: state => state.portfolio_list,
  get_portfolio_selected_list: state => state.portfolio_selected_list,
  get_portfolio_detail_on_interest: state => state.portfolio_detail,
  get_chip_list: state => state.chip_list,
  get_chip_selected_list: state => state.chip_slected_list
}

const mutations = {
  set_portfolio_list: (state, payload) => state.portfolio_list = payload,
  set_portfolio_selected_list: (state, payload) => {},
  set_portfolio_detail: (state, payload) => state.portfolio_detail = payload,
  set_chip_list: (state, payload) => state.chip_list = payload,
  set_chip_selected_list: (state, payload) => {}
}

const actions = {
  get_portfolio_overall_list(context, payload) {
    context.commit('set_portfolio_list', portfolios_sample)
    context.commit('set_chip_list', business_category)
    payload.cb_res()
    return
  },
  get_portfolio_detail(context, payload) {
    // just for development
    let target_pf = portfolio_detail_sample[0]
    let chip_list = business_category.filter(element => {
      return target_pf.business_category.includes(element.key)
    })
    let result = {data:{}}
    result.data = portfolio_detail_sample[0]
    context.commit('set_portfolio_detail', portfolio_detail_sample[0])
    result.data['tags'] = chip_list
    payload.cb_res(result)
    return
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
