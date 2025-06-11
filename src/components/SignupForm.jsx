import { useState } from "react";
import { registerUser } from "../api/user.api";
import { useDispatch } from "react-redux";
import { login } from "../store/slice/authSlice";
import { useNavigate } from "@tanstack/react-router";


const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()
  const navigate = useNavigate()
    

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await registerUser(
        formData.fullName,
        formData.email,
        formData.password
      );
      dispatch(login(data.user))
      navigate({to:'/dashboard'})
      setFormData({ fullName: "", email: "", password: "" });
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={submitHandler}>
      <div>
        <label className="block font-medium text-sm text-gray-600" htmlFor="fullName">
          Full Name:
        </label>
        <input
          type="text"
          required
          id="fullName"
          name="fullName"
          className="w-full px-4 py-2 border border-gray-300 mb-3"
          value={formData.fullName}
          onChange={handleChange}
        />

        <label className="block font-medium text-sm text-gray-600" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          required
          id="email"
          name="email"
          placeholder="example123@gmail.com"
          className="w-full px-4 py-2 border border-gray-300 mb-3"
          value={formData.email}
          onChange={handleChange}
        />

        <label className="block font-medium text-sm text-gray-600" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          required
          id="password"
          name="password"
          placeholder="***********"
          className="w-full px-4 py-2 border border-gray-300"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white w-full rounded-md py-2 px-4 hover:cursor-pointer"
      >
        {loading ? "Creating account..." : "Register"}
      </button>

      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default SignupForm;
