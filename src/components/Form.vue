<template>
  <div class="form">
    <div class="col-12 dark-bg py-2" style="height: 50px">
      <a
        class="btn-close far fa-times float-right p-2 text-white"
        @click="hide()"
      ></a>
      <img src="../assets/logo-sm.svg" alt="" class="h-100" />
    </div>

    <form
      class="col-12 pt-1 pb-3"
      name="VerifiedAutoEnquiry"
      method="post"
      id="VerifiedAutoEnquiry"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <input
        type="text"
        class="invisible py-0"
        name="bot-field"
        style="height: 0"
      />

      <div class="row form-group">
        <label class="col-12 section-label" for="">Your Vehicle</label>

        <div class="col-12 col-md-6 form-group">
          <!-- <label>Vechicle Make</label> -->
          <select class="form-control" v-model="selectedMake" ref="make">
            <option value="Vehicle Make" :key="-1" selected="selected"
              >Vehicle Make</option
            >
            <option v-for="make in makes" :key="make" :value="make">{{
              make.label
            }}</option>
          </select>
          <i class="form-icon fal fa-car"></i>
        </div>
        <div class="col-12 col-md-6 form-group" v-if="selectedMake != -1">
          <!-- <label>Vechicle Model</label> -->
          <select class="form-control" v-model="selectedModel">
            <option :key="-1" value="Vehicle Model" selected="selected"
              >Vehicle Model</option
            >
            <option v-for="option in selectedMake.models" :key="option">{{
              option
            }}</option>
          </select>
          <i class="form-icon fal fa-car"></i>
        </div>
      </div>

      <div class="row">
        <label class="col-12 section-label" for="">Your Details</label>
        <div class="col-md-12 form-group">
          <label class="sr-only">Name</label>

          <input
            class="form-control"
            type="text"
            aria-label="Your name"
            placeholder="Name"
            name="name"
            required
            v-model="form.name"
          />
          <i class="form-icon fal fa-user"></i>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 form-group">
          <label class="sr-only">Phone</label>

          <input
            class="form-control"
            type="tel"
            placeholder="Phone"
            aria-label="Your phone number"
            name="number"
            required
            v-model="form.number"
          /><i class="form-icon fal fa-phone-rotary"></i>
        </div>

        <div class="col-md-6 form-group">
          <label class="sr-only">Email</label>

          <input
            class="form-control"
            type="email"
            placeholder="Email"
            aria-label="Your email address"
            name="email"
            v-model="form.email"
          /><i class="form-icon fal fa-envelope"></i>
        </div>
      </div>
      <div class="row mt-2">
        <label class="col-12" for="contactVia">Preferred Contact:</label>
        <div class="col-12">
          <input
            class="mr-2 ml-2"
            type="checkbox"
            id="usePhone"
            value="Phone"
            v-model="form.contactVia"
          />
          <label for="usePhone">Phone</label>
          <input
            class="mr-2 ml-2"
            type="checkbox"
            id="useEmail"
            value="Email"
            v-model="form.contactVia"
          />
          <label for="useEmail">Email</label>
        </div>
      </div>

      <div class="row">
        <label class="col-12 section-label" for="">Comment/Question</label>
        <div class="col-md-12 form-group g-mb-40">
          <label class="sr-only">Enter additional comments here</label>

          <textarea
            class="form-control"
            rows="4"
            placeholder="Please enter any additional information or requests here ..."
            aria-label="Type your enquiry here"
            name="comment"
            v-model="form.comments"
          ></textarea
          ><i class="form-icon fal fa-comment-alt-lines"></i>
        </div>
      </div>
      <div class="text-right mt-4">
        <button
          type="submit"
          class="btn btn-cs btn-outline text-uppercase"
          aria-label="Submit"
        >
          <p class="mb-0">
            <i class="fa fa-paper-plane mr-1 d-inline"></i> Submit
          </p>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      makes: this.$store.state.makes,
      selectedModel: this.$store.state.selectedModel,
      selectedMake: this.$store.state.selectedMake,
      form: this.$store.state.form
    };
  },
  watch: {
    selectedMake: function() {
      this.form.vehicleMake = this.selectedMake.label;
      this.selectedModel = "Vehicle Model";
    },
    selectedModel: function() {
      this.form.vehicleModel = this.selectedModel;
    }
  },
  methods: {
    hide() {
      this.$store.commit("storeForm", this.form);
      this.$modal.hide("modal");
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "VerifiedAutoEnquiry",
          ...this.form
        })
      })
        .then(() => {
          this.$router.push("success");
          // console.log('success')
          this.$modal.hide("modal");
        })
        .catch(() => {
          this.$router.push("404");
          // console.log('failure')
          this.$modal.hide("modal");
        });
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.make.focus();
    }, 500);
  }
};
</script>

<style lang="scss">
.secondary {
  color: var(--primary);
}

.check-grid {
  display: grid;
  grid-template-columns: 2rem 1fr;
}

.form > * {
  font-variation-settings: "wght" 300;
}

.form .section-label {
  // font-family: Arial;
  // font-weight: unset;
  font-size: 1rem;
  color: var(--primary);
  font-variation-settings: "wght" 400;
}

.form-control {
  background: rgb(255, 255, 255);
  padding-left: 2.4rem !important;
  span {
    width: 100%;
    // padding-right: 4.5rem;
  }
}

select.form-control {
  padding-left: 2.1rem !important;
}

.form-icon {
  position: absolute;
  left: 1.5rem;
  top: 0.7rem;
  color: var(--primary);
  transition: transform 0.25s cubic-bezier(0.25, 0.1, 0.74, 2.66);
}

.form-control:focus + .form-icon,
.form-control:hover + .form-icon {
  transform: scale(1.25);
  color: var(--secondary);
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  height: 100px;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  height: 0;
}
</style>
