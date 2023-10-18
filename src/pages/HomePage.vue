<script setup lang="ts">
import {onMounted} from 'vue'
import { useCounterStore } from '../stores/anime_now'

import PaginationPage from '@/components/elementPage/PaginationPage.vue'
import MainAnimeProject from '@/components/mainAnimeProject/MainAnimeProject.vue'

const rootStore = useCounterStore();

onMounted(() => {
    rootStore.getNewAnime(1)
})

</script>

<template>
    <MainAnimeProject/>

    <!-- pagination -->
    <PaginationPage />
</template>
../stores/anime_now