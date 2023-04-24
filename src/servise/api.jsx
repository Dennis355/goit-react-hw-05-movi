import axios from 'axios';

const API_KEY = 'ea9e13bdf5e4e7be6ab646f423450532';
const BASE_URL = 'https://api.themoviedb.org/3/';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';
const lang = 'en-US';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: lang,
};

export const getTrendingMovies = async period => {
  try {
    const response = await axios.get(`trending/movie/${period}`);
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieInfo = async id => {
  const response = await axios.get(`movie/${id}`);
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(`movie/${id}/credits?p=1`);

  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`);
  return response.data.results;
};

export const getMovieByName = async query => {
  const response = await axios.get(`search/movie?query=${query}`);
  return response.data.results;
};
