import axios from 'axios'

axios.defaults.timeout = '100000'

axios.interceptors.request.use(
    config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
      let token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    });

export default axios
