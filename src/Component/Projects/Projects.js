import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";

function Projects() {
  return (
    <div className="container mx-auto px-20 py-16 h-auto">
      <h1 className="text-white md:text-4xl text-3xl font-bold text-center mb-8">
        My <span className="text-bondi-400">Projects</span>
      </h1>
      <h2 className="text-white md:text-xl text-lg text-center mb-12">
        Here are a few projects I worked on recently:
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {ProjectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
