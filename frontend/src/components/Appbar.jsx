import { Link } from "react-router-dom";
export const Appbar = ({username})  => {
  return (
    <div className="shadow-lg h-16 flex justify-between items-center px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      
      <div className="text-xl font-bold tracking-wide flex items-center space-x-3">
        <span className="bg-gray-700 text-white rounded-lg px-4 py-1 font-medium shadow-md cursor-pointer">
          <Link to={"/"}>SafePay</Link>
        </span>
        <span className="hidden md:block text-sm text-gray-400">
          Your Payment Partner
        </span>
      </div>

      
      <div className="flex items-center space-x-6">
        <div className="text-sm font-medium text-gray-400 hover:text-gray-200 transition cursor-pointer">
          Hello, {username}!
        </div>
        <div className="relative">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold text-white shadow-md cursor-pointer">
            U
          </div>
          <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
        </div>
      </div>
    </div>
  );
};


