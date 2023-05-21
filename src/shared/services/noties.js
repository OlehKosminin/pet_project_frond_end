import instance from "./auth";

export const getAllNotices = async (category = "sell", page = 1, limit = 6) => {
  console.log(
    'category = "sell", page = 1, limit = 6: ',
    (category = "sell"),
    (page = 1),
    (limit = 6)
  );
  const { data } = await instance.get(
    `api/notices/category?category=${category}&page=${page}&limit=${limit}`
  );
  console.log("data: ", data);
  return data;
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
