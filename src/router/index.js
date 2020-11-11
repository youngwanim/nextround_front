// Imports
import Vue from 'vue'
import Router from 'vue-router'
import api from '@/api/api.js'
import st_config from '@/config/config.js'
import VueCookies from 'vue-cookies'
import store from '@/store'
import language from '@/assets/language/ko.js'

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
        // {
        //   path: 'msg',
        //   name: 'Msg',
        //   components : {
        //     dialog: () => import('@/views/dialog/index.vue'),
        //     default: () => import('@/views/portfolio/Index.vue'),
        //     // default: () => import('@/views/dialog/index.vue'),
        //   }
        // },
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
    // check validation
    store.dispatch('user/validation', {
      cb_res: (result) => {
        // check user's auth_type and target instance's
        // if not allowed, modal msg and state should be changed
        next()
      },
      cb_error: (error) => {
        // open dialog
        console.log('user validation failed and go msg')
        store.commit('common/set_modal_msg', language.COMMON.NEED_AUTH)
        store.commit('common/set_modal_target', 'Signin')
        store.commit('common/set_modal_on', true)
      }
    })
  } else {
    next()
  }
})

export default router
