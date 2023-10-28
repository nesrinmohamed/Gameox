<script setup>
/*##########[ IMPORTS ]##########*/

import AssetsManager from "~/core/AssetsManager";
import HelperFunctions from "~/core/HelperFunctions";
import { useNotification } from "@kyvg/vue3-notification";
import { useDisplay } from "vuetify/lib/framework.mjs";
import RoutesManager from "~/core/RoutesManager";

/*##########[ DEFINES ]##########*/
const props = defineProps([""]);
const emit = defineEmits([""]);
const { notify } = useNotification();
const display = useDisplay();

const localPath = useLocalePath()
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
    class="about-section d-flex align-center py-15"
    :class="$vuetify.display.name"
  >
    <v-row>
      <v-container>
        <v-col cols="12" xl="10"  >
          <v-row>
            <v-col cols="12" lg="6" xl="6" md="6">
              <v-img :src="AssetsManager.ctaImg" class="about-img"></v-img>
            </v-col>
            <v-col cols="12" lg="5" xl="4" md="6" >
              <div
                class="content-section relative title-style-three white-title text-white mb-10"
              >
                <v-img
                  :src="AssetsManager.ctaIcon"
                  class="mt-15 cta-icon-img img"
                  width="80"
                  height="80"
                ></v-img>
                <h2
                  class="title-section text-uppercase text-white text-uppercase font-weight-black mt-3"
                >
                 {{$t("games")}} <span class="text-primary">{{$t("animation")}}</span>
                </h2>
                <p
                  class="py-5 section-description text-main-text-color-lighten line-height line-2"
                >
                {{$t("static_sections.about_game_animation.description")}} 
                </p>
                <v-img
                  :src="AssetsManager.lineAfterTitle"
                  width="300"
                  class="img"
                ></v-img>

                <BaseBtn class="mt-5" @click="$router.push(localPath(RoutesManager.games))">{{$t("view_portifolio")}}</BaseBtn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-container>
    </v-row>
  </v-sheet>
</template>

<style lang="scss" scoped>
.about-section {
  width: 100%;
  background: url("~/assets/img/bg/cta_bg.jpg") no-repeat center;
  background-size: cover;
  .about-img {
    height: 450px;
  }
  .title-section{
    font-size: 2.5rem;
    .cta-icon-img {
      width: 10vw;
    }
    .title {
      font-size: 2rem;
    }
  }
  
&.md{
  .title-section{
    font-size: 2rem;
  }
}
  &.xs,
  &.sm {
    .about-img {
      height: 350px;
    }
    .title-section {
      margin-top: -40px;
      .title {
        font-size: 1.5rem;
      }
      .img {
        margin: auto;
      }
      button {
        margin: 2em auto;
      }
    }
  }
  &.xs {
    .title-section {
      width: 100%;
    }
  }
}
</style>
