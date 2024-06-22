import { NavLink } from "react-router-dom";
import links from "../utils/links";

export default function NavLinks({ toggleSideBar }) {
  return (
    <div className="flex flex-col mt-4 text-gray-600 gap-3">
      {links.map((link) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 text-green-600 font-bold transition-all"
              : "text-gray-600 flex gap-3 items-center"
          }
          to={link.path}
          onClick={toggleSideBar}
          key={link.id}
        >
          <span>
            <link.icon />
          </span>
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}
