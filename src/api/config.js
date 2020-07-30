import st_config from '@/config/config.js'
import VueCookies from 'vue-cookies'


export default {
  get_users: {
    url: st_config.target_server + '/users',
    method: 'get',
    headers: get_header_info()
  },
}

function get_header_info() {
  const header_info = {
    'Accept-Language': VueCookies.get('locale') || VueCookies.get('i18next') || 'zh',
    'content-type': 'Application/json',
    'authorization': 'bearer ' + VueCookies.get('token'),
    'open-id': VueCookies.get('openid'),
    'os-type': '2'
  }
  return header_info;
}
