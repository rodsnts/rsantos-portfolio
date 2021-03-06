import React from "react";

const Navbar = () => {
  return (
    <aside className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="active hover">
            About me
          </a>
        </li>
          {/*<li className="nav-item">
          <a href="/blog" className="hover">
            Blog
            </a>
        </li>*/}
        <li className="nav-item">
          <a href="portfolio" className="hover">
            Portfolio
          </a>
        </li>
          {/*<li className="nav-item">
          <a href="/contact" className="hover">
            Contact
          </a>
        </li>*/}
      </ul>
    </aside>
  );
};

export default Navbar;
