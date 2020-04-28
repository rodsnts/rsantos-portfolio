import React from "react";

const db = require("../../db.json");

const Social = () => {
  return (
    <aside className="social">
      <ul className="social-links">
        <li>
          <a href={db.social.linkedIn} className="hover" target="__blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={db.social.GitHub} className="hover" target="__blank">
            GitHub
          </a>
        </li>
        <li>
          <a href={db.social.Twitter} className="hover" target="__blank">
            Twitter
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Social;
