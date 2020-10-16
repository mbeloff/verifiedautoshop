<template>
  <div class="services-tabs">
    <ul class="tabs-header list-group" role="tablist">
      <li
        role="button"
        class="mr-md-3 list-group-item shadow-responsive unselectable"
        v-for="(tab, index) in tabs"
        :key="tab.title"
        :tabindex="0"
        @keydown.enter.prevent="selectTab(index)"
        @keydown.space.prevent="selectTab(index)"
        @click="selectTab(index)"
        :class="{ tabActive: index == selectedIndex }"
      >
        {{ tab.title }}
      </li>
    </ul>

    <div
      role="tabpanel"
      class="col-12 mt-2 mt-md-0 rounded border p-2 px-3 shadow-responsive pb-5"
    >
      <slot></slot>
      <a
        @keypress.enter="show()"
        @keypress.space="show()"
        tabindex="0"
        role="button"
        @click="show()"
        class="btn btn-cs btn-outline btn-bottom m-2"
        >Book Now</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
      tabs: []
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    if (this.$route.params.sIndex) {
      this.selectTab(Number.parseInt(this.$route.params.sIndex, 10));
    } else {
      this.selectTab(0);
    }
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    },
    show() {
      this.$modal.show("modal");
    }
  },
  watch: {
    "$route.params.sIndex": {
      handler: function() {
        this.selectTab(Number.parseInt(this.$route.params.sIndex, 10));
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style lang="scss">
.services-tabs {
  display: grid;
  grid-template-columns: auto 1fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
  }
}

.tabs-header {
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    padding: 0 1rem;
    .list-group-item {
      border-radius: 0.25rem;
      padding: 0.25rem 0.25rem;
      border-top: 1px solid rgba(0, 0, 0, 0.125);
      box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.089);
      &.tabActive {
        color: white;
        background: var(--primary) !important;
        border-color: rgba(0, 0, 0, 0.05);
      }
    }
    // .list-group-item {
    //   &:nth-of-type(4n - 3),
    //   &:nth-of-type(4n + 4) {
    //     background: rgb(244, 245, 247);
    //   }
    // }
  }
  li {
    // border-bottom: 1px solid #cfcfcf;
    font-size: 0.75rem;
    padding: 0.75rem 1rem;
    cursor: pointer;
    transition: background 0.5s, color 0.5s;
    &:hover {
      &:not(.tabActive) {
        background: var(--primary);
        color: #f1f7ff;
      }
    }

    @media only screen and (min-width: 768px) {
      a {
        pointer-events: none;
      }
    }
  }
}

.list-group-item {
  &.tabActive {
    color: var(--primary);
    background: rgb(230, 232, 238);
    border-color: rgba(0, 0, 0, 0.05);
  }
}

.shadow-responsive {
  @media only screen and (min-width: 768px) {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  }
}

.btn-bottom {
  position: absolute;
  bottom: 0;
  right: 0;
}

.unselectable {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
</style>
