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

  const get = (params, cb) => {
    return conn
      .get('', { params })
      .then(response => responseHandler(response, cb))
      .catch(exceptionHaldler);
  }

  const searchList = (params, callback) => {
    return get(params, callback)
  }

  const getDetail = (params, callback) => {
    params['plot'] = 'full';
    return get(params, callback)
  }

  return {
    getDetail,
    searchList,
  };
}

export default Movies;