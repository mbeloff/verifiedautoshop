<template>
  <div>
    <div class="col-12 dark-bg py-2" style="height: 50px">
      <a
        class="btn-close far fa-times float-right p-2 text-white"
        @click="hide()"
      ></a>
      <img src="../assets/logo-sm.svg" alt="" class="h-100" />
    </div>
    <div class="form">
      <iframe
        v-show="submitted"
        src="https://mechanicdesk.com.au/booking_requests/"
        frameborder="0"
        name="mechDesk_iFrame"
        width="100%"
        style="min-height: 775px"
        height="100%"
      ></iframe>
      <form
        v-show="!submitted"
        class="col-12 pt-3 light-bg"
        name="VerifiedQuote"
        method="post"
        ref="theform"
        id="VerifiedQuote"
        action="https://mechanicdesk.com.au/booking_requests/"
        target="mechDesk_iFrame"
        @submit.prevent="submitForm"
      >
        <input
          type="hidden"
          id="subject"
          name="subject"
          :value="'VerifiedAutoshop Enquiry from' + form.name"
        />
        <input
          type="hidden"
          :value="locations[locationIndex].token"
          name="token"
        />
        <input type="hidden" :value="form.name" name="name" />
        <input type="hidden" :value="form.make" name="make" />
        <input type="hidden" :value="form.model" name="model" />
        <input type="hidden" :value="form.year" name="year" />
        <input type="hidden" :value="form.rego" name="registration_number" />
        <input type="hidden" :value="form.number" name="phone" />
        <input type="hidden" :value="form.email" name="email" />
        <input type="hidden" :value="form.comments + carWashStr" name="note" />
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
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="row ">
              <label for="" class="col-12 section-label">Select Location</label>
              <div class="col-12 form-group">
                <select
                  class="form-control"
                  v-model="locationIndex"
                  ref="locSelect"
                  required
                >
                  <option
                    v-for="(location, i) in locations"
                    :key="i"
                    :value="i"
                    >{{ location.city }}</option
                  >
                  <!-- <option value="Brisbane" selected>Brisbane</option>
            <option value="Christchurch">Christchurch</option> -->
                </select>
                <i class="form-icon fal fa-globe"></i>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <label for="" class="section-label">Car Wash</label>
            <div class="row form-group">
              <div class="col-12">
                <div class="col-12 form-control" style="padding-left: 2rem;">
                  <input
                    type="checkbox"
                    class="text-left mr-auto"
                    id="carwashCheck"
                    v-model="carWash"
                    value="add car wash to booking $35"
                  />
                  <label for="carwashCheck" class="ml-2"
                    >Add to booking (+$35)</label
                  >
                </div>
                <i class="form-icon fal fa-car-wash"></i>
              </div>
            </div>
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
              ref="name"
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
          <label class="col-12 section-label" for="">Your Vehicle</label>

          <div class="col-12 col-sm-6 form-group">
            <!-- <label>Vechicle Make</label> -->
            <select class="form-control" v-model="selectedMake">
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
              autocomplete="off"
              aria-label="Vehicle Year"
              placeholder="Vehicle Year"
              v-model="form.year"
              maxlength="4"
              name="vehicle model year"
            />
            <i class="form-icon fal fa-car"></i>
          </div>
          <div class="col-12 col-sm-6 form-group">
            <input
              name="vehicle reg"
              class="form-control"
              type="text"
              aria-label="Vehicle Rego"
              required
              autocomplete="off"
              placeholder="Vehicle Rego"
              maxlength="8"
              v-model="form.rego"
            />
            <i class="form-icon fal fa-car"></i>
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
                :minute-interval="15"
                :hour-range="[[9, 16]]"
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
                :minute-interval="15"
                :hour-range="[[9, 16]]"
                hide-disabled-items
                advanced-keyboard
                v-model="form.pickup_time"
                ><template v-slot:icon>
                  <i class="fal fa-clock time-icon"></i> </template
              ></vue-timepicker>
            </div>
          </div>
        </div>

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
        <div class="row">
          <div
            class="col-12 col-sm-6 ml-auto text-right mt-2 mt-sm-4 order-sm-2"
          >
            <button
              type="submit"
              value="submit"
              class="btn btn-cs btn-rnd btn-prime text-uppercase"
              aria-label="Submit"
            >
              <p class="mb-0">
                <i class="fa fa-paper-plane mr-1 d-inline"></i> Submit
              </p>
            </button>
          </div>
          <div class="col-12 col-sm-6">
            <img
              class="img-fluid form-img"
              src="../assets/afterpay/Afterpay_BookNow_Banner_600x150_White@1x.png"
              alt=""
            />
          </div>
        </div>
      </form>
    </div>
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
      carWash: false,
      carWashStr: "",
      submitted: false,
      locationIndex: 0,
      locations: this.$store.state.global.locations,
      makes: this.$store.state.makes,
      selectedModel: this.$store.state.selectedModel,
      selectedMake: this.$store.state.selectedMake,
      form: this.$store.state.form,
      errors: [],
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
    },
    carWash: function() {
      if (this.carWash == false) {
        this.carWashStr = "";
      } else {
        this.carWashStr = "--- add car wash to booking ($35)";
      }
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },
    submitForm() {
      this.$refs.theform.submit();
      this.submitted = true;
    },
    hide() {
      this.$modal.hide("modal");
      this.$zendesk.show();
      if (this.submitted === true) {
        this.submitted = false;
        this.$router.push({
          name: "Thanks",
          params: {
            head: "Booking request received",
            name: this.form.name.replace(/ .*/, ""),
            message: "We'll be in touch shortly to confirm your booking",
            type: "bookings"
          }
        });
      }
    }
  },
  mounted() {
    this.submitted = false;
    setTimeout(() => {
      this.$refs.name.focus();
    }, 500);
  }
};
</script>

<style lang="scss">
.form {
  max-width: 800px;
  margin: auto;
}

.form-img {
  filter: opacity(0.5);
}

.vue__time-picker .dropdown {
  bottom: 100%;
  height: 11rem;
  top: unset;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  right: calc(0% + 15px);
  left: unset;
  width: calc(100% - 30px);
  padding: 0.25rem 0;
  .select-list {
    height: 10.5rem;
  }
  ul {
    height: 11rem;
  }
  &.drop-down {
    width: calc(100% - 30px) !important;
  }
}

.form .vdp-datepicker__calendar .cell {
  border-radius: 50%;
  width: calc(297px / 7);
  height: calc(297px / 7);
}

.vue__time-picker .dropdown ul li:not([disabled]).active,
.vue__time-picker .dropdown ul li:not([disabled]).active:focus,
.vue__time-picker .dropdown ul li:not([disabled]).active:hover {
  background: var(--primary);
  color: #fff;
}

.form .vdp-datepicker__calendar .cell.selected {
  background: var(--primary);
  color: white;
}

.form .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
.form .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
.form .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
  border: 1px solid var(--primary);
}

.btn-close {
  padding: 0.25rem;
}

.vdp-datepicker__calendar {
  position: absolute;
  z-index: 100;
  background: #fff;
  width: 280px;
  border: 1px solid #ccc;
  bottom: 100%;
  border-radius: 0.25rem;
}
</style>
