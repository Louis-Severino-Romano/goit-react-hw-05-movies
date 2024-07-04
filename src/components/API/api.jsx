import axios from 'axios';

const API_KEY = '816408416ada48598c4e0b413e98bb37';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = () => api.get('/trending/movie/day');
export const searchMovies = (query) => api.get('/search/movie', { params: { query } });
export const getMovieDetails = (movieId) => api.get(`/movie/${movieId}`);
export const getMovieCredits = (movieId) => api.get(`/movie/${movieId}/credits`);
export const getMovieReviews = (movieId) => api.get(`/movie/${movieId}/reviews`);