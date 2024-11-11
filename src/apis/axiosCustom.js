import axios from "axios";
const Axios = axios.create({
  baseURL: 'https://newsapi.org/v2'
});

// Axios.defaults.headers.common['Authorization'] = "6b1b7b6643db4abbafe92da267fcf8fc";

export { Axios }