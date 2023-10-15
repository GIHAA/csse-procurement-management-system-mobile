
import axios from "axios";
import { BE_URL } from "./constants";

const signIn = async (payload) =>{
    const response = await axios.post(`${BE_URL}/auth/signin`, payload);
    return response;
}

const signUp = async () =>{
    const response = await axios.post(`${BE_URL}/auth/signup`, payload);
    return response;
}

const authService = {
    signIn,
    signUp
};
  
export default authService;
