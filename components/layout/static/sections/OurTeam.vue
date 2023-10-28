<script setup>
/*##########[ IMPORTS ]##########*/

import AssetsManager from "~/core/AssetsManager";
import HelperFunctions from "~/core/HelperFunctions";
import { useNotification } from "@kyvg/vue3-notification";
import { useDisplay } from "vuetify/lib/framework.mjs";

/*##########[ DEFINES ]##########*/
const props = defineProps([""]);
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

/*##########[ STATE ]##########*/

/*##########[ METHODS ]##########*/

/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {});
onBeforeUnmount(() => {});
</script>

<template>
  <v-sheet
    class="our-team-section relative py-15"
    width="100%"
    min-height="600"
    :class="$vuetify.display.name"
  >
    <v-container>
      <div class="mx-auto text-center">
        <h2
          class="section-title text-h3 text-primary text-uppercase font-weight-black mb-5"
        >
          {{$t("our")}} <span class="text-white">{{$t("team")}}</span>
        </h2>
        <v-img
          :src="AssetsManager.ourTeamUnderLine"
          alt=""
          width="100%"
          height="8"
        ></v-img>
      </div>

      <v-row class="mb-15">
        <v-col cols="12" xl="8" class="mx-auto">
          <v-row>
            <v-col
              cols="12"
              xs="6"
              sm="4"
              md="3"
              v-for="i in 4"
              :key="i"
              class="pa-2 mb-10"
            >
              <div class="team-item-content flex-center text-white flex-column">
                <div class="team-item-img relative">
                  <v-img
                    :src="AssetsManager.teamImg"
                    alt=""
                    width="100%"
                    height="100%"
                  ></v-img>
                  <div class="team-item-description text-center w-100">
                    <h6
                      class="user-name text-body-2 text-uppercase font-weight-bold py-1"
                    >
                      <NuxtLink class="text-decoration-none"
                        >Kanhaiya Verma</NuxtLink
                      >
                    </h6>
                    <span
                      class="job-name text-primary text-body-2 text-uppercase font-weight-bold"
                      >team leader</span
                    >
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
.our-team-section {
  background: url("~/assets/img/bg/third_team_bg.jpg") no-repeat center;
  background-size: cover;

  .team-item-content {
    .team-item-img {
      width: 200px;
      height: 200px;
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        background: url("~/assets/img/bg/team_content_bg.png") no-repeat center;
        background-size: contain;
        position: absolute;
        bottom: -110%;
        left: -10px;
        transform: translateY(-50%);
        transition: 1s all ease-in-out;
        cursor: pointer;
        img{
          width: 80%;
          height: 80%;
        }
      }

      .team-item-description {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 111;
        transition: all 300ms ease-in-out;
        .job-name {
          transition: all 400ms ease-in-out;
        }
      }

      &:hover {
        &::after {
          background: url("@/assets/img/bg/team_content_hover_bg.png") no-repeat
            center;
          background-size: contain;
        }
        .team-item-description {
          .job-name {
            color: $secondary !important;
          }
        }
      }
    }
  }
}
</style>
