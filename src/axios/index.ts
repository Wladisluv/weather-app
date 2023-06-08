import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
}) 

api.interceptors.request.use(config => {
  config.url = config.url + '&units=metric' + '&appid=' + import.meta.env.VITE_API_KEY;
  return config
})

export default api;