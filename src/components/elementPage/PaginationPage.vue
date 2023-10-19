<script setup lang="ts">
import { useRoute } from 'vue-router'
import Paginate from 'vuejs-paginate-next'
import { storeToRefs } from 'pinia'
import { useAnimeStore } from '../../stores/anime'
import { ref } from 'vue'

const aimeStore = useAnimeStore()
const { last_visible_page } = storeToRefs(aimeStore)

const route = useRoute()

let current_page = ref(1)

const clickCallback = () => {
  window.scrollTo(0, 0)

  switch (route.fullPath) {
    case '/':
      aimeStore.getNewAnime(10, current_page.value)
      break
    case '/top':
      aimeStore.getTopAnime(20, current_page.value)
      break
    case '/recommedations':
    aimeStore.getRecommendationsAnime(current_page.value)
      break
    // default:
    //   console.log("Sorry, we are out of " + expr + ".");
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
      :page-class="'pagination'"
      :active-class="'pagination bg-gray-200 text-indigo-700 hover:bg-gray-200 hover:text-indigo-700 font-mediu'"
    >
    </Paginate>
  </div>
</template>
<style scoped></style>
../../stores/anime