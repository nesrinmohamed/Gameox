<script setup>

const props = defineProps(['sm'])

</script>

<template>
  <button
    :class="{sm: props.sm}"
    class="base-btn relative d-flex justify-center align-center text-center text-secondary-darken font-weight-black text-uppercase">
    <slot>View</slot>
  </button>
</template>

<style lang="scss" scoped>
.base-btn {
  padding: 2em 3em;
  z-index: 1;
  height: 55px;
  letter-spacing: 1px;
  font-size: 14px;
  
  &.sm {
    padding: 0.5em 2em;
    height: 35px;
  }

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transform: skewX(-16deg);
    z-index: -1;
    background-color: $primary;
  }

  &::before {
    content: "";
    width: 5px;
    height: 100%;
    position: absolute;
    right: -13px;
    top: 0;
    background-color: $primary;
    transform: skewX(-16deg);
    z-index: 1;
    transition: all ease-in-out 300ms;
  }

  &:hover {
    &::before {
      right: 0;
    }
  }
}

.v-locale--is-rtl {
  .base-btn {

    &::before {
      right: unset;
      left: -13px;
    }

    &:hover {
      &::before {
        left: 0;
      }
    }
  }
}
</style>
