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
                    rowSpan={2}
                  >
                    Languages
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    Javascript(ES5/ES6)
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Typescript</td>
                  <td className="whitespace-nowrap px-6 py-4">HTML</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Python</td>
                  <td className="whitespace-nowrap px-6 py-4">SQL</td>

                  <td className="whitespace-nowrap px-6 py-4">CSS</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4" colSpan={4}></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    className="whitespace-nowrap px-6 py-4 font-medium"
                    rowSpan={2}
                  >
                    Frameworks/Libraries
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">React.JS</td>
                  <td className="whitespace-nowrap px-6 py-4">Redux</td>
                  <td className="whitespace-nowrap px-6 py-4">Next.JS</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Prisma ORM</td>
                  <td className="whitespace-nowrap px-6 py-4">Nest.JS</td>
                  <td className="whitespace-nowrap px-6 py-4">&nbsp;</td>
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
                    Technologies
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Node.JS</td>
                  <td className="whitespace-nowrap px-6 py-4">Express.JS</td>
                  <td className="whitespace-nowrap px-6 py-4">MongoDB</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">PostgreSQL</td>
                  <td className="whitespace-nowrap px-6 py-4">Web Sockets</td>
                  <td className="whitespace-nowrap px-6 py-4">Nginx</td>
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
                  <td className="whitespace-nowrap px-6 py-4">AWS</td>
                  <td className="whitespace-nowrap px-6 py-4">Docker</td>
                  <td className="whitespace-nowrap px-6 py-4">Git/Github</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Postman</td>
                  <td className="whitespace-nowrap px-6 py-4">Vite</td>
                  <td className="whitespace-nowrap px-6 py-4">Firebase</td>
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
                    Languages
                  </td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">
                    Javascript(ES5/ES6)
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Typescript</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Python</td>
                  <td className="whitespace-nowrap px-6 py-4">SQL</td>
                </tr>

                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">HTML</td>
                  <td className="whitespace-nowrap px-6 py-4">CSS</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4" colSpan={2}></td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    className="whitespace-nowrap px-6 py-4 font-medium"
                    colSpan={2}
                  >
                    Frameworks/Libraries
                  </td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">React.JS</td>

                  <td className="whitespace-nowrap px-6 py-4">Redux</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Next.JS</td>

                  <td className="whitespace-nowrap px-6 py-4">Nest.JS</td>
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
                    Technologies
                  </td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Node.JS</td>
                  <td className="whitespace-nowrap px-6 py-4">Express.JS</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">PostgreSQL</td>
                  <td className="whitespace-nowrap px-6 py-4">MongoDB</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Nginx</td>
                  <td className="whitespace-nowrap px-6 py-4">Web Sockets</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4" colSpan={2}></td>
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
                  <td className="whitespace-nowrap px-6 py-4">AWS</td>

                  <td className="whitespace-nowrap px-6 py-4">Docker</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Git/Github</td>

                  <td className="whitespace-nowrap px-6 py-4">Postman</td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4">Vite</td>

                  <td className="whitespace-nowrap px-6 py-4">Firebase</td>
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
