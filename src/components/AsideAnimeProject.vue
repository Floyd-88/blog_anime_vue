<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useAnimeStore } from '../stores/anime'
import { storeToRefs } from 'pinia';

const animeStore = useAnimeStore();
const { topAnimeLimit } = storeToRefs(animeStore)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter();

</script>
<template>
  <aside
    class="hidden basis-1/4 sm:flex flex-wrap sm:flex-row h-fit ml-2 mr-2 mb-8 p-4 border-t-2 border-gray-100 dark:border-gray-800 shadow-lg shadow-gray-400 dark:shadow-gray-700"
  >
    <div class="block m-auto pb-2 text-xl font-bold dark:text-gray-400">
      <h2>TOP</h2>
    </div>
    <div class="w-1/2 sm:w-full p-1" v-for="(anime, index) in topAnimeLimit" :key="anime.mal_id">
      <div>
        <img class="w-full h-40 object-cover  object-center cursor-pointer" @click="router.push({ name: 'animePage', params: { id: `${anime.mal_id}` } })"  :src="anime.images?.webp.image_url" :alt="anime.title" />
      </div>
      <div class="mt-3 mb-6">
        <div class="title_prew cursor-pointer" @click="router.push({ name: 'animePage', params: { id: `${anime.mal_id}` } })">{{ index + 1 }} {{ anime.title_english ? anime.title_english : anime.title }}</div>
        <div class="text_prew cursor-pointer" @click="router.push({ name: 'animePage', params: { id: `${anime.mal_id}` } })">{{ anime.synopsis?.substring(0, anime.synopsis.length - 1).slice(0, 70) + '...' }}</div>
      </div>
    </div>
  </aside>
</template>
<style scoped></style>
../stores/anime