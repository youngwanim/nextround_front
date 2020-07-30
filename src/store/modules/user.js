import Vue from 'vue'
import api from '@/api/api.js'
import router from '@/router'
import VueCookies from "vue-cookies"

Vue.use(VueCookies)

const state = {
  user: {
    name : '',
    corporation_name : '',
    user_type : 2,
    email : '',
    mdn : '',
    profile_image : '',
    address : ''
  }
}

const getters = {
  get_name: state => state.name,
  get_corporation_name: state => state.corporation_name,
  get_email: state => state.email,
  get_mdn: state => state.mdn,
  get_profile_image: state => state.profile_image,
  get_address: state => state.address
}

const mutations = {
  set_user(state, payload) {
    state.user.name = payload.get_name
    state.user.corporation_name = payload.corporation_name
    state.user.email = payload.email
    state.user.mdn = payload.mdn
    state.user.profile_image = payload.profile_image
    state.user.address = payload.address
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
