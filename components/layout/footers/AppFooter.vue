<script setup>
/*##########[ IMPORTS ]##########*/
import RoutesManager from "~/core/RoutesManager";
import AssetsManager from "~/core/AssetsManager";
import { useSharedStore } from "~/stores/sharedStore";
const { t } = useI18n();
const localPath = useLocalePath();
import { useNotification } from "@kyvg/vue3-notification";

/*##########[ DEFINES ]##########*/
const props = defineProps([""]);
const emit = defineEmits([""]);
const sharedStore = useSharedStore();
const { notify } = useNotification()


/*##########[ COMPUTED ]##########*/





/*##########[ STATE ]##########*/





/*##########[ METHODS ]##########*/





/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {});
onBeforeUnmount(() => {});



</script>

<template>
  <v-sheet
    color="transparent"
    class="footer-section relative"
    :class="$vuetify.display.name"
  >
    <v-sheet
      class="footer-top px-15 py-6 rounded-pill"
      color="secondary-darken"
    >
      <v-container>
        <v-row class="flex-center">
          <v-col cols="12" lg="4" xl="6" class="mx-auto">
            <h2
              class="title-description text-white text-sm-ceter text-h5 font-weight-black text-uppercase"
            >
              <!-- {{ $t("our") }} -->
              <span class="text-primary">{{ $t("newsletter") }}</span>
            </h2>
          </v-col>

          <v-col cols="12" lg="6" xl="6">
            <div
              class="footer-input-section d-flex align-center justify-center d-sm-flex-column"
            >
              <div class="footer-input d-flex me-3 align-center">
                <v-icon class="icon-message text-subtitle text-primary"
                  >mdi mdi-email-outline</v-icon
                >

                <input
                  type="text"
                  :placeholder="$t('enter_your_email')"
                  class="text-white w-100 h-100"
                />
              </div>

              <BaseBtn
                class="footer-btn"
              >
                {{ $t("subscribe") }} <v-icon class="ms-2">mdi mdi-send</v-icon>
              </BaseBtn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- =========== FOOTER CENTER ============ -->
    <v-container>
      <v-row>
        <v-col cols="12" xl="8" class="mx-auto">
          <v-row>
            <v-col cols="12" sm="6" md="6" lg="4" xl="4">
              <NuxtLink :to="localPath(RoutesManager.home)">
                <v-img
                  :src="AssetsManager.logo"
                  alt=""
                  width="100"
                  class="mb-8"
                ></v-img
              ></NuxtLink>
              <p
                class="text-main-text-color text-subtitle ms-5 font-weight-bold"
              >
                {{
                  $t(
                    "layout.footers.app_footer.footer_connection_information.footer_text"
                  )
                }}
              </p>
              <v-list bg-color="transparent " class="list-menu">
                <v-list-item
                  v-for="(info, i) in sharedStore.connectionInfo"
                  :key="i + 'i-k'"
                  class="text-main-text-color py-3 text-capitalize"
                >
                  <v-icon class="me-2 font-size-medium">{{ info.icon }}</v-icon>
                  <span class="font-size-small font-weight-bold" >{{ $t(info.title) }} : </span>
                  <span class="font-size-small font-weight-bold" >{{ info.text }}</span>
                </v-list-item>
              </v-list>
            </v-col>

            <!-- PRODUCTS LINKS  -->
            <v-col
              cols="12"
              sm="6"
              md="6"
              lg="2"
              xl="2"
              v-for="(footerLink, i) in sharedStore.footerLinks"
              :key="i + 'f-l-k'"
            >
              <!-- PRODUCT LINKS  -->
              <v-sheet color="transparent">
                <h4
                  class="list-item-name text-white text-uppercase font-weight-black ms-5 mb-5"
                >
                  {{ $t(footerLink.name) }}
                </h4>

                <v-list bg-color="transparent">
                  <v-list-item
                    v-for="(productItem, i) in footerLink.links"
                    :key="i + 'l-k'"
                  >
                    <NuxtLink
                      :to="localPath(productItem.path)"
                      class="link-item text-decoration-none text-main-text-color font-weight-medium text-capitalize text-subtitle"
                      >{{ $t(productItem.name)}}
                      </NuxtLink>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="3" xl="3">
              <v-sheet color="transparent">
                <h4
                  class="list-item-name text-white text-uppercase font-weight-black ms-5 mb-5"
                >
                  {{ $t("follow_us") }}
                </h4>

                <v-list bg-color="transparent d-flex text-white p-0">
                  <v-list-item
                    class="social-item"
                    v-for="(socialIcon, i) in sharedStore.socialMediaLinks"
                    :key="i + 's-k'"
                  >
                    <a :href="socialIcon.href" target="_blank">
                      <v-icon
                        class="social-icon my-5"
                        :class="socialIcon.name"
                        >{{ socialIcon.icon }}
                      </v-icon>
                    </a>
                  </v-list-item>
                </v-list>
                <h4
                  class="list-item-name my-10 text-white text-uppercase font-weight-black ms-5"
                >
                  {{ $t("newsletter_sign_up") }}
                </h4>
                <div class="news-letter-sign-up w-100">
                  <input
                    :placeholder="$t('enter_your_email')"
                    class="text-white w-95 h-100"
                  />
                  <button
                    class="rocke-btn"
                  >
                    <v-icon>mdi mdi-rocket-launch</v-icon>
                  </button>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- =========FOOTER BOTTOM ======== -->
    <v-sheet class="footer-bottom w-100 py-2" color="secondary-darken">
      <v-container>
        <v-row class="align-center">
          <v-col cols="12" md="6" lg="7">
            <p
              class="text-subtitle-2 text-center text-capitalize text-main-text-color font-weight-bold"
            >
              {{ $t("layout.footers.app_footer.copy_right.title") }}
              <span class="text-primary"
                ><NuxtLink
                  :to="localPath(RoutesManager.home)"
                  class="text-primary text-decoration-none footer-link"
                > Gameox </NuxtLink
                ></span
              >
              {{ $t("layout.footers.app_footer.copy_right.reserved") }}
            </p>
          </v-col>

          <v-col class="d-none d-md-block" md="6" lg="5">
            <img :src="AssetsManager.footerBottomImg" width="350" contain />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- ========== FOOTER FIRE ======= -->

    <v-img
      :src="AssetsManager.footerFire"
      width="300"
      height="300"
      alt=""
      class="footer-fire-left-img d-none d-xl-block"
    ></v-img>
    <v-img
      width="300"
      height="300"
      :src="AssetsManager.footerFire"
      alt=""
      class="footer-fire-right-img d-none d-xl-block"
    ></v-img>
  </v-sheet>
</template>

<style lang="scss" scoped>
.footer-section {
  background: url("~/assets/img/bg/s_footer_bg.jpg") no-repeat center;
  background-size: cover;
  padding: 0 0 10% 0;

  //==== footer top
  .footer-top {
    width: 75%;
    margin: auto;
    position: relative;
    top: -5em;
    z-index: 333;

    .footer-input {
      width: 100%;
      height: 50px;
      padding: 0 1em;
      background: #262228;
      transform: skewX(-16deg);
    }
    .footer-btn {
      font-size: 12px;
      height: 45px;
      // margin-top: -5px;
      transition: 400ms ease-in-out;
      &::before {
        display: none;
      }
      &:hover {
        color: $primary !important;

        &::after {
          background: #fff;
        }
      }
    }
  }
  // === footer center
  .list-item-name {
    position: relative;
    padding-bottom: 10px;
    &::after {
      content: "";
      width: 30px;
      height: 3px;
      background: $primary;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  .link-item {
    transition: all 300ms ease-in-out;
    &:hover , &:active{
      color: $primary !important;
      padding-left: 5px;
    }
  }
  .router-link-active{
    color: $primary !important;
  }
  .footer-input {
    input {
      background: rgb(34, 34, 34);
      padding: 0 5px;
      font-size: 12px;
    }
  }
  .social-item {
    margin: -5px;
    .social-icon {
      width: 35px;
      height: 35px;
      border-radius: 2px;
      font-size: 1.3rem;
      cursor: pointer;
      &.facebook {
        background: rgb(59, 89, 152);
      }
      &.twitter {
        background: #007bff;
      }
      &.pinterest {
        background: #dc3545;
      }
      &.linkedin {
        background: #1696e7;
      }
    }
  }
  .news-letter-sign-up {
    background: rgb(34, 34, 34);
    width: 80%;
    padding: 10px;
    position: relative;
    margin-bottom: 5em;
    .rocke-btn {
      background: $primary;
      padding: 8px;
      position: absolute;
      top: 2px;
      right: 0;
    }
  }

  // ======= footer bottom
  .footer-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
  // ========= FOOTER FIRE ========

  .footer-fire-right-img {
    position: absolute;
    bottom: 60px;
    right: 0;
  }
  .footer-fire-left-img {
    position: absolute;
    bottom: 60px;
    left: -25px;
  }

  &.md {
    .footer-top {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }
  }

  &.xs {
    .footer-top {
      width: 100%;
    }
    .footer-input-section {
      display: flex;
      flex-direction: column;
    }
  }
  &.xs,
  &.sm {
    .footer-top {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      .title-description {
        font-size: 1.5em !important;
      }
    }
  }
}

.v-locale--is-rtl {
  .list-item-name {
    &::after {
      content: "";
      left: unset;
      right: 0;
    }
  }
  .news-letter-sign-up {
    .rocke-btn {
      right: unset;
      left: 0;
    }
  }
}
</style>
