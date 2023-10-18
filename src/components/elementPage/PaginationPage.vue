<script setup lang="ts">
import Paginate from 'vuejs-paginate-next'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../../stores/anime_now'
const rootStore = useCounterStore()
const { last_visible_page, current_page } = storeToRefs(rootStore)

const clickCallback = () => {
  rootStore.getNewAnime(current_page.value)
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
