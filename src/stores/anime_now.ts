import { defineStore } from 'pinia'
import axios from 'axios'
import { NEW_ANIME } from '../constants/api'
import type { Anime_now } from '@/types/anime'

interface State {
    newAnime: Anime_now[],
    count: number,
    current_page: number,
    last_visible_page: number

  }

export const useCounterStore = defineStore('root', {
    state: (): State => ({
        newAnime: [],
        count: 10,
        current_page: 1,
        last_visible_page: 0
    }),

    actions: {
        //получаем список сезонного аниме
        async getNewAnime(current_page: number) {
            try{
                const {data} = await axios.get(`${NEW_ANIME}?limit=${this.count}&page=${current_page}`)
                this.newAnime = data.data
                this.last_visible_page = data.pagination.last_visible_page
            } catch(error) {
                console.log(error)
            }

        },
    }

})