<script setup>
/*##########[ IMPORTS ]##########*/
import AssetsManager from "~/core/AssetsManager";
import { useSharedStore } from "~/stores/sharedStore";
import { useAuthStore } from "~/stores/authStore";
import RoutesManager from "~/core/RoutesManager";
import { useLocale } from "vuetify";

const sharedStore = useSharedStore();
const authStore = useAuthStore();
const { navLinks } = useSharedStore();

const { current } = useLocale();
const { locale, locales } = useI18n();

/*##########[ STATE ]##########*/
const navDrawer = ref(false);
const notificationsDrawer = ref(false);
const isLoaded = ref(false);
const profileLinks = [
  { slug: "profile", name: "Profile", icon: "", link: RoutesManager.me },
  {
    slug: "myRequests",
    name: "My Requests",
    icon: "",
    link: RoutesManager.meTrackRequests,
  },
  {
    slug: "following",
    name: "Following",
    icon: "",
    link: RoutesManager.meFollowing,
  },
  // { slug: 'changePassword', name: 'Change Password', icon: '', link: RoutesManager.meChangePassword },
];

const logout = () => {
  authStore.logout();
};

onMounted(() => {
  if (!authStore.isLoggedIn) {
    // authStore.fetchMeData();
    // sharedStore.getNotifications()
  }
  // navDrawer.value = !sharedStore.isMobile;
  isLoaded.value = true;

  // current.value = locale.value;
});
</script>

<template>
  <div v-if="!isLoaded" class="preload"></div>

  <NuxtLoadingIndicator :color="$vuetify.theme.current.colors.secondary" />
  <v-app>
    <!-- <v-progress-linear :active="!!sharedStore.loading.length" :indeterminate="!!sharedStore.loading.length" top
            class="z-index index-99999 position-fixed" color="secondary"></v-progress-linear> -->

    <Notifications position="bottom right"></Notifications>

    <!--##########[ MIAN LAYOUT APPBAR ]##########-->

    <!--##########[ MIAN LAYOUT DRAWER ]##########-->

    <LayoutHeadersAppNavbar v-model="navDrawer"></LayoutHeadersAppNavbar>
    <LayoutDrawerAppNavDrawer v-model="navDrawer"></LayoutDrawerAppNavDrawer>
    <v-layout>
      <!--##########[ MIAN PAGE ]##########-->
      <v-main
        class="page-top-padding"
        :class="{ mobile: $vuetify.display.mobile }"
      >
        <!-- <LayoutHeadersAppNavbar></LayoutHeadersAppNavbar> -->
        <Suspense>
          <!-- component with nested async dependencies -->

          <slot />

          <!-- loading state via #fallback slot -->
          <template #fallback>
            <v-container class="my-10 mx-auto">
              <!-- <div class="pa-10 text-white">Loading...</div> -->
              <v-sheet
                color="transparent"
                width="100%"
                height="500px"
                class="d-flex align-center justify-center"
              >
                <v-progress-circular
                  color="secondary"
                  indeterminate
                  :size="68"
                  :width="5"
                ></v-progress-circular>
              </v-sheet>
            </v-container>
          </template>
        </Suspense>

        <LayoutFootersAppFooter></LayoutFootersAppFooter>
      </v-main>
    </v-layout>
    <!-- <v-main>
            <slot />
        </v-main> -->
  </v-app>
</template>

<style lang="scss">
.my-input {
  border-radius: 100px;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
