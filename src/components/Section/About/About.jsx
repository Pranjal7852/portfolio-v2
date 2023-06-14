import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about-p" class="about">
      <div class="head">
        <span class="green-line">01.</span>
        <h4>About Me</h4>
        <div class="line"></div>
      </div>
      <div class="contain">
        <div class="photo" data-aos="fade-left">
          {" "}
        </div>

        <div class="red" data-aos="zoom-out">
          <p>
            I'm an undergraduate in B-Tech Electronics and Communication
            Engineering from <span class="green-word">NIT, Hamirpur</span> with
            current grade point of 9.51. Currently I'm working on{" "}
            <span class="green-word">MERN</span> stack but also want to explore
            my potential in Machine Learning and Artificial Intelligence.
          </p>

          <p>
            {" "}
            I am also an Executive member of Team{" "}
            <span class="green-word">Pixonoids</span>, which is the leading Club
            for Web Development in our College.
          </p>

          <p>
            I am open to different ideas, and by mixing my skills into them, I
            am looking forward to making my mark in the industry as a developer.
          </p>
        </div>
      </div>

      <i class="fab fa-edge icon"></i>
      <i class="fas fa-globe-americas icon"></i>
      <i class="fas fa-hdd icon"></i>

      <div class="tagline">
        <h4> &lt;/TechStack&gt;</h4>
      </div>
    </section>
  );
};

export default About;
