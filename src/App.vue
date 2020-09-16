<template>
  <div id="app">
    <Nav id="nav"></Nav>
    <modal
      name="modal"
      height="auto"
      :scrollable="true"
      :adaptive="true"
      :clickToClose="false"
      :focusTrap="true"
    >
      <standard-form></standard-form>
    </modal>
    <div class="content">
      <router-view />
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import StandardForm from "@/components/StandardForm.vue";

export default {
  components: { Nav, Footer, StandardForm },
  methods: {
    show() {
      this.$modal.show("modal");
    },
    hide() {
      this.$modal.hide("modal");
    }
  },
  mount() {
    this.show();
  }
};
</script>

<style lang="scss">
body {
  margin: 0 0 0 0;
  --verified: rgb(31, 107, 250);
  --primary: #4400b1;
  --secondary: #691035;
  --dark-color: #6d3e2c;
  --light-color: #5d47dd;
  --dark-bg: #201e1e;
}

@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

.vm--modal {
  height: auto !important;
}

#app {
  min-height: 100vh;
  font-family: "Rubik", Helvetica, Arial, sans-serif;
  font-variation-settings: "wght" 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

#nav {
  height: 100px;
}

.content {
  // padding-top: 100px;
}

.btn {
  &.btn-cs {
    padding: 0.5rem 2rem;
    font-size: 0.75rem;
    border-radius: 0;
  }
  &.btn-grad {
    color: white !important;
    background-image: linear-gradient(
      15deg,
      var(--primary) 40%,
      var(--light-color)
    );
    background-size: 300%;
    background-position: 50%;
    border: 1px solid var(--primary);
    transition: background-position 0.15s ease-in-out;
    &:hover {
      background-position: 100%;
      color: white;
      border: 1px solid var(--primary);
    }
  }
}
</style>
