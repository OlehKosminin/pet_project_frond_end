import instance from "./auth";

export const getAllNotices = async (category = "sell", page = 1, limit = 6) => {
  console.log(category, page, limit, "test back");
  const { data } = await instance.get(
    `api/notices/category?category=${category}&page=${page}&limit=${limit}`
  );
  console.log("data: ", data);
  return data;
};

// (category = "sell"), (search = ""), (page = 1), (limit = 6);

export const getNoticesBySearch = async (data) => {
  const result = await instance.get(
    `/api/notices/category?page=${data.page}&limit=${data.limit}&category=${data.category}&search=${data.search}`
  );
  return result.data;
};

export const deleteNotices = async (id) => {
  await instance.delete(`api/notices/${id}`);
};

export const addNotice = async (data) => {
  for (let value of data.values()) {
    console.log("formData", value);
  }
  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const result = await instance.post("api/notices", data, header);
  return result;
};
