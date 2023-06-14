import React from "react";
import "./WorkCard.scss";

const WorkCard = ({
  left,
  jobTitle,
  jobOrg,
  jobOrgLink,
  startTime,
  endTime,
  discription,
}) => {
  return (
    <div
      className={`card ${left ? "left" : "right"}`}
      data-aos={`fade-${left ? "left" : "right"}`}
    >
      <h2>
        {jobTitle} @
        <span>
          <a href={jobOrgLink ? jobOrgLink : "/"}> &nbsp;{jobOrg}</a>
        </span>
      </h2>

      <h4 className="green-line">
        {startTime} - {endTime}
      </h4>
      <ul>
        {discription.map((data) => {
          return <li key={data.id}>{data}</li>;
        })}
      </ul>
    </div>
  );
};

export default WorkCard;
