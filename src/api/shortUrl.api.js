import axiosInstance from "./axiosInstance";

export const createShortUrl = async (url,customUrl) => {
  try {
    const { data } = await axiosInstance.post("/api/create", {
      url,customUrl
    });
    return data.shortUrl;
  } catch (error) {
    console.log(error.message);
  }
};
