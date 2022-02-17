<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <picture>
        <source srcset="../assets/sign-banner-c.webp" type="image/webp" />
        <source srcset="../assets/sign-banner-c.jpg" type="image/jpg" />
        <img src="../assets/sign-banner-c.jpg" alt="" class="banner" />
      </picture>
    </div>

    <!-- <div class="container py-5">
      <Title>Locations</Title>
      <p>
        Verified Auto Shop is expanding and currently has 4 locations in
        Australia and New Zealand.
      </p>
    </div> -->
    <Location
      v-for="location in this.$store.state.global.loc"
      :key="location.name"
      :location="location.name.toLowerCase()"
    ></Location>
  </div>
</template>

<script>
import Location from "@/components/Location.vue";
export default {
  components: { Location }
};
</script>

<style lang="scss" scoped>
.banner {
  object-fit: cover;
  min-height: 100px;
  max-height: 300px;
  object-position: center right;
  width: 100%;
}
</style>
