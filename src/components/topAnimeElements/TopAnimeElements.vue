<script lang="ts" setup>
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'


import { useAnimeStore } from '../../stores/anime'
import { storeToRefs } from 'pinia'

import type { Anime } from '@/types/anime'

const router = useRouter()


const animeStore = useAnimeStore()
const { current_page } = storeToRefs(animeStore)

function goAnimeListCategoryPage(type: string, mal_id: number, name: string) {
  current_page.value = 1
  router.push({
    name: 'animeListCategoryPage',
    params: { type: `${type}`, id: `${mal_id}`, name: `${name}` }
  })
}

defineProps({
  topAnime: {
    type: Array as PropType<Anime[]>,
    required: true
  }
})


</script>

<template>
  <div class="grid" v-for="anime in topAnime" :key="anime.mal_id">
    <div class="grid gap-1 grid-cols-[60px_1fr] md:grid-cols-[60px_1fr_100px] pb-2 mb-2  md:border-0 dark:bg-gray-400 dark:text-gray-700">
      <!-- ---- -->
      <div class="md:order-1 flex justify-center items-center font-bold border-b border-indigo-700 bg-indigo-500 dark:bg-indigo-600 text-white">
        Rank
      </div>
      <!-- ---- -->


      <!-- ---- -->
      <div class="md:order-4 flex justify-center items-center text-lg font-bold">{{ anime.rank }}</div>
      <!-- ---- -->


      <!-- ---- -->
      <div
        class="md:order-2 flex justify-center items-center  font-bold border-b border-indigo-700 bg-indigo-500 dark:bg-indigo-600 text-white"
      >
        Title
      </div>
      <!-- ---- -->


      <!-- ---- -->
      <div class="md:order-5 pb-2">
          <div class="flex flex-col lg:flex-row">
            <div class="lg:mr-2">
              <img
                class="cursor-pointer"
                :src="anime.images.webp.image_url"
                :alt="anime.title"
                @click="$router.push({ name: 'animePage', params: { id: `${anime.mal_id}` } })"
              />
            </div>
            <div>
              <div class="text-lg font-medium dark:hover:text-gray-900">
                <a
                  href="#"
                  @click="$router.push({ name: 'animePage', params: { id: `${anime.mal_id}` } })"
                  >{{ anime.title_english ? anime.title_english : anime.title }}</a
                >
              </div>
              <div>
                <div class="text-sm">
                  <span>{{ anime.type }} </span
                  ><span v-if="anime.episodes > 1">({{ anime.episodes }})</span>
                </div>
                <div class="text-sm">
                  <span>{{
                    new Date(anime.aired?.from).toDateString().split(' ').splice(1).join(' ')
                  }}</span>
                  -
                  <span>{{
                    new Date(anime.aired?.to).toDateString().split(' ').splice(1).join(' ')
                  }}</span>
                </div>

                <div class="mt-2 text-sm">
                  <a
                    class="mr-1 p-0.5 border border-indigo-500 bg-gray-600 font-bold text-xs text-white dark:hover:text-gray-900"
                    href="#"
                    @click="goAnimeListCategoryPage('genre', genre.mal_id, genre.name)"
                    v-for="genre in anime.genres"
                    :key="genre.mal_id"
                  >
                    {{ genre.name }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!-- ---- -->


      <!-- ---- -->
      <div
        class="md:order-3 flex justify-center items-center font-bold text-center border-b border-indigo-700 bg-indigo-500 dark:bg-indigo-600 text-white"
      >
        Score
      </div>
      <!-- ---- -->

      <!-- ---- -->
      <div class="md:order-6 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-2 text-yellow-500 fill-yellow-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <span class="font-bold text-2xl">{{ anime.score }}</span>
      </div>
      <!-- ---- -->

    </div>
  </div>
</template>
