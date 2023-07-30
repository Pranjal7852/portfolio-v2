import React from "react";
import "./About.scss";
import GradientHeading from "../../compounds/GradientHeading/GradientHeading";

const About = () => {
  return (
    <section id="about-p" className="about">
      <GradientHeading heading="About Me" number="01." />
      <div className="contain">
        <div className="photo" data-aos="fade-left">
          {" "}
        </div>

        <div className="red" data-aos="zoom-out">
          <p>
            I'm an undergraduate in B-Tech Electronics and Communication
            Engineering from <span className="green-word">NIT, Hamirpur</span>{" "}
            with current grade point of 9.51. Currently I'm working on{" "}
            <span className="green-word">MERN</span> stack but also want to
            explore my potential in Machine Learning and Artificial
            Intelligence.
          </p>

          <p>
            {" "}
            I am also an Executive member of Team{" "}
            <span className="green-word">Pixonoids</span>, which is the leading
            Club for Web Development in our College.
          </p>

          <p>
            I am open to different ideas, and by mixing my skills into them, I
            am looking forward to making my mark in the industry as a developer.
          </p>
        </div>
      </div>

      <div className=" tech tagline">
        <h4> &lt;/TechStack&gt;</h4>
        <div className="table-container">
          <div>
            <table class="min-w-full text-left text-sm font-light">
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
                  <td class="whitespace-nowrap px-6 py-4" rowSpan={2}>
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
                  <td class="whitespace-nowrap px-6 py-4" rowSpan={2}>
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
      </div>
      <div className="certificate tagline">
        <h4> &lt;/Certifications&gt;</h4>
        <div className="table-container">
          <table class="min-w-full text-left text-sm font-light">
            <tbody>
              <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td class="whitespace-nowrap px-6 py-4">Domain</td>
                <td class="whitespace-nowrap px-6 py-4 font-medium">Name</td>
                <td class="whitespace-nowrap px-6 py-4">Provider</td>
                <td class="whitespace-nowrap px-6 py-4">Link</td>
              </tr>
              <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td class="whitespace-nowrap px-6 py-4">Python</td>
                <td class="whitespace-nowrap px-6 py-4">SQL</td>
                <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
                <td class="whitespace-nowrap px-6 py-4">&nbsp;</td>
              </tr>

              <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td class="whitespace-nowrap px-6 py-4" rowSpan={2}>
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
        </div>
      </div>
    </section>
  );
};

export default About;
