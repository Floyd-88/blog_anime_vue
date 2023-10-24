<script setup lang="ts">
import { ref } from 'vue';

const isNavFooter= ref('')
const sizeX = ref(document.documentElement.clientWidth)


function showNavFooter(value: string) {
  isNavFooter.value !== value ? isNavFooter.value = value : isNavFooter.value = ''
}

window.addEventListener('resize' , () => {
  sizeX.value = document.documentElement.clientWidth;
})
</script>
<template>
  <footer class="flex-row bg_footer h-[22rem] py-12 bg-cover text-white accent-emerald-500/25">
    <div
      class="max-w-screen-xl flex flex-col sm:flex-row mx-auto justify-center mb-4 px-4 text-gray-300"
    >
      <div class="sm:flex w-full">
        <div class="mb-4 sm:basis-1/4">
          <div class="flex justify-between">
            <!-- ----- -->
            <div class="text-xl mb-2 font-bold">Quick links</div>
            <div class="sm:hidden" @click="showNavFooter('Quick links')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
          <div class=" sm:flex"  v-if="isNavFooter === 'Quick links' || sizeX >= 768">
            <ul class="font-medium">
              <a href="https://portfolioit.ru/" target="_blank" class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 stroke-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <li class="hover:text-white">About me</li>
              </a>
              <a href="https://jikan.moe/" target="_blank" class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 stroke-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <li class="hover:text-white">Services</li>
              </a>
              <a href="https://github.com/jikan-me/jikan-rest/blob/master/LICENSE" target="_blank" class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 stroke-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <li class="hover:text-white">License</li></a
              >
            </ul>
          </div>
        </div>
            <!-- ----- -->
        <div class="mb-4 sm:basis-1/4">
          <div class="flex justify-between">
            <!-- ----- -->
            <div class="text-xl mb-2 font-bold">Category</div>
            <div class="sm:hidden" @click="showNavFooter('Category')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
          <!-- ------ -->
          <div class="sm:flex" v-if="isNavFooter === 'Category' || sizeX >= 768">
            <ul>
              <a href="#" class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 stroke-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <li class="hover:text-white" @click="$router.push({ name: 'animeListCategoryPage', params: {type: 'genre', id: `8`, name: `Drama` } })">Drama Anime</li></a
              >
              <a href="#" class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 stroke-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <li class="hover:text-white" @click="$router.push({ name: 'animeListCategoryPage', params: {type: 'genre', id: `22`, name: `Romance` } })">Romance Anime</li></a
              >
              
              <a href="#" class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 stroke-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <li class="hover:text-white" @click="$router.push({ name: 'animeListCategoryPage', params: {type: 'genre', id: `1`, name: `Action` } })">Action Anime</li></a
              >
              <a href="#" class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 stroke-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <li class="hover:text-white" @click="$router.push({ name: 'animeListCategoryPage', params: {type: 'genre', id: `4`, name: `Comedy` } })">Comedy Anime</li></a
              >
            </ul>
          </div>
        </div>
        <!-- ------- -->
        <div class="mb-4 sm:basis-1/4">
          <div class="flex justify-between">
            <div class="text-xl mb-2 font-bold">Menu Navigation</div>
            <div class="sm:hidden" @click="showNavFooter('Menu Navigation')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
          <!-- ---- -->
          <div class="sm:flex" v-if="isNavFooter === 'Menu Navigation' || sizeX >= 768">
            <ul>
              <a href="#" class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 stroke-current cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <li class="hover:text-white" @click="$router.push('/')">Home</li></a
              >
              <a href="#" class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 stroke-current cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <li class="hover:text-white" @click="$router.push('/top')">Top</li></a
              >
              <a href="#" class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 stroke-current cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <li class="hover:text-white" @click="$router.push('/recommendations')">Recommendations</li></a
              >
              <a href="#" class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 stroke-current cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <li class="hover:text-white" @click="$router.push('/category')">Category</li></a
              >
            </ul>
          </div>
        </div>
        <!-- ------ -->
        <div class="mb-4 sm:basis-1/4 sm:w-full">
          <div class="flex justify-between">
            <div class="text-xl mb-2 font-bold">Info</div>
            <div class="sm:hidden" @click="showNavFooter('Info')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
          <div class="sm:block" v-if="isNavFooter === 'Info' || sizeX >= 768">
            <div>Copyright (c) 2023 Jikan API</div>
            <div class="flex flex-wrap justify-start sm:flex mt-8">
              <div class="mr-5 my-3">
                <a href="https://raccoonnet.ru/" target="_blank"
                  ><img src="../assets/img/icons_network/twitter_footer.png" alt="twitter"
                /></a>
              </div>
              <div class="mr-5 my-3">
                <a href="https://raccoonnet.ru/" target="_blank"><img src="../assets/img/icons_network/in_footer.png" alt="in" /></a>
              </div>
              <div class="mr-5 my-3">
                <a href="https://raccoonnet.ru/" target="_blank"
                  ><img src="../assets/img/icons_network/dribbble_footer.png" alt="dribble"
                /></a>
              </div>
              <div class="mr-5 my-3">
                <a href="https://raccoonnet.ru/" target="_blank"
                  ><img src="../assets/img/icons_network/instagram_footer.png" alt="instagramm"
                /></a>
              </div>
            </div>
          </div>
        <!-- ----- -->
        </div>
      </div>
    </div>

    <!-- logo -->
    <div class="hidden md:flex justify-center">
      <img src="../assets/img/logo/logo-footer.png" alt="logo_footer" />
    </div>
  </footer>
</template>
<style scoped></style>
