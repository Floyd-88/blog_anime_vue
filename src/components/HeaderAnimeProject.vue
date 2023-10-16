<script lang="ts" setup>
import {useRouter} from 'vue-router'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter()
</script>
<template>
  <header
    class="bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-90% dark:from-sky-800 dark:to-emerald-800"
  >
    <div class="py-4 flex items-center justify-between max-w-screen-xl mx-auto">
      <div class="flex items-center">
        <div class="flex items-center xl:hidden">
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
        <img src="../assets/img/logo/logo_headar.png" alt="logo" />
      </div>
      <nav class="hidden xl:flex">
        <ul class="flex text-xl text-gray-600 dark:text-slate-300 font-bold uppercase">
          <li><a href="#" class="nav_link" @click="$router.push('/')">Home</a></li>
          <li><a href="#" class="nav_link" @click="$router.push('/top')">Top</a></li>
          <li><a href="#" class="nav_link" @click="$router.push('/recommendations')">Recommendations</a></li>
          <li><a href="#" class="nav_link" @click="$router.push('/category')">Category</a></li>
        </ul>
      </nav>
      <div class="items-center hidden xl:flex">
        <input
          type="text"
          placeholder="Search..."
          class="p-2 text-gray-500 bg-gray-100 border-2 rounded-md hover:border-gray-600 transition-all duration-300"
        />
        <button
          class="py-2 px-3 ml-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>

      <ul class="hidden sm:flex items-center mx-2">
        <li>
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
        </li>
        <!-- <li><button class="btn_header">Login</button></li>
            <li><button class="btn_header">Register</button></li> -->
      </ul>
    </div>
  </header>
</template>
<style scoped></style>
