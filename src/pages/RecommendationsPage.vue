<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAnimeStore } from '../stores/anime'
import { storeToRefs } from 'pinia'

import ContainerNews from '@/components/elementPage/ContainerNews.vue'

const animeStore = useAnimeStore()
const { animeRecommendations } = storeToRefs(animeStore)
const router = useRouter()

onMounted(() => {
  animeStore.getRecommendationsAnime(1)
})

</script>
<template>
  <ContainerNews>
    <div>
      <div class="flex items-center justify-between">
        <h3 class="container_news_title mb-1">Anime Recommendations</h3>
      </div>

      <div
        class="pb-4 pt-4 border-b-2 border-gray-300 dark:text-gray-300"
        v-for="recommend in animeRecommendations"
        :key="recommend.mal_id"
      >
        <div class="flex mb-2">
          <div class="flex flex-col w-1/2 pr-2">
            <div class="mr-2 w-14 h-20">
              <a href="#"
              class=""
                ><img class="w-full h-full lg:max-w-none" :src="recommend.entry[0].images.webp.small_image_url" alt="art" @click="router.push({ name: 'animePage', params: { id: `${recommend.mal_id.split('-')[0]}` } })"
              /></a>
            </div>
            <div>
              <div class="text-sm font-medium text-gray-500">If you liked</div>
              <div class="font-medium">
                <a href="#" @click="router.push({ name: 'animePage', params: { id: `${recommend.mal_id.split('-')[0]}` } })">{{ recommend.entry[0].title }}</a>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-1/2">
            <div class="mr-2 w-14 h-20">
              <a href="#"
                ><img class="w-full h-full lg:max-w-none" :src="recommend.entry[1].images.webp.small_image_url" alt="art" @click="router.push({ name: 'animePage', params: { id: `${recommend.mal_id.split('-')[1]}` } })"
              /></a>
            </div>
            <div>
              <div class="text-sm font-medium text-gray-500">...then you might like</div>
              <div class="font-medium">
                <a href="#" @click="router.push({ name: 'animePage', params: { id: `${recommend.mal_id.split('-')[1]}` } })">{{ recommend.entry[1].title }}</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-2 text-sm">
            {{ recommend.content }}
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            Anime rec by
            <span class="text-gray-600 font-medium dark:text-gray-400">{{
              recommend.user.username[0].toUpperCase() + recommend.user.username.slice(1)
            }}</span>
            -
            <span>{{ new Date(recommend.date).toDateString().split(' ').slice(1).join(' ') }}</span>
          </div>
        </div>
      </div>
    </div>
  </ContainerNews>
</template>
<style scoped></style>
../stores/recommendations_anime
../stores/anime