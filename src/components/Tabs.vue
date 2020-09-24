<template>
  <div class="services-tabs">
    <ul class="tabs-header list-group">
      <li
        class="mr-md-3 list-group-item shadow-responsive"
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
        :class="{ tabActive: index == selectedIndex }"
      >
        {{ tab.title }}
      </li>
    </ul>

    <div
      class="col-12 mt-2 mt-md-0 rounded border p-2 px-3 shadow-responsive pb-5"
    >
      <slot></slot>
      <a @click="show()" class="btn btn-cs btn-outline btn-bottom m-2"
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
    this.selectTab(0);
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
  li {
    // border-bottom: 1px solid #cfcfcf;
    font-size: 0.8rem;
    padding: 0.5rem 1.5rem;
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
</style>
