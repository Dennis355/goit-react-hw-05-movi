import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../servise/api';
import { MovieCastItem } from '../MovieCastItem/MovieCastItem';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return null;
  }

  return (
    <div>
      <ul>
        {movieCast.map(movieCastItem => (
          <li key={movieCastItem.id}>
            <MovieCastItem movieCastItem={movieCastItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};
