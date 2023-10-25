<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useAnimeStore } from '../stores/anime'
import { storeToRefs } from 'pinia'

import ContainerNews from '@/components/elementPage/ContainerNews.vue'
import PaginationPage from '@/components/elementPage/PaginationPage.vue'
import TopAnimeElements from '@/components/topAnimeElements/TopAnimeElements.vue'


import { onMounted } from 'vue'

const animeStore = useAnimeStore()
const { topAnime, current_page } = storeToRefs(animeStore)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter()

onMounted(() => {
  animeStore.getTopAnime(20, current_page.value)
})


</script>
<template>
  <ContainerNews>
    <div>
      <div class="flex justify-between">
        <h3 class="container_news_title">Top Anime</h3>
        <!-- <button class="px-2 h-max border-2 border-indigo-400 bg-indigo-400 text-white hover:bg-indigo-600">Next 20</button> -->
      </div>
      <TopAnimeElements :topAnime="topAnime.sort((a, b) => a.rank - b.rank)"/>
      </div>
  </ContainerNews>
  <PaginationPage />
</template>
<style scoped></style>
../stores/anime
