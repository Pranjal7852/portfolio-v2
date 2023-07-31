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
        <h2>Full Stack Web Developer By Passion.</h2>
      </div>
      <div data-aos="fade-up" data-aos-delay="1500">
        <p>
          I'm a Full Stack Developer with a serious passion for UI effects,
          animations and creating intuitive user experiences with highly
          scalable backend.
        </p>
      </div>
      <div className="btn inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <a href="#hello-p">Say Hello</a>
      </div>
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
