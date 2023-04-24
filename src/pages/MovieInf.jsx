
import { BtnBack } from '../components/BtnBack/BtnBack';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { IMAGE_URL } from '../servise/api';
import { Movie, Img, MovieaAditionalInfo } from './MovieInf.styled';

import { getMovieInfo } from '../servise/api';

const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const [backLinkHref] = useState(() => location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }
  const { title, poster_path, overview, genres, vote_average } = movie;

  return (
    <>
      <BtnBack path={backLinkHref} />
      <Movie>
        <Img src={`${IMAGE_URL}${poster_path}`} alt={`${title}`} width="200" />
        <div>
          <h2>{title}</h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name + ' ')}</p>
        </div>
      </Movie>
      <MovieaAditionalInfo>
        Additional information:
        <li>
          <NavLink to={`cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`reviews`}>Reviews</NavLink>
        </li>
      </MovieaAditionalInfo>

      <Outlet />
    </>
  );
};

export default MovieInfo;