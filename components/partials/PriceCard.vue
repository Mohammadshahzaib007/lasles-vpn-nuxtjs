<template>
  <v-card
    class="mx-auto pb-12"
    max-width="20.625rem"
    height="47.5rem"
    style="display: flex; flex-direction: column; align-items: center; border: 2px solid #DDDDDD; padding-top: 80px;"
  >
    <v-card-title>
      <v-img
        :src="require('@/assets/images/cardImage.png')"
        width="9.0563rem"
        height="10.3356rem"
      />
    </v-card-title>
    <v-card-text
      style="display: flex; flex-direction: column; align-items: center; justify-content: center"
    >
      <p style="font-size: 18px; color: #0B132A; font-weight: 500">
        {{ planType }}
      </p>
      <v-list dense class="px-0 py-0 mx-0 my-0">
        <v-list-item v-for="(item, i) in planList" class="pl-0">
          <v-list-item-icon class="mr-5 mt-3" style="font-size: 0.875rem">
            <v-icon color="#2FAB73">$right2</v-icon>
          </v-list-item-icon>

          <v-list-item-title
            style="color: #4F5665; font-size: 0.875rem; font-weight: 400; line-height: 30px"
            >{{ item }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions
      style="display: flex; flex-direction: column; align-items: center;"
      class="mt-auto"
    >
      <!-- <h2>{{ price }}</h2> -->
      <!-- <h2 style="font-size: 1.5625rem; font-weight: 500; line-height: 30px">
        12$
        <p
          style="color: #4F5665; font-weight: 400; display: inline-block; font-size: 1.5625rem"
        >
          / mo
        </p>
      </h2> -->
      <template v-if="price === 'Free'">
        <h2
          class="mb-5"
          style="font-size: 1.5625rem; font-weight: 500; line-height: 30px"
        >
          Free
        </h2>
      </template>
      <template v-else>
        <h2 style="font-size: 1.5625rem; font-weight: 500; line-height: 30px">
          {{ price }}
          <p
            style="color: #4F5665; font-weight: 400; display: inline-block; font-size: 1.5625rem"
          >
            / mo
          </p>
        </h2>
      </template>
      <!-- {{ price }} -->
      <v-btn
        width="11.1175rem"
        height="2.8125rem"
        rounded
        color="primary"
        outlined
        class="text-capitalize ml-7 py-3 px-11"
        style="font-weight: 700; line-height: 19px"
      >
        Select
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["planList", "planType", "price"]
};
</script>
