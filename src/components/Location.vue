<template>
  <div>
    <div v-if="this.data" class="container py-5">
      <Title>
        Verified Auto Shop
        <span>{{ this.data.name }}</span>
      </Title>
      <hr style="margin: 0 0 0 0" />
      <div class="location-grid">
        <div class="my-4">
          <p class="h2 color-prime mb-1">
            <a :href="` tel:${this.data.phone} `"
              ><i class="fas fa-phone"></i> {{ this.data.phone }}</a
            >
          </p>
          <p>
            <a class="long-word" :href="`mailto:` + this.data.email">{{
              this.data.email
            }}</a>
          </p>
          <p class="mb-1">{{ this.data.street }}</p>
          <p>
            {{ this.data.locality }}, {{ this.data.city }}
            {{ this.data.postcode }}
          </p>

          <p class="mb-0">Mon - Fri: 8am - 4pm</p>
          <p>Sat - Sun: Closed</p>
        </div>
        <div>
          <iframe
            :src="this.data.map"
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
    <div v-else class="container py-5">
      <p>
        Sorry, we couldn't find a location at
        <span class="color-prime">{{ this.$route.fullPath }}</span>
      </p>
      <p class="mb-0">Available locations:</p>
      <ul class="list-unstyled">
        <li v-for="(location, i) in $store.state.global.loc" :key="i">
          <a
            class="font-weight-bold list-item ml-2"
            :href="` /locations/${location.name} `"
            >{{ location.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  jsonld() {
    return this.data.jsonld;
  },
  props: {
    location: String
  },
  data() {
    return {
      data: {}
    };
  },
  methods: {
    getData() {
      this.data = this.$store.state.global.loc[this.location.toLowerCase()];
    }
  },
  created() {
    this.data = this.$store.state.global.loc[this.location.toLowerCase()];
  },
  watch: {
    location: function() {
      this.getData();
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-variation-settings: "wght" 400;

  span {
    font-variation-settings: "wght" 600;
  }
}

.location-grid {
  display: grid;
  grid-template-rows: auto auto;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1.5fr;
  }
}
</style>

>
