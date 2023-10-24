<script setup lang="ts">
import type { PropType } from 'vue';
import { useRouter } from 'vue-router'
import { useAnimeStore } from '../../stores/anime'
import { storeToRefs } from 'pinia'


const animeStore = useAnimeStore();
const { current_page } = storeToRefs(animeStore)

import ContainerNews from '../elementPage/ContainerNews.vue'

const router = useRouter()

export interface Anime_now {
   mal_id: number
    url: string
    images: {
      webp: {
        image_url: string
      }
    }
    title: string
    title_english: string
    synopsis: string | null
    studios: [{ mal_id: number; name: string }]
    genres: [{ mal_id: number; name: string }]
    aired: { from: Date }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
defineProps({
  anime: {
    type: Object as PropType<Anime_now>,
    required: true
  }
})

function goAnimeListCategoryPage(type: string, mal_id: number, name: string) {
  current_page.value = 1
  router.push({ name: 'animeListCategoryPage', params: {type: `${type}`, id: `${mal_id}`, name: `${name}` } })
}
</script>
<template>
  <ContainerNews>
    <a href="#">
      <div>
        <h3 class="container_news_title" @click="router.push({ name: 'animePage', params: { id: `${anime.mal_id}` } })">{{ anime.title_english ? anime.title_english : anime.title }}</h3>
      </div>
    </a>
    <div class="flex flex-col md:flex-row space-x-3">
      <a class="text-center basis-1/1" href="#">
        <div class="relative inline-block overflow-hidden">
          <img
            :src="anime.images.webp.image_url"
            :alt="anime.title"
            @click="router.push({ name: 'animePage', params: { id: `${anime.mal_id}` } })"
          />
          <div
            class="w-32 h-10 text-sm text-white absolute top-5 left-5 font-medium rounded-md bg-red-400"
          >
            <div class="flex justify-center items-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              <div class="pl-2 flex items-center">{{new Date(anime.aired.from).toDateString().split(' ').splice(1).join(' ')}}</div>
            </div>
          </div>
        </div>
      </a>

      <div class="basis-2/3 flex flex-col justify-between">
        <a href="#" @click="router.push({ name: 'animePage', params: { id: `${anime.mal_id}` } })">
          <div
            class="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500"
          >
           {{ anime.synopsis?.substring(0, anime.synopsis.length - 1).slice(0, 100) + '...' }}
          </div>
        </a>
        <div class="flex flex-col lg:flex-row justify-between mt-2">
          <div class="flex w-full lg:w-2/4">
            <div class="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-6 h-6 fill-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="text-gray-700 dark:text-gray-400">
              <a class="hover:font-medium" href="#" 
              v-for="(genre, i) in anime.genres" 
              :key="genre.mal_id"
              @click="goAnimeListCategoryPage('genre', genre.mal_id, genre.name)">
              {{genre.name}}{{(i < anime.genres.length - 1) ? ', ' : ''  }}
            </a>
            </div>
          </div>
          <div class="flex w-full lg:w-2/4 lg:justify-end">
            <div class="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-6 h-6 fill-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="text-gray-700 dark:text-gray-400">
              <a class="hover:font-medium" href="#" 
              v-for="(studio, i) in anime.studios" 
              :key="studio.mal_id"
              @click="goAnimeListCategoryPage('producer', studio.mal_id, studio.name)">
              {{ studio.name }}{{(i < anime.studios.length - 1) ? ', ' : ''  }}
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContainerNews>
</template>
<style scoped></style>
