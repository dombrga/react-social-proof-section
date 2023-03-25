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
        <img src={image} alt="" className={style.review__reviewer_avatar} />
        <div className={style.review__reviewer_info}>
          <p className={style.review__reviewer_name}>{ review.name }</p>
          { review.isVerifiedBuyer && <p className={style.review__reviewer_verified}>Verified Buyer</p> }
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