<script setup lang="ts">
import {onMounted} from 'vue'
import { useAnimeStore } from '../stores/anime'

import PaginationPage from '@/components/elementPage/PaginationPage.vue'
import MainAnimeProject from '@/components/mainAnimeProject/MainAnimeProject.vue'

const rootStore = useAnimeStore();

onMounted(() => {
    rootStore.getNewAnime(10, 1)
    rootStore.getTopAnimeLimit()
    
})

</script>

<template>
    <MainAnimeProject/>

    <!-- pagination -->
    <PaginationPage />
</template>
