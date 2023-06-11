import instance from "./auth";

export const getAllNotices = async (
  category = "sell",
  page = 1,
  limit = 12
) => {
  const { data } = await instance.get(
    `api/notices/category?category=${category}&page=${page}&limit=${limit}`
  );
  // console.log("data ВАДИМ", data);
  return data;
};

export const getNoticesBySearch = async (
  category,
  limit = 12,
  page = 1,
  search
) => {
  // console.log("data services", category, limit, page, search);
  const { data } = await instance.get(
    `api/notices/category?page=${page}&limit=${limit}&category=${category}&search=${search}`
  );
  // console.log("data VLAD", data);
  return data;
};

export const getOwnNotices = async (page = 1, limit = 12) => {
  // console.log("getOwnNotices test back", page, limit);
  const { data } = await instance.get(
    `api/notices?page=${page}&limit=${limit}`
  );

  return data;
};
export const getFavoriteNotices = async (page = 1, limit = 12) => {
  // console.log("getOwnNotices test back", page, limit);
  const { data } = await instance.get(
    `api/notices/favorite?page=${page}&limit=${limit}`
  );

  return data;
};
export const addFavoriteNotices = async (id_notis) => {
  const { data } = await instance.patch(`api/notices/favorite-add/${id_notis}`);

  return data;
};
export const deleteFavoriteNotices = async (id_notis) => {
  const { data } = await instance.patch(
    `api/notices/favorite-delete/${id_notis}`
  );
  // console.log("deletefavorite ", data);
  return data;
};

// (category = "sell"), (search = ""), (page = 1), (limit = 6);

export const deleteNotices = async (id) => {
  await instance.delete(`api/notices/${id}`);
};

// export const deleteNotices = async (id) => {
//   await instance.delete(`api/notices/${id}`);
// };

export const addNotice = async (data) => {
  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const result = await instance.post("api/notices", data, header);
  return result;
};

// Modal
export const getSingleNotice = async (id) => {
  const { data } = await instance.get(`api/notices/${id}`);
  return data;
};
