import React from "react";
import "./About.scss";
import GradientHeading from "../../compounds/GradientHeading/GradientHeading";
import useIsElementInViewport from "./../../../Hooks/ElementInViewport";
import { IoLogoJavascript } from "react-icons/io5";
const About = () => {
  const [elementRef, isInViewport] = useIsElementInViewport();

  return (
    <section id="about-p" className="about" ref={elementRef}>
      <GradientHeading
        heading="About Me"
        number="01."
        animationClass={isInViewport}
      />
      <div className="contain">
        <div className="photo" data-aos="fade-left"></div>

        <div className="red" data-aos="zoom-out">
          <p>

            I’m Pranjal Goyal, a Full Stack Software Engineer passionate about building <span className="green-word">
              scalable
            </span>,<span className="green-word"> high-performing applications</span>. With over a year of hands-on experience, I specialize in TypeScript, React, Node.js, and cloud platforms like AWS and GCP, bringing a deep understanding of modern web technologies and backend systems. My expertise spans across<span className="green-word"> frontend and backend development, cloud deployment, </span>and <span className="green-word">system optimization</span>.
          </p>
          <br></br>
          <p>
            I have built engaging user experiences using React.js, Next.js, Redux, TailwindCSS, and Framer Motion, while ensuring backend robustness with Node.js, Express.js, GraphQL, PostgreSQL, MongoDB, and Prisma ORM. I also have experience deploying and managing scalable applications using Docker, Kubernetes, AWS EC2, S3, Lambda, Firebase, and CI/CD pipelines with GitHub Actions and Azure DevOps. Implementing OpenTelemetry and monitoring tools has been a key part of my workflow to enhance application performance and minimize downtime.
          </p>
          <br></br>
          <p>
            Beyond work, I actively contribute to open-source projects, participate in hackathons, and stay up-to-date with the latest advancements in technology. I thrive on solving real-world challenges and enjoy taking ownership of projects from ideation to deployment. I am always looking for opportunities to collaborate, innovate, and build impactful solutions.
          </p>
        </div>
      </div>

      <div className=" tech tagline">
        <h3> &lt;/TechStack&gt;</h3>
        <div className="table-container tab-desktop">
          <div>
            <table className="text-left font-light">
              <tbody>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    className="whitespace-nowrap px-6 py-4 font-medium"
                    rowSpan={4}
                  >
                    Front-end
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    Javascript(ES5/ES6)
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Typescript</td>
                  <td className="whitespace-nowrap px-6 py-4">ReactJs</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">ReduxJs</td>
                  <td className="whitespace-nowrap px-6 py-4">NextJs</td>

                  <td className="whitespace-nowrap px-6 py-4">HTML5</td>
                  
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">CSS/SAAS</td>
                  <td className="whitespace-nowrap px-6 py-4">Tailwind CSS</td>

                  <td className="whitespace-nowrap px-6 py-4">Framer Motion</td>

                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">GSAP</td>
                  <td className="whitespace-nowrap px-6 py-4">Lodash</td>

                  <td className="whitespace-nowrap px-6 py-4">ThreeJs</td>

                </tr>
                
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4" colSpan={4}></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    className="whitespace-nowrap px-6 py-4 font-medium"
                    rowSpan={3}
                  >
                    Back-End
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">NodeJs</td>
                  <td className="whitespace-nowrap px-6 py-4">ExpressJs</td>
                  <td className="whitespace-nowrap px-6 py-4">NestJs</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Python</td>
                  <td className="whitespace-nowrap px-6 py-4">Flask</td>
                  <td className="whitespace-nowrap px-6 py-4">FAST API</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Web Sockets</td>
                  <td className="whitespace-nowrap px-6 py-4">Hasura</td>
                  <td className="whitespace-nowrap px-6 py-4">GraphQL</td>
                </tr>
              </tbody>
            </table>
          </div>{" "}
          <div>
            <table className="min-w-full text-left font-light">
              <tbody>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    className="whitespace-nowrap px-6 py-4 font-medium"
                    rowSpan={2}
                  >
                    Cloud & DevOps
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Docker</td>
                  <td className="whitespace-nowrap px-6 py-4">AWS (EC2, S3, Lamda, CodeBuild)</td>
                  <td className="whitespace-nowrap px-6 py-4">Google Cloud Platform</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Google Firebase</td>
                  <td className="whitespace-nowrap px-6 py-4">Hasura</td>
                  <td className="whitespace-nowrap px-6 py-4">CI/CD Github Actions</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4" colSpan={4}></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    className="whitespace-nowrap px-6 py-4 font-medium"
                    rowSpan={2}
                  >
                    Databases
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">PostgreSQL</td>
                  <td className="whitespace-nowrap px-6 py-4">Prisma ORM</td>
                  <td className="whitespace-nowrap px-6 py-4">MongoDB</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Mongoose</td>
                  <td className="whitespace-nowrap px-6 py-4">Redis</td>
                  <td className="whitespace-nowrap px-6 py-4">SQlite</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4" colSpan={4}></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    className="whitespace-nowrap px-6 py-4 font-medium"
                    rowSpan={2}
                  >
                    Tools
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Git</td>
                  <td className="whitespace-nowrap px-6 py-4">JWT</td>
                  <td className="whitespace-nowrap px-6 py-4">OAuth</td>
                  
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">NPM</td>
                  <td className="whitespace-nowrap px-6 py-4">Vite</td>
                  <td className="whitespace-nowrap px-6 py-4">Shell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="table-container tab-mobile">
          <div>
            <table className="text-center text-l font-light">
              <tbody>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    className="whitespace-nowrap px-6 py-4 font-medium"
                    colSpan={2}
                  >
                    Front-End
                  </td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">
                    Javascript(ES5/ES6)
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Typescript</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">ReactJs</td>
                  <td className="whitespace-nowrap px-6 py-4">ReduxJs</td>
                </tr>

                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">HTML5</td>
                  <td className="whitespace-nowrap px-6 py-4">CSS/SAAS</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4" colSpan={2}></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    className="whitespace-nowrap px-6 py-4 font-medium"
                    colSpan={2}
                  >
                    Back-End
                  </td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">NodeJs</td>

                  <td className="whitespace-nowrap px-6 py-4">ExpressJs</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Python</td>

                  <td className="whitespace-nowrap px-6 py-4">Flask</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Web Sockets</td>

                  <td className="whitespace-nowrap px-6 py-4">GraphQL</td>
                </tr>
              </tbody>
            </table>
          </div>{" "}
          <div>
            <table className="text-center text-l font-light">
              <tbody>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    className="whitespace-nowrap px-6 py-4 font-medium"
                    colSpan={2}
                  >
                    Cloud & DevOps
                  </td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Docker</td>
                  <td className="whitespace-nowrap px-6 py-4">AWS (EC2,S3,Lamda)</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">GCP</td>
                  <td className="whitespace-nowrap px-6 py-4">Firebase</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Hasura</td>
                  <td className="whitespace-nowrap px-6 py-4">Github Actions</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4" colSpan={2}></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    className="whitespace-nowrap px-6 py-4 font-medium"
                    colSpan={2}
                  >
                    Databases
                  </td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">PostgreSQL</td>

                  <td className="whitespace-nowrap px-6 py-4">MongoDB</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Prisma ORM</td>

                  <td className="whitespace-nowrap px-6 py-4">Mongoose</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Redis</td>

                  <td className="whitespace-nowrap px-6 py-4">SQlite</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    className="whitespace-nowrap px-6 py-4 font-medium"
                    colSpan={2}
                  >
                    Tools
                  </td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Git</td>

                  <td className="whitespace-nowrap px-6 py-4">JWT</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">OAuth</td>

                  <td className="whitespace-nowrap px-6 py-4">NPM</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Vite</td>

                  <td className="whitespace-nowrap px-6 py-4">Shell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
