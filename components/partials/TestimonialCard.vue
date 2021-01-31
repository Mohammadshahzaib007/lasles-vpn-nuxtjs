<template>
  <v-card
    class="mx-auto"
    max-width="25rem"
    height="14.375rem"
    style="border: 2px solid #DDDDDD;"
    elevation="0"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title
          class="headline px-0 py-0 mx-0 my-0"
          style="display: flex; align-items: center"
        >
          <v-avatar class="mr-5">
            <img :src="imgUrl" alt="John" />
          </v-avatar>
          <v-sheet style="display: inline-block" class="px-0 py-0 mx-0 my-0">
            <h2
              class="mb-0 px-0 py-0 "
              style="color: #0B132A; font-weight: 500; font-size: 1.125rem; line-height: 30px; display: inline-block"
            >
              {{ name }}
            </h2>
            <p
              style="font-size: 14px; font-weight: 400; color: #4F5665;"
              class="px-0 py-0 mb-0"
            >
              {{ city }}
            </p>
          </v-sheet>
        </v-list-item-title>
        <v-card-text
        class="px-0 py-0"
          style="font-size: 16px; font-weight: 400; color: #0B132A;"
          >{{ description }}</v-card-text
        >
      </v-list-item-content>

      <v-list-item-avatar tile size="60">
        {{ rating }}<v-icon style="13.23px" color="#FEA250">mdi-star</v-icon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: ["name", "city", "description", "rating", "imgUrl"]
};
</script>

<style scoped></style>
