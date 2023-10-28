<script setup>
/*##########[ IMPORTS ]##########*/
import AssetsManager from '~/core/AssetsManager';
// import HelperFunctions from '~/core/HelperFunctions';
// import { useNotification } from "@kyvg/vue3-notification";
// import { useDisplay } from 'vuetify/lib/framework.mjs';

// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

/*##########[ DEFINES ]##########*/
const props = defineProps(['hasBigBottomSpace'])
const emit = defineEmits([''])
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
const sliderSetting = ref({
      itemsToShow: 3,
      itemsToScroll: 1,
      autoplay: 1000,
      transition: 1000,
      wrapAround: true,
    //   pauseAutoplayOnHover: true
      snapAlign: 'center',
})
const sliderBreakPoints = {
        // 1904 and up
        1904: {
            itemsToShow: 7,
            // itemsToScroll: 1,
        },
        1264: {
            itemsToShow: 6,
            // itemsToScroll: 1,
        },
        960: {
            itemsToShow: 5,
            // itemsToScroll: 1,
        },
        600: {
            itemsToShow: 5,
            // itemsToScroll: 1,
        },
}
const brands = [
    AssetsManager.brand_logo_1,
    AssetsManager.brand_logo_2,
    AssetsManager.brand_logo_3,
    AssetsManager.brand_logo_4,
    AssetsManager.brand_logo_5,
]



/*##########[ METHODS ]##########*/



/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {

})
onBeforeUnmount(() => {

})


</script>

<template>
    <v-sheet width="100%" color="secondary-darken" class="brand-area py-10" :class="{'has-big-bottom-space': props.hasBigBottomSpace}">
        <v-container class="relative overflow-hidden">
            <div class="brand-slider-wrapper w-100 relative">
                <carousel v-bind="sliderSetting" :breakpoints="sliderBreakPoints">
                    <slide v-for="(brand, index) in brands" :key="index">
                        <div class="carousel__item">
                            <v-avatar size="75" tile rounded="lg" class="brand-item pointer">
                                <img class="img-cover" :src="brand" alt="" />
                            </v-avatar>
                            <!-- {{ slide }} -->
                        </div>
                    </slide>
                </carousel>
            </div>
        </v-container>
    </v-sheet>
</template>

<style lang="scss" scoped>

.brand-area {
    background: linear-gradient(to right, $secondary-darken, $secondary-lighten, $secondary-darken);
    position: relative;

    &.has-big-bottom-space {
        padding-bottom: 150px !important;   
    }

    &::before {
        content: '';
        width: 25vw;
        height: 100%;
        background: linear-gradient(to right, $secondary-darken, transparent);
        position: absolute;
        left: -2.5%;
        top: 0;
        z-index: 3;
    }
    &::after {
        content: '';
        width: 25vw;
        height: 100%;
        background: linear-gradient(to right, transparent, $secondary-darken);
        position: absolute;
        right: -2.5%;
        top: 0;
        z-index: 3;
    }
}
</style>