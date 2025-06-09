import axiosInstance from "./axiosInstance";

export const createShortUrl = async (url) => {
  try {
    const { data } = await axiosInstance.post("/api/create", {
      url,
    });
    return data.shortUrl;
  } catch (error) {
    console.log(error.message);
  }
};
