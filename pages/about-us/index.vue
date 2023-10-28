

<script setup>
const { t } = useI18n();
</script>

<template>
    <div class="about-us-page">
        
        <LayoutHeadersPageHeader2 :title="t('about_us_header')"></LayoutHeadersPageHeader2>
        <LayoutStaticSectionsAboutUs></LayoutStaticSectionsAboutUs>
        <LayoutStaticSectionsOurTeam></LayoutStaticSectionsOurTeam>
    </div>
</template>

<style lang="scss" scoped>

</style> 