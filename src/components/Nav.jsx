import { ChevronDown } from "lucide-react";
import Logo from './Logo'

function Nav() {
  return (
    <nav className="flex justify-between shadow-md rounded-full w-1/2 py-6 px-12 mx-auto">
      <Logo />
      <ul className="flex gap-8">
        <li className="nav-link">
          <a href="#">Product</a>
          <ChevronDown />
        </li>
        <li className="nav-link">
          <a href="#">Getting started</a>
          <ChevronDown />
        </li>
        <li className="nav-link">
          <a href="#">Company</a>
          <ChevronDown />
        </li>
        <li>
          <a href="#" className="font-medium">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
