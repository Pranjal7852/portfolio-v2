import React from "react";
import "./Work.scss";
import WorkCard from "../../compounds/WorkCard/WorkCard";
import GradientHeading from "../../compounds/GradientHeading/GradientHeading";

const Work = () => {
  return (
    <section id="expe-p" className="expe">
      <GradientHeading
        heading="Where I've worked"
        number="02."
      ></GradientHeading>
      <div className="content">
        <WorkCard
          id="1"
          left={true}
          jobTitle="Freelancer"
          jobOrg="`fivrr`"
          jobOrgLink="https://www.google.com/"
          startTime="Nov 2020"
          endTime="Present"
          discription={[
            "2",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.,odit?",
          ]}
        />
        <WorkCard
          left={false}
          jobTitle="Web Developer"
          jobOrg="Pixonoids"
          jobOrgLink="https://www.pixonoids.com/"
          startTime="Feb 2021"
          endTime="Present"
          discription={[
            "1",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.,odit?",
          ]}
        />
        <WorkCard
          left={true}
          jobTitle="Web Developer"
          jobOrg="Pixonoids"
          jobOrgLink="https://www.pixonoids.com/"
          startTime="Feb 2021"
          endTime="Present"
          discription={[
            "1",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.,odit?",
          ]}
        />
        <WorkCard
          left={false}
          jobTitle="Web Developer"
          jobOrg="Pixonoids"
          jobOrgLink="https://www.pixonoids.com/"
          startTime="Feb 2021"
          endTime="Present"
          discription={[
            "1",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.,odit?",
          ]}
        />
      </div>
    </section>
  );
};

export default Work;
