<script setup lang="ts">
import { useRoute } from 'vue-router'
import Paginate from 'vuejs-paginate-next'
import { storeToRefs } from 'pinia'
import { useAnimeStore } from '../../stores/anime'

const aimeStore = useAnimeStore()
const { last_visible_page, current_page } = storeToRefs(aimeStore)

const route = useRoute()

const clickCallback = () => {
  window.scrollTo(0, 0)
  switch (decodeURIComponent(route.fullPath)) {
    case '/':
      aimeStore.getNewAnime(10, current_page.value)
      break
    case '/top':
      aimeStore.getTopAnime(20, current_page.value)
      break
    case '/recommedations':
      aimeStore.getRecommendationsAnime(current_page.value)
      break
    case `/category/genre/${Number(route.params.id)}/${route.params.name}`:
      aimeStore.getAnimeArrayCatetegory(25, current_page.value, Number(route.params.id))
      break
    case `/category/producer/${Number(route.params.id)}/${route.params.name}`:
      aimeStore.getAnimeArrayStudios(25, current_page.value, Number(route.params.id))
      break
      case `/search`:
      aimeStore.getAnimeSearch(25, current_page.value)
      break
  }
}
</script>
<template>
  <div class="mt-10 mb-10">
    <Paginate
      v-model="current_page"
      :page-count="last_visible_page"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :prev-class="'pagination rounded-l'"
      :next-class="'pagination rounded-r'"
      :container-class="'flex justify-center'"
      :page-class="'hidden md:pagination'"
      :active-class="'pagination bg-gray-200 text-indigo-700 hover:bg-gray-200 hover:text-indigo-700 font-mediu'"
    >
    </Paginate>
  </div>
</template>
<style scoped></style>
../../stores/anime
