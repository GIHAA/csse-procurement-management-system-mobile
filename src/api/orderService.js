import { api } from "./api";

const getOrder = async (id) => {
  const response = await api.get(`/purchase_orders/${id}`);
  return response;
}

const getOrders = async () => {
  const response = await api.get("/purchase_orders");
  return response;
}

const addOrder = async (payload) => {
  const response = await api.post("/purchase_orders", payload);
  return response;
}

const editOrder = async (id, payload) => {
  const response = await api.put(`/purchase_orders/${id}`, payload);
  return response;
}

const deleteOrder = async (id) => {
  const response = await api.delete(`/purchase_orders/${id}`);
  return response;
}

const orderService = {
  getOrder,
  getOrders,
  addOrder,
  editOrder,
  deleteOrder,
};

export default orderService;
