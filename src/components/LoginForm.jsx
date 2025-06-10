import { useState } from "react";
import { loginUser } from "../api/user.api";

const LoginForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [user,setUser] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const data = await loginUser(email,password)
      setUser(data);
      console.log(user)
      setEmail("");
      setPassword('')
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={(e) => submitHandler(e)}>
      <div className="">
        <label
          className="block font-medium text-sm text-gray-600"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          type="email"
          required
          id="email"
          placeholder="example123@gmail.com"
          className="w-full px-4 py-2 border border-gray-300 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          className="block font-medium text-sm text-gray-600"
          htmlFor="loginpassword"
        >
          Password:
        </label>
        <input
          type="password"
          required
          id="loginpassword"
          placeholder="***********"
          className="w-full px-4 py-2 border border-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white w-full rounded-md py-2 px-4 hover:cursor-pointer"
      >
        {loading ? "Signing in..." : "Login"}
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default LoginForm;
