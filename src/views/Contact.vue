<template>
  <div class="h-100 mt-5">
    <div class="container">
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
              <label class="col-12 section-label" for=""
                >Preferred Contact:</label
              >
              <div class="col-12">
                <div class="col-12 px-0 form-group">
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
            <div class="text-right">
              <button
                type="submit"
                class="btn btn-cs btn-outline"
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

    <div class="light-bg">
      <ContactInfo></ContactInfo>
    </div>
  </div>
</template>

<script>
import ContactInfo from "@/components/ContactInfo.vue";
export default {
  components: { ContactInfo },
  data() {
    return {
      enquire: {
        name: "",
        number: "",
        email: "",
        question: "",
        preferredContact: ""
      }
    };
  },
  methods: {
    show() {
      this.$modal.show("modal");
    },
    hide() {
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
          "form-name": "VerifiedEnquiry",
          ...this.enquire
        })
      })
        .then(function(response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        })
        .then(function() {
          console.log("ok");
          this.$router.push("success");
        })
        .catch(() => {
          console.log("");
          this.$router.push("NotFound");
        });
      // .then(() => {
      //   this.$router.push("success");
      //   // console.log('success')
      // })
      // .catch(() => {
      //   this.$router.push("404");
      //   // console.log('failure')
      // });
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.name.focus();
    }, 200);
  }
};
</script>

<style lang="scss"></style>
