import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-white justify-between item-center p-6 sticky top-0 shadow-transparent shadow-lg ">
      <div className="text-2xl font-bold opacity-70 text-black">
        <a href="#">Sornniyom.A</a>
      </div>
      <ul className="flex gap-8 items-center">
        <li className="font-bold hover:transition-all hover:text-lg  text-black hover:text-opacity-70 duration-250 ">
          <a href="/">HOME</a>
        </li>
        <li className="font-bold hover:transition-all hover:text-lg text-black hover:text-opacity-70 duration-250 ">
          <a href="#">PROJECTS</a>
        </li>
        <li className="font-bold  hover:transition-all  hover:text-lg text-black hover:text-opacity-70 duration-250 ">
          {/* <a href="#">CONTACT</a> */}

          <a href="/contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
