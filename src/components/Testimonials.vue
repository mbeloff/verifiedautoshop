<template>
  <div class="light-bg py-4 mt-5">
    <div style="overflow: hidden; max-width: 100vw">
      <div class="container">
        <h1 class="mb-3 font-italic">
          <i class=" fas fa-check-circle mr-2"></i>Testimonials
        </h1>
        <swiper ref="mySwiperRef" class="swiper p-5" :options="swiperOption">
          <swiper-slide
            class="rounded shadow-lg"
            v-for="(test, i) in testimonials"
            :key="i"
          >
            <div class="h-100 w-100">
              <div class="card-body small text-left">
                <div
                  class="mr-auto mb-3 rounded-circle shadow-lg"
                  style="height:50px; width: 50px;"
                >
                  <img
                    :src="test.img"
                    alt=""
                    class="h-100 w-100 rounded-circle"
                  />
                </div>
                <p class="test-author">{{ test.author }}</p>
                <p>{{ test.comment }}</p>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div
            class="swiper-button-prev"
            slot="button-prev"
            @click="prev()"
          ></div>
          <div
            class="swiper-button-next"
            slot="button-next"
            @click="next()"
          ></div>
        </swiper>
      </div>
    </div>
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
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

import "swiper/css/swiper.css";

export default {
  name: "Testimonials",
  title: "Testimonials Looper",
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        autoplay: true,
        loop: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      testimonials: [
        {
          author: "Serena",
          img:
            "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_100,w_100/v1600665252/verified/1.jpg",
          comment: "Really happy with the service, all the staff very helpful."
        },
        {
          author: "Rami",
          img:
            "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_100,w_100/v1600665252/verified/2.jpg",
          comment:
            "So much cheaper than dealership and the boys know what they're doing."
        },
        {
          author: "Liz",
          img:
            "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_100,w_100/v1600665252/verified/3.jpg",
          comment:
            "I was able to book a service the next day, and they were very professional."
        },
        {
          author: "Anna",
          img:
            "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_100,w_100/v1600665252/verified/4.jpg",
          comment:
            "I'm so happy with the service and the price. Don't get ripped off elsewhere."
        },
        {
          author: "Waz",
          img:
            "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_100,w_100/v1600665252/verified/5.jpg",
          comment:
            "Easy to recommend these guys, they did a great job. Even got the job done quicker than was estimated."
        }
      ]
    };
  },
  methods: {
    next() {
      this.$refs.mySwiperRef.$swiper.slideNext();
    },
    prev() {
      this.$refs.mySwiperRef.$swiper.slidePrev();
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  min-height: 230px;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    background-color: white;
  }
}

.swiper-wrapper {
  max-width: 100vw !important;
}

.test-author {
  font-variation-settings: "wght" 800;
  color: rgb(41, 68, 126);
}
</style>
