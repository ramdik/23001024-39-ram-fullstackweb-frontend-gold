// StarRating.js
import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-warning">&#9733;</span>); // Full star with yellow color
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-warning">&#9734;&#9733;</span>); // Half star with yellow color
    }

    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;