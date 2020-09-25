<template>
  <div class="text-left text-white" id="footer">
    <div class="container py-4">
      <div class="row">
        <div class="col-12">
          <img src="../assets/logo-sm.svg" alt="" style="height: 35px;" />
          <a class="ml-2 btn btn-cs btn-prime" @click="show()">BOOK NOW</a>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-sm-6 col-md-4">
          <h6 class="footer-heading"><span>Services</span></h6>
          <ul class="list-unstyled small">
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  hash: '#servicing',
                  params: { sIndex: '0' }
                }"
                >Servicing</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  hash: '#air-con',
                  params: { sIndex: '1' }
                }"
                >Air Conditioning</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  hash: '#diagnostics',
                  params: { sIndex: '2' }
                }"
                >Diagnostics</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  hash: '#auto-electrical',
                  params: { sIndex: '3' }
                }"
                >Auto Electrical</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  hash: '#inspections',
                  params: { sIndex: '4' }
                }"
                >Vehicle Inspections</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  hash: '#brakes-and-suspension',
                  params: { sIndex: '5' }
                }"
                >Brakes & Suspension</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  hash: '#tyres',
                  params: { sIndex: '6' }
                }"
                >Tyres</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  hash: '#paint-and-panel',
                  params: { sIndex: '7' }
                }"
                >Paint & Panel</router-link
              >
            </li>
            <li class="list-item">
              <router-link
                :to="{
                  name: 'Services',
                  hash: '#car-grooming',
                  params: { sIndex: '8' }
                }"
                >Car Grooming</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <h6 class="footer-heading"><span>Information</span></h6>
          <ul class="list-unstyled small">
            <li class="list-item">
              <router-link :to="{ name: 'About' }">About Us</router-link>
            </li>
            <!-- <li class="list-item">FAQ</li> -->
            <li class="list-item">
              <router-link :to="{ name: 'Contact' }">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <h6 class="footer-heading"><span>Contact</span></h6>
          <ul class="list-unstyled small">
            <li class="list-item h5">{{ $store.state.global.phone }}</li>
            <li class="list-item">
              <a :href="`mailto:` + $store.state.global.email">
                {{ $store.state.global.email }}</a
              >
            </li>
            <li class="list-item mt-2">46 Deshon St <br />Woolloongabba</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style scoped lang="scss">
#footer {
  // background: rgb(38, 39, 44);
  background: var(--dark-bg);
  a {
    color: white;
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
        rgba(160, 212, 255, 0.11)
      );
      width: 100%;
      height: 1px;
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
}

.map {
  border-top: 5px solid var(--primary);
}
</style>
