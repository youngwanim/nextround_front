<template>
  <v-app style="background-color: black">
    <!-- <home-system-bar /> -->

    <home-app-bar />

    <home-view />

    <home-footer />

    <!-- <home-videointro /> -->
    <home-modal />
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
      HomeModal: () => import('@/layouts/home/Modal')
    },
  }
</script>
