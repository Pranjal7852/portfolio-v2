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
          jobTitle="Full Stack Developer"
          jobOrg="`Circlone`"
          jobOrgLink="crunchbase.com/organization/circlone"
          startTime="Aug 2023"
          endTime="Present"
          discription={[
            "Optimized web applications for maximum speed and scalability, improving overall performance. Pioneered the creation of reusable code and libraries, reducing development time by 15% and enabling more efficient future project execution.",
            "Collaborated closely with front-end developers to seamlessly integrate user-facing elements with server-side logic, improving overall website performance and functionality.",
            "Implemented real-time chat functionality using web sockets, enriching the app’s interactivity and user experience.",
            "Engineered a custom backend function for image scanning and ranking, enhancing the app’s functionality and user engagement.",
          ]}
        />
        <WorkCard
          left={false}
          jobTitle="Software Engineer Intern"
          jobOrg="Code Clause"
          jobOrgLink="https://drive.google.com/file/d/1jU9HlgsvxvUJQynCeWGygmmY8JOVq1_u/view?usp=drive_link"
          startTime="May 2023"
          endTime="June 2023"
          discription={[
            "Built Dashboard for the user to edit and overview details with React and used Material UI for development and testing of reusable components.",
            "Implemented authentication using OAuth 2.0.",
            "Incorporated Redux for global state management and a Cart System.",
            "Implemented RESTful APIs using Node.js and Express, ensuring efficient communication between the application and backend server.",
          ]}
        />
        <WorkCard
          left={true}
          jobTitle="Frontend Developer"
          jobOrg="Shipsy"
          jobOrgLink="https://drive.google.com/file/d/1G3QPp-1O1HWCSnAGL3h2unaSlbAQ9eec/view?usp=drive_link"
          startTime="May 2022"
          endTime="July 2022"
          discription={[
            "Developed an Email Automation Flow Builder from scratch which helps the customers to automate the process of sending emails to their subscribers when scheduled and complete a series of steps till it reaches the end of the automation.",
            "Secured application routes with JWT for seamless user authentication, bolstering data protection and user privacy.",
            "Implemented the logic of accepting payments through RazorPay API.",
            "Designed and implemented data storage solutions using MongoDB, ensuring reliable and scalable data management while meeting business requirements.",
          ]}
        />
        <WorkCard
          left={false}
          jobTitle="Vice President"
          jobOrg="Hill'ffair NITH"
          jobOrgLink="https://www.instagram.com/hillffair_nith/"
          startTime="Aug 2023"
          endTime="Present"
          discription={[
            "Led a dynamic, 2-tier team of 50 dedicated students, orchestrating the conception and execution of captivating pro shows that captivated a crowd of 10,000 attendees.",
            "Demonstrated exceptional negotiation and partnership-building skills by securing sponsorships worth INR 1 million from prestigious institutions including top Fintech startups and esteemed Government PSUs like NTPC, Indian Oil, and SJVN",
            "Achieved a remarkable footfall of 10,000 enthusiastic students and expertly managed a budget of INR 5 million.",
            "n addition to my festival management role, I contributed significantly to Team Pixonoids, leveraging media and marketing strategies to expand the festival's outreach. This resulted in increased visibility, higher attendance, and augmented funding for the festival's success.",
          ]}
        />
        <WorkCard
          left={true}
          jobTitle="Volunteer"
          jobOrg="Team .EXE"
          jobOrgLink="https://www.linkedin.com/company/exe-nith?originalSubdomain=in"
          startTime="Jan 2021"
          endTime="Present"
          discription={[
            "At Team .exe, we believe in the power of collaboration and knowledge-sharing. ",
            "We organize regular meetups, coding competitions, and workshops to create an inclusive environment that fosters personal and professional growth.",
            "We've not only helped others develop their coding skills but have also formed lifelong friendships and built a strong support network within our college.",
          ]}
        />
        <WorkCard
          left={false}
          jobTitle="Web Developer"
          jobOrg="Pixonoids"
          jobOrgLink="https://github.com/pixonoids"
          startTime="Jan 2021"
          endTime="Present"
          discription={[
            "Volunteering for the Pixonoids club in NITH was an unforgettable experience for me. As a member of the team responsible for designing and developing the annual technical and cultural website",
            "I worked closely with a group of talented graphic designers and DevOps developers to create a website that would showcase the best of our college's technical and cultural events.",
            "The project was a challenging one, and there were times when we encountered technical issues and creative differences.",
          ]}
        />
      </div>
    </section>
  );
};

export default Work;
