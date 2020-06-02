import axios from 'axios';
import {
  API_URL,
  API_KEY,
} from './config';

const Movies = () => {
  const conn = axios.create({
    baseURL: API_URL,
    responseType: 'json',
  });
  conn.interceptors.request.use(interceptRequest);

  function interceptRequest(config) {
    config.params['apiKey'] = API_KEY;
    return config;
  }

  const responseHandler = (response, callback) => {
    if (callback) callback(response.data);
  }

  const exceptionHaldler = (error) => {
    console.error(error);
  }

  const searchMovies = (params, callback) => {
    return conn
      .get('', { params })
      .then(response => responseHandler(response, callback))
      .catch(exceptionHaldler);
  }

  return {
    searchMovies
  };
}

export default Movies;