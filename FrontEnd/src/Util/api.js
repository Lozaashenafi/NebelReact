import axios from "axios";

const api = axios.create({
  baseURL: "http://api.nebeldentalclinic.com/api/",
});

api.interceptors.request.use();

const nPoint = "http://api.nebeldentalclinic.com/";

export default api;

export { nPoint };
