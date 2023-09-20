import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between item-center p-6 sticky top-0 shadow-transparent shadow-lg ">
      <div className="text-2xl font-bold opacity-70 text-red-700">
        <a href="#hero">Sornniyom.A</a>
      </div>
      <ul className="flex gap-4 items-center">
        <li className="font-bold opacity-70 hover:transition-all  hover:text-orange-700 hover:border-b-gray-400 border-2 duration-500 ">
          <a href="#hero">HOME</a>
        </li>
        <li className="font-bold opacity-70 hover:transition-all  hover:text-orange-700 hover:border-b-gray-400 border-2 duration-500 ">
          <a href="#">PROJECTS</a>
        </li>
        <li className="font-bold opacity-70 hover:transition-all  hover:text-orange-700 hover:border-b-gray-400 border-2 duration-500 ">
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
