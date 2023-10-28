<script setup>
/*##########[ IMPORTS ]##########*/
// import AssetsManager from '~/core/AssetsManager';
// import HelperFunctions from '~/core/HelperFunctions';
// import { useNotification } from "@kyvg/vue3-notification";
// import { useDisplay } from 'vuetify/lib/framework.mjs';

/*##########[ DEFINES ]##########*/
const props = defineProps([''])
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




/*##########[ METHODS ]##########*/

    
    
/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {
    
})
onBeforeUnmount(() => {
    
})

    
</script>

<template>
    <div class="home-page ">
        <!-- header-area -->
        <LayoutHeadersAppHeader></LayoutHeadersAppHeader>
        <!-- header-area-end -->

        <!-- {{ $t('welcome') }} -->

        <!-- brand-area -->
        <LayoutStaticSectionsBrandArea></LayoutStaticSectionsBrandArea>
        <!-- brand-area-end -->
        

        <!-- new-games-area -->
        <LayoutStaticSectionsReleasedGamesSlider></LayoutStaticSectionsReleasedGamesSlider>
        <!-- new-games-area-end -->

        <!-- gamers-area -->
        <LayoutStaticSectionsOurServices></LayoutStaticSectionsOurServices>
        <!-- gamers-area-end -->


        <!-- featured-game-area -->
        <GamesSectionsFeaturedGames></GamesSectionsFeaturedGames>
        <!-- featured-game-area-end -->

        <!-- cta-area -->
        <LayoutStaticSectionsAboutGameAnimation></LayoutStaticSectionsAboutGameAnimation>
        <!-- cta-area-end -->


        <!-- footer-area -->
        <!-- <LayoutFootersAppFooter></LayoutFootersAppFooter> -->
        <!-- footer-area-end -->
    </div>
</template>

<style lang="scss" scoped>

</style>