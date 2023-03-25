export interface Review {
  id: number
  name: string
  isVerifiedBuyer: boolean
  reviewContent: string
  image: string
}

export interface Rating {
  id: number
  stars: number
  site: string
}
