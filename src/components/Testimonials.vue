<template>
  <div class="light-bg py-4 mt-5">
    <div class="mx-auto" style="overflow: hidden; max-width: 100vw">
      <div class="container">
        <Title>Testimonials</Title>
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
            tabindex="0"
            @keydown.enter.prevent="prev()"
            @keydown.space.prevent="prev()"
            role="button"
            class="swiper-button-prev"
            slot="button-prev"
            @click="prev()"
          ></div>
          <div
            tabindex="0"
            @keydown.enter.prevent="next()"
            @keydown.space.prevent="next()"
            role="button"
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
            "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_100,w_100/v1600665252/verified/1.webp",
          comment: "Excellent service!"
        },
        {
          author: "Liz",
          img:
            "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_100,w_100/v1600665252/verified/3.webp",
          comment:
            "I was able to book a service the next day, very professional."
        },
        {
          author: "Anna",
          img:
            "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_100,w_100/v1600665252/verified/4.webp",
          comment:
            "I'm so happy with the service and the price. Don't get ripped off elsewhere."
        },
        {
          author: "Waz",
          img:
            "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_100,w_100/v1600665252/verified/5.webp",
          comment: "Easy to recommend these guys, they did a great job."
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
