<template>
  <div class="nav-wrapper">
    <div class="container">
      <vue-navigation-bar
        :options="navbarOptions"
        @vnb-item-clicked="vnbItemClicked"
        ><!-- Custom Slot - Uncomment to use -->
        <template v-slot:custom-section>
          <div class="custom-section-content">
            <p class="mb-0 font-weight-bold">0424 975 336</p>
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
      if (text === "Get a Quote") {
        this.$modal.show("modal");
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
                isLinkAction: true,
                type: "link",
                text: "Servicing",
                path: { name: "about" }
              },
              {
                type: "link",
                text: "Air Conditioning",
                path: { name: "locations" }
              },
              {
                type: "link",
                text: "Diagnostics",
                path: { name: "blog" }
              },
              {
                type: "link",
                text: "Auto Electrical",
                path: { name: "blog" }
              },
              {
                type: "link",
                text: "Inspections",
                path: { name: "blog" }
              },
              {
                type: "link",
                text: "Brakes and Suspension",
                path: { name: "blog" }
              },
              {
                type: "link",
                text: "Tyres",
                path: { name: "blog" }
              }
            ]
          },
          {
            type: "link",
            text: "CONTACT US",
            arrowColor: "var(--primary)",
            subMenuOptions: [
              // {
              //   type: "link",
              //   text: "About Us",
              //   path: { name: "about-us" }
              // },
              // {
              //   type: "hr"
              // },
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
            text: "Get a Quote",
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
    &__top {
      background: var(--dark-bg);
    }
    &__bottom {
      &__custom-section {
        color: var(--primary);
      }
      &__menu-options {
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
