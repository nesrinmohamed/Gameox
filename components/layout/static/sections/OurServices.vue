<script setup>
/*##########[ IMPORTS ]##########*/
import AssetsManager from "@/core/AssetsManager";
// import HelperFunctions from '~/core/HelperFunctions';
// import { useNotification } from "@kyvg/vue3-notification";
// import { useDisplay } from 'vuetify/lib/framework.mjs';

/*##########[ DEFINES ]##########*/

const props = defineProps([""]);
const emit = defineEmits([""]);

const {t} = useI18n()
console.log(t("layout.headers.app_header.highlite_text"));
const items = [
  {
    id: 1,
    image: AssetsManager.serviceIcon1,
    title:'game_programming',
    text: t("static_sections.our_service.our_service_list.description.game_programming_description"),
  },
  {
    id: 2,
    image: AssetsManager.serviceIcon2,
    title:"animation",
    text: t("static_sections.our_service.our_service_list.description.animation_description"),
  },
  {
    id: 3,
    image: AssetsManager.serviceIcon3,
    title:"vr_ar_development",
    text: t("static_sections.our_service.our_service_list.description.vr_ar_development_description"),
  },
];

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

/*##########[ METHODS ]##########*/

/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {});
onBeforeUnmount(() => {});
</script>

<template>
  <v-sheet
    class="our-service-section relative py-15"
    color="transparent"
    :class="$vuetify.display.name"
  >
    <div v-if="$vuetify.display.mdAndUp" class="hero-section">
      <img
        :src="AssetsManager.userService"
        alt=""
        class="user-img ms-5 w-100 h-100"
      />
      <div class="service-circle-chape">
        <img :src="AssetsManager.lineShape" alt="" class="line-shape" />
        <img :src="AssetsManager.circleShape" alt="" class="circle-shape" />
      </div>
      <img :src="AssetsManager.tringleTop" alt="" class="tringle-top" />
      <img :src="AssetsManager.tringleBottom" alt="" class="tringle-bottom" />
    </div>
    <div v-if="$vuetify.display.lgAndUp" class="chart-shape">
      <img :src="AssetsManager.chartShape" />
    </div>

    <v-container>
      <v-row>
        <v-col cols="12" sm="10" xl="4" lg="5" md="8">
          <div class="relative title-style-three white-title text-white mb-10">
            <h2 class="section-title text-white text-uppercase">
             {{ $t("our") }} <span class="text-primary">{{$t("services")}}</span>
            </h2>
            <p
              class="py-5 section-description text-main-text-color-lighten line-height line-2"
            >
              {{$t("static_sections.our_service.text_description")}}
            </p>
            <v-img class="title-bottom-decoration" :src="AssetsManager.lineAfterTitle" width="300"></v-img>
          </div>

          <v-list bg-color="transparent">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              class="list-item text-white mb-5"
              rounded="shaped"
            >
              <template v-slot:prepend>
                <div
                  class="service-icon me-5 d-flex align-center justify-center"
                >
                  <v-img
                    :src="item.image"
                    contain
                    width="60"
                    height="60"
                  ></v-img>
                </div>
              </template>

              <v-list-item-title
                class="text-h6 font-weight-bold my-3 text-uppercase"
                >{{ $t(item.title) }}</v-list-item-title
              >
              <v-list-item-subtitle
                class="subtitle d-block line-height line-2"
                >{{ item.text }}</v-list-item-subtitle
              >
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
.our-service-section {
  width: 100%;
  background: url("~/assets/img/bg/just_gamer_bg.jpg") no-repeat center;
  background-size: cover;
  position: relative;
  z-index: 1;
  overflow: hidden;
  .hero-section {
    width: 20vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    .service-circle-chape {
      position: absolute;
      top: 60%;
      left: 75%;
      transform: translate(-50%, -50%);
      z-index: -1;
      .circle-shape {
        position: absolute;
        left: 60%;
        top: 35%;
        animation: rotate 15s infinite linear;
      }
    }

    .user-img {
      object-fit: contain;
    }

    .tringle-top {
      width: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
    .tringle-bottom {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }

  }
  .service-icon {
    width: 95px;
    height: 95px;
    background: url("~/assets/img/bg/gamer_list_icon_bg.jpg") no-repeat center;
    background-size: contain;
    border: 6px solid #333240;
  }
  .chart-shape {
    position: absolute;
    top: 10%;
    right: 15%;
  }
  
  &.md {
    .hero-section {
      width: 25%;
      left: 80%;
      transform: translateX(-50%);

    }
  }

  &.xs {
    text-align: center;
    .title-bottom-decoration {
      margin: auto;
    }
    .list-item {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
}

.v-locale--is-rtl {

  .our-service-section {


    .chart-shape {
      right: unset;
      left: 15%;
    }

    &.md {

      .hero-section {
        left: 20%;
      }
    }
  }
}
</style>
