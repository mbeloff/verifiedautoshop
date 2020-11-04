<template>
  <div class="text-left text-white" id="footer">
    <div class="container-fluid" style="background: #212338">
      <div class="row light-bg py-3">
        <div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-2 mx-auto">
          <picture>
            <source srcset="../assets/mta-qld.webp" type="image/webp" />
            <source srcset="../assets/mta-qld.png" type="image/jpeg" />
            <img
              src="../assets/mta-qld.png"
              width="500px"
              height="260px"
              alt=""
              class="img-fluid"
            />
          </picture>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-5 col-xl-3 mx-auto">
          <picture>
            <source srcset="../assets/afterpay/AP_FB2.webp" type="image/webp" />
            <source srcset="../assets/afterpay/AP_FB2.jpg" type="image/jpeg" />
            <img
              src="../assets/afterpay/AP_FB2.jpg"
              width="851px"
              height="315px"
              alt=""
              class="img-fluid"
            />
          </picture>
        </div>
      </div>
    </div>
    <div class="container py-4">
      <div class="row">
        <div class="col-12">
          <img
            src="../assets/logo-sm.svg"
            alt=""
            style="height: 40px;"
            class="mt-3"
          />
          <BookNow class="btn-prime ml-md-3 mt-3"
            ><i class="fas fa-comment-alt-lines fa-fw ml-1"></i
          ></BookNow>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-sm-6 col-md-4 d-none d-md-block">
          <p class="footer-heading"><span>Services</span></p>
          <ul class="list-unstyled">
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  params: { service: 'servicing' }
                }"
                >Servicing</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  params: { service: 'air-con' }
                }"
                >Air Conditioning</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  params: { service: 'diagnostics' }
                }"
                >Diagnostics</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  params: {
                    service: 'auto-electrical'
                  }
                }"
                >Auto Electrical</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  params: { service: 'inspections' }
                }"
                >Vehicle Inspections</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  params: {
                    service: 'brakes-and-suspension'
                  }
                }"
                >Brakes & Suspension</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  params: { service: 'tyres' }
                }"
                >Tyres</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  params: {
                    service: 'paint-and-panel'
                  }
                }"
                >Paint & Panel</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  params: { service: 'car-wash' }
                }"
                >Car Grooming</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <p class="footer-heading"><span>Quick Links</span></p>
          <ul class="list-unstyled quick-links">
            <li class="list-item">
              <router-link :to="{ name: 'Home', hash: '' }">Home</router-link>
            </li>
            <li class="list-item">
              <router-link
                :to="{ name: 'Services', params: { service: 'servicing' } }"
                >Services</router-link
              >
            </li>
            <li class="list-item">
              <router-link :to="{ name: 'Locations', hash: '' }"
                >Locations</router-link
              >
            </li>
            <li class="list-item">
              <router-link :to="{ name: 'Contact', hash: '#' }"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <ul class="list-unstyled text-muted">
            <li
              class="list-item mb-4"
              v-for="(location, i) in $store.state.global.loc"
              :key="i"
            >
              <p class="mb-2 font-weight-bold">
                Verified Auto Shop {{ location.name }}
              </p>
              <a class="h4" :href="` tel:${location.phone} `"
                ><i class="fas fa-phone mr-2 color-prime"></i
                >{{ location.phone }}</a
              ><br />
              <p class="mb-0 ">
                {{ location.street }} <br />{{ location.locality }},
                {{ location.postcode }} <br />
                mon-fri: 8am - 4 pm
              </p>
            </li>
            <li class="list-item mb-4">
              <i class="fas fa-envelope mr-2 color-prime"></i>
              <a
                class="long-word"
                :href="`mailto:` + $store.state.global.email"
              >
                {{ $store.state.global.email }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#footer {
  background: var(--dark-bg);
  a {
    color: white;
  }
  .btn {
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
}

.footer-heading {
  span {
    position: relative;
    &::after {
      position: absolute;
      bottom: -2px;
      left: 0;
      content: "";
      background-image: linear-gradient(
        to right,
        rgb(0, 81, 255),
        rgba(160, 212, 255, 0)
      );
      width: 100%;
      height: 3px;
      clip-path: polygon(100% 0, 0 0, 0 100%);
    }
  }
}

.brand {
  color: rgb(148, 134, 137);
  font-variation-settings: "wght" 350;
}

.list-item {
  font-weight: normal;
  font-variation-settings: "wght" 100;
  margin: 0.5rem 0;
  font-size: 1rem;
}

.text-muted {
  color: rgb(163, 163, 163) !important;
}

.map {
  border-top: 5px solid var(--primary);
}

.footer-heading {
  font-size: 2rem;
}
</style>
