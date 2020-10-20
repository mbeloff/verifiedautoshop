<template>
  <div class="s-page container h-100 d-flex flex-center">
    <div class="d-flex flex-column my-auto py-5">
      <h2 class="mb-3">{{ head }}</h2>
      <p class="underline mb-5">
        {{ message }}
      </p>
      <a
        class="my-2"
        style="font-size: 1.5rem"
        @click="$router.push({ name: 'Home' })"
        ><i class="fal fa-home align-middle mr-2"></i>back home</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    head: String,
    message: String
  },
  mounted() {
    if (!this.$route.params.head) {
      this.$router.push({ name: "404" });
    }
  }
};
</script>

<style scoped lang="scss">
a {
  color: var(--primary);
}
.s-page {
  min-height: 70vh;
}
</style>
