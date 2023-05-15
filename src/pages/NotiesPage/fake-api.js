// import instance from "./auth";
// export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const getAnimalsByCategory = async (category) => {
  const { data } = await instance.get(`/notices/${category}`);
  return data;
};
