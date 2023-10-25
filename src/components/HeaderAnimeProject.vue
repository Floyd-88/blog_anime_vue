<script lang="ts" setup>
import { useRouter } from 'vue-router'
import SearchElement from './elementPage/SearchElement.vue'

import { useAnimeStore } from '../stores/anime'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const animeStore = useAnimeStore()
const { current_page } = storeToRefs(animeStore)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter()

function goPage(url: string) {
  current_page.value = 1
  router.push(url)
  isNavMenu.value = false
}

const isNavMenu = ref(false)

function showNawMenu() {
  isNavMenu.value = !isNavMenu.value
}

function closeNavMenu(bool: boolean) {
  isNavMenu.value = bool
}
</script>
<template>
  <header
    class="fixed z-50 w-full bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-90% dark:from-sky-800 dark:to-emerald-800"
  >
    <div
      class="py-4 flex flex-col lg:flex-row items-center justify-between max-w-screen-xl mx-auto"
    >
      <div class="flex items-center w-full">
        <div class="flex justify-start absolute lg:hidden" @click="showNawMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mx-4 xl:hidden w-10 h-10 cursor-pointer dark:text-slate-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        <img class="m-auto" src="../assets/img/logo/logo_headar.png" alt="logo" />
      </div>
      
        <nav class="hidden lg:flex">
          <ul class="flex text-xl text-gray-600 dark:text-slate-300 font-bold uppercase">
            <li><a href="#" class="nav_link" @click="goPage('/')">Home</a></li>
            <li><a href="#" class="nav_link" @click="goPage('/top')">Top</a></li>
            <li>
              <a href="#" class="nav_link" @click="goPage('/recommendations')">Recommendations</a>
            </li>
            <li><a href="#" class="nav_link" @click="goPage('/category')">Category</a></li>
          </ul>
        </nav>

        <SearchElement class="hidden lg:flex" @closeNavMenu="closeNavMenu" />   
    </div>
  </header>
  <transition name="slideDown">
        <div class="mt-[78px] pb-4 lg:hidden fixed z-20 w-full bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-90% dark:from-sky-800 dark:to-emerald-800" v-if="isNavMenu">
          <nav class="flex w-full">
            <ul
              class="flex w-full flex-col text-xl text-gray-600 dark:text-slate-300 font-bold uppercase"
            >
              <li
                class="text-center py-2 w-full border-t-4 border-gray-600 text-slate-600 bg-gray-400 hover:bg-indigo-300 cursor-pointer"
              >
                <a href="#" class="lg:nav_link" @click="goPage('/')">Home</a>
              </li>
              <li
                class="text-center py-2 w-full border-t-4 border-gray-600 text-slate-600 bg-gray-400 hover:bg-indigo-300 cursor-pointer"
              >
                <a href="#" class="lg:nav_link" @click="goPage('/top')">Top</a>
              </li>
              <li
                class="text-center py-2 w-full border-t-4 border-gray-600 text-slate-600 bg-gray-400 hover:bg-indigo-300 cursor-pointer"
              >
                <a href="#" class="lg:nav_link" @click="goPage('/recommendations')"
                  >Recommendations</a
                >
              </li>
              <li
                class="text-center py-2 w-full border-y-4 border-gray-600 text-slate-600 bg-gray-400 hover:bg-indigo-300 cursor-pointer"
              >
                <a href="#" class="lg:nav_link" @click="goPage('/category')">Category</a>
              </li>
            </ul>
          </nav>
          <SearchElement @closeNavMenu="closeNavMenu" />
        </div>
      </transition>
</template>
<style scoped>
 .slideDown-enter-active,
  .slideDown-leave-active {
    transition: all 0.3s ease;
  }

  .slideDown-enter-from,
  .slideDown-leave-to {
    transform: translateY(-100%);
    transition: all 0.3s ease-in 0s
  }
</style>
