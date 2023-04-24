import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox';
import { useState } from 'react';
import { getMovieByName } from '../servise/api';
import { MoviesList } from './../components/MuvieList/MuvieList';
import { useEffect } from 'react';
import { MoviesBox } from './Movie.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');
  const searchQuery = searchParams.get('query');
  const onChangeFilter = query => {
    setQuery(query);
  };

  const onSearch = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query: query } : {});
  };

  useEffect(() => {
    if (searchQuery) {
      getMovieByName(searchQuery).then(setMovies);
    }
  }, [searchQuery]);

  return (
    <MoviesBox>
      Movies
      <SearchBox
        value={query}
        onSearch={onSearch}
        onChangeFilter={onChangeFilter}
      />
      {movies && <MoviesList movies={movies} />}
      {movies && movies.length === 0 && (
        <div>There are not movies with such name</div>
      )}
    </MoviesBox>
  );
};

export default Movies;
