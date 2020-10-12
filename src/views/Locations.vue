<template>
  <div class="">
    <div class="container py-5">
      <Title>Locations</Title>
      <p>
        Verified Autoshop is expanding and currently has locations in Brisbane,
        Australia and Christchuch, New Zealand.
      </p>
    </div>
    <LocationInfo></LocationInfo>
  </div>
</template>

<script>
import LocationInfo from "@/components/LocationInfo.vue";
export default {
  components: { LocationInfo }
};
</script>

<style></style>
