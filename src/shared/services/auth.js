import axios from "axios";

const instance = axios.create({
  // take on .env це зміниться коли бекенд буде на сервері
  baseURL: "https://connections-api.herokuapp.com",
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const singup = async (data) => {
  const result = await instance.post("/users/signup", data);
  setToken(result.token);
  return result;
};

export const login = async (data) => {
  const { data: result } = await instance.post("/users/login", data);
  return result;
};

export const getCurrent = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get("users/current");
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post("/users/logout");
  setToken();
  return data;
};

export default instance;
