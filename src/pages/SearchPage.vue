<script setup lang="ts">
import { onBeforeRouteLeave, useRouter, useRoute } from 'vue-router'

import { useAnimeStore } from '../stores/anime'
import { storeToRefs } from 'pinia'

import ContainerNews from '@/components/elementPage/ContainerNews.vue'
import PaginationPage from '@/components/elementPage/PaginationPage.vue'
import AnimeList from '@/components/AnimeList.vue'

import { onMounted, watch } from 'vue'

const animeStore = useAnimeStore()
const { filterAnimeLetter, animeSearch, current_page } = storeToRefs(animeStore)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter()
const route = useRoute()

onMounted(() => {
  animeStore.getAnimeSearch(25, current_page.value)
})

watch(
  () => route.params,
  (to, from) => {
    animeStore.getAnimeSearch(25, current_page.value)
    window.scrollTo(0, 0)
  },
  { deep: true }
)

onBeforeRouteLeave((to, from) => {
  if (to.name !== 'animePage') {
    current_page.value = 1
    animeSearch.value = ''
    filterAnimeLetter.value = []
  }
})
</script>
<template>
  <ContainerNews>
    <div>
      <div class="flex justify-between">
        <h3 class="container_news_title" v-if="filterAnimeLetter.length">Found anime...</h3>
        <h3 class="container_news_title" v-else>Not Found anime...</h3>
      </div>
      <AnimeList :animeList="filterAnimeLetter" />
    </div>
  </ContainerNews>
  <PaginationPage />
</template>
<style scoped></style>
