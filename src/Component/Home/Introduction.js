import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

function Introduction() {
  return (
    <>
      <div className="md:flex md:justify-between ">
        <div>
          <h2 className="md:text-4xl text-xl font-bold mb-8 text-white pl-20">
            LET ME <span className="text-bondi-400">INTRODUCE</span> MYSELF
          </h2>
          <p className="text-white md:text-xl text-sm">
            I discovered my love for coding in university, driven by a passion
            for creating.
            <br />
            <br />
            Although it began as a hobby, life as an English teacher made me
            realize my heart belongs to coding.
            <br />
            <br />
            My field of Interest is building new{" "}
            <span className="text-bondi-400">
              Web Technologies and Products.
            </span>
            <br />
            <br />I am fluent in{" "}
            <span className="text-bondi-400">JavaScript</span> and I mostly
            apply my passion for developing products with{" "}
            <span className="text-bondi-400">React.js</span>
            <br />
            <br />I also love using{" "}
            <span className="text-bondi-400">React packages</span> for my
            projects.
          </p>
        </div>
        <div
          className="m-4 w-64 h-64 rounded-full hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-xl hover:border-10 transition-all duration-500 mx-auto"
        >
          <Tilt>
            <img
              src="/img/profile-pic2.png"
              alt="profile-avatar"
              className="object-cover"
            />
          </Tilt>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-20">
        <div className="text-center">
          <h3 className="text-white font-bold mb-4 md:text-3xl text-xl">
            FIND ME ON
          </h3>
          <h5 className="text-white md:text-xl text-sm">
            Feel free to <span className="text-bondi-400">connect</span> with me
          </h5>
        </div>
        <div className="text-center pt-2">
          <ul className="flex items-center justify-center space-x-4 pt-0">
            <li
              className="bg-white rounded-full pr-1 py-1 w-8 h-8 justify-center hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-xl transition-all duration-500"
            >
              <a
                href="https://github.com/PolatB"
                target="_blank"
                rel="noreferrer"
                className="relative inline-block w-5 h-5 text-center text-xl line-height-2 leading-4 rounded-full mx-auto"
              >
                <FaGithub className="text-bondi-600 text-2xl" />
              </a>
            </li>
            <li
              className="bg-white rounded-full pr-1 py-1 w-8 h-8 justify-center hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-xl transition-all duration-500"
            >
              <a
                href="https://www.linkedin.com/in/burakpolat0"
                target="_blank"
                rel="noreferrer"
                className="relative inline-block w-5 h-5 text-center text-xl line-height-2 leading-4 rounded-full mx-auto"
              >
                <FaLinkedin className="text-bondi-600 text-2xl" />
              </a>
            </li>
            <li
              className="bg-white rounded-full pr-1 py-1 w-8 h-8 justify-center hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-xl transition-all duration-500 "
            >
              <a
                href="https://www.instagram.com/burakpolat09"
                target="_blank"
                rel="noreferrer"
                className="relative inline-block w-5 h-5 text-center text-xl line-height-2 leading-4 rounded-full mx-auto"
              >
                <FaInstagram className=" text-bondi-600 text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Introduction;
