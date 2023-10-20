<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnimeStore } from '../stores/anime'
import { storeToRefs } from 'pinia'

import ContainerNews from '@/components/elementPage/ContainerNews.vue'

const animeStore = useAnimeStore()
const { animeGenres, animeStudios } = storeToRefs(animeStore)

onMounted(() => {
  animeStore.getStudiosAnime()
  animeStore.getGenresAnime()

})

</script>
<template>
  <ContainerNews>
    <div class="flex items-center justify-between mb-3 border-b-2 border-gray-300">
      <h3 class="container_news_title mb-1">Genres</h3>
    </div>
    <div>
      <ul class="grid grid-cols-4 gap-4">
        <a href="#" class="flex items-center pb-2" v-for="genre in animeGenres" :key="genre.mal_id">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-3 h-3 mr-1 stroke-current text-gray-400"
          >
            <path
              fill-rule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clip-rule="evenodd"
            />
          </svg>
          <li class="hover:text-indigo-500 text-sm" @click="$router.push({ name: 'animeListCategoryPage', params: {type: 'genre', id: `${genre.mal_id}`, name: `${genre.name}` } })">{{ genre.name }} <span>({{ genre.count }})</span></li></a
        >
      </ul>
    </div>
  </ContainerNews>

  <ContainerNews>
    <div class="flex items-center justify-between mb-3 border-b-2 border-gray-300">
      <h3 class="container_news_title mb-1">Studios</h3>
    </div>
    <div>
      <ul class="grid grid-cols-4 gap-4">
        <a href="#" class="flex items-center pb-2"  v-for="studio in animeStudios" :key="studio.mal_id">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-3 h-3 mr-1 stroke-current"
          >
            <path
              fill-rule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clip-rule="evenodd"
            />
          </svg>
          <li class="hover:text-indigo-500 text-sm" @click="$router.push({ name: 'animeListCategoryPage', params: { type: 'producer', id: `${studio.mal_id}`, name: `${studio.titles[0].title}` } })">{{ studio.titles[0].title }} <span>({{ studio.count }})</span></li></a
        >
      </ul>
    </div>
  </ContainerNews>
</template>
<style scoped></style>
