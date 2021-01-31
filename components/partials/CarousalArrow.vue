<template>
  <div class="arrow-container" @click="$emit('onClick')">
    <v-icon size="25" color="#F53838" class="icons-carousal" v-if="left"
      >mdi-arrow-left</v-icon
    >
    <v-icon size="25" color="#F53838" class="icons-carousal" v-if="right"
      >mdi-arrow-right</v-icon
    >
  </div>
</template>

<script>
export default {
  emits: ["onClick"],
  props: ["right", "left"]
};
</script>

<style lang="scss" scoped>
.arrow-container {
  margin-left: 20px;
  margin-top: 33.1px;
  width: 60px;
  height: 60px;
  border: 2px solid #f53838;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f53838;
    cursor:pointer;
    .icons-carousal {
      color: white !important;
    }
  }
}
</style>
