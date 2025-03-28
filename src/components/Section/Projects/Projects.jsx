import React from "react";
import "./Projects.scss";
import pixo from "/assets/images/ss/pixo.png";
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
          alignmentDirection={false}
          projectImage="/assets/images/ss/nimbus22.png"
          typeOfProject="Annual Technical Festival NITH"
          projectTitle="Nimbus 2022"
          projectDiscription="The Event Communication & Engagement Platform is a web application designed to efficiently manage large-scale email and SMS communication during fest days, ensuring seamless interaction with registered participants. The platform leverages Amazon Simple Email Service (SES) to dispatch over 100,000 emails efficiently and integrates Twilio for real-time SMS notifications.

To enhance user experience, the application utilizes Framer Motion and GSAP for smooth UI animations, creating an engaging interface. Additionally, Three.js is incorporated for 3D model rendering, improving the overall aesthetics and interactivity of the platform."
          projectTechUsed={[
            "React.JS",
            "Three.JS",
            "Node.JS",
            "MongoDB",
          ]}
          projectDeployedLink="https://nimbus2k22.netlify.app/"
          projectRepoLink="https://github.com/pixonoids/Nimbus-2k22"
        />

        <ProjectCard
          alignmentDirection={true}
          projectImage="/assets/images/ss/sourcingXpress.png"
          typeOfProject="Freelance SaaS Project"
          projectTitle="SourcingnXpress"
          projectDiscription="SourcingXPress enhances the hiring experience by enabling real-time profile tracking with WebSockets and React Query, ensuring job seekers receive instant updates on recruiter actions. It optimizes platform efficiency with a scalable MongoDB and Redis-backed architecture, handling high traffic seamlessly.
Employers benefit from free job postings and candidate downloads, secured through NextAuth and Firebase-based authentication."
          projectTechUsed={[
            "Next.JS",
            "Shadcn UI",
            "Node.JS",
            "PostgreSQL",
            "Express.JS",
          ]}
          projectDeployedLink="https://www.sourcingxpress.com/"
          projectRepoLink="https://www.sourcingxpress.com/"
        />
        <ProjectCard
          alignmentDirection={false}
          projectImage="/assets/images/ss/codingclassroom.png"
          typeOfProject="MLH X DevSqad Hackathon Winner"
          projectTitle="CodingClassroom"
          projectDiscription="A full-stack application facilitating real-time code collaboration. Users can join rooms, each equipped with a code editor. Utilised Socket.IO for room creation and real-time editor interaction, React.js for the frontend, Node.js with Express for the backend socket server, and CodeMirror as the integrated development environment."
          projectTechUsed={[
            "React.JS",
            "Sockets.IO",
            "Node.JS",
            "CodingMirror",
          ]}
          projectDeployedLink="https://codingclassroomv2.netlify.app/"
          projectRepoLink="https://github.com/Pranjal7852/CodingClassroom"
        />
        <ProjectCard
          alignmentDirection={true}
          projectImage="/assets/images/ss/portfolio.png"
          typeOfProject="Personal Prtfolio Website"
          projectTitle="Portfolio Website"
          projectDiscription=" Developed and deployed a full stack web application for the annual technical fest, NIMBUS NITH. Implemented efficient client-side rendering with local storage caching for enhanced performance and user experience. Utilised Framer Motion and GSAP for smooth UI animations and effects, enhancing the app's aesthetics. Created a robust Restful API to manage and store teams' event data on a PostgreSQL server hosted on Digital Ocean."
          projectTechUsed={[
            "React.JS",
            "Framer",
            "Node.JS",
            "Tailwind CSS",
            "Email.JS",
          ]}
          projectDeployedLink="https://nimbus2k22.netlify.app/"
          projectRepoLink="https://github.com/pixonoids/Nimbus-2k22"
        />
        <ProjectCard
          alignmentDirection={false}
          projectImage="/assets/images/ss/hillffair.png"
          typeOfProject="NIT Hamirpur Cultural Fest Website"
          projectTitle="Hill'ffair Mirage: Oasis of Mystique"
          projectDiscription="A full-stack application facilitating real-time code collaboration. Users can join rooms, each equipped with a code editor. Utilised Socket.IO for room creation and real-time editor interaction, React.js for the frontend, Node.js with Express for the backend socket server, and CodeMirror as the integrated development environment."
          projectTechUsed={[
            "React.JS",
            "Sockets.IO",
            "Node.JS",
            "CodingMirror",
          ]}
          projectDeployedLink="https://hillffair2k22nith.netlify.app/"
          projectRepoLink="https://github.com/pixonoids/Hillfair-2022-Mirage"
        />
        <ProjectCard
          alignmentDirection={true}
          projectImage="/assets/images/ss/interviews.png"
          typeOfProject="Pixonoids Club Website"
          projectTitle="Pixonoids Interviews Website"
          projectDiscription=" Developed and deployed a full stack web application for the annual technical fest, NIMBUS NITH. Implemented efficient client-side rendering with local storage caching for enhanced performance and user experience. Utilised Framer Motion and GSAP for smooth UI animations and effects, enhancing the app's aesthetics. Created a robust Restful API to manage and store teams' event data on a PostgreSQL server hosted on Digital Ocean."
          projectTechUsed={[
            "React.JS",
            "Three.JS",
            "Google Firestore",
            "SASS",
            "React Query",
          ]}
          projectDeployedLink="https://pixonoids-interviews.netlify.app/"
          projectRepoLink="https://github.com/pixonoids/Interview-Website-2021"
        />
        <h4 className="tech tagline">&lt;/Explore more my Works&gt;</h4>

        <div className="portfolio-container">
          {/* Project 1 */}
          <div className="project">
            <img src="/assets/images/ss/cover.png" alt="Project 1" />
            <p>NITH Alumni Cell</p>
          </div>

          {/* Project 2 */}
          <div className="project">
            <img src="/assets/images/ss/cred.png" alt="Project 2" />
            <p>Cred DrumKIt</p>
          </div>

          {/* Project 3 */}
          <div className="project">
            <img src="/assets/images/ss/logger.png" alt="Project 3" />
            <p>Logger</p>
          </div>

          {/* Project 4 */}
          <div className="project">
            <img src="/assets/images/ss/spacex.png" alt="Project 4" />
            <p>SpaceX Clone</p>
          </div>

          {/* Project 5 */}
          <div className="project">
            <img src="/assets/images/ss/time.png" alt="Project 5" />
            <p>Time SVG animation</p>
          </div>

          {/* Project 6 */}
          <div className="project">
            <img src="/assets/images/ss/pixo.png" alt="Project 6" />
            <p>Pixonoids farewell website</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
