import instance from "./auth";

export const getCurrent = async () => {
  const { data } = await instance.get("api/services-sidebar");
  // console.log("data auth: ", data);
  return data;

  // try {
  //   const { data } = await instance.get("api/services-sidebar");
  //   console.log("data auth: ", data);
  //   return data;
  // } catch (error) {
  //   throw error;
  // }
};
