<script setup>
/*##########[ IMPORTS ]##########*/

import AssetsManager from "~/core/AssetsManager";
import HelperFunctions from "~/core/HelperFunctions";
import { useNotification } from "@kyvg/vue3-notification";
import { useDisplay } from "vuetify/lib/framework.mjs";
import RoutesManager from "~/core/RoutesManager";
import { useSharedStore } from "~/stores/sharedStore";

/*##########[ DEFINES ]##########*/
const props = defineProps([""]);
const emit = defineEmits([""]);
const { notify } = useNotification();
const display = useDisplay();
const sharedStore = useSharedStore();
const {t} = useI18n()
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
const items = [
  {
    icon: "mdi mdi-map-marker",
    // text: "Address : 71-75 Shelton Street, Covent Garden, London, United Kingdom",
    text: t("address"),
  },

  {
    icon: "mdi mdi-map-marker",
    // text: "uilding 11, Level 7, Bay Square, Business Bay, Dubai.",
    text:t("address"),
  },

  {
    icon: "mdi mdi-rocket-launch",
    // text: "Wechat ID : Game-ox", 
    text: t("wechat_id"),
  },
  {
    icon: "mdi mdi-phone",
    // text: "Whatsapp : ⁦+1(323)9165549⁩",
    text:t("whats_app"),
  },
  {
    icon: "mdi mdi-email-open",
    // text: "Email : info@game-ox.com",
    text: t("email"),
  },
];
/*##########[ METHODS ]##########*/

/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {});
onBeforeUnmount(() => {});
</script>

<template>
  <v-sheet class="contact-us" width="100%" :class="$vuetify.display.name">
    <v-container>
      <v-row class="justify-center align-center">
        <v-col cols="12" lg="10" xl="8">
          <v-row>
            <v-col cols="12" md="6" lg="6" xl="5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9106171567546!2d-0.12609992306952011!3d51.51485581015806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab1f237b%3A0x436d7f0832fd499d!2s71%2C%2075%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2seg!4v1691499529257!5m2!1sen!2seg"
                width="100%"
                height="400"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </v-col>

            <!-- CONTACT DESCRIPTION  -->
            <v-col cols="12" md="6" lg="6" xl="7">
              <v-form v-model="valid" class="ms-5">
                <!-- <v-container> -->
                <v-row>
                  <v-col cols="12">
                    <div class="contact-info">
                      <h2
                        class="contact-info-title  text-secondary text-uppercase font-weight-black text-h4 text-secondary ma-3"
                      >
                        {{$t("contact_info_details")}}
                      </h2>
                      <v-list bg-color="transparent">
                        <v-list-item
                          v-for="(item, i) in sharedStore.connectionInfo"
                          :key="i"
                          class="list-item"
                        >
                          <v-icon class="text-primary me-2 text-subtitle-1">{{
                            item.icon
                          }}</v-icon>

                          <span class="text-subtitle-2 text-capitalize text-secondary-lighten font-weight-medium line-height" >
                            {{ $t(item.title) }}
                          </span>
                          <span class="mx-2">:</span>
                          <span class="text-subtitle-2 text-capitalize text-secondary-lighten font-weight-medium line-height" >
                            {{ item.text }}
                          </span>
                        </v-list-item>
                      </v-list>
                    </div>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-textarea
                      class="text-main-text-color"
                      :label="$t('write_message')"
                      variant="underlined"
                      required
                      color="primary"
                      
                    ></v-textarea>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      class="text-main-text-color"
                      v-model="name"
                      :rules="nameRules"
                      :label="$t('your_name')"
                      variant="underlined"
                      required
                      color="primary"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      class="text-main-text-color"
                      v-model="email"
                      :rules="emailRules"
                      :label="$t('your_email')"
                      variant="underlined"
                      required
                      color="primary"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-btn
                      class="submit-btn text-secondary font-weight-black text-uppercase text-center py-2"
                      variant="text"
                      width="100%"
                      height="40"
                    >
                      {{ $t("submit_message") }}</v-btn
                    >
                  </v-col>
                </v-row>
                <!-- </v-container> -->
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped>
.contact-us {
  padding: 8% 0;
  .list-item {
    min-height: 25px;
  }
  .submit-btn {
    position: relative;
    transition: 300ms all ease-in-out;

    &:hover {
      color: $primary !important;
    }

    &::before {
      content: "";
      width: 100%;
      height: 2px;
      background: $primary;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  &.xs {
    .contact-info-title {
      font-size: 1rem;
    }
  }
}
</style>
