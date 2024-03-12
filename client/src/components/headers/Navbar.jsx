import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Instructors", route: "/Instructors" },
  { name: "Classes", route: "/Classes" },
];

function Navbar() {
  const [navBg, setNavBg] = useState("bg-[#15151580]");
  const user = false;

  return (
    <nav>
      <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
        <div className="px-4 py-4 flex items-center justify-between">
          {/* {LOGO} */}
          <div>
            <h1 className="text-2xl1 inline-flex gap-3 items-center font-bold">
              Wave water Polo{" "}
              <img src="/Logo.png" alt="" className="w-20 h-30" />
            </h1>
            <p className="font-bold text-[13px] tracking-[8px]">
              Quick Explore
            </p>
          </div>
          {/* mobail menu icon  */}

          {/* navigation Links */}
          <div className="hidden md:block text-black dark:text-white">
            <div className="flex">
              <ul className="ml-10 flex items-center space-x-4 pr-4">
                {navLinks.map((link) => (
                  <li key={link.route}>
                    <NavLink
                      to={link.route}
                      className={({ isActive }) =>
                        `font-bold ${
                          isActive
                            ? "text-secondary"
                            : ` ${
                                navBg.includes("bg-transparent")
                                  ? "text-white"
                                  : "text-black dark:text-white"
                              }`
                        } hover:text-secondary`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}

                {/* useres */}
                <li><NavLink to="/login" className={({ isActive }) =>
                        `font-bold ${
                          isActive
                            ? "text-secondary"
                            : ` ${
                                navBg.includes("bg-transparent")
                                  ? "text-white"
                                  : "text-black dark:text-white"
                              }`
                        } hover:text-secondary`
                      }>Login </NavLink>
                      </li>
                      <li>dark/light</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
