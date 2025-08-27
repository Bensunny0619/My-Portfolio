import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // smooth scroll function
  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); // close mobile menu after click
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 bg-white dark:bg-gray-900 shadow p-4 flex items-center justify-between z-30 transition-colors duration-300"
    >
      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        My Portfolio
      </h1>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span
          className={`block h-1 w-6 bg-gray-800 dark:bg-gray-200 rounded transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-gray-800 dark:bg-gray-200 rounded my-1 transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-gray-800 dark:bg-gray-200 rounded transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Links */}
      <ul
        className={`flex-col md:flex-row md:flex gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-900 shadow md:shadow-none transition-all duration-300 ${
          open ? "flex" : "hidden"
        }`}
      >
        <li>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className="block px-4 py-2 hover:text-blue-500 font-semibold text-gray-800 dark:text-gray-200"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "#projects")}
            className="block px-4 py-2 hover:text-blue-500 font-semibold text-gray-800 dark:text-gray-200"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="block px-4 py-2 hover:text-blue-500 font-semibold text-gray-800 dark:text-gray-200"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1Gpayb_fE_BzACUCiJ0CJuBwOUxTydLY0GDzCKaF63Xc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 hover:text-blue-500 font-semibold text-gray-800 dark:text-gray-200"
          >
            Resume
          </a>
        </li>
        {/* Dark mode toggle */}
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
