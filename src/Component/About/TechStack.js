import React from "react";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { DiJavascript1, DiGit, DiReact } from "react-icons/di";
import { FaBootstrap, FaPython, FaWindows } from "react-icons/fa";
import { SiTailwindcss, SiVisualstudiocode, SiVercel } from "react-icons/si";

function TechStack() {
  return (
    <div className="text-center md:text-left text-white">
      <h2 className="text-center md:text-3xl text-xl font-bold mb-8">
        Proffessional <span className="text-bondi-400">Skillset</span>
      </h2>
      <div className="container">
        <ul className="flex flex-wrap items-center justify-center w-full my-4 mb-8">
          <li
            className="lg:mx-10 mx-4 lg:px-10 border-bondi-300 border-2 hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-lg transition-all duration-500"
          >
            <TiHtml5 className="md:text-8xl text-5xl" />
          </li>
          <li
            className="lg:mx-10 mx-4 lg:px-10 border-bondi-300 border-2 hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-lg transition-all duration-500"
          >
            <TiCss3 className="md:text-8xl text-5xl" />
          </li>
          <li
            className="lg:mx-10 mx-4 lg:px-10 border-bondi-300 border-2 hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-lg transition-all duration-500"
          >
            <DiJavascript1 className="md:text-8xl text-5xl" />
          </li>
          <li
            className="lg:mx-10 mx-4 lg:px-10 border-bondi-300 border-2 hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-lg transition-all duration-500"
          >
            <DiGit className="md:text-8xl text-5xl" />
          </li>
        </ul>
        <ul className="flex flex-wrap items-center justify-center w-full my-4 mb-8">
          <li
            className="lg:mx-10 mx-4 lg:px-10 border-bondi-300 border-2 hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-lg transition-all duration-500"
          >
            <DiReact className="md:text-8xl text-5xl" />
          </li>
          <li
            className="lg:mx-10 mx-4 lg:px-10 border-bondi-300 border-2 hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-lg transition-all duration-500"
          >
            <FaBootstrap className="md:text-8xl text-5xl" />
          </li>
          <li
            className="lg:mx-10 mx-4 lg:px-10 border-bondi-300 border-2 hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-lg transition-all duration-500"
          >
            <SiTailwindcss className="md:text-8xl text-5xl" />
          </li>
          <li
            className="lg:mx-10 mx-4 lg:px-10 border-bondi-300 border-2 hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-lg transition-all duration-500"
          >
            <FaPython className="md:text-8xl text-5xl" />
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-center md:text-3xl text-xl font-bold mb-8">
          <span className="text-bondi-400">Tools</span> I use
        </h2>
        <div className="container">
          <ul className="flex flex-wrap items-center justify-center w-full my-4 mb-8">
            <li
              className="lg:mx-10 mx-4 lg:px-10 border-bondi-300 border-2 hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-lg transition-all duration-500"
            >
              <FaWindows className="md:text-8xl text-5xl" />
            </li>
            <li
              className="lg:mx-10 mx-4 lg:px-10 border-bondi-300 border-2 hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-lg transition-all duration-500"
            >
              <SiVisualstudiocode className="md:text-8xl text-5xl" />
            </li>
            <li
              className="lg:mx-10 mx-4 lg:px-10 border-bondi-300 border-2 hover:shadow-bondi-600
             hover:border-bondi-600 hover:scale-110 hover:shadow-lg transition-all duration-500"
            >
              <SiVercel className="md:text-8xl text-5xl" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
