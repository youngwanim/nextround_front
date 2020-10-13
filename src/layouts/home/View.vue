<template>
  <v-main class="pt-0">
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-main>
</template>

<script>
  export default {
    name: 'BaseView',
  }
</script>
