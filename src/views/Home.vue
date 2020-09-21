<template>
  <div>
    <div class="container-fluid">
      <div class="row fp-banner">
        <div class="container h-100 d-flex flex-center">
          <div class="banner-logo d-flex flex-fill my-auto"></div>
        </div>
      </div>
    </div>

    <Services></Services>

    <Testimonials></Testimonials>
  </div>
</template>

<script>
// @ is an alias to /src
import Services from "@/components/Services.vue";
import Testimonials from "@/components/Testimonials.vue";
export default {
  components: { Services, Testimonials },
  name: "Home",
  methods: {
    show() {
      this.$modal.show("modal");
    },
    hide() {
      this.$modal.hide("modal");
    }
  }
};
</script>
<style lang="scss">
.fp-banner {
  height: 25vh;
  min-height: 250px;
  max-height: 350px;
  // overflow: hidden;
  background-image: url("../assets/bmw2.jpg");
  background-size: cover;
  background-position: 50%;
}

.fa-check-circle {
  color: var(--verified);
}

.banner-logo {
  height: 80%;
  background-image: url("../assets/logo.svg");
  background-repeat: no-repeat;
  background-position: 50%;
}
</style>
