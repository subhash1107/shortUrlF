import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const SignUpLoginPage = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="min-h-screen -mt-20 justify-center items-center flex flex-col">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="mb-6 text-center font-bold text-2xl">
          {toggle ? "Login" : "Signup"}
        </h1>
        {toggle ? <LoginForm /> : <SignupForm />}
        <p className="text-center mt-2">
          {toggle ? (
            <>
              Don't have an account?{" "}
              <span
                className="text-blue-600 hover:cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                Register
              </span>
            </>
          ) : (
            <>
              Existing user?
              <span
                className="text-blue-600 hover:cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                {" Login"}
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default SignUpLoginPage;
