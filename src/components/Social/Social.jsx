import React from "react";

const db = require("../../db.json");

const Social = () => {
  return (
    <aside className="social">
      <ul className="social-links">
        <li>
          <a href={db.social.linkedIn} target="__blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={db.social.GitHub} target="__blank">
            GitHub
          </a>
        </li>
        <li>
          <a href={db.social.Twitter} target="__blank">
            Twitter
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Social;
