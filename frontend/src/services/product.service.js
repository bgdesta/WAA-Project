/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/products/";

const getAllProducts = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const deleteProduct = (id) => {
  return axios.delete(API_URL + id, { headers: authHeader() });
};

export default {
  getAllProducts,
  deleteProduct,
};
