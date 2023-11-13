import React from "react";
import "./Blog.scss";
import GradientHeading from "../../compounds/GradientHeading/GradientHeading";
import useIsElementInViewport from "./../../../Hooks/ElementInViewport";

const Blog = () => {
  const [elementRef, isInViewport] = useIsElementInViewport();
  return (
    <section className="blog" ref={elementRef}>
      <GradientHeading
        heading="Keeping Secrets On The Internet"
        number="04."
        animationClass={isInViewport}
      />
      <div className="construction">
        <h3>Section Under Construction 🏗️</h3>
      </div>
    </section>
  );
};

export default Blog;
