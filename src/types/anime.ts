export interface Anime_now {
  mal_id: number
  url: string
  images: {
    webp: {
        image_url: string
      }
  }
  title: string
  synopsis: string | null
  studios: [{mal_id: number, name: string}]
  genres: [{mal_id: number, name: string}]
  aired: {from: Date}
}

export interface Pagination_anime_now {
    mal_id: number
    url: string
    images: {
      webp: {
          image_url: string
        }
    }
    title: string
    synopsis: string | null
    studios: [{mal_id: number, name: string}]
    genres: [{mal_id: number, name: string}]
    aired: {from: Date}
  }
