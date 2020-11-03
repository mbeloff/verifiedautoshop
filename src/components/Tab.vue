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
    service: {
      type: String,
      default: "servicing"
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
