import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://www.omdbapi.com/',
};
const http = axios.create(axiosConfig);

http.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    apikey: process.env.API_KEY,
    type: 'movie',
  };

  return config;
});

export const fetchMovies = (search, page = undefined) => {
  const config = {
    params: {
      s: search,
      page,
    },
  };

  return http.get('', config);
};

export const getMovie = imdbId => {
  const config = {
    params: {
      i: imdbId,
      plot: 'full',
    },
  };

  return http.get('', config);
};
