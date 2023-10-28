<script setup>
/*##########[ IMPORTS ]##########*/
import AssetsManager from "~/core/AssetsManager";
import { useNotification } from "@kyvg/vue3-notification";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { useSharedStore } from "~/stores/sharedStore";
import RoutesManager from "~/core/RoutesManager";

/*##########[ DEFINES ]##########*/
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const { notify } = useNotification();
const display = useDisplay();
const sharedStore = useSharedStore();
const { t } = useI18n();
const localePath = useLocalePath();

/*##########[ COMPUTED ]##########*/
const navDrawer = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

/*##########[ STATE ]##########*/

/*##########[ METHODS ]##########*/

/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {});
onBeforeUnmount(() => {});
</script>

<template>
  <v-navigation-drawer
    v-if="$vuetify.display.mobile"
    width="300"
    class="app-nav-drawer"
    order="0"
    height="100vh"
    v-model="navDrawer"
    location="end"
    color="secondary"
  >
    <v-sheet
      color="transparent"
      width="100%"
      height="100%"
      class="flex-center flex-column pb-15"
    >
      <div
        v-for="item in sharedStore.navLinks"
        class="nav-menu-item font-size-small font-weight-bold mb-5"
        :class="{ active: $route.path === localePath(item.path) }"
        :key="item.title"
      >
        <NuxtLink
      
          :to="localePath(item.path)"
          class="relative nav-menu-item-link text-decoration-none d-inline-block w-100 h-100 py-3 px-7 text-uppercase"
          >{{ $t(item.title) }}
        </NuxtLink>
      </div>
    </v-sheet>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.app-nav-drawer {
  top: 75px !important;
  z-index: 9999 !important;

  .nav-menu-item {
    width: 80%;
    position: relative;
    transition: all 150ms ease-in-out !important;
    text-align: center;

    .nav-menu-item-link {
      display: inline-block;
      height: 100%;
      width: 100%;
    }

    &::before {
      content: "";
      transition: all 150ms ease-in-out !important;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) skewX(-20deg);
      background-color: $primary;
      opacity: 0;
    }

    &:hover,
    &.active {
      color: $secondary-darken;

      &::before {
        opacity: 1;
      }
    }
  }
}
</style>
