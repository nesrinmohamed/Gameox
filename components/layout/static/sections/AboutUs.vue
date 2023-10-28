<script setup>
// ========== IMPORTS ============
import RoutesManager from "~/core/RoutesManager";
import AssetsManager from "~/core/AssetsManager";

// ========== DEFINES =============

const localePath = useLocalePath();

/*##########[ COMPUTED ]##########*/

/*##########[ STATE ]##########*/

/*##########[ METHODS ]##########*/

/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {});
onBeforeUnmount(() => {});
</script>
<template>
  <v-sheet
    class="about-us-section relative"
    color="transparent"
    :class="$vuetify.display.name"
    width="100%"
    min-height="500"
  >
    <div class="about-us-background">
      <v-img
        :src="AssetsManager.madelShape"
        alt=""
        width="100%"
        height="100%"
        contain
      ></v-img>
    </div>

    <div class="about-us-content">
      <v-container>
        <v-row class="justify-center align-center">
          <v-col cols="12" xl="8">
            <v-row>
              <v-col cols="12" lg="5" xl="6" order="0" order-lg="2">
                <div class="about-us-images relative flex-center ms-15">
                  <img
                    :src="AssetsManager.innerImg1"
                    alt=""
                    class="inner-img-1"
                    contain
                  />
                  <div class="phone-img d-none d-md-block">
                    <img
                      :src="AssetsManager.innerImg2"
                      alt=""
                      class="inner-img-2"
                    />
                    <img
                      :src="AssetsManager.innerImg3"
                      alt=""
                      class="inner-img-3"
                    />
                  </div>
                </div>
              </v-col>

              <v-col cols="12" lg="6" xl="6" order="0" order-lg="1">
                <h2
                  class="title-section text-uppercase text-h4 d-flex font-weight-black"
                >
                  <span class="text-primary ms-2"> {{ $t("about_us_header") }}</span>
                </h2>

                <img :src="AssetsManager.lineImg" class="py-5" />

                <p class="text-section font-weight-black text-h6 mb-5">
                  {{ $t("static_sections.about_us.title") }}
                </p>

                <span
                  class="description-section d-block text-secondary-darken-lightn font-weight-medium line-height line-2 w-75"
                  >{{ $t("static_sections.about_us.description") }}
                </span>

                <BaseBtn class="base-btn text-uppercase my-10">
                  <NuxtLink
                    :to="localePath(RoutesManager.home)"
                    class="text-decoration-none text-black font-weight-bold"
                  >
                    {{ $t("developer_center") }}
                  </NuxtLink>
                </BaseBtn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-sheet>
</template>

<style lang="scss" scoped>
.about-us-section {
  padding: 10% 0;
  .about-us-background {
    width: 100%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  .about-us-content {
    z-index: 22;
    .text-section {
      color: #f2a900;
    }
  }
  .about-us-images {
    margin-bottom: 5em;
    .phone-img {
      position: absolute;
      top: 42%;
      left: 0;
      transform: translateX(-50%);
      img {
        &:nth-of-type(2) {
          position: absolute;
          right: 0;
          top: 20%;
        }
      }
    }
  }

  &.md {
    .about-us-images {
      text-align: center;
      position: relative;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      .inner-img-1 {
        width: 70%;
      }
      .phone-img {
        width: 50%;
        position: absolute;
        top: 42%;
        left: 20%;
      }
    }
  }
  &.sm {
    .about-us-images {
      .inner-img-1 {
        width: 60%;
      }
    }
    .description-section {
      width: 100% !important;
    }
  }

  &.xs {
    .title-section {
      font-size: 1.5rem !important;
    }
    .description-section {
      width: 100% !important;
    }
    .about-us-images {
      margin-bottom: 2em;
      .inner-img-1 {
        width: 100%;
      }
    }
  }
}
</style>
