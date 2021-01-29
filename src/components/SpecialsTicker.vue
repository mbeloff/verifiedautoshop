<template>
  <div>
    <div class="specials-ticker container-fluid text-center">
      <p class="mb-0 py-2">
        <span>Special:</span> Lube Service & Safety Check from <span>$99</span>
        <a
          role="button"
          class="ml-4 btn-mini bg-light small"
          @click="show = !show"
          ><nobr>t&c's apply</nobr></a
        >
      </p>
    </div>
    <transition name="fade">
      <div class="more-info light-bg" v-if="show">
        <p class="mb-0 text-muted small px-2">
          Offer valid for most 4-cylinder petrol vehicles. European and/or
          diesel models may incur additional fee.
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss">
.btn-mini {
  height: 1rem;
  padding: 2px 10px;
  border-radius: 0.5rem;
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
}

.more-info {
  height: 70px;
  display: grid;
  place-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: height 0.5s, opacity 0.5s;
  height: 70px;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0;
}

.specials-ticker {
  background: rgb(51, 97, 224);
  font-variation-settings: "wght" 100;
  color: rgb(255, 255, 255);
  span {
    font-weight: unset;
    font-variation-settings: "wght" 600;
  }
}
</style>
