import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow p-4 flex items-center justify-between relative z-20">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span className={`block h-1 w-6 bg-gray-800 rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block h-1 w-6 bg-gray-800 rounded my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
        <span className={`block h-1 w-6 bg-gray-800 rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>
      {/* Links */}
      <ul className={`flex-col md:flex-row md:flex gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none transition-all duration-300 ${open ? "flex" : "hidden"}`}>
        <li><a href="#about" className="block px-4 py-2 hover:text-blue-500 font-semibold">About</a></li>
        <li><a href="#projects" className="block px-4 py-2 hover:text-blue-500 font-semibold">Projects</a></li>
        <li><a href="#contact" className="block px-4 py-2 hover:text-blue-500 font-semibold">Contact</a></li>
        <li>
          <a
            href="https://docs.google.com/document/d/1Gpayb_fE_BzACUCiJ0CJuBwOUxTydLY0GDzCKaF63Xc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 hover:text-blue-500 font-semibold"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;