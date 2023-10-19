<script setup lang="ts">
// import { useRouter } from 'vue-router'
import CardAnimeProject from './CardAnimeProject.vue'

import { useAnimeStore } from '../../stores/anime'
import { storeToRefs } from 'pinia';

const animeStore = useAnimeStore();
const { newAnime } = storeToRefs(animeStore)

</script>
<template>
  <div v-for="anime in newAnime" :key="anime.mal_id">
    <CardAnimeProject :anime="anime"/>
  </div>
</template>
<style scoped></style>
../../stores/anime