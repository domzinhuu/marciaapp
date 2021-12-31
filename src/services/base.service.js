import axios from "axios";

const api = axios.create({
  baseURL: "https://olhavantagem.com/api",
});

export default api;
