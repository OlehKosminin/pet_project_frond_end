import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3000/",

  baseURL: "https://pet-project-backend.onrender.com",
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const singup = async (data) => {
  const result = await instance.post("api/auth/register", data);
  setToken(result.data.token);
  return result;
};

export const login = async (data) => {
  const { data: result } = await instance.post("api/auth/login", data);
  setToken(result.token);
  return result;
};

export const getCurrent = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get("api/auth/current");
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post("api/auth/logout");
  setToken();
  return data;
};

export const updUserInfo = async (data) => {
  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const result = await instance.patch("api/auth/user-upd", data, header);
  return result;
};

export const getUserInfo = async (_id) => {
  try {
    const data = await instance.get(`/api/auth/user-info/${_id}`, _id);
    return data;
  } catch (error) {
    throw error;
  }
};

export default instance;
