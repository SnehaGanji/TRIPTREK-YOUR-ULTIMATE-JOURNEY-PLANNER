import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];

  // Create an array of 5 elements representing the stars
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(rating)) {
      // Full star
      stars.push(<span key={i}>&#9733;</span>);
    } else {
      // Empty star
      stars.push(<span key={i}>&#9734;</span>);
    }
  }

  return (
    <div>
      {stars}
      <span>{rating}</span>
    </div>
  );
};

export default StarRating;
