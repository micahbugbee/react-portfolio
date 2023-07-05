import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project w-full md:h-screen">
      <h1>{project.name}</h1>
      <div
        style={{ backgroundImage: `url(${project.image})` }}
        className="shadow-lg shadow-[#040c16] group rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
      >
        {/* Hover effect for images */}
        <div className="opacity-0 group-hover:opacity-100 ">
          <span className="text-2xl font bold text-white tracking-wider ">
          {project.name}
          </span>
          <div className="pt-8 text-center ">
            <a href={project.githubURL} target="_blank" rel="noreferrer">
              <button
              className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
              >
              Code
              </button>
            </a>
            {/* <a href="/" target="_blank" rel="noreferrer">
              <button
              className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
              >
              Demo
              </button>
            </a> */}
          </div>
        </div>
      </div>  
      <p className="project-content">
        <b>Technologies:</b> {project.skills}
      </p>
    </div>
  );
}

export default ProjectDisplay;
