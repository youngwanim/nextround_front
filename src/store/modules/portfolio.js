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
  portfolio_mine: {},
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
  get_portfolio_detail: state => state.portfolio_detail,
  get_my_portfolio: state => state.portfolio_mine,
  get_chip_list: state => state.chip_list,
  get_chip_selected_list: state => state.chip_slected_list
}

const mutations = {
  set_portfolio_list: (state, payload) => state.portfolio_list = payload,
  set_portfolio_selected_list: (state, payload) => {},
  set_portfolio_detail: (state, payload) => state.portfolio_detail = payload,
  set_my_portfolio: (state, payload) => state.portfolio_mine = payload,
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
    let index = parseInt(payload.param.id)
    console.log('param id for pf detail: ', index)
    console.log('param id type for pf detail: ', (typeof index))
    let target_pf = portfolio_detail_sample[index]
    let chip_list = business_category.filter(element => {
      return target_pf.business_category.includes(element.key)
    })
    let result = {data:{}}
    result.data = target_pf
    context.commit('set_portfolio_detail', target_pf)
    result.data['tags'] = chip_list
    payload.cb_res(result)
    return
  },
  get_portfolio_of_mine(context, payload) {
    let open_id = payload.param.open_id
    let pf_info = portfolio_detail_sample.find(element => {
      return element.open_id === open_id
    })
    if (pf_info) {
      context.commit('set_my_portfolio', pf_info)
      if(payload.cb_res) payload.cb_res(result)
    } else{
      if(payload.cb_error) payload.cb_error(result)
    }
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
