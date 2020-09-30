<template>
  <div class="form">
    <form
      class="col-12 pt-3 pb-3"
      name="VerifiedQuote"
      method="post"
      id="VerifiedQuote"
      action="https://mechanicdesk.com.au/booking_requests/"
    >
      <input
        type="hidden"
        name="token"
        value="208c5f70fea76d55514cb31d4799f335353ea6ba"
      />
      <input type="hidden" :value="form.name" name="name" />
      <input type="hidden" :value="form.make" name="make" />
      <input type="hidden" :value="form.model" name="model" />
      <input type="hidden" :value="form.year" name="year" />
      <input type="hidden" :value="form.rego" name="registration_number" />
      <input type="hidden" :value="form.number" name="phone" />
      <input type="hidden" :value="form.email" name="email" />
      <input type="hidden" :value="form.comments" name="note" />
      <input
        type="hidden"
        :value="formatDate(form.pickup) + ' ' + form.pickup_time"
        name="pickup_time"
      />
      <input
        type="hidden"
        :value="formatDate(form.dropoff) + ' ' + form.dropoff_time"
        name="drop_off_time"
      />
      <div class="row form-group">
        <label class="col-12 section-label" for="">Your Vehicle</label>

        <div class="col-12 col-sm-6 form-group">
          <!-- <label>Vechicle Make</label> -->
          <select
            class="form-control"
            v-model="selectedMake"
            ref="make"
            required
          >
            <option value="Vehicle Make" :key="-1" selected disabled
              >Vehicle Make</option
            >
            <option v-for="(make, i) in makes" :key="i" :value="make">{{
              make.label
            }}</option>
          </select>
          <i class="form-icon fal fa-car"></i>
        </div>
        <div class="col-12 col-sm-6 form-group">
          <select class="form-control" v-model="selectedModel" required>
            <option :key="-1" value="Vehicle Model" selected disabled
              >Vehicle Model</option
            >
            <option v-for="(option, i) in selectedMake.models" :key="i">{{
              option
            }}</option>
          </select>
          <i class="form-icon fal fa-car"></i>
        </div>
        <div class="col-12 col-sm-6 form-group">
          <input
            class="form-control"
            type="text"
            aria-label="Vehicle Year"
            placeholder="Vehicle Year"
            v-model="form.year"
            maxlength="4"
          />
          <i class="form-icon fal fa-car"></i>
        </div>
        <div class="col-12 col-sm-6 form-group">
          <input
            class="form-control"
            type="text"
            aria-label="Vehicle Rego"
            placeholder="Vehicle Rego"
            maxlength="8"
            v-model="form.rego"
          />
          <i class="form-icon fal fa-car"></i>
        </div>
      </div>

      <div class="row form-group">
        <label class="col-12 section-label" for="">Your Details</label>
        <div class="col-md-12 form-group">
          <label class="sr-only">Name</label>

          <input
            class="form-control"
            type="text"
            aria-label="Your name"
            placeholder="Name"
            required
            v-model="form.name"
          />
          <i class="form-icon fal fa-user"></i>
        </div>
        <div class="col-sm-6 form-group">
          <label class="sr-only">Phone</label>

          <input
            class="form-control"
            type="tel"
            placeholder="Phone"
            aria-label="Your phone number"
            required
            v-model="form.number"
          /><i class="form-icon fal fa-phone-rotary"></i>
        </div>

        <div class="col-sm-6 form-group">
          <label class="sr-only">Email</label>

          <input
            class="form-control"
            type="email"
            placeholder="Email"
            aria-label="Your email address"
            v-model="form.email"
          /><i class="form-icon fal fa-envelope"></i>
        </div>
      </div>

      <div class="row form-group">
        <div class="col-sm-6">
          <label class="section-label" for="drop">Dropoff Time</label>
          <div class="row form-group">
            <datepicker
              class="col-7"
              :bootstrap-styling="true"
              :calendar-button="true"
              calendar-button-icon="fal fa-calendar date-icon"
              :format="formatDate"
              v-model="form.dropoff"
              input-class="special-input"
              name="drop"
              :disabled-dates="datepicker.disabledDropoff"
            ></datepicker>
            <!-- <i class="form-icon fal fa-calendar"></i> -->
            <vue-timepicker
              class="col-5"
              hide-clear-button
              input-width="100%"
              format="HH:mm"
              hour-label="hour"
              minute-label="min"
              input-class="form-control"
              :minute-interval="10"
              :hour-range="[[8, 17]]"
              hide-disabled-items
              advanced-keyboard
              v-model="form.dropoff_time"
              ><template v-slot:icon>
                <i class="fal fa-clock time-icon"></i> </template
            ></vue-timepicker>
          </div>
        </div>
        <div class="col-sm-6">
          <label class="section-label" for="pick">Collect Time</label>
          <div class="row form-group">
            <datepicker
              class="col-7"
              :bootstrap-styling="true"
              :calendar-button="true"
              input-class="special-input"
              calendar-button-icon="fal fa-calendar date-icon"
              :format="formatDate"
              v-model="form.pickup"
              name="pick"
              :disabled-dates="datepicker.disabledPickup"
            ></datepicker>
            <vue-timepicker
              class="col-5"
              hide-clear-button
              input-width="100%"
              format="HH:mm"
              hour-label="hour"
              minute-label="min"
              input-class="form-control"
              :minute-interval="10"
              :hour-range="[[8, 17]]"
              hide-disabled-items
              advanced-keyboard
              v-model="form.pickup_time"
              ><template v-slot:icon>
                <i class="fal fa-clock time-icon"></i> </template
            ></vue-timepicker>
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-12 col-sm-6">
          <div class="form-group">
            <select
              class="form-control"
              name="topic"
              id="topic"
              v-model="form.typeOfEnquiry"
            >
              <option value="Type of Enquiry" disabled selected
                >Type of Enquiry</option
              >
              <option value="Servicing">Servicing</option>
              <option value="Repair">Repair</option>
              <option value="Diagnostics">Diagnostics</option>
              <option value="Inspection">Inspection</option>
              <option value="Tyres">Tyres</option>
              <option value="Paint/Panel">Paint/Panel</option>
              <option value="Grooming">Grooming</option>
              <option value="Other">Other - Detail Below</option>
            </select>
            <i class="form-icon fal fa-clipboard-list-check"></i>
          </div>
        </div>
      </div> -->

      <div class="row">
        <label class="col-12 section-label" for=""
          >Additional Comments/Questions...</label
        >
        <div class="col-md-12 form-group g-mb-40">
          <textarea
            class="form-control"
            rows="4"
            placeholder="Outline any work required, or issues you are having with your vehicle ..."
            aria-label="Type your enquiry here"
            name="comment"
            v-model="form.comments"
          ></textarea
          ><i class="textarea-icon fal fa-comment-alt-lines"></i>
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
import Datepicker from "vuejs-datepicker";
import moment from "moment";
// Main JS (in UMD format)
import VueTimepicker from "vue2-timepicker";

// CSS
import "vue2-timepicker/dist/VueTimepicker.css";
export default {
  components: {
    Datepicker,
    VueTimepicker
  },
  data() {
    return {
      makes: this.$store.state.makes,
      selectedModel: this.$store.state.selectedModel,
      selectedMake: this.$store.state.selectedMake,
      form: this.$store.state.form,
      datepicker: {
        disabledDropoff: {
          to: new Date()
        },
        disabledPickup: {
          to: new Date()
        }
      }
    };
  },
  watch: {
    selectedMake: function() {
      this.form.make = this.selectedMake.label;
      this.selectedModel = "Vehicle Model";
    },
    selectedModel: function() {
      this.form.model = this.selectedModel;
    },
    "form.dropoff": function() {
      this.form.pickup = this.form.dropoff;
      this.datepicker.disabledPickup.to = this.form.dropoff;
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },
    hide() {
      this.$store.commit("storeForm", this.form);
      this.$modal.hide("modal");
      // this.$store.commit("modalStatus");
    }
    // encode(data) {
    //   return Object.keys(data)
    //     .map(
    //       key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    //     )
    //     .join("&");
    // },
    // handleSubmit() {
    //   fetch("/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: this.encode({
    //       "form-name": "VerifiedQuote",
    //       ...this.form
    //     })
    //   })
    //     .then(() => {
    //       this.$router.push("success");
    //       // console.log('success')
    //       this.$modal.hide("modal");
    //     })
    //     .catch(() => {
    //       this.$router.push("404");
    //       // console.log('failure')
    //       this.$modal.hide("modal");
    //     });
    // }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.make.focus();
    }, 500);
    this.$store.commit("modalStatus");
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

.form-icon {
  position: absolute;
  left: 1.5rem;

  &:not(.textarea-icon) {
    bottom: 0.7rem;
  }
}

.date-icon {
  bottom: 0.7rem;
}

.textarea-icon {
  position: absolute;
  left: 1.5rem;
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  height: 100px;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0;
}

.custom-icon {
  margin-left: 1rem;
  color: var(--primary);
}

.form-control.special-input {
  padding-left: 0.2rem;
}
</style>
