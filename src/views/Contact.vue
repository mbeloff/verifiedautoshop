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
            name="VerifiedContact"
            method="post"
            id="VerifiedContact"
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
                ><i class="form-icon fal fa-comment-alt-lines"></i>
              </div>
            </div>
            <div class="text-right mt-4">
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
      <div class="container">
        <div class="row  mt-5 py-5">
          <div class="col-12 col-md-6 col-lg-5 ml-auto text-md-left">
            <h2 class="sub-title">Contact Info</h2>
            <div class="d-flex align-items-center">
              <p>
                <i class="fal fa-location-circle fa-fw fa-3x"></i>
              </p>
              <p class="w-100 ml-4">
                <b>Address:</b><br />46 Deshon St, Woolloongabba <br />4102 QLD
              </p>
            </div>
            <div class="d-flex align-items-center">
              <p>
                <i class="fal fa-clock fa-fw fa-3x"></i>
              </p>
              <p class="w-100 ml-4">
                <b>Opening Hours:</b> <br />mon-fri: 9-4 <br />
                sat: 9-12 <br />
                sun: closed
              </p>
            </div>

            <div class="d-flex align-items-center">
              <p>
                <i class="fal fa-phone-square fa-fw fa-3x"></i>
              </p>
              <p class="w-100 ml-4"><b>Ph:</b> 0424 975 336</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-7 mr-auto flex-fill">
            <div class="map h-100 flex-fill">
              <iframe
                class="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.2700604196953!2d153.04182056505752!3d-27.49197543288155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a40d59fd803%3A0xbb2b9652a52d897c!2s46%20Deshon%20St%2C%20Woolloongabba%20QLD%204102!5e0!3m2!1sen!2sau!4v1600750890678!5m2!1sen!2sau"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enquire: {
        name: "",
        number: "",
        email: "",
        question: ""
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
          "form-name": "VerifiedContact",
          ...this.enquire
        })
      })
        .then(() => {
          this.$router.push("success");
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
    }, 500);
  }
};
</script>

<style lang="scss">

</style>
