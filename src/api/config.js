import st_config from '@/config/config.js'
import VueCookies from 'vue-cookies'


export default {
  set_user: {
    url: st_config.target_server + '/users/info',
    method: 'PUT',
    headers: get_header_info()
  },
  validation: {
    url: st_config.target_server + '/users/validation',
    method: 'POST',
    headers: get_header_info()
  },
  signin: {
    url: st_config.target_server + '/users/signin',
    method: 'POST',
    headers: get_header_info()
  },
  signup: {
    url: st_config.target_server + '/users/signup',
    method: 'POST',
    headers: get_header_info()
  },
  check_id_exists: {
    url: st_config.target_server + '/users/id/{login_key}',
    method: 'GET',
    headers: get_header_info()
  },
  upload_businesscard: {
    url: st_config.target_server + '/users/businesscard',
    method: 'POST',
    headers: get_header_info()
  },
  uploadfile: {
    url: st_config.target_server + '/oss/upload' + '?target={target}&object-id={open_id}&media={media}',
    method: 'POST',
    headers: get_header_info()
  }
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
