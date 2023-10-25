import { defineStore } from 'pinia'
import axios from 'axios'
import {
  NEW_ANIME,
  TOP_ANIME,
  RECOMMDATIONS_ANIME,
  GENRES_ANIME,
  STUDIOS_ANIME,
  ANIME
} from '../constants/api'
import type { Anime, Anime_recommendations, Anime_genres, Anime_studios } from '@/types/anime'

interface State {
  current_page: number
  last_visible_page: number
  anime: Anime
  animeArrayCatetegory: Anime[]
  newAnime: Anime[]
  topAnime: Anime[]
  topAnimeLimit: Anime[]
  animeRecommendations: Anime_recommendations[]
  animeGenres: Anime_genres[]
  animeStudios: Anime_studios[]
  animeSearch: string
  filterAnimeLetter: Anime[]
}

export const useAnimeStore = defineStore('root', {
  state: (): State => ({
    current_page: 1,
    last_visible_page: 0,
    anime: {},
    animeArrayCatetegory: [],
    newAnime: [],
    topAnime: [],
    topAnimeLimit: [],
    animeRecommendations: [],
    animeGenres: [],
    animeStudios: [],
    animeSearch: '',
    filterAnimeLetter: []
  }),

  actions: {
    //получаем конкретное аниме
    async getAnime(id: number) {
      try {
        const { data } = await axios.get(`${ANIME}/${id}`)
        this.anime = data.data
      } catch (error) {
        console.log(error)
      }
    },

    //получаем список аниме по жанрам
    async getAnimeArrayCatetegory(count: number, current_page: number, id: number) {
      try {
        const { data } = await axios.get(
          `${ANIME}?limit=${count}&page=${current_page}&genres=${id}`
        )
        this.animeArrayCatetegory = data.data
        this.last_visible_page = data.pagination.last_visible_page
      } catch (error) {
        console.log(error)
      }
    },

    //получаем список аниме по студиям
    async getAnimeArrayStudios(count: number, current_page: number, id: number) {
      try {
        const { data } = await axios.get(
          `${ANIME}?limit=${count}&page=${current_page}&producer=${id}`
        )
        this.animeArrayCatetegory = data.data
        this.last_visible_page = data.pagination.last_visible_page
      } catch (error) {
        console.log(error)
      }
    },

    //получаем список сезонного аниме
    async getNewAnime(count: number, current_page: number) {
      try {
        const { data } = await axios.get(`${NEW_ANIME}?limit=${count}&page=${current_page}&sfw`)
        this.newAnime = data.data
        this.last_visible_page = data.pagination.last_visible_page
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
        this.last_visible_page = 50
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
      } catch (error) {
        console.log(error)
      }
    },

    //получаем список жанров аниме
    async getGenresAnime(type: string) {
      try {
          const { data } = await axios.get(`${GENRES_ANIME}?filter=${type}`)
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

    //получаем список аниме по букве
    async getAnimeSearch(count: number, current_page: number) {
      try{
        if (this.animeSearch) {
          const { data } = await axios.get(
            `${ANIME}?sfw&limit=${count}&page=${current_page}&q=${this.animeSearch}`
          )
          this.filterAnimeLetter = data.data
          this.last_visible_page = data.pagination.last_visible_page
        } else {
          this.last_visible_page = 0
        }
      } catch(error) {
        console.log(error)
      }
    }
  }
})
