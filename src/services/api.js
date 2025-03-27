import axios from "axios";
import { AuthContext } from "../main";
import { useContext } from "react";

const API_BASE_URL = "http://localhost:8080/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const fetchBooks = async (Role) => {
  console.log(Role)
  const response = await api.get(`${Role}/books`);
  return response.data;
};

export const addBook = async (user, book) => {
  const response = await api.post(`${user.Role}/books/add`, book);
  return response.data;
};
export const updateBook = async (user, id, book) => {
  const response = await api.put(`${user.Role}/books/${id}`, book);
  return response.data;
};

export const deleteBook = async (user, id) => {
  const response = await api.delete(`${user.Role}/books/${id}`);
  return response.data;
};

export const fetchUsers = async (role) => {
  const response = await api.get(`${role}/users`);
  return response.data;
};

export const addUser = async (user, _user) => {
  let response;
  if (user.Role == admin) {
    response = await api.post(`${user.Role}/create-reader`, _user);
  } else {
    response = await api.post(`${user.Role}/create-admin`, _user);
  }
  return response.data;
};

export const updateUser = async (user, _user) => {
  const response = await api.patch(`${user.Role}/users/`, _user);
  return response.data;
};

export const deleteUser = async (user, id) => {
  const response = await api.delete(`${user.Role}/users/${id}`);
  return response.data;
};

// **Auth APIs**
export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const signup = async (userData) => {
  const response = await api.post("/auth/signup", userData);
  return response.data;
};

// export const fetchCurrentUser = async () => {
//   const response = await api.get("/auth/me");
//   return response.data;
// };

export const fetchRequests = async (user) => {
  const response = await api.get(`${user.Role}/requests/all`);
  return response.data;
};

// export const getUserData = async () => {
//   const response = await api.get("/auth/me");
//   return response.data;
// };
