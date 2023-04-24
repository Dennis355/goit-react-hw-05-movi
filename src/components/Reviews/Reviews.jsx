import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../servise/api';
import { ReviewItem } from '../ReviewItem/ReviewItem';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(setMovieReviews);
  }, [movieId]);

  if (!movieReviews) {
    return null;
  }

  return (
    <div>
      {movieReviews.length === 0 && 'We don`t have any reviews for this movie.'}
      <ul>
        {movieReviews.map(review => (
          <li key={review.id}>
            <ReviewItem review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
