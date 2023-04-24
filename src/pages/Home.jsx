
import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../servise/api';
import { MoviesList } from '../components/MuvieList/MuvieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('day').then(setMovies);
  }, []);

  return <div>{movies.length > 0 && <MoviesList movies={movies} />}</div>;
};

export default Home;