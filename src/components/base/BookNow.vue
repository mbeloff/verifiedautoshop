<template>
  <a
    tabindex="0"
    role="button"
    @keypress.enter="show()"
    @click="show()"
    class="btn btn-cs btn-rnd mt-2"
    >Book Now <slot></slot
  ></a>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show("modal");
      // this.$zendesk.hide();
    }
  }
};
</script>

<style scoped lang="scss"></style>
