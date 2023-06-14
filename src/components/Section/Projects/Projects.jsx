import React from "react";
import "./Projects.scss";
import pixo from "../../../assets/images/ss/pixo.png";
import ProjectCard from "../../compounds/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section id="work-p" className="work">
      <div className="head">
        <span className="green-line">03.</span>
        <h4>Some Things I've Built</h4>
        <div className="line"></div>
      </div>
      <div className="gallery">
        <ProjectCard
          alignmentDirection={true}
          projectImage={pixo}
          typeOfProject="Club Project"
          projectTitle="Pixonoids Farewell Website"
          projectDiscription="Lorem ipsum dolor sit Laborum reiciendis mwkdnljn wdelwjndw
              lwkednlwjdn edwldneljd wlkendlewquam quas enim? Vitae dolorem d
              kewnd iwedlioluptates obcaecati, debitis quam?"
          projectTechUsed={["SVG", "HTML", "AOS.JS", "SCSS"]}
          projectDeployedLink="https://pranjal7852.github.io/farewell2021/"
          projectRepoLink="https://github.com/Pranjal7852/farewell2021"
        />
        <ProjectCard
          alignmentDirection={false}
          projectImage={pixo}
          typeOfProject="Club Project"
          projectTitle="Pixonoids Farewell Website"
          projectDiscription="Lorem ipsum dolor sit Laborum reiciendis mwkdnljn wdelwjndw
              lwkednlwjdn edwldneljd wlkendlewquam quas enim? Vitae dolorem d
              kewnd iwedlioluptates obcaecati, debitis quam?"
          projectTechUsed={["SVG", "HTML", "AOS.JS", "SCSS"]}
          projectDeployedLink="https://pranjal7852.github.io/farewell2021/"
          projectRepoLink="https://github.com/Pranjal7852/farewell2021"
        />
      </div>
    </section>
  );
};

export default Projects;
