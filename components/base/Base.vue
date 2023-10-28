<script setup>
/*##########[ IMPORTS ]##########*/
import AssetsManager from '~/core/AssetsManager';
import HelperFunctions from '~/core/HelperFunctions';
import { useNotification } from "@kyvg/vue3-notification";
import { useDisplay } from 'vuetify/lib/framework.mjs';

/*##########[ DEFINES ]##########*/
const props = defineProps([''])
const emit = defineEmits([''])
const { notify } = useNotification()
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
onMounted(() => {

})
onBeforeUnmount(() => {

})


</script>

<template>
    <div>

    </div>
</template>

<style lang="scss" scoped></style>