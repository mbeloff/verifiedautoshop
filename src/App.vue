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
      <EForm></EForm>
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
import EForm from "@/components/Form.vue";

export default {
  components: { Nav, Footer, EForm },
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
html {
  scroll-behavior: smooth;
}
body {
  margin: 0 0 0 0;
  --verified: #5077bb;
  --primary: #1b3e9e;
  --secondary: #ff0000;
  --dark-color: #221c1a;
  --light-color: #4d7cff;
  --dark-bg: #201e1e;
}

.color-prime {
  color: var(--primary);
}

.bg-prime {
  background: var(--primary);
}

.dark-bg {
  background: var(--dark-bg);
}

.light-bg {
  background: #e9ecee;
}

@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@401&display=swap");

.vm--modal {
  height: auto !important;
}

#app {
  min-height: 100vh;
  font-family: "Rubik", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-variation-settings: "wght" 400;
  text-align: left;
  color: #262f38;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

h1,
h2,
h3,
h4 {
  font-variation-settings: "wght" 600;
  letter-spacing: 0.01px;
}

#nav {
  height: 100px;
}

.fa-check-circle {
  color: var(--verified);
}



.btn {
  &.btn-cs {
    padding: 0.5rem 2rem;
    // font-size: 0.75rem;
    border-radius: 0;
    text-transform: uppercase;
    box-shadow: 0rem 0rem 2rem #0044ff1c;
    &:hover {
      box-shadow: 0rem 0rem 2rem #6589ff21;
    }
  }
  &.btn-outline {
    border: 1px solid var(--primary);
    color: var(--primary);

    &:hover {
      color: white;
      border: 1px solid var(--light-color);
      background-image: linear-gradient(
        15deg,
        var(--primary) 40%,
        var(--light-color)
      );
    }
  }
  &.btn-prime {
    color: white !important;
    background-image: linear-gradient(
      15deg,
      var(--primary) 40%,
      var(--light-color)
    );
    background-size: 300%;
    background-position: 50%;
    border: none;
    transition: background-position 0.15s ease-in-out;
    &:hover {
      background-position: 100%;
      color: white;
      border: none;
    }
  }
}

.map {
  border: 1px solid rgb(199, 196, 196);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
</style>
