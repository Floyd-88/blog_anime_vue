<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

import { useAnimeStore } from '../stores/anime'
import { storeToRefs } from 'pinia'

import ContainerNews from '@/components/elementPage/ContainerNews.vue'
import PaginationPage from '@/components/elementPage/PaginationPage.vue'
import AnimeList from '@/components/AnimeList.vue'

import { onMounted, watch } from 'vue'

const animeStore = useAnimeStore()
const { animeArrayCatetegory, current_page } = storeToRefs(animeStore)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter()
const route = useRoute()

onMounted(() => {
  if (route.params.type === 'genre') {
    animeStore.getAnimeArrayCatetegory(25, current_page.value, Number(route.params.id))
  } else {
    animeStore.getAnimeArrayStudios(25, current_page.value, Number(route.params.id))
  }
})

watch(
  () => route.params,
  (to, from) => {
    if (route.params.type === 'genre') {
      animeStore.getAnimeArrayCatetegory(25, current_page.value, Number(route.params.id))
    } else {
      animeStore.getAnimeArrayStudios(25, current_page.value, Number(route.params.id))
    }
    window.scrollTo(0, 0)
  },
  { deep: true }
)
</script>
<template>
  <ContainerNews>
    <div>
      <div class="flex justify-between">
        <h3 class="container_news_title">{{ route.params.name }}</h3>
      </div>
      <AnimeList :animeList="animeArrayCatetegory" />
    </div>
  </ContainerNews>
  <PaginationPage />
</template>
<style scoped></style>
