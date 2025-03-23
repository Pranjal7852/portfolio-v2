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
          jobTitle="Software Engineer"
          jobOrg="DPS, UnternehmerTUM GmbH"
          jobOrgLink="https://www.digitalproductschool.io/"
          startTime="February 2025"
          endTime="Present"
          discription={[
        " Built a digital marketplace for BMW’s recycled plastics by developing a Next.js frontend and a Python FastAPI backend to list materials and fetch real-time prices."," Automated price retrieval by implementing an AI agent with LangChain to gather rates from trusted sources."," Improved scalability and maintainability by leveraging TypeScript, React Query, and TailwindCSS in the frontend.",
          ]}
        />
        <WorkCard
          left={false}
          jobTitle="Full Stack Engineer (Full Time)"
          jobOrg="The Homework App"
          jobOrgLink="https://www.thehomeworkapp.ai/"
          startTime="May 2023"
          endTime="January 2025"
          discription={[
           " Architected and developed MathAI, an educational application using Next.js and GraphQL, delivering personalised learning experiences to 10,000 + students",
"Engineered assessment components leveraging LLM frameworks(LangChain and Groq API), increasing assessment accuracy by 35 %", "Led migration from admin - secret to RBAC authentication system, implementing refresh and session tokens for enhanced security.", "Delivered critical features under tight one-week deadlines, impacting user satisfaction metrics by 28%"," Implemented OpenTelemetry for application monitoring, reducing production issue response times by 40%",
         ]}
        />
        <WorkCard
          left={true}
          jobTitle="Backend Engineer (Contract)"
          jobOrg="Circlone"
          jobOrgLink="https://www.thecirclone.com/"
          startTime="Aug 2022"
          endTime="Jan 2023"
          discription={[
           " Designed and implemented scalable backend systems from scratch usin Node.js, achieving 99.9 % uptime using PM2 process manager.", "Created serverless API architectures using Azure, reducing operational costs by 35 % compared to traditional deployments", "Implemented comprehensive security measures that prevented 100 % of unauthorized access attempts", "Designed database schema using PostgreSQL with Prisma ORM, optimizing data retrieval performance by 45%", "Utilized React Query for efficient frontend data fetching, decreasing load times by 30%",
            ]}
        />
        <WorkCard
          left={false}
          jobTitle="Front-end Engineer (Intern)"
          jobOrg="Shipsy"
          jobOrgLink="https://shipsy.io/"
          startTime="May 2022"
          endTime="July 2022"
          discription={[
          "Developed cross - browser, responsive application features using ReactJS, ThreeJS, and GSAP, improving user engagement metrics by 25 %","Implemented Stripe API payment processing using React Hooks, increasing payment conversion rates by 15 %","Built real - time chat functionality with WebSockets, enhancing customer satisfaction scores by 32%", "Worked closely with the back-end team to ensure seamless integration of backend services with the user interface.", "Improved Core Web Vitals metrics (LCP, FID, CLS) to meet Google's recommended thresholds, enhancing user experience and boosting SEO rankings by 15 positions"  ]}
        />
        <WorkCard
          left={true}
          jobTitle="Volunteer"
          jobOrg="Team .EXE"
          jobOrgLink="https://www.linkedin.com/company/exe-nith?originalSubdomain=in"
          startTime="Jan 2021"
          endTime="May 2024"
          discription={[
            "At Team .exe, we believe in the power of collaboration and knowledge-sharing. ",
            "We organize regular meetups, coding competitions, and workshops to create an inclusive environment that fosters personal and professional growth.",
            "We've not only helped others develop their coding skills but have also formed lifelong friendships and built a strong support network within our college.",
          ]}
        />
        <WorkCard
          left={false}
          jobTitle="Web Developer (Volunteer)"
          jobOrg="Pixonoids"
          jobOrgLink="https://github.com/pixonoids"
          startTime="Jan 2021"
          endTime="May 2024"
          discription={[
            "Contributing to the design and development of the annual technical and cultural website.", "Collaborated with a team of UX designers and deployment teams to create a website showcasing the best of the college's events.", "Contributed to overcoming technical issues and creative differences throughout the project, ensuring smooth execution.", "Played a key role in the successful launch of the website, highlighting the college's technical and cultural events.",

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
