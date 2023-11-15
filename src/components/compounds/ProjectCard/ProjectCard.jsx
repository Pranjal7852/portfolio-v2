import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  alignmentDirection,
  projectImage,
  typeOfProject,
  projectTitle,
  projectDiscription,
  projectTechUsed,
  projectRepoLink,
  projectDeployedLink,
}) => {
  return (
    <div className={`card-ss ${alignmentDirection ? "right" : "left"}-ss`}>
      <div
        className="img-ss"
        data-aos={`fade-${!alignmentDirection ? "right" : "left"}`}
        style={{
          backgroundImage: `url(${projectImage})`,
        }}
      ></div>
      <div
        className={`card-main ${alignmentDirection ? "right" : "left"}-ss`}
        data-aos={`zoom-in-${!alignmentDirection ? "right" : "left"}`}
      >
        <div>
          <span className="green-line">{typeOfProject}</span>
        </div>
        <div>
          <h2>{projectTitle}</h2>
        </div>
        <div className="box-ss">
          <p style={{ textAlign: alignmentDirection ? "right" : "left" }}>
            {projectDiscription}
          </p>
        </div>
        <div className="code">
          <ul>
            {projectTechUsed.map((data) => {
              return <li>{data}</li>;
            })}
          </ul>
        </div>
        <div className="code">
          <ul>
            <li>
              <a href={projectRepoLink} target="blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href={projectDeployedLink} target="blank">
                <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
