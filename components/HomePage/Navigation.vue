<template>
  <v-app-bar color="white" flat app absolute class="mt-8">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-img
            :src="require('@/assets/images/logo.png')"
            width="148px"
            height="36.23px"
          />
        </v-col>
        <v-col cols="7" class="d-flex justify-center align-center pr-10">
          <v-btn
            text
            color="#4F5665"
            class="text-capitalize"
            style="font-weight: 400; cursor: pointer"
            v-for="navigationName in navigationNames"
            :key="navigationName"
          >
            {{ navigationName }}
          </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn
            text
            color="#0B132A"
            class="text-capitalize"
            style="font-weight: 500; line-height: 19px"
          >
            Sign In
          </v-btn>
          <v-btn
            rounded
            color="primary"
            outlined
            class="text-capitalize ml-7 py-3 px-11 btn-nav"
            style="font-weight: 500; line-height: 19px"
          >
            Sign Up
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      navigationNames: ["About", "Features", "Pricing", "Testimonials", "Help"]
    };
  }
};
</script>

<style lang="scss" scoped>
.btn-nav {
  &:hover {
    color: #fff !important;
    background: #f53838;
    box-shadow: 0px 20px 40px rgba(245, 56, 56, 0.35) !important;
  }
}
</style>
