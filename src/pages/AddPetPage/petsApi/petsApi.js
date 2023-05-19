import axios from "axios";

const instance = axios.create({
  baseURL: "https://pet-project-backend.onrender.com/api/",
});

export const addMyPet = async (data) => {
  const { data: result } = await instance.post("/", data);
  return result;
};
// .patch("https://pet-project-backend.onrender.com/api/add-pet/you-pet")
