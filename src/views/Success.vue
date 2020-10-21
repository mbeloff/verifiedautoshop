<template>
  <div class="s-page container h-100 d-flex flex-center">
    <div class="d-flex flex-column my-auto py-5">
      <h2 class="mb-3">{{ head }}</h2>
      <p class="message mb-5">
        Thanks <span>{{ name }}!</span> {{ message }}
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
    message: String,
    name: String
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

.message {
  span {
    font-variation-settings: "wght" 600;
    color: var(--primary);
    letter-spacing: 1.2;
  }
}
</style>
