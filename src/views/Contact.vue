<template>
  <div class="h-100 mt-5">
    <div class="container">
      <div style="padding: 5rem 0;">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-5">
            <h2 class="title">Got a question?</h2>
            <p>
              Please use this form to make a general enquiry.
            </p>
            <p>
              If you'd like to get a quote instead -
              <a href="javascript:void(0)" @click="show()">click here</a>
            </p>
          </div>
          <div class="col-12 col-md-6 col-lg-7 form">
            <form
              name="VerifiedEnquiry"
              method="post"
              id="VerifiedEnquiry"
              action="/success"
              @submit.prevent="handleSubmit"
              :subject="
                'VerifiedAutoshop ' +
                  enquire.location +
                  ' Enquiry from - ' +
                  enquire.name
              "
            >
              <div class="row">
                <div class="col-md-12 form-group">
                  <label class="sr-only">Name</label>

                  <input
                    class="form-control"
                    type="text"
                    aria-label="Your name"
                    placeholder="Name"
                    name="name"
                    required
                    ref="name"
                    v-model="enquire.name"
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
                    v-model="enquire.number"
                    required
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
                    v-model="enquire.email"
                  /><i class="form-icon fal fa-envelope"></i>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group g-mb-40">
                  <label class="sr-only">Enter additional comments here</label>

                  <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Hi. I would like to know..."
                    aria-label="Type your enquiry here"
                    name="question"
                    required
                    v-model="enquire.question"
                  ></textarea
                  ><i class="textarea-icon fal fa-comment-alt-lines"></i>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="row">
                    <label class="section-label col-12" for=""
                      >Preferred Contact:</label
                    >
                    <div class="col-12 form-group radio-group">
                      <label for="usePhone"
                        ><input
                          class="mr-2 ml-2"
                          type="radio"
                          value="Phone"
                          name="prefContact"
                          required
                          v-model="enquire.preferredContact"
                        />Phone</label
                      >

                      <label for="useEmail"
                        ><input
                          class="mr-2 ml-2"
                          type="radio"
                          value="Email"
                          name="prefContact"
                          v-model="enquire.preferredContact"
                        />Email</label
                      >
                      <label for="useAny"
                        ><input
                          class="mr-2 ml-2"
                          type="radio"
                          value="Any"
                          name="prefContact"
                          v-model="enquire.preferredContact"
                        />Either</label
                      >
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="row">
                    <label for="" class="col-12 section-label"
                      >Select Location</label
                    >
                    <div class="col-12 form-group">
                      <select
                        name="location"
                        class="form-control"
                        v-model="enquire.location"
                        required
                      >
                        <option value="Brisbane" selected>Brisbane</option>
                        <option value="Christchurch">Christchurch</option>
                        <option value="Christchurch">Perth</option>
                      </select>
                      <i class="form-icon fal fa-globe"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <button
                  type="submit"
                  class="btn btn-cs btn-rnd btn-outline"
                  aria-label="Submit"
                >
                  <p class="mb-0">
                    <i class="fa fa-paper-plane mr-1 d-inline"></i> Submit
                  </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="light-bg">
      <LocationInfo></LocationInfo>
    </div> -->
  </div>
</template>

<script>
// import LocationInfo from "@/components/LocationInfo.vue";
export default {
  // components: { LocationInfo },
  data() {
    return {
      enquire: {
        name: "",
        number: "",
        email: "",
        question: "",
        preferredContact: "",
        location: "Brisbane"
      },
      shortname: ""
    };
  },
  methods: {
    show() {
      this.$modal.show("modal");
      // this.$zendesk.hide();
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
          "form-name": "VerifiedEnquiry",
          ...this.enquire
        })
      })
        .then(() => {
          this.$router.push({
            name: "Thanks",
            params: {
              head: "Message received :)",
              name: this.enquire.name.replace(/ .*/, ""),
              message: "We'll get back to you as soon as we can",
              type: "enquiries"
            }
          });
          // console.log('success')
        })
        .catch(() => {
          this.$router.push("404");
          // console.log('failure')
        });
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.name.focus();
    }, 200);
  }
};
</script>

<style lang="scss">
.radio-group {
  line-height: 2rem;
}
</style>
