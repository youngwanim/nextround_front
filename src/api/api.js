import Vue from 'vue'
import config from './config.js'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import st_config from '@/config/config.js'

Vue.use(VueCookies)

export default {
  apiHeader() {
    return {
      'content-type': 'Application/json',
      'authorization': 'bearer ' + VueCookies.get('token'),
      'open-id': VueCookies.get('openid')
    }
  },
  formDataHeader() {
    return {
      'content-type': 'multipart/form-data',
      'authorization': 'bearer ' + VueCookies.get('token'),
      'open-id': VueCookies.get('openid')
    }
  },
  async_call(api, param, replace_obj = null) {
    let origin_url = config[api].url,
      vue = new Vue()

    if (replace_obj !== null) {
      for (let key in replace_obj) {
        origin_url = origin_url.replace(key, replace_obj[key])
      }
    }
    return axios({
      method: config[api].method,
      url: origin_url,
      headers: this.apiHeader(),
      data: param || {}
    }).catch((error) => {
      const err = error.response.data

      if (process.env.NODE_ENV === 'production') {
        if (err.code === 401 || err.code === 400) {
          vue.$cookies.remove('openid')
          vue.$cookies.remove('token')
          location.href = st_config.service_url + '/signin.html'
        } else if(err.code === 500) {
          alert(err.message)
        }
      }
    })
  },
  async_call_callback(api, param, replace_obj = null, cb_res = null, cb_error = null, form_data = null) {
    let origin_url = config[api].url,
      header = null

    if (replace_obj !== null) {
      for (let key in replace_obj) {
        origin_url = origin_url.replace(key, replace_obj[key])
      }
    }
    return axios({
      method: config[api].method,
      url: origin_url,
      headers: (form_data ? this.formDataHeader() : this.apiHeader()),
      data: param || {}
    }).then((result) => {
      if (cb_res) {
        cb_res(result)
      }
    }).catch((error) => {
      if (cb_error) {
        cb_error(error)
      }
    })
  },

}
