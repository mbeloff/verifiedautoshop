<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <img src="../assets/bmw.png" alt="" class="img-fluid w-100" />
      </div>
    </div>
    <div class="container"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    show() {
      this.$modal.show("modal");
    },
    hide() {
      this.$modal.hide("modal");
    }
  }
};
</script>
<style lang="scss"></style>
