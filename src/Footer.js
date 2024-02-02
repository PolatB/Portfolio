import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="text-white md:flex items-center justify-around text-center bg-black py-3">
      <h3>Designed and Developed by Burak Polat</h3>
      <h3>Copyright © {year} BP</h3>
      <ul className="flex items-center md:justify-around justify-center space-x-8 ">
        <li>
          <a href="https://github.com/PolatB" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/burakpolat0"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/burakpolat09"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
