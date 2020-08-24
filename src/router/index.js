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
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'portfolio/:id',
          name: 'Portfolio-detail',
          component: () => import('@/views/portfolio/detail.vue'),
          //component: () => import('@/views/sections/PortfolioDetail.vue'),
          props: true,
          meta: { src: require('@/assets/portfolio.png') },
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
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router
