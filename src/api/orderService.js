
import axios from "axios";
import { BE_URL } from "./constants";

const getOrder = async (id) =>{
    const response = await axios.get(`${BE_URL}/purchase_orders/${id}`);
    return response;
}

const getOrders = async () =>{
    const response = await axios.get(`${BE_URL}/purchase_orders`);
    return response;
}

const addOrder = async (payload) =>{
    const response = await axios.post(`${BE_URL}/purchase_orders`, payload);
    return response;
}

const editOrder = async (id) =>{
    const response = await axios.put(`${BE_URL}/purchase_orders/${id}`, payload);
    return response;
}

const deleteOrder = async (id) =>{
    const response = await axios.delete(`${BE_URL}/purchase_orders/${id}`);
    return response;
}

const orderService = {
    getOrder,
    getOrders,
    addOrder,
    editOrder,
    deleteOrder
};
 
export default orderService;
