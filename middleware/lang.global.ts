import { useLocale } from 'vuetify'



export default defineNuxtRouteMiddleware(async (to, from) => {




    // skip middleware on server
    if (process.server) return
    // skip middleware on client side entirely
    // if (process.client) return

    
    const { $i18n } = useNuxtApp();
    const { current } = useLocale()
    const { locale, locales } = $i18n;

    console.log(locale.value)

    current.value = locale.value
    
})