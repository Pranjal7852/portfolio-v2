import React from "react";
import "./About.scss";
import GradientHeading from "../../compounds/GradientHeading/GradientHeading";
import { useState, useRef, useEffect } from "react";
import useIsElementInViewport from "./../../../Hooks/ElementInViewport";
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
            I am Pranjal Goyal, currently a final year undergraduate student
            pursuing Electronics and Communication Engineering at the{" "}
            <span className="green-word">
              National Institute of Technology, Hamirpur
            </span>
            , India. Originally from New Delhi, I possess a keen interest in
            exploring new technology and tackling real-world challenges. I
            specialize in full stack web development using MERN stack.
            Additionally, I participate in hackathons regularly and have
            achieved a few victories. Currently, I am looking for new roles
            based on my skill set As a full stack developer with over a year of
            hands-on experience. One notable project includes creating websites
            for technical and cultural festivals using cutting-edge frameworks
            like React JS and Three JS. I also possess experience with APIs,
            having worked with event data and images, and have developed an
            Admin Panel using ExpressJs and MongoDb Atlas.
            <span className="green-word">NIT, Hamirpur</span> with current grade
          </p>

          <p>
            I have developed a strong foundation in various programming
            languages, including JavaScript (ES6), TypeScript, HTML, CSS, and
            NODEJS. My expertise extends to an array of web technologies, such
            as React JS, Redux, Node JS, CLI NPM, Material UI, Next JS, MongoDB,
            and PostgreSQL. Proficient with essential tools like GIT, Command
            Line, LaTeX, Docker, AWS, Netlify, REST API, and GraphQL, I am
            well-equipped to tackle complex development challenges.
          </p>

          <p>
            Throughout my career, I have successfully designed and deployed
            diverse web applications encompassing both front-end and back-end
            development.
          </p>
        </div>
      </div>

      <div className=" tech tagline">
        <h4> &lt;/TechStack&gt;</h4>
        <div className="table-container tab-desktop">
          <div>
            <table class="text-left text-l font-light">
              <tbody>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    class="whitespace-nowrap px-6 py-4 font-medium"
                    rowSpan={2}
                  >
                    Languages
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    Javascript(ES5/ES6)
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">Typescript</td>
                  <td class="whitespace-nowrap px-6 py-4">HTML/CSS</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">Python</td>
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>

                  <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4" colSpan={4}></td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    class="whitespace-nowrap px-6 py-4 font-medium"
                    rowSpan={2}
                  >
                    Frameworks
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>
                  <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>
                  <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>{" "}
          <div>
            <table class="min-w-full text-left text-sm font-light">
              <tbody>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    class="whitespace-nowrap px-6 py-4 font-medium"
                    rowSpan={2}
                  >
                    Technologies
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    Javascript(ES5/ES6)
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">Typescript</td>
                  <td class="whitespace-nowrap px-6 py-4">HTML/CSS</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">Python</td>
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>

                  <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4" colSpan={4}></td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    class="whitespace-nowrap px-6 py-4 font-medium"
                    rowSpan={2}
                  >
                    Tools
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">ReactJS</td>
                  <td class="whitespace-nowrap px-6 py-4">NextJs</td>
                  <td class="whitespace-nowrap px-6 py-4">Flask</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">Flask</td>
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>
                  <td class="whitespace-nowrap px-6 py-4">Azure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="table-container tab-mobile">
          <div>
            <table class="text-center text-l font-light">
              <tbody>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    class="whitespace-nowrap px-6 py-4 font-medium"
                    colSpan={2}
                  >
                    Languages
                  </td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">Python</td>
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">
                    Javascript(ES5/ES6)
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">Typescript</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">HTML/CSS</td>
                  <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4" colSpan={2}></td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    class="whitespace-nowrap px-6 py-4 font-medium"
                    colSpan={2}
                  >
                    Frameworks
                  </td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>

                  <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>

                  <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>{" "}
          <div>
            <table class="text-center text-l font-light">
              <tbody>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    class="whitespace-nowrap px-6 py-4 font-medium"
                    colSpan={2}
                  >
                    Technologies
                  </td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">Python</td>
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">
                    Javascript(ES5/ES6)
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">Typescript</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">HTML/CSS</td>
                  <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4" colSpan={2}></td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    class="whitespace-nowrap px-6 py-4 font-medium"
                    colSpan={2}
                  >
                    Tools
                  </td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>

                  <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>

                  <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="certificate tagline">
        <h4> &lt;/Certifications&gt;</h4>
        <div className="table-container">
          <table class="min-w-full text-left text-sm font-light">
            <tbody>
              <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td class="whitespace-nowrap px-6 py-4 cell-mobile">Domain</td>
                <td class="whitespace-nowrap px-6 py-4 font-medium">Name</td>
                <td class="whitespace-nowrap px-6 py-4 cell-mobile">
                  Provider
                </td>
                <td class="whitespace-nowrap px-6 py-4">Link</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td class="whitespace-nowrap px-6 py-4 cell-mobile">Python</td>
                <td class="whitespace-nowrap px-6 py-4">SQL</td>
                <td class="whitespace-nowrap px-6 py-4 cell-mobile">&nbsp;</td>
                <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
              </tr>

              <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td class="whitespace-nowrap px-6 py-4 cell-mobile" rowSpan={2}>
                  Frameworks
                </td>
                <td class="whitespace-nowrap px-6 py-4">SQL</td>
                <td class="whitespace-nowrap px-6 py-4 cell-mobile">SQL</td>
                <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td class="whitespace-nowrap px-6 py-4">SQL</td>
                <td class="whitespace-nowrap px-6 py-4 cell-mobile">SQL</td>
                <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default About;
