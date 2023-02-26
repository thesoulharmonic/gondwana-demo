import axios from "axios";

const instance = axios.create({
  baseURL: "https://gondwana-demo.onrender.com",
});

export default instance;
