<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderAnimeProject from '@/components/HeaderAnimeProject.vue'
import BannerAnimeProject from '@/components/BannerAnimeProject.vue'
import AsideAnimeProject from '@/components/AsideAnimeProject.vue'
import FooterAnimeProject from '@/components/FooterAnimeProject.vue'
import { onMounted } from 'vue'

import { useAnimeStore } from './stores/anime'

const aimeStore = useAnimeStore();

onMounted(() => {
  aimeStore.getTopAnimeLimit()   
})

</script>

<template>
  <div class="h-screen grid grid-rows-[auto_1fr_auto]">
    <!-- header -->
    <HeaderAnimeProject />
    <div>
      <!-- banner -->
      <BannerAnimeProject />

      <!-- основной контент -->
      <main class="max-w-screen-lg mx-auto sm:flex sm:flex-row justify-center">
        <!-- блок слева -->
        <AsideAnimeProject />

        <!-- блок справа -->
        <section class="basis-3/4">
          <RouterView />
          <!-- ----------- -->
        </section>
      </main>
    </div>

    <!-- footer -->
    <FooterAnimeProject />
  </div>
</template>

<style scoped></style>
./stores/anime