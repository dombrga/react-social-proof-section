
function ReviewCard({ review }: {review :any}) {
  return (
    <article className='review'>
      <div className='review__name'>
        <p> {review.name} </p>
      </div>
      <p className='review__description'>

      </p>
    </article>
  )
}

export default ReviewCard