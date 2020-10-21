<template>
  <div>
    <div class="specials-ticker container-fluid text-center">
      <p class="mb-0">
        <span>Special:</span> Essential Lube Service - $99
        <a class="ml-4 btn-mini bg-light small" @click="show = !show"
          ><nobr>t&c's apply</nobr></a
        >
      </p>
    </div>
    <transition name="fade">
      <div class="more-info light-bg" v-if="show">
        <p class="mb-0 text-muted small px-2">
          Offer valid for 4-cylinder vehicles. European models may incur
          additional fee.
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
  height: 50px;
  display: grid;
  place-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: height 0.5s, opacity 0.5s;
  height: 50px;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  height: 0;
}
</style>
