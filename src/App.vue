<template>
  <div id="app">
    <Nav id="nav"></Nav>

    <modal
      name="modal"
      height="auto"
      width="700px"
      :scrollable="true"
      :adaptive="true"
      :clickToClose="false"
      :focusTrap="true"
    >
      <template>
        <EForm></EForm>
      </template>
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
      this.$zendesk.hide();
    }
  }
};
</script>

<style lang="scss">
body,
.vm--container,
.vm--overlay,
* {
  scrollbar-width: thin;
  scrollbar-color: var(--light-color) var(--dark-color);
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-track {
    background: var(--dark-color);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--light-color);
    border: 1px solid var(--dark-color);
    border-radius: 2px;
  }
}

.vm--overlay,
.vm--container {
  overflow: hidden;
  max-width: 100vw;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0 0 0 0;
  --verified: #5077bb;
  --primary: #1b3e9e;
  --secondary: #ff4800;
  --dark-color: #221c1a;
  --light-color: #4d7cff;
  --dark-bg: #201e1e;
}

.color-prime {
  color: var(--primary);
}

.dark-bg {
  background: var(--dark-bg);
}

.light-bg {
  background: #e9ecee;
}

@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@401&display=swap");

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
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4 {
  font-variation-settings: "wght" 600;
  letter-spacing: 0.01px;
}

.vm--modal {
  height: auto !important;
}

//
// Spacing so mobile keyboard doesn't obscure form elements
//
.vm--container.scrollable .vm--modal {
  margin-bottom: 10rem !important;
}

.content {
  a {
    color: #004997;
  }
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
    text-shadow: 0 5px 15px rgba(0, 0, 0, 0.425);
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

//
//
// FORM STYLES
//
//

.check-grid {
  display: grid;
  grid-template-columns: 2rem 1fr;
}

.form > * {
  font-variation-settings: "wght" 300;
}

.form .section-label {
  font-size: 1rem;
  color: var(--primary);
  font-variation-settings: "wght" 400;
}

input.form-control,
textarea.form-control {
  background: rgb(255, 255, 255);
  padding-left: 2.4rem;
  span {
    width: 100%;
  }
}

select.form-control {
  padding-left: 2.1rem;
}

.form-icon,
.date-icon,
.textarea-icon,
.time-icon {
  color: var(--primary);
  transition: transform 0.25s cubic-bezier(0.25, 0.1, 0.74, 2.66);
}

.form-icon,
.textarea-icon {
  position: absolute;
  left: 1.5rem;
}

.date-icon,
.form-icon {
  bottom: 0.7rem;
}

.textarea-icon {
  top: 0.7rem;
}

.form-control,
.input-group {
  &:hover,
  &:focus {
    + .form-icon,
    .date-icon,
    + .textarea-icon {
      transform: scale(1.25);
      color: var(--secondary);
    }
  }
}

.time-picker {
  &:hover,
  &:focus {
    .time-icon {
      transform: scale(1.25);
      color: var(--secondary);
    }
  }
}

textarea::placeholder,
input::placeholder,
select::placeholder {
  color: #808a94;
  // font-weight: 100;
}

.btn-close {
  color: var(--primary);
}

.custom-icon {
  margin-left: 1rem;
  color: var(--primary);
}

.form-control.special-input {
  padding-left: 0.2rem;
}
//
//
// END FORM STYLES
//
//
.long-word {
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
}
</style>
