<template>
  <v-app id="app">
    <navigation />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "../components/HomePage/Navigation.vue";
import Footer from "../components/HomePage/Footer.vue";

export default {
  components: {
    Navigation,
    Footer,
  }
};
</script>

<style lang="scss">
// Global styles
@import "@/assets/main.scss";
</style>
