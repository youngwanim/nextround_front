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
    headers: get_header_info(),
    extra: {ignore_error : true}
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
  },
  create_portfolio: {
    url: st_config.target_server + '/portfolio/',
    method: 'POST',
    headers: get_header_info()
  },
  get_portfolio_list: {
    url: st_config.target_server + '/portfolio/',
    method: 'GET',
    headers: get_header_info()
  },
  get_portfolio_detail: {
    url: st_config.target_server + '/portfolio/{portfolio_id}',
    method: 'GET',
    headers: get_header_info()
  },
  get_my_portfolio: {
    url: st_config.target_server + '/portfolio/myportfolio',
    method: 'GET',
    headers: get_header_info(),
    extra: {ignore_error : true}
  },
  update_portfolio: {
    url: st_config.target_server + '/portfolio/myportfolio',
    method: 'PUT',
    headers: get_header_info()
  },
  create_tag: {
    url: st_config.target_server + '/portfolio/tags',
    method: 'POST',
    headers: get_header_info()
  },
  get_tag_list: {
    url: st_config.target_server + '/portfolio/tags',
    method: 'GET',
    headers: get_header_info()
  },
  update_tag_list_portfolio_id: {
    url: st_config.target_server + '/portfolio/tags',
    method: 'PUT',
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
