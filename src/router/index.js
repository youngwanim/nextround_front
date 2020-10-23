// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/curation/Index.vue'),
        },
        {
          path: 'portfolio/:id',
          name: 'Portfolio-detail',
          component: () => import('@/views/portfolio/detail.vue'),
          //component: () => import('@/views/sections/PortfolioDetail.vue'),
          props: true,
          meta: { src: require('@/assets/portfolio.png'),
                  authRequired: true},
        },
        {
          path: 'nextround',
          name: 'Next Round',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'portfolio',
          name: 'Portfolio',
          component: () => import('@/views/portfolio/Index.vue'),
          meta: { src: require('@/assets/portfolio.png') },
        },
        {
          path: 'event',
          name: 'Event',
          component: () => import('@/views/event/Index.vue'),
        },
        {
          path: 'signin',
          name: 'Signin',
          component: () => import('@/views/signin/Index.vue'),
        },
        {
          path: 'signup',
          name: 'Signup',
          component: () => import('@/views/signup/Index.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/about/Index.vue'),
          meta: { src: require('@/assets/about.jpg') },
        },
        {
          path: 'contact-us',
          name: 'Contact',
          component: () => import('@/views/contact-us/Index.vue'),
          meta: { src: require('@/assets/contact.jpg') },
        },
        {
          path: 'pro',
          name: 'Pro',
          component: () => import('@/views/pro/Index.vue'),
          meta: { src: require('@/assets/pro.jpg') },
        },
        {
          path: 'msgDialog',
          name: 'msgDialog',
          components : {
            default: () => import('@/views/portfolio/detail.vue'),
            // dialog: MsgDialog
          }
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

router.beforeEach(function (to, from, next) {
  if( to.matched.some((routeInfo) => { return routeInfo.meta.authRequired}) ) {
    // if(process.env.NODE_ENV === 'production'){
    //   let openid = vue.$cookies.get('openid'),
    //     token = vue.$cookies.get('token'),
    //     param = {
    //       open_id: openid || '',
    //       access_token: token || '',
    //     }
    //
    //   if(openid === null || token === null) {
    //     window.location.href = st_config.service_url + '/signin.html'
    //     return
    //   } else {
    //     api.async_call('set_signin_validation', param).then((result) => {
    //       if (result.data.code === 200) {
    //         store.commit('user/set_user', result.data.user)
    //         store.dispatch('receipts/set_default_receipts')
    //         next()
    //       } else {
    //         alert(vue.$ml.get('ERROR.ERROR_UNAUTHORIZED'))
    //       }
    //     }).catch(() => {
    //       alert(vue.$ml.get('ERROR.ERROR_UNAUTHORIZED'))
    //     })
    //   }
    // } else {
    //   vue.$cookies.set('locale', 'en', '', '/')
    //   vue.$cookies.set('i18next', 'en', '', '/')
    //   vue.$cookies.set('openid', 'B3E04A0D4C7E777191C33E62', '', '/')
    //   vue.$cookies.set('token', 'A3CC543D772021F5605D153AD1CEB549EE6CAA4FEF7E3AF4', '', '/')
    //   next()
    // }
    next()
  } else {
    next()
  }
})

export default router
