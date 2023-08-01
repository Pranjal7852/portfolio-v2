import React from "react";
import "./Projects.scss";
import pixo from "../../../assets/images/ss/pixo.png";
import ProjectCard from "../../compounds/ProjectCard/ProjectCard";
import GradientHeading from "../../compounds/GradientHeading/GradientHeading";
import useIsElementInViewport from "./../../../Hooks/ElementInViewport";

const Projects = () => {
  const [elementRef, isInViewport] = useIsElementInViewport();
  return (
    <section id="work-p" className="work" ref={elementRef}>
      <GradientHeading
        heading="Some Things I've Built"
        number="03."
        animationClass={isInViewport}
      />
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
