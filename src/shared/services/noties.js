import axios from "axios";
import instance from "./auth";

export const getAllNotices = async (category = "sell", page = 1, limit = 6) => {
  // const { data } = await instance.get(`/notices/${category}`);
  const { data } = await instance.get(
    `api/notices/category?category=${category}&page=${page}&limit=${limit}`
  );
  console.log(data, "data-notisa");
  return data;
};
export const deleteNotices = async (id) => {
  await instance.delete(`api/notices/${id}`);
};
