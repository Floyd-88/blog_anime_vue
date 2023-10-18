<script setup lang="ts">
// import { useRouter } from 'vue-router'
import CardAnimeProject from './CardAnimeProject.vue'

import { useCounterStore } from '../../stores/anime_now'
import { storeToRefs } from 'pinia';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const router = useRouter()
const rootStore = useCounterStore();
const { newAnime } = storeToRefs(rootStore)

</script>
<template>
  <div v-for="anime in newAnime" :key="anime.mal_id">
    <CardAnimeProject :anime="anime"/>
  </div>
</template>
<style scoped></style>
