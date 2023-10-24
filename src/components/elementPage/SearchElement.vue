<script lang="ts" setup>
import {  useRouter } from 'vue-router'

import { useAnimeStore } from '../../stores/anime'
import { storeToRefs } from 'pinia'
import { defineEmits } from 'vue'

const emit = defineEmits(['closeNavMenu'])


const animeStore = useAnimeStore()
const { animeSearch, current_page } = storeToRefs(animeStore)
const router = useRouter()

function searchAnime() {
    current_page.value = 1
    animeStore.getAnimeSearch(25, 1)
    router.push({ name: 'searchPage'})
    window.scrollTo(0, 0)
    emit('closeNavMenu', false)
}

</script>
<template>
  <div class="flex w-full px-4 items-center mt-4 lg:mt-0 xl:flex">
    <input
          type="text"
          placeholder="Search..."
          class="p-2 w-full text-gray-500 bg-gray-100 border-2 rounded-md hover:border-gray-600 transition-all duration-300"
          v-model="animeSearch"
          @keyup.enter="searchAnime" 
        />
    <button
      class="py-2 px-3 ml-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300"
      @click="searchAnime"
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-7 h-7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </div>
</template>
<style scoped></style>
