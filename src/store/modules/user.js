import Vue from 'vue'
import api from '@/api/api.js'
import router from '@/router'
import VueCookies from "vue-cookies"
import st_config from '@/config/config.js'

Vue.use(VueCookies)

const state = {
  user_type : 2,
  name : '',
  corporation_name : '',
  email : '',
  mdn : '',
  profile_image : '',
  business_card : '',
  address : '',
  open_id: '',
  access_token: ''
}

const getters = {
  get_user_type: state => state.user_type,
  get_name: state => state.name,
  get_corporation_name: state => state.corporation_name,
  get_email: state => state.email,
  get_mdn: state => state.mdn,
  get_profile_image: state => state.profile_image,
  get_address: state => state.address
}

const mutations = {
  set_user_info(state, payload) {
    state.user_type = payload.user_type
    state.name = payload.name
    state.corporation_name = payload.corporation_name
    state.email = payload.email
    state.mdn = payload.mdn
    state.profile_image = payload.profile_image
    state.address = payload.address
  },
  set_user_create(state, payload) {
    state.user_type = payload.user_type
    state.name = payload.name
    state.corporation_name = payload.corporation_name
    state.email = payload.email
    state.mdn = payload.mdn
    state.profile_image = payload.profile_image
    state.address = payload.address
    state.business_card = payload.business_card
    state.open_id = payload.open_id
    state.access_token = payload.access_token
  },
  set_user_type(state, payload) {
    state.user_type = payload
  },
  set_user_profile_image(state, payload) {
    state.profile_image = payload
  },
  set_user_business_card(state, payload) {
    state.business_card = payload
  },
  set_user_elements(state, payload) {
    if (payload != null) {
      for (let key in payload) {
        if(state.hasOwnProperty(key)) {
          state[key] = payload[key]
        }
      }
    }
  }
}

const actions = {
  signin(context, payload) {
    let vue = new Vue({})
    let param = {
      id: payload.id,
      password: payload.password
    }

    return api.async_call('set_signin_validation', param).then((result) => {
      if (result.data.code === 200) {
        console.log(result);
        context.commit('set_user', result.data.user)
        vue.$cookies.set('openid', result.data.openid)
        vue.$cookies.set('token', result.data.token)
      }
    })
  },
  set_user(context, payload) {
    let vue = new Vue({}),
      param = {
        open_id: vue.$cookies.get('openid') || '',
        access_token: vue.$cookies.get('token') || '',
      }

    return api.async_call('set_signin_validation', param).then((result) => {
      if (result.data.code === 200) {
        console.log(result);
        context.commit('set_user', result.data.user)
      }
    })
  },
  signup(context, payload) {
    let vue = new Vue({})

    //test for static page without api server operation
    if (st_config.target_server === '') {
      let result = {status: 200}

      payload.cb_res(result)
      return
    }

    return api.async_call_callback('signup', payload.param, null,
      (result) => {
        console.log('response signup: ', result)
        vue.$cookies.set('openid', result.data.user.open_id)
        vue.$cookies.set('token', result.data.user.access_token)
        payload.cb_res(result)
      },
      payload.cb_error
    )
  },
  upload_profile_image(context, payload) {
    return api.async_call_callback('uploadfile',payload.param, null,
      (result) => {
        context.commit('set_user_profile_image', result.data.upload_filename)
        return api.async_call_callback()
        payload.cb_res(result)
      },
      payload.cb_error,
      true
    )
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
