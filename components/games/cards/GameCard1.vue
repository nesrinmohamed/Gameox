<script setup>
/*##########[ IMPORTS ]##########*/
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";
// import HelperFunctions from '~/core/HelperFunctions';
import { useNotification } from "@kyvg/vue3-notification";
import { useDisplay } from "vuetify/lib/framework.mjs";

const localPath = useLocalePath()

/*##########[ DEFINES ]##########*/
const props = defineProps(["featuredGame"]);
const emit = defineEmits([""]);
const { notify } = useNotification();
const display = useDisplay();
// const infinityScroll = HelperFunctions.infinityScroll(() => {

//     if (!!!currencies.value) return;
//     if (!!loading.value) return;
//     if (!!currencies.value.meta.current_page >= currencies.value.meta.last_page) return;
//     currencies.value.meta.current_page++;
//     fetchCurrencies(currencies.value.meta.current_page);

// })

/*##########[ COMPUTED ]##########*/
const cardHeight = computed(() => {
  console.log(display.name);
});

/*##########[ STATE ]##########*/

/*##########[ METHODS ]##########*/

/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {});
onBeforeUnmount(() => {});
</script>

<template>
  <div class="px-2">
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-card
          v-bind="props"
          :image="featuredGame"
          height="500px"
          elevation="15"
        >
          <transition name="fade">
            <v-card
              v-if="isHovering"
              width="100%"
              height="100%"
              color="transparent"
              class="d-flex align-center justify-center flex-column"
            >
              <div class="card-overlay o-7 text-uppercase" ></div>
              <img :src="AssetsManager.featuredIcon" width="100 " />
              <span class="text-primary-2 text-uppercase">
                <NuxtLink
                  :to="localPath(RoutesManager.games)"
                  class="relative no-decoration font-weight-black font-size-large"
                  >{{$t("games_cards.game_card_1.title")}} <span class="text-white">{{$t("players")}}</span></NuxtLink
                >
              </span>
              <span class="font-size-small text-uppercase">
                <v-icon size="15" class="me-1">mdi mdi-bell-outline</v-icon>
                <slot >{{$t("games_cards.game_card_1.andriod_lang")}}</slot>
              </span>
            </v-card>
          </transition>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<style lang="scss" scoped></style>
