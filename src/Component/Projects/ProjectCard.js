import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const ProjectCard = ({ image, title, description, githubLink, demoLink }) => {
  return (
    <div
      className="rounded-lg overflow-hidden border-2 border-bondi-300 hover:shadow-bondi-400
     hover:border-bondi-400 hover:scale-110 hover:shadow-lg transition-all duration-500 shadow-lg
      shadow-bondi-600 flex flex-col justify-center items-center "
    >
      <div className="px-6 py-4">
        <img src={image} alt={title} className="w-full h-50 object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-white md:text-xl text-lg font-bold mb-2 text-center">
          {title}
        </h3>
        <p className="text-white md:text-lg text-sm pb-4">{description}</p>
        <div className="flex justify-around">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-bondi-600 hover:bg-bondi-400 text-white font-bold md:py-2 py-0 md:px-4 px-1 rounded flex items-center">
              <FaGithub />
              &nbsp; GitHub
            </button>
          </a>
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-bondi-600 hover:bg-bondi-400 text-white font-bold md:py-2 py-0 md:px-4 px-1 rounded flex items-center">
                <CgWebsite />
                &nbsp; Demo
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
