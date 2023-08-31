import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20">
      <Link to="/">
        <h1 className="font-bold mt-4 text-gray-900">
          Shane Butler - Architectural Photography
        </h1>
      </Link>
      <ul className="hidden md:flex gap-x-6 text-black">
        <li>
          <Link to="/architectural-interiors">
            <p>Interiors</p>
          </Link>
        </li>
        <li>
          <Link to="/point-of-sale">
            <p>Point of Sale</p>
          </Link>
        </li>
        <li>
          <Link to="/portraiture">
            <p>People</p>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <p>About</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
