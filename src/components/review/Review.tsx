import { Review } from "../../models/models"
import style from './Review.module.scss'


const imagePrefix = '/images/'

interface props {
  review: Review
}

function ReviewCard({ review }: props) {
  const image = imagePrefix + review.image
  
  return (
    <article className={style.review}>
      <div className={style.review__reviewer}>
        <img src={image} alt="" className="avatar" />
        <div>
          <p>{ review.name }</p>
          { review.isVerifiedBuyer && <p>Verified Buyer</p> }
        </div>
      </div>
      <p className='review__content'>
        <q>
          { review.reviewContent }
        </q>
      </p>
    </article>
  )
}

export default ReviewCard