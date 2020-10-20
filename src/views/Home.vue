<template>
  <div>
    <div class="container-fluid position-relative">
      <div class="row fp-banner position-aboslute">
        <picture>
          <source srcset="../assets/bmw2.webp" type="image/webp" />
          <source srcset="../assets/bmw2.jpg" type="image/jpg" />
          <img
            src="../assets/bmw2.jpg"
            alt=""
            class="mx-auto position-absolute banner-img"
          />
        </picture>
      </div>
      <div class="position-absolute w-100 h-100" style="top: 0; left: 0;">
        <picture class="d-flex flex-center w-100 h-100">
          <img
            src="../assets/logo-sm.svg"
            alt="Alt Text!"
            class="img-fluid mx-auto w-100 banner-logo"
          />
        </picture>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-5 col-xl-4 px-0 mx-auto">
          <picture>
            <source
              srcset="../assets/afterpay/FB-cover-photo-03.webp"
              type="image/webp"
            />
            <source
              srcset="../assets/afterpay/FB-cover-photo-03.jpg"
              type="image/jpeg"
            />
            <img
              src="../assets/afterpay/FB-cover-photo-03.jpg"
              alt="Alt Text!"
              class="img-fluid mx-auto"
              style="width: 100%; max-width: 100vw"
            />
          </picture>
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
      this.$zendesk.hide();
    }
  },
  created() {
    if (this.$route.name === "Quote") {
      console.log("on quote route");
      this.show();
    } else {
      console.log("not quote route");
    }
  }
};
</script>
<style lang="scss">
.fp-banner {
  height: 50vh;
  min-height: 250px;
  max-height: 350px;
}

.fa-check-circle {
  color: var(--verified);
}

.banner-img {
  height: 100%;
  width: 100%;
  max-width: 100vw;
  object-fit: cover;
}

.banner-logo {
  max-width: 500px;
  filter: drop-shadow(4px 6px 5px rgba(33, 33, 37, 0.411)) opacity(0.9);
  @media only screen and (max-width: 546px) {
    max-width: 90vw;
  }
}
</style>
