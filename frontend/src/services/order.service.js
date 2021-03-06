/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/orders/";

const getAllOrders = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const cancelOrder = (id) => {
  return axios.put(
    API_URL + id,
    { status: "CANCELLED" },
    { headers: authHeader() }
  );
};

const changeStatus = (id, data) => {
  return axios.put(API_URL + id, data, { headers: authHeader() });
};

export default {
  getAllOrders,
  cancelOrder,
  changeStatus,
};
