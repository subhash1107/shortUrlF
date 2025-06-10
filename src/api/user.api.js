import axiosInstance from "./axiosInstance";

export const loginUser = async (email, password) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", { email, password });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const registerUser = async (fullName,email, password) => {
  try {
    const { data } = await axiosInstance.post("/auth/signUp", { fullName,email, password });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const logutUser = async () => {
  try {
    const { data } = await axiosInstance.get("/auth/logout");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
