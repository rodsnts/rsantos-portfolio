import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
  return (
    <ul className="topnav">
      <li>
        <FontAwesomeIcon icon={faBars} />
      </li>
      <li>
        <FontAwesomeIcon icon={faSearch} />
      </li>
    </ul>
  );
};

export default TopNav;
