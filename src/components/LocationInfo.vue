<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="row py-5">
          <div class="col-12 ml-auto text-md-left">
            <Title>Brisbane</Title>
            <div class="d-flex align-items-center">
              <p>
                <i class="contact-icon fal fa-location-circle fa-fw fa-2x"></i>
              </p>
              <p class="w-100 ml-4">
                <b>Address:</b><br />46 Deshon St, Woolloongabba <br />QLD 4102
              </p>
            </div>
            <div class="d-flex align-items-center">
              <p>
                <i class="contact-icon fal fa-clock fa-fw fa-2x"></i>
              </p>
              <p class="w-100 ml-4">
                <b>Opening Hours:</b> <br />mon-fri: 8-4 <br />
                sat-sun: closed
              </p>
            </div>

            <div class="d-flex align-items-center">
              <p>
                <i class="contact-icon fal fa-phone-square fa-fw fa-2x"></i>
              </p>
              <p class="w-100 ml-4">
                <b>phone:</b>
                <a :href="` tel:${$store.state.global.phone} `">{{
                  $store.state.global.phone
                }}</a
                ><br /><b>mail: </b>
                <a :href="`mailto:` + $store.state.global.email">
                  {{ $store.state.global.email }}</a
                ><br /><span v-if="$route.name != 'Contact'"
                  ><b>online: </b>
                  <router-link :to="{ name: 'Contact' }"
                    >message us</router-link
                  ></span
                >
              </p>
            </div>
          </div>
          <div class="col-12 mr-auto flex-fill">
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
      <div class="col-12 col-md-6">
        <div class="row  py-5">
          <div class="col-12 ml-auto text-md-left">
            <Title>Christchurch</Title>
            <div class="d-flex align-items-center">
              <p>
                <i class="contact-icon fal fa-location-circle fa-fw fa-2x"></i>
              </p>
              <p class="w-100 ml-4">
                <b>Address:</b><br />135 Ferry Rd, Waltham <br />Christchurch
                8011
              </p>
            </div>
            <div class="d-flex align-items-center">
              <p>
                <i class="contact-icon fal fa-clock fa-fw fa-2x"></i>
              </p>
              <p class="w-100 ml-4">
                <b>Opening Hours:</b> <br />mon-fri: 8-4 <br />
                sat-sun: closed
              </p>
            </div>

            <div class="d-flex align-items-center">
              <p>
                <i class="contact-icon fal fa-phone-square fa-fw fa-2x"></i>
              </p>
              <p class="w-100 ml-4">
                <br /><b>mail: </b>
                <a :href="`mailto:` + $store.state.global.email">
                  {{ $store.state.global.email }}</a
                ><br /><span v-if="$route.name != 'Contact'"
                  ><b>online: </b>
                  <router-link :to="{ name: 'Contact' }"
                    >message us</router-link
                  ></span
                >
              </p>
            </div>
          </div>
          <div class="col-12 mr-auto flex-fill">
            <div class="map h-100 flex-fill">
              <iframe
                class="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.278338294888!2d172.64928531549398!3d-43.53823957912542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3189f453d89e6b%3A0xc948ab86bd8783ff!2s135%20Ferry%20Road%2C%20Waltham%2C%20Christchurch%208011%2C%20New%20Zealand!5e0!3m2!1sen!2sau!4v1602029186190!5m2!1sen!2sau"
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
