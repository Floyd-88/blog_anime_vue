<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useAnimeStore } from '../stores/anime'
import { storeToRefs } from 'pinia'

import ContainerNews from '@/components/elementPage/ContainerNews.vue'
import PaginationPage from '@/components/elementPage/PaginationPage.vue'

import { onMounted } from 'vue';

const animeStore = useAnimeStore();
const { topAnime } = storeToRefs(animeStore)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter();

onMounted(() => {
  animeStore.getTopAnime(20, 1)
    
})

</script>
<template>
  <ContainerNews>
    <div>
      <div class="flex justify-between">
        <h3 class="container_news_title">Top Anime</h3>
        <!-- <button class="px-2 h-max border-2 border-indigo-400 bg-indigo-400 text-white hover:bg-indigo-600">Next 20</button> -->
      </div>
      <div>
        <table class="table-fixed border-x border-b">
          <thead>
            <tr>
              <th
                class="font-bold p-2 border-b border-indigo-700 text-center bg-indigo-500 text-white"
              >
                Rank
              </th>
              <th
                class="font-bold p-2 border-b w-full border-l text-center border-indigo-700 bg-indigo-500 text-white"
              >
                Title
              </th>
              <th
                class="font-bold py-2 px-4 w-8 border-b border-l text-center border-indigo-700 bg-indigo-500 text-white"
              >
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-gray-100 hover:!bg-stone-200" v-for="anime in topAnime.sort((a, b) => a.rank - b.rank)" :key="anime.mal_id">
              <td class="p-2 border-b border-l text-center align-baseline">{{ anime.rank }}</td>
              <td class="p-2 border-b border-l text-left">
                <div class="flex">
                  <div class="mr-2 cursor-pointer">
                    <img :src="anime.images.webp.image_url" :alt="anime.title" @click="$router.push('/anime/1')"/>
                  </div>
                  <div>
                    <div class="text-lg font-medium">
                      <a href="#" @click="$router.push('/anime/1')">{{ anime.title }}</a>
                    </div>
                    <div>
                      <div class="text-sm"><span>{{ anime.type }} </span><span v-if="anime.episodes > 1">({{anime.episodes}})</span></div>
                      <div class="text-sm"><span>{{new Date(anime.aired.from).toDateString().split(' ').splice(1).join(' ')}}</span> - <span>{{new Date(anime.aired.to).toDateString().split(' ').splice(1).join(' ')}}</span></div>

                      <div class="mt-2 text-sm">
                        <a
                          class="mr-1 p-0.5 border border-indigo-500 bg-gray-600 font-bold text-xs text-white"
                          href="#"
                          v-for="(genre) in anime.genres" :key="genre.mal_id">
                          {{genre.name}}
                        </a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="py-2 px-4 border-b border-l text-center">
                <div class="flex items-center">
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
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </ContainerNews>
  <PaginationPage />
</template>
<style scoped></style>
../stores/anime