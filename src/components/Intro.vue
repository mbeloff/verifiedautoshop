<template>
  <div class="py-5 intro text-center light-bg">
    <div class="container">
      <p class="lead">
        Verified Autoshop is Brisbane's complete auto repair center, offering a
        full range of maintenance and repair services.
      </p>
      <div
        class="my-5 ml-0 mx-md-auto col-12 col-md-12 col-lg-10 col-xl-8 text-md-center"
      >
        <h4 class="color-prime font-italic">We can look at it today!</h4>
        <!-- <ul class="list-unstyled color-light mb-0">
          <li class="list-item text-center">
            <i class="fas fa-check-circle mr-2"></i>
          </li>
          <li class="list-item">
            We're experts in servicing & maintenance, mechanical repairs &
            diagnostics, auto electrics and vehicle inspections.
          </li>
          <li class="list-item text-center">
            <i class="fas fa-check-circle mr-2"></i>
          </li>
          <li class="list-item">
            We have the experience and know-how to service all makes and models.
          </li>
          <li class="list-item text-center">
            <i class="fas fa-check-circle mr-2"></i>
          </li>
          <li class="list-item">
            We're committed to making great service and quality parts
            affordable.
          </li>
        </ul> -->
        <div class="card-grid">
          <div class="card shadow-lg">
            <i class="fas fa-check-circle card-icon"></i>
            <p class="px-2 my-auto">
              We have the experience and know-how to service all makes and
              models.
            </p>
          </div>
          <div class="card shadow-lg">
            <i class="fas fa-check-circle card-icon"></i>
            <p class="px-2 my-auto">
              We're experts in servicing & maintenance, mechanical repairs &
              diagnostics, auto electrics and vehicle inspections.
            </p>
          </div>
          <div class="card shadow-lg">
            <i class="fas fa-check-circle card-icon"></i>
            <p class="px-2 my-auto">
              We're committed to making great service and quality parts
              affordable.
            </p>
          </div>
        </div>
      </div>
      <a @click="show()" class="btn btn-cs btn-outline mt-2">Book Now</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show("modal");
    }
  }
};
</script>

<style lang="scss">
.intro {
  font-size: 1.25rem;
  .lead {
    font-size: 1.5rem;
  }
  .fas {
    font-size: 1.25rem;
    margin-top: 0.75rem;
  }
}

.card-grid {
  font-size: initial;
  display: grid;
  grid-gap: 1rem;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1.2fr 1fr;
    margin-top: 2rem;
    .card {
      &:nth-of-type(2) {
        height: 120%;
        margin-top: -7%;
      }
    }
  }
  .card {
    padding-bottom: 1rem;
  }

  .card-icon {
    margin: 1rem 0;
    &::after {
      position: absolute;
      content: "";
      width: 50%;
      height: 1px;
      // background: var(--primary);
      background-image: linear-gradient(
        to right,
        transparent,
        var(--primary),
        transparent
      );
      left: 25%;
      top: 2.75rem;
    }
  }
}
</style>
