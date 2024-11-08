import axios from "axios";

const config = axios.create({
  baseURL: `http://${window.location.hostname}:5000/`,
  // timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" }
});

export default config;
