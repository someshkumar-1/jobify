import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";

export default function MobileSideBar() {
  const { showSideBar, toggleSideBar } = useAppContext();
  return (
    <div className="relative block md:hidden">
      <div
        className={
          showSideBar
            ? "absolute top-[-80px] left-0 w-screen h-screen  py-10  bg-gray-100 flex flex-col text-lg  items-center z-[99] opacity-100"
            : "z-[-1] opacity-0"
        }
      >
        <div className="absolute top-5 left-5 text-red-500">
          <FaTimes size={20} onClick={toggleSideBar} />
        </div>
        <h1 className="font-bold text-3xl text-green-600 tracking-wider">
          Jobify
        </h1>
        <NavLinks toggleSideBar={toggleSideBar} />
      </div>
    </div>
  );
}
