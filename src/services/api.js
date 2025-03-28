import axios from "axios";

const API_BASE_URL = "http://localhost:8080/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// AUTH APIs
export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const signup = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
  return response.data;
};



// USER APIs

export const fetchUsers = async (role) => {
  const response = await api.get(`${role}/users`);
  return response.data;
};

export const addUser = async (user, _user) => {
  let response;
  if (user.Role == admin) {
    response = await api.post(`${user.Role}/create-reader`, _user, {
      withCredentials: true,
    });
  } else {
    response = await api.post(`${user.Role}/create-admin`, _user, {
      withCredentials: true,
    });
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

// BOOK APIs
export const fetchBooks = async (Role) => {
  const response = await api.get(`${Role}/books`, { withCredentials: true });
  return response.data;
};

export const addBook = async (role, book) => {
  const response = await api.post(`${role}/books/add`, book);
  return response.data;
};
export const updateBook = async (role, id, book) => {
  const response = await api.patch(`${role}/books/${id}`, book);
  return response.data;
};

export const deleteBook = async (role, id) => {
  const response = await api.delete(`${role}/books/${id}`);
  console.log(response);
  return response.data;
};

// REQUEST APIs
export const fetchRequests = async (role) => {
  let response;
  if (role === "reader") return await api.get(`${role}/books/requests`);

  response = await api.get(`${role}/requests/all`);
  return response.data;
};
