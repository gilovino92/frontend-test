import axios from 'axios';

const defaultPaginationParams = {};
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const axiosFactory = (url = null) =>
  axios.create({
    baseURL: url || process.env.VUE_APP_API_BASE_URL,
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
// Public Axios Instance with base URL
const api = axiosFactory();

// intercepter for response
api.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    }
    return Promise.reject(response);
  },
  error => {
    // if (error.response.status === 401) {
    // }
    return Promise.reject(error);
  }
);

export { defaultPaginationParams, axiosFactory, api };
