import React from "react";
import { motion } from "framer-motion";
import "./Intro.scss";

const Intro = () => {
  return (
    <section className="intro">
      <div className="green-line" data-aos="fade-up" data-aos-delay="300">
        <h4> Hi, my name is</h4>
      </div>

      <div data-aos="fade-up" data-aos-delay="800">
        <h1>pranjal goyal.</h1>
      </div>
      <div data-aos="fade-up" data-aos-delay="1100">
        <h2>Web Developer By Passion.</h2>
      </div>
      <div data-aos="fade-up" data-aos-delay="1500">
        <p>
          I'm a Full Stack Developer with a serious passion for UI effects,
          animations and creating intuitive user experiences with highly
          scalable backend.
        </p>
      </div>
      <button className="btn">
        <a href="#hello-p">Say Hello</a>
      </button>
      <i className="fab fa-react icon"></i>
      <i className="fab fa-chrome icon"></i>
      <i className="far fa-file-code icon"></i>
      <i className="fab fa-css3 icon"></i>
      <i className="fas fa-wifi icon"></i>
      <i className="fas fa-at icon"></i>
    </section>
  );
};

export default Intro;
