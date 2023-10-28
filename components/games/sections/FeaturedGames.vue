<script setup>
/*##########[ IMPORTS ]##########*/
// import AssetsManager from '~/core/AssetsManager';
// import HelperFunctions from '~/core/HelperFunctions';
// import { useNotification } from "@kyvg/vue3-notification";
// import { useDisplay } from 'vuetify/lib/framework.mjs';
import AssetsManager from "~/core/AssetsManager";
import { useSharedStore } from "~/stores/sharedStore";

/*##########[ DEFINES ]##########*/
const props = defineProps([""]);
const emit = defineEmits([""]);
const sharedStore = useSharedStore()

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
  <v-sheet class="featured-games-section app-section-style">
    <v-container>
      <v-row>
        <v-col cols="12" sm="9" lg="7" class="mx-auto mb-7">
          <div
            class=" text-center d-flex align-center justify-center flex-column relative text-secondary-darken mx-auto"
          >
            <h2 class="text-h4 font-weight-black title text-uppercase">
              <span class="text-primary"> {{$t('games')}} </span>
              {{ $t("featured") }}  
            </h2>
            <p
              class="text-subtitle-1 text-main-text-color line-height line-2 font-weight-meduim py-5"
            >
              {{$t("games_sections.featured_games.description")}}
            </p>
            <v-img :src="AssetsManager.lineAfterTitle" width="300"></v-img>
          </div>
        </v-col>
      </v-row>
      <v-row class="">
        <v-col v-for="(featuredGame , i) in sharedStore.featuredGames" :key="i" cols="12" sm="6" md="4" xl="3">
          <GamesCardsGameCard1 :featuredGame="featuredGame"></GamesCardsGameCard1>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped></style>
