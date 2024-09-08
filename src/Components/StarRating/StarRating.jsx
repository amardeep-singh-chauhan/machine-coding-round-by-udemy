import React, { useState } from 'react'
import '../../App.css'


function StarRating(props) {
  const [rating, setRating] = useState(props.rating || 2)
  let limit = props.limit || 5

  return (
    <div>
      {[...new Array(limit).keys()].map((id) => {
        return <span
          key={id}
          onClick={() => setRating(id + 1)}
          className={id < rating ? 'rated-star' : 'star'}
        />
      })}
    </div>
  )
}

export default StarRating 