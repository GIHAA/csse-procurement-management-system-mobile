import axios from "axios";
import { BE_URL } from "./constants";

const api = axios.create({
  baseURL: `${BE_URL}`,
});

const setBearerToken = (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export { api, setBearerToken };
