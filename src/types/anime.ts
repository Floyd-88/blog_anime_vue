export interface Anime {
  mal_id: number
  url: string
  images: {
    webp: {
      image_url: string
    }
  }
  title: string
  synopsis: string | null
  studios: [{ mal_id: number; name: string }]
  genres: [{ mal_id: number; name: string }]
  aired: { from: Date; to: Date }
  type: string
  score: number
  rank: number
  episodes: number

  trailer: {
    youtube_id: string,
    url: string,
    embed_url: string
    },
    title_english: string
    source: string
    duration: string
    status: string
    rating: string
    year: number
}

export interface Anime_recommendations {
  mal_id: string
  entry: [
    {
      mai_id: number
      title: string
      url: string
      images: {
        webp: {
          small_image_url: string
        }
      }
    },
    {
      mai_id: number
      title: string
      url: string
      images: {
        webp: {
          small_image_url: string
        }
      }
    }
  ]
  content: string
  date: Date
  user: {
    username: string
  }
}

export interface Anime_genres {
  mal_id: number
  name: 'string'
  url: 'string'
  count: number
}

export interface Anime_studios {
  mal_id: number
  titles: [
    {
    "type": "string",
    "title": "string"
    }]
  url: 'string'
  count: number
}


