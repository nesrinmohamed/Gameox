<script setup>
import AssetsManager from "~/core/AssetsManager";
</script>
<template>
  <v-sheet
    color="transparent"
    class="base-card-title text-center d-flex align-center justify-center flex-column relative text-secondary-darken py-10 w-50 mx-auto"
  >
    <h2 class="text-h4 font-weight-black title">
      JUST FEATURED <span class="text-primary"> GAMES </span>
    </h2>
    <p
      class="text-subtitle-1 text-main-text-color line-height line-2 font-weight-meduim py-5"
    >
      Compete with 100 players on a remote island for winner takes showdown
      known issue where certain skin strategic
    </p>
    <v-img :src="AssetsManager.lineAfterTitle" width="300"></v-img>
  </v-sheet>
</template>

<style lang="scss" scoped></style>
