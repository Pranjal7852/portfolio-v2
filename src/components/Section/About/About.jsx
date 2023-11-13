import React from "react";
import "./About.scss";
import GradientHeading from "../../compounds/GradientHeading/GradientHeading";
import { useState, useRef, useEffect } from "react";
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
            I am Pranjal Goyal, currently a final year undergraduate student
            pursuing Electronics and Communication Engineering at the{" "}
            <span className="green-word">
              National Institute of Technology, Hamirpur
            </span>
            , India. Originally from New Delhi, I possess a keen interest in
            exploring new technology and tackling real-world challenges. I
            specialize in full stack web development using{" "}
            <span className="green-word">MERN</span> stack.
          </p>
          <br></br>
          <p>
            I have developed a strong foundation in various programming
            languages, including JavaScript (ES6), TypeScript, HTML, CSS, and
            Node.Js My expertise extends to an array of web technologies, such
            as React JS, Redux, Node JS, CLI NPM, Material UI, Next JS, MongoDB,
            and PostgreSQL.
          </p>
          <br></br>
          <p>
            Currently, I am looking for new roles based on my skill set as a
            full stack developer with over a year of hands-on experience. I also
            possess experience with APIs, having worked with event data and
            images, and have developed an Admin Panel using ExpressJs and
            MongoDb Atlas.Throughout my career, I have successfully designed and
            deployed diverse web applications encompassing both front-end and
            back-end development.
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
                  <td class="whitespace-nowrap px-6 py-4">HTML</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">Python</td>
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>

                  <td class="whitespace-nowrap px-6 py-4">CSS</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4" colSpan={4}></td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    class="whitespace-nowrap px-6 py-4 font-medium"
                    rowSpan={2}
                  >
                    Frameworks/Libraries
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">React.JS</td>
                  <td class="whitespace-nowrap px-6 py-4">Redux</td>
                  <td class="whitespace-nowrap px-6 py-4">Next.JS</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">Prisma ORM</td>
                  <td class="whitespace-nowrap px-6 py-4">Nest.JS</td>
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
                  <td class="whitespace-nowrap px-6 py-4">Node.JS</td>
                  <td class="whitespace-nowrap px-6 py-4">Express.JS</td>
                  <td class="whitespace-nowrap px-6 py-4">MongoDB</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">PostgreSQL</td>
                  <td class="whitespace-nowrap px-6 py-4">Web Sockets</td>
                  <td class="whitespace-nowrap px-6 py-4">Nginx</td>
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
                  <td class="whitespace-nowrap px-6 py-4">AWS</td>
                  <td class="whitespace-nowrap px-6 py-4">Docker</td>
                  <td class="whitespace-nowrap px-6 py-4">Git/Github</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">Postman</td>
                  <td class="whitespace-nowrap px-6 py-4">Vite</td>
                  <td class="whitespace-nowrap px-6 py-4">Firebase</td>
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
                  <td class="whitespace-nowrap px-6 py-4">
                    Javascript(ES5/ES6)
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">Typescript</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">Python</td>
                  <td class="whitespace-nowrap px-6 py-4">SQL</td>
                </tr>

                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">HTML</td>
                  <td class="whitespace-nowrap px-6 py-4">CSS</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4" colSpan={2}></td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td
                    class="whitespace-nowrap px-6 py-4 font-medium"
                    colSpan={2}
                  >
                    Frameworks/Libraries
                  </td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">React.JS</td>

                  <td class="whitespace-nowrap px-6 py-4">Redux</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">Next.JS</td>

                  <td class="whitespace-nowrap px-6 py-4">Nest.JS</td>
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
                  <td class="whitespace-nowrap px-6 py-4">Node.JS</td>
                  <td class="whitespace-nowrap px-6 py-4">Express.JS</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">PostgreSQL</td>
                  <td class="whitespace-nowrap px-6 py-4">MongoDB</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">Nginx</td>
                  <td class="whitespace-nowrap px-6 py-4">Web Sockets</td>
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
                  <td class="whitespace-nowrap px-6 py-4">AWS</td>

                  <td class="whitespace-nowrap px-6 py-4">Docker</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">Git/Github</td>

                  <td class="whitespace-nowrap px-6 py-4">Postman</td>
                </tr>
                <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td class="whitespace-nowrap px-6 py-4">Vite</td>

                  <td class="whitespace-nowrap px-6 py-4">Firebase</td>
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
