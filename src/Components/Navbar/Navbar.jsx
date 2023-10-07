import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex bg-white justify-between item-center p-6 sticky top-0 shadow-transparent shadow-lg ">
      <div className="text-2xl font-bold opacity-70 text-black">
        <a href="#">Sornniyom.A</a>
      </div>
      <ul className="flex gap-8 items-center">
        <li className="font-bold hover:transition-all hover:text-lg  text-black hover:text-opacity-70 duration-250 ">
          <Link to="/">HOME</Link>
        </li>
        <li className="font-bold hover:transition-all hover:text-lg text-black hover:text-opacity-70 duration-250 ">
          <a href="#">PROJECTS</a>
        </li>
        <li className="font-bold  hover:transition-all  hover:text-lg text-black hover:text-opacity-70 duration-250 ">
          {/* <a href="#">CONTACT</a> */}

          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
