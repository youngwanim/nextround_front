<template>
  <v-app>
    <!-- <home-system-bar /> -->

    <home-app-bar />

    <home-view />

    <home-footer />

    <!-- <home-videointro /> -->
  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',

    components: {
      HomeAppBar: () => import('@/layouts/home/AppBar'),
      HomeFooter: () => import('@/layouts/home/Footer'),
      HomeVideointro: () => import('@/layouts/home/VideoIntro'),
      // HomeSystemBar: () => import('@/layouts/home/SystemBar'),
      HomeView: () => import('@/layouts/home/View'),
    },
  }
</script>
