<script setup>
/*##########[ IMPORTS ]##########*/
import AssetsManager from "~/core/AssetsManager";
import { useSharedStore } from "~/stores/sharedStore";
// import HelperFunctions from '~/core/HelperFunctions';
import { useNotification } from "@kyvg/vue3-notification";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { computed } from "vue";

/*##########[ DEFINES ]##########*/
const props = defineProps([]);
const emit = defineEmits([]);
const { notify } = useNotification();
const display = useDisplay();
const sharedStore = useSharedStore();

const route = useRoute();

const params = route.params;

// const infinityScroll = HelperFunctions.infinityScroll(() => {

//     if (!!!currencies.value) return;
//     if (!!loading.value) return;
//     if (!!currencies.value.meta.current_page >= currencies.value.meta.last_page) return;
//     currencies.value.meta.current_page++;
//     fetchCurrencies(currencies.value.meta.current_page);

// })

const imgChart = [
  AssetsManager.single_page_chart_img_1,
  AssetsManager.single_page_chart_img_2,
  AssetsManager.single_page_chart_img_3,
];

/*##########[ COMPUTED ]##########*/

const gameDetails = computed(() => {
  const ar = [...sharedStore.games.filter((item) => item.id == params.id)];
  return ar.length ? ar[0] : null;
});

/*##########[ STATE ]##########*/

/*##########[ METHODS ]##########*/
const openApp = () => {
  window.open('https://play.google.com/store/apps/details?id=com.gameox.live');
}
/*##########[ LIFE CYCLE ]##########*/

onMounted(() => {
  return gameDetails;
});
onMounted(() => {});
onBeforeUnmount(() => {});
</script>

<template>
  <div class="single-game-page my-15" :class="$vuetify.display.name">
    <v-container>
      <v-row>
        <v-col cols="12" xl="8" class="mx-auto">
          <v-row>
            <v-col cols="12">
              <v-card v-if="gameDetails" class="py-8 px-5" elevation="8">
                <h2
                  class="text-secondary text-uppercase font-weight-black text-h5"
                >
                  {{ gameDetails.name }}
                  <!-- <span class="text-primary">{{ gameInfo.primaryTitle }}</span> -->
                </h2>
                <p class="text-main-text-color font-weight-meduim mt-5">
                  {{ gameDetails.description }}
                </p>
                <v-row class="py-10">
                  <v-col
                    cols="12"
                    sm="4"
                    v-for="(img, index) in gameDetails.images"
                    :key="index"
                  >
                    <v-img :src="img" alt="" height="520"></v-img>
                  </v-col>
                </v-row>
                <BaseBtn @click="openApp">{{ $t("play_now") }}</BaseBtn>

                <div class="game-information py-15">
                  <h2
                    class="text-h5 text-secondary text-uppercase font-weight-black text-uppercase"
                  >
                    {{ $t("good_to_know") }}
                  </h2>
                  <div
                    class="d-flex flex-column align-start my-5 text-main-text-color-darken text-capitalize"
                  >
                    <div class="item d-flex align-center mb-3 py-3">
                      <h5 class="text-secondary text-h6 me-5">
                        {{ $t("category") }} :
                      </h5>
                      <span class="font-weight-bold">{{
                        gameDetails.category
                      }}</span>
                    </div>
                    <div class="item d-flex align-center mb-3 py-3">
                      <h5 class="text-secondary text-h6 me-5">
                        {{ $t("platforms") }} :
                      </h5>
                      <span class="font-weight-bold">{{
                        gameDetails.platforms
                      }}</span>
                    </div>
                    <div class="item d-flex align-center mb-3 py-3">
                      <h5 class="text-secondary text-h6 me-5">
                        {{ $t("players_interact") }} :
                      </h5>
                      <span class="font-weight-bold">{{
                        gameDetails.is_interactive
                      }}</span>
                    </div>
                    <div class="item d-flex align-center mb-3 py-3">
                      <h5 class="text-secondary text-h6 me-5">
                        {{ $t("game_language") }}:
                      </h5>
                      <span class="font-weight-bold">{{
                        gameDetails.lang
                      }}</span>
                    </div>
                  </div>

                  <div class="game-control-info">
                    <h2
                      class="text-uppercase text-h5 font-weight-black text-secondary"
                    >
                      {{ $t("games_controller") }}
                      <span class="text-primary"> {{ $t("system") }}</span>
                    </h2>
                    <p class="text-main-text-color my-10">
                      {{ $t("game_unique_card.description") }}
                    </p>

                    <v-row>
                      <v-col
                        cols="12"
                        sm="4"
                        v-for="(img, i) in imgChart"
                        :key="i"
                      >
                        <v-sheet color="transparent" class="chart-img">
                          <v-img :src="img" class="w-100 h-100 mb-2"></v-img>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-card>
              <div class="game-relesead">
                <h2
                  class="game-released-title text-secondary font-weight-black text-h5 text-uppercase"
                >
                  {{ $t("released") }}
                  <span class="text-primary"> {{ $t("games") }}</span>
                </h2>

                <v-row class="mt-10">
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                    v-for="(game, index) in sharedStore.games.slice(0, 4)"
                    :key="'g-l-k' + index"
                  >
                    <GamesCardsGameCard2 :game="game"></GamesCardsGameCard2>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<style lang="scss" scoped>
.single-game-page {
  .game-information {
    .item {
      width: 100%;
      border-bottom: 1px solid rgb(228, 224, 224);
    }
  }
  .game-relesead {
    margin: 10% 0;
  }
}
</style>
