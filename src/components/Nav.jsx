import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Logo from "./Logo";

function Nav() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  function handleDropdownClick(menu) {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  }

  return (
    <>
      <nav className="flex justify-between max-md:hidden shadow-md rounded-full md:w-3/4 lg:w-1/2 py-6 px-12 mx-auto">
        <Logo />
        <ul className="flex gap-8">
          <li className="nav-link flex items-center gap-1">
            <a href="#">Product</a>
            <ChevronDown
              onClick={() => handleDropdownClick("product")}
              className={`transition-transform duration-300 ${activeDropdown === "product" ? "rotate-180" : ""} hover:cursor-pointer`}
            />
          </li>
          <li className="nav-link flex items-center gap-1">
            <a href="#">Getting started</a>
            <ChevronDown
              onClick={() => handleDropdownClick("gettingStarted")}
              className={`transition-transform duration-300 ${activeDropdown === "gettingStarted" ? "rotate-180" : ""} hover:cursor-pointer`}
            />
          </li>
          <li className="nav-link flex items-center gap-1">
            <a href="#">Company</a>
            <ChevronDown
              onClick={() => handleDropdownClick("company")}
              className={`transition-transform duration-300 ${activeDropdown === "company" ? "rotate-180" : ""} hover:cursor-pointer`}
            />
          </li>
          <li>
            <a href="#" className="font-medium">Login</a>
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <div className="flex flex-col gap-2.5 md:hidden absolute right-4">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
}

export default Nav;
