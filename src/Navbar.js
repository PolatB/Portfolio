import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";

const Navbar = () => {
  const [navColor, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const navbarStyles = {
    default: {
      background: "transparent",
      boxShadow: "none",
      backdropFilter: "none",
    },
    scrolled: {
      background: "#1b1a2ea9",
      boxShadow: "0px 10px 10px 0px rgba(9, 5, 29, 0.171)",
      backdropFilter: "blur(15px)",
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ease-in-out ${
        navColor ? "bg-navbar-scrolled" : "bg-transparent"
      }`}
      style={{ ...navbarStyles[navColor ? "scrolled" : "default"] }}
    >
      <div className="container mx-auto flex items-center md:justify-between justify-center">
        <img
          src="/img/logo3.png"
          alt="logo"
          className="w-26 h-16 pl-12 py-0 my-0 md:block hidden"
        />
        <ul className="flex md:space-x-8 space-x-2 py-2 px-2 md:mx-8 md:text-lg text-sm">
          <li>
            <Link
              to="/"
              className="text-white md:px-3 md:py-2 px-2 py-1 rounded hover:bg-bondi-400 flex items-center"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white md:px-3 md:py-2 px-2 py-1 rounded hover:bg-bondi-400 flex items-center"
            >
              <GoPerson className="mr-2" />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-white md:px-3 md:py-2 px-2 py-1 rounded hover:bg-bondi-400 flex items-center"
            >
              <FaProjectDiagram className="mr-2" />
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="text-white md:px-3 md:py-2 px-2 py-1 rounded hover:bg-bondi-400 flex items-center"
            >
              <RiPagesLine className="mr-2" />
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
