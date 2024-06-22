import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import { useState } from "react";

export default function Navbar() {
  const { toggleSideBar, user, logoutUser } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <div className="sticky top-0 bg-white h-20 w-full flex justify-between z-[50] items-center py-2 px-4 sm:py-4 sm:px-10 shadow-md bg-white/75 backdrop-blur-lg transition-all">
      <div>
        <button className="md:hidden" onClick={toggleSideBar}>
          <HiOutlineMenuAlt2 size={30} color="green" />
        </button>
        <h1 className="hidden md:block font-bold text-2xl sm:text-4xl text-green-600 tracking-wider">
        Jobify
      </h1>
      </div>
      <h1 className="md:hidden font-bold text-2xl sm:text-4xl text-green-600 tracking-wider">
        Jobify
      </h1>
      <h1 className="hidden md:block font-semibold text-gray-600 text-2xl">
        Dashboard
      </h1>
      <div className="text-xs sm:text-sm">
        <button
          className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded-md"
          onClick={() => setShowLogout(!showLogout)}
        >
          <FaUserCircle size={15} />
          {user.name}
          <FaCaretDown />
        </button>
        <div
          className={
            showLogout
              ? "block bg-green-500 text-white text-center mt-2 rounded-md py-1 cursor-pointer"
              : "hidden"
          }
        >
          <button onClick={logoutUser}>Logout</button>
        </div>
      </div>
    </div>
  );
}
