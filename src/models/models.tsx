export interface Review {
  id: number
  name: string
  isVerifiedBuyer: boolean
  reviewContent: string
}

export interface Rating {
  id: number
  stars: number
  site: string
}
