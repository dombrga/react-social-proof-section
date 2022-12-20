import { Rating } from "../../models/models"
import styles from './Rating.module.scss'
import IconStar from "../../assets/images/icon-star.svg"

function RatingCard({ rating }: { rating: Rating }) {
  return (
    <div className={`${styles.rating}`}>
      <div className={`${styles.rating__stars}`}>
        {
          Array.from(Array(rating.stars)).map((star, idx) => {
            return <img src={IconStar} key={idx} alt="star" />
          })
        }
      </div>
      <p className={styles.rating__site}>
        Rated {rating.stars} Stars in {rating.site}
      </p>
    </div>
  )
}

export default RatingCard