import React from "react";

const Navbar = () => {
  return (
    <aside className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="rsantos.dev" className="active">
            About me
          </a>
        </li>
        <li className="nav-item">
          <a href="rsantos.dev">Blog</a>
        </li>
        <li className="nav-item">
          <a href="rsantos.dev">Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="rsantos.dev">Contact</a>
        </li>
      </ul>
    </aside>
  );
};

export default Navbar;
