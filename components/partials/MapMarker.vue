<template>
  <div class="marker">
    <div class="marker-outline">
      <div class="marker-outline-circle"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.marker {
  width: 43.39px;
  height: 43.39px;
  background: #fff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &-outline {
    width: 35.71px;
    height: 35.71px;
    border-radius: 100%;
    border: 2px solid #f53838;
    display: flex;
    align-items: center;
    justify-content: center;
    &-circle {
      width: 15.65px;
      height: 15.65px;
      border-radius: 100%;
      background: #f53838;
    }
  }
}
</style>
