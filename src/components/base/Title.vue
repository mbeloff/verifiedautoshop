<template>
  <h1 class="mb-3 font-italic">
    <i class="fas fa-check-circle mr-2"></i><slot></slot>
  </h1>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
h1 {
  // text-transform: uppercase;
  font-size: calc(25px + (35 - 25) * ((100vw - 300px) / (1600 - 300)));
}
</style>
