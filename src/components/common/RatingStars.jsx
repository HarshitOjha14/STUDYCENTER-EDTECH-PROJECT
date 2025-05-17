import React, { useEffect, useState } from "react"
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti"

function RatingStars({ Review_Count, Star_Size }) {
  const [starCount, SetStarCount] = useState({
    full: 0,
    half: 0,
    empty: 0,
  })

  useEffect(() => {
    const wholeStars = Math.floor(Review_Count) || 0
    SetStarCount({
      full: wholeStars,
      half: Number.isInteger(Review_Count) ? 0 : 1,
      empty: Number.isInteger(Review_Count) ? 5 - wholeStars : 4 - wholeStars,
    })
  }, [Review_Count])

  const size = Star_Size || 20

  return (
    <div className="flex gap-1 text-yellow-400 text-base sm:text-lg md:text-xl lg:text-2xl">
      {[...Array(starCount.full)].map((_, i) => (
        <TiStarFullOutline key={`full-${i}`} size={size} className="flex-shrink-0" />
      ))}
      {[...Array(starCount.half)].map((_, i) => (
        <TiStarHalfOutline key={`half-${i}`} size={size} className="flex-shrink-0" />
      ))}
      {[...Array(starCount.empty)].map((_, i) => (
        <TiStarOutline key={`empty-${i}`} size={size} className="flex-shrink-0" />
      ))}
    </div>
  )
}

export default RatingStars
