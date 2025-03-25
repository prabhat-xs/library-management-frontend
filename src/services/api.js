import axios from "axios";

export const signup = async () => {
  await axios.post("url", { data });
};

export const login = async () => {
  await axios.post("url", { email, password });
};
