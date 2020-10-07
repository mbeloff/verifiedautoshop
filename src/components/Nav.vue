<template>
  <div class="nav-wrapper">
    <div class="position-absolute" style="width: 0; height: 0">
      <div id="servicing"></div>
      <div id="air-con"></div>
      <div id="diagnostics"></div>
      <div id="auto-electrical"></div>
      <div id="inspections"></div>
      <div id="brakes-and-suspension"></div>
      <div id="tyres"></div>
      <div id="paint-and-panel"></div>
      <div id="car-grooming"></div>
    </div>
    <div class="container">
      <vue-navigation-bar
        :options="navbarOptions"
        @vnb-item-clicked="vnbItemClicked"
      >
        <template v-slot:custom-section>
          <div class="custom-section-content">
            <p class="mb-0 font-weight-bold">
              <nobr>{{ $store.state.global.phone }}</nobr>
            </p>
          </div>
        </template>
      </vue-navigation-bar>
    </div>
  </div>
</template>

<script>
import "vue-navigation-bar/dist/vue-navigation-bar.css";

export default {
  methods: {
    vnbItemClicked(text) {
      if (text === "Book Now") {
        this.$modal.show("modal");
      }
      if (text === "Servicing") {
        this.$router.push({
          name: "Services",
          hash: "#servicing",
          params: { sIndex: "0" }
        });
      }
      if (text === "Air Conditioning") {
        this.$router.push({
          name: "Services",
          hash: "#air-con",
          params: { sIndex: "1" }
        });
      }
      if (text === "Diagnostics") {
        this.$router.push({
          name: "Services",
          hash: "#diagnostics",
          params: { sIndex: "2" }
        });
      }
      if (text === "Auto Electrical") {
        this.$router.push({
          name: "Services",
          hash: "#auto-electrical",
          params: { sIndex: "3" }
        });
      }
      if (text === "Inspections") {
        this.$router.push({
          name: "Services",
          hash: "#inspections",
          params: { sIndex: "4" }
        });
      }
      if (text === "Brakes and Suspension") {
        this.$router.push({
          name: "Services",
          hash: "#brakes-and-suspension",
          params: { sIndex: "5" }
        });
      }
      if (text === "Tyres") {
        this.$router.push({
          name: "Services",
          hash: "#tyres",
          params: { sIndex: "6" }
        });
      }
      if (text === "Paint and Panel") {
        this.$router.push({
          name: "Services",
          hash: "#paint-and-panel",
          params: { sIndex: "7" }
        });
      }
      if (text === "Car Grooming") {
        this.$router.push({
          name: "Services",
          hash: "#car-grooming",
          params: { sIndex: "8" }
        });
      }
    }
  },
  data() {
    return {
      navbarOptions: {
        elementId: "nav",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "./",
        brandImage: require("../assets/logo.svg"),
        brandImageAltText: "brand-image",
        collapseButtonOpenColor: "white",
        collapseButtonCloseColor: "white",
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-toward",
        menuOptionsLeft: [
          {
            type: "link",
            text: "SERVICES",
            arrowColor: "var(--primary)",
            subMenuOptions: [
              {
                type: "link",
                text: "Servicing",
                path: {
                  name: "Services",
                  hash: "#servicing",
                  params: { sIndex: "0" }
                }
              },
              {
                type: "link",
                text: "Air Conditioning",
                path: {
                  name: "Services"
                }
              },
              {
                type: "link",
                text: "Diagnostics",
                path: {
                  name: "Services"
                }
              },
              {
                type: "link",
                text: "Auto Electrical",
                path: {
                  name: "Services"
                }
              },
              {
                type: "link",
                text: "Inspections",
                path: {
                  name: "Services"
                }
              },
              {
                type: "link",
                text: "Brakes and Suspension",
                path: {
                  name: "Services"
                }
              },
              {
                type: "link",
                text: "Tyres",
                path: {
                  name: "Services"
                }
              },
              {
                type: "link",
                text: "Paint and Panel",
                path: {
                  name: "Services"
                }
              },
              {
                type: "link",
                text: "Car Grooming",
                path: {
                  name: "Services"
                }
              }
            ]
          },
          {
            type: "link",
            text: "CONTACT US",
            arrowColor: "var(--primary)",
            subMenuOptions: [
              {
                type: "link",
                text: "Locations",
                path: { name: "Locations" }
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Make an Enquiry",
                path: { name: "Contact" },
                iconLeft: '<i class="fas fa-comment-alt-lines fa-fw"></i>'
              }
            ]
          }
        ],
        menuOptionsRight: [
          {
            isLinkAction: true,
            type: "button",
            text: "Book Now",
            path: "",
            class: "btn btn-cs btn-prime",
            iconRight: '<i class="fas fa-comment-alt-lines fa-fw"></i>'
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
@import "/path/to/node_modules/vue-navigation-bar.css";
.nav-wrapper {
  background: var(--dark-bg);
}
.vnb {
  text-align: left;
  background: transparent;
  color: white;
  padding-top: 0;
  padding-bottom: 0;
  @media only screen and (max-width: 992px) {
    padding: 15px 0;
  }
  &__brand-image-wrapper {
    &__link {
      &__image {
        width: 100px;
      }
    }
  }
  .custom-section-content {
    text-align: right;
    margin-left: auto;
    font-size: 1.25rem;
  }
  svg {
    width: 20px !important;
  }
  &__menu-options {
    &--left {
      .fa,
      .far,
      .fas,
      .fas {
        color: var(--primary);
      }
    }
    &--right {
      margin-left: 1rem;
    }
    &__option {
      &__link {
        color: grey;
        &:hover {
          color: white;
        }
      }
    }
  }

  &__sub-menu-options {
    &__option {
      &__link {
        &:hover {
          border-left: 2px solid var(--primary);
        }
      }
    }
  }

  &__popup {
    border-radius: 5px;
    box-shadow: 0 0.5rem 3rem black;
    &__top {
      background: var(--dark-bg);
      padding: 0.5rem;
      &__image {
        margin-bottom: 0;
      }
    }
    &__bottom {
      padding-top: 0;
      &__custom-section {
        color: var(--primary);
      }
      &__menu-options {
        margin-bottom: 0;
        &__option {
          &__link {
            &:not(.btn) {
              color: var(--primary);
              font-variation-settings: "wght" 600;
              position: relative;
              &::after {
                position: absolute;
                content: "";
                background: var(--primary);
                width: 125px;
                height: 1px;
                bottom: 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
