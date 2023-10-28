<script setup>
/*##########[ IMPORTS ]##########*/
import RoutesManager from "~/core/RoutesManager";
import AssetsManager from "~/core/AssetsManager";
// import HelperFunctions from '~/core/HelperFunctions';
// import { useNotification } from "@kyvg/vue3-notification";
// import { useDisplay } from 'vuetify/lib/framework.mjs';
import { useSharedStore } from "~/stores/sharedStore";

import { useLocale } from "vuetify";

import { useRoute } from "vue-router";

/*##########[ DEFINES ]##########*/

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const sharedStore = useSharedStore();

const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const { current } = useLocale();
const localePath = useLocalePath();

const { t, finalizePendingLocaleChange } = useI18n();
const route = useRoute();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
const availableLocale = computed(() => {
  return locales.value.filter((i) => i.code === locale.value).length
    ? locales.value.filter((i) => i.code === locale.value)[0]
    : null;
});

// const { notify } = useNotification()
// const display = useDislay();
// const infinityScroll = HelperFunctions.infinityScroll(() => {

//     if (!!!currencies.value) return;
//     if (!!loading.value) return;
//     if (!!currencies.value.meta.current_page >= currencies.value.meta.last_page) return;
//     currencies.value.meta.current_page++;
//     fetchCurrencies(currencies.value.meta.current_page);

// })

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
// const onBeforeEnter = async () => {
//   await finalizePendingLocaleChange()
// }

onBeforeUnmount(() => {});

watch(locale, (newValue, oldValue) => {
  current.value = newValue;
});
</script>

<template>
  <v-app-bar
    class="app-bar-customize flex-center pe-5"
    height="200px"
    color="secondary"
    scroll-behavior="elevate"
    :class="[{ mobile: $vuetify.display.mobile }, $vuetify.display.name]"
  >
    <div class="brand-logo-wrapper flex-center">
      <v-img
        :src="AssetsManager.logo"
        width="100px"
        height="50px"
        contain
        @click="$router.push(localePath(RoutesManager.home))"
      ></v-img>
    </div>

    <v-spacer></v-spacer>

    <nav
      v-if="!$vuetify.display.mobile"
      class="nav-menu d-flex align-center justify-center"
    >
      <div
        v-for="(item, i) in sharedStore.navLinks"
        class="nav-menu-item font-size-small font-weight-bold"
        :class="{ active: $route.path === localePath(item.path) }"
        :key="i"
      >
        <NuxtLink
          :to="localePath(item.path)"
          class="relative nav-menu-item-link text-decoration-none d-inline-block w-100 h-100 py-2 px-7 text-uppercase"
        >
          {{ $t(item.title) }}
        </NuxtLink>
      </div>
    </nav>

    <v-btn
      color="background"
      height="40px"
      class="mx-3"
      rounded="0"
      variant="outlined"
    >
      <v-icon class="me-1" size="20"> mdi-web </v-icon>
      <span class="mx-2" v-if="availableLocale">{{
        availableLocale.name
      }}</span>

      <!-- =======MENU======== -->
      <v-menu activator="parent">
        <v-list bg-color="secondary" class="py-0">
          <v-list-item
            class="px-7"
            v-for="locale in availableLocales"
            :key="locale.code"
            @click.prevent.stop="setLocale(locale.code)"
          >
            <NuxtLink :to="switchLocalePath(locale.code)">{{
              locale.name
            }}</NuxtLink>
            <!-- <v-list-item-title>{{ locale.name }}</v-list-item-title> -->
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>

    <!-- TOGGLE BUTTON  -->
    <v-btn
      @click="navDrawer = !navDrawer"
      v-if="$vuetify.display.mobile"
      color="background"
      rounded="0"
      variant="outlined"
      size="40px"
    >
      <v-icon v-if="navDrawer" size="20"> mdi-close </v-icon>
      <v-icon v-else size="20"> mdi-menu </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.app-bar-customize {
  height: 100px !important;

  &::before {
    content: "";
    width: 22%;
    height: 100%;
    background-color: $primary;
    position: absolute;
    left: 0;
    top: 0;
    clip-path: polygon(0px 0px, 91% 0px, 100% 100%, 0% 100%);
  }

  .brand-logo-wrapper {
    width: 22%;
    cursor: pointer;
  }

  &.xs {
    &::before {
      width: 35%;
    }
    .brand-logo-wrapper {
      width: 35%;
    }
  }

  &.mobile {
    height: 75px !important;
  }

  .nav-menu {
    .nav-menu-item {
      position: relative;
      transition: all 150ms ease-in-out !important;

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
}

.v-locale--is-rtl {
  .app-bar-customize {
    &::before {
      right: 0;
      top: 0;
      clip-path: polygon(10% 0px, 100% 0px, 100% 100%, 0% 100%);
    }
  }
}
</style>
