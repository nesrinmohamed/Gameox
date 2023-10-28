<script setup>
/*##########[ IMPORTS ]##########*/
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";
import { useSharedStore } from "~/stores/sharedStore";
// import HelperFunctions from '~/core/HelperFunctions';
// import { useNotification } from "@kyvg/vue3-notification";
// import { useDisplay } from 'vuetify/lib/framework.mjs';

// Import Swiper Vue.js components
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

/*##########[ DEFINES ]##########*/
const props = defineProps([""]);
const emit = defineEmits([""]);
const swiperGameEl = ref(null);
const swiperBannerEl = ref(null);
const sharedStore = useSharedStore();
const localePath = useLocalePath();
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
const showOnMounted = ref(false);
const sliderSetting = ref({
  itemsToShow: 1,
  itemsToScroll: 1,
  // autoplay: 1000,
  transition: 1000,
  wrapAround: true,
  //   pauseAutoplayOnHover: true
  snapAlign: "center",
});
const sliderBreakPoints = {
  // 1904 and up
  // 1904: {
  //   itemsToShow: 7,
  //   // itemsToScroll: 1,
  // },
  // 1264: {
  //   itemsToShow: 6,
  //   // itemsToScroll: 1,
  // },
  // 960: {
  //   itemsToShow: 5,
  //   // itemsToScroll: 1,
  // },
  // 600: {
  //   itemsToShow: 5,
  //   // itemsToScroll: 1,
  // },
};
const sliderValue = ref(3);


/*##########[ METHODS ]##########*/
const setSwiperGames = (swiper) => {
  // console.log("swiper game init");
  swiperGameEl.value = swiper;
};
const setSwiperBanner = (swiper) => {
  // console.log("swiper banner init");
  swiperBannerEl.value = swiper;
};
const onSwiperGamesChange = (index) => {
  if (swiperBannerEl.value == null) return;

  console.log("game index ", index.realIndex);
  swiperBannerEl.value.slideTo(index.realIndex);
};
const onSwiperBanner = (index) => {
  if (swiperGameEl.value == null) return;

  console.log("banner index ", index);
  swiperGameEl.value.slideTo(index);
};

/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {
  const timeout = setTimeout(() => {
    clearTimeout(timeout);
    showOnMounted.value = true;
  }, 500);
});
onBeforeUnmount(() => {
  swiperGameEl.value.destroy();
  // swiperBannerEl.value.off();
});
</script>

<template>
  <v-sheet color="background" class="app-section-style">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" lg="10" xl="6" class="mx-auto">
          <div class="text-center mb-20">
            <h2 class="section-title">
              {{ $t("games") }}
              <span class="text-primary"> {{ $t("released") }}</span>
            </h2>
            <p class="section-description">
              {{
                $t(
                  "static_sections.realesed_game_section.relesed_game_description"
                )
              }}
            </p>
            <v-img
              class="mx-auto mt-5 mb-10"
              :src="AssetsManager.lineAfterTitle"
              width="300"
            ></v-img>
          </div>
        </v-col>
      </v-row>

      <v-row v-if="showOnMounted" class="mb=15">
        <v-col cols="12" md="8">
          <swiper
            slide
            :initial-slide="sliderValue"
            class="swiper1"
            :modules="[EffectFade]"
            effect="fade"
            @swiper="setSwiperGames"
            @slideChange="onSwiperGamesChange"
            slides-per-view="1"
          >
            <swiper-slide v-for="(game, index) in  sharedStore.games" :key="'g1' + index">
              <v-card
                rounded="0"
                color="white"
                elevation="0"
                class="released-game-card d-flex justify-space-between align-center pa-5"
                :class="$vuetify.display.name"
              >
                <v-sheet class="game-img-wrapper relative z-index me-7">
                  <v-img
                    width="100%"
                    height="100%"
                    cover
                    :src="game.avatar_path"
                  ></v-img>
                </v-sheet>
                <v-sheet
                  class="released-game-content d-flex flex-column align-start"
                >
                  <div class="released-game-rating mb-3 d-flex align-center">
                    <h5 class="font-weight-black me-2">{{ $t("rating") }} :</h5>
                    <div class="released-rating">
                      <v-icon size="20" color="primary"> mdi-star</v-icon>
                      <v-icon size="20" color="primary"> mdi-star</v-icon>
                      <v-icon size="20" color="primary"> mdi-star</v-icon>
                      <v-icon size="20" color="primary"> mdi-star</v-icon>
                      <v-icon size="20" color="primary">
                        mdi-star-outline</v-icon
                      >
                    </div>
                  </div>
                  <div class="name-wrapper mb-7">
                    <NuxtLink
                    :to="localePath(RoutesManager.singleGame + game.id)"
                      class="text-decoration-none text-uppercase"
                    >
                      <h4 class="game-name text-white truncate">
                        {{ $t("game") }}
                        <span class="text-secondary-darken">{{
                          game.name
                        }}</span>
                      </h4>
                    </NuxtLink>
                  </div>
                  <div
                    class="d-flex flex-column align-start mb-5 text-main-text-color-darken"
                  >
                    <div class="item d-flex mb-2 text-capitalize">
                      <h5 class="font-weight-black me-5">
                        {{ $t("category") }} :
                      </h5>
                      {{ game.category }}
                    </div>
                    <div class="item d-flex mb-2 text-capitalize">
                      <h5 class="font-weight-black me-5">
                        {{ $t("platforms") }} :
                      </h5>
                      {{ game.platforms }}
                    </div>
                    <div class="item d-flex mb-2 text-uppercase">
                      <h5 class="font-weight-black me-5">
                        {{ $t("game_language") }} :
                      </h5>
                      {{ game.lang }}
                    </div>
                  </div>
                  <p
                    class="font-size-small truncate line-3 pe-10 text-main-text-color-darken text-capitalize font-weight-bold"
                  >
                    {{ game.description }}
                  </p>
                  <BaseBtn
                    class="mt-10"
                    :sm="true"
                    @click="$router.push(localePath(RoutesManager.singleGame + game.id))"
                    >{{ $t("play_now") }}</BaseBtn
                  >
                </v-sheet>
              </v-card>
            </swiper-slide>
          </swiper>
        </v-col>
        <v-col cols="12" md="4">
          <v-sheet
            :height="$vuetify.display.smAndDown ? '100px' : '415px'"
            color="transparent"
            class="relative overflow-hidden wrapper"
          >
            <swiper
              :initial-slide="sliderValue"
              class="swiper2"
              :direction="
                $vuetify.display.smAndDown ? 'horizontal' : 'vertical'
              "
              space-between="10"
              slides-per-view="3"
              @swiper="setSwiperBanner"
            >
              <swiper-slide
                class="flex-center"
                v-for="(game, index) in sharedStore.games"
                @click="onSwiperBanner(index)"
                :key="index"
              >
                <v-card
                  width="100%"
                  :height="$vuetify.display.smAndDown ? '100px' : '100%'"
                  :image="game.banner_path"
                  class="pointer"
                ></v-card>
              </swiper-slide>
            </swiper>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
.released-game-card {
  .game-img-wrapper {
    width: 275px;
    height: 375px;
  }

  .released-game-content {
    width: calc(100% - 275px);
    background: url("@/assets/img/bg/featured_game_bg.png") no-repeat center
      center;
    background-size: cover;

    .name-wrapper {
      min-width: 150px;
      width: auto;
      height: 50px;
      position: relative;
      display: flex;
      align-items: center;
      // white-space: nowrap;

      &::before {
        content: "";
        width: 200%;
        height: 100%;
        background: url("@/assets/img/images/released_game_brush.png") no-repeat
          center center;
        background-size: contain;
        position: absolute;
        right: -45%;
      }

      .game-name {
        font-size: 1.3em;
        position: relative;
      }
    }
  }

  &.xs {
    flex-direction: column;

    .game-img-wrapper {
      width: 100%;
      height: 200px;
    }

    .released-game-content {
      width: 100%;
      padding-top: 25px;
      padding-bottom: 10px;
      background: url("@/assets/img/bg/featured_game_bg.png") no-repeat center
        center;
      background-size: cover;
    }
  }
}
</style>
