<template>
  <div v-if="tabActive" role="tabpanel">
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
      tabActive: true
    };
  }
};
</script>

<style lang="scss"></style>
