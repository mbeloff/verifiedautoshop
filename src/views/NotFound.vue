<template>
  <div class="s-page container h-100 d-flex flex-center">
    <div class="d-flex flex-column my-auto py-5">
      <h2 class="mb-3">Sorry :/</h2>
      <p class="underline mb-5">
        Something went wrong, or the page<br />
        you're looking for is missing <br />
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
