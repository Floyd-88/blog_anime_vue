<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

import { useAnimeStore } from '../stores/anime'
import { storeToRefs } from 'pinia'

import ContainerNews from '@/components/elementPage/ContainerNews.vue'
import PaginationPage from '@/components/elementPage/PaginationPage.vue'

import { onMounted } from 'vue'

const animeStore = useAnimeStore()
const { animeArrayCatetegory } = storeToRefs(animeStore)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter()
const route = useRoute()


onMounted(() => {
  if(route.params.type === 'genre') { 
    animeStore.getAnimeArrayCatetegory(25, 1, Number(route.params.id))
  } else {
    animeStore.getAnimeArrayStudios(25, 1, Number(route.params.id))
  }
})
</script>
<template>
  <ContainerNews>
    <div>
      <div class="flex justify-between">
        <h3 class="container_news_title">{{ route.params.name }}</h3>
      </div>
          <div class="flex flex-wrap gap-3">
            <div
              class="border-2"
              v-for="anime in animeArrayCatetegory.sort((a, b) => a.rank - b.rank)"
              :key="anime.mal_id"
            >
              <div class="">
                <div class="text-base font-medium w-80">
                  <a href="#" @click="router.push({ name: 'animePage', params: { id: `${anime.mal_id}` } })">{{ anime.title }}</a>
                </div>

                <div class="mb-2">
                  <a
                    class="mr-1 p-0.5 border border-indigo-500 bg-gray-600 font-bold text-xs text-white"
                    href="#"
                    v-for="genre in anime.genres.slice(0, 4)"
                    :key="genre.mal_id"
                  >
                    {{ genre.name }}
                  </a>
                </div>

                <div class="flex text-xs mb-1">
                  <div class="pr-2 mr-2 border-r-2 border-gray-500">
                    <span>{{ anime.type }}</span
                    ><span v-if="anime.episodes > 1">({{ anime.episodes }})</span>
                  </div>
                  <div class="pr-2 mr-2 border-r-2 border-gray-500 " v-if="anime.year">
                    <span>{{ anime.year }}</span>
                  </div>

                  <div>
                    <span>{{ anime.status }}</span>
                  </div>
                </div>

                <div class="flex h-60">
                  <div class="mr-2 cursor-pointer w-40 h-60">
                    <img
                      :src="anime.images.webp.image_url"
                      :alt="anime.title"
                      @click="router.push({ name: 'animePage', params: { id: `${anime.mal_id}` } })" 
                    />
                  </div>
                  <div class="w-40 text-sm h-full overflow-hidden hover:overflow-y-scroll">
                    {{ anime.synopsis }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </ContainerNews>
  <PaginationPage />
</template>
<style scoped></style>
