import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMediumM,
  FaDiscord,
} from "react-icons/fa";
import "./NavbarLeft.scss";

const NavbarLeft = () => {
  return (
    <div className="header-l left-ul">
      <ul>
        <li>
          <a href="https://github.com/Pranjal7852" target="blank">
            <FaGithub size="1.5rem" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pranjal-goyal-42a7a55b/"
            target="blank"
          >
            <FaLinkedinIn size="1.5rem" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/goyalpranjal_/" target="blank">
            <FaInstagram size="1.5rem" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/PRANJALGOYAL6" target="blank">
            <FaTwitter size="1.5rem" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@goyalpranjal" target="blank">
            <FaMediumM size="1.5rem" />
          </a>
        </li>
        <li>
          <a
            href="https://discordapp.com/users/pranjal_goyal#3383"
            target="blank"
          >
            <FaDiscord size="1.5rem" />
          </a>
        </li>
      </ul>
      <div className="line-l"></div>
    </div>
  );
};

export default NavbarLeft;
