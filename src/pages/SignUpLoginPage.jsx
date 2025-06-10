import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const SignUpLoginPage = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="min-h-screen justify-center items-center flex flex-col">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="mb-6 text-center font-bold text-2xl">
          {toggle ? "Login" : "Signup"}
        </h1>
        {toggle ? <LoginForm /> : <SignupForm />}
        <p
          className="text-center text-blue-600 cursor-pointer mt-2"
          onClick={() => setToggle(!toggle)}
        >
          {toggle
            ? "New user? Please register here."
            : "Existing user? Please login."}
        </p>
      </div>
    </div>
  );
};

export default SignUpLoginPage;
