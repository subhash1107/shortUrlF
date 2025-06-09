import axios from "axios";

export const createShortUrl = async (url) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/create", {
      url,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
