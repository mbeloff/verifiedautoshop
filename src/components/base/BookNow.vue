<template>
  <a
    tabindex="0"
    role="button"
    @keypress.enter="show()"
    @keypress.space="show()"
    @click="show()"
    class="btn btn-cs mt-2"
    >Book Now <slot></slot></a
  >
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show("modal");
      this.$zendesk.hide();
    }
  }
};
</script>

<style></style>
