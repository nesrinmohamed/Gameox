<script setup>
/*##########[ IMPORTS ]##########*/
// import AssetsManager from '~/core/AssetsManager';
// import HelperFunctions from '~/core/HelperFunctions';
// import { useNotification } from "@kyvg/vue3-notification";
// import { useDisplay } from 'vuetify/lib/framework.mjs';

/*##########[ DEFINES ]##########*/
const props = defineProps(['title', 'primaryTitle'])
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
    <v-sheet width="100%" height="400px" class="page-header-2 flex-center">

        <v-container>
            <h1 class="text-white text-uppercase primary-last-word text-h2 font-weight-black mx-auto text-center">
                <bdi class="mx-1" v-for="item in props.title.split(' ')"> {{ item }} </bdi>
            </h1>
        </v-container>
    </v-sheet>
</template>

<style lang="scss" scoped>
.page-header-2 {
  background: url("~/assets/img/bg/breadcrumb_bg.jpg") no-repeat center;
  background-size: cover;
}
</style>