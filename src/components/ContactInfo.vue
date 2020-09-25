<template>
  <div class="container">
    <div class="row  mt-5 py-5">
      <div class="col-12 col-md-6 col-lg-5 ml-auto text-md-left">
        <h1 class="mb-3 font-italic">
          <i class=" fas fa-check-circle mr-2"></i>Contact Info
        </h1>
        <div class="d-flex align-items-center">
          <p>
            <i class="contact-icon fal fa-location-circle fa-fw fa-2x"></i>
          </p>
          <p class="w-100 ml-4">
            <b>Address:</b><br />46 Deshon St, Woolloongabba <br />4102 QLD
          </p>
        </div>
        <div class="d-flex align-items-center">
          <p>
            <i class="contact-icon fal fa-clock fa-fw fa-2x"></i>
          </p>
          <p class="w-100 ml-4">
            <b>Opening Hours:</b> <br />mon-fri: 9-4 <br />
            sat: 9-12 <br />
            sun: closed
          </p>
        </div>

        <div class="d-flex align-items-center">
          <p>
            <i class="contact-icon fal fa-phone-square fa-fw fa-2x"></i>
          </p>
          <p class="w-100 ml-4">
            <b>phone:</b> {{ $store.state.global.phone }}<br /><b>mail: </b>
            <a :href="`mailto:` + $store.state.global.email">
              {{ $store.state.global.email }}</a
            >
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-7 mr-auto flex-fill">
        <div class="map h-100 flex-fill">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.2700604196953!2d153.04182056505752!3d-27.49197543288155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a40d59fd803%3A0xbb2b9652a52d897c!2s46%20Deshon%20St%2C%20Woolloongabba%20QLD%204102!5e0!3m2!1sen!2sau!4v1600750890678!5m2!1sen!2sau"
            width="100%"
            height="100%"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-icon {
  color: var(--primary);
}

@media only screen and (max-width: 320px) {
  p {
    font-size: 0.8rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }
}
</style>
