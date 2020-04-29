import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const db = require("../../db.json");

const TopNav = () => {
  return (
    <ul className="topnav">
      <li>
        <a href={db.openSource.link} target="__blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <FontAwesomeIcon
          icon={faMoon}
          onClick={() => {
            let darkMode = localStorage.getItem("dark-mode");
            const theme = document.querySelector(".Main");

            const enableDark = () => {
              theme.classList.add("dark-mode");
              localStorage.setItem("darkMode", "enabled");
            };

            const disableDark = () => {
              theme.classList.remove("dark-mode");
              localStorage.setItem("darkMode", null);
            };

            darkMode = localStorage.getItem("darkMode");
            if (darkMode !== "enabled") {
              enableDark();
            } else {
              disableDark();
            }
          }}
        />
      </li>
    </ul>
  );
};

export default TopNav;
