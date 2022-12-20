import { Rating } from "../../models/models"

function RatingCard({ rating }: { rating: Rating}) {
  return (
    <div>
      <div></div>
      <p>{rating.id}</p>
    </div>
  )
}

export default RatingCard