import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import axiosInstance from "../api/axiosInstance";

const Navbar = () => {
  const { isAuthenticated } = useSelector((store) => store.authReducer);

  const handleLogout = async () =>{
    try {
      await axiosInstance.get('/logout')
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer">
                <Link to={"/homepage"}>URL Shortener</Link>
              </div>
            </div>
          </div>

          {/* Login Button Section */}
          <div className="flex items-center">
            {isAuthenticated ? (
              <button className="bg-red-600 hover:bg-red-700 hover:cursor-pointer text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to={"/auth"}>
                <button className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
