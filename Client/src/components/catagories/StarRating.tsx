import React from 'react'
import { HalfStarIcon, StarIcon } from '../shared/StrasIcons';

const StarRating = ({ rating, reviews }: any) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    return (
        <div className="flex items-center space-x-2">
            <div className="flex">
                {Array(fullStars)
                    .fill(0)
                    .map((_, i) => (
                        <StarIcon key={`full-${i}`} filled={true} />
                    ))}

                {halfStar && <HalfStarIcon key="half" />}

                {Array(emptyStars)
                    .fill(0)
                    .map((_, i) => (
                        <StarIcon key={`empty-${i}`} filled={false} />
                    ))}
            </div>
            <span className="text-gray-600 text-sm">{rating} ({reviews} reviews)  </span>
        </div>

    )
}

export default StarRating
