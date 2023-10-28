<script setup>
/*##########[ IMPORTS ]##########*/
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";
// import HelperFunctions from '~/core/HelperFunctions';
// import { useNotification } from "@kyvg/vue3-notification";
// import { useDisplay } from 'vuetify/lib/framework.mjs';

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

/*##########[ DEFINES ]##########*/
const props = defineProps([""]);
const emit = defineEmits([""]);

const localePath = useLocalePath();
// const { notify } = useNotification()
// const display = useDisplay();


/*##########[ COMPUTED ]##########*/

/*##########[ STATE ]##########*/
/*##########[ METHODS ]##########*/

/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {});
onBeforeUnmount(() => {});
</script>

<template>
  <v-sheet
    class="app-header flex-center relative py-5"
    width="100%"
    :class="$vuetify.display.name"
  >
    <v-container>
      <v-row class="align-center">
        <v-col cols="12" lg="6">
          <div class="content d-flex flex-column align-start justify-center">
            <span
              class="highlite-text text-uppercase font-weight-black text-primary"
              >{{ $t("layout.headers.app_header.highlite_text") }}</span
            >
            <h1
              class="header-title text-start text-white font-weight-black text-capitalize"
            >
            {{ $t("layout.headers.app_header.header_title.title") }}
              <span class="text-primary"> {{ $t("layout.headers.app_header.header_title.primary_title") }}</span>
            </h1>
            <p class="description text-start text-white mt-5 pe-4 mb-10 ">
              {{ $t("layout.headers.app_header.description") }}
            </p>
            <BaseBtn @click="$router.push(localePath(RoutesManager.games))"
              >{{$t("read_more")}}</BaseBtn
            >
          </div>
        </v-col>

        <v-col v-if="!$vuetify.display.mobile" cols="12" lg="6">
          <v-sheet color="transparent" width="100%" height="100%">
            <v-img
              width="80%"
              height="80%"
              :src="AssetsManager.slider_img_1"
            ></v-img>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  height: calc(100vh - (200px));
  background: url("~/assets/img/slider/fourth_banner_bg.jpg") no-repeat center;
  background-size: cover;
  .header-title {
    font-size: 5em;
    line-height: 1;
  }
  .description {
    line-height: 2;
    width: 80%;
  }

  &.md {
    .content {
      text-align: center;
      width: 60% !important;
      margin: auto;
    }
  }
  &.sm {
    .content {
      text-align: center;
      width: 60% !important;
      margin: auto;
      .header-title {
        font-size: 4em;
        line-height: 1;
      }
    }
  }
  &.xs {
    .content {
      text-align: center;
      .header-title {
        font-size: 2em;
        line-height: 1;
      }
    }
  }
}
</style>
