// import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="py-4 px-10 h-20 w-full flex justify-between items-center shadow-md">
        <div className="flex gap-16 items-center">
          <div className="text-green-600 font-bold text-2xl sm:text-4xl tracking-wider">
            Jobify
          </div>
          <ul className="hidden sm:flex gap-6 text-gray-600 text-sm">
            <li>Home</li>
            <li>Find jobs</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="hidden sm:flex gap-6 text-gray-600 text-sm">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">
            Login
          </button>
          <button className="border-2 border-green-600 px-4 py-2 rounded-md">
            Register Now
          </button>
        </div>
        <div className="sm:hidden">
          {open ? (
            <IoClose
              size={25}
              className="text-gray-600"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <IoIosMenu
              size={25}
              className="text-gray-600"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Hamburger Menu */}
      {open && (
        <ul className="absolute sm:hidden right-0 top-20 w-[200px] py-8 text-sm h-screen shadow-xl flex flex-col gap-4 items-center text-gray-600">
          <li>Home</li>
          <li>Find jobs</li>
          <li>About</li>
          <li>Contact</li>
          <li className="bg-green-600 px-4 py-2 text-white rounded-md">
            Login
          </li>
          <li className="bg-green-600 px-4 py-2 text-white rounded-md">
            Register
          </li>
        </ul>
      )}
    </div>
  );
}

{
  /* <li>
<Link to={'/about'}>About</Link>
</li>
<li>
<Link to={'/contact'}>Contact</Link>
</li> */
}
