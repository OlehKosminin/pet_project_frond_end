import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const addMyPet = async (data) => {
  const { data: result } = await instance.post("/api/", data);
  return result;
};
// .patch("https://pet-project-backend.onrender.com/api/add-pet/you-pet")
