<script setup>
/*##########[ IMPORTS ]##########*/
import AssetsManager from "~/core/AssetsManager";
// import HelperFunctions from '~/core/HelperFunctions';
// import { useNotification } from "@kyvg/vue3-notification";
// import { useDisplay } from 'vuetify/lib/framework.mjs';

// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

/*##########[ DEFINES ]##########*/
const props = defineProps([""]);
const emit = defineEmits([""]);
// const { notify } = useNotification()
// const display = useDisplay();
// const infinityScroll = HelperFunctions.infinityScroll(() => {

//     if (!!!currencies.value) return;
//     if (!!loading.value) return;
//     if (!!currencies.value.meta.current_page >= currencies.value.meta.last_page) return;
//     currencies.value.meta.current_page++;
//     fetchCurrencies(currencies.value.meta.current_page);

// })

/*##########[ COMPUTED ]##########*/

/*##########[ STATE ]##########*/
const sliderSetting = ref({
  itemsToShow: 3,
  itemsToScroll: 1,
  autoplay: 1000,
  transition: 1000,
  wrapAround: true,
  //   pauseAutoplayOnHover: true
  snapAlign: "center",
});
const sliderBreakPoints = {
  // 1904 and up
  1904: {
    itemsToShow: 7,
    // itemsToScroll: 1,
  },
  1264: {
    itemsToShow: 6,
    // itemsToScroll: 1,
  },
  960: {
    itemsToShow: 5,
    // itemsToScroll: 1,
  },
  600: {
    itemsToShow: 5,
    // itemsToScroll: 1,
  },
};
const brands = [
  AssetsManager.brand_logo_1,
  AssetsManager.brand_logo_2,
  AssetsManager.brand_logo_3,
  AssetsManager.brand_logo_4,
  AssetsManager.brand_logo_5,
];

/*##########[ METHODS ]##########*/

/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {});
onBeforeUnmount(() => {});
</script>

<template>
  <v-sheet
    class="about-us-section relative"
    width="100%"
    height="600px"
    color="transparent"
  >
    <v-container>
      <v-row class="align-center">
        <v-col cols="12" md="6">
          <h2
            class="title-about text-secondary font-weight-black text-h4 text-uppercase relative"
          >
            About us <span class="text-primary">section</span>
          </h2>
          <!-- <img :src="AssetsManager.lineImg" alt="" > -->
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
.about-us-section {
  background: url("~/assets/img/images/medale_shape.png") no-repeat center
    center;
  background-size: contain;
  .title-about {
    &::after {
      content: "";
      width: 100%;
      height: 12px;
      background: url("~/assets/img/images/title_bar02.png") no-repeat center;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
