import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            Shane Butler
            <ul className="hidden md:flex gap-x-6 text-black">
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/architectural-interiors">
                  <p>Interiors</p>
                </Link>
              </li>
              <li>
                <Link href="/point-of-sale">
                  <p>Point of Sale</p>
                </Link>
              </li>
              <li>
                <Link href="/portraiture">
                  <p>People</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;