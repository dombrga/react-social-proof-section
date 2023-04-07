import { Rating } from "../../models/models"
import style from './Rating.module.scss'
import IconStar from "../../assets/images/icon-star.svg"

interface props {
  rating: Rating
}

function RatingCard({ rating }: props) {
  return (
    <div className={`${style.rating}`}>
      <div className={`${style.rating__stars}`}>
        {
          Array.from(Array(rating.stars)).map((_, idx) => {
            return <img src={IconStar} key={idx} alt="star" />
          })
        }
      </div>
      <p className={style.rating__site}>
        Rated {rating.stars} Stars in {rating.site}
      </p>
    </div>
  )
}

export default RatingCard