<template>
  <div class="container-fluid">
    <div class="row">
      <picture>
        <source srcset="../assets/sign-banner-c.webp" type="image/webp" />
        <source srcset="../assets/sign-banner-c.jpg" type="image/jpg" />
        <img src="../assets/sign-banner-c.jpg" alt="" class="banner-img" />
      </picture>
    </div>

    <div class="container py-5">
      <Title>Locations</Title>
      <p>
        Verified Auto Shop is expanding and currently has locations in Brisbane,
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

<style lang="scss" scoped>
.banner-img {
  object-fit: cover;
  min-height: 100px;
  max-height: 300px;
  object-position: center right;
  width: 100%;
}
</style>
