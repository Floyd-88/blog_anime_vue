<script setup lang="ts">
import { useRouter } from 'vue-router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter();

</script>
<template>
  <aside
    class="basis-1/4 flex flex-wrap sm:flex-row h-fit ml-2 mr-2 mb-8 p-4 border-t-2 border-gray-100 dark:border-gray-800 shadow-lg shadow-gray-400 dark:shadow-gray-700"
  >
    <div class="w-1/2 sm:w-full p-1">
      <div>
        <a href="#"><img class="w-full h-40 object-cover  object-center" @click="$router.push('/anime/1')" src="../assets/img/attackwebp.webp" alt="img1" /></a>
      </div>
      <div class="mt-3 mb-6">
        <a href="#"><div class="title_prew" @click="$router.push('/anime/1')">Attack on Titan</div></a>
        <a href="#"
          ><div class="text_prew" @click="$router.push('/anime/1')">Centuries ago, mankind was slaughtered to near extinction by monstrous ...</div></a
        >
      </div>
    </div>
    <div class="w-1/2 sm:w-full p-1">
      <div>
        <a href="#"><img class="w-full h-40 object-cover  object-center" @click="$router.push('/anime/1')" src="../assets/img/attackwebp.webp" alt="img1" /></a>
      </div>
      <div class="mt-3 mb-6">
        <a href="#"><div class="title_prew" @click="$router.push('/anime/1')">Attack on Titan</div></a>
        <a href="#"
          ><div class="text_prew" @click="$router.push('/anime/1')">Centuries ago, mankind was slaughtered to near extinction by monstrous ...</div></a
        >
      </div>
    </div>
    <div class="w-1/2 sm:w-full p-1">
      <div>
        <a href="#"><img class="w-full h-40 object-cover  object-center" @click="$router.push('/anime/1')" src="../assets/img/attackwebp.webp" alt="img1" /></a>
      </div>
      <div class="mt-3 mb-6">
        <a href="#"><div class="title_prew" @click="$router.push('/anime/1')">Attack on Titan</div></a>
        <a href="#"
          ><div class="text_prew" @click="$router.push('/anime/1')">Centuries ago, mankind was slaughtered to near extinction by monstrous ...</div></a
        >
      </div>
    </div>
    <div class="w-1/2 sm:w-full p-1">
      <div>
        <a href="#"><img class="w-full h-40 object-cover  object-center" @click="$router.push('/anime/1')" src="../assets/img/attackwebp.webp" alt="img1" /></a>
      </div>
      <div class="mt-3 mb-6">
        <a href="#"><div class="title_prew" @click="$router.push('/anime/1')">Attack on Titan</div></a>
        <a href="#"
          ><div class="text_prew" @click="$router.push('/anime/1')">Centuries ago, mankind was slaughtered to near extinction by monstrous ...</div></a
        >
      </div>
    </div>
    <div class="w-1/2 sm:w-full p-1">
      <div>
        <a href="#"><img class="w-full h-40 object-cover  object-center" @click="$router.push('/anime/1')" src="../assets/img/attackwebp.webp" alt="img1" /></a>
      </div>
      <div class="mt-3 mb-6">
        <a href="#"><div class="title_prew" @click="$router.push('/anime/1')">Attack on Titan</div></a>
        <a href="#"
          ><div class="text_prew" @click="$router.push('/anime/1')">Centuries ago, mankind was slaughtered to near extinction by monstrous ...</div></a
        >
      </div>
    </div>
  </aside>
</template>
<style scoped></style>
