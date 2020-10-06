<template>
  <div class="s-page container h-100 d-flex flex-center">
    <div class="d-flex flex-column my-auto py-5">
      <h2 class="mb-3">thank you for your enquiry</h2>
      <p class="underline mb-5">
        We'll get back to you <br />
        as soon as we can.
      </p>
      <a class="my-2" style="font-size: 1.5rem" @click="$router.go(-1)"
        ><i class="fal fa-backward align-middle mr-2"></i>go back</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
a {
  color: var(--primary);
}
.s-page {
  min-height: 70vh;
}
</style>
