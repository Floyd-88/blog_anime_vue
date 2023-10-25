<script setup lang="ts">
import { useRoute } from 'vue-router'

import { useAnimeStore } from '../stores/anime'
import { storeToRefs } from 'pinia'

import ContainerNews from '@/components/elementPage/ContainerNews.vue'
import { onMounted, watch } from 'vue'

const animeStore = useAnimeStore()
const { anime } = storeToRefs(animeStore)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const route = useRoute()

animeStore.getAnime(Number(route.params.id))
window.scrollTo(0, 0)


watch(
  () => route.params,
  (to, from) => {
    // if(!anime.value) {
      animeStore.getAnime(Number(route.params.id))
    window.scrollTo(0, 0)
    // }
  }
)
</script>
<template>
  <ContainerNews>
    <div class="dark:text-gray-400">
      <div class="mb-1 flex justify-between">
        <div class="pr-2">
          <h3 class="text-base md:text-2xl font-bold">{{ anime.title_english }}</h3>
          <h3 class="text-base font-bold">{{ anime.title }}</h3>
        </div>
        <button
          class="px-2 h-max border-2 border-indigo-400 bg-indigo-400 text-white hover:bg-indigo-600"
          @click="$router.go(-1)"
        >
          Back
        </button>
      </div>
      <div>{{ anime.aired?.from?.toLocaleString().slice(0, 4) }} | {{ anime.rating }}</div>
      <div>
        <ul class="flex my-2">
          <li
            class="mr-2 p-1 border border-indigo-500 bg-gray-600 hover:bg-gray-400 font-bold text-xs text-white cursor-pointer"
            @click="
              $router.push({
                name: 'animeListCategoryPage',
                params: { type: 'genre', id: `${genre.mal_id}`, name: `${genre.name}` }
              })
            "
            v-for="genre in anime.genres"
            :key="genre.mal_id"
          >
            {{ genre.name }}
          </li>
        </ul>
      </div>

      <div class="mt-3">
        <div class="flex flex-col sm:flex-row sm:space-x-2">
          <img class="basis-1/3 pb-2 sm:pb-0" :src="anime.images?.webp.image_url" :alt="anime.title_english" />
          <div class="basis-2/3">
            <div class="h-full" style="flex: 1 1 0%; background: rgb(0, 0, 0)">
              <iframe
                frameborder="0"
                allow="fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                :title="anime.title"
                width="100%"
                height="100%"
                :src="anime.trailer?.embed_url"
                id="widget8"
              ></iframe>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <h2 class="text-xl font-medium">Rates</h2>
          <div class="flex justify-around mb-4">
            <div
              class="basis-1/3 flex flex-col justify-center items-center p-2 rounded-md border-2 border-green-500"
            >
              <p class="font-medium">score</p>
              <div class="font-bold text-2xl" v-if="anime.score">
                <span>{{ anime.score }}</span
                >/<span>10</span>
              </div>
            </div>
            <div
              class="basis-1/3 flex flex-col justify-center items-center p-2 rounded-md border-2 border-blue-500"
            >
              <p class="font-medium">rank</p>
              <div class="flex items-center" v-if="anime.rank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-yellow-500 fill-yellow-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <span class="font-bold text-2xl">{{ anime.rank }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row lg:space-x-2">
            <div class="basis-1/3 pr-2">
              <h2 class="text-2xl font-bold mb-2">General info</h2>
              <ul>
                <li class="mb-2 py-1 text-base border-t border-indigo-500 font-medium">
                  Type: <span class="font-light" v-if="anime.type">{{ anime.type }}</span>
                </li>
                <li class="mb-2 py-1 text-base border-t border-indigo-500 font-medium">
                  Source: <span class="font-light" v-if="anime.source">{{ anime.source }}</span>
                </li>
                <li class="mb-2 py-1 text-base border-t border-indigo-500 font-medium">
                  Episodes: <span class="font-light" v-if="anime.episodes">{{ anime.episodes }}</span>
                </li>
                <li class="mb-2 py-1 text-base border-t border-indigo-500 font-medium">
                  Status: <span class="font-light" v-if="anime.status">{{ anime.status }}</span>
                </li>
                <li class="mb-2 py-1 text-base border-t border-indigo-500 font-medium">
                  Duration: <span class="font-light" v-if="anime.duration">{{ anime.duration }}</span>
                </li>
                <li class="mb-2 py-1 text-base border-t border-indigo-500 font-medium">
                  Studios: <span class="font-light"  v-for="studio in anime.studios"
                                  :key="studio.mal_id">{{ studio.name }}</span>
                </li>
                <li class="mb-2 py-1 text-sm border-t border-indigo-500 font-medium">
                  Aired: <span class="font-light">{{
                    new Date(anime.aired?.from).toDateString().split(' ').splice(1).join(' ')
                  }}</span>
                  -
                  <span class="font-light">{{
                    new Date(anime.aired?.to).toDateString().split(' ').splice(1).join(' ')
                  }}</span>
                </li>
              </ul>
            </div>
            <div class="basis-3/4">
              <h2 class="text-2xl font-bold mb-2">Synopsis</h2>
              <div>
                {{ anime.synopsis }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContainerNews>
</template>
<style scoped></style>
