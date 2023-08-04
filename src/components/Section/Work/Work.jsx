import React from "react";
import "./Work.scss";
import WorkCard from "../../compounds/WorkCard/WorkCard";
import GradientHeading from "../../compounds/GradientHeading/GradientHeading";
import useIsElementInViewport from "./../../../Hooks/ElementInViewport";

const Work = () => {
  const [elementRef, isInViewport] = useIsElementInViewport();
  return (
    <section id="expe-p" className="expe" ref={elementRef}>
      <GradientHeading
        heading="Where I've Worked"
        number="02."
        animationClass={isInViewport}
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
