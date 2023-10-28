<script setup>
/*##########[ IMPORTS ]##########*/
import RoutesManager from "~/core/RoutesManager";
import AssetsManager from "~/core/AssetsManager";

const route = useRoute();
const params = route.params;

/*##########[ DEFINES ]##########*/
const props = defineProps(["game"]);
const emit = defineEmits([""]);
const router = useRouter();
const localPath = useLocalePath();

/*##########[ COMPUTED ]##########*/

/*##########[ STATE ]##########*/

/*##########[ METHODS ]##########*/

/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {});
onBeforeUnmount(() => {});
</script>

<template>
  <div class="game-card-2-section" :class="$vuetify.display.name">
    <v-card class="py-8 px-5 card-item" elevation="3" v-if="game">
      <h2 class="text-uppercase text-h6 text-secondary font-weight-black">
        <NuxtLink
          class="text-decoration-none card-title truncate text-uppercase"
          :to="localPath(RoutesManager.singleGame + game.id)"
          >{{ game.name }}</NuxtLink
        >
      </h2>
      <p
        class="text-uppercase text-primary font-weight-medium text-subtitle-2 mb-5"
      >
        {{ game.lang }}
      </p>
      <span
        class="games-description text-main-text-color truncate line-2 text-body-2 font-weight-medium"
        >{{ game.description }}</span
      >

      <v-hover v-slot="{ isHovering, props }">
        <v-card
          class="card-hover relative mx-auto my-5"
          elevation="0"
          color="grey-lighten-4"
          isHovering
          v-bind="props"
        >
          <v-img cover :src="game.banner_path" class="flex-center" height="100">
            <transition name="fade">
              <div
                v-if="isHovering"
                class="flex-center transition-fast-in-fast-out text-h6"
              >
                <div class="card-overlay o-7"></div>

                <v-btn
                  class="card-overlay-btn font-weight-bold"
                  variant="outlined"
                  height="45"
                  @click="
                    $router.push(localPath(RoutesManager.singleGame + game.id))
                  "
                >
                  <v-icon class="me-2">mdi mdi-gamepad-variant</v-icon>
                  Read more</v-btn
                >
              </div>
            </transition>
          </v-img>
        </v-card>
      </v-hover>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.game-card-2-section {
  .card-item {
    .card-title {
      transition: all 400ms ease-in-out;
      &:hover {
        color: $primary !important;
      }
    }

    .card-hover {
      .card-overlay-btn {
        transition: 300ms all ease-in-out;

        &:hover {
          background: #fff;
          border-color: #fff;
        }
      }
    }
  }

  &.md,
  &.sm,
  &.xs {
    .card-title {
      font-size: 1rem;
    }
  }
}
</style>
