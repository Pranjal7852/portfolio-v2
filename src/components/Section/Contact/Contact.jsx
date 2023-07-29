import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="hello">
      <div className="head">
        <span className="green-line">05.</span>
        <h4>What's Next</h4>
        <div className="line"></div>
      </div>
      <div className="form">
        <div className="msg" data-aos="fade-down">
          <h2>Get in Touch</h2>
          <p>
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
        </div>

        <form
          action="/"
          data-aos="zoom-in"
          method="POST"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <input
            type="text"
            placeholder="Your Good Name"
            class="field"
            name="inputName"
          />
          <input
            type="email"
            placeholder="Your Email Please"
            class="field"
            name="inputEmail"
          />
          <textarea
            placeholder="Your Message "
            id=""
            cols="30"
            rows="10"
            name="inputMsg"
          ></textarea>
          <button type="submit" class="btn">
            Hello Pranjal
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;