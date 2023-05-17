import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const addMyPet = async (data) => {
  const { data: result } = await instance.patch("/api/auth/avatars", data);
  return result;
};
