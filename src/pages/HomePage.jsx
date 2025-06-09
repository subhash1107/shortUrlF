import React from "react";
import UrlForm from "../components/UrlForm";

const HomePage = () => {
  return (
    <div className="min-h-screen justify-center items-center flex flex-col">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="mb-6 text-center font-bold text-2xl">URL Shortner</h1>
        <UrlForm />
      </div>
    </div>
  );
};

export default HomePage;
