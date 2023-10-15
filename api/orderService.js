
import axios from "axios";
import { BE_URL } from "./constants";

const getOrder = async (payload) =>{
    const response = await axios.post(`http://144.126.219.21:8001/api/v1/auth/signin`, payload);
    return response;
}

const addOrder = async (payload) =>{
    const response = await axios.post(`http://144.126.219.21:8001/api/v1/auth/signin`, payload);
    return response;
}

const editOrder = async () =>{
    const response = await axios.post(`http://144.126.219.21:8001/api/v1/auth/signup`, payload);
    return response;
}

const deleteOrder = async () =>{
    const response = await axios.post(`http://144.126.219.21:8001/api/v1/auth/signup`, payload);
    return response;
}

const authService = {
    getOrder,
    addOrder,
    editOrder,
    deleteOrder
};
  
export default authService;
