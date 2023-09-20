import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between item-center p-6 sticky top-0 shadow-black shadow-sm ">
      <div className="text-xl">Sornniyom.A</div>
      <ul className="flex gap-5">
        <li>HOME</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
