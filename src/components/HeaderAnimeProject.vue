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
    <div class="py-4 flex flex-col lg:flex-row items-center justify-between max-w-screen-xl mx-auto">
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
          <li><a href="#" class="nav_link" @click="goPage('/recommendations')">Recommendations</a></li>
          <li><a href="#" class="nav_link" @click="goPage('/category')">Category</a></li>
        </ul>
      </nav>
      <SearchElement class="hidden lg:flex" @closeNavMenu="closeNavMenu"/>

      <div class="w-full lg:hidden" v-if="isNavMenu">
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
        <SearchElement @closeNavMenu="closeNavMenu"/>
      </div>

      <ul class="hidden sm:flex items-center mx-2">
        <!-- <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mr-4 w-7 h-7 dark:text-slate-300 xl:hidden"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </li> -->
        <!-- <li><button class="btn_header">Login</button></li>
            <li><button class="btn_header">Register</button></li> -->
      </ul>
    </div>
  </header>
</template>
<style scoped></style>
