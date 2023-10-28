<script setup>
/*##########[ IMPORTS ]##########*/
import AssetsManager from "~/core/AssetsManager";
// import HelperFunctions from "~/core/HelperFunctions";
import { useNotification } from "@kyvg/vue3-notification";
import { useDisplay } from "vuetify/lib/framework.mjs";

import { useSharedStore } from "~/stores/sharedStore";
/*##########[ DEFINES ]##########*/
const props = defineProps([""]);
const emit = defineEmits([""]);
const { notify } = useNotification();
const display = useDisplay();
const sharedStore = useSharedStore();
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
    class="game-portifolio-section app-section-style"
    color="transparent"
  >
    <v-container>
      <v-row>
        <v-col cols="12" xl="10" class="mx-auto">
          <v-row class="">
            <v-col
              v-for="(game, i) in sharedStore.games"
              :key="i + 'g-k'"
              cols="12"
              sm="6"
              md="4"
              xl="3"
            >
              <GamesCardsGameCard2 :game="game"></GamesCardsGameCard2>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped></style>
