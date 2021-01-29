<template>
  <v-app>
    <navigation />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '../components/HomePage/Navigation.vue'

export default {
  components: {
    Navigation,
  }
};
</script>

<style lang="scss">
// Global styles
@import "@/assets/main.scss";
</style>
