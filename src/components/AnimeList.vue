<script lang="ts" setup>
import type { PropType } from 'vue'

import { useRouter } from 'vue-router'

import { useAnimeStore } from '../stores/anime'
import { storeToRefs } from 'pinia'
import type { Anime } from '@/types/anime'

const animeStore = useAnimeStore()
const { current_page } = storeToRefs(animeStore)

const router = useRouter()

function goAnimeListCategoryPage(type: string, mal_id: number, name: string) {
  current_page.value = 1
  router.push({
    name: 'animeListCategoryPage',
    params: { type: `${type}`, id: `${mal_id}`, name: `${name}` }
  })
}

defineProps({
  animeList: {
    type: Array as PropType<Anime[]>,
    required: true
  }
})
</script>
<template>
  <div class="flex flex-col lg:flex-row lg:flex-wrap gap-3 dark:text-gray-400">
    <div class="border-2" v-for="anime in animeList" :key="anime.mal_id">
      <div >
        <div class="text-base font-medium w-80">
          <a
            href="#"
            @click="router.push({ name: 'animePage', params: { id: `${anime.mal_id}` } })"
            >{{ anime.title_english ? anime.title_english : anime.title }}</a
          >
        </div>

        <div class="mb-2">
          <a
            class="mr-1 p-0.5 border border-indigo-500 bg-gray-600 font-bold text-xs text-white"
            href="#"
            v-for="genre in anime.genres?.slice(0, 4)"
            :key="genre.mal_id"
            @click="goAnimeListCategoryPage('genre', genre.mal_id, genre.name)"
          >
            {{ genre.name }}
          </a>
        </div>

        <div class="flex text-xs mb-1">
          <div class="pr-2 mr-2 border-r-2 border-gray-500">
            <span>{{ anime.type }}</span
            ><span v-if="anime.episodes > 1">({{ anime.episodes }})</span>
          </div>
          <div class="pr-2 mr-2 border-r-2 border-gray-500">
            <span>{{ anime.aired.from?.toLocaleString().slice(0, 4) }}</span>
          </div>

          <div>
            <span>{{ anime.status }}</span>
          </div>
        </div>

        <div class="flex h-auto lg:h-60">
          <div class="mr-2 cursor-pointer w-1/3 h-auto lg:w-40 lg:h-60">
            <img
              :src="anime.images.webp.image_url"
              :alt="anime.title"
              @click="router.push({ name: 'animePage', params: { id: `${anime.mal_id}` } })"
            />
          </div>
          <div class="w-2/3 lg:w-40 text-sm h-full overflow-hidden hover:overflow-y-scroll no-scrollbar">
            {{ anime.synopsis?.substring(0, anime.synopsis.length - 1).slice(0, 100) + '...' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
