import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const db = require("../../db.json");

const TopNav = () => {
  return (
    <ul className="topnav">
      <li>
        <a href={db.openSource.link}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <FontAwesomeIcon icon={faMoon} />
      </li>
    </ul>
  );
};

export default TopNav;
