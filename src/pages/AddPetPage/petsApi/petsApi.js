import axios from "axios";

const instance = axios.create({
  baseURL: "https://pet-project-backend.onrender.com",
});

export const addMyPet = async (data) => {
  const { data: result } = await instance.post("/api/user-pets/", data);
  return result;
};
// .patch("https://pet-project-backend.onrender.com/api/add-pet/you-pet")
// http://localhost:3001
