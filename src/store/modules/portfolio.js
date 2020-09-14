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
  get_chip_selected_list: state => state.chip_slected_list,
  get_my_company_data: state => {
    if ('id' in state.portfolio_mine) {
      return state.portfolio_mine
    } else {
      return {}
    }
  }
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
    console.log('get_portfolio_of_mine result: ', payload)
    let open_id = payload.param.open_id
    let pf_info = portfolio_detail_sample.find(element => {
      return element.open_id === open_id
    })
    if (pf_info) {
      function getAttr(obj, attr) {
        if (attr in obj) {
          return obj[attr]
        } else {
          if (attr.indexOf('title') > -1 || attr.indexOf('description') > -1){
            return ''
          } else if (attr.indexOf('image') > -1){
            return []
          } else {
            return null
          }
        }
      }
      let pf_edit_data = {
        id: pf_info.id,
        image_url: pf_info.image_url,
        image_url_index: 0,
        business_category: [],
        //open_id: '',
        companyData: {
          auth_type: getAttr(pf_info, 'auth_type'),
          title: getAttr(pf_info, 'title'),
          sub_title: getAttr(pf_info, 'sub_title'),
          description: getAttr(pf_info, 'description'),
          image_list: getAttr(pf_info, 'image_list'),
        },
        product: {
          auth_type: getAttr(pf_info, 'product_auth_type'),
          title: getAttr(pf_info, 'product_title'),
          sub_title: getAttr(pf_info, 'product_subtitle'),
          description: getAttr(pf_info, 'product_introduce'),
          image_list: getAttr(pf_info, 'product_image'),
        },
        team: {
          auth_type: getAttr(pf_info, 'team_auth_type'),
          title: getAttr(pf_info, 'team_title'),
          sub_title: getAttr(pf_info, 'team_subtitle'),
          description: getAttr(pf_info, 'team_introduce'),
          image_list: getAttr(pf_info, 'team_image'),
        },
        ceo: {
          auth_type: getAttr(pf_info, 'ceo_auth_type'),
          title: getAttr(pf_info, 'ceo'),
          sub_title: getAttr(pf_info, 'ceo_subtitle'),
          description: getAttr(pf_info, 'ceo_introduce'),
          image_list: getAttr(pf_info, 'ceo_image'),
        },
        ir: {
          auth_type: getAttr(pf_info, 'ir_auth_type'),
          file: getAttr(pf_info, 'ir_file'),
        },
      }
      context.commit('set_my_portfolio', pf_edit_data)
      if(payload.cb_res) payload.cb_res(pf_edit_data)
    } else{
      if(payload.cb_error) payload.cb_error()
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
