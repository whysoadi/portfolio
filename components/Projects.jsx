import React from "react";
import Image from "next/image";
import cryptocoin from "../public/assets/projects/cryptocoin.png";
import netflix from "../public/assets/projects/netflix.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Crypto coin" backgroundImg={cryptocoin} Url="https://64f980d716177c49752545fa--ubiquitous-cuchufli-d45539.netlify.app/" />
          <ProjectItem title="Netflix2.0" backgroundImg={netflix} Url="https://netflix20-98131.firebaseapp.com/" />
          <ProjectItem title="Crypto coin" backgroundImg={cryptocoin} Url="/" />
          <ProjectItem title="Crypto coin" backgroundImg={cryptocoin} Url="/" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
