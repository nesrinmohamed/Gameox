<script setup>
const { t } = useI18n();
</script>


<template>
    <div class="contact-us-page">
        <LayoutHeadersPageHeader2 :title="t('contact_us_header')"></LayoutHeadersPageHeader2>
        <LayoutStaticSectionsContactUs></LayoutStaticSectionsContactUs>
        <LayoutStaticSectionsBrandArea :hasBigBottomSpace="true"></LayoutStaticSectionsBrandArea>
    </div>
</template>


<style lang="scss" scoped>

</style>