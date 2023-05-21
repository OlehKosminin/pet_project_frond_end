import instance from "./auth";

export const addNoticesPet = async (data) => {
  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const result = await instance.post("/api/notices", data, header);
  return result;
};

export const addUserPet = async (data) => {
  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const result = await instance.post("api/user-pets", data, header);
  console.log(result);
  return result;
};
