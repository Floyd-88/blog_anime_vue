<script setup lang="ts">
import {onMounted} from 'vue'
import { useAnimeStore } from '../stores/anime'

import PaginationPage from '@/components/elementPage/PaginationPage.vue'
import MainAnimeProject from '@/components/mainAnimeProject/MainAnimeProject.vue'
import { storeToRefs } from 'pinia';

const animeStore = useAnimeStore();

const {current_page} = storeToRefs(animeStore)

onMounted(() => {
    animeStore.getNewAnime(10, current_page.value)
    animeStore.getTopAnimeLimit()  
})

</script>

<template>
    <MainAnimeProject/>

    <!-- pagination -->
    <PaginationPage />
</template>
