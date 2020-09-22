<template>
  <div class="py-4 mt-5">
    <div style="overflow: hidden; max-width: 100vw">
      <div class="container">
        <h1 class="mb-3 font-italic">
          <i class=" fas fa-check-circle mr-2"></i>Testimonials
        </h1>
        <swiper ref="mySwiperRef" class="swiper px-5" :options="swiperOption">
          <swiper-slide v-for="(test, i) in testimonials" :key="i">
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
        spaceBetween: 30,
        slidesPerGroup: 1,
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
          comment: "Really happy with the service, everyone was very helpful."
        },
        {
          author: "Rami",
          img:
            "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_100,w_100/v1600665252/verified/2.jpg",
          comment:
            "Much cheaper than dealership and the boys know what they're doing."
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
            "They let me know what needed to be done and what could wait. Didn't try to sting me with extra stuff that I didn't really need."
        },
        {
          author: "Waz",
          img:
            "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_100,w_100/v1600665252/verified/5.jpg",
          comment: "I can definitely recommend these guys."
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
