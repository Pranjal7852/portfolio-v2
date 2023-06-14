import React from "react";

const NavItem = (props) => {
  return (
    <li>
      <a href={props.href}>
        <span>{props.number}</span>
        {props.title}
      </a>
    </li>
  );
};

export default NavItem;
