<template>
  <div class="services-tabs">
    <ul class="tabs-header list-group" role="tablist">
      <li
        role="tab"
        class="mr-md-3 list-group-item shadow-responsive unselectable"
        v-for="(tab, index) in tabs"
        :key="tab.title"
        :tabindex="0"
        @keypress.enter="selectTab(index)"
        @click="selectTab(index)"
        :class="{ tabActive: index == selectedIndex }"
      >
        {{ tab.title }}
      </li>
    </ul>

    <div class="col-12 rounded border p-2 px-3 shadow-responsive pb-5">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
      matchFound: undefined
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    // this.selectTab(0);
    if (this.$route.params.service) {
      this.matchHash();
    } else {
      this.selectTab(0);
    }
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.tabActive = index == i;
      });
    },
    matchHash() {
      // this.selectTab(0);
      this.tabs.forEach((tab, index) => {
        tab.tabActive = tab.service == this.$route.params.service;
        if (tab.service == this.$route.params.service) {
          this.selectTab(index);
          this.matchFound = true;
          // return;
        }
        if (!this.matchFound) {
          this.selectTab(this.tabs.length - 1);
        }
      });
    }
  },
  watch: {
    "$route.params.service": {
      handler: function() {
        if (this.$route.params.service) {
          this.matchHash();
        } else {
          this.selectTab(0);
        }
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style lang="scss">
.services-tabs {
  padding: 1px;
  display: grid;
  grid-template-columns: auto 1fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
  }
}

.tabs-header.list-group {
  display: flex;
  flex-direction: column;
  .list-group-item {
    // remove extra child ('page not found' tab) when component created
    &:last-of-type {
      display: none;
    }
    &.tabActive {
      color: var(--primary);
      background: rgb(230, 232, 238);
      border-color: rgba(0, 0, 0, 0.05);
    }
    &:hover {
      &:not(.tabActive) {
        background: var(--primary);
        color: #f1f7ff;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .list-group-item {
      border-radius: 0rem;
      padding: 1.5rem 0.25rem 1.5rem 0.5rem;

      &.tabActive {
        color: white;
        background: var(--primary) !important;
        border-color: rgba(0, 0, 0, 0.05);
      }
      &:nth-of-type(2n) {
        border-left: 0;
      }
      &:nth-of-type(1),
      &:nth-of-type(2) {
        border-top: 1px solid rgba(0, 0, 0, 0.125);
      }
    }
  }
  li {
    font-size: 0.75rem;
    padding: 0.75rem 1rem;
    cursor: pointer;
    transition: background 0.5s, color 0.5s;

    @media only screen and (min-width: 768px) {
      a {
        pointer-events: none;
      }
    }
  }
}

.shadow-responsive {
  box-shadow: none;
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
