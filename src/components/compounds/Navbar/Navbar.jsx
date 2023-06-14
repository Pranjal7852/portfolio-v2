import React from "react";
import websiteLogo from "../../../assets/images/webxsx.png";
import "./Navbar.scss";
import NavItem from "../../molecules/NavItem/NavItem";

const Navbar = () => {
  return (
    <div>
      <header>
        <button
          className="menu"
          onClick="menu.classList.toggle('opened');menu.setAttribute('aria-expanded', menu.classList.contains('opened'))"
          aria-label="Main Menu"
        >
          <svg width="60" height="40" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        <div className="logo">
          <a href="./index.html">
            <img src={websiteLogo} alt="" />
          </a>
        </div>
        <ul>
          <NavItem href="#about-p" number="01." title="About" />
          <NavItem href="#expe-p" number="02." title="Experience" />
          <NavItem href="#work-p" number="03." title="Blog" />
          <NavItem href="#work-p" number="04." title="Work" />
          <NavItem href="#hello-p" number="05." title="Contact" />

          <li>
            <button className="btn">
              <a class="" href="./pdfs/cv.pdf" download="Pranjal CV">
                Resume
              </a>
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
