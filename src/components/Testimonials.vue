<template>
  <div class="light-bg py-4 mt-5">
    <div class="mx-auto" style="overflow: hidden; max-width: 100vw">
      <div class="container">
        <Title>Testimonials</Title>
      </div>
      <div class="container p-0">
        <swiper ref="mySwiperRef" class="swiper p-5" :options="swiperOption">
          <swiper-slide
            class="rounded shadow-lg"
            v-for="(review, index) in testimonials"
            :key="index"
          >
            <div class="h-100 w-100">
              <div class="card-body small text-left">
                <div
                  class="mr-auto mb-3 rounded-circle shadow-lg d-flex justify-content-center"
                  style="height:50px; width: 50px; background: var(--verified)"
                >
                  <img
                    v-if="review.img"
                    :src="review.img"
                    alt=""
                    class="h-100 w-100 rounded-circle "
                  />
                  <span
                    v-else
                    class="align-self-center font-weight-bold h4 my-0 text-white"
                    >{{ review.initial }}</span
                  >
                </div>
                <p class="review-author">
                  {{ review.author }}
                </p>
                <p>{{ review.comment }}</p>
                <p class="text-center mb-0" v-if="review.stars">
                  <i
                    class="fas fa-star"
                    v-for="star in Math.floor(review.stars)"
                    :key="star"
                  ></i>
                  <i
                    class="fas fa-star-half"
                    v-for="half in Math.ceil(
                      review.stars - Math.floor(review.stars)
                    )"
                    :key="half"
                  ></i>
                </p>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div
            tabindex="0"
            @keypress.enter="prev()"
            role="button"
            class="swiper-button-prev"
            slot="button-prev"
            @click="prev()"
          ></div>
          <div
            tabindex="0"
            @keypress.enter="next()"
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
          author: "Alexis",
          initial: "A",
          comment:
            "Very good and honest mechanics, they helped me find a cheap fuel pump for my car and fit it perfectly for a very honest price. I strongly recommend them.",
          stars: 5
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
          comment: "I'm so happy with the service and the price."
        },
        {
          author: "Waz",
          img:
            "https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,h_100,w_100/v1600665252/verified/5.webp",
          comment: "Easy to recommend these guys, they did a great job.",
          stars: 4.5
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
  &.p-5 {
    padding-bottom: 5rem !important;
    padding-top: 2.5rem !important;
    padding-left: 3rem !important;
  }

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

.review-author {
  font-variation-settings: "wght" 800;
  color: rgb(41, 68, 126);
}

.fa-star,
.fa-star-half {
  color: rgb(255, 182, 25);
}
</style>
