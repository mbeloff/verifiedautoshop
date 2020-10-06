<template>
  <div>
    <div class="container-fluid">
      <div class="row fp-banner">
        <div class="container h-100 d-flex flex-center">
          <div class="banner-logo d-flex flex-fill my-auto"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-7 col-lg-5 col-xl-4 px-0 mx-auto">
          <img
            src="../assets/afterpay/FB cover photo 03.jpg"
            alt=""
            class="img-fluid mx-auto"
            style="width: 100%; max-width: 100vw"
          />
        </div>
      </div>
    </div>
    <Intro></Intro>

    <Services></Services>

    <Testimonials></Testimonials>
  </div>
</template>

<script>
// @ is an alias to /src
import Services from "@/components/Services.vue";
import Testimonials from "@/components/Testimonials.vue";
import Intro from "@/components/Intro.vue";

export default {
  components: { Services, Testimonials, Intro },
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
  height: 50vh;
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
  height: 50%;
  background-image: url("../assets/logo.svg");
  background-repeat: no-repeat;
  background-position: 50%;
  filter: drop-shadow(4px 6px 5px rgba(33, 33, 37, 0.411)) opacity(0.9);
}
</style>
