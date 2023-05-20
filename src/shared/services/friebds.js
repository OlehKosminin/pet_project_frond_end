import instance from "./auth";

export const getCurrent = async () => {
  try {
    const { data } = await instance.get("api/auth/getPartnerInfo");
    return data;
  } catch (error) {
    throw error;
  }
};
