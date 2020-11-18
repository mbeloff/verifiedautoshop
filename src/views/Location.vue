<template>
  <div>
    <Location :location="this.$route.params.location"></Location>
    <Services></Services>
  </div>
</template>

<script>
import Location from "@/components/Location.vue";
import Services from "@/components/Services.vue";
export default {
  components: { Location, Services },
};
</script>

<style lang="scss" scoped></style>
