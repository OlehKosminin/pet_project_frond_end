import instance from "./auth";

export const getAll = async () => {
  const result = await instance.get("/api/user-pets/my-pets");
  return result.data;
};

export const addPet = async (data) => {
  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const result = await instance.post("/api/user-pets", data, header);
  return result;
};

export const deletePet = async (_id) => {
  const result = await instance.delete(`/api/user-pets/${_id}`);
  return result;
};
