import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMediumM,
} from "react-icons/fa";
import "./NavbarLeft.scss";

const NavbarLeft = () => {
  return (
    <div className="header-l left-ul">
      <ul>
        <li>
          <a href="https://github.com/Pranjal7852" target="blank">
            <FaGithub size="1.7rem" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pranjal-goyal-42a7a55b/"
            target="blank"
          >
            <FaLinkedinIn size="1.7rem" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/goelpranjal/" target="blank">
            <FaInstagram size="1.7rem" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/PRANJALGOYAL6" target="blank">
            <FaTwitter size="1.7rem" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/PRANJALGOYAL6" target="blank">
            <FaMediumM size="1.7rem" />
          </a>
        </li>
      </ul>
      <div class="line-l"></div>
    </div>
  );
};

export default NavbarLeft;
