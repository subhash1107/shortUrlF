import { getCurrentUser } from "../api/user.api";
import { login } from "../store/slice/authSlice";
import { redirect } from "@tanstack/react-router";

export const checkAuth = async ({ context }) => {
  const { queryClient, store } = context;

  try {
    
    const user = await queryClient.ensureQueryData({
      queryKey: ["CurrentUser"],
      queryFn: getCurrentUser,
    });
    if (!user) return false;

    store.dispatch(login(user));

    const {isAuthenticated} = store.getState().authReducer;
    if (!isAuthenticated) return false;

    return true;
  } catch (err) {
    console.log(err)
    throw redirect({ to: "/auth" });
  }
};
