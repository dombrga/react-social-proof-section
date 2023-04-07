import { useState, useEffect } from 'react'
import style from './App.module.scss'
import ReviewCard from './components/review/Review'
import RatingCard from './components/rating/Rating'
import { Rating, Review } from './models/models'

const reviewClass = [style['reviews'], style['grid-col-span-2']].join(' ')

function App() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [ratings, setRatings] = useState<Rating[]>([])

  useEffect(() => {
    const loadData = async () => {
      const data = await Promise.all([
        fetch('./data/reviews.json').then(res => res.json()),
        fetch('./data/ratings.json').then(res => res.json()),
      ])
      // console.log('data:', data);
      setReviews(data[0].reviews)
      setRatings(data[1].ratings)
    }
    
    loadData().catch((e: Error) => console.error(e))
  }, [])


  return (
    <div className={style.app}>
      <main>
        <div className={style.overview}>
          <h1>
            10,000+ of our users love our products.
          </h1>
          <p>
            We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
          </p>
        </div>

        <div className={style.ratings}>
          {ratings.map((rating: Rating) => {
            return <RatingCard key={rating.id} rating={rating} />
          })}
        </div>

        <div className={reviewClass}>
          {
            reviews.map(review => {
              return <ReviewCard key={review.id} review={review} />
            })
          }
        </div>
      </main>
    </div>
  )
}

export default App
