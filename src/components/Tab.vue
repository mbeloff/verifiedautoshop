<template>
  <div v-if="isActive" role="tabpanel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Tab"
    },
    header: {
      type: String,
      default: "Default Header"
    }
  },
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<style lang="scss"></style>
