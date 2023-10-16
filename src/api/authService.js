import { api, setBearerToken } from "./api";

const signIn = async (payload) => {
  const response = await api.post("/auth/signin", payload);
  if (response.status === 200) {
    setBearerToken(response.data.results[0].token);
  }
  return response;
}

const signUp = async (payload) => {
  const response = await api.post("/auth/signup", payload);
  return response;
}

const authService = {
  signIn,
  signUp,
};

export default authService;
