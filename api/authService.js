
import axios from "axios";
import { BE_URL } from "./constants";

const signIn = async (payload) =>{
    const response = await axios.post(`http://144.126.219.21:8001/api/v1/auth/signin`, payload);
    return response;
}

const signUp = async () =>{
    const response = await axios.post(`http://144.126.219.21:8001/api/v1/auth/signup`, payload);
    return response;
}

const authService = {
    signIn,
    signUp
};
  
export default authService;
