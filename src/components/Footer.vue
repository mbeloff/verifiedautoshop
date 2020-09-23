<template>
  <div class="text-left text-white" id="footer">
    <div class="container py-4">
      <div class="row">
        <div class="col-12">
          <img src="../assets/logo-sm.svg" alt="" style="height: 35px;" />
          <a class="ml-2 btn btn-cs btn-prime" @click="show()">GET A QUOTE</a>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-sm-6 col-md-4">
          <h6>Services</h6>
          <ul class="list-unstyled small">
            <li class="list-item">Servicing</li>
            <li class="list-item">Air Conditioning</li>
            <li class="list-item">Diagnostics</li>
            <li class="list-item">Auto Electrical</li>
            <li class="list-item">Inspections</li>
            <li class="list-item">Brakes and Suspension</li>
            <li class="list-item">Tyres</li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <h6>Information</h6>
          <ul class="list-unstyled small">
            <li class="list-item">About Us</li>
            <li class="list-item">FAQ</li>
            <li class="list-item">Contact</li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <h6>Contact</h6>
          <ul class="list-unstyled small">
            <li class="list-item h5">0424 975 336</li>
            <li class="list-item">
              <a href="mailto:bookings@verifiedautoshop.com"
                >bookings@verifiedautoshop.com</a
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
  background: rgb(38, 39, 44);
  a {
    color: white;
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
