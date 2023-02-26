import axios from "axios";

const instance = axios.create({
  baseURL: "https://gondwana-backend-demo.onrender.com",
});

export default instance;
