import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AnimePage from '../pages/AnimePage.vue'
import TopPage from '../pages/TopPage.vue'
import RecommendationsPage from '../pages/RecommendationsPage.vue'
import CategoryPage from '../pages/CategoryPage.vue'
import AnimeListCategoryPage from '../pages/AnimeListCategoryPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/anime/:id',
      name: 'animePage',
      component: AnimePage
    },
    {
      path: '/top',
      name: 'topPage',
      component: TopPage
    },
    {
      path: '/recommendations',
      name: 'recommendationsPage',
      component: RecommendationsPage
    },
    {
      path: '/category',
      name: 'categoryPage',
      component: CategoryPage
    },
    {
      path: '/category/:type/:id/:name',
      name: 'animeListCategoryPage',
      component: AnimeListCategoryPage
    }
  ]
})

export default router
