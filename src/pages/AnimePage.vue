<script setup lang="ts">
import ContainerNews from '@/components/elementPage/ContainerNews.vue'
</script>
<template>
  <ContainerNews>
    <div>
      <div class="mb-1">
        <h3 class="text-2xl font-bold">Attack on Titan</h3>
        <h3 class="text-base font-bold">Shingeki no Kyojin</h3>
      </div>
      <div>2013 | R - 17 + (violence & profanity)</div>
      <div>
        <ul class="flex my-2">
          <li class="mr-2 p-1 border border-indigo-500 bg-gray-600 font-bold text-xs text-white">
            Shounen
          </li>
          <li class="mr-2 p-1 border border-indigo-500 bg-gray-600 font-bold text-xs text-white">
            Action
          </li>
          <li class="mr-2 p-1 border border-indigo-500 bg-gray-600 font-bold text-xs text-white">
            Award Winning
          </li>
          <li class="mr-2 p-1 border border-indigo-500 bg-gray-600 font-bold text-xs text-white">
            Drama
          </li>
          <li class="mr-2 p-1 border border-indigo-500 bg-gray-600 font-bold text-xs text-white">
            Suspense
          </li>
        </ul>
      </div>

      <div class="mt-3">
        <div class="flex space-x-2">
          <img class="basis-1/3" src="../assets/img/attackwebp.webp" alt="ava" />
          <div class="basis-2/3">
            <div class="h-full" style="flex: 1 1 0%; background: rgb(0, 0, 0)">
              <iframe
                frameborder="0"
                fullscreen="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                title="TVアニメ「進撃の巨人」PV 第２弾"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LHtdKWJdif4?controls=0&amp;rel=0&amp;showInfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fandyhuntdev.github.io&amp;widgetid=7"
                id="widget8"
              ></iframe>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <h2 class="text-xl font-medium">Rates</h2>
          <div class="flex justify-around mb-4">
            <div
              class="basis-1/3 flex flex-col justify-center items-center p-2 rounded-md border-2 border-green-500"
            >
              <p class="font-medium">score</p>
              <div class="font-bold text-2xl"><span>8.54</span>/<span>10</span></div>
            </div>
            <div 
              class="basis-1/3 flex flex-col justify-center items-center p-2 rounded-md border-2 border-blue-500"
            >
                <p class="font-medium">rank</p>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-yellow-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <span class="font-bold text-2xl">109</span>
                </div>
            </div>
          </div>
          <div class="flex space-x-2">
            <div class="basis-1/3 pr-2">
              <h2 class="text-2xl font-bold mb-2">General info</h2>
              <ul>
                <li class="mb-2 py-1 text-base border-t border-indigo-500">Type: <span>TV</span></li>
                <li class="mb-2 py-1 text-base border-t border-indigo-500">Source: <span>Manga</span></li>
                <li class="mb-2 py-1 text-base border-t border-indigo-500">Episodes: <span>25</span></li>
                <li class="mb-2 py-1 text-base border-t border-indigo-500">Status: <span>Finished Airing</span></li>
                <li class="mb-2 py-1 text-base border-t border-indigo-500">Duration: <span>24 min per ep</span></li>
              </ul>
            </div>
            <div class="basis-3/4">
              <h2 class="text-2xl font-bold mb-2">Synopsis</h2>
              <div>
                Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid
                creatures called Titans, forcing humans to hide in fear behind enormous concentric
                walls. What makes these giants truly terrifying is that their taste for human flesh
                is not born out of hunger but what appears to be out of pleasure. To ensure their
                survival, the remnants of humanity began living within defensive barriers, resulting
                in one hundred years without a single titan encounter. However, that fragile calm is
                soon shattered when a colossal Titan manages to breach the supposedly impregnable
                outer wall, reigniting the fight for survival against the man-eating abominations.
                After witnessing a horrific personal loss at the hands of the invading creatures,
                Eren Yeager dedicates his life to their eradication by enlisting into the Survey
                Corps, an elite military unit that combats the merciless humanoids outside the
                protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood
                friend Armin Arlert join the brutal war against the Titans and race to discover a
                way of defeating them before the last walls are breached. [Written by MAL Rewrite]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContainerNews>
</template>
<style scoped></style>
