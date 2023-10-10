import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-white justify-between items-baseline py-6 px-12 sticky top-0 shadow-stone-400 shadow-lg z-[100] ">
      <div className="text-4xl font-bold opacity-70 hover:transition-all hover:scale-110  text-black hover:text-opacity-70 duration-250 ">
        <a href="/">Sornniyom.A</a>
      </div>
      <ul className="flex gap-10 text-2xl">
        <li className="font-bold hover:transition-all hover:scale-125  text-black hover:text-opacity-70 duration-250 ">
          <a href="/">HOME</a>
        </li>
        {/* <li className="font-bold hover:transition-all hover:text-lg text-black hover:text-opacity-70 duration-250 ">
          <a href="#">PROJECTS</a>
        </li> */}
        <li className="font-bold  hover:transition-all  hover:scale-125 text-black hover:text-opacity-70 duration-250 ">
          {/* <a href="#">CONTACT</a> */}

          <a href="/contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
