import React from "react";
import "./Contact.scss";
import GradientHeading from "../../compounds/GradientHeading/GradientHeading";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import useIsElementInViewport from "./../../../Hooks/ElementInViewport";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [elementRef, isInViewport] = useIsElementInViewport();
  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("Required"),
      from_email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
          import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
          values,
          import.meta.env.VITE_EMAIL_JS_USER_ID
        )
        .then(
          (response) => {
            toast.success("Email sent successfully 🚀 !");
          },
          (error) => {
            toast.error("Email failed to send 😔. Please try again later.");
          }
        )
        .finally(() => {
          resetForm();
        });
    },
  });

  return (
    <section className="hello" ref={elementRef}>
      <GradientHeading
        heading="What's Next"
        number="05."
        animationClass={isInViewport}
      />
      <div className="form">
        <div className="msg" data-aos="fade-down">
          <h2>Get in Touch</h2>
          <p>
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          <input
            type="text"
            placeholder="Your Good Name"
            className="field"
            name="from_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.from_name}
          />
          {formik.touched.inputName && formik.errors.inputName ? (
            <div className="error">{formik.errors.inputName}</div>
          ) : null}

          <input
            type="email"
            placeholder="Your Email Please"
            className="field"
            name="from_email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.from_email}
          />
          {formik.touched.inputEmail && formik.errors.inputEmail ? (
            <div className="error">{formik.errors.inputEmail}</div>
          ) : null}

          <textarea
            placeholder="Your Message"
            cols="30"
            rows="10"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          {formik.touched.inputMsg && formik.errors.inputMsg ? (
            <div className="error">{formik.errors.inputMsg}</div>
          ) : null}

          <button
            type="submit"
            className="btn inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            नमस्ते !
          </button>
        </form>
      </div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#0a192f",
              color: "white",
            },
          },
          error: {
            style: {
              background: "#0a192f",
              color: "white",
            },
          },
        }}
      />
    </section>
  );
};

export default Contact;
