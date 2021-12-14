/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/users";

const getPendingSellerAccounts = () => {
  return axios.get(API_URL + "/sellers/pending", { headers: authHeader() });
};

const verifySellerAccounts = (id) => {
  return axios.put(API_URL + "/sellers/" + id, { headers: authHeader() });
};

export default {
  getPendingSellerAccounts,
  verifySellerAccounts,
};
