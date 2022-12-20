import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import ReviewCard from './components/review/Review'
import RatingCard from './components/rating/Rating'
import { Rating, Review } from './models/models'

function App() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [ratings, setRatings] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const data = await Promise.all([
        fetch('./data/reviews.json').then(res => res.json()),
        fetch('./data/ratings.json').then(res => res.json()),
      ])
      console.log('all:', data);
      setReviews(data[0].reviews)
      setRatings(data[1].ratings)
      return data
    }

    try {
      loadData()
    } catch (err) {
      console.error('Error:', err)
    }
    
  }, [])


  return (
    <div className={styles.app}>
      <main>
        <div className=''>

        </div>
        <div className={styles.ratings}>
          {ratings.map((rating: Rating) => {
            return <RatingCard key={rating.id} rating={rating} />
          })}
        </div>
        <div className='reviews'>
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
