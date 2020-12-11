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
 /* 响应拦截器 */ 
axios.interceptors.response.use(function (response) {
  if (response.data.code === 10401 || response.data.code === 10403 || response.data.code === 10404) {

    alert(response.data.msg+'，请重新登录');

    localStorage.clear();
    setTimeout(() => window.location.href = '/',2000)
  }

  return response
}, function (error) {
 
    return Promise.reject(error)
 
})
export default axios
