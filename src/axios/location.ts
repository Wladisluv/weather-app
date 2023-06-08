import axios from "axios";

const locApi = axios.create({
  baseURL: import.meta.env.VITE_LOC_BASE_URL,
});

locApi.interceptors.request.use(config => {
  config.url = config.url + 'country,city' + '?apiKey=' + import.meta.env.VITE_LOC_API_KEY;
  return config
});

export default locApi;