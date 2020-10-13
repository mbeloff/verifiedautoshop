<template>
  <div class="container-fluid">
    <div class="row">
      <img src="../assets/sign-banner.jpg" alt="" class="banner-img" />
    </div>

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

<style lang="scss">
.banner-img {
  object-fit: cover;
  min-height: 100px;
  max-height: 300px;
  object-position: center right;
  width: 100%;
}
</style>
