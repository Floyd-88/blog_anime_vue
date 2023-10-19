import { defineStore } from 'pinia'
import axios from 'axios'
import { NEW_ANIME, TOP_ANIME, RECOMMDATIONS_ANIME, GENRES_ANIME, STUDIOS_ANIME } from '../constants/api'
import type { Anime, Anime_recommendations, Anime_genres, Anime_studios } from '@/types/anime'

interface State {
  newAnime: Anime[]
  topAnime: Anime[]
  topAnimeLimit: Anime[]
  animeRecommendations: Anime_recommendations[]
  animeGenres: Anime_genres[]
  animeStudios: Anime_studios[]
  last_visible_page: number
}

export const useAnimeStore = defineStore('root', {
  state: (): State => ({
    last_visible_page: 0,
    newAnime: [],
    topAnime: [],
    topAnimeLimit: [],
    animeRecommendations: [],
    animeGenres: [],
    animeStudios:[]
  }),

  actions: {
    //получаем список сезонного аниме
    async getNewAnime(count: number, current_page: number) {
      try {
        const { data } = await axios.get(`${NEW_ANIME}?limit=${count}&page=${current_page}`)
        this.newAnime = data.data
        this.last_visible_page = data.pagination.last_visible_page
        console.log(this.newAnime)
      } catch (error) {
        console.log(error)
      }
    },

    //получаем ограниченный список топового аниме
    async getTopAnimeLimit() {
      try {
        const { data } = await axios.get(`${TOP_ANIME}?limit=${5}&page=${1}`)
        this.topAnimeLimit = data.data
      } catch (error) {
        console.log(error)
      }
    },

    //получаем весь список топового аниме
    async getTopAnime(count: number, current_page: number) {
      try {
        const { data } = await axios.get(`${TOP_ANIME}?limit=${count}&page=${current_page}`)
        this.topAnime = data.data
        this.last_visible_page = data.pagination.last_visible_page
        console.log(this.topAnime)
      } catch (error) {
        console.log(error)
      }
    },

    //получаем список рекомендованного аниме
    async getRecommendationsAnime(current_page: number) {
      try {
        const { data } = await axios.get(`${RECOMMDATIONS_ANIME}?page=${current_page}`)
        this.animeRecommendations = data.data
        this.last_visible_page = data.pagination.last_visible_page
        console.log(this.animeRecommendations)
      } catch (error) {
        console.log(error)
      }
    },

    //получаем список жанров аниме
    async getGenresAnime() {
      try {
        const { data } = await axios.get(`${GENRES_ANIME}`)
        this.animeGenres = data.data
      } catch (error) {
        console.log(error)
      }
    },

    //получаем список студий выпускающих аниме
    async getStudiosAnime() {
      try {
        const { data } = await axios.get(`${STUDIOS_ANIME}`)
        this.animeStudios = data.data
      } catch (error) {
        console.log(error)
      }
    },
  }
})