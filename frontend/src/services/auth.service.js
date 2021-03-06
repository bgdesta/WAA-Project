/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (name, phone, username, email, password, role, status) => {
  return axios.post(API_URL + "signup", {
    name,
    phone,
    username,
    email,
    password,
    role,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
